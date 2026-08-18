import React from "react";
import { Star, ShieldCheck, TrendingUp, Sparkles, ExternalLink } from "lucide-react";

export default function ProductCard({ product, onSelectProduct }) {
  if (!product) return null;

  const isSale = product.discount_percent > 0;
  const isBestOverall = product.is_best_overall || product.best_overall_score >= 85;

  const getPlatformBadgeColor = (platform) => {
    switch (platform?.toLowerCase()) {
      case "amazon":
        return { bg: "#FF9900", color: "#111111" };
      case "flipkart":
        return { bg: "#2874F0", color: "#FFFFFF" };
      case "myntra":
        return { bg: "#FF3F6C", color: "#FFFFFF" };
      default:
        return { bg: "var(--color-ink)", color: "var(--color-canvas)" };
    }
  };

  const badgeStyle = getPlatformBadgeColor(product.platform);

  return (
    <div
      className="product-card"
      onClick={() => onSelectProduct && onSelectProduct(product)}
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        paddingBottom: "16px",
      }}
    >
      {/* ─── 1. IMAGE STUDIO STAGE (1:1 on #f5f5f5) ──────────────── */}
      <div className="product-card-image-wrap">
        <img
          src={product.image_url || "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format&fit=crop&q=80"}
          alt={product.title}
          className="product-card-img"
          loading="lazy"
        />

        {/* Promo / Best Overall Badge */}
        {isBestOverall ? (
          <div className="product-card-badge best-overall">
            <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
              <Sparkles size={11} />
              Best Overall Pick
            </span>
          </div>
        ) : isSale ? (
          <div className="product-card-badge">
            {product.discount_percent}% OFF
          </div>
        ) : null}

        {/* Platform Origin Tag */}
        <div
          style={{
            position: "absolute",
            bottom: "10px",
            left: "10px",
            backgroundColor: badgeStyle.bg,
            color: badgeStyle.color,
            fontSize: "10px",
            fontWeight: 800,
            textTransform: "uppercase",
            letterSpacing: "0.5px",
            padding: "3px 8px",
            borderRadius: "var(--radius-sm)",
          }}
        >
          {product.platform || "VERIFIED"}
        </div>
      </div>

      {/* ─── 2. METADATA ROW ─────────────────────────────────────── */}
      <div className="product-card-content">
        {/* Rating & Review Count */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: "12px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "4px", fontWeight: 600, color: "var(--color-ink)" }}>
            <Star size={13} fill="currentColor" color="currentColor" />
            <span>{product.rating ? Number(product.rating).toFixed(1) : "4.5"}</span>
            <span style={{ color: "var(--color-mute)", fontWeight: 400 }}>
              ({(product.review_count || 1200).toLocaleString("en-IN")})
            </span>
          </div>

          {product.best_overall_score && (
            <span
              style={{
                fontSize: "11px",
                fontWeight: 700,
                color: "var(--color-success)",
                backgroundColor: "rgba(0, 125, 72, 0.08)",
                padding: "2px 6px",
                borderRadius: "var(--radius-sm)",
              }}
            >
              AI Score {product.best_overall_score}/100
            </span>
          )}
        </div>

        {/* Product Title */}
        <h3 className="product-title" title={product.title} style={{ marginTop: "4px" }}>
          {product.title}
        </h3>

        {/* Category & Brand */}
        <div className="product-subtitle">
          {product.brand ? `${product.brand} · ` : ""}{product.category?.toUpperCase() || "LIFESTYLE"}
        </div>

        {/* AI "Why Buy This" Micro Snippet */}
        {product.why_buy && (
          <p
            style={{
              fontSize: "12px",
              color: "var(--color-charcoal)",
              backgroundColor: "var(--color-soft-cloud)",
              padding: "6px 8px",
              borderRadius: "4px",
              marginTop: "4px",
              lineHeight: 1.35,
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            <strong>AI Verdict:</strong> {product.why_buy}
          </p>
        )}

        {/* Price Row (ui.md Spec) */}
        <div className="product-price-row">
          <span className="price-current">
            ₹{product.price ? Number(product.price).toLocaleString("en-IN") : "N/A"}
          </span>

          {isSale && product.original_price && (
            <>
              <span className="price-original">
                ₹{Number(product.original_price).toLocaleString("en-IN")}
              </span>
              <span className="price-discount">
                {product.discount_percent}% off
              </span>
            </>
          )}
        </div>

        {/* Delivery Estimate */}
        {product.delivery_estimate && (
          <div style={{ fontSize: "11px", color: "var(--color-mute)", marginTop: "2px" }}>
            Delivery in {product.delivery_estimate}
          </div>
        )}
      </div>
    </div>
  );
}
