import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Zap, ArrowLeft, Clock, SlidersHorizontal } from "lucide-react";
import CategoryNavRail from "../components/home/CategoryNavRail";
import ProductCard from "../components/products/ProductCard";
import { mockProducts } from "../services/mockData";

export default function DealsPage({ onSelectProduct }) {
  const [minDiscount, setMinDiscount] = useState(20);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const deals = mockProducts
    .filter((p) => (p.discount_percent || p.discountPercent) >= minDiscount)
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
            <span style={{ color: "#ffffff", fontWeight: 600 }}>Lightning Deals & Clearance</span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
            <span
              style={{
                backgroundColor: "var(--color-sale)",
                color: "#ffffff",
                fontSize: "12px",
                fontWeight: 800,
                textTransform: "uppercase",
                padding: "4px 12px",
                borderRadius: "4px",
                display: "inline-flex",
                alignItems: "center",
                gap: "4px",
              }}
            >
              <Zap size={14} fill="#ffffff" />
              Real-Time Clearance
            </span>
          </div>

          <h1 className="display-campaign" style={{ fontSize: "clamp(36px, 5vw, 60px)", lineHeight: 1 }}>
            ALL LIGHTNING DEALS & DISCOUNTS
          </h1>
          <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.85)", marginTop: "12px", maxWidth: "600px" }}>
            Verified price drops across Amazon, Flipkart, and Myntra updated every 15 minutes.
          </p>
        </div>
      </div>

      {/* Filter Controls */}
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
          {/* Discount Tier Filter Chips */}
          <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
            <span style={{ fontSize: "13px", fontWeight: 700, color: "var(--color-mute)", textTransform: "uppercase" }}>
              Min Discount:
            </span>
            {[20, 30, 40, 50].map((d) => (
              <button
                key={d}
                onClick={() => setMinDiscount(d)}
                className={`filter-chip ${minDiscount === d ? "active" : ""}`}
              >
                {d}% Off or more
              </button>
            ))}
          </div>

          {/* Category Filter Dropdown */}
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ fontSize: "13px", color: "var(--color-mute)", fontWeight: 600 }}>Category:</span>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              style={{
                padding: "8px 16px",
                borderRadius: "var(--radius-lg)",
                border: "1px solid var(--color-hairline)",
                backgroundColor: "var(--color-soft-cloud)",
                fontSize: "13px",
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              <option value="all">All Categories</option>
              <option value="electronics">Electronics</option>
              <option value="footwear">Footwear</option>
              <option value="fashion">Fashion</option>
              <option value="home">Home & Living</option>
            </select>
          </div>
        </div>

        {/* Deals Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: "32px 20px",
          }}
        >
          {deals.map((product) => (
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
