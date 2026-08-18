import React from "react";
import { motion } from "framer-motion";
import { X, SlidersHorizontal } from "lucide-react";
import { useShopping } from "../../context/ShoppingContext.jsx";

const sortOptions = [
  { value: "best_value", label: "🏆 Best Value (AI Score)" },
  { value: "price_asc",  label: "💰 Price: Low to High" },
  { value: "price_desc", label: "💎 Price: High to Low" },
  { value: "rating",     label: "⭐ Highest Rated" },
  { value: "discount",   label: "🔥 Best Discount" },
];

const platforms = [
  { id: "amazon",   label: "Amazon",   color: "#FF9900" },
  { id: "flipkart", label: "Flipkart", color: "#2874F0" },
  { id: "myntra",   label: "Myntra",   color: "#FF3F6C" },
];

const FilterSidebar = ({ onClose }) => {
  const { filters, setFilter, runSearch } = useShopping();

  const togglePlatform = (pid) => {
    const current = filters.platforms || [];
    const updated = current.includes(pid) ? current.filter((p) => p !== pid) : [...current, pid];
    setFilter({ platforms: updated });
  };

  const applyFilters = () => {
    runSearch();
    onClose?.();
  };

  return (
    <div
      className="glass-card"
      style={{ padding: 20, display: "flex", flexDirection: "column", gap: 20, position: "sticky", top: 80 }}
    >
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
          <SlidersHorizontal size={16} color="#818CF8" />
          <span style={{ fontWeight: 700, fontSize: "0.9rem" }}>Filters & Sort</span>
        </div>
        <button onClick={onClose} className="btn-icon" style={{ width: 28, height: 28, borderRadius: 7 }}>
          <X size={14} color="#64748B" />
        </button>
      </div>

      {/* Sort By */}
      <div>
        <p style={{ fontSize: "0.75rem", fontWeight: 700, color: "#64748B", textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: 10 }}>
          Sort By
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          {sortOptions.map((opt) => (
            <button
              key={opt.value}
              onClick={() => setFilter({ sortBy: opt.value })}
              style={{
                padding: "8px 12px",
                borderRadius: 8,
                border: `1px solid ${filters.sortBy === opt.value ? "rgba(129,140,248,0.4)" : "rgba(255,255,255,0.06)"}`,
                background: filters.sortBy === opt.value ? "rgba(129,140,248,0.1)" : "transparent",
                color: filters.sortBy === opt.value ? "#C4B5FD" : "#94A3B8",
                fontSize: "0.8rem",
                fontWeight: filters.sortBy === opt.value ? 600 : 400,
                cursor: "pointer",
                textAlign: "left",
                fontFamily: "var(--font-main)",
                transition: "all 0.15s ease",
              }}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* Platform Filter */}
      <div>
        <p style={{ fontSize: "0.75rem", fontWeight: 700, color: "#64748B", textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: 10 }}>
          Platform
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {platforms.map((p) => {
            const active = !filters.platforms?.length || filters.platforms.includes(p.id);
            return (
              <label
                key={p.id}
                style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }}
              >
                <input
                  type="checkbox"
                  checked={active || !filters.platforms?.length}
                  onChange={() => togglePlatform(p.id)}
                  style={{ display: "none" }}
                />
                <div
                  style={{
                    width: 18,
                    height: 18,
                    borderRadius: 4,
                    border: `2px solid ${active ? p.color : "rgba(255,255,255,0.15)"}`,
                    background: active ? p.color + "22" : "transparent",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    transition: "all 0.15s",
                  }}
                >
                  {active && <div style={{ width: 8, height: 8, borderRadius: 2, background: p.color }} />}
                </div>
                <span style={{ fontSize: "0.85rem", color: active ? "#F8FAFC" : "#64748B", fontWeight: active ? 600 : 400 }}>
                  {p.label}
                </span>
              </label>
            );
          })}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <p style={{ fontSize: "0.75rem", fontWeight: 700, color: "#64748B", textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: 10 }}>
          Max Price
        </p>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ fontSize: "0.8rem", color: "#38BDF8", fontFamily: "var(--font-mono)", fontWeight: 700 }}>
            ₹{(filters.maxPrice || 200000).toLocaleString("en-IN")}
          </span>
        </div>
        <input
          type="range"
          min={0}
          max={200000}
          step={500}
          value={filters.maxPrice || 200000}
          onChange={(e) => setFilter({ maxPrice: Number(e.target.value) })}
          style={{ width: "100%", marginTop: 8, accentColor: "#818CF8" }}
        />
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.72rem", color: "#475569", marginTop: 2 }}>
          <span>₹0</span>
          <span>₹2,00,000</span>
        </div>
      </div>

      {/* Apply Button */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={applyFilters}
        className="btn btn-primary"
        style={{ padding: "11px", fontSize: "0.875rem" }}
      >
        Apply Filters
      </motion.button>

      {/* Reset */}
      <button
        onClick={() => { setFilter({ sortBy: "best_value", platforms: [], maxPrice: 200000, minPrice: 0 }); }}
        style={{ background: "none", border: "none", color: "#64748B", fontSize: "0.8rem", cursor: "pointer", fontFamily: "var(--font-main)", textDecoration: "underline" }}
      >
        Reset all filters
      </button>
    </div>
  );
};

export default FilterSidebar;
