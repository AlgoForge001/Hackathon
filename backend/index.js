import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import cookieParser from "cookie-parser";

import authRoutes from "./routes/authRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import chatRoutes from "./routes/chatRoutes.js";
import alertRoutes from "./routes/alertRoutes.js";
import { clearAllCache } from "./middleware/cacheMiddleware.js";
import { invalidateCatalogCache } from "./services/catalogService.js";

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
    openrouter: process.env.OPENROUTER_API_KEY ? "configured" : "MISSING — add to .env",
    arcjet: process.env.ARCJET_KEY ? "configured (LIVE mode)" : "fail-open (no ARCJET_KEY in .env)",
    endpoints: [
      "POST /api/search",
      "GET  /api/products/:id",
      "GET  /api/products/:id/alternatives",
      "POST /api/budget-explorer",
      "POST /api/chat",
      "POST /api/alerts",
      "GET  /api/alerts",
      "DELETE /api/alerts/:id",
      "POST /api/auth/google",
      "GET  /api/auth/me",
    ],
    timestamp: new Date().toISOString(),
  });
});

// ─── Cache Clear (dev/admin utility) ─────────────────────────────────────────
app.get("/api/cache/clear", (req, res) => {
  clearAllCache();
  invalidateCatalogCache();
  res.json({ success: true, message: "All caches cleared. Next request will load fresh data." });
});

// ─── 404 Handler ─────────────────────────────────────────────────────────────
app.use("/{*path}", (req, res) => {
  res.status(404).json({ success: false, message: `Route ${req.originalUrl} not found` });
});

// ─── Database & Server Start ──────────────────────────────────────────────────
mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("✅ Connected to MongoDB successfully");
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
      console.log(`📋 Health check: http://localhost:${PORT}/api/health`);
    });
  })
  .catch((err) => {
    console.warn("⚠️  MongoDB connection failed:", err.message);
    console.log("Starting server without database...");
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT} (no DB)`);
    });
  });
