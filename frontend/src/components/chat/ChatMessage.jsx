import React from "react";
import { motion } from "framer-motion";
import { Sparkles, User } from "lucide-react";
import ProductMiniCard from "./ProductMiniCard.jsx";

const ChatMessage = ({ message }) => {
  const isUser = message.role === "user";

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      style={{
        display: "flex",
        gap: 10,
        flexDirection: isUser ? "row-reverse" : "row",
        alignItems: "flex-start",
        padding: "4px 0",
      }}
    >
      {/* Avatar */}
      <div
        style={{
          width: 30,
          height: 30,
          borderRadius: "50%",
          flexShrink: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: isUser
            ? "rgba(56,189,248,0.15)"
            : "linear-gradient(135deg, rgba(129,140,248,0.3), rgba(56,189,248,0.2))",
          border: `1px solid ${isUser ? "rgba(56,189,248,0.25)" : "rgba(129,140,248,0.3)"}`,
        }}
      >
        {isUser ? <User size={14} color="#38BDF8" /> : <Sparkles size={14} color="#818CF8" />}
      </div>

      {/* Bubble */}
      <div style={{ maxWidth: "78%", display: "flex", flexDirection: "column", gap: 8 }}>
        <div
          style={{
            padding: "10px 14px",
            borderRadius: isUser ? "16px 4px 16px 16px" : "4px 16px 16px 16px",
            background: isUser
              ? "rgba(56,189,248,0.12)"
              : "rgba(129,140,248,0.1)",
            border: `1px solid ${isUser ? "rgba(56,189,248,0.2)" : "rgba(129,140,248,0.18)"}`,
            fontSize: "0.85rem",
            color: "#E2E8F0",
            lineHeight: 1.55,
          }}
        >
          {message.content}
        </div>

        {/* Embedded Product Cards */}
        {message.products && message.products.length > 0 && (
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            {message.products.map((product) => (
              <ProductMiniCard key={product.id} product={product} />
            ))}
          </div>
        )}

        {/* Timestamp */}
        <span style={{ fontSize: "0.65rem", color: "#475569", paddingLeft: isUser ? 0 : 2, textAlign: isUser ? "right" : "left" }}>
          {new Date(message.timestamp).toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" })}
        </span>
      </div>
    </motion.div>
  );
};

export default ChatMessage;
