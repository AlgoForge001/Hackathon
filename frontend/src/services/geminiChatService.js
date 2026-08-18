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
 * Clean and extract a natural language reply and product IDs from Gemini output
 */
function cleanGeminiResponse(rawText) {
  let reply = "";
  let suggestedProductIds = [];
  let searchQuery = "";

  if (!rawText || typeof rawText !== "string") {
    return { reply: "Here are the top product matches from our catalog:", suggestedProductIds: [] };
  }

  // 1. Try parsing raw text as direct JSON
  try {
    const directParsed = JSON.parse(rawText);
    if (directParsed && typeof directParsed === "object") {
      reply = directParsed.reply || "";
      suggestedProductIds = directParsed.suggestedProductIds || [];
      searchQuery = directParsed.searchQuery || "";
    }
  } catch {
    // 2. Try finding ```json ... ``` block
    const jsonMatch = rawText.match(/```(?:json)?\s*([\s\S]*?)\s*```/i);
    if (jsonMatch && jsonMatch[1]) {
      try {
        const blockParsed = JSON.parse(jsonMatch[1]);
        reply = blockParsed.reply || "";
        suggestedProductIds = blockParsed.suggestedProductIds || [];
        searchQuery = blockParsed.searchQuery || "";
      } catch {
        // Fallback: strip the json block from the main text
        reply = rawText.replace(/```(?:json)?[\s\S]*?```/gi, "").trim();
      }
    } else {
      // 3. Try finding any {...} object
      const bracketMatch = rawText.match(/\{[\s\S]*"reply"[\s\S]*\}/i);
      if (bracketMatch) {
        try {
          const curlyParsed = JSON.parse(bracketMatch[0]);
          reply = curlyParsed.reply || "";
          suggestedProductIds = curlyParsed.suggestedProductIds || [];
          searchQuery = curlyParsed.searchQuery || "";
        } catch {
          reply = rawText.replace(/\{[\s\S]*"reply"[\s\S]*\}/gi, "").trim();
        }
      } else {
        reply = rawText;
      }
    }
  }

  // 4. Final sanitization: ensure no lingering raw JSON artifacts leak into the user message
  if (!reply || reply.trim() === "") {
    reply = rawText;
  }

  reply = reply
    .replace(/```(?:json)?[\s\S]*?```/gi, "")
    .replace(/\{[\s\S]*?"reply"[\s\S]*?\}/gi, "")
    .trim();

  return { reply, suggestedProductIds, searchQuery };
}

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

  const systemInstruction = `You are AlgoForge AI, an expert, objective personal shopping advisor for an Indian multi-platform e-commerce price comparison application (Amazon, Flipkart, Myntra).
You help shoppers make smart buying decisions, compare product specifications, discover discounts, and evaluate real value for money.

Product Catalog:
${JSON.stringify(catalogSummary)}

Output Requirement:
You MUST respond with a valid JSON object only. Do NOT output plain text outside the JSON object.
Schema:
{
  "reply": "Your helpful, conversational, nicely-formatted response explaining the recommendations and comparisons.",
  "suggestedProductIds": ["exact_catalog_id_1", "exact_catalog_id_2"],
  "searchQuery": "optional category or brand search term"
}`;

  // Format previous history for Gemini
  const contents = [];

  // Add system instruction
  contents.push({
    role: "user",
    parts: [{ text: systemInstruction }],
  });
  contents.push({
    role: "model",
    parts: [{ text: JSON.stringify({ reply: "I am AlgoForge AI Shopping Advisor, ready to provide comparison deals and recommendations.", suggestedProductIds: [] }) }],
  });

  // Add previous conversational turns
  if (history && history.length > 0) {
    history.slice(-6).forEach((h) => {
      if (h.role === "assistant") {
        contents.push({
          role: "model",
          parts: [{ text: JSON.stringify({ reply: h.content, suggestedProductIds: [] }) }],
        });
      } else {
        contents.push({
          role: "user",
          parts: [{ text: h.content }],
        });
      }
    });
  }

  // Add latest user message
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
          responseMimeType: "application/json",
          temperature: 0.3,
          maxOutputTokens: 1500,
        },
      }),
    });

    if (response.ok) {
      const data = await response.json();
      const rawText = data?.candidates?.[0]?.content?.parts?.[0]?.text || "";
      
      const { reply, suggestedProductIds, searchQuery } = cleanGeminiResponse(rawText);

      let matchedProducts = [];
      if (suggestedProductIds && Array.isArray(suggestedProductIds) && suggestedProductIds.length > 0) {
        matchedProducts = suggestedProductIds
          .map((id) => mockProducts.find((p) => p.groupId === id || p.id === id || p.product_id === id))
          .filter(Boolean);
      }

      // If no explicit IDs were returned, scan the catalog for matching mentions or search
      if (matchedProducts.length === 0) {
        const lowerReply = (reply + " " + message).toLowerCase();
        matchedProducts = mockProducts
          .filter((p) => lowerReply.includes(p.brand.toLowerCase()) || lowerReply.includes(p.title.toLowerCase().slice(0, 15)))
          .filter((v, i, a) => a.findIndex((t) => (t.groupId || t.group_id) === (v.groupId || v.group_id)) === i)
          .slice(0, 3);
      }

      // Fallback search by query if still empty
      if (matchedProducts.length === 0 && searchQuery) {
        const searchRes = searchMockProducts({ query: searchQuery });
        matchedProducts = searchRes.results.slice(0, 3);
      }

      return {
        success: true,
        reply: reply || "Here are the best product matches I found across platforms:",
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
