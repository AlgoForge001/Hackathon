import React, { useState } from "react";
import { Search, Sparkles, ArrowRight, ShieldCheck } from "lucide-react";

export default function EditorialHero({ onSearch, onOpenChat, onSelectCategory }) {
  const [heroSearch, setHeroSearch] = useState("");

  const handleHeroSubmit = (e) => {
    e.preventDefault();
    if (onSearch && heroSearch.trim()) {
      onSearch(heroSearch);
    }
  };

  const trendingSearches = [
    { label: "Sony WH-1000XM5", query: "Sony WH-1000XM5" },
    { label: "Nike Air Max 270", query: "Nike Air Max" },
    { label: "AirPods Pro 2", query: "AirPods Pro" },
    { label: "Adidas Ultraboost", query: "Ultraboost" },
    { label: "Levi's 511", query: "Levis 511" },
  ];

  return (
    <section style={{ position: "relative", width: "100%", overflow: "hidden" }}>
      <div className="container" style={{ paddingTop: "24px" }}>
        {/* Editorial Campaign Hero Tile (ui.md Spec) */}
        <div
          style={{
            position: "relative",
            width: "100%",
            minHeight: "560px",
            backgroundColor: "var(--color-ink)",
            borderRadius: "var(--radius-none)",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "clamp(32px, 5vw, 64px)",
            color: "var(--color-canvas)",
            backgroundImage: `linear-gradient(135deg, rgba(17,17,17,0.92) 0%, rgba(17,17,17,0.7) 50%, rgba(17,17,17,0.92) 100%), url('https://images.unsplash.com/photo-1556906781-9a412961c28c?q=80&w=1920&auto=format&fit=crop')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Top Tagline */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
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
              <ShieldCheck size={14} color="#4ade80" /> Verified Live Pricing
            </span>
          </div>

          {/* Towering Display Campaign Lockup (96px, 0.9 line-height) */}
          <div style={{ maxWidth: "800px", marginTop: "40px", marginBottom: "40px" }}>
            <h1 className="display-campaign" style={{ color: "var(--color-canvas)", textShadow: "0 2px 20px rgba(0,0,0,0.5)" }}>
              COMPARE. DECIDE.<br />NEVER OVERPAY.
            </h1>
            <p
              style={{
                fontSize: "17px",
                color: "rgba(255,255,255,0.85)",
                marginTop: "16px",
                maxWidth: "540px",
                lineHeight: 1.5,
              }}
            >
              Unified cross-platform intelligence across Amazon, Flipkart, and Myntra. Real-time sentiment analysis, true price tracking, and instant AI recommendations.
            </p>

            {/* Interactive Hero AI Search Bar */}
            <form onSubmit={handleHeroSubmit} style={{ marginTop: "28px", maxWidth: "600px" }}>
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
                    fontSize: "16px",
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
                marginTop: "18px",
              }}
            >
              <span style={{ fontSize: "12px", color: "var(--color-hairline)", textTransform: "uppercase", fontWeight: 600, letterSpacing: "0.5px" }}>
                Trending:
              </span>
              {trendingSearches.map((item) => (
                <button
                  key={item.label}
                  onClick={() => onSearch(item.query)}
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

          {/* Bottom Action Bar (ui.md on-image white pill CTA) */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "16px",
              borderTop: "1px solid rgba(255,255,255,0.15)",
              paddingTop: "20px",
            }}
          >
            <div style={{ display: "flex", gap: "12px" }}>
              <button
                onClick={() => {
                  const element = document.getElementById("featured-grid");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
                className="btn-outline-on-image"
              >
                Shop All Deals
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
                <Sparkles size={15} />
                Ask Shopping Assistant
              </button>
            </div>

            <div style={{ fontSize: "13px", color: "var(--color-hairline)", display: "flex", gap: "24px" }}>
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
