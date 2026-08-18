import axios from "axios";

// ─── OpenRouter Client Setup ─────────────────────────────────────────────────
const openRouterClient = axios.create({
  baseURL: process.env.OPENROUTER_BASE_URL || "https://openrouter.ai/api/v1",
  headers: {
    Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
    "HTTP-Referer": process.env.CLIENT_URL || "http://localhost:5173",
    "X-Title": "AI Shopping Assistant",
    "Content-Type": "application/json",
  },
  timeout: 15000,
});

const MODEL = process.env.OPENROUTER_MODEL || "openai/gpt-4o-mini";

// ─── Core LLM Caller ─────────────────────────────────────────────────────────
/**
 * Send a prompt to OpenRouter. Returns parsed JSON or raw text.
 * Returns null on any failure — callers must handle with fallback logic.
 * @param {string} systemPrompt
 * @param {string} userMessage
 * @param {boolean} jsonMode - if true, strips code fences and JSON.parses the response
 * @returns {any|null}
 */
async function callLLM(systemPrompt, userMessage, jsonMode = false) {
  try {
    const response = await openRouterClient.post("/chat/completions", {
      model: MODEL,
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userMessage },
      ],
      temperature: 0.3,
      max_tokens: jsonMode ? 800 : 400,
    });

    const raw = response.data.choices[0].message.content.trim();

    if (jsonMode) {
      // Strip markdown code fences if the model wraps JSON in ```json ... ```
      const cleaned = raw
        .replace(/^```json\s*/i, "")
        .replace(/^```\s*/i, "")
        .replace(/```\s*$/i, "")
        .trim();
      return JSON.parse(cleaned);
    }

    return raw;
  } catch (err) {
    // Log but never throw — always return null to trigger fallback
    if (err.response?.status === 402) {
      console.warn("⚠️  OpenRouter: Insufficient credits. Using rule-based fallback.");
    } else if (err.response?.status === 401) {
      console.warn("⚠️  OpenRouter: Invalid API key. Using rule-based fallback.");
    } else {
      console.error("OpenRouter LLM call failed:", err.message);
    }
    return null;
  }
}

// ─── 1. REVIEW SUMMARIZATION ─────────────────────────────────────────────────
/**
 * Summarizes an array of reviews into 2 sentences (praise + complaints).
 * Falls back to a template string if LLM is unavailable.
 * @param {Array} reviews - [{text, rating, author}]
 * @param {string} productName
 * @returns {string}
 */
export async function summarizeReviews(reviews, productName) {
  if (!reviews || reviews.length === 0) {
    return `No customer reviews available for ${productName} yet.`;
  }

  const reviewText = reviews
    .slice(0, 8)
    .map((r) => `[${r.rating}★] ${r.text}`)
    .join("\n");

  const system = `You are a concise product review summarizer. Summarize customer reviews into exactly 2 sentences. First sentence: what customers LOVE about the product. Second sentence: what customers COMPLAIN about. Be specific and factual. Do not use marketing language or adjectives like "amazing" or "fantastic".`;

  const user = `Product: ${productName}\n\nCustomer Reviews:\n${reviewText}\n\nWrite a 2-sentence summary:`;

  const result = await callLLM(system, user, false);

  if (result) return result;

  // Rule-based fallback
  const avgRating = reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;
  const positiveReviews = reviews.filter((r) => r.rating >= 4);
  const negativeReviews = reviews.filter((r) => r.rating <= 2);

  if (positiveReviews.length > negativeReviews.length) {
    return `Customers highly appreciate ${productName} for its performance and value. A few users note minor concerns about build quality or sizing.`;
  } else if (negativeReviews.length > positiveReviews.length) {
    return `Customers have mixed experiences with ${productName}, with some praising the features. Several users report quality or durability concerns.`;
  } else {
    return `${productName} receives generally positive reviews with an average rating of ${avgRating.toFixed(1)}★. Most customers are satisfied with the purchase.`;
  }
}

// ─── 2. SENTIMENT CLASSIFICATION ─────────────────────────────────────────────
/**
 * Classifies review sentiment as "green", "yellow", or "red".
 * Uses fast rule-based check first; LLM only for ambiguous ratings.
 * @param {Array} reviews
 * @param {number} avgRating - 0-5
 * @returns {string} "green" | "yellow" | "red"
 */
export async function classifySentiment(reviews, avgRating) {
  // Fast rule-based check for clear-cut cases
  if (avgRating >= 4.3) return "green";
  if (avgRating <= 2.9) return "red";

  // For ambiguous range (3.0–4.2), ask the LLM
  if (reviews && reviews.length > 0) {
    const reviewText = reviews
      .slice(0, 5)
      .map((r) => `[${r.rating}★] ${r.text}`)
      .join("\n");

    const system = `You are a sentiment classifier. Analyze customer reviews and return ONLY a JSON object: {"sentiment": "green"} for mostly positive (>70% happy), {"sentiment": "yellow"} for mixed (40-70% happy), or {"sentiment": "red"} for mostly negative (<40% happy). Return ONLY valid JSON, nothing else.`;

    const user = `Reviews:\n${reviewText}\n\nReturn JSON:`;

    const result = await callLLM(system, user, true);
    if (result && ["green", "yellow", "red"].includes(result.sentiment)) {
      return result.sentiment;
    }
  }

  // Rule-based fallback
  if (avgRating >= 4.0) return "green";
  if (avgRating >= 3.3) return "yellow";
  return "red";
}

// ─── 3. BEST OVERALL SCORING ─────────────────────────────────────────────────
/**
 * Pure rule-based weighted scoring. No LLM needed here — deterministic and fast.
 * Formula: PriceValue (35%) + Rating (30%) + Sentiment (20%) + Delivery (15%)
 * Marks the highest-scoring product as is_best_overall = true.
 * @param {Array} products - normalized products with .sentiment already set
 * @returns {Array} same products with best_overall_score and is_best_overall added
 */
export function scoreBestOverall(products) {
  if (!products || products.length === 0) return products;

  const prices = products.map((p) => p.price);
  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);
  const priceRange = maxPrice - minPrice || 1;

  const sentimentScores = { green: 100, yellow: 60, red: 20 };

  // Delivery score lookup: faster = higher score
  const getDeliveryScore = (estimate = "") => {
    const e = estimate.toLowerCase();
    if (e.includes("1 day") || e.includes("same day")) return 100;
    if (e.includes("1-2")) return 90;
    if (e.includes("2-3")) return 80;
    if (e.includes("3-4")) return 65;
    if (e.includes("3-5")) return 60;
    if (e.includes("4-5")) return 50;
    if (e.includes("4-6")) return 45;
    if (e.includes("5-7")) return 35;
    return 50; // default
  };

  const scored = products.map((p) => {
    const priceValueScore =
      maxPrice === minPrice ? 75 : ((maxPrice - p.price) / priceRange) * 100;
    const ratingScore = (p.rating / 5) * 100;
    const sentimentScore = sentimentScores[p.sentiment] ?? 50;
    const deliveryScore = getDeliveryScore(p.delivery_estimate);

    const totalScore =
      priceValueScore * 0.35 +
      ratingScore * 0.30 +
      sentimentScore * 0.20 +
      deliveryScore * 0.15;

    return { ...p, best_overall_score: Math.round(totalScore) };
  });

  // Sort descending by score
  scored.sort((a, b) => b.best_overall_score - a.best_overall_score);

  // Mark only the top product as Best Overall
  return scored.map((p, idx) => ({ ...p, is_best_overall: idx === 0 }));
}

// ─── 4. "WHY BUY THIS" GENERATOR ─────────────────────────────────────────────
/**
 * Generates a short "Why Buy This" justification for a product.
 * Falls back to a template string if LLM is unavailable.
 * @param {Object} product - enriched product with sentiment + best_overall_score
 * @returns {string}
 */
export async function generateWhyBuy(product) {
  const system = `You are a shopping assistant. Write a 1-2 sentence "Why Buy This" justification for the given product. Be factual and specific: mention price value, rating, key specs, or delivery speed. Do NOT use adjectives like "amazing", "fantastic", "incredible". Keep it under 35 words.`;

  const user = `Product: ${product.title}
Platform: ${product.platform}
Price: ₹${product.price.toLocaleString("en-IN")} (${product.discount_percent}% off from ₹${product.original_price.toLocaleString("en-IN")})
Rating: ${product.rating}★ from ${product.review_count.toLocaleString("en-IN")} reviews
Delivery: ${product.delivery_estimate}
Key Specs: ${JSON.stringify(product.specs)}
AI Score: ${product.best_overall_score}/100
Is Best Overall Pick: ${product.is_best_overall}

Write "Why Buy This" (max 35 words):`;

  const result = await callLLM(system, user, false);

  if (result) return result;

  // Rule-based fallback
  const saving = product.original_price - product.price;
  if (product.is_best_overall) {
    return `Best overall pick — rated ${product.rating}★ from ${product.review_count.toLocaleString("en-IN")} reviews at ₹${product.price.toLocaleString("en-IN")} (save ₹${saving.toLocaleString("en-IN")}), with ${product.delivery_estimate} delivery.`;
  }
  return `Rated ${product.rating}★ by ${product.review_count.toLocaleString("en-IN")} customers at ₹${product.price.toLocaleString("en-IN")} with ${product.delivery_estimate} delivery — solid value for money.`;
}

// ─── 5. CHAT INTENT PARSER ───────────────────────────────────────────────────
/**
 * Parses a natural language shopping query into structured search parameters.
 * Returns both a conversational reply and extracted filters.
 * @param {string} message - user's chat message
 * @param {Array} history - previous messages [{role, content}]
 * @returns {Object} { reply, parsedFilters }
 */
export async function parseChatIntent(message, history = []) {
  const system = `You are an AI shopping assistant for an Indian e-commerce comparison platform (Amazon, Flipkart, Myntra).
The user will describe what product they want to find. Extract structured search parameters and write a friendly reply.

Return ONLY a valid JSON object with exactly these fields:
{
  "reply": "string — a friendly 1-2 sentence response acknowledging the user's request",
  "parsedFilters": {
    "query": "string — main search term (e.g. 'running shoes', 'headphones', 'formal shirt')",
    "category": "string — one of: electronics, footwear, fashion, home — or empty string if unclear",
    "maxPrice": number or null,
    "minPrice": number or null,
    "brand": "string — specific brand if mentioned, else empty string",
    "sortBy": "string — one of: price_asc, price_desc, rating, discount, relevance"
  }
}

Rules:
- If no price mentioned, set maxPrice and minPrice to null
- Currency is always INR (Indian Rupees). Convert mentions like "3k" to 3000
- If user mentions "cheap" or "budget", set sortBy to "price_asc"
- If user mentions "best rated" or "top rated", set sortBy to "rating"
- If user mentions "deals" or "discount", set sortBy to "discount"
- Return ONLY valid JSON — no extra text, no markdown`;

  const historyText = history
    .slice(-6)
    .map((m) => `${m.role}: ${m.content}`)
    .join("\n");

  const fullContext = historyText
    ? `${historyText}\nuser: ${message}`
    : `user: ${message}`;

  const result = await callLLM(system, fullContext, true);

  if (result && result.reply && result.parsedFilters) {
    return result;
  }

  // Rule-based fallback — basic keyword extraction
  const lowerMsg = message.toLowerCase();
  let category = "";
  if (lowerMsg.match(/headphone|earphone|earbud|speaker|laptop|phone|mobile|tablet|camera/))
    category = "electronics";
  else if (lowerMsg.match(/shoe|sneaker|boot|sandal|slipper|footwear/))
    category = "footwear";
  else if (lowerMsg.match(/shirt|jeans|t-shirt|dress|kurta|saree|jacket|trouser|pant/))
    category = "fashion";
  else if (lowerMsg.match(/fan|microwave|fridge|washing machine|blender|mixer|cooker/))
    category = "home";

  // Extract price: look for numbers preceded by ₹ or "under"
  let maxPrice = null;
  const priceMatch = lowerMsg.match(/(?:under|below|less than|max|upto)?\s*₹?\s*(\d+(?:,\d+)*(?:k)?)/i);
  if (priceMatch) {
    let priceStr = priceMatch[1].replace(/,/g, "");
    maxPrice = priceStr.endsWith("k") ? parseInt(priceStr) * 1000 : parseInt(priceStr);
  }

  return {
    reply: `I'll search for ${message} across Amazon, Flipkart, and Myntra for you!`,
    parsedFilters: {
      query: message,
      category,
      maxPrice,
      minPrice: null,
      brand: "",
      sortBy: "relevance",
    },
  };
}

// ─── 6. BUDGET EXPLORER UPGRADE REASONS ──────────────────────────────────────
/**
 * Generates a one-sentence upgrade reason for each upgraded product.
 * Falls back to a template string if LLM is unavailable.
 * @param {Object} currentProduct
 * @param {Array} upgradedProducts - top 3 products in the new budget range
 * @returns {Array} upgradedProducts with upgradeReason and priceDifference added
 */
export async function generateUpgradeReasons(currentProduct, upgradedProducts) {
  const results = [];

  for (const upgraded of upgradedProducts.slice(0, 3)) {
    const priceDiff = upgraded.price - currentProduct.price;

    const system = `You are a shopping assistant. In ONE sentence (max 20 words), explain concretely why paying ₹${priceDiff.toLocaleString("en-IN")} more is worth it for this upgrade. Be specific about what feature improves.`;

    const user = `Current: ${currentProduct.title} at ₹${currentProduct.price.toLocaleString("en-IN")}
Specs: ${JSON.stringify(currentProduct.specs)}

Upgrade: ${upgraded.title} at ₹${upgraded.price.toLocaleString("en-IN")}
Specs: ${JSON.stringify(upgraded.specs)}`;

    const reason = await callLLM(system, user, false);

    results.push({
      ...upgraded,
      upgradeReason:
        reason ||
        `+₹${priceDiff.toLocaleString("en-IN")} gets you ${upgraded.title} with better specs and ${upgraded.rating}★ rating.`,
      priceDifference: priceDiff,
    });
  }

  return results;
}
