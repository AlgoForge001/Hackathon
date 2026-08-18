import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Star, Sparkles, ExternalLink, ShieldCheck } from "lucide-react";
import PlatformBadge from "./PlatformBadge";
import SentimentBadge from "./SentimentBadge";
import { getCategoryFallbackImage } from "../../services/mockData";

export default function ProductCard({ product, onSelectProduct }) {
  const navigate = useNavigate();
  if (!product) return null;

  const discountPercent = product.discount_percent || product.discountPercent || 0;
  const isSale = discountPercent > 0;
  const isBestOverall = product.is_best_overall || product.isBestOverall || (product.best_overall_score || product.bestOverallScore) >= 90;
  const originalPrice = product.original_price || product.originalPrice;
  const productId = product.product_id || product.id || product.groupId;

  const handleClick = (e) => {
    // If the click was on the "Buy" external link, don't navigate internally
    if (e.target.closest("a[target='_blank']")) {
      return;
    }
    if (onSelectProduct) {
      onSelectProduct(product);
    }
    navigate(`/product/${productId}`);
  };

  return (
    <div
      className="product-card"
      onClick={handleClick}
      style={{
        display: "flex",
        flexDirection: "column",
        cursor: "pointer",
        position: "relative",
      }}
    >
      {/* Media Canvas */}
      <div
        className="product-card-image-wrap"
        style={{
          position: "relative",
          width: "100%",
          aspectRatio: "1/1",
          backgroundColor: "var(--color-soft-cloud)",
          overflow: "hidden",
          border: "1px solid var(--color-hairline)",
        }}
      >
        <img
          src={product.image_url || product.imageUrl || getCategoryFallbackImage(product.category)}
          alt={product.title}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          loading="lazy"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = getCategoryFallbackImage(product.category);
          }}
        />

        {/* Top Badges */}
        <div
          style={{
            position: "absolute",
            top: "10px",
            left: "10px",
            right: "10px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            pointerEvents: "none",
          }}
        >
          {isBestOverall ? (
            <span
              style={{
                backgroundColor: "var(--color-ink)",
                color: "var(--color-canvas)",
                fontSize: "10px",
                fontWeight: 800,
                letterSpacing: "0.5px",
                textTransform: "uppercase",
                padding: "3px 8px",
                borderRadius: "var(--radius-sm)",
                display: "inline-flex",
                alignItems: "center",
                gap: "4px",
              }}
            >
              <Sparkles size={11} color="#f59e0b" />
              Best Overall
            </span>
          ) : isSale ? (
            <span
              style={{
                backgroundColor: "var(--color-sale)",
                color: "#ffffff",
                fontSize: "11px",
                fontWeight: 800,
                padding: "2px 6px",
                borderRadius: "var(--radius-sm)",
              }}
            >
              {discountPercent}% OFF
            </span>
          ) : <span />}

          <PlatformBadge platform={product.platform} size="sm" />
        </div>

        {/* Quick View Hover Indicator */}
        <div
          style={{
            position: "absolute",
            bottom: "8px",
            right: "8px",
            backgroundColor: "rgba(17,17,17,0.85)",
            color: "var(--color-canvas)",
            padding: "4px 10px",
            borderRadius: "var(--radius-sm)",
            fontSize: "11px",
            fontWeight: 600,
            backdropFilter: "blur(4px)",
          }}
        >
          View Deals →
        </div>
      </div>

      {/* Product Information */}
      <div style={{ paddingTop: "12px", display: "flex", flexDirection: "column", flex: 1, justifyContent: "space-between" }}>
        <div>
          {/* Brand & Category */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "4px" }}>
            <span style={{ fontSize: "11px", fontWeight: 700, color: "var(--color-mute)", textTransform: "uppercase", letterSpacing: "0.5px" }}>
              {product.brand || product.category}
            </span>
            {product.rating && (
              <span style={{ fontSize: "12px", fontWeight: 700, display: "inline-flex", alignItems: "center", gap: "2px" }}>
                <Star size={12} fill="#f59e0b" color="#f59e0b" />
                {Number(product.rating).toFixed(1)}
              </span>
            )}
          </div>

          {/* Product Title */}
          <h3
            style={{
              fontSize: "14px",
              fontWeight: 600,
              color: "var(--color-ink)",
              lineHeight: 1.35,
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              marginBottom: "8px",
              minHeight: "38px",
            }}
          >
            {product.title}
          </h3>

          {/* Sentiment Badge */}
          <div style={{ marginBottom: "8px" }}>
            <SentimentBadge
              sentiment={product.sentiment}
              score={product.sentiment_score || product.sentimentScore}
              pros={product.sentimentPros}
              cons={product.sentimentCons}
              size="sm"
            />
          </div>
        </div>

        {/* Pricing Block */}
        <div>
          <div style={{ display: "flex", alignItems: "baseline", gap: "8px", marginTop: "4px" }}>
            <span style={{ fontSize: "16px", fontWeight: 800, color: "var(--color-ink)" }}>
              ₹{Number(product.price).toLocaleString("en-IN")}
            </span>
            {originalPrice && isSale && (
              <span style={{ fontSize: "12px", color: "var(--color-mute)", textDecoration: "line-through" }}>
                ₹{Number(originalPrice).toLocaleString("en-IN")}
              </span>
            )}
            {isSale && (
              <span style={{ fontSize: "11px", fontWeight: 700, color: "var(--color-sale)" }}>
                {discountPercent}% off
              </span>
            )}
          </div>

          {/* Shipping Tag */}
          <div style={{ fontSize: "11px", color: "var(--color-mute)", marginTop: "4px" }}>
            {product.delivery_estimate || product.deliveryEstimate || "Free Express Delivery"}
          </div>
        </div>
      </div>
    </div>
  );
}
