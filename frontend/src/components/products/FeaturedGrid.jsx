import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import { searchProducts } from "../../services/api";
import { searchMockProducts } from "../../services/mockData";
import { Loader2, ArrowRight } from "lucide-react";
import { CATEGORY_DEFINITIONS } from "../../services/mockData";

export default function FeaturedGrid({ selectedCategory, onSelectCategory, searchQuery, onSelectProduct }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState("best_value");

  const categories = [
    { id: "", label: "All Products" },
    ...CATEGORY_DEFINITIONS.map((c) => ({ id: c.id, label: c.shortLabel })),
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
        let resList = data.results || [];
        // Group unique products for the home feed
        resList = resList.filter((v, i, a) => a.findIndex((t) => (t.groupId || t.group_id) === (v.groupId || v.group_id)) === i);
        setProducts(resList);
        setLoading(false);
      })
      .catch((err) => {
        console.warn("Using fallback local data:", err.message);
        if (!isMounted) return;
        const local = searchMockProducts({
          query: searchQuery || "",
          category: selectedCategory || "",
          sortBy,
        });
        let resList = local.results || [];
        resList = resList.filter((v, i, a) => a.findIndex((t) => (t.groupId || t.group_id) === (v.groupId || v.group_id)) === i);
        setProducts(resList);
        setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, [selectedCategory, searchQuery, sortBy]);

  return (
    <section id="featured-grid" className="section-rhythm">
      <div className="container">
        {/* Section Header */}
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
                ? categories.find((c) => c.id === selectedCategory)?.label?.toUpperCase() || "FEATURED COLLECTION"
                : "FEATURED CATALOG & BEST PICKS"}
            </h2>
          </div>

          {/* Sort Dropdown & Category Page Link */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
            {selectedCategory && (
              <Link
                to={`/category/${selectedCategory}`}
                style={{
                  fontSize: "13px",
                  fontWeight: 700,
                  color: "var(--color-ink)",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "4px",
                }}
              >
                <span>View Full {selectedCategory} Page</span>
                <ArrowRight size={14} />
              </Link>
            )}

            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ fontSize: "13px", color: "var(--color-mute)", fontWeight: 500 }}>Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                style={{
                  fontSize: "13px",
                  fontWeight: 600,
                  color: "var(--color-ink)",
                  backgroundColor: "var(--color-soft-cloud)",
                  border: "1px solid var(--color-hairline)",
                  borderRadius: "var(--radius-lg)",
                  padding: "6px 14px",
                  cursor: "pointer",
                  outline: "none",
                  fontFamily: "var(--font-ui)",
                }}
              >
                <option value="best_value">AI Best Recommendation</option>
                <option value="price_asc">Price: Low to High</option>
                <option value="price_desc">Price: High to Low</option>
                <option value="rating">Top Rated</option>
                <option value="discount">Biggest Discount</option>
              </select>
            </div>
          </div>
        </div>

        {/* Filter Chip Strip */}
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
                onClick={() => onSelectCategory && onSelectCategory(cat.id)}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Product Grid */}
        {loading ? (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              minHeight: "300px",
              gap: "12px",
            }}
          >
            <Loader2 size={32} color="var(--color-ink)" className="animate-spin" style={{ animation: "spin 1s linear infinite" }} />
            <p style={{ fontSize: "14px", color: "var(--color-mute)", fontWeight: 500 }}>
              Analyzing multi-platform listings...
            </p>
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
            <h3 style={{ fontSize: "20px", fontWeight: 600 }}>No matching products found</h3>
            <p style={{ fontSize: "14px", color: "var(--color-mute)", marginTop: "8px" }}>
              Try searching with broader terms or choose another category filter above.
            </p>
            <button
              onClick={() => {
                if (onSelectCategory) onSelectCategory("");
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
              gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
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
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}</style>
    </section>
  );
}
