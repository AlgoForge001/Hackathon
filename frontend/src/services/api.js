import axios from "axios";
import { searchMockProducts, getAlternatives, budgetExplorer } from "./mockData.js";

const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

// ─────────────────────────────────────────────────────────────────────────────
// AXIOS INSTANCE — with JWT auth interceptor
// ─────────────────────────────────────────────────────────────────────────────
const apiClient = axios.create({
  baseURL: BASE_URL,
  timeout: 8000,
  headers: { "Content-Type": "application/json" },
});

// Attach JWT token to every request if available
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// ─────────────────────────────────────────────────────────────────────────────
// HEALTH CHECK
// ─────────────────────────────────────────────────────────────────────────────
let _backendOnline = null;

export const checkBackendHealth = async () => {
  try {
    const res = await apiClient.get("/health", { timeout: 3000 });
    _backendOnline = res.data?.status === "OK";
  } catch {
    _backendOnline = false;
  }
  return _backendOnline;
};

const isOnline = () => _backendOnline !== false;

// ─────────────────────────────────────────────────────────────────────────────
// SEARCH — POST /api/search → fallback to mockData
// ─────────────────────────────────────────────────────────────────────────────
export const searchProducts = async ({ query, category, minPrice, maxPrice, platforms, sortBy }) => {
  try {
    if (isOnline()) {
      const res = await apiClient.post("/search", { query, category, minPrice, maxPrice, platforms, sortBy });
      return res.data;
    }
  } catch (err) {
    console.warn("[API] /search failed, using mock data:", err.message);
  }

  // Offline fallback
  await _fakeDelay(400);
  return searchMockProducts({ query, category, minPrice, maxPrice, platforms, sortBy });
};

// ─────────────────────────────────────────────────────────────────────────────
// GET PRODUCT DETAIL — GET /api/products/:id
// ─────────────────────────────────────────────────────────────────────────────
export const getProductById = async (id) => {
  try {
    if (isOnline()) {
      const res = await apiClient.get(`/products/${id}`);
      if (res.data) return res.data;
    }
  } catch (err) {
    console.warn("[API] /products/:id failed, using mock:", err.message);
  }

  await _fakeDelay(200);
  const { mockProducts } = await import("./mockData.js");
  const cleanId = id.replace(/-amazon$/, "").replace(/-flipkart$/, "").replace(/-myntra$/, "");
  const product = mockProducts.find((p) => p.id === id || p.product_id === id || p.groupId === id || p.group_id === id || p.groupId === cleanId) || mockProducts[0];
  const allPlatformVariants = mockProducts.filter((p) => (p.groupId || p.group_id) === (product.groupId || product.group_id));

  return {
    product,
    allPlatformVariants: allPlatformVariants.length > 0 ? allPlatformVariants : [product],
  };
};

// ─────────────────────────────────────────────────────────────────────────────
// GET ALTERNATIVES — GET /api/products/:id/alternatives
// ─────────────────────────────────────────────────────────────────────────────
export const getProductAlternatives = async (id) => {
  try {
    if (isOnline()) {
      const res = await apiClient.get(`/products/${id}/alternatives`);
      return res.data;
    }
  } catch (err) {
    console.warn("[API] /alternatives failed, using mock:", err.message);
  }

  await _fakeDelay(300);
  return getAlternatives(id);
};

// ─────────────────────────────────────────────────────────────────────────────
// BUDGET EXPLORER — POST /api/budget-explorer
// ─────────────────────────────────────────────────────────────────────────────
export const exploreBudget = async (productId, extraBudget) => {
  try {
    if (isOnline()) {
      const res = await apiClient.post("/budget-explorer", { productId, extraBudget });
      return res.data;
    }
  } catch (err) {
    console.warn("[API] /budget-explorer failed, using mock:", err.message);
  }

  await _fakeDelay(300);
  return budgetExplorer(productId, extraBudget);
};

// ─────────────────────────────────────────────────────────────────────────────
// CHAT — POST /api/chat
// ─────────────────────────────────────────────────────────────────────────────
export const sendChatMessage = async ({ message, history = [] }) => {
  try {
    if (isOnline()) {
      const res = await apiClient.post("/chat", { message, history });
      return res.data;
    }
  } catch (err) {
    console.warn("[API] /chat failed, using fallback response:", err.message);
  }

  // Offline chat fallback
  await _fakeDelay(800);
  return _mockChatResponse(message);
};

// ─────────────────────────────────────────────────────────────────────────────
// PRICE ALERTS — POST /api/alerts
// ─────────────────────────────────────────────────────────────────────────────
export const createPriceAlert = async ({ productId, targetPrice, platform }) => {
  try {
    if (isOnline()) {
      const res = await apiClient.post("/alerts", { productId, targetPrice, platform });
      return res.data;
    }
  } catch (err) {
    console.warn("[API] /alerts failed, storing locally:", err.message);
  }

  // Local fallback
  const alert = { id: Date.now().toString(), productId, targetPrice, platform, active: true, createdAt: new Date().toISOString() };
  const existing = JSON.parse(localStorage.getItem("priceAlerts") || "[]");
  localStorage.setItem("priceAlerts", JSON.stringify([...existing, alert]));
  return { success: true, alert };
};

export const getPriceAlerts = async () => {
  try {
    if (isOnline()) {
      const res = await apiClient.get("/alerts");
      return res.data;
    }
  } catch (err) {
    console.warn("[API] GET /alerts failed:", err.message);
  }
  return JSON.parse(localStorage.getItem("priceAlerts") || "[]");
};

export const deletePriceAlert = async (alertId) => {
  try {
    if (isOnline()) {
      const res = await apiClient.delete(`/alerts/${alertId}`);
      return res.data;
    }
  } catch (err) {
    console.warn("[API] DELETE /alerts/:id failed:", err.message);
  }
  const existing = JSON.parse(localStorage.getItem("priceAlerts") || "[]");
  localStorage.setItem("priceAlerts", JSON.stringify(existing.filter((a) => a.id !== alertId)));
  return { success: true };
};

// ─────────────────────────────────────────────────────────────────────────────
// IMAGE SEARCH — POST /api/search/image
// ─────────────────────────────────────────────────────────────────────────────
export const searchByImage = async (imageBase64) => {
  try {
    if (isOnline()) {
      const res = await apiClient.post("/search/image", { imageBase64 });
      return res.data;
    }
  } catch (err) {
    console.warn("[API] /search/image failed:", err.message);
  }

  await _fakeDelay(1200);
  return searchMockProducts({ query: "trending" });
};

// ─────────────────────────────────────────────────────────────────────────────
// HELPERS
// ─────────────────────────────────────────────────────────────────────────────
const _fakeDelay = (ms) => new Promise((r) => setTimeout(r, ms));

const _mockChatResponse = (message) => {
  const lower = message.toLowerCase();
  let query = "trending";
  if (lower.includes("headphone") || lower.includes("earphone") || lower.includes("earbuds") || lower.includes("airpods")) query = "headphones";
  else if (lower.includes("shoe") || lower.includes("sneaker") || lower.includes("running")) query = "shoes";
  else if (lower.includes("laptop") || lower.includes("computer")) query = "laptop";
  else if (lower.includes("shirt") || lower.includes("jeans") || lower.includes("fashion")) query = "fashion";

  const { results } = searchMockProducts({ query, sortBy: "best_value" });
  return {
    reply: `Great choice! Based on your request, I found ${results.length} matching products. Here are the top picks I recommend:`,
    suggestedProducts: results.slice(0, 3).map((p) => p.id),
    products: results.slice(0, 3),
    appliedFilters: { query },
  };
};

export default apiClient;
