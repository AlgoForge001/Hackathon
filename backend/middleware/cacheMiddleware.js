/**
 * Simple in-memory TTL cache using a Map.
 * Keys auto-expire after TTL milliseconds.
 * Usage:
 *   import { getCache, setCache, clearCache } from "../middleware/cacheMiddleware.js";
 *   setCache("search:headphones", results, 600000);
 *   const cached = getCache("search:headphones");
 */

const cache = new Map();
const DEFAULT_TTL = 2 * 60 * 1000; // 2 minutes (reduced from 10 to prevent stale data)

/**
 * Get a value from cache. Returns null if key doesn't exist or is expired.
 * @param {string} key
 * @returns {any|null}
 */
export function getCache(key) {
  const entry = cache.get(key);
  if (!entry) return null;

  if (Date.now() > entry.expiresAt) {
    cache.delete(key);
    return null;
  }

  return entry.value;
}

/**
 * Store a value in cache with optional TTL.
 * @param {string} key
 * @param {any} value
 * @param {number} ttl - time to live in ms (default 10 min)
 */
export function setCache(key, value, ttl = DEFAULT_TTL) {
  cache.set(key, {
    value,
    expiresAt: Date.now() + ttl,
  });
}

/**
 * Remove a specific key from cache.
 * @param {string} key
 */
export function clearCache(key) {
  cache.delete(key);
}

/**
 * Clear all cache entries (useful for testing).
 */
export function clearAllCache() {
  cache.clear();
}

/**
 * Get cache stats for debugging.
 * @returns {Object}
 */
export function getCacheStats() {
  return {
    totalKeys: cache.size,
    keys: Array.from(cache.keys()),
  };
}
