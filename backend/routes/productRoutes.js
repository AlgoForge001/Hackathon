import express from "express";
import {
  search,
  getProduct,
  getProductAlternatives,
  budgetExplorerHandler,
} from "../controllers/productController.js";

const router = express.Router();

// POST /api/search  — main product search
router.post("/search", search);

// GET /api/products/:id  — single product detail + all platform variants
router.get("/products/:id", getProduct);

// GET /api/products/:id/alternatives  — cheaper / similar / premium alternatives
router.get("/products/:id/alternatives", getProductAlternatives);

// POST /api/budget-explorer  — "what unlocks if I spend X more?"
router.post("/budget-explorer", budgetExplorerHandler);

export default router;
