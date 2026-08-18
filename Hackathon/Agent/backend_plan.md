# 🔧 Backend Implementation Plan — AI Personal Shopping Assistant
## Complete Phase-by-Phase Guide for Gemini to Build the Entire Backend

---

## 📌 CONTEXT: What Already Exists (DO NOT Recreate)

The backend already has a working foundation. Before writing any code, understand this:

```
backend/
├── index.js               ✅ EXISTS — Express server, MongoDB connection, CORS, cookie-parser
├── .env                   ✅ EXISTS — PORT, MONGO_URI, JWT_SECRET, GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, CLIENT_URL
├── package.json           ✅ EXISTS — express, mongoose, cors, dotenv, cookie-parser, bcryptjs, google-auth-library, jsonwebtoken
├── middleware/
│   └── authMiddleware.js  ✅ EXISTS — JWT protect() middleware, reads Bearer token from Authorization header
├── models/
│   └── User.js            ✅ EXISTS — { googleId, email, name, picture, role, timestamps }
├── controllers/
│   └── authController.js  ✅ EXISTS — googleAuth() and getMe()
└── routes/
    └── authRoutes.js      ✅ EXISTS — POST /api/auth/google, GET /api/auth/me
```

**Everything below is NEW work to be added on top of this foundation.**

---

## 🗂️ FINAL TARGET DIRECTORY STRUCTURE (After All Phases)

```
backend/
├── index.js                          ← MODIFY: add new route imports
├── .env                              ← MODIFY: add OPENROUTER_API_KEY, OPENROUTER_BASE_URL, OPENROUTER_MODEL
├── package.json                      ← MODIFY: add node-cron if using scheduled alerts
│
├── middleware/
│   ├── authMiddleware.js             ← EXISTING (no change)
│   └── cacheMiddleware.js            ← NEW: simple in-memory TTL cache
│
├── models/
│   ├── User.js                       ← MODIFY: add interests[], savedProducts[], searchHistory[]
│   ├── Alert.js                      ← NEW: price alert schema
│   └── ProductCache.js               ← NEW: optional DB cache for AI-enriched products
│
├── data/
│   └── mockProducts.json             ← NEW: 60+ products × 3 platforms (the "database" of products)
│
├── services/
│   ├── aiService.js                  ← NEW: all OpenRouter/LLM calls go through here
│   ├── searchService.js              ← NEW: query filter, normalize, deduplicate, enrich
│   └── connectors/
│       ├── amazonConnector.js        ← NEW: returns Amazon products from mock data
│       ├── flipkartConnector.js      ← NEW: returns Flipkart products from mock data
│       └── myntraConnector.js        ← NEW: returns Myntra products from mock data
│
├── controllers/
│   ├── authController.js             ← EXISTING (no change)
│   ├── productController.js          ← NEW: search, getById, getAlternatives, budgetExplorer
│   ├── chatController.js             ← NEW: AI chat assistant handler
│   └── alertController.js            ← NEW: create/read/delete price alerts
│
└── routes/
    ├── authRoutes.js                 ← EXISTING (no change)
    ├── productRoutes.js              ← NEW
    ├── chatRoutes.js                 ← NEW
    └── alertRoutes.js                ← NEW
```

---

## ⚙️ STEP 0: Environment & Package Setup

### 0.1 — Update `backend/.env`
Add these lines to the existing `.env` file:
```env
# ADD THESE to the existing .env (keep all existing vars):
OPENROUTER_API_KEY=your_openrouter_api_key_here
OPENROUTER_BASE_URL=https://openrouter.ai/api/v1
OPENROUTER_MODEL=openai/gpt-4o-mini
```

### 0.2 — Install new packages
```bash
# Run inside the backend/ directory
npm install node-cron
# axios and all other packages are already installed
```

### 0.3 — Update `backend/index.js`
**Add these imports and route registrations** to the existing `index.js`. Keep everything that's already there, just add:

```js
// ADD these imports at the top (after existing imports):
import productRoutes from "./routes/productRoutes.js";
import chatRoutes from "./routes/chatRoutes.js";
import alertRoutes from "./routes/alertRoutes.js";

// ADD these route registrations (after the existing app.use("/api/auth", authRoutes) line):
app.use("/api", productRoutes);
app.use("/api", chatRoutes);
app.use("/api", alertRoutes);
```

---

## 📦 PHASE 1: Mock Product Catalog

### Goal
Create a realistic multi-platform product database in JSON format. This is the source of truth for all product data. Every product has 3 listings — one per platform (Amazon, Flipkart, Myntra).

### File to Create: `backend/data/mockProducts.json`

**Structure of the file:**
```json
[
  {
    "group_id": "sony-wh1000xm5",
    "product_name": "Sony WH-1000XM5 Wireless Noise Cancelling Headphones",
    "category": "electronics",
    "brand": "Sony",
    "specs": {
      "battery_life": "30 hours",
      "weight": "250g",
      "connectivity": "Bluetooth 5.2",
      "noise_cancellation": "Industry-leading ANC",
      "microphone": "8 microphones",
      "foldable": false
    },
    "platforms": [
      {
        "platform": "amazon",
        "platform_product_id": "B09XS7JWHH",
        "price": 24990,
        "original_price": 29990,
        "discount_percent": 17,
        "rating": 4.5,
        "review_count": 12847,
        "delivery_estimate": "2-3 days",
        "seller": "Amazon Fulfilled",
        "in_stock": true,
        "image_url": "https://m.media-amazon.com/images/I/51aXvjzcukL._SL1500_.jpg",
        "product_url": "https://www.amazon.in/dp/B09XS7JWHH",
        "reviews": [
          { "author": "Rahul K", "rating": 5, "text": "Absolutely the best noise cancellation headphones I have ever used. The sound quality is crystal clear and battery lasts all day.", "date": "2024-10-15" },
          { "author": "Priya M", "rating": 4, "text": "Great headphones but a bit heavy for long usage. ANC is superb and call quality is excellent.", "date": "2024-09-22" },
          { "author": "Amit S", "rating": 5, "text": "Worth every rupee. The multipoint connection is a game changer. Switching between laptop and phone is seamless.", "date": "2024-11-01" },
          { "author": "Sneha R", "rating": 3, "text": "Good product but the carrying case feels cheap. Sound quality is top notch though.", "date": "2024-08-30" },
          { "author": "Vikram T", "rating": 5, "text": "Sony knocked it out of the park. The speak to chat feature works perfectly and ANC is unbeatable.", "date": "2024-12-05" }
        ]
      },
      {
        "platform": "flipkart",
        "platform_product_id": "HPHG8ZMXGSN3HHPF",
        "price": 25499,
        "original_price": 30000,
        "discount_percent": 15,
        "rating": 4.4,
        "review_count": 8312,
        "delivery_estimate": "3-4 days",
        "seller": "Flipkart Assured",
        "in_stock": true,
        "image_url": "https://rukminim2.flixcart.com/image/832/832/xif0q/headphone/d/v/7/wh-1000xm5-sony-original-imag97rz8ybhrgss.jpeg",
        "product_url": "https://www.flipkart.com/sony-wh-1000xm5/p/itm123",
        "reviews": [
          { "author": "Deepak N", "rating": 4, "text": "Excellent noise cancellation. The touch controls are very responsive and intuitive.", "date": "2024-10-08" },
          { "author": "Ananya P", "rating": 5, "text": "Life changing headphones. I can finally work from noisy coffee shops without distractions.", "date": "2024-11-15" },
          { "author": "Rohit G", "rating": 3, "text": "Good but expensive. The non-foldable design is a downgrade from XM4. Sound is great though.", "date": "2024-09-11" }
        ]
      },
      {
        "platform": "myntra",
        "platform_product_id": "24867392",
        "price": 26990,
        "original_price": 29990,
        "discount_percent": 10,
        "rating": 4.3,
        "review_count": 3241,
        "delivery_estimate": "4-5 days",
        "seller": "Myntra Fashion Store",
        "in_stock": true,
        "image_url": "https://assets.myntrassets.com/h_720,q_90,w_540/v1/assets/images/24867392/2023/9/4/sony-wh1000xm5.jpg",
        "product_url": "https://www.myntra.com/headphones/sony/24867392",
        "reviews": [
          { "author": "Kavya L", "rating": 4, "text": "Great sound quality. The ANC is really impressive for long flights.", "date": "2024-10-20" },
          { "author": "Suresh B", "rating": 5, "text": "Best purchase of the year. The premium feel and sound quality justifies the price.", "date": "2024-12-01" }
        ]
      }
    ]
  }
]
```

**Create at least 20 product groups across these 4 categories (5 products per category minimum):**

| Category | Products to Include |
| :--- | :--- |
| `electronics` | Sony WH-1000XM5, Apple AirPods Pro 2, Samsung Galaxy Buds2 Pro, JBL Tune 770NC, Boat Rockerz 550, Apple MacBook Air M2, Dell XPS 13, HP Pavilion 15, Samsung Galaxy S24, OnePlus 12 |
| `footwear` | Nike Air Max 270, Adidas Ultraboost 22, Puma Softride Pro, Reebok Nano X3, New Balance 574, Bata Comfit, Woodland Camel Boots, Skechers Go Walk, Red Chief Loafers, Campus Active |
| `fashion` | Levi's 511 Slim Jeans, H&M Crewneck Sweatshirt, Roadster Casual Shirt, US Polo Assn T-shirt, Arrow Formal Shirt, Zara Chino Pants, Mango Blazer, Van Heusen Formal Trouser, Peter England Suit, Urbanic Co-ord Set |
| `home` | Philips SmartSleep Wake-Up Light, Prestige Microwave 25L, Atomberg Renesa Fan, Pigeon Healthifry Air Fryer, Lifelong Elliptical Trainer, Godrej Refrigerator 192L, LG Washing Machine, Milton Flask, Wonderchef Nutri-Blend, Orient Electric Fan |

> **IMPORTANT for Gemini**: Each product group MUST have exactly 3 platform entries (amazon, flipkart, myntra). For each platform: use slightly different prices (+/- 5-15%), different review counts, slightly different ratings, and different delivery estimates. This is what makes the comparison realistic. For Myntra, mostly include electronics, footwear, and fashion — they don't sell home appliances.

---

## 📦 PHASE 2: Platform Connectors

### Goal
Create 3 connector files that read from `mockProducts.json` and return platform-filtered data.

### File: `backend/services/connectors/amazonConnector.js`
```js
import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import path from "path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const mockData = JSON.parse(
  readFileSync(path.join(__dirname, "../../data/mockProducts.json"), "utf-8")
);

/**
 * Fetch Amazon product listings matching the query and filters.
 * Returns normalized product objects for the "amazon" platform only.
 */
export async function fetchAmazonProducts({ query = "", category = "", minPrice = 0, maxPrice = Infinity }) {
  const results = [];

  for (const group of mockData) {
    // Category filter
    if (category && group.category !== category) continue;

    // Find Amazon platform entry
    const platformEntry = group.platforms.find((p) => p.platform === "amazon");
    if (!platformEntry) continue;

    // Price filter
    if (platformEntry.price < minPrice || platformEntry.price > maxPrice) continue;

    // Query match — check product name, brand, category, and specs
    if (query) {
      const searchStr = `${group.product_name} ${group.brand} ${group.category} ${JSON.stringify(group.specs)}`.toLowerCase();
      const queryWords = query.toLowerCase().split(" ").filter(Boolean);
      const matches = queryWords.some((word) => searchStr.includes(word));
      if (!matches) continue;
    }

    // Build normalized product object
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
```

### File: `backend/services/connectors/flipkartConnector.js`
**Same exact code as amazonConnector.js but change:**
- Export function name: `fetchFlipkartProducts`
- Platform filter: `p.platform === "flipkart"`
- product_id: `` `${group.group_id}-flipkart` ``

### File: `backend/services/connectors/myntraConnector.js`
**Same exact code as amazonConnector.js but change:**
- Export function name: `fetchMyntraProducts`
- Platform filter: `p.platform === "myntra"`
- product_id: `` `${group.group_id}-myntra` ``

---

## 📦 PHASE 3: Cache Middleware

### File: `backend/middleware/cacheMiddleware.js`
```js
/**
 * Simple in-memory TTL cache.
 * Usage: import { getCache, setCache } from "../middleware/cacheMiddleware.js"
 * TTL default: 10 minutes (600,000 ms)
 */

const cache = new Map();
const DEFAULT_TTL = 10 * 60 * 1000; // 10 minutes in milliseconds

export function getCache(key) {
  const entry = cache.get(key);
  if (!entry) return null;
  if (Date.now() > entry.expiresAt) {
    cache.delete(key);
    return null;
  }
  return entry.value;
}

export function setCache(key, value, ttl = DEFAULT_TTL) {
  cache.set(key, {
    value,
    expiresAt: Date.now() + ttl,
  });
}

export function clearCache(key) {
  cache.delete(key);
}
```

---

## 📦 PHASE 4: AI Service (OpenRouter Integration)

### File: `backend/services/aiService.js`

This is the most critical file. ALL LLM calls go through this single service.

```js
import axios from "axios";

// ─── OpenRouter Client ───────────────────────────────────────────────────────
const openRouterClient = axios.create({
  baseURL: process.env.OPENROUTER_BASE_URL || "https://openrouter.ai/api/v1",
  headers: {
    Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
    "HTTP-Referer": process.env.CLIENT_URL || "http://localhost:5173",
    "X-Title": "AI Shopping Assistant",
    "Content-Type": "application/json",
  },
  timeout: 15000, // 15 second timeout
});

const MODEL = process.env.OPENROUTER_MODEL || "openai/gpt-4o-mini";

/**
 * Core LLM caller. Returns parsed JSON if jsonMode=true, otherwise raw text.
 * Wraps everything in try/catch — never throws to caller.
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
      // Strip markdown code fences if present: ```json ... ```
      const cleaned = raw.replace(/^```json\s*/i, "").replace(/^```\s*/i, "").replace(/```\s*$/i, "").trim();
      return JSON.parse(cleaned);
    }

    return raw;
  } catch (err) {
    console.error("OpenRouter LLM call failed:", err.message);
    return null; // Always return null on failure — caller handles fallback
  }
}

// ─── 1. REVIEW SUMMARIZATION ─────────────────────────────────────────────────
/**
 * Takes an array of review objects and returns a 2-sentence summary.
 * @param {Array} reviews - Array of { text, rating, author } objects
 * @param {string} productName
 * @returns {string} summary text
 */
export async function summarizeReviews(reviews, productName) {
  if (!reviews || reviews.length === 0) {
    return "No reviews available for this product.";
  }

  const reviewText = reviews
    .slice(0, 8) // Use max 8 reviews to keep prompt short
    .map((r) => `[${r.rating}★] ${r.text}`)
    .join("\n");

  const system = `You are a concise product review summarizer. Your job is to summarize customer reviews into exactly 2 sentences. First sentence: what customers LOVE. Second sentence: what customers COMPLAIN about. Be specific and factual. Do not use marketing language.`;

  const user = `Product: ${productName}\n\nCustomer Reviews:\n${reviewText}\n\nWrite a 2-sentence summary:`;

  const result = await callLLM(system, user, false);
  return result || `Customers generally report ${productName} to be a solid product. Most reviews are positive with minor concerns about build quality or pricing.`;
}

// ─── 2. SENTIMENT CLASSIFICATION ─────────────────────────────────────────────
/**
 * Classifies review sentiment as green, yellow, or red.
 * @param {Array} reviews
 * @param {number} avgRating - average rating (0-5)
 * @returns {string} "green" | "yellow" | "red"
 */
export async function classifySentiment(reviews, avgRating) {
  // Fast rule-based check first (saves LLM calls for obvious cases)
  if (avgRating >= 4.3) return "green";
  if (avgRating <= 3.0) return "red";

  // For ambiguous range (3.0 - 4.3), use LLM
  const reviewText = reviews
    .slice(0, 5)
    .map((r) => `[${r.rating}★] ${r.text}`)
    .join("\n");

  const system = `You are a sentiment classifier. Analyze customer reviews and return ONLY a JSON object with one field: "sentiment" which must be exactly one of: "green" (mostly positive, >70% happy customers), "yellow" (mixed reviews, 40-70% happy), "red" (mostly negative, <40% happy). Return ONLY valid JSON.`;

  const user = `Reviews:\n${reviewText}\n\nReturn JSON:`;

  const result = await callLLM(system, user, true);
  if (result && ["green", "yellow", "red"].includes(result.sentiment)) {
    return result.sentiment;
  }

  // Fallback: rule-based
  if (avgRating >= 4.0) return "green";
  if (avgRating >= 3.3) return "yellow";
  return "red";
}

// ─── 3. BEST OVERALL SCORING ─────────────────────────────────────────────────
/**
 * Scores all products and assigns "Best Overall" to the top one.
 * Uses a weighted formula: Price Value (35%) + Rating (30%) + Sentiment (20%) + Delivery (15%)
 * @param {Array} products - Array of normalized product objects with sentiment already set
 * @returns {Array} same products array with best_overall_score and is_best_overall added
 */
export function scoreBestOverall(products) {
  if (!products || products.length === 0) return products;

  // Find min and max prices for normalization
  const prices = products.map((p) => p.price);
  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);
  const priceRange = maxPrice - minPrice || 1;

  const sentimentScores = { green: 100, yellow: 60, red: 20 };

  const deliveryScores = {
    "1 day": 100,
    "1-2 days": 95,
    "2-3 days": 85,
    "3-4 days": 70,
    "4-5 days": 55,
    "5-7 days": 40,
  };

  const scored = products.map((p) => {
    // Price value: lower price = higher score (inverted and normalized)
    const priceValueScore = maxPrice === minPrice ? 75 : ((maxPrice - p.price) / priceRange) * 100;

    // Rating score: normalize 0-5 to 0-100
    const ratingScore = (p.rating / 5) * 100;

    // Sentiment score
    const sentimentScore = sentimentScores[p.sentiment] || 50;

    // Delivery score
    const deliveryKey = Object.keys(deliveryScores).find((k) => p.delivery_estimate?.includes(k.replace(" days", "").trim())) || "";
    const deliveryScore = deliveryScores[deliveryKey] || 50;

    // Weighted total
    const totalScore =
      priceValueScore * 0.35 +
      ratingScore * 0.30 +
      sentimentScore * 0.20 +
      deliveryScore * 0.15;

    return { ...p, best_overall_score: Math.round(totalScore) };
  });

  // Sort by score descending
  scored.sort((a, b) => b.best_overall_score - a.best_overall_score);

  // Mark the top product as Best Overall
  return scored.map((p, idx) => ({ ...p, is_best_overall: idx === 0 }));
}

// ─── 4. "WHY BUY THIS" GENERATOR ─────────────────────────────────────────────
/**
 * Generates a 1-2 sentence "Why Buy This" justification for a product.
 * @param {Object} product - Enriched product object
 * @returns {string} justification text
 */
export async function generateWhyBuy(product) {
  const system = `You are a shopping assistant. Write a 1-2 sentence "Why Buy This" justification for the given product. Focus on concrete facts: price value, rating, key specs, or delivery speed. Be specific and helpful. Do not use adjectives like "amazing" or "fantastic".`;

  const user = `Product: ${product.title}
Platform: ${product.platform}
Price: ₹${product.price} (${product.discount_percent}% off)
Rating: ${product.rating}★ from ${product.review_count} reviews
Delivery: ${product.delivery_estimate}
Key Specs: ${JSON.stringify(product.specs)}
AI Score: ${product.best_overall_score}/100
Is Best Overall: ${product.is_best_overall}

Write "Why Buy This":`;

  const result = await callLLM(system, user, false);
  return (
    result ||
    `Rated ${product.rating}★ from ${product.review_count.toLocaleString()} reviews at ₹${product.price.toLocaleString()} with ${product.delivery_estimate} delivery — solid value for money.`
  );
}

// ─── 5. CHAT INTENT PARSER ───────────────────────────────────────────────────
/**
 * Parses a user's natural language shopping query into structured search params.
 * @param {string} message - User's message
 * @param {Array} history - Previous conversation messages [{role, content}]
 * @returns {Object} { reply, parsedFilters: { query, category, maxPrice, minPrice, brand, sortBy } }
 */
export async function parseChatIntent(message, history = []) {
  const system = `You are an AI shopping assistant for an Indian e-commerce comparison platform. 
The user will ask you to find products. Your job is to:
1. Extract structured search parameters from their message
2. Write a friendly conversational reply acknowledging their request

Always return a valid JSON object with exactly these fields:
{
  "reply": "string - friendly response to the user (1-2 sentences)",
  "parsedFilters": {
    "query": "string - the main search term (e.g. 'running shoes', 'laptop', 'headphones')",
    "category": "string - one of: electronics, footwear, fashion, home, or empty string if unclear",
    "maxPrice": number or null - maximum price in INR if mentioned,
    "minPrice": number or null - minimum price in INR if mentioned,
    "brand": "string - specific brand if mentioned, or empty string",
    "sortBy": "string - one of: price_asc, price_desc, rating, discount, or relevance"
  }
}

If no price is mentioned, set maxPrice and minPrice to null.
Always return ONLY valid JSON with no extra text.`;

  const messages = [
    ...history.slice(-6), // Keep last 6 messages for context
    { role: "user", content: message },
  ];

  const historyText = messages.map((m) => `${m.role}: ${m.content}`).join("\n");
  const result = await callLLM(system, historyText, true);

  if (result && result.reply && result.parsedFilters) {
    return result;
  }

  // Fallback: basic keyword extraction
  return {
    reply: `I'll search for ${message} across Amazon, Flipkart, and Myntra for you!`,
    parsedFilters: {
      query: message,
      category: "",
      maxPrice: null,
      minPrice: null,
      brand: "",
      sortBy: "relevance",
    },
  };
}

// ─── 6. BUDGET EXPLORER ──────────────────────────────────────────────────────
/**
 * Analyzes what upgrades are unlocked when budget increases.
 * @param {Object} currentProduct - The current product
 * @param {Array} upgradedProducts - Products in the new budget range
 * @returns {Array} upgradedProducts with upgradeReason added
 */
export async function generateUpgradeReasons(currentProduct, upgradedProducts) {
  const results = [];

  for (const upgraded of upgradedProducts.slice(0, 3)) {
    const system = `You are a shopping assistant. Explain in ONE sentence why paying ₹${upgraded.price - currentProduct.price} more for this product is worth it. Be specific about what feature/spec improves. Keep it under 20 words.`;

    const user = `Current: ${currentProduct.title} at ₹${currentProduct.price} (${JSON.stringify(currentProduct.specs)})
Upgrade: ${upgraded.title} at ₹${upgraded.price} (${JSON.stringify(upgraded.specs)})`;

    const reason = await callLLM(system, user, false);
    results.push({
      ...upgraded,
      upgradeReason: reason || `+₹${(upgraded.price - currentProduct.price).toLocaleString()} gets you ${upgraded.title} with better specs.`,
      priceDifference: upgraded.price - currentProduct.price,
    });
  }

  return results;
}
```

---

## 📦 PHASE 5: Search Service

### File: `backend/services/searchService.js`

```js
import { fetchAmazonProducts } from "./connectors/amazonConnector.js";
import { fetchFlipkartProducts } from "./connectors/flipkartConnector.js";
import { fetchMyntraProducts } from "./connectors/myntraConnector.js";
import { summarizeReviews, classifySentiment, scoreBestOverall, generateWhyBuy } from "./aiService.js";
import { getCache, setCache } from "../middleware/cacheMiddleware.js";

/**
 * Main search function — aggregates results from all platforms, enriches with AI, returns ranked list.
 * @param {Object} params
 * @param {string} params.query
 * @param {string} params.category
 * @param {number} params.minPrice
 * @param {number} params.maxPrice
 * @param {string[]} params.platforms - e.g. ["amazon", "flipkart", "myntra"] or empty for all
 * @param {string} params.sortBy - "price_asc" | "price_desc" | "rating" | "discount" | "relevance"
 * @returns {Object} { count, results, bestOverallId }
 */
export async function searchProducts({ query = "", category = "", minPrice = 0, maxPrice = Infinity, platforms = [], sortBy = "relevance" }) {
  // Create cache key
  const cacheKey = `search:${query}:${category}:${minPrice}:${maxPrice}:${platforms.join(",")}:${sortBy}`;
  const cached = getCache(cacheKey);
  if (cached) {
    console.log("Cache hit for:", cacheKey);
    return cached;
  }

  const filterParams = { query, category, minPrice, maxPrice };

  // Step 1: Fan out to all platform connectors in parallel
  const activePlatforms = platforms.length > 0 ? platforms : ["amazon", "flipkart", "myntra"];

  const platformFetchers = {
    amazon: fetchAmazonProducts,
    flipkart: fetchFlipkartProducts,
    myntra: fetchMyntraProducts,
  };

  const fetchPromises = activePlatforms
    .filter((p) => platformFetchers[p])
    .map((p) => platformFetchers[p](filterParams).catch(() => []));

  const platformResults = await Promise.allSettled(fetchPromises);

  // Flatten all results
  let allProducts = [];
  for (const result of platformResults) {
    if (result.status === "fulfilled") {
      allProducts = allProducts.concat(result.value);
    }
  }

  if (allProducts.length === 0) {
    return { count: 0, results: [], bestOverallId: null };
  }

  // Step 2: Enrich each product with AI (sentiment, summary, why_buy)
  // Run in batches to avoid overwhelming OpenRouter
  const enrichedProducts = await Promise.all(
    allProducts.map(async (product) => {
      const [reviewSummary, sentiment] = await Promise.all([
        summarizeReviews(product.reviews, product.title),
        classifySentiment(product.reviews, product.rating),
      ]);
      return { ...product, review_summary: reviewSummary, sentiment };
    })
  );

  // Step 3: Score for Best Overall
  const scoredProducts = scoreBestOverall(enrichedProducts);

  // Step 4: Generate "Why Buy This" for each product
  const finalProducts = await Promise.all(
    scoredProducts.map(async (p) => {
      const whyBuy = await generateWhyBuy(p);
      return { ...p, why_buy: whyBuy };
    })
  );

  // Step 5: Sort
  const sorted = sortProducts(finalProducts, sortBy);

  const bestOverall = sorted.find((p) => p.is_best_overall);
  const response = {
    count: sorted.length,
    results: sorted,
    bestOverallId: bestOverall?.product_id || null,
  };

  // Cache the result for 10 minutes
  setCache(cacheKey, response);

  return response;
}

/**
 * Sort products by given criteria
 */
function sortProducts(products, sortBy) {
  const sorted = [...products];
  switch (sortBy) {
    case "price_asc": return sorted.sort((a, b) => a.price - b.price);
    case "price_desc": return sorted.sort((a, b) => b.price - a.price);
    case "rating": return sorted.sort((a, b) => b.rating - a.rating);
    case "discount": return sorted.sort((a, b) => b.discount_percent - a.discount_percent);
    default: return sorted.sort((a, b) => b.best_overall_score - a.best_overall_score);
  }
}

/**
 * Get all platform variants for a single product group
 */
export async function getProductById(productId) {
  const groupId = productId.replace(/-amazon$|-flipkart$|-myntra$/, "");
  const { results } = await searchProducts({ query: groupId });
  const exact = results.find((p) => p.product_id === productId);
  const groupVariants = results.filter((p) => p.group_id === groupId);
  return { product: exact, allPlatformVariants: groupVariants };
}

/**
 * Get alternatives for a product:
 *   cheaper: same category, cheaper price
 *   similar: same category, similar price range (+/- 20%)
 *   premium: same category, higher price
 */
export async function getAlternatives(productId) {
  const { product, allPlatformVariants } = await getProductById(productId);
  if (!product) return { cheaper: [], similar: [], premium: [] };

  const { results: categoryResults } = await searchProducts({ category: product.category });

  // Exclude current product's group
  const otherProducts = categoryResults.filter((p) => p.group_id !== product.group_id);

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

/**
 * Budget explorer: find what better products unlock at higher budget
 */
export async function budgetExplorer(productId, extraBudget) {
  const { product } = await getProductById(productId);
  if (!product) return { currentProduct: null, upgradedOptions: [] };

  const newMax = product.price + Number(extraBudget);
  const { results } = await searchProducts({
    category: product.category,
    minPrice: product.price + 100, // must be more expensive
    maxPrice: newMax,
  });

  const upgrades = results
    .filter((p) => p.group_id !== product.group_id)
    .sort((a, b) => b.best_overall_score - a.best_overall_score)
    .slice(0, 3);

  return { currentProduct: product, upgradedOptions: upgrades };
}
```

---

## 📦 PHASE 6: Product Controller & Routes

### File: `backend/controllers/productController.js`

```js
import { searchProducts, getProductById, getAlternatives, budgetExplorer } from "../services/searchService.js";

// @desc    Search products across platforms
// @route   POST /api/search
// @access  Public
export const search = async (req, res) => {
  try {
    const { query = "", category = "", minPrice = 0, maxPrice = 1000000, platforms = [], sortBy = "relevance" } = req.body;

    const results = await searchProducts({ query, category, minPrice: Number(minPrice), maxPrice: Number(maxPrice), platforms, sortBy });

    return res.status(200).json({ success: true, ...results });
  } catch (error) {
    console.error("Search Error:", error);
    return res.status(500).json({ success: false, message: "Search failed", error: error.message });
  }
};

// @desc    Get product by ID (with all platform variants)
// @route   GET /api/products/:id
// @access  Public
export const getProduct = async (req, res) => {
  try {
    const { product, allPlatformVariants } = await getProductById(req.params.id);
    if (!product) return res.status(404).json({ success: false, message: "Product not found" });

    return res.status(200).json({ success: true, product, allPlatformVariants });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Error fetching product", error: error.message });
  }
};

// @desc    Get alternative products
// @route   GET /api/products/:id/alternatives
// @access  Public
export const getProductAlternatives = async (req, res) => {
  try {
    const alternatives = await getAlternatives(req.params.id);
    return res.status(200).json({ success: true, ...alternatives });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Error fetching alternatives", error: error.message });
  }
};

// @desc    Budget explorer — what unlocks at higher budget
// @route   POST /api/budget-explorer
// @access  Public
export const budgetExplorerHandler = async (req, res) => {
  try {
    const { productId, extraBudget } = req.body;
    if (!productId || !extraBudget) {
      return res.status(400).json({ success: false, message: "productId and extraBudget are required" });
    }

    const result = await budgetExplorer(productId, extraBudget);
    return res.status(200).json({ success: true, ...result });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Budget explorer error", error: error.message });
  }
};
```

### File: `backend/routes/productRoutes.js`

```js
import express from "express";
import { search, getProduct, getProductAlternatives, budgetExplorerHandler } from "../controllers/productController.js";

const router = express.Router();

router.post("/search", search);
router.get("/products/:id", getProduct);
router.get("/products/:id/alternatives", getProductAlternatives);
router.post("/budget-explorer", budgetExplorerHandler);

export default router;
```

---

## 📦 PHASE 7: Chat Controller & Routes

### File: `backend/controllers/chatController.js`

```js
import { parseChatIntent } from "../services/aiService.js";
import { searchProducts } from "../services/searchService.js";

// @desc    AI shopping chat assistant
// @route   POST /api/chat
// @access  Public
export const chat = async (req, res) => {
  try {
    const { message, history = [] } = req.body;

    if (!message || message.trim() === "") {
      return res.status(400).json({ success: false, message: "Message is required" });
    }

    // Step 1: Parse intent from the user's message
    const { reply, parsedFilters } = await parseChatIntent(message, history);

    // Step 2: If search intent detected, run a product search
    let suggestedProducts = [];
    if (parsedFilters.query) {
      const searchResult = await searchProducts({
        query: parsedFilters.query,
        category: parsedFilters.category || "",
        minPrice: parsedFilters.minPrice || 0,
        maxPrice: parsedFilters.maxPrice || 1000000,
        sortBy: parsedFilters.sortBy || "relevance",
      });
      suggestedProducts = searchResult.results.slice(0, 4); // Top 4 for chat
    }

    return res.status(200).json({
      success: true,
      reply,
      suggestedProducts,
      parsedFilters,
    });
  } catch (error) {
    console.error("Chat Controller Error:", error);
    return res.status(500).json({ success: false, message: "Chat failed", error: error.message });
  }
};
```

### File: `backend/routes/chatRoutes.js`

```js
import express from "express";
import { chat } from "../controllers/chatController.js";

const router = express.Router();

router.post("/chat", chat);

export default router;
```

---

## 📦 PHASE 8: Alert Controller & Routes

### File: `backend/models/Alert.js`

```js
import mongoose from "mongoose";

const alertSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    productId: { type: String, required: true },
    productTitle: { type: String, required: true },
    platform: { type: String, required: true },
    currentPrice: { type: Number, required: true },
    targetPrice: { type: Number, required: true },
    imageUrl: { type: String, default: "" },
    active: { type: Boolean, default: true },
    triggered: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const Alert = mongoose.model("Alert", alertSchema);
export default Alert;
```

### File: `backend/controllers/alertController.js`

```js
import Alert from "../models/Alert.js";

// @desc    Create a price alert
// @route   POST /api/alerts
// @access  Private (JWT required)
export const createAlert = async (req, res) => {
  try {
    const { productId, productTitle, platform, currentPrice, targetPrice, imageUrl } = req.body;

    if (!productId || !targetPrice || !currentPrice) {
      return res.status(400).json({ success: false, message: "productId, currentPrice, and targetPrice are required" });
    }

    if (Number(targetPrice) >= Number(currentPrice)) {
      return res.status(400).json({ success: false, message: "Target price must be lower than current price" });
    }

    const alert = await Alert.create({
      userId: req.user._id,
      productId,
      productTitle: productTitle || productId,
      platform: platform || "any",
      currentPrice: Number(currentPrice),
      targetPrice: Number(targetPrice),
      imageUrl: imageUrl || "",
    });

    return res.status(201).json({ success: true, message: "Price alert created!", alert });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Failed to create alert", error: error.message });
  }
};

// @desc    Get all active alerts for logged-in user
// @route   GET /api/alerts
// @access  Private (JWT required)
export const getUserAlerts = async (req, res) => {
  try {
    const alerts = await Alert.find({ userId: req.user._id, active: true }).sort({ createdAt: -1 });
    return res.status(200).json({ success: true, count: alerts.length, alerts });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Failed to fetch alerts", error: error.message });
  }
};

// @desc    Delete/deactivate an alert
// @route   DELETE /api/alerts/:id
// @access  Private (JWT required)
export const deleteAlert = async (req, res) => {
  try {
    const alert = await Alert.findOneAndUpdate(
      { _id: req.params.id, userId: req.user._id },
      { active: false },
      { new: true }
    );

    if (!alert) return res.status(404).json({ success: false, message: "Alert not found" });

    return res.status(200).json({ success: true, message: "Alert deleted" });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Failed to delete alert", error: error.message });
  }
};
```

### File: `backend/routes/alertRoutes.js`

```js
import express from "express";
import { createAlert, getUserAlerts, deleteAlert } from "../controllers/alertController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/alerts", protect, createAlert);
router.get("/alerts", protect, getUserAlerts);
router.delete("/alerts/:id", protect, deleteAlert);

export default router;
```

---

## 📦 PHASE 9: Update `index.js` (Final)

Replace the current `backend/index.js` completely with this:

```js
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/authRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import chatRoutes from "./routes/chatRoutes.js";
import alertRoutes from "./routes/alertRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/shopping_assistant";

// ─── Middlewares ──────────────────────────────────────────────────────────────
app.use(cors({ origin: process.env.CLIENT_URL || "http://localhost:5173", credentials: true }));
app.use(express.json({ limit: "10mb" })); // Allow larger payloads for image search
app.use(cookieParser());

// ─── Routes ───────────────────────────────────────────────────────────────────
app.use("/api/auth", authRoutes);
app.use("/api", productRoutes);   // /api/search, /api/products/:id, /api/budget-explorer
app.use("/api", chatRoutes);      // /api/chat
app.use("/api", alertRoutes);     // /api/alerts

// ─── Health Check ─────────────────────────────────────────────────────────────
app.get("/api/health", (req, res) => {
  res.json({
    status: "OK",
    message: "AI Shopping Assistant API is running!",
    openrouter: !!process.env.OPENROUTER_API_KEY ? "configured" : "MISSING - add to .env",
    timestamp: new Date().toISOString(),
  });
});

// ─── 404 Handler ─────────────────────────────────────────────────────────────
app.use("*", (req, res) => {
  res.status(404).json({ success: false, message: `Route ${req.originalUrl} not found` });
});

// ─── Database & Server Start ──────────────────────────────────────────────────
mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("✅ Connected to MongoDB successfully");
    app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
  })
  .catch((err) => {
    console.warn("⚠️  MongoDB connection failed:", err.message);
    app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT} (no DB)`));
  });
```

---

## ✅ PHASE 10: Testing Checklist

After building everything, test in this order:

### Test 1 — Health Check
```
GET http://localhost:5000/api/health
Expected: { status: "OK", openrouter: "configured" }
```

### Test 2 — Basic Search
```
POST http://localhost:5000/api/search
Body: { "query": "headphones" }
Expected: { success: true, count: N, results: [...], bestOverallId: "..." }
```

### Test 3 — Category + Price Filter
```
POST http://localhost:5000/api/search
Body: { "category": "footwear", "maxPrice": 3000, "sortBy": "rating" }
Expected: results with price <= 3000 and category = "footwear"
```

### Test 4 — AI Chat
```
POST http://localhost:5000/api/chat
Body: { "message": "Find me running shoes under ₹3000 with good reviews", "history": [] }
Expected: { reply: "...", suggestedProducts: [...], parsedFilters: { query: "running shoes", maxPrice: 3000, ... } }
```

### Test 5 — Alternatives
```
GET http://localhost:5000/api/products/sony-wh1000xm5-amazon/alternatives
Expected: { cheaper: [...], similar: [...], premium: [...] }
```

### Test 6 — Budget Explorer
```
POST http://localhost:5000/api/budget-explorer
Body: { "productId": "sony-wh1000xm5-amazon", "extraBudget": 5000 }
Expected: { currentProduct: {...}, upgradedOptions: [...] }
```

### Test 7 — Price Alert (needs JWT token)
```
POST http://localhost:5000/api/alerts
Headers: Authorization: Bearer <token>
Body: { "productId": "sony-wh1000xm5-amazon", "productTitle": "Sony WH-1000XM5", "platform": "amazon", "currentPrice": 24990, "targetPrice": 20000 }
Expected: { success: true, alert: {...} }
```

---

## 🛑 IMPORTANT RULES FOR GEMINI

1. **DO NOT change** `authController.js`, `authRoutes.js`, or `authMiddleware.js` — they are complete and working.
2. **Use `import/export` syntax everywhere** — the project uses `"type": "module"` in package.json. Never use `require()`.
3. **All LLM calls MUST have fallbacks** — if `callLLM()` returns `null`, always return a sensible default string. Never let `null` reach the API response.
4. **The `product_id` format is:** `{group_id}-{platform}` (e.g., `sony-wh1000xm5-amazon`). The `group_id` is the product without platform suffix.
5. **Never throw errors to crash the server** — wrap everything in try/catch and return `{ success: false, message: "..." }` with appropriate HTTP status codes.
6. **Add `OPENROUTER_API_KEY` to `.env` before testing** — without it, all AI calls return `null` and only rule-based fallbacks will work.
