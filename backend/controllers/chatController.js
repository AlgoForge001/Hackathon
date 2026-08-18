import { parseChatIntent } from "../services/aiService.js";
import { searchProducts } from "../services/searchService.js";

// ─── CHAT ASSISTANT ───────────────────────────────────────────────────────────
// @desc    AI-powered conversational shopping assistant
// @route   POST /api/chat
// @access  Public
export const chat = async (req, res) => {
  try {
    const { message, history = [] } = req.body;

    if (!message || String(message).trim() === "") {
      return res.status(400).json({
        success: false,
        message: "Message is required.",
      });
    }

    const trimmedMessage = String(message).trim();

    // ── Step 1: Parse the user's intent via AI ─────────────────────────────
    const { reply, parsedFilters } = await parseChatIntent(trimmedMessage, history);

    // ── Step 2: Run a product search if a query was extracted ─────────────
    let suggestedProducts = [];

    if (parsedFilters && parsedFilters.query) {
      const searchResult = await searchProducts({
        query: parsedFilters.query,
        category: parsedFilters.category || "",
        minPrice: parsedFilters.minPrice || 0,
        maxPrice: parsedFilters.maxPrice || 10000000,
        sortBy: parsedFilters.sortBy || "relevance",
      });

      // Return top 4 products for the chat response (keep it concise)
      suggestedProducts = searchResult.results.slice(0, 4);
    }

    return res.status(200).json({
      success: true,
      reply,
      suggestedProducts,
      parsedFilters,
      productCount: suggestedProducts.length,
    });
  } catch (error) {
    console.error("Chat Controller Error:", error);
    return res.status(500).json({
      success: false,
      message: "Chat assistant encountered an error. Please try again.",
      error: error.message,
    });
  }
};
