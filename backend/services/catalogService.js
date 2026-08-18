import mongoose from "mongoose";
import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import path from "path";
import Product from "../models/Product.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Light TTL cache for local JSON fallback — expires every 30 seconds
let localFileCache = null;
let localFileCacheTime = 0;
const LOCAL_CACHE_TTL_MS = 30 * 1000; // 30 seconds

export async function getProductCatalog() {
  // PRIMARY: MongoDB Atlas — always fresh, never stale
  if (mongoose.connection.readyState === 1) {
    try {
      const dbProducts = await Product.find().lean();
      if (dbProducts && dbProducts.length > 0) {
        return dbProducts;
      }
    } catch (err) {
      console.warn("⚠️ MongoDB query error, falling back to local file:", err.message);
    }
  }

  // FALLBACK: Local JSON with short TTL (30s) so changes are picked up quickly
  const now = Date.now();
  if (!localFileCache || now - localFileCacheTime > LOCAL_CACHE_TTL_MS) {
    const raw = readFileSync(path.join(__dirname, "../data/mockProducts.json"), "utf-8");
    localFileCache = JSON.parse(raw);
    localFileCacheTime = now;
    console.log("📂 Refreshed local JSON catalog cache");
  }
  return localFileCache;
}

/** Call this after re-seeding to force a fresh catalog read on next request. */
export function invalidateCatalogCache() {
  localFileCache = null;
  localFileCacheTime = 0;
}
