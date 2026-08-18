import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Sparkles, ShoppingBag, TrendingUp, Shield } from "lucide-react";
import { checkBackendHealth } from "./services/api.js";

// Layout
import Navbar from "./components/layout/Navbar.jsx";

// Hero
import HeroSection from "./components/hero/HeroSection.jsx";
import CategoryPills from "./components/hero/CategoryPills.jsx";

// Products
import ProductGrid from "./components/products/ProductGrid.jsx";
import ProductDetailModal from "./components/products/ProductDetailModal.jsx";

// Chat
import ChatDrawer from "./components/chat/ChatDrawer.jsx";

// Tools
import BudgetSlider from "./components/tools/BudgetSlider.jsx";
import PriceAlertModal from "./components/tools/PriceAlertModal.jsx";

// Search
import VoiceSearchModal from "./components/search/VoiceSearchModal.jsx";
import ImageSearchModal from "./components/search/ImageSearchModal.jsx";

// Common
import { ToastContainer } from "./components/common/Toast.jsx";

const STATS = [
  { icon: <ShoppingBag size={18} color="#818CF8" />, value: "3 Platforms", label: "Compared Simultaneously" },
  { icon: <TrendingUp size={18} color="#10B981" />,   value: "AI Powered", label: "Review Sentiment & Ranking" },
  { icon: <Shield size={18} color="#38BDF8" />,        value: "Real-Time",  label: "Price & Deal Tracking" },
];

function App() {
  // Check backend connectivity on mount
  useEffect(() => {
    checkBackendHealth();
  }, []);

  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      {/* Ambient glow blobs */}
      <div className="ambient-glow-1" />
      <div className="ambient-glow-2" />

      {/* ── NAVBAR ───────────────────────────────────────────────────────── */}
      <Navbar />

      {/* ── MAIN CONTENT ────────────────────────────────────────────────── */}
      <main style={{ position: "relative", zIndex: 1 }}>
        <HeroSection />
        <CategoryPills />

        {/* Stats Row */}
        <div className="container" style={{ marginBottom: 40 }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: 16,
            }}
          >
            {STATS.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + i * 0.1 }}
                className="glass-card"
                style={{
                  padding: "16px 20px",
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                }}
              >
                <div
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: 10,
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  {stat.icon}
                </div>
                <div>
                  <p style={{ fontWeight: 800, fontSize: "0.95rem", color: "#F8FAFC" }}>{stat.value}</p>
                  <p style={{ fontSize: "0.75rem", color: "#64748B" }}>{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <ProductGrid />
      </main>

      {/* ── FOOTER ──────────────────────────────────────────────────────── */}
      <footer
        style={{
          position: "relative",
          zIndex: 1,
          padding: "24px",
          borderTop: "1px solid rgba(255,255,255,0.05)",
          textAlign: "center",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, marginBottom: 8 }}>
          <div
            style={{
              width: 22,
              height: 22,
              borderRadius: 6,
              background: "linear-gradient(135deg, #818CF8, #38BDF8)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Sparkles size={12} color="#fff" />
          </div>
          <span style={{ fontWeight: 700, fontSize: "0.85rem", background: "linear-gradient(135deg,#818CF8,#38BDF8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            ShopAI
          </span>
        </div>
        <p style={{ fontSize: "0.75rem", color: "#475569" }}>
          Amazon · Flipkart · Myntra — AI-Powered Shopping Intelligence · Hackathon 2026
        </p>
      </footer>

      {/* ── GLOBAL OVERLAYS (Portals) ────────────────────────────────────── */}
      <ChatDrawer />
      <ProductDetailModal />
      <BudgetSlider />
      <PriceAlertModal />
      <VoiceSearchModal />
      <ImageSearchModal />
      <ToastContainer />
    </div>
  );
}

export default App;
