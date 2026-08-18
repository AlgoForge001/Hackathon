import React from "react";
import { motion } from "framer-motion";
import { Headphones, Laptop, Footprints, Smartphone, Home, Sparkles } from "lucide-react";
import { useShopping } from "../../context/ShoppingContext.jsx";

const suggestions = [
  { icon: Headphones, text: "Best noise-cancelling headphones under ₹5,000" },
  { icon: Laptop, text: "Laptop for students under ₹60,000" },
  { icon: Footprints, text: "Running shoes with great cushioning under ₹4,000" },
  { icon: Smartphone, text: "Best earbuds for iPhone users" },
  { icon: Home, text: "Smart home gadgets under ₹2,000" },
];

const PromptSuggestions = () => {
  const { sendMessage } = useShopping ? useShopping() : { sendMessage: () => {} };

  return (
    <div style={{ marginTop: 24 }}>
      <p
        style={{
          fontSize: "0.75rem",
          fontWeight: 700,
          color: "var(--color-mute)",
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          marginBottom: 12,
          paddingLeft: 4,
          display: "flex",
          alignItems: "center",
          gap: "4px",
        }}
      >
        <Sparkles size={12} color="#f59e0b" />
        Suggested Prompts
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {suggestions.map((p, i) => {
          const Icon = p.icon;
          return (
            <motion.button
              key={i}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 * i }}
              whileHover={{ x: 4, backgroundColor: "var(--color-soft-cloud)" }}
              whileTap={{ scale: 0.98 }}
              onClick={() => sendMessage && sendMessage(p.text)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                padding: "10px 14px",
                borderRadius: "var(--radius-sm)",
                backgroundColor: "var(--color-canvas)",
                border: "1px solid var(--color-hairline)",
                cursor: "pointer",
                textAlign: "left",
                fontFamily: "var(--font-ui)",
                color: "var(--color-ink)",
                fontSize: "0.82rem",
                lineHeight: 1.4,
                transition: "border-color 0.15s",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", color: "var(--color-ink)" }}>
                <Icon size={15} />
              </div>
              <span style={{ flex: 1 }}>{p.text}</span>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
};

export default PromptSuggestions;
