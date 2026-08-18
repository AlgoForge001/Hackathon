import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, Sparkles, ArrowRight, ShieldCheck, Zap } from "lucide-react";

export default function EditorialHero({ onOpenChat }) {
  const [heroSearch, setHeroSearch] = useState("");
  const navigate = useNavigate();

  const handleHeroSubmit = (e) => {
    e.preventDefault();
    if (heroSearch.trim()) {
      navigate(`/search?q=${encodeURIComponent(heroSearch.trim())}`);
    }
  };

  const trendingSearches = [
    { label: "Sony WH-1000XM5", query: "Sony WH-1000XM5" },
    { label: "Nike Air Max 270", query: "Nike Air Max" },
    { label: "AirPods Pro 2", query: "AirPods Pro" },
    { label: "Adidas Ultraboost", query: "Ultraboost" },
    { label: "Levi's 511", query: "Levis 511" },
    { label: "Pigeon Air Fryer", query: "Air Fryer" },
  ];

  return (
    <section style={{ position: "relative", width: "100%", overflow: "hidden" }}>
      <div className="container" style={{ paddingTop: "20px" }}>
        {/* Editorial Campaign Hero Tile */}
        <div
          style={{
            position: "relative",
            width: "100%",
            minHeight: "520px",
            backgroundColor: "var(--color-ink)",
            borderRadius: "var(--radius-none)",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "clamp(32px, 5vw, 56px)",
            color: "var(--color-canvas)",
            backgroundImage: `linear-gradient(135deg, rgba(17,17,17,0.92) 0%, rgba(17,17,17,0.72) 50%, rgba(17,17,17,0.92) 100%), url('https://images.unsplash.com/photo-1556906781-9a412961c28c?q=80&w=1920&auto=format&fit=crop')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Top Tagline */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
            <span
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.15)",
                backdropFilter: "blur(8px)",
                padding: "6px 16px",
                borderRadius: "var(--radius-lg)",
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "1px",
                textTransform: "uppercase",
              }}
            >
              Multi-Platform AI Comparison
            </span>
            <span style={{ fontSize: "13px", color: "var(--color-hairline)", display: "flex", alignItems: "center", gap: "4px" }}>
              <ShieldCheck size={14} color="#4ade80" /> Verified Real-Time Live Pricing
            </span>
          </div>

          {/* Towering Display Campaign Lockup */}
          <div style={{ maxWidth: "800px", marginTop: "32px", marginBottom: "32px" }}>
            <h1 className="display-campaign" style={{ color: "var(--color-canvas)", textShadow: "0 2px 20px rgba(0,0,0,0.5)" }}>
              COMPARE. DECIDE.<br />NEVER OVERPAY.
            </h1>
            <p
              style={{
                fontSize: "16px",
                color: "rgba(255,255,255,0.85)",
                marginTop: "16px",
                maxWidth: "560px",
                lineHeight: 1.5,
              }}
            >
              Unified cross-platform intelligence across Amazon, Flipkart, and Myntra. Real-time review sentiment, true price drop alerts, and instant AI recommendations.
            </p>

            {/* Interactive Hero AI Search Bar */}
            <form onSubmit={handleHeroSubmit} style={{ marginTop: "24px", maxWidth: "620px" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: "var(--color-canvas)",
                  borderRadius: "var(--radius-lg)",
                  padding: "6px 8px 6px 20px",
                  boxShadow: "0 8px 30px rgba(0,0,0,0.35)",
                }}
              >
                <Search size={20} color="var(--color-mute)" style={{ marginRight: "12px", flexShrink: 0 }} />
                <input
                  type="text"
                  placeholder="Ask anything (e.g. 'Best running shoes under ₹5000')..."
                  value={heroSearch}
                  onChange={(e) => setHeroSearch(e.target.value)}
                  style={{
                    border: "none",
                    outline: "none",
                    width: "100%",
                    fontSize: "15px",
                    color: "var(--color-ink)",
                    fontFamily: "var(--font-ui)",
                  }}
                />
                <button
                  type="submit"
                  className="btn-primary"
                  style={{
                    height: "42px",
                    padding: "0 24px",
                    fontSize: "14px",
                    flexShrink: 0,
                  }}
                >
                  <span>Search</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            </form>

            {/* Quick Trending Filter Chips */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                gap: "8px",
                marginTop: "16px",
              }}
            >
              <span style={{ fontSize: "12px", color: "var(--color-hairline)", textTransform: "uppercase", fontWeight: 600, letterSpacing: "0.5px" }}>
                Trending:
              </span>
              {trendingSearches.map((item) => (
                <button
                  key={item.label}
                  onClick={() => navigate(`/search?q=${encodeURIComponent(item.query)}`)}
                  style={{
                    backgroundColor: "rgba(255,255,255,0.12)",
                    color: "var(--color-canvas)",
                    border: "1px solid rgba(255,255,255,0.25)",
                    padding: "4px 14px",
                    borderRadius: "var(--radius-lg)",
                    fontSize: "12px",
                    fontWeight: 500,
                    transition: "all 0.15s ease",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "var(--color-canvas)";
                    e.currentTarget.style.color = "var(--color-ink)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.12)";
                    e.currentTarget.style.color = "var(--color-canvas)";
                  }}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Bottom Action Bar */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "16px",
              borderTop: "1px solid rgba(255,255,255,0.15)",
              paddingTop: "18px",
            }}
          >
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <button
                onClick={() => navigate("/deals")}
                className="btn-outline-on-image"
                style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}
              >
                <Zap size={14} fill="var(--color-ink)" />
                <span>Shop Today's Deals</span>
              </button>
              <button
                onClick={onOpenChat}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  backgroundColor: "rgba(255,255,255,0.15)",
                  color: "var(--color-canvas)",
                  padding: "0 24px",
                  height: "42px",
                  borderRadius: "var(--radius-lg)",
                  fontSize: "14px",
                  fontWeight: 600,
                  backdropFilter: "blur(10px)",
                }}
              >
                <Sparkles size={15} color="#f59e0b" />
                Ask Shopping Assistant
              </button>
            </div>

            <div style={{ fontSize: "13px", color: "var(--color-hairline)", display: "flex", gap: "20px" }}>
              <span>Amazon Fulfilled</span>
              <span>Flipkart Assured</span>
              <span>Myntra Luxe</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
