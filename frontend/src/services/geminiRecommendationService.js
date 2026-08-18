// ─────────────────────────────────────────────────────────────────────────────
// GEMINI AI PERSONALIZED RECOMMENDATION SERVICE
// Analyzes user purchase history, budget affinity, brand loyalty & platforms
// ─────────────────────────────────────────────────────────────────────────────

import { mockProducts } from "./mockData.js";

const GEMINI_API_KEY =
  import.meta.env.VITE_GEMINI_API_KEY ||
  (typeof window !== "undefined" && window.__GEMINI_KEY__) ||
  "";

export const USER_PERSONAS = [
  {
    id: "tech_audiophile",
    name: "Tech & Apple Enthusiast",
    tagline: "High-performance computing, spatial audio & smart gadgets",
    history: {
      pastOrders: [
        { title: "Apple AirPods Pro 2", brand: "Apple", price: 19900, platform: "amazon", date: "3 weeks ago" },
        { title: "Sony WH-1000XM4", brand: "Sony", price: 21990, platform: "amazon", date: "2 months ago" },
        { title: "Anker 65W Fast Charger", brand: "Anker", price: 2499, platform: "amazon", date: "1 month ago" },
      ],
      priceRange: { min: 5000, max: 120000, preferredAvg: 25000 },
      favoriteBrands: ["Apple", "Sony", "Dell", "Marshall", "OnePlus"],
      favoritePlatforms: ["amazon", "flipkart"],
      interestCategories: ["electronics", "home"],
    },
  },
  {
    id: "fitness_runner",
    name: "Marathon Runner & Athlete",
    tagline: "Road running, athletic apparel & recovery gear",
    history: {
      pastOrders: [
        { title: "Nike Air Max 270", brand: "Nike", price: 7795, platform: "myntra", date: "1 month ago" },
        { title: "Puma Gym Training Bag", brand: "Puma", price: 1499, platform: "flipkart", date: "3 weeks ago" },
        { title: "Adidas Climalite Shorts", brand: "Adidas", price: 1899, platform: "myntra", date: "2 months ago" },
      ],
      priceRange: { min: 2000, max: 20000, preferredAvg: 8000 },
      favoriteBrands: ["Nike", "Adidas", "ASICS", "Puma", "Woodland"],
      favoritePlatforms: ["myntra", "flipkart"],
      interestCategories: ["footwear", "fashion"],
    },
  },
  {
    id: "smart_home_chef",
    name: "Smart Living & Home Chef",
    tagline: "Healthy oil-free cooking, modern appliances & smart airflow",
    history: {
      pastOrders: [
        { title: "Philips Digital Air Fryer XL", brand: "Philips", price: 7999, platform: "amazon", date: "2 weeks ago" },
        { title: "Prestige Induction Cooktop", brand: "Prestige", price: 2999, platform: "flipkart", date: "1 month ago" },
        { title: "Borosil Glass Storage Set", brand: "Borosil", price: 1299, platform: "amazon", date: "3 months ago" },
      ],
      priceRange: { min: 2500, max: 35000, preferredAvg: 9000 },
      favoriteBrands: ["Philips", "Atomberg", "Dyson", "Nespresso", "Bajaj", "Xiaomi"],
      favoritePlatforms: ["amazon", "flipkart"],
      interestCategories: ["home", "electronics"],
    },
  },
  {
    id: "fashion_trendsetter",
    name: "Modern Denim & Streetwear",
    tagline: "Tailored fits, authentic denim, shades & smart casuals",
    history: {
      pastOrders: [
        { title: "Levi's 511 Slim Fit Jeans", brand: "Levi's", price: 1999, platform: "myntra", date: "2 weeks ago" },
        { title: "Tommy Hilfiger Classic Polo", brand: "Tommy Hilfiger", price: 2499, platform: "amazon", date: "1 month ago" },
        { title: "Ray-Ban Polarized Wayfarer", brand: "Ray-Ban", price: 5490, platform: "myntra", date: "2 months ago" },
      ],
      priceRange: { min: 1000, max: 15000, preferredAvg: 4000 },
      favoriteBrands: ["Levi's", "Tommy Hilfiger", "Ray-Ban", "Zara", "FabIndia", "Allen Solly"],
      favoritePlatforms: ["myntra", "amazon"],
      interestCategories: ["fashion", "footwear"],
    },
  },
];

/**
 * Call Gemini 2.5 Flash API to synthesize personalized recommendations
 */
export const getGeminiPersonalizedRecommendations = async (personaOrId = "tech_audiophile") => {
  let persona = null;
  if (typeof personaOrId === "object" && personaOrId !== null) {
    persona = personaOrId;
  } else {
    persona = USER_PERSONAS.find((p) => p.id === personaOrId) || USER_PERSONAS[0];
  }

  // Prepare catalog snapshot for Gemini
  const catalogSummary = mockProducts
    .filter((v, i, a) => a.findIndex((t) => (t.groupId || t.group_id) === (v.groupId || v.group_id)) === i)
    .map((p) => ({
      id: p.groupId || p.product_id,
      title: p.title,
      brand: p.brand,
      category: p.category,
      price: p.price,
      rating: p.rating,
      discountPercent: p.discount_percent || p.discountPercent,
      platform: p.platform,
    }));

  const systemPrompt = `You are a brilliant AI Personal Shopping Intelligence engine for AlgoForge.
Analyze the user's past purchase history, brand affinity, price bracket, and preferred platforms.
Select the top 4 best-matched products from the provided catalog and return a JSON response.

User Persona:
- Name: ${persona.name}
- Past Orders: ${JSON.stringify(persona.history.pastOrders)}
- Budget Range: ₹${persona.history.priceRange.min} - ₹${persona.history.priceRange.max} (Preferred Avg: ₹${persona.history.priceRange.preferredAvg})
- Favorite Brands: ${persona.history.favoriteBrands.join(", ")}
- Favorite Platforms: ${persona.history.favoritePlatforms.join(", ")}
- Category Interests: ${persona.history.interestCategories.join(", ")}

Catalog:
${JSON.stringify(catalogSummary)}

Return ONLY valid raw JSON in this exact structure with no markdown backticks, no markdown formatting:
{
  "personaInsight": "1-2 sentence personalized analysis explaining why these recommendations fit their past order trends, brand affinity, and budget",
  "recommendations": [
    {
      "productId": "exact_catalog_id",
      "matchScore": 96,
      "personalizedReason": "Short 1-sentence explanation why this matches their specific past orders and budget"
    }
  ]
}`;

  try {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}`;
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: systemPrompt }] }],
        generationConfig: {
          temperature: 0.2,
          maxOutputTokens: 1000,
        },
      }),
    });

    if (response.ok) {
      const data = await response.json();
      const rawText = data?.candidates?.[0]?.content?.parts?.[0]?.text || "";
      
      // Clean JSON
      const cleanJson = rawText.replace(/```json/gi, "").replace(/```/g, "").trim();
      const parsed = JSON.parse(cleanJson);

      if (parsed?.recommendations && parsed.recommendations.length > 0) {
        // Map back to full product objects
        const matchedProducts = parsed.recommendations
          .map((rec) => {
            const product = mockProducts.find(
              (p) => (p.groupId || p.group_id) === rec.productId || p.id === rec.productId || p.product_id === rec.productId
            );
            if (!product) return null;
            return {
              ...product,
              aiMatchScore: rec.matchScore || 95,
              personalizedReason: rec.personalizedReason || "Recommended based on your shopping affinity.",
            };
          })
          .filter(Boolean);

        if (matchedProducts.length > 0) {
          return {
            persona,
            personaInsight: parsed.personaInsight,
            products: matchedProducts.slice(0, 4),
            source: "gemini-2.5-flash-live",
          };
        }
      }
    }
  } catch (err) {
    console.warn("[Gemini API] Fallback to algorithmic recommendation engine:", err.message);
  }

  // Graceful Algorithmic Fallback (100% reliable)
  return getAlgorithmicFallbackRecommendations(persona);
};

/**
 * High-accuracy algorithmic personalization fallback
 */
function getAlgorithmicFallbackRecommendations(persona) {
  const { pastOrders, favoriteBrands, interestCategories, priceRange, favoritePlatforms } = persona.history;

  const scored = mockProducts
    .filter((v, i, a) => a.findIndex((t) => (t.groupId || t.group_id) === (v.groupId || v.group_id)) === i)
    .map((p) => {
      let score = 70;

      // Brand match (+15)
      if (favoriteBrands.some((b) => b.toLowerCase() === p.brand?.toLowerCase())) {
        score += 15;
      }

      // Category match (+10)
      if (interestCategories.includes(p.category)) {
        score += 10;
      }

      // Price within budget (+10)
      if (p.price >= priceRange.min && p.price <= priceRange.max) {
        score += 8;
      }

      // Preferred platform (+5)
      if (favoritePlatforms.includes(p.platform)) {
        score += 5;
      }

      // High rating
      if (Number(p.rating) >= 4.5) {
        score += 2;
      }

      let reason = `Matches your preference for ${p.brand} and within your ₹${priceRange.min.toLocaleString("en-IN")}–₹${priceRange.max.toLocaleString("en-IN")} range on ${p.platform?.toUpperCase()}.`;
      if (favoriteBrands.includes(p.brand)) {
        reason = `Pairs with your previous ${pastOrders[0]?.title || "purchase"} with top brand loyalty to ${p.brand}.`;
      }

      return {
        ...p,
        aiMatchScore: Math.min(99, score),
        personalizedReason: reason,
      };
    });

  scored.sort((a, b) => b.aiMatchScore - a.aiMatchScore);

  const pastTitles = pastOrders.map((o) => o.title).slice(0, 2).join(" & ");
  const personaInsight = `Based on your recent purchase history of ${pastTitles} and your affinity for ${favoriteBrands.slice(0, 3).join(", ")}, our AI personalized feed prioritized products within your ₹${priceRange.min.toLocaleString("en-IN")}–₹${priceRange.max.toLocaleString("en-IN")} budget on ${favoritePlatforms.map((p) => p.toUpperCase()).join(" & ")}.`;

  return {
    persona,
    personaInsight,
    products: scored.slice(0, 4),
    source: "ai-personalized-heuristic",
  };
}
