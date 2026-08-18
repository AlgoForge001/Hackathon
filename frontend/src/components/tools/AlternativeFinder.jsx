import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, ArrowUp } from "lucide-react";
import { useShopping } from "../../context/ShoppingContext.jsx";
import { getProductAlternatives } from "../../services/api.js";
import ProductMiniCard from "../chat/ProductMiniCard.jsx";

const AlternativeFinder = ({ product }) => {
  const { openBudgetModal } = useShopping();
  const [alts, setAlts] = useState({ cheaper: null, similar: null, premium: null });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!product) return;
    const fetch = async () => {
      setLoading(true);
      try {
        const result = await getProductAlternatives(product.id);
        setAlts(result);
      } catch {
        setAlts({ cheaper: null, similar: null, premium: null });
      } finally {
        setLoading(false);
      }
    };
    fetch();
  }, [product?.id]);

  const columns = [
    { key: "cheaper", label: "Budget Pick",      emoji: "💰", icon: <ArrowDown size={14} color="#10B981" />, color: "#10B981", border: "rgba(16,185,129,0.2)", bg: "rgba(16,185,129,0.06)" },
    { key: "similar", label: "Direct Competitor", emoji: "🔄", icon: <ArrowRight size={14} color="#818CF8" />, color: "#818CF8", border: "rgba(129,140,248,0.2)", bg: "rgba(129,140,248,0.06)" },
    { key: "premium", label: "Premium Upgrade",   emoji: "⭐", icon: <ArrowUp size={14} color="#F59E0B" />,   color: "#F59E0B", border: "rgba(245,158,11,0.2)",  bg: "rgba(245,158,11,0.06)" },
  ];

  if (loading) {
    return (
      <div style={{ textAlign: "center", padding: "32px 0", color: "#64748B", fontSize: "0.875rem" }}>
        Finding alternatives…
      </div>
    );
  }

  const hasAny = columns.some((c) => alts[c.key]);

  if (!hasAny) {
    return (
      <div style={{ textAlign: "center", padding: "24px 0", color: "#64748B", fontSize: "0.875rem" }}>
        No alternatives found in this category yet.
      </div>
    );
  }

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16 }}>
      {columns.map((col, i) => (
        <motion.div
          key={col.key}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          style={{ padding: 14, borderRadius: 14, background: col.bg, border: `1px solid ${col.border}` }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 12 }}>
            {col.icon}
            <span style={{ fontSize: "0.72rem", fontWeight: 700, color: col.color, textTransform: "uppercase", letterSpacing: "0.07em" }}>
              {col.emoji} {col.label}
            </span>
          </div>
          {alts[col.key] ? (
            <>
              <ProductMiniCard product={alts[col.key]} />
              {col.key === "premium" && (
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => openBudgetModal(product)}
                  style={{
                    marginTop: 10, width: "100%", padding: "7px",
                    borderRadius: 8, background: "rgba(245,158,11,0.1)",
                    border: "1px solid rgba(245,158,11,0.2)",
                    color: "#F59E0B", fontSize: "0.75rem", fontWeight: 600,
                    cursor: "pointer", fontFamily: "var(--font-main)",
                  }}
                >
                  Explore Budget Upgrade →
                </motion.button>
              )}
            </>
          ) : (
            <p style={{ fontSize: "0.8rem", color: "#475569", textAlign: "center", padding: "12px 0" }}>
              Not found in catalog
            </p>
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default AlternativeFinder;
