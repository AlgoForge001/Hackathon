import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Zap, Sparkles, ShieldCheck, Headphones, Footprints, Shirt, Home } from "lucide-react";
import { CATEGORY_DEFINITIONS } from "../../services/mockData";

export default function CategoryNavRail() {
  const location = useLocation();

  const getCategoryIcon = (id) => {
    switch (id) {
      case "electronics":
        return <Headphones size={14} />;
      case "footwear":
        return <Footprints size={14} />;
      case "fashion":
        return <Shirt size={14} />;
      case "home":
        return <Home size={14} />;
      default:
        return <Sparkles size={14} />;
    }
  };

  return (
    <nav
      style={{
        backgroundColor: "var(--color-ink)",
        color: "var(--color-canvas)",
        borderBottom: "1px solid rgba(255,255,255,0.1)",
        overflowX: "auto",
        scrollbarWidth: "none",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          height: "44px",
          whiteSpace: "nowrap",
        }}
      >
        {/* All Deals Pill */}
        <Link
          to="/deals"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            fontSize: "13px",
            fontWeight: 700,
            color: "#f59e0b",
            padding: "6px 14px",
            borderRadius: "var(--radius-lg)",
            backgroundColor: "rgba(245, 158, 11, 0.15)",
            border: "1px solid rgba(245, 158, 11, 0.3)",
            transition: "all 0.15s ease",
          }}
        >
          <Zap size={13} fill="#f59e0b" />
          <span>Lightning Deals</span>
        </Link>

        {/* AI Top Picks */}
        <Link
          to="/trending"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            fontSize: "13px",
            fontWeight: 600,
            color: "var(--color-canvas)",
            padding: "6px 14px",
            borderRadius: "var(--radius-lg)",
            backgroundColor: location.pathname === "/trending" ? "rgba(255,255,255,0.2)" : "transparent",
            transition: "background-color 0.15s ease",
          }}
        >
          <Sparkles size={13} color="#38bdf8" />
          <span>AI Top Picks</span>
        </Link>

        <span style={{ color: "rgba(255,255,255,0.2)", margin: "0 4px" }}>|</span>

        {/* Direct Category Page Links with Clean SVG Icons */}
        {CATEGORY_DEFINITIONS.map((cat) => {
          const isActive = location.pathname === `/category/${cat.id}`;
          return (
            <Link
              key={cat.id}
              to={`/category/${cat.id}`}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                fontSize: "13px",
                fontWeight: isActive ? 700 : 500,
                color: isActive ? "#ffffff" : "rgba(255,255,255,0.85)",
                padding: "6px 12px",
                borderRadius: "var(--radius-lg)",
                backgroundColor: isActive ? "rgba(255,255,255,0.2)" : "transparent",
                transition: "all 0.15s ease",
              }}
            >
              {getCategoryIcon(cat.id)}
              <span>{cat.shortLabel}</span>
            </Link>
          );
        })}

        {/* Cross-Platform Tag */}
        <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "rgba(255,255,255,0.6)" }}>
          <ShieldCheck size={13} color="#4ade80" />
          <span>Amazon · Flipkart · Myntra Live</span>
        </div>
      </div>
    </nav>
  );
}
