import React, { useState } from "react";
import { Search, Heart, ShoppingBag, Sparkles, SlidersHorizontal } from "lucide-react";

export default function Navbar({ onSearch, onOpenChat, activeCategory, onSelectCategory }) {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(searchValue);
    }
  };

  const navCategories = [
    { id: "", label: "All Featured" },
    { id: "electronics", label: "Electronics" },
    { id: "footwear", label: "Footwear" },
    { id: "fashion", label: "Fashion" },
    { id: "home", label: "Home & Living" },
  ];

  return (
    <header style={{ position: "sticky", top: 0, zIndex: 100, backgroundColor: "var(--color-canvas)" }}>
      {/* ─── 1. UTILITY BAR (ui.md Spec) ─────────────────────────── */}
      <div
        style={{
          backgroundColor: "var(--color-soft-cloud)",
          fontSize: "12px",
          fontWeight: 500,
          color: "var(--color-ink)",
          height: "36px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "16px", color: "var(--color-charcoal)" }}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
              <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "var(--color-success)" }}></span>
              Live Multi-Platform AI Engine Connected
            </span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <span style={{ cursor: "pointer", color: "var(--color-charcoal)" }}>Compare Amazon · Flipkart · Myntra</span>
            <span style={{ color: "var(--color-hairline)" }}>|</span>
            <button
              onClick={onOpenChat}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                fontWeight: 600,
                color: "var(--color-ink)",
              }}
            >
              <Sparkles size={13} />
              AI Assistant
            </button>
          </div>
        </div>
      </div>

      {/* ─── 2. PRIMARY NAV ─────────────────────────────────────── */}
      <div
        style={{
          height: "64px",
          display: "flex",
          alignItems: "center",
          borderBottom: "1px solid var(--color-hairline-soft)",
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "24px",
          }}
        >
          {/* Logo */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <a href="/" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <div
                style={{
                  width: "32px",
                  height: "32px",
                  backgroundColor: "var(--color-ink)",
                  borderRadius: "var(--radius-sm)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--color-canvas)",
                  fontWeight: 900,
                  fontSize: "15px",
                  letterSpacing: "-1px",
                }}
              >
                AF
              </div>
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "26px",
                  letterSpacing: "0.5px",
                  lineHeight: 1,
                }}
              >
                ALGOFORGE
              </span>
            </a>
          </div>

          {/* Center Nav Links */}
          <nav
            style={{
              display: "flex",
              alignItems: "center",
              gap: "28px",
            }}
            className="desktop-nav"
          >
            {navCategories.map((cat) => {
              const isActive = (activeCategory || "") === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => onSelectCategory(cat.id)}
                  style={{
                    fontSize: "15px",
                    fontWeight: 600,
                    color: isActive ? "var(--color-ink)" : "var(--color-mute)",
                    padding: "8px 0",
                    position: "relative",
                    transition: "color 0.15s ease",
                  }}
                >
                  {cat.label}
                  {isActive && (
                    <div
                      style={{
                        position: "absolute",
                        bottom: "-10px",
                        left: 0,
                        right: 0,
                        height: "2px",
                        backgroundColor: "var(--color-ink)",
                      }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action Cluster */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            {/* Search Pill Input */}
            <form onSubmit={handleSearchSubmit} style={{ width: "240px" }}>
              <div className="search-pill-container">
                <Search size={16} color="var(--color-mute)" style={{ marginRight: "8px", flexShrink: 0 }} />
                <input
                  type="text"
                  placeholder="Search products or ask AI..."
                  className="search-pill-input"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                />
              </div>
            </form>

            {/* AI Assistant Pill Button */}
            <button
              onClick={onOpenChat}
              className="btn-primary"
              style={{
                height: "40px",
                padding: "0 18px",
                fontSize: "14px",
                gap: "6px",
              }}
            >
              <Sparkles size={15} />
              <span>Ask AI</span>
            </button>

            {/* Icon buttons */}
            <button className="btn-icon-circular" title="Saved Items">
              <Heart size={18} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
