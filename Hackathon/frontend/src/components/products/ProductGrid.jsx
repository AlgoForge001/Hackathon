import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Package, SlidersHorizontal } from "lucide-react";
import { useShopping } from "../../context/ShoppingContext.jsx";
import ProductCard from "./ProductCard.jsx";
import FilterSidebar from "../search/FilterSidebar.jsx";
import SkeletonLoader from "../common/SkeletonLoader.jsx";

const ProductGrid = () => {
  const { results, loading, hasSearched, query, category, error } = useShopping();
  const [filterOpen, setFilterOpen] = React.useState(false);

  // Empty state messages
  const emptyMsg = query
    ? `No products found for "${query}"`
    : category !== "all"
    ? `No ${category} products found. Try a different category.`
    : "Search for products above to see AI-powered comparisons.";

  return (
    <section className="container" style={{ paddingBottom: 80 }}>
      {/* Header Row */}
      {(hasSearched || results.length > 0) && (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20, gap: 12 }}>
          <div>
            <h2 style={{ fontWeight: 700, fontSize: "1.1rem", color: "#F8FAFC" }}>
              {loading ? "Finding best deals…" : results.length > 0 ? `${results.length} Products Found` : "No Results"}
            </h2>
            {!loading && results.length > 0 && (
              <p style={{ fontSize: "0.8rem", color: "#64748B", marginTop: 2 }}>
                Comparing across Amazon, Flipkart & Myntra · AI-enriched
              </p>
            )}
          </div>

          {/* Filter Toggle */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setFilterOpen(!filterOpen)}
            className="btn btn-ghost"
            style={{ padding: "8px 16px", fontSize: "0.8rem", gap: 6 }}
          >
            <SlidersHorizontal size={14} />
            Filters & Sort
          </motion.button>
        </div>
      )}

      <div style={{ display: "grid", gridTemplateColumns: filterOpen ? "280px 1fr" : "1fr", gap: 24, alignItems: "start" }}>
        {/* Filter Sidebar */}
        <AnimatePresence>
          {filterOpen && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
            >
              <FilterSidebar onClose={() => setFilterOpen(false)} />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Product Grid */}
        <div>
          {loading ? (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
                gap: 20,
              }}
            >
              {Array.from({ length: 6 }).map((_, i) => (
                <SkeletonLoader key={i} />
              ))}
            </div>
          ) : error ? (
            <div style={{ textAlign: "center", padding: "60px 20px" }}>
              <p style={{ fontSize: "2rem", marginBottom: 12 }}>⚠️</p>
              <p style={{ color: "#EF4444", marginBottom: 8 }}>{error}</p>
              <p style={{ color: "#64748B", fontSize: "0.875rem" }}>Using cached data — results may not be live.</p>
            </div>
          ) : results.length === 0 && hasSearched ? (
            <div style={{ textAlign: "center", padding: "60px 20px" }}>
              <p style={{ fontSize: "3rem", marginBottom: 16 }}>🔍</p>
              <p style={{ fontSize: "1.1rem", fontWeight: 600, color: "#F8FAFC", marginBottom: 8 }}>
                {emptyMsg}
              </p>
              <p style={{ color: "#64748B", fontSize: "0.875rem" }}>
                Try adjusting your search query or filters.
              </p>
            </div>
          ) : results.length === 0 ? (
            /* Pre-search welcome state */
            <div style={{ textAlign: "center", padding: "40px 20px" }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Package size={48} color="#1E293B" style={{ margin: "0 auto 16px" }} />
                <p style={{ fontSize: "1rem", color: "#475569" }}>
                  Search above to see AI-powered cross-platform comparisons
                </p>
              </motion.div>
            </div>
          ) : (
            <motion.div
              layout
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
                gap: 20,
              }}
            >
              <AnimatePresence mode="popLayout">
                {results.map((product, i) => (
                  <ProductCard key={product.id} product={product} index={i} />
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
