import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Wallet, ArrowRight } from "lucide-react";
import ProductCard from "../products/ProductCard";
import { mockProducts } from "../../services/mockData";

export default function BudgetExplorerSection({ onSelectProduct }) {
  const [activeTier, setActiveTier] = useState("under3k");

  const tiers = [
    { id: "under1k", label: "Under ₹1,000", max: 1000, desc: "Affordable apparel, accessories & daily essentials" },
    { id: "under3k", label: "Under ₹3,000", max: 3000, desc: "TWS audio, sneakers, air fryers & smart fans" },
    { id: "under10k", label: "Under ₹10,000", max: 10000, desc: "ANC headphones, marathon shoes & high-end apparel" },
    { id: "premium", label: "Flagship & Premium", max: 200000, desc: "OLED laptops, flagship 5G phones & top audio gear" },
  ];

  const currentTier = tiers.find((t) => t.id === activeTier) || tiers[1];

  let filtered = mockProducts.filter((p) => {
    if (activeTier === "under1k") return p.price <= 1000;
    if (activeTier === "under3k") return p.price > 1000 && p.price <= 3000;
    if (activeTier === "under10k") return p.price > 3000 && p.price <= 10000;
    return p.price > 10000;
  });

  // Filter unique groups
  filtered = filtered
    .filter((v, i, a) => a.findIndex((t) => (t.groupId || t.group_id) === (v.groupId || v.group_id)) === i)
    .slice(0, 4);

  return (
    <section className="section-rhythm" style={{ padding: "40px 0", backgroundColor: "var(--color-soft-cloud)" }}>
      <div className="container">
        {/* Header */}
        <div style={{ marginBottom: "20px" }}>
          <span style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase", color: "var(--color-mute)" }}>
            Smart Budget Corner
          </span>
          <h2 className="heading-xl" style={{ marginTop: "4px" }}>
            FIND THE BEST VALUE FOR YOUR BUDGET
          </h2>
          <p style={{ fontSize: "14px", color: "var(--color-mute)", marginTop: "2px" }}>
            Select your price range to see top AI-recommended products across all 3 platforms.
          </p>
        </div>

        {/* Tier Selector Pills */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            overflowX: "auto",
            paddingBottom: "12px",
            marginBottom: "24px",
          }}
        >
          {tiers.map((tier) => {
            const isActive = activeTier === tier.id;
            return (
              <button
                key={tier.id}
                onClick={() => setActiveTier(tier.id)}
                className={`filter-chip ${isActive ? "active" : ""}`}
                style={{
                  padding: "0 24px",
                  height: "42px",
                  fontSize: "14px",
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                <Wallet size={14} />
                <span>{tier.label}</span>
              </button>
            );
          })}
        </div>

        {/* Products Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: "24px 20px",
          }}
        >
          {filtered.map((product) => (
            <ProductCard
              key={product.id || product.product_id}
              product={product}
              onSelectProduct={onSelectProduct}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
