import {
  searchProducts,
  getProductById,
  getAlternatives,
  budgetExplorer,
} from "../services/searchService.js";

// ─── SEARCH ──────────────────────────────────────────────────────────────────
// @desc    Search products across Amazon, Flipkart, Myntra
// @route   POST /api/search
// @access  Public
export const search = async (req, res) => {
  try {
    const {
      query = "",
      category = "",
      minPrice = 0,
      maxPrice = 10000000,
      platforms = [],
      sortBy = "relevance",
    } = req.body;

    if (!query && !category) {
      return res.status(400).json({
        success: false,
        message: "Provide at least a 'query' or 'category' to search.",
      });
    }

    const results = await searchProducts({
      query: String(query).trim(),
      category: String(category).trim(),
      minPrice: Number(minPrice),
      maxPrice: Number(maxPrice),
      platforms: Array.isArray(platforms) ? platforms : [],
      sortBy: String(sortBy),
    });

    return res.status(200).json({ success: true, ...results });
  } catch (error) {
    console.error("Search Controller Error:", error);
    return res.status(500).json({
      success: false,
      message: "Search failed. Please try again.",
      error: error.message,
    });
  }
};

// ─── GET SINGLE PRODUCT ───────────────────────────────────────────────────────
// @desc    Get full product details + all platform variants
// @route   GET /api/products/:id
// @access  Public
export const getProduct = async (req, res) => {
  try {
    const { product, allPlatformVariants } = await getProductById(req.params.id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: `Product with ID '${req.params.id}' not found.`,
      });
    }

    return res.status(200).json({
      success: true,
      product,
      allPlatformVariants,
      variantCount: allPlatformVariants.length,
    });
  } catch (error) {
    console.error("GetProduct Controller Error:", error);
    return res.status(500).json({
      success: false,
      message: "Error fetching product details.",
      error: error.message,
    });
  }
};

// ─── GET ALTERNATIVES ─────────────────────────────────────────────────────────
// @desc    Get cheaper / similar / premium alternatives for a product
// @route   GET /api/products/:id/alternatives
// @access  Public
export const getProductAlternatives = async (req, res) => {
  try {
    const alternatives = await getAlternatives(req.params.id);

    return res.status(200).json({
      success: true,
      productId: req.params.id,
      ...alternatives,
      totalAlternatives:
        alternatives.cheaper.length +
        alternatives.similar.length +
        alternatives.premium.length,
    });
  } catch (error) {
    console.error("Alternatives Controller Error:", error);
    return res.status(500).json({
      success: false,
      message: "Error fetching alternatives.",
      error: error.message,
    });
  }
};

// ─── BUDGET EXPLORER ─────────────────────────────────────────────────────────
// @desc    Find what better products unlock at a higher budget
// @route   POST /api/budget-explorer
// @access  Public
export const budgetExplorerHandler = async (req, res) => {
  try {
    const { productId, extraBudget } = req.body;

    if (!productId) {
      return res.status(400).json({
        success: false,
        message: "'productId' is required.",
      });
    }

    if (!extraBudget || isNaN(Number(extraBudget)) || Number(extraBudget) <= 0) {
      return res.status(400).json({
        success: false,
        message: "'extraBudget' must be a positive number (amount in INR to add to current price).",
      });
    }

    const result = await budgetExplorer(productId, Number(extraBudget));

    if (!result.currentProduct) {
      return res.status(404).json({
        success: false,
        message: `Product '${productId}' not found.`,
      });
    }

    return res.status(200).json({
      success: true,
      ...result,
      newBudgetCeiling: result.currentProduct.price + Number(extraBudget),
    });
  } catch (error) {
    console.error("BudgetExplorer Controller Error:", error);
    return res.status(500).json({
      success: false,
      message: "Budget explorer failed.",
      error: error.message,
    });
  }
};
