import React from "react";
import { Link } from "react-router-dom";
import { Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";
import ProductCard from "../products/ProductCard";
import { mockProducts } from "../../services/mockData";

export default function TrendingSection({ onSelectProduct }) {
  // Deduplicate and get top products ranked by AI best overall score
  const topAIProducts = mockProducts
    .filter((v, i, a) => a.findIndex((t) => (t.groupId || t.group_id) === (v.groupId || v.group_id)) === i)
    .sort((a, b) => (b.best_overall_score || b.bestOverallScore || 0) - (a.best_overall_score || a.bestOverallScore || 0))
    .slice(0, 4);

  return (
    <section className="section-rhythm" style={{ padding: "36px 0", backgroundColor: "var(--color-canvas)" }}>
      <div className="container">
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            flexWrap: "wrap",
            gap: "16px",
            marginBottom: "24px",
            borderBottom: "1px solid var(--color-hairline)",
            paddingBottom: "16px",
          }}
        >
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "4px",
                  backgroundColor: "var(--color-ink)",
                  color: "var(--color-canvas)",
                  fontSize: "11px",
                  fontWeight: 800,
                  textTransform: "uppercase",
                  padding: "3px 10px",
                  borderRadius: "4px",
                  letterSpacing: "0.5px",
                }}
              >
                <Sparkles size={12} color="#f59e0b" />
                AI Verified Benchmark
              </span>
            </div>

            <h2 className="heading-xl" style={{ marginTop: "6px" }}>
              TRENDING & AI BEST OVERALL PICKS
            </h2>
            <p style={{ fontSize: "14px", color: "var(--color-mute)", marginTop: "2px" }}>
              Ranked highest by review sentiment, build durability, true price value & fast delivery.
            </p>
          </div>

          <Link
            to="/trending"
            className="btn-secondary"
            style={{
              height: "40px",
              padding: "0 20px",
              fontSize: "13px",
              gap: "6px",
            }}
          >
            <span>Explore All AI Ranked</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* Product Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: "24px 20px",
          }}
        >
          {topAIProducts.map((product) => (
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
