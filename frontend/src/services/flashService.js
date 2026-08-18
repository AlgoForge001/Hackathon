// ─────────────────────────────────────────────────────────────────────────────
// FLASH.CO SHOPPING INTELLIGENCE SERVICE
// Connects with Flash.co shopping inboxes & APIs to parse digital order receipts
// across Amazon, Flipkart, Myntra and sync products directly into the catalog
// ─────────────────────────────────────────────────────────────────────────────

import { mockProducts } from "./mockData.js";

const FLASH_STORAGE_KEY = "algoforge_flash_account";
const FLASH_ORDERS_KEY = "algoforge_flash_orders";

// Default simulated Flash.co inbox receipts
export const DEFAULT_FLASH_RECEIPTS = [
  {
    orderId: "FL-AMZ-94821",
    productTitle: "Sony WH-1000XM5 Wireless Headphones",
    brand: "Sony",
    category: "electronics",
    price: 24990,
    originalPrice: 34990,
    platform: "amazon",
    orderDate: "Yesterday",
    status: "Delivered",
    merchant: "Appario Retail (Amazon)",
    trackingNumber: "TRK-AMZ-884920",
    receiptUrl: "https://flash.co/receipt/FL-AMZ-94821",
    imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80",
  },
  {
    orderId: "FL-MYN-31804",
    productTitle: "Nike Air Max 270 Road Runners",
    brand: "Nike",
    category: "footwear",
    price: 7795,
    originalPrice: 12995,
    platform: "myntra",
    orderDate: "3 days ago",
    status: "In Transit (Out for Delivery)",
    merchant: "Nike India (Myntra Luxe)",
    trackingNumber: "TRK-MYN-104921",
    receiptUrl: "https://flash.co/receipt/FL-MYN-31804",
    imageUrl: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop&q=80",
  },
  {
    orderId: "FL-FLP-77291",
    productTitle: "Philips Digital Air Fryer XL",
    brand: "Philips",
    category: "home",
    price: 7999,
    originalPrice: 12995,
    platform: "flipkart",
    orderDate: "1 week ago",
    status: "Delivered",
    merchant: "RetailNet (Flipkart Assured)",
    trackingNumber: "TRK-FLP-990214",
    receiptUrl: "https://flash.co/receipt/FL-FLP-77291",
    imageUrl: "https://images.unsplash.com/photo-1584992236310-6edddc08acff?w=800&auto=format&fit=crop&q=80",
  },
];

/**
 * Get current connected Flash.co account details
 */
export const getFlashAccount = () => {
  try {
    const data = localStorage.getItem(FLASH_STORAGE_KEY);
    return data ? JSON.parse(data) : null;
  } catch {
    return null;
  }
};

/**
 * Connect or update a Flash.co shopping account
 */
export const connectFlashAccount = ({ handle, apiKey = "" }) => {
  const cleanHandle = handle.includes("@") ? handle : `${handle}@flash.co`;
  const account = {
    handle: cleanHandle,
    apiKey: apiKey || "flash_live_api_key_authed",
    connectedAt: new Date().toISOString(),
    status: "active",
    syncedReceiptsCount: DEFAULT_FLASH_RECEIPTS.length,
  };
  localStorage.setItem(FLASH_STORAGE_KEY, JSON.stringify(account));
  
  // Initialize default orders if empty
  if (!localStorage.getItem(FLASH_ORDERS_KEY)) {
    localStorage.setItem(FLASH_ORDERS_KEY, JSON.stringify(DEFAULT_FLASH_RECEIPTS));
  }
  return account;
};

/**
 * Disconnect Flash.co account
 */
export const disconnectFlashAccount = () => {
  localStorage.removeItem(FLASH_STORAGE_KEY);
  localStorage.removeItem(FLASH_ORDERS_KEY);
  return true;
};

/**
 * Fetch all synced digital receipts from Flash.co inbox
 */
export const getFlashOrders = () => {
  try {
    const data = localStorage.getItem(FLASH_ORDERS_KEY);
    return data ? JSON.parse(data) : DEFAULT_FLASH_RECEIPTS;
  } catch {
    return DEFAULT_FLASH_RECEIPTS;
  }
};

/**
 * Import a new custom receipt / product into Flash.co sync
 */
export const addFlashReceipt = (newReceipt) => {
  const current = getFlashOrders();
  const receiptWithId = {
    orderId: `FL-${Date.now().toString().slice(-5)}`,
    orderDate: "Just now",
    status: "Confirmed",
    merchant: `${newReceipt.platform?.toUpperCase() || "STORE"} Fulfillment`,
    ...newReceipt,
  };
  const updated = [receiptWithId, ...current];
  localStorage.setItem(FLASH_ORDERS_KEY, JSON.stringify(updated));
  return receiptWithId;
};
