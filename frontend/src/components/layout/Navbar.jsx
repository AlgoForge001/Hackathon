import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Search, Sparkles, User, LogOut, ChevronRight, Zap, TrendingUp, X } from "lucide-react";
import { useAuth } from "../../context/AuthContext";
import { CATEGORY_DEFINITIONS, mockProducts } from "../../services/mockData";

export default function Navbar({ onOpenChat }) {
  const [searchValue, setSearchValue] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isSearchHovered, setIsSearchHovered] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const searchContainerRef = useRef(null);
  const searchInputRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { user, logout } = useAuth ? useAuth() : { user: null, logout: () => {} };

  // Filter recommendations in real time as user types
  const searchSuggestions = React.useMemo(() => {
    if (!searchValue.trim()) {
      // Show trending top picks when input is empty & focused
      return mockProducts.slice(0, 4);
    }
    const q = searchValue.toLowerCase().trim();
    return mockProducts
      .filter((p) =>
        p.title?.toLowerCase().includes(q) ||
        p.name?.toLowerCase().includes(q) ||
        p.brand?.toLowerCase().includes(q) ||
        p.category?.toLowerCase().includes(q)
      )
      .slice(0, 6);
  }, [searchValue]);

  // Close search recommendations dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(e.target)) {
        setIsSearchFocused(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchValue.trim()) {
      setIsSearchFocused(false);
      navigate(`/search?q=${encodeURIComponent(searchValue.trim())}`);
      setSearchValue("");
    }
  };

  const handleSelectRecommendation = (product) => {
    setIsSearchFocused(false);
    setSearchValue("");
    const targetId = product.product_id || product.id || product.groupId;
    navigate(`/product/${targetId}`);
  };

  // Determine dynamic width
  const isExpanded = isSearchFocused || isSearchHovered;
  const searchWidth = isSearchFocused ? "460px" : isSearchHovered ? "330px" : "210px";

  return (
    <header style={{ position: "sticky", top: 0, zIndex: 1000, backgroundColor: "var(--color-canvas)" }}>
      {/* ─── SINGLE UNIFIED NAVBAR ──────────────────────────────────────── */}
      <div
        style={{
          height: "68px",
          display: "flex",
          alignItems: "center",
          borderBottom: "1px solid var(--color-hairline-soft)",
          boxShadow: "0 2px 10px rgba(0,0,0,0.03)",
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "16px",
          }}
        >
          {/* 1. Brand Logo */}
          <Link to="/" style={{ display: "flex", alignItems: "center", gap: "10px", flexShrink: 0 }}>
            <div
              style={{
                width: "36px",
                height: "36px",
                backgroundColor: "var(--color-ink)",
                borderRadius: "var(--radius-sm)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--color-canvas)",
                fontWeight: 900,
                fontSize: "16px",
                letterSpacing: "-0.5px",
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

          {/* 2. Category Navigation Links */}
          <nav
            style={{
              display: "flex",
              alignItems: "center",
              gap: "18px",
              flexShrink: 0,
            }}
            className="desktop-nav"
          >
            <Link
              to="/"
              style={{
                fontSize: "14px",
                fontWeight: location.pathname === "/" ? 700 : 500,
                color: location.pathname === "/" ? "var(--color-ink)" : "var(--color-mute)",
                transition: "color 0.15s ease",
              }}
            >
              All
            </Link>

            {CATEGORY_DEFINITIONS.map((cat) => (
              <Link
                key={cat.id}
                to={`/category/${cat.id}`}
                style={{
                  fontSize: "14px",
                  fontWeight: location.pathname === `/category/${cat.id}` ? 700 : 500,
                  color: location.pathname === `/category/${cat.id}` ? "var(--color-ink)" : "var(--color-mute)",
                  transition: "color 0.15s ease",
                }}
              >
                {cat.shortLabel}
              </Link>
            ))}

            <Link
              to="/deals"
              style={{
                fontSize: "14px",
                fontWeight: location.pathname === "/deals" ? 700 : 600,
                color: "var(--color-sale)",
                display: "flex",
                alignItems: "center",
                gap: "4px",
              }}
            >
              <Zap size={14} color="var(--color-sale)" />
              Deals
            </Link>
          </nav>

          {/* 3. Dynamic Animated Expanding Search Bar */}
          <div
            ref={searchContainerRef}
            onMouseEnter={() => setIsSearchHovered(true)}
            onMouseLeave={() => setIsSearchHovered(false)}
            style={{
              position: "relative",
              width: searchWidth,
              maxWidth: "100%",
              transition: "width 0.35s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.25s ease",
            }}
          >
            <form onSubmit={handleSearchSubmit}>
              <div
                onClick={() => searchInputRef.current?.focus()}
                style={{
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: isSearchFocused ? "var(--color-canvas)" : isSearchHovered ? "#f1f3f5" : "var(--color-soft-cloud)",
                  borderRadius: "var(--radius-pill)",
                  padding: "0 16px",
                  height: "42px",
                  border: isSearchFocused
                    ? "1.5px solid var(--color-ink)"
                    : isSearchHovered
                    ? "1.5px solid var(--color-hairline)"
                    : "1.5px solid transparent",
                  transition: "all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1)",
                  boxShadow: isSearchFocused
                    ? "0 8px 24px rgba(0,0,0,0.1)"
                    : isSearchHovered
                    ? "0 4px 14px rgba(0,0,0,0.05)"
                    : "none",
                  cursor: "text",
                }}
              >
                <Search
                  size={16}
                  color={isSearchFocused ? "var(--color-ink)" : "var(--color-mute)"}
                  style={{
                    marginRight: "10px",
                    flexShrink: 0,
                    transition: "color 0.2s ease, transform 0.2s ease",
                    transform: isSearchFocused ? "scale(1.1)" : "scale(1)",
                  }}
                />
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder={isSearchFocused ? "Search products across Amazon, Flipkart, Myntra..." : isSearchHovered ? "Search 33+ products..." : "Search..."}
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  onFocus={() => setIsSearchFocused(true)}
                  style={{
                    border: "none",
                    background: "transparent",
                    outline: "none",
                    width: "100%",
                    fontSize: "13px",
                    fontWeight: 500,
                    color: "var(--color-ink)",
                    fontFamily: "var(--font-ui)",
                  }}
                />
                {searchValue && (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSearchValue("");
                    }}
                    style={{ background: "none", border: "none", cursor: "pointer", padding: "2px", color: "var(--color-mute)" }}
                  >
                    <X size={14} />
                  </button>
                )}
              </div>
            </form>

            {/* Predictive Recommendations Dropdown */}
            {isSearchFocused && searchSuggestions.length > 0 && (
              <div
                style={{
                  position: "absolute",
                  top: "48px",
                  left: 0,
                  right: 0,
                  backgroundColor: "var(--color-canvas)",
                  borderRadius: "var(--radius-md)",
                  border: "1px solid var(--color-hairline)",
                  boxShadow: "0 16px 40px rgba(0,0,0,0.12)",
                  zIndex: 2000,
                  overflow: "hidden",
                  animation: "fadeIn 0.2s ease-out",
                }}
              >
                <div
                  style={{
                    padding: "8px 16px",
                    fontSize: "11px",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                    color: "var(--color-mute)",
                    backgroundColor: "var(--color-soft-cloud)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <span>{searchValue ? "Matching Products" : "Trending Recommendations"}</span>
                  <span style={{ fontSize: "10px", fontWeight: 500 }}>Live Comparison</span>
                </div>

                <div style={{ maxHeight: "360px", overflowY: "auto" }}>
                  {searchSuggestions.map((prod) => (
                    <div
                      key={prod.id || prod.product_id}
                      onClick={() => handleSelectRecommendation(prod)}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                        padding: "10px 16px",
                        cursor: "pointer",
                        borderBottom: "1px solid var(--color-hairline-soft)",
                        transition: "background-color 0.15s ease",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--color-soft-cloud)")}
                      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
                    >
                      <img
                        src={prod.image_url || prod.imageUrl}
                        alt={prod.title || prod.name}
                        style={{
                          width: "36px",
                          height: "36px",
                          borderRadius: "var(--radius-sm)",
                          objectFit: "cover",
                          backgroundColor: "var(--color-soft-cloud)",
                          flexShrink: 0,
                        }}
                      />
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div
                          style={{
                            fontSize: "13px",
                            fontWeight: 600,
                            color: "var(--color-ink)",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                          }}
                        >
                          {prod.title || prod.name}
                        </div>
                        <div style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "2px" }}>
                          <span style={{ fontSize: "12px", fontWeight: 700, color: "var(--color-ink)" }}>
                            ₹{Number(prod.price).toLocaleString("en-IN")}
                          </span>
                          <span
                            style={{
                              fontSize: "10px",
                              fontWeight: 700,
                              textTransform: "uppercase",
                              padding: "1px 6px",
                              borderRadius: "4px",
                              backgroundColor: "rgba(0,0,0,0.05)",
                              color: "var(--color-mute)",
                            }}
                          >
                            {prod.platform || "Amazon"}
                          </span>
                        </div>
                      </div>
                      <ChevronRight size={14} color="var(--color-mute)" />
                    </div>
                  ))}
                </div>

                {searchValue && (
                  <div
                    onClick={handleSearchSubmit}
                    style={{
                      padding: "10px 16px",
                      textAlign: "center",
                      backgroundColor: "var(--color-soft-cloud)",
                      fontSize: "12px",
                      fontWeight: 600,
                      color: "var(--color-ink)",
                      cursor: "pointer",
                    }}
                  >
                    View all results for "{searchValue}" →
                  </div>
                )}
              </div>
            )}
          </div>

          {/* 4. Action Buttons (Ask AI + Profile) */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexShrink: 0 }}>
            <button
              onClick={onOpenChat}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                padding: "8px 18px",
                backgroundColor: "var(--color-ink)",
                color: "var(--color-canvas)",
                borderRadius: "var(--radius-pill)",
                fontSize: "13px",
                fontWeight: 700,
                cursor: "pointer",
                border: "none",
                transition: "opacity 0.2s ease, transform 0.1s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.9")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              <Sparkles size={15} color="#FFD700" />
              <span>Ask AI</span>
            </button>

            {/* Profile Dropdown */}
            <div style={{ position: "relative" }}>
              <button
                onClick={() => setProfileOpen(!profileOpen)}
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  backgroundColor: "var(--color-soft-cloud)",
                  border: "1px solid var(--color-hairline)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                }}
              >
                <User size={18} color="var(--color-ink)" />
              </button>

              {profileOpen && (
                <div
                  style={{
                    position: "absolute",
                    right: 0,
                    top: "48px",
                    width: "220px",
                    backgroundColor: "var(--color-canvas)",
                    borderRadius: "var(--radius-md)",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
                    border: "1px solid var(--color-hairline)",
                    padding: "12px",
                    zIndex: 1000,
                  }}
                >
                  <div style={{ paddingBottom: "8px", borderBottom: "1px solid var(--color-hairline-soft)", marginBottom: "8px" }}>
                    <p style={{ fontSize: "13px", fontWeight: 700, margin: 0, color: "var(--color-ink)" }}>
                      {user ? user.name : "Guest Shopper"}
                    </p>
                    <p style={{ fontSize: "11px", color: "var(--color-mute)", margin: 0 }}>
                      {user ? user.email : "Sign in to sync alerts"}
                    </p>
                  </div>
                  <Link
                    to="/trending"
                    onClick={() => setProfileOpen(false)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      padding: "8px",
                      fontSize: "12px",
                      fontWeight: 600,
                      color: "var(--color-ink)",
                      borderRadius: "var(--radius-sm)",
                    }}
                  >
                    <TrendingUp size={14} />
                    <span>Trending Deals</span>
                  </Link>
                  {user && (
                    <button
                      onClick={() => {
                        logout();
                        setProfileOpen(false);
                      }}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        width: "100%",
                        padding: "8px",
                        fontSize: "12px",
                        fontWeight: 600,
                        color: "var(--color-sale)",
                        border: "none",
                        background: "none",
                        cursor: "pointer",
                        borderRadius: "var(--radius-sm)",
                        marginTop: "4px",
                      }}
                    >
                      <LogOut size={14} />
                      <span>Sign Out</span>
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
