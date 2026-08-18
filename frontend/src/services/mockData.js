// Auto-generated synchronized mock product catalog (57 platform listings)
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
    "rating": 4.7,
    "reviewCount": 12450,
    "review_count": 12450,
    "deliveryEstimate": "Tomorrow (Prime)",
    "delivery_estimate": "Tomorrow (Prime)",
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
    "seller": "Appario Retail (Amazon Prime)",
    "inStock": true,
    "in_stock": true,
    "sentiment": "green",
    "sentimentScore": 94,
    "best_overall_score": 77,
    "is_best_overall": true,
    "isBestOverall": true,
    "whyBuy": "Top rated electronics pick with 17% off and verified fast shipping.",
    "why_buy": "Top rated electronics pick with 17% off and verified fast shipping.",
    "reviewSummary": "Customer sentiment is strongly positive for Sony build quality and performance.",
    "review_summary": "Customer sentiment is strongly positive for Sony build quality and performance.",
    "specs": {
      "type": "Over-ear Wireless ANC",
      "battery": "30 hours with ANC",
      "noise_cancellation": "8 Mics Auto NC Optimizer",
      "sound": "LDAC Hi-Res Audio"
    },
    "reviews": [
      {
        "author": "Rahul K",
        "rating": 5,
        "text": "Genuine Sony item with sealed packaging. Superb quality and quick Prime delivery.",
        "date": "2024-11-15"
      },
      {
        "author": "Priya M",
        "rating": 4,
        "text": "Delivered in 1 day with invoice and warranty certificate. Great experience.",
        "date": "2024-10-22"
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
    "rating": 4.6,
    "reviewCount": 8900,
    "review_count": 8900,
    "deliveryEstimate": "2-3 days (Assured)",
    "delivery_estimate": "2-3 days (Assured)",
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
    "productUrl": "https://www.flipkart.com/search?q=Sony%20WH-1000XM5%20Wireless%20Noise%20Cancelling%20Headphones&otracker=search",
    "product_url": "https://www.flipkart.com/search?q=Sony%20WH-1000XM5%20Wireless%20Noise%20Cancelling%20Headphones&otracker=search",
    "seller": "SuperComNet (Flipkart Assured)",
    "inStock": true,
    "in_stock": true,
    "sentiment": "green",
    "sentimentScore": 92,
    "best_overall_score": 75,
    "is_best_overall": false,
    "isBestOverall": false,
    "whyBuy": "Top rated electronics pick with 15% off and verified fast shipping.",
    "why_buy": "Top rated electronics pick with 15% off and verified fast shipping.",
    "reviewSummary": "Customer sentiment is strongly positive for Sony build quality and performance.",
    "review_summary": "Customer sentiment is strongly positive for Sony build quality and performance.",
    "specs": {
      "type": "Over-ear Wireless ANC",
      "battery": "30 hours with ANC",
      "noise_cancellation": "8 Mics Auto NC Optimizer",
      "sound": "LDAC Hi-Res Audio"
    },
    "reviews": [
      {
        "author": "Karan B",
        "rating": 5,
        "text": "Authentic product with 1-year brand warranty. Very smooth checkout.",
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
    "rating": 4.7,
    "reviewCount": 3400,
    "review_count": 3400,
    "deliveryEstimate": "1-2 days (Express)",
    "delivery_estimate": "1-2 days (Express)",
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
    "productUrl": "https://www.myntra.com/search?rawQuery=Sony%20WH-1000XM5%20Wireless%20Noise%20Cancelling%20Headphones",
    "product_url": "https://www.myntra.com/search?rawQuery=Sony%20WH-1000XM5%20Wireless%20Noise%20Cancelling%20Headphones",
    "seller": "Sony Official Store",
    "inStock": true,
    "in_stock": true,
    "sentiment": "green",
    "sentimentScore": 94,
    "best_overall_score": 75,
    "is_best_overall": false,
    "isBestOverall": false,
    "whyBuy": "Top rated electronics pick with 10% off and verified fast shipping.",
    "why_buy": "Top rated electronics pick with 10% off and verified fast shipping.",
    "reviewSummary": "Customer sentiment is strongly positive for Sony build quality and performance.",
    "review_summary": "Customer sentiment is strongly positive for Sony build quality and performance.",
    "specs": {
      "type": "Over-ear Wireless ANC",
      "battery": "30 hours with ANC",
      "noise_cancellation": "8 Mics Auto NC Optimizer",
      "sound": "LDAC Hi-Res Audio"
    },
    "reviews": [
      {
        "author": "Tanvi S",
        "rating": 5,
        "text": "Original product certified with official brand warranty.",
        "date": "2024-10-02"
      }
    ]
  },
  {
    "id": "apple-airpods-pro-2-amazon",
    "product_id": "apple-airpods-pro-2-amazon",
    "groupId": "apple-airpods-pro-2",
    "group_id": "apple-airpods-pro-2",
    "title": "Apple AirPods Pro (2nd Gen) with MagSafe Case (USB-C) (AMAZON)",
    "name": "Apple AirPods Pro (2nd Gen) with MagSafe Case (USB-C)",
    "product_name": "Apple AirPods Pro (2nd Gen) with MagSafe Case (USB-C)",
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
    "deliveryEstimate": "Tomorrow (Prime)",
    "delivery_estimate": "Tomorrow (Prime)",
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
      "chip": "Apple H2 Headphone Chip",
      "noise_cancellation": "Active Noise Cancellation + Adaptive Audio",
      "spatial_audio": "Personalized Spatial Audio with Head Tracking",
      "battery": "6 hours (30h with Case)"
    },
    "reviews": [
      {
        "author": "Rahul K",
        "rating": 5,
        "text": "Genuine Apple item with sealed packaging. Superb quality and quick Prime delivery.",
        "date": "2024-11-15"
      },
      {
        "author": "Priya M",
        "rating": 4,
        "text": "Delivered in 1 day with invoice and warranty certificate. Great experience.",
        "date": "2024-10-22"
      }
    ]
  },
  {
    "id": "apple-airpods-pro-2-flipkart",
    "product_id": "apple-airpods-pro-2-flipkart",
    "groupId": "apple-airpods-pro-2",
    "group_id": "apple-airpods-pro-2",
    "title": "Apple AirPods Pro (2nd Gen) with MagSafe Case (USB-C) (FLIPKART)",
    "name": "Apple AirPods Pro (2nd Gen) with MagSafe Case (USB-C)",
    "product_name": "Apple AirPods Pro (2nd Gen) with MagSafe Case (USB-C)",
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
    "deliveryEstimate": "2-3 days (Assured)",
    "delivery_estimate": "2-3 days (Assured)",
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
    "productUrl": "https://www.flipkart.com/search?q=Apple%20AirPods%20Pro%20with%20MagSafe%20Case&otracker=search",
    "product_url": "https://www.flipkart.com/search?q=Apple%20AirPods%20Pro%20with%20MagSafe%20Case&otracker=search",
    "seller": "SuperComNet (Flipkart Assured)",
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
      "chip": "Apple H2 Headphone Chip",
      "noise_cancellation": "Active Noise Cancellation + Adaptive Audio",
      "spatial_audio": "Personalized Spatial Audio with Head Tracking",
      "battery": "6 hours (30h with Case)"
    },
    "reviews": [
      {
        "author": "Karan B",
        "rating": 5,
        "text": "Authentic product with 1-year brand warranty. Very smooth checkout.",
        "date": "2024-11-12"
      }
    ]
  },
  {
    "id": "apple-airpods-pro-2-myntra",
    "product_id": "apple-airpods-pro-2-myntra",
    "groupId": "apple-airpods-pro-2",
    "group_id": "apple-airpods-pro-2",
    "title": "Apple AirPods Pro (2nd Gen) with MagSafe Case (USB-C) (MYNTRA)",
    "name": "Apple AirPods Pro (2nd Gen) with MagSafe Case (USB-C)",
    "product_name": "Apple AirPods Pro (2nd Gen) with MagSafe Case (USB-C)",
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
    "deliveryEstimate": "1-2 days (Express)",
    "delivery_estimate": "1-2 days (Express)",
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
    "productUrl": "https://www.myntra.com/search?rawQuery=Apple%20AirPods%20Pro%20with%20MagSafe%20Case",
    "product_url": "https://www.myntra.com/search?rawQuery=Apple%20AirPods%20Pro%20with%20MagSafe%20Case",
    "seller": "Apple Official Store",
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
      "chip": "Apple H2 Headphone Chip",
      "noise_cancellation": "Active Noise Cancellation + Adaptive Audio",
      "spatial_audio": "Personalized Spatial Audio with Head Tracking",
      "battery": "6 hours (30h with Case)"
    },
    "reviews": [
      {
        "author": "Tanvi S",
        "rating": 5,
        "text": "Original product certified with official brand warranty.",
        "date": "2024-10-02"
      }
    ]
  },
  {
    "id": "apple-macbook-air-m2-amazon",
    "product_id": "apple-macbook-air-m2-amazon",
    "groupId": "apple-macbook-air-m2",
    "group_id": "apple-macbook-air-m2",
    "title": "Apple MacBook Air 13.6-inch M2 (8GB Unified Memory, 256GB SSD) (AMAZON)",
    "name": "Apple MacBook Air 13.6-inch M2 (8GB Unified Memory, 256GB SSD)",
    "product_name": "Apple MacBook Air 13.6-inch M2 (8GB Unified Memory, 256GB SSD)",
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
    "deliveryEstimate": "Tomorrow (Prime)",
    "delivery_estimate": "Tomorrow (Prime)",
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
    "seller": "Appario Retail (Amazon Prime)",
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
      "display": "13.6\" Liquid Retina Display (500 nits)",
      "memory": "8GB Unified Memory",
      "storage": "256GB SSD",
      "battery": "Up to 18 hours"
    },
    "reviews": [
      {
        "author": "Rahul K",
        "rating": 5,
        "text": "Genuine Apple item with sealed packaging. Superb quality and quick Prime delivery.",
        "date": "2024-11-15"
      },
      {
        "author": "Priya M",
        "rating": 4,
        "text": "Delivered in 1 day with invoice and warranty certificate. Great experience.",
        "date": "2024-10-22"
      }
    ]
  },
  {
    "id": "apple-macbook-air-m2-flipkart",
    "product_id": "apple-macbook-air-m2-flipkart",
    "groupId": "apple-macbook-air-m2",
    "group_id": "apple-macbook-air-m2",
    "title": "Apple MacBook Air 13.6-inch M2 (8GB Unified Memory, 256GB SSD) (FLIPKART)",
    "name": "Apple MacBook Air 13.6-inch M2 (8GB Unified Memory, 256GB SSD)",
    "product_name": "Apple MacBook Air 13.6-inch M2 (8GB Unified Memory, 256GB SSD)",
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
    "deliveryEstimate": "2-3 days (Assured)",
    "delivery_estimate": "2-3 days (Assured)",
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
    "productUrl": "https://www.flipkart.com/search?q=Apple%20MacBook%20Air%2013.6-inch%20M2&otracker=search",
    "product_url": "https://www.flipkart.com/search?q=Apple%20MacBook%20Air%2013.6-inch%20M2&otracker=search",
    "seller": "SuperComNet (Flipkart Assured)",
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
      "display": "13.6\" Liquid Retina Display (500 nits)",
      "memory": "8GB Unified Memory",
      "storage": "256GB SSD",
      "battery": "Up to 18 hours"
    },
    "reviews": [
      {
        "author": "Karan B",
        "rating": 5,
        "text": "Authentic product with 1-year brand warranty. Very smooth checkout.",
        "date": "2024-11-12"
      }
    ]
  },
  {
    "id": "apple-macbook-air-m2-myntra",
    "product_id": "apple-macbook-air-m2-myntra",
    "groupId": "apple-macbook-air-m2",
    "group_id": "apple-macbook-air-m2",
    "title": "Apple MacBook Air 13.6-inch M2 (8GB Unified Memory, 256GB SSD) (MYNTRA)",
    "name": "Apple MacBook Air 13.6-inch M2 (8GB Unified Memory, 256GB SSD)",
    "product_name": "Apple MacBook Air 13.6-inch M2 (8GB Unified Memory, 256GB SSD)",
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
    "deliveryEstimate": "1-2 days (Express)",
    "delivery_estimate": "1-2 days (Express)",
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
    "productUrl": "https://www.myntra.com/search?rawQuery=Apple%20MacBook%20Air%2013.6-inch%20M2",
    "product_url": "https://www.myntra.com/search?rawQuery=Apple%20MacBook%20Air%2013.6-inch%20M2",
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
      "display": "13.6\" Liquid Retina Display (500 nits)",
      "memory": "8GB Unified Memory",
      "storage": "256GB SSD",
      "battery": "Up to 18 hours"
    },
    "reviews": [
      {
        "author": "Tanvi S",
        "rating": 5,
        "text": "Original product certified with official brand warranty.",
        "date": "2024-10-02"
      }
    ]
  },
  {
    "id": "samsung-galaxy-s24-ultra-amazon",
    "product_id": "samsung-galaxy-s24-ultra-amazon",
    "groupId": "samsung-galaxy-s24-ultra",
    "group_id": "samsung-galaxy-s24-ultra",
    "title": "Samsung Galaxy S24 Ultra 5G (Titanium Gray, 12GB/256GB) (AMAZON)",
    "name": "Samsung Galaxy S24 Ultra 5G (Titanium Gray, 12GB/256GB)",
    "product_name": "Samsung Galaxy S24 Ultra 5G (Titanium Gray, 12GB/256GB)",
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
    "deliveryEstimate": "Tomorrow (Prime)",
    "delivery_estimate": "Tomorrow (Prime)",
    "imageUrl": "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=900&auto=format&fit=crop&q=80",
    "image_url": "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=900&auto=format&fit=crop&q=80",
    "images": [
      "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1605170439002-90845e8c0137?w=900&auto=format&fit=crop&q=80",
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
    "seller": "Appario Retail (Amazon Prime)",
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
      "display": "6.8\" Dynamic AMOLED 2X 120Hz",
      "processor": "Snapdragon 8 Gen 3 for Galaxy",
      "camera": "200MP Quad Camera + 5x Periscope",
      "battery": "5000mAh 45W",
      "s_pen": "Built-in S-Pen"
    },
    "reviews": [
      {
        "author": "Rahul K",
        "rating": 5,
        "text": "Genuine Samsung item with sealed packaging. Superb quality and quick Prime delivery.",
        "date": "2024-11-15"
      },
      {
        "author": "Priya M",
        "rating": 4,
        "text": "Delivered in 1 day with invoice and warranty certificate. Great experience.",
        "date": "2024-10-22"
      }
    ]
  },
  {
    "id": "samsung-galaxy-s24-ultra-flipkart",
    "product_id": "samsung-galaxy-s24-ultra-flipkart",
    "groupId": "samsung-galaxy-s24-ultra",
    "group_id": "samsung-galaxy-s24-ultra",
    "title": "Samsung Galaxy S24 Ultra 5G (Titanium Gray, 12GB/256GB) (FLIPKART)",
    "name": "Samsung Galaxy S24 Ultra 5G (Titanium Gray, 12GB/256GB)",
    "product_name": "Samsung Galaxy S24 Ultra 5G (Titanium Gray, 12GB/256GB)",
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
    "deliveryEstimate": "2-3 days (Assured)",
    "delivery_estimate": "2-3 days (Assured)",
    "imageUrl": "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=900&auto=format&fit=crop&q=80",
    "image_url": "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=900&auto=format&fit=crop&q=80",
    "images": [
      "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1605170439002-90845e8c0137?w=900&auto=format&fit=crop&q=80",
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
    "productUrl": "https://www.flipkart.com/search?q=Samsung%20Galaxy%20S24%20Ultra%205G&otracker=search",
    "product_url": "https://www.flipkart.com/search?q=Samsung%20Galaxy%20S24%20Ultra%205G&otracker=search",
    "seller": "SuperComNet (Flipkart Assured)",
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
      "display": "6.8\" Dynamic AMOLED 2X 120Hz",
      "processor": "Snapdragon 8 Gen 3 for Galaxy",
      "camera": "200MP Quad Camera + 5x Periscope",
      "battery": "5000mAh 45W",
      "s_pen": "Built-in S-Pen"
    },
    "reviews": [
      {
        "author": "Karan B",
        "rating": 5,
        "text": "Authentic product with 1-year brand warranty. Very smooth checkout.",
        "date": "2024-11-12"
      }
    ]
  },
  {
    "id": "samsung-galaxy-s24-ultra-myntra",
    "product_id": "samsung-galaxy-s24-ultra-myntra",
    "groupId": "samsung-galaxy-s24-ultra",
    "group_id": "samsung-galaxy-s24-ultra",
    "title": "Samsung Galaxy S24 Ultra 5G (Titanium Gray, 12GB/256GB) (MYNTRA)",
    "name": "Samsung Galaxy S24 Ultra 5G (Titanium Gray, 12GB/256GB)",
    "product_name": "Samsung Galaxy S24 Ultra 5G (Titanium Gray, 12GB/256GB)",
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
    "deliveryEstimate": "1-2 days (Express)",
    "delivery_estimate": "1-2 days (Express)",
    "imageUrl": "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=900&auto=format&fit=crop&q=80",
    "image_url": "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=900&auto=format&fit=crop&q=80",
    "images": [
      "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1605170439002-90845e8c0137?w=900&auto=format&fit=crop&q=80",
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
    "productUrl": "https://www.myntra.com/search?rawQuery=Samsung%20Galaxy%20S24%20Ultra%205G",
    "product_url": "https://www.myntra.com/search?rawQuery=Samsung%20Galaxy%20S24%20Ultra%205G",
    "seller": "Samsung Official Store",
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
      "display": "6.8\" Dynamic AMOLED 2X 120Hz",
      "processor": "Snapdragon 8 Gen 3 for Galaxy",
      "camera": "200MP Quad Camera + 5x Periscope",
      "battery": "5000mAh 45W",
      "s_pen": "Built-in S-Pen"
    },
    "reviews": [
      {
        "author": "Tanvi S",
        "rating": 5,
        "text": "Original product certified with official brand warranty.",
        "date": "2024-10-02"
      }
    ]
  },
  {
    "id": "asus-rog-zephyrus-g14-amazon",
    "product_id": "asus-rog-zephyrus-g14-amazon",
    "groupId": "asus-rog-zephyrus-g14",
    "group_id": "asus-rog-zephyrus-g14",
    "title": "ASUS ROG Zephyrus G14 (2024) 3K OLED Gaming Laptop (AMAZON)",
    "name": "ASUS ROG Zephyrus G14 (2024) 3K OLED Gaming Laptop",
    "product_name": "ASUS ROG Zephyrus G14 (2024) 3K OLED Gaming Laptop",
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
    "deliveryEstimate": "Tomorrow (Prime)",
    "delivery_estimate": "Tomorrow (Prime)",
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
    "seller": "Appario Retail (Amazon Prime)",
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
      "processor": "AMD Ryzen 9 8945HS",
      "graphics": "NVIDIA GeForce RTX 4060 8GB GDDR6",
      "display": "14\" 3K 120Hz ROG Nebula OLED",
      "memory": "16GB LPDDR5X / 1TB SSD"
    },
    "reviews": [
      {
        "author": "Rahul K",
        "rating": 5,
        "text": "Genuine ASUS item with sealed packaging. Superb quality and quick Prime delivery.",
        "date": "2024-11-15"
      },
      {
        "author": "Priya M",
        "rating": 4,
        "text": "Delivered in 1 day with invoice and warranty certificate. Great experience.",
        "date": "2024-10-22"
      }
    ]
  },
  {
    "id": "asus-rog-zephyrus-g14-flipkart",
    "product_id": "asus-rog-zephyrus-g14-flipkart",
    "groupId": "asus-rog-zephyrus-g14",
    "group_id": "asus-rog-zephyrus-g14",
    "title": "ASUS ROG Zephyrus G14 (2024) 3K OLED Gaming Laptop (FLIPKART)",
    "name": "ASUS ROG Zephyrus G14 (2024) 3K OLED Gaming Laptop",
    "product_name": "ASUS ROG Zephyrus G14 (2024) 3K OLED Gaming Laptop",
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
    "deliveryEstimate": "2-3 days (Assured)",
    "delivery_estimate": "2-3 days (Assured)",
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
    "productUrl": "https://www.flipkart.com/search?q=ASUS%20ROG%20Zephyrus%20G14%203K%20OLED%20Gaming%20Laptop&otracker=search",
    "product_url": "https://www.flipkart.com/search?q=ASUS%20ROG%20Zephyrus%20G14%203K%20OLED%20Gaming%20Laptop&otracker=search",
    "seller": "SuperComNet (Flipkart Assured)",
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
      "processor": "AMD Ryzen 9 8945HS",
      "graphics": "NVIDIA GeForce RTX 4060 8GB GDDR6",
      "display": "14\" 3K 120Hz ROG Nebula OLED",
      "memory": "16GB LPDDR5X / 1TB SSD"
    },
    "reviews": [
      {
        "author": "Karan B",
        "rating": 5,
        "text": "Authentic product with 1-year brand warranty. Very smooth checkout.",
        "date": "2024-11-12"
      }
    ]
  },
  {
    "id": "asus-rog-zephyrus-g14-myntra",
    "product_id": "asus-rog-zephyrus-g14-myntra",
    "groupId": "asus-rog-zephyrus-g14",
    "group_id": "asus-rog-zephyrus-g14",
    "title": "ASUS ROG Zephyrus G14 (2024) 3K OLED Gaming Laptop (MYNTRA)",
    "name": "ASUS ROG Zephyrus G14 (2024) 3K OLED Gaming Laptop",
    "product_name": "ASUS ROG Zephyrus G14 (2024) 3K OLED Gaming Laptop",
    "brand": "ASUS",
    "category": "electronics",
    "platform": "myntra",
    "price": 159990,
    "originalPrice": 189990,
    "original_price": 189990,
    "discountPercent": 16,
    "discount_percent": 16,
    "rating": 4.7,
    "reviewCount": 180,
    "review_count": 180,
    "deliveryEstimate": "1-2 days (Express)",
    "delivery_estimate": "1-2 days (Express)",
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
    "productUrl": "https://www.myntra.com/search?rawQuery=ASUS%20ROG%20Zephyrus%20G14%203K%20OLED%20Gaming%20Laptop",
    "product_url": "https://www.myntra.com/search?rawQuery=ASUS%20ROG%20Zephyrus%20G14%203K%20OLED%20Gaming%20Laptop",
    "seller": "ASUS Official Store",
    "inStock": true,
    "in_stock": true,
    "sentiment": "green",
    "sentimentScore": 94,
    "best_overall_score": 77,
    "is_best_overall": false,
    "isBestOverall": false,
    "whyBuy": "Top rated electronics pick with 16% off and verified fast shipping.",
    "why_buy": "Top rated electronics pick with 16% off and verified fast shipping.",
    "reviewSummary": "Customer sentiment is strongly positive for ASUS build quality and performance.",
    "review_summary": "Customer sentiment is strongly positive for ASUS build quality and performance.",
    "specs": {
      "processor": "AMD Ryzen 9 8945HS",
      "graphics": "NVIDIA GeForce RTX 4060 8GB GDDR6",
      "display": "14\" 3K 120Hz ROG Nebula OLED",
      "memory": "16GB LPDDR5X / 1TB SSD"
    },
    "reviews": [
      {
        "author": "Tanvi S",
        "rating": 5,
        "text": "Original product certified with official brand warranty.",
        "date": "2024-10-02"
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
    "deliveryEstimate": "Tomorrow (Prime)",
    "delivery_estimate": "Tomorrow (Prime)",
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
    "seller": "Appario Retail (Amazon Prime)",
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
      "gaming": "4K 120Hz Gaming, Ray Tracing, HDR",
      "controller": "DualSense Wireless Controller"
    },
    "reviews": [
      {
        "author": "Rahul K",
        "rating": 5,
        "text": "Genuine Sony item with sealed packaging. Superb quality and quick Prime delivery.",
        "date": "2024-11-15"
      },
      {
        "author": "Priya M",
        "rating": 4,
        "text": "Delivered in 1 day with invoice and warranty certificate. Great experience.",
        "date": "2024-10-22"
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
    "deliveryEstimate": "2-3 days (Assured)",
    "delivery_estimate": "2-3 days (Assured)",
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
    "productUrl": "https://www.flipkart.com/search?q=Sony%20PlayStation%205%20Console%20Slim&otracker=search",
    "product_url": "https://www.flipkart.com/search?q=Sony%20PlayStation%205%20Console%20Slim&otracker=search",
    "seller": "SuperComNet (Flipkart Assured)",
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
      "gaming": "4K 120Hz Gaming, Ray Tracing, HDR",
      "controller": "DualSense Wireless Controller"
    },
    "reviews": [
      {
        "author": "Karan B",
        "rating": 5,
        "text": "Authentic product with 1-year brand warranty. Very smooth checkout.",
        "date": "2024-11-12"
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
    "deliveryEstimate": "1-2 days (Express)",
    "delivery_estimate": "1-2 days (Express)",
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
    "productUrl": "https://www.myntra.com/search?rawQuery=Sony%20PlayStation%205%20Console%20Slim",
    "product_url": "https://www.myntra.com/search?rawQuery=Sony%20PlayStation%205%20Console%20Slim",
    "seller": "Sony Official Store",
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
      "gaming": "4K 120Hz Gaming, Ray Tracing, HDR",
      "controller": "DualSense Wireless Controller"
    },
    "reviews": [
      {
        "author": "Tanvi S",
        "rating": 5,
        "text": "Original product certified with official brand warranty.",
        "date": "2024-10-02"
      }
    ]
  },
  {
    "id": "apple-watch-series-9-amazon",
    "product_id": "apple-watch-series-9-amazon",
    "groupId": "apple-watch-series-9",
    "group_id": "apple-watch-series-9",
    "title": "Apple Watch Series 9 GPS 45mm (Midnight Aluminum Case) (AMAZON)",
    "name": "Apple Watch Series 9 GPS 45mm (Midnight Aluminum Case)",
    "product_name": "Apple Watch Series 9 GPS 45mm (Midnight Aluminum Case)",
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
    "deliveryEstimate": "Tomorrow (Prime)",
    "delivery_estimate": "Tomorrow (Prime)",
    "imageUrl": "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=900&auto=format&fit=crop&q=80",
    "image_url": "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=900&auto=format&fit=crop&q=80",
    "images": [
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1434493651957-4ec14c8c25d2?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1544117519-31a4b719223d?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1551816230-ef5deaed4a26?w=900&auto=format&fit=crop&q=80"
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
    "seller": "Appario Retail (Amazon Prime)",
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
      "display": "Always-On Retina OLED (2000 nits)",
      "chip": "S9 SiP with Double Tap gesture",
      "sensors": "ECG, SpO2, Temperature Sensor"
    },
    "reviews": [
      {
        "author": "Rahul K",
        "rating": 5,
        "text": "Genuine Apple item with sealed packaging. Superb quality and quick Prime delivery.",
        "date": "2024-11-15"
      },
      {
        "author": "Priya M",
        "rating": 4,
        "text": "Delivered in 1 day with invoice and warranty certificate. Great experience.",
        "date": "2024-10-22"
      }
    ]
  },
  {
    "id": "apple-watch-series-9-flipkart",
    "product_id": "apple-watch-series-9-flipkart",
    "groupId": "apple-watch-series-9",
    "group_id": "apple-watch-series-9",
    "title": "Apple Watch Series 9 GPS 45mm (Midnight Aluminum Case) (FLIPKART)",
    "name": "Apple Watch Series 9 GPS 45mm (Midnight Aluminum Case)",
    "product_name": "Apple Watch Series 9 GPS 45mm (Midnight Aluminum Case)",
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
    "deliveryEstimate": "2-3 days (Assured)",
    "delivery_estimate": "2-3 days (Assured)",
    "imageUrl": "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=900&auto=format&fit=crop&q=80",
    "image_url": "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=900&auto=format&fit=crop&q=80",
    "images": [
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1434493651957-4ec14c8c25d2?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1544117519-31a4b719223d?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1551816230-ef5deaed4a26?w=900&auto=format&fit=crop&q=80"
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
    "productUrl": "https://www.flipkart.com/search?q=Apple%20Watch%20Series%209%20GPS%2045mm&otracker=search",
    "product_url": "https://www.flipkart.com/search?q=Apple%20Watch%20Series%209%20GPS%2045mm&otracker=search",
    "seller": "SuperComNet (Flipkart Assured)",
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
      "display": "Always-On Retina OLED (2000 nits)",
      "chip": "S9 SiP with Double Tap gesture",
      "sensors": "ECG, SpO2, Temperature Sensor"
    },
    "reviews": [
      {
        "author": "Karan B",
        "rating": 5,
        "text": "Authentic product with 1-year brand warranty. Very smooth checkout.",
        "date": "2024-11-12"
      }
    ]
  },
  {
    "id": "apple-watch-series-9-myntra",
    "product_id": "apple-watch-series-9-myntra",
    "groupId": "apple-watch-series-9",
    "group_id": "apple-watch-series-9",
    "title": "Apple Watch Series 9 GPS 45mm (Midnight Aluminum Case) (MYNTRA)",
    "name": "Apple Watch Series 9 GPS 45mm (Midnight Aluminum Case)",
    "product_name": "Apple Watch Series 9 GPS 45mm (Midnight Aluminum Case)",
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
    "deliveryEstimate": "1-2 days (Express)",
    "delivery_estimate": "1-2 days (Express)",
    "imageUrl": "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=900&auto=format&fit=crop&q=80",
    "image_url": "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=900&auto=format&fit=crop&q=80",
    "images": [
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1434493651957-4ec14c8c25d2?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1544117519-31a4b719223d?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1551816230-ef5deaed4a26?w=900&auto=format&fit=crop&q=80"
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
    "productUrl": "https://www.myntra.com/search?rawQuery=Apple%20Watch%20Series%209%20GPS%2045mm",
    "product_url": "https://www.myntra.com/search?rawQuery=Apple%20Watch%20Series%209%20GPS%2045mm",
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
      "display": "Always-On Retina OLED (2000 nits)",
      "chip": "S9 SiP with Double Tap gesture",
      "sensors": "ECG, SpO2, Temperature Sensor"
    },
    "reviews": [
      {
        "author": "Tanvi S",
        "rating": 5,
        "text": "Original product certified with official brand warranty.",
        "date": "2024-10-02"
      }
    ]
  },
  {
    "id": "kindle-paperwhite-16gb-amazon",
    "product_id": "kindle-paperwhite-16gb-amazon",
    "groupId": "kindle-paperwhite-16gb",
    "group_id": "kindle-paperwhite-16gb",
    "title": "Amazon Kindle Paperwhite (16 GB) – 6.8\" Glare-Free with Warm Light (AMAZON)",
    "name": "Amazon Kindle Paperwhite (16 GB) – 6.8\" Glare-Free with Warm Light",
    "product_name": "Amazon Kindle Paperwhite (16 GB) – 6.8\" Glare-Free with Warm Light",
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
    "deliveryEstimate": "Tomorrow (Prime)",
    "delivery_estimate": "Tomorrow (Prime)",
    "imageUrl": "https://images.unsplash.com/photo-1592496431122-2349e0fbc666?w=900&auto=format&fit=crop&q=80",
    "image_url": "https://images.unsplash.com/photo-1592496431122-2349e0fbc666?w=900&auto=format&fit=crop&q=80",
    "images": [
      "https://images.unsplash.com/photo-1592496431122-2349e0fbc666?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1481277542470-605612bd2d61?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=900&auto=format&fit=crop&q=80"
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
    "seller": "Appario Retail (Amazon Prime)",
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
      "display": "6.8\" 300 ppi glare-free Paperwhite",
      "lighting": "Adjustable Warm Light",
      "battery": "Up to 10 weeks battery life"
    },
    "reviews": [
      {
        "author": "Rahul K",
        "rating": 5,
        "text": "Genuine Amazon item with sealed packaging. Superb quality and quick Prime delivery.",
        "date": "2024-11-15"
      },
      {
        "author": "Priya M",
        "rating": 4,
        "text": "Delivered in 1 day with invoice and warranty certificate. Great experience.",
        "date": "2024-10-22"
      }
    ]
  },
  {
    "id": "kindle-paperwhite-16gb-flipkart",
    "product_id": "kindle-paperwhite-16gb-flipkart",
    "groupId": "kindle-paperwhite-16gb",
    "group_id": "kindle-paperwhite-16gb",
    "title": "Amazon Kindle Paperwhite (16 GB) – 6.8\" Glare-Free with Warm Light (FLIPKART)",
    "name": "Amazon Kindle Paperwhite (16 GB) – 6.8\" Glare-Free with Warm Light",
    "product_name": "Amazon Kindle Paperwhite (16 GB) – 6.8\" Glare-Free with Warm Light",
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
    "deliveryEstimate": "2-3 days (Assured)",
    "delivery_estimate": "2-3 days (Assured)",
    "imageUrl": "https://images.unsplash.com/photo-1592496431122-2349e0fbc666?w=900&auto=format&fit=crop&q=80",
    "image_url": "https://images.unsplash.com/photo-1592496431122-2349e0fbc666?w=900&auto=format&fit=crop&q=80",
    "images": [
      "https://images.unsplash.com/photo-1592496431122-2349e0fbc666?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1481277542470-605612bd2d61?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=900&auto=format&fit=crop&q=80"
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
    "productUrl": "https://www.flipkart.com/search?q=Amazon%20Kindle%20Paperwhite%206.8%22%20Glare-Free%20with%20Warm%20Light&otracker=search",
    "product_url": "https://www.flipkart.com/search?q=Amazon%20Kindle%20Paperwhite%206.8%22%20Glare-Free%20with%20Warm%20Light&otracker=search",
    "seller": "SuperComNet (Flipkart Assured)",
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
      "display": "6.8\" 300 ppi glare-free Paperwhite",
      "lighting": "Adjustable Warm Light",
      "battery": "Up to 10 weeks battery life"
    },
    "reviews": [
      {
        "author": "Karan B",
        "rating": 5,
        "text": "Authentic product with 1-year brand warranty. Very smooth checkout.",
        "date": "2024-11-12"
      }
    ]
  },
  {
    "id": "kindle-paperwhite-16gb-myntra",
    "product_id": "kindle-paperwhite-16gb-myntra",
    "groupId": "kindle-paperwhite-16gb",
    "group_id": "kindle-paperwhite-16gb",
    "title": "Amazon Kindle Paperwhite (16 GB) – 6.8\" Glare-Free with Warm Light (MYNTRA)",
    "name": "Amazon Kindle Paperwhite (16 GB) – 6.8\" Glare-Free with Warm Light",
    "product_name": "Amazon Kindle Paperwhite (16 GB) – 6.8\" Glare-Free with Warm Light",
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
    "deliveryEstimate": "1-2 days (Express)",
    "delivery_estimate": "1-2 days (Express)",
    "imageUrl": "https://images.unsplash.com/photo-1592496431122-2349e0fbc666?w=900&auto=format&fit=crop&q=80",
    "image_url": "https://images.unsplash.com/photo-1592496431122-2349e0fbc666?w=900&auto=format&fit=crop&q=80",
    "images": [
      "https://images.unsplash.com/photo-1592496431122-2349e0fbc666?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1481277542470-605612bd2d61?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=900&auto=format&fit=crop&q=80"
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
    "productUrl": "https://www.myntra.com/search?rawQuery=Amazon%20Kindle%20Paperwhite%206.8%22%20Glare-Free%20with%20Warm%20Light",
    "product_url": "https://www.myntra.com/search?rawQuery=Amazon%20Kindle%20Paperwhite%206.8%22%20Glare-Free%20with%20Warm%20Light",
    "seller": "Amazon Official Store",
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
      "display": "6.8\" 300 ppi glare-free Paperwhite",
      "lighting": "Adjustable Warm Light",
      "battery": "Up to 10 weeks battery life"
    },
    "reviews": [
      {
        "author": "Tanvi S",
        "rating": 5,
        "text": "Original product certified with official brand warranty.",
        "date": "2024-10-02"
      }
    ]
  },
  {
    "id": "bose-quietcomfort-ultra-amazon",
    "product_id": "bose-quietcomfort-ultra-amazon",
    "groupId": "bose-quietcomfort-ultra",
    "group_id": "bose-quietcomfort-ultra",
    "title": "Bose QuietComfort Ultra Wireless Noise Cancelling Headphones (AMAZON)",
    "name": "Bose QuietComfort Ultra Wireless Noise Cancelling Headphones",
    "product_name": "Bose QuietComfort Ultra Wireless Noise Cancelling Headphones",
    "brand": "Bose",
    "category": "electronics",
    "platform": "amazon",
    "price": 32990,
    "originalPrice": 37990,
    "original_price": 37990,
    "discountPercent": 13,
    "discount_percent": 13,
    "rating": 4.7,
    "reviewCount": 4200,
    "review_count": 4200,
    "deliveryEstimate": "Tomorrow (Prime)",
    "delivery_estimate": "Tomorrow (Prime)",
    "imageUrl": "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=900&auto=format&fit=crop&q=80",
    "image_url": "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=900&auto=format&fit=crop&q=80",
    "images": [
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=900&auto=format&fit=crop&q=80"
    ],
    "dimensions": {
      "width": "19.5 cm",
      "height": "23.5 cm",
      "depth": "6.8 cm",
      "weight": "254g"
    },
    "price_history": [
      {
        "month": "May",
        "amazon": 36949,
        "flipkart": 36849,
        "myntra": 40239
      },
      {
        "month": "Jun",
        "amazon": 35629,
        "flipkart": 35844,
        "myntra": 38489
      },
      {
        "month": "Jul",
        "amazon": 34640,
        "flipkart": 34839,
        "myntra": 37789
      },
      {
        "month": "Aug",
        "amazon": 33650,
        "flipkart": 35509,
        "myntra": 36390
      },
      {
        "month": "Sep",
        "amazon": 32330,
        "flipkart": 34169,
        "myntra": 35690
      },
      {
        "month": "Current",
        "amazon": 32990,
        "flipkart": 33499,
        "myntra": 34990
      }
    ],
    "priceHistory": [
      {
        "month": "May",
        "amazon": 36949,
        "flipkart": 36849,
        "myntra": 40239
      },
      {
        "month": "Jun",
        "amazon": 35629,
        "flipkart": 35844,
        "myntra": 38489
      },
      {
        "month": "Jul",
        "amazon": 34640,
        "flipkart": 34839,
        "myntra": 37789
      },
      {
        "month": "Aug",
        "amazon": 33650,
        "flipkart": 35509,
        "myntra": 36390
      },
      {
        "month": "Sep",
        "amazon": 32330,
        "flipkart": 34169,
        "myntra": 35690
      },
      {
        "month": "Current",
        "amazon": 32990,
        "flipkart": 33499,
        "myntra": 34990
      }
    ],
    "productUrl": "https://www.amazon.in/dp/B0CCZ26B5V",
    "product_url": "https://www.amazon.in/dp/B0CCZ26B5V",
    "seller": "Appario Retail (Amazon Prime)",
    "inStock": true,
    "in_stock": true,
    "sentiment": "green",
    "sentimentScore": 94,
    "best_overall_score": 76,
    "is_best_overall": false,
    "isBestOverall": false,
    "whyBuy": "Top rated electronics pick with 13% off and verified fast shipping.",
    "why_buy": "Top rated electronics pick with 13% off and verified fast shipping.",
    "reviewSummary": "Customer sentiment is strongly positive for Bose build quality and performance.",
    "review_summary": "Customer sentiment is strongly positive for Bose build quality and performance.",
    "specs": {
      "sound": "Bose Immersive Audio with CustomTune",
      "battery": "24 hours continuous playback"
    },
    "reviews": [
      {
        "author": "Rahul K",
        "rating": 5,
        "text": "Genuine Bose item with sealed packaging. Superb quality and quick Prime delivery.",
        "date": "2024-11-15"
      },
      {
        "author": "Priya M",
        "rating": 4,
        "text": "Delivered in 1 day with invoice and warranty certificate. Great experience.",
        "date": "2024-10-22"
      }
    ]
  },
  {
    "id": "bose-quietcomfort-ultra-flipkart",
    "product_id": "bose-quietcomfort-ultra-flipkart",
    "groupId": "bose-quietcomfort-ultra",
    "group_id": "bose-quietcomfort-ultra",
    "title": "Bose QuietComfort Ultra Wireless Noise Cancelling Headphones (FLIPKART)",
    "name": "Bose QuietComfort Ultra Wireless Noise Cancelling Headphones",
    "product_name": "Bose QuietComfort Ultra Wireless Noise Cancelling Headphones",
    "brand": "Bose",
    "category": "electronics",
    "platform": "flipkart",
    "price": 33499,
    "originalPrice": 37990,
    "original_price": 37990,
    "discountPercent": 12,
    "discount_percent": 12,
    "rating": 4.6,
    "reviewCount": 2900,
    "review_count": 2900,
    "deliveryEstimate": "2-3 days (Assured)",
    "delivery_estimate": "2-3 days (Assured)",
    "imageUrl": "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=900&auto=format&fit=crop&q=80",
    "image_url": "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=900&auto=format&fit=crop&q=80",
    "images": [
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=900&auto=format&fit=crop&q=80"
    ],
    "dimensions": {
      "width": "19.5 cm",
      "height": "23.5 cm",
      "depth": "6.8 cm",
      "weight": "254g"
    },
    "price_history": [
      {
        "month": "May",
        "amazon": 36949,
        "flipkart": 36849,
        "myntra": 40239
      },
      {
        "month": "Jun",
        "amazon": 35629,
        "flipkart": 35844,
        "myntra": 38489
      },
      {
        "month": "Jul",
        "amazon": 34640,
        "flipkart": 34839,
        "myntra": 37789
      },
      {
        "month": "Aug",
        "amazon": 33650,
        "flipkart": 35509,
        "myntra": 36390
      },
      {
        "month": "Sep",
        "amazon": 32330,
        "flipkart": 34169,
        "myntra": 35690
      },
      {
        "month": "Current",
        "amazon": 32990,
        "flipkart": 33499,
        "myntra": 34990
      }
    ],
    "priceHistory": [
      {
        "month": "May",
        "amazon": 36949,
        "flipkart": 36849,
        "myntra": 40239
      },
      {
        "month": "Jun",
        "amazon": 35629,
        "flipkart": 35844,
        "myntra": 38489
      },
      {
        "month": "Jul",
        "amazon": 34640,
        "flipkart": 34839,
        "myntra": 37789
      },
      {
        "month": "Aug",
        "amazon": 33650,
        "flipkart": 35509,
        "myntra": 36390
      },
      {
        "month": "Sep",
        "amazon": 32330,
        "flipkart": 34169,
        "myntra": 35690
      },
      {
        "month": "Current",
        "amazon": 32990,
        "flipkart": 33499,
        "myntra": 34990
      }
    ],
    "productUrl": "https://www.flipkart.com/search?q=Bose%20QuietComfort%20Ultra%20Wireless%20Noise%20Cancelling%20Headphones&otracker=search",
    "product_url": "https://www.flipkart.com/search?q=Bose%20QuietComfort%20Ultra%20Wireless%20Noise%20Cancelling%20Headphones&otracker=search",
    "seller": "SuperComNet (Flipkart Assured)",
    "inStock": true,
    "in_stock": true,
    "sentiment": "green",
    "sentimentScore": 92,
    "best_overall_score": 74,
    "is_best_overall": false,
    "isBestOverall": false,
    "whyBuy": "Top rated electronics pick with 12% off and verified fast shipping.",
    "why_buy": "Top rated electronics pick with 12% off and verified fast shipping.",
    "reviewSummary": "Customer sentiment is strongly positive for Bose build quality and performance.",
    "review_summary": "Customer sentiment is strongly positive for Bose build quality and performance.",
    "specs": {
      "sound": "Bose Immersive Audio with CustomTune",
      "battery": "24 hours continuous playback"
    },
    "reviews": [
      {
        "author": "Karan B",
        "rating": 5,
        "text": "Authentic product with 1-year brand warranty. Very smooth checkout.",
        "date": "2024-11-12"
      }
    ]
  },
  {
    "id": "bose-quietcomfort-ultra-myntra",
    "product_id": "bose-quietcomfort-ultra-myntra",
    "groupId": "bose-quietcomfort-ultra",
    "group_id": "bose-quietcomfort-ultra",
    "title": "Bose QuietComfort Ultra Wireless Noise Cancelling Headphones (MYNTRA)",
    "name": "Bose QuietComfort Ultra Wireless Noise Cancelling Headphones",
    "product_name": "Bose QuietComfort Ultra Wireless Noise Cancelling Headphones",
    "brand": "Bose",
    "category": "electronics",
    "platform": "myntra",
    "price": 34990,
    "originalPrice": 37990,
    "original_price": 37990,
    "discountPercent": 8,
    "discount_percent": 8,
    "rating": 4.7,
    "reviewCount": 810,
    "review_count": 810,
    "deliveryEstimate": "1-2 days (Express)",
    "delivery_estimate": "1-2 days (Express)",
    "imageUrl": "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=900&auto=format&fit=crop&q=80",
    "image_url": "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=900&auto=format&fit=crop&q=80",
    "images": [
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=900&auto=format&fit=crop&q=80"
    ],
    "dimensions": {
      "width": "19.5 cm",
      "height": "23.5 cm",
      "depth": "6.8 cm",
      "weight": "254g"
    },
    "price_history": [
      {
        "month": "May",
        "amazon": 36949,
        "flipkart": 36849,
        "myntra": 40239
      },
      {
        "month": "Jun",
        "amazon": 35629,
        "flipkart": 35844,
        "myntra": 38489
      },
      {
        "month": "Jul",
        "amazon": 34640,
        "flipkart": 34839,
        "myntra": 37789
      },
      {
        "month": "Aug",
        "amazon": 33650,
        "flipkart": 35509,
        "myntra": 36390
      },
      {
        "month": "Sep",
        "amazon": 32330,
        "flipkart": 34169,
        "myntra": 35690
      },
      {
        "month": "Current",
        "amazon": 32990,
        "flipkart": 33499,
        "myntra": 34990
      }
    ],
    "priceHistory": [
      {
        "month": "May",
        "amazon": 36949,
        "flipkart": 36849,
        "myntra": 40239
      },
      {
        "month": "Jun",
        "amazon": 35629,
        "flipkart": 35844,
        "myntra": 38489
      },
      {
        "month": "Jul",
        "amazon": 34640,
        "flipkart": 34839,
        "myntra": 37789
      },
      {
        "month": "Aug",
        "amazon": 33650,
        "flipkart": 35509,
        "myntra": 36390
      },
      {
        "month": "Sep",
        "amazon": 32330,
        "flipkart": 34169,
        "myntra": 35690
      },
      {
        "month": "Current",
        "amazon": 32990,
        "flipkart": 33499,
        "myntra": 34990
      }
    ],
    "productUrl": "https://www.myntra.com/search?rawQuery=Bose%20QuietComfort%20Ultra%20Wireless%20Noise%20Cancelling%20Headphones",
    "product_url": "https://www.myntra.com/search?rawQuery=Bose%20QuietComfort%20Ultra%20Wireless%20Noise%20Cancelling%20Headphones",
    "seller": "Bose Official Store",
    "inStock": true,
    "in_stock": true,
    "sentiment": "green",
    "sentimentScore": 94,
    "best_overall_score": 74,
    "is_best_overall": false,
    "isBestOverall": false,
    "whyBuy": "Top rated electronics pick with 8% off and verified fast shipping.",
    "why_buy": "Top rated electronics pick with 8% off and verified fast shipping.",
    "reviewSummary": "Customer sentiment is strongly positive for Bose build quality and performance.",
    "review_summary": "Customer sentiment is strongly positive for Bose build quality and performance.",
    "specs": {
      "sound": "Bose Immersive Audio with CustomTune",
      "battery": "24 hours continuous playback"
    },
    "reviews": [
      {
        "author": "Tanvi S",
        "rating": 5,
        "text": "Original product certified with official brand warranty.",
        "date": "2024-10-02"
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
    "deliveryEstimate": "Tomorrow (Prime)",
    "delivery_estimate": "Tomorrow (Prime)",
    "imageUrl": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=900&auto=format&fit=crop&q=80",
    "image_url": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=900&auto=format&fit=crop&q=80",
    "images": [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=900&auto=format&fit=crop&q=80"
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
    "seller": "Appario Retail (Amazon Prime)",
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
      "cushioning": "Max Air 270 heel unit",
      "upper": "Engineered breathable mesh"
    },
    "reviews": [
      {
        "author": "Rahul K",
        "rating": 5,
        "text": "Genuine Nike item with sealed packaging. Superb quality and quick Prime delivery.",
        "date": "2024-11-15"
      },
      {
        "author": "Priya M",
        "rating": 4,
        "text": "Delivered in 1 day with invoice and warranty certificate. Great experience.",
        "date": "2024-10-22"
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
    "deliveryEstimate": "2-3 days (Assured)",
    "delivery_estimate": "2-3 days (Assured)",
    "imageUrl": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=900&auto=format&fit=crop&q=80",
    "image_url": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=900&auto=format&fit=crop&q=80",
    "images": [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=900&auto=format&fit=crop&q=80"
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
    "productUrl": "https://www.flipkart.com/search?q=Nike%20Air%20Max%20270%20Men's%20Running%20%26%20Lifestyle%20Shoes&otracker=search",
    "product_url": "https://www.flipkart.com/search?q=Nike%20Air%20Max%20270%20Men's%20Running%20%26%20Lifestyle%20Shoes&otracker=search",
    "seller": "SuperComNet (Flipkart Assured)",
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
      "cushioning": "Max Air 270 heel unit",
      "upper": "Engineered breathable mesh"
    },
    "reviews": [
      {
        "author": "Karan B",
        "rating": 5,
        "text": "Authentic product with 1-year brand warranty. Very smooth checkout.",
        "date": "2024-11-12"
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
    "deliveryEstimate": "1-2 days (Express)",
    "delivery_estimate": "1-2 days (Express)",
    "imageUrl": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=900&auto=format&fit=crop&q=80",
    "image_url": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=900&auto=format&fit=crop&q=80",
    "images": [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=900&auto=format&fit=crop&q=80"
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
    "productUrl": "https://www.myntra.com/search?rawQuery=Nike%20Air%20Max%20270%20Men's%20Running%20%26%20Lifestyle%20Shoes",
    "product_url": "https://www.myntra.com/search?rawQuery=Nike%20Air%20Max%20270%20Men's%20Running%20%26%20Lifestyle%20Shoes",
    "seller": "Nike Official Store",
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
      "cushioning": "Max Air 270 heel unit",
      "upper": "Engineered breathable mesh"
    },
    "reviews": [
      {
        "author": "Tanvi S",
        "rating": 5,
        "text": "Original product certified with official brand warranty.",
        "date": "2024-10-02"
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
    "deliveryEstimate": "Tomorrow (Prime)",
    "delivery_estimate": "Tomorrow (Prime)",
    "imageUrl": "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=900&auto=format&fit=crop&q=80",
    "image_url": "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=900&auto=format&fit=crop&q=80",
    "images": [
      "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1539185441755-769473a23570?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1512374382149-233c42b6a83b?w=900&auto=format&fit=crop&q=80",
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
    "seller": "Appario Retail (Amazon Prime)",
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
      "midsole": "Light BOOST cushioning (30% lighter)",
      "outsole": "Continental Better Rubber grip"
    },
    "reviews": [
      {
        "author": "Rahul K",
        "rating": 5,
        "text": "Genuine Adidas item with sealed packaging. Superb quality and quick Prime delivery.",
        "date": "2024-11-15"
      },
      {
        "author": "Priya M",
        "rating": 4,
        "text": "Delivered in 1 day with invoice and warranty certificate. Great experience.",
        "date": "2024-10-22"
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
    "deliveryEstimate": "2-3 days (Assured)",
    "delivery_estimate": "2-3 days (Assured)",
    "imageUrl": "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=900&auto=format&fit=crop&q=80",
    "image_url": "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=900&auto=format&fit=crop&q=80",
    "images": [
      "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1539185441755-769473a23570?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1512374382149-233c42b6a83b?w=900&auto=format&fit=crop&q=80",
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
    "productUrl": "https://www.flipkart.com/search?q=Adidas%20Ultraboost%20Light%20Men's%20Road%20Running%20Shoes&otracker=search",
    "product_url": "https://www.flipkart.com/search?q=Adidas%20Ultraboost%20Light%20Men's%20Road%20Running%20Shoes&otracker=search",
    "seller": "SuperComNet (Flipkart Assured)",
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
      "midsole": "Light BOOST cushioning (30% lighter)",
      "outsole": "Continental Better Rubber grip"
    },
    "reviews": [
      {
        "author": "Karan B",
        "rating": 5,
        "text": "Authentic product with 1-year brand warranty. Very smooth checkout.",
        "date": "2024-11-12"
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
    "deliveryEstimate": "1-2 days (Express)",
    "delivery_estimate": "1-2 days (Express)",
    "imageUrl": "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=900&auto=format&fit=crop&q=80",
    "image_url": "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=900&auto=format&fit=crop&q=80",
    "images": [
      "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1539185441755-769473a23570?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1512374382149-233c42b6a83b?w=900&auto=format&fit=crop&q=80",
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
    "productUrl": "https://www.myntra.com/search?rawQuery=Adidas%20Ultraboost%20Light%20Men's%20Road%20Running%20Shoes",
    "product_url": "https://www.myntra.com/search?rawQuery=Adidas%20Ultraboost%20Light%20Men's%20Road%20Running%20Shoes",
    "seller": "Adidas Official Store",
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
      "midsole": "Light BOOST cushioning (30% lighter)",
      "outsole": "Continental Better Rubber grip"
    },
    "reviews": [
      {
        "author": "Tanvi S",
        "rating": 5,
        "text": "Original product certified with official brand warranty.",
        "date": "2024-10-02"
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
    "deliveryEstimate": "Tomorrow (Prime)",
    "delivery_estimate": "Tomorrow (Prime)",
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
    "seller": "Appario Retail (Amazon Prime)",
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
      "upper_material": "100% Genuine Nubuck Leather",
      "sole": "Heavy-duty grooved rubber lug sole"
    },
    "reviews": [
      {
        "author": "Rahul K",
        "rating": 5,
        "text": "Genuine Woodland item with sealed packaging. Superb quality and quick Prime delivery.",
        "date": "2024-11-15"
      },
      {
        "author": "Priya M",
        "rating": 4,
        "text": "Delivered in 1 day with invoice and warranty certificate. Great experience.",
        "date": "2024-10-22"
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
    "reviewCount": 9200,
    "review_count": 9200,
    "deliveryEstimate": "2-3 days (Assured)",
    "delivery_estimate": "2-3 days (Assured)",
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
    "productUrl": "https://www.flipkart.com/search?q=Woodland%20Men's%20Camel%20Brown%20Leather%20Outdoor%20Trekking%20Boots&otracker=search",
    "product_url": "https://www.flipkart.com/search?q=Woodland%20Men's%20Camel%20Brown%20Leather%20Outdoor%20Trekking%20Boots&otracker=search",
    "seller": "SuperComNet (Flipkart Assured)",
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
      "upper_material": "100% Genuine Nubuck Leather",
      "sole": "Heavy-duty grooved rubber lug sole"
    },
    "reviews": [
      {
        "author": "Karan B",
        "rating": 5,
        "text": "Authentic product with 1-year brand warranty. Very smooth checkout.",
        "date": "2024-11-12"
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
    "rating": 4.4,
    "reviewCount": 5400,
    "review_count": 5400,
    "deliveryEstimate": "1-2 days (Express)",
    "delivery_estimate": "1-2 days (Express)",
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
    "productUrl": "https://www.myntra.com/search?rawQuery=Woodland%20Men's%20Camel%20Brown%20Leather%20Outdoor%20Trekking%20Boots",
    "product_url": "https://www.myntra.com/search?rawQuery=Woodland%20Men's%20Camel%20Brown%20Leather%20Outdoor%20Trekking%20Boots",
    "seller": "Woodland Official Store",
    "inStock": true,
    "in_stock": true,
    "sentiment": "green",
    "sentimentScore": 89,
    "best_overall_score": 80,
    "is_best_overall": false,
    "isBestOverall": false,
    "whyBuy": "Top rated footwear pick with 34% off and verified fast shipping.",
    "why_buy": "Top rated footwear pick with 34% off and verified fast shipping.",
    "reviewSummary": "Customer sentiment is strongly positive for Woodland build quality and performance.",
    "review_summary": "Customer sentiment is strongly positive for Woodland build quality and performance.",
    "specs": {
      "upper_material": "100% Genuine Nubuck Leather",
      "sole": "Heavy-duty grooved rubber lug sole"
    },
    "reviews": [
      {
        "author": "Tanvi S",
        "rating": 5,
        "text": "Original product certified with official brand warranty.",
        "date": "2024-10-02"
      }
    ]
  },
  {
    "id": "crocs-classic-clogs-amazon",
    "product_id": "crocs-classic-clogs-amazon",
    "groupId": "crocs-classic-clogs",
    "group_id": "crocs-classic-clogs",
    "title": "Crocs Classic Unisex Lightweight Waterproof Clogs (AMAZON)",
    "name": "Crocs Classic Unisex Lightweight Waterproof Clogs",
    "product_name": "Crocs Classic Unisex Lightweight Waterproof Clogs",
    "brand": "Crocs",
    "category": "footwear",
    "platform": "amazon",
    "price": 2295,
    "originalPrice": 2995,
    "original_price": 2995,
    "discountPercent": 23,
    "discount_percent": 23,
    "rating": 4.6,
    "reviewCount": 31200,
    "review_count": 31200,
    "deliveryEstimate": "Tomorrow (Prime)",
    "delivery_estimate": "Tomorrow (Prime)",
    "imageUrl": "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=900&auto=format&fit=crop&q=80",
    "image_url": "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=900&auto=format&fit=crop&q=80",
    "images": [
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1618898909019-010e4e234c55?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1638247025967-b4e38f787b76?w=900&auto=format&fit=crop&q=80"
    ],
    "dimensions": {
      "width": "11.5 cm",
      "height": "9.5 cm",
      "depth": "28.0 cm",
      "weight": "185g"
    },
    "price_history": [
      {
        "month": "May",
        "amazon": 2570,
        "flipkart": 2635,
        "myntra": 2524
      },
      {
        "month": "Jun",
        "amazon": 2479,
        "flipkart": 2563,
        "myntra": 2415
      },
      {
        "month": "Jul",
        "amazon": 2410,
        "flipkart": 2491,
        "myntra": 2371
      },
      {
        "month": "Aug",
        "amazon": 2341,
        "flipkart": 2539,
        "myntra": 2283
      },
      {
        "month": "Sep",
        "amazon": 2249,
        "flipkart": 2443,
        "myntra": 2239
      },
      {
        "month": "Current",
        "amazon": 2295,
        "flipkart": 2395,
        "myntra": 2195
      }
    ],
    "priceHistory": [
      {
        "month": "May",
        "amazon": 2570,
        "flipkart": 2635,
        "myntra": 2524
      },
      {
        "month": "Jun",
        "amazon": 2479,
        "flipkart": 2563,
        "myntra": 2415
      },
      {
        "month": "Jul",
        "amazon": 2410,
        "flipkart": 2491,
        "myntra": 2371
      },
      {
        "month": "Aug",
        "amazon": 2341,
        "flipkart": 2539,
        "myntra": 2283
      },
      {
        "month": "Sep",
        "amazon": 2249,
        "flipkart": 2443,
        "myntra": 2239
      },
      {
        "month": "Current",
        "amazon": 2295,
        "flipkart": 2395,
        "myntra": 2195
      }
    ],
    "productUrl": "https://www.amazon.in/dp/B0014C5Q7E",
    "product_url": "https://www.amazon.in/dp/B0014C5Q7E",
    "seller": "Appario Retail (Amazon Prime)",
    "inStock": true,
    "in_stock": true,
    "sentiment": "green",
    "sentimentScore": 92,
    "best_overall_score": 78,
    "is_best_overall": true,
    "isBestOverall": true,
    "whyBuy": "Top rated footwear pick with 23% off and verified fast shipping.",
    "why_buy": "Top rated footwear pick with 23% off and verified fast shipping.",
    "reviewSummary": "Customer sentiment is strongly positive for Crocs build quality and performance.",
    "review_summary": "Customer sentiment is strongly positive for Crocs build quality and performance.",
    "specs": {
      "material": "Proprietary Croslite closed-cell resin",
      "ventilation": "Port holes shed water & debris"
    },
    "reviews": [
      {
        "author": "Rahul K",
        "rating": 5,
        "text": "Genuine Crocs item with sealed packaging. Superb quality and quick Prime delivery.",
        "date": "2024-11-15"
      },
      {
        "author": "Priya M",
        "rating": 4,
        "text": "Delivered in 1 day with invoice and warranty certificate. Great experience.",
        "date": "2024-10-22"
      }
    ]
  },
  {
    "id": "crocs-classic-clogs-flipkart",
    "product_id": "crocs-classic-clogs-flipkart",
    "groupId": "crocs-classic-clogs",
    "group_id": "crocs-classic-clogs",
    "title": "Crocs Classic Unisex Lightweight Waterproof Clogs (FLIPKART)",
    "name": "Crocs Classic Unisex Lightweight Waterproof Clogs",
    "product_name": "Crocs Classic Unisex Lightweight Waterproof Clogs",
    "brand": "Crocs",
    "category": "footwear",
    "platform": "flipkart",
    "price": 2395,
    "originalPrice": 2995,
    "original_price": 2995,
    "discountPercent": 20,
    "discount_percent": 20,
    "rating": 4.5,
    "reviewCount": 18400,
    "review_count": 18400,
    "deliveryEstimate": "2-3 days (Assured)",
    "delivery_estimate": "2-3 days (Assured)",
    "imageUrl": "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=900&auto=format&fit=crop&q=80",
    "image_url": "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=900&auto=format&fit=crop&q=80",
    "images": [
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1618898909019-010e4e234c55?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1638247025967-b4e38f787b76?w=900&auto=format&fit=crop&q=80"
    ],
    "dimensions": {
      "width": "11.5 cm",
      "height": "9.5 cm",
      "depth": "28.0 cm",
      "weight": "185g"
    },
    "price_history": [
      {
        "month": "May",
        "amazon": 2570,
        "flipkart": 2635,
        "myntra": 2524
      },
      {
        "month": "Jun",
        "amazon": 2479,
        "flipkart": 2563,
        "myntra": 2415
      },
      {
        "month": "Jul",
        "amazon": 2410,
        "flipkart": 2491,
        "myntra": 2371
      },
      {
        "month": "Aug",
        "amazon": 2341,
        "flipkart": 2539,
        "myntra": 2283
      },
      {
        "month": "Sep",
        "amazon": 2249,
        "flipkart": 2443,
        "myntra": 2239
      },
      {
        "month": "Current",
        "amazon": 2295,
        "flipkart": 2395,
        "myntra": 2195
      }
    ],
    "priceHistory": [
      {
        "month": "May",
        "amazon": 2570,
        "flipkart": 2635,
        "myntra": 2524
      },
      {
        "month": "Jun",
        "amazon": 2479,
        "flipkart": 2563,
        "myntra": 2415
      },
      {
        "month": "Jul",
        "amazon": 2410,
        "flipkart": 2491,
        "myntra": 2371
      },
      {
        "month": "Aug",
        "amazon": 2341,
        "flipkart": 2539,
        "myntra": 2283
      },
      {
        "month": "Sep",
        "amazon": 2249,
        "flipkart": 2443,
        "myntra": 2239
      },
      {
        "month": "Current",
        "amazon": 2295,
        "flipkart": 2395,
        "myntra": 2195
      }
    ],
    "productUrl": "https://www.flipkart.com/search?q=Crocs%20Classic%20Unisex%20Lightweight%20Waterproof%20Clogs&otracker=search",
    "product_url": "https://www.flipkart.com/search?q=Crocs%20Classic%20Unisex%20Lightweight%20Waterproof%20Clogs&otracker=search",
    "seller": "SuperComNet (Flipkart Assured)",
    "inStock": true,
    "in_stock": true,
    "sentiment": "green",
    "sentimentScore": 91,
    "best_overall_score": 76,
    "is_best_overall": false,
    "isBestOverall": false,
    "whyBuy": "Top rated footwear pick with 20% off and verified fast shipping.",
    "why_buy": "Top rated footwear pick with 20% off and verified fast shipping.",
    "reviewSummary": "Customer sentiment is strongly positive for Crocs build quality and performance.",
    "review_summary": "Customer sentiment is strongly positive for Crocs build quality and performance.",
    "specs": {
      "material": "Proprietary Croslite closed-cell resin",
      "ventilation": "Port holes shed water & debris"
    },
    "reviews": [
      {
        "author": "Karan B",
        "rating": 5,
        "text": "Authentic product with 1-year brand warranty. Very smooth checkout.",
        "date": "2024-11-12"
      }
    ]
  },
  {
    "id": "crocs-classic-clogs-myntra",
    "product_id": "crocs-classic-clogs-myntra",
    "groupId": "crocs-classic-clogs",
    "group_id": "crocs-classic-clogs",
    "title": "Crocs Classic Unisex Lightweight Waterproof Clogs (MYNTRA)",
    "name": "Crocs Classic Unisex Lightweight Waterproof Clogs",
    "product_name": "Crocs Classic Unisex Lightweight Waterproof Clogs",
    "brand": "Crocs",
    "category": "footwear",
    "platform": "myntra",
    "price": 2195,
    "originalPrice": 2995,
    "original_price": 2995,
    "discountPercent": 27,
    "discount_percent": 27,
    "rating": 4.6,
    "reviewCount": 9800,
    "review_count": 9800,
    "deliveryEstimate": "1-2 days (Express)",
    "delivery_estimate": "1-2 days (Express)",
    "imageUrl": "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=900&auto=format&fit=crop&q=80",
    "image_url": "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=900&auto=format&fit=crop&q=80",
    "images": [
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1618898909019-010e4e234c55?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1638247025967-b4e38f787b76?w=900&auto=format&fit=crop&q=80"
    ],
    "dimensions": {
      "width": "11.5 cm",
      "height": "9.5 cm",
      "depth": "28.0 cm",
      "weight": "185g"
    },
    "price_history": [
      {
        "month": "May",
        "amazon": 2570,
        "flipkart": 2635,
        "myntra": 2524
      },
      {
        "month": "Jun",
        "amazon": 2479,
        "flipkart": 2563,
        "myntra": 2415
      },
      {
        "month": "Jul",
        "amazon": 2410,
        "flipkart": 2491,
        "myntra": 2371
      },
      {
        "month": "Aug",
        "amazon": 2341,
        "flipkart": 2539,
        "myntra": 2283
      },
      {
        "month": "Sep",
        "amazon": 2249,
        "flipkart": 2443,
        "myntra": 2239
      },
      {
        "month": "Current",
        "amazon": 2295,
        "flipkart": 2395,
        "myntra": 2195
      }
    ],
    "priceHistory": [
      {
        "month": "May",
        "amazon": 2570,
        "flipkart": 2635,
        "myntra": 2524
      },
      {
        "month": "Jun",
        "amazon": 2479,
        "flipkart": 2563,
        "myntra": 2415
      },
      {
        "month": "Jul",
        "amazon": 2410,
        "flipkart": 2491,
        "myntra": 2371
      },
      {
        "month": "Aug",
        "amazon": 2341,
        "flipkart": 2539,
        "myntra": 2283
      },
      {
        "month": "Sep",
        "amazon": 2249,
        "flipkart": 2443,
        "myntra": 2239
      },
      {
        "month": "Current",
        "amazon": 2295,
        "flipkart": 2395,
        "myntra": 2195
      }
    ],
    "productUrl": "https://www.myntra.com/search?rawQuery=Crocs%20Classic%20Unisex%20Lightweight%20Waterproof%20Clogs",
    "product_url": "https://www.myntra.com/search?rawQuery=Crocs%20Classic%20Unisex%20Lightweight%20Waterproof%20Clogs",
    "seller": "Crocs Official Store",
    "inStock": true,
    "in_stock": true,
    "sentiment": "green",
    "sentimentScore": 92,
    "best_overall_score": 80,
    "is_best_overall": false,
    "isBestOverall": false,
    "whyBuy": "Top rated footwear pick with 27% off and verified fast shipping.",
    "why_buy": "Top rated footwear pick with 27% off and verified fast shipping.",
    "reviewSummary": "Customer sentiment is strongly positive for Crocs build quality and performance.",
    "review_summary": "Customer sentiment is strongly positive for Crocs build quality and performance.",
    "specs": {
      "material": "Proprietary Croslite closed-cell resin",
      "ventilation": "Port holes shed water & debris"
    },
    "reviews": [
      {
        "author": "Tanvi S",
        "rating": 5,
        "text": "Original product certified with official brand warranty.",
        "date": "2024-10-02"
      }
    ]
  },
  {
    "id": "levis-511-slim-fit-jeans-amazon",
    "product_id": "levis-511-slim-fit-jeans-amazon",
    "groupId": "levis-511-slim-fit-jeans",
    "group_id": "levis-511-slim-fit-jeans",
    "title": "Levi's 511 Slim Fit Stretch Denim Jeans (Medium Indigo) (AMAZON)",
    "name": "Levi's 511 Slim Fit Stretch Denim Jeans (Medium Indigo)",
    "product_name": "Levi's 511 Slim Fit Stretch Denim Jeans (Medium Indigo)",
    "brand": "Levi's",
    "category": "fashion",
    "platform": "amazon",
    "price": 2499,
    "originalPrice": 3999,
    "original_price": 3999,
    "discountPercent": 38,
    "discount_percent": 38,
    "rating": 4.4,
    "reviewCount": 18920,
    "review_count": 18920,
    "deliveryEstimate": "Tomorrow (Prime)",
    "delivery_estimate": "Tomorrow (Prime)",
    "imageUrl": "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=900&auto=format&fit=crop&q=80",
    "image_url": "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=900&auto=format&fit=crop&q=80",
    "images": [
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1542272604-780c96856592?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1582552938357-32b906df40cb?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1475178626620-a4d074967452?w=900&auto=format&fit=crop&q=80"
    ],
    "dimensions": {
      "width": "32 in",
      "height": "32 in",
      "depth": "2.0 cm",
      "weight": "550g"
    },
    "price_history": [
      {
        "month": "May",
        "amazon": 2799,
        "flipkart": 2859,
        "myntra": 2759
      },
      {
        "month": "Jun",
        "amazon": 2699,
        "flipkart": 2781,
        "myntra": 2639
      },
      {
        "month": "Jul",
        "amazon": 2624,
        "flipkart": 2703,
        "myntra": 2591
      },
      {
        "month": "Aug",
        "amazon": 2549,
        "flipkart": 2755,
        "myntra": 2495
      },
      {
        "month": "Sep",
        "amazon": 2449,
        "flipkart": 2651,
        "myntra": 2447
      },
      {
        "month": "Current",
        "amazon": 2499,
        "flipkart": 2599,
        "myntra": 2399
      }
    ],
    "priceHistory": [
      {
        "month": "May",
        "amazon": 2799,
        "flipkart": 2859,
        "myntra": 2759
      },
      {
        "month": "Jun",
        "amazon": 2699,
        "flipkart": 2781,
        "myntra": 2639
      },
      {
        "month": "Jul",
        "amazon": 2624,
        "flipkart": 2703,
        "myntra": 2591
      },
      {
        "month": "Aug",
        "amazon": 2549,
        "flipkart": 2755,
        "myntra": 2495
      },
      {
        "month": "Sep",
        "amazon": 2449,
        "flipkart": 2651,
        "myntra": 2447
      },
      {
        "month": "Current",
        "amazon": 2499,
        "flipkart": 2599,
        "myntra": 2399
      }
    ],
    "productUrl": "https://www.amazon.in/dp/B079D9F8F8",
    "product_url": "https://www.amazon.in/dp/B079D9F8F8",
    "seller": "Appario Retail (Amazon Prime)",
    "inStock": true,
    "in_stock": true,
    "sentiment": "green",
    "sentimentScore": 89,
    "best_overall_score": 81,
    "is_best_overall": true,
    "isBestOverall": true,
    "whyBuy": "Top rated fashion pick with 38% off and verified fast shipping.",
    "why_buy": "Top rated fashion pick with 38% off and verified fast shipping.",
    "reviewSummary": "Customer sentiment is strongly positive for Levi's build quality and performance.",
    "review_summary": "Customer sentiment is strongly positive for Levi's build quality and performance.",
    "specs": {
      "fit": "Slim from hip to ankle with modern taper",
      "fabric": "99% Cotton, 1% Elastane with Levi's Flex"
    },
    "reviews": [
      {
        "author": "Rahul K",
        "rating": 5,
        "text": "Genuine Levi's item with sealed packaging. Superb quality and quick Prime delivery.",
        "date": "2024-11-15"
      },
      {
        "author": "Priya M",
        "rating": 4,
        "text": "Delivered in 1 day with invoice and warranty certificate. Great experience.",
        "date": "2024-10-22"
      }
    ]
  },
  {
    "id": "levis-511-slim-fit-jeans-flipkart",
    "product_id": "levis-511-slim-fit-jeans-flipkart",
    "groupId": "levis-511-slim-fit-jeans",
    "group_id": "levis-511-slim-fit-jeans",
    "title": "Levi's 511 Slim Fit Stretch Denim Jeans (Medium Indigo) (FLIPKART)",
    "name": "Levi's 511 Slim Fit Stretch Denim Jeans (Medium Indigo)",
    "product_name": "Levi's 511 Slim Fit Stretch Denim Jeans (Medium Indigo)",
    "brand": "Levi's",
    "category": "fashion",
    "platform": "flipkart",
    "price": 2599,
    "originalPrice": 3999,
    "original_price": 3999,
    "discountPercent": 35,
    "discount_percent": 35,
    "rating": 4.3,
    "reviewCount": 12400,
    "review_count": 12400,
    "deliveryEstimate": "2-3 days (Assured)",
    "delivery_estimate": "2-3 days (Assured)",
    "imageUrl": "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=900&auto=format&fit=crop&q=80",
    "image_url": "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=900&auto=format&fit=crop&q=80",
    "images": [
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1542272604-780c96856592?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1582552938357-32b906df40cb?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1475178626620-a4d074967452?w=900&auto=format&fit=crop&q=80"
    ],
    "dimensions": {
      "width": "32 in",
      "height": "32 in",
      "depth": "2.0 cm",
      "weight": "550g"
    },
    "price_history": [
      {
        "month": "May",
        "amazon": 2799,
        "flipkart": 2859,
        "myntra": 2759
      },
      {
        "month": "Jun",
        "amazon": 2699,
        "flipkart": 2781,
        "myntra": 2639
      },
      {
        "month": "Jul",
        "amazon": 2624,
        "flipkart": 2703,
        "myntra": 2591
      },
      {
        "month": "Aug",
        "amazon": 2549,
        "flipkart": 2755,
        "myntra": 2495
      },
      {
        "month": "Sep",
        "amazon": 2449,
        "flipkart": 2651,
        "myntra": 2447
      },
      {
        "month": "Current",
        "amazon": 2499,
        "flipkart": 2599,
        "myntra": 2399
      }
    ],
    "priceHistory": [
      {
        "month": "May",
        "amazon": 2799,
        "flipkart": 2859,
        "myntra": 2759
      },
      {
        "month": "Jun",
        "amazon": 2699,
        "flipkart": 2781,
        "myntra": 2639
      },
      {
        "month": "Jul",
        "amazon": 2624,
        "flipkart": 2703,
        "myntra": 2591
      },
      {
        "month": "Aug",
        "amazon": 2549,
        "flipkart": 2755,
        "myntra": 2495
      },
      {
        "month": "Sep",
        "amazon": 2449,
        "flipkart": 2651,
        "myntra": 2447
      },
      {
        "month": "Current",
        "amazon": 2499,
        "flipkart": 2599,
        "myntra": 2399
      }
    ],
    "productUrl": "https://www.flipkart.com/search?q=Levi's%20511%20Slim%20Fit%20Stretch%20Denim%20Jeans&otracker=search",
    "product_url": "https://www.flipkart.com/search?q=Levi's%20511%20Slim%20Fit%20Stretch%20Denim%20Jeans&otracker=search",
    "seller": "SuperComNet (Flipkart Assured)",
    "inStock": true,
    "in_stock": true,
    "sentiment": "yellow",
    "sentimentScore": 87,
    "best_overall_score": 79,
    "is_best_overall": false,
    "isBestOverall": false,
    "whyBuy": "Top rated fashion pick with 35% off and verified fast shipping.",
    "why_buy": "Top rated fashion pick with 35% off and verified fast shipping.",
    "reviewSummary": "Customer sentiment is strongly positive for Levi's build quality and performance.",
    "review_summary": "Customer sentiment is strongly positive for Levi's build quality and performance.",
    "specs": {
      "fit": "Slim from hip to ankle with modern taper",
      "fabric": "99% Cotton, 1% Elastane with Levi's Flex"
    },
    "reviews": [
      {
        "author": "Karan B",
        "rating": 5,
        "text": "Authentic product with 1-year brand warranty. Very smooth checkout.",
        "date": "2024-11-12"
      }
    ]
  },
  {
    "id": "levis-511-slim-fit-jeans-myntra",
    "product_id": "levis-511-slim-fit-jeans-myntra",
    "groupId": "levis-511-slim-fit-jeans",
    "group_id": "levis-511-slim-fit-jeans",
    "title": "Levi's 511 Slim Fit Stretch Denim Jeans (Medium Indigo) (MYNTRA)",
    "name": "Levi's 511 Slim Fit Stretch Denim Jeans (Medium Indigo)",
    "product_name": "Levi's 511 Slim Fit Stretch Denim Jeans (Medium Indigo)",
    "brand": "Levi's",
    "category": "fashion",
    "platform": "myntra",
    "price": 2399,
    "originalPrice": 3999,
    "original_price": 3999,
    "discountPercent": 40,
    "discount_percent": 40,
    "rating": 4.5,
    "reviewCount": 8700,
    "review_count": 8700,
    "deliveryEstimate": "1-2 days (Express)",
    "delivery_estimate": "1-2 days (Express)",
    "imageUrl": "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=900&auto=format&fit=crop&q=80",
    "image_url": "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=900&auto=format&fit=crop&q=80",
    "images": [
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1542272604-780c96856592?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1582552938357-32b906df40cb?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1475178626620-a4d074967452?w=900&auto=format&fit=crop&q=80"
    ],
    "dimensions": {
      "width": "32 in",
      "height": "32 in",
      "depth": "2.0 cm",
      "weight": "550g"
    },
    "price_history": [
      {
        "month": "May",
        "amazon": 2799,
        "flipkart": 2859,
        "myntra": 2759
      },
      {
        "month": "Jun",
        "amazon": 2699,
        "flipkart": 2781,
        "myntra": 2639
      },
      {
        "month": "Jul",
        "amazon": 2624,
        "flipkart": 2703,
        "myntra": 2591
      },
      {
        "month": "Aug",
        "amazon": 2549,
        "flipkart": 2755,
        "myntra": 2495
      },
      {
        "month": "Sep",
        "amazon": 2449,
        "flipkart": 2651,
        "myntra": 2447
      },
      {
        "month": "Current",
        "amazon": 2499,
        "flipkart": 2599,
        "myntra": 2399
      }
    ],
    "priceHistory": [
      {
        "month": "May",
        "amazon": 2799,
        "flipkart": 2859,
        "myntra": 2759
      },
      {
        "month": "Jun",
        "amazon": 2699,
        "flipkart": 2781,
        "myntra": 2639
      },
      {
        "month": "Jul",
        "amazon": 2624,
        "flipkart": 2703,
        "myntra": 2591
      },
      {
        "month": "Aug",
        "amazon": 2549,
        "flipkart": 2755,
        "myntra": 2495
      },
      {
        "month": "Sep",
        "amazon": 2449,
        "flipkart": 2651,
        "myntra": 2447
      },
      {
        "month": "Current",
        "amazon": 2499,
        "flipkart": 2599,
        "myntra": 2399
      }
    ],
    "productUrl": "https://www.myntra.com/search?rawQuery=Levi's%20511%20Slim%20Fit%20Stretch%20Denim%20Jeans",
    "product_url": "https://www.myntra.com/search?rawQuery=Levi's%20511%20Slim%20Fit%20Stretch%20Denim%20Jeans",
    "seller": "Levi's Official Store",
    "inStock": true,
    "in_stock": true,
    "sentiment": "green",
    "sentimentScore": 91,
    "best_overall_score": 84,
    "is_best_overall": false,
    "isBestOverall": false,
    "whyBuy": "Top rated fashion pick with 40% off and verified fast shipping.",
    "why_buy": "Top rated fashion pick with 40% off and verified fast shipping.",
    "reviewSummary": "Customer sentiment is strongly positive for Levi's build quality and performance.",
    "review_summary": "Customer sentiment is strongly positive for Levi's build quality and performance.",
    "specs": {
      "fit": "Slim from hip to ankle with modern taper",
      "fabric": "99% Cotton, 1% Elastane with Levi's Flex"
    },
    "reviews": [
      {
        "author": "Tanvi S",
        "rating": 5,
        "text": "Original product certified with official brand warranty.",
        "date": "2024-10-02"
      }
    ]
  },
  {
    "id": "tommy-hilfiger-pique-polo-amazon",
    "product_id": "tommy-hilfiger-pique-polo-amazon",
    "groupId": "tommy-hilfiger-pique-polo",
    "group_id": "tommy-hilfiger-pique-polo",
    "title": "Tommy Hilfiger Classic Pique Cotton Slim Fit Polo Shirt (AMAZON)",
    "name": "Tommy Hilfiger Classic Pique Cotton Slim Fit Polo Shirt",
    "product_name": "Tommy Hilfiger Classic Pique Cotton Slim Fit Polo Shirt",
    "brand": "Tommy Hilfiger",
    "category": "fashion",
    "platform": "amazon",
    "price": 2999,
    "originalPrice": 4999,
    "original_price": 4999,
    "discountPercent": 40,
    "discount_percent": 40,
    "rating": 4.6,
    "reviewCount": 6200,
    "review_count": 6200,
    "deliveryEstimate": "Tomorrow (Prime)",
    "delivery_estimate": "Tomorrow (Prime)",
    "imageUrl": "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?w=900&auto=format&fit=crop&q=80",
    "image_url": "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?w=900&auto=format&fit=crop&q=80",
    "images": [
      "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=900&auto=format&fit=crop&q=80"
    ],
    "dimensions": {
      "width": "42 cm",
      "height": "70 cm",
      "depth": "1.0 cm",
      "weight": "220g"
    },
    "price_history": [
      {
        "month": "May",
        "amazon": 3359,
        "flipkart": 3519,
        "myntra": 3334
      },
      {
        "month": "Jun",
        "amazon": 3239,
        "flipkart": 3423,
        "myntra": 3189
      },
      {
        "month": "Jul",
        "amazon": 3149,
        "flipkart": 3327,
        "myntra": 3131
      },
      {
        "month": "Aug",
        "amazon": 3059,
        "flipkart": 3391,
        "myntra": 3015
      },
      {
        "month": "Sep",
        "amazon": 2939,
        "flipkart": 3263,
        "myntra": 2957
      },
      {
        "month": "Current",
        "amazon": 2999,
        "flipkart": 3199,
        "myntra": 2899
      }
    ],
    "priceHistory": [
      {
        "month": "May",
        "amazon": 3359,
        "flipkart": 3519,
        "myntra": 3334
      },
      {
        "month": "Jun",
        "amazon": 3239,
        "flipkart": 3423,
        "myntra": 3189
      },
      {
        "month": "Jul",
        "amazon": 3149,
        "flipkart": 3327,
        "myntra": 3131
      },
      {
        "month": "Aug",
        "amazon": 3059,
        "flipkart": 3391,
        "myntra": 3015
      },
      {
        "month": "Sep",
        "amazon": 2939,
        "flipkart": 3263,
        "myntra": 2957
      },
      {
        "month": "Current",
        "amazon": 2999,
        "flipkart": 3199,
        "myntra": 2899
      }
    ],
    "productUrl": "https://www.amazon.in/dp/B08NFZ5K8H",
    "product_url": "https://www.amazon.in/dp/B08NFZ5K8H",
    "seller": "Appario Retail (Amazon Prime)",
    "inStock": true,
    "in_stock": true,
    "sentiment": "green",
    "sentimentScore": 92,
    "best_overall_score": 85,
    "is_best_overall": true,
    "isBestOverall": true,
    "whyBuy": "Top rated fashion pick with 40% off and verified fast shipping.",
    "why_buy": "Top rated fashion pick with 40% off and verified fast shipping.",
    "reviewSummary": "Customer sentiment is strongly positive for Tommy Hilfiger build quality and performance.",
    "review_summary": "Customer sentiment is strongly positive for Tommy Hilfiger build quality and performance.",
    "specs": {
      "material": "100% Organic Pique Cotton Knit",
      "collar": "Rib-knit collar with 2-button placket"
    },
    "reviews": [
      {
        "author": "Rahul K",
        "rating": 5,
        "text": "Genuine Tommy Hilfiger item with sealed packaging. Superb quality and quick Prime delivery.",
        "date": "2024-11-15"
      },
      {
        "author": "Priya M",
        "rating": 4,
        "text": "Delivered in 1 day with invoice and warranty certificate. Great experience.",
        "date": "2024-10-22"
      }
    ]
  },
  {
    "id": "tommy-hilfiger-pique-polo-flipkart",
    "product_id": "tommy-hilfiger-pique-polo-flipkart",
    "groupId": "tommy-hilfiger-pique-polo",
    "group_id": "tommy-hilfiger-pique-polo",
    "title": "Tommy Hilfiger Classic Pique Cotton Slim Fit Polo Shirt (FLIPKART)",
    "name": "Tommy Hilfiger Classic Pique Cotton Slim Fit Polo Shirt",
    "product_name": "Tommy Hilfiger Classic Pique Cotton Slim Fit Polo Shirt",
    "brand": "Tommy Hilfiger",
    "category": "fashion",
    "platform": "flipkart",
    "price": 3199,
    "originalPrice": 4999,
    "original_price": 4999,
    "discountPercent": 36,
    "discount_percent": 36,
    "rating": 4.4,
    "reviewCount": 4100,
    "review_count": 4100,
    "deliveryEstimate": "2-3 days (Assured)",
    "delivery_estimate": "2-3 days (Assured)",
    "imageUrl": "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?w=900&auto=format&fit=crop&q=80",
    "image_url": "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?w=900&auto=format&fit=crop&q=80",
    "images": [
      "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=900&auto=format&fit=crop&q=80"
    ],
    "dimensions": {
      "width": "42 cm",
      "height": "70 cm",
      "depth": "1.0 cm",
      "weight": "220g"
    },
    "price_history": [
      {
        "month": "May",
        "amazon": 3359,
        "flipkart": 3519,
        "myntra": 3334
      },
      {
        "month": "Jun",
        "amazon": 3239,
        "flipkart": 3423,
        "myntra": 3189
      },
      {
        "month": "Jul",
        "amazon": 3149,
        "flipkart": 3327,
        "myntra": 3131
      },
      {
        "month": "Aug",
        "amazon": 3059,
        "flipkart": 3391,
        "myntra": 3015
      },
      {
        "month": "Sep",
        "amazon": 2939,
        "flipkart": 3263,
        "myntra": 2957
      },
      {
        "month": "Current",
        "amazon": 2999,
        "flipkart": 3199,
        "myntra": 2899
      }
    ],
    "priceHistory": [
      {
        "month": "May",
        "amazon": 3359,
        "flipkart": 3519,
        "myntra": 3334
      },
      {
        "month": "Jun",
        "amazon": 3239,
        "flipkart": 3423,
        "myntra": 3189
      },
      {
        "month": "Jul",
        "amazon": 3149,
        "flipkart": 3327,
        "myntra": 3131
      },
      {
        "month": "Aug",
        "amazon": 3059,
        "flipkart": 3391,
        "myntra": 3015
      },
      {
        "month": "Sep",
        "amazon": 2939,
        "flipkart": 3263,
        "myntra": 2957
      },
      {
        "month": "Current",
        "amazon": 2999,
        "flipkart": 3199,
        "myntra": 2899
      }
    ],
    "productUrl": "https://www.flipkart.com/search?q=Tommy%20Hilfiger%20Classic%20Pique%20Cotton%20Slim%20Fit%20Polo%20Shirt&otracker=search",
    "product_url": "https://www.flipkart.com/search?q=Tommy%20Hilfiger%20Classic%20Pique%20Cotton%20Slim%20Fit%20Polo%20Shirt&otracker=search",
    "seller": "SuperComNet (Flipkart Assured)",
    "inStock": true,
    "in_stock": true,
    "sentiment": "green",
    "sentimentScore": 89,
    "best_overall_score": 80,
    "is_best_overall": false,
    "isBestOverall": false,
    "whyBuy": "Top rated fashion pick with 36% off and verified fast shipping.",
    "why_buy": "Top rated fashion pick with 36% off and verified fast shipping.",
    "reviewSummary": "Customer sentiment is strongly positive for Tommy Hilfiger build quality and performance.",
    "review_summary": "Customer sentiment is strongly positive for Tommy Hilfiger build quality and performance.",
    "specs": {
      "material": "100% Organic Pique Cotton Knit",
      "collar": "Rib-knit collar with 2-button placket"
    },
    "reviews": [
      {
        "author": "Karan B",
        "rating": 5,
        "text": "Authentic product with 1-year brand warranty. Very smooth checkout.",
        "date": "2024-11-12"
      }
    ]
  },
  {
    "id": "tommy-hilfiger-pique-polo-myntra",
    "product_id": "tommy-hilfiger-pique-polo-myntra",
    "groupId": "tommy-hilfiger-pique-polo",
    "group_id": "tommy-hilfiger-pique-polo",
    "title": "Tommy Hilfiger Classic Pique Cotton Slim Fit Polo Shirt (MYNTRA)",
    "name": "Tommy Hilfiger Classic Pique Cotton Slim Fit Polo Shirt",
    "product_name": "Tommy Hilfiger Classic Pique Cotton Slim Fit Polo Shirt",
    "brand": "Tommy Hilfiger",
    "category": "fashion",
    "platform": "myntra",
    "price": 2899,
    "originalPrice": 4999,
    "original_price": 4999,
    "discountPercent": 42,
    "discount_percent": 42,
    "rating": 4.6,
    "reviewCount": 5900,
    "review_count": 5900,
    "deliveryEstimate": "1-2 days (Express)",
    "delivery_estimate": "1-2 days (Express)",
    "imageUrl": "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?w=900&auto=format&fit=crop&q=80",
    "image_url": "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?w=900&auto=format&fit=crop&q=80",
    "images": [
      "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=900&auto=format&fit=crop&q=80"
    ],
    "dimensions": {
      "width": "42 cm",
      "height": "70 cm",
      "depth": "1.0 cm",
      "weight": "220g"
    },
    "price_history": [
      {
        "month": "May",
        "amazon": 3359,
        "flipkart": 3519,
        "myntra": 3334
      },
      {
        "month": "Jun",
        "amazon": 3239,
        "flipkart": 3423,
        "myntra": 3189
      },
      {
        "month": "Jul",
        "amazon": 3149,
        "flipkart": 3327,
        "myntra": 3131
      },
      {
        "month": "Aug",
        "amazon": 3059,
        "flipkart": 3391,
        "myntra": 3015
      },
      {
        "month": "Sep",
        "amazon": 2939,
        "flipkart": 3263,
        "myntra": 2957
      },
      {
        "month": "Current",
        "amazon": 2999,
        "flipkart": 3199,
        "myntra": 2899
      }
    ],
    "priceHistory": [
      {
        "month": "May",
        "amazon": 3359,
        "flipkart": 3519,
        "myntra": 3334
      },
      {
        "month": "Jun",
        "amazon": 3239,
        "flipkart": 3423,
        "myntra": 3189
      },
      {
        "month": "Jul",
        "amazon": 3149,
        "flipkart": 3327,
        "myntra": 3131
      },
      {
        "month": "Aug",
        "amazon": 3059,
        "flipkart": 3391,
        "myntra": 3015
      },
      {
        "month": "Sep",
        "amazon": 2939,
        "flipkart": 3263,
        "myntra": 2957
      },
      {
        "month": "Current",
        "amazon": 2999,
        "flipkart": 3199,
        "myntra": 2899
      }
    ],
    "productUrl": "https://www.myntra.com/search?rawQuery=Tommy%20Hilfiger%20Classic%20Pique%20Cotton%20Slim%20Fit%20Polo%20Shirt",
    "product_url": "https://www.myntra.com/search?rawQuery=Tommy%20Hilfiger%20Classic%20Pique%20Cotton%20Slim%20Fit%20Polo%20Shirt",
    "seller": "Tommy Hilfiger Official Store",
    "inStock": true,
    "in_stock": true,
    "sentiment": "green",
    "sentimentScore": 92,
    "best_overall_score": 86,
    "is_best_overall": false,
    "isBestOverall": false,
    "whyBuy": "Top rated fashion pick with 42% off and verified fast shipping.",
    "why_buy": "Top rated fashion pick with 42% off and verified fast shipping.",
    "reviewSummary": "Customer sentiment is strongly positive for Tommy Hilfiger build quality and performance.",
    "review_summary": "Customer sentiment is strongly positive for Tommy Hilfiger build quality and performance.",
    "specs": {
      "material": "100% Organic Pique Cotton Knit",
      "collar": "Rib-knit collar with 2-button placket"
    },
    "reviews": [
      {
        "author": "Tanvi S",
        "rating": 5,
        "text": "Original product certified with official brand warranty.",
        "date": "2024-10-02"
      }
    ]
  },
  {
    "id": "rayban-aviator-classic-amazon",
    "product_id": "rayban-aviator-classic-amazon",
    "groupId": "rayban-aviator-classic",
    "group_id": "rayban-aviator-classic",
    "title": "Ray-Ban Aviator Classic Polarized Sunglasses (RB3025, 58mm) (AMAZON)",
    "name": "Ray-Ban Aviator Classic Polarized Sunglasses (RB3025, 58mm)",
    "product_name": "Ray-Ban Aviator Classic Polarized Sunglasses (RB3025, 58mm)",
    "brand": "Ray-Ban",
    "category": "fashion",
    "platform": "amazon",
    "price": 8490,
    "originalPrice": 10590,
    "original_price": 10590,
    "discountPercent": 20,
    "discount_percent": 20,
    "rating": 4.7,
    "reviewCount": 5400,
    "review_count": 5400,
    "deliveryEstimate": "Tomorrow (Prime)",
    "delivery_estimate": "Tomorrow (Prime)",
    "imageUrl": "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=900&auto=format&fit=crop&q=80",
    "image_url": "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=900&auto=format&fit=crop&q=80",
    "images": [
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1508296695146-257a814070b4?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=900&auto=format&fit=crop&q=80"
    ],
    "dimensions": {
      "width": "13.8 cm",
      "height": "5.0 cm",
      "depth": "14.0 cm",
      "weight": "31g"
    },
    "price_history": [
      {
        "month": "May",
        "amazon": 9509,
        "flipkart": 9669,
        "myntra": 9534
      },
      {
        "month": "Jun",
        "amazon": 9169,
        "flipkart": 9405,
        "myntra": 9119
      },
      {
        "month": "Jul",
        "amazon": 8915,
        "flipkart": 9142,
        "myntra": 8953
      },
      {
        "month": "Aug",
        "amazon": 8660,
        "flipkart": 9317,
        "myntra": 8622
      },
      {
        "month": "Sep",
        "amazon": 8320,
        "flipkart": 8966,
        "myntra": 8456
      },
      {
        "month": "Current",
        "amazon": 8490,
        "flipkart": 8790,
        "myntra": 8290
      }
    ],
    "priceHistory": [
      {
        "month": "May",
        "amazon": 9509,
        "flipkart": 9669,
        "myntra": 9534
      },
      {
        "month": "Jun",
        "amazon": 9169,
        "flipkart": 9405,
        "myntra": 9119
      },
      {
        "month": "Jul",
        "amazon": 8915,
        "flipkart": 9142,
        "myntra": 8953
      },
      {
        "month": "Aug",
        "amazon": 8660,
        "flipkart": 9317,
        "myntra": 8622
      },
      {
        "month": "Sep",
        "amazon": 8320,
        "flipkart": 8966,
        "myntra": 8456
      },
      {
        "month": "Current",
        "amazon": 8490,
        "flipkart": 8790,
        "myntra": 8290
      }
    ],
    "productUrl": "https://www.amazon.in/dp/B00080FG6W",
    "product_url": "https://www.amazon.in/dp/B00080FG6W",
    "seller": "Appario Retail (Amazon Prime)",
    "inStock": true,
    "in_stock": true,
    "sentiment": "green",
    "sentimentScore": 94,
    "best_overall_score": 79,
    "is_best_overall": true,
    "isBestOverall": true,
    "whyBuy": "Top rated fashion pick with 20% off and verified fast shipping.",
    "why_buy": "Top rated fashion pick with 20% off and verified fast shipping.",
    "reviewSummary": "Customer sentiment is strongly positive for Ray-Ban build quality and performance.",
    "review_summary": "Customer sentiment is strongly positive for Ray-Ban build quality and performance.",
    "specs": {
      "frame": "Lightweight Gold Arista Metal Frame",
      "lens": "G-15 Polarized Green Crystal Glass"
    },
    "reviews": [
      {
        "author": "Rahul K",
        "rating": 5,
        "text": "Genuine Ray-Ban item with sealed packaging. Superb quality and quick Prime delivery.",
        "date": "2024-11-15"
      },
      {
        "author": "Priya M",
        "rating": 4,
        "text": "Delivered in 1 day with invoice and warranty certificate. Great experience.",
        "date": "2024-10-22"
      }
    ]
  },
  {
    "id": "rayban-aviator-classic-flipkart",
    "product_id": "rayban-aviator-classic-flipkart",
    "groupId": "rayban-aviator-classic",
    "group_id": "rayban-aviator-classic",
    "title": "Ray-Ban Aviator Classic Polarized Sunglasses (RB3025, 58mm) (FLIPKART)",
    "name": "Ray-Ban Aviator Classic Polarized Sunglasses (RB3025, 58mm)",
    "product_name": "Ray-Ban Aviator Classic Polarized Sunglasses (RB3025, 58mm)",
    "brand": "Ray-Ban",
    "category": "fashion",
    "platform": "flipkart",
    "price": 8790,
    "originalPrice": 10590,
    "original_price": 10590,
    "discountPercent": 17,
    "discount_percent": 17,
    "rating": 4.6,
    "reviewCount": 3200,
    "review_count": 3200,
    "deliveryEstimate": "2-3 days (Assured)",
    "delivery_estimate": "2-3 days (Assured)",
    "imageUrl": "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=900&auto=format&fit=crop&q=80",
    "image_url": "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=900&auto=format&fit=crop&q=80",
    "images": [
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1508296695146-257a814070b4?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=900&auto=format&fit=crop&q=80"
    ],
    "dimensions": {
      "width": "13.8 cm",
      "height": "5.0 cm",
      "depth": "14.0 cm",
      "weight": "31g"
    },
    "price_history": [
      {
        "month": "May",
        "amazon": 9509,
        "flipkart": 9669,
        "myntra": 9534
      },
      {
        "month": "Jun",
        "amazon": 9169,
        "flipkart": 9405,
        "myntra": 9119
      },
      {
        "month": "Jul",
        "amazon": 8915,
        "flipkart": 9142,
        "myntra": 8953
      },
      {
        "month": "Aug",
        "amazon": 8660,
        "flipkart": 9317,
        "myntra": 8622
      },
      {
        "month": "Sep",
        "amazon": 8320,
        "flipkart": 8966,
        "myntra": 8456
      },
      {
        "month": "Current",
        "amazon": 8490,
        "flipkart": 8790,
        "myntra": 8290
      }
    ],
    "priceHistory": [
      {
        "month": "May",
        "amazon": 9509,
        "flipkart": 9669,
        "myntra": 9534
      },
      {
        "month": "Jun",
        "amazon": 9169,
        "flipkart": 9405,
        "myntra": 9119
      },
      {
        "month": "Jul",
        "amazon": 8915,
        "flipkart": 9142,
        "myntra": 8953
      },
      {
        "month": "Aug",
        "amazon": 8660,
        "flipkart": 9317,
        "myntra": 8622
      },
      {
        "month": "Sep",
        "amazon": 8320,
        "flipkart": 8966,
        "myntra": 8456
      },
      {
        "month": "Current",
        "amazon": 8490,
        "flipkart": 8790,
        "myntra": 8290
      }
    ],
    "productUrl": "https://www.flipkart.com/search?q=Ray-Ban%20Aviator%20Classic%20Polarized%20Sunglasses&otracker=search",
    "product_url": "https://www.flipkart.com/search?q=Ray-Ban%20Aviator%20Classic%20Polarized%20Sunglasses&otracker=search",
    "seller": "SuperComNet (Flipkart Assured)",
    "inStock": true,
    "in_stock": true,
    "sentiment": "green",
    "sentimentScore": 92,
    "best_overall_score": 76,
    "is_best_overall": false,
    "isBestOverall": false,
    "whyBuy": "Top rated fashion pick with 17% off and verified fast shipping.",
    "why_buy": "Top rated fashion pick with 17% off and verified fast shipping.",
    "reviewSummary": "Customer sentiment is strongly positive for Ray-Ban build quality and performance.",
    "review_summary": "Customer sentiment is strongly positive for Ray-Ban build quality and performance.",
    "specs": {
      "frame": "Lightweight Gold Arista Metal Frame",
      "lens": "G-15 Polarized Green Crystal Glass"
    },
    "reviews": [
      {
        "author": "Karan B",
        "rating": 5,
        "text": "Authentic product with 1-year brand warranty. Very smooth checkout.",
        "date": "2024-11-12"
      }
    ]
  },
  {
    "id": "rayban-aviator-classic-myntra",
    "product_id": "rayban-aviator-classic-myntra",
    "groupId": "rayban-aviator-classic",
    "group_id": "rayban-aviator-classic",
    "title": "Ray-Ban Aviator Classic Polarized Sunglasses (RB3025, 58mm) (MYNTRA)",
    "name": "Ray-Ban Aviator Classic Polarized Sunglasses (RB3025, 58mm)",
    "product_name": "Ray-Ban Aviator Classic Polarized Sunglasses (RB3025, 58mm)",
    "brand": "Ray-Ban",
    "category": "fashion",
    "platform": "myntra",
    "price": 8290,
    "originalPrice": 10590,
    "original_price": 10590,
    "discountPercent": 22,
    "discount_percent": 22,
    "rating": 4.7,
    "reviewCount": 2900,
    "review_count": 2900,
    "deliveryEstimate": "1-2 days (Express)",
    "delivery_estimate": "1-2 days (Express)",
    "imageUrl": "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=900&auto=format&fit=crop&q=80",
    "image_url": "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=900&auto=format&fit=crop&q=80",
    "images": [
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1508296695146-257a814070b4?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=900&auto=format&fit=crop&q=80"
    ],
    "dimensions": {
      "width": "13.8 cm",
      "height": "5.0 cm",
      "depth": "14.0 cm",
      "weight": "31g"
    },
    "price_history": [
      {
        "month": "May",
        "amazon": 9509,
        "flipkart": 9669,
        "myntra": 9534
      },
      {
        "month": "Jun",
        "amazon": 9169,
        "flipkart": 9405,
        "myntra": 9119
      },
      {
        "month": "Jul",
        "amazon": 8915,
        "flipkart": 9142,
        "myntra": 8953
      },
      {
        "month": "Aug",
        "amazon": 8660,
        "flipkart": 9317,
        "myntra": 8622
      },
      {
        "month": "Sep",
        "amazon": 8320,
        "flipkart": 8966,
        "myntra": 8456
      },
      {
        "month": "Current",
        "amazon": 8490,
        "flipkart": 8790,
        "myntra": 8290
      }
    ],
    "priceHistory": [
      {
        "month": "May",
        "amazon": 9509,
        "flipkart": 9669,
        "myntra": 9534
      },
      {
        "month": "Jun",
        "amazon": 9169,
        "flipkart": 9405,
        "myntra": 9119
      },
      {
        "month": "Jul",
        "amazon": 8915,
        "flipkart": 9142,
        "myntra": 8953
      },
      {
        "month": "Aug",
        "amazon": 8660,
        "flipkart": 9317,
        "myntra": 8622
      },
      {
        "month": "Sep",
        "amazon": 8320,
        "flipkart": 8966,
        "myntra": 8456
      },
      {
        "month": "Current",
        "amazon": 8490,
        "flipkart": 8790,
        "myntra": 8290
      }
    ],
    "productUrl": "https://www.myntra.com/search?rawQuery=Ray-Ban%20Aviator%20Classic%20Polarized%20Sunglasses",
    "product_url": "https://www.myntra.com/search?rawQuery=Ray-Ban%20Aviator%20Classic%20Polarized%20Sunglasses",
    "seller": "Ray-Ban Official Store",
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
      "frame": "Lightweight Gold Arista Metal Frame",
      "lens": "G-15 Polarized Green Crystal Glass"
    },
    "reviews": [
      {
        "author": "Tanvi S",
        "rating": 5,
        "text": "Original product certified with official brand warranty.",
        "date": "2024-10-02"
      }
    ]
  },
  {
    "id": "atomberg-renesa-bldc-fan-amazon",
    "product_id": "atomberg-renesa-bldc-fan-amazon",
    "groupId": "atomberg-renesa-bldc-fan",
    "group_id": "atomberg-renesa-bldc-fan",
    "title": "Atomberg Renesa 1200mm Smart BLDC Ceiling Fan with Remote (AMAZON)",
    "name": "Atomberg Renesa 1200mm Smart BLDC Ceiling Fan with Remote",
    "product_name": "Atomberg Renesa 1200mm Smart BLDC Ceiling Fan with Remote",
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
    "deliveryEstimate": "Tomorrow (Prime)",
    "delivery_estimate": "Tomorrow (Prime)",
    "imageUrl": "https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b?w=900&auto=format&fit=crop&q=80",
    "image_url": "https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b?w=900&auto=format&fit=crop&q=80",
    "images": [
      "https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=900&auto=format&fit=crop&q=80"
    ],
    "dimensions": {
      "width": "120 cm",
      "height": "35 cm",
      "depth": "120 cm",
      "weight": "4.1 kg"
    },
    "price_history": [
      {
        "month": "May",
        "amazon": 4143,
        "flipkart": 4179,
        "myntra": 4484
      },
      {
        "month": "Jun",
        "amazon": 3995,
        "flipkart": 4065,
        "myntra": 4289
      },
      {
        "month": "Jul",
        "amazon": 3884,
        "flipkart": 3951,
        "myntra": 4211
      },
      {
        "month": "Aug",
        "amazon": 3773,
        "flipkart": 4027,
        "myntra": 4055
      },
      {
        "month": "Sep",
        "amazon": 3625,
        "flipkart": 3875,
        "myntra": 3977
      },
      {
        "month": "Current",
        "amazon": 3699,
        "flipkart": 3799,
        "myntra": 3899
      }
    ],
    "priceHistory": [
      {
        "month": "May",
        "amazon": 4143,
        "flipkart": 4179,
        "myntra": 4484
      },
      {
        "month": "Jun",
        "amazon": 3995,
        "flipkart": 4065,
        "myntra": 4289
      },
      {
        "month": "Jul",
        "amazon": 3884,
        "flipkart": 3951,
        "myntra": 4211
      },
      {
        "month": "Aug",
        "amazon": 3773,
        "flipkart": 4027,
        "myntra": 4055
      },
      {
        "month": "Sep",
        "amazon": 3625,
        "flipkart": 3875,
        "myntra": 3977
      },
      {
        "month": "Current",
        "amazon": 3699,
        "flipkart": 3799,
        "myntra": 3899
      }
    ],
    "productUrl": "https://www.amazon.in/dp/B07N7K4D4J",
    "product_url": "https://www.amazon.in/dp/B07N7K4D4J",
    "seller": "Appario Retail (Amazon Prime)",
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
      "motor": "28W Energy Efficient BLDC Motor (65% electricity saving)",
      "airflow": "235 CMM high air delivery"
    },
    "reviews": [
      {
        "author": "Rahul K",
        "rating": 5,
        "text": "Genuine Atomberg item with sealed packaging. Superb quality and quick Prime delivery.",
        "date": "2024-11-15"
      },
      {
        "author": "Priya M",
        "rating": 4,
        "text": "Delivered in 1 day with invoice and warranty certificate. Great experience.",
        "date": "2024-10-22"
      }
    ]
  },
  {
    "id": "atomberg-renesa-bldc-fan-flipkart",
    "product_id": "atomberg-renesa-bldc-fan-flipkart",
    "groupId": "atomberg-renesa-bldc-fan",
    "group_id": "atomberg-renesa-bldc-fan",
    "title": "Atomberg Renesa 1200mm Smart BLDC Ceiling Fan with Remote (FLIPKART)",
    "name": "Atomberg Renesa 1200mm Smart BLDC Ceiling Fan with Remote",
    "product_name": "Atomberg Renesa 1200mm Smart BLDC Ceiling Fan with Remote",
    "brand": "Atomberg",
    "category": "home",
    "platform": "flipkart",
    "price": 3799,
    "originalPrice": 4990,
    "original_price": 4990,
    "discountPercent": 24,
    "discount_percent": 24,
    "rating": 4.5,
    "reviewCount": 29400,
    "review_count": 29400,
    "deliveryEstimate": "2-3 days (Assured)",
    "delivery_estimate": "2-3 days (Assured)",
    "imageUrl": "https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b?w=900&auto=format&fit=crop&q=80",
    "image_url": "https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b?w=900&auto=format&fit=crop&q=80",
    "images": [
      "https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=900&auto=format&fit=crop&q=80"
    ],
    "dimensions": {
      "width": "120 cm",
      "height": "35 cm",
      "depth": "120 cm",
      "weight": "4.1 kg"
    },
    "price_history": [
      {
        "month": "May",
        "amazon": 4143,
        "flipkart": 4179,
        "myntra": 4484
      },
      {
        "month": "Jun",
        "amazon": 3995,
        "flipkart": 4065,
        "myntra": 4289
      },
      {
        "month": "Jul",
        "amazon": 3884,
        "flipkart": 3951,
        "myntra": 4211
      },
      {
        "month": "Aug",
        "amazon": 3773,
        "flipkart": 4027,
        "myntra": 4055
      },
      {
        "month": "Sep",
        "amazon": 3625,
        "flipkart": 3875,
        "myntra": 3977
      },
      {
        "month": "Current",
        "amazon": 3699,
        "flipkart": 3799,
        "myntra": 3899
      }
    ],
    "priceHistory": [
      {
        "month": "May",
        "amazon": 4143,
        "flipkart": 4179,
        "myntra": 4484
      },
      {
        "month": "Jun",
        "amazon": 3995,
        "flipkart": 4065,
        "myntra": 4289
      },
      {
        "month": "Jul",
        "amazon": 3884,
        "flipkart": 3951,
        "myntra": 4211
      },
      {
        "month": "Aug",
        "amazon": 3773,
        "flipkart": 4027,
        "myntra": 4055
      },
      {
        "month": "Sep",
        "amazon": 3625,
        "flipkart": 3875,
        "myntra": 3977
      },
      {
        "month": "Current",
        "amazon": 3699,
        "flipkart": 3799,
        "myntra": 3899
      }
    ],
    "productUrl": "https://www.flipkart.com/search?q=Atomberg%20Renesa%201200mm%20Smart%20BLDC%20Ceiling%20Fan%20with%20Remote&otracker=search",
    "product_url": "https://www.flipkart.com/search?q=Atomberg%20Renesa%201200mm%20Smart%20BLDC%20Ceiling%20Fan%20with%20Remote&otracker=search",
    "seller": "SuperComNet (Flipkart Assured)",
    "inStock": true,
    "in_stock": true,
    "sentiment": "green",
    "sentimentScore": 91,
    "best_overall_score": 77,
    "is_best_overall": false,
    "isBestOverall": false,
    "whyBuy": "Top rated home pick with 24% off and verified fast shipping.",
    "why_buy": "Top rated home pick with 24% off and verified fast shipping.",
    "reviewSummary": "Customer sentiment is strongly positive for Atomberg build quality and performance.",
    "review_summary": "Customer sentiment is strongly positive for Atomberg build quality and performance.",
    "specs": {
      "motor": "28W Energy Efficient BLDC Motor (65% electricity saving)",
      "airflow": "235 CMM high air delivery"
    },
    "reviews": [
      {
        "author": "Karan B",
        "rating": 5,
        "text": "Authentic product with 1-year brand warranty. Very smooth checkout.",
        "date": "2024-11-12"
      }
    ]
  },
  {
    "id": "atomberg-renesa-bldc-fan-myntra",
    "product_id": "atomberg-renesa-bldc-fan-myntra",
    "groupId": "atomberg-renesa-bldc-fan",
    "group_id": "atomberg-renesa-bldc-fan",
    "title": "Atomberg Renesa 1200mm Smart BLDC Ceiling Fan with Remote (MYNTRA)",
    "name": "Atomberg Renesa 1200mm Smart BLDC Ceiling Fan with Remote",
    "product_name": "Atomberg Renesa 1200mm Smart BLDC Ceiling Fan with Remote",
    "brand": "Atomberg",
    "category": "home",
    "platform": "myntra",
    "price": 3899,
    "originalPrice": 4990,
    "original_price": 4990,
    "discountPercent": 22,
    "discount_percent": 22,
    "rating": 4.6,
    "reviewCount": 4200,
    "review_count": 4200,
    "deliveryEstimate": "1-2 days (Express)",
    "delivery_estimate": "1-2 days (Express)",
    "imageUrl": "https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b?w=900&auto=format&fit=crop&q=80",
    "image_url": "https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b?w=900&auto=format&fit=crop&q=80",
    "images": [
      "https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=900&auto=format&fit=crop&q=80"
    ],
    "dimensions": {
      "width": "120 cm",
      "height": "35 cm",
      "depth": "120 cm",
      "weight": "4.1 kg"
    },
    "price_history": [
      {
        "month": "May",
        "amazon": 4143,
        "flipkart": 4179,
        "myntra": 4484
      },
      {
        "month": "Jun",
        "amazon": 3995,
        "flipkart": 4065,
        "myntra": 4289
      },
      {
        "month": "Jul",
        "amazon": 3884,
        "flipkart": 3951,
        "myntra": 4211
      },
      {
        "month": "Aug",
        "amazon": 3773,
        "flipkart": 4027,
        "myntra": 4055
      },
      {
        "month": "Sep",
        "amazon": 3625,
        "flipkart": 3875,
        "myntra": 3977
      },
      {
        "month": "Current",
        "amazon": 3699,
        "flipkart": 3799,
        "myntra": 3899
      }
    ],
    "priceHistory": [
      {
        "month": "May",
        "amazon": 4143,
        "flipkart": 4179,
        "myntra": 4484
      },
      {
        "month": "Jun",
        "amazon": 3995,
        "flipkart": 4065,
        "myntra": 4289
      },
      {
        "month": "Jul",
        "amazon": 3884,
        "flipkart": 3951,
        "myntra": 4211
      },
      {
        "month": "Aug",
        "amazon": 3773,
        "flipkart": 4027,
        "myntra": 4055
      },
      {
        "month": "Sep",
        "amazon": 3625,
        "flipkart": 3875,
        "myntra": 3977
      },
      {
        "month": "Current",
        "amazon": 3699,
        "flipkart": 3799,
        "myntra": 3899
      }
    ],
    "productUrl": "https://www.myntra.com/search?rawQuery=Atomberg%20Renesa%201200mm%20Smart%20BLDC%20Ceiling%20Fan%20with%20Remote",
    "product_url": "https://www.myntra.com/search?rawQuery=Atomberg%20Renesa%201200mm%20Smart%20BLDC%20Ceiling%20Fan%20with%20Remote",
    "seller": "Atomberg Official Store",
    "inStock": true,
    "in_stock": true,
    "sentiment": "green",
    "sentimentScore": 92,
    "best_overall_score": 78,
    "is_best_overall": false,
    "isBestOverall": false,
    "whyBuy": "Top rated home pick with 22% off and verified fast shipping.",
    "why_buy": "Top rated home pick with 22% off and verified fast shipping.",
    "reviewSummary": "Customer sentiment is strongly positive for Atomberg build quality and performance.",
    "review_summary": "Customer sentiment is strongly positive for Atomberg build quality and performance.",
    "specs": {
      "motor": "28W Energy Efficient BLDC Motor (65% electricity saving)",
      "airflow": "235 CMM high air delivery"
    },
    "reviews": [
      {
        "author": "Tanvi S",
        "rating": 5,
        "text": "Original product certified with official brand warranty.",
        "date": "2024-10-02"
      }
    ]
  },
  {
    "id": "philips-digital-airfryer-xl-amazon",
    "product_id": "philips-digital-airfryer-xl-amazon",
    "groupId": "philips-digital-airfryer-xl",
    "group_id": "philips-digital-airfryer-xl",
    "title": "Philips Digital Airfryer XL (4.1 Litre, 1400W Rapid Air) (AMAZON)",
    "name": "Philips Digital Airfryer XL (4.1 Litre, 1400W Rapid Air)",
    "product_name": "Philips Digital Airfryer XL (4.1 Litre, 1400W Rapid Air)",
    "brand": "Philips",
    "category": "home",
    "platform": "amazon",
    "price": 6999,
    "originalPrice": 10995,
    "original_price": 10995,
    "discountPercent": 36,
    "discount_percent": 36,
    "rating": 4.6,
    "reviewCount": 15800,
    "review_count": 15800,
    "deliveryEstimate": "Tomorrow (Prime)",
    "delivery_estimate": "Tomorrow (Prime)",
    "imageUrl": "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=900&auto=format&fit=crop&q=80",
    "image_url": "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=900&auto=format&fit=crop&q=80",
    "images": [
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1570222094114-d054a817e56b?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=900&auto=format&fit=crop&q=80"
    ],
    "dimensions": {
      "width": "26.4 cm",
      "height": "29.5 cm",
      "depth": "36.0 cm",
      "weight": "4.5 kg"
    },
    "price_history": [
      {
        "month": "May",
        "amazon": 7839,
        "flipkart": 8029,
        "myntra": 8624
      },
      {
        "month": "Jun",
        "amazon": 7559,
        "flipkart": 7810,
        "myntra": 8249
      },
      {
        "month": "Jul",
        "amazon": 7349,
        "flipkart": 7591,
        "myntra": 8099
      },
      {
        "month": "Aug",
        "amazon": 7139,
        "flipkart": 7737,
        "myntra": 7799
      },
      {
        "month": "Sep",
        "amazon": 6859,
        "flipkart": 7445,
        "myntra": 7649
      },
      {
        "month": "Current",
        "amazon": 6999,
        "flipkart": 7299,
        "myntra": 7499
      }
    ],
    "priceHistory": [
      {
        "month": "May",
        "amazon": 7839,
        "flipkart": 8029,
        "myntra": 8624
      },
      {
        "month": "Jun",
        "amazon": 7559,
        "flipkart": 7810,
        "myntra": 8249
      },
      {
        "month": "Jul",
        "amazon": 7349,
        "flipkart": 7591,
        "myntra": 8099
      },
      {
        "month": "Aug",
        "amazon": 7139,
        "flipkart": 7737,
        "myntra": 7799
      },
      {
        "month": "Sep",
        "amazon": 6859,
        "flipkart": 7445,
        "myntra": 7649
      },
      {
        "month": "Current",
        "amazon": 6999,
        "flipkart": 7299,
        "myntra": 7499
      }
    ],
    "productUrl": "https://www.amazon.in/dp/B09C2BRXGQ",
    "product_url": "https://www.amazon.in/dp/B09C2BRXGQ",
    "seller": "Appario Retail (Amazon Prime)",
    "inStock": true,
    "in_stock": true,
    "sentiment": "green",
    "sentimentScore": 92,
    "best_overall_score": 83,
    "is_best_overall": true,
    "isBestOverall": true,
    "whyBuy": "Top rated home pick with 36% off and verified fast shipping.",
    "why_buy": "Top rated home pick with 36% off and verified fast shipping.",
    "reviewSummary": "Customer sentiment is strongly positive for Philips build quality and performance.",
    "review_summary": "Customer sentiment is strongly positive for Philips build quality and performance.",
    "specs": {
      "capacity": "4.1 Litre Rapid Air Technology basket",
      "power": "1400W 7 preset digital touch screen"
    },
    "reviews": [
      {
        "author": "Rahul K",
        "rating": 5,
        "text": "Genuine Philips item with sealed packaging. Superb quality and quick Prime delivery.",
        "date": "2024-11-15"
      },
      {
        "author": "Priya M",
        "rating": 4,
        "text": "Delivered in 1 day with invoice and warranty certificate. Great experience.",
        "date": "2024-10-22"
      }
    ]
  },
  {
    "id": "philips-digital-airfryer-xl-flipkart",
    "product_id": "philips-digital-airfryer-xl-flipkart",
    "groupId": "philips-digital-airfryer-xl",
    "group_id": "philips-digital-airfryer-xl",
    "title": "Philips Digital Airfryer XL (4.1 Litre, 1400W Rapid Air) (FLIPKART)",
    "name": "Philips Digital Airfryer XL (4.1 Litre, 1400W Rapid Air)",
    "product_name": "Philips Digital Airfryer XL (4.1 Litre, 1400W Rapid Air)",
    "brand": "Philips",
    "category": "home",
    "platform": "flipkart",
    "price": 7299,
    "originalPrice": 10995,
    "original_price": 10995,
    "discountPercent": 34,
    "discount_percent": 34,
    "rating": 4.5,
    "reviewCount": 11400,
    "review_count": 11400,
    "deliveryEstimate": "2-3 days (Assured)",
    "delivery_estimate": "2-3 days (Assured)",
    "imageUrl": "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=900&auto=format&fit=crop&q=80",
    "image_url": "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=900&auto=format&fit=crop&q=80",
    "images": [
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1570222094114-d054a817e56b?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=900&auto=format&fit=crop&q=80"
    ],
    "dimensions": {
      "width": "26.4 cm",
      "height": "29.5 cm",
      "depth": "36.0 cm",
      "weight": "4.5 kg"
    },
    "price_history": [
      {
        "month": "May",
        "amazon": 7839,
        "flipkart": 8029,
        "myntra": 8624
      },
      {
        "month": "Jun",
        "amazon": 7559,
        "flipkart": 7810,
        "myntra": 8249
      },
      {
        "month": "Jul",
        "amazon": 7349,
        "flipkart": 7591,
        "myntra": 8099
      },
      {
        "month": "Aug",
        "amazon": 7139,
        "flipkart": 7737,
        "myntra": 7799
      },
      {
        "month": "Sep",
        "amazon": 6859,
        "flipkart": 7445,
        "myntra": 7649
      },
      {
        "month": "Current",
        "amazon": 6999,
        "flipkart": 7299,
        "myntra": 7499
      }
    ],
    "priceHistory": [
      {
        "month": "May",
        "amazon": 7839,
        "flipkart": 8029,
        "myntra": 8624
      },
      {
        "month": "Jun",
        "amazon": 7559,
        "flipkart": 7810,
        "myntra": 8249
      },
      {
        "month": "Jul",
        "amazon": 7349,
        "flipkart": 7591,
        "myntra": 8099
      },
      {
        "month": "Aug",
        "amazon": 7139,
        "flipkart": 7737,
        "myntra": 7799
      },
      {
        "month": "Sep",
        "amazon": 6859,
        "flipkart": 7445,
        "myntra": 7649
      },
      {
        "month": "Current",
        "amazon": 6999,
        "flipkart": 7299,
        "myntra": 7499
      }
    ],
    "productUrl": "https://www.flipkart.com/search?q=Philips%20Digital%20Airfryer%20XL&otracker=search",
    "product_url": "https://www.flipkart.com/search?q=Philips%20Digital%20Airfryer%20XL&otracker=search",
    "seller": "SuperComNet (Flipkart Assured)",
    "inStock": true,
    "in_stock": true,
    "sentiment": "green",
    "sentimentScore": 91,
    "best_overall_score": 81,
    "is_best_overall": false,
    "isBestOverall": false,
    "whyBuy": "Top rated home pick with 34% off and verified fast shipping.",
    "why_buy": "Top rated home pick with 34% off and verified fast shipping.",
    "reviewSummary": "Customer sentiment is strongly positive for Philips build quality and performance.",
    "review_summary": "Customer sentiment is strongly positive for Philips build quality and performance.",
    "specs": {
      "capacity": "4.1 Litre Rapid Air Technology basket",
      "power": "1400W 7 preset digital touch screen"
    },
    "reviews": [
      {
        "author": "Karan B",
        "rating": 5,
        "text": "Authentic product with 1-year brand warranty. Very smooth checkout.",
        "date": "2024-11-12"
      }
    ]
  },
  {
    "id": "philips-digital-airfryer-xl-myntra",
    "product_id": "philips-digital-airfryer-xl-myntra",
    "groupId": "philips-digital-airfryer-xl",
    "group_id": "philips-digital-airfryer-xl",
    "title": "Philips Digital Airfryer XL (4.1 Litre, 1400W Rapid Air) (MYNTRA)",
    "name": "Philips Digital Airfryer XL (4.1 Litre, 1400W Rapid Air)",
    "product_name": "Philips Digital Airfryer XL (4.1 Litre, 1400W Rapid Air)",
    "brand": "Philips",
    "category": "home",
    "platform": "myntra",
    "price": 7499,
    "originalPrice": 10995,
    "original_price": 10995,
    "discountPercent": 32,
    "discount_percent": 32,
    "rating": 4.6,
    "reviewCount": 1800,
    "review_count": 1800,
    "deliveryEstimate": "1-2 days (Express)",
    "delivery_estimate": "1-2 days (Express)",
    "imageUrl": "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=900&auto=format&fit=crop&q=80",
    "image_url": "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=900&auto=format&fit=crop&q=80",
    "images": [
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1570222094114-d054a817e56b?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=900&auto=format&fit=crop&q=80"
    ],
    "dimensions": {
      "width": "26.4 cm",
      "height": "29.5 cm",
      "depth": "36.0 cm",
      "weight": "4.5 kg"
    },
    "price_history": [
      {
        "month": "May",
        "amazon": 7839,
        "flipkart": 8029,
        "myntra": 8624
      },
      {
        "month": "Jun",
        "amazon": 7559,
        "flipkart": 7810,
        "myntra": 8249
      },
      {
        "month": "Jul",
        "amazon": 7349,
        "flipkart": 7591,
        "myntra": 8099
      },
      {
        "month": "Aug",
        "amazon": 7139,
        "flipkart": 7737,
        "myntra": 7799
      },
      {
        "month": "Sep",
        "amazon": 6859,
        "flipkart": 7445,
        "myntra": 7649
      },
      {
        "month": "Current",
        "amazon": 6999,
        "flipkart": 7299,
        "myntra": 7499
      }
    ],
    "priceHistory": [
      {
        "month": "May",
        "amazon": 7839,
        "flipkart": 8029,
        "myntra": 8624
      },
      {
        "month": "Jun",
        "amazon": 7559,
        "flipkart": 7810,
        "myntra": 8249
      },
      {
        "month": "Jul",
        "amazon": 7349,
        "flipkart": 7591,
        "myntra": 8099
      },
      {
        "month": "Aug",
        "amazon": 7139,
        "flipkart": 7737,
        "myntra": 7799
      },
      {
        "month": "Sep",
        "amazon": 6859,
        "flipkart": 7445,
        "myntra": 7649
      },
      {
        "month": "Current",
        "amazon": 6999,
        "flipkart": 7299,
        "myntra": 7499
      }
    ],
    "productUrl": "https://www.myntra.com/search?rawQuery=Philips%20Digital%20Airfryer%20XL",
    "product_url": "https://www.myntra.com/search?rawQuery=Philips%20Digital%20Airfryer%20XL",
    "seller": "Philips Official Store",
    "inStock": true,
    "in_stock": true,
    "sentiment": "green",
    "sentimentScore": 92,
    "best_overall_score": 82,
    "is_best_overall": false,
    "isBestOverall": false,
    "whyBuy": "Top rated home pick with 32% off and verified fast shipping.",
    "why_buy": "Top rated home pick with 32% off and verified fast shipping.",
    "reviewSummary": "Customer sentiment is strongly positive for Philips build quality and performance.",
    "review_summary": "Customer sentiment is strongly positive for Philips build quality and performance.",
    "specs": {
      "capacity": "4.1 Litre Rapid Air Technology basket",
      "power": "1400W 7 preset digital touch screen"
    },
    "reviews": [
      {
        "author": "Tanvi S",
        "rating": 5,
        "text": "Original product certified with official brand warranty.",
        "date": "2024-10-02"
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
    "originalPrice": 39900,
    "original_price": 39900,
    "discountPercent": 25,
    "discount_percent": 25,
    "rating": 4.7,
    "reviewCount": 6890,
    "review_count": 6890,
    "deliveryEstimate": "Tomorrow (Prime)",
    "delivery_estimate": "Tomorrow (Prime)",
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
        "flipkart": 33990,
        "myntra": 36685
      },
      {
        "month": "Jun",
        "amazon": 32292,
        "flipkart": 33063,
        "myntra": 35090
      },
      {
        "month": "Jul",
        "amazon": 31395,
        "flipkart": 32136,
        "myntra": 34452
      },
      {
        "month": "Aug",
        "amazon": 30498,
        "flipkart": 32754,
        "myntra": 33176
      },
      {
        "month": "Sep",
        "amazon": 29302,
        "flipkart": 31518,
        "myntra": 32538
      },
      {
        "month": "Current",
        "amazon": 29900,
        "flipkart": 30900,
        "myntra": 31900
      }
    ],
    "priceHistory": [
      {
        "month": "May",
        "amazon": 33488,
        "flipkart": 33990,
        "myntra": 36685
      },
      {
        "month": "Jun",
        "amazon": 32292,
        "flipkart": 33063,
        "myntra": 35090
      },
      {
        "month": "Jul",
        "amazon": 31395,
        "flipkart": 32136,
        "myntra": 34452
      },
      {
        "month": "Aug",
        "amazon": 30498,
        "flipkart": 32754,
        "myntra": 33176
      },
      {
        "month": "Sep",
        "amazon": 29302,
        "flipkart": 31518,
        "myntra": 32538
      },
      {
        "month": "Current",
        "amazon": 29900,
        "flipkart": 30900,
        "myntra": 31900
      }
    ],
    "productUrl": "https://www.amazon.in/dp/B078N29S7C",
    "product_url": "https://www.amazon.in/dp/B078N29S7C",
    "seller": "Appario Retail (Amazon Prime)",
    "inStock": true,
    "in_stock": true,
    "sentiment": "green",
    "sentimentScore": 94,
    "best_overall_score": 81,
    "is_best_overall": true,
    "isBestOverall": true,
    "whyBuy": "Top rated home pick with 25% off and verified fast shipping.",
    "why_buy": "Top rated home pick with 25% off and verified fast shipping.",
    "reviewSummary": "Customer sentiment is strongly positive for Dyson build quality and performance.",
    "review_summary": "Customer sentiment is strongly positive for Dyson build quality and performance.",
    "specs": {
      "motor": "Dyson Digital Motor V8 spinning at 110,000 RPM",
      "suction": "115 AW powerful fade-free suction"
    },
    "reviews": [
      {
        "author": "Rahul K",
        "rating": 5,
        "text": "Genuine Dyson item with sealed packaging. Superb quality and quick Prime delivery.",
        "date": "2024-11-15"
      },
      {
        "author": "Priya M",
        "rating": 4,
        "text": "Delivered in 1 day with invoice and warranty certificate. Great experience.",
        "date": "2024-10-22"
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
    "price": 30900,
    "originalPrice": 39900,
    "original_price": 39900,
    "discountPercent": 23,
    "discount_percent": 23,
    "rating": 4.6,
    "reviewCount": 4100,
    "review_count": 4100,
    "deliveryEstimate": "2-3 days (Assured)",
    "delivery_estimate": "2-3 days (Assured)",
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
        "flipkart": 33990,
        "myntra": 36685
      },
      {
        "month": "Jun",
        "amazon": 32292,
        "flipkart": 33063,
        "myntra": 35090
      },
      {
        "month": "Jul",
        "amazon": 31395,
        "flipkart": 32136,
        "myntra": 34452
      },
      {
        "month": "Aug",
        "amazon": 30498,
        "flipkart": 32754,
        "myntra": 33176
      },
      {
        "month": "Sep",
        "amazon": 29302,
        "flipkart": 31518,
        "myntra": 32538
      },
      {
        "month": "Current",
        "amazon": 29900,
        "flipkart": 30900,
        "myntra": 31900
      }
    ],
    "priceHistory": [
      {
        "month": "May",
        "amazon": 33488,
        "flipkart": 33990,
        "myntra": 36685
      },
      {
        "month": "Jun",
        "amazon": 32292,
        "flipkart": 33063,
        "myntra": 35090
      },
      {
        "month": "Jul",
        "amazon": 31395,
        "flipkart": 32136,
        "myntra": 34452
      },
      {
        "month": "Aug",
        "amazon": 30498,
        "flipkart": 32754,
        "myntra": 33176
      },
      {
        "month": "Sep",
        "amazon": 29302,
        "flipkart": 31518,
        "myntra": 32538
      },
      {
        "month": "Current",
        "amazon": 29900,
        "flipkart": 30900,
        "myntra": 31900
      }
    ],
    "productUrl": "https://www.flipkart.com/search?q=Dyson%20V8%20Absolute%20Cordless%20Stick%20Vacuum%20Cleaner&otracker=search",
    "product_url": "https://www.flipkart.com/search?q=Dyson%20V8%20Absolute%20Cordless%20Stick%20Vacuum%20Cleaner&otracker=search",
    "seller": "SuperComNet (Flipkart Assured)",
    "inStock": true,
    "in_stock": true,
    "sentiment": "green",
    "sentimentScore": 92,
    "best_overall_score": 78,
    "is_best_overall": false,
    "isBestOverall": false,
    "whyBuy": "Top rated home pick with 23% off and verified fast shipping.",
    "why_buy": "Top rated home pick with 23% off and verified fast shipping.",
    "reviewSummary": "Customer sentiment is strongly positive for Dyson build quality and performance.",
    "review_summary": "Customer sentiment is strongly positive for Dyson build quality and performance.",
    "specs": {
      "motor": "Dyson Digital Motor V8 spinning at 110,000 RPM",
      "suction": "115 AW powerful fade-free suction"
    },
    "reviews": [
      {
        "author": "Karan B",
        "rating": 5,
        "text": "Authentic product with 1-year brand warranty. Very smooth checkout.",
        "date": "2024-11-12"
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
    "originalPrice": 39900,
    "original_price": 39900,
    "discountPercent": 20,
    "discount_percent": 20,
    "rating": 4.7,
    "reviewCount": 750,
    "review_count": 750,
    "deliveryEstimate": "1-2 days (Express)",
    "delivery_estimate": "1-2 days (Express)",
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
        "flipkart": 33990,
        "myntra": 36685
      },
      {
        "month": "Jun",
        "amazon": 32292,
        "flipkart": 33063,
        "myntra": 35090
      },
      {
        "month": "Jul",
        "amazon": 31395,
        "flipkart": 32136,
        "myntra": 34452
      },
      {
        "month": "Aug",
        "amazon": 30498,
        "flipkart": 32754,
        "myntra": 33176
      },
      {
        "month": "Sep",
        "amazon": 29302,
        "flipkart": 31518,
        "myntra": 32538
      },
      {
        "month": "Current",
        "amazon": 29900,
        "flipkart": 30900,
        "myntra": 31900
      }
    ],
    "priceHistory": [
      {
        "month": "May",
        "amazon": 33488,
        "flipkart": 33990,
        "myntra": 36685
      },
      {
        "month": "Jun",
        "amazon": 32292,
        "flipkart": 33063,
        "myntra": 35090
      },
      {
        "month": "Jul",
        "amazon": 31395,
        "flipkart": 32136,
        "myntra": 34452
      },
      {
        "month": "Aug",
        "amazon": 30498,
        "flipkart": 32754,
        "myntra": 33176
      },
      {
        "month": "Sep",
        "amazon": 29302,
        "flipkart": 31518,
        "myntra": 32538
      },
      {
        "month": "Current",
        "amazon": 29900,
        "flipkart": 30900,
        "myntra": 31900
      }
    ],
    "productUrl": "https://www.myntra.com/search?rawQuery=Dyson%20V8%20Absolute%20Cordless%20Stick%20Vacuum%20Cleaner",
    "product_url": "https://www.myntra.com/search?rawQuery=Dyson%20V8%20Absolute%20Cordless%20Stick%20Vacuum%20Cleaner",
    "seller": "Dyson Official Store",
    "inStock": true,
    "in_stock": true,
    "sentiment": "green",
    "sentimentScore": 94,
    "best_overall_score": 79,
    "is_best_overall": false,
    "isBestOverall": false,
    "whyBuy": "Top rated home pick with 20% off and verified fast shipping.",
    "why_buy": "Top rated home pick with 20% off and verified fast shipping.",
    "reviewSummary": "Customer sentiment is strongly positive for Dyson build quality and performance.",
    "review_summary": "Customer sentiment is strongly positive for Dyson build quality and performance.",
    "specs": {
      "motor": "Dyson Digital Motor V8 spinning at 110,000 RPM",
      "suction": "115 AW powerful fade-free suction"
    },
    "reviews": [
      {
        "author": "Tanvi S",
        "rating": 5,
        "text": "Original product certified with official brand warranty.",
        "date": "2024-10-02"
      }
    ]
  }
];

export const searchMockProducts = ({ query = "", category = "", minPrice = 0, maxPrice = 10000000, platforms = [], sortBy = "best_value" }) => {
  let filtered = [...mockProducts];

  if (category) {
    filtered = filtered.filter((p) => p.category.toLowerCase() === category.toLowerCase());
  }

  if (query) {
    const qTokens = query.toLowerCase().split(/\s+/).filter(Boolean);
    filtered = filtered.filter((p) => {
      const searchTarget = `${p.title} ${p.name} ${p.brand} ${p.category} ${p.platform}`.toLowerCase();
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
