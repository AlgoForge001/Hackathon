import React, { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Search, ArrowLeft, SlidersHorizontal, Loader2 } from "lucide-react";
import CategoryNavRail from "../components/home/CategoryNavRail";
import ProductCard from "../components/products/ProductCard";
import { searchProducts } from "../services/api";
import { searchMockProducts } from "../services/mockData";

export default function SearchResultsPage({ onSelectProduct, onOpenChat }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState("best_value");
  const [selectedPlatforms, setSelectedPlatforms] = useState([]);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);

    searchProducts({
      query,
      platforms: selectedPlatforms,
      sortBy,
    })
      .then((data) => {
        if (!isMounted) return;
        setProducts(data.results || []);
        setLoading(false);
      })
      .catch(() => {
        if (!isMounted) return;
        const local = searchMockProducts({
          query,
          platforms: selectedPlatforms,
          sortBy,
        });
        setProducts(local.results || []);
        setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, [query, selectedPlatforms, sortBy]);

  const togglePlatform = (p) => {
    setSelectedPlatforms((prev) =>
      prev.includes(p) ? prev.filter((item) => item !== p) : [...prev, p]
    );
  };

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "var(--color-canvas)" }}>
      <CategoryNavRail />

      <div className="container" style={{ padding: "32px 0 64px" }}>
        {/* Breadcrumbs & Title */}
        <div style={{ marginBottom: "24px" }}>
          <Link to="/" style={{ display: "inline-flex", alignItems: "center", gap: "4px", fontSize: "13px", color: "var(--color-mute)", marginBottom: "12px" }}>
            <ArrowLeft size={14} /> Back to Home
          </Link>

          <h1 className="heading-xl" style={{ fontSize: "28px" }}>
            {query ? `Search Results for "${query}"` : "All Cross-Platform Products"}
          </h1>
          <p style={{ fontSize: "14px", color: "var(--color-mute)", marginTop: "4px" }}>
            Found {products.length} matching products across Amazon, Flipkart & Myntra
          </p>
        </div>

        {/* Filter Toolbar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "16px",
            backgroundColor: "var(--color-soft-cloud)",
            padding: "14px 20px",
            marginBottom: "32px",
            border: "1px solid var(--color-hairline)",
          }}
        >
          {/* Platforms */}
          <div style={{ display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" }}>
            <span style={{ fontSize: "13px", fontWeight: 700 }}>Platforms:</span>
            {["amazon", "flipkart", "myntra"].map((plat) => (
              <label key={plat} style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "13px", cursor: "pointer", fontWeight: 600 }}>
                <input
                  type="checkbox"
                  checked={selectedPlatforms.includes(plat)}
                  onChange={() => togglePlatform(plat)}
                  style={{ cursor: "pointer", accentColor: "var(--color-ink)" }}
                />
                <span style={{ textTransform: "capitalize" }}>{plat}</span>
              </label>
            ))}
          </div>

          {/* Sort */}
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ fontSize: "13px", color: "var(--color-mute)", fontWeight: 500 }}>Sort:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              style={{
                padding: "6px 14px",
                borderRadius: "var(--radius-lg)",
                border: "1px solid var(--color-hairline)",
                backgroundColor: "var(--color-canvas)",
                fontSize: "13px",
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              <option value="best_value">AI Best Value</option>
              <option value="price_asc">Price: Low to High</option>
              <option value="price_desc">Price: High to Low</option>
              <option value="rating">Top Rated</option>
              <option value="discount">Biggest Discount</option>
            </select>
          </div>
        </div>

        {/* Results Grid */}
        {loading ? (
          <div style={{ textAlign: "center", padding: "64px 20px" }}>
            <Loader2 size={32} className="animate-spin" style={{ margin: "0 auto 12px", animation: "spin 1s linear infinite" }} />
            <p style={{ color: "var(--color-mute)", fontSize: "14px" }}>Searching Amazon, Flipkart & Myntra in real-time...</p>
          </div>
        ) : products.length === 0 ? (
          <div style={{ textAlign: "center", padding: "64px 20px", backgroundColor: "var(--color-soft-cloud)" }}>
            <h3 style={{ fontSize: "18px", fontWeight: 600 }}>No products found matching "{query}"</h3>
            <p style={{ color: "var(--color-mute)", fontSize: "14px", marginTop: "8px" }}>
              Try searching with broader terms (e.g. "shoes", "headphones", "denim", "smartphones") or ask the AI Assistant.
            </p>
            <div style={{ display: "flex", gap: "12px", justifyContent: "center", marginTop: "20px" }}>
              <Link to="/" className="btn-secondary">
                Back to Home
              </Link>
              <button onClick={onOpenChat} className="btn-primary">
                Ask AI Assistant
              </button>
            </div>
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

      <style>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
}
