import mongoose from "mongoose";
import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import path from "path";
import Product from "../models/Product.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
let cachedLocal = null;

export async function getProductCatalog() {
  // If MongoDB is connected and ready, query directly from MongoDB Atlas
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

  // Fallback to local JSON file
  if (!cachedLocal) {
    const raw = readFileSync(path.join(__dirname, "../data/mockProducts.json"), "utf-8");
    cachedLocal = JSON.parse(raw);
  }
  return cachedLocal;
}
