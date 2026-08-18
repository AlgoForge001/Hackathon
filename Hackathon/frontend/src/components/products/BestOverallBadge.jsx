import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Crown } from "lucide-react";

const BestOverallBadge = ({ score }) => {
  const [showBreakdown, setShowBreakdown] = useState(false);

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <motion.div
        animate={{ boxShadow: ["0 0 10px rgba(251,191,36,0.3)", "0 0 20px rgba(251,191,36,0.6)", "0 0 10px rgba(251,191,36,0.3)"] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        onMouseEnter={() => setShowBreakdown(true)}
        onMouseLeave={() => setShowBreakdown(false)}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 5,
          padding: "5px 12px",
          borderRadius: 9999,
          background: "rgba(251,191,36,0.12)",
          border: "1px solid rgba(251,191,36,0.35)",
          color: "#FCD34D",
          fontSize: "0.78rem",
          fontWeight: 700,
          cursor: "default",
          fontFamily: "var(--font-main)",
          whiteSpace: "nowrap",
        }}
      >
        <Crown size={12} color="#FCD34D" />
        Best Overall Pick
        {score && <span style={{ opacity: 0.8 }}>· {score}/100</span>}
      </motion.div>

      <AnimatePresence>
        {showBreakdown && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            style={{
              position: "absolute",
              bottom: "calc(100% + 10px)",
              left: "50%",
              transform: "translateX(-50%)",
              width: 240,
              background: "rgba(15, 23, 42, 0.98)",
              border: "1px solid rgba(251,191,36,0.3)",
              borderRadius: 12,
              padding: 14,
              zIndex: 99,
              backdropFilter: "blur(20px)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
            }}
          >
            <p style={{ fontSize: "0.7rem", fontWeight: 700, color: "#FCD34D", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 10 }}>
              AI Score Breakdown
            </p>
            {[
              { label: "Price Value",       weight: "30%", color: "#10B981" },
              { label: "User Rating",       weight: "30%", color: "#818CF8" },
              { label: "Review Sentiment",  weight: "25%", color: "#F59E0B" },
              { label: "Delivery & Trust",  weight: "15%", color: "#38BDF8" },
            ].map((item) => (
              <div key={item.label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "4px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <div style={{ width: 6, height: 6, borderRadius: "50%", background: item.color }} />
                  <span style={{ fontSize: "0.78rem", color: "#94A3B8" }}>{item.label}</span>
                </div>
                <span style={{ fontSize: "0.78rem", fontWeight: 700, color: item.color }}>{item.weight}</span>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BestOverallBadge;
