import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/mern_db";

// Middlewares
app.use(cors({ origin: process.env.CLIENT_URL || "http://localhost:5173", credentials: true }));
app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/api/auth", authRoutes);

// Base Route
app.get("/api/health", (req, res) => {
  res.json({ status: "OK", message: "MERN Stack API is running successfully!" });
});

// Database connection & Server start
mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB successfully");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.warn("MongoDB connection failed:", err.message);
    console.log(`Starting server on port ${PORT}...`);
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  });
