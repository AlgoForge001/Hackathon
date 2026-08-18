import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Sparkles, ArrowLeft, Star, ShieldCheck } from "lucide-react";
import CategoryNavRail from "../components/home/CategoryNavRail";
import ProductCard from "../components/products/ProductCard";
import { mockProducts } from "../services/mockData";

export default function TrendingPage({ onSelectProduct, onOpenChat }) {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const trending = mockProducts
    .filter((p) => (p.best_overall_score || p.bestOverallScore) >= 86)
    .filter((p) => selectedCategory === "all" || p.category === selectedCategory);

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "var(--color-canvas)" }}>
      <CategoryNavRail />

      {/* Header Banner */}
      <div
        style={{
          backgroundColor: "var(--color-ink)",
          color: "var(--color-canvas)",
          padding: "48px 0",
          borderBottom: "1px solid var(--color-hairline)",
        }}
      >
        <div className="container">
          <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", color: "rgba(255,255,255,0.7)", marginBottom: "16px" }}>
            <Link to="/" style={{ display: "inline-flex", alignItems: "center", gap: "4px", color: "rgba(255,255,255,0.9)" }}>
              <ArrowLeft size={14} /> Home
            </Link>
            <span>/</span>
            <span style={{ color: "#ffffff", fontWeight: 600 }}>AI Best Overall Picks</span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
            <span
              style={{
                backgroundColor: "rgba(255,255,255,0.15)",
                color: "#ffffff",
                fontSize: "12px",
                fontWeight: 800,
                textTransform: "uppercase",
                padding: "4px 12px",
                borderRadius: "var(--radius-lg)",
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              <Sparkles size={14} color="#f59e0b" />
              Algorithm Verified
            </span>
          </div>

          <h1 className="display-campaign" style={{ fontSize: "clamp(36px, 5vw, 60px)", lineHeight: 1 }}>
            AI-RANKED BEST OVERALL PICKS
          </h1>
          <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.85)", marginTop: "12px", maxWidth: "600px" }}>
            Products with 88%+ AI Confidence score based on verified customer sentiment, price-to-spec ratio, and returns rate.
          </p>
        </div>
      </div>

      {/* Grid */}
      <div className="container" style={{ padding: "32px 0 64px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "16px",
            marginBottom: "32px",
            paddingBottom: "16px",
            borderBottom: "1px solid var(--color-hairline)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
            {["all", "electronics", "footwear", "fashion", "home"].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`filter-chip ${selectedCategory === cat ? "active" : ""}`}
                style={{ textTransform: "capitalize" }}
              >
                {cat === "all" ? "All AI Picks" : cat}
              </button>
            ))}
          </div>

          <button onClick={onOpenChat} className="btn-primary" style={{ height: "40px", fontSize: "13px", gap: "6px" }}>
            <Sparkles size={14} />
            <span>Ask AI to Recommend</span>
          </button>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: "32px 20px",
          }}
        >
          {trending.map((product) => (
            <ProductCard
              key={product.id || product.product_id}
              product={product}
              onSelectProduct={onSelectProduct}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
