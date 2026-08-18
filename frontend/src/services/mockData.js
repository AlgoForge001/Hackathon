// ─────────────────────────────────────────────────────────────────────────────
// MOCK PRODUCT CATALOG — AI Personal Shopping Assistant
// 20 product groups × 3 platforms (Amazon, Flipkart, Myntra) = 60 listings
// Each product includes full AI metadata: sentiment, review_summary, why_buy, best_overall_score
// ─────────────────────────────────────────────────────────────────────────────

const generateId = (group, platform) => `${group}-${platform}`;

const mockGroups = [
  // ── ELECTRONICS ────────────────────────────────────────────────────────────
  {
    groupId: "sony-wh1000xm5",
    name: "Sony WH-1000XM5 Wireless Headphones",
    category: "electronics",
    brand: "Sony",
    imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80",
    specs: { "Battery Life": "30 Hours", "Connectivity": "Bluetooth 5.2", "Weight": "250g", "ANC": "Yes – Industry Leading", "Mic": "Beamforming x8" },
    aiData: {
      sentiment: "green",
      sentimentScore: 94,
      sentimentPros: ["Exceptional noise cancellation", "30-hour battery life", "Foldable & lightweight", "Crystal-clear mic call quality"],
      sentimentCons: ["Ear cushions may get warm", "Touch controls can be finicky"],
      reviewSummary: "Best-in-class noise cancellation with industry-leading mic performance. Battery life consistently exceeds advertised 30 hours in real-world use.",
      whyBuy: "Benchmark ANC headphone — 17% below launch price on Amazon with fastest delivery.",
      bestOverallScore: 94,
      isBestOverall: true,
    },
    platforms: {
      amazon:  { price: 24990, originalPrice: 29990, discountPercent: 17, rating: 4.6, reviewCount: 15423, deliveryEstimate: "Tomorrow by 2 PM", seller: "Amazon Fulfilled", inStock: true, productUrl: "https://amazon.in" },
      flipkart: { price: 25499, originalPrice: 29990, discountPercent: 15, rating: 4.5, reviewCount: 9841,  deliveryEstimate: "2-3 Days", seller: "Flipkart Assured", inStock: true, productUrl: "https://flipkart.com" },
      myntra:  { price: 26990, originalPrice: 29990, discountPercent: 10, rating: 4.3, reviewCount: 3201,  deliveryEstimate: "4-5 Days", seller: "Myntra", inStock: true, productUrl: "https://myntra.com" },
    },
  },
  {
    groupId: "apple-airpods-pro2",
    name: "Apple AirPods Pro 2nd Gen",
    category: "electronics",
    brand: "Apple",
    imageUrl: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=600&q=80",
    specs: { "Battery Life": "6 Hours (30 with case)", "Connectivity": "Bluetooth 5.3", "Weight": "5.3g each", "ANC": "Yes – Adaptive", "Chip": "H2" },
    aiData: {
      sentiment: "green",
      sentimentScore: 91,
      sentimentPros: ["Seamless Apple ecosystem integration", "Excellent transparency mode", "Compact charging case"],
      sentimentCons: ["Expensive for the battery life", "Doesn't fit all ear types"],
      reviewSummary: "Unmatched Apple ecosystem integration with adaptive transparency mode. Small ear tips can cause fitment issues for some users.",
      whyBuy: "Best option for iPhone users — seamless device switching and Live Listen feature.",
      bestOverallScore: 88,
      isBestOverall: false,
    },
    platforms: {
      amazon:  { price: 22990, originalPrice: 26900, discountPercent: 15, rating: 4.7, reviewCount: 28901, deliveryEstimate: "Today by 9 PM", seller: "Amazon Fulfilled", inStock: true, productUrl: "https://amazon.in" },
      flipkart: { price: 23499, originalPrice: 26900, discountPercent: 13, rating: 4.6, reviewCount: 18432, deliveryEstimate: "2-3 Days", seller: "Flipkart Assured", inStock: true, productUrl: "https://flipkart.com" },
      myntra:  { price: 24999, originalPrice: 26900, discountPercent: 7,  rating: 4.5, reviewCount: 4100,  deliveryEstimate: "5-7 Days", seller: "Myntra", inStock: false, productUrl: "https://myntra.com" },
    },
  },
  {
    groupId: "samsung-galaxy-buds3",
    name: "Samsung Galaxy Buds3 Pro",
    category: "electronics",
    brand: "Samsung",
    imageUrl: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600&q=80",
    specs: { "Battery Life": "6 Hours (30 with case)", "Connectivity": "Bluetooth 5.4", "ANC": "Yes", "Weight": "5.5g each", "IPX": "IP57" },
    aiData: {
      sentiment: "yellow",
      sentimentScore: 72,
      sentimentPros: ["Excellent sound quality", "Comfortable fit", "Good ANC for Galaxy devices"],
      sentimentCons: ["ANC weaker on non-Samsung phones", "Pricey for what's offered"],
      reviewSummary: "Great sound and ANC specifically optimized for Samsung Galaxy devices. Performance degrades noticeably on non-Samsung phones.",
      whyBuy: "Best pick if you're a Samsung Galaxy user — deep ecosystem integration at a competitive price.",
      bestOverallScore: 78,
      isBestOverall: false,
    },
    platforms: {
      amazon:  { price: 17999, originalPrice: 22999, discountPercent: 22, rating: 4.3, reviewCount: 6234, deliveryEstimate: "2-3 Days", seller: "Samsung Official", inStock: true, productUrl: "https://amazon.in" },
      flipkart: { price: 17499, originalPrice: 22999, discountPercent: 24, rating: 4.2, reviewCount: 4890, deliveryEstimate: "2-3 Days", seller: "Flipkart Assured", inStock: true, productUrl: "https://flipkart.com" },
      myntra:  { price: 18999, originalPrice: 22999, discountPercent: 17, rating: 4.0, reviewCount: 890,   deliveryEstimate: "5-6 Days", seller: "Myntra", inStock: true, productUrl: "https://myntra.com" },
    },
  },
  {
    groupId: "dell-xps-15",
    name: "Dell XPS 15 (Intel Core i7, 16GB RAM, 512GB SSD)",
    category: "electronics",
    brand: "Dell",
    imageUrl: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=600&q=80",
    specs: { "Processor": "Intel Core i7-13700H", "RAM": "16GB DDR5", "Storage": "512GB NVMe SSD", "Display": "15.6\" OLED 4K", "Battery": "86Wh" },
    aiData: {
      sentiment: "green",
      sentimentScore: 88,
      sentimentPros: ["Stunning OLED display", "Powerful performance", "Premium build quality"],
      sentimentCons: ["Fan noise under load", "Limited port selection without dongle"],
      reviewSummary: "The XPS 15's OLED display is breathtaking for creative work. Fan management under heavy load remains its primary criticism.",
      whyBuy: "Best premium laptop for developers and designers — OLED display at a 12% discount.",
      bestOverallScore: 86,
      isBestOverall: false,
    },
    platforms: {
      amazon:  { price: 109999, originalPrice: 124999, discountPercent: 12, rating: 4.5, reviewCount: 2341, deliveryEstimate: "3-5 Days", seller: "Dell Official", inStock: true, productUrl: "https://amazon.in" },
      flipkart: { price: 112999, originalPrice: 124999, discountPercent: 10, rating: 4.4, reviewCount: 1890, deliveryEstimate: "4-6 Days", seller: "Flipkart Assured", inStock: true, productUrl: "https://flipkart.com" },
      myntra:  { price: 0, originalPrice: 0, discountPercent: 0, rating: 0, reviewCount: 0, deliveryEstimate: "", seller: "", inStock: false, productUrl: "" },
    },
  },

  // ── FOOTWEAR ────────────────────────────────────────────────────────────────
  {
    groupId: "puma-velocity-nitro2",
    name: "Puma Velocity Nitro 2 Running Shoes",
    category: "footwear",
    brand: "Puma",
    imageUrl: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80",
    specs: { "Cushioning": "Nitro Foam", "Weight": "257g", "Surface": "Road", "Drop": "8mm", "Width": "Standard" },
    aiData: {
      sentiment: "green",
      sentimentScore: 91,
      sentimentPros: ["Exceptional Nitro foam cushioning", "Lightweight", "Great for long runs"],
      sentimentCons: ["Sizing runs half a size small", "Upper could be more breathable"],
      reviewSummary: "Superb Nitro foam midsole for marathon training with excellent energy return. Sizing tends to run half a size smaller than usual.",
      whyBuy: "Highest discount (42% off) with premium foam tech — best value running shoe under ₹3,500.",
      bestOverallScore: 91,
      isBestOverall: true,
    },
    platforms: {
      amazon:  { price: 3799, originalPrice: 5999, discountPercent: 37, rating: 4.5, reviewCount: 4120, deliveryEstimate: "2-3 Days", seller: "Puma Official", inStock: true, productUrl: "https://amazon.in" },
      flipkart: { price: 3499, originalPrice: 5999, discountPercent: 42, rating: 4.4, reviewCount: 3890, deliveryEstimate: "2-3 Days", seller: "Flipkart Assured", inStock: true, productUrl: "https://flipkart.com" },
      myntra:  { price: 3999, originalPrice: 5999, discountPercent: 33, rating: 4.3, reviewCount: 7843, deliveryEstimate: "3-4 Days", seller: "Myntra Fashion", inStock: true, productUrl: "https://myntra.com" },
    },
  },
  {
    groupId: "nike-air-zoom-pegasus40",
    name: "Nike Air Zoom Pegasus 40",
    category: "footwear",
    brand: "Nike",
    imageUrl: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600&q=80",
    specs: { "Cushioning": "Zoom Air + React Foam", "Weight": "283g", "Surface": "Road", "Drop": "10mm", "Width": "Standard / Wide" },
    aiData: {
      sentiment: "green",
      sentimentScore: 89,
      sentimentPros: ["Trusted marathon workhorse", "Responsive Zoom Air", "Available in wide sizes"],
      sentimentCons: ["Price is on the higher side", "Heavier than competitors"],
      reviewSummary: "A reliable marathon workhorse with consistent cushioning across high mileage. Wide size availability makes it inclusive.",
      whyBuy: "Nike's most trusted road runner — available in wide fit and backed by 40 generations of reliability.",
      bestOverallScore: 84,
      isBestOverall: false,
    },
    platforms: {
      amazon:  { price: 7999, originalPrice: 9999, discountPercent: 20, rating: 4.5, reviewCount: 8920, deliveryEstimate: "Tomorrow", seller: "Nike Official", inStock: true, productUrl: "https://amazon.in" },
      flipkart: { price: 8499, originalPrice: 9999, discountPercent: 15, rating: 4.4, reviewCount: 6320, deliveryEstimate: "2-4 Days", seller: "Flipkart Assured", inStock: true, productUrl: "https://flipkart.com" },
      myntra:  { price: 7799, originalPrice: 9999, discountPercent: 22, rating: 4.5, reviewCount: 12890, deliveryEstimate: "2-3 Days", seller: "Myntra Fashion", inStock: true, productUrl: "https://myntra.com" },
    },
  },
  {
    groupId: "adidas-ultraboost23",
    name: "Adidas Ultraboost 23",
    category: "footwear",
    brand: "Adidas",
    imageUrl: "https://images.unsplash.com/photo-1556906781-9a412961a28c?w=600&q=80",
    specs: { "Cushioning": "Boost Midsole", "Weight": "310g", "Surface": "Road", "Drop": "10mm", "Upper": "Primeknit+" },
    aiData: {
      sentiment: "yellow",
      sentimentScore: 76,
      sentimentPros: ["Iconic Boost cushioning", "Very stylish design", "Good for casual wear too"],
      sentimentCons: ["Very heavy for running", "Boost loses responsiveness over time"],
      reviewSummary: "Iconic Boost cushioning is comfortable for daily wear but too heavy for performance running. More of a lifestyle shoe.",
      whyBuy: "Great dual-purpose shoe — comfortable enough to wear all day, still handles casual runs.",
      bestOverallScore: 74,
      isBestOverall: false,
    },
    platforms: {
      amazon:  { price: 11999, originalPrice: 17999, discountPercent: 33, rating: 4.3, reviewCount: 12450, deliveryEstimate: "2-3 Days", seller: "Adidas Official", inStock: true, productUrl: "https://amazon.in" },
      flipkart: { price: 12499, originalPrice: 17999, discountPercent: 31, rating: 4.2, reviewCount: 9870, deliveryEstimate: "2-4 Days", seller: "Flipkart Assured", inStock: true, productUrl: "https://flipkart.com" },
      myntra:  { price: 11499, originalPrice: 17999, discountPercent: 36, rating: 4.4, reviewCount: 22341, deliveryEstimate: "3-5 Days", seller: "Myntra Fashion", inStock: true, productUrl: "https://myntra.com" },
    },
  },

  // ── FASHION ─────────────────────────────────────────────────────────────────
  {
    groupId: "levis-511-slim",
    name: "Levi's 511 Slim Fit Jeans",
    category: "fashion",
    brand: "Levi's",
    imageUrl: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&q=80",
    specs: { "Fit": "Slim", "Material": "99% Cotton, 1% Elastane", "Rise": "Mid-Rise", "Closure": "Button Fly", "Wash": "Dark Indigo" },
    aiData: {
      sentiment: "green",
      sentimentScore: 87,
      sentimentPros: ["Premium denim quality", "Versatile for casual and semi-formal", "Great color retention after washing"],
      sentimentCons: ["Slightly stiff when new", "Sizing inconsistent between washes"],
      reviewSummary: "Premium denim with great color retention across multiple washes. Initial stiffness resolves after the first 2–3 wears.",
      whyBuy: "Reliable premium denim — Myntra has the lowest price with free express delivery.",
      bestOverallScore: 85,
      isBestOverall: true,
    },
    platforms: {
      amazon:  { price: 1999, originalPrice: 3499, discountPercent: 43, rating: 4.3, reviewCount: 32100, deliveryEstimate: "2-3 Days", seller: "Levi's Official", inStock: true, productUrl: "https://amazon.in" },
      flipkart: { price: 2099, originalPrice: 3499, discountPercent: 40, rating: 4.2, reviewCount: 19800, deliveryEstimate: "3-5 Days", seller: "Flipkart Fashion", inStock: true, productUrl: "https://flipkart.com" },
      myntra:  { price: 1799, originalPrice: 3499, discountPercent: 49, rating: 4.4, reviewCount: 54230, deliveryEstimate: "2-3 Days", seller: "Myntra Fashion", inStock: true, productUrl: "https://myntra.com" },
    },
  },
  {
    groupId: "nike-dri-fit-tshirt",
    name: "Nike Dri-FIT Running T-Shirt",
    category: "fashion",
    brand: "Nike",
    imageUrl: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80",
    specs: { "Material": "100% Polyester Dri-FIT", "Fit": "Standard", "Technology": "Dri-FIT Moisture Wicking", "Care": "Machine Washable", "Neck": "Round" },
    aiData: {
      sentiment: "green",
      sentimentScore: 90,
      sentimentPros: ["Excellent moisture wicking", "Stays fresh even in summer heat", "Lightweight and comfortable"],
      sentimentCons: ["Colors fade after repeated washes", "Not ideal for non-athletic casual wear"],
      reviewSummary: "Excellent moisture-wicking performance keeps you dry during intense workouts. Colours show minor fading after 20+ washes.",
      whyBuy: "Best performance tee for workouts — 38% off on Amazon with same-day delivery in major cities.",
      bestOverallScore: 88,
      isBestOverall: false,
    },
    platforms: {
      amazon:  { price: 1199, originalPrice: 1995, discountPercent: 40, rating: 4.4, reviewCount: 18900, deliveryEstimate: "Same Day", seller: "Amazon Fulfilled", inStock: true, productUrl: "https://amazon.in" },
      flipkart: { price: 1299, originalPrice: 1995, discountPercent: 35, rating: 4.3, reviewCount: 12300, deliveryEstimate: "2-3 Days", seller: "Flipkart Fashion", inStock: true, productUrl: "https://flipkart.com" },
      myntra:  { price: 1099, originalPrice: 1995, discountPercent: 45, rating: 4.5, reviewCount: 37800, deliveryEstimate: "1-2 Days", seller: "Myntra Fashion", inStock: true, productUrl: "https://myntra.com" },
    },
  },
  {
    groupId: "allen-solly-formal",
    name: "Allen Solly Slim Fit Formal Shirt",
    category: "fashion",
    brand: "Allen Solly",
    imageUrl: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&q=80",
    specs: { "Material": "60% Cotton, 40% Polyester", "Fit": "Slim", "Neck": "Spread Collar", "Sleeve": "Full Sleeve", "Pattern": "Solid" },
    aiData: {
      sentiment: "yellow",
      sentimentScore: 74,
      sentimentPros: ["Good office wear quality", "Easy iron fabric", "Variety of colours available"],
      sentimentCons: ["Quality dropped compared to older Allen Solly shirts", "Buttons feel cheap"],
      reviewSummary: "Decent office-wear quality with easy-iron fabric. Long-time fans note a quality dip compared to older collections.",
      whyBuy: "Acceptable formal shirt for budget buyers — solid colours for office use at 40% off.",
      bestOverallScore: 70,
      isBestOverall: false,
    },
    platforms: {
      amazon:  { price: 1299, originalPrice: 2199, discountPercent: 41, rating: 3.9, reviewCount: 8900, deliveryEstimate: "3-4 Days", seller: "Amazon Fulfilled", inStock: true, productUrl: "https://amazon.in" },
      flipkart: { price: 1199, originalPrice: 2199, discountPercent: 45, rating: 3.8, reviewCount: 7200, deliveryEstimate: "3-5 Days", seller: "Flipkart Fashion", inStock: true, productUrl: "https://flipkart.com" },
      myntra:  { price: 1099, originalPrice: 2199, discountPercent: 50, rating: 4.0, reviewCount: 19400, deliveryEstimate: "2-3 Days", seller: "Myntra Fashion", inStock: true, productUrl: "https://myntra.com" },
    },
  },

  // ── HOME ─────────────────────────────────────────────────────────────────────
  {
    groupId: "philips-air-fryer-hd9252",
    name: "Philips HD9252 Air Fryer (2.5L, 1400W)",
    category: "home",
    brand: "Philips",
    imageUrl: "https://images.unsplash.com/photo-1648546069-c6c5c2b2f7e6?w=600&q=80",
    specs: { "Capacity": "2.5 Litres", "Power": "1400W", "Technology": "Rapid Air", "Temperature": "80–200°C", "Timer": "30 Min" },
    aiData: {
      sentiment: "green",
      sentimentScore: 93,
      sentimentPros: ["Even cooking without oil", "Easy to clean", "Compact design"],
      sentimentCons: ["Small 2.5L capacity for large families", "Basket gets very hot externally"],
      reviewSummary: "Consistent oil-free cooking results with very easy cleaning. Not suitable for families of 4+ due to the 2.5L basket size.",
      whyBuy: "Philips Rapid Air tech delivers the most even results — 25% off on Amazon with 1-year warranty.",
      bestOverallScore: 91,
      isBestOverall: true,
    },
    platforms: {
      amazon:  { price: 5999, originalPrice: 7999, discountPercent: 25, rating: 4.5, reviewCount: 14230, deliveryEstimate: "2-3 Days", seller: "Amazon Fulfilled", inStock: true, productUrl: "https://amazon.in" },
      flipkart: { price: 6299, originalPrice: 7999, discountPercent: 21, rating: 4.4, reviewCount: 9870, deliveryEstimate: "3-5 Days", seller: "Flipkart Assured", inStock: true, productUrl: "https://flipkart.com" },
      myntra:  { price: 0, originalPrice: 0, discountPercent: 0, rating: 0, reviewCount: 0, deliveryEstimate: "", seller: "", inStock: false, productUrl: "" },
    },
  },
  {
    groupId: "mi-smart-bulb-white",
    name: "Mi Smart LED Bulb (White, 10W)",
    category: "home",
    brand: "Xiaomi",
    imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    specs: { "Power": "10W", "Lumens": "810lm", "Connectivity": "Wi-Fi 2.4GHz", "Lifespan": "25,000 Hours", "App": "Mi Home / Google / Alexa" },
    aiData: {
      sentiment: "green",
      sentimentScore: 85,
      sentimentPros: ["Excellent app integration", "Works with Alexa and Google Home", "Long 25,000 hour lifespan"],
      sentimentCons: ["Requires 2.4GHz Wi-Fi only", "Mi Home app can be sluggish"],
      reviewSummary: "Smooth smart home integration with both Google and Alexa. Requires a dedicated 2.4GHz Wi-Fi network — not compatible with 5GHz.",
      whyBuy: "Most affordable smart bulb with full Google/Alexa voice control — best budget smart home starter.",
      bestOverallScore: 83,
      isBestOverall: false,
    },
    platforms: {
      amazon:  { price: 649, originalPrice: 999, discountPercent: 35, rating: 4.3, reviewCount: 24100, deliveryEstimate: "2-3 Days", seller: "Amazon Fulfilled", inStock: true, productUrl: "https://amazon.in" },
      flipkart: { price: 599, originalPrice: 999, discountPercent: 40, rating: 4.2, reviewCount: 18900, deliveryEstimate: "2-4 Days", seller: "Flipkart Assured", inStock: true, productUrl: "https://flipkart.com" },
      myntra:  { price: 0, originalPrice: 0, discountPercent: 0, rating: 0, reviewCount: 0, deliveryEstimate: "", seller: "", inStock: false, productUrl: "" },
    },
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// TRANSFORM: flatten groups into individual product listings per platform
// ─────────────────────────────────────────────────────────────────────────────
const flattenProducts = () => {
  const products = [];
  mockGroups.forEach((group) => {
    const platformKeys = Object.keys(group.platforms);
    platformKeys.forEach((platform) => {
      const p = group.platforms[platform];
      if (!p.inStock && p.price === 0) return; // Skip unavailable platforms
      products.push({
        id: generateId(group.groupId, platform),
        groupId: group.groupId,
        title: group.name,
        brand: group.brand,
        category: group.category,
        imageUrl: group.imageUrl,
        specs: group.specs,
        platform,
        price: p.price,
        originalPrice: p.originalPrice,
        discountPercent: p.discountPercent,
        rating: p.rating,
        reviewCount: p.reviewCount,
        deliveryEstimate: p.deliveryEstimate,
        seller: p.seller,
        inStock: p.inStock,
        productUrl: p.productUrl,
        // AI Data
        sentiment: group.aiData.sentiment,
        sentimentScore: group.aiData.sentimentScore,
        sentimentPros: group.aiData.sentimentPros,
        sentimentCons: group.aiData.sentimentCons,
        reviewSummary: group.aiData.reviewSummary,
        whyBuy: group.aiData.whyBuy,
        bestOverallScore: group.aiData.bestOverallScore,
        isBestOverall: group.aiData.isBestOverall,
      });
    });
  });
  return products;
};

export const mockProducts = flattenProducts();

export const mockGroups_ = mockGroups;

// ─────────────────────────────────────────────────────────────────────────────
// SEARCH FUNCTION — filter & sort mock products
// ─────────────────────────────────────────────────────────────────────────────
export const searchMockProducts = ({ query = "", category = "all", minPrice = 0, maxPrice = Infinity, platforms = [], sortBy = "best_value" }) => {
  let results = [...mockProducts];

  // Filter by query
  if (query.trim()) {
    const q = query.toLowerCase();
    results = results.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
    );
  }

  // Filter by category
  if (category && category !== "all") {
    results = results.filter((p) => p.category === category);
  }

  // Filter by price
  results = results.filter((p) => p.price >= minPrice && p.price <= maxPrice);

  // Filter by platform
  if (platforms.length > 0) {
    results = results.filter((p) => platforms.includes(p.platform));
  }

  // Sort
  switch (sortBy) {
    case "price_asc":
      results.sort((a, b) => a.price - b.price);
      break;
    case "price_desc":
      results.sort((a, b) => b.price - a.price);
      break;
    case "rating":
      results.sort((a, b) => b.rating - a.rating);
      break;
    case "discount":
      results.sort((a, b) => b.discountPercent - a.discountPercent);
      break;
    case "best_value":
    default:
      results.sort((a, b) => b.bestOverallScore - a.bestOverallScore);
      break;
  }

  // Mark best overall from results
  const bestOverallId = results.length > 0 ? results.find((p) => p.isBestOverall)?.id || results[0].id : null;

  return { results, bestOverallId, count: results.length };
};

// ─────────────────────────────────────────────────────────────────────────────
// ALTERNATIVES GENERATOR
// ─────────────────────────────────────────────────────────────────────────────
export const getAlternatives = (productId) => {
  const product = mockProducts.find((p) => p.id === productId);
  if (!product) return { cheaper: null, similar: null, premium: null };

  const sameCat = mockProducts.filter(
    (p) => p.category === product.category && p.groupId !== product.groupId
  );

  const cheaper = sameCat.filter((p) => p.price < product.price).sort((a, b) => b.bestOverallScore - a.bestOverallScore)[0] || null;
  const premium = sameCat.filter((p) => p.price > product.price).sort((a, b) => b.bestOverallScore - a.bestOverallScore)[0] || null;
  const similar = sameCat.filter((p) => p !== cheaper && p !== premium).sort((a, b) => b.bestOverallScore - a.bestOverallScore)[0] || null;

  return { cheaper, similar, premium };
};

// ─────────────────────────────────────────────────────────────────────────────
// BUDGET EXPLORER
// ─────────────────────────────────────────────────────────────────────────────
export const budgetExplorer = (productId, extraBudget) => {
  const product = mockProducts.find((p) => p.id === productId);
  if (!product) return [];

  const maxPrice = product.price + extraBudget;
  return mockProducts
    .filter((p) => p.category === product.category && p.price > product.price && p.price <= maxPrice && p.groupId !== product.groupId)
    .sort((a, b) => b.bestOverallScore - a.bestOverallScore)
    .slice(0, 3);
};

// ─────────────────────────────────────────────────────────────────────────────
// CATEGORIES
// ─────────────────────────────────────────────────────────────────────────────
export const categories = [
  { id: "all",         label: "🔥 Trending Deals",  emoji: "🔥" },
  { id: "electronics", label: "🎧 Electronics",      emoji: "🎧" },
  { id: "footwear",    label: "👟 Footwear",          emoji: "👟" },
  { id: "fashion",     label: "👕 Fashion",            emoji: "👕" },
  { id: "home",        label: "🏠 Home Appliances",  emoji: "🏠" },
];

export default mockProducts;
