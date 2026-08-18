import React from "react";
import { Star, Sparkles, Clock } from "lucide-react";
import { getCategoryFallbackImage } from "../../services/mockData";

export default function ProductCard({ product, onSelectProduct }) {
  if (!product) return null;

  const discountPercent = product.discount_percent || product.discountPercent || 0;
  const isSale = discountPercent > 0;
  const isBestOverall = product.is_best_overall || product.isBestOverall || (product.best_overall_score || product.bestOverallScore) >= 90;
  const rating = product.rating ? Number(product.rating).toFixed(1) : "4.4";
  const reviewCount = (product.review_count || product.reviewCount || 1200).toLocaleString("en-IN");
  const currentPrice = product.price ? Number(product.price).toLocaleString("en-IN") : "0";
  const originalPrice = product.original_price || product.originalPrice ? Number(product.original_price || product.originalPrice).toLocaleString("en-IN") : null;
  const bestScore = product.best_overall_score || product.bestOverallScore;
  const whyBuy = product.why_buy || product.whyBuy;
  const delivery = product.delivery_estimate || product.deliveryEstimate;
  const platform = product.platform || "Amazon";

  const getPlatformBadgeColor = (p) => {
    switch (p?.toLowerCase()) {
      case "amazon":
        return { bg: "rgba(255, 153, 0, 0.15)", color: "#FF9900", border: "rgba(255, 153, 0, 0.3)" };
      case "flipkart":
        return { bg: "rgba(40, 116, 240, 0.15)", color: "#2874F0", border: "rgba(40, 116, 240, 0.3)" };
      case "myntra":
        return { bg: "rgba(255, 63, 108, 0.15)", color: "#FF3F6C", border: "rgba(255, 63, 108, 0.3)" };
      default:
        return { bg: "var(--color-soft-cloud)", color: "var(--color-ink)", border: "var(--color-hairline)" };
    }
  };

  const badgeStyle = getPlatformBadgeColor(platform);

  return (
    <div
      className="product-card"
      onClick={() => onSelectProduct && onSelectProduct(product)}
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        paddingBottom: "16px",
        cursor: "pointer",
        position: "relative",
      }}
    >
      {/* ─── 1. IMAGE STUDIO STAGE ──────────────── */}
      <div className="product-card-image-wrap" style={{ position: "relative", backgroundColor: "var(--color-soft-cloud)", aspectRatio: "1/1", overflow: "hidden" }}>
        <img
          src={product.image_url || product.imageUrl || getCategoryFallbackImage(product.category)}
          alt={product.title}
          className="product-card-img"
          loading="lazy"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = getCategoryFallbackImage(product.category);
          }}
        />

        {/* Promo / Best Overall Ribbon Badge */}
        {isBestOverall ? (
          <div
            className="product-card-badge best-overall"
            style={{
              position: "absolute",
              top: "10px",
              left: "10px",
              backgroundColor: "var(--color-ink)",
              color: "var(--color-canvas)",
              padding: "4px 10px",
              borderRadius: "var(--radius-lg)",
              fontSize: "11px",
              fontWeight: 700,
              display: "flex",
              alignItems: "center",
              gap: "4px",
              zIndex: 2,
            }}
          >
            <Sparkles size={11} color="#f59e0b" />
            Top AI Pick
          </div>
        ) : isSale ? (
          <div
            className="product-card-badge"
            style={{
              position: "absolute",
              top: "10px",
              left: "10px",
              backgroundColor: "var(--color-sale)",
              color: "#ffffff",
              padding: "4px 8px",
              borderRadius: "4px",
              fontSize: "11px",
              fontWeight: 800,
              zIndex: 2,
            }}
          >
            {discountPercent}% OFF
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
            border: `1px solid ${badgeStyle.border}`,
            fontSize: "10px",
            fontWeight: 800,
            textTransform: "uppercase",
            letterSpacing: "0.5px",
            padding: "3px 8px",
            borderRadius: "var(--radius-sm)",
            backdropFilter: "blur(4px)",
            zIndex: 2,
          }}
        >
          {platform}
        </div>
      </div>

      {/* ─── 2. METADATA ROW ─────────────────────────────────────── */}
      <div className="product-card-content" style={{ padding: "12px 2px 0", display: "flex", flexDirection: "column", gap: "4px" }}>
        {/* Rating & Review Count */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: "12px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "4px", fontWeight: 600, color: "var(--color-ink)" }}>
            <Star size={13} fill="#f59e0b" color="#f59e0b" />
            <span>{rating}</span>
            <span style={{ color: "var(--color-mute)", fontWeight: 400 }}>({reviewCount})</span>
          </div>

          {bestScore && (
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
              AI Score {bestScore}/100
            </span>
          )}
        </div>

        {/* Product Title */}
        <h3 className="product-title" title={product.title} style={{ fontSize: "14px", fontWeight: 600, color: "var(--color-ink)", lineHeight: 1.35, marginTop: "2px" }}>
          {product.title}
        </h3>

        {/* Category & Brand */}
        <div className="product-subtitle" style={{ fontSize: "12px", color: "var(--color-mute)", fontWeight: 500 }}>
          {product.brand ? `${product.brand} · ` : ""}{product.category ? product.category.toUpperCase() : "GENERAL"}
        </div>

        {/* AI "Why Buy This" Micro Snippet */}
        {whyBuy && (
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
            <strong>AI Verdict:</strong> {whyBuy}
          </p>
        )}

        {/* Price Row */}
        <div className="product-price-row" style={{ display: "flex", alignItems: "baseline", gap: "8px", marginTop: "4px" }}>
          <span className="price-current" style={{ fontSize: "16px", fontWeight: 700, color: "var(--color-ink)" }}>
            ₹{currentPrice}
          </span>

          {isSale && originalPrice && (
            <>
              <span className="price-original" style={{ fontSize: "13px", color: "var(--color-mute)", textDecoration: "line-through" }}>
                ₹{originalPrice}
              </span>
              <span className="price-discount" style={{ fontSize: "12px", color: "var(--color-sale)", fontWeight: 700 }}>
                {discountPercent}% off
              </span>
            </>
          )}
        </div>

        {/* Delivery Estimate */}
        {delivery && (
          <div style={{ fontSize: "11px", color: "var(--color-mute)", marginTop: "2px", display: "flex", alignItems: "center", gap: "4px" }}>
            <Clock size={11} color="var(--color-mute)" />
            <span>Delivery: {delivery}</span>
          </div>
        )}
      </div>
    </div>
  );
}
