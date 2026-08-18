import express from "express";
import { createAlert, getUserAlerts, deleteAlert } from "../controllers/alertController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// POST /api/alerts  — create a price alert (JWT required)
router.post("/alerts", protect, createAlert);

// GET /api/alerts  — list all active alerts for current user (JWT required)
router.get("/alerts", protect, getUserAlerts);

// DELETE /api/alerts/:id  — soft-delete an alert (JWT required)
router.delete("/alerts/:id", protect, deleteAlert);

export default router;
