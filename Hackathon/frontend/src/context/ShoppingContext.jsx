import React, { createContext, useContext, useReducer, useCallback } from "react";
import { searchProducts, sendChatMessage, createPriceAlert, getPriceAlerts, deletePriceAlert } from "../services/api.js";

// ─────────────────────────────────────────────────────────────────────────────
// INITIAL STATE
// ─────────────────────────────────────────────────────────────────────────────
const initialState = {
  // Search
  query: "",
  category: "all",
  results: [],
  bestOverallId: null,
  loading: false,
  hasSearched: false,
  error: null,

  // Filters
  filters: {
    minPrice: 0,
    maxPrice: 200000,
    platforms: [], // [] means all
    brands: [],
    sortBy: "best_value",
  },

  // Product Detail
  selectedProduct: null,
  detailModalOpen: false,

  // Chat
  chatOpen: false,
  chatHistory: [],
  chatLoading: false,

  // Alerts
  alerts: JSON.parse(localStorage.getItem("priceAlerts") || "[]"),
  alertModalProduct: null,
  alertModalOpen: false,

  // Toast
  toasts: [],

  // Voice / Image Search
  voiceModalOpen: false,
  imageModalOpen: false,

  // Budget Explorer
  budgetModalProduct: null,
  budgetModalOpen: false,
};

// ─────────────────────────────────────────────────────────────────────────────
// REDUCER
// ─────────────────────────────────────────────────────────────────────────────
const reducer = (state, action) => {
  switch (action.type) {
    case "SET_QUERY":
      return { ...state, query: action.payload };

    case "SET_CATEGORY":
      return { ...state, category: action.payload };

    case "SET_FILTER":
      return { ...state, filters: { ...state.filters, ...action.payload } };

    case "SEARCH_START":
      return { ...state, loading: true, error: null, hasSearched: true };

    case "SEARCH_SUCCESS":
      return {
        ...state,
        loading: false,
        results: action.payload.results,
        bestOverallId: action.payload.bestOverallId,
        error: null,
      };

    case "SEARCH_ERROR":
      return { ...state, loading: false, error: action.payload };

    case "SELECT_PRODUCT":
      return { ...state, selectedProduct: action.payload, detailModalOpen: true };

    case "CLOSE_DETAIL":
      return { ...state, detailModalOpen: false, selectedProduct: null };

    case "TOGGLE_CHAT":
      return { ...state, chatOpen: !state.chatOpen };

    case "CLOSE_CHAT":
      return { ...state, chatOpen: false };

    case "ADD_CHAT_MESSAGE":
      return { ...state, chatHistory: [...state.chatHistory, action.payload] };

    case "SET_CHAT_LOADING":
      return { ...state, chatLoading: action.payload };

    case "CLEAR_CHAT":
      return { ...state, chatHistory: [] };

    case "SET_ALERTS":
      return { ...state, alerts: action.payload };

    case "OPEN_ALERT_MODAL":
      return { ...state, alertModalProduct: action.payload, alertModalOpen: true };

    case "CLOSE_ALERT_MODAL":
      return { ...state, alertModalOpen: false, alertModalProduct: null };

    case "PUSH_TOAST":
      return { ...state, toasts: [...state.toasts, { id: Date.now(), ...action.payload }] };

    case "REMOVE_TOAST":
      return { ...state, toasts: state.toasts.filter((t) => t.id !== action.payload) };

    case "TOGGLE_VOICE_MODAL":
      return { ...state, voiceModalOpen: !state.voiceModalOpen };

    case "TOGGLE_IMAGE_MODAL":
      return { ...state, imageModalOpen: !state.imageModalOpen };

    case "OPEN_BUDGET_MODAL":
      return { ...state, budgetModalProduct: action.payload, budgetModalOpen: true };

    case "CLOSE_BUDGET_MODAL":
      return { ...state, budgetModalOpen: false, budgetModalProduct: null };

    default:
      return state;
  }
};

// ─────────────────────────────────────────────────────────────────────────────
// CONTEXT
// ─────────────────────────────────────────────────────────────────────────────
const ShoppingContext = createContext(null);

export const ShoppingProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // ── Search ──────────────────────────────────────────────────────────────────
  const runSearch = useCallback(
    async (overrides = {}) => {
      const params = {
        query: overrides.query ?? state.query,
        category: overrides.category ?? state.category,
        minPrice: state.filters.minPrice,
        maxPrice: state.filters.maxPrice,
        platforms: state.filters.platforms,
        sortBy: state.filters.sortBy,
        ...overrides,
      };
      dispatch({ type: "SEARCH_START" });
      try {
        const data = await searchProducts(params);
        dispatch({ type: "SEARCH_SUCCESS", payload: data });
      } catch (err) {
        dispatch({ type: "SEARCH_ERROR", payload: err.message });
      }
    },
    [state.query, state.category, state.filters]
  );

  const setQuery = (q) => dispatch({ type: "SET_QUERY", payload: q });
  const setCategory = (c) => {
    dispatch({ type: "SET_CATEGORY", payload: c });
    runSearch({ category: c });
  };
  const setFilter = (filter) => dispatch({ type: "SET_FILTER", payload: filter });

  // ── Product Detail ──────────────────────────────────────────────────────────
  const openProduct = (product) => dispatch({ type: "SELECT_PRODUCT", payload: product });
  const closeProduct = () => dispatch({ type: "CLOSE_DETAIL" });

  // ── Chat ────────────────────────────────────────────────────────────────────
  const toggleChat = () => dispatch({ type: "TOGGLE_CHAT" });
  const closeChat = () => dispatch({ type: "CLOSE_CHAT" });

  const sendMessage = useCallback(
    async (message) => {
      const userMsg = { role: "user", content: message, timestamp: Date.now() };
      dispatch({ type: "ADD_CHAT_MESSAGE", payload: userMsg });
      dispatch({ type: "SET_CHAT_LOADING", payload: true });

      try {
        const data = await sendChatMessage({ message, history: state.chatHistory });
        const aiMsg = {
          role: "assistant",
          content: data.reply,
          products: data.products || [],
          timestamp: Date.now(),
        };
        dispatch({ type: "ADD_CHAT_MESSAGE", payload: aiMsg });

        // Also update main search results if products returned
        if (data.results || data.products) {
          dispatch({
            type: "SEARCH_SUCCESS",
            payload: {
              results: data.results || data.products || [],
              bestOverallId: data.bestOverallId || null,
            },
          });
        }
      } catch {
        dispatch({
          type: "ADD_CHAT_MESSAGE",
          payload: { role: "assistant", content: "Sorry, I ran into an issue. Please try again.", timestamp: Date.now() },
        });
      } finally {
        dispatch({ type: "SET_CHAT_LOADING", payload: false });
      }
    },
    [state.chatHistory]
  );

  // ── Alerts ──────────────────────────────────────────────────────────────────
  const openAlertModal = (product) => dispatch({ type: "OPEN_ALERT_MODAL", payload: product });
  const closeAlertModal = () => dispatch({ type: "CLOSE_ALERT_MODAL" });

  const addAlert = async (productId, targetPrice, platform) => {
    await createPriceAlert({ productId, targetPrice, platform });
    const updated = await getPriceAlerts();
    dispatch({ type: "SET_ALERTS", payload: updated });
    pushToast({ type: "success", message: `Price alert set! We'll notify you when price drops to ₹${targetPrice.toLocaleString("en-IN")}.` });
  };

  const removeAlert = async (alertId) => {
    await deletePriceAlert(alertId);
    const updated = await getPriceAlerts();
    dispatch({ type: "SET_ALERTS", payload: updated });
  };

  // ── Toast ────────────────────────────────────────────────────────────────────
  const pushToast = (toast) => {
    const id = Date.now();
    dispatch({ type: "PUSH_TOAST", payload: { ...toast, id } });
    setTimeout(() => dispatch({ type: "REMOVE_TOAST", payload: id }), 4000);
  };
  const removeToast = (id) => dispatch({ type: "REMOVE_TOAST", payload: id });

  // ── Modals ───────────────────────────────────────────────────────────────────
  const toggleVoiceModal = () => dispatch({ type: "TOGGLE_VOICE_MODAL" });
  const toggleImageModal = () => dispatch({ type: "TOGGLE_IMAGE_MODAL" });
  const openBudgetModal = (product) => dispatch({ type: "OPEN_BUDGET_MODAL", payload: product });
  const closeBudgetModal = () => dispatch({ type: "CLOSE_BUDGET_MODAL" });

  const value = {
    ...state,
    // Actions
    runSearch,
    setQuery,
    setCategory,
    setFilter,
    openProduct,
    closeProduct,
    toggleChat,
    closeChat,
    sendMessage,
    openAlertModal,
    closeAlertModal,
    addAlert,
    removeAlert,
    pushToast,
    removeToast,
    toggleVoiceModal,
    toggleImageModal,
    openBudgetModal,
    closeBudgetModal,
  };

  return <ShoppingContext.Provider value={value}>{children}</ShoppingContext.Provider>;
};

export const useShopping = () => {
  const ctx = useContext(ShoppingContext);
  if (!ctx) throw new Error("useShopping must be used within ShoppingProvider");
  return ctx;
};

export default ShoppingContext;
