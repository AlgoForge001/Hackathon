import React from "react";
import EditorialHero from "../components/hero/EditorialHero";
import CategoryNavRail from "../components/home/CategoryNavRail";
import PersonalizedHistorySection from "../components/home/PersonalizedHistorySection";
import DealsSection from "../components/home/DealsSection";
import TrendingSection from "../components/home/TrendingSection";
import CategoryShowcase from "../components/home/CategoryShowcase";
import BudgetExplorerSection from "../components/home/BudgetExplorerSection";
import FeaturedGrid from "../components/products/FeaturedGrid";

export default function HomePage({ onSearch, onOpenChat, onSelectProduct, onSelectCategory }) {
  return (
    <div className="home-page">

      {/* 2. Editorial Campaign Hero with AI Search & Verified Badges */}
      <EditorialHero
        onSearch={onSearch}
        onOpenChat={onOpenChat}
        onSelectCategory={onSelectCategory}
      />

      {/* 3. Personalized History & AI Recommendations (Powered by Gemini AI) */}
      <PersonalizedHistorySection onSelectProduct={onSelectProduct} />

      {/* 4. Amazon-Style 4-Quadrant Category Showcase Cards */}
      <CategoryShowcase />

      {/* 5. Lightning Deals & Mega Clearance Section */}
      <DealsSection onSelectProduct={onSelectProduct} />

      {/* 6. Trending & AI Best Overall Picks */}
      <TrendingSection onSelectProduct={onSelectProduct} />

      {/* 7. Smart Budget Shopping Tiers */}
      <BudgetExplorerSection onSelectProduct={onSelectProduct} />

      {/* 8. Live Featured Product Catalog Feed */}
      <FeaturedGrid
        selectedCategory=""
        onSelectCategory={onSelectCategory}
        onSelectProduct={onSelectProduct}
      />
    </div>
  );
}
