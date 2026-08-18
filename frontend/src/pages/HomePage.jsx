import React from "react";
import EditorialHero from "../components/hero/EditorialHero";
import CategoryNavRail from "../components/home/CategoryNavRail";
import DealsSection from "../components/home/DealsSection";
import TrendingSection from "../components/home/TrendingSection";
import CategoryShowcase from "../components/home/CategoryShowcase";
import BudgetExplorerSection from "../components/home/BudgetExplorerSection";
import SolutionsOverview from "../components/landing/SolutionsOverview";
import FeaturedGrid from "../components/products/FeaturedGrid";

export default function HomePage({ onSearch, onOpenChat, onSelectProduct, onSelectCategory }) {
  const handleExploreDeals = () => {
    const element = document.getElementById("featured-grid");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="home-page">
      {/* 1. Amazon-Style Category Top Subnav */}
      <CategoryNavRail />

      {/* 2. Editorial Campaign Hero with AI Search & Verified Badges */}
      <EditorialHero
        onSearch={onSearch}
        onOpenChat={onOpenChat}
        onSelectCategory={onSelectCategory}
      />

      {/* 3. Amazon-Style 4-Quadrant Category Showcase Cards */}
      <CategoryShowcase />

      {/* 4. Lightning Deals & Mega Clearance Section */}
      <DealsSection onSelectProduct={onSelectProduct} />

      {/* 5. Trending & AI Best Overall Picks */}
      <TrendingSection onSelectProduct={onSelectProduct} />

      {/* 6. Smart Budget Shopping Tiers */}
      <BudgetExplorerSection onSelectProduct={onSelectProduct} />

      {/* 7. Solutions Overview & Problem vs Solution Matrix */}
      <SolutionsOverview
        onOpenChat={onOpenChat}
        onExploreDeals={handleExploreDeals}
      />

      {/* 8. Live Featured Product Catalog Feed */}
      <FeaturedGrid
        selectedCategory=""
        onSelectCategory={onSelectCategory}
        onSelectProduct={onSelectProduct}
      />
    </div>
  );
}
