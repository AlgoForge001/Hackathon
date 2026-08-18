import React from "react";
import { motion } from "framer-motion";
import { useShopping } from "../../context/ShoppingContext.jsx";
import { categories } from "../../services/mockData.js";

const CategoryPills = () => {
  const { category, setCategory } = useShopping();

  return (
    <div
      style={{
        padding: "0 24px 32px",
        display: "flex",
        justifyContent: "center",
        gap: 10,
        flexWrap: "wrap",
      }}
    >
      {categories.map((cat, i) => {
        const active = category === cat.id;
        return (
          <motion.button
            key={cat.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.07 }}
            whileHover={{ scale: 1.06, y: -2 }}
            whileTap={{ scale: 0.94 }}
            onClick={() => setCategory(cat.id)}
            style={{
              padding: "10px 20px",
              borderRadius: 9999,
              border: active
                ? "1.5px solid rgba(129,140,248,0.6)"
                : "1.5px solid rgba(255,255,255,0.08)",
              background: active
                ? "linear-gradient(135deg, rgba(129,140,248,0.18), rgba(56,189,248,0.12))"
                : "rgba(255,255,255,0.04)",
              color: active ? "#C4B5FD" : "#94A3B8",
              fontFamily: "var(--font-main)",
              fontWeight: active ? 700 : 500,
              fontSize: "0.875rem",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: 6,
              transition: "all 0.2s ease",
              boxShadow: active ? "0 0 16px rgba(129,140,248,0.15)" : "none",
            }}
          >
            <span>{cat.emoji}</span>
            <span>{cat.label.replace(cat.emoji + " ", "")}</span>
            {active && (
              <motion.span
                layoutId="activePill"
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: "#818CF8",
                }}
              />
            )}
          </motion.button>
        );
      })}
    </div>
  );
};

export default CategoryPills;
