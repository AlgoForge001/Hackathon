import React from "react";
import { motion } from "framer-motion";
import { Star, Clock, Bell, ExternalLink, Sparkles, GitCompare } from "lucide-react";
import PlatformBadge from "./PlatformBadge.jsx";
import SentimentBadge from "./SentimentBadge.jsx";
import BestOverallBadge from "./BestOverallBadge.jsx";
import { useShopping } from "../../context/ShoppingContext.jsx";

const formatINR = (n) =>
  new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(n);

const StarRating = ({ rating }) => {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  return (
    <div style={{ display: "flex", gap: 2, alignItems: "center" }}>
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          size={11}
          fill={i < full ? "#F59E0B" : i === full && half ? "url(#half)" : "none"}
          color={i <= full ? "#F59E0B" : "#334155"}
          style={{ flexShrink: 0 }}
        />
      ))}
    </div>
  );
};

const ProductCard = ({ product, index = 0 }) => {
  const { openProduct, openAlertModal, bestOverallId } = useShopping();
  const isBest = product.id === bestOverallId;

  const savings = product.originalPrice - product.price;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ delay: index * 0.05, duration: 0.35 }}
      whileHover={{ y: -4 }}
      className={`glass-card ${isBest ? "best-overall-card" : ""}`}
      style={{
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        cursor: "pointer",
        position: "relative",
      }}
      onClick={() => openProduct(product)}
    >
      {/* Best Overall Ribbon */}
      {isBest && (
        <div
          style={{
            position: "absolute",
            top: 12,
            left: -30,
            background: "linear-gradient(90deg, #D97706, #F59E0B)",
            color: "#fff",
            fontSize: "0.65rem",
            fontWeight: 800,
            padding: "4px 36px",
            transform: "rotate(-45deg)",
            letterSpacing: "0.05em",
            zIndex: 2,
          }}
        >
          TOP PICK
        </div>
      )}

      {/* Discount Badge */}
      {product.discountPercent > 0 && (
        <div
          style={{
            position: "absolute",
            top: 12,
            right: 12,
            background: "rgba(239,68,68,0.9)",
            color: "#fff",
            fontSize: "0.7rem",
            fontWeight: 800,
            padding: "3px 8px",
            borderRadius: 6,
            zIndex: 2,
          }}
        >
          -{product.discountPercent}%
        </div>
      )}

      {/* Product Image */}
      <div
        style={{
          height: 180,
          background: "rgba(255,255,255,0.03)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          flexShrink: 0,
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <img
          src={product.imageUrl}
          alt={product.title}
          loading="lazy"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform 0.4s ease",
          }}
          onError={(e) => {
            e.target.src = "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=60";
          }}
        />
      </div>

      {/* Content */}
      <div style={{ padding: "14px 16px 16px", display: "flex", flexDirection: "column", gap: 10, flex: 1 }}>
        {/* Platform + Sentiment Row */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 6, flexWrap: "wrap" }}>
          <PlatformBadge platform={product.platform} />
          <SentimentBadge
            sentiment={product.sentiment}
            score={product.sentimentScore}
            pros={product.sentimentPros}
            cons={product.sentimentCons}
          />
        </div>

        {/* Best Overall */}
        {isBest && (
          <BestOverallBadge score={product.bestOverallScore} />
        )}

        {/* Title */}
        <h3
          style={{
            fontWeight: 700,
            fontSize: "0.9rem",
            lineHeight: 1.35,
            color: "#F8FAFC",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {product.title}
        </h3>

        {/* Rating + Review Count */}
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <StarRating rating={product.rating} />
          <span style={{ fontSize: "0.8rem", fontWeight: 700, color: "#F59E0B" }}>{product.rating}</span>
          <span style={{ fontSize: "0.75rem", color: "#64748B" }}>
            ({product.reviewCount?.toLocaleString("en-IN")} reviews)
          </span>
        </div>

        {/* Price Section */}
        <div style={{ display: "flex", alignItems: "baseline", gap: 8, flexWrap: "wrap" }}>
          <span style={{ fontSize: "1.3rem", fontWeight: 800, color: "#F8FAFC" }}>
            {formatINR(product.price)}
          </span>
          {product.originalPrice > product.price && (
            <>
              <span style={{ fontSize: "0.85rem", color: "#64748B", textDecoration: "line-through" }}>
                {formatINR(product.originalPrice)}
              </span>
              <span style={{ fontSize: "0.75rem", color: "#10B981", fontWeight: 600 }}>
                Save {formatINR(savings)}
              </span>
            </>
          )}
        </div>

        {/* Delivery */}
        {product.deliveryEstimate && (
          <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
            <Clock size={12} color="#38BDF8" />
            <span style={{ fontSize: "0.78rem", color: "#38BDF8" }}>{product.deliveryEstimate}</span>
          </div>
        )}

        {/* AI Quick Take */}
        {product.whyBuy && (
          <div
            style={{
              padding: "8px 10px",
              background: "rgba(129,140,248,0.08)",
              borderRadius: 8,
              border: "1px solid rgba(129,140,248,0.15)",
              flex: 1,
            }}
          >
            <div style={{ display: "flex", gap: 5, marginBottom: 3 }}>
              <Sparkles size={11} color="#818CF8" />
              <span style={{ fontSize: "0.68rem", fontWeight: 700, color: "#818CF8", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                AI Quick Take
              </span>
            </div>
            <p style={{ fontSize: "0.78rem", color: "#CBD5E1", lineHeight: 1.45 }}>
              {product.whyBuy}
            </p>
          </div>
        )}

        {/* Action Buttons */}
        <div
          style={{ display: "flex", gap: 8, marginTop: "auto" }}
          onClick={(e) => e.stopPropagation()}
        >
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => openProduct(product)}
            className="btn btn-primary"
            style={{ flex: 1, padding: "9px 12px", fontSize: "0.8rem" }}
          >
            <GitCompare size={13} />
            Compare
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => openAlertModal(product)}
            className="btn-icon"
            title="Set Price Alert"
            style={{ width: 38, height: 38 }}
          >
            <Bell size={14} color="#F59E0B" />
          </motion.button>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={product.productUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-icon"
            title="View on Platform"
            style={{ width: 38, height: 38, textDecoration: "none" }}
          >
            <ExternalLink size={14} color="#38BDF8" />
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
