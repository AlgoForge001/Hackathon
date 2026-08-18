import express from "express";
import {
  search,
  getProduct,
  getProductAlternatives,
  budgetExplorerHandler,
  getProductSignal,
} from "../controllers/productController.js";
import { strictArcjetGuard, generalArcjetGuard } from "../middleware/arcjetMiddleware.js";

const router = express.Router();

// POST /api/search  — main product search (Strict: Rate Limit 10/10s + Shield WAF + Bot Detection)
router.post("/search", strictArcjetGuard, search);

// POST /api/search/image  — image-based search (Strict: Rate Limit 10/10s + Shield WAF + Bot Detection)
router.post("/search/image", strictArcjetGuard, search);

// GET /api/products/:id  — single product detail + all platform variants
router.get("/products/:id", getProduct);

// GET /api/products/:id/alternatives  — cheaper / similar / premium alternatives
router.get("/products/:id/alternatives", getProductAlternatives);

// POST /api/budget-explorer  — "what unlocks if I spend X more?" (General Rate Limit 60/min + Shield + Bot)
router.post("/budget-explorer", generalArcjetGuard, budgetExplorerHandler);

// GET /api/products/:id/signal  — quantitative Python buy/sell signal
router.get("/products/:id/signal", getProductSignal);

export default router;
