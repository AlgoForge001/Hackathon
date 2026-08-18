import { fetchAmazonProducts } from "./connectors/amazonConnector.js";
import { fetchFlipkartProducts } from "./connectors/flipkartConnector.js";
import { fetchMyntraProducts } from "./connectors/myntraConnector.js";
import {
  summarizeReviews,
  classifySentiment,
  scoreBestOverall,
  generateWhyBuy,
  generateUpgradeReasons,
} from "./aiService.js";
import { getCache, setCache } from "../middleware/cacheMiddleware.js";

// Map platform names to their connector functions
const PLATFORM_CONNECTORS = {
  amazon: fetchAmazonProducts,
  flipkart: fetchFlipkartProducts,
  myntra: fetchMyntraProducts,
};

// ─── MAIN SEARCH ─────────────────────────────────────────────────────────────
/**
 * Aggregates products from all platforms, enriches with AI, and returns ranked results.
 * @param {Object} params
 * @param {string}   params.query      - search keyword(s)
 * @param {string}   params.category   - "electronics" | "footwear" | "fashion" | "home" | ""
 * @param {number}   params.minPrice   - minimum price in INR
 * @param {number}   params.maxPrice   - maximum price in INR
 * @param {string[]} params.platforms  - ["amazon","flipkart","myntra"] or [] for all
 * @param {string}   params.sortBy     - "price_asc" | "price_desc" | "rating" | "discount" | "relevance"
 * @returns {Object} { count, results: [EnrichedProduct], bestOverallId }
 */
export async function searchProducts({
  query = "",
  category = "",
  minPrice = 0,
  maxPrice = Infinity,
  platforms = [],
  sortBy = "relevance",
}) {
  // Build a deterministic cache key
  const cacheKey = `search:${query}:${category}:${minPrice}:${maxPrice}:${(platforms || []).sort().join(",")}:${sortBy}`;
  const cached = getCache(cacheKey);
  if (cached) {
    console.log(`📦 Cache hit: ${cacheKey}`);
    return cached;
  }

  const filterParams = { query, category, minPrice, maxPrice };

  // Determine which platforms to query
  const activePlatforms =
    platforms && platforms.length > 0
      ? platforms.filter((p) => PLATFORM_CONNECTORS[p])
      : Object.keys(PLATFORM_CONNECTORS);

  // ── Step 1: Fan out to all platform connectors in parallel ────────────────
  const fetchPromises = activePlatforms.map((platform) =>
    PLATFORM_CONNECTORS[platform](filterParams).catch((err) => {
      console.error(`Connector error [${platform}]:`, err.message);
      return []; // Never let one platform failure kill the whole search
    })
  );

  const platformResults = await Promise.all(fetchPromises);
  let allProducts = platformResults.flat();

  if (allProducts.length === 0) {
    return { count: 0, results: [], bestOverallId: null };
  }

  // ── Step 2: Enrich each product with AI in parallel ───────────────────────
  const enrichedProducts = await Promise.all(
    allProducts.map(async (product) => {
      const [reviewSummary, sentiment] = await Promise.all([
        summarizeReviews(product.reviews, product.title),
        classifySentiment(product.reviews, product.rating),
      ]);
      return {
        ...product,
        review_summary: reviewSummary,
        sentiment,
        // Strip raw reviews from response to reduce payload size
        reviews: product.reviews.slice(0, 3), // Keep only 3 preview reviews
      };
    })
  );

  // ── Step 3: Score for "Best Overall" (pure rule-based — deterministic) ────
  const scoredProducts = scoreBestOverall(enrichedProducts);

  // ── Step 4: Generate "Why Buy This" for each product ─────────────────────
  const finalProducts = await Promise.all(
    scoredProducts.map(async (p) => {
      const whyBuy = await generateWhyBuy(p);
      return { ...p, why_buy: whyBuy };
    })
  );

  // ── Step 5: Sort ─────────────────────────────────────────────────────────
  const sorted = sortProducts(finalProducts, sortBy);

  const bestOverall = sorted.find((p) => p.is_best_overall);
  const response = {
    count: sorted.length,
    results: sorted,
    bestOverallId: bestOverall?.product_id || null,
  };

  // Cache for 10 minutes
  setCache(cacheKey, response);
  console.log(`✅ Search complete: "${query}" → ${sorted.length} results`);

  return response;
}

// ─── GET SINGLE PRODUCT BY ID ─────────────────────────────────────────────────
/**
 * Fetches a single product by its product_id (e.g. "sony-wh1000xm5-amazon").
 * Also returns all platform variants of the same group.
 * @param {string} productId
 * @returns {Object} { product, allPlatformVariants }
 */
export async function getProductById(productId) {
  // Derive group_id by stripping platform suffix
  const groupId = productId
    .replace(/-amazon$/, "")
    .replace(/-flipkart$/, "")
    .replace(/-myntra$/, "");

  // Load all products (no query filter) — cache handles performance
  const { results } = await searchProducts({ query: "", category: "" });

  const product = results.find((p) => p.product_id === productId);
  const allPlatformVariants = results.filter((p) => p.group_id === groupId);

  return { product: product || null, allPlatformVariants };
}

// ─── GET ALTERNATIVES ────────────────────────────────────────────────────────
/**
 * Returns 3 types of alternatives for a given product:
 *   cheaper: same category, price < 85% of current
 *   similar: same category, price within +/-15%
 *   premium: same category, price > 115% of current
 * @param {string} productId
 * @returns {Object} { cheaper, similar, premium }
 */
export async function getAlternatives(productId) {
  const { product } = await getProductById(productId);
  if (!product) return { cheaper: [], similar: [], premium: [] };

  const { results: categoryResults } = await searchProducts({
    category: product.category,
  });

  // Exclude current product's group
  const otherProducts = categoryResults.filter(
    (p) => p.group_id !== product.group_id
  );

  const cheaper = otherProducts
    .filter((p) => p.price < product.price * 0.85)
    .sort((a, b) => b.best_overall_score - a.best_overall_score)
    .slice(0, 3);

  const similar = otherProducts
    .filter((p) => p.price >= product.price * 0.85 && p.price <= product.price * 1.15)
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);

  const premium = otherProducts
    .filter((p) => p.price > product.price * 1.15)
    .sort((a, b) => a.price - b.price)
    .slice(0, 3);

  return { cheaper, similar, premium };
}

// ─── BUDGET EXPLORER ─────────────────────────────────────────────────────────
/**
 * Given a product and an extra budget amount, finds what better products unlock.
 * @param {string} productId
 * @param {number} extraBudget - amount in INR to add to current product price
 * @returns {Object} { currentProduct, upgradedOptions }
 */
export async function budgetExplorer(productId, extraBudget) {
  const { product } = await getProductById(productId);
  if (!product) return { currentProduct: null, upgradedOptions: [] };

  const newMax = product.price + Number(extraBudget);

  const { results } = await searchProducts({
    category: product.category,
    minPrice: product.price + 100, // Must be more expensive than current
    maxPrice: newMax,
  });

  // Exclude same product group, pick top 3 by score
  const upgradeCandidates = results
    .filter((p) => p.group_id !== product.group_id)
    .sort((a, b) => b.best_overall_score - a.best_overall_score)
    .slice(0, 3);

  // Generate AI upgrade reasoning for each
  const upgradedOptions = await generateUpgradeReasons(product, upgradeCandidates);

  return { currentProduct: product, upgradedOptions };
}

// ─── SORT HELPER ─────────────────────────────────────────────────────────────
function sortProducts(products, sortBy) {
  const sorted = [...products];
  switch (sortBy) {
    case "price_asc":
      return sorted.sort((a, b) => a.price - b.price);
    case "price_desc":
      return sorted.sort((a, b) => b.price - a.price);
    case "rating":
      return sorted.sort((a, b) => b.rating - a.rating);
    case "discount":
      return sorted.sort((a, b) => b.discount_percent - a.discount_percent);
    case "relevance":
    default:
      return sorted.sort((a, b) => b.best_overall_score - a.best_overall_score);
  }
}
