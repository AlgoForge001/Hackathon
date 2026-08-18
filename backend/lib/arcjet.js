import arcjet, {
  shield,
  detectBot,
  tokenBucket,
  validateEmail,
} from "@arcjet/node";
import dotenv from "dotenv";

dotenv.config();

// Base Shield WAF: blocks SQLi, XSS, and common exploits in LIVE mode
export const shieldRule = shield({
  mode: "LIVE",
});

// Bot Detection: blocks malicious/automated scrapers, allows verified search engines
export const botDetectionRule = detectBot({
  mode: "LIVE",
  allow: ["CATEGORY:SEARCH_ENGINE"],
});

// Stricter Rate Limit Token Bucket (10 requests per 10s) for expensive AI/LLM/Search routes
export const strictRateLimitRule = tokenBucket({
  mode: "LIVE",
  refillRate: 10,
  interval: 10,
  capacity: 10,
});

// General Rate Limit Token Bucket (60 requests per minute) for standard API endpoints
export const generalRateLimitRule = tokenBucket({
  mode: "LIVE",
  refillRate: 60,
  interval: 60,
  capacity: 60,
});

// Email Validation: blocks invalid, disposable, and domain-less email formats
export const emailValidationRule = validateEmail({
  mode: "LIVE",
  deny: ["DISPOSABLE", "INVALID", "NO_MX_RECORDS"],
});

/**
 * Shared Arcjet Security Clients
 * Initialized with process.env.ARCJET_KEY
 */
const arcjetKey = process.env.ARCJET_KEY || "";

// Instance for expensive AI & Search endpoints (/api/search, /api/chat, /api/search/image)
export const strictArcjet = arcjet({
  key: arcjetKey,
  rules: [shieldRule, botDetectionRule, strictRateLimitRule],
});

// Instance for general API routes (/api/alerts, /api/budget-explorer, /api/auth)
export const generalArcjet = arcjet({
  key: arcjetKey,
  rules: [shieldRule, botDetectionRule, generalRateLimitRule],
});

// Instance for email validation routes (signup, registration, newsletter)
export const emailArcjet = arcjet({
  key: arcjetKey,
  rules: [shieldRule, botDetectionRule, generalRateLimitRule, emailValidationRule],
});

// Default shared export
export default generalArcjet;
