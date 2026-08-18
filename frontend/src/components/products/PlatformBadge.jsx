import React from "react";
import { ShoppingCart, Package, Tag, ShoppingBag } from "lucide-react";

const platformConfig = {
  amazon:  { label: "Amazon",  color: "#FF9900", bg: "rgba(255,153,0,0.12)", border: "rgba(255,153,0,0.25)", icon: ShoppingCart },
  flipkart:{ label: "Flipkart",color: "#2874F0", bg: "rgba(40,116,240,0.12)",border: "rgba(40,116,240,0.25)", icon: Package },
  myntra:  { label: "Myntra",  color: "#FF3F6C", bg: "rgba(255,63,108,0.12)", border: "rgba(255,63,108,0.25)", icon: Tag },
};

const PlatformBadge = ({ platform, size = "md" }) => {
  const cfg = platformConfig[platform?.toLowerCase()] || { label: platform, color: "#94A3B8", bg: "rgba(148,163,184,0.12)", border: "rgba(148,163,184,0.25)", icon: ShoppingBag };
  const Icon = cfg.icon;

  const sizeStyles = {
    sm: { padding: "2px 6px", fontSize: "0.68rem", gap: "4px", iconSize: 11 },
    md: { padding: "3px 8px", fontSize: "0.75rem", gap: "5px", iconSize: 12 },
    lg: { padding: "5px 12px", fontSize: "0.82rem", gap: "6px", iconSize: 14 },
  };

  const current = sizeStyles[size] || sizeStyles.md;

  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: current.gap,
        padding: current.padding,
        borderRadius: "var(--radius-sm)",
        fontSize: current.fontSize,
        fontWeight: 700,
        letterSpacing: "0.03em",
        color: cfg.color,
        backgroundColor: cfg.bg,
        border: `1px solid ${cfg.border}`,
        userSelect: "none",
        textTransform: "uppercase",
      }}
    >
      <Icon size={current.iconSize} color={cfg.color} />
      <span>{cfg.label}</span>
    </span>
  );
};

export default PlatformBadge;
