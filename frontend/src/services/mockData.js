// ─────────────────────────────────────────────────────────────────────────────
// MOCK PRODUCT CATALOG — AI Personal Shopping Assistant
// 18 Distinct Products across 4 Categories with Verified, High-Res Unique Images
// ─────────────────────────────────────────────────────────────────────────────

export const getCategoryFallbackImage = (category) => {
  switch (category?.toLowerCase()) {
    case "electronics":
      return "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80";
    case "footwear":
      return "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop&q=80";
    case "fashion":
      return "https://images.unsplash.com/photo-1542272604-787c3835535d?w=800&auto=format&fit=crop&q=80";
    case "home":
      return "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&auto=format&fit=crop&q=80";
    default:
      return "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80";
  }
};

const generateId = (group, platform) => `${group}-${platform}`;

export const mockGroups = [
  // ── 1. ELECTRONICS & AUDIO ──────────────────────────────────────────────────
  {
    groupId: "sony-wh1000xm5",
    name: "Sony WH-1000XM5 Wireless Noise Cancelling Headphones",
    category: "electronics",
    subcategory: "headphones",
    brand: "Sony",
    imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80",
    specs: { "Form Factor": "Over-Ear", "Battery Life": "30 Hours", "ANC": "8-Mic Industry Leading ANC", "Connectivity": "Bluetooth 5.2 & LDAC", "Weight": "250g" },
    aiData: {
      sentiment: "green",
      sentimentScore: 95,
      sentimentPros: ["Benchmark noise cancellation", "30-hour real battery life", "Ultralight comfortable fit", "Multipoint connection"],
      sentimentCons: ["Non-foldable carrying case", "Touch controls take getting used to"],
      reviewSummary: "Widely regarded as the pinnacle of active noise cancellation with superior microphone clarity for office & travel.",
      whyBuy: "Industry-standard ANC with 17% savings on Amazon and fastest delivery.",
      bestOverallScore: 95,
      isBestOverall: true,
    },
    platforms: {
      amazon:  { price: 24990, originalPrice: 29990, discountPercent: 17, rating: 4.6, reviewCount: 15420, deliveryEstimate: "Tomorrow by 11 AM", seller: "Amazon Fulfilled", inStock: true, productUrl: "https://amazon.in" },
      flipkart: { price: 25499, originalPrice: 29990, discountPercent: 15, rating: 4.5, reviewCount: 9840,  deliveryEstimate: "2-3 Days", seller: "Flipkart Assured", inStock: true, productUrl: "https://flipkart.com" },
      myntra:  { price: 26990, originalPrice: 29990, discountPercent: 10, rating: 4.3, reviewCount: 3200,  deliveryEstimate: "3-4 Days", seller: "Myntra Luxe", inStock: true, productUrl: "https://myntra.com" },
    },
  },
  {
    groupId: "apple-airpods-pro-2",
    name: "Apple AirPods Pro (2nd Gen) with USB-C MagSafe Case",
    category: "electronics",
    subcategory: "earbuds",
    brand: "Apple",
    imageUrl: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=800&auto=format&fit=crop&q=80",
    specs: { "Form Factor": "In-Ear TWS", "Chip": "Apple H2", "Battery Life": "6h earbuds / 30h with case", "ANC": "Adaptive Audio + Transparency", "Resistance": "IP54" },
    aiData: {
      sentiment: "green",
      sentimentScore: 92,
      sentimentPros: ["Seamless Apple ecosystem handoff", "Flawless Adaptive Transparency", "Precision Find My tracking"],
      sentimentCons: ["Premium price point", "Limited feature set on Android"],
      reviewSummary: "The ultimate wireless earbuds for iOS users. Adaptive Audio balances environmental noise seamlessly.",
      whyBuy: "Best overall pick for iPhone users — 20% discount on Amazon with same-day shipping.",
      bestOverallScore: 92,
      isBestOverall: false,
    },
    platforms: {
      amazon:  { price: 19900, originalPrice: 24900, discountPercent: 20, rating: 4.7, reviewCount: 28900, deliveryEstimate: "Today by 8 PM", seller: "Appario Retail", inStock: true, productUrl: "https://amazon.in" },
      flipkart: { price: 20499, originalPrice: 24900, discountPercent: 18, rating: 4.6, reviewCount: 18430, deliveryEstimate: "2 Days", seller: "Flipkart Assured", inStock: true, productUrl: "https://flipkart.com" },
      myntra:  { price: 22990, originalPrice: 24900, discountPercent: 8,  rating: 4.5, reviewCount: 4100,  deliveryEstimate: "4 Days", seller: "Myntra", inStock: false, productUrl: "https://myntra.com" },
    },
  },
  {
    groupId: "jbl-tune-770nc",
    name: "JBL Tune 770NC Wireless Over-Ear ANC Headphones",
    category: "electronics",
    subcategory: "headphones",
    brand: "JBL",
    imageUrl: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&auto=format&fit=crop&q=80",
    specs: { "Form Factor": "Over-Ear", "Battery Life": "70 Hours (44h with ANC)", "Sound": "JBL Pure Bass", "Connectivity": "Bluetooth 5.3", "Weight": "232g" },
    aiData: {
      sentiment: "green",
      sentimentScore: 88,
      sentimentPros: ["Massive 70-hour battery life", "Punchy deep bass", "Fast 5-min charging"],
      sentimentCons: ["Plastic build feel", "ANC is moderate compared to flagship Sony"],
      reviewSummary: "King of battery longevity under ₹6,000. Delivers signature JBL Pure Bass sound with dependable ANC.",
      whyBuy: "Superb value: 40% discount on Flipkart with massive 70-hour battery life.",
      bestOverallScore: 89,
      isBestOverall: false,
    },
    platforms: {
      amazon:  { price: 5999, originalPrice: 9999, discountPercent: 40, rating: 4.3, reviewCount: 8900, deliveryEstimate: "2 Days", seller: "JBL Official", inStock: true, productUrl: "https://amazon.in" },
      flipkart: { price: 5499, originalPrice: 9999, discountPercent: 45, rating: 4.4, reviewCount: 14200, deliveryEstimate: "Tomorrow", seller: "Flipkart Assured", inStock: true, productUrl: "https://flipkart.com" },
      myntra:  { price: 6299, originalPrice: 9999, discountPercent: 37, rating: 4.2, reviewCount: 1200,  deliveryEstimate: "3 Days", seller: "Myntra", inStock: true, productUrl: "https://myntra.com" },
    },
  },
  {
    groupId: "samsung-galaxy-s24",
    name: "Samsung Galaxy S24 5G (8GB RAM, 128GB Storage, AI Features)",
    category: "electronics",
    subcategory: "smartphones",
    brand: "Samsung",
    imageUrl: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=800&auto=format&fit=crop&q=80",
    specs: { "Display": "6.2\" Dynamic AMOLED 2X 120Hz", "Processor": "Exynos 2400 / Snapdragon 8 Gen 3", "Camera": "50MP Triple Camera with OIS", "AI": "Galaxy AI Suite", "Battery": "4000mAh" },
    aiData: {
      sentiment: "green",
      sentimentScore: 91,
      sentimentPros: ["Compact ergonomic flagship size", "Stunning 2600-nit screen", "7 years of OS updates"],
      sentimentCons: ["Modest 4000mAh battery for power users", "25W charging speed"],
      reviewSummary: "Best compact Android flagship on the market with class-leading screen brightness and useful Galaxy AI tools.",
      whyBuy: "Flagship Galaxy AI phone at 19% off on Amazon with 7 years of guaranteed updates.",
      bestOverallScore: 91,
      isBestOverall: false,
    },
    platforms: {
      amazon:  { price: 64999, originalPrice: 79999, discountPercent: 19, rating: 4.5, reviewCount: 4520, deliveryEstimate: "Tomorrow", seller: "Samsung Official", inStock: true, productUrl: "https://amazon.in" },
      flipkart: { price: 65999, originalPrice: 79999, discountPercent: 18, rating: 4.4, reviewCount: 3890, deliveryEstimate: "2 Days", seller: "Flipkart Assured", inStock: true, productUrl: "https://flipkart.com" },
      myntra:  { price: 0, originalPrice: 0, discountPercent: 0, rating: 0, reviewCount: 0, deliveryEstimate: "", seller: "", inStock: false, productUrl: "" },
    },
  },
  {
    groupId: "dell-xps-15",
    name: "Dell XPS 15 Laptop (13th Gen Intel Core i7, 16GB DDR5, 512GB SSD, OLED)",
    category: "electronics",
    subcategory: "laptops",
    brand: "Dell",
    imageUrl: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=800&auto=format&fit=crop&q=80",
    specs: { "Processor": "Intel Core i7-13700H", "Display": "15.6\" 3.5K OLED Touch", "RAM": "16GB DDR5 4800MHz", "GPU": "NVIDIA GeForce RTX 4050", "Chassis": "CNC Aluminum + Carbon Fiber" },
    aiData: {
      sentiment: "green",
      sentimentScore: 89,
      sentimentPros: ["Breathtaking 3.5K OLED InfinityEdge display", "Ultra-premium build", "Exceptional keyboard and trackpad"],
      sentimentCons: ["Only USB-C ports (dongles needed)", "Gets warm under sustained 3D rendering"],
      reviewSummary: "The gold standard Windows laptop for creative professionals, developers, and power users.",
      whyBuy: "Save ₹15,000 on Dell's top creator machine on Amazon.",
      bestOverallScore: 88,
      isBestOverall: false,
    },
    platforms: {
      amazon:  { price: 109999, originalPrice: 124999, discountPercent: 12, rating: 4.5, reviewCount: 2340, deliveryEstimate: "3 Days", seller: "Dell Official", inStock: true, productUrl: "https://amazon.in" },
      flipkart: { price: 112999, originalPrice: 124999, discountPercent: 10, rating: 4.4, reviewCount: 1890, deliveryEstimate: "4 Days", seller: "Flipkart Assured", inStock: true, productUrl: "https://flipkart.com" },
      myntra:  { price: 0, originalPrice: 0, discountPercent: 0, rating: 0, reviewCount: 0, deliveryEstimate: "", seller: "", inStock: false, productUrl: "" },
    },
  },

  // ── 2. ATHLETIC & FOOTWEAR ──────────────────────────────────────────────────
  {
    groupId: "nike-air-max-270",
    name: "Nike Air Max 270 Lifestyle Running Sneakers",
    category: "footwear",
    subcategory: "running",
    brand: "Nike",
    imageUrl: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop&q=80",
    specs: { "Air Unit": "270-degree Max Air Heel Unit", "Upper": "Engineered Breathable Mesh", "Closure": "Lace-Up", "Outsole": "Durable Waffle Rubber", "Surface": "Road & Street" },
    aiData: {
      sentiment: "green",
      sentimentScore: 93,
      sentimentPros: ["Iconic 270 Air heel cushioning", "Extremely breathable lightweight mesh", "Striking street lifestyle aesthetic"],
      sentimentCons: ["Heel feels prominent when sprinting", "Runs slightly narrow on wide feet"],
      reviewSummary: "One of Nike's all-time most popular lifestyle runners with legendary all-day step cushioning.",
      whyBuy: "Save 30% on Myntra with express 48h doorstep delivery.",
      bestOverallScore: 93,
      isBestOverall: true,
    },
    platforms: {
      amazon:  { price: 9995, originalPrice: 13995, discountPercent: 29, rating: 4.6, reviewCount: 21300, deliveryEstimate: "2 Days", seller: "Nike Retail", inStock: true, productUrl: "https://amazon.in" },
      flipkart: { price: 10499, originalPrice: 13995, discountPercent: 25, rating: 4.4, reviewCount: 14200, deliveryEstimate: "3 Days", seller: "Flipkart Assured", inStock: true, productUrl: "https://flipkart.com" },
      myntra:  { price: 9795, originalPrice: 13995, discountPercent: 30, rating: 4.7, reviewCount: 34100, deliveryEstimate: "Tomorrow", seller: "Nike Official Store", inStock: true, productUrl: "https://myntra.com" },
    },
  },
  {
    groupId: "adidas-ultraboost-22",
    name: "Adidas Ultraboost 22 Performance Road Running Shoes",
    category: "footwear",
    subcategory: "running",
    brand: "Adidas",
    imageUrl: "https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?w=800&auto=format&fit=crop&q=80",
    specs: { "Midsole": "100% Boost Energy Return", "Upper": "Primeknit+ with Ocean Plastic", "Drop": "10mm", "Outsole": "Continental Better Rubber", "Weight": "333g" },
    aiData: {
      sentiment: "green",
      sentimentScore: 90,
      sentimentPros: ["Pinnacle energy return with Boost", "Sock-like Primeknit upper", "Continental grip works in rain"],
      sentimentCons: ["Heavier than pure marathon racers", "Boost white midsole discolors over time"],
      reviewSummary: "The gold standard for daily high-mileage training. Boost midsole keeps legs fresh across 10K+ runs.",
      whyBuy: "Mega discount: 47% off on Myntra — premium marathon tech under ₹10,000.",
      bestOverallScore: 90,
      isBestOverall: false,
    },
    platforms: {
      amazon:  { price: 10499, originalPrice: 17999, discountPercent: 42, rating: 4.5, reviewCount: 16800, deliveryEstimate: "2 Days", seller: "Adidas India", inStock: true, productUrl: "https://amazon.in" },
      flipkart: { price: 10999, originalPrice: 17999, discountPercent: 39, rating: 4.3, reviewCount: 9400,  deliveryEstimate: "3 Days", seller: "Flipkart Assured", inStock: true, productUrl: "https://flipkart.com" },
      myntra:  { price: 9499, originalPrice: 17999, discountPercent: 47, rating: 4.6, reviewCount: 26500, deliveryEstimate: "Tomorrow", seller: "Adidas Flagship", inStock: true, productUrl: "https://myntra.com" },
    },
  },
  {
    groupId: "puma-softride-pro",
    name: "Puma Softride Pro Engineered Running Shoes",
    category: "footwear",
    subcategory: "running",
    brand: "Puma",
    imageUrl: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&auto=format&fit=crop&q=80",
    specs: { "Foam": "Puma Softride Foam", "Sockliner": "SoftFoam+ Comfort Insert", "Weight": "252g", "Upper": "Zoned Knit Mesh", "Surface": "Gym & Road" },
    aiData: {
      sentiment: "green",
      sentimentScore: 89,
      sentimentPros: ["Unbeatable comfort-to-price ratio", "Extremely lightweight under 260g", "Great for gym workouts and walking"],
      sentimentCons: ["Not intended for 20K+ marathon training", "Size runs half a size snug"],
      reviewSummary: "Best affordable daily runner under ₹3,000. Plush SoftFoam+ insert provides pillow-soft stepping.",
      whyBuy: "Clearance deal: 50% off on Flipkart at just ₹2,499.",
      bestOverallScore: 89,
      isBestOverall: false,
    },
    platforms: {
      amazon:  { price: 2699, originalPrice: 4999, discountPercent: 46, rating: 4.3, reviewCount: 11200, deliveryEstimate: "2 Days", seller: "Puma Official", inStock: true, productUrl: "https://amazon.in" },
      flipkart: { price: 2499, originalPrice: 4999, discountPercent: 50, rating: 4.4, reviewCount: 18900, deliveryEstimate: "Tomorrow", seller: "Flipkart Assured", inStock: true, productUrl: "https://flipkart.com" },
      myntra:  { price: 2799, originalPrice: 4999, discountPercent: 44, rating: 4.2, reviewCount: 8400,  deliveryEstimate: "3 Days", seller: "Myntra Fashion", inStock: true, productUrl: "https://myntra.com" },
    },
  },
  {
    groupId: "woodland-camel-boots",
    name: "Woodland Camel Genuine Leather Rugged Outdoor Boots",
    category: "footwear",
    subcategory: "boots",
    brand: "Woodland",
    imageUrl: "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?w=800&auto=format&fit=crop&q=80",
    specs: { "Material": "100% Genuine Nubuck Leather", "Sole": "Grooved Deep-Lug Rubber", "Ankle": "High Ankle Padded Collar", "Weather": "All-Terrain Rugged", "Closure": "Rust-Free Metal Eyelets" },
    aiData: {
      sentiment: "green",
      sentimentScore: 87,
      sentimentPros: ["Indestructible build lasts 4+ years", "Genuine thick nubuck leather", "Superior grip on rocks & mud"],
      sentimentCons: ["Heavy weight requires break-in period", "Stiff out of the box"],
      reviewSummary: "Legendary outdoor workhorse. Nubuck leather develops a rich patina and outlasts synthetic boots by years.",
      whyBuy: "Save 38% on Amazon — authentic heavy-duty nubuck leather boots.",
      bestOverallScore: 86,
      isBestOverall: false,
    },
    platforms: {
      amazon:  { price: 3995, originalPrice: 6495, discountPercent: 38, rating: 4.4, reviewCount: 14200, deliveryEstimate: "2 Days", seller: "Woodland Official", inStock: true, productUrl: "https://amazon.in" },
      flipkart: { price: 4195, originalPrice: 6495, discountPercent: 35, rating: 4.3, reviewCount: 9800,  deliveryEstimate: "3 Days", seller: "Flipkart Assured", inStock: true, productUrl: "https://flipkart.com" },
      myntra:  { price: 3895, originalPrice: 6495, discountPercent: 40, rating: 4.5, reviewCount: 19100, deliveryEstimate: "Tomorrow", seller: "Woodland Brand Store", inStock: true, productUrl: "https://myntra.com" },
    },
  },

  // ── 3. DENIM & APPAREL ──────────────────────────────────────────────────────
  {
    groupId: "levis-511-slim",
    name: "Levi's 511 Slim Fit Stretch Denim Jeans (Dark Indigo)",
    category: "fashion",
    subcategory: "denim",
    brand: "Levi's",
    imageUrl: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=800&auto=format&fit=crop&q=80",
    specs: { "Fit": "Slim from hip to ankle", "Fabric": "99% Cotton, 1% Elastane", "Rise": "Mid Rise", "Wash": "Dark Indigo Vintage", "Closure": "Zip Fly with Shank Button" },
    aiData: {
      sentiment: "green",
      sentimentScore: 92,
      sentimentPros: ["Timeless flattering slim silhouette", "1% elastane gives comfortable stretch", "Maintains shape after 50+ washes"],
      sentimentCons: ["Length may run long for shorter heights", "Slightly snug around thighs initially"],
      reviewSummary: "Levi's quintessential modern cut. Versatile enough to pair with formal blazers or casual sneakers.",
      whyBuy: "Lowest price across platforms on Myntra: 49% discount at ₹1,799.",
      bestOverallScore: 92,
      isBestOverall: true,
    },
    platforms: {
      amazon:  { price: 1999, originalPrice: 3499, discountPercent: 43, rating: 4.3, reviewCount: 32100, deliveryEstimate: "2 Days", seller: "Levi's Official", inStock: true, productUrl: "https://amazon.in" },
      flipkart: { price: 2099, originalPrice: 3499, discountPercent: 40, rating: 4.2, reviewCount: 19800, deliveryEstimate: "3 Days", seller: "Flipkart Fashion", inStock: true, productUrl: "https://flipkart.com" },
      myntra:  { price: 1799, originalPrice: 3499, discountPercent: 49, rating: 4.5, reviewCount: 54200, deliveryEstimate: "Tomorrow", seller: "Myntra Fashion", inStock: true, productUrl: "https://myntra.com" },
    },
  },
  {
    groupId: "us-polo-tshirt",
    name: "U.S. Polo Assn. Classic Solid Pique Polo T-Shirt",
    category: "fashion",
    subcategory: "tshirts",
    brand: "U.S. Polo Assn.",
    imageUrl: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&auto=format&fit=crop&q=80",
    specs: { "Fabric": "100% Breathable Pique Cotton", "Fit": "Custom Fit", "Collar": "Ribbed Polo Collar", "Logo": "Embroidered Double Horseman", "Care": "Machine Wash" },
    aiData: {
      sentiment: "green",
      sentimentScore: 89,
      sentimentPros: ["100% pure breathable pique cotton", "Color stays vibrant after washing", "Refined smart casual styling"],
      sentimentCons: ["Collar can curl if not steam ironed", "Slight shrinkage on hot cycle wash"],
      reviewSummary: "The staple smart casual polo. Heavy-gauge pique fabric holds its structure all day.",
      whyBuy: "Mega deal: 53% off on Myntra — premium branded polo at ₹999.",
      bestOverallScore: 88,
      isBestOverall: false,
    },
    platforms: {
      amazon:  { price: 1099, originalPrice: 2199, discountPercent: 50, rating: 4.3, reviewCount: 15400, deliveryEstimate: "2 Days", seller: "USPA Brand", inStock: true, productUrl: "https://amazon.in" },
      flipkart: { price: 1199, originalPrice: 2199, discountPercent: 45, rating: 4.1, reviewCount: 8900,  deliveryEstimate: "3 Days", seller: "Flipkart Fashion", inStock: true, productUrl: "https://flipkart.com" },
      myntra:  { price: 999,  originalPrice: 2199, discountPercent: 55, rating: 4.4, reviewCount: 29800, deliveryEstimate: "Tomorrow", seller: "Myntra Direct", inStock: true, productUrl: "https://myntra.com" },
    },
  },
  {
    groupId: "arrow-formal-shirt",
    name: "Arrow Men's Slim Fit Easy-Iron Crisp Formal Shirt",
    category: "fashion",
    subcategory: "formal",
    brand: "Arrow",
    imageUrl: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&auto=format&fit=crop&q=80",
    specs: { "Fabric": "100% Luxury Combed Cotton", "Weave": "Fine Twill Structure", "Collar": "Semi-Cutaway Collar", "Finish": "Easy-Iron Wrinkle Resistant", "Fit": "Tailored Slim" },
    aiData: {
      sentiment: "green",
      sentimentScore: 88,
      sentimentPros: ["Silky smooth 100% combed cotton", "Wrinkle-resistant easy iron finish", "Sharp tailored silhouette"],
      sentimentCons: ["Requires gentle tumble dry", "Chest pocket omitted for modern look"],
      reviewSummary: "Executive office favorite. High-thread twill cotton breathes easily in humid weather while staying crisp.",
      whyBuy: "Save 48% on Amazon — professional boardroom shirt under ₹1,200.",
      bestOverallScore: 87,
      isBestOverall: false,
    },
    platforms: {
      amazon:  { price: 1199, originalPrice: 2299, discountPercent: 48, rating: 4.4, reviewCount: 12400, deliveryEstimate: "Tomorrow", seller: "Arrow Official", inStock: true, productUrl: "https://amazon.in" },
      flipkart: { price: 1299, originalPrice: 2299, discountPercent: 43, rating: 4.2, reviewCount: 7800,  deliveryEstimate: "3 Days", seller: "Flipkart Fashion", inStock: true, productUrl: "https://flipkart.com" },
      myntra:  { price: 1149, originalPrice: 2299, discountPercent: 50, rating: 4.3, reviewCount: 18700, deliveryEstimate: "2 Days", seller: "Myntra Luxe", inStock: true, productUrl: "https://myntra.com" },
    },
  },

  // ── 4. SMART LIVING & APPLIANCES ───────────────────────────────────────────
  {
    groupId: "pigeon-air-fryer",
    name: "Pigeon Healthifry Digital 4.2L Rapid Air Fryer (1200W)",
    category: "home",
    subcategory: "appliances",
    brand: "Pigeon",
    imageUrl: "https://images.unsplash.com/photo-1648546069-c6c5c2b2f7e6?w=800&auto=format&fit=crop&q=80",
    specs: { "Capacity": "4.2 Litres Family Size", "Power": "1200 Watts", "Tech": "360° Rapid Air Circulation", "Presets": "8 Digital Cook Modes", "Basket": "Non-Stick Dishwasher Safe" },
    aiData: {
      sentiment: "green",
      sentimentScore: 91,
      sentimentPros: ["Cuts oil consumption by 85%", "Spacious 4.2L basket fits whole snacks", "8 one-touch digital presets"],
      sentimentCons: ["Outer plastic shell gets warm", "Beep volume is on the louder side"],
      reviewSummary: "Best value air fryer in India. Cooks crispy fries, samosas, and roasted paneer with zero oil mess.",
      whyBuy: "Massive 50% discount on Amazon — 4.2L digital air fryer under ₹3,000.",
      bestOverallScore: 91,
      isBestOverall: true,
    },
    platforms: {
      amazon:  { price: 2999, originalPrice: 5995, discountPercent: 50, rating: 4.4, reviewCount: 22400, deliveryEstimate: "Tomorrow", seller: "Amazon Fulfilled", inStock: true, productUrl: "https://amazon.in" },
      flipkart: { price: 3199, originalPrice: 5995, discountPercent: 47, rating: 4.3, reviewCount: 16800, deliveryEstimate: "2 Days", seller: "Flipkart Assured", inStock: true, productUrl: "https://flipkart.com" },
      myntra:  { price: 0, originalPrice: 0, discountPercent: 0, rating: 0, reviewCount: 0, deliveryEstimate: "", seller: "", inStock: false, productUrl: "" },
    },
  },
  {
    groupId: "atomberg-renesa-fan",
    name: "Atomberg Renesa 1200mm BLDC Smart Ceiling Fan with Remote",
    category: "home",
    subcategory: "appliances",
    brand: "Atomberg",
    imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop&q=80",
    specs: { "Motor": "Energy-Efficient BLDC Motor (28W)", "Savings": "Saves up to ₹1,500/year on power", "Air Delivery": "235 CMM High Airflow", "Speed": "360 RPM", "Control": "Smart IR Remote with Timer & Boost" },
    aiData: {
      sentiment: "green",
      sentimentScore: 94,
      sentimentPros: ["Consumes only 28W at highest speed", "Runs 3x longer on home inverter", "LED speed indicator & silent operation"],
      sentimentCons: ["Requires remote for speed adjustments", "Higher upfront cost than conventional fans"],
      reviewSummary: "Game changing energy-saving fan. Pays for itself within 2 years through electricity bill reductions.",
      whyBuy: "Top rated energy-saver on Amazon at 26% off with 3-year warranty.",
      bestOverallScore: 94,
      isBestOverall: true,
    },
    platforms: {
      amazon:  { price: 3699, originalPrice: 4990, discountPercent: 26, rating: 4.6, reviewCount: 38400, deliveryEstimate: "Tomorrow", seller: "Atomberg Official", inStock: true, productUrl: "https://amazon.in" },
      flipkart: { price: 3799, originalPrice: 4990, discountPercent: 24, rating: 4.5, reviewCount: 24100, deliveryEstimate: "2 Days", seller: "Flipkart Assured", inStock: true, productUrl: "https://flipkart.com" },
      myntra:  { price: 0, originalPrice: 0, discountPercent: 0, rating: 0, reviewCount: 0, deliveryEstimate: "", seller: "", inStock: false, productUrl: "" },
    },
  },
  {
    groupId: "wonderchef-nutri-blend",
    name: "Wonderchef Nutri-Blend Compact Mixer Grinder & Smoothie Maker (400W)",
    category: "home",
    subcategory: "kitchen",
    brand: "Wonderchef",
    imageUrl: "https://images.unsplash.com/photo-1570222094114-d054a817e56b?w=800&auto=format&fit=crop&q=80",
    specs: { "Power": "400 Watts 22,000 RPM Copper Motor", "Jars": "2 Unbreakable Polycarbonate Jars", "Blades": "Surgical Grade Steel Blades", "Function": "Chutney, Smoothies, Dry Masala Grinding", "Design": "Compact Countertop" },
    aiData: {
      sentiment: "green",
      sentimentScore: 90,
      sentimentPros: ["22,000 RPM motor extracts all nutrients", "Takes up minimal kitchen counter space", "Easy push-and-twist hands-free operation"],
      sentimentCons: ["Small jar capacity not meant for idli batter", "Runs loud at 22,000 RPM"],
      reviewSummary: "The ultimate compact smoothie and masala maker. Surgical-grade blades crush dry spices in under 20 seconds.",
      whyBuy: "Lowest price on Flipkart: 48% discount at ₹2,599.",
      bestOverallScore: 89,
      isBestOverall: false,
    },
    platforms: {
      amazon:  { price: 2799, originalPrice: 5000, discountPercent: 44, rating: 4.4, reviewCount: 31200, deliveryEstimate: "Tomorrow", seller: "Wonderchef Brand", inStock: true, productUrl: "https://amazon.in" },
      flipkart: { price: 2599, originalPrice: 5000, discountPercent: 48, rating: 4.3, reviewCount: 22100, deliveryEstimate: "2 Days", seller: "Flipkart Assured", inStock: true, productUrl: "https://flipkart.com" },
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
        product_id: generateId(group.groupId, platform),
        groupId: group.groupId,
        group_id: group.groupId,
        title: group.name,
        brand: group.brand,
        category: group.category,
        subcategory: group.subcategory,
        imageUrl: group.imageUrl,
        image_url: group.imageUrl,
        specs: group.specs,
        platform,
        price: p.price,
        originalPrice: p.originalPrice,
        original_price: p.originalPrice,
        discountPercent: p.discountPercent,
        discount_percent: p.discountPercent,
        rating: p.rating,
        reviewCount: p.reviewCount,
        review_count: p.reviewCount,
        deliveryEstimate: p.deliveryEstimate,
        delivery_estimate: p.deliveryEstimate,
        seller: p.seller,
        inStock: p.inStock,
        in_stock: p.inStock,
        productUrl: p.productUrl,
        product_url: p.productUrl,
        // AI Data
        sentiment: group.aiData.sentiment,
        sentimentScore: group.aiData.sentimentScore,
        sentiment_score: group.aiData.sentimentScore,
        sentimentPros: group.aiData.sentimentPros,
        sentimentCons: group.aiData.sentimentCons,
        reviewSummary: group.aiData.reviewSummary,
        review_summary: group.aiData.reviewSummary,
        whyBuy: group.aiData.whyBuy,
        why_buy: group.aiData.whyBuy,
        bestOverallScore: group.aiData.bestOverallScore,
        best_overall_score: group.aiData.bestOverallScore,
        isBestOverall: group.aiData.isBestOverall,
        is_best_overall: group.aiData.isBestOverall,
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
export const searchMockProducts = ({ query = "", category = "", minPrice = 0, maxPrice = Infinity, platforms = [], sortBy = "best_value" }) => {
  let results = [...mockProducts];

  // Filter by query
  if (query && query.trim()) {
    const q = query.toLowerCase();
    results = results.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        (p.subcategory && p.subcategory.toLowerCase().includes(q))
    );
  }

  // Filter by category
  if (category && category !== "all" && category !== "") {
    results = results.filter((p) => p.category === category);
  }

  // Filter by price
  results = results.filter((p) => p.price >= minPrice && p.price <= maxPrice);

  // Filter by platform
  if (platforms && platforms.length > 0) {
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
      results.sort((a, b) => b.discount_percent - a.discount_percent);
      break;
    case "best_value":
    case "relevance":
    default:
      results.sort((a, b) => b.best_overall_score - a.best_overall_score);
      break;
  }

  // Mark best overall from results
  const bestOverallId = results.length > 0 ? results.find((p) => p.is_best_overall)?.id || results[0].id : null;

  return { results, bestOverallId, count: results.length };
};

// ─────────────────────────────────────────────────────────────────────────────
// ALTERNATIVES GENERATOR
// ─────────────────────────────────────────────────────────────────────────────
export const getAlternatives = (productId) => {
  const product = mockProducts.find((p) => p.id === productId || p.product_id === productId);
  if (!product) return { cheaper: [], similar: [], premium: [] };

  const sameCat = mockProducts.filter(
    (p) => p.category === product.category && p.groupId !== product.groupId
  );

  const cheaper = sameCat.filter((p) => p.price < product.price).sort((a, b) => b.best_overall_score - a.best_overall_score).slice(0, 2);
  const premium = sameCat.filter((p) => p.price > product.price).sort((a, b) => b.best_overall_score - a.best_overall_score).slice(0, 2);
  const similar = sameCat.filter((p) => !cheaper.includes(p) && !premium.includes(p)).sort((a, b) => b.best_overall_score - a.best_overall_score).slice(0, 2);

  return { cheaper, similar, premium };
};

// ─────────────────────────────────────────────────────────────────────────────
// BUDGET EXPLORER
// ─────────────────────────────────────────────────────────────────────────────
export const budgetExplorer = (productId, extraBudget) => {
  const product = mockProducts.find((p) => p.id === productId || p.product_id === productId);
  if (!product) return { currentProduct: null, upgradedOptions: [] };

  const maxPrice = product.price + extraBudget;
  const upgradedOptions = mockProducts
    .filter((p) => p.category === product.category && p.price > product.price && p.price <= maxPrice && p.groupId !== product.groupId)
    .sort((a, b) => b.best_overall_score - a.best_overall_score)
    .slice(0, 3)
    .map((up) => ({
      ...up,
      upgradeReason: `Unlocks higher rating (${up.rating}★) and +${up.best_overall_score - product.best_overall_score} AI score for ₹${Number(up.price - product.price).toLocaleString("en-IN")} more.`,
    }));

  return { currentProduct: product, upgradedOptions };
};

// ─────────────────────────────────────────────────────────────────────────────
// CATEGORY DEFINITIONS
// ─────────────────────────────────────────────────────────────────────────────
export const CATEGORY_DEFINITIONS = [
  {
    id: "electronics",
    label: "Audio & Electronics",
    shortLabel: "Electronics",
    emoji: "🎧",
    tagline: "Active Noise Cancelling, TWS Earbuds, Smartphones & Computing",
    coverImage: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80",
    badge: "Up to 45% Off",
    subcategories: ["All", "Headphones", "Earbuds", "Smartphones", "Laptops"],
    quadrantPreviews: [
      { title: "Sony WH-1000XM5", price: "₹24,990", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&auto=format&fit=crop&q=80" },
      { title: "AirPods Pro 2", price: "₹19,900", image: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=400&auto=format&fit=crop&q=80" },
      { title: "Samsung S24 5G", price: "₹64,999", image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&auto=format&fit=crop&q=80" },
      { title: "JBL Tune 770NC", price: "₹5,499", image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=400&auto=format&fit=crop&q=80" },
    ],
  },
  {
    id: "footwear",
    label: "Athletic & Footwear",
    shortLabel: "Footwear",
    emoji: "👟",
    tagline: "Performance Road Runners, Street Classics & All-Terrain Boots",
    coverImage: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop&q=80",
    badge: "Up to 50% Off",
    subcategories: ["All", "Running", "Sneakers", "Boots"],
    quadrantPreviews: [
      { title: "Nike Air Max 270", price: "₹9,795", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&auto=format&fit=crop&q=80" },
      { title: "Adidas Ultraboost 22", price: "₹9,499", image: "https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?w=400&auto=format&fit=crop&q=80" },
      { title: "Puma Softride Pro", price: "₹2,499", image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=400&auto=format&fit=crop&q=80" },
      { title: "Woodland Leather", price: "₹3,895", image: "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?w=400&auto=format&fit=crop&q=80" },
    ],
  },
  {
    id: "fashion",
    label: "Denim & Apparel",
    shortLabel: "Fashion",
    emoji: "👕",
    tagline: "Slim Fit Indigo Jeans, Luxury Polos & Wrinkle-Free Formals",
    coverImage: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=800&auto=format&fit=crop&q=80",
    badge: "Min 40% Off",
    subcategories: ["All", "Denim", "T-Shirts", "Formal"],
    quadrantPreviews: [
      { title: "Levi's 511 Slim", price: "₹1,799", image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&auto=format&fit=crop&q=80" },
      { title: "U.S. Polo Assn. Tee", price: "₹999", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&auto=format&fit=crop&q=80" },
      { title: "Arrow Formal Shirt", price: "₹1,149", image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&auto=format&fit=crop&q=80" },
      { title: "Premium Casuals", price: "₹1,499", image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&auto=format&fit=crop&q=80" },
    ],
  },
  {
    id: "home",
    label: "Smart Home & Living",
    shortLabel: "Home & Living",
    emoji: "🏠",
    tagline: "Rapid Air Fryers, 28W BLDC Fans & High-Speed Kitchen Blenders",
    coverImage: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&auto=format&fit=crop&q=80",
    badge: "Up to 50% Off",
    subcategories: ["All", "Appliances", "Kitchen", "Smart Living"],
    quadrantPreviews: [
      { title: "Pigeon 4.2L Air Fryer", price: "₹2,999", image: "https://images.unsplash.com/photo-1648546069-c6c5c2b2f7e6?w=400&auto=format&fit=crop&q=80" },
      { title: "Atomberg BLDC Fan", price: "₹3,699", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&auto=format&fit=crop&q=80" },
      { title: "Nutri-Blend Mixer", price: "₹2,599", image: "https://images.unsplash.com/photo-1570222094114-d054a817e56b?w=400&auto=format&fit=crop&q=80" },
      { title: "Digital Microwave", price: "₹4,999", image: "https://images.unsplash.com/photo-1585659722983-3a675dabf23d?w=400&auto=format&fit=crop&q=80" },
    ],
  },
];

export default mockProducts;
