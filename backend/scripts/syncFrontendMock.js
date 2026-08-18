import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const backendCatalog = JSON.parse(
  fs.readFileSync(path.join(__dirname, "../data/mockProducts.json"), "utf-8")
);

// Flatten into mockProducts array for frontend
const mockProducts = [];

backendCatalog.forEach((group) => {
  group.platforms.forEach((platformData) => {
    const isBest = platformData.platform === "amazon" && platformData.discount_percent > 15;
    const sentiment = platformData.rating >= 4.4 ? "green" : platformData.rating >= 4.0 ? "yellow" : "red";
    const sentimentScore = Math.min(98, Math.round(platformData.rating * 19 + 5));

    mockProducts.push({
      id: `${group.group_id}-${platformData.platform}`,
      product_id: `${group.group_id}-${platformData.platform}`,
      groupId: group.group_id,
      group_id: group.group_id,
      title: `${group.product_name} (${platformData.platform.toUpperCase()})`,
      name: group.product_name,
      product_name: group.product_name,
      brand: group.brand,
      category: group.category,
      platform: platformData.platform,
      price: platformData.price,
      originalPrice: platformData.original_price,
      original_price: platformData.original_price,
      discountPercent: platformData.discount_percent,
      discount_percent: platformData.discount_percent,
      rating: platformData.rating,
      reviewCount: platformData.review_count,
      review_count: platformData.review_count,
      deliveryEstimate: platformData.delivery_estimate,
      delivery_estimate: platformData.delivery_estimate,
      imageUrl: platformData.image_url,
      image_url: platformData.image_url,
      productUrl: platformData.product_url,
      product_url: platformData.product_url,
      seller: platformData.seller,
      inStock: platformData.in_stock,
      in_stock: platformData.in_stock,
      sentiment,
      sentimentScore,
      best_overall_score: Math.round(platformData.rating * 15 + platformData.discount_percent * 0.4),
      is_best_overall: isBest,
      isBestOverall: isBest,
      whyBuy: `Top rated ${group.category} pick with ${platformData.discount_percent}% off and verified fast shipping.`,
      why_buy: `Top rated ${group.category} pick with ${platformData.discount_percent}% off and verified fast shipping.`,
      reviewSummary: `Customer sentiment is strongly positive for ${group.brand} build quality and performance.`,
      review_summary: `Customer sentiment is strongly positive for ${group.brand} build quality and performance.`,
      specs: group.specs,
      reviews: platformData.reviews,
    });
  });
});

const fileContent = `// Auto-generated synchronized mock product catalog (${mockProducts.length} platform listings)
export const CATEGORY_DEFINITIONS = [
  {
    id: "electronics",
    label: "Electronics & Audio",
    shortLabel: "Electronics",
    tagline: "Compare verified tech listings across Amazon, Flipkart & Myntra",
    coverImage: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80",
    badge: "Verified Tech Deals",
    subcategories: ["All", "Headphones", "TWS Earbuds", "Laptops", "Smartphones", "Smartwatches", "Gaming"],
  },
  {
    id: "footwear",
    label: "Athletic & Lifestyle Footwear",
    shortLabel: "Footwear",
    tagline: "Performance running shoes, sneakers & trekking boots",
    coverImage: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop&q=80",
    badge: "Performance & Comfort",
    subcategories: ["All", "Running", "Sneakers", "Clogs", "Trekking Boots", "Walking"],
  },
  {
    id: "fashion",
    label: "Men's & Women's Fashion",
    shortLabel: "Fashion",
    tagline: "Denim, casual polos, jackets & traditional kurtas",
    coverImage: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800&auto=format&fit=crop&q=80",
    badge: "Apparel & Accessories",
    subcategories: ["All", "Jeans", "Polos", "Jackets", "Sunglasses", "Kurtas", "Trousers"],
  },
  {
    id: "home",
    label: "Smart Home & Appliances",
    shortLabel: "Home & Living",
    tagline: "Energy-saving BLDC fans, air fryers, vacuum cleaners & coffee machines",
    coverImage: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&auto=format&fit=crop&q=80",
    badge: "Kitchen & Home Upgrades",
    subcategories: ["All", "Ceiling Fans", "Air Fryers", "Vacuums", "Coffee Machines", "Mixer Grinders", "Air Purifiers"],
  },
];

export const getCategoryFallbackImage = (category) => {
  switch (category?.toLowerCase()) {
    case "electronics":
      return "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80";
    case "footwear":
      return "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop&q=80";
    case "fashion":
      return "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800&auto=format&fit=crop&q=80";
    case "home":
      return "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&auto=format&fit=crop&q=80";
    default:
      return "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=80";
  }
};

export const mockProducts = ${JSON.stringify(mockProducts, null, 2)};

export const searchMockProducts = ({ query = "", category = "", minPrice = 0, maxPrice = 10000000, platforms = [], sortBy = "relevance" }) => {
  let filtered = [...mockProducts];

  if (category) {
    filtered = filtered.filter((p) => p.category.toLowerCase() === category.toLowerCase());
  }

  if (query) {
    const q = query.toLowerCase();
    filtered = filtered.filter((p) =>
      p.title.toLowerCase().includes(q) ||
      p.brand.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q)
    );
  }

  if (minPrice) {
    filtered = filtered.filter((p) => p.price >= minPrice);
  }
  if (maxPrice && maxPrice !== 10000000) {
    filtered = filtered.filter((p) => p.price <= maxPrice);
  }

  if (platforms && platforms.length > 0) {
    filtered = filtered.filter((p) => platforms.includes(p.platform));
  }

  if (sortBy === "price_asc") filtered.sort((a, b) => a.price - b.price);
  else if (sortBy === "price_desc") filtered.sort((a, b) => b.price - a.price);
  else if (sortBy === "rating") filtered.sort((a, b) => b.rating - a.rating);
  else if (sortBy === "discount") filtered.sort((a, b) => b.discount_percent - a.discount_percent);

  return {
    success: true,
    count: filtered.length,
    results: filtered,
    bestOverallId: filtered.find((p) => p.is_best_overall)?.id || filtered[0]?.id,
  };
};

export const getAlternatives = (productId) => {
  const current = mockProducts.find((p) => p.id === productId || p.product_id === productId) || mockProducts[0];
  const sameCategory = mockProducts.filter((p) => p.category === current.category && p.groupId !== current.groupId);

  const cheaper = sameCategory.filter((p) => p.price < current.price * 0.85).slice(0, 3);
  const similar = sameCategory.filter((p) => p.price >= current.price * 0.85 && p.price <= current.price * 1.15).slice(0, 3);
  const premium = sameCategory.filter((p) => p.price > current.price * 1.15).slice(0, 3);

  return { currentProduct: current, cheaper, similar, premium };
};

export const budgetExplorer = (productId, extraBudget) => {
  const current = mockProducts.find((p) => p.id === productId || p.product_id === productId) || mockProducts[0];
  const newBudgetCeiling = current.price + Number(extraBudget);

  const upgradedOptions = mockProducts
    .filter((p) => p.category === current.category && p.price > current.price && p.price <= newBudgetCeiling)
    .slice(0, 4)
    .map((p) => ({
      ...p,
      priceDifference: p.price - current.price,
      upgradeReason: \`For +\u20B9\${p.price - current.price}, get \${p.brand} with superior specs and higher ratings.\`,
    }));

  return {
    success: true,
    currentProduct: current,
    extraBudget: Number(extraBudget),
    newBudgetCeiling,
    upgradedOptions,
  };
};
`;

const frontendPath = path.join(__dirname, "../../frontend/src/services/mockData.js");
fs.writeFileSync(frontendPath, fileContent, "utf-8");
console.log(`✅ Synchronized ${mockProducts.length} listings into frontend mockData.js with getCategoryFallbackImage`);
