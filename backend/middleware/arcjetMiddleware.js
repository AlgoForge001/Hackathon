import { strictArcjet, generalArcjet, emailArcjet } from "../lib/arcjet.js";

/**
 * Formats a clean, structured JSON response when Arcjet denies a request.
 */
const handleDenial = (res, decision) => {
  if (decision.reason.isRateLimit()) {
    return res.status(429).json({
      success: false,
      error: "Rate limit exceeded",
      reason: "RATE_LIMIT",
      message: "Too many requests. Please slow down and try again later.",
      retryAfter: decision.reason.resetTime || null,
    });
  }

  if (decision.reason.isBot()) {
    return res.status(403).json({
      success: false,
      error: "Access denied",
      reason: "BOT_DETECTED",
      message: "Automated bot traffic is not permitted on this API endpoint.",
    });
  }

  if (decision.reason.isShield()) {
    return res.status(403).json({
      success: false,
      error: "Blocked by Shield WAF",
      reason: "SHIELD_WAF_TRIGGERED",
      message: "Request blocked due to suspicious pattern (SQLi, XSS, or attack payload).",
    });
  }

  if (decision.reason.isEmail()) {
    return res.status(400).json({
      success: false,
      error: "Invalid email address",
      reason: "INVALID_EMAIL",
      message: "Please provide a valid, non-disposable email address.",
    });
  }

  return res.status(403).json({
    success: false,
    error: "Forbidden",
    reason: "SECURITY_POLICY_DENIED",
    message: "Request blocked by security policies.",
  });
};

/**
 * Strict Arcjet Middleware
 * Designed for computationally heavy and LLM-backed endpoints:
 * - /api/search
 * - /api/chat
 * - /api/search/image
 * Token Bucket: 10 requests / 10s + Shield WAF + Bot Detection
 */
export const strictArcjetGuard = async (req, res, next) => {
  // Fail open if ARCJET_KEY is not configured (e.g. initial demo setup without key)
  if (!process.env.ARCJET_KEY) {
    return next();
  }

  try {
    const decision = await strictArcjet.protect(req);

    if (decision.isDenied()) {
      return handleDenial(res, decision);
    }

    if (decision.isErrored()) {
      console.warn("⚠️ Arcjet decision errored (failing open):", decision.reason?.message || "Unknown error");
      return next();
    }

    return next();
  } catch (error) {
    // Fail open if Arcjet service is unreachable or encounters network failure
    console.error("⚠️ Arcjet service unreachable (failing open for demo stability):", error.message);
    return next();
  }
};

/**
 * General Arcjet Middleware
 * Designed for standard API endpoints:
 * - /api/alerts
 * - /api/budget-explorer
 * - /api/products/:id/signal
 * Token Bucket: 60 requests / min + Shield WAF + Bot Detection
 */
export const generalArcjetGuard = async (req, res, next) => {
  // Fail open if ARCJET_KEY is not configured
  if (!process.env.ARCJET_KEY) {
    return next();
  }

  try {
    const decision = await generalArcjet.protect(req);

    if (decision.isDenied()) {
      return handleDenial(res, decision);
    }

    if (decision.isErrored()) {
      console.warn("⚠️ Arcjet decision errored (failing open):", decision.reason?.message || "Unknown error");
      return next();
    }

    return next();
  } catch (error) {
    // Fail open if Arcjet service is unreachable
    console.error("⚠️ Arcjet service unreachable (failing open for demo stability):", error.message);
    return next();
  }
};

/**
 * Email Validation Arcjet Middleware
 * Validates email format and blocks disposable/temporary email addresses on signup/auth routes
 */
export const emailArcjetGuard = async (req, res, next) => {
  // Fail open if ARCJET_KEY is not configured
  if (!process.env.ARCJET_KEY) {
    return next();
  }

  const emailToValidate = req.body?.email || req.body?.emailAddress;

  // If no email field provided in body, fallback to general security checks
  if (!emailToValidate) {
    return generalArcjetGuard(req, res, next);
  }

  try {
    const decision = await emailArcjet.protect(req, { email: emailToValidate });

    if (decision.isDenied()) {
      return handleDenial(res, decision);
    }

    if (decision.isErrored()) {
      console.warn("⚠️ Arcjet decision errored (failing open):", decision.reason?.message || "Unknown error");
      return next();
    }

    return next();
  } catch (error) {
    // Fail open if Arcjet service is unreachable
    console.error("⚠️ Arcjet service unreachable (failing open for demo stability):", error.message);
    return next();
  }
};
