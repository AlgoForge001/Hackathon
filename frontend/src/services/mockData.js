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
    "group_id": "sony-wh1000xm5",
    "product_name": "Sony WH-1000XM5 Wireless Noise Cancelling Headphones",
    "category": "electronics",
    "brand": "Sony",
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
    "specs": {
      "type": "Over-ear Wireless ANC",
      "battery": "30 hours with ANC",
      "noise_cancellation": "8 Mics Auto NC Optimizer",
      "sound": "LDAC Hi-Res Audio"
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
    "platforms": [
      {
        "platform": "amazon",
        "platform_product_id": "B09XS7JWHH",
        "price": 24990,
        "original_price": 29990,
        "discount_percent": 17,
        "rating": 4.7,
        "review_count": 12450,
        "delivery_estimate": "Tomorrow (Prime)",
        "seller": "Appario Retail (Amazon Prime)",
        "in_stock": true,
        "image_url": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=900&auto=format&fit=crop&q=80",
        "product_url": "https://www.amazon.in/dp/B09XS7JWHH",
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
        "platform": "flipkart",
        "platform_product_id": "FK-SONY-XM5",
        "price": 25499,
        "original_price": 29990,
        "discount_percent": 15,
        "rating": 4.6,
        "review_count": 8900,
        "delivery_estimate": "2-3 days (Assured)",
        "seller": "SuperComNet (Flipkart Assured)",
        "in_stock": true,
        "image_url": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=900&auto=format&fit=crop&q=80",
        "product_url": "https://www.flipkart.com/sony-wh-1000xm5-bluetooth-headset/p/itm7e62a1ef24a0d",
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
        "platform": "myntra",
        "platform_product_id": "MYN-SONY-XM5",
        "price": 26990,
        "original_price": 29990,
        "discount_percent": 10,
        "rating": 4.7,
        "review_count": 3400,
        "delivery_estimate": "1-2 days (Express)",
        "seller": "Sony Official Store",
        "in_stock": true,
        "image_url": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=900&auto=format&fit=crop&q=80",
        "product_url": "https://www.myntra.com/headphones/sony/sony-wh-1000xm5-wireless-noise-cancelling-headphones/19934752/buy",
        "reviews": [
          {
            "author": "Tanvi S",
            "rating": 5,
            "text": "Original product certified with official brand warranty.",
            "date": "2024-10-02"
          }
        ]
      }
    ],
    "price": 28990,
    "original_price": 34990,
    "originalPrice": 34990,
    "discount_percent": 17,
    "discountPercent": 17,
    "product_url": "https://www.amazon.in/s?k=Sony%20WH-1000XM5%20Wireless%20Noise%20Cancelling%20Headphones&tag=algoforge-21",
    "url": "https://www.amazon.in/s?k=Sony%20WH-1000XM5%20Wireless%20Noise%20Cancelling%20Headphones&tag=algoforge-21"
  },
  {
    "group_id": "apple-airpods-pro-2",
    "product_name": "Apple AirPods Pro (2nd Gen) with MagSafe Case (USB-C)",
    "category": "electronics",
    "brand": "Apple",
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
    "specs": {
      "chip": "Apple H2 Headphone Chip",
      "noise_cancellation": "Active Noise Cancellation + Adaptive Audio",
      "spatial_audio": "Personalized Spatial Audio with Head Tracking",
      "battery": "6 hours (30h with Case)"
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
    "platforms": [
      {
        "platform": "amazon",
        "platform_product_id": "B0CHWRXH8B",
        "price": 19999,
        "original_price": 24900,
        "discount_percent": 20,
        "rating": 4.8,
        "review_count": 24190,
        "delivery_estimate": "Tomorrow (Prime)",
        "seller": "Appario Retail (Amazon Prime)",
        "in_stock": true,
        "image_url": "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=900&auto=format&fit=crop&q=80",
        "product_url": "https://www.amazon.in/dp/B0CHWRXH8B",
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
        "platform": "flipkart",
        "platform_product_id": "FK-AIRPODS-PRO-2",
        "price": 20490,
        "original_price": 24900,
        "discount_percent": 18,
        "rating": 4.7,
        "review_count": 14200,
        "delivery_estimate": "2-3 days (Assured)",
        "seller": "SuperComNet (Flipkart Assured)",
        "in_stock": true,
        "image_url": "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=900&auto=format&fit=crop&q=80",
        "product_url": "https://www.flipkart.com/apple-airpods-pro-2nd-gen-mag-safe-case-usb-c-bluetooth-headset/p/itmd4540d58546f2",
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
        "platform": "myntra",
        "platform_product_id": "MYN-AIRPODS-PRO-2",
        "price": 21900,
        "original_price": 24900,
        "discount_percent": 12,
        "rating": 4.7,
        "review_count": 2150,
        "delivery_estimate": "1-2 days (Express)",
        "seller": "Apple Official Store",
        "in_stock": true,
        "image_url": "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=900&auto=format&fit=crop&q=80",
        "product_url": "https://www.myntra.com/headphones/apple/apple-airpods-pro-2nd-generation-with-magsafe-case-usb-c/25139828/buy",
        "reviews": [
          {
            "author": "Tanvi S",
            "rating": 5,
            "text": "Original product certified with official brand warranty.",
            "date": "2024-10-02"
          }
        ]
      }
    ],
    "price": 24900,
    "original_price": 29900,
    "originalPrice": 29900,
    "discount_percent": 17,
    "discountPercent": 17,
    "product_url": "https://www.amazon.in/s?k=Apple%20AirPods%20Pro%20(2nd%20Generation)%20with%20MagSafe%20Case%20(USB-C)&tag=algoforge-21",
    "url": "https://www.amazon.in/s?k=Apple%20AirPods%20Pro%20(2nd%20Generation)%20with%20MagSafe%20Case%20(USB-C)&tag=algoforge-21"
  },
  {
    "group_id": "apple-macbook-air-m2",
    "product_name": "Apple MacBook Air 13.6-inch M2 (8GB Unified Memory, 256GB SSD)",
    "category": "electronics",
    "brand": "Apple",
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
    "specs": {
      "processor": "Apple M2 8-core CPU / 8-core GPU",
      "display": "13.6\" Liquid Retina Display (500 nits)",
      "memory": "8GB Unified Memory",
      "storage": "256GB SSD",
      "battery": "Up to 18 hours"
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
    "platforms": [
      {
        "platform": "amazon",
        "platform_product_id": "B0B3C5Q8N1",
        "price": 84990,
        "original_price": 99900,
        "discount_percent": 15,
        "rating": 4.8,
        "review_count": 9480,
        "delivery_estimate": "Tomorrow (Prime)",
        "seller": "Appario Retail (Amazon Prime)",
        "in_stock": true,
        "image_url": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=900&auto=format&fit=crop&q=80",
        "product_url": "https://www.amazon.in/dp/B0B3C5Q8N1",
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
        "platform": "flipkart",
        "platform_product_id": "FK-MACBOOK-M2",
        "price": 83990,
        "original_price": 99900,
        "discount_percent": 16,
        "rating": 4.8,
        "review_count": 6720,
        "delivery_estimate": "2-3 days (Assured)",
        "seller": "SuperComNet (Flipkart Assured)",
        "in_stock": true,
        "image_url": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=900&auto=format&fit=crop&q=80",
        "product_url": "https://www.flipkart.com/apple-macbook-air-m2-8-gb-256-gb-ssd-mac-os-monterey-mly33hn-a/p/itm4b29e925916d8",
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
        "platform": "myntra",
        "platform_product_id": "MYN-MACBOOK-M2",
        "price": 87900,
        "original_price": 99900,
        "discount_percent": 12,
        "rating": 4.8,
        "review_count": 540,
        "delivery_estimate": "1-2 days (Express)",
        "seller": "Apple Official Store",
        "in_stock": true,
        "image_url": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=900&auto=format&fit=crop&q=80",
        "product_url": "https://www.myntra.com/laptops/apple/apple-macbook-air-m2-chip-136-inch-8gb-256gb-ssd-midnight/20839412/buy",
        "reviews": [
          {
            "author": "Tanvi S",
            "rating": 5,
            "text": "Original product certified with official brand warranty.",
            "date": "2024-10-02"
          }
        ]
      }
    ],
    "price": 89990,
    "original_price": 99900,
    "originalPrice": 99900,
    "discount_percent": 10,
    "discountPercent": 10,
    "product_url": "https://www.amazon.in/s?k=Apple%20MacBook%20Air%2013.6-inch%20with%20M2%20Chip%20256GB&tag=algoforge-21",
    "url": "https://www.amazon.in/s?k=Apple%20MacBook%20Air%2013.6-inch%20with%20M2%20Chip%20256GB&tag=algoforge-21"
  },
  {
    "group_id": "samsung-galaxy-s24-ultra",
    "product_name": "Samsung Galaxy S24 Ultra 5G (Titanium Gray, 12GB/256GB)",
    "category": "electronics",
    "brand": "Samsung",
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
    "specs": {
      "display": "6.8\" Dynamic AMOLED 2X 120Hz",
      "processor": "Snapdragon 8 Gen 3 for Galaxy",
      "camera": "200MP Quad Camera + 5x Periscope",
      "battery": "5000mAh 45W",
      "s_pen": "Built-in S-Pen"
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
    "platforms": [
      {
        "platform": "amazon",
        "platform_product_id": "B0CS5XNFXZ",
        "price": 119999,
        "original_price": 134999,
        "discount_percent": 11,
        "rating": 4.7,
        "review_count": 4890,
        "delivery_estimate": "Tomorrow (Prime)",
        "seller": "Appario Retail (Amazon Prime)",
        "in_stock": true,
        "image_url": "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=900&auto=format&fit=crop&q=80",
        "product_url": "https://www.amazon.in/dp/B0CS5XNFXZ",
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
        "platform": "flipkart",
        "platform_product_id": "FK-S24-ULTRA",
        "price": 118499,
        "original_price": 134999,
        "discount_percent": 12,
        "rating": 4.6,
        "review_count": 3120,
        "delivery_estimate": "2-3 days (Assured)",
        "seller": "SuperComNet (Flipkart Assured)",
        "in_stock": true,
        "image_url": "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=900&auto=format&fit=crop&q=80",
        "product_url": "https://www.flipkart.com/samsung-galaxy-s24-ultra-5g-titanium-gray-256-gb/p/itm5347be735f4df",
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
        "platform": "myntra",
        "platform_product_id": "MYN-S24-ULTRA",
        "price": 122999,
        "original_price": 134999,
        "discount_percent": 9,
        "rating": 4.6,
        "review_count": 320,
        "delivery_estimate": "1-2 days (Express)",
        "seller": "Samsung Official Store",
        "in_stock": true,
        "image_url": "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=900&auto=format&fit=crop&q=80",
        "product_url": "https://www.myntra.com/smartphones/samsung/samsung-galaxy-s24-ultra-5g-256gb-titanium-gray/27189402/buy",
        "reviews": [
          {
            "author": "Tanvi S",
            "rating": 5,
            "text": "Original product certified with official brand warranty.",
            "date": "2024-10-02"
          }
        ]
      }
    ],
    "price": 121999,
    "original_price": 134999,
    "originalPrice": 134999,
    "discount_percent": 10,
    "discountPercent": 10,
    "product_url": "https://www.amazon.in/s?k=Samsung%20Galaxy%20S24%20Ultra%205G&tag=algoforge-21",
    "url": "https://www.amazon.in/s?k=Samsung%20Galaxy%20S24%20Ultra%205G&tag=algoforge-21"
  },
  {
    "group_id": "asus-rog-zephyrus-g14",
    "product_name": "ASUS ROG Zephyrus G14 (2024) 3K OLED Gaming Laptop",
    "category": "electronics",
    "brand": "ASUS",
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
    "specs": {
      "processor": "AMD Ryzen 9 8945HS",
      "graphics": "NVIDIA GeForce RTX 4060 8GB GDDR6",
      "display": "14\" 3K 120Hz ROG Nebula OLED",
      "memory": "16GB LPDDR5X / 1TB SSD"
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
    "platforms": [
      {
        "platform": "amazon",
        "platform_product_id": "B0CSG6K8L1",
        "price": 154990,
        "original_price": 189990,
        "discount_percent": 18,
        "rating": 4.7,
        "review_count": 2410,
        "delivery_estimate": "Tomorrow (Prime)",
        "seller": "Appario Retail (Amazon Prime)",
        "in_stock": true,
        "image_url": "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=900&auto=format&fit=crop&q=80",
        "product_url": "https://www.amazon.in/dp/B0CSG6K8L1",
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
        "platform": "flipkart",
        "platform_product_id": "FK-ROG-G14",
        "price": 152990,
        "original_price": 189990,
        "discount_percent": 19,
        "rating": 4.6,
        "review_count": 1890,
        "delivery_estimate": "2-3 days (Assured)",
        "seller": "SuperComNet (Flipkart Assured)",
        "in_stock": true,
        "image_url": "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=900&auto=format&fit=crop&q=80",
        "product_url": "https://www.flipkart.com/asus-rog-zephyrus-g14-2024-amd-ryzen-9-8945hs-16-gb-1-tb-ssd-windows-11-home-8-gb-graphics-nvidia-geforce-rtx-4060-ga403uv-qs085ws-gaming-laptop/p/itm3d25ceea2fc11",
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
        "platform": "myntra",
        "platform_product_id": "MYN-ROG-G14",
        "price": 159990,
        "original_price": 189990,
        "discount_percent": 16,
        "rating": 4.7,
        "review_count": 180,
        "delivery_estimate": "1-2 days (Express)",
        "seller": "ASUS Official Store",
        "in_stock": true,
        "image_url": "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=900&auto=format&fit=crop&q=80",
        "product_url": "https://www.myntra.com/laptops/asus/asus-rog-zephyrus-g14-3k-oled-gaming-laptop/28391024/buy",
        "reviews": [
          {
            "author": "Tanvi S",
            "rating": 5,
            "text": "Original product certified with official brand warranty.",
            "date": "2024-10-02"
          }
        ]
      }
    ],
    "price": 154990,
    "original_price": 189990,
    "originalPrice": 189990,
    "discount_percent": 18,
    "discountPercent": 18,
    "product_url": "https://www.amazon.in/s?k=ASUS%20ROG%20Zephyrus%20G14%202024%20OLED%20Gaming%20Laptop&tag=algoforge-21",
    "url": "https://www.amazon.in/s?k=ASUS%20ROG%20Zephyrus%20G14%202024%20OLED%20Gaming%20Laptop&tag=algoforge-21"
  },
  {
    "group_id": "playstation-5-slim",
    "product_name": "Sony PlayStation 5 Console Slim (Disc Edition, 1TB SSD)",
    "category": "electronics",
    "brand": "Sony",
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
    "specs": {
      "storage": "1TB Ultra-High Speed NVMe SSD",
      "gaming": "4K 120Hz Gaming, Ray Tracing, HDR",
      "controller": "DualSense Wireless Controller"
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
    "platforms": [
      {
        "platform": "amazon",
        "platform_product_id": "B0CY5Q2N1W",
        "price": 49990,
        "original_price": 54990,
        "discount_percent": 9,
        "rating": 4.9,
        "review_count": 8700,
        "delivery_estimate": "Tomorrow (Prime)",
        "seller": "Appario Retail (Amazon Prime)",
        "in_stock": true,
        "image_url": "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=900&auto=format&fit=crop&q=80",
        "product_url": "https://www.amazon.in/dp/B0CY5Q2N1W",
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
        "platform": "flipkart",
        "platform_product_id": "FK-PS5-SLIM",
        "price": 48990,
        "original_price": 54990,
        "discount_percent": 11,
        "rating": 4.8,
        "review_count": 5400,
        "delivery_estimate": "2-3 days (Assured)",
        "seller": "SuperComNet (Flipkart Assured)",
        "in_stock": true,
        "image_url": "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=900&auto=format&fit=crop&q=80",
        "product_url": "https://www.flipkart.com/sony-playstation-5-slim-cfi-2008a01x-1-tb/p/itmdc74766ce5dd6",
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
        "platform": "myntra",
        "platform_product_id": "MYN-PS5-SLIM",
        "price": 51990,
        "original_price": 54990,
        "discount_percent": 5,
        "rating": 4.8,
        "review_count": 450,
        "delivery_estimate": "1-2 days (Express)",
        "seller": "Sony Official Store",
        "in_stock": true,
        "image_url": "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=900&auto=format&fit=crop&q=80",
        "product_url": "https://www.myntra.com/gaming-consoles/sony/sony-playstation-5-slim-disc-edition-1tb/28901248/buy",
        "reviews": [
          {
            "author": "Tanvi S",
            "rating": 5,
            "text": "Original product certified with official brand warranty.",
            "date": "2024-10-02"
          }
        ]
      }
    ],
    "price": 54990,
    "original_price": 54990,
    "originalPrice": 54990,
    "product_url": "https://www.amazon.in/s?k=Sony%20PlayStation%205%20Console%20Slim%20Disc%20Edition&tag=algoforge-21",
    "url": "https://www.amazon.in/s?k=Sony%20PlayStation%205%20Console%20Slim%20Disc%20Edition&tag=algoforge-21"
  },
  {
    "group_id": "apple-watch-series-9",
    "product_name": "Apple Watch Series 9 GPS 45mm (Midnight Aluminum Case)",
    "category": "electronics",
    "brand": "Apple",
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
    "specs": {
      "display": "Always-On Retina OLED (2000 nits)",
      "chip": "S9 SiP with Double Tap gesture",
      "sensors": "ECG, SpO2, Temperature Sensor"
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
    "platforms": [
      {
        "platform": "amazon",
        "platform_product_id": "B0CHWZ8H7H",
        "price": 38999,
        "original_price": 44900,
        "discount_percent": 13,
        "rating": 4.7,
        "review_count": 6120,
        "delivery_estimate": "Tomorrow (Prime)",
        "seller": "Appario Retail (Amazon Prime)",
        "in_stock": true,
        "image_url": "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=900&auto=format&fit=crop&q=80",
        "product_url": "https://www.amazon.in/dp/B0CHWZ8H7H",
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
        "platform": "flipkart",
        "platform_product_id": "FK-APPLE-WATCH-S9",
        "price": 37990,
        "original_price": 44900,
        "discount_percent": 15,
        "rating": 4.6,
        "review_count": 4200,
        "delivery_estimate": "2-3 days (Assured)",
        "seller": "SuperComNet (Flipkart Assured)",
        "in_stock": true,
        "image_url": "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=900&auto=format&fit=crop&q=80",
        "product_url": "https://www.flipkart.com/apple-watch-series-9-gps-45mm-midnight-aluminium-case-sport-band/p/itm4b29e925916d8",
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
        "platform": "myntra",
        "platform_product_id": "MYN-WATCH-S9",
        "price": 39900,
        "original_price": 44900,
        "discount_percent": 11,
        "rating": 4.7,
        "review_count": 980,
        "delivery_estimate": "1-2 days (Express)",
        "seller": "Apple Official Store",
        "in_stock": true,
        "image_url": "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=900&auto=format&fit=crop&q=80",
        "product_url": "https://www.myntra.com/smartwatches/apple/apple-watch-series-9-gps-45mm-midnight-aluminium/25139850/buy",
        "reviews": [
          {
            "author": "Tanvi S",
            "rating": 5,
            "text": "Original product certified with official brand warranty.",
            "date": "2024-10-02"
          }
        ]
      }
    ],
    "price": 41900,
    "original_price": 44900,
    "originalPrice": 44900,
    "discount_percent": 7,
    "discountPercent": 7,
    "product_url": "https://www.amazon.in/s?k=Apple%20Watch%20Series%209%20GPS%2045mm&tag=algoforge-21",
    "url": "https://www.amazon.in/s?k=Apple%20Watch%20Series%209%20GPS%2045mm&tag=algoforge-21"
  },
  {
    "group_id": "kindle-paperwhite-16gb",
    "product_name": "Amazon Kindle Paperwhite (16 GB) – 6.8\" Glare-Free with Warm Light",
    "category": "electronics",
    "brand": "Amazon",
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
    "specs": {
      "display": "6.8\" 300 ppi glare-free Paperwhite",
      "lighting": "Adjustable Warm Light",
      "battery": "Up to 10 weeks battery life"
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
    "platforms": [
      {
        "platform": "amazon",
        "platform_product_id": "B08N41Y4Q2",
        "price": 13999,
        "original_price": 14999,
        "discount_percent": 7,
        "rating": 4.8,
        "review_count": 18450,
        "delivery_estimate": "Tomorrow (Prime)",
        "seller": "Appario Retail (Amazon Prime)",
        "in_stock": true,
        "image_url": "https://images.unsplash.com/photo-1592496431122-2349e0fbc666?w=900&auto=format&fit=crop&q=80",
        "product_url": "https://www.amazon.in/dp/B08N41Y4Q2",
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
        "platform": "flipkart",
        "platform_product_id": "FK-KINDLE-PW-16GB",
        "price": 14499,
        "original_price": 14999,
        "discount_percent": 3,
        "rating": 4.6,
        "review_count": 3200,
        "delivery_estimate": "2-3 days (Assured)",
        "seller": "SuperComNet (Flipkart Assured)",
        "in_stock": true,
        "image_url": "https://images.unsplash.com/photo-1592496431122-2349e0fbc666?w=900&auto=format&fit=crop&q=80",
        "product_url": "https://www.flipkart.com/all-new-kindle-paperwhite-16-gb-6-8-display-adjustable-warm-light/p/itm7e62a1ef24a0d",
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
        "platform": "myntra",
        "platform_product_id": "MYN-KINDLE-PW",
        "price": 14999,
        "original_price": 14999,
        "discount_percent": 0,
        "rating": 4.7,
        "review_count": 380,
        "delivery_estimate": "1-2 days (Express)",
        "seller": "Amazon Official Store",
        "in_stock": true,
        "image_url": "https://images.unsplash.com/photo-1592496431122-2349e0fbc666?w=900&auto=format&fit=crop&q=80",
        "product_url": "https://www.myntra.com/e-readers/amazon/amazon-kindle-paperwhite-16gb-68-inch-glare-free/21934752/buy",
        "reviews": [
          {
            "author": "Tanvi S",
            "rating": 5,
            "text": "Original product certified with official brand warranty.",
            "date": "2024-10-02"
          }
        ]
      }
    ],
    "price": 14999,
    "original_price": 14999,
    "originalPrice": 14999,
    "product_url": "https://www.amazon.in/s?k=Amazon%20Kindle%20Paperwhite%2016%20GB%206.8%20inch%20display&tag=algoforge-21",
    "url": "https://www.amazon.in/s?k=Amazon%20Kindle%20Paperwhite%2016%20GB%206.8%20inch%20display&tag=algoforge-21"
  },
  {
    "group_id": "bose-quietcomfort-ultra",
    "product_name": "Bose QuietComfort Ultra Wireless Noise Cancelling Headphones",
    "category": "electronics",
    "brand": "Bose",
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
    "specs": {
      "sound": "Bose Immersive Audio with CustomTune",
      "battery": "24 hours continuous playback"
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
    "platforms": [
      {
        "platform": "amazon",
        "platform_product_id": "B0CCZ26B5V",
        "price": 32990,
        "original_price": 37990,
        "discount_percent": 13,
        "rating": 4.7,
        "review_count": 4200,
        "delivery_estimate": "Tomorrow (Prime)",
        "seller": "Appario Retail (Amazon Prime)",
        "in_stock": true,
        "image_url": "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=900&auto=format&fit=crop&q=80",
        "product_url": "https://www.amazon.in/dp/B0CCZ26B5V",
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
        "platform": "flipkart",
        "platform_product_id": "FK-BOSE-QC-ULTRA",
        "price": 33499,
        "original_price": 37990,
        "discount_percent": 12,
        "rating": 4.6,
        "review_count": 2900,
        "delivery_estimate": "2-3 days (Assured)",
        "seller": "SuperComNet (Flipkart Assured)",
        "in_stock": true,
        "image_url": "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=900&auto=format&fit=crop&q=80",
        "product_url": "https://www.flipkart.com/bose-quietcomfort-ultra-bluetooth-headset/p/itm4b29e925916d8",
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
        "platform": "myntra",
        "platform_product_id": "MYN-BOSE-QC-ULTRA",
        "price": 34990,
        "original_price": 37990,
        "discount_percent": 8,
        "rating": 4.7,
        "review_count": 810,
        "delivery_estimate": "1-2 days (Express)",
        "seller": "Bose Official Store",
        "in_stock": true,
        "image_url": "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=900&auto=format&fit=crop&q=80",
        "product_url": "https://www.myntra.com/headphones/bose/bose-quietcomfort-ultra-wireless-noise-cancelling-headphones/26109482/buy",
        "reviews": [
          {
            "author": "Tanvi S",
            "rating": 5,
            "text": "Original product certified with official brand warranty.",
            "date": "2024-10-02"
          }
        ]
      }
    ],
    "price": 35900,
    "original_price": 39900,
    "originalPrice": 39900,
    "discount_percent": 10,
    "discountPercent": 10,
    "product_url": "https://www.amazon.in/s?k=Bose%20QuietComfort%20Ultra%20Wireless%20Noise%20Cancelling%20Headphones&tag=algoforge-21",
    "url": "https://www.amazon.in/s?k=Bose%20QuietComfort%20Ultra%20Wireless%20Noise%20Cancelling%20Headphones&tag=algoforge-21"
  },
  {
    "group_id": "nike-air-max-270",
    "product_name": "Nike Air Max 270 Men's Running & Lifestyle Shoes",
    "category": "footwear",
    "brand": "Nike",
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
    "specs": {
      "cushioning": "Max Air 270 heel unit",
      "upper": "Engineered breathable mesh"
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
    "platforms": [
      {
        "platform": "amazon",
        "platform_product_id": "B07C9L8ZXY",
        "price": 11495,
        "original_price": 13995,
        "discount_percent": 18,
        "rating": 4.5,
        "review_count": 9450,
        "delivery_estimate": "Tomorrow (Prime)",
        "seller": "Appario Retail (Amazon Prime)",
        "in_stock": true,
        "image_url": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=900&auto=format&fit=crop&q=80",
        "product_url": "https://www.amazon.in/dp/B07C9L8ZXY",
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
        "platform": "flipkart",
        "platform_product_id": "FK-NIKE-AM270",
        "price": 11995,
        "original_price": 13995,
        "discount_percent": 14,
        "rating": 4.4,
        "review_count": 6720,
        "delivery_estimate": "2-3 days (Assured)",
        "seller": "SuperComNet (Flipkart Assured)",
        "in_stock": true,
        "image_url": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=900&auto=format&fit=crop&q=80",
        "product_url": "https://www.flipkart.com/nike-air-max-270-running-shoes-men/p/itmff417643b1fe4",
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
        "platform": "myntra",
        "platform_product_id": "MYN-NIKE-AM270",
        "price": 10995,
        "original_price": 13995,
        "discount_percent": 21,
        "rating": 4.6,
        "review_count": 4890,
        "delivery_estimate": "1-2 days (Express)",
        "seller": "Nike Official Store",
        "in_stock": true,
        "image_url": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=900&auto=format&fit=crop&q=80",
        "product_url": "https://www.myntra.com/casual-shoes/nike/nike-men-black-air-max-270-sneakers/7543209/buy",
        "reviews": [
          {
            "author": "Tanvi S",
            "rating": 5,
            "text": "Original product certified with official brand warranty.",
            "date": "2024-10-02"
          }
        ]
      }
    ],
    "price": 11495,
    "original_price": 13995,
    "originalPrice": 13995,
    "discount_percent": 18,
    "discountPercent": 18,
    "product_url": "https://www.amazon.in/s?k=Nike%20Air%20Max%20270%20Mens%20Running%20Shoes&tag=algoforge-21",
    "url": "https://www.amazon.in/s?k=Nike%20Air%20Max%20270%20Mens%20Running%20Shoes&tag=algoforge-21"
  },
  {
    "group_id": "adidas-ultraboost-light",
    "product_name": "Adidas Ultraboost Light Men's Road Running Shoes",
    "category": "footwear",
    "brand": "Adidas",
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
    "specs": {
      "midsole": "Light BOOST cushioning (30% lighter)",
      "outsole": "Continental Better Rubber grip"
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
    "platforms": [
      {
        "platform": "amazon",
        "platform_product_id": "B0BSLH9KV9",
        "price": 12999,
        "original_price": 18999,
        "discount_percent": 32,
        "rating": 4.6,
        "review_count": 4210,
        "delivery_estimate": "Tomorrow (Prime)",
        "seller": "Appario Retail (Amazon Prime)",
        "in_stock": true,
        "image_url": "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=900&auto=format&fit=crop&q=80",
        "product_url": "https://www.amazon.in/dp/B0BSLH9KV9",
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
        "platform": "flipkart",
        "platform_product_id": "FK-ADIDAS-UB-LIGHT",
        "price": 13499,
        "original_price": 18999,
        "discount_percent": 29,
        "rating": 4.5,
        "review_count": 2890,
        "delivery_estimate": "2-3 days (Assured)",
        "seller": "SuperComNet (Flipkart Assured)",
        "in_stock": true,
        "image_url": "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=900&auto=format&fit=crop&q=80",
        "product_url": "https://www.flipkart.com/adidas-ultraboost-light-m-running-shoes-men/p/itmff417643b1fe4",
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
        "platform": "myntra",
        "platform_product_id": "MYN-ADIDAS-UB-LIGHT",
        "price": 12499,
        "original_price": 18999,
        "discount_percent": 34,
        "rating": 4.7,
        "review_count": 3120,
        "delivery_estimate": "1-2 days (Express)",
        "seller": "Adidas Official Store",
        "in_stock": true,
        "image_url": "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=900&auto=format&fit=crop&q=80",
        "product_url": "https://www.myntra.com/sports-shoes/adidas/adidas-men-black-ultraboost-light-running-shoes/22415678/buy",
        "reviews": [
          {
            "author": "Tanvi S",
            "rating": 5,
            "text": "Original product certified with official brand warranty.",
            "date": "2024-10-02"
          }
        ]
      }
    ],
    "price": 14999,
    "original_price": 18999,
    "originalPrice": 18999,
    "discount_percent": 21,
    "discountPercent": 21,
    "product_url": "https://www.amazon.in/s?k=Adidas%20Ultraboost%20Light%20Running%20Shoes&tag=algoforge-21",
    "url": "https://www.amazon.in/s?k=Adidas%20Ultraboost%20Light%20Running%20Shoes&tag=algoforge-21"
  },
  {
    "group_id": "woodland-brown-boots",
    "product_name": "Woodland Men's Camel Brown Leather Outdoor Trekking Boots",
    "category": "footwear",
    "brand": "Woodland",
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
    "specs": {
      "upper_material": "100% Genuine Nubuck Leather",
      "sole": "Heavy-duty grooved rubber lug sole"
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
    "platforms": [
      {
        "platform": "amazon",
        "platform_product_id": "B00K52079M",
        "price": 3499,
        "original_price": 5495,
        "discount_percent": 36,
        "rating": 4.3,
        "review_count": 14320,
        "delivery_estimate": "Tomorrow (Prime)",
        "seller": "Appario Retail (Amazon Prime)",
        "in_stock": true,
        "image_url": "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?w=900&auto=format&fit=crop&q=80",
        "product_url": "https://www.amazon.in/dp/B00K52079M",
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
        "platform": "flipkart",
        "platform_product_id": "FK-WOODLAND-BOOTS",
        "price": 3799,
        "original_price": 5495,
        "discount_percent": 31,
        "rating": 4.2,
        "review_count": 9200,
        "delivery_estimate": "2-3 days (Assured)",
        "seller": "SuperComNet (Flipkart Assured)",
        "in_stock": true,
        "image_url": "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?w=900&auto=format&fit=crop&q=80",
        "product_url": "https://www.flipkart.com/woodland-outdoors-leather-trekking-boots-men/p/itmfc2b3fefb4890",
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
        "platform": "myntra",
        "platform_product_id": "MYN-WOODLAND-BOOTS",
        "price": 3649,
        "original_price": 5495,
        "discount_percent": 34,
        "rating": 4.4,
        "review_count": 5400,
        "delivery_estimate": "1-2 days (Express)",
        "seller": "Woodland Official Store",
        "in_stock": true,
        "image_url": "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?w=900&auto=format&fit=crop&q=80",
        "product_url": "https://www.myntra.com/casual-shoes/woodland/woodland-men-camel-brown-leather-trekking-boots/1839201/buy",
        "reviews": [
          {
            "author": "Tanvi S",
            "rating": 5,
            "text": "Original product certified with official brand warranty.",
            "date": "2024-10-02"
          }
        ]
      }
    ],
    "price": 3995,
    "original_price": 5495,
    "originalPrice": 5495,
    "discount_percent": 27,
    "discountPercent": 27,
    "product_url": "https://www.amazon.in/s?k=Woodland%20Mens%20Camel%20Brown%20Leather%20Outdoor%20Trekking%20Boots&tag=algoforge-21",
    "url": "https://www.amazon.in/s?k=Woodland%20Mens%20Camel%20Brown%20Leather%20Outdoor%20Trekking%20Boots&tag=algoforge-21"
  },
  {
    "group_id": "crocs-classic-clogs",
    "product_name": "Crocs Classic Unisex Lightweight Waterproof Clogs",
    "category": "footwear",
    "brand": "Crocs",
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
    "specs": {
      "material": "Proprietary Croslite closed-cell resin",
      "ventilation": "Port holes shed water & debris"
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
    "platforms": [
      {
        "platform": "amazon",
        "platform_product_id": "B0014C5Q7E",
        "price": 2295,
        "original_price": 2995,
        "discount_percent": 23,
        "rating": 4.6,
        "review_count": 31200,
        "delivery_estimate": "Tomorrow (Prime)",
        "seller": "Appario Retail (Amazon Prime)",
        "in_stock": true,
        "image_url": "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=900&auto=format&fit=crop&q=80",
        "product_url": "https://www.amazon.in/dp/B0014C5Q7E",
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
        "platform": "flipkart",
        "platform_product_id": "FK-CROCS-CLOGS",
        "price": 2395,
        "original_price": 2995,
        "discount_percent": 20,
        "rating": 4.5,
        "review_count": 18400,
        "delivery_estimate": "2-3 days (Assured)",
        "seller": "SuperComNet (Flipkart Assured)",
        "in_stock": true,
        "image_url": "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=900&auto=format&fit=crop&q=80",
        "product_url": "https://www.flipkart.com/crocs-classic-clogs/p/itmff417643b1fe4",
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
        "platform": "myntra",
        "platform_product_id": "MYN-CROCS-CLOGS",
        "price": 2195,
        "original_price": 2995,
        "discount_percent": 27,
        "rating": 4.6,
        "review_count": 9800,
        "delivery_estimate": "1-2 days (Express)",
        "seller": "Crocs Official Store",
        "in_stock": true,
        "image_url": "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=900&auto=format&fit=crop&q=80",
        "product_url": "https://www.myntra.com/sandals/crocs/crocs-unisex-navy-blue-solid-classic-clogs/10342918/buy",
        "reviews": [
          {
            "author": "Tanvi S",
            "rating": 5,
            "text": "Original product certified with official brand warranty.",
            "date": "2024-10-02"
          }
        ]
      }
    ],
    "price": 2495,
    "original_price": 2995,
    "originalPrice": 2995,
    "discount_percent": 17,
    "discountPercent": 17,
    "product_url": "https://www.amazon.in/s?k=Crocs%20Unisex%20Adult%20Classic%20Clogs&tag=algoforge-21",
    "url": "https://www.amazon.in/s?k=Crocs%20Unisex%20Adult%20Classic%20Clogs&tag=algoforge-21"
  },
  {
    "group_id": "levis-511-slim-fit-jeans",
    "product_name": "Levi's 511 Slim Fit Stretch Denim Jeans (Medium Indigo)",
    "category": "fashion",
    "brand": "Levi's",
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
    "specs": {
      "fit": "Slim from hip to ankle with modern taper",
      "fabric": "99% Cotton, 1% Elastane with Levi's Flex"
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
    "platforms": [
      {
        "platform": "amazon",
        "platform_product_id": "B079D9F8F8",
        "price": 2499,
        "original_price": 3999,
        "discount_percent": 38,
        "rating": 4.4,
        "review_count": 18920,
        "delivery_estimate": "Tomorrow (Prime)",
        "seller": "Appario Retail (Amazon Prime)",
        "in_stock": true,
        "image_url": "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=900&auto=format&fit=crop&q=80",
        "product_url": "https://www.amazon.in/dp/B079D9F8F8",
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
        "platform": "flipkart",
        "platform_product_id": "FK-LEVIS-511",
        "price": 2599,
        "original_price": 3999,
        "discount_percent": 35,
        "rating": 4.3,
        "review_count": 12400,
        "delivery_estimate": "2-3 days (Assured)",
        "seller": "SuperComNet (Flipkart Assured)",
        "in_stock": true,
        "image_url": "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=900&auto=format&fit=crop&q=80",
        "product_url": "https://www.flipkart.com/levi-s-511-slim-men-blue-jeans/p/itm12938475839201",
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
        "platform": "myntra",
        "platform_product_id": "MYN-LEVIS-511",
        "price": 2399,
        "original_price": 3999,
        "discount_percent": 40,
        "rating": 4.5,
        "review_count": 8700,
        "delivery_estimate": "1-2 days (Express)",
        "seller": "Levi's Official Store",
        "in_stock": true,
        "image_url": "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=900&auto=format&fit=crop&q=80",
        "product_url": "https://www.myntra.com/jeans/levis/levis-men-blue-511-slim-fit-stretchable-jeans/11245890/buy",
        "reviews": [
          {
            "author": "Tanvi S",
            "rating": 5,
            "text": "Original product certified with official brand warranty.",
            "date": "2024-10-02"
          }
        ]
      }
    ],
    "price": 2499,
    "original_price": 3999,
    "originalPrice": 3999,
    "discount_percent": 38,
    "discountPercent": 38,
    "product_url": "https://www.amazon.in/s?k=Levis%20511%20Slim%20Fit%20Stretch%20Denim%20Jeans&tag=algoforge-21",
    "url": "https://www.amazon.in/s?k=Levis%20511%20Slim%20Fit%20Stretch%20Denim%20Jeans&tag=algoforge-21"
  },
  {
    "group_id": "tommy-hilfiger-pique-polo",
    "product_name": "Tommy Hilfiger Classic Pique Cotton Slim Fit Polo Shirt",
    "category": "fashion",
    "brand": "Tommy Hilfiger",
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
    "specs": {
      "material": "100% Organic Pique Cotton Knit",
      "collar": "Rib-knit collar with 2-button placket"
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
    "platforms": [
      {
        "platform": "amazon",
        "platform_product_id": "B08NFZ5K8H",
        "price": 2999,
        "original_price": 4999,
        "discount_percent": 40,
        "rating": 4.6,
        "review_count": 6200,
        "delivery_estimate": "Tomorrow (Prime)",
        "seller": "Appario Retail (Amazon Prime)",
        "in_stock": true,
        "image_url": "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?w=900&auto=format&fit=crop&q=80",
        "product_url": "https://www.amazon.in/dp/B08NFZ5K8H",
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
        "platform": "flipkart",
        "platform_product_id": "FK-TOMMY-POLO",
        "price": 3199,
        "original_price": 4999,
        "discount_percent": 36,
        "rating": 4.4,
        "review_count": 4100,
        "delivery_estimate": "2-3 days (Assured)",
        "seller": "SuperComNet (Flipkart Assured)",
        "in_stock": true,
        "image_url": "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?w=900&auto=format&fit=crop&q=80",
        "product_url": "https://www.flipkart.com/tommy-hilfiger-solid-men-polo-neck-t-shirt/p/itm19283746501928",
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
        "platform": "myntra",
        "platform_product_id": "MYN-TOMMY-POLO",
        "price": 2899,
        "original_price": 4999,
        "discount_percent": 42,
        "rating": 4.6,
        "review_count": 5900,
        "delivery_estimate": "1-2 days (Express)",
        "seller": "Tommy Hilfiger Official Store",
        "in_stock": true,
        "image_url": "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?w=900&auto=format&fit=crop&q=80",
        "product_url": "https://www.myntra.com/tshirts/tommy-hilfiger/tommy-hilfiger-men-classic-pique-cotton-polo-t-shirt/13490218/buy",
        "reviews": [
          {
            "author": "Tanvi S",
            "rating": 5,
            "text": "Original product certified with official brand warranty.",
            "date": "2024-10-02"
          }
        ]
      }
    ],
    "price": 2999,
    "original_price": 3999,
    "originalPrice": 3999,
    "discount_percent": 25,
    "discountPercent": 25,
    "product_url": "https://www.amazon.in/s?k=Tommy%20Hilfiger%20Mens%20Classic%20Pique%20Cotton%20Polo%20Shirt&tag=algoforge-21",
    "url": "https://www.amazon.in/s?k=Tommy%20Hilfiger%20Mens%20Classic%20Pique%20Cotton%20Polo%20Shirt&tag=algoforge-21"
  },
  {
    "group_id": "rayban-aviator-classic",
    "product_name": "Ray-Ban Aviator Classic Polarized Sunglasses (RB3025, 58mm)",
    "category": "fashion",
    "brand": "Ray-Ban",
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
    "specs": {
      "frame": "Lightweight Gold Arista Metal Frame",
      "lens": "G-15 Polarized Green Crystal Glass"
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
    "platforms": [
      {
        "platform": "amazon",
        "platform_product_id": "B00080FG6W",
        "price": 8490,
        "original_price": 10590,
        "discount_percent": 20,
        "rating": 4.7,
        "review_count": 5400,
        "delivery_estimate": "Tomorrow (Prime)",
        "seller": "Appario Retail (Amazon Prime)",
        "in_stock": true,
        "image_url": "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=900&auto=format&fit=crop&q=80",
        "product_url": "https://www.amazon.in/dp/B00080FG6W",
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
        "platform": "flipkart",
        "platform_product_id": "FK-RAYBAN-AVIATOR",
        "price": 8790,
        "original_price": 10590,
        "discount_percent": 17,
        "rating": 4.6,
        "review_count": 3200,
        "delivery_estimate": "2-3 days (Assured)",
        "seller": "SuperComNet (Flipkart Assured)",
        "in_stock": true,
        "image_url": "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=900&auto=format&fit=crop&q=80",
        "product_url": "https://www.flipkart.com/ray-ban-aviator-sunglasses/p/itmff417643b1fe4",
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
        "platform": "myntra",
        "platform_product_id": "MYN-RAYBAN-AVIATOR",
        "price": 8290,
        "original_price": 10590,
        "discount_percent": 22,
        "rating": 4.7,
        "review_count": 2900,
        "delivery_estimate": "1-2 days (Express)",
        "seller": "Ray-Ban Official Store",
        "in_stock": true,
        "image_url": "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=900&auto=format&fit=crop&q=80",
        "product_url": "https://www.myntra.com/sunglasses/ray-ban/ray-ban-unisex-green-lens-gold-toned-aviator-sunglasses-rb3025/1109342/buy",
        "reviews": [
          {
            "author": "Tanvi S",
            "rating": 5,
            "text": "Original product certified with official brand warranty.",
            "date": "2024-10-02"
          }
        ]
      }
    ],
    "price": 8490,
    "original_price": 9990,
    "originalPrice": 9990,
    "discount_percent": 15,
    "discountPercent": 15,
    "product_url": "https://www.amazon.in/s?k=Ray-Ban%20Aviator%20Classic%20Polarized%20Sunglasses%20RB3025&tag=algoforge-21",
    "url": "https://www.amazon.in/s?k=Ray-Ban%20Aviator%20Classic%20Polarized%20Sunglasses%20RB3025&tag=algoforge-21"
  },
  {
    "group_id": "atomberg-renesa-bldc-fan",
    "product_name": "Atomberg Renesa 1200mm Smart BLDC Ceiling Fan with Remote",
    "category": "home",
    "brand": "Atomberg",
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
    "specs": {
      "motor": "28W Energy Efficient BLDC Motor (65% electricity saving)",
      "airflow": "235 CMM high air delivery"
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
    "platforms": [
      {
        "platform": "amazon",
        "platform_product_id": "B07N7K4D4J",
        "price": 3699,
        "original_price": 4990,
        "discount_percent": 26,
        "rating": 4.6,
        "review_count": 42100,
        "delivery_estimate": "Tomorrow (Prime)",
        "seller": "Appario Retail (Amazon Prime)",
        "in_stock": true,
        "image_url": "https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b?w=900&auto=format&fit=crop&q=80",
        "product_url": "https://www.amazon.in/dp/B07N7K4D4J",
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
        "platform": "flipkart",
        "platform_product_id": "FK-ATOMBERG-RENESA",
        "price": 3799,
        "original_price": 4990,
        "discount_percent": 24,
        "rating": 4.5,
        "review_count": 29400,
        "delivery_estimate": "2-3 days (Assured)",
        "seller": "SuperComNet (Flipkart Assured)",
        "in_stock": true,
        "image_url": "https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b?w=900&auto=format&fit=crop&q=80",
        "product_url": "https://www.flipkart.com/atomberg-renesa-1200-mm-bldc-motor-smart-remote-3-blade-ceiling-fan/p/itm12938475839201",
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
        "platform": "myntra",
        "platform_product_id": "MYN-ATOMBERG-RENESA",
        "price": 3899,
        "original_price": 4990,
        "discount_percent": 22,
        "rating": 4.6,
        "review_count": 4200,
        "delivery_estimate": "1-2 days (Express)",
        "seller": "Atomberg Official Store",
        "in_stock": true,
        "image_url": "https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b?w=900&auto=format&fit=crop&q=80",
        "product_url": "https://www.myntra.com/ceiling-fans/atomberg/atomberg-renesa-1200mm-smart-bldc-ceiling-fan/21903482/buy",
        "reviews": [
          {
            "author": "Tanvi S",
            "rating": 5,
            "text": "Original product certified with official brand warranty.",
            "date": "2024-10-02"
          }
        ]
      }
    ],
    "price": 3699,
    "original_price": 4990,
    "originalPrice": 4990,
    "discount_percent": 26,
    "discountPercent": 26,
    "product_url": "https://www.amazon.in/s?k=Atomberg%20Renesa%201200mm%20BLDC%20Smart%20Ceiling%20Fan%20with%20Remote&tag=algoforge-21",
    "url": "https://www.amazon.in/s?k=Atomberg%20Renesa%201200mm%20BLDC%20Smart%20Ceiling%20Fan%20with%20Remote&tag=algoforge-21"
  },
  {
    "group_id": "philips-digital-airfryer-xl",
    "product_name": "Philips Digital Airfryer XL (4.1 Litre, 1400W Rapid Air)",
    "category": "home",
    "brand": "Philips",
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
    "specs": {
      "capacity": "4.1 Litre Rapid Air Technology basket",
      "power": "1400W 7 preset digital touch screen"
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
    "platforms": [
      {
        "platform": "amazon",
        "platform_product_id": "B09C2BRXGQ",
        "price": 6999,
        "original_price": 10995,
        "discount_percent": 36,
        "rating": 4.6,
        "review_count": 15800,
        "delivery_estimate": "Tomorrow (Prime)",
        "seller": "Appario Retail (Amazon Prime)",
        "in_stock": true,
        "image_url": "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=900&auto=format&fit=crop&q=80",
        "product_url": "https://www.amazon.in/dp/B09C2BRXGQ",
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
        "platform": "flipkart",
        "platform_product_id": "FK-PHILIPS-AF-XL",
        "price": 7299,
        "original_price": 10995,
        "discount_percent": 34,
        "rating": 4.5,
        "review_count": 11400,
        "delivery_estimate": "2-3 days (Assured)",
        "seller": "SuperComNet (Flipkart Assured)",
        "in_stock": true,
        "image_url": "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=900&auto=format&fit=crop&q=80",
        "product_url": "https://www.flipkart.com/philips-hd9200-90-rapid-air-technology-air-fryer/p/itmff417643b1fe4",
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
        "platform": "myntra",
        "platform_product_id": "MYN-PHILIPS-AF-XL",
        "price": 7499,
        "original_price": 10995,
        "discount_percent": 32,
        "rating": 4.6,
        "review_count": 1800,
        "delivery_estimate": "1-2 days (Express)",
        "seller": "Philips Official Store",
        "in_stock": true,
        "image_url": "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=900&auto=format&fit=crop&q=80",
        "product_url": "https://www.myntra.com/air-fryers/philips/philips-digital-airfryer-xl-41l-rapid-air-technology/20491823/buy",
        "reviews": [
          {
            "author": "Tanvi S",
            "rating": 5,
            "text": "Original product certified with official brand warranty.",
            "date": "2024-10-02"
          }
        ]
      }
    ],
    "price": 7999,
    "original_price": 12995,
    "originalPrice": 12995,
    "discount_percent": 38,
    "discountPercent": 38,
    "product_url": "https://www.amazon.in/s?k=Philips%20Digital%20Air%20Fryer%20XL%204.1L%20Capacity&tag=algoforge-21",
    "url": "https://www.amazon.in/s?k=Philips%20Digital%20Air%20Fryer%20XL%204.1L%20Capacity&tag=algoforge-21"
  },
  {
    "group_id": "dyson-v8-absolute-vacuum",
    "product_name": "Dyson V8 Absolute Cordless Stick Vacuum Cleaner",
    "category": "home",
    "brand": "Dyson",
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
    "specs": {
      "motor": "Dyson Digital Motor V8 spinning at 110,000 RPM",
      "suction": "115 AW powerful fade-free suction"
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
    "platforms": [
      {
        "platform": "amazon",
        "platform_product_id": "B078N29S7C",
        "price": 29900,
        "original_price": 39900,
        "discount_percent": 25,
        "rating": 4.7,
        "review_count": 6890,
        "delivery_estimate": "Tomorrow (Prime)",
        "seller": "Appario Retail (Amazon Prime)",
        "in_stock": true,
        "image_url": "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=900&auto=format&fit=crop&q=80",
        "product_url": "https://www.amazon.in/dp/B078N29S7C",
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
        "platform": "flipkart",
        "platform_product_id": "FK-DYSON-V8",
        "price": 30900,
        "original_price": 39900,
        "discount_percent": 23,
        "rating": 4.6,
        "review_count": 4100,
        "delivery_estimate": "2-3 days (Assured)",
        "seller": "SuperComNet (Flipkart Assured)",
        "in_stock": true,
        "image_url": "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=900&auto=format&fit=crop&q=80",
        "product_url": "https://www.flipkart.com/dyson-v8-absolute-cordless-vacuum-cleaner/p/itm3d25ceea2fc11",
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
        "platform": "myntra",
        "platform_product_id": "MYN-DYSON-V8",
        "price": 31900,
        "original_price": 39900,
        "discount_percent": 20,
        "rating": 4.7,
        "review_count": 750,
        "delivery_estimate": "1-2 days (Express)",
        "seller": "Dyson Official Store",
        "in_stock": true,
        "image_url": "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=900&auto=format&fit=crop&q=80",
        "product_url": "https://www.myntra.com/vacuum-cleaners/dyson/dyson-v8-absolute-cordless-stick-vacuum-cleaner/19034812/buy",
        "reviews": [
          {
            "author": "Tanvi S",
            "rating": 5,
            "text": "Original product certified with official brand warranty.",
            "date": "2024-10-02"
          }
        ]
      }
    ],
    "price": 32900,
    "original_price": 43900,
    "originalPrice": 43900,
    "discount_percent": 25,
    "discountPercent": 25,
    "product_url": "https://www.amazon.in/s?k=Dyson%20V8%20Absolute%20Cordless%20Stick%20Vacuum%20Cleaner&tag=algoforge-21",
    "url": "https://www.amazon.in/s?k=Dyson%20V8%20Absolute%20Cordless%20Stick%20Vacuum%20Cleaner&tag=algoforge-21"
  }
];

export const searchMockProducts = ({ query = "", category = "", minPrice = 0, maxPrice = 10000000, platforms = [], sortBy = "relevance" }) => {
  let filtered = [...mockProducts];
  if (category && category !== "all") {
    filtered = filtered.filter((p) => p.category?.toLowerCase() === category.toLowerCase());
  }
  if (query && query.trim()) {
    const q = query.toLowerCase().trim();
    filtered = filtered.filter((p) =>
      p.title?.toLowerCase().includes(q) ||
      p.name?.toLowerCase().includes(q) ||
      p.brand?.toLowerCase().includes(q) ||
      p.category?.toLowerCase().includes(q)
    );
  }
  if (minPrice > 0) filtered = filtered.filter((p) => (p.price || 0) >= minPrice);
  if (maxPrice < 10000000) filtered = filtered.filter((p) => (p.price || 0) <= maxPrice);
  if (platforms && platforms.length > 0) {
    filtered = filtered.filter((p) => platforms.map((x) => x.toLowerCase()).includes(p.platform?.toLowerCase()));
  }
  if (sortBy === "price_asc") filtered.sort((a, b) => a.price - b.price);
  else if (sortBy === "price_desc") filtered.sort((a, b) => b.price - a.price);
  else if (sortBy === "rating") filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
  else if (sortBy === "discount") filtered.sort((a, b) => (b.discount_percent || 0) - (a.discount_percent || 0));
  else if (sortBy === "best_value" || sortBy === "best_overall") filtered.sort((a, b) => (b.best_overall_score || 0) - (a.best_overall_score || 0));

  return { total: filtered.length, results: filtered };
};

export const getAlternatives = (productId) => {
  const cleanId = productId?.replace(/-amazon$/, "").replace(/-flipkart$/, "").replace(/-myntra$/, "");
  const product = mockProducts.find((p) => p.id === productId || p.product_id === productId || p.groupId === cleanId) || mockProducts[0];
  const sameCategory = mockProducts.filter((p) => p.category === product.category && (p.groupId || p.group_id) !== (product.groupId || product.group_id));
  const uniqueCategory = sameCategory.filter((v, i, a) => a.findIndex((t) => (t.groupId || t.group_id) === (v.groupId || v.group_id)) === i);
  const cheaper = uniqueCategory.filter((p) => p.price < product.price).sort((a, b) => a.price - b.price);
  const similar = uniqueCategory.filter((p) => Math.abs(p.price - product.price) / product.price <= 0.25);
  const premium = uniqueCategory.filter((p) => p.price > product.price).sort((a, b) => a.price - b.price);
  return {
    cheaper: cheaper.slice(0, 2),
    similar: similar.slice(0, 2),
    premium: premium.slice(0, 2),
  };
};

export const budgetExplorer = (productId, extraBudget) => {
  const cleanId = productId?.replace(/-amazon$/, "").replace(/-flipkart$/, "").replace(/-myntra$/, "");
  const product = mockProducts.find((p) => p.id === productId || p.product_id === productId || p.groupId === cleanId) || mockProducts[0];
  const maxPrice = product.price + Number(extraBudget);
  const unlocked = mockProducts
    .filter((p) => (p.groupId || p.group_id) !== (product.groupId || product.group_id) && p.category === product.category && p.price > product.price && p.price <= maxPrice)
    .filter((v, i, a) => a.findIndex((t) => (t.groupId || t.group_id) === (v.groupId || v.group_id)) === i);
  return { currentProduct: product, unlockedProducts: unlocked };
};
