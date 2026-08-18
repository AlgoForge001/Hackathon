import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import FloatingAIChat from "./components/chat/FloatingAIChat";

// Pages
import HomePage from "./pages/HomePage";
import LandingPage from "./pages/LandingPage";
import CategoryPage from "./pages/CategoryPage";
import DealsPage from "./pages/DealsPage";
import TrendingPage from "./pages/TrendingPage";
import SearchResultsPage from "./pages/SearchResultsPage";
import ProductDetailPage from "./pages/ProductDetailPage";

export default function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);
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
            path="/landing"
            element={
              <LandingPage
                onOpenChat={() => setIsChatOpen(true)}
              />
            }
          />
          <Route
            path="/"
            element={
              <HomePage
                onSearch={handleSearch}
                onOpenChat={() => setIsChatOpen(true)}
                onSelectCategory={handleSelectCategory}
              />
            }
          />
          <Route
            path="/category/:categoryId"
            element={
              <CategoryPage
                onOpenChat={() => setIsChatOpen(true)}
              />
            }
          />
          <Route
            path="/deals"
            element={
              <DealsPage />
            }
          />
          <Route
            path="/trending"
            element={
              <TrendingPage
                onOpenChat={() => setIsChatOpen(true)}
              />
            }
          />
          <Route
            path="/search"
            element={
              <SearchResultsPage
                onOpenChat={() => setIsChatOpen(true)}
              />
            }
          />
          <Route
            path="/product/:productId"
            element={
              <ProductDetailPage
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
      />
    </div>
  );
}
