import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, SlidersHorizontal, Sparkles, ShieldCheck, Star, Zap, Headphones, Footprints, Shirt, Home } from "lucide-react";
import CategoryNavRail from "../components/home/CategoryNavRail";
import ProductCard from "../components/products/ProductCard";
import { CATEGORY_DEFINITIONS, searchMockProducts, mockProducts } from "../services/mockData";
import { searchProducts } from "../services/api";

export default function CategoryPage({ onSelectProduct, onOpenChat }) {
  const { categoryId } = useParams();
  const [selectedSubcategory, setSelectedSubcategory] = useState("All");
  const [selectedPlatforms, setSelectedPlatforms] = useState([]);
  const [maxPrice, setMaxPrice] = useState(150000);
  const [minRating, setMinRating] = useState(0);
  const [sortBy, setSortBy] = useState("best_value");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Find category metadata
  const currentCategory = CATEGORY_DEFINITIONS.find((c) => c.id === categoryId) || {
    id: categoryId || "electronics",
    label: (categoryId || "Electronics").toUpperCase(),
    shortLabel: categoryId || "Electronics",
    tagline: "Compare verified product listings across Amazon, Flipkart & Myntra",
    coverImage: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80",
    badge: "Verified Live Deals",
    subcategories: ["All"],
  };

  const getCategoryHeroIcon = (id) => {
    switch (id) {
      case "electronics":
        return <Headphones size={28} color="#ffffff" />;
      case "footwear":
        return <Footprints size={28} color="#ffffff" />;
      case "fashion":
        return <Shirt size={28} color="#ffffff" />;
      case "home":
        return <Home size={28} color="#ffffff" />;
      default:
        return <Sparkles size={28} color="#ffffff" />;
    }
  };

  // Reset subcategory when category changes
  useEffect(() => {
    setSelectedSubcategory("All");
    setSelectedPlatforms([]);
    setMaxPrice(150000);
    setMinRating(0);
  }, [categoryId]);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);

    const subcategoryQuery = selectedSubcategory !== "All" ? selectedSubcategory.toLowerCase() : "";

    searchProducts({
      category: categoryId,
      query: subcategoryQuery,
      maxPrice,
      platforms: selectedPlatforms,
      sortBy,
    })
      .then((data) => {
        if (!isMounted) return;
        let res = data.results || [];
        if (minRating > 0) {
          res = res.filter((p) => Number(p.rating) >= minRating);
        }
        setProducts(res);
        setLoading(false);
      })
      .catch(() => {
        if (!isMounted) return;
        const local = searchMockProducts({
          category: categoryId,
          query: subcategoryQuery,
          maxPrice,
          platforms: selectedPlatforms,
          sortBy,
        });
        setProducts(local.results || []);
        setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, [categoryId, selectedSubcategory, selectedPlatforms, maxPrice, minRating, sortBy]);

  const togglePlatform = (p) => {
    setSelectedPlatforms((prev) =>
      prev.includes(p) ? prev.filter((item) => item !== p) : [...prev, p]
    );
  };

  return (
    <div className="category-page" style={{ minHeight: "100vh", backgroundColor: "var(--color-canvas)" }}>
      {/* Category Top Nav Rail */}
      <CategoryNavRail />

      {/* ─── 1. CATEGORY CINEMATIC HERO BANNER ─────────────────── */}
      <div
        style={{
          position: "relative",
          backgroundColor: "var(--color-ink)",
          color: "var(--color-canvas)",
          padding: "48px 0",
          backgroundImage: `linear-gradient(90deg, rgba(17,17,17,0.95) 0%, rgba(17,17,17,0.75) 60%, rgba(17,17,17,0.95) 100%), url('${currentCategory.coverImage}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container">
          {/* Breadcrumb */}
          <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", color: "rgba(255,255,255,0.7)", marginBottom: "16px" }}>
            <Link to="/" style={{ display: "inline-flex", alignItems: "center", gap: "4px", color: "rgba(255,255,255,0.9)" }}>
              <ArrowLeft size={14} /> Home
            </Link>
            <span>/</span>
            <span>Categories</span>
            <span>/</span>
            <span style={{ color: "#ffffff", fontWeight: 600 }}>{currentCategory.label}</span>
          </div>

          <div style={{ maxWidth: "700px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px" }}>
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "var(--radius-sm)",
                  backgroundColor: "rgba(255,255,255,0.15)",
                  backdropFilter: "blur(8px)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "1px solid rgba(255,255,255,0.25)",
                }}
              >
                {getCategoryHeroIcon(currentCategory.id)}
              </div>
              <span
                style={{
                  backgroundColor: "var(--color-sale)",
                  color: "#ffffff",
                  fontSize: "11px",
                  fontWeight: 800,
                  textTransform: "uppercase",
                  padding: "4px 10px",
                  borderRadius: "4px",
                  letterSpacing: "0.5px",
                }}
              >
                {currentCategory.badge}
              </span>
            </div>

            <h1 className="display-campaign" style={{ fontSize: "clamp(36px, 5vw, 64px)", lineHeight: 1 }}>
              {currentCategory.label}
            </h1>
            <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.85)", marginTop: "12px", lineHeight: 1.5 }}>
              {currentCategory.tagline}
            </p>

            <div style={{ display: "flex", alignItems: "center", gap: "16px", marginTop: "20px", flexWrap: "wrap" }}>
              <button onClick={onOpenChat} className="btn-outline-on-image" style={{ height: "40px", fontSize: "13px", gap: "6px" }}>
                <Sparkles size={14} />
                <span>Ask AI to Recommend {currentCategory.shortLabel}</span>
              </button>
              <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.8)", display: "flex", alignItems: "center", gap: "6px" }}>
                <ShieldCheck size={14} color="#4ade80" />
                <span>{products.length} Multi-Platform Listings Active</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ─── 2. MAIN FILTER & PRODUCTS SECTION ─────────────────── */}
      <div className="container" style={{ paddingTop: "32px", paddingBottom: "64px" }}>
        {/* Subcategory Pills Strip */}
        {currentCategory.subcategories && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              overflowX: "auto",
              paddingBottom: "16px",
              marginBottom: "24px",
              borderBottom: "1px solid var(--color-hairline)",
            }}
          >
            <span style={{ fontSize: "13px", fontWeight: 700, color: "var(--color-mute)", textTransform: "uppercase", marginRight: "6px" }}>
              Subcategory:
            </span>
            {currentCategory.subcategories.map((sub) => {
              const isActive = selectedSubcategory === sub;
              return (
                <button
                  key={sub}
                  onClick={() => setSelectedSubcategory(sub)}
                  className={`filter-chip ${isActive ? "active" : ""}`}
                >
                  {sub}
                </button>
              );
            })}
          </div>
        )}

        {/* Layout Grid: Toolbar Controls + Products */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "32px",
            alignItems: "start",
          }}
        >
          <div style={{ gridColumn: "1 / -1" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "16px",
                backgroundColor: "var(--color-soft-cloud)",
                padding: "14px 20px",
                borderRadius: "var(--radius-none)",
                marginBottom: "24px",
                border: "1px solid var(--color-hairline)",
              }}
            >
              {/* Left Controls: Platform Toggles */}
              <div style={{ display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" }}>
                <span style={{ fontSize: "13px", fontWeight: 700, color: "var(--color-ink)" }}>Platforms:</span>
                {["amazon", "flipkart", "myntra"].map((plat) => {
                  const isChecked = selectedPlatforms.includes(plat);
                  return (
                    <label key={plat} style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "13px", cursor: "pointer", fontWeight: 600 }}>
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => togglePlatform(plat)}
                        style={{ cursor: "pointer", accentColor: "var(--color-ink)" }}
                      />
                      <span style={{ textTransform: "capitalize" }}>{plat}</span>
                    </label>
                  );
                })}
              </div>

              {/* Right Controls: Sort Dropdown */}
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <span style={{ fontSize: "13px", color: "var(--color-mute)", fontWeight: 500 }}>Sort:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  style={{
                    fontSize: "13px",
                    fontWeight: 600,
                    color: "var(--color-ink)",
                    backgroundColor: "var(--color-canvas)",
                    border: "1px solid var(--color-hairline)",
                    borderRadius: "var(--radius-lg)",
                    padding: "6px 14px",
                    cursor: "pointer",
                    outline: "none",
                  }}
                >
                  <option value="best_value">AI Best Recommendation</option>
                  <option value="price_asc">Price: Low to High</option>
                  <option value="price_desc">Price: High to Low</option>
                  <option value="rating">Top Customer Rated</option>
                  <option value="discount">Biggest Discount</option>
                </select>
              </div>
            </div>

            {/* Products Grid */}
            {loading ? (
              <div style={{ textAlign: "center", padding: "64px 20px" }}>
                <div style={{ fontSize: "18px", fontWeight: 600 }}>Loading {currentCategory.shortLabel} deals...</div>
              </div>
            ) : products.length === 0 ? (
              <div
                style={{
                  textAlign: "center",
                  padding: "64px 20px",
                  backgroundColor: "var(--color-soft-cloud)",
                  borderRadius: "var(--radius-none)",
                }}
              >
                <h3 style={{ fontSize: "20px", fontWeight: 600 }}>No products match these filters</h3>
                <p style={{ fontSize: "14px", color: "var(--color-mute)", marginTop: "8px" }}>
                  Try resetting the subcategory or platform filters.
                </p>
                <button
                  onClick={() => {
                    setSelectedSubcategory("All");
                    setSelectedPlatforms([]);
                    setMaxPrice(150000);
                  }}
                  className="btn-primary"
                  style={{ marginTop: "20px" }}
                >
                  Reset All Filters
                </button>
              </div>
            ) : (
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
                  gap: "32px 20px",
                }}
              >
                {products.map((product) => (
                  <ProductCard
                    key={product.id || product.product_id}
                    product={product}
                    onSelectProduct={onSelectProduct}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
