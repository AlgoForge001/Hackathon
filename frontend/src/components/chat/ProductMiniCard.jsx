import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Star, Sparkles, ExternalLink } from "lucide-react";
import PlatformBadge from "../products/PlatformBadge.jsx";
import { getCategoryFallbackImage } from "../../services/mockData.js";

const ProductMiniCard = ({ product }) => {
  const navigate = useNavigate();
  if (!product) return null;

  const discountPercent = product.discount_percent || product.discountPercent || 0;
  const isSale = discountPercent > 0;
  const productId = product.product_id || product.id || product.groupId;

  return (
    <div
      onClick={() => navigate(`/product/${productId}`)}
      style={{
        display: "flex",
        gap: 12,
        padding: 10,
        borderRadius: "var(--radius-sm)",
        background: "var(--color-canvas)",
        border: "1px solid var(--color-hairline)",
        cursor: "pointer",
        transition: "border-color 0.15s, box-shadow 0.15s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "var(--color-ink)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "var(--color-hairline)";
      }}
    >
      <img
        src={product.image_url || product.imageUrl || getCategoryFallbackImage(product.category)}
        alt={product.title}
        style={{
          width: 56,
          height: 56,
          objectFit: "cover",
          borderRadius: 4,
          flexShrink: 0,
          background: "var(--color-soft-cloud)",
        }}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = getCategoryFallbackImage(product.category);
        }}
      />
      <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 4, marginBottom: 2 }}>
            <PlatformBadge platform={product.platform} size="sm" />
            {product.rating && (
              <span style={{ fontSize: "0.7rem", fontWeight: 700, display: "flex", alignItems: "center", gap: 2, color: "var(--color-charcoal)" }}>
                <Star size={10} fill="#F59E0B" color="#F59E0B" />
                {Number(product.rating).toFixed(1)}
              </span>
            )}
          </div>
          <p
            style={{
              fontSize: "0.78rem",
              fontWeight: 600,
              color: "var(--color-ink)",
              margin: 0,
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {product.title}
          </p>
        </div>

        <div style={{ display: "flex", alignItems: "baseline", gap: 6, marginTop: 4 }}>
          <span style={{ fontSize: "0.85rem", fontWeight: 800, color: "var(--color-ink)" }}>
            ₹{Number(product.price).toLocaleString("en-IN")}
          </span>
          {isSale && (
            <span style={{ fontSize: "0.68rem", fontWeight: 700, color: "var(--color-sale)" }}>
              {discountPercent}% off
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductMiniCard;
