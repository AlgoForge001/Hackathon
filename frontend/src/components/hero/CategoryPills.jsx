import React from "react";
import { motion } from "framer-motion";
import { Flame, Headphones, Footprints, Shirt, Home } from "lucide-react";
import { useShopping } from "../../context/ShoppingContext.jsx";
import { CATEGORY_DEFINITIONS } from "../../services/mockData.js";

const CategoryPills = () => {
  const { category: activeCategory, setCategory } = useShopping ? useShopping() : { category: "all", setCategory: () => {} };

  const categories = [
    { id: "all", label: "Trending Deals", icon: Flame },
    ...CATEGORY_DEFINITIONS.map((c) => {
      let icon = Headphones;
      if (c.id === "footwear") icon = Footprints;
      if (c.id === "fashion") icon = Shirt;
      if (c.id === "home") icon = Home;
      return {
        id: c.id,
        label: c.shortLabel,
        icon,
      };
    }),
  ];

  return (
    <div style={{ padding: "0 0 24px" }}>
      <div className="container">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            overflowX: "auto",
            paddingBottom: 8,
            scrollbarWidth: "none",
          }}
        >
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            const Icon = cat.icon;
            return (
              <motion.button
                key={cat.id}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setCategory && setCategory(cat.id)}
                className={`filter-chip ${isActive ? "active" : ""}`}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  cursor: "pointer",
                }}
              >
                <Icon size={14} />
                <span>{cat.label}</span>
              </motion.button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CategoryPills;
