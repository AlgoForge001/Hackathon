import React, { useState } from "react";
import { motion } from "framer-motion";
import { Search, Mic, Camera, ArrowRight, TrendingUp } from "lucide-react";
import { useShopping } from "../../context/ShoppingContext.jsx";

const HeroSection = () => {
  const { query, setQuery, runSearch, toggleVoiceModal, toggleImageModal, loading } = useShopping();
  const [focused, setFocused] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) runSearch();
  };

  const quickSearches = [
    "Sony WH-1000XM5", "Nike Running Shoes", "Samsung Earbuds", "Dell Laptop", "Puma Sneakers",
  ];

  return (
    <section
      style={{
        position: "relative",
        padding: "80px 24px 60px",
        textAlign: "center",
        overflow: "hidden",
      }}
    >
      {/* Background Grid Pattern */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(rgba(129,140,248,0.06) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          pointerEvents: "none",
        }}
      />

      {/* Floating platform badges */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        style={{ position: "absolute", left: "6%", top: "30%" }}
      >
        <div className="badge badge-amazon" style={{ padding: "8px 14px", fontSize: "0.85rem" }}>
          🛒 Amazon
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        style={{ position: "absolute", right: "6%", top: "25%" }}
      >
        <div className="badge badge-flipkart" style={{ padding: "8px 14px", fontSize: "0.85rem" }}>
          📦 Flipkart
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0, duration: 0.6 }}
        style={{ position: "absolute", right: "8%", top: "55%" }}
      >
        <div className="badge badge-myntra" style={{ padding: "8px 14px", fontSize: "0.85rem" }}>
          👗 Myntra
        </div>
      </motion.div>

      {/* Content */}
      <div style={{ position: "relative", zIndex: 1, maxWidth: 780, margin: "0 auto" }}>
        {/* Pill tag */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ display: "flex", justifyContent: "center", marginBottom: 24 }}
        >
          <div
            className="badge badge-primary"
            style={{ padding: "6px 16px", fontSize: "0.8rem", gap: 6 }}
          >
            <TrendingUp size={13} />
            AI-Powered Cross-Platform Shopping
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          style={{
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
            marginBottom: 16,
          }}
        >
          Stop Tab Switching.{" "}
          <span className="text-gradient">Let AI Find</span>
          <br />
          Your Best Deal.
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.6 }}
          style={{
            fontSize: "1.05rem",
            color: "#94A3B8",
            lineHeight: 1.6,
            marginBottom: 40,
            maxWidth: 560,
            margin: "0 auto 40px",
          }}
        >
          Compare prices across Amazon, Flipkart & Myntra in one click. Get AI-powered review summaries, sentiment analysis, and the <strong style={{ color: "#F8FAFC" }}>best overall pick</strong> — all in seconds.
        </motion.p>

        {/* Search Bar */}
        <motion.form
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.6 }}
          onSubmit={handleSubmit}
          style={{ marginBottom: 24 }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              background: "rgba(15, 23, 42, 0.9)",
              border: `1.5px solid ${focused ? "rgba(129,140,248,0.6)" : "rgba(255,255,255,0.1)"}`,
              borderRadius: 9999,
              padding: "14px 20px",
              maxWidth: 640,
              margin: "0 auto",
              boxShadow: focused
                ? "0 0 0 4px rgba(129,140,248,0.12), 0 8px 32px rgba(0,0,0,0.4)"
                : "0 8px 32px rgba(0,0,0,0.3)",
              transition: "all 0.25s ease",
            }}
          >
            <Search size={18} color={focused ? "#818CF8" : "#64748B"} style={{ flexShrink: 0, transition: "color 0.2s" }} />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              placeholder="Search headphones, shoes, laptops…"
              style={{
                flex: 1,
                background: "transparent",
                border: "none",
                outline: "none",
                color: "#F8FAFC",
                fontSize: "1rem",
                fontFamily: "var(--font-main)",
              }}
            />

            {/* Voice */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              type="button"
              onClick={toggleVoiceModal}
              title="Voice Search"
              style={{
                width: 36, height: 36, borderRadius: 10,
                background: "rgba(129,140,248,0.1)",
                border: "1px solid rgba(129,140,248,0.2)",
                display: "flex", alignItems: "center", justifyContent: "center",
                cursor: "pointer", flexShrink: 0,
              }}
            >
              <Mic size={15} color="#818CF8" />
            </motion.button>

            {/* Image */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              type="button"
              onClick={toggleImageModal}
              title="Image Search"
              style={{
                width: 36, height: 36, borderRadius: 10,
                background: "rgba(56,189,248,0.1)",
                border: "1px solid rgba(56,189,248,0.2)",
                display: "flex", alignItems: "center", justifyContent: "center",
                cursor: "pointer", flexShrink: 0,
              }}
            >
              <Camera size={15} color="#38BDF8" />
            </motion.button>

            {/* Search Button */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              disabled={!query.trim() || loading}
              className="btn btn-primary"
              style={{ padding: "10px 20px", fontSize: "0.875rem", flexShrink: 0 }}
            >
              {loading ? (
                <div style={{ width: 14, height: 14, borderRadius: "50%", border: "2px solid rgba(255,255,255,0.3)", borderTopColor: "#fff", animation: "spin 0.7s linear infinite" }} />
              ) : (
                <>Search <ArrowRight size={14} /></>
              )}
            </motion.button>
          </div>
        </motion.form>

        {/* Quick Searches */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          style={{ display: "flex", justifyContent: "center", gap: 8, flexWrap: "wrap" }}
        >
          <span style={{ fontSize: "0.8rem", color: "#64748B", alignSelf: "center" }}>Try:</span>
          {quickSearches.map((term) => (
            <motion.button
              key={term}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => { setQuery(term); runSearch({ query: term }); }}
              style={{
                padding: "5px 14px",
                borderRadius: 9999,
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.08)",
                color: "#94A3B8",
                fontSize: "0.8rem",
                cursor: "pointer",
                fontFamily: "var(--font-main)",
                transition: "all 0.2s ease",
              }}
            >
              {term}
            </motion.button>
          ))}
        </motion.div>
      </div>

      {/* CSS for spinner */}
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </section>
  );
};

export default HeroSection;
