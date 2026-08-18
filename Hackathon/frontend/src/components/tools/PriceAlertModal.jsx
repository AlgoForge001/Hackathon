import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Bell, Check } from "lucide-react";
import { useShopping } from "../../context/ShoppingContext.jsx";
import PlatformBadge from "../products/PlatformBadge.jsx";

const formatINR = (n) =>
  new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(n);

const PriceAlertModal = () => {
  const { alertModalOpen, alertModalProduct: product, closeAlertModal, addAlert } = useShopping();
  const [targetPrice, setTargetPrice] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [saving, setSaving] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const price = Number(targetPrice);
    if (!price || price <= 0) return;
    setSaving(true);
    try {
      await addAlert(product.id, price, product.platform);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setTargetPrice("");
        closeAlertModal();
      }, 1800);
    } catch {
      setSaving(false);
    }
  };

  // Reset on open
  React.useEffect(() => {
    if (alertModalOpen) {
      setSubmitted(false);
      setSaving(false);
      setTargetPrice(product ? String(Math.round(product.price * 0.9)) : "");
    }
  }, [alertModalOpen, product]);

  return (
    <AnimatePresence>
      {alertModalOpen && product && (
        <>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={closeAlertModal}
            style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.6)", zIndex: 100, backdropFilter: "blur(4px)" }} />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 28, stiffness: 320 }}
            style={{
              position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)",
              width: "min(420px, 92vw)",
              background: "rgba(10, 14, 24, 0.98)", backdropFilter: "blur(24px)",
              border: "1px solid rgba(255,255,255,0.1)", borderRadius: 20,
              zIndex: 101, padding: 28,
            }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{ textAlign: "center", padding: "20px 0" }}
              >
                <div style={{
                  width: 56, height: 56, borderRadius: "50%",
                  background: "rgba(16,185,129,0.15)", border: "2px solid #10B981",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  margin: "0 auto 16px",
                }}>
                  <Check size={24} color="#10B981" />
                </div>
                <p style={{ fontWeight: 700, fontSize: "1.05rem", color: "#F8FAFC", marginBottom: 6 }}>
                  Alert Set! 🔔
                </p>
                <p style={{ fontSize: "0.85rem", color: "#64748B" }}>
                  We'll notify you when the price drops to <span style={{ color: "#10B981" }}>{formatINR(Number(targetPrice))}</span>
                </p>
              </motion.div>
            ) : (
              <>
                {/* Header */}
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 20 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <div style={{
                      width: 36, height: 36, borderRadius: 10,
                      background: "rgba(245,158,11,0.12)", border: "1px solid rgba(245,158,11,0.25)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                    }}>
                      <Bell size={16} color="#F59E0B" />
                    </div>
                    <h3 style={{ fontWeight: 700, fontSize: "1rem" }}>Set Price Alert</h3>
                  </div>
                  <button onClick={closeAlertModal} className="btn-icon" style={{ width: 30, height: 30, borderRadius: 8, flexShrink: 0 }}>
                    <X size={13} color="#64748B" />
                  </button>
                </div>

                {/* Product Preview */}
                <div style={{
                  display: "flex", gap: 12, padding: 14, marginBottom: 20,
                  background: "rgba(255,255,255,0.04)", borderRadius: 12, border: "1px solid rgba(255,255,255,0.07)"
                }}>
                  <img src={product.imageUrl} alt={product.title} style={{ width: 52, height: 52, borderRadius: 8, objectFit: "cover" }} />
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <p style={{ fontSize: "0.82rem", fontWeight: 600, color: "#F8FAFC", marginBottom: 4, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                      {product.title}
                    </p>
                    <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                      <PlatformBadge platform={product.platform} />
                      <span style={{ fontSize: "0.9rem", fontWeight: 700, color: "#F8FAFC" }}>
                        {formatINR(product.price)}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit}>
                  <label style={{ display: "block", marginBottom: 20 }}>
                    <p style={{ fontSize: "0.78rem", color: "#94A3B8", marginBottom: 8 }}>
                      Alert me when price drops to or below:
                    </p>
                    <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                      <span style={{ fontSize: "1.1rem", color: "#64748B" }}>₹</span>
                      <input
                        type="number"
                        value={targetPrice}
                        onChange={(e) => setTargetPrice(e.target.value)}
                        placeholder={String(Math.round(product.price * 0.9))}
                        min={1}
                        max={product.price}
                        required
                        style={{
                          flex: 1,
                          background: "rgba(15, 23, 42, 0.8)",
                          border: "1px solid rgba(255,255,255,0.12)",
                          borderRadius: 10,
                          padding: "10px 14px",
                          color: "#F8FAFC",
                          fontSize: "1.1rem",
                          fontWeight: 700,
                          fontFamily: "var(--font-mono)",
                          outline: "none",
                        }}
                      />
                    </div>
                    <p style={{ fontSize: "0.72rem", color: "#475569", marginTop: 6 }}>
                      Suggested: {formatINR(Math.round(product.price * 0.9))} (10% off current price)
                    </p>
                  </label>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={saving || !targetPrice}
                    className="btn btn-primary"
                    style={{ width: "100%", padding: 12, fontSize: "0.9rem" }}
                  >
                    <Bell size={15} />
                    {saving ? "Setting Alert…" : "Set Price Alert"}
                  </motion.button>
                </form>
              </>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default PriceAlertModal;
