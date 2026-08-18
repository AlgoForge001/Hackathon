import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Bell } from "lucide-react";
import { useShopping } from "../../context/ShoppingContext.jsx";
import PlatformBadge from "../products/PlatformBadge.jsx";

const formatINR = (n) =>
  new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(n);

const ProductMiniCard = ({ product }) => {
  const { openProduct, openAlertModal } = useShopping();

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.01 }}
      onClick={() => openProduct(product)}
      style={{
        display: "flex",
        gap: 10,
        padding: "10px 12px",
        borderRadius: 10,
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.08)",
        cursor: "pointer",
        transition: "all 0.15s ease",
      }}
    >
      {/* Thumbnail */}
      <div
        style={{
          width: 52,
          height: 52,
          borderRadius: 8,
          overflow: "hidden",
          flexShrink: 0,
          background: "rgba(255,255,255,0.05)",
        }}
      >
        <img
          src={product.imageUrl}
          alt={product.title}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=100&q=60"; }}
        />
      </div>

      {/* Info */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <p
          style={{
            fontSize: "0.78rem",
            fontWeight: 600,
            color: "#F8FAFC",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            marginBottom: 3,
          }}
        >
          {product.title}
        </p>
        <div style={{ display: "flex", alignItems: "center", gap: 6, flexWrap: "wrap" }}>
          <PlatformBadge platform={product.platform} />
          <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "#F8FAFC" }}>
            {formatINR(product.price)}
          </span>
          {product.discountPercent > 0 && (
            <span style={{ fontSize: "0.7rem", color: "#10B981", fontWeight: 600 }}>
              -{product.discountPercent}%
            </span>
          )}
        </div>
      </div>

      {/* Actions */}
      <div
        style={{ display: "flex", flexDirection: "column", gap: 4, flexShrink: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        <a
          href={product.productUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            width: 26, height: 26, borderRadius: 6,
            background: "rgba(56,189,248,0.1)",
            display: "flex", alignItems: "center", justifyContent: "center",
            textDecoration: "none",
          }}
        >
          <ExternalLink size={11} color="#38BDF8" />
        </a>
        <button
          onClick={() => openAlertModal(product)}
          style={{
            width: 26, height: 26, borderRadius: 6,
            background: "rgba(245,158,11,0.1)",
            border: "none", cursor: "pointer",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}
        >
          <Bell size={11} color="#F59E0B" />
        </button>
      </div>
    </motion.div>
  );
};

export default ProductMiniCard;
