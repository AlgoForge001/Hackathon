// Auto-generated synchronized mock product catalog (51 platform listings)
export const CATEGORY_DEFINITIONS = [
  {
    id: "electronics",
    label: "Electronics & Audio",
    shortLabel: "Electronics",
    tagline: "Compare verified tech listings across Amazon, Flipkart & Myntra",
    coverImage: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80",
    badge: "Verified Tech Deals",
    subcategories: ["All", "Headphones", "TWS Earbuds", "Laptops", "Smartphones", "Smartwatches", "Gaming"],
    quadrantPreviews: [
      { title: "Headphones", subtext: "Sony & JBL", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80" },
      { title: "Earbuds", subtext: "AirPods Pro 2", image: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=800&auto=format&fit=crop&q=80" },
      { title: "Smartphones", subtext: "Galaxy S24", image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=800&auto=format&fit=crop&q=80" },
      { title: "Laptops", subtext: "MacBook Air", image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&auto=format&fit=crop&q=80" },
    ],
  },
  {
    id: "footwear",
    label: "Athletic & Lifestyle Footwear",
    shortLabel: "Footwear",
    tagline: "Performance running shoes, sneakers & trekking boots",
    coverImage: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop&q=80",
    badge: "Performance & Comfort",
    subcategories: ["All", "Running", "Sneakers", "Clogs", "Trekking Boots", "Walking"],
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
    subcategories: ["All", "Jeans", "Polos", "Jackets", "Sunglasses", "Kurtas", "Trousers"],
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
    subcategories: ["All", "Ceiling Fans", "Air Fryers", "Vacuums", "Coffee Machines", "Mixer Grinders", "Air Purifiers"],
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

export const mockProducts = [
  {
    "id": "sony-wh1000xm5-amazon",
    "product_id": "sony-wh1000xm5-amazon",
    "groupId": "sony-wh1000xm5",
    "group_id": "sony-wh1000xm5",
    "title": "Sony WH-1000XM5 Wireless Noise Cancelling Headphones (AMAZON)",
    "name": "Sony WH-1000XM5 Wireless Noise Cancelling Headphones",
    "product_name": "Sony WH-1000XM5 Wireless Noise Cancelling Headphones",
    "brand": "Sony",
    "category": "electronics",
    "platform": "amazon",
    "price": 24990,
    "originalPrice": 29990,
    "original_price": 29990,
    "discountPercent": 17,
    "discount_percent": 17,
    "rating": 4.6,
    "reviewCount": 12847,
    "review_count": 12847,
    "deliveryEstimate": "1-2 days (Prime)",
    "delivery_estimate": "1-2 days (Prime)",
    "imageUrl": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=900&auto=format&fit=crop&q=80",
    "image_url": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=900&auto=format&fit=crop&q=80",
    "images": [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=900&auto=format&fit=crop&q=80"
    ],
    "dimensions": {
      "width": "18.5 cm",
      "height": "24.0 cm",
      "depth": "7.2 cm",
      "weight": "250g"
    },
    "price_history": [
      {
        "month": "May",
        "amazon": 27989,
        "flipkart": 28049,
        "myntra": 31038
      },
      {
        "month": "Jun",
        "amazon": 26989,
        "flipkart": 27284,
        "myntra": 29689
      },
      {
        "month": "Jul",
        "amazon": 26240,
        "flipkart": 26519,
        "myntra": 29149
      },
      {
        "month": "Aug",
        "amazon": 25490,
        "flipkart": 27029,
        "myntra": 28070
      },
      {
        "month": "Sep",
        "amazon": 24490,
        "flipkart": 26009,
        "myntra": 27530
      },
      {
        "month": "Current",
        "amazon": 24990,
        "flipkart": 25499,
        "myntra": 26990
      }
    ],
    "priceHistory": [
      {
        "month": "May",
        "amazon": 27989,
        "flipkart": 28049,
        "myntra": 31038
      },
      {
        "month": "Jun",
        "amazon": 26989,
        "flipkart": 27284,
        "myntra": 29689
      },
      {
        "month": "Jul",
        "amazon": 26240,
        "flipkart": 26519,
        "myntra": 29149
      },
      {
        "month": "Aug",
        "amazon": 25490,
        "flipkart": 27029,
        "myntra": 28070
      },
      {
        "month": "Sep",
        "amazon": 24490,
        "flipkart": 26009,
        "myntra": 27530
      },
      {
        "month": "Current",
        "amazon": 24990,
        "flipkart": 25499,
        "myntra": 26990
      }
    ],
    "productUrl": "https://www.amazon.in/dp/B09XS7JWHH",
    "product_url": "https://www.amazon.in/dp/B09XS7JWHH",
    "seller": "Appario Retail (Amazon Fulfilled)",
    "inStock": true,
    "in_stock": true,
    "sentiment": "green",
    "sentimentScore": 92,
    "best_overall_score": 76,
    "is_best_overall": true,
    "isBestOverall": true,
    "whyBuy": "Top rated electronics pick with 17% off and verified fast shipping.",
    "why_buy": "Top rated electronics pick with 17% off and verified fast shipping.",
    "reviewSummary": "Customer sentiment is strongly positive for Sony build quality and performance.",
    "review_summary": "Customer sentiment is strongly positive for Sony build quality and performance.",
    "specs": {
      "type": "Over-ear",
      "battery_life": "30 hours with ANC",
      "weight": "250g",
      "connectivity": "Bluetooth 5.2 & LDAC",
      "noise_cancellation": "Industry-leading ANC with 8 microphones & Auto NC Optimizer",
      "multipoint_connection": true,
      "fast_charging": "3 min charge = 3 hours playback"
    },
    "reviews": [
      {
        "author": "Rahul K",
        "rating": 5,
        "text": "Unmatched noise cancellation and crystal clear calls.",
        "date": "2024-10-15"
      },
      {
        "author": "Priya M",
        "rating": 4,
        "text": "Extremely lightweight and comfortable on long flights.",
        "date": "2024-09-22"
      }
    ]
  },
  {
    "id": "sony-wh1000xm5-flipkart",
    "product_id": "sony-wh1000xm5-flipkart",
    "groupId": "sony-wh1000xm5",
    "group_id": "sony-wh1000xm5",
    "title": "Sony WH-1000XM5 Wireless Noise Cancelling Headphones (FLIPKART)",
    "name": "Sony WH-1000XM5 Wireless Noise Cancelling Headphones",
    "product_name": "Sony WH-1000XM5 Wireless Noise Cancelling Headphones",
    "brand": "Sony",
    "category": "electronics",
    "platform": "flipkart",
    "price": 25499,
    "originalPrice": 29990,
    "original_price": 29990,
    "discountPercent": 15,
    "discount_percent": 15,
    "rating": 4.5,
    "reviewCount": 8230,
    "review_count": 8230,
    "deliveryEstimate": "2-3 days",
    "delivery_estimate": "2-3 days",
    "imageUrl": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=900&auto=format&fit=crop&q=80",
    "image_url": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=900&auto=format&fit=crop&q=80",
    "images": [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=900&auto=format&fit=crop&q=80"
    ],
    "dimensions": {
      "width": "18.5 cm",
      "height": "24.0 cm",
      "depth": "7.2 cm",
      "weight": "250g"
    },
    "price_history": [
      {
        "month": "May",
        "amazon": 27989,
        "flipkart": 28049,
        "myntra": 31038
      },
      {
        "month": "Jun",
        "amazon": 26989,
        "flipkart": 27284,
        "myntra": 29689
      },
      {
        "month": "Jul",
        "amazon": 26240,
        "flipkart": 26519,
        "myntra": 29149
      },
      {
        "month": "Aug",
        "amazon": 25490,
        "flipkart": 27029,
        "myntra": 28070
      },
      {
        "month": "Sep",
        "amazon": 24490,
        "flipkart": 26009,
        "myntra": 27530
      },
      {
        "month": "Current",
        "amazon": 24990,
        "flipkart": 25499,
        "myntra": 26990
      }
    ],
    "priceHistory": [
      {
        "month": "May",
        "amazon": 27989,
        "flipkart": 28049,
        "myntra": 31038
      },
      {
        "month": "Jun",
        "amazon": 26989,
        "flipkart": 27284,
        "myntra": 29689
      },
      {
        "month": "Jul",
        "amazon": 26240,
        "flipkart": 26519,
        "myntra": 29149
      },
      {
        "month": "Aug",
        "amazon": 25490,
        "flipkart": 27029,
        "myntra": 28070
      },
      {
        "month": "Sep",
        "amazon": 24490,
        "flipkart": 26009,
        "myntra": 27530
      },
      {
        "month": "Current",
        "amazon": 24990,
        "flipkart": 25499,
        "myntra": 26990
      }
    ],
    "productUrl": "https://www.flipkart.com/sony-wh-1000xm5",
    "product_url": "https://www.flipkart.com/sony-wh-1000xm5",
    "seller": "SuperComNet (Flipkart Assured)",
    "inStock": true,
    "in_stock": true,
    "sentiment": "green",
    "sentimentScore": 91,
    "best_overall_score": 74,
    "is_best_overall": false,
    "isBestOverall": false,
    "whyBuy": "Top rated electronics pick with 15% off and verified fast shipping.",
    "why_buy": "Top rated electronics pick with 15% off and verified fast shipping.",
    "reviewSummary": "Customer sentiment is strongly positive for Sony build quality and performance.",
    "review_summary": "Customer sentiment is strongly positive for Sony build quality and performance.",
    "specs": {
      "type": "Over-ear",
      "battery_life": "30 hours with ANC",
      "weight": "250g",
      "connectivity": "Bluetooth 5.2 & LDAC",
      "noise_cancellation": "Industry-leading ANC with 8 microphones & Auto NC Optimizer",
      "multipoint_connection": true,
      "fast_charging": "3 min charge = 3 hours playback"
    },
    "reviews": [
      {
        "author": "Karan B",
        "rating": 5,
        "text": "Awesome soundstage with deep sub-bass and LDAC support.",
        "date": "2024-11-12"
      }
    ]
  },
  {
    "id": "sony-wh1000xm5-myntra",
    "product_id": "sony-wh1000xm5-myntra",
    "groupId": "sony-wh1000xm5",
    "group_id": "sony-wh1000xm5",
    "title": "Sony WH-1000XM5 Wireless Noise Cancelling Headphones (MYNTRA)",
    "name": "Sony WH-1000XM5 Wireless Noise Cancelling Headphones",
    "product_name": "Sony WH-1000XM5 Wireless Noise Cancelling Headphones",
    "brand": "Sony",
    "category": "electronics",
    "platform": "myntra",
    "price": 26990,
    "originalPrice": 29990,
    "original_price": 29990,
    "discountPercent": 10,
    "discount_percent": 10,
    "rating": 4.6,
    "reviewCount": 1120,
    "review_count": 1120,
    "deliveryEstimate": "3-4 days",
    "delivery_estimate": "3-4 days",
    "imageUrl": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=900&auto=format&fit=crop&q=80",
    "image_url": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=900&auto=format&fit=crop&q=80",
    "images": [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=900&auto=format&fit=crop&q=80"
    ],
    "dimensions": {
      "width": "18.5 cm",
      "height": "24.0 cm",
      "depth": "7.2 cm",
      "weight": "250g"
    },
    "price_history": [
      {
        "month": "May",
        "amazon": 27989,
        "flipkart": 28049,
        "myntra": 31038
      },
      {
        "month": "Jun",
        "amazon": 26989,
        "flipkart": 27284,
        "myntra": 29689
      },
      {
        "month": "Jul",
        "amazon": 26240,
        "flipkart": 26519,
        "myntra": 29149
      },
      {
        "month": "Aug",
        "amazon": 25490,
        "flipkart": 27029,
        "myntra": 28070
      },
      {
        "month": "Sep",
        "amazon": 24490,
        "flipkart": 26009,
        "myntra": 27530
      },
      {
        "month": "Current",
        "amazon": 24990,
        "flipkart": 25499,
        "myntra": 26990
      }
    ],
    "priceHistory": [
      {
        "month": "May",
        "amazon": 27989,
        "flipkart": 28049,
        "myntra": 31038
      },
      {
        "month": "Jun",
        "amazon": 26989,
        "flipkart": 27284,
        "myntra": 29689
      },
      {
        "month": "Jul",
        "amazon": 26240,
        "flipkart": 26519,
        "myntra": 29149
      },
      {
        "month": "Aug",
        "amazon": 25490,
        "flipkart": 27029,
        "myntra": 28070
      },
      {
        "month": "Sep",
        "amazon": 24490,
        "flipkart": 26009,
        "myntra": 27530
      },
      {
        "month": "Current",
        "amazon": 24990,
        "flipkart": 25499,
        "myntra": 26990
      }
    ],
    "productUrl": "https://www.myntra.com/headphones/sony-xm5",
    "product_url": "https://www.myntra.com/headphones/sony-xm5",
    "seller": "Myntra Premium Tech",
    "inStock": true,
    "in_stock": true,
    "sentiment": "green",
    "sentimentScore": 92,
    "best_overall_score": 73,
    "is_best_overall": false,
    "isBestOverall": false,
    "whyBuy": "Top rated electronics pick with 10% off and verified fast shipping.",
    "why_buy": "Top rated electronics pick with 10% off and verified fast shipping.",
    "reviewSummary": "Customer sentiment is strongly positive for Sony build quality and performance.",
    "review_summary": "Customer sentiment is strongly positive for Sony build quality and performance.",
    "specs": {
      "type": "Over-ear",
      "battery_life": "30 hours with ANC",
      "weight": "250g",
      "connectivity": "Bluetooth 5.2 & LDAC",
      "noise_cancellation": "Industry-leading ANC with 8 microphones & Auto NC Optimizer",
      "multipoint_connection": true,
      "fast_charging": "3 min charge = 3 hours playback"
    },
    "reviews": [
      {
        "author": "Tanvi S",
        "rating": 5,
        "text": "Original sealed package with full Sony India 1-year warranty.",
        "date": "2024-10-02"
      }
    ]
  },
  {
    "id": "apple-airpods-pro-2-amazon",
    "product_id": "apple-airpods-pro-2-amazon",
    "groupId": "apple-airpods-pro-2",
    "group_id": "apple-airpods-pro-2",
    "title": "Apple AirPods Pro (2nd Generation) with USB-C MagSafe Case (AMAZON)",
    "name": "Apple AirPods Pro (2nd Generation) with USB-C MagSafe Case",
    "product_name": "Apple AirPods Pro (2nd Generation) with USB-C MagSafe Case",
    "brand": "Apple",
    "category": "electronics",
    "platform": "amazon",
    "price": 19999,
    "originalPrice": 24900,
    "original_price": 24900,
    "discountPercent": 20,
    "discount_percent": 20,
    "rating": 4.8,
    "reviewCount": 24190,
    "review_count": 24190,
    "deliveryEstimate": "Tomorrow",
    "delivery_estimate": "Tomorrow",
    "imageUrl": "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=900&auto=format&fit=crop&q=80",
    "image_url": "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=900&auto=format&fit=crop&q=80",
    "images": [
      "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?w=900&auto=format&fit=crop&q=80"
    ],
    "dimensions": {
      "width": "6.0 cm",
      "height": "4.5 cm",
      "depth": "2.1 cm",
      "weight": "50.8g"
    },
    "price_history": [
      {
        "month": "May",
        "amazon": 22399,
        "flipkart": 22539,
        "myntra": 25185
      },
      {
        "month": "Jun",
        "amazon": 21599,
        "flipkart": 21924,
        "myntra": 24090
      },
      {
        "month": "Jul",
        "amazon": 20999,
        "flipkart": 21310,
        "myntra": 23652
      },
      {
        "month": "Aug",
        "amazon": 20399,
        "flipkart": 21719,
        "myntra": 22776
      },
      {
        "month": "Sep",
        "amazon": 19599,
        "flipkart": 20900,
        "myntra": 22338
      },
      {
        "month": "Current",
        "amazon": 19999,
        "flipkart": 20490,
        "myntra": 21900
      }
    ],
    "priceHistory": [
      {
        "month": "May",
        "amazon": 22399,
        "flipkart": 22539,
        "myntra": 25185
      },
      {
        "month": "Jun",
        "amazon": 21599,
        "flipkart": 21924,
        "myntra": 24090
      },
      {
        "month": "Jul",
        "amazon": 20999,
        "flipkart": 21310,
        "myntra": 23652
      },
      {
        "month": "Aug",
        "amazon": 20399,
        "flipkart": 21719,
        "myntra": 22776
      },
      {
        "month": "Sep",
        "amazon": 19599,
        "flipkart": 20900,
        "myntra": 22338
      },
      {
        "month": "Current",
        "amazon": 19999,
        "flipkart": 20490,
        "myntra": 21900
      }
    ],
    "productUrl": "https://www.amazon.in/dp/B0CHWRXH8B",
    "product_url": "https://www.amazon.in/dp/B0CHWRXH8B",
    "seller": "Appario Retail (Amazon Prime)",
    "inStock": true,
    "in_stock": true,
    "sentiment": "green",
    "sentimentScore": 96,
    "best_overall_score": 80,
    "is_best_overall": true,
    "isBestOverall": true,
    "whyBuy": "Top rated electronics pick with 20% off and verified fast shipping.",
    "why_buy": "Top rated electronics pick with 20% off and verified fast shipping.",
    "reviewSummary": "Customer sentiment is strongly positive for Apple build quality and performance.",
    "review_summary": "Customer sentiment is strongly positive for Apple build quality and performance.",
    "specs": {
      "type": "In-ear TWS",
      "battery_life": "6h (30h with MagSafe Case)",
      "chip": "Apple H2 Headphone Chip",
      "noise_cancellation": "Active Noise Cancellation + Adaptive Audio + Transparency",
      "water_resistance": "IP54 dust, sweat, and water resistant"
    },
    "reviews": [
      {
        "author": "Arjun V",
        "rating": 5,
        "text": "Transparency mode is incredible. Spatial audio with head tracking is mind blowing.",
        "date": "2024-11-20"
      }
    ]
  },
  {
    "id": "apple-airpods-pro-2-flipkart",
    "product_id": "apple-airpods-pro-2-flipkart",
    "groupId": "apple-airpods-pro-2",
    "group_id": "apple-airpods-pro-2",
    "title": "Apple AirPods Pro (2nd Generation) with USB-C MagSafe Case (FLIPKART)",
    "name": "Apple AirPods Pro (2nd Generation) with USB-C MagSafe Case",
    "product_name": "Apple AirPods Pro (2nd Generation) with USB-C MagSafe Case",
    "brand": "Apple",
    "category": "electronics",
    "platform": "flipkart",
    "price": 20490,
    "originalPrice": 24900,
    "original_price": 24900,
    "discountPercent": 18,
    "discount_percent": 18,
    "rating": 4.7,
    "reviewCount": 14200,
    "review_count": 14200,
    "deliveryEstimate": "2-3 days",
    "delivery_estimate": "2-3 days",
    "imageUrl": "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=900&auto=format&fit=crop&q=80",
    "image_url": "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=900&auto=format&fit=crop&q=80",
    "images": [
      "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?w=900&auto=format&fit=crop&q=80"
    ],
    "dimensions": {
      "width": "6.0 cm",
      "height": "4.5 cm",
      "depth": "2.1 cm",
      "weight": "50.8g"
    },
    "price_history": [
      {
        "month": "May",
        "amazon": 22399,
        "flipkart": 22539,
        "myntra": 25185
      },
      {
        "month": "Jun",
        "amazon": 21599,
        "flipkart": 21924,
        "myntra": 24090
      },
      {
        "month": "Jul",
        "amazon": 20999,
        "flipkart": 21310,
        "myntra": 23652
      },
      {
        "month": "Aug",
        "amazon": 20399,
        "flipkart": 21719,
        "myntra": 22776
      },
      {
        "month": "Sep",
        "amazon": 19599,
        "flipkart": 20900,
        "myntra": 22338
      },
      {
        "month": "Current",
        "amazon": 19999,
        "flipkart": 20490,
        "myntra": 21900
      }
    ],
    "priceHistory": [
      {
        "month": "May",
        "amazon": 22399,
        "flipkart": 22539,
        "myntra": 25185
      },
      {
        "month": "Jun",
        "amazon": 21599,
        "flipkart": 21924,
        "myntra": 24090
      },
      {
        "month": "Jul",
        "amazon": 20999,
        "flipkart": 21310,
        "myntra": 23652
      },
      {
        "month": "Aug",
        "amazon": 20399,
        "flipkart": 21719,
        "myntra": 22776
      },
      {
        "month": "Sep",
        "amazon": 19599,
        "flipkart": 20900,
        "myntra": 22338
      },
      {
        "month": "Current",
        "amazon": 19999,
        "flipkart": 20490,
        "myntra": 21900
      }
    ],
    "productUrl": "https://www.flipkart.com/apple-airpods-pro-2",
    "product_url": "https://www.flipkart.com/apple-airpods-pro-2",
    "seller": "IndiFlashMart (Flipkart Assured)",
    "inStock": true,
    "in_stock": true,
    "sentiment": "green",
    "sentimentScore": 94,
    "best_overall_score": 78,
    "is_best_overall": false,
    "isBestOverall": false,
    "whyBuy": "Top rated electronics pick with 18% off and verified fast shipping.",
    "why_buy": "Top rated electronics pick with 18% off and verified fast shipping.",
    "reviewSummary": "Customer sentiment is strongly positive for Apple build quality and performance.",
    "review_summary": "Customer sentiment is strongly positive for Apple build quality and performance.",
    "specs": {
      "type": "In-ear TWS",
      "battery_life": "6h (30h with MagSafe Case)",
      "chip": "Apple H2 Headphone Chip",
      "noise_cancellation": "Active Noise Cancellation + Adaptive Audio + Transparency",
      "water_resistance": "IP54 dust, sweat, and water resistant"
    },
    "reviews": [
      {
        "author": "Meera K",
        "rating": 5,
        "text": "USB-C case makes charging with Mac and iPad effortless.",
        "date": "2024-10-18"
      }
    ]
  },
  {
    "id": "apple-airpods-pro-2-myntra",
    "product_id": "apple-airpods-pro-2-myntra",
    "groupId": "apple-airpods-pro-2",
    "group_id": "apple-airpods-pro-2",
    "title": "Apple AirPods Pro (2nd Generation) with USB-C MagSafe Case (MYNTRA)",
    "name": "Apple AirPods Pro (2nd Generation) with USB-C MagSafe Case",
    "product_name": "Apple AirPods Pro (2nd Generation) with USB-C MagSafe Case",
    "brand": "Apple",
    "category": "electronics",
    "platform": "myntra",
    "price": 21900,
    "originalPrice": 24900,
    "original_price": 24900,
    "discountPercent": 12,
    "discount_percent": 12,
    "rating": 4.7,
    "reviewCount": 2150,
    "review_count": 2150,
    "deliveryEstimate": "2-3 days",
    "delivery_estimate": "2-3 days",
    "imageUrl": "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=900&auto=format&fit=crop&q=80",
    "image_url": "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=900&auto=format&fit=crop&q=80",
    "images": [
      "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?w=900&auto=format&fit=crop&q=80"
    ],
    "dimensions": {
      "width": "6.0 cm",
      "height": "4.5 cm",
      "depth": "2.1 cm",
      "weight": "50.8g"
    },
    "price_history": [
      {
        "month": "May",
        "amazon": 22399,
        "flipkart": 22539,
        "myntra": 25185
      },
      {
        "month": "Jun",
        "amazon": 21599,
        "flipkart": 21924,
        "myntra": 24090
      },
      {
        "month": "Jul",
        "amazon": 20999,
        "flipkart": 21310,
        "myntra": 23652
      },
      {
        "month": "Aug",
        "amazon": 20399,
        "flipkart": 21719,
        "myntra": 22776
      },
      {
        "month": "Sep",
        "amazon": 19599,
        "flipkart": 20900,
        "myntra": 22338
      },
      {
        "month": "Current",
        "amazon": 19999,
        "flipkart": 20490,
        "myntra": 21900
      }
    ],
    "priceHistory": [
      {
        "month": "May",
        "amazon": 22399,
        "flipkart": 22539,
        "myntra": 25185
      },
      {
        "month": "Jun",
        "amazon": 21599,
        "flipkart": 21924,
        "myntra": 24090
      },
      {
        "month": "Jul",
        "amazon": 20999,
        "flipkart": 21310,
        "myntra": 23652
      },
      {
        "month": "Aug",
        "amazon": 20399,
        "flipkart": 21719,
        "myntra": 22776
      },
      {
        "month": "Sep",
        "amazon": 19599,
        "flipkart": 20900,
        "myntra": 22338
      },
      {
        "month": "Current",
        "amazon": 19999,
        "flipkart": 20490,
        "myntra": 21900
      }
    ],
    "productUrl": "https://www.myntra.com/apple-airpods-pro-2",
    "product_url": "https://www.myntra.com/apple-airpods-pro-2",
    "seller": "Apple Authorised Store",
    "inStock": true,
    "in_stock": true,
    "sentiment": "green",
    "sentimentScore": 94,
    "best_overall_score": 75,
    "is_best_overall": false,
    "isBestOverall": false,
    "whyBuy": "Top rated electronics pick with 12% off and verified fast shipping.",
    "why_buy": "Top rated electronics pick with 12% off and verified fast shipping.",
    "reviewSummary": "Customer sentiment is strongly positive for Apple build quality and performance.",
    "review_summary": "Customer sentiment is strongly positive for Apple build quality and performance.",
    "specs": {
      "type": "In-ear TWS",
      "battery_life": "6h (30h with MagSafe Case)",
      "chip": "Apple H2 Headphone Chip",
      "noise_cancellation": "Active Noise Cancellation + Adaptive Audio + Transparency",
      "water_resistance": "IP54 dust, sweat, and water resistant"
    },
    "reviews": [
      {
        "author": "Rohan D",
        "rating": 5,
        "text": "Authentic item with AppleCare activation.",
        "date": "2024-12-01"
      }
    ]
  },
  {
    "id": "apple-macbook-air-m2-amazon",
    "product_id": "apple-macbook-air-m2-amazon",
    "groupId": "apple-macbook-air-m2",
    "group_id": "apple-macbook-air-m2",
    "title": "Apple MacBook Air 13.6-inch with M2 Chip (8GB Unified Memory, 256GB SSD) (AMAZON)",
    "name": "Apple MacBook Air 13.6-inch with M2 Chip (8GB Unified Memory, 256GB SSD)",
    "product_name": "Apple MacBook Air 13.6-inch with M2 Chip (8GB Unified Memory, 256GB SSD)",
    "brand": "Apple",
    "category": "electronics",
    "platform": "amazon",
    "price": 84990,
    "originalPrice": 99900,
    "original_price": 99900,
    "discountPercent": 15,
    "discount_percent": 15,
    "rating": 4.8,
    "reviewCount": 9480,
    "review_count": 9480,
    "deliveryEstimate": "1-2 days",
    "delivery_estimate": "1-2 days",
    "imageUrl": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=900&auto=format&fit=crop&q=80",
    "image_url": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=900&auto=format&fit=crop&q=80",
    "images": [
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=900&auto=format&fit=crop&q=80"
    ],
    "dimensions": {
      "width": "30.4 cm",
      "height": "21.5 cm",
      "depth": "1.13 cm",
      "weight": "1.24 kg"
    },
    "price_history": [
      {
        "month": "May",
        "amazon": 95189,
        "flipkart": 92389,
        "myntra": 101085
      },
      {
        "month": "Jun",
        "amazon": 91789,
        "flipkart": 89869,
        "myntra": 96690
      },
      {
        "month": "Jul",
        "amazon": 89240,
        "flipkart": 87350,
        "myntra": 94932
      },
      {
        "month": "Aug",
        "amazon": 86690,
        "flipkart": 89029,
        "myntra": 91416
      },
      {
        "month": "Sep",
        "amazon": 83290,
        "flipkart": 85670,
        "myntra": 89658
      },
      {
        "month": "Current",
        "amazon": 84990,
        "flipkart": 83990,
        "myntra": 87900
      }
    ],
    "priceHistory": [
      {
        "month": "May",
        "amazon": 95189,
        "flipkart": 92389,
        "myntra": 101085
      },
      {
        "month": "Jun",
        "amazon": 91789,
        "flipkart": 89869,
        "myntra": 96690
      },
      {
        "month": "Jul",
        "amazon": 89240,
        "flipkart": 87350,
        "myntra": 94932
      },
      {
        "month": "Aug",
        "amazon": 86690,
        "flipkart": 89029,
        "myntra": 91416
      },
      {
        "month": "Sep",
        "amazon": 83290,
        "flipkart": 85670,
        "myntra": 89658
      },
      {
        "month": "Current",
        "amazon": 84990,
        "flipkart": 83990,
        "myntra": 87900
      }
    ],
    "productUrl": "https://www.amazon.in/dp/B0B3C5Q8N1",
    "product_url": "https://www.amazon.in/dp/B0B3C5Q8N1",
    "seller": "Amazon Prime Seller",
    "inStock": true,
    "in_stock": true,
    "sentiment": "green",
    "sentimentScore": 96,
    "best_overall_score": 78,
    "is_best_overall": false,
    "isBestOverall": false,
    "whyBuy": "Top rated electronics pick with 15% off and verified fast shipping.",
    "why_buy": "Top rated electronics pick with 15% off and verified fast shipping.",
    "reviewSummary": "Customer sentiment is strongly positive for Apple build quality and performance.",
    "review_summary": "Customer sentiment is strongly positive for Apple build quality and performance.",
    "specs": {
      "processor": "Apple M2 8-core CPU / 8-core GPU",
      "display": "13.6-inch Liquid Retina Display with True Tone (500 nits)",
      "battery_life": "Up to 18 hours",
      "memory": "8GB Unified Memory",
      "storage": "256GB Superfast SSD",
      "weight": "1.24 kg lightweight fanless design"
    },
    "reviews": [
      {
        "author": "Kunal J",
        "rating": 5,
        "text": "Fast compilation and 16 hours real world battery life. Perfect machine.",
        "date": "2024-11-10"
      }
    ]
  },
  {
    "id": "apple-macbook-air-m2-flipkart",
    "product_id": "apple-macbook-air-m2-flipkart",
    "groupId": "apple-macbook-air-m2",
    "group_id": "apple-macbook-air-m2",
    "title": "Apple MacBook Air 13.6-inch with M2 Chip (8GB Unified Memory, 256GB SSD) (FLIPKART)",
    "name": "Apple MacBook Air 13.6-inch with M2 Chip (8GB Unified Memory, 256GB SSD)",
    "product_name": "Apple MacBook Air 13.6-inch with M2 Chip (8GB Unified Memory, 256GB SSD)",
    "brand": "Apple",
    "category": "electronics",
    "platform": "flipkart",
    "price": 83990,
    "originalPrice": 99900,
    "original_price": 99900,
    "discountPercent": 16,
    "discount_percent": 16,
    "rating": 4.8,
    "reviewCount": 6720,
    "review_count": 6720,
    "deliveryEstimate": "2-3 days",
    "delivery_estimate": "2-3 days",
    "imageUrl": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=900&auto=format&fit=crop&q=80",
    "image_url": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=900&auto=format&fit=crop&q=80",
    "images": [
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=900&auto=format&fit=crop&q=80"
    ],
    "dimensions": {
      "width": "30.4 cm",
      "height": "21.5 cm",
      "depth": "1.13 cm",
      "weight": "1.24 kg"
    },
    "price_history": [
      {
        "month": "May",
        "amazon": 95189,
        "flipkart": 92389,
        "myntra": 101085
      },
      {
        "month": "Jun",
        "amazon": 91789,
        "flipkart": 89869,
        "myntra": 96690
      },
      {
        "month": "Jul",
        "amazon": 89240,
        "flipkart": 87350,
        "myntra": 94932
      },
      {
        "month": "Aug",
        "amazon": 86690,
        "flipkart": 89029,
        "myntra": 91416
      },
      {
        "month": "Sep",
        "amazon": 83290,
        "flipkart": 85670,
        "myntra": 89658
      },
      {
        "month": "Current",
        "amazon": 84990,
        "flipkart": 83990,
        "myntra": 87900
      }
    ],
    "priceHistory": [
      {
        "month": "May",
        "amazon": 95189,
        "flipkart": 92389,
        "myntra": 101085
      },
      {
        "month": "Jun",
        "amazon": 91789,
        "flipkart": 89869,
        "myntra": 96690
      },
      {
        "month": "Jul",
        "amazon": 89240,
        "flipkart": 87350,
        "myntra": 94932
      },
      {
        "month": "Aug",
        "amazon": 86690,
        "flipkart": 89029,
        "myntra": 91416
      },
      {
        "month": "Sep",
        "amazon": 83290,
        "flipkart": 85670,
        "myntra": 89658
      },
      {
        "month": "Current",
        "amazon": 84990,
        "flipkart": 83990,
        "myntra": 87900
      }
    ],
    "productUrl": "https://www.flipkart.com/apple-macbook-air-m2",
    "product_url": "https://www.flipkart.com/apple-macbook-air-m2",
    "seller": "SuperComNet",
    "inStock": true,
    "in_stock": true,
    "sentiment": "green",
    "sentimentScore": 96,
    "best_overall_score": 78,
    "is_best_overall": false,
    "isBestOverall": false,
    "whyBuy": "Top rated electronics pick with 16% off and verified fast shipping.",
    "why_buy": "Top rated electronics pick with 16% off and verified fast shipping.",
    "reviewSummary": "Customer sentiment is strongly positive for Apple build quality and performance.",
    "review_summary": "Customer sentiment is strongly positive for Apple build quality and performance.",
    "specs": {
      "processor": "Apple M2 8-core CPU / 8-core GPU",
      "display": "13.6-inch Liquid Retina Display with True Tone (500 nits)",
      "battery_life": "Up to 18 hours",
      "memory": "8GB Unified Memory",
      "storage": "256GB Superfast SSD",
      "weight": "1.24 kg lightweight fanless design"
    },
    "reviews": [
      {
        "author": "Ananya P",
        "rating": 5,
        "text": "Midnight finish is gorgeous. Fanless design means zero noise.",
        "date": "2024-10-28"
      }
    ]
  },
  {
    "id": "apple-macbook-air-m2-myntra",
    "product_id": "apple-macbook-air-m2-myntra",
    "groupId": "apple-macbook-air-m2",
    "group_id": "apple-macbook-air-m2",
    "title": "Apple MacBook Air 13.6-inch with M2 Chip (8GB Unified Memory, 256GB SSD) (MYNTRA)",
    "name": "Apple MacBook Air 13.6-inch with M2 Chip (8GB Unified Memory, 256GB SSD)",
    "product_name": "Apple MacBook Air 13.6-inch with M2 Chip (8GB Unified Memory, 256GB SSD)",
    "brand": "Apple",
    "category": "electronics",
    "platform": "myntra",
    "price": 87900,
    "originalPrice": 99900,
    "original_price": 99900,
    "discountPercent": 12,
    "discount_percent": 12,
    "rating": 4.8,
    "reviewCount": 540,
    "review_count": 540,
    "deliveryEstimate": "3-4 days",
    "delivery_estimate": "3-4 days",
    "imageUrl": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=900&auto=format&fit=crop&q=80",
    "image_url": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=900&auto=format&fit=crop&q=80",
    "images": [
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=900&auto=format&fit=crop&q=80"
    ],
    "dimensions": {
      "width": "30.4 cm",
      "height": "21.5 cm",
      "depth": "1.13 cm",
      "weight": "1.24 kg"
    },
    "price_history": [
      {
        "month": "May",
        "amazon": 95189,
        "flipkart": 92389,
        "myntra": 101085
      },
      {
        "month": "Jun",
        "amazon": 91789,
        "flipkart": 89869,
        "myntra": 96690
      },
      {
        "month": "Jul",
        "amazon": 89240,
        "flipkart": 87350,
        "myntra": 94932
      },
      {
        "month": "Aug",
        "amazon": 86690,
        "flipkart": 89029,
        "myntra": 91416
      },
      {
        "month": "Sep",
        "amazon": 83290,
        "flipkart": 85670,
        "myntra": 89658
      },
      {
        "month": "Current",
        "amazon": 84990,
        "flipkart": 83990,
        "myntra": 87900
      }
    ],
    "priceHistory": [
      {
        "month": "May",
        "amazon": 95189,
        "flipkart": 92389,
        "myntra": 101085
      },
      {
        "month": "Jun",
        "amazon": 91789,
        "flipkart": 89869,
        "myntra": 96690
      },
      {
        "month": "Jul",
        "amazon": 89240,
        "flipkart": 87350,
        "myntra": 94932
      },
      {
        "month": "Aug",
        "amazon": 86690,
        "flipkart": 89029,
        "myntra": 91416
      },
      {
        "month": "Sep",
        "amazon": 83290,
        "flipkart": 85670,
        "myntra": 89658
      },
      {
        "month": "Current",
        "amazon": 84990,
        "flipkart": 83990,
        "myntra": 87900
      }
    ],
    "productUrl": "https://www.myntra.com/laptops/apple-macbook-air-m2",
    "product_url": "https://www.myntra.com/laptops/apple-macbook-air-m2",
    "seller": "Apple Official Store",
    "inStock": true,
    "in_stock": true,
    "sentiment": "green",
    "sentimentScore": 96,
    "best_overall_score": 77,
    "is_best_overall": false,
    "isBestOverall": false,
    "whyBuy": "Top rated electronics pick with 12% off and verified fast shipping.",
    "why_buy": "Top rated electronics pick with 12% off and verified fast shipping.",
    "reviewSummary": "Customer sentiment is strongly positive for Apple build quality and performance.",
    "review_summary": "Customer sentiment is strongly positive for Apple build quality and performance.",
    "specs": {
      "processor": "Apple M2 8-core CPU / 8-core GPU",
      "display": "13.6-inch Liquid Retina Display with True Tone (500 nits)",
      "battery_life": "Up to 18 hours",
      "memory": "8GB Unified Memory",
      "storage": "256GB Superfast SSD",
      "weight": "1.24 kg lightweight fanless design"
    },
    "reviews": [
      {
        "author": "Devendra R",
        "rating": 5,
        "text": "Original packaging and verified battery health.",
        "date": "2024-11-15"
      }
    ]
  },
  {
    "id": "samsung-galaxy-s24-ultra-amazon",
    "product_id": "samsung-galaxy-s24-ultra-amazon",
    "groupId": "samsung-galaxy-s24-ultra",
    "group_id": "samsung-galaxy-s24-ultra",
    "title": "Samsung Galaxy S24 Ultra 5G (Titanium Gray, 12GB RAM, 256GB Storage) (AMAZON)",
    "name": "Samsung Galaxy S24 Ultra 5G (Titanium Gray, 12GB RAM, 256GB Storage)",
    "product_name": "Samsung Galaxy S24 Ultra 5G (Titanium Gray, 12GB RAM, 256GB Storage)",
    "brand": "Samsung",
    "category": "electronics",
    "platform": "amazon",
    "price": 119999,
    "originalPrice": 134999,
    "original_price": 134999,
    "discountPercent": 11,
    "discount_percent": 11,
    "rating": 4.7,
    "reviewCount": 4890,
    "review_count": 4890,
    "deliveryEstimate": "1-2 days",
    "delivery_estimate": "1-2 days",
    "imageUrl": "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=900&auto=format&fit=crop&q=80",
    "image_url": "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=900&auto=format&fit=crop&q=80",
    "images": [
      "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=900&auto=format&fit=crop&q=80"
    ],
    "dimensions": {
      "width": "7.9 cm",
      "height": "16.2 cm",
      "depth": "0.86 cm",
      "weight": "232g"
    },
    "price_history": [
      {
        "month": "May",
        "amazon": 134399,
        "flipkart": 130349,
        "myntra": 141449
      },
      {
        "month": "Jun",
        "amazon": 129599,
        "flipkart": 126794,
        "myntra": 135299
      },
      {
        "month": "Jul",
        "amazon": 125999,
        "flipkart": 123239,
        "myntra": 132839
      },
      {
        "month": "Aug",
        "amazon": 122399,
        "flipkart": 125609,
        "myntra": 127919
      },
      {
        "month": "Sep",
        "amazon": 117599,
        "flipkart": 120869,
        "myntra": 125459
      },
      {
        "month": "Current",
        "amazon": 119999,
        "flipkart": 118499,
        "myntra": 122999
      }
    ],
    "priceHistory": [
      {
        "month": "May",
        "amazon": 134399,
        "flipkart": 130349,
        "myntra": 141449
      },
      {
        "month": "Jun",
        "amazon": 129599,
        "flipkart": 126794,
        "myntra": 135299
      },
      {
        "month": "Jul",
        "amazon": 125999,
        "flipkart": 123239,
        "myntra": 132839
      },
      {
        "month": "Aug",
        "amazon": 122399,
        "flipkart": 125609,
        "myntra": 127919
      },
      {
        "month": "Sep",
        "amazon": 117599,
        "flipkart": 120869,
        "myntra": 125459
      },
      {
        "month": "Current",
        "amazon": 119999,
        "flipkart": 118499,
        "myntra": 122999
      }
    ],
    "productUrl": "https://www.amazon.in/dp/B0CS5XNFXZ",
    "product_url": "https://www.amazon.in/dp/B0CS5XNFXZ",
    "seller": "STPL Exclusive (Amazon Prime)",
    "inStock": true,
    "in_stock": true,
    "sentiment": "green",
    "sentimentScore": 94,
    "best_overall_score": 75,
    "is_best_overall": false,
    "isBestOverall": false,
    "whyBuy": "Top rated electronics pick with 11% off and verified fast shipping.",
    "why_buy": "Top rated electronics pick with 11% off and verified fast shipping.",
    "reviewSummary": "Customer sentiment is strongly positive for Samsung build quality and performance.",
    "review_summary": "Customer sentiment is strongly positive for Samsung build quality and performance.",
    "specs": {
      "display": "6.8-inch Dynamic AMOLED 2X 120Hz Anti-Reflective (2600 nits)",
      "processor": "Snapdragon 8 Gen 3 for Galaxy",
      "camera": "200MP Quad Camera with 5x Optical Periscope & Galaxy AI",
      "battery": "5000mAh with 45W Super Fast Charging",
      "s_pen": "Built-in S-Pen with Air Actions"
    },
    "reviews": [
      {
        "author": "Sameer N",
        "rating": 5,
        "text": "Galaxy AI zoom photography and Circle to Search work flawlessly.",
        "date": "2024-11-18"
      }
    ]
  },
  {
    "id": "samsung-galaxy-s24-ultra-flipkart",
    "product_id": "samsung-galaxy-s24-ultra-flipkart",
    "groupId": "samsung-galaxy-s24-ultra",
    "group_id": "samsung-galaxy-s24-ultra",
    "title": "Samsung Galaxy S24 Ultra 5G (Titanium Gray, 12GB RAM, 256GB Storage) (FLIPKART)",
    "name": "Samsung Galaxy S24 Ultra 5G (Titanium Gray, 12GB RAM, 256GB Storage)",
    "product_name": "Samsung Galaxy S24 Ultra 5G (Titanium Gray, 12GB RAM, 256GB Storage)",
    "brand": "Samsung",
    "category": "electronics",
    "platform": "flipkart",
    "price": 118499,
    "originalPrice": 134999,
    "original_price": 134999,
    "discountPercent": 12,
    "discount_percent": 12,
    "rating": 4.6,
    "reviewCount": 3120,
    "review_count": 3120,
    "deliveryEstimate": "2-3 days",
    "delivery_estimate": "2-3 days",
    "imageUrl": "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=900&auto=format&fit=crop&q=80",
    "image_url": "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=900&auto=format&fit=crop&q=80",
    "images": [
      "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=900&auto=format&fit=crop&q=80"
    ],
    "dimensions": {
      "width": "7.9 cm",
      "height": "16.2 cm",
      "depth": "0.86 cm",
      "weight": "232g"
    },
    "price_history": [
      {
        "month": "May",
        "amazon": 134399,
        "flipkart": 130349,
        "myntra": 141449
      },
      {
        "month": "Jun",
        "amazon": 129599,
        "flipkart": 126794,
        "myntra": 135299
      },
      {
        "month": "Jul",
        "amazon": 125999,
        "flipkart": 123239,
        "myntra": 132839
      },
      {
        "month": "Aug",
        "amazon": 122399,
        "flipkart": 125609,
        "myntra": 127919
      },
      {
        "month": "Sep",
        "amazon": 117599,
        "flipkart": 120869,
        "myntra": 125459
      },
      {
        "month": "Current",
        "amazon": 119999,
        "flipkart": 118499,
        "myntra": 122999
      }
    ],
    "priceHistory": [
      {
        "month": "May",
        "amazon": 134399,
        "flipkart": 130349,
        "myntra": 141449
      },
      {
        "month": "Jun",
        "amazon": 129599,
        "flipkart": 126794,
        "myntra": 135299
      },
      {
        "month": "Jul",
        "amazon": 125999,
        "flipkart": 123239,
        "myntra": 132839
      },
      {
        "month": "Aug",
        "amazon": 122399,
        "flipkart": 125609,
        "myntra": 127919
      },
      {
        "month": "Sep",
        "amazon": 117599,
        "flipkart": 120869,
        "myntra": 125459
      },
      {
        "month": "Current",
        "amazon": 119999,
        "flipkart": 118499,
        "myntra": 122999
      }
    ],
    "productUrl": "https://www.flipkart.com/samsung-galaxy-s24-ultra",
    "product_url": "https://www.flipkart.com/samsung-galaxy-s24-ultra",
    "seller": "FSAssured Mobile Store",
    "inStock": true,
    "in_stock": true,
    "sentiment": "green",
    "sentimentScore": 92,
    "best_overall_score": 74,
    "is_best_overall": false,
    "isBestOverall": false,
    "whyBuy": "Top rated electronics pick with 12% off and verified fast shipping.",
    "why_buy": "Top rated electronics pick with 12% off and verified fast shipping.",
    "reviewSummary": "Customer sentiment is strongly positive for Samsung build quality and performance.",
    "review_summary": "Customer sentiment is strongly positive for Samsung build quality and performance.",
    "specs": {
      "display": "6.8-inch Dynamic AMOLED 2X 120Hz Anti-Reflective (2600 nits)",
      "processor": "Snapdragon 8 Gen 3 for Galaxy",
      "camera": "200MP Quad Camera with 5x Optical Periscope & Galaxy AI",
      "battery": "5000mAh with 45W Super Fast Charging",
      "s_pen": "Built-in S-Pen with Air Actions"
    },
    "reviews": [
      {
        "author": "Deepak G",
        "rating": 5,
        "text": "Flat display with anti-reflective glass makes outdoor viewing crystal clear.",
        "date": "2024-10-30"
      }
    ]
  },
  {
    "id": "samsung-galaxy-s24-ultra-myntra",
    "product_id": "samsung-galaxy-s24-ultra-myntra",
    "groupId": "samsung-galaxy-s24-ultra",
    "group_id": "samsung-galaxy-s24-ultra",
    "title": "Samsung Galaxy S24 Ultra 5G (Titanium Gray, 12GB RAM, 256GB Storage) (MYNTRA)",
    "name": "Samsung Galaxy S24 Ultra 5G (Titanium Gray, 12GB RAM, 256GB Storage)",
    "product_name": "Samsung Galaxy S24 Ultra 5G (Titanium Gray, 12GB RAM, 256GB Storage)",
    "brand": "Samsung",
    "category": "electronics",
    "platform": "myntra",
    "price": 122999,
    "originalPrice": 134999,
    "original_price": 134999,
    "discountPercent": 9,
    "discount_percent": 9,
    "rating": 4.6,
    "reviewCount": 320,
    "review_count": 320,
    "deliveryEstimate": "3-4 days",
    "delivery_estimate": "3-4 days",
    "imageUrl": "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=900&auto=format&fit=crop&q=80",
    "image_url": "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=900&auto=format&fit=crop&q=80",
    "images": [
      "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=900&auto=format&fit=crop&q=80"
    ],
    "dimensions": {
      "width": "7.9 cm",
      "height": "16.2 cm",
      "depth": "0.86 cm",
      "weight": "232g"
    },
    "price_history": [
      {
        "month": "May",
        "amazon": 134399,
        "flipkart": 130349,
        "myntra": 141449
      },
      {
        "month": "Jun",
        "amazon": 129599,
        "flipkart": 126794,
        "myntra": 135299
      },
      {
        "month": "Jul",
        "amazon": 125999,
        "flipkart": 123239,
        "myntra": 132839
      },
      {
        "month": "Aug",
        "amazon": 122399,
        "flipkart": 125609,
        "myntra": 127919
      },
      {
        "month": "Sep",
        "amazon": 117599,
        "flipkart": 120869,
        "myntra": 125459
      },
      {
        "month": "Current",
        "amazon": 119999,
        "flipkart": 118499,
        "myntra": 122999
      }
    ],
    "priceHistory": [
      {
        "month": "May",
        "amazon": 134399,
        "flipkart": 130349,
        "myntra": 141449
      },
      {
        "month": "Jun",
        "amazon": 129599,
        "flipkart": 126794,
        "myntra": 135299
      },
      {
        "month": "Jul",
        "amazon": 125999,
        "flipkart": 123239,
        "myntra": 132839
      },
      {
        "month": "Aug",
        "amazon": 122399,
        "flipkart": 125609,
        "myntra": 127919
      },
      {
        "month": "Sep",
        "amazon": 117599,
        "flipkart": 120869,
        "myntra": 125459
      },
      {
        "month": "Current",
        "amazon": 119999,
        "flipkart": 118499,
        "myntra": 122999
      }
    ],
    "productUrl": "https://www.myntra.com/smartphones/samsung-s24-ultra",
    "product_url": "https://www.myntra.com/smartphones/samsung-s24-ultra",
    "seller": "Samsung Luxe Authorised",
    "inStock": true,
    "in_stock": true,
    "sentiment": "green",
    "sentimentScore": 92,
    "best_overall_score": 73,
    "is_best_overall": false,
    "isBestOverall": false,
    "whyBuy": "Top rated electronics pick with 9% off and verified fast shipping.",
    "why_buy": "Top rated electronics pick with 9% off and verified fast shipping.",
    "reviewSummary": "Customer sentiment is strongly positive for Samsung build quality and performance.",
    "review_summary": "Customer sentiment is strongly positive for Samsung build quality and performance.",
    "specs": {
      "display": "6.8-inch Dynamic AMOLED 2X 120Hz Anti-Reflective (2600 nits)",
      "processor": "Snapdragon 8 Gen 3 for Galaxy",
      "camera": "200MP Quad Camera with 5x Optical Periscope & Galaxy AI",
      "battery": "5000mAh with 45W Super Fast Charging",
      "s_pen": "Built-in S-Pen with Air Actions"
    },
    "reviews": [
      {
        "author": "Pradeep T",
        "rating": 5,
        "text": "Titanium build feels luxurious in the hand.",
        "date": "2024-11-04"
      }
    ]
  },
  {
    "id": "asus-rog-zephyrus-g14-amazon",
    "product_id": "asus-rog-zephyrus-g14-amazon",
    "groupId": "asus-rog-zephyrus-g14",
    "group_id": "asus-rog-zephyrus-g14",
    "title": "ASUS ROG Zephyrus G14 (2024) 3K OLED Gaming Laptop (AMD Ryzen 9, RTX 4060, 16GB/1TB) (AMAZON)",
    "name": "ASUS ROG Zephyrus G14 (2024) 3K OLED Gaming Laptop (AMD Ryzen 9, RTX 4060, 16GB/1TB)",
    "product_name": "ASUS ROG Zephyrus G14 (2024) 3K OLED Gaming Laptop (AMD Ryzen 9, RTX 4060, 16GB/1TB)",
    "brand": "ASUS",
    "category": "electronics",
    "platform": "amazon",
    "price": 154990,
    "originalPrice": 189990,
    "original_price": 189990,
    "discountPercent": 18,
    "discount_percent": 18,
    "rating": 4.7,
    "reviewCount": 2410,
    "review_count": 2410,
    "deliveryEstimate": "2-3 days",
    "delivery_estimate": "2-3 days",
    "imageUrl": "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=900&auto=format&fit=crop&q=80",
    "image_url": "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=900&auto=format&fit=crop&q=80",
    "images": [
      "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1544652478-6653e09f18a2?w=900&auto=format&fit=crop&q=80"
    ],
    "dimensions": {
      "width": "31.1 cm",
      "height": "22.0 cm",
      "depth": "1.59 cm",
      "weight": "1.50 kg"
    },
    "price_history": [
      {
        "month": "May",
        "amazon": 173589,
        "flipkart": 168289,
        "myntra": 183989
      },
      {
        "month": "Jun",
        "amazon": 167389,
        "flipkart": 163699,
        "myntra": 175989
      },
      {
        "month": "Jul",
        "amazon": 162740,
        "flipkart": 159110,
        "myntra": 172789
      },
      {
        "month": "Aug",
        "amazon": 158090,
        "flipkart": 162169,
        "myntra": 166390
      },
      {
        "month": "Sep",
        "amazon": 151890,
        "flipkart": 156050,
        "myntra": 163190
      },
      {
        "month": "Current",
        "amazon": 154990,
        "flipkart": 152990,
        "myntra": 159990
      }
    ],
    "priceHistory": [
      {
        "month": "May",
        "amazon": 173589,
        "flipkart": 168289,
        "myntra": 183989
      },
      {
        "month": "Jun",
        "amazon": 167389,
        "flipkart": 163699,
        "myntra": 175989
      },
      {
        "month": "Jul",
        "amazon": 162740,
        "flipkart": 159110,
        "myntra": 172789
      },
      {
        "month": "Aug",
        "amazon": 158090,
        "flipkart": 162169,
        "myntra": 166390
      },
      {
        "month": "Sep",
        "amazon": 151890,
        "flipkart": 156050,
        "myntra": 163190
      },
      {
        "month": "Current",
        "amazon": 154990,
        "flipkart": 152990,
        "myntra": 159990
      }
    ],
    "productUrl": "https://www.amazon.in/dp/B0CSG6K8L1",
    "product_url": "https://www.amazon.in/dp/B0CSG6K8L1",
    "seller": "Appario Retail",
    "inStock": true,
    "in_stock": true,
    "sentiment": "green",
    "sentimentScore": 94,
    "best_overall_score": 78,
    "is_best_overall": true,
    "isBestOverall": true,
    "whyBuy": "Top rated electronics pick with 18% off and verified fast shipping.",
    "why_buy": "Top rated electronics pick with 18% off and verified fast shipping.",
    "reviewSummary": "Customer sentiment is strongly positive for ASUS build quality and performance.",
    "review_summary": "Customer sentiment is strongly positive for ASUS build quality and performance.",
    "specs": {
      "processor": "AMD Ryzen 9 8945HS Processor with Ryzen AI",
      "graphics": "NVIDIA GeForce RTX 4060 8GB GDDR6 (90W TGP)",
      "display": "14-inch 3K 120Hz 0.2ms ROG Nebula OLED (100% DCI-P3)",
      "weight": "1.50 kg ultra-portable CNC aluminum chassis"
    },
    "reviews": [
      {
        "author": "Varun K",
        "rating": 5,
        "text": "OLED panel is breathtaking. Runs Cyberpunk over 75fps with DLSS.",
        "date": "2024-11-15"
      }
    ]
  },
  {
    "id": "asus-rog-zephyrus-g14-flipkart",
    "product_id": "asus-rog-zephyrus-g14-flipkart",
    "groupId": "asus-rog-zephyrus-g14",
    "group_id": "asus-rog-zephyrus-g14",
    "title": "ASUS ROG Zephyrus G14 (2024) 3K OLED Gaming Laptop (AMD Ryzen 9, RTX 4060, 16GB/1TB) (FLIPKART)",
    "name": "ASUS ROG Zephyrus G14 (2024) 3K OLED Gaming Laptop (AMD Ryzen 9, RTX 4060, 16GB/1TB)",
    "product_name": "ASUS ROG Zephyrus G14 (2024) 3K OLED Gaming Laptop (AMD Ryzen 9, RTX 4060, 16GB/1TB)",
    "brand": "ASUS",
    "category": "electronics",
    "platform": "flipkart",
    "price": 152990,
    "originalPrice": 189990,
    "original_price": 189990,
    "discountPercent": 19,
    "discount_percent": 19,
    "rating": 4.6,
    "reviewCount": 1890,
    "review_count": 1890,
    "deliveryEstimate": "3-4 days",
    "delivery_estimate": "3-4 days",
    "imageUrl": "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=900&auto=format&fit=crop&q=80",
    "image_url": "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=900&auto=format&fit=crop&q=80",
    "images": [
      "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1544652478-6653e09f18a2?w=900&auto=format&fit=crop&q=80"
    ],
    "dimensions": {
      "width": "31.1 cm",
      "height": "22.0 cm",
      "depth": "1.59 cm",
      "weight": "1.50 kg"
    },
    "price_history": [
      {
        "month": "May",
        "amazon": 173589,
        "flipkart": 168289,
        "myntra": 183989
      },
      {
        "month": "Jun",
        "amazon": 167389,
        "flipkart": 163699,
        "myntra": 175989
      },
      {
        "month": "Jul",
        "amazon": 162740,
        "flipkart": 159110,
        "myntra": 172789
      },
      {
        "month": "Aug",
        "amazon": 158090,
        "flipkart": 162169,
        "myntra": 166390
      },
      {
        "month": "Sep",
        "amazon": 151890,
        "flipkart": 156050,
        "myntra": 163190
      },
      {
        "month": "Current",
        "amazon": 154990,
        "flipkart": 152990,
        "myntra": 159990
      }
    ],
    "priceHistory": [
      {
        "month": "May",
        "amazon": 173589,
        "flipkart": 168289,
        "myntra": 183989
      },
      {
        "month": "Jun",
        "amazon": 167389,
        "flipkart": 163699,
        "myntra": 175989
      },
      {
        "month": "Jul",
        "amazon": 162740,
        "flipkart": 159110,
        "myntra": 172789
      },
      {
        "month": "Aug",
        "amazon": 158090,
        "flipkart": 162169,
        "myntra": 166390
      },
      {
        "month": "Sep",
        "amazon": 151890,
        "flipkart": 156050,
        "myntra": 163190
      },
      {
        "month": "Current",
        "amazon": 154990,
        "flipkart": 152990,
        "myntra": 159990
      }
    ],
    "productUrl": "https://www.flipkart.com/asus-rog-zephyrus-g14",
    "product_url": "https://www.flipkart.com/asus-rog-zephyrus-g14",
    "seller": "SuperComNet Gaming",
    "inStock": true,
    "in_stock": true,
    "sentiment": "green",
    "sentimentScore": 92,
    "best_overall_score": 77,
    "is_best_overall": false,
    "isBestOverall": false,
    "whyBuy": "Top rated electronics pick with 19% off and verified fast shipping.",
    "why_buy": "Top rated electronics pick with 19% off and verified fast shipping.",
    "reviewSummary": "Customer sentiment is strongly positive for ASUS build quality and performance.",
    "review_summary": "Customer sentiment is strongly positive for ASUS build quality and performance.",
    "specs": {
      "processor": "AMD Ryzen 9 8945HS Processor with Ryzen AI",
      "graphics": "NVIDIA GeForce RTX 4060 8GB GDDR6 (90W TGP)",
      "display": "14-inch 3K 120Hz 0.2ms ROG Nebula OLED (100% DCI-P3)",
      "weight": "1.50 kg ultra-portable CNC aluminum chassis"
    },
    "reviews": [
      {
        "author": "Aditya N",
        "rating": 5,
        "text": "CNC aluminum body is rock solid and very portable.",
        "date": "2024-10-25"
      }
    ]
  },
  {
    "id": "asus-rog-zephyrus-g14-myntra",
    "product_id": "asus-rog-zephyrus-g14-myntra",
    "groupId": "asus-rog-zephyrus-g14",
    "group_id": "asus-rog-zephyrus-g14",
    "title": "ASUS ROG Zephyrus G14 (2024) 3K OLED Gaming Laptop (AMD Ryzen 9, RTX 4060, 16GB/1TB) (MYNTRA)",
    "name": "ASUS ROG Zephyrus G14 (2024) 3K OLED Gaming Laptop (AMD Ryzen 9, RTX 4060, 16GB/1TB)",
    "product_name": "ASUS ROG Zephyrus G14 (2024) 3K OLED Gaming Laptop (AMD Ryzen 9, RTX 4060, 16GB/1TB)",
    "brand": "ASUS",
    "category": "electronics",
    "platform": "myntra",
    "price": 159990,
    "originalPrice": 189990,
    "original_price": 189990,
    "discountPercent": 15,
    "discount_percent": 15,
    "rating": 4.7,
    "reviewCount": 180,
    "review_count": 180,
    "deliveryEstimate": "3-5 days",
    "delivery_estimate": "3-5 days",
    "imageUrl": "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=900&auto=format&fit=crop&q=80",
    "image_url": "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=900&auto=format&fit=crop&q=80",
    "images": [
      "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1544652478-6653e09f18a2?w=900&auto=format&fit=crop&q=80"
    ],
    "dimensions": {
      "width": "31.1 cm",
      "height": "22.0 cm",
      "depth": "1.59 cm",
      "weight": "1.50 kg"
    },
    "price_history": [
      {
        "month": "May",
        "amazon": 173589,
        "flipkart": 168289,
        "myntra": 183989
      },
      {
        "month": "Jun",
        "amazon": 167389,
        "flipkart": 163699,
        "myntra": 175989
      },
      {
        "month": "Jul",
        "amazon": 162740,
        "flipkart": 159110,
        "myntra": 172789
      },
      {
        "month": "Aug",
        "amazon": 158090,
        "flipkart": 162169,
        "myntra": 166390
      },
      {
        "month": "Sep",
        "amazon": 151890,
        "flipkart": 156050,
        "myntra": 163190
      },
      {
        "month": "Current",
        "amazon": 154990,
        "flipkart": 152990,
        "myntra": 159990
      }
    ],
    "priceHistory": [
      {
        "month": "May",
        "amazon": 173589,
        "flipkart": 168289,
        "myntra": 183989
      },
      {
        "month": "Jun",
        "amazon": 167389,
        "flipkart": 163699,
        "myntra": 175989
      },
      {
        "month": "Jul",
        "amazon": 162740,
        "flipkart": 159110,
        "myntra": 172789
      },
      {
        "month": "Aug",
        "amazon": 158090,
        "flipkart": 162169,
        "myntra": 166390
      },
      {
        "month": "Sep",
        "amazon": 151890,
        "flipkart": 156050,
        "myntra": 163190
      },
      {
        "month": "Current",
        "amazon": 154990,
        "flipkart": 152990,
        "myntra": 159990
      }
    ],
    "productUrl": "https://www.myntra.com/laptops/asus-rog-g14",
    "product_url": "https://www.myntra.com/laptops/asus-rog-g14",
    "seller": "ROG Exclusive Store",
    "inStock": true,
    "in_stock": true,
    "sentiment": "green",
    "sentimentScore": 94,
    "best_overall_score": 77,
    "is_best_overall": false,
    "isBestOverall": false,
    "whyBuy": "Top rated electronics pick with 15% off and verified fast shipping.",
    "why_buy": "Top rated electronics pick with 15% off and verified fast shipping.",
    "reviewSummary": "Customer sentiment is strongly positive for ASUS build quality and performance.",
    "review_summary": "Customer sentiment is strongly positive for ASUS build quality and performance.",
    "specs": {
      "processor": "AMD Ryzen 9 8945HS Processor with Ryzen AI",
      "graphics": "NVIDIA GeForce RTX 4060 8GB GDDR6 (90W TGP)",
      "display": "14-inch 3K 120Hz 0.2ms ROG Nebula OLED (100% DCI-P3)",
      "weight": "1.50 kg ultra-portable CNC aluminum chassis"
    },
    "reviews": [
      {
        "author": "Kunal M",
        "rating": 5,
        "text": "Slash lighting strip looks amazing.",
        "date": "2024-11-20"
      }
    ]
  },
  {
    "id": "playstation-5-slim-amazon",
    "product_id": "playstation-5-slim-amazon",
    "groupId": "playstation-5-slim",
    "group_id": "playstation-5-slim",
    "title": "Sony PlayStation 5 Console Slim (Disc Edition, 1TB SSD) (AMAZON)",
    "name": "Sony PlayStation 5 Console Slim (Disc Edition, 1TB SSD)",
    "product_name": "Sony PlayStation 5 Console Slim (Disc Edition, 1TB SSD)",
    "brand": "Sony",
    "category": "electronics",
    "platform": "amazon",
    "price": 49990,
    "originalPrice": 54990,
    "original_price": 54990,
    "discountPercent": 9,
    "discount_percent": 9,
    "rating": 4.9,
    "reviewCount": 8700,
    "review_count": 8700,
    "deliveryEstimate": "1-2 days",
    "delivery_estimate": "1-2 days",
    "imageUrl": "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=900&auto=format&fit=crop&q=80",
    "image_url": "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=900&auto=format&fit=crop&q=80",
    "images": [
      "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1592840496073-6701b22e11d0?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1622297845775-5ff3fef71d13?w=900&auto=format&fit=crop&q=80"
    ],
    "dimensions": {
      "width": "35.8 cm",
      "height": "9.6 cm",
      "depth": "21.6 cm",
      "weight": "3.2 kg"
    },
    "price_history": [
      {
        "month": "May",
        "amazon": 55989,
        "flipkart": 53889,
        "myntra": 59788
      },
      {
        "month": "Jun",
        "amazon": 53989,
        "flipkart": 52419,
        "myntra": 57189
      },
      {
        "month": "Jul",
        "amazon": 52490,
        "flipkart": 50950,
        "myntra": 56149
      },
      {
        "month": "Aug",
        "amazon": 50990,
        "flipkart": 51929,
        "myntra": 54070
      },
      {
        "month": "Sep",
        "amazon": 48990,
        "flipkart": 49970,
        "myntra": 53030
      },
      {
        "month": "Current",
        "amazon": 49990,
        "flipkart": 48990,
        "myntra": 51990
      }
    ],
    "priceHistory": [
      {
        "month": "May",
        "amazon": 55989,
        "flipkart": 53889,
        "myntra": 59788
      },
      {
        "month": "Jun",
        "amazon": 53989,
        "flipkart": 52419,
        "myntra": 57189
      },
      {
        "month": "Jul",
        "amazon": 52490,
        "flipkart": 50950,
        "myntra": 56149
      },
      {
        "month": "Aug",
        "amazon": 50990,
        "flipkart": 51929,
        "myntra": 54070
      },
      {
        "month": "Sep",
        "amazon": 48990,
        "flipkart": 49970,
        "myntra": 53030
      },
      {
        "month": "Current",
        "amazon": 49990,
        "flipkart": 48990,
        "myntra": 51990
      }
    ],
    "productUrl": "https://www.amazon.in/dp/B0CY5Q2N1W",
    "product_url": "https://www.amazon.in/dp/B0CY5Q2N1W",
    "seller": "Electronics Bazaar",
    "inStock": true,
    "in_stock": true,
    "sentiment": "green",
    "sentimentScore": 98,
    "best_overall_score": 77,
    "is_best_overall": false,
    "isBestOverall": false,
    "whyBuy": "Top rated electronics pick with 9% off and verified fast shipping.",
    "why_buy": "Top rated electronics pick with 9% off and verified fast shipping.",
    "reviewSummary": "Customer sentiment is strongly positive for Sony build quality and performance.",
    "review_summary": "Customer sentiment is strongly positive for Sony build quality and performance.",
    "specs": {
      "storage": "1TB Ultra-High Speed NVMe SSD",
      "resolution": "4K 120Hz Gaming, Ray Tracing, HDR",
      "audio": "Tempest 3D AudioTech",
      "controller": "DualSense Wireless Controller with Haptic Feedback"
    },
    "reviews": [
      {
        "author": "Nikhil K",
        "rating": 5,
        "text": "Spider-Man 2 and God of War look incredible at 4K 60fps.",
        "date": "2024-11-14"
      }
    ]
  },
  {
    "id": "playstation-5-slim-flipkart",
    "product_id": "playstation-5-slim-flipkart",
    "groupId": "playstation-5-slim",
    "group_id": "playstation-5-slim",
    "title": "Sony PlayStation 5 Console Slim (Disc Edition, 1TB SSD) (FLIPKART)",
    "name": "Sony PlayStation 5 Console Slim (Disc Edition, 1TB SSD)",
    "product_name": "Sony PlayStation 5 Console Slim (Disc Edition, 1TB SSD)",
    "brand": "Sony",
    "category": "electronics",
    "platform": "flipkart",
    "price": 48990,
    "originalPrice": 54990,
    "original_price": 54990,
    "discountPercent": 11,
    "discount_percent": 11,
    "rating": 4.8,
    "reviewCount": 5400,
    "review_count": 5400,
    "deliveryEstimate": "2-4 days",
    "delivery_estimate": "2-4 days",
    "imageUrl": "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=900&auto=format&fit=crop&q=80",
    "image_url": "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=900&auto=format&fit=crop&q=80",
    "images": [
      "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1592840496073-6701b22e11d0?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1622297845775-5ff3fef71d13?w=900&auto=format&fit=crop&q=80"
    ],
    "dimensions": {
      "width": "35.8 cm",
      "height": "9.6 cm",
      "depth": "21.6 cm",
      "weight": "3.2 kg"
    },
    "price_history": [
      {
        "month": "May",
        "amazon": 55989,
        "flipkart": 53889,
        "myntra": 59788
      },
      {
        "month": "Jun",
        "amazon": 53989,
        "flipkart": 52419,
        "myntra": 57189
      },
      {
        "month": "Jul",
        "amazon": 52490,
        "flipkart": 50950,
        "myntra": 56149
      },
      {
        "month": "Aug",
        "amazon": 50990,
        "flipkart": 51929,
        "myntra": 54070
      },
      {
        "month": "Sep",
        "amazon": 48990,
        "flipkart": 49970,
        "myntra": 53030
      },
      {
        "month": "Current",
        "amazon": 49990,
        "flipkart": 48990,
        "myntra": 51990
      }
    ],
    "priceHistory": [
      {
        "month": "May",
        "amazon": 55989,
        "flipkart": 53889,
        "myntra": 59788
      },
      {
        "month": "Jun",
        "amazon": 53989,
        "flipkart": 52419,
        "myntra": 57189
      },
      {
        "month": "Jul",
        "amazon": 52490,
        "flipkart": 50950,
        "myntra": 56149
      },
      {
        "month": "Aug",
        "amazon": 50990,
        "flipkart": 51929,
        "myntra": 54070
      },
      {
        "month": "Sep",
        "amazon": 48990,
        "flipkart": 49970,
        "myntra": 53030
      },
      {
        "month": "Current",
        "amazon": 49990,
        "flipkart": 48990,
        "myntra": 51990
      }
    ],
    "productUrl": "https://www.flipkart.com/sony-playstation-5-slim",
    "product_url": "https://www.flipkart.com/sony-playstation-5-slim",
    "seller": "RetailNet Gaming",
    "inStock": true,
    "in_stock": true,
    "sentiment": "green",
    "sentimentScore": 96,
    "best_overall_score": 76,
    "is_best_overall": false,
    "isBestOverall": false,
    "whyBuy": "Top rated electronics pick with 11% off and verified fast shipping.",
    "why_buy": "Top rated electronics pick with 11% off and verified fast shipping.",
    "reviewSummary": "Customer sentiment is strongly positive for Sony build quality and performance.",
    "review_summary": "Customer sentiment is strongly positive for Sony build quality and performance.",
    "specs": {
      "storage": "1TB Ultra-High Speed NVMe SSD",
      "resolution": "4K 120Hz Gaming, Ray Tracing, HDR",
      "audio": "Tempest 3D AudioTech",
      "controller": "DualSense Wireless Controller with Haptic Feedback"
    },
    "reviews": [
      {
        "author": "Siddharth B",
        "rating": 5,
        "text": "Much smaller and lighter than original launch PS5.",
        "date": "2024-10-25"
      }
    ]
  },
  {
    "id": "playstation-5-slim-myntra",
    "product_id": "playstation-5-slim-myntra",
    "groupId": "playstation-5-slim",
    "group_id": "playstation-5-slim",
    "title": "Sony PlayStation 5 Console Slim (Disc Edition, 1TB SSD) (MYNTRA)",
    "name": "Sony PlayStation 5 Console Slim (Disc Edition, 1TB SSD)",
    "product_name": "Sony PlayStation 5 Console Slim (Disc Edition, 1TB SSD)",
    "brand": "Sony",
    "category": "electronics",
    "platform": "myntra",
    "price": 51990,
    "originalPrice": 54990,
    "original_price": 54990,
    "discountPercent": 5,
    "discount_percent": 5,
    "rating": 4.8,
    "reviewCount": 450,
    "review_count": 450,
    "deliveryEstimate": "3-5 days",
    "delivery_estimate": "3-5 days",
    "imageUrl": "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=900&auto=format&fit=crop&q=80",
    "image_url": "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=900&auto=format&fit=crop&q=80",
    "images": [
      "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1592840496073-6701b22e11d0?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1622297845775-5ff3fef71d13?w=900&auto=format&fit=crop&q=80"
    ],
    "dimensions": {
      "width": "35.8 cm",
      "height": "9.6 cm",
      "depth": "21.6 cm",
      "weight": "3.2 kg"
    },
    "price_history": [
      {
        "month": "May",
        "amazon": 55989,
        "flipkart": 53889,
        "myntra": 59788
      },
      {
        "month": "Jun",
        "amazon": 53989,
        "flipkart": 52419,
        "myntra": 57189
      },
      {
        "month": "Jul",
        "amazon": 52490,
        "flipkart": 50950,
        "myntra": 56149
      },
      {
        "month": "Aug",
        "amazon": 50990,
        "flipkart": 51929,
        "myntra": 54070
      },
      {
        "month": "Sep",
        "amazon": 48990,
        "flipkart": 49970,
        "myntra": 53030
      },
      {
        "month": "Current",
        "amazon": 49990,
        "flipkart": 48990,
        "myntra": 51990
      }
    ],
    "priceHistory": [
      {
        "month": "May",
        "amazon": 55989,
        "flipkart": 53889,
        "myntra": 59788
      },
      {
        "month": "Jun",
        "amazon": 53989,
        "flipkart": 52419,
        "myntra": 57189
      },
      {
        "month": "Jul",
        "amazon": 52490,
        "flipkart": 50950,
        "myntra": 56149
      },
      {
        "month": "Aug",
        "amazon": 50990,
        "flipkart": 51929,
        "myntra": 54070
      },
      {
        "month": "Sep",
        "amazon": 48990,
        "flipkart": 49970,
        "myntra": 53030
      },
      {
        "month": "Current",
        "amazon": 49990,
        "flipkart": 48990,
        "myntra": 51990
      }
    ],
    "productUrl": "https://www.myntra.com/gaming/sony-playstation-5-slim",
    "product_url": "https://www.myntra.com/gaming/sony-playstation-5-slim",
    "seller": "Myntra Gaming Studio",
    "inStock": true,
    "in_stock": true,
    "sentiment": "green",
    "sentimentScore": 96,
    "best_overall_score": 74,
    "is_best_overall": false,
    "isBestOverall": false,
    "whyBuy": "Top rated electronics pick with 5% off and verified fast shipping.",
    "why_buy": "Top rated electronics pick with 5% off and verified fast shipping.",
    "reviewSummary": "Customer sentiment is strongly positive for Sony build quality and performance.",
    "review_summary": "Customer sentiment is strongly positive for Sony build quality and performance.",
    "specs": {
      "storage": "1TB Ultra-High Speed NVMe SSD",
      "resolution": "4K 120Hz Gaming, Ray Tracing, HDR",
      "audio": "Tempest 3D AudioTech",
      "controller": "DualSense Wireless Controller with Haptic Feedback"
    },
    "reviews": [
      {
        "author": "Gaurav S",
        "rating": 5,
        "text": "Fast delivery with secure seal intact.",
        "date": "2024-11-20"
      }
    ]
  },
  {
    "id": "apple-watch-series-9-amazon",
    "product_id": "apple-watch-series-9-amazon",
    "groupId": "apple-watch-series-9",
    "group_id": "apple-watch-series-9",
    "title": "Apple Watch Series 9 GPS 45mm (Midnight Aluminum Case with Sport Band) (AMAZON)",
    "name": "Apple Watch Series 9 GPS 45mm (Midnight Aluminum Case with Sport Band)",
    "product_name": "Apple Watch Series 9 GPS 45mm (Midnight Aluminum Case with Sport Band)",
    "brand": "Apple",
    "category": "electronics",
    "platform": "amazon",
    "price": 38999,
    "originalPrice": 44900,
    "original_price": 44900,
    "discountPercent": 13,
    "discount_percent": 13,
    "rating": 4.7,
    "reviewCount": 6120,
    "review_count": 6120,
    "deliveryEstimate": "1-2 days",
    "delivery_estimate": "1-2 days",
    "imageUrl": "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=900&auto=format&fit=crop&q=80",
    "image_url": "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=900&auto=format&fit=crop&q=80",
    "images": [
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1510017803434-a899398421b3?w=900&auto=format&fit=crop&q=80"
    ],
    "dimensions": {
      "width": "3.8 cm",
      "height": "4.5 cm",
      "depth": "1.07 cm",
      "weight": "38.7g"
    },
    "price_history": [
      {
        "month": "May",
        "amazon": 43679,
        "flipkart": 41789,
        "myntra": 45885
      },
      {
        "month": "Jun",
        "amazon": 42119,
        "flipkart": 40649,
        "myntra": 43890
      },
      {
        "month": "Jul",
        "amazon": 40949,
        "flipkart": 39510,
        "myntra": 43092
      },
      {
        "month": "Aug",
        "amazon": 39779,
        "flipkart": 40269,
        "myntra": 41496
      },
      {
        "month": "Sep",
        "amazon": 38219,
        "flipkart": 38750,
        "myntra": 40698
      },
      {
        "month": "Current",
        "amazon": 38999,
        "flipkart": 37990,
        "myntra": 39900
      }
    ],
    "priceHistory": [
      {
        "month": "May",
        "amazon": 43679,
        "flipkart": 41789,
        "myntra": 45885
      },
      {
        "month": "Jun",
        "amazon": 42119,
        "flipkart": 40649,
        "myntra": 43890
      },
      {
        "month": "Jul",
        "amazon": 40949,
        "flipkart": 39510,
        "myntra": 43092
      },
      {
        "month": "Aug",
        "amazon": 39779,
        "flipkart": 40269,
        "myntra": 41496
      },
      {
        "month": "Sep",
        "amazon": 38219,
        "flipkart": 38750,
        "myntra": 40698
      },
      {
        "month": "Current",
        "amazon": 38999,
        "flipkart": 37990,
        "myntra": 39900
      }
    ],
    "productUrl": "https://www.amazon.in/dp/B0CHWZ8H7H",
    "product_url": "https://www.amazon.in/dp/B0CHWZ8H7H",
    "seller": "Appario Retail",
    "inStock": true,
    "in_stock": true,
    "sentiment": "green",
    "sentimentScore": 94,
    "best_overall_score": 76,
    "is_best_overall": false,
    "isBestOverall": false,
    "whyBuy": "Top rated electronics pick with 13% off and verified fast shipping.",
    "why_buy": "Top rated electronics pick with 13% off and verified fast shipping.",
    "reviewSummary": "Customer sentiment is strongly positive for Apple build quality and performance.",
    "review_summary": "Customer sentiment is strongly positive for Apple build quality and performance.",
    "specs": {
      "display": "Always-On Retina OLED (2000 nits peak brightness)",
      "chip": "S9 SiP with Double Tap gesture",
      "health_sensors": "ECG, Blood Oxygen, Temperature sensor, Crash Detection",
      "battery": "18 hours all-day battery life (36h in Low Power Mode)"
    },
    "reviews": [
      {
        "author": "Vishal M",
        "rating": 5,
        "text": "Double tap gesture is super useful while cooking or driving.",
        "date": "2024-11-09"
      }
    ]
  },
  {
    "id": "apple-watch-series-9-flipkart",
    "product_id": "apple-watch-series-9-flipkart",
    "groupId": "apple-watch-series-9",
    "group_id": "apple-watch-series-9",
    "title": "Apple Watch Series 9 GPS 45mm (Midnight Aluminum Case with Sport Band) (FLIPKART)",
    "name": "Apple Watch Series 9 GPS 45mm (Midnight Aluminum Case with Sport Band)",
    "product_name": "Apple Watch Series 9 GPS 45mm (Midnight Aluminum Case with Sport Band)",
    "brand": "Apple",
    "category": "electronics",
    "platform": "flipkart",
    "price": 37990,
    "originalPrice": 44900,
    "original_price": 44900,
    "discountPercent": 15,
    "discount_percent": 15,
    "rating": 4.6,
    "reviewCount": 4200,
    "review_count": 4200,
    "deliveryEstimate": "2-3 days",
    "delivery_estimate": "2-3 days",
    "imageUrl": "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=900&auto=format&fit=crop&q=80",
    "image_url": "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=900&auto=format&fit=crop&q=80",
    "images": [
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1510017803434-a899398421b3?w=900&auto=format&fit=crop&q=80"
    ],
    "dimensions": {
      "width": "3.8 cm",
      "height": "4.5 cm",
      "depth": "1.07 cm",
      "weight": "38.7g"
    },
    "price_history": [
      {
        "month": "May",
        "amazon": 43679,
        "flipkart": 41789,
        "myntra": 45885
      },
      {
        "month": "Jun",
        "amazon": 42119,
        "flipkart": 40649,
        "myntra": 43890
      },
      {
        "month": "Jul",
        "amazon": 40949,
        "flipkart": 39510,
        "myntra": 43092
      },
      {
        "month": "Aug",
        "amazon": 39779,
        "flipkart": 40269,
        "myntra": 41496
      },
      {
        "month": "Sep",
        "amazon": 38219,
        "flipkart": 38750,
        "myntra": 40698
      },
      {
        "month": "Current",
        "amazon": 38999,
        "flipkart": 37990,
        "myntra": 39900
      }
    ],
    "priceHistory": [
      {
        "month": "May",
        "amazon": 43679,
        "flipkart": 41789,
        "myntra": 45885
      },
      {
        "month": "Jun",
        "amazon": 42119,
        "flipkart": 40649,
        "myntra": 43890
      },
      {
        "month": "Jul",
        "amazon": 40949,
        "flipkart": 39510,
        "myntra": 43092
      },
      {
        "month": "Aug",
        "amazon": 39779,
        "flipkart": 40269,
        "myntra": 41496
      },
      {
        "month": "Sep",
        "amazon": 38219,
        "flipkart": 38750,
        "myntra": 40698
      },
      {
        "month": "Current",
        "amazon": 38999,
        "flipkart": 37990,
        "myntra": 39900
      }
    ],
    "productUrl": "https://www.flipkart.com/apple-watch-series-9",
    "product_url": "https://www.flipkart.com/apple-watch-series-9",
    "seller": "FSAssured Wearables",
    "inStock": true,
    "in_stock": true,
    "sentiment": "green",
    "sentimentScore": 92,
    "best_overall_score": 75,
    "is_best_overall": false,
    "isBestOverall": false,
    "whyBuy": "Top rated electronics pick with 15% off and verified fast shipping.",
    "why_buy": "Top rated electronics pick with 15% off and verified fast shipping.",
    "reviewSummary": "Customer sentiment is strongly positive for Apple build quality and performance.",
    "review_summary": "Customer sentiment is strongly positive for Apple build quality and performance.",
    "specs": {
      "display": "Always-On Retina OLED (2000 nits peak brightness)",
      "chip": "S9 SiP with Double Tap gesture",
      "health_sensors": "ECG, Blood Oxygen, Temperature sensor, Crash Detection",
      "battery": "18 hours all-day battery life (36h in Low Power Mode)"
    },
    "reviews": [
      {
        "author": "Kavita S",
        "rating": 5,
        "text": "Fitness tracking is unmatched.",
        "date": "2024-10-15"
      }
    ]
  },
  {
    "id": "apple-watch-series-9-myntra",
    "product_id": "apple-watch-series-9-myntra",
    "groupId": "apple-watch-series-9",
    "group_id": "apple-watch-series-9",
    "title": "Apple Watch Series 9 GPS 45mm (Midnight Aluminum Case with Sport Band) (MYNTRA)",
    "name": "Apple Watch Series 9 GPS 45mm (Midnight Aluminum Case with Sport Band)",
    "product_name": "Apple Watch Series 9 GPS 45mm (Midnight Aluminum Case with Sport Band)",
    "brand": "Apple",
    "category": "electronics",
    "platform": "myntra",
    "price": 39900,
    "originalPrice": 44900,
    "original_price": 44900,
    "discountPercent": 11,
    "discount_percent": 11,
    "rating": 4.7,
    "reviewCount": 980,
    "review_count": 980,
    "deliveryEstimate": "2-4 days",
    "delivery_estimate": "2-4 days",
    "imageUrl": "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=900&auto=format&fit=crop&q=80",
    "image_url": "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=900&auto=format&fit=crop&q=80",
    "images": [
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1510017803434-a899398421b3?w=900&auto=format&fit=crop&q=80"
    ],
    "dimensions": {
      "width": "3.8 cm",
      "height": "4.5 cm",
      "depth": "1.07 cm",
      "weight": "38.7g"
    },
    "price_history": [
      {
        "month": "May",
        "amazon": 43679,
        "flipkart": 41789,
        "myntra": 45885
      },
      {
        "month": "Jun",
        "amazon": 42119,
        "flipkart": 40649,
        "myntra": 43890
      },
      {
        "month": "Jul",
        "amazon": 40949,
        "flipkart": 39510,
        "myntra": 43092
      },
      {
        "month": "Aug",
        "amazon": 39779,
        "flipkart": 40269,
        "myntra": 41496
      },
      {
        "month": "Sep",
        "amazon": 38219,
        "flipkart": 38750,
        "myntra": 40698
      },
      {
        "month": "Current",
        "amazon": 38999,
        "flipkart": 37990,
        "myntra": 39900
      }
    ],
    "priceHistory": [
      {
        "month": "May",
        "amazon": 43679,
        "flipkart": 41789,
        "myntra": 45885
      },
      {
        "month": "Jun",
        "amazon": 42119,
        "flipkart": 40649,
        "myntra": 43890
      },
      {
        "month": "Jul",
        "amazon": 40949,
        "flipkart": 39510,
        "myntra": 43092
      },
      {
        "month": "Aug",
        "amazon": 39779,
        "flipkart": 40269,
        "myntra": 41496
      },
      {
        "month": "Sep",
        "amazon": 38219,
        "flipkart": 38750,
        "myntra": 40698
      },
      {
        "month": "Current",
        "amazon": 38999,
        "flipkart": 37990,
        "myntra": 39900
      }
    ],
    "productUrl": "https://www.myntra.com/smartwatches/apple-watch-s9",
    "product_url": "https://www.myntra.com/smartwatches/apple-watch-s9",
    "seller": "Apple Official Store",
    "inStock": true,
    "in_stock": true,
    "sentiment": "green",
    "sentimentScore": 94,
    "best_overall_score": 75,
    "is_best_overall": false,
    "isBestOverall": false,
    "whyBuy": "Top rated electronics pick with 11% off and verified fast shipping.",
    "why_buy": "Top rated electronics pick with 11% off and verified fast shipping.",
    "reviewSummary": "Customer sentiment is strongly positive for Apple build quality and performance.",
    "review_summary": "Customer sentiment is strongly positive for Apple build quality and performance.",
    "specs": {
      "display": "Always-On Retina OLED (2000 nits peak brightness)",
      "chip": "S9 SiP with Double Tap gesture",
      "health_sensors": "ECG, Blood Oxygen, Temperature sensor, Crash Detection",
      "battery": "18 hours all-day battery life (36h in Low Power Mode)"
    },
    "reviews": [
      {
        "author": "Varun P",
        "rating": 4,
        "text": "Fast charging gets it to 80% in 45 mins.",
        "date": "2024-11-02"
      }
    ]
  },
  {
    "id": "kindle-paperwhite-16gb-amazon",
    "product_id": "kindle-paperwhite-16gb-amazon",
    "groupId": "kindle-paperwhite-16gb",
    "group_id": "kindle-paperwhite-16gb",
    "title": "Amazon Kindle Paperwhite (16 GB) – 6.8-inch display with adjustable warm light (AMAZON)",
    "name": "Amazon Kindle Paperwhite (16 GB) – 6.8-inch display with adjustable warm light",
    "product_name": "Amazon Kindle Paperwhite (16 GB) – 6.8-inch display with adjustable warm light",
    "brand": "Amazon",
    "category": "electronics",
    "platform": "amazon",
    "price": 13999,
    "originalPrice": 14999,
    "original_price": 14999,
    "discountPercent": 7,
    "discount_percent": 7,
    "rating": 4.8,
    "reviewCount": 18450,
    "review_count": 18450,
    "deliveryEstimate": "1 day (Prime)",
    "delivery_estimate": "1 day (Prime)",
    "imageUrl": "https://images.unsplash.com/photo-1592496431122-2349e0fbc666?w=900&auto=format&fit=crop&q=80",
    "image_url": "https://images.unsplash.com/photo-1592496431122-2349e0fbc666?w=900&auto=format&fit=crop&q=80",
    "images": [
      "https://images.unsplash.com/photo-1592496431122-2349e0fbc666?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1632502190569-6ede6e5bff2e?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1606928169809-d56fd2e23c5b?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1592496431122-2349e0fbc666?w=900&auto=format&fit=crop&q=80"
    ],
    "dimensions": {
      "width": "12.5 cm",
      "height": "17.4 cm",
      "depth": "0.81 cm",
      "weight": "205g"
    },
    "price_history": [
      {
        "month": "May",
        "amazon": 15679,
        "flipkart": 15949,
        "myntra": 17249
      },
      {
        "month": "Jun",
        "amazon": 15119,
        "flipkart": 15514,
        "myntra": 16499
      },
      {
        "month": "Jul",
        "amazon": 14699,
        "flipkart": 15079,
        "myntra": 16199
      },
      {
        "month": "Aug",
        "amazon": 14279,
        "flipkart": 15369,
        "myntra": 15599
      },
      {
        "month": "Sep",
        "amazon": 13719,
        "flipkart": 14789,
        "myntra": 15299
      },
      {
        "month": "Current",
        "amazon": 13999,
        "flipkart": 14499,
        "myntra": 14999
      }
    ],
    "priceHistory": [
      {
        "month": "May",
        "amazon": 15679,
        "flipkart": 15949,
        "myntra": 17249
      },
      {
        "month": "Jun",
        "amazon": 15119,
        "flipkart": 15514,
        "myntra": 16499
      },
      {
        "month": "Jul",
        "amazon": 14699,
        "flipkart": 15079,
        "myntra": 16199
      },
      {
        "month": "Aug",
        "amazon": 14279,
        "flipkart": 15369,
        "myntra": 15599
      },
      {
        "month": "Sep",
        "amazon": 13719,
        "flipkart": 14789,
        "myntra": 15299
      },
      {
        "month": "Current",
        "amazon": 13999,
        "flipkart": 14499,
        "myntra": 14999
      }
    ],
    "productUrl": "https://www.amazon.in/dp/B08N41Y4Q2",
    "product_url": "https://www.amazon.in/dp/B08N41Y4Q2",
    "seller": "Amazon Device Store",
    "inStock": true,
    "in_stock": true,
    "sentiment": "green",
    "sentimentScore": 96,
    "best_overall_score": 75,
    "is_best_overall": false,
    "isBestOverall": false,
    "whyBuy": "Top rated electronics pick with 7% off and verified fast shipping.",
    "why_buy": "Top rated electronics pick with 7% off and verified fast shipping.",
    "reviewSummary": "Customer sentiment is strongly positive for Amazon build quality and performance.",
    "review_summary": "Customer sentiment is strongly positive for Amazon build quality and performance.",
    "specs": {
      "display": "6.8-inch 300 ppi glare-free Paperwhite display",
      "battery_life": "Up to 10 weeks battery life",
      "water_resistance": "IPX8 waterproof rating",
      "storage": "16 GB storage (holds 10,000+ books)"
    },
    "reviews": [
      {
        "author": "Nandita S",
        "rating": 5,
        "text": "Adjustable warm light makes bedtime reading effortless.",
        "date": "2024-11-22"
      }
    ]
  },
  {
    "id": "kindle-paperwhite-16gb-flipkart",
    "product_id": "kindle-paperwhite-16gb-flipkart",
    "groupId": "kindle-paperwhite-16gb",
    "group_id": "kindle-paperwhite-16gb",
    "title": "Amazon Kindle Paperwhite (16 GB) – 6.8-inch display with adjustable warm light (FLIPKART)",
    "name": "Amazon Kindle Paperwhite (16 GB) – 6.8-inch display with adjustable warm light",
    "product_name": "Amazon Kindle Paperwhite (16 GB) – 6.8-inch display with adjustable warm light",
    "brand": "Amazon",
    "category": "electronics",
    "platform": "flipkart",
    "price": 14499,
    "originalPrice": 14999,
    "original_price": 14999,
    "discountPercent": 3,
    "discount_percent": 3,
    "rating": 4.6,
    "reviewCount": 3200,
    "review_count": 3200,
    "deliveryEstimate": "3-4 days",
    "delivery_estimate": "3-4 days",
    "imageUrl": "https://images.unsplash.com/photo-1592496431122-2349e0fbc666?w=900&auto=format&fit=crop&q=80",
    "image_url": "https://images.unsplash.com/photo-1592496431122-2349e0fbc666?w=900&auto=format&fit=crop&q=80",
    "images": [
      "https://images.unsplash.com/photo-1592496431122-2349e0fbc666?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1632502190569-6ede6e5bff2e?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1606928169809-d56fd2e23c5b?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1592496431122-2349e0fbc666?w=900&auto=format&fit=crop&q=80"
    ],
    "dimensions": {
      "width": "12.5 cm",
      "height": "17.4 cm",
      "depth": "0.81 cm",
      "weight": "205g"
    },
    "price_history": [
      {
        "month": "May",
        "amazon": 15679,
        "flipkart": 15949,
        "myntra": 17249
      },
      {
        "month": "Jun",
        "amazon": 15119,
        "flipkart": 15514,
        "myntra": 16499
      },
      {
        "month": "Jul",
        "amazon": 14699,
        "flipkart": 15079,
        "myntra": 16199
      },
      {
        "month": "Aug",
        "amazon": 14279,
        "flipkart": 15369,
        "myntra": 15599
      },
      {
        "month": "Sep",
        "amazon": 13719,
        "flipkart": 14789,
        "myntra": 15299
      },
      {
        "month": "Current",
        "amazon": 13999,
        "flipkart": 14499,
        "myntra": 14999
      }
    ],
    "priceHistory": [
      {
        "month": "May",
        "amazon": 15679,
        "flipkart": 15949,
        "myntra": 17249
      },
      {
        "month": "Jun",
        "amazon": 15119,
        "flipkart": 15514,
        "myntra": 16499
      },
      {
        "month": "Jul",
        "amazon": 14699,
        "flipkart": 15079,
        "myntra": 16199
      },
      {
        "month": "Aug",
        "amazon": 14279,
        "flipkart": 15369,
        "myntra": 15599
      },
      {
        "month": "Sep",
        "amazon": 13719,
        "flipkart": 14789,
        "myntra": 15299
      },
      {
        "month": "Current",
        "amazon": 13999,
        "flipkart": 14499,
        "myntra": 14999
      }
    ],
    "productUrl": "https://www.flipkart.com/amazon-kindle-paperwhite",
    "product_url": "https://www.flipkart.com/amazon-kindle-paperwhite",
    "seller": "E-Reader Express",
    "inStock": true,
    "in_stock": true,
    "sentiment": "green",
    "sentimentScore": 92,
    "best_overall_score": 70,
    "is_best_overall": false,
    "isBestOverall": false,
    "whyBuy": "Top rated electronics pick with 3% off and verified fast shipping.",
    "why_buy": "Top rated electronics pick with 3% off and verified fast shipping.",
    "reviewSummary": "Customer sentiment is strongly positive for Amazon build quality and performance.",
    "review_summary": "Customer sentiment is strongly positive for Amazon build quality and performance.",
    "specs": {
      "display": "6.8-inch 300 ppi glare-free Paperwhite display",
      "battery_life": "Up to 10 weeks battery life",
      "water_resistance": "IPX8 waterproof rating",
      "storage": "16 GB storage (holds 10,000+ books)"
    },
    "reviews": [
      {
        "author": "Aman G",
        "rating": 5,
        "text": "Battery lasts for weeks on a single charge.",
        "date": "2024-10-09"
      }
    ]
  },
  {
    "id": "kindle-paperwhite-16gb-myntra",
    "product_id": "kindle-paperwhite-16gb-myntra",
    "groupId": "kindle-paperwhite-16gb",
    "group_id": "kindle-paperwhite-16gb",
    "title": "Amazon Kindle Paperwhite (16 GB) – 6.8-inch display with adjustable warm light (MYNTRA)",
    "name": "Amazon Kindle Paperwhite (16 GB) – 6.8-inch display with adjustable warm light",
    "product_name": "Amazon Kindle Paperwhite (16 GB) – 6.8-inch display with adjustable warm light",
    "brand": "Amazon",
    "category": "electronics",
    "platform": "myntra",
    "price": 14999,
    "originalPrice": 14999,
    "original_price": 14999,
    "discountPercent": 0,
    "discount_percent": 0,
    "rating": 4.7,
    "reviewCount": 380,
    "review_count": 380,
    "deliveryEstimate": "3-5 days",
    "delivery_estimate": "3-5 days",
    "imageUrl": "https://images.unsplash.com/photo-1592496431122-2349e0fbc666?w=900&auto=format&fit=crop&q=80",
    "image_url": "https://images.unsplash.com/photo-1592496431122-2349e0fbc666?w=900&auto=format&fit=crop&q=80",
    "images": [
      "https://images.unsplash.com/photo-1592496431122-2349e0fbc666?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1632502190569-6ede6e5bff2e?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1606928169809-d56fd2e23c5b?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1592496431122-2349e0fbc666?w=900&auto=format&fit=crop&q=80"
    ],
    "dimensions": {
      "width": "12.5 cm",
      "height": "17.4 cm",
      "depth": "0.81 cm",
      "weight": "205g"
    },
    "price_history": [
      {
        "month": "May",
        "amazon": 15679,
        "flipkart": 15949,
        "myntra": 17249
      },
      {
        "month": "Jun",
        "amazon": 15119,
        "flipkart": 15514,
        "myntra": 16499
      },
      {
        "month": "Jul",
        "amazon": 14699,
        "flipkart": 15079,
        "myntra": 16199
      },
      {
        "month": "Aug",
        "amazon": 14279,
        "flipkart": 15369,
        "myntra": 15599
      },
      {
        "month": "Sep",
        "amazon": 13719,
        "flipkart": 14789,
        "myntra": 15299
      },
      {
        "month": "Current",
        "amazon": 13999,
        "flipkart": 14499,
        "myntra": 14999
      }
    ],
    "priceHistory": [
      {
        "month": "May",
        "amazon": 15679,
        "flipkart": 15949,
        "myntra": 17249
      },
      {
        "month": "Jun",
        "amazon": 15119,
        "flipkart": 15514,
        "myntra": 16499
      },
      {
        "month": "Jul",
        "amazon": 14699,
        "flipkart": 15079,
        "myntra": 16199
      },
      {
        "month": "Aug",
        "amazon": 14279,
        "flipkart": 15369,
        "myntra": 15599
      },
      {
        "month": "Sep",
        "amazon": 13719,
        "flipkart": 14789,
        "myntra": 15299
      },
      {
        "month": "Current",
        "amazon": 13999,
        "flipkart": 14499,
        "myntra": 14999
      }
    ],
    "productUrl": "https://www.myntra.com/gadgets/amazon-kindle-paperwhite",
    "product_url": "https://www.myntra.com/gadgets/amazon-kindle-paperwhite",
    "seller": "Gadget Hub Myntra",
    "inStock": true,
    "in_stock": true,
    "sentiment": "green",
    "sentimentScore": 94,
    "best_overall_score": 71,
    "is_best_overall": false,
    "isBestOverall": false,
    "whyBuy": "Top rated electronics pick with 0% off and verified fast shipping.",
    "why_buy": "Top rated electronics pick with 0% off and verified fast shipping.",
    "reviewSummary": "Customer sentiment is strongly positive for Amazon build quality and performance.",
    "review_summary": "Customer sentiment is strongly positive for Amazon build quality and performance.",
    "specs": {
      "display": "6.8-inch 300 ppi glare-free Paperwhite display",
      "battery_life": "Up to 10 weeks battery life",
      "water_resistance": "IPX8 waterproof rating",
      "storage": "16 GB storage (holds 10,000+ books)"
    },
    "reviews": [
      {
        "author": "Prachi M",
        "rating": 4,
        "text": "Type C port charging is great.",
        "date": "2024-11-01"
      }
    ]
  },
  {
    "id": "nike-air-max-270-amazon",
    "product_id": "nike-air-max-270-amazon",
    "groupId": "nike-air-max-270",
    "group_id": "nike-air-max-270",
    "title": "Nike Air Max 270 Men's Running & Lifestyle Shoes (AMAZON)",
    "name": "Nike Air Max 270 Men's Running & Lifestyle Shoes",
    "product_name": "Nike Air Max 270 Men's Running & Lifestyle Shoes",
    "brand": "Nike",
    "category": "footwear",
    "platform": "amazon",
    "price": 11495,
    "originalPrice": 13995,
    "original_price": 13995,
    "discountPercent": 18,
    "discount_percent": 18,
    "rating": 4.5,
    "reviewCount": 9450,
    "review_count": 9450,
    "deliveryEstimate": "2-3 days",
    "delivery_estimate": "2-3 days",
    "imageUrl": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=900&auto=format&fit=crop&q=80",
    "image_url": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=900&auto=format&fit=crop&q=80",
    "images": [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=900&auto=format&fit=crop&q=80"
    ],
    "dimensions": {
      "width": "11.2 cm",
      "height": "13.5 cm",
      "depth": "29.8 cm",
      "weight": "340g (Size 9)"
    },
    "price_history": [
      {
        "month": "May",
        "amazon": 12874,
        "flipkart": 13195,
        "myntra": 12644
      },
      {
        "month": "Jun",
        "amazon": 12415,
        "flipkart": 12835,
        "myntra": 12095
      },
      {
        "month": "Jul",
        "amazon": 12070,
        "flipkart": 12475,
        "myntra": 11875
      },
      {
        "month": "Aug",
        "amazon": 11725,
        "flipkart": 12715,
        "myntra": 11435
      },
      {
        "month": "Sep",
        "amazon": 11265,
        "flipkart": 12235,
        "myntra": 11215
      },
      {
        "month": "Current",
        "amazon": 11495,
        "flipkart": 11995,
        "myntra": 10995
      }
    ],
    "priceHistory": [
      {
        "month": "May",
        "amazon": 12874,
        "flipkart": 13195,
        "myntra": 12644
      },
      {
        "month": "Jun",
        "amazon": 12415,
        "flipkart": 12835,
        "myntra": 12095
      },
      {
        "month": "Jul",
        "amazon": 12070,
        "flipkart": 12475,
        "myntra": 11875
      },
      {
        "month": "Aug",
        "amazon": 11725,
        "flipkart": 12715,
        "myntra": 11435
      },
      {
        "month": "Sep",
        "amazon": 11265,
        "flipkart": 12235,
        "myntra": 11215
      },
      {
        "month": "Current",
        "amazon": 11495,
        "flipkart": 11995,
        "myntra": 10995
      }
    ],
    "productUrl": "https://www.amazon.in/dp/B07C9L8ZXY",
    "product_url": "https://www.amazon.in/dp/B07C9L8ZXY",
    "seller": "Nike Authorized India",
    "inStock": true,
    "in_stock": true,
    "sentiment": "green",
    "sentimentScore": 91,
    "best_overall_score": 75,
    "is_best_overall": true,
    "isBestOverall": true,
    "whyBuy": "Top rated footwear pick with 18% off and verified fast shipping.",
    "why_buy": "Top rated footwear pick with 18% off and verified fast shipping.",
    "reviewSummary": "Customer sentiment is strongly positive for Nike build quality and performance.",
    "review_summary": "Customer sentiment is strongly positive for Nike build quality and performance.",
    "specs": {
      "type": "Running & Lifestyle",
      "cushioning": "Max Air 270 heel unit delivers bouncy energy return",
      "upper_material": "Engineered breathable mesh with synthetic overlays",
      "closure": "Asymmetrical lacing system",
      "outsole": "Solid rubber in the forefoot, clear rubber on the heel"
    },
    "reviews": [
      {
        "author": "Rohit K",
        "rating": 5,
        "text": "Best cushioning in a lifestyle shoe. Extremely stylish.",
        "date": "2024-11-16"
      }
    ]
  },
  {
    "id": "nike-air-max-270-flipkart",
    "product_id": "nike-air-max-270-flipkart",
    "groupId": "nike-air-max-270",
    "group_id": "nike-air-max-270",
    "title": "Nike Air Max 270 Men's Running & Lifestyle Shoes (FLIPKART)",
    "name": "Nike Air Max 270 Men's Running & Lifestyle Shoes",
    "product_name": "Nike Air Max 270 Men's Running & Lifestyle Shoes",
    "brand": "Nike",
    "category": "footwear",
    "platform": "flipkart",
    "price": 11995,
    "originalPrice": 13995,
    "original_price": 13995,
    "discountPercent": 14,
    "discount_percent": 14,
    "rating": 4.4,
    "reviewCount": 6720,
    "review_count": 6720,
    "deliveryEstimate": "3-4 days",
    "delivery_estimate": "3-4 days",
    "imageUrl": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=900&auto=format&fit=crop&q=80",
    "image_url": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=900&auto=format&fit=crop&q=80",
    "images": [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=900&auto=format&fit=crop&q=80"
    ],
    "dimensions": {
      "width": "11.2 cm",
      "height": "13.5 cm",
      "depth": "29.8 cm",
      "weight": "340g (Size 9)"
    },
    "price_history": [
      {
        "month": "May",
        "amazon": 12874,
        "flipkart": 13195,
        "myntra": 12644
      },
      {
        "month": "Jun",
        "amazon": 12415,
        "flipkart": 12835,
        "myntra": 12095
      },
      {
        "month": "Jul",
        "amazon": 12070,
        "flipkart": 12475,
        "myntra": 11875
      },
      {
        "month": "Aug",
        "amazon": 11725,
        "flipkart": 12715,
        "myntra": 11435
      },
      {
        "month": "Sep",
        "amazon": 11265,
        "flipkart": 12235,
        "myntra": 11215
      },
      {
        "month": "Current",
        "amazon": 11495,
        "flipkart": 11995,
        "myntra": 10995
      }
    ],
    "priceHistory": [
      {
        "month": "May",
        "amazon": 12874,
        "flipkart": 13195,
        "myntra": 12644
      },
      {
        "month": "Jun",
        "amazon": 12415,
        "flipkart": 12835,
        "myntra": 12095
      },
      {
        "month": "Jul",
        "amazon": 12070,
        "flipkart": 12475,
        "myntra": 11875
      },
      {
        "month": "Aug",
        "amazon": 11725,
        "flipkart": 12715,
        "myntra": 11435
      },
      {
        "month": "Sep",
        "amazon": 11265,
        "flipkart": 12235,
        "myntra": 11215
      },
      {
        "month": "Current",
        "amazon": 11495,
        "flipkart": 11995,
        "myntra": 10995
      }
    ],
    "productUrl": "https://www.flipkart.com/nike-air-max-270",
    "product_url": "https://www.flipkart.com/nike-air-max-270",
    "seller": "RetailNet Footwear",
    "inStock": true,
    "in_stock": true,
    "sentiment": "green",
    "sentimentScore": 89,
    "best_overall_score": 72,
    "is_best_overall": false,
    "isBestOverall": false,
    "whyBuy": "Top rated footwear pick with 14% off and verified fast shipping.",
    "why_buy": "Top rated footwear pick with 14% off and verified fast shipping.",
    "reviewSummary": "Customer sentiment is strongly positive for Nike build quality and performance.",
    "review_summary": "Customer sentiment is strongly positive for Nike build quality and performance.",
    "specs": {
      "type": "Running & Lifestyle",
      "cushioning": "Max Air 270 heel unit delivers bouncy energy return",
      "upper_material": "Engineered breathable mesh with synthetic overlays",
      "closure": "Asymmetrical lacing system",
      "outsole": "Solid rubber in the forefoot, clear rubber on the heel"
    },
    "reviews": [
      {
        "author": "Ajay S",
        "rating": 4,
        "text": "Recommend sizing half up for wider feet.",
        "date": "2024-10-24"
      }
    ]
  },
  {
    "id": "nike-air-max-270-myntra",
    "product_id": "nike-air-max-270-myntra",
    "groupId": "nike-air-max-270",
    "group_id": "nike-air-max-270",
    "title": "Nike Air Max 270 Men's Running & Lifestyle Shoes (MYNTRA)",
    "name": "Nike Air Max 270 Men's Running & Lifestyle Shoes",
    "product_name": "Nike Air Max 270 Men's Running & Lifestyle Shoes",
    "brand": "Nike",
    "category": "footwear",
    "platform": "myntra",
    "price": 10995,
    "originalPrice": 13995,
    "original_price": 13995,
    "discountPercent": 21,
    "discount_percent": 21,
    "rating": 4.6,
    "reviewCount": 4890,
    "review_count": 4890,
    "deliveryEstimate": "1-2 days",
    "delivery_estimate": "1-2 days",
    "imageUrl": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=900&auto=format&fit=crop&q=80",
    "image_url": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=900&auto=format&fit=crop&q=80",
    "images": [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=900&auto=format&fit=crop&q=80"
    ],
    "dimensions": {
      "width": "11.2 cm",
      "height": "13.5 cm",
      "depth": "29.8 cm",
      "weight": "340g (Size 9)"
    },
    "price_history": [
      {
        "month": "May",
        "amazon": 12874,
        "flipkart": 13195,
        "myntra": 12644
      },
      {
        "month": "Jun",
        "amazon": 12415,
        "flipkart": 12835,
        "myntra": 12095
      },
      {
        "month": "Jul",
        "amazon": 12070,
        "flipkart": 12475,
        "myntra": 11875
      },
      {
        "month": "Aug",
        "amazon": 11725,
        "flipkart": 12715,
        "myntra": 11435
      },
      {
        "month": "Sep",
        "amazon": 11265,
        "flipkart": 12235,
        "myntra": 11215
      },
      {
        "month": "Current",
        "amazon": 11495,
        "flipkart": 11995,
        "myntra": 10995
      }
    ],
    "priceHistory": [
      {
        "month": "May",
        "amazon": 12874,
        "flipkart": 13195,
        "myntra": 12644
      },
      {
        "month": "Jun",
        "amazon": 12415,
        "flipkart": 12835,
        "myntra": 12095
      },
      {
        "month": "Jul",
        "amazon": 12070,
        "flipkart": 12475,
        "myntra": 11875
      },
      {
        "month": "Aug",
        "amazon": 11725,
        "flipkart": 12715,
        "myntra": 11435
      },
      {
        "month": "Sep",
        "amazon": 11265,
        "flipkart": 12235,
        "myntra": 11215
      },
      {
        "month": "Current",
        "amazon": 11495,
        "flipkart": 11995,
        "myntra": 10995
      }
    ],
    "productUrl": "https://www.myntra.com/casual-shoes/nike-air-max-270",
    "product_url": "https://www.myntra.com/casual-shoes/nike-air-max-270",
    "seller": "Nike Flagship Store (Myntra)",
    "inStock": true,
    "in_stock": true,
    "sentiment": "green",
    "sentimentScore": 92,
    "best_overall_score": 77,
    "is_best_overall": false,
    "isBestOverall": false,
    "whyBuy": "Top rated footwear pick with 21% off and verified fast shipping.",
    "why_buy": "Top rated footwear pick with 21% off and verified fast shipping.",
    "reviewSummary": "Customer sentiment is strongly positive for Nike build quality and performance.",
    "review_summary": "Customer sentiment is strongly positive for Nike build quality and performance.",
    "specs": {
      "type": "Running & Lifestyle",
      "cushioning": "Max Air 270 heel unit delivers bouncy energy return",
      "upper_material": "Engineered breathable mesh with synthetic overlays",
      "closure": "Asymmetrical lacing system",
      "outsole": "Solid rubber in the forefoot, clear rubber on the heel"
    },
    "reviews": [
      {
        "author": "Vikas M",
        "rating": 5,
        "text": "Lowest price on Myntra with instant bank discounts.",
        "date": "2024-11-28"
      }
    ]
  },
  {
    "id": "adidas-ultraboost-light-amazon",
    "product_id": "adidas-ultraboost-light-amazon",
    "groupId": "adidas-ultraboost-light",
    "group_id": "adidas-ultraboost-light",
    "title": "Adidas Ultraboost Light Men's Road Running Shoes (AMAZON)",
    "name": "Adidas Ultraboost Light Men's Road Running Shoes",
    "product_name": "Adidas Ultraboost Light Men's Road Running Shoes",
    "brand": "Adidas",
    "category": "footwear",
    "platform": "amazon",
    "price": 12999,
    "originalPrice": 18999,
    "original_price": 18999,
    "discountPercent": 32,
    "discount_percent": 32,
    "rating": 4.6,
    "reviewCount": 4210,
    "review_count": 4210,
    "deliveryEstimate": "2-3 days",
    "delivery_estimate": "2-3 days",
    "imageUrl": "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=900&auto=format&fit=crop&q=80",
    "image_url": "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=900&auto=format&fit=crop&q=80",
    "images": [
      "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1539185441755-769473a23570?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=900&auto=format&fit=crop&q=80"
    ],
    "dimensions": {
      "width": "10.8 cm",
      "height": "12.8 cm",
      "depth": "29.2 cm",
      "weight": "299g (Size 9)"
    },
    "price_history": [
      {
        "month": "May",
        "amazon": 14559,
        "flipkart": 14849,
        "myntra": 14374
      },
      {
        "month": "Jun",
        "amazon": 14039,
        "flipkart": 14444,
        "myntra": 13749
      },
      {
        "month": "Jul",
        "amazon": 13649,
        "flipkart": 14039,
        "myntra": 13499
      },
      {
        "month": "Aug",
        "amazon": 13259,
        "flipkart": 14309,
        "myntra": 12999
      },
      {
        "month": "Sep",
        "amazon": 12739,
        "flipkart": 13769,
        "myntra": 12749
      },
      {
        "month": "Current",
        "amazon": 12999,
        "flipkart": 13499,
        "myntra": 12499
      }
    ],
    "priceHistory": [
      {
        "month": "May",
        "amazon": 14559,
        "flipkart": 14849,
        "myntra": 14374
      },
      {
        "month": "Jun",
        "amazon": 14039,
        "flipkart": 14444,
        "myntra": 13749
      },
      {
        "month": "Jul",
        "amazon": 13649,
        "flipkart": 14039,
        "myntra": 13499
      },
      {
        "month": "Aug",
        "amazon": 13259,
        "flipkart": 14309,
        "myntra": 12999
      },
      {
        "month": "Sep",
        "amazon": 12739,
        "flipkart": 13769,
        "myntra": 12749
      },
      {
        "month": "Current",
        "amazon": 12999,
        "flipkart": 13499,
        "myntra": 12499
      }
    ],
    "productUrl": "https://www.amazon.in/dp/B0BSLH9KV9",
    "product_url": "https://www.amazon.in/dp/B0BSLH9KV9",
    "seller": "Adidas India Direct",
    "inStock": true,
    "in_stock": true,
    "sentiment": "green",
    "sentimentScore": 92,
    "best_overall_score": 82,
    "is_best_overall": true,
    "isBestOverall": true,
    "whyBuy": "Top rated footwear pick with 32% off and verified fast shipping.",
    "why_buy": "Top rated footwear pick with 32% off and verified fast shipping.",
    "reviewSummary": "Customer sentiment is strongly positive for Adidas build quality and performance.",
    "review_summary": "Customer sentiment is strongly positive for Adidas build quality and performance.",
    "specs": {
      "midsole": "Light BOOST cushioning (30% lighter than classic BOOST)",
      "upper": "PRIMEKNIT+ sock-like breathable textile",
      "outsole": "Continental Better Rubber grip outsole",
      "drop": "10mm (heel: 30mm / forefoot: 20mm)"
    },
    "reviews": [
      {
        "author": "Karthik R",
        "rating": 5,
        "text": "Light BOOST foam gives explosive energy return for 10k runs.",
        "date": "2024-11-19"
      }
    ]
  },
  {
    "id": "adidas-ultraboost-light-flipkart",
    "product_id": "adidas-ultraboost-light-flipkart",
    "groupId": "adidas-ultraboost-light",
    "group_id": "adidas-ultraboost-light",
    "title": "Adidas Ultraboost Light Men's Road Running Shoes (FLIPKART)",
    "name": "Adidas Ultraboost Light Men's Road Running Shoes",
    "product_name": "Adidas Ultraboost Light Men's Road Running Shoes",
    "brand": "Adidas",
    "category": "footwear",
    "platform": "flipkart",
    "price": 13499,
    "originalPrice": 18999,
    "original_price": 18999,
    "discountPercent": 29,
    "discount_percent": 29,
    "rating": 4.5,
    "reviewCount": 2890,
    "review_count": 2890,
    "deliveryEstimate": "3-4 days",
    "delivery_estimate": "3-4 days",
    "imageUrl": "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=900&auto=format&fit=crop&q=80",
    "image_url": "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=900&auto=format&fit=crop&q=80",
    "images": [
      "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1539185441755-769473a23570?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=900&auto=format&fit=crop&q=80"
    ],
    "dimensions": {
      "width": "10.8 cm",
      "height": "12.8 cm",
      "depth": "29.2 cm",
      "weight": "299g (Size 9)"
    },
    "price_history": [
      {
        "month": "May",
        "amazon": 14559,
        "flipkart": 14849,
        "myntra": 14374
      },
      {
        "month": "Jun",
        "amazon": 14039,
        "flipkart": 14444,
        "myntra": 13749
      },
      {
        "month": "Jul",
        "amazon": 13649,
        "flipkart": 14039,
        "myntra": 13499
      },
      {
        "month": "Aug",
        "amazon": 13259,
        "flipkart": 14309,
        "myntra": 12999
      },
      {
        "month": "Sep",
        "amazon": 12739,
        "flipkart": 13769,
        "myntra": 12749
      },
      {
        "month": "Current",
        "amazon": 12999,
        "flipkart": 13499,
        "myntra": 12499
      }
    ],
    "priceHistory": [
      {
        "month": "May",
        "amazon": 14559,
        "flipkart": 14849,
        "myntra": 14374
      },
      {
        "month": "Jun",
        "amazon": 14039,
        "flipkart": 14444,
        "myntra": 13749
      },
      {
        "month": "Jul",
        "amazon": 13649,
        "flipkart": 14039,
        "myntra": 13499
      },
      {
        "month": "Aug",
        "amazon": 13259,
        "flipkart": 14309,
        "myntra": 12999
      },
      {
        "month": "Sep",
        "amazon": 12739,
        "flipkart": 13769,
        "myntra": 12749
      },
      {
        "month": "Current",
        "amazon": 12999,
        "flipkart": 13499,
        "myntra": 12499
      }
    ],
    "productUrl": "https://www.flipkart.com/adidas-ultraboost-light",
    "product_url": "https://www.flipkart.com/adidas-ultraboost-light",
    "seller": "FSAssured Sports",
    "inStock": true,
    "in_stock": true,
    "sentiment": "green",
    "sentimentScore": 91,
    "best_overall_score": 79,
    "is_best_overall": false,
    "isBestOverall": false,
    "whyBuy": "Top rated footwear pick with 29% off and verified fast shipping.",
    "why_buy": "Top rated footwear pick with 29% off and verified fast shipping.",
    "reviewSummary": "Customer sentiment is strongly positive for Adidas build quality and performance.",
    "review_summary": "Customer sentiment is strongly positive for Adidas build quality and performance.",
    "specs": {
      "midsole": "Light BOOST cushioning (30% lighter than classic BOOST)",
      "upper": "PRIMEKNIT+ sock-like breathable textile",
      "outsole": "Continental Better Rubber grip outsole",
      "drop": "10mm (heel: 30mm / forefoot: 20mm)"
    },
    "reviews": [
      {
        "author": "Suresh P",
        "rating": 5,
        "text": "Continental grip on wet asphalt is rock solid.",
        "date": "2024-10-12"
      }
    ]
  },
  {
    "id": "adidas-ultraboost-light-myntra",
    "product_id": "adidas-ultraboost-light-myntra",
    "groupId": "adidas-ultraboost-light",
    "group_id": "adidas-ultraboost-light",
    "title": "Adidas Ultraboost Light Men's Road Running Shoes (MYNTRA)",
    "name": "Adidas Ultraboost Light Men's Road Running Shoes",
    "product_name": "Adidas Ultraboost Light Men's Road Running Shoes",
    "brand": "Adidas",
    "category": "footwear",
    "platform": "myntra",
    "price": 12499,
    "originalPrice": 18999,
    "original_price": 18999,
    "discountPercent": 34,
    "discount_percent": 34,
    "rating": 4.7,
    "reviewCount": 3120,
    "review_count": 3120,
    "deliveryEstimate": "1-2 days",
    "delivery_estimate": "1-2 days",
    "imageUrl": "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=900&auto=format&fit=crop&q=80",
    "image_url": "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=900&auto=format&fit=crop&q=80",
    "images": [
      "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1539185441755-769473a23570?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=900&auto=format&fit=crop&q=80"
    ],
    "dimensions": {
      "width": "10.8 cm",
      "height": "12.8 cm",
      "depth": "29.2 cm",
      "weight": "299g (Size 9)"
    },
    "price_history": [
      {
        "month": "May",
        "amazon": 14559,
        "flipkart": 14849,
        "myntra": 14374
      },
      {
        "month": "Jun",
        "amazon": 14039,
        "flipkart": 14444,
        "myntra": 13749
      },
      {
        "month": "Jul",
        "amazon": 13649,
        "flipkart": 14039,
        "myntra": 13499
      },
      {
        "month": "Aug",
        "amazon": 13259,
        "flipkart": 14309,
        "myntra": 12999
      },
      {
        "month": "Sep",
        "amazon": 12739,
        "flipkart": 13769,
        "myntra": 12749
      },
      {
        "month": "Current",
        "amazon": 12999,
        "flipkart": 13499,
        "myntra": 12499
      }
    ],
    "priceHistory": [
      {
        "month": "May",
        "amazon": 14559,
        "flipkart": 14849,
        "myntra": 14374
      },
      {
        "month": "Jun",
        "amazon": 14039,
        "flipkart": 14444,
        "myntra": 13749
      },
      {
        "month": "Jul",
        "amazon": 13649,
        "flipkart": 14039,
        "myntra": 13499
      },
      {
        "month": "Aug",
        "amazon": 13259,
        "flipkart": 14309,
        "myntra": 12999
      },
      {
        "month": "Sep",
        "amazon": 12739,
        "flipkart": 13769,
        "myntra": 12749
      },
      {
        "month": "Current",
        "amazon": 12999,
        "flipkart": 13499,
        "myntra": 12499
      }
    ],
    "productUrl": "https://www.myntra.com/sports-shoes/adidas-ultraboost-light",
    "product_url": "https://www.myntra.com/sports-shoes/adidas-ultraboost-light",
    "seller": "Adidas Official Partner",
    "inStock": true,
    "in_stock": true,
    "sentiment": "green",
    "sentimentScore": 94,
    "best_overall_score": 84,
    "is_best_overall": false,
    "isBestOverall": false,
    "whyBuy": "Top rated footwear pick with 34% off and verified fast shipping.",
    "why_buy": "Top rated footwear pick with 34% off and verified fast shipping.",
    "reviewSummary": "Customer sentiment is strongly positive for Adidas build quality and performance.",
    "review_summary": "Customer sentiment is strongly positive for Adidas build quality and performance.",
    "specs": {
      "midsole": "Light BOOST cushioning (30% lighter than classic BOOST)",
      "upper": "PRIMEKNIT+ sock-like breathable textile",
      "outsole": "Continental Better Rubber grip outsole",
      "drop": "10mm (heel: 30mm / forefoot: 20mm)"
    },
    "reviews": [
      {
        "author": "Dheeraj S",
        "rating": 5,
        "text": "Feels like walking on clouds with high arch support.",
        "date": "2024-11-22"
      }
    ]
  },
  {
    "id": "woodland-brown-boots-amazon",
    "product_id": "woodland-brown-boots-amazon",
    "groupId": "woodland-brown-boots",
    "group_id": "woodland-brown-boots",
    "title": "Woodland Men's Camel Brown Leather Outdoor Trekking Boots (AMAZON)",
    "name": "Woodland Men's Camel Brown Leather Outdoor Trekking Boots",
    "product_name": "Woodland Men's Camel Brown Leather Outdoor Trekking Boots",
    "brand": "Woodland",
    "category": "footwear",
    "platform": "amazon",
    "price": 3499,
    "originalPrice": 5495,
    "original_price": 5495,
    "discountPercent": 36,
    "discount_percent": 36,
    "rating": 4.3,
    "reviewCount": 14320,
    "review_count": 14320,
    "deliveryEstimate": "2-3 days",
    "delivery_estimate": "2-3 days",
    "imageUrl": "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?w=900&auto=format&fit=crop&q=80",
    "image_url": "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?w=900&auto=format&fit=crop&q=80",
    "images": [
      "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=900&auto=format&fit=crop&q=80"
    ],
    "dimensions": {
      "width": "12.0 cm",
      "height": "17.5 cm",
      "depth": "31.0 cm",
      "weight": "620g per boot"
    },
    "price_history": [
      {
        "month": "May",
        "amazon": 3919,
        "flipkart": 4179,
        "myntra": 4196
      },
      {
        "month": "Jun",
        "amazon": 3779,
        "flipkart": 4065,
        "myntra": 4014
      },
      {
        "month": "Jul",
        "amazon": 3674,
        "flipkart": 3951,
        "myntra": 3941
      },
      {
        "month": "Aug",
        "amazon": 3569,
        "flipkart": 4027,
        "myntra": 3795
      },
      {
        "month": "Sep",
        "amazon": 3429,
        "flipkart": 3875,
        "myntra": 3722
      },
      {
        "month": "Current",
        "amazon": 3499,
        "flipkart": 3799,
        "myntra": 3649
      }
    ],
    "priceHistory": [
      {
        "month": "May",
        "amazon": 3919,
        "flipkart": 4179,
        "myntra": 4196
      },
      {
        "month": "Jun",
        "amazon": 3779,
        "flipkart": 4065,
        "myntra": 4014
      },
      {
        "month": "Jul",
        "amazon": 3674,
        "flipkart": 3951,
        "myntra": 3941
      },
      {
        "month": "Aug",
        "amazon": 3569,
        "flipkart": 4027,
        "myntra": 3795
      },
      {
        "month": "Sep",
        "amazon": 3429,
        "flipkart": 3875,
        "myntra": 3722
      },
      {
        "month": "Current",
        "amazon": 3499,
        "flipkart": 3799,
        "myntra": 3649
      }
    ],
    "productUrl": "https://www.amazon.in/dp/B00K52079M",
    "product_url": "https://www.amazon.in/dp/B00K52079M",
    "seller": "Aero Club (Woodland)",
    "inStock": true,
    "in_stock": true,
    "sentiment": "yellow",
    "sentimentScore": 87,
    "best_overall_score": 79,
    "is_best_overall": true,
    "isBestOverall": true,
    "whyBuy": "Top rated footwear pick with 36% off and verified fast shipping.",
    "why_buy": "Top rated footwear pick with 36% off and verified fast shipping.",
    "reviewSummary": "Customer sentiment is strongly positive for Woodland build quality and performance.",
    "review_summary": "Customer sentiment is strongly positive for Woodland build quality and performance.",
    "specs": {
      "upper_material": "Genuine Nubuck / Suede Leather",
      "sole": "Heavy-duty grooved rubber lug sole",
      "closure": "Rust-proof metallic eyelet lace-up",
      "terrain": "All-terrain rugged Himalayan trekking"
    },
    "reviews": [
      {
        "author": "Vikram S",
        "rating": 5,
        "text": "Built like a tank. Withstood rocky trails with zero tearing.",
        "date": "2024-11-08"
      }
    ]
  },
  {
    "id": "woodland-brown-boots-flipkart",
    "product_id": "woodland-brown-boots-flipkart",
    "groupId": "woodland-brown-boots",
    "group_id": "woodland-brown-boots",
    "title": "Woodland Men's Camel Brown Leather Outdoor Trekking Boots (FLIPKART)",
    "name": "Woodland Men's Camel Brown Leather Outdoor Trekking Boots",
    "product_name": "Woodland Men's Camel Brown Leather Outdoor Trekking Boots",
    "brand": "Woodland",
    "category": "footwear",
    "platform": "flipkart",
    "price": 3799,
    "originalPrice": 5495,
    "original_price": 5495,
    "discountPercent": 31,
    "discount_percent": 31,
    "rating": 4.2,
    "reviewCount": 9820,
    "review_count": 9820,
    "deliveryEstimate": "3-4 days",
    "delivery_estimate": "3-4 days",
    "imageUrl": "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?w=900&auto=format&fit=crop&q=80",
    "image_url": "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?w=900&auto=format&fit=crop&q=80",
    "images": [
      "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=900&auto=format&fit=crop&q=80"
    ],
    "dimensions": {
      "width": "12.0 cm",
      "height": "17.5 cm",
      "depth": "31.0 cm",
      "weight": "620g per boot"
    },
    "price_history": [
      {
        "month": "May",
        "amazon": 3919,
        "flipkart": 4179,
        "myntra": 4196
      },
      {
        "month": "Jun",
        "amazon": 3779,
        "flipkart": 4065,
        "myntra": 4014
      },
      {
        "month": "Jul",
        "amazon": 3674,
        "flipkart": 3951,
        "myntra": 3941
      },
      {
        "month": "Aug",
        "amazon": 3569,
        "flipkart": 4027,
        "myntra": 3795
      },
      {
        "month": "Sep",
        "amazon": 3429,
        "flipkart": 3875,
        "myntra": 3722
      },
      {
        "month": "Current",
        "amazon": 3499,
        "flipkart": 3799,
        "myntra": 3649
      }
    ],
    "priceHistory": [
      {
        "month": "May",
        "amazon": 3919,
        "flipkart": 4179,
        "myntra": 4196
      },
      {
        "month": "Jun",
        "amazon": 3779,
        "flipkart": 4065,
        "myntra": 4014
      },
      {
        "month": "Jul",
        "amazon": 3674,
        "flipkart": 3951,
        "myntra": 3941
      },
      {
        "month": "Aug",
        "amazon": 3569,
        "flipkart": 4027,
        "myntra": 3795
      },
      {
        "month": "Sep",
        "amazon": 3429,
        "flipkart": 3875,
        "myntra": 3722
      },
      {
        "month": "Current",
        "amazon": 3499,
        "flipkart": 3799,
        "myntra": 3649
      }
    ],
    "productUrl": "https://www.flipkart.com/woodland-boots",
    "product_url": "https://www.flipkart.com/woodland-boots",
    "seller": "SuperComNet Footwear",
    "inStock": true,
    "in_stock": true,
    "sentiment": "yellow",
    "sentimentScore": 85,
    "best_overall_score": 75,
    "is_best_overall": false,
    "isBestOverall": false,
    "whyBuy": "Top rated footwear pick with 31% off and verified fast shipping.",
    "why_buy": "Top rated footwear pick with 31% off and verified fast shipping.",
    "reviewSummary": "Customer sentiment is strongly positive for Woodland build quality and performance.",
    "review_summary": "Customer sentiment is strongly positive for Woodland build quality and performance.",
    "specs": {
      "upper_material": "Genuine Nubuck / Suede Leather",
      "sole": "Heavy-duty grooved rubber lug sole",
      "closure": "Rust-proof metallic eyelet lace-up",
      "terrain": "All-terrain rugged Himalayan trekking"
    },
    "reviews": [
      {
        "author": "Ankur J",
        "rating": 4,
        "text": "High ankle collar prevents sprains on steep descents.",
        "date": "2024-10-15"
      }
    ]
  },
  {
    "id": "woodland-brown-boots-myntra",
    "product_id": "woodland-brown-boots-myntra",
    "groupId": "woodland-brown-boots",
    "group_id": "woodland-brown-boots",
    "title": "Woodland Men's Camel Brown Leather Outdoor Trekking Boots (MYNTRA)",
    "name": "Woodland Men's Camel Brown Leather Outdoor Trekking Boots",
    "product_name": "Woodland Men's Camel Brown Leather Outdoor Trekking Boots",
    "brand": "Woodland",
    "category": "footwear",
    "platform": "myntra",
    "price": 3649,
    "originalPrice": 5495,
    "original_price": 5495,
    "discountPercent": 34,
    "discount_percent": 34,
    "rating": 4.3,
    "reviewCount": 5120,
    "review_count": 5120,
    "deliveryEstimate": "2-3 days",
    "delivery_estimate": "2-3 days",
    "imageUrl": "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?w=900&auto=format&fit=crop&q=80",
    "image_url": "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?w=900&auto=format&fit=crop&q=80",
    "images": [
      "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=900&auto=format&fit=crop&q=80"
    ],
    "dimensions": {
      "width": "12.0 cm",
      "height": "17.5 cm",
      "depth": "31.0 cm",
      "weight": "620g per boot"
    },
    "price_history": [
      {
        "month": "May",
        "amazon": 3919,
        "flipkart": 4179,
        "myntra": 4196
      },
      {
        "month": "Jun",
        "amazon": 3779,
        "flipkart": 4065,
        "myntra": 4014
      },
      {
        "month": "Jul",
        "amazon": 3674,
        "flipkart": 3951,
        "myntra": 3941
      },
      {
        "month": "Aug",
        "amazon": 3569,
        "flipkart": 4027,
        "myntra": 3795
      },
      {
        "month": "Sep",
        "amazon": 3429,
        "flipkart": 3875,
        "myntra": 3722
      },
      {
        "month": "Current",
        "amazon": 3499,
        "flipkart": 3799,
        "myntra": 3649
      }
    ],
    "priceHistory": [
      {
        "month": "May",
        "amazon": 3919,
        "flipkart": 4179,
        "myntra": 4196
      },
      {
        "month": "Jun",
        "amazon": 3779,
        "flipkart": 4065,
        "myntra": 4014
      },
      {
        "month": "Jul",
        "amazon": 3674,
        "flipkart": 3951,
        "myntra": 3941
      },
      {
        "month": "Aug",
        "amazon": 3569,
        "flipkart": 4027,
        "myntra": 3795
      },
      {
        "month": "Sep",
        "amazon": 3429,
        "flipkart": 3875,
        "myntra": 3722
      },
      {
        "month": "Current",
        "amazon": 3499,
        "flipkart": 3799,
        "myntra": 3649
      }
    ],
    "productUrl": "https://www.myntra.com/boots/woodland-leather-boots",
    "product_url": "https://www.myntra.com/boots/woodland-leather-boots",
    "seller": "Woodland Official",
    "inStock": true,
    "in_stock": true,
    "sentiment": "yellow",
    "sentimentScore": 87,
    "best_overall_score": 78,
    "is_best_overall": false,
    "isBestOverall": false,
    "whyBuy": "Top rated footwear pick with 34% off and verified fast shipping.",
    "why_buy": "Top rated footwear pick with 34% off and verified fast shipping.",
    "reviewSummary": "Customer sentiment is strongly positive for Woodland build quality and performance.",
    "review_summary": "Customer sentiment is strongly positive for Woodland build quality and performance.",
    "specs": {
      "upper_material": "Genuine Nubuck / Suede Leather",
      "sole": "Heavy-duty grooved rubber lug sole",
      "closure": "Rust-proof metallic eyelet lace-up",
      "terrain": "All-terrain rugged Himalayan trekking"
    },
    "reviews": [
      {
        "author": "Devashish T",
        "rating": 5,
        "text": "Premium nubuck suede texture.",
        "date": "2024-11-20"
      }
    ]
  },
  {
    "id": "crocs-classic-clogs-amazon",
    "product_id": "crocs-classic-clogs-amazon",
    "groupId": "crocs-classic-clogs",
    "group_id": "crocs-classic-clogs",
    "title": "Crocs Unisex-Adult Classic Slip-On Water Clogs (AMAZON)",
    "name": "Crocs Unisex-Adult Classic Slip-On Water Clogs",
    "product_name": "Crocs Unisex-Adult Classic Slip-On Water Clogs",
    "brand": "Crocs",
    "category": "footwear",
    "platform": "amazon",
    "price": 2495,
    "originalPrice": 3495,
    "original_price": 3495,
    "discountPercent": 29,
    "discount_percent": 29,
    "rating": 4.5,
    "reviewCount": 38900,
    "review_count": 38900,
    "deliveryEstimate": "1-2 days",
    "delivery_estimate": "1-2 days",
    "imageUrl": "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=900&auto=format&fit=crop&q=80",
    "image_url": "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=900&auto=format&fit=crop&q=80",
    "images": [
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=900&auto=format&fit=crop&q=80"
    ],
    "dimensions": {
      "width": "11.5 cm",
      "height": "10.0 cm",
      "depth": "28.5 cm",
      "weight": "185g per clog"
    },
    "price_history": [
      {
        "month": "May",
        "amazon": 2794,
        "flipkart": 2525,
        "myntra": 2754
      },
      {
        "month": "Jun",
        "amazon": 2695,
        "flipkart": 2456,
        "myntra": 2635
      },
      {
        "month": "Jul",
        "amazon": 2620,
        "flipkart": 2387,
        "myntra": 2587
      },
      {
        "month": "Aug",
        "amazon": 2545,
        "flipkart": 2433,
        "myntra": 2491
      },
      {
        "month": "Sep",
        "amazon": 2445,
        "flipkart": 2341,
        "myntra": 2443
      },
      {
        "month": "Current",
        "amazon": 2495,
        "flipkart": 2295,
        "myntra": 2395
      }
    ],
    "priceHistory": [
      {
        "month": "May",
        "amazon": 2794,
        "flipkart": 2525,
        "myntra": 2754
      },
      {
        "month": "Jun",
        "amazon": 2695,
        "flipkart": 2456,
        "myntra": 2635
      },
      {
        "month": "Jul",
        "amazon": 2620,
        "flipkart": 2387,
        "myntra": 2587
      },
      {
        "month": "Aug",
        "amazon": 2545,
        "flipkart": 2433,
        "myntra": 2491
      },
      {
        "month": "Sep",
        "amazon": 2445,
        "flipkart": 2341,
        "myntra": 2443
      },
      {
        "month": "Current",
        "amazon": 2495,
        "flipkart": 2295,
        "myntra": 2395
      }
    ],
    "productUrl": "https://www.amazon.in/dp/B0014C5W7Q",
    "product_url": "https://www.amazon.in/dp/B0014C5W7Q",
    "seller": "Crocs India",
    "inStock": true,
    "in_stock": true,
    "sentiment": "green",
    "sentimentScore": 91,
    "best_overall_score": 79,
    "is_best_overall": true,
    "isBestOverall": true,
    "whyBuy": "Top rated footwear pick with 29% off and verified fast shipping.",
    "why_buy": "Top rated footwear pick with 29% off and verified fast shipping.",
    "reviewSummary": "Customer sentiment is strongly positive for Crocs build quality and performance.",
    "review_summary": "Customer sentiment is strongly positive for Crocs build quality and performance.",
    "specs": {
      "material": "100% Croslite closed-cell resin proprietary foam",
      "ventilation": "Ports shed water and debris quickly",
      "strap": "Pivoting heel strap for snug or slip-on mode",
      "water_resistance": "100% buoyant and water-friendly"
    },
    "reviews": [
      {
        "author": "Deepa N",
        "rating": 5,
        "text": "Ultimate comfort for home and rain.",
        "date": "2024-11-11"
      }
    ]
  },
  {
    "id": "crocs-classic-clogs-flipkart",
    "product_id": "crocs-classic-clogs-flipkart",
    "groupId": "crocs-classic-clogs",
    "group_id": "crocs-classic-clogs",
    "title": "Crocs Unisex-Adult Classic Slip-On Water Clogs (FLIPKART)",
    "name": "Crocs Unisex-Adult Classic Slip-On Water Clogs",
    "product_name": "Crocs Unisex-Adult Classic Slip-On Water Clogs",
    "brand": "Crocs",
    "category": "footwear",
    "platform": "flipkart",
    "price": 2295,
    "originalPrice": 3495,
    "original_price": 3495,
    "discountPercent": 34,
    "discount_percent": 34,
    "rating": 4.4,
    "reviewCount": 24100,
    "review_count": 24100,
    "deliveryEstimate": "2-3 days",
    "delivery_estimate": "2-3 days",
    "imageUrl": "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=900&auto=format&fit=crop&q=80",
    "image_url": "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=900&auto=format&fit=crop&q=80",
    "images": [
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=900&auto=format&fit=crop&q=80"
    ],
    "dimensions": {
      "width": "11.5 cm",
      "height": "10.0 cm",
      "depth": "28.5 cm",
      "weight": "185g per clog"
    },
    "price_history": [
      {
        "month": "May",
        "amazon": 2794,
        "flipkart": 2525,
        "myntra": 2754
      },
      {
        "month": "Jun",
        "amazon": 2695,
        "flipkart": 2456,
        "myntra": 2635
      },
      {
        "month": "Jul",
        "amazon": 2620,
        "flipkart": 2387,
        "myntra": 2587
      },
      {
        "month": "Aug",
        "amazon": 2545,
        "flipkart": 2433,
        "myntra": 2491
      },
      {
        "month": "Sep",
        "amazon": 2445,
        "flipkart": 2341,
        "myntra": 2443
      },
      {
        "month": "Current",
        "amazon": 2495,
        "flipkart": 2295,
        "myntra": 2395
      }
    ],
    "priceHistory": [
      {
        "month": "May",
        "amazon": 2794,
        "flipkart": 2525,
        "myntra": 2754
      },
      {
        "month": "Jun",
        "amazon": 2695,
        "flipkart": 2456,
        "myntra": 2635
      },
      {
        "month": "Jul",
        "amazon": 2620,
        "flipkart": 2387,
        "myntra": 2587
      },
      {
        "month": "Aug",
        "amazon": 2545,
        "flipkart": 2433,
        "myntra": 2491
      },
      {
        "month": "Sep",
        "amazon": 2445,
        "flipkart": 2341,
        "myntra": 2443
      },
      {
        "month": "Current",
        "amazon": 2495,
        "flipkart": 2295,
        "myntra": 2395
      }
    ],
    "productUrl": "https://www.flipkart.com/crocs-classic-clog",
    "product_url": "https://www.flipkart.com/crocs-classic-clog",
    "seller": "RetailNet Footwear",
    "inStock": true,
    "in_stock": true,
    "sentiment": "green",
    "sentimentScore": 89,
    "best_overall_score": 80,
    "is_best_overall": false,
    "isBestOverall": false,
    "whyBuy": "Top rated footwear pick with 34% off and verified fast shipping.",
    "why_buy": "Top rated footwear pick with 34% off and verified fast shipping.",
    "reviewSummary": "Customer sentiment is strongly positive for Crocs build quality and performance.",
    "review_summary": "Customer sentiment is strongly positive for Crocs build quality and performance.",
    "specs": {
      "material": "100% Croslite closed-cell resin proprietary foam",
      "ventilation": "Ports shed water and debris quickly",
      "strap": "Pivoting heel strap for snug or slip-on mode",
      "water_resistance": "100% buoyant and water-friendly"
    },
    "reviews": [
      {
        "author": "Manish B",
        "rating": 4,
        "text": "Cleans with running water in seconds.",
        "date": "2024-10-20"
      }
    ]
  },
  {
    "id": "crocs-classic-clogs-myntra",
    "product_id": "crocs-classic-clogs-myntra",
    "groupId": "crocs-classic-clogs",
    "group_id": "crocs-classic-clogs",
    "title": "Crocs Unisex-Adult Classic Slip-On Water Clogs (MYNTRA)",
    "name": "Crocs Unisex-Adult Classic Slip-On Water Clogs",
    "product_name": "Crocs Unisex-Adult Classic Slip-On Water Clogs",
    "brand": "Crocs",
    "category": "footwear",
    "platform": "myntra",
    "price": 2395,
    "originalPrice": 3495,
    "original_price": 3495,
    "discountPercent": 31,
    "discount_percent": 31,
    "rating": 4.5,
    "reviewCount": 14200,
    "review_count": 14200,
    "deliveryEstimate": "1-2 days",
    "delivery_estimate": "1-2 days",
    "imageUrl": "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=900&auto=format&fit=crop&q=80",
    "image_url": "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=900&auto=format&fit=crop&q=80",
    "images": [
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=900&auto=format&fit=crop&q=80"
    ],
    "dimensions": {
      "width": "11.5 cm",
      "height": "10.0 cm",
      "depth": "28.5 cm",
      "weight": "185g per clog"
    },
    "price_history": [
      {
        "month": "May",
        "amazon": 2794,
        "flipkart": 2525,
        "myntra": 2754
      },
      {
        "month": "Jun",
        "amazon": 2695,
        "flipkart": 2456,
        "myntra": 2635
      },
      {
        "month": "Jul",
        "amazon": 2620,
        "flipkart": 2387,
        "myntra": 2587
      },
      {
        "month": "Aug",
        "amazon": 2545,
        "flipkart": 2433,
        "myntra": 2491
      },
      {
        "month": "Sep",
        "amazon": 2445,
        "flipkart": 2341,
        "myntra": 2443
      },
      {
        "month": "Current",
        "amazon": 2495,
        "flipkart": 2295,
        "myntra": 2395
      }
    ],
    "priceHistory": [
      {
        "month": "May",
        "amazon": 2794,
        "flipkart": 2525,
        "myntra": 2754
      },
      {
        "month": "Jun",
        "amazon": 2695,
        "flipkart": 2456,
        "myntra": 2635
      },
      {
        "month": "Jul",
        "amazon": 2620,
        "flipkart": 2387,
        "myntra": 2587
      },
      {
        "month": "Aug",
        "amazon": 2545,
        "flipkart": 2433,
        "myntra": 2491
      },
      {
        "month": "Sep",
        "amazon": 2445,
        "flipkart": 2341,
        "myntra": 2443
      },
      {
        "month": "Current",
        "amazon": 2495,
        "flipkart": 2295,
        "myntra": 2395
      }
    ],
    "productUrl": "https://www.myntra.com/casual-shoes/crocs-classic-clog",
    "product_url": "https://www.myntra.com/casual-shoes/crocs-classic-clog",
    "seller": "Crocs Brand Store",
    "inStock": true,
    "in_stock": true,
    "sentiment": "green",
    "sentimentScore": 91,
    "best_overall_score": 80,
    "is_best_overall": false,
    "isBestOverall": false,
    "whyBuy": "Top rated footwear pick with 31% off and verified fast shipping.",
    "why_buy": "Top rated footwear pick with 31% off and verified fast shipping.",
    "reviewSummary": "Customer sentiment is strongly positive for Crocs build quality and performance.",
    "review_summary": "Customer sentiment is strongly positive for Crocs build quality and performance.",
    "specs": {
      "material": "100% Croslite closed-cell resin proprietary foam",
      "ventilation": "Ports shed water and debris quickly",
      "strap": "Pivoting heel strap for snug or slip-on mode",
      "water_resistance": "100% buoyant and water-friendly"
    },
    "reviews": [
      {
        "author": "Pradeep G",
        "rating": 5,
        "text": "Genuine tags and pristine quality.",
        "date": "2024-11-27"
      }
    ]
  },
  {
    "id": "levis-511-slim-fit-jeans-amazon",
    "product_id": "levis-511-slim-fit-jeans-amazon",
    "groupId": "levis-511-slim-fit-jeans",
    "group_id": "levis-511-slim-fit-jeans",
    "title": "Levi's Men's 511 Slim Fit Stretch Denim Jeans (Dark Indigo) (AMAZON)",
    "name": "Levi's Men's 511 Slim Fit Stretch Denim Jeans (Dark Indigo)",
    "product_name": "Levi's Men's 511 Slim Fit Stretch Denim Jeans (Dark Indigo)",
    "brand": "Levi's",
    "category": "fashion",
    "platform": "amazon",
    "price": 2199,
    "originalPrice": 3999,
    "original_price": 3999,
    "discountPercent": 45,
    "discount_percent": 45,
    "rating": 4.4,
    "reviewCount": 14200,
    "review_count": 14200,
    "deliveryEstimate": "2-3 days",
    "delivery_estimate": "2-3 days",
    "imageUrl": "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=900&auto=format&fit=crop&q=80",
    "image_url": "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=900&auto=format&fit=crop&q=80",
    "images": [
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1542272604-780c96856592?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1582552938357-32b906df40cb?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1584370848010-d7fe6bc767ec?w=900&auto=format&fit=crop&q=80"
    ],
    "dimensions": {
      "width": "38.0 cm",
      "height": "105.0 cm",
      "depth": "2.0 cm",
      "weight": "550g"
    },
    "price_history": [
      {
        "month": "May",
        "amazon": 2463,
        "flipkart": 2639,
        "myntra": 2299
      },
      {
        "month": "Jun",
        "amazon": 2375,
        "flipkart": 2567,
        "myntra": 2199
      },
      {
        "month": "Jul",
        "amazon": 2309,
        "flipkart": 2495,
        "myntra": 2159
      },
      {
        "month": "Aug",
        "amazon": 2243,
        "flipkart": 2543,
        "myntra": 2079
      },
      {
        "month": "Sep",
        "amazon": 2155,
        "flipkart": 2447,
        "myntra": 2039
      },
      {
        "month": "Current",
        "amazon": 2199,
        "flipkart": 2399,
        "myntra": 1999
      }
    ],
    "priceHistory": [
      {
        "month": "May",
        "amazon": 2463,
        "flipkart": 2639,
        "myntra": 2299
      },
      {
        "month": "Jun",
        "amazon": 2375,
        "flipkart": 2567,
        "myntra": 2199
      },
      {
        "month": "Jul",
        "amazon": 2309,
        "flipkart": 2495,
        "myntra": 2159
      },
      {
        "month": "Aug",
        "amazon": 2243,
        "flipkart": 2543,
        "myntra": 2079
      },
      {
        "month": "Sep",
        "amazon": 2155,
        "flipkart": 2447,
        "myntra": 2039
      },
      {
        "month": "Current",
        "amazon": 2199,
        "flipkart": 2399,
        "myntra": 1999
      }
    ],
    "productUrl": "https://www.amazon.in/dp/B00K5Q28L1",
    "product_url": "https://www.amazon.in/dp/B00K5Q28L1",
    "seller": "Levi's Authorized Store",
    "inStock": true,
    "in_stock": true,
    "sentiment": "green",
    "sentimentScore": 89,
    "best_overall_score": 84,
    "is_best_overall": true,
    "isBestOverall": true,
    "whyBuy": "Top rated fashion pick with 45% off and verified fast shipping.",
    "why_buy": "Top rated fashion pick with 45% off and verified fast shipping.",
    "reviewSummary": "Customer sentiment is strongly positive for Levi's build quality and performance.",
    "review_summary": "Customer sentiment is strongly positive for Levi's build quality and performance.",
    "specs": {
      "fit": "Slim from hip to ankle",
      "fabric": "99% Cotton, 1% Elastane with Levi's Flex stretch",
      "rise": "Sits below waist (Mid rise)",
      "leg_opening": "14.5 inch slim leg"
    },
    "reviews": [
      {
        "author": "Alok N",
        "rating": 5,
        "text": "Classic 511 fit. Perfect stretch that holds form.",
        "date": "2024-11-12"
      }
    ]
  },
  {
    "id": "levis-511-slim-fit-jeans-flipkart",
    "product_id": "levis-511-slim-fit-jeans-flipkart",
    "groupId": "levis-511-slim-fit-jeans",
    "group_id": "levis-511-slim-fit-jeans",
    "title": "Levi's Men's 511 Slim Fit Stretch Denim Jeans (Dark Indigo) (FLIPKART)",
    "name": "Levi's Men's 511 Slim Fit Stretch Denim Jeans (Dark Indigo)",
    "product_name": "Levi's Men's 511 Slim Fit Stretch Denim Jeans (Dark Indigo)",
    "brand": "Levi's",
    "category": "fashion",
    "platform": "flipkart",
    "price": 2399,
    "originalPrice": 3999,
    "original_price": 3999,
    "discountPercent": 40,
    "discount_percent": 40,
    "rating": 4.3,
    "reviewCount": 9800,
    "review_count": 9800,
    "deliveryEstimate": "3-4 days",
    "delivery_estimate": "3-4 days",
    "imageUrl": "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=900&auto=format&fit=crop&q=80",
    "image_url": "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=900&auto=format&fit=crop&q=80",
    "images": [
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1542272604-780c96856592?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1582552938357-32b906df40cb?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1584370848010-d7fe6bc767ec?w=900&auto=format&fit=crop&q=80"
    ],
    "dimensions": {
      "width": "38.0 cm",
      "height": "105.0 cm",
      "depth": "2.0 cm",
      "weight": "550g"
    },
    "price_history": [
      {
        "month": "May",
        "amazon": 2463,
        "flipkart": 2639,
        "myntra": 2299
      },
      {
        "month": "Jun",
        "amazon": 2375,
        "flipkart": 2567,
        "myntra": 2199
      },
      {
        "month": "Jul",
        "amazon": 2309,
        "flipkart": 2495,
        "myntra": 2159
      },
      {
        "month": "Aug",
        "amazon": 2243,
        "flipkart": 2543,
        "myntra": 2079
      },
      {
        "month": "Sep",
        "amazon": 2155,
        "flipkart": 2447,
        "myntra": 2039
      },
      {
        "month": "Current",
        "amazon": 2199,
        "flipkart": 2399,
        "myntra": 1999
      }
    ],
    "priceHistory": [
      {
        "month": "May",
        "amazon": 2463,
        "flipkart": 2639,
        "myntra": 2299
      },
      {
        "month": "Jun",
        "amazon": 2375,
        "flipkart": 2567,
        "myntra": 2199
      },
      {
        "month": "Jul",
        "amazon": 2309,
        "flipkart": 2495,
        "myntra": 2159
      },
      {
        "month": "Aug",
        "amazon": 2243,
        "flipkart": 2543,
        "myntra": 2079
      },
      {
        "month": "Sep",
        "amazon": 2155,
        "flipkart": 2447,
        "myntra": 2039
      },
      {
        "month": "Current",
        "amazon": 2199,
        "flipkart": 2399,
        "myntra": 1999
      }
    ],
    "productUrl": "https://www.flipkart.com/levis-511-slim-fit",
    "product_url": "https://www.flipkart.com/levis-511-slim-fit",
    "seller": "RetailNet Denim",
    "inStock": true,
    "in_stock": true,
    "sentiment": "yellow",
    "sentimentScore": 87,
    "best_overall_score": 81,
    "is_best_overall": false,
    "isBestOverall": false,
    "whyBuy": "Top rated fashion pick with 40% off and verified fast shipping.",
    "why_buy": "Top rated fashion pick with 40% off and verified fast shipping.",
    "reviewSummary": "Customer sentiment is strongly positive for Levi's build quality and performance.",
    "review_summary": "Customer sentiment is strongly positive for Levi's build quality and performance.",
    "specs": {
      "fit": "Slim from hip to ankle",
      "fabric": "99% Cotton, 1% Elastane with Levi's Flex stretch",
      "rise": "Sits below waist (Mid rise)",
      "leg_opening": "14.5 inch slim leg"
    },
    "reviews": [
      {
        "author": "Harish S",
        "rating": 4,
        "text": "Rich indigo color looks great with white sneakers.",
        "date": "2024-10-29"
      }
    ]
  },
  {
    "id": "levis-511-slim-fit-jeans-myntra",
    "product_id": "levis-511-slim-fit-jeans-myntra",
    "groupId": "levis-511-slim-fit-jeans",
    "group_id": "levis-511-slim-fit-jeans",
    "title": "Levi's Men's 511 Slim Fit Stretch Denim Jeans (Dark Indigo) (MYNTRA)",
    "name": "Levi's Men's 511 Slim Fit Stretch Denim Jeans (Dark Indigo)",
    "product_name": "Levi's Men's 511 Slim Fit Stretch Denim Jeans (Dark Indigo)",
    "brand": "Levi's",
    "category": "fashion",
    "platform": "myntra",
    "price": 1999,
    "originalPrice": 3999,
    "original_price": 3999,
    "discountPercent": 50,
    "discount_percent": 50,
    "rating": 4.5,
    "reviewCount": 18400,
    "review_count": 18400,
    "deliveryEstimate": "1-2 days",
    "delivery_estimate": "1-2 days",
    "imageUrl": "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=900&auto=format&fit=crop&q=80",
    "image_url": "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=900&auto=format&fit=crop&q=80",
    "images": [
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1542272604-780c96856592?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1582552938357-32b906df40cb?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1584370848010-d7fe6bc767ec?w=900&auto=format&fit=crop&q=80"
    ],
    "dimensions": {
      "width": "38.0 cm",
      "height": "105.0 cm",
      "depth": "2.0 cm",
      "weight": "550g"
    },
    "price_history": [
      {
        "month": "May",
        "amazon": 2463,
        "flipkart": 2639,
        "myntra": 2299
      },
      {
        "month": "Jun",
        "amazon": 2375,
        "flipkart": 2567,
        "myntra": 2199
      },
      {
        "month": "Jul",
        "amazon": 2309,
        "flipkart": 2495,
        "myntra": 2159
      },
      {
        "month": "Aug",
        "amazon": 2243,
        "flipkart": 2543,
        "myntra": 2079
      },
      {
        "month": "Sep",
        "amazon": 2155,
        "flipkart": 2447,
        "myntra": 2039
      },
      {
        "month": "Current",
        "amazon": 2199,
        "flipkart": 2399,
        "myntra": 1999
      }
    ],
    "priceHistory": [
      {
        "month": "May",
        "amazon": 2463,
        "flipkart": 2639,
        "myntra": 2299
      },
      {
        "month": "Jun",
        "amazon": 2375,
        "flipkart": 2567,
        "myntra": 2199
      },
      {
        "month": "Jul",
        "amazon": 2309,
        "flipkart": 2495,
        "myntra": 2159
      },
      {
        "month": "Aug",
        "amazon": 2243,
        "flipkart": 2543,
        "myntra": 2079
      },
      {
        "month": "Sep",
        "amazon": 2155,
        "flipkart": 2447,
        "myntra": 2039
      },
      {
        "month": "Current",
        "amazon": 2199,
        "flipkart": 2399,
        "myntra": 1999
      }
    ],
    "productUrl": "https://www.myntra.com/jeans/levis-511-slim-fit",
    "product_url": "https://www.myntra.com/jeans/levis-511-slim-fit",
    "seller": "Levi's Brand Flagship",
    "inStock": true,
    "in_stock": true,
    "sentiment": "green",
    "sentimentScore": 91,
    "best_overall_score": 88,
    "is_best_overall": false,
    "isBestOverall": false,
    "whyBuy": "Top rated fashion pick with 50% off and verified fast shipping.",
    "why_buy": "Top rated fashion pick with 50% off and verified fast shipping.",
    "reviewSummary": "Customer sentiment is strongly positive for Levi's build quality and performance.",
    "review_summary": "Customer sentiment is strongly positive for Levi's build quality and performance.",
    "specs": {
      "fit": "Slim from hip to ankle",
      "fabric": "99% Cotton, 1% Elastane with Levi's Flex stretch",
      "rise": "Sits below waist (Mid rise)",
      "leg_opening": "14.5 inch slim leg"
    },
    "reviews": [
      {
        "author": "Yash P",
        "rating": 5,
        "text": "50% discount on Myntra with genuine red tab.",
        "date": "2024-11-24"
      }
    ]
  },
  {
    "id": "rayban-aviator-classic-amazon",
    "product_id": "rayban-aviator-classic-amazon",
    "groupId": "rayban-aviator-classic",
    "group_id": "rayban-aviator-classic",
    "title": "Ray-Ban Aviator Classic Polarized Sunglasses (Gold Frame / Green G-15 Lens) (AMAZON)",
    "name": "Ray-Ban Aviator Classic Polarized Sunglasses (Gold Frame / Green G-15 Lens)",
    "product_name": "Ray-Ban Aviator Classic Polarized Sunglasses (Gold Frame / Green G-15 Lens)",
    "brand": "Ray-Ban",
    "category": "fashion",
    "platform": "amazon",
    "price": 8490,
    "originalPrice": 10490,
    "original_price": 10490,
    "discountPercent": 19,
    "discount_percent": 19,
    "rating": 4.7,
    "reviewCount": 7210,
    "review_count": 7210,
    "deliveryEstimate": "1-2 days",
    "delivery_estimate": "1-2 days",
    "imageUrl": "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=900&auto=format&fit=crop&q=80",
    "image_url": "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=900&auto=format&fit=crop&q=80",
    "images": [
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1508296695146-257a814070b4?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=900&auto=format&fit=crop&q=80"
    ],
    "dimensions": {
      "width": "14.0 cm",
      "height": "5.0 cm",
      "depth": "13.5 cm",
      "weight": "31g"
    },
    "price_history": [
      {
        "month": "May",
        "amazon": 9509,
        "flipkart": 9779,
        "myntra": 9419
      },
      {
        "month": "Jun",
        "amazon": 9169,
        "flipkart": 9512,
        "myntra": 9009
      },
      {
        "month": "Jul",
        "amazon": 8915,
        "flipkart": 9246,
        "myntra": 8845
      },
      {
        "month": "Aug",
        "amazon": 8660,
        "flipkart": 9423,
        "myntra": 8518
      },
      {
        "month": "Sep",
        "amazon": 8320,
        "flipkart": 9068,
        "myntra": 8354
      },
      {
        "month": "Current",
        "amazon": 8490,
        "flipkart": 8890,
        "myntra": 8190
      }
    ],
    "priceHistory": [
      {
        "month": "May",
        "amazon": 9509,
        "flipkart": 9779,
        "myntra": 9419
      },
      {
        "month": "Jun",
        "amazon": 9169,
        "flipkart": 9512,
        "myntra": 9009
      },
      {
        "month": "Jul",
        "amazon": 8915,
        "flipkart": 9246,
        "myntra": 8845
      },
      {
        "month": "Aug",
        "amazon": 8660,
        "flipkart": 9423,
        "myntra": 8518
      },
      {
        "month": "Sep",
        "amazon": 8320,
        "flipkart": 9068,
        "myntra": 8354
      },
      {
        "month": "Current",
        "amazon": 8490,
        "flipkart": 8890,
        "myntra": 8190
      }
    ],
    "productUrl": "https://www.amazon.in/dp/B00080FGVO",
    "product_url": "https://www.amazon.in/dp/B00080FGVO",
    "seller": "Luxottica India Official",
    "inStock": true,
    "in_stock": true,
    "sentiment": "green",
    "sentimentScore": 94,
    "best_overall_score": 78,
    "is_best_overall": true,
    "isBestOverall": true,
    "whyBuy": "Top rated fashion pick with 19% off and verified fast shipping.",
    "why_buy": "Top rated fashion pick with 19% off and verified fast shipping.",
    "reviewSummary": "Customer sentiment is strongly positive for Ray-Ban build quality and performance.",
    "review_summary": "Customer sentiment is strongly positive for Ray-Ban build quality and performance.",
    "specs": {
      "frame_material": "Corrosion-resistant Gold Alloy Metal",
      "lens": "Polarized G-15 Crystal Green Glass (100% UV400)",
      "size": "58mm standard pilot teardrop lens"
    },
    "reviews": [
      {
        "author": "Aditya S",
        "rating": 5,
        "text": "Glare reduction while highway driving is outstanding.",
        "date": "2024-11-21"
      }
    ]
  },
  {
    "id": "rayban-aviator-classic-flipkart",
    "product_id": "rayban-aviator-classic-flipkart",
    "groupId": "rayban-aviator-classic",
    "group_id": "rayban-aviator-classic",
    "title": "Ray-Ban Aviator Classic Polarized Sunglasses (Gold Frame / Green G-15 Lens) (FLIPKART)",
    "name": "Ray-Ban Aviator Classic Polarized Sunglasses (Gold Frame / Green G-15 Lens)",
    "product_name": "Ray-Ban Aviator Classic Polarized Sunglasses (Gold Frame / Green G-15 Lens)",
    "brand": "Ray-Ban",
    "category": "fashion",
    "platform": "flipkart",
    "price": 8890,
    "originalPrice": 10490,
    "original_price": 10490,
    "discountPercent": 15,
    "discount_percent": 15,
    "rating": 4.5,
    "reviewCount": 3890,
    "review_count": 3890,
    "deliveryEstimate": "3-4 days",
    "delivery_estimate": "3-4 days",
    "imageUrl": "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=900&auto=format&fit=crop&q=80",
    "image_url": "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=900&auto=format&fit=crop&q=80",
    "images": [
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1508296695146-257a814070b4?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=900&auto=format&fit=crop&q=80"
    ],
    "dimensions": {
      "width": "14.0 cm",
      "height": "5.0 cm",
      "depth": "13.5 cm",
      "weight": "31g"
    },
    "price_history": [
      {
        "month": "May",
        "amazon": 9509,
        "flipkart": 9779,
        "myntra": 9419
      },
      {
        "month": "Jun",
        "amazon": 9169,
        "flipkart": 9512,
        "myntra": 9009
      },
      {
        "month": "Jul",
        "amazon": 8915,
        "flipkart": 9246,
        "myntra": 8845
      },
      {
        "month": "Aug",
        "amazon": 8660,
        "flipkart": 9423,
        "myntra": 8518
      },
      {
        "month": "Sep",
        "amazon": 8320,
        "flipkart": 9068,
        "myntra": 8354
      },
      {
        "month": "Current",
        "amazon": 8490,
        "flipkart": 8890,
        "myntra": 8190
      }
    ],
    "priceHistory": [
      {
        "month": "May",
        "amazon": 9509,
        "flipkart": 9779,
        "myntra": 9419
      },
      {
        "month": "Jun",
        "amazon": 9169,
        "flipkart": 9512,
        "myntra": 9009
      },
      {
        "month": "Jul",
        "amazon": 8915,
        "flipkart": 9246,
        "myntra": 8845
      },
      {
        "month": "Aug",
        "amazon": 8660,
        "flipkart": 9423,
        "myntra": 8518
      },
      {
        "month": "Sep",
        "amazon": 8320,
        "flipkart": 9068,
        "myntra": 8354
      },
      {
        "month": "Current",
        "amazon": 8490,
        "flipkart": 8890,
        "myntra": 8190
      }
    ],
    "productUrl": "https://www.flipkart.com/ray-ban-aviator",
    "product_url": "https://www.flipkart.com/ray-ban-aviator",
    "seller": "Optics SuperStore",
    "inStock": true,
    "in_stock": true,
    "sentiment": "green",
    "sentimentScore": 91,
    "best_overall_score": 74,
    "is_best_overall": false,
    "isBestOverall": false,
    "whyBuy": "Top rated fashion pick with 15% off and verified fast shipping.",
    "why_buy": "Top rated fashion pick with 15% off and verified fast shipping.",
    "reviewSummary": "Customer sentiment is strongly positive for Ray-Ban build quality and performance.",
    "review_summary": "Customer sentiment is strongly positive for Ray-Ban build quality and performance.",
    "specs": {
      "frame_material": "Corrosion-resistant Gold Alloy Metal",
      "lens": "Polarized G-15 Crystal Green Glass (100% UV400)",
      "size": "58mm standard pilot teardrop lens"
    },
    "reviews": [
      {
        "author": "Kunal M",
        "rating": 5,
        "text": "Original leather case and microfiber cloth included.",
        "date": "2024-10-14"
      }
    ]
  },
  {
    "id": "rayban-aviator-classic-myntra",
    "product_id": "rayban-aviator-classic-myntra",
    "groupId": "rayban-aviator-classic",
    "group_id": "rayban-aviator-classic",
    "title": "Ray-Ban Aviator Classic Polarized Sunglasses (Gold Frame / Green G-15 Lens) (MYNTRA)",
    "name": "Ray-Ban Aviator Classic Polarized Sunglasses (Gold Frame / Green G-15 Lens)",
    "product_name": "Ray-Ban Aviator Classic Polarized Sunglasses (Gold Frame / Green G-15 Lens)",
    "brand": "Ray-Ban",
    "category": "fashion",
    "platform": "myntra",
    "price": 8190,
    "originalPrice": 10490,
    "original_price": 10490,
    "discountPercent": 22,
    "discount_percent": 22,
    "rating": 4.7,
    "reviewCount": 5120,
    "review_count": 5120,
    "deliveryEstimate": "1-2 days",
    "delivery_estimate": "1-2 days",
    "imageUrl": "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=900&auto=format&fit=crop&q=80",
    "image_url": "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=900&auto=format&fit=crop&q=80",
    "images": [
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1508296695146-257a814070b4?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=900&auto=format&fit=crop&q=80"
    ],
    "dimensions": {
      "width": "14.0 cm",
      "height": "5.0 cm",
      "depth": "13.5 cm",
      "weight": "31g"
    },
    "price_history": [
      {
        "month": "May",
        "amazon": 9509,
        "flipkart": 9779,
        "myntra": 9419
      },
      {
        "month": "Jun",
        "amazon": 9169,
        "flipkart": 9512,
        "myntra": 9009
      },
      {
        "month": "Jul",
        "amazon": 8915,
        "flipkart": 9246,
        "myntra": 8845
      },
      {
        "month": "Aug",
        "amazon": 8660,
        "flipkart": 9423,
        "myntra": 8518
      },
      {
        "month": "Sep",
        "amazon": 8320,
        "flipkart": 9068,
        "myntra": 8354
      },
      {
        "month": "Current",
        "amazon": 8490,
        "flipkart": 8890,
        "myntra": 8190
      }
    ],
    "priceHistory": [
      {
        "month": "May",
        "amazon": 9509,
        "flipkart": 9779,
        "myntra": 9419
      },
      {
        "month": "Jun",
        "amazon": 9169,
        "flipkart": 9512,
        "myntra": 9009
      },
      {
        "month": "Jul",
        "amazon": 8915,
        "flipkart": 9246,
        "myntra": 8845
      },
      {
        "month": "Aug",
        "amazon": 8660,
        "flipkart": 9423,
        "myntra": 8518
      },
      {
        "month": "Sep",
        "amazon": 8320,
        "flipkart": 9068,
        "myntra": 8354
      },
      {
        "month": "Current",
        "amazon": 8490,
        "flipkart": 8890,
        "myntra": 8190
      }
    ],
    "productUrl": "https://www.myntra.com/sunglasses/ray-ban-aviator",
    "product_url": "https://www.myntra.com/sunglasses/ray-ban-aviator",
    "seller": "Ray-Ban Brand Boutique",
    "inStock": true,
    "in_stock": true,
    "sentiment": "green",
    "sentimentScore": 94,
    "best_overall_score": 79,
    "is_best_overall": false,
    "isBestOverall": false,
    "whyBuy": "Top rated fashion pick with 22% off and verified fast shipping.",
    "why_buy": "Top rated fashion pick with 22% off and verified fast shipping.",
    "reviewSummary": "Customer sentiment is strongly positive for Ray-Ban build quality and performance.",
    "review_summary": "Customer sentiment is strongly positive for Ray-Ban build quality and performance.",
    "specs": {
      "frame_material": "Corrosion-resistant Gold Alloy Metal",
      "lens": "Polarized G-15 Crystal Green Glass (100% UV400)",
      "size": "58mm standard pilot teardrop lens"
    },
    "reviews": [
      {
        "author": "Tarun D",
        "rating": 5,
        "text": "Authentic Luxottica barcode verified.",
        "date": "2024-11-26"
      }
    ]
  },
  {
    "id": "atomberg-renesa-bldc-fan-amazon",
    "product_id": "atomberg-renesa-bldc-fan-amazon",
    "groupId": "atomberg-renesa-bldc-fan",
    "group_id": "atomberg-renesa-bldc-fan",
    "title": "Atomberg Renesa 1200mm BLDC Motor Smart Ceiling Fan with Remote (AMAZON)",
    "name": "Atomberg Renesa 1200mm BLDC Motor Smart Ceiling Fan with Remote",
    "product_name": "Atomberg Renesa 1200mm BLDC Motor Smart Ceiling Fan with Remote",
    "brand": "Atomberg",
    "category": "home",
    "platform": "amazon",
    "price": 3699,
    "originalPrice": 4990,
    "original_price": 4990,
    "discountPercent": 26,
    "discount_percent": 26,
    "rating": 4.6,
    "reviewCount": 42100,
    "review_count": 42100,
    "deliveryEstimate": "1-2 days",
    "delivery_estimate": "1-2 days",
    "imageUrl": "https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b?w=900&auto=format&fit=crop&q=80",
    "image_url": "https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b?w=900&auto=format&fit=crop&q=80",
    "images": [
      "https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=900&auto=format&fit=crop&q=80"
    ],
    "dimensions": {
      "width": "120.0 cm",
      "height": "35.0 cm",
      "depth": "120.0 cm",
      "weight": "4.2 kg"
    },
    "price_history": [
      {
        "month": "May",
        "amazon": 4143,
        "flipkart": 3904,
        "myntra": 4474
      },
      {
        "month": "Jun",
        "amazon": 3995,
        "flipkart": 3797,
        "myntra": 4279
      },
      {
        "month": "Jul",
        "amazon": 3884,
        "flipkart": 3691,
        "myntra": 4201
      },
      {
        "month": "Aug",
        "amazon": 3773,
        "flipkart": 3762,
        "myntra": 4046
      },
      {
        "month": "Sep",
        "amazon": 3625,
        "flipkart": 3620,
        "myntra": 3968
      },
      {
        "month": "Current",
        "amazon": 3699,
        "flipkart": 3549,
        "myntra": 3890
      }
    ],
    "priceHistory": [
      {
        "month": "May",
        "amazon": 4143,
        "flipkart": 3904,
        "myntra": 4474
      },
      {
        "month": "Jun",
        "amazon": 3995,
        "flipkart": 3797,
        "myntra": 4279
      },
      {
        "month": "Jul",
        "amazon": 3884,
        "flipkart": 3691,
        "myntra": 4201
      },
      {
        "month": "Aug",
        "amazon": 3773,
        "flipkart": 3762,
        "myntra": 4046
      },
      {
        "month": "Sep",
        "amazon": 3625,
        "flipkart": 3620,
        "myntra": 3968
      },
      {
        "month": "Current",
        "amazon": 3699,
        "flipkart": 3549,
        "myntra": 3890
      }
    ],
    "productUrl": "https://www.amazon.in/dp/B07P8N9KLM",
    "product_url": "https://www.amazon.in/dp/B07P8N9KLM",
    "seller": "Atomberg Technologies Official",
    "inStock": true,
    "in_stock": true,
    "sentiment": "green",
    "sentimentScore": 92,
    "best_overall_score": 79,
    "is_best_overall": true,
    "isBestOverall": true,
    "whyBuy": "Top rated home pick with 26% off and verified fast shipping.",
    "why_buy": "Top rated home pick with 26% off and verified fast shipping.",
    "reviewSummary": "Customer sentiment is strongly positive for Atomberg build quality and performance.",
    "review_summary": "Customer sentiment is strongly positive for Atomberg build quality and performance.",
    "specs": {
      "power": "28W at highest speed (saves 65% electricity)",
      "motor": "Energy efficient BLDC motor",
      "blade_sweep": "1200mm (48 inch) aerodynamic blades",
      "control": "Smart IR Remote with Boost, Sleep, and Timer modes"
    },
    "reviews": [
      {
        "author": "Manish R",
        "rating": 5,
        "text": "Completely silent and electric bill dropped noticeably.",
        "date": "2024-11-14"
      }
    ]
  },
  {
    "id": "atomberg-renesa-bldc-fan-flipkart",
    "product_id": "atomberg-renesa-bldc-fan-flipkart",
    "groupId": "atomberg-renesa-bldc-fan",
    "group_id": "atomberg-renesa-bldc-fan",
    "title": "Atomberg Renesa 1200mm BLDC Motor Smart Ceiling Fan with Remote (FLIPKART)",
    "name": "Atomberg Renesa 1200mm BLDC Motor Smart Ceiling Fan with Remote",
    "product_name": "Atomberg Renesa 1200mm BLDC Motor Smart Ceiling Fan with Remote",
    "brand": "Atomberg",
    "category": "home",
    "platform": "flipkart",
    "price": 3549,
    "originalPrice": 4990,
    "original_price": 4990,
    "discountPercent": 29,
    "discount_percent": 29,
    "rating": 4.5,
    "reviewCount": 28400,
    "review_count": 28400,
    "deliveryEstimate": "2-3 days",
    "delivery_estimate": "2-3 days",
    "imageUrl": "https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b?w=900&auto=format&fit=crop&q=80",
    "image_url": "https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b?w=900&auto=format&fit=crop&q=80",
    "images": [
      "https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=900&auto=format&fit=crop&q=80"
    ],
    "dimensions": {
      "width": "120.0 cm",
      "height": "35.0 cm",
      "depth": "120.0 cm",
      "weight": "4.2 kg"
    },
    "price_history": [
      {
        "month": "May",
        "amazon": 4143,
        "flipkart": 3904,
        "myntra": 4474
      },
      {
        "month": "Jun",
        "amazon": 3995,
        "flipkart": 3797,
        "myntra": 4279
      },
      {
        "month": "Jul",
        "amazon": 3884,
        "flipkart": 3691,
        "myntra": 4201
      },
      {
        "month": "Aug",
        "amazon": 3773,
        "flipkart": 3762,
        "myntra": 4046
      },
      {
        "month": "Sep",
        "amazon": 3625,
        "flipkart": 3620,
        "myntra": 3968
      },
      {
        "month": "Current",
        "amazon": 3699,
        "flipkart": 3549,
        "myntra": 3890
      }
    ],
    "priceHistory": [
      {
        "month": "May",
        "amazon": 4143,
        "flipkart": 3904,
        "myntra": 4474
      },
      {
        "month": "Jun",
        "amazon": 3995,
        "flipkart": 3797,
        "myntra": 4279
      },
      {
        "month": "Jul",
        "amazon": 3884,
        "flipkart": 3691,
        "myntra": 4201
      },
      {
        "month": "Aug",
        "amazon": 3773,
        "flipkart": 3762,
        "myntra": 4046
      },
      {
        "month": "Sep",
        "amazon": 3625,
        "flipkart": 3620,
        "myntra": 3968
      },
      {
        "month": "Current",
        "amazon": 3699,
        "flipkart": 3549,
        "myntra": 3890
      }
    ],
    "productUrl": "https://www.flipkart.com/atomberg-renesa",
    "product_url": "https://www.flipkart.com/atomberg-renesa",
    "seller": "RetailNet Home",
    "inStock": true,
    "in_stock": true,
    "sentiment": "green",
    "sentimentScore": 91,
    "best_overall_score": 79,
    "is_best_overall": false,
    "isBestOverall": false,
    "whyBuy": "Top rated home pick with 29% off and verified fast shipping.",
    "why_buy": "Top rated home pick with 29% off and verified fast shipping.",
    "reviewSummary": "Customer sentiment is strongly positive for Atomberg build quality and performance.",
    "review_summary": "Customer sentiment is strongly positive for Atomberg build quality and performance.",
    "specs": {
      "power": "28W at highest speed (saves 65% electricity)",
      "motor": "Energy efficient BLDC motor",
      "blade_sweep": "1200mm (48 inch) aerodynamic blades",
      "control": "Smart IR Remote with Boost, Sleep, and Timer modes"
    },
    "reviews": [
      {
        "author": "Sunil K",
        "rating": 5,
        "text": "Remote works from any corner of the room.",
        "date": "2024-10-18"
      }
    ]
  },
  {
    "id": "atomberg-renesa-bldc-fan-myntra",
    "product_id": "atomberg-renesa-bldc-fan-myntra",
    "groupId": "atomberg-renesa-bldc-fan",
    "group_id": "atomberg-renesa-bldc-fan",
    "title": "Atomberg Renesa 1200mm BLDC Motor Smart Ceiling Fan with Remote (MYNTRA)",
    "name": "Atomberg Renesa 1200mm BLDC Motor Smart Ceiling Fan with Remote",
    "product_name": "Atomberg Renesa 1200mm BLDC Motor Smart Ceiling Fan with Remote",
    "brand": "Atomberg",
    "category": "home",
    "platform": "myntra",
    "price": 3890,
    "originalPrice": 4990,
    "original_price": 4990,
    "discountPercent": 22,
    "discount_percent": 22,
    "rating": 4.5,
    "reviewCount": 1200,
    "review_count": 1200,
    "deliveryEstimate": "3-4 days",
    "delivery_estimate": "3-4 days",
    "imageUrl": "https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b?w=900&auto=format&fit=crop&q=80",
    "image_url": "https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b?w=900&auto=format&fit=crop&q=80",
    "images": [
      "https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=900&auto=format&fit=crop&q=80"
    ],
    "dimensions": {
      "width": "120.0 cm",
      "height": "35.0 cm",
      "depth": "120.0 cm",
      "weight": "4.2 kg"
    },
    "price_history": [
      {
        "month": "May",
        "amazon": 4143,
        "flipkart": 3904,
        "myntra": 4474
      },
      {
        "month": "Jun",
        "amazon": 3995,
        "flipkart": 3797,
        "myntra": 4279
      },
      {
        "month": "Jul",
        "amazon": 3884,
        "flipkart": 3691,
        "myntra": 4201
      },
      {
        "month": "Aug",
        "amazon": 3773,
        "flipkart": 3762,
        "myntra": 4046
      },
      {
        "month": "Sep",
        "amazon": 3625,
        "flipkart": 3620,
        "myntra": 3968
      },
      {
        "month": "Current",
        "amazon": 3699,
        "flipkart": 3549,
        "myntra": 3890
      }
    ],
    "priceHistory": [
      {
        "month": "May",
        "amazon": 4143,
        "flipkart": 3904,
        "myntra": 4474
      },
      {
        "month": "Jun",
        "amazon": 3995,
        "flipkart": 3797,
        "myntra": 4279
      },
      {
        "month": "Jul",
        "amazon": 3884,
        "flipkart": 3691,
        "myntra": 4201
      },
      {
        "month": "Aug",
        "amazon": 3773,
        "flipkart": 3762,
        "myntra": 4046
      },
      {
        "month": "Sep",
        "amazon": 3625,
        "flipkart": 3620,
        "myntra": 3968
      },
      {
        "month": "Current",
        "amazon": 3699,
        "flipkart": 3549,
        "myntra": 3890
      }
    ],
    "productUrl": "https://www.myntra.com/home-appliances/atomberg-fan",
    "product_url": "https://www.myntra.com/home-appliances/atomberg-fan",
    "seller": "Home Decor Studio",
    "inStock": true,
    "in_stock": true,
    "sentiment": "green",
    "sentimentScore": 91,
    "best_overall_score": 76,
    "is_best_overall": false,
    "isBestOverall": false,
    "whyBuy": "Top rated home pick with 22% off and verified fast shipping.",
    "why_buy": "Top rated home pick with 22% off and verified fast shipping.",
    "reviewSummary": "Customer sentiment is strongly positive for Atomberg build quality and performance.",
    "review_summary": "Customer sentiment is strongly positive for Atomberg build quality and performance.",
    "specs": {
      "power": "28W at highest speed (saves 65% electricity)",
      "motor": "Energy efficient BLDC motor",
      "blade_sweep": "1200mm (48 inch) aerodynamic blades",
      "control": "Smart IR Remote with Boost, Sleep, and Timer modes"
    },
    "reviews": [
      {
        "author": "Archana S",
        "rating": 4,
        "text": "Sleek look on false ceiling.",
        "date": "2024-11-09"
      }
    ]
  },
  {
    "id": "philips-digital-airfryer-xl-amazon",
    "product_id": "philips-digital-airfryer-xl-amazon",
    "groupId": "philips-digital-airfryer-xl",
    "group_id": "philips-digital-airfryer-xl",
    "title": "Philips Digital Air Fryer XL (4.1L Capacity, 1400W Rapid Air Technology) (AMAZON)",
    "name": "Philips Digital Air Fryer XL (4.1L Capacity, 1400W Rapid Air Technology)",
    "product_name": "Philips Digital Air Fryer XL (4.1L Capacity, 1400W Rapid Air Technology)",
    "brand": "Philips",
    "category": "home",
    "platform": "amazon",
    "price": 7999,
    "originalPrice": 11995,
    "original_price": 11995,
    "discountPercent": 33,
    "discount_percent": 33,
    "rating": 4.6,
    "reviewCount": 19800,
    "review_count": 19800,
    "deliveryEstimate": "1-2 days",
    "delivery_estimate": "1-2 days",
    "imageUrl": "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=900&auto=format&fit=crop&q=80",
    "image_url": "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=900&auto=format&fit=crop&q=80",
    "images": [
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1570222094114-d054a817e56b?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=900&auto=format&fit=crop&q=80"
    ],
    "dimensions": {
      "width": "35.5 cm",
      "height": "33.8 cm",
      "depth": "35.5 cm",
      "weight": "4.55 kg"
    },
    "price_history": [
      {
        "month": "May",
        "amazon": 8959,
        "flipkart": 8469,
        "myntra": 9764
      },
      {
        "month": "Jun",
        "amazon": 8639,
        "flipkart": 8238,
        "myntra": 9339
      },
      {
        "month": "Jul",
        "amazon": 8399,
        "flipkart": 8007,
        "myntra": 9169
      },
      {
        "month": "Aug",
        "amazon": 8159,
        "flipkart": 8161,
        "myntra": 8830
      },
      {
        "month": "Sep",
        "amazon": 7839,
        "flipkart": 7853,
        "myntra": 8660
      },
      {
        "month": "Current",
        "amazon": 7999,
        "flipkart": 7699,
        "myntra": 8490
      }
    ],
    "priceHistory": [
      {
        "month": "May",
        "amazon": 8959,
        "flipkart": 8469,
        "myntra": 9764
      },
      {
        "month": "Jun",
        "amazon": 8639,
        "flipkart": 8238,
        "myntra": 9339
      },
      {
        "month": "Jul",
        "amazon": 8399,
        "flipkart": 8007,
        "myntra": 9169
      },
      {
        "month": "Aug",
        "amazon": 8159,
        "flipkart": 8161,
        "myntra": 8830
      },
      {
        "month": "Sep",
        "amazon": 7839,
        "flipkart": 7853,
        "myntra": 8660
      },
      {
        "month": "Current",
        "amazon": 7999,
        "flipkart": 7699,
        "myntra": 8490
      }
    ],
    "productUrl": "https://www.amazon.in/dp/B09B1Y8TKL",
    "product_url": "https://www.amazon.in/dp/B09B1Y8TKL",
    "seller": "Philips Domestic Appliances",
    "inStock": true,
    "in_stock": true,
    "sentiment": "green",
    "sentimentScore": 92,
    "best_overall_score": 82,
    "is_best_overall": true,
    "isBestOverall": true,
    "whyBuy": "Top rated home pick with 33% off and verified fast shipping.",
    "why_buy": "Top rated home pick with 33% off and verified fast shipping.",
    "reviewSummary": "Customer sentiment is strongly positive for Philips build quality and performance.",
    "review_summary": "Customer sentiment is strongly positive for Philips build quality and performance.",
    "specs": {
      "capacity": "4.1 Litres XL Basket (up to 4 portions)",
      "technology": "Rapid Air Technology (up to 90% less fat)",
      "controls": "Digital Touch Screen with 7 presets + Keep Warm function",
      "power": "1400W powerful heating element"
    },
    "reviews": [
      {
        "author": "Pooja V",
        "rating": 5,
        "text": "Fries and chicken tikka turn out crispy with 1 spoon oil.",
        "date": "2024-11-20"
      }
    ]
  },
  {
    "id": "philips-digital-airfryer-xl-flipkart",
    "product_id": "philips-digital-airfryer-xl-flipkart",
    "groupId": "philips-digital-airfryer-xl",
    "group_id": "philips-digital-airfryer-xl",
    "title": "Philips Digital Air Fryer XL (4.1L Capacity, 1400W Rapid Air Technology) (FLIPKART)",
    "name": "Philips Digital Air Fryer XL (4.1L Capacity, 1400W Rapid Air Technology)",
    "product_name": "Philips Digital Air Fryer XL (4.1L Capacity, 1400W Rapid Air Technology)",
    "brand": "Philips",
    "category": "home",
    "platform": "flipkart",
    "price": 7699,
    "originalPrice": 11995,
    "original_price": 11995,
    "discountPercent": 36,
    "discount_percent": 36,
    "rating": 4.5,
    "reviewCount": 12400,
    "review_count": 12400,
    "deliveryEstimate": "2-3 days",
    "delivery_estimate": "2-3 days",
    "imageUrl": "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=900&auto=format&fit=crop&q=80",
    "image_url": "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=900&auto=format&fit=crop&q=80",
    "images": [
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1570222094114-d054a817e56b?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=900&auto=format&fit=crop&q=80"
    ],
    "dimensions": {
      "width": "35.5 cm",
      "height": "33.8 cm",
      "depth": "35.5 cm",
      "weight": "4.55 kg"
    },
    "price_history": [
      {
        "month": "May",
        "amazon": 8959,
        "flipkart": 8469,
        "myntra": 9764
      },
      {
        "month": "Jun",
        "amazon": 8639,
        "flipkart": 8238,
        "myntra": 9339
      },
      {
        "month": "Jul",
        "amazon": 8399,
        "flipkart": 8007,
        "myntra": 9169
      },
      {
        "month": "Aug",
        "amazon": 8159,
        "flipkart": 8161,
        "myntra": 8830
      },
      {
        "month": "Sep",
        "amazon": 7839,
        "flipkart": 7853,
        "myntra": 8660
      },
      {
        "month": "Current",
        "amazon": 7999,
        "flipkart": 7699,
        "myntra": 8490
      }
    ],
    "priceHistory": [
      {
        "month": "May",
        "amazon": 8959,
        "flipkart": 8469,
        "myntra": 9764
      },
      {
        "month": "Jun",
        "amazon": 8639,
        "flipkart": 8238,
        "myntra": 9339
      },
      {
        "month": "Jul",
        "amazon": 8399,
        "flipkart": 8007,
        "myntra": 9169
      },
      {
        "month": "Aug",
        "amazon": 8159,
        "flipkart": 8161,
        "myntra": 8830
      },
      {
        "month": "Sep",
        "amazon": 7839,
        "flipkart": 7853,
        "myntra": 8660
      },
      {
        "month": "Current",
        "amazon": 7999,
        "flipkart": 7699,
        "myntra": 8490
      }
    ],
    "productUrl": "https://www.flipkart.com/philips-digital-airfryer",
    "product_url": "https://www.flipkart.com/philips-digital-airfryer",
    "seller": "SuperComNet Kitchen",
    "inStock": true,
    "in_stock": true,
    "sentiment": "green",
    "sentimentScore": 91,
    "best_overall_score": 82,
    "is_best_overall": false,
    "isBestOverall": false,
    "whyBuy": "Top rated home pick with 36% off and verified fast shipping.",
    "why_buy": "Top rated home pick with 36% off and verified fast shipping.",
    "reviewSummary": "Customer sentiment is strongly positive for Philips build quality and performance.",
    "review_summary": "Customer sentiment is strongly positive for Philips build quality and performance.",
    "specs": {
      "capacity": "4.1 Litres XL Basket (up to 4 portions)",
      "technology": "Rapid Air Technology (up to 90% less fat)",
      "controls": "Digital Touch Screen with 7 presets + Keep Warm function",
      "power": "1400W powerful heating element"
    },
    "reviews": [
      {
        "author": "Rohan M",
        "rating": 5,
        "text": "Easy to clean non-stick basket. Dishwasher safe.",
        "date": "2024-10-24"
      }
    ]
  },
  {
    "id": "philips-digital-airfryer-xl-myntra",
    "product_id": "philips-digital-airfryer-xl-myntra",
    "groupId": "philips-digital-airfryer-xl",
    "group_id": "philips-digital-airfryer-xl",
    "title": "Philips Digital Air Fryer XL (4.1L Capacity, 1400W Rapid Air Technology) (MYNTRA)",
    "name": "Philips Digital Air Fryer XL (4.1L Capacity, 1400W Rapid Air Technology)",
    "product_name": "Philips Digital Air Fryer XL (4.1L Capacity, 1400W Rapid Air Technology)",
    "brand": "Philips",
    "category": "home",
    "platform": "myntra",
    "price": 8490,
    "originalPrice": 11995,
    "original_price": 11995,
    "discountPercent": 29,
    "discount_percent": 29,
    "rating": 4.5,
    "reviewCount": 850,
    "review_count": 850,
    "deliveryEstimate": "3-4 days",
    "delivery_estimate": "3-4 days",
    "imageUrl": "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=900&auto=format&fit=crop&q=80",
    "image_url": "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=900&auto=format&fit=crop&q=80",
    "images": [
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1570222094114-d054a817e56b?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=900&auto=format&fit=crop&q=80"
    ],
    "dimensions": {
      "width": "35.5 cm",
      "height": "33.8 cm",
      "depth": "35.5 cm",
      "weight": "4.55 kg"
    },
    "price_history": [
      {
        "month": "May",
        "amazon": 8959,
        "flipkart": 8469,
        "myntra": 9764
      },
      {
        "month": "Jun",
        "amazon": 8639,
        "flipkart": 8238,
        "myntra": 9339
      },
      {
        "month": "Jul",
        "amazon": 8399,
        "flipkart": 8007,
        "myntra": 9169
      },
      {
        "month": "Aug",
        "amazon": 8159,
        "flipkart": 8161,
        "myntra": 8830
      },
      {
        "month": "Sep",
        "amazon": 7839,
        "flipkart": 7853,
        "myntra": 8660
      },
      {
        "month": "Current",
        "amazon": 7999,
        "flipkart": 7699,
        "myntra": 8490
      }
    ],
    "priceHistory": [
      {
        "month": "May",
        "amazon": 8959,
        "flipkart": 8469,
        "myntra": 9764
      },
      {
        "month": "Jun",
        "amazon": 8639,
        "flipkart": 8238,
        "myntra": 9339
      },
      {
        "month": "Jul",
        "amazon": 8399,
        "flipkart": 8007,
        "myntra": 9169
      },
      {
        "month": "Aug",
        "amazon": 8159,
        "flipkart": 8161,
        "myntra": 8830
      },
      {
        "month": "Sep",
        "amazon": 7839,
        "flipkart": 7853,
        "myntra": 8660
      },
      {
        "month": "Current",
        "amazon": 7999,
        "flipkart": 7699,
        "myntra": 8490
      }
    ],
    "productUrl": "https://www.myntra.com/kitchen/philips-air-fryer",
    "product_url": "https://www.myntra.com/kitchen/philips-air-fryer",
    "seller": "Philips Luxe Appliances",
    "inStock": true,
    "in_stock": true,
    "sentiment": "green",
    "sentimentScore": 91,
    "best_overall_score": 79,
    "is_best_overall": false,
    "isBestOverall": false,
    "whyBuy": "Top rated home pick with 29% off and verified fast shipping.",
    "why_buy": "Top rated home pick with 29% off and verified fast shipping.",
    "reviewSummary": "Customer sentiment is strongly positive for Philips build quality and performance.",
    "review_summary": "Customer sentiment is strongly positive for Philips build quality and performance.",
    "specs": {
      "capacity": "4.1 Litres XL Basket (up to 4 portions)",
      "technology": "Rapid Air Technology (up to 90% less fat)",
      "controls": "Digital Touch Screen with 7 presets + Keep Warm function",
      "power": "1400W powerful heating element"
    },
    "reviews": [
      {
        "author": "Komal D",
        "rating": 4,
        "text": "Very convenient for healthy daily cooking.",
        "date": "2024-11-15"
      }
    ]
  },
  {
    "id": "dyson-v8-absolute-vacuum-amazon",
    "product_id": "dyson-v8-absolute-vacuum-amazon",
    "groupId": "dyson-v8-absolute-vacuum",
    "group_id": "dyson-v8-absolute-vacuum",
    "title": "Dyson V8 Absolute Cordless Stick Vacuum Cleaner (AMAZON)",
    "name": "Dyson V8 Absolute Cordless Stick Vacuum Cleaner",
    "product_name": "Dyson V8 Absolute Cordless Stick Vacuum Cleaner",
    "brand": "Dyson",
    "category": "home",
    "platform": "amazon",
    "price": 29900,
    "originalPrice": 43900,
    "original_price": 43900,
    "discountPercent": 32,
    "discount_percent": 32,
    "rating": 4.7,
    "reviewCount": 8940,
    "review_count": 8940,
    "deliveryEstimate": "1-2 days",
    "delivery_estimate": "1-2 days",
    "imageUrl": "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=900&auto=format&fit=crop&q=80",
    "image_url": "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=900&auto=format&fit=crop&q=80",
    "images": [
      "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=900&auto=format&fit=crop&q=80"
    ],
    "dimensions": {
      "width": "25.0 cm",
      "height": "124.4 cm",
      "depth": "22.4 cm",
      "weight": "2.61 kg"
    },
    "price_history": [
      {
        "month": "May",
        "amazon": 33488,
        "flipkart": 31889,
        "myntra": 36685
      },
      {
        "month": "Jun",
        "amazon": 32292,
        "flipkart": 31019,
        "myntra": 35090
      },
      {
        "month": "Jul",
        "amazon": 31395,
        "flipkart": 30150,
        "myntra": 34452
      },
      {
        "month": "Aug",
        "amazon": 30498,
        "flipkart": 30729,
        "myntra": 33176
      },
      {
        "month": "Sep",
        "amazon": 29302,
        "flipkart": 29570,
        "myntra": 32538
      },
      {
        "month": "Current",
        "amazon": 29900,
        "flipkart": 28990,
        "myntra": 31900
      }
    ],
    "priceHistory": [
      {
        "month": "May",
        "amazon": 33488,
        "flipkart": 31889,
        "myntra": 36685
      },
      {
        "month": "Jun",
        "amazon": 32292,
        "flipkart": 31019,
        "myntra": 35090
      },
      {
        "month": "Jul",
        "amazon": 31395,
        "flipkart": 30150,
        "myntra": 34452
      },
      {
        "month": "Aug",
        "amazon": 30498,
        "flipkart": 30729,
        "myntra": 33176
      },
      {
        "month": "Sep",
        "amazon": 29302,
        "flipkart": 29570,
        "myntra": 32538
      },
      {
        "month": "Current",
        "amazon": 29900,
        "flipkart": 28990,
        "myntra": 31900
      }
    ],
    "productUrl": "https://www.amazon.in/dp/B09V7N8L92",
    "product_url": "https://www.amazon.in/dp/B09V7N8L92",
    "seller": "Dyson India Official",
    "inStock": true,
    "in_stock": true,
    "sentiment": "green",
    "sentimentScore": 94,
    "best_overall_score": 83,
    "is_best_overall": true,
    "isBestOverall": true,
    "whyBuy": "Top rated home pick with 32% off and verified fast shipping.",
    "why_buy": "Top rated home pick with 32% off and verified fast shipping.",
    "reviewSummary": "Customer sentiment is strongly positive for Dyson build quality and performance.",
    "review_summary": "Customer sentiment is strongly positive for Dyson build quality and performance.",
    "specs": {
      "suction_power": "115 AW powerful fade-free suction",
      "runtime": "Up to 40 minutes continuous cleaning",
      "filtration": "Advanced whole-machine filtration captures 99.99% of dust particles",
      "accessories": "Motorbar cleaner head, Fluffy cleaner head, Mini motorized tool"
    },
    "reviews": [
      {
        "author": "Vivek G",
        "rating": 5,
        "text": "Deep cleans sofas and carpets with ease.",
        "date": "2024-11-18"
      }
    ]
  },
  {
    "id": "dyson-v8-absolute-vacuum-flipkart",
    "product_id": "dyson-v8-absolute-vacuum-flipkart",
    "groupId": "dyson-v8-absolute-vacuum",
    "group_id": "dyson-v8-absolute-vacuum",
    "title": "Dyson V8 Absolute Cordless Stick Vacuum Cleaner (FLIPKART)",
    "name": "Dyson V8 Absolute Cordless Stick Vacuum Cleaner",
    "product_name": "Dyson V8 Absolute Cordless Stick Vacuum Cleaner",
    "brand": "Dyson",
    "category": "home",
    "platform": "flipkart",
    "price": 28990,
    "originalPrice": 43900,
    "original_price": 43900,
    "discountPercent": 34,
    "discount_percent": 34,
    "rating": 4.6,
    "reviewCount": 5120,
    "review_count": 5120,
    "deliveryEstimate": "2-3 days",
    "delivery_estimate": "2-3 days",
    "imageUrl": "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=900&auto=format&fit=crop&q=80",
    "image_url": "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=900&auto=format&fit=crop&q=80",
    "images": [
      "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=900&auto=format&fit=crop&q=80"
    ],
    "dimensions": {
      "width": "25.0 cm",
      "height": "124.4 cm",
      "depth": "22.4 cm",
      "weight": "2.61 kg"
    },
    "price_history": [
      {
        "month": "May",
        "amazon": 33488,
        "flipkart": 31889,
        "myntra": 36685
      },
      {
        "month": "Jun",
        "amazon": 32292,
        "flipkart": 31019,
        "myntra": 35090
      },
      {
        "month": "Jul",
        "amazon": 31395,
        "flipkart": 30150,
        "myntra": 34452
      },
      {
        "month": "Aug",
        "amazon": 30498,
        "flipkart": 30729,
        "myntra": 33176
      },
      {
        "month": "Sep",
        "amazon": 29302,
        "flipkart": 29570,
        "myntra": 32538
      },
      {
        "month": "Current",
        "amazon": 29900,
        "flipkart": 28990,
        "myntra": 31900
      }
    ],
    "priceHistory": [
      {
        "month": "May",
        "amazon": 33488,
        "flipkart": 31889,
        "myntra": 36685
      },
      {
        "month": "Jun",
        "amazon": 32292,
        "flipkart": 31019,
        "myntra": 35090
      },
      {
        "month": "Jul",
        "amazon": 31395,
        "flipkart": 30150,
        "myntra": 34452
      },
      {
        "month": "Aug",
        "amazon": 30498,
        "flipkart": 30729,
        "myntra": 33176
      },
      {
        "month": "Sep",
        "amazon": 29302,
        "flipkart": 29570,
        "myntra": 32538
      },
      {
        "month": "Current",
        "amazon": 29900,
        "flipkart": 28990,
        "myntra": 31900
      }
    ],
    "productUrl": "https://www.flipkart.com/dyson-v8-absolute",
    "product_url": "https://www.flipkart.com/dyson-v8-absolute",
    "seller": "FSAssured Appliances",
    "inStock": true,
    "in_stock": true,
    "sentiment": "green",
    "sentimentScore": 92,
    "best_overall_score": 83,
    "is_best_overall": false,
    "isBestOverall": false,
    "whyBuy": "Top rated home pick with 34% off and verified fast shipping.",
    "why_buy": "Top rated home pick with 34% off and verified fast shipping.",
    "reviewSummary": "Customer sentiment is strongly positive for Dyson build quality and performance.",
    "review_summary": "Customer sentiment is strongly positive for Dyson build quality and performance.",
    "specs": {
      "suction_power": "115 AW powerful fade-free suction",
      "runtime": "Up to 40 minutes continuous cleaning",
      "filtration": "Advanced whole-machine filtration captures 99.99% of dust particles",
      "accessories": "Motorbar cleaner head, Fluffy cleaner head, Mini motorized tool"
    },
    "reviews": [
      {
        "author": "Ananya B",
        "rating": 5,
        "text": "Pet hair removal is instantaneous.",
        "date": "2024-10-30"
      }
    ]
  },
  {
    "id": "dyson-v8-absolute-vacuum-myntra",
    "product_id": "dyson-v8-absolute-vacuum-myntra",
    "groupId": "dyson-v8-absolute-vacuum",
    "group_id": "dyson-v8-absolute-vacuum",
    "title": "Dyson V8 Absolute Cordless Stick Vacuum Cleaner (MYNTRA)",
    "name": "Dyson V8 Absolute Cordless Stick Vacuum Cleaner",
    "product_name": "Dyson V8 Absolute Cordless Stick Vacuum Cleaner",
    "brand": "Dyson",
    "category": "home",
    "platform": "myntra",
    "price": 31900,
    "originalPrice": 43900,
    "original_price": 43900,
    "discountPercent": 27,
    "discount_percent": 27,
    "rating": 4.7,
    "reviewCount": 620,
    "review_count": 620,
    "deliveryEstimate": "3-4 days",
    "delivery_estimate": "3-4 days",
    "imageUrl": "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=900&auto=format&fit=crop&q=80",
    "image_url": "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=900&auto=format&fit=crop&q=80",
    "images": [
      "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=900&auto=format&fit=crop&q=80"
    ],
    "dimensions": {
      "width": "25.0 cm",
      "height": "124.4 cm",
      "depth": "22.4 cm",
      "weight": "2.61 kg"
    },
    "price_history": [
      {
        "month": "May",
        "amazon": 33488,
        "flipkart": 31889,
        "myntra": 36685
      },
      {
        "month": "Jun",
        "amazon": 32292,
        "flipkart": 31019,
        "myntra": 35090
      },
      {
        "month": "Jul",
        "amazon": 31395,
        "flipkart": 30150,
        "myntra": 34452
      },
      {
        "month": "Aug",
        "amazon": 30498,
        "flipkart": 30729,
        "myntra": 33176
      },
      {
        "month": "Sep",
        "amazon": 29302,
        "flipkart": 29570,
        "myntra": 32538
      },
      {
        "month": "Current",
        "amazon": 29900,
        "flipkart": 28990,
        "myntra": 31900
      }
    ],
    "priceHistory": [
      {
        "month": "May",
        "amazon": 33488,
        "flipkart": 31889,
        "myntra": 36685
      },
      {
        "month": "Jun",
        "amazon": 32292,
        "flipkart": 31019,
        "myntra": 35090
      },
      {
        "month": "Jul",
        "amazon": 31395,
        "flipkart": 30150,
        "myntra": 34452
      },
      {
        "month": "Aug",
        "amazon": 30498,
        "flipkart": 30729,
        "myntra": 33176
      },
      {
        "month": "Sep",
        "amazon": 29302,
        "flipkart": 29570,
        "myntra": 32538
      },
      {
        "month": "Current",
        "amazon": 29900,
        "flipkart": 28990,
        "myntra": 31900
      }
    ],
    "productUrl": "https://www.myntra.com/home-appliances/dyson-v8-vacuum",
    "product_url": "https://www.myntra.com/home-appliances/dyson-v8-vacuum",
    "seller": "Dyson Premium Store",
    "inStock": true,
    "in_stock": true,
    "sentiment": "green",
    "sentimentScore": 94,
    "best_overall_score": 81,
    "is_best_overall": false,
    "isBestOverall": false,
    "whyBuy": "Top rated home pick with 27% off and verified fast shipping.",
    "why_buy": "Top rated home pick with 27% off and verified fast shipping.",
    "reviewSummary": "Customer sentiment is strongly positive for Dyson build quality and performance.",
    "review_summary": "Customer sentiment is strongly positive for Dyson build quality and performance.",
    "specs": {
      "suction_power": "115 AW powerful fade-free suction",
      "runtime": "Up to 40 minutes continuous cleaning",
      "filtration": "Advanced whole-machine filtration captures 99.99% of dust particles",
      "accessories": "Motorbar cleaner head, Fluffy cleaner head, Mini motorized tool"
    },
    "reviews": [
      {
        "author": "Karan T",
        "rating": 5,
        "text": "Lightweight and easy to carry upstairs.",
        "date": "2024-11-22"
      }
    ]
  }
];

export const searchMockProducts = ({ query = "", category = "", minPrice = 0, maxPrice = 10000000, platforms = [], sortBy = "relevance" }) => {
  let filtered = [...mockProducts];

  if (category) {
    filtered = filtered.filter((p) => p.category.toLowerCase() === category.toLowerCase());
  }

  if (query) {
    const q = query.toLowerCase();
    filtered = filtered.filter((p) =>
      p.title.toLowerCase().includes(q) ||
      p.name.toLowerCase().includes(q) ||
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
      upgradeReason: `For +₹${(p.price - current.price).toLocaleString("en-IN")}, get ${p.brand} with superior specs and higher ratings.`,
    }));

  return {
    success: true,
    currentProduct: current,
    extraBudget: Number(extraBudget),
    newBudgetCeiling,
    upgradedOptions,
  };
};
