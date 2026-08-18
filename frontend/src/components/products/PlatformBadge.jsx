import React from "react";

const platformConfig = {
  amazon:  { label: "Amazon",  color: "#FF9900", bg: "rgba(255,153,0,0.12)", border: "rgba(255,153,0,0.25)", emoji: "🛒" },
  flipkart:{ label: "Flipkart",color: "#2874F0", bg: "rgba(40,116,240,0.12)",border: "rgba(40,116,240,0.25)", emoji: "📦" },
  myntra:  { label: "Myntra",  color: "#FF3F6C", bg: "rgba(255,63,108,0.12)", border: "rgba(255,63,108,0.25)", emoji: "👗" },
};

const PlatformBadge = ({ platform, size = "md" }) => {
  const cfg = platformConfig[platform] || { label: platform, color: "#94A3B8", bg: "rgba(148,163,184,0.12)", border: "rgba(148,163,184,0.25)", emoji: "🛍️" };
  const isLg = size === "lg";

  return (
    <span
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
        fontFamily: "var(--font-main)",
        whiteSpace: "nowrap",
      }}
    >
      <span>{cfg.emoji}</span>
      <span>{cfg.label}</span>
    </span>
  );
};

export default PlatformBadge;
