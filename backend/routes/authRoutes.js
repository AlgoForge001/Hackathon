import express from "express";
import {
  register,
  login,
  demoLogin,
  googleAuth,
  getMe,
  updateProfile,
} from "../controllers/authController.js";
import { protect } from "../middleware/authMiddleware.js";
import { emailArcjetGuard, generalArcjetGuard } from "../middleware/arcjetMiddleware.js";

const router = express.Router();

// Email + Password Registration (Email validation + Shield WAF + Bot Detection)
router.post("/register", emailArcjetGuard, register);

// Email + Password Login
router.post("/login", generalArcjetGuard, login);

// 1-Click Instant Demo Login
router.post("/demo", generalArcjetGuard, demoLogin);

// Google OAuth endpoint
router.post("/google", emailArcjetGuard, googleAuth);

// Get current user profile (Protected)
router.get("/me", protect, getMe);

// Update user profile (Protected)
router.put("/profile", protect, updateProfile);

export default router;
