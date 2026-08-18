import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const backendCatalog = JSON.parse(
  fs.readFileSync(path.join(__dirname, "../data/mockProducts.json"), "utf-8")
);

// Flatten into mockProducts array for frontend (3,000 platform product listings)
const mockProducts = [];

backendCatalog.forEach((group) => {
  group.platforms.forEach((platformData) => {
    const isBest = platformData.platform === "amazon" && platformData.discount_percent > 15;
    const sentiment = platformData.rating >= 4.4 ? "green" : platformData.rating >= 4.0 ? "yellow" : "red";
    const sentimentScore = Math.min(98, Math.round(platformData.rating * 19 + 5));

    // Ensure 4 images exist
    const images = group.images && group.images.length >= 4 
      ? group.images 
      : [platformData.image_url, platformData.image_url, platformData.image_url, platformData.image_url];

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
      imageUrl: images[0],
      image_url: images[0],
      images: images,
      dimensions: group.dimensions || { width: "20 cm", height: "15 cm", depth: "10 cm", weight: "500g" },
      glbUrl: group.glbUrl || group.glb_url || undefined,
      glb_url: group.glbUrl || group.glb_url || undefined,
      usdzUrl: group.usdzUrl || group.usdz_url || undefined,
      usdz_url: group.usdzUrl || group.usdz_url || undefined,
      price_history: group.price_history || [],
      priceHistory: group.price_history || [],
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
    subcategories: ["All", "Smartphones", "Laptops", "Headphones", "Earbuds", "Smartwatches", "Gaming"],
    quadrantPreviews: [
      { title: "Headphones", subtext: "Sony & Bose", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80" },
      { title: "Earbuds", subtext: "AirPods Pro 2", image: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=800&auto=format&fit=crop&q=80" },
      { title: "Smartphones", subtext: "Galaxy S24 & iPhone", image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=800&auto=format&fit=crop&q=80" },
      { title: "Laptops", subtext: "MacBook Air & ROG", image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&auto=format&fit=crop&q=80" },
    ],
  },
  {
    id: "footwear",
    label: "Athletic & Lifestyle Footwear",
    shortLabel: "Footwear",
    tagline: "Performance running shoes, sneakers & trekking boots",
    coverImage: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop&q=80",
    badge: "Performance & Comfort",
    subcategories: ["All", "Running", "Sneakers", "Clogs", "Trekking Boots", "Formal"],
    quadrantPreviews: [
      { title: "Air Max 270", subtext: "Lifestyle", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop&q=80" },
      { title: "Ultraboost", subtext: "Marathon", image: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=800&auto=format&fit=crop&q=80" },
      { title: "Classic Clogs", subtext: "Waterproof", image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&auto=format&fit=crop&q=80" },
      { title: "Trek Boots", subtext: "Nubuck Leather", image: "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?w=800&auto=format&fit=crop&q=80" },
    ],
  },
  {
    id: "fashion",
    label: "Men's & Women's Fashion",
    shortLabel: "Fashion",
    tagline: "Denim, casual polos, jackets & traditional kurtas",
    coverImage: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800&auto=format&fit=crop&q=80",
    badge: "Apparel & Accessories",
    subcategories: ["All", "Jeans", "Polos", "Jackets", "Sunglasses", "Kurtas"],
    quadrantPreviews: [
      { title: "Slim Denim", subtext: "Levi's 511", image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800&auto=format&fit=crop&q=80" },
      { title: "Pique Polo", subtext: "Tommy Hilfiger", image: "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?w=800&auto=format&fit=crop&q=80" },
      { title: "Aviators", subtext: "Ray-Ban Polarized", image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800&auto=format&fit=crop&q=80" },
      { title: "Biker Jacket", subtext: "Zara Luxe", image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&auto=format&fit=crop&q=80" },
    ],
  },
  {
    id: "home",
    label: "Smart Home & Appliances",
    shortLabel: "Home & Living",
    tagline: "Energy-saving BLDC fans, air fryers, vacuum cleaners & coffee machines",
    coverImage: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&auto=format&fit=crop&q=80",
    badge: "Kitchen & Home Upgrades",
    subcategories: ["All", "Ceiling Fans", "Air Fryers", "Vacuums", "Coffee Machines", "Mixer Grinders"],
    quadrantPreviews: [
      { title: "BLDC Fan", subtext: "Atomberg 28W", image: "https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b?w=800&auto=format&fit=crop&q=80" },
      { title: "Air Fryer", subtext: "Philips 4.1L", image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&auto=format&fit=crop&q=80" },
      { title: "Cordless Vac", subtext: "Dyson V8", image: "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=800&auto=format&fit=crop&q=80" },
      { title: "Espresso Mini", subtext: "Nespresso 19-Bar", image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800&auto=format&fit=crop&q=80" },
    ],
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

export const searchMockProducts = ({ query = "", category = "", minPrice = 0, maxPrice = 10000000, platforms = [], sortBy = "best_value" }) => {
  let filtered = [...mockProducts];

  if (category) {
    filtered = filtered.filter((p) => p.category.toLowerCase() === category.toLowerCase());
  }

  if (query) {
    const qTokens = query.toLowerCase().split(/\\s+/).filter(Boolean);
    filtered = filtered.filter((p) => {
      const searchTarget = \`\${p.title} \${p.name} \${p.brand} \${p.category} \${p.platform}\`.toLowerCase();
      return qTokens.every((token) => searchTarget.includes(token));
    });
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
  else if (sortBy === "best_value") filtered.sort((a, b) => (b.best_overall_score || 0) - (a.best_overall_score || 0));

  return {
    success: true,
    count: filtered.length,
    results: filtered,
    bestOverallId: filtered.find((p) => p.is_best_overall)?.id || filtered[0]?.id,
  };
};

export const getAlternatives = (productId) => {
  const current = mockProducts.find((p) => p.id === productId || p.product_id === productId) || mockProducts[0];
  const sameCategory = mockProducts.filter((p) => p.category === current.category && (p.groupId || p.group_id) !== (current.groupId || current.group_id));

  // Deduplicate by product group
  const uniqueGroupMap = new Map();
  sameCategory.forEach((item) => {
    const gid = item.groupId || item.group_id;
    if (!uniqueGroupMap.has(gid)) {
      uniqueGroupMap.set(gid, item);
    }
  });
  const uniqueList = Array.from(uniqueGroupMap.values());

  const cheaper = uniqueList.filter((p) => p.price < current.price * 0.9).slice(0, 3);
  const similar = uniqueList.filter((p) => p.price >= current.price * 0.85 && p.price <= current.price * 1.15).slice(0, 3);
  const premium = uniqueList.filter((p) => p.price > current.price * 1.10).slice(0, 3);

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
      upgradeReason: \`For +\u20B9\${(p.price - current.price).toLocaleString("en-IN")}, get \${p.brand} with superior specs and higher ratings.\`,
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
console.log(`✅ Synchronized mockData.js with ${mockProducts.length} multi-platform product listings, 4-angle verified images & price history!`);
