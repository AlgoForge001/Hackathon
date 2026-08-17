import express from "express";
import { googleAuth, getMe } from "../controllers/authController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// Google login endpoint
router.post("/google", googleAuth);

// Get current user profile
router.get("/me", protect, getMe);

export default router;
