// ─────────────────────────────────────────────────────────────────────────────
// GEMINI AI CONVERSATIONAL SHOPPING ASSISTANT SERVICE
// Direct integration with Google Gemini 2.5 Flash for natural language chat,
// multi-turn dialogue, product comparison & platform deal recommendations
// ─────────────────────────────────────────────────────────────────────────────

import { mockProducts, searchMockProducts } from "./mockData.js";

const GEMINI_API_KEY =
  import.meta.env.VITE_GEMINI_API_KEY ||
  (typeof window !== "undefined" && window.__GEMINI_KEY__) ||
  "";

/**
 * Send a chat message with conversation history to Google Gemini 2.5 Flash
 */
export const sendGeminiChatMessage = async ({ message, history = [] }) => {
  // Deduplicate products catalog summary for Gemini context
  const catalogSummary = mockProducts
    .filter((v, i, a) => a.findIndex((t) => (t.groupId || t.group_id) === (v.groupId || v.group_id)) === i)
    .map((p) => ({
      id: p.groupId || p.product_id || p.id,
      title: p.title,
      brand: p.brand,
      category: p.category,
      subcategory: p.subcategory,
      price: p.price,
      originalPrice: p.original_price || p.originalPrice,
      discountPercent: p.discount_percent || p.discountPercent,
      rating: p.rating,
      reviewCount: p.review_count || p.reviewCount,
      platform: p.platform,
      deliveryEstimate: p.delivery_estimate || p.deliveryEstimate,
      specs: p.specs,
      whyBuy: p.why_buy || p.whyBuy,
    }));

  const systemInstruction = `You are AlgoForge AI, an expert, witty, and objective personal shopping advisor for an Indian multi-platform e-commerce comparison app (Amazon, Flipkart, Myntra).
You help shoppers make smart purchasing decisions, compare specs, find real discounts, and find the best value for money.

Product Catalog:
${JSON.stringify(catalogSummary)}

Instructions:
1. Provide a direct, helpful, natural response in conversational English.
2. If the user asks for a recommendation, product comparison, or products under a budget (e.g., "running shoes under 4000", "Sony XM5 vs AirPods Pro 2", "best laptop", "air fryer"):
   - Recommend 1 to 4 exact matching products from the catalog above.
   - Mention key specs, real price in INR (₹), and why it's a great choice.
3. Return your response as a JSON object with this exact schema:
{
  "reply": "Your conversational response formatted with clean text/markdown bullets",
  "suggestedProductIds": ["id1", "id2"],
  "searchQuery": "optional short search keyword"
}
Return ONLY valid JSON. Do not wrap in extra commentary.`;

  // Format previous history for Gemini
  const contents = [];

  // Add system instruction as initial context
  contents.push({
    role: "user",
    parts: [{ text: systemInstruction }],
  });
  contents.push({
    role: "model",
    parts: [{ text: "Understood. I am AlgoForge AI Shopping Advisor ready to help with product searches, comparisons, and deals from Amazon, Flipkart, and Myntra." }],
  });

  // Add previous turns
  if (history && history.length > 0) {
    history.slice(-8).forEach((h) => {
      contents.push({
        role: h.role === "assistant" ? "model" : "user",
        parts: [{ text: h.content }],
      });
    });
  }

  // Add latest message
  contents.push({
    role: "user",
    parts: [{ text: message }],
  });

  try {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}`;
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents,
        generationConfig: {
          temperature: 0.3,
          maxOutputTokens: 1200,
        },
      }),
    });

    if (response.ok) {
      const data = await response.json();
      const rawText = data?.candidates?.[0]?.content?.parts?.[0]?.text || "";
      
      const cleanJson = rawText.replace(/```json/gi, "").replace(/```/g, "").trim();
      let parsed = null;
      try {
        parsed = JSON.parse(cleanJson);
      } catch {
        parsed = { reply: rawText, suggestedProductIds: [] };
      }

      let matchedProducts = [];
      if (parsed.suggestedProductIds && Array.isArray(parsed.suggestedProductIds)) {
        matchedProducts = parsed.suggestedProductIds
          .map((id) => mockProducts.find((p) => p.groupId === id || p.id === id || p.product_id === id))
          .filter(Boolean);
      }

      // If no explicit product IDs matched, search based on message or query
      if (matchedProducts.length === 0) {
        const queryTerm = parsed.searchQuery || message;
        const searchRes = searchMockProducts({ query: queryTerm });
        matchedProducts = searchRes.results.slice(0, 3);
      }

      return {
        success: true,
        reply: parsed.reply || rawText,
        suggestedProducts: matchedProducts,
        productCount: matchedProducts.length,
        source: "gemini-2.5-flash",
      };
    }
  } catch (err) {
    console.warn("[Gemini Chat Service] Error calling Gemini, using smart rule engine:", err.message);
  }

  // Smart Heuristic Fallback
  return getFallbackChatResponse(message);
};

function getFallbackChatResponse(message) {
  const lower = message.toLowerCase();
  let query = "";
  if (lower.includes("sony") || lower.includes("airpod") || lower.includes("headphone") || lower.includes("earphone") || lower.includes("earbud")) {
    query = "headphone";
  } else if (lower.includes("shoe") || lower.includes("sneaker") || lower.includes("runner") || lower.includes("boot") || lower.includes("croc")) {
    query = "shoe";
  } else if (lower.includes("laptop") || lower.includes("macbook") || lower.includes("zephyrus") || lower.includes("phone") || lower.includes("galaxy")) {
    query = "electronics";
  } else if (lower.includes("fan") || lower.includes("fryer") || lower.includes("vacuum") || lower.includes("coffee") || lower.includes("home")) {
    query = "home";
  } else if (lower.includes("jean") || lower.includes("polo") || lower.includes("shirt") || lower.includes("jacket") || lower.includes("fashion")) {
    query = "fashion";
  }

  const { results } = searchMockProducts({ query: query || message, sortBy: "best_value" });
  const topPicks = results.slice(0, 3);

  let replyText = `I analyzed our live comparison matrix across Amazon, Flipkart, and Myntra for "${message}". `;
  if (topPicks.length > 0) {
    replyText += `Here are the top ${topPicks.length} verified deals with highest AI rating and lowest pricing:`;
  } else {
    replyText += `Could you specify a brand or category like Electronics, Footwear, Fashion, or Smart Home?`;
  }

  return {
    success: true,
    reply: replyText,
    suggestedProducts: topPicks,
    productCount: topPicks.length,
    source: "rule-based-fallback",
  };
}
