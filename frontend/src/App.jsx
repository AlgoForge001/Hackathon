import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import FloatingAIChat from "./components/chat/FloatingAIChat";
import ProductModal from "./components/products/ProductModal";

// Pages
import HomePage from "./pages/HomePage";
import CategoryPage from "./pages/CategoryPage";
import DealsPage from "./pages/DealsPage";
import TrendingPage from "./pages/TrendingPage";
import SearchResultsPage from "./pages/SearchResultsPage";

export default function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const navigate = useNavigate();

  const handleSearch = (query) => {
    if (query?.trim()) {
      navigate(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  };

  const handleSelectCategory = (catId) => {
    if (catId) {
      navigate(`/category/${catId}`);
    } else {
      navigate("/");
    }
  };

  return (
    <div className="app-container" style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      {/* Sticky Universal Navbar with Search & Navigation */}
      <Navbar
        onOpenChat={() => setIsChatOpen(true)}
      />

      {/* Main Routed Content Area */}
      <main style={{ flex: 1 }}>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                onSearch={handleSearch}
                onOpenChat={() => setIsChatOpen(true)}
                onSelectProduct={(p) => setSelectedProduct(p)}
                onSelectCategory={handleSelectCategory}
              />
            }
          />
          <Route
            path="/category/:categoryId"
            element={
              <CategoryPage
                onSelectProduct={(p) => setSelectedProduct(p)}
                onOpenChat={() => setIsChatOpen(true)}
              />
            }
          />
          <Route
            path="/deals"
            element={
              <DealsPage
                onSelectProduct={(p) => setSelectedProduct(p)}
              />
            }
          />
          <Route
            path="/trending"
            element={
              <TrendingPage
                onSelectProduct={(p) => setSelectedProduct(p)}
                onOpenChat={() => setIsChatOpen(true)}
              />
            }
          />
          <Route
            path="/search"
            element={
              <SearchResultsPage
                onSelectProduct={(p) => setSelectedProduct(p)}
                onOpenChat={() => setIsChatOpen(true)}
              />
            }
          />
        </Routes>
      </main>

      {/* Universal Footer */}
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
