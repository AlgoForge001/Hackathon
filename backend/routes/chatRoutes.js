import express from "express";
import { chat } from "../controllers/chatController.js";
import { strictArcjetGuard } from "../middleware/arcjetMiddleware.js";

const router = express.Router();

// POST /api/chat  — AI shopping assistant chat (Strict: Rate Limit 10/10s + Shield WAF + Bot Detection)
router.post("/chat", strictArcjetGuard, chat);

export default router;
