import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, TrendingUp, ArrowRight } from "lucide-react";
import { useShopping } from "../../context/ShoppingContext.jsx";
import { exploreBudget } from "../../services/api.js";
import ProductMiniCard from "../chat/ProductMiniCard.jsx";

const formatINR = (n) =>
  new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(n);

const BudgetSlider = () => {
  const { budgetModalOpen, budgetModalProduct: product, closeBudgetModal } = useShopping();
  const [extra, setExtra] = useState(1000);
  const [upgrades, setUpgrades] = useState([]);
  const [loading, setLoading] = useState(false);

  const steps = [500, 1000, 2500, 5000, 10000];

  useEffect(() => {
    if (!product) return;
    const fetch = async () => {
      setLoading(true);
      try {
        const results = await exploreBudget(product.id, extra);
        setUpgrades(results);
      } catch {
        setUpgrades([]);
      } finally {
        setLoading(false);
      }
    };
    fetch();
  }, [product, extra]);

  return (
    <AnimatePresence>
      {budgetModalOpen && product && (
        <>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={closeBudgetModal}
            style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.6)", zIndex: 100, backdropFilter: "blur(4px)" }} />
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 30 }}
            transition={{ type: "spring", damping: 28, stiffness: 320 }}
            style={{
              position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)",
              width: "min(520px, 92vw)", maxHeight: "80vh", overflowY: "auto",
              background: "rgba(10, 14, 24, 0.98)", backdropFilter: "blur(24px)",
              border: "1px solid rgba(255,255,255,0.1)", borderRadius: 20,
              zIndex: 101, padding: 28,
            }}
          >
            {/* Header */}
            <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 24 }}>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                  <TrendingUp size={18} color="#818CF8" />
                  <h3 style={{ fontWeight: 700, fontSize: "1.1rem" }}>What If I Increase My Budget?</h3>
                </div>
                <p style={{ fontSize: "0.8rem", color: "#64748B" }}>
                  Currently viewing: <span style={{ color: "#C4B5FD" }}>{formatINR(product.price)}</span>
                </p>
              </div>
              <button onClick={closeBudgetModal} className="btn-icon" style={{ width: 32, height: 32, borderRadius: 8, flexShrink: 0 }}>
                <X size={14} color="#64748B" />
              </button>
            </div>

            {/* Slider Steps */}
            <div style={{ marginBottom: 24 }}>
              <p style={{ fontSize: "0.75rem", color: "#64748B", textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: 12 }}>
                Add to your budget
              </p>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                {steps.map((s) => (
                  <motion.button
                    key={s}
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    onClick={() => setExtra(s)}
                    style={{
                      padding: "8px 16px",
                      borderRadius: 9999,
                      border: `1.5px solid ${extra === s ? "rgba(129,140,248,0.6)" : "rgba(255,255,255,0.1)"}`,
                      background: extra === s ? "rgba(129,140,248,0.12)" : "transparent",
                      color: extra === s ? "#C4B5FD" : "#64748B",
                      fontSize: "0.85rem",
                      fontWeight: extra === s ? 700 : 400,
                      cursor: "pointer",
                      fontFamily: "var(--font-main)",
                      transition: "all 0.15s",
                    }}
                  >
                    +{formatINR(s)}
                  </motion.button>
                ))}
              </div>

              {/* Budget Indicator */}
              <div style={{
                marginTop: 16, padding: "12px 16px", borderRadius: 10,
                background: "rgba(129,140,248,0.08)", border: "1px solid rgba(129,140,248,0.2)"
              }}>
                <p style={{ fontSize: "0.85rem", color: "#94A3B8" }}>
                  Budget upgraded to:{" "}
                  <span style={{ fontSize: "1.1rem", fontWeight: 700, color: "#C4B5FD" }}>
                    {formatINR(product.price + extra)}
                  </span>
                </p>
              </div>
            </div>

            {/* Results */}
            <div>
              <p style={{ fontSize: "0.75rem", color: "#64748B", textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: 12 }}>
                Upgrades unlocked
              </p>
              {loading ? (
                <div style={{ textAlign: "center", padding: 32, color: "#64748B", fontSize: "0.875rem" }}>
                  Finding upgrades…
                </div>
              ) : upgrades.length === 0 ? (
                <div style={{
                  padding: 20, borderRadius: 10, background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.07)", textAlign: "center"
                }}>
                  <p style={{ color: "#64748B", fontSize: "0.875rem" }}>
                    No significant upgrades found for this budget increase. Try a larger amount.
                  </p>
                </div>
              ) : (
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {upgrades.map((p) => (
                    <div key={p.id}>
                      <div style={{
                        display: "flex", alignItems: "center", gap: 6, marginBottom: 6,
                        padding: "4px 10px", borderRadius: 6, background: "rgba(16,185,129,0.08)"
                      }}>
                        <ArrowRight size={12} color="#10B981" />
                        <span style={{ fontSize: "0.75rem", color: "#10B981" }}>
                          Upgrade available for {formatINR(p.price - product.price)} more
                        </span>
                      </div>
                      <ProductMiniCard product={p} />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default BudgetSlider;
