import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ThumbsUp, ThumbsDown } from "lucide-react";

const sentimentConfig = {
  green:  { emoji: "🟢", label: "Highly Rated",    color: "#10B981", bg: "rgba(16,185,129,0.12)",  border: "rgba(16,185,129,0.25)" },
  yellow: { emoji: "🟡", label: "Mixed Reviews",  color: "#F59E0B", bg: "rgba(245,158,11,0.12)", border: "rgba(245,158,11,0.25)" },
  red:    { emoji: "🔴", label: "Critical Issues", color: "#EF4444", bg: "rgba(239,68,68,0.12)",  border: "rgba(239,68,68,0.25)" },
};

const SentimentBadge = ({ sentiment, score, pros = [], cons = [], size = "md" }) => {
  const [open, setOpen] = useState(false);
  const cfg = sentimentConfig[sentiment] || sentimentConfig.yellow;
  const isLg = size === "lg";

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={(e) => { e.stopPropagation(); setOpen(!open); }}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: isLg ? 6 : 4,
          padding: isLg ? "6px 14px" : "4px 10px",
          borderRadius: 9999,
          background: cfg.bg,
          border: `1px solid ${cfg.border}`,
          color: cfg.color,
          fontSize: isLg ? "0.85rem" : "0.75rem",
          fontWeight: 700,
          cursor: "pointer",
          fontFamily: "var(--font-main)",
          whiteSpace: "nowrap",
        }}
      >
        <span>{cfg.emoji}</span>
        <span>{cfg.label}</span>
        {score && <span style={{ opacity: 0.8 }}>({score}%)</span>}
      </motion.button>

      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <div
              style={{ position: "fixed", inset: 0, zIndex: 98 }}
              onClick={() => setOpen(false)}
            />
            {/* Tooltip */}
            <motion.div
              initial={{ opacity: 0, y: 6, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 6, scale: 0.95 }}
              transition={{ duration: 0.15 }}
              style={{
                position: "absolute",
                top: "calc(100% + 8px)",
                left: "50%",
                transform: "translateX(-50%)",
                width: 260,
                background: "rgba(15, 23, 42, 0.98)",
                border: `1px solid ${cfg.border}`,
                borderRadius: 12,
                padding: 16,
                zIndex: 99,
                backdropFilter: "blur(20px)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <p style={{ fontSize: "0.7rem", fontWeight: 700, color: cfg.color, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 10 }}>
                Customer Sentiment Analysis
              </p>

              {pros.length > 0 && (
                <div style={{ marginBottom: 10 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 5, marginBottom: 6 }}>
                    <ThumbsUp size={11} color="#10B981" />
                    <span style={{ fontSize: "0.72rem", color: "#10B981", fontWeight: 600 }}>Praised For</span>
                  </div>
                  {pros.map((p, i) => (
                    <div key={i} style={{ fontSize: "0.78rem", color: "#94A3B8", padding: "3px 0 3px 16px", borderLeft: "2px solid #10B981", marginBottom: 3 }}>
                      {p}
                    </div>
                  ))}
                </div>
              )}

              {cons.length > 0 && (
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: 5, marginBottom: 6 }}>
                    <ThumbsDown size={11} color="#EF4444" />
                    <span style={{ fontSize: "0.72rem", color: "#EF4444", fontWeight: 600 }}>Criticised For</span>
                  </div>
                  {cons.map((c, i) => (
                    <div key={i} style={{ fontSize: "0.78rem", color: "#94A3B8", padding: "3px 0 3px 16px", borderLeft: "2px solid #EF4444", marginBottom: 3 }}>
                      {c}
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SentimentBadge;
