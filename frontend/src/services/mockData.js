// ─────────────────────────────────────────────────────────────────────────────
// MOCK PRODUCT CATALOG — AI Personal Shopping Assistant
// 33 Products across 4 Categories with Multiple Verified Neat High-Res Images
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
      return "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop&q=80";
    default:
      return "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80";
  }
};

const generateId = (group, platform) => `${group}-${platform}`;

export const mockGroups = [
  {
    "groupId": "sony-wh1000xm5",
    "name": "Sony WH-1000XM5 Wireless Noise Cancelling Headphones",
    "category": "electronics",
    "subcategory": "Over-ear",
    "brand": "Sony",
    "imageUrl": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80",
    "images": [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&auto=format&fit=crop&q=80"
    ],
    "specs": {
      "type": "Over-ear",
      "battery_life": "30 hours",
      "weight": "250g",
      "connectivity": "Bluetooth 5.2",
      "noise_cancellation": "Industry-leading ANC with 8 microphones",
      "multipoint_connection": true
    },
    "aiData": {
      "sentiment": "green",
      "sentimentScore": 92,
      "sentimentPros": [
        "Verified top rated performance in electronics",
        "High build quality and user satisfaction",
        "Multi-platform competitive pricing available"
      ],
      "sentimentCons": [
        "High demand with fluctuating seller pricing",
        "Stock sells out fast during sale events"
      ],
      "reviewSummary": "Highly recommended electronics choice by Sony with 4.6★ average across Amazon, Flipkart, and Myntra.",
      "whyBuy": "Top value in electronics with up to 17% discount and verified platform fulfillment.",
      "bestOverallScore": 80,
      "isBestOverall": false
    },
    "platforms": {
      "amazon": {
        "price": 24990,
        "originalPrice": 29990,
        "discountPercent": 17,
        "rating": 4.5,
        "reviewCount": 12847,
        "deliveryEstimate": "2-3 days",
        "seller": "Amazon Fulfilled",
        "inStock": true,
        "productUrl": "https://www.amazon.in/dp/B09XS7JWHH",
        "reviews": [
          {
            "author": "Rahul K",
            "rating": 5,
            "text": "Best noise cancellation headphones. Sound quality is crystal clear.",
            "date": "2024-10-15"
          },
          {
            "author": "Priya M",
            "rating": 4,
            "text": "Superb ANC and call quality. Slightly bulky carrying case.",
            "date": "2024-09-22"
          }
        ]
      },
      "flipkart": {
        "price": 25499,
        "originalPrice": 29990,
        "discountPercent": 15,
        "rating": 4.4,
        "reviewCount": 8230,
        "deliveryEstimate": "3-4 days",
        "seller": "SuperComNet (Flipkart Assured)",
        "inStock": true,
        "productUrl": "https://www.flipkart.com/sony-wh-1000xm5",
        "reviews": [
          {
            "author": "Karan B",
            "rating": 5,
            "text": "Awesome sound and very comfortable for long flights.",
            "date": "2024-11-12"
          }
        ]
      },
      "myntra": {
        "price": 26990,
        "originalPrice": 29990,
        "discountPercent": 10,
        "rating": 4.6,
        "reviewCount": 1120,
        "deliveryEstimate": "2-4 days",
        "seller": "Myntra Premium Tech",
        "inStock": true,
        "productUrl": "https://www.myntra.com/headphones/sony-xm5",
        "reviews": [
          {
            "author": "Tanvi S",
            "rating": 5,
            "text": "Fast delivery from Myntra, pristine packaging.",
            "date": "2024-10-02"
          }
        ]
      }
    }
  },
  {
    "groupId": "apple-airpods-pro-2",
    "name": "Apple AirPods Pro (2nd Generation) with USB-C MagSafe Case",
    "category": "electronics",
    "subcategory": "In-ear TWS",
    "brand": "Apple",
    "imageUrl": "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=800&auto=format&fit=crop&q=80",
    "images": [
      "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?w=800&auto=format&fit=crop&q=80"
    ],
    "specs": {
      "type": "In-ear TWS",
      "battery_life": "6h (30h with case)",
      "chip": "Apple H2",
      "noise_cancellation": "Active Noise Cancellation + Adaptive Audio",
      "water_resistance": "IP54 dust, sweat, and water resistant"
    },
    "aiData": {
      "sentiment": "green",
      "sentimentScore": 94,
      "sentimentPros": [
        "Verified top rated performance in electronics",
        "High build quality and user satisfaction",
        "Multi-platform competitive pricing available"
      ],
      "sentimentCons": [
        "High demand with fluctuating seller pricing",
        "Stock sells out fast during sale events"
      ],
      "reviewSummary": "Highly recommended electronics choice by Apple with 4.7★ average across Amazon, Flipkart, and Myntra.",
      "whyBuy": "Top value in electronics with up to 20% discount and verified platform fulfillment.",
      "bestOverallScore": 83,
      "isBestOverall": true
    },
    "platforms": {
      "amazon": {
        "price": 19999,
        "originalPrice": 24900,
        "discountPercent": 20,
        "rating": 4.7,
        "reviewCount": 24190,
        "deliveryEstimate": "1-2 days",
        "seller": "Appario Retail (Amazon Fulfilled)",
        "inStock": true,
        "productUrl": "https://www.amazon.in/dp/B0CHWRXH8B",
        "reviews": [
          {
            "author": "Arjun V",
            "rating": 5,
            "text": "Transparency mode feels like magic. Spatial audio is phenomenal.",
            "date": "2024-11-20"
          }
        ]
      },
      "flipkart": {
        "price": 20490,
        "originalPrice": 24900,
        "discountPercent": 18,
        "rating": 4.6,
        "reviewCount": 14200,
        "deliveryEstimate": "2-3 days",
        "seller": "IndiFlashMart (Flipkart Assured)",
        "inStock": true,
        "productUrl": "https://www.flipkart.com/apple-airpods-pro-2",
        "reviews": [
          {
            "author": "Meera K",
            "rating": 5,
            "text": "Seamless switching between iPhone and MacBook.",
            "date": "2024-10-18"
          }
        ]
      },
      "myntra": {
        "price": 21900,
        "originalPrice": 24900,
        "discountPercent": 12,
        "rating": 4.7,
        "reviewCount": 2150,
        "deliveryEstimate": "1-3 days",
        "seller": "Apple Authorised Store",
        "inStock": true,
        "productUrl": "https://www.myntra.com/apple-airpods-pro-2",
        "reviews": [
          {
            "author": "Rohan D",
            "rating": 5,
            "text": "Authentic product with full Apple warranty.",
            "date": "2024-12-01"
          }
        ]
      }
    }
  },
  {
    "groupId": "boat-rockerz-550",
    "name": "boAt Rockerz 550 Bluetooth Wireless Over-Ear Headphones",
    "category": "electronics",
    "subcategory": "Over-ear",
    "brand": "boAt",
    "imageUrl": "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&auto=format&fit=crop&q=80",
    "images": [
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&auto=format&fit=crop&q=80"
    ],
    "specs": {
      "type": "Over-ear",
      "battery_life": "20 hours",
      "driver_size": "50mm dynamic drivers",
      "connectivity": "Bluetooth 5.0 + AUX"
    },
    "aiData": {
      "sentiment": "yellow",
      "sentimentScore": 82,
      "sentimentPros": [
        "Verified top rated performance in electronics",
        "High build quality and user satisfaction",
        "Multi-platform competitive pricing available"
      ],
      "sentimentCons": [
        "High demand with fluctuating seller pricing",
        "Stock sells out fast during sale events"
      ],
      "reviewSummary": "Highly recommended electronics choice by boAt with 4.1★ average across Amazon, Flipkart, and Myntra.",
      "whyBuy": "Top value in electronics with up to 76% discount and verified platform fulfillment.",
      "bestOverallScore": 96,
      "isBestOverall": false
    },
    "platforms": {
      "amazon": {
        "price": 1299,
        "originalPrice": 4999,
        "discountPercent": 74,
        "rating": 4.1,
        "reviewCount": 67320,
        "deliveryEstimate": "1 day",
        "seller": "Imagine Marketing (Amazon Fulfilled)",
        "inStock": true,
        "productUrl": "https://www.amazon.in/dp/B0863TXGM3",
        "reviews": [
          {
            "author": "Deepak S",
            "rating": 4,
            "text": "Great bass for EDM. Excellent value for ₹1299.",
            "date": "2024-11-05"
          }
        ]
      },
      "flipkart": {
        "price": 1199,
        "originalPrice": 4999,
        "discountPercent": 76,
        "rating": 4,
        "reviewCount": 51200,
        "deliveryEstimate": "2 days",
        "seller": "RetailNet (Flipkart Assured)",
        "inStock": true,
        "productUrl": "https://www.flipkart.com/boat-rockerz-550",
        "reviews": [
          {
            "author": "Akash R",
            "rating": 4,
            "text": "Battery backup is solid around 18-20 hours.",
            "date": "2024-10-14"
          }
        ]
      },
      "myntra": {
        "price": 1399,
        "originalPrice": 4999,
        "discountPercent": 72,
        "rating": 4.1,
        "reviewCount": 8900,
        "deliveryEstimate": "2-3 days",
        "seller": "boAt Official Store",
        "inStock": true,
        "productUrl": "https://www.myntra.com/boat-rockerz-550",
        "reviews": [
          {
            "author": "Sunil N",
            "rating": 4,
            "text": "Good cushioning around the ears.",
            "date": "2024-09-30"
          }
        ]
      }
    }
  },
  {
    "groupId": "jbl-tune-770nc",
    "name": "JBL Tune 770NC Wireless Over-Ear ANC Headphones",
    "category": "electronics",
    "subcategory": "Over-ear",
    "brand": "JBL",
    "imageUrl": "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&auto=format&fit=crop&q=80",
    "images": [
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80"
    ],
    "specs": {
      "type": "Over-ear",
      "battery_life": "70 hours (44h with ANC)",
      "connectivity": "Bluetooth 5.3",
      "noise_cancellation": "Adaptive ANC with Smart Ambient"
    },
    "aiData": {
      "sentiment": "green",
      "sentimentScore": 86,
      "sentimentPros": [
        "Verified top rated performance in electronics",
        "High build quality and user satisfaction",
        "Multi-platform competitive pricing available"
      ],
      "sentimentCons": [
        "High demand with fluctuating seller pricing",
        "Stock sells out fast during sale events"
      ],
      "reviewSummary": "Highly recommended electronics choice by JBL with 4.3★ average across Amazon, Flipkart, and Myntra.",
      "whyBuy": "Top value in electronics with up to 30% discount and verified platform fulfillment.",
      "bestOverallScore": 81,
      "isBestOverall": false
    },
    "platforms": {
      "amazon": {
        "price": 6999,
        "originalPrice": 9999,
        "discountPercent": 30,
        "rating": 4.3,
        "reviewCount": 5410,
        "deliveryEstimate": "2-3 days",
        "seller": "Appario Retail",
        "inStock": true,
        "productUrl": "https://www.amazon.in/dp/B0CB8GLTYG",
        "reviews": [
          {
            "author": "Manish P",
            "rating": 5,
            "text": "Insane 70h battery life. Balanced JBL signature sound.",
            "date": "2024-11-25"
          }
        ]
      },
      "flipkart": {
        "price": 7299,
        "originalPrice": 9999,
        "discountPercent": 27,
        "rating": 4.2,
        "reviewCount": 3200,
        "deliveryEstimate": "3-4 days",
        "seller": "HARMAN Official Store",
        "inStock": true,
        "productUrl": "https://www.flipkart.com/jbl-tune-770nc",
        "reviews": [
          {
            "author": "Ravi G",
            "rating": 4,
            "text": "Solid ANC for this price range.",
            "date": "2024-10-19"
          }
        ]
      },
      "myntra": {
        "price": 7499,
        "originalPrice": 9999,
        "discountPercent": 25,
        "rating": 4.3,
        "reviewCount": 850,
        "deliveryEstimate": "2-3 days",
        "seller": "Myntra Electronics",
        "inStock": true,
        "productUrl": "https://www.myntra.com/jbl-tune-770nc",
        "reviews": [
          {
            "author": "Snehal D",
            "rating": 5,
            "text": "Very lightweight and punchy bass.",
            "date": "2024-11-08"
          }
        ]
      }
    }
  },
  {
    "groupId": "apple-macbook-air-m2",
    "name": "Apple MacBook Air 13.6-inch with M2 Chip (8GB Unified Memory, 256GB SSD)",
    "category": "electronics",
    "subcategory": "electronics",
    "brand": "Apple",
    "imageUrl": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&auto=format&fit=crop&q=80",
    "images": [
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=800&auto=format&fit=crop&q=80"
    ],
    "specs": {
      "processor": "Apple M2 8-core CPU / 8-core GPU",
      "display": "13.6-inch Liquid Retina Display (500 nits)",
      "battery_life": "Up to 18 hours",
      "weight": "1.24 kg"
    },
    "aiData": {
      "sentiment": "green",
      "sentimentScore": 96,
      "sentimentPros": [
        "Verified top rated performance in electronics",
        "High build quality and user satisfaction",
        "Multi-platform competitive pricing available"
      ],
      "sentimentCons": [
        "High demand with fluctuating seller pricing",
        "Stock sells out fast during sale events"
      ],
      "reviewSummary": "Highly recommended electronics choice by Apple with 4.8★ average across Amazon, Flipkart, and Myntra.",
      "whyBuy": "Top value in electronics with up to 16% discount and verified platform fulfillment.",
      "bestOverallScore": 83,
      "isBestOverall": false
    },
    "platforms": {
      "amazon": {
        "price": 84990,
        "originalPrice": 99900,
        "discountPercent": 15,
        "rating": 4.8,
        "reviewCount": 9480,
        "deliveryEstimate": "1-2 days",
        "seller": "Amazon Prime Seller",
        "inStock": true,
        "productUrl": "https://www.amazon.in/dp/B0B3C5Q8N1",
        "reviews": [
          {
            "author": "Kunal J",
            "rating": 5,
            "text": "Best laptop for developers and students. Battery is unbelievable.",
            "date": "2024-11-10"
          }
        ]
      },
      "flipkart": {
        "price": 83990,
        "originalPrice": 99900,
        "discountPercent": 16,
        "rating": 4.7,
        "reviewCount": 6720,
        "deliveryEstimate": "2-3 days",
        "seller": "SuperComNet",
        "inStock": true,
        "productUrl": "https://www.flipkart.com/apple-macbook-air-m2",
        "reviews": [
          {
            "author": "Ananya P",
            "rating": 5,
            "text": "Super sleek midnight color. Whisper quiet with no fan noise.",
            "date": "2024-10-28"
          }
        ]
      },
      "myntra": {
        "price": 87900,
        "originalPrice": 99900,
        "discountPercent": 12,
        "rating": 4.8,
        "reviewCount": 540,
        "deliveryEstimate": "3-4 days",
        "seller": "Apple Official Store",
        "inStock": true,
        "productUrl": "https://www.myntra.com/laptops/apple-macbook-air-m2",
        "reviews": [
          {
            "author": "Devendra R",
            "rating": 5,
            "text": "Received brand new sealed box with AppleCare eligibility.",
            "date": "2024-11-15"
          }
        ]
      }
    }
  },
  {
    "groupId": "samsung-galaxy-s24-ultra",
    "name": "Samsung Galaxy S24 Ultra 5G (Titanium Gray, 12GB RAM, 256GB Storage)",
    "category": "electronics",
    "subcategory": "electronics",
    "brand": "Samsung",
    "imageUrl": "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=800&auto=format&fit=crop&q=80",
    "images": [
      "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&auto=format&fit=crop&q=80"
    ],
    "specs": {
      "display": "6.8-inch Dynamic AMOLED 2X 120Hz",
      "processor": "Snapdragon 8 Gen 3 for Galaxy",
      "camera": "200MP Quad Camera with Galaxy AI",
      "battery": "5000mAh with 45W Fast Charging"
    },
    "aiData": {
      "sentiment": "green",
      "sentimentScore": 92,
      "sentimentPros": [
        "Verified top rated performance in electronics",
        "High build quality and user satisfaction",
        "Multi-platform competitive pricing available"
      ],
      "sentimentCons": [
        "High demand with fluctuating seller pricing",
        "Stock sells out fast during sale events"
      ],
      "reviewSummary": "Highly recommended electronics choice by Samsung with 4.6★ average across Amazon, Flipkart, and Myntra.",
      "whyBuy": "Top value in electronics with up to 12% discount and verified platform fulfillment.",
      "bestOverallScore": 78,
      "isBestOverall": false
    },
    "platforms": {
      "amazon": {
        "price": 119999,
        "originalPrice": 134999,
        "discountPercent": 11,
        "rating": 4.6,
        "reviewCount": 4890,
        "deliveryEstimate": "1-2 days",
        "seller": "STPL Exclusive",
        "inStock": true,
        "productUrl": "https://www.amazon.in/dp/B0CS5XNFXZ",
        "reviews": [
          {
            "author": "Sameer N",
            "rating": 5,
            "text": "Galaxy AI features and zoom photography are jaw dropping.",
            "date": "2024-11-18"
          }
        ]
      },
      "flipkart": {
        "price": 118499,
        "originalPrice": 134999,
        "discountPercent": 12,
        "rating": 4.5,
        "reviewCount": 3120,
        "deliveryEstimate": "2-3 days",
        "seller": "FSAssured Mobile Store",
        "inStock": true,
        "productUrl": "https://www.flipkart.com/samsung-galaxy-s24-ultra",
        "reviews": [
          {
            "author": "Deepak G",
            "rating": 5,
            "text": "Anti-reflective screen is the best display ever made on a smartphone.",
            "date": "2024-10-30"
          }
        ]
      },
      "myntra": {
        "price": 122999,
        "originalPrice": 134999,
        "discountPercent": 9,
        "rating": 4.6,
        "reviewCount": 320,
        "deliveryEstimate": "2-4 days",
        "seller": "Samsung Luxe Authorised",
        "inStock": true,
        "productUrl": "https://www.myntra.com/smartphones/samsung-s24-ultra",
        "reviews": [
          {
            "author": "Pradeep T",
            "rating": 4,
            "text": "Premium build, flat screen is much easier to write on with S-Pen.",
            "date": "2024-11-04"
          }
        ]
      }
    }
  },
  {
    "groupId": "oneplus-12-5g",
    "name": "OnePlus 12 5G (Silky Black, 16GB RAM, 512GB Storage)",
    "category": "electronics",
    "subcategory": "electronics",
    "brand": "OnePlus",
    "imageUrl": "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=800&auto=format&fit=crop&q=80",
    "images": [
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=800&auto=format&fit=crop&q=80"
    ],
    "specs": {
      "display": "6.82-inch 2K 120Hz ProXDR Display (4500 nits peak)",
      "processor": "Snapdragon 8 Gen 3 Mobile Platform",
      "camera": "4th Gen Hasselblad Camera System with 64MP 3X Periscope",
      "charging": "100W SUPERVOOC + 50W AIRVOOC Wireless"
    },
    "aiData": {
      "sentiment": "green",
      "sentimentScore": 92,
      "sentimentPros": [
        "Verified top rated performance in electronics",
        "High build quality and user satisfaction",
        "Multi-platform competitive pricing available"
      ],
      "sentimentCons": [
        "High demand with fluctuating seller pricing",
        "Stock sells out fast during sale events"
      ],
      "reviewSummary": "Highly recommended electronics choice by OnePlus with 4.6★ average across Amazon, Flipkart, and Myntra.",
      "whyBuy": "Top value in electronics with up to 8% discount and verified platform fulfillment.",
      "bestOverallScore": 77,
      "isBestOverall": false
    },
    "platforms": {
      "amazon": {
        "price": 64999,
        "originalPrice": 69999,
        "discountPercent": 7,
        "rating": 4.6,
        "reviewCount": 8120,
        "deliveryEstimate": "1-2 days",
        "seller": "OnePlus Official India",
        "inStock": true,
        "productUrl": "https://www.amazon.in/dp/B0CQPPY23T",
        "reviews": [
          {
            "author": "Rohit V",
            "rating": 5,
            "text": "100W fast charger charges 0 to 100% in 26 minutes. Phenomenal battery life.",
            "date": "2024-11-19"
          }
        ]
      },
      "flipkart": {
        "price": 64499,
        "originalPrice": 69999,
        "discountPercent": 8,
        "rating": 4.5,
        "reviewCount": 4200,
        "deliveryEstimate": "2-3 days",
        "seller": "FSAssured Mobiles",
        "inStock": true,
        "productUrl": "https://www.flipkart.com/oneplus-12",
        "reviews": [
          {
            "author": "Mayank S",
            "rating": 5,
            "text": "Smooth OxygenOS and the Hasselblad periscope portrait shots look like DSLR.",
            "date": "2024-10-22"
          }
        ]
      },
      "myntra": {
        "price": 66999,
        "originalPrice": 69999,
        "discountPercent": 4,
        "rating": 4.6,
        "reviewCount": 410,
        "deliveryEstimate": "3-4 days",
        "seller": "OnePlus Brand Hub",
        "inStock": true,
        "productUrl": "https://www.myntra.com/smartphones/oneplus-12",
        "reviews": [
          {
            "author": "Kiran D",
            "rating": 4,
            "text": "Top notch flagship performance.",
            "date": "2024-11-03"
          }
        ]
      }
    }
  },
  {
    "groupId": "asus-rog-zephyrus-g14",
    "name": "ASUS ROG Zephyrus G14 (2024) 3K OLED Gaming Laptop (AMD Ryzen 9, RTX 4060, 16GB/1TB)",
    "category": "electronics",
    "subcategory": "electronics",
    "brand": "ASUS",
    "imageUrl": "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=800&auto=format&fit=crop&q=80",
    "images": [
      "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=800&auto=format&fit=crop&q=80"
    ],
    "specs": {
      "processor": "AMD Ryzen 9 8945HS Processor with Ryzen AI",
      "graphics": "NVIDIA GeForce RTX 4060 8GB GDDR6 (90W TGP)",
      "display": "14-inch 3K 120Hz 0.2ms ROG Nebula OLED (100% DCI-P3)",
      "weight": "1.50 kg ultra-portable CNC aluminum chassis"
    },
    "aiData": {
      "sentiment": "green",
      "sentimentScore": 94,
      "sentimentPros": [
        "Verified top rated performance in electronics",
        "High build quality and user satisfaction",
        "Multi-platform competitive pricing available"
      ],
      "sentimentCons": [
        "High demand with fluctuating seller pricing",
        "Stock sells out fast during sale events"
      ],
      "reviewSummary": "Highly recommended electronics choice by ASUS with 4.7★ average across Amazon, Flipkart, and Myntra.",
      "whyBuy": "Top value in electronics with up to 19% discount and verified platform fulfillment.",
      "bestOverallScore": 83,
      "isBestOverall": false
    },
    "platforms": {
      "amazon": {
        "price": 154990,
        "originalPrice": 189990,
        "discountPercent": 18,
        "rating": 4.7,
        "reviewCount": 2410,
        "deliveryEstimate": "2-3 days",
        "seller": "Appario Retail",
        "inStock": true,
        "productUrl": "https://www.amazon.in/dp/B0CSG6K8L1",
        "reviews": [
          {
            "author": "Varun K",
            "rating": 5,
            "text": "The 3K OLED display is unmatched. Cyberpunk 2077 runs over 75fps with DLSS 3.5.",
            "date": "2024-11-15"
          }
        ]
      },
      "flipkart": {
        "price": 152990,
        "originalPrice": 189990,
        "discountPercent": 19,
        "rating": 4.6,
        "reviewCount": 1890,
        "deliveryEstimate": "3-4 days",
        "seller": "SuperComNet Gaming",
        "inStock": true,
        "productUrl": "https://www.flipkart.com/asus-rog-zephyrus-g14",
        "reviews": [
          {
            "author": "Aditya N",
            "rating": 5,
            "text": "CNC aluminum body feels as premium as a MacBook Pro.",
            "date": "2024-10-25"
          }
        ]
      },
      "myntra": {
        "price": 159990,
        "originalPrice": 189990,
        "discountPercent": 15,
        "rating": 4.7,
        "reviewCount": 180,
        "deliveryEstimate": "3-5 days",
        "seller": "ROG Exclusive Store",
        "inStock": true,
        "productUrl": "https://www.myntra.com/laptops/asus-rog-g14",
        "reviews": [
          {
            "author": "Kunal M",
            "rating": 5,
            "text": "Slash lighting strip on lid looks stunning.",
            "date": "2024-11-20"
          }
        ]
      }
    }
  },
  {
    "groupId": "playstation-5-slim",
    "name": "Sony PlayStation 5 Console Slim (Disc Edition, 1TB SSD)",
    "category": "electronics",
    "subcategory": "electronics",
    "brand": "Sony",
    "imageUrl": "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=800&auto=format&fit=crop&q=80",
    "images": [
      "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1622297845775-5ff3fef71d13?w=800&auto=format&fit=crop&q=80"
    ],
    "specs": {
      "storage": "1TB Ultra-High Speed NVMe SSD",
      "resolution": "4K 120Hz Gaming, Ray Tracing, HDR",
      "audio": "Tempest 3D AudioTech",
      "controller": "DualSense Wireless Controller with Haptic Feedback"
    },
    "aiData": {
      "sentiment": "green",
      "sentimentScore": 98,
      "sentimentPros": [
        "Verified top rated performance in electronics",
        "High build quality and user satisfaction",
        "Multi-platform competitive pricing available"
      ],
      "sentimentCons": [
        "High demand with fluctuating seller pricing",
        "Stock sells out fast during sale events"
      ],
      "reviewSummary": "Highly recommended electronics choice by Sony with 4.9★ average across Amazon, Flipkart, and Myntra.",
      "whyBuy": "Top value in electronics with up to 11% discount and verified platform fulfillment.",
      "bestOverallScore": 83,
      "isBestOverall": false
    },
    "platforms": {
      "amazon": {
        "price": 49990,
        "originalPrice": 54990,
        "discountPercent": 9,
        "rating": 4.9,
        "reviewCount": 8700,
        "deliveryEstimate": "2-3 days",
        "seller": "Electronics Bazaar",
        "inStock": true,
        "productUrl": "https://www.amazon.in/dp/B0CY5Q2N1W",
        "reviews": [
          {
            "author": "Nikhil K",
            "rating": 5,
            "text": "Spider-Man 2 and God of War Ragnarok look breathtaking in 4K 60fps.",
            "date": "2024-11-14"
          }
        ]
      },
      "flipkart": {
        "price": 48990,
        "originalPrice": 54990,
        "discountPercent": 11,
        "rating": 4.8,
        "reviewCount": 5400,
        "deliveryEstimate": "2-4 days",
        "seller": "RetailNet Gaming",
        "inStock": true,
        "productUrl": "https://www.flipkart.com/sony-playstation-5-slim",
        "reviews": [
          {
            "author": "Siddharth B",
            "rating": 5,
            "text": "Much lighter and compact than original launch PS5.",
            "date": "2024-10-25"
          }
        ]
      },
      "myntra": {
        "price": 51990,
        "originalPrice": 54990,
        "discountPercent": 5,
        "rating": 4.8,
        "reviewCount": 450,
        "deliveryEstimate": "3-5 days",
        "seller": "Myntra Gaming Studio",
        "inStock": true,
        "productUrl": "https://www.myntra.com/gaming/sony-playstation-5-slim",
        "reviews": [
          {
            "author": "Gaurav S",
            "rating": 5,
            "text": "Fast shipping with secure tamper-proof packaging.",
            "date": "2024-11-20"
          }
        ]
      }
    }
  },
  {
    "groupId": "apple-watch-series-9",
    "name": "Apple Watch Series 9 GPS 45mm (Midnight Aluminum Case with Sport Band)",
    "category": "electronics",
    "subcategory": "electronics",
    "brand": "Apple",
    "imageUrl": "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=800&auto=format&fit=crop&q=80",
    "images": [
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&auto=format&fit=crop&q=80"
    ],
    "specs": {
      "display": "Always-On Retina OLED (2000 nits)",
      "chip": "S9 SiP with Double Tap gesture",
      "health_sensors": "ECG, Blood Oxygen, Temperature sensing, Crash Detection",
      "battery": "18 hours all-day battery life (36h in Low Power Mode)"
    },
    "aiData": {
      "sentiment": "green",
      "sentimentScore": 94,
      "sentimentPros": [
        "Verified top rated performance in electronics",
        "High build quality and user satisfaction",
        "Multi-platform competitive pricing available"
      ],
      "sentimentCons": [
        "High demand with fluctuating seller pricing",
        "Stock sells out fast during sale events"
      ],
      "reviewSummary": "Highly recommended electronics choice by Apple with 4.7★ average across Amazon, Flipkart, and Myntra.",
      "whyBuy": "Top value in electronics with up to 15% discount and verified platform fulfillment.",
      "bestOverallScore": 81,
      "isBestOverall": false
    },
    "platforms": {
      "amazon": {
        "price": 38999,
        "originalPrice": 44900,
        "discountPercent": 13,
        "rating": 4.7,
        "reviewCount": 6120,
        "deliveryEstimate": "1-2 days",
        "seller": "Appario Retail",
        "inStock": true,
        "productUrl": "https://www.amazon.in/dp/B0CHWZ8H7H",
        "reviews": [
          {
            "author": "Vishal M",
            "rating": 5,
            "text": "Double tap gesture to take calls is super convenient while cooking or driving.",
            "date": "2024-11-09"
          }
        ]
      },
      "flipkart": {
        "price": 37990,
        "originalPrice": 44900,
        "discountPercent": 15,
        "rating": 4.6,
        "reviewCount": 4200,
        "deliveryEstimate": "2-3 days",
        "seller": "FSAssured Wearables",
        "inStock": true,
        "productUrl": "https://www.flipkart.com/apple-watch-series-9",
        "reviews": [
          {
            "author": "Kavita S",
            "rating": 5,
            "text": "Accurate fitness metrics and ECG capability give great peace of mind.",
            "date": "2024-10-15"
          }
        ]
      },
      "myntra": {
        "price": 39900,
        "originalPrice": 44900,
        "discountPercent": 11,
        "rating": 4.7,
        "reviewCount": 980,
        "deliveryEstimate": "2-4 days",
        "seller": "Apple Official Store",
        "inStock": true,
        "productUrl": "https://www.myntra.com/smartwatches/apple-watch-s9",
        "reviews": [
          {
            "author": "Varun P",
            "rating": 4,
            "text": "Battery lasts a day and a half easily on moderate use.",
            "date": "2024-11-02"
          }
        ]
      }
    }
  },
  {
    "groupId": "marshall-kilburn-2",
    "name": "Marshall Kilburn II Portable Bluetooth Speaker (Black and Brass)",
    "category": "electronics",
    "subcategory": "electronics",
    "brand": "Marshall",
    "imageUrl": "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=800&auto=format&fit=crop&q=80",
    "images": [
      "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1589003077984-894e133dabab?w=800&auto=format&fit=crop&q=80"
    ],
    "specs": {
      "battery_life": "20+ hours portable playtime",
      "connectivity": "Bluetooth 5.0 aptX",
      "water_resistance": "IPX2 water resistant design",
      "sound": "Multi-directional Blumlein Stereo sound"
    },
    "aiData": {
      "sentiment": "green",
      "sentimentScore": 92,
      "sentimentPros": [
        "Verified top rated performance in electronics",
        "High build quality and user satisfaction",
        "Multi-platform competitive pricing available"
      ],
      "sentimentCons": [
        "High demand with fluctuating seller pricing",
        "Stock sells out fast during sale events"
      ],
      "reviewSummary": "Highly recommended electronics choice by Marshall with 4.6★ average across Amazon, Flipkart, and Myntra.",
      "whyBuy": "Top value in electronics with up to 25% discount and verified platform fulfillment.",
      "bestOverallScore": 84,
      "isBestOverall": true
    },
    "platforms": {
      "amazon": {
        "price": 24999,
        "originalPrice": 31999,
        "discountPercent": 22,
        "rating": 4.6,
        "reviewCount": 3840,
        "deliveryEstimate": "2-3 days",
        "seller": "Marshall Audio Direct",
        "inStock": true,
        "productUrl": "https://www.amazon.in/dp/B07H8VTFLT",
        "reviews": [
          {
            "author": "Rishi T",
            "rating": 5,
            "text": "Vintage rock guitar amp design with thunderous bass and crystal highs.",
            "date": "2024-11-20"
          }
        ]
      },
      "flipkart": {
        "price": 23999,
        "originalPrice": 31999,
        "discountPercent": 25,
        "rating": 4.5,
        "reviewCount": 2100,
        "deliveryEstimate": "3-4 days",
        "seller": "SoundKart SuperStore",
        "inStock": true,
        "productUrl": "https://www.flipkart.com/marshall-kilburn-2",
        "reviews": [
          {
            "author": "Abhishek C",
            "rating": 5,
            "text": "Analogue knobs for bass and treble are tactile and satisfying.",
            "date": "2024-10-18"
          }
        ]
      },
      "myntra": {
        "price": 26999,
        "originalPrice": 31999,
        "discountPercent": 16,
        "rating": 4.6,
        "reviewCount": 420,
        "deliveryEstimate": "2-4 days",
        "seller": "Myntra Audio Luxe",
        "inStock": true,
        "productUrl": "https://www.myntra.com/speakers/marshall-kilburn-2",
        "reviews": [
          {
            "author": "Shruti D",
            "rating": 5,
            "text": "Stunning aesthetic on my living room bookshelf.",
            "date": "2024-11-12"
          }
        ]
      }
    }
  },
  {
    "groupId": "kindle-paperwhite-16gb",
    "name": "Amazon Kindle Paperwhite (16 GB) – 6.8-inch display with adjustable warm light",
    "category": "electronics",
    "subcategory": "electronics",
    "brand": "Amazon",
    "imageUrl": "https://images.unsplash.com/photo-1592496431122-2349e0fbc666?w=800&auto=format&fit=crop&q=80",
    "images": [
      "https://images.unsplash.com/photo-1592496431122-2349e0fbc666?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800&auto=format&fit=crop&q=80"
    ],
    "specs": {
      "display": "6.8-inch 300 ppi glare-free Paperwhite display",
      "battery_life": "Up to 10 weeks",
      "water_resistance": "IPX8 waterproof (2 meters fresh water for 60 mins)",
      "storage": "16 GB (holds thousands of books)"
    },
    "aiData": {
      "sentiment": "green",
      "sentimentScore": 96,
      "sentimentPros": [
        "Verified top rated performance in electronics",
        "High build quality and user satisfaction",
        "Multi-platform competitive pricing available"
      ],
      "sentimentCons": [
        "High demand with fluctuating seller pricing",
        "Stock sells out fast during sale events"
      ],
      "reviewSummary": "Highly recommended electronics choice by Amazon with 4.8★ average across Amazon, Flipkart, and Myntra.",
      "whyBuy": "Top value in electronics with up to 7% discount and verified platform fulfillment.",
      "bestOverallScore": 80,
      "isBestOverall": false
    },
    "platforms": {
      "amazon": {
        "price": 13999,
        "originalPrice": 14999,
        "discountPercent": 7,
        "rating": 4.8,
        "reviewCount": 18450,
        "deliveryEstimate": "1 day",
        "seller": "Amazon Device Store",
        "inStock": true,
        "productUrl": "https://www.amazon.in/dp/B08N41Y4Q2",
        "reviews": [
          {
            "author": "Nandita S",
            "rating": 5,
            "text": "The warm light feature allows reading for hours at night without eye strain.",
            "date": "2024-11-22"
          }
        ]
      },
      "flipkart": {
        "price": 14499,
        "originalPrice": 14999,
        "discountPercent": 3,
        "rating": 4.6,
        "reviewCount": 3200,
        "deliveryEstimate": "3-4 days",
        "seller": "E-Reader Express",
        "inStock": true,
        "productUrl": "https://www.flipkart.com/amazon-kindle-paperwhite",
        "reviews": [
          {
            "author": "Aman G",
            "rating": 5,
            "text": "Battery life is legendary. Haven't charged it in 3 weeks.",
            "date": "2024-10-09"
          }
        ]
      },
      "myntra": {
        "price": 14999,
        "originalPrice": 14999,
        "discountPercent": 0,
        "rating": 4.7,
        "reviewCount": 380,
        "deliveryEstimate": "3-5 days",
        "seller": "Gadget Hub Myntra",
        "inStock": true,
        "productUrl": "https://www.myntra.com/gadgets/amazon-kindle-paperwhite",
        "reviews": [
          {
            "author": "Prachi M",
            "rating": 4,
            "text": "Type C port makes charging super convenient.",
            "date": "2024-11-01"
          }
        ]
      }
    }
  },
  {
    "groupId": "nike-air-max-270",
    "name": "Nike Air Max 270 Men's Running & Lifestyle Shoes",
    "category": "footwear",
    "subcategory": "Running & Lifestyle",
    "brand": "Nike",
    "imageUrl": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop&q=80",
    "images": [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=800&auto=format&fit=crop&q=80"
    ],
    "specs": {
      "type": "Running & Lifestyle",
      "cushioning": "Max Air 270 unit delivers all-day comfort",
      "upper_material": "Engineered breathable mesh",
      "closure": "Asymmetrical lacing for secure fit"
    },
    "aiData": {
      "sentiment": "green",
      "sentimentScore": 92,
      "sentimentPros": [
        "Verified top rated performance in footwear",
        "High build quality and user satisfaction",
        "Multi-platform competitive pricing available"
      ],
      "sentimentCons": [
        "High demand with fluctuating seller pricing",
        "Stock sells out fast during sale events"
      ],
      "reviewSummary": "Highly recommended footwear choice by Nike with 4.6★ average across Amazon, Flipkart, and Myntra.",
      "whyBuy": "Top value in footwear with up to 21% discount and verified platform fulfillment.",
      "bestOverallScore": 82,
      "isBestOverall": true
    },
    "platforms": {
      "amazon": {
        "price": 11495,
        "originalPrice": 13995,
        "discountPercent": 18,
        "rating": 4.5,
        "reviewCount": 9450,
        "deliveryEstimate": "2-3 days",
        "seller": "Nike Authorized India",
        "inStock": true,
        "productUrl": "https://www.amazon.in/dp/B07C9L8ZXY",
        "reviews": [
          {
            "author": "Rohit K",
            "rating": 5,
            "text": "Superb cushioning. Best looking lifestyle sneaker ever.",
            "date": "2024-11-16"
          }
        ]
      },
      "flipkart": {
        "price": 11995,
        "originalPrice": 13995,
        "discountPercent": 14,
        "rating": 4.4,
        "reviewCount": 6720,
        "deliveryEstimate": "3-4 days",
        "seller": "RetailNet Footwear",
        "inStock": true,
        "productUrl": "https://www.flipkart.com/nike-air-max-270",
        "reviews": [
          {
            "author": "Ajay S",
            "rating": 4,
            "text": "Slightly snug fit, recommend sizing half up.",
            "date": "2024-10-24"
          }
        ]
      },
      "myntra": {
        "price": 10995,
        "originalPrice": 13995,
        "discountPercent": 21,
        "rating": 4.6,
        "reviewCount": 4890,
        "deliveryEstimate": "1-2 days",
        "seller": "Nike Flagship Store (Myntra)",
        "inStock": true,
        "productUrl": "https://www.myntra.com/casual-shoes/nike-air-max-270",
        "reviews": [
          {
            "author": "Vikas M",
            "rating": 5,
            "text": "Best deal on Myntra with bank offer discount.",
            "date": "2024-11-28"
          }
        ]
      }
    }
  },
  {
    "groupId": "adidas-ultraboost-light",
    "name": "Adidas Ultraboost Light Men's Road Running Shoes",
    "category": "footwear",
    "subcategory": "footwear",
    "brand": "Adidas",
    "imageUrl": "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=800&auto=format&fit=crop&q=80",
    "images": [
      "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=800&auto=format&fit=crop&q=80"
    ],
    "specs": {
      "midsole": "Light BOOST cushioning (30% lighter than previous BOOST)",
      "upper": "PRIMEKNIT+ textile upper with sock-like fit",
      "outsole": "Continental Better Rubber outsole",
      "drop": "10mm (heel: 30mm / forefoot: 20mm)"
    },
    "aiData": {
      "sentiment": "green",
      "sentimentScore": 94,
      "sentimentPros": [
        "Verified top rated performance in footwear",
        "High build quality and user satisfaction",
        "Multi-platform competitive pricing available"
      ],
      "sentimentCons": [
        "High demand with fluctuating seller pricing",
        "Stock sells out fast during sale events"
      ],
      "reviewSummary": "Highly recommended footwear choice by Adidas with 4.7★ average across Amazon, Flipkart, and Myntra.",
      "whyBuy": "Top value in footwear with up to 34% discount and verified platform fulfillment.",
      "bestOverallScore": 89,
      "isBestOverall": true
    },
    "platforms": {
      "amazon": {
        "price": 12999,
        "originalPrice": 18999,
        "discountPercent": 32,
        "rating": 4.6,
        "reviewCount": 4210,
        "deliveryEstimate": "2-3 days",
        "seller": "Adidas India Direct",
        "inStock": true,
        "productUrl": "https://www.amazon.in/dp/B0BSLH9KV9",
        "reviews": [
          {
            "author": "Karthik R",
            "rating": 5,
            "text": "Light BOOST foam gives explosive energy return for 10k marathon runs.",
            "date": "2024-11-19"
          }
        ]
      },
      "flipkart": {
        "price": 13499,
        "originalPrice": 18999,
        "discountPercent": 29,
        "rating": 4.5,
        "reviewCount": 2890,
        "deliveryEstimate": "3-4 days",
        "seller": "FSAssured Sports",
        "inStock": true,
        "productUrl": "https://www.flipkart.com/adidas-ultraboost-light",
        "reviews": [
          {
            "author": "Suresh P",
            "rating": 5,
            "text": "Continental grip on wet asphalt is rock solid.",
            "date": "2024-10-12"
          }
        ]
      },
      "myntra": {
        "price": 12499,
        "originalPrice": 18999,
        "discountPercent": 34,
        "rating": 4.7,
        "reviewCount": 3120,
        "deliveryEstimate": "1-2 days",
        "seller": "Adidas Official Partner",
        "inStock": true,
        "productUrl": "https://www.myntra.com/sports-shoes/adidas-ultraboost-light",
        "reviews": [
          {
            "author": "Dheeraj S",
            "rating": 5,
            "text": "Unmatched step-in comfort. Feels like walking on clouds.",
            "date": "2024-11-22"
          }
        ]
      }
    }
  },
  {
    "groupId": "asics-gel-kayano-30",
    "name": "ASICS Gel-Kayano 30 Stability Road Running Shoes",
    "category": "footwear",
    "subcategory": "footwear",
    "brand": "ASICS",
    "imageUrl": "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&auto=format&fit=crop&q=80",
    "images": [
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=800&auto=format&fit=crop&q=80"
    ],
    "specs": {
      "cushioning": "FF BLAST PLUS ECO and PureGEL technology",
      "stability": "4D GUIDANCE SYSTEM for adaptive stability",
      "heel_drop": "10mm",
      "surface": "Road / Track"
    },
    "aiData": {
      "sentiment": "green",
      "sentimentScore": 94,
      "sentimentPros": [
        "Verified top rated performance in footwear",
        "High build quality and user satisfaction",
        "Multi-platform competitive pricing available"
      ],
      "sentimentCons": [
        "High demand with fluctuating seller pricing",
        "Stock sells out fast during sale events"
      ],
      "reviewSummary": "Highly recommended footwear choice by ASICS with 4.7★ average across Amazon, Flipkart, and Myntra.",
      "whyBuy": "Top value in footwear with up to 27% discount and verified platform fulfillment.",
      "bestOverallScore": 86,
      "isBestOverall": true
    },
    "platforms": {
      "amazon": {
        "price": 11999,
        "originalPrice": 15999,
        "discountPercent": 25,
        "rating": 4.7,
        "reviewCount": 3150,
        "deliveryEstimate": "2-3 days",
        "seller": "ASICS India Official",
        "inStock": true,
        "productUrl": "https://www.amazon.in/dp/B0C77G9KL8",
        "reviews": [
          {
            "author": "Ramanathan G",
            "rating": 5,
            "text": "The 4D guidance system completely fixed my overpronation issues.",
            "date": "2024-11-15"
          }
        ]
      },
      "flipkart": {
        "price": 12499,
        "originalPrice": 15999,
        "discountPercent": 22,
        "rating": 4.6,
        "reviewCount": 1820,
        "deliveryEstimate": "3-5 days",
        "seller": "Marathon Gear Hub",
        "inStock": true,
        "productUrl": "https://www.flipkart.com/asics-gel-kayano-30",
        "reviews": [
          {
            "author": "Anil K",
            "rating": 4,
            "text": "Plush tongue and ankle collar. Perfect for long half-marathons.",
            "date": "2024-10-31"
          }
        ]
      },
      "myntra": {
        "price": 11699,
        "originalPrice": 15999,
        "discountPercent": 27,
        "rating": 4.7,
        "reviewCount": 940,
        "deliveryEstimate": "2-3 days",
        "seller": "ASICS Running Studio",
        "inStock": true,
        "productUrl": "https://www.myntra.com/sports-shoes/asics-gel-kayano-30",
        "reviews": [
          {
            "author": "Harsh V",
            "rating": 5,
            "text": "Very smooth heel-to-toe transition. Highly recommended.",
            "date": "2024-11-26"
          }
        ]
      }
    }
  },
  {
    "groupId": "new-balance-574-core",
    "name": "New Balance 574 Core Men's Classic Suede Sneakers",
    "category": "footwear",
    "subcategory": "footwear",
    "brand": "New Balance",
    "imageUrl": "https://images.unsplash.com/photo-1539185441755-769473a23570?w=800&auto=format&fit=crop&q=80",
    "images": [
      "https://images.unsplash.com/photo-1539185441755-769473a23570?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?w=800&auto=format&fit=crop&q=80"
    ],
    "specs": {
      "midsole": "ENCAP midsole cushioning combines lightweight foam with durable polyurethane rim",
      "upper": "Suede and mesh upper",
      "outsole": "Durable rubber outsole with classic lug pattern"
    },
    "aiData": {
      "sentiment": "green",
      "sentimentScore": 90,
      "sentimentPros": [
        "Verified top rated performance in footwear",
        "High build quality and user satisfaction",
        "Multi-platform competitive pricing available"
      ],
      "sentimentCons": [
        "High demand with fluctuating seller pricing",
        "Stock sells out fast during sale events"
      ],
      "reviewSummary": "Highly recommended footwear choice by New Balance with 4.5★ average across Amazon, Flipkart, and Myntra.",
      "whyBuy": "Top value in footwear with up to 33% discount and verified platform fulfillment.",
      "bestOverallScore": 85,
      "isBestOverall": true
    },
    "platforms": {
      "amazon": {
        "price": 6499,
        "originalPrice": 8999,
        "discountPercent": 28,
        "rating": 4.4,
        "reviewCount": 5120,
        "deliveryEstimate": "2-3 days",
        "seller": "New Balance Authorized",
        "inStock": true,
        "productUrl": "https://www.amazon.in/dp/B00K5O2L9P",
        "reviews": [
          {
            "author": "Naveen C",
            "rating": 5,
            "text": "Timeless grey suede sneaker. Goes with both jeans and shorts.",
            "date": "2024-11-03"
          }
        ]
      },
      "flipkart": {
        "price": 6799,
        "originalPrice": 8999,
        "discountPercent": 24,
        "rating": 4.3,
        "reviewCount": 3200,
        "deliveryEstimate": "3-4 days",
        "seller": "FSAssured Lifestyle",
        "inStock": true,
        "productUrl": "https://www.flipkart.com/new-balance-574",
        "reviews": [
          {
            "author": "Girish M",
            "rating": 4,
            "text": "Great wide toe box, very supportive for daily walking.",
            "date": "2024-10-17"
          }
        ]
      },
      "myntra": {
        "price": 5999,
        "originalPrice": 8999,
        "discountPercent": 33,
        "rating": 4.5,
        "reviewCount": 2450,
        "deliveryEstimate": "1-2 days",
        "seller": "New Balance Flagship",
        "inStock": true,
        "productUrl": "https://www.myntra.com/casual-shoes/new-balance-574",
        "reviews": [
          {
            "author": "Soham D",
            "rating": 5,
            "text": "Best price on Myntra for genuine 574 Core.",
            "date": "2024-11-14"
          }
        ]
      }
    }
  },
  {
    "groupId": "crocs-classic-clogs",
    "name": "Crocs Unisex-Adult Classic Slip-On Water Clogs",
    "category": "footwear",
    "subcategory": "footwear",
    "brand": "Crocs",
    "imageUrl": "https://images.unsplash.com/photo-1562183241-b937e95585b6?w=800&auto=format&fit=crop&q=80",
    "images": [
      "https://images.unsplash.com/photo-1562183241-b937e95585b6?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800&auto=format&fit=crop&q=80"
    ],
    "specs": {
      "material": "100% Croslite lightweight proprietary foam",
      "ventilation": "Ventilation ports add breathability and help shed water",
      "strap": "Pivoting heel straps for a more secure fit"
    },
    "aiData": {
      "sentiment": "green",
      "sentimentScore": 88,
      "sentimentPros": [
        "Verified top rated performance in footwear",
        "High build quality and user satisfaction",
        "Multi-platform competitive pricing available"
      ],
      "sentimentCons": [
        "High demand with fluctuating seller pricing",
        "Stock sells out fast during sale events"
      ],
      "reviewSummary": "Highly recommended footwear choice by Crocs with 4.4★ average across Amazon, Flipkart, and Myntra.",
      "whyBuy": "Top value in footwear with up to 34% discount and verified platform fulfillment.",
      "bestOverallScore": 84,
      "isBestOverall": true
    },
    "platforms": {
      "amazon": {
        "price": 2495,
        "originalPrice": 3495,
        "discountPercent": 29,
        "rating": 4.4,
        "reviewCount": 38900,
        "deliveryEstimate": "1-2 days",
        "seller": "Crocs India",
        "inStock": true,
        "productUrl": "https://www.amazon.in/dp/B0014C5W7Q",
        "reviews": [
          {
            "author": "Deepa N",
            "rating": 5,
            "text": "Extremely comfortable for household chores and monsoon walks.",
            "date": "2024-11-11"
          }
        ]
      },
      "flipkart": {
        "price": 2295,
        "originalPrice": 3495,
        "discountPercent": 34,
        "rating": 4.3,
        "reviewCount": 24100,
        "deliveryEstimate": "2-3 days",
        "seller": "RetailNet Footwear",
        "inStock": true,
        "productUrl": "https://www.flipkart.com/crocs-classic-clog",
        "reviews": [
          {
            "author": "Manish B",
            "rating": 4,
            "text": "Easy to clean with just water and mild soap.",
            "date": "2024-10-20"
          }
        ]
      },
      "myntra": {
        "price": 2395,
        "originalPrice": 3495,
        "discountPercent": 31,
        "rating": 4.4,
        "reviewCount": 14200,
        "deliveryEstimate": "1-2 days",
        "seller": "Crocs Brand Store",
        "inStock": true,
        "productUrl": "https://www.myntra.com/casual-shoes/crocs-classic-clog",
        "reviews": [
          {
            "author": "Pradeep G",
            "rating": 5,
            "text": "100% original Crocs with genuine tags.",
            "date": "2024-11-27"
          }
        ]
      }
    }
  },
  {
    "groupId": "woodland-brown-boots",
    "name": "Woodland Men's Camel Brown Leather Outdoor Trekking Boots",
    "category": "footwear",
    "subcategory": "footwear",
    "brand": "Woodland",
    "imageUrl": "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?w=800&auto=format&fit=crop&q=80",
    "images": [
      "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=800&auto=format&fit=crop&q=80"
    ],
    "specs": {
      "upper_material": "Genuine Nubuck / Suede Leather",
      "sole": "Heavy-duty grooved rubber lug sole",
      "closure": "Rust-proof metallic eyelet lace-up",
      "terrain": "All-terrain / Off-road trekking"
    },
    "aiData": {
      "sentiment": "green",
      "sentimentScore": 86,
      "sentimentPros": [
        "Verified top rated performance in footwear",
        "High build quality and user satisfaction",
        "Multi-platform competitive pricing available"
      ],
      "sentimentCons": [
        "High demand with fluctuating seller pricing",
        "Stock sells out fast during sale events"
      ],
      "reviewSummary": "Highly recommended footwear choice by Woodland with 4.3★ average across Amazon, Flipkart, and Myntra.",
      "whyBuy": "Top value in footwear with up to 36% discount and verified platform fulfillment.",
      "bestOverallScore": 83,
      "isBestOverall": false
    },
    "platforms": {
      "amazon": {
        "price": 3499,
        "originalPrice": 5495,
        "discountPercent": 36,
        "rating": 4.2,
        "reviewCount": 14320,
        "deliveryEstimate": "2-3 days",
        "seller": "Aero Club (Woodland)",
        "inStock": true,
        "productUrl": "https://www.amazon.in/dp/B00K52079M",
        "reviews": [
          {
            "author": "Vikram S",
            "rating": 5,
            "text": "Tough as a tank. Have used it on 3 Himalayan treks without a scratch.",
            "date": "2024-11-08"
          }
        ]
      },
      "flipkart": {
        "price": 3799,
        "originalPrice": 5495,
        "discountPercent": 31,
        "rating": 4.1,
        "reviewCount": 9820,
        "deliveryEstimate": "3-4 days",
        "seller": "SuperComNet Footwear",
        "inStock": true,
        "productUrl": "https://www.flipkart.com/woodland-boots",
        "reviews": [
          {
            "author": "Ankur J",
            "rating": 4,
            "text": "High ankle support prevents twisting on rocks.",
            "date": "2024-10-15"
          }
        ]
      },
      "myntra": {
        "price": 3649,
        "originalPrice": 5495,
        "discountPercent": 34,
        "rating": 4.3,
        "reviewCount": 5120,
        "deliveryEstimate": "2-3 days",
        "seller": "Woodland Official",
        "inStock": true,
        "productUrl": "https://www.myntra.com/boots/woodland-leather-boots",
        "reviews": [
          {
            "author": "Devashish T",
            "rating": 5,
            "text": "Premium nubuck leather finish looks very stylish.",
            "date": "2024-11-20"
          }
        ]
      }
    }
  },
  {
    "groupId": "puma-softride-pro",
    "name": "Puma Softride Pro Men's Cushioned Running Shoes",
    "category": "footwear",
    "subcategory": "footwear",
    "brand": "Puma",
    "imageUrl": "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&auto=format&fit=crop&q=80",
    "images": [
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop&q=80"
    ],
    "specs": {
      "midsole": "SOFTRIDE foam technology for extreme cushioning and all-day comfort",
      "sockliner": "SOFTFOAM+ step-in comfort sockliner with extra thick heel",
      "upper": "Breathable knit upper with zoned rubber traction"
    },
    "aiData": {
      "sentiment": "yellow",
      "sentimentScore": 82,
      "sentimentPros": [
        "Verified top rated performance in footwear",
        "High build quality and user satisfaction",
        "Multi-platform competitive pricing available"
      ],
      "sentimentCons": [
        "High demand with fluctuating seller pricing",
        "Stock sells out fast during sale events"
      ],
      "reviewSummary": "Highly recommended footwear choice by Puma with 4.1★ average across Amazon, Flipkart, and Myntra.",
      "whyBuy": "Top value in footwear with up to 42% discount and verified platform fulfillment.",
      "bestOverallScore": 82,
      "isBestOverall": false
    },
    "platforms": {
      "amazon": {
        "price": 3499,
        "originalPrice": 5999,
        "discountPercent": 42,
        "rating": 4.1,
        "reviewCount": 8200,
        "deliveryEstimate": "2-3 days",
        "seller": "Puma Sports India",
        "inStock": true,
        "productUrl": "https://www.amazon.in/dp/B09WJ98X7N",
        "reviews": [
          {
            "author": "Rakesh D",
            "rating": 4,
            "text": "Memory foam insole is very soft. Great for gym and daily jogs.",
            "date": "2024-11-05"
          }
        ]
      },
      "flipkart": {
        "price": 3699,
        "originalPrice": 5999,
        "discountPercent": 38,
        "rating": 4,
        "reviewCount": 5400,
        "deliveryEstimate": "3-4 days",
        "seller": "RetailNet Puma",
        "inStock": true,
        "productUrl": "https://www.flipkart.com/puma-softride-pro",
        "reviews": [
          {
            "author": "Kishan M",
            "rating": 4,
            "text": "Lightweight and flexible sole.",
            "date": "2024-10-18"
          }
        ]
      },
      "myntra": {
        "price": 3599,
        "originalPrice": 5999,
        "discountPercent": 40,
        "rating": 4.1,
        "reviewCount": 3900,
        "deliveryEstimate": "2-3 days",
        "seller": "Puma Official Store",
        "inStock": true,
        "productUrl": "https://www.myntra.com/sports-shoes/puma-softride-pro",
        "reviews": [
          {
            "author": "Sameer A",
            "rating": 4,
            "text": "True to size and very comfortable for standing long hours.",
            "date": "2024-11-22"
          }
        ]
      }
    }
  },
  {
    "groupId": "red-tape-casual-sneaker",
    "name": "Red Tape Men's Classic White Low-Top Casual Sneakers",
    "category": "footwear",
    "subcategory": "footwear",
    "brand": "Red Tape",
    "imageUrl": "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800&auto=format&fit=crop&q=80",
    "images": [
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&auto=format&fit=crop&q=80"
    ],
    "specs": {
      "upper": "Premium PU leather upper with perforated toe box",
      "sole": "EVA sole for lightweight cushioning and grip",
      "closure": "Lace-Up"
    },
    "aiData": {
      "sentiment": "green",
      "sentimentScore": 84,
      "sentimentPros": [
        "Verified top rated performance in footwear",
        "High build quality and user satisfaction",
        "Multi-platform competitive pricing available"
      ],
      "sentimentCons": [
        "High demand with fluctuating seller pricing",
        "Stock sells out fast during sale events"
      ],
      "reviewSummary": "Highly recommended footwear choice by Red Tape with 4.2★ average across Amazon, Flipkart, and Myntra.",
      "whyBuy": "Top value in footwear with up to 76% discount and verified platform fulfillment.",
      "bestOverallScore": 98,
      "isBestOverall": false
    },
    "platforms": {
      "amazon": {
        "price": 1399,
        "originalPrice": 5399,
        "discountPercent": 74,
        "rating": 4.1,
        "reviewCount": 18450,
        "deliveryEstimate": "1-2 days",
        "seller": "Red Tape India",
        "inStock": true,
        "productUrl": "https://www.amazon.in/dp/B08K5Q89LM",
        "reviews": [
          {
            "author": "Prashant R",
            "rating": 5,
            "text": "Insane value for ₹1399. Looks exactly like premium Stan Smiths.",
            "date": "2024-11-19"
          }
        ]
      },
      "flipkart": {
        "price": 1299,
        "originalPrice": 5399,
        "discountPercent": 76,
        "rating": 4,
        "reviewCount": 24120,
        "deliveryEstimate": "2-3 days",
        "seller": "RetailNet Footwear",
        "inStock": true,
        "productUrl": "https://www.flipkart.com/red-tape-white-sneaker",
        "reviews": [
          {
            "author": "Karthik D",
            "rating": 4,
            "text": "Very easy to wipe clean with damp cloth.",
            "date": "2024-10-28"
          }
        ]
      },
      "myntra": {
        "price": 1449,
        "originalPrice": 5399,
        "discountPercent": 73,
        "rating": 4.2,
        "reviewCount": 11200,
        "deliveryEstimate": "1-2 days",
        "seller": "Red Tape Official Brand Store",
        "inStock": true,
        "productUrl": "https://www.myntra.com/casual-shoes/red-tape-sneakers",
        "reviews": [
          {
            "author": "Nikhil P",
            "rating": 5,
            "text": "Great everyday college sneaker.",
            "date": "2024-11-22"
          }
        ]
      }
    }
  },
  {
    "groupId": "skechers-go-walk-max",
    "name": "Skechers Men's Go Walk Max Slip-On Walking Shoes",
    "category": "footwear",
    "subcategory": "footwear",
    "brand": "Skechers",
    "imageUrl": "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=800&auto=format&fit=crop&q=80",
    "images": [
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=800&auto=format&fit=crop&q=80"
    ],
    "specs": {
      "sole": "5GEN lightweight injection-molded compound midsole with memory retention",
      "insole": "Goga Max high-rebound cushioning insole",
      "upper": "Super lightweight mesh fabric upper with padded heel collar"
    },
    "aiData": {
      "sentiment": "green",
      "sentimentScore": 92,
      "sentimentPros": [
        "Verified top rated performance in footwear",
        "High build quality and user satisfaction",
        "Multi-platform competitive pricing available"
      ],
      "sentimentCons": [
        "High demand with fluctuating seller pricing",
        "Stock sells out fast during sale events"
      ],
      "reviewSummary": "Highly recommended footwear choice by Skechers with 4.6★ average across Amazon, Flipkart, and Myntra.",
      "whyBuy": "Top value in footwear with up to 42% discount and verified platform fulfillment.",
      "bestOverallScore": 90,
      "isBestOverall": true
    },
    "platforms": {
      "amazon": {
        "price": 3299,
        "originalPrice": 5499,
        "discountPercent": 40,
        "rating": 4.5,
        "reviewCount": 12400,
        "deliveryEstimate": "1-2 days",
        "seller": "Skechers South Asia",
        "inStock": true,
        "productUrl": "https://www.amazon.in/dp/B073WP8N91",
        "reviews": [
          {
            "author": "Mahesh B",
            "rating": 5,
            "text": "The best walking shoe for senior citizens and daily 5km evening walks.",
            "date": "2024-11-14"
          }
        ]
      },
      "flipkart": {
        "price": 3499,
        "originalPrice": 5499,
        "discountPercent": 36,
        "rating": 4.4,
        "reviewCount": 7890,
        "deliveryEstimate": "2-3 days",
        "seller": "SuperComNet Sports",
        "inStock": true,
        "productUrl": "https://www.flipkart.com/skechers-go-walk-max",
        "reviews": [
          {
            "author": "Sunita G",
            "rating": 5,
            "text": "Slip-on design is effortless to wear. Very soft on heel spurs.",
            "date": "2024-10-21"
          }
        ]
      },
      "myntra": {
        "price": 3199,
        "originalPrice": 5499,
        "discountPercent": 42,
        "rating": 4.6,
        "reviewCount": 5120,
        "deliveryEstimate": "1-2 days",
        "seller": "Skechers Flagship Store",
        "inStock": true,
        "productUrl": "https://www.myntra.com/casual-shoes/skechers-go-walk",
        "reviews": [
          {
            "author": "Vijay R",
            "rating": 5,
            "text": "Extremely breathable mesh, zero foot odor even after 8 hours.",
            "date": "2024-11-25"
          }
        ]
      }
    }
  },
  {
    "groupId": "levis-511-slim-fit-jeans",
    "name": "Levi's Men's 511 Slim Fit Stretch Denim Jeans (Dark Indigo)",
    "category": "fashion",
    "subcategory": "Slim from hip to ankle",
    "brand": "Levi's",
    "imageUrl": "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800&auto=format&fit=crop&q=80",
    "images": [
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1542272604-787c3835535d?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1582552938357-32b906df40cb?w=800&auto=format&fit=crop&q=80"
    ],
    "specs": {
      "fit": "Slim from hip to ankle",
      "fabric": "99% Cotton, 1% Elastane (Levi's Flex stretch)",
      "rise": "Sits below waist",
      "leg_opening": "14.5 inch slim leg"
    },
    "aiData": {
      "sentiment": "green",
      "sentimentScore": 88,
      "sentimentPros": [
        "Verified top rated performance in fashion",
        "High build quality and user satisfaction",
        "Multi-platform competitive pricing available"
      ],
      "sentimentCons": [
        "High demand with fluctuating seller pricing",
        "Stock sells out fast during sale events"
      ],
      "reviewSummary": "Highly recommended fashion choice by Levi's with 4.4★ average across Amazon, Flipkart, and Myntra.",
      "whyBuy": "Top value in fashion with up to 50% discount and verified platform fulfillment.",
      "bestOverallScore": 90,
      "isBestOverall": true
    },
    "platforms": {
      "amazon": {
        "price": 2199,
        "originalPrice": 3999,
        "discountPercent": 45,
        "rating": 4.3,
        "reviewCount": 14200,
        "deliveryEstimate": "2-3 days",
        "seller": "Levi's Authorized Store",
        "inStock": true,
        "productUrl": "https://www.amazon.in/dp/B00K5Q28L1",
        "reviews": [
          {
            "author": "Alok N",
            "rating": 5,
            "text": "Classic 511 fit. Perfect stretch and doesn't lose shape after washes.",
            "date": "2024-11-12"
          }
        ]
      },
      "flipkart": {
        "price": 2399,
        "originalPrice": 3999,
        "discountPercent": 40,
        "rating": 4.2,
        "reviewCount": 9800,
        "deliveryEstimate": "3-4 days",
        "seller": "RetailNet Denim",
        "inStock": true,
        "productUrl": "https://www.flipkart.com/levis-511-slim-fit",
        "reviews": [
          {
            "author": "Harish S",
            "rating": 4,
            "text": "Deep indigo color that looks great with white sneakers.",
            "date": "2024-10-29"
          }
        ]
      },
      "myntra": {
        "price": 1999,
        "originalPrice": 3999,
        "discountPercent": 50,
        "rating": 4.4,
        "reviewCount": 18400,
        "deliveryEstimate": "1-2 days",
        "seller": "Levi's Brand Flagship",
        "inStock": true,
        "productUrl": "https://www.myntra.com/jeans/levis-511-slim-fit",
        "reviews": [
          {
            "author": "Yash P",
            "rating": 5,
            "text": "Massive 50% discount on Myntra. 100% authentic red tab jeans.",
            "date": "2024-11-24"
          }
        ]
      }
    }
  },
  {
    "groupId": "tommy-hilfiger-classic-polo",
    "name": "Tommy Hilfiger Men's Regular Fit Pique Cotton Polo T-Shirt",
    "category": "fashion",
    "subcategory": "Custom Regular Fit",
    "brand": "Tommy Hilfiger",
    "imageUrl": "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?w=800&auto=format&fit=crop&q=80",
    "images": [
      "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&auto=format&fit=crop&q=80"
    ],
    "specs": {
      "fabric": "100% Organic Pique Cotton",
      "fit": "Custom Regular Fit",
      "collar": "Ribbed polo collar with 2-button placket",
      "embroidery": "Signature Tommy Hilfiger flag logo on chest"
    },
    "aiData": {
      "sentiment": "green",
      "sentimentScore": 90,
      "sentimentPros": [
        "Verified top rated performance in fashion",
        "High build quality and user satisfaction",
        "Multi-platform competitive pricing available"
      ],
      "sentimentCons": [
        "High demand with fluctuating seller pricing",
        "Stock sells out fast during sale events"
      ],
      "reviewSummary": "Highly recommended fashion choice by Tommy Hilfiger with 4.5★ average across Amazon, Flipkart, and Myntra.",
      "whyBuy": "Top value in fashion with up to 50% discount and verified platform fulfillment.",
      "bestOverallScore": 92,
      "isBestOverall": true
    },
    "platforms": {
      "amazon": {
        "price": 2499,
        "originalPrice": 4599,
        "discountPercent": 46,
        "rating": 4.4,
        "reviewCount": 4890,
        "deliveryEstimate": "2-3 days",
        "seller": "Cloudtail Apparel",
        "inStock": true,
        "productUrl": "https://www.amazon.in/dp/B09KL897N4",
        "reviews": [
          {
            "author": "Chetan B",
            "rating": 5,
            "text": "High quality pique cotton that stays crisp throughout the day.",
            "date": "2024-11-17"
          }
        ]
      },
      "flipkart": {
        "price": 2799,
        "originalPrice": 4599,
        "discountPercent": 39,
        "rating": 4.2,
        "reviewCount": 2410,
        "deliveryEstimate": "3-4 days",
        "seller": "FSAssured Fashion",
        "inStock": true,
        "productUrl": "https://www.flipkart.com/tommy-hilfiger-polo",
        "reviews": [
          {
            "author": "Deepak V",
            "rating": 4,
            "text": "Rich navy blue shade and comfortable fit.",
            "date": "2024-10-18"
          }
        ]
      },
      "myntra": {
        "price": 2299,
        "originalPrice": 4599,
        "discountPercent": 50,
        "rating": 4.5,
        "reviewCount": 8900,
        "deliveryEstimate": "1-2 days",
        "seller": "Tommy Hilfiger Flagship",
        "inStock": true,
        "productUrl": "https://www.myntra.com/tshirts/tommy-hilfiger-polo",
        "reviews": [
          {
            "author": "Sahil G",
            "rating": 5,
            "text": "Premium finish and comfortable fabric for summer.",
            "date": "2024-11-20"
          }
        ]
      }
    }
  },
  {
    "groupId": "rayban-aviator-classic",
    "name": "Ray-Ban Aviator Classic Polarized Sunglasses (Gold Frame / Green G-15 Lens)",
    "category": "fashion",
    "subcategory": "fashion",
    "brand": "Ray-Ban",
    "imageUrl": "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800&auto=format&fit=crop&q=80",
    "images": [
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1508296695146-257a814070b4?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=800&auto=format&fit=crop&q=80"
    ],
    "specs": {
      "frame_material": "Corrosion-resistant Metal alloy",
      "lens_technology": "Polarized G-15 Green Crystal Lens",
      "uv_protection": "100% UV400 protection",
      "size": "58mm standard lens width"
    },
    "aiData": {
      "sentiment": "green",
      "sentimentScore": 94,
      "sentimentPros": [
        "Verified top rated performance in fashion",
        "High build quality and user satisfaction",
        "Multi-platform competitive pricing available"
      ],
      "sentimentCons": [
        "High demand with fluctuating seller pricing",
        "Stock sells out fast during sale events"
      ],
      "reviewSummary": "Highly recommended fashion choice by Ray-Ban with 4.7★ average across Amazon, Flipkart, and Myntra.",
      "whyBuy": "Top value in fashion with up to 22% discount and verified platform fulfillment.",
      "bestOverallScore": 84,
      "isBestOverall": true
    },
    "platforms": {
      "amazon": {
        "price": 8490,
        "originalPrice": 10490,
        "discountPercent": 19,
        "rating": 4.6,
        "reviewCount": 7210,
        "deliveryEstimate": "1-2 days",
        "seller": "Luxottica India Official",
        "inStock": true,
        "productUrl": "https://www.amazon.in/dp/B00080FGVO",
        "reviews": [
          {
            "author": "Aditya S",
            "rating": 5,
            "text": "The iconic pilot aviators. Glare reduction while driving is unmatched.",
            "date": "2024-11-21"
          }
        ]
      },
      "flipkart": {
        "price": 8890,
        "originalPrice": 10490,
        "discountPercent": 15,
        "rating": 4.5,
        "reviewCount": 3890,
        "deliveryEstimate": "3-4 days",
        "seller": "Optics SuperStore",
        "inStock": true,
        "productUrl": "https://www.flipkart.com/ray-ban-aviator",
        "reviews": [
          {
            "author": "Kunal M",
            "rating": 5,
            "text": "Came with original leather case and microfiber cloth.",
            "date": "2024-10-14"
          }
        ]
      },
      "myntra": {
        "price": 8190,
        "originalPrice": 10490,
        "discountPercent": 22,
        "rating": 4.7,
        "reviewCount": 5120,
        "deliveryEstimate": "1-2 days",
        "seller": "Ray-Ban Brand Boutique",
        "inStock": true,
        "productUrl": "https://www.myntra.com/sunglasses/ray-ban-aviator",
        "reviews": [
          {
            "author": "Tarun D",
            "rating": 5,
            "text": "Authentic Luxottica barcode and warranty registration verified.",
            "date": "2024-11-26"
          }
        ]
      }
    }
  },
  {
    "groupId": "zara-faux-leather-jacket",
    "name": "Zara Men's Faux Leather Biker Jacket with Asymmetric Zip",
    "category": "fashion",
    "subcategory": "fashion",
    "brand": "Zara",
    "imageUrl": "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&auto=format&fit=crop&q=80",
    "images": [
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1548883354-7622d03aca27?w=800&auto=format&fit=crop&q=80"
    ],
    "specs": {
      "material": "100% Polyurethane leather finish with viscose lining",
      "closure": "Asymmetric silver metallic zip",
      "pockets": "3 functional zip pockets with coin flap",
      "collar": "Notched lapel collar with snap buttons"
    },
    "aiData": {
      "sentiment": "green",
      "sentimentScore": 90,
      "sentimentPros": [
        "Verified top rated performance in fashion",
        "High build quality and user satisfaction",
        "Multi-platform competitive pricing available"
      ],
      "sentimentCons": [
        "High demand with fluctuating seller pricing",
        "Stock sells out fast during sale events"
      ],
      "reviewSummary": "Highly recommended fashion choice by Zara with 4.5★ average across Amazon, Flipkart, and Myntra.",
      "whyBuy": "Top value in fashion with up to 33% discount and verified platform fulfillment.",
      "bestOverallScore": 85,
      "isBestOverall": true
    },
    "platforms": {
      "amazon": {
        "price": 4990,
        "originalPrice": 6990,
        "discountPercent": 29,
        "rating": 4.3,
        "reviewCount": 2180,
        "deliveryEstimate": "2-3 days",
        "seller": "Urban Trendsetters",
        "inStock": true,
        "productUrl": "https://www.amazon.in/dp/B0CY78L91P",
        "reviews": [
          {
            "author": "Ishaan B",
            "rating": 5,
            "text": "Looks like real leather. Perfect slim fit jacket for winter nights.",
            "date": "2024-11-13"
          }
        ]
      },
      "flipkart": {
        "price": 5290,
        "originalPrice": 6990,
        "discountPercent": 24,
        "rating": 4.2,
        "reviewCount": 1420,
        "deliveryEstimate": "3-4 days",
        "seller": "EuroFashion Outlet",
        "inStock": true,
        "productUrl": "https://www.flipkart.com/zara-biker-jacket",
        "reviews": [
          {
            "author": "Rahul P",
            "rating": 4,
            "text": "Good stitching and heavy quality zippers.",
            "date": "2024-10-22"
          }
        ]
      },
      "myntra": {
        "price": 4690,
        "originalPrice": 6990,
        "discountPercent": 33,
        "rating": 4.5,
        "reviewCount": 3840,
        "deliveryEstimate": "1-2 days",
        "seller": "Myntra Studio Luxe",
        "inStock": true,
        "productUrl": "https://www.myntra.com/jackets/zara-biker-jacket",
        "reviews": [
          {
            "author": "Siddharth N",
            "rating": 5,
            "text": "Incredible silhouette. Elevates any basic white tee and jeans outfit.",
            "date": "2024-11-25"
          }
        ]
      }
    }
  },
  {
    "groupId": "fabindia-printed-cotton-kurta",
    "name": "FabIndia Men's Pure Cotton Hand Block Printed Short Kurta",
    "category": "fashion",
    "subcategory": "fashion",
    "brand": "FabIndia",
    "imageUrl": "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&auto=format&fit=crop&q=80",
    "images": [
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&auto=format&fit=crop&q=80"
    ],
    "specs": {
      "fabric": "100% Breathable Khadi Cotton",
      "craft": "Traditional Hand Block Floral Print",
      "neck": "Mandarin Collar with button placket",
      "sleeves": "Full Sleeves with roll-up tab"
    },
    "aiData": {
      "sentiment": "green",
      "sentimentScore": 90,
      "sentimentPros": [
        "Verified top rated performance in fashion",
        "High build quality and user satisfaction",
        "Multi-platform competitive pricing available"
      ],
      "sentimentCons": [
        "High demand with fluctuating seller pricing",
        "Stock sells out fast during sale events"
      ],
      "reviewSummary": "Highly recommended fashion choice by FabIndia with 4.5★ average across Amazon, Flipkart, and Myntra.",
      "whyBuy": "Top value in fashion with up to 44% discount and verified platform fulfillment.",
      "bestOverallScore": 90,
      "isBestOverall": true
    },
    "platforms": {
      "amazon": {
        "price": 1499,
        "originalPrice": 2490,
        "discountPercent": 40,
        "rating": 4.4,
        "reviewCount": 3890,
        "deliveryEstimate": "2-3 days",
        "seller": "FabIndia Overseas",
        "inStock": true,
        "productUrl": "https://www.amazon.in/dp/B09L7X89W1",
        "reviews": [
          {
            "author": "Manish K",
            "rating": 5,
            "text": "Super light pure cotton fabric for festive occasions and casual Fridays.",
            "date": "2024-11-09"
          }
        ]
      },
      "flipkart": {
        "price": 1699,
        "originalPrice": 2490,
        "discountPercent": 32,
        "rating": 4.3,
        "reviewCount": 2150,
        "deliveryEstimate": "3-4 days",
        "seller": "Ethnic Weaves India",
        "inStock": true,
        "productUrl": "https://www.flipkart.com/fabindia-cotton-kurta",
        "reviews": [
          {
            "author": "Suraj G",
            "rating": 4,
            "text": "Natural dye colors look rich and authentic.",
            "date": "2024-10-18"
          }
        ]
      },
      "myntra": {
        "price": 1399,
        "originalPrice": 2490,
        "discountPercent": 44,
        "rating": 4.5,
        "reviewCount": 6720,
        "deliveryEstimate": "1-2 days",
        "seller": "FabIndia Official Brand Store",
        "inStock": true,
        "productUrl": "https://www.myntra.com/kurtas/fabindia-printed-kurta",
        "reviews": [
          {
            "author": "Deepak S",
            "rating": 5,
            "text": "Perfect fit around shoulders and chest.",
            "date": "2024-11-21"
          }
        ]
      }
    }
  },
  {
    "groupId": "allen-solly-formal-trousers",
    "name": "Allen Solly Men's Slim Fit Poly-Viscose Formal Office Trousers",
    "category": "fashion",
    "subcategory": "Contemporary Slim Fit with flat front",
    "brand": "Allen Solly",
    "imageUrl": "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=800&auto=format&fit=crop&q=80",
    "images": [
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1479064555552-3ef4979f8908?w=800&auto=format&fit=crop&q=80"
    ],
    "specs": {
      "fabric": "65% Polyester, 35% Viscose wrinkle-resistant blend",
      "fit": "Contemporary Slim Fit with flat front",
      "pockets": "2 side slash pockets, 2 back welt buttoned pockets"
    },
    "aiData": {
      "sentiment": "green",
      "sentimentScore": 88,
      "sentimentPros": [
        "Verified top rated performance in fashion",
        "High build quality and user satisfaction",
        "Multi-platform competitive pricing available"
      ],
      "sentimentCons": [
        "High demand with fluctuating seller pricing",
        "Stock sells out fast during sale events"
      ],
      "reviewSummary": "Highly recommended fashion choice by Allen Solly with 4.4★ average across Amazon, Flipkart, and Myntra.",
      "whyBuy": "Top value in fashion with up to 43% discount and verified platform fulfillment.",
      "bestOverallScore": 88,
      "isBestOverall": true
    },
    "platforms": {
      "amazon": {
        "price": 1399,
        "originalPrice": 2299,
        "discountPercent": 39,
        "rating": 4.3,
        "reviewCount": 5120,
        "deliveryEstimate": "2-3 days",
        "seller": "Aditya Birla Fashion (Amazon)",
        "inStock": true,
        "productUrl": "https://www.amazon.in/dp/B07K9L8P3M",
        "reviews": [
          {
            "author": "Naveen P",
            "rating": 5,
            "text": "Wrinkle-free material is great for long office workdays.",
            "date": "2024-11-12"
          }
        ]
      },
      "flipkart": {
        "price": 1499,
        "originalPrice": 2299,
        "discountPercent": 35,
        "rating": 4.2,
        "reviewCount": 3840,
        "deliveryEstimate": "3-4 days",
        "seller": "FormalWear Express",
        "inStock": true,
        "productUrl": "https://www.flipkart.com/allen-solly-formal-trouser",
        "reviews": [
          {
            "author": "Ravi M",
            "rating": 4,
            "text": "True to waist size. Clean charcoal grey color.",
            "date": "2024-10-25"
          }
        ]
      },
      "myntra": {
        "price": 1299,
        "originalPrice": 2299,
        "discountPercent": 43,
        "rating": 4.4,
        "reviewCount": 8900,
        "deliveryEstimate": "1-2 days",
        "seller": "Allen Solly Brand Store",
        "inStock": true,
        "productUrl": "https://www.myntra.com/trousers/allen-solly-formal-trousers",
        "reviews": [
          {
            "author": "Aniket T",
            "rating": 5,
            "text": "Excellent tailoring and comfortable fabric.",
            "date": "2024-11-26"
          }
        ]
      }
    }
  },
  {
    "groupId": "atomberg-renesa-bldc-fan",
    "name": "Atomberg Renesa 1200mm BLDC Motor Smart Ceiling Fan with Remote",
    "category": "home",
    "subcategory": "home",
    "brand": "Atomberg",
    "imageUrl": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop&q=80",
    "images": [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=800&auto=format&fit=crop&q=80"
    ],
    "specs": {
      "power_consumption": "28W at highest speed (saves 65% electricity)",
      "motor": "Energy efficient BLDC motor",
      "blade_sweep": "1200mm (48 inch) with aerodynamic blades",
      "control": "Smart IR Remote with Boost, Sleep, and Timer modes"
    },
    "aiData": {
      "sentiment": "green",
      "sentimentScore": 90,
      "sentimentPros": [
        "Verified top rated performance in home",
        "High build quality and user satisfaction",
        "Multi-platform competitive pricing available"
      ],
      "sentimentCons": [
        "High demand with fluctuating seller pricing",
        "Stock sells out fast during sale events"
      ],
      "reviewSummary": "Highly recommended home choice by Atomberg with 4.5★ average across Amazon, Flipkart, and Myntra.",
      "whyBuy": "Top value in home with up to 29% discount and verified platform fulfillment.",
      "bestOverallScore": 84,
      "isBestOverall": true
    },
    "platforms": {
      "amazon": {
        "price": 3699,
        "originalPrice": 4990,
        "discountPercent": 26,
        "rating": 4.5,
        "reviewCount": 42100,
        "deliveryEstimate": "1-2 days",
        "seller": "Atomberg Technologies Official",
        "inStock": true,
        "productUrl": "https://www.amazon.in/dp/B07P8N9KLM",
        "reviews": [
          {
            "author": "Manish R",
            "rating": 5,
            "text": "Completely silent and electric bill dropped noticeably.",
            "date": "2024-11-14"
          }
        ]
      },
      "flipkart": {
        "price": 3549,
        "originalPrice": 4990,
        "discountPercent": 29,
        "rating": 4.4,
        "reviewCount": 28400,
        "deliveryEstimate": "2-3 days",
        "seller": "RetailNet Home",
        "inStock": true,
        "productUrl": "https://www.flipkart.com/atomberg-renesa",
        "reviews": [
          {
            "author": "Sunil K",
            "rating": 5,
            "text": "Remote control works from anywhere in the bedroom.",
            "date": "2024-10-18"
          }
        ]
      },
      "myntra": {
        "price": 3890,
        "originalPrice": 4990,
        "discountPercent": 22,
        "rating": 4.5,
        "reviewCount": 1200,
        "deliveryEstimate": "3-4 days",
        "seller": "Home Decor Studio",
        "inStock": true,
        "productUrl": "https://www.myntra.com/home-appliances/atomberg-fan",
        "reviews": [
          {
            "author": "Archana S",
            "rating": 4,
            "text": "Modern minimalist look that fits false ceiling aesthetics.",
            "date": "2024-11-09"
          }
        ]
      }
    }
  },
  {
    "groupId": "philips-digital-airfryer-xl",
    "name": "Philips Digital Air Fryer XL (4.1L Capacity, 1400W Rapid Air Technology)",
    "category": "home",
    "subcategory": "home",
    "brand": "Philips",
    "imageUrl": "https://images.unsplash.com/photo-1584992236310-6edddc08acff?w=800&auto=format&fit=crop&q=80",
    "images": [
      "https://images.unsplash.com/photo-1584992236310-6edddc08acff?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1544233726-9f1d2b27be8b?w=800&auto=format&fit=crop&q=80"
    ],
    "specs": {
      "capacity": "4.1 Litres XL Basket",
      "technology": "Rapid Air Technology (up to 90% less fat)",
      "controls": "Digital Touch Screen with 7 preset cooking modes",
      "power": "1400W powerful heating element"
    },
    "aiData": {
      "sentiment": "green",
      "sentimentScore": 90,
      "sentimentPros": [
        "Verified top rated performance in home",
        "High build quality and user satisfaction",
        "Multi-platform competitive pricing available"
      ],
      "sentimentCons": [
        "High demand with fluctuating seller pricing",
        "Stock sells out fast during sale events"
      ],
      "reviewSummary": "Highly recommended home choice by Philips with 4.5★ average across Amazon, Flipkart, and Myntra.",
      "whyBuy": "Top value in home with up to 36% discount and verified platform fulfillment.",
      "bestOverallScore": 86,
      "isBestOverall": true
    },
    "platforms": {
      "amazon": {
        "price": 7999,
        "originalPrice": 11995,
        "discountPercent": 33,
        "rating": 4.5,
        "reviewCount": 19800,
        "deliveryEstimate": "1-2 days",
        "seller": "Philips Domestic Appliances",
        "inStock": true,
        "productUrl": "https://www.amazon.in/dp/B09B1Y8TKL",
        "reviews": [
          {
            "author": "Pooja V",
            "rating": 5,
            "text": "French fries and chicken tikka turn out crispy with just 1 spoon oil.",
            "date": "2024-11-20"
          }
        ]
      },
      "flipkart": {
        "price": 7699,
        "originalPrice": 11995,
        "discountPercent": 36,
        "rating": 4.4,
        "reviewCount": 12400,
        "deliveryEstimate": "2-3 days",
        "seller": "SuperComNet Kitchen",
        "inStock": true,
        "productUrl": "https://www.flipkart.com/philips-digital-airfryer",
        "reviews": [
          {
            "author": "Rohan M",
            "rating": 5,
            "text": "Easy to clean non-stick basket. Dishwasher safe.",
            "date": "2024-10-24"
          }
        ]
      },
      "myntra": {
        "price": 8490,
        "originalPrice": 11995,
        "discountPercent": 29,
        "rating": 4.5,
        "reviewCount": 850,
        "deliveryEstimate": "3-4 days",
        "seller": "Philips Luxe Appliances",
        "inStock": true,
        "productUrl": "https://www.myntra.com/kitchen/philips-air-fryer",
        "reviews": [
          {
            "author": "Komal D",
            "rating": 4,
            "text": "Very convenient for healthy everyday snacking.",
            "date": "2024-11-15"
          }
        ]
      }
    }
  },
  {
    "groupId": "dyson-v8-absolute-vacuum",
    "name": "Dyson V8 Absolute Cordless Stick Vacuum Cleaner",
    "category": "home",
    "subcategory": "home",
    "brand": "Dyson",
    "imageUrl": "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=800&auto=format&fit=crop&q=80",
    "images": [
      "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&auto=format&fit=crop&q=80"
    ],
    "specs": {
      "suction_power": "115 AW powerful fade-free suction",
      "runtime": "Up to 40 minutes continuous cleaning",
      "filtration": "Advanced whole-machine filtration captures 99.99% particles",
      "accessories": "Motorbar cleaner head, Fluffy cleaner head, Mini motorized tool"
    },
    "aiData": {
      "sentiment": "green",
      "sentimentScore": 92,
      "sentimentPros": [
        "Verified top rated performance in home",
        "High build quality and user satisfaction",
        "Multi-platform competitive pricing available"
      ],
      "sentimentCons": [
        "High demand with fluctuating seller pricing",
        "Stock sells out fast during sale events"
      ],
      "reviewSummary": "Highly recommended home choice by Dyson with 4.6★ average across Amazon, Flipkart, and Myntra.",
      "whyBuy": "Top value in home with up to 34% discount and verified platform fulfillment.",
      "bestOverallScore": 87,
      "isBestOverall": true
    },
    "platforms": {
      "amazon": {
        "price": 29900,
        "originalPrice": 43900,
        "discountPercent": 32,
        "rating": 4.6,
        "reviewCount": 8940,
        "deliveryEstimate": "1-2 days",
        "seller": "Dyson India Official",
        "inStock": true,
        "productUrl": "https://www.amazon.in/dp/B09V7N8L92",
        "reviews": [
          {
            "author": "Vivek G",
            "rating": 5,
            "text": "Deep cleans carpets and sofas effortlessly. Worth every penny.",
            "date": "2024-11-18"
          }
        ]
      },
      "flipkart": {
        "price": 28990,
        "originalPrice": 43900,
        "discountPercent": 34,
        "rating": 4.5,
        "reviewCount": 5120,
        "deliveryEstimate": "2-3 days",
        "seller": "FSAssured Appliances",
        "inStock": true,
        "productUrl": "https://www.flipkart.com/dyson-v8-absolute",
        "reviews": [
          {
            "author": "Ananya B",
            "rating": 5,
            "text": "Picks up pet hair with zero tangling on the brush roll.",
            "date": "2024-10-30"
          }
        ]
      },
      "myntra": {
        "price": 31900,
        "originalPrice": 43900,
        "discountPercent": 27,
        "rating": 4.6,
        "reviewCount": 620,
        "deliveryEstimate": "3-4 days",
        "seller": "Dyson Premium Store",
        "inStock": true,
        "productUrl": "https://www.myntra.com/home-appliances/dyson-v8-vacuum",
        "reviews": [
          {
            "author": "Karan T",
            "rating": 5,
            "text": "Very lightweight for cleaning ceiling fans and AC vents.",
            "date": "2024-11-22"
          }
        ]
      }
    }
  },
  {
    "groupId": "nespresso-essenza-mini",
    "name": "Nespresso Essenza Mini Compact Espresso Coffee Machine (Piano Black)",
    "category": "home",
    "subcategory": "home",
    "brand": "Nespresso",
    "imageUrl": "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800&auto=format&fit=crop&q=80",
    "images": [
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&auto=format&fit=crop&q=80"
    ],
    "specs": {
      "pressure": "19-bar high-pressure extraction pump",
      "heat_up_time": "Ultra-fast 25-second heat-up",
      "cup_sizes": "2 programmable cup sizes (Espresso 40ml / Lungo 110ml)",
      "energy_saving": "Eco mode turns off after 9 minutes of inactivity"
    },
    "aiData": {
      "sentiment": "green",
      "sentimentScore": 94,
      "sentimentPros": [
        "Verified top rated performance in home",
        "High build quality and user satisfaction",
        "Multi-platform competitive pricing available"
      ],
      "sentimentCons": [
        "High demand with fluctuating seller pricing",
        "Stock sells out fast during sale events"
      ],
      "reviewSummary": "Highly recommended home choice by Nespresso with 4.7★ average across Amazon, Flipkart, and Myntra.",
      "whyBuy": "Top value in home with up to 29% discount and verified platform fulfillment.",
      "bestOverallScore": 87,
      "isBestOverall": true
    },
    "platforms": {
      "amazon": {
        "price": 13999,
        "originalPrice": 18999,
        "discountPercent": 26,
        "rating": 4.6,
        "reviewCount": 5120,
        "deliveryEstimate": "2-3 days",
        "seller": "Nespresso Official Distributor",
        "inStock": true,
        "productUrl": "https://www.amazon.in/dp/B079L7N9K1",
        "reviews": [
          {
            "author": "Gautam M",
            "rating": 5,
            "text": "Makes rich crema espresso like an Italian cafe in 30 seconds.",
            "date": "2024-11-16"
          }
        ]
      },
      "flipkart": {
        "price": 14499,
        "originalPrice": 18999,
        "discountPercent": 24,
        "rating": 4.4,
        "reviewCount": 2400,
        "deliveryEstimate": "3-4 days",
        "seller": "CoffeeCrafters India",
        "inStock": true,
        "productUrl": "https://www.flipkart.com/nespresso-essenza-mini",
        "reviews": [
          {
            "author": "Sonia P",
            "rating": 4,
            "text": "Tiny footprint on kitchen counter. Super easy to use.",
            "date": "2024-10-21"
          }
        ]
      },
      "myntra": {
        "price": 13499,
        "originalPrice": 18999,
        "discountPercent": 29,
        "rating": 4.7,
        "reviewCount": 890,
        "deliveryEstimate": "2-3 days",
        "seller": "Gourmet Kitchen Studio",
        "inStock": true,
        "productUrl": "https://www.myntra.com/kitchen/nespresso-essenza-mini",
        "reviews": [
          {
            "author": "Rahul K",
            "rating": 5,
            "text": "Came with 14 complimentary coffee capsules. Great taste!",
            "date": "2024-11-28"
          }
        ]
      }
    }
  },
  {
    "groupId": "bajaj-rex-500w-mixer",
    "name": "Bajaj Rex 500W Nutri-Pro Mixer Grinder with 3 Stainless Steel Jars",
    "category": "home",
    "subcategory": "home",
    "brand": "Bajaj",
    "imageUrl": "https://images.unsplash.com/photo-1570222094114-d054a817e56b?w=800&auto=format&fit=crop&q=80",
    "images": [
      "https://images.unsplash.com/photo-1570222094114-d054a817e56b?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1585659722983-3a675dabf23d?w=800&auto=format&fit=crop&q=80"
    ],
    "specs": {
      "power": "500 Watts 100% Copper Motor",
      "jars": "3 SS Jars (1.2L Liquidizing, 0.8L Multi-purpose, 0.3L Chutney jar)",
      "speed_control": "3 speed control with incher for momentary operation",
      "overload_protection": "Motor overload protection with auto cut-off"
    },
    "aiData": {
      "sentiment": "green",
      "sentimentScore": 86,
      "sentimentPros": [
        "Verified top rated performance in home",
        "High build quality and user satisfaction",
        "Multi-platform competitive pricing available"
      ],
      "sentimentCons": [
        "High demand with fluctuating seller pricing",
        "Stock sells out fast during sale events"
      ],
      "reviewSummary": "Highly recommended home choice by Bajaj with 4.3★ average across Amazon, Flipkart, and Myntra.",
      "whyBuy": "Top value in home with up to 41% discount and verified platform fulfillment.",
      "bestOverallScore": 85,
      "isBestOverall": false
    },
    "platforms": {
      "amazon": {
        "price": 1999,
        "originalPrice": 3200,
        "discountPercent": 38,
        "rating": 4.2,
        "reviewCount": 64200,
        "deliveryEstimate": "1-2 days",
        "seller": "Bajaj Electricals Official",
        "inStock": true,
        "productUrl": "https://www.amazon.in/dp/B009P2LM9K",
        "reviews": [
          {
            "author": "Sunita D",
            "rating": 5,
            "text": "Chutney and dry masalas grind into fine paste within seconds.",
            "date": "2024-11-10"
          }
        ]
      },
      "flipkart": {
        "price": 1899,
        "originalPrice": 3200,
        "discountPercent": 41,
        "rating": 4.1,
        "reviewCount": 48900,
        "deliveryEstimate": "2-3 days",
        "seller": "RetailNet Kitchen",
        "inStock": true,
        "productUrl": "https://www.flipkart.com/bajaj-rex-mixer",
        "reviews": [
          {
            "author": "Kishore M",
            "rating": 4,
            "text": "Value for money kitchen appliance for small families.",
            "date": "2024-10-14"
          }
        ]
      },
      "myntra": {
        "price": 2099,
        "originalPrice": 3200,
        "discountPercent": 34,
        "rating": 4.3,
        "reviewCount": 3200,
        "deliveryEstimate": "2-4 days",
        "seller": "Home Utilities Store",
        "inStock": true,
        "productUrl": "https://www.myntra.com/kitchen/bajaj-rex-mixer",
        "reviews": [
          {
            "author": "Meenakshi R",
            "rating": 4,
            "text": "Sturdy vacuum suction feet keep it steady.",
            "date": "2024-11-20"
          }
        ]
      }
    }
  },
  {
    "groupId": "mi-smart-air-purifier-4",
    "name": "Xiaomi Smart Air Purifier 4 (OLED Touch Display, True HEPA Filter, Alexa & Google)",
    "category": "home",
    "subcategory": "home",
    "brand": "Xiaomi",
    "imageUrl": "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&auto=format&fit=crop&q=80",
    "images": [
      "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop&q=80"
    ],
    "specs": {
      "filtration": "3-in-1 True HEPA filter eliminates 99.97% of 0.3μm particles",
      "coverage_area": "Up to 516 sq. ft. room coverage",
      "cadr": "400 m³/h Clean Air Delivery Rate",
      "smart_control": "Voice control with Alexa & Google Assistant, Mi Home App"
    },
    "aiData": {
      "sentiment": "green",
      "sentimentScore": 90,
      "sentimentPros": [
        "Verified top rated performance in home",
        "High build quality and user satisfaction",
        "Multi-platform competitive pricing available"
      ],
      "sentimentCons": [
        "High demand with fluctuating seller pricing",
        "Stock sells out fast during sale events"
      ],
      "reviewSummary": "Highly recommended home choice by Xiaomi with 4.5★ average across Amazon, Flipkart, and Myntra.",
      "whyBuy": "Top value in home with up to 21% discount and verified platform fulfillment.",
      "bestOverallScore": 80,
      "isBestOverall": true
    },
    "platforms": {
      "amazon": {
        "price": 13999,
        "originalPrice": 16999,
        "discountPercent": 18,
        "rating": 4.5,
        "reviewCount": 14200,
        "deliveryEstimate": "1-2 days",
        "seller": "Xiaomi India Authorized",
        "inStock": true,
        "productUrl": "https://www.amazon.in/dp/B09WJ78L91",
        "reviews": [
          {
            "author": "Tarun B",
            "rating": 5,
            "text": "Brings AQI from 350 to under 25 in 20 minutes in Delhi winters.",
            "date": "2024-11-24"
          }
        ]
      },
      "flipkart": {
        "price": 13499,
        "originalPrice": 16999,
        "discountPercent": 21,
        "rating": 4.4,
        "reviewCount": 8900,
        "deliveryEstimate": "2-3 days",
        "seller": "FSAssured Electronics",
        "inStock": true,
        "productUrl": "https://www.flipkart.com/mi-smart-air-purifier-4",
        "reviews": [
          {
            "author": "Deepak N",
            "rating": 5,
            "text": "Night mode is whisper quiet. Real-time PM2.5 display is accurate.",
            "date": "2024-10-29"
          }
        ]
      },
      "myntra": {
        "price": 14299,
        "originalPrice": 16999,
        "discountPercent": 16,
        "rating": 4.5,
        "reviewCount": 940,
        "deliveryEstimate": "3-4 days",
        "seller": "Xiaomi Official Store",
        "inStock": true,
        "productUrl": "https://www.myntra.com/appliances/mi-air-purifier-4",
        "reviews": [
          {
            "author": "Sangeeta P",
            "rating": 5,
            "text": "Helps tremendously with dust allergy and pet dander.",
            "date": "2024-11-18"
          }
        ]
      }
    }
  }
];

const flattenProducts = () => {
  const products = [];
  mockGroups.forEach((group) => {
    const platformKeys = Object.keys(group.platforms);
    platformKeys.forEach((platform) => {
      const p = group.platforms[platform];
      if (!p.inStock && p.price === 0) return;
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
        images: group.images || [group.imageUrl],
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
        reviews: p.reviews || [],
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

export const searchMockProducts = ({ query = "", category = "", minPrice = 0, maxPrice = Infinity, platforms = [], sortBy = "best_value" }) => {
  let results = [...mockProducts];

  if (query && query.trim()) {
    const q = query.toLowerCase();
    results = results.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        (p.subcategory && String(p.subcategory).toLowerCase().includes(q))
    );
  }

  if (category && category !== "all" && category !== "") {
    results = results.filter((p) => p.category === category);
  }

  results = results.filter((p) => p.price >= minPrice && p.price <= maxPrice);

  if (platforms && platforms.length > 0) {
    results = results.filter((p) => platforms.includes(p.platform));
  }

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

  const bestOverallId = results.length > 0 ? results.find((p) => p.is_best_overall)?.id || results[0].id : null;
  return { results, bestOverallId, count: results.length };
};

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
      upgradeReason: `Unlocks ${up.title} with higher rating (${up.rating}★) and +${up.best_overall_score - product.best_overall_score} AI score for ₹${Number(up.price - product.price).toLocaleString("en-IN")} more.`,
    }));

  return { currentProduct: product, upgradedOptions };
};

export const CATEGORY_DEFINITIONS = [
  {
    id: "electronics",
    label: "Audio & Electronics",
    shortLabel: "Electronics",
    tagline: "Active Noise Cancelling, TWS Earbuds, Smartphones & Computing",
    coverImage: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80",
    badge: "Up to 45% Off",
    subcategories: ["All", "Headphones", "Earbuds", "Smartphones", "Laptops", "Gaming"],
    quadrantPreviews: [
      { title: "Sony WH-1000XM5", price: "₹24,990", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&auto=format&fit=crop&q=80" },
      { title: "AirPods Pro 2", price: "₹19,900", image: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=400&auto=format&fit=crop&q=80" },
      { title: "MacBook Air M2", price: "₹94,990", image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&auto=format&fit=crop&q=80" },
      { title: "Galaxy S24 Ultra", price: "₹1,19,999", image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&auto=format&fit=crop&q=80" },
    ],
  },
  {
    id: "footwear",
    label: "Athletic & Footwear",
    shortLabel: "Footwear",
    tagline: "Performance Road Runners, Street Classics & All-Terrain Boots",
    coverImage: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop&q=80",
    badge: "Up to 50% Off",
    subcategories: ["All", "Running", "Sneakers", "Boots", "Clogs", "Walking"],
    quadrantPreviews: [
      { title: "Nike Air Max 270", price: "₹7,795", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&auto=format&fit=crop&q=80" },
      { title: "Adidas Ultraboost", price: "₹11,999", image: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=400&auto=format&fit=crop&q=80" },
      { title: "ASICS Gel-Kayano 30", price: "₹12,499", image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400&auto=format&fit=crop&q=80" },
      { title: "Woodland Leather Boots", price: "₹3,995", image: "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?w=400&auto=format&fit=crop&q=80" },
    ],
  },
  {
    id: "fashion",
    label: "Denim & Apparel",
    shortLabel: "Fashion",
    tagline: "Slim Fit Indigo Jeans, Luxury Polos & Wrinkle-Free Formals",
    coverImage: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800&auto=format&fit=crop&q=80",
    badge: "Min 40% Off",
    subcategories: ["All", "Denim", "Polo T-Shirts", "Sunglasses", "Biker Jackets", "Ethnic Kurtas", "Formal Trousers"],
    quadrantPreviews: [
      { title: "Levi's 511 Slim", price: "₹1,999", image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&auto=format&fit=crop&q=80" },
      { title: "Tommy Hilfiger Polo", price: "₹2,499", image: "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?w=400&auto=format&fit=crop&q=80" },
      { title: "Ray-Ban Aviator", price: "₹6,890", image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400&auto=format&fit=crop&q=80" },
      { title: "Zara Leather Jacket", price: "₹5,990", image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&auto=format&fit=crop&q=80" },
    ],
  },
  {
    id: "home",
    label: "Smart Home & Living",
    shortLabel: "Home & Living",
    tagline: "BLDC Smart Ceiling Fans, Rapid Air Fryers & Espresso Machines",
    coverImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop&q=80",
    badge: "Up to 50% Off",
    subcategories: ["All", "Ceiling Fans", "Air Fryers", "Vacuums", "Coffee Makers", "Mixer Grinders", "Air Purifiers"],
    quadrantPreviews: [
      { title: "Atomberg Ceiling Fan", price: "₹3,699", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&auto=format&fit=crop&q=80" },
      { title: "Philips Air Fryer XL", price: "₹7,999", image: "https://images.unsplash.com/photo-1584992236310-6edddc08acff?w=400&auto=format&fit=crop&q=80" },
      { title: "Dyson V8 Vacuum", price: "₹28,990", image: "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=400&auto=format&fit=crop&q=80" },
      { title: "Nespresso Coffee Maker", price: "₹14,999", image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400&auto=format&fit=crop&q=80" },
    ],
  },
];

export default mockProducts;
