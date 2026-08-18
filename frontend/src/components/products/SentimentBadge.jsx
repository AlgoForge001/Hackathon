import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, AlertCircle, AlertTriangle, ThumbsUp, ThumbsDown } from "lucide-react";

const sentimentConfig = {
  green:  { icon: CheckCircle2, label: "Highly Rated",    color: "#10B981", bg: "rgba(16,185,129,0.12)",  border: "rgba(16,185,129,0.25)" },
  yellow: { icon: AlertCircle,  label: "Mixed Reviews",  color: "#F59E0B", bg: "rgba(245,158,11,0.12)", border: "rgba(245,158,11,0.25)" },
  red:    { icon: AlertTriangle,label: "Critical Issues", color: "#EF4444", bg: "rgba(239,68,68,0.12)",  border: "rgba(239,68,68,0.25)" },
};

const SentimentBadge = ({ sentiment = "green", score, pros = [], cons = [], size = "md" }) => {
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const cfg = sentimentConfig[sentiment] || sentimentConfig.green;
  const Icon = cfg.icon;

  const sizeStyles = {
    sm: { padding: "2px 6px", fontSize: "0.68rem", gap: "4px", iconSize: 11 },
    md: { padding: "3px 8px", fontSize: "0.75rem", gap: "5px", iconSize: 12 },
    lg: { padding: "5px 12px", fontSize: "0.82rem", gap: "6px", iconSize: 14 },
  };

  const current = sizeStyles[size] || sizeStyles.md;

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <button
        onClick={(e) => {
          e.stopPropagation();
          setTooltipOpen(!tooltipOpen);
        }}
        onMouseEnter={() => setTooltipOpen(true)}
        onMouseLeave={() => setTooltipOpen(false)}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: current.gap,
          padding: current.padding,
          borderRadius: "var(--radius-sm)",
          fontSize: current.fontSize,
          fontWeight: 700,
          color: cfg.color,
          backgroundColor: cfg.bg,
          border: `1px solid ${cfg.border}`,
          cursor: "pointer",
          userSelect: "none",
        }}
      >
        <Icon size={current.iconSize} color={cfg.color} />
        <span>{cfg.label}</span>
        {score && <span style={{ opacity: 0.85 }}>({score}%)</span>}
      </button>

      <AnimatePresence>
        {tooltipOpen && (pros.length > 0 || cons.length > 0) && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            style={{
              position: "absolute",
              bottom: "calc(100% + 8px)",
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: 50,
              width: 240,
              padding: 12,
              borderRadius: "var(--radius-sm)",
              backgroundColor: "var(--color-canvas)",
              border: "1px solid var(--color-hairline)",
              boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
              pointerEvents: "none",
            }}
          >
            {pros.length > 0 && (
              <div style={{ marginBottom: 8 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 4, color: "#10B981", fontSize: "0.72rem", fontWeight: 700, textTransform: "uppercase" }}>
                  <ThumbsUp size={11} /> Top Pros
                </div>
                <ul style={{ margin: "4px 0 0 16px", padding: 0, fontSize: "0.75rem", color: "var(--color-charcoal)" }}>
                  {pros.slice(0, 2).map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
              </div>
            )}
            {cons.length > 0 && (
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 4, color: "#EF4444", fontSize: "0.72rem", fontWeight: 700, textTransform: "uppercase" }}>
                  <ThumbsDown size={11} /> Top Cons
                </div>
                <ul style={{ margin: "4px 0 0 16px", padding: 0, fontSize: "0.75rem", color: "var(--color-charcoal)" }}>
                  {cons.slice(0, 2).map((c, i) => (
                    <li key={i}>{c}</li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SentimentBadge;
