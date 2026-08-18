import { OAuth2Client } from "google-auth-library";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

// Generate Application JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET || "default_jwt_secret", {
    expiresIn: "30d",
  });
};

// @desc    Auth with Google (Verify ID token, create/find user, issue JWT)
// @route   POST /api/auth/google
// @access  Public
export const googleAuth = async (req, res) => {
  try {
    const { credential } = req.body;

    if (!credential) {
      return res.status(400).json({ success: false, message: "Google credential token is required" });
    }

    // Verify Google ID token
    const ticket = await client.verifyIdToken({
      idToken: credential,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();
    const { sub: googleId, email, name, picture } = payload;

    // Find or create user
    let user = await User.findOne({ email });

    if (user) {
      // Update Google ID or picture if not set
      user.googleId = googleId;
      if (picture && !user.picture) user.picture = picture;
      await user.save();
    } else {
      user = await User.create({
        googleId,
        email,
        name,
        picture,
      });
    }

    const token = generateToken(user._id);

    return res.status(200).json({
      success: true,
      message: "Authentication successful",
      token,
      user: {
        id: user._id,
        googleId: user.googleId,
        name: user.name,
        email: user.email,
        picture: user.picture,
        role: user.role,
      },
    });
  } catch (error) {
    console.error("Google Auth Controller Error:", error);
    return res.status(401).json({
      success: false,
      message: "Google authentication failed",
      error: error.message,
    });
  }
};

// @desc    Get current user profile
// @route   GET /api/auth/me
// @access  Private
export const getMe = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select("-__v");
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }
    return res.status(200).json({ success: true, user });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Server error", error: error.message });
  }
};
