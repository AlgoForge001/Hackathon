import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Search, Mic, Camera, Bell, LogOut, User, X } from "lucide-react";
import { useAuth } from "../../context/AuthContext.jsx";
import { useShopping } from "../../context/ShoppingContext.jsx";

const Navbar = () => {
  const { user, logout } = useAuth();
  const {
    query, setQuery, runSearch,
    alerts, toggleVoiceModal, toggleImageModal,
    toggleChat, chatOpen,
  } = useShopping();

  const [searchFocused, setSearchFocused] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const profileRef = useRef(null);
  const inputRef = useRef(null);

  // Close profile dropdown on outside click
  useEffect(() => {
    const handler = (e) => {
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) runSearch();
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSearch(e);
  };

  const activeAlerts = alerts.length;

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "rgba(11, 15, 25, 0.85)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          gap: 16,
          height: 64,
        }}
      >
        {/* ── Brand Logo ─────────────────────────────────────────────── */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          style={{ display: "flex", alignItems: "center", gap: 10, flexShrink: 0, cursor: "pointer" }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: 10,
              background: "linear-gradient(135deg, #818CF8, #38BDF8)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 0 16px rgba(129,140,248,0.4)",
            }}
          >
            <Sparkles size={18} color="#fff" />
          </div>
          <div>
            <span
              style={{
                fontWeight: 800,
                fontSize: "1.1rem",
                letterSpacing: "-0.03em",
                background: "linear-gradient(135deg, #818CF8, #38BDF8)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              ShopAI
            </span>
            <span style={{ fontSize: "0.65rem", color: "#64748B", display: "block", lineHeight: 1, marginTop: -2 }}>
              AI Shopping Assistant
            </span>
          </div>
        </motion.div>

        {/* ── Search Bar ─────────────────────────────────────────────── */}
        <form
          onSubmit={handleSearch}
          style={{ flex: 1, maxWidth: 560, position: "relative" }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(15, 23, 42, 0.8)",
              border: `1px solid ${searchFocused ? "rgba(129,140,248,0.5)" : "rgba(255,255,255,0.08)"}`,
              borderRadius: 9999,
              padding: "8px 14px",
              boxShadow: searchFocused ? "0 0 0 3px rgba(129,140,248,0.1)" : "none",
              transition: "all 0.2s ease",
            }}
          >
            <Search size={16} color="#64748B" style={{ flexShrink: 0 }} />
            <input
              ref={inputRef}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              onFocus={() => setSearchFocused(true)}
              onBlur={() => setSearchFocused(false)}
              placeholder="Search across Amazon, Flipkart & Myntra…"
              style={{
                flex: 1,
                background: "transparent",
                border: "none",
                outline: "none",
                color: "#F8FAFC",
                fontSize: "0.875rem",
                fontFamily: "var(--font-main)",
              }}
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery("")}
                className="btn-icon"
                style={{ width: 24, height: 24, borderRadius: 6, border: "none", background: "rgba(255,255,255,0.06)" }}
              >
                <X size={12} color="#64748B" />
              </button>
            )}
            <div style={{ display: "flex", gap: 4 }}>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                type="button"
                onClick={toggleVoiceModal}
                title="Voice Search"
                style={{
                  width: 28, height: 28, borderRadius: 8,
                  background: "rgba(129,140,248,0.1)",
                  border: "1px solid rgba(129,140,248,0.2)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  cursor: "pointer",
                }}
              >
                <Mic size={13} color="#818CF8" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                type="button"
                onClick={toggleImageModal}
                title="Image Search"
                style={{
                  width: 28, height: 28, borderRadius: 8,
                  background: "rgba(56,189,248,0.1)",
                  border: "1px solid rgba(56,189,248,0.2)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  cursor: "pointer",
                }}
              >
                <Camera size={13} color="#38BDF8" />
              </motion.button>
            </div>
          </div>
        </form>

        {/* ── Right Actions ──────────────────────────────────────────── */}
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginLeft: "auto" }}>
          {/* AI Chat Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleChat}
            className="btn"
            style={{
              padding: "8px 16px",
              fontSize: "0.8rem",
              background: chatOpen
                ? "linear-gradient(135deg, #818CF8, #38BDF8)"
                : "rgba(129,140,248,0.12)",
              color: chatOpen ? "#fff" : "#818CF8",
              border: "1px solid rgba(129,140,248,0.25)",
            }}
          >
            <Sparkles size={14} />
            <span style={{ display: "none", "@media(min-width:640px)": { display: "inline" } }}>AI Chat</span>
          </motion.button>

          {/* Alerts Bell */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-icon"
            title={`${activeAlerts} Active Price Alerts`}
            style={{ position: "relative" }}
          >
            <Bell size={16} color="#94A3B8" />
            {activeAlerts > 0 && (
              <span
                style={{
                  position: "absolute",
                  top: -4,
                  right: -4,
                  width: 16,
                  height: 16,
                  borderRadius: "50%",
                  background: "#EF4444",
                  color: "#fff",
                  fontSize: "0.6rem",
                  fontWeight: 700,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {activeAlerts}
              </span>
            )}
          </motion.button>

          {/* User Profile */}
          {user ? (
            <div ref={profileRef} style={{ position: "relative" }}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setProfileOpen(!profileOpen)}
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  border: "2px solid rgba(129,140,248,0.4)",
                  overflow: "hidden",
                  cursor: "pointer",
                  background: "transparent",
                  padding: 0,
                }}
              >
                <img
                  src={user.picture || "https://ui-avatars.com/api/?name=" + encodeURIComponent(user.name || "User")}
                  alt={user.name}
                  referrerPolicy="no-referrer"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </motion.button>

              <AnimatePresence>
                {profileOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    style={{
                      position: "absolute",
                      top: "calc(100% + 10px)",
                      right: 0,
                      width: 220,
                      background: "rgba(15, 23, 42, 0.95)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      borderRadius: 12,
                      padding: 12,
                      backdropFilter: "blur(20px)",
                      zIndex: 100,
                    }}
                  >
                    <div style={{ padding: "8px 4px 12px", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                      <p style={{ fontWeight: 600, fontSize: "0.875rem", color: "#F8FAFC" }}>{user.name}</p>
                      <p style={{ fontSize: "0.75rem", color: "#64748B", marginTop: 2 }}>{user.email}</p>
                    </div>
                    <button
                      onClick={() => { logout(); setProfileOpen(false); }}
                      className="btn-logout"
                      style={{ width: "100%", marginTop: 10, justifyContent: "center", borderRadius: 8 }}
                    >
                      <LogOut size={14} />
                      Sign Out
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ) : (
            <div className="badge badge-primary" style={{ padding: "6px 12px" }}>
              <User size={12} />
              <span style={{ fontSize: "0.75rem" }}>Guest</span>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
