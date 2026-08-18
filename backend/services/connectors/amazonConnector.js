import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import path from "path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const mockData = JSON.parse(
  readFileSync(path.join(__dirname, "../../data/mockProducts.json"), "utf-8")
);

/**
 * Fetch Amazon product listings matching query and filters.
 * Returns normalized product objects for the "amazon" platform only.
 */
export async function fetchAmazonProducts({ query = "", category = "", minPrice = 0, maxPrice = Infinity }) {
  const results = [];

  for (const group of mockData) {
    if (category && group.category !== category) continue;

    const platformEntry = group.platforms.find((p) => p.platform === "amazon");
    if (!platformEntry || !platformEntry.in_stock) continue;

    if (platformEntry.price < minPrice || platformEntry.price > maxPrice) continue;

    if (query) {
      const searchStr = `${group.product_name} ${group.brand} ${group.category} ${JSON.stringify(group.specs)}`.toLowerCase();
      const queryWords = query.toLowerCase().split(" ").filter(Boolean);
      const matches = queryWords.some((word) => searchStr.includes(word));
      if (!matches) continue;
    }

    results.push({
      product_id: `${group.group_id}-amazon`,
      group_id: group.group_id,
      platform: "amazon",
      platform_product_id: platformEntry.platform_product_id,
      title: group.product_name,
      brand: group.brand,
      category: group.category,
      price: platformEntry.price,
      original_price: platformEntry.original_price,
      discount_percent: platformEntry.discount_percent,
      currency: "INR",
      rating: platformEntry.rating,
      review_count: platformEntry.review_count,
      image_url: platformEntry.image_url,
      product_url: platformEntry.product_url,
      delivery_estimate: platformEntry.delivery_estimate,
      seller: platformEntry.seller,
      in_stock: platformEntry.in_stock,
      specs: group.specs,
      reviews: platformEntry.reviews || [],
      fetched_at: new Date().toISOString(),
    });
  }

  return results;
}
