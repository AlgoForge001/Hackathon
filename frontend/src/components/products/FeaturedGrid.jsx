import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import { searchProducts } from "../../services/api";
import { SlidersHorizontal, ArrowUpDown, Loader2, Sparkles } from "lucide-react";

export default function FeaturedGrid({ selectedCategory, onSelectCategory, searchQuery, onSelectProduct }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState("relevance");
  const [bestOverallId, setBestOverallId] = useState(null);

  const categories = [
    { id: "", label: "All Products" },
    { id: "electronics", label: "Electronics & Audio" },
    { id: "footwear", label: "Athletic Footwear" },
    { id: "fashion", label: "Apparel & Denim" },
    { id: "home", label: "Home & Appliances" },
  ];

  useEffect(() => {
    let isMounted = true;
    setLoading(true);

    searchProducts({
      query: searchQuery || "",
      category: selectedCategory || "",
      sortBy,
    })
      .then((data) => {
        if (!isMounted) return;
        const resList = data.results || [];
        setProducts(resList);
        setBestOverallId(data.bestOverallId);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Search error:", err);
        if (isMounted) setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, [selectedCategory, searchQuery, sortBy]);

  return (
    <section id="featured-grid" className="section-rhythm">
      <div className="container">
        {/* Section Header with 48px rhythm (ui.md) */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            flexWrap: "wrap",
            gap: "16px",
            borderBottom: "1px solid var(--color-hairline)",
            paddingBottom: "16px",
            marginBottom: "24px",
          }}
        >
          <div>
            <span style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase", color: "var(--color-mute)" }}>
              {searchQuery ? `Search Results for "${searchQuery}"` : "Live Catalog Feed"}
            </span>
            <h2 className="heading-xl" style={{ marginTop: "4px" }}>
              {selectedCategory
                ? categories.find((c) => c.id === selectedCategory)?.label || "FEATURED COLLECTION"
                : "FEATURED CATALOG & BEST DEALS"}
            </h2>
          </div>

          {/* Sort Dropdown */}
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ fontSize: "13px", color: "var(--color-mute)", fontWeight: 500 }}>Sort By:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              style={{
                fontSize: "14px",
                fontWeight: 600,
                color: "var(--color-ink)",
                backgroundColor: "var(--color-soft-cloud)",
                border: "none",
                borderRadius: "var(--radius-lg)",
                padding: "8px 16px",
                cursor: "pointer",
                outline: "none",
                fontFamily: "var(--font-ui)",
              }}
            >
              <option value="relevance">AI Recommendation</option>
              <option value="price_asc">Price: Low to High</option>
              <option value="price_desc">Price: High to Low</option>
              <option value="rating">Top Rated</option>
              <option value="discount">Biggest Discount</option>
            </select>
          </div>
        </div>

        {/* Filter Chip Strip (ui.md Spec) */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            overflowX: "auto",
            paddingBottom: "12px",
            marginBottom: "24px",
          }}
        >
          {categories.map((cat) => {
            const isActive = (selectedCategory || "") === cat.id;
            return (
              <button
                key={cat.id}
                className={`filter-chip ${isActive ? "active" : ""}`}
                onClick={() => onSelectCategory(cat.id)}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Product Grid: 3-up on Desktop (ui.md spec) */}
        {loading ? (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              minHeight: "360px",
              gap: "12px",
            }}
          >
            <Loader2 size={36} color="var(--color-ink)" className="animate-spin" style={{ animation: "spin 1s linear infinite" }} />
            <p style={{ fontSize: "14px", color: "var(--color-mute)", fontWeight: 500 }}>
              Analyzing prices across Amazon, Flipkart, and Myntra...
            </p>
          </div>
        ) : products.length === 0 ? (
          <div
            style={{
              textAlign: "center",
              padding: "64px 20px",
              backgroundColor: "var(--color-soft-cloud)",
              borderRadius: "var(--radius-sm)",
            }}
          >
            <h3 style={{ fontSize: "20px", fontWeight: 600 }}>No matching products found</h3>
            <p style={{ fontSize: "14px", color: "var(--color-mute)", marginTop: "8px" }}>
              Try searching with broader terms or choose another category filter above.
            </p>
            <button
              onClick={() => {
                onSelectCategory("");
              }}
              className="btn-primary"
              style={{ marginTop: "20px" }}
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: "32px 20px",
            }}
          >
            {products.map((product) => (
              <ProductCard
                key={product.product_id || product.id}
                product={product}
                onSelectProduct={onSelectProduct}
              />
            ))}
          </div>
        )}
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}
