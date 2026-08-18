import React, { useState } from "react";
import Navbar from "./components/layout/Navbar";
import EditorialHero from "./components/hero/EditorialHero";
import SolutionsOverview from "./components/landing/SolutionsOverview";
import FeaturedGrid from "./components/products/FeaturedGrid";
import CategoryRail from "./components/hero/CategoryRail";
import FloatingAIChat from "./components/chat/FloatingAIChat";
import ProductModal from "./components/products/ProductModal";
import Footer from "./components/layout/Footer";

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleSearch = (query) => {
    setSearchQuery(query);
    const element = document.getElementById("featured-grid");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSelectCategory = (catId) => {
    setSelectedCategory(catId);
    setSearchQuery("");
    const element = document.getElementById("featured-grid");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleExploreDeals = () => {
    const element = document.getElementById("featured-grid");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="app-container" style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      {/* Top Navbar */}
      <Navbar
        onSearch={handleSearch}
        onOpenChat={() => setIsChatOpen(true)}
        activeCategory={selectedCategory}
        onSelectCategory={handleSelectCategory}
      />

      {/* Main Content Area */}
      <main style={{ flex: 1 }}>
        {/* 1. Editorial Hero */}
        <EditorialHero
          onSearch={handleSearch}
          onOpenChat={() => setIsChatOpen(true)}
          onSelectCategory={handleSelectCategory}
        />

        {/* 2. Solutions Overview & Problem vs Solution Matrix */}
        <SolutionsOverview
          onOpenChat={() => setIsChatOpen(true)}
          onExploreDeals={handleExploreDeals}
        />

        {/* 3. Shop By Category Rail */}
        <CategoryRail onSelectCategory={handleSelectCategory} />

        {/* 4. Live Featured Products Grid */}
        <FeaturedGrid
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          searchQuery={searchQuery}
          onSelectProduct={(p) => setSelectedProduct(p)}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* AI Assistant Modal Drawer */}
      <FloatingAIChat
        isOpen={isChatOpen}
        onClose={() => setIsChatOpen(false)}
        onSelectProduct={(p) => setSelectedProduct(p)}
      />

      {/* Detailed Multi-Platform Comparison Modal */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onSelectAlternative={(p) => setSelectedProduct(p)}
        />
      )}
    </div>
  );
}
