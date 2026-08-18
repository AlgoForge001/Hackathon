import { OAuth2Client } from "google-auth-library";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

// Generate Application JWT (30 days expiration)
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET || "default_jwt_secret", {
    expiresIn: "30d",
  });
};

// Helper: Format User object for responses
const sanitizeUser = (user) => ({
  id: user._id,
  _id: user._id,
  name: user.name,
  email: user.email,
  picture: user.picture,
  role: user.role,
  authProvider: user.authProvider,
  createdAt: user.createdAt,
});

// @desc    Register a new user (Email + Password)
// @route   POST /api/auth/register
// @access  Public
export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please provide name, email, and password.",
      });
    }

    if (password.length < 6) {
      return res.status(400).json({
        success: false,
        message: "Password must be at least 6 characters.",
      });
    }

    const normalizedEmail = email.toLowerCase().trim();

    // Check if user already exists
    const existingUser = await User.findOne({ email: normalizedEmail });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "An account with this email already exists. Please sign in.",
      });
    }

    // Create new user
    const user = await User.create({
      name: name.trim(),
      email: normalizedEmail,
      password,
      authProvider: "local",
    });

    const token = generateToken(user._id);

    return res.status(201).json({
      success: true,
      message: "Account registered successfully!",
      token,
      user: sanitizeUser(user),
    });
  } catch (error) {
    console.error("Auth Register Error:", error);
    return res.status(500).json({
      success: false,
      message: "Server error during registration",
      error: error.message,
    });
  }
};

// @desc    Login with Email + Password
// @route   POST /api/auth/login
// @access  Public
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please provide both email and password.",
      });
    }

    const normalizedEmail = email.toLowerCase().trim();

    // Find user and include password field for comparison
    const user = await User.findOne({ email: normalizedEmail }).select("+password");

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password.",
      });
    }

    // Check if password exists (e.g. user registered via Google only)
    if (!user.password) {
      return res.status(400).json({
        success: false,
        message: "This account was created with Google Sign-In. Please use Google to continue.",
      });
    }

    const isMatch = await user.matchPassword(password);
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password.",
      });
    }

    const token = generateToken(user._id);

    return res.status(200).json({
      success: true,
      message: "Logged in successfully!",
      token,
      user: sanitizeUser(user),
    });
  } catch (error) {
    console.error("Auth Login Error:", error);
    return res.status(500).json({
      success: false,
      message: "Server error during login",
      error: error.message,
    });
  }
};

// @desc    Instant 1-Click Demo Login (for frictionless testing and judging)
// @route   POST /api/auth/demo
// @access  Public
export const demoLogin = async (req, res) => {
  try {
    const demoEmail = "demo.shopper@shopsy.ai";
    let user = await User.findOne({ email: demoEmail });

    if (!user) {
      user = await User.create({
        name: "Demo Shopper",
        email: demoEmail,
        authProvider: "demo",
        picture: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
      });
    }

    const token = generateToken(user._id);

    return res.status(200).json({
      success: true,
      message: "Signed in as Demo Shopper!",
      token,
      user: sanitizeUser(user),
    });
  } catch (error) {
    console.error("Demo Login Error:", error);
    return res.status(500).json({
      success: false,
      message: "Server error during demo login",
      error: error.message,
    });
  }
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

    let googleId, email, name, picture;

    // Verify Google ID token if client id is configured, or decode payload
    if (process.env.GOOGLE_CLIENT_ID) {
      const ticket = await client.verifyIdToken({
        idToken: credential,
        audience: process.env.GOOGLE_CLIENT_ID,
      });
      const payload = ticket.getPayload();
      googleId = payload.sub;
      email = payload.email;
      name = payload.name;
      picture = payload.picture;
    } else {
      // Decode JWT without verify if GOOGLE_CLIENT_ID is not yet configured locally
      const decoded = jwt.decode(credential);
      if (!decoded) {
        return res.status(400).json({ success: false, message: "Invalid Google token." });
      }
      googleId = decoded.sub;
      email = decoded.email;
      name = decoded.name || "Google User";
      picture = decoded.picture || "";
    }

    // Find or create user
    let user = await User.findOne({ email });

    if (user) {
      user.googleId = googleId;
      user.authProvider = "google";
      if (picture && !user.picture) user.picture = picture;
      await user.save();
    } else {
      user = await User.create({
        googleId,
        email,
        name,
        picture,
        authProvider: "google",
      });
    }

    const token = generateToken(user._id);

    return res.status(200).json({
      success: true,
      message: "Google authentication successful",
      token,
      user: sanitizeUser(user),
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
    const user = await User.findById(req.user._id).select("-password -__v");
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }
    return res.status(200).json({ success: true, user: sanitizeUser(user) });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Server error", error: error.message });
  }
};

// @desc    Update user profile
// @route   PUT /api/auth/profile
// @access  Private
export const updateProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    if (req.body.name) user.name = req.body.name.trim();
    if (req.body.picture) user.picture = req.body.picture;

    await user.save();

    return res.status(200).json({
      success: true,
      message: "Profile updated successfully",
      user: sanitizeUser(user),
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Server error", error: error.message });
  }
};
