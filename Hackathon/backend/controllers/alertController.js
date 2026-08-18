import Alert from "../models/Alert.js";

// ─── CREATE ALERT ─────────────────────────────────────────────────────────────
// @desc    Create a price drop alert for a product
// @route   POST /api/alerts
// @access  Private (JWT required)
export const createAlert = async (req, res) => {
  try {
    const { productId, productTitle, platform, currentPrice, targetPrice, imageUrl } = req.body;

    if (!productId || !currentPrice || !targetPrice) {
      return res.status(400).json({
        success: false,
        message: "productId, currentPrice, and targetPrice are required.",
      });
    }

    if (Number(targetPrice) >= Number(currentPrice)) {
      return res.status(400).json({
        success: false,
        message: `Target price (₹${targetPrice}) must be lower than current price (₹${currentPrice}).`,
      });
    }

    // Check if alert already exists for this product + user
    const existing = await Alert.findOne({
      userId: req.user._id,
      productId,
      active: true,
    });

    if (existing) {
      // Update existing alert instead of creating duplicate
      existing.targetPrice = Number(targetPrice);
      existing.currentPrice = Number(currentPrice);
      await existing.save();
      return res.status(200).json({
        success: true,
        message: "Price alert updated!",
        alert: existing,
      });
    }

    const alert = await Alert.create({
      userId: req.user._id,
      productId,
      productTitle: productTitle || productId,
      platform: platform || "any",
      currentPrice: Number(currentPrice),
      targetPrice: Number(targetPrice),
      imageUrl: imageUrl || "",
    });

    return res.status(201).json({
      success: true,
      message: `Alert set! You'll be notified when price drops to ₹${Number(targetPrice).toLocaleString("en-IN")}.`,
      alert,
    });
  } catch (error) {
    console.error("CreateAlert Controller Error:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to create alert.",
      error: error.message,
    });
  }
};

// ─── GET USER ALERTS ──────────────────────────────────────────────────────────
// @desc    Get all active price alerts for the logged-in user
// @route   GET /api/alerts
// @access  Private (JWT required)
export const getUserAlerts = async (req, res) => {
  try {
    const alerts = await Alert.find({
      userId: req.user._id,
      active: true,
    }).sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      count: alerts.length,
      alerts,
    });
  } catch (error) {
    console.error("GetAlerts Controller Error:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to fetch alerts.",
      error: error.message,
    });
  }
};

// ─── DELETE ALERT ─────────────────────────────────────────────────────────────
// @desc    Deactivate (soft delete) a price alert
// @route   DELETE /api/alerts/:id
// @access  Private (JWT required)
export const deleteAlert = async (req, res) => {
  try {
    const alert = await Alert.findOneAndUpdate(
      { _id: req.params.id, userId: req.user._id },
      { active: false },
      { new: true }
    );

    if (!alert) {
      return res.status(404).json({
        success: false,
        message: "Alert not found or you do not have permission to delete it.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Alert deleted successfully.",
    });
  } catch (error) {
    console.error("DeleteAlert Controller Error:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to delete alert.",
      error: error.message,
    });
  }
};
