import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Search, Heart, ShoppingBag, Sparkles, User, LogOut } from "lucide-react";
import { useAuth } from "../../context/AuthContext";
import { CATEGORY_DEFINITIONS } from "../../services/mockData";

export default function Navbar({ onOpenChat }) {
  const [searchValue, setSearchValue] = useState("");
  const [profileOpen, setProfileOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { user, logout } = useAuth ? useAuth() : { user: null, logout: () => {} };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchValue.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchValue.trim())}`);
      setSearchValue("");
    }
  };

  return (
    <header style={{ position: "sticky", top: 0, zIndex: 100, backgroundColor: "var(--color-canvas)" }}>
      {/* ─── 1. UTILITY BAR ─────────────────────────────────────── */}
      <div
        style={{
          backgroundColor: "var(--color-soft-cloud)",
          fontSize: "12px",
          fontWeight: 500,
          color: "var(--color-ink)",
          height: "36px",
          display: "flex",
          alignItems: "center",
          borderBottom: "1px solid var(--color-hairline-soft)",
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
              Live Cross-Platform AI Engine Connected
            </span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
            <span style={{ color: "var(--color-charcoal)" }}>Amazon · Flipkart · Myntra</span>
            <span style={{ color: "var(--color-hairline)" }}>|</span>
            <Link to="/deals" style={{ color: "var(--color-sale)", fontWeight: 700 }}>
              ⚡ Lightning Deals
            </Link>
            <span style={{ color: "var(--color-hairline)" }}>|</span>
            <button
              onClick={onOpenChat}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "5px",
                fontWeight: 600,
                color: "var(--color-ink)",
              }}
            >
              <Sparkles size={13} color="#f59e0b" />
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
            <Link to="/" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
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
                  color: "var(--color-ink)",
                }}
              >
                ALGOFORGE
              </span>
            </Link>
          </div>

          {/* Center Nav Category Links */}
          <nav
            style={{
              display: "flex",
              alignItems: "center",
              gap: "24px",
            }}
            className="desktop-nav"
          >
            <Link
              to="/"
              style={{
                fontSize: "15px",
                fontWeight: 600,
                color: location.pathname === "/" ? "var(--color-ink)" : "var(--color-mute)",
                padding: "8px 0",
                position: "relative",
              }}
            >
              All Deals
              {location.pathname === "/" && (
                <div
                  style={{
                    position: "absolute",
                    bottom: "-12px",
                    left: 0,
                    right: 0,
                    height: "2px",
                    backgroundColor: "var(--color-ink)",
                  }}
                />
              )}
            </Link>

            {CATEGORY_DEFINITIONS.map((cat) => {
              const isActive = location.pathname === `/category/${cat.id}`;
              return (
                <Link
                  key={cat.id}
                  to={`/category/${cat.id}`}
                  style={{
                    fontSize: "15px",
                    fontWeight: 600,
                    color: isActive ? "var(--color-ink)" : "var(--color-mute)",
                    padding: "8px 0",
                    position: "relative",
                    transition: "color 0.15s ease",
                  }}
                >
                  {cat.shortLabel}
                  {isActive && (
                    <div
                      style={{
                        position: "absolute",
                        bottom: "-12px",
                        left: 0,
                        right: 0,
                        height: "2px",
                        backgroundColor: "var(--color-ink)",
                      }}
                    />
                  )}
                </Link>
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

            {/* User Profile */}
            {user ? (
              <div style={{ position: "relative" }}>
                <button
                  onClick={() => setProfileOpen(!profileOpen)}
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "var(--radius-full)",
                    overflow: "hidden",
                    border: "2px solid var(--color-ink)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                  }}
                >
                  <img
                    src={user.picture || "https://ui-avatars.com/api/?name=" + encodeURIComponent(user.name || "User")}
                    alt={user.name}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </button>
                {profileOpen && (
                  <div
                    style={{
                      position: "absolute",
                      top: "calc(100% + 8px)",
                      right: 0,
                      width: "200px",
                      backgroundColor: "var(--color-canvas)",
                      border: "1px solid var(--color-hairline)",
                      borderRadius: "var(--radius-sm)",
                      padding: "12px",
                      boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
                      zIndex: 110,
                    }}
                  >
                    <p style={{ fontSize: "14px", fontWeight: 700 }}>{user.name}</p>
                    <p style={{ fontSize: "12px", color: "var(--color-mute)", marginBottom: "8px" }}>{user.email}</p>
                    <button
                      onClick={() => {
                        logout();
                        setProfileOpen(false);
                      }}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                        color: "var(--color-sale)",
                        fontSize: "13px",
                        fontWeight: 600,
                        width: "100%",
                        padding: "6px 0",
                      }}
                    >
                      <LogOut size={14} />
                      <span>Sign Out</span>
                    </button>
                  </div>
                )}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </header>
  );
}
