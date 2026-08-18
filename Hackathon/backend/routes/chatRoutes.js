import express from "express";
import { chat } from "../controllers/chatController.js";

const router = express.Router();

// POST /api/chat  — AI shopping assistant chat
router.post("/chat", chat);

export default router;
