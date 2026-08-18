import mongoose from "mongoose";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import Product from "../models/Product.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Load backend .env
dotenv.config({ path: path.join(__dirname, "../.env") });

const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  console.error("❌ MONGO_URI is missing in backend/.env");
  process.exit(1);
}

const seedDatabase = async () => {
  try {
    console.log("🔌 Connecting to MongoDB Atlas...");
    await mongoose.connect(MONGO_URI);
    console.log("✅ Connected to MongoDB Atlas:", mongoose.connection.name);

    const catalogPath = path.join(__dirname, "../data/mockProducts.json");
    const productsData = JSON.parse(fs.readFileSync(catalogPath, "utf-8"));

    console.log(`📦 Seeding ${productsData.length} product groups into MongoDB Atlas...`);

    // Clean existing products collection
    await Product.deleteMany({});
    console.log("🧹 Cleared existing products collection in MongoDB Atlas.");

    // Insert all product groups
    const result = await Product.insertMany(productsData);
    console.log(`🎉 Successfully seeded ${result.length} product groups (${result.length * 3} platform listings) to MongoDB Atlas!`);

    const count = await Product.countDocuments();
    console.log(`📊 Verified count in MongoDB Atlas 'products' collection: ${count}`);

    await mongoose.disconnect();
    console.log("🔌 Disconnected from MongoDB Atlas.");
    process.exit(0);
  } catch (error) {
    console.error("❌ Error during database seeding:", error);
    process.exit(1);
  }
};

seedDatabase();
