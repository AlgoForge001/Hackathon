import React from "react";
import { motion } from "framer-motion";
import { useShopping } from "../../context/ShoppingContext.jsx";

const prompts = [
  { emoji: "🎧", text: "Best noise-cancelling headphones under ₹5,000" },
  { emoji: "💻", text: "Laptop for students under ₹60,000" },
  { emoji: "👟", text: "Running shoes with great cushioning under ₹4,000" },
  { emoji: "📱", text: "Best earbuds for iPhone users" },
  { emoji: "🏠", text: "Smart home gadgets under ₹2,000" },
];

const PromptSuggestions = () => {
  const { sendMessage } = useShopping();

  return (
    <div style={{ padding: "0 16px 12px" }}>
      <p style={{ fontSize: "0.72rem", color: "#64748B", marginBottom: 10, textAlign: "center" }}>
        Try asking…
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        {prompts.map((p, i) => (
          <motion.button
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.06 }}
            whileHover={{ scale: 1.02, x: 4 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => sendMessage(p.text)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "10px 12px",
              borderRadius: 10,
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              color: "#94A3B8",
              fontSize: "0.82rem",
              cursor: "pointer",
              fontFamily: "var(--font-main)",
              textAlign: "left",
              transition: "all 0.15s ease",
            }}
          >
            <span style={{ fontSize: "1rem", flexShrink: 0 }}>{p.emoji}</span>
            <span>{p.text}</span>
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default PromptSuggestions;
