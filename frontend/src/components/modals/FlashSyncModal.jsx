import React, { useState, useEffect } from "react";
import { 
  X, 
  Zap, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  RefreshCw, 
  ExternalLink, 
  Package, 
  ShoppingBag,
  Plus
} from "lucide-react";
import PlatformBadge from "../products/PlatformBadge";
import { 
  getFlashAccount, 
  connectFlashAccount, 
  disconnectFlashAccount, 
  getFlashOrders, 
  addFlashReceipt 
} from "../../services/flashService";

export default function FlashSyncModal({ isOpen, onClose, onSyncComplete }) {
  const [account, setAccount] = useState(null);
  const [handleInput, setHandleInput] = useState("");
  const [apiKeyInput, setApiKeyInput] = useState("");
  const [orders, setOrders] = useState([]);
  const [isSyncing, setIsSyncing] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newPrice, setNewPrice] = useState("");
  const [newPlatform, setNewPlatform] = useState("amazon");

  useEffect(() => {
    if (isOpen) {
      const acc = getFlashAccount();
      setAccount(acc);
      if (acc) {
        setHandleInput(acc.handle);
      }
      setOrders(getFlashOrders());
    }
  }, [isOpen]);

  const handleConnect = (e) => {
    e.preventDefault();
    if (!handleInput.trim()) return;
    setIsSyncing(true);
    setTimeout(() => {
      const acc = connectFlashAccount({ handle: handleInput.trim(), apiKey: apiKeyInput.trim() });
      setAccount(acc);
      setOrders(getFlashOrders());
      setIsSyncing(false);
      if (onSyncComplete) onSyncComplete(acc);
    }, 600);
  };

  const handleDisconnect = () => {
    disconnectFlashAccount();
    setAccount(null);
    setOrders([]);
    if (onSyncComplete) onSyncComplete(null);
  };

  const handleManualAddReceipt = (e) => {
    e.preventDefault();
    if (!newTitle.trim() || !newPrice) return;
    const item = addFlashReceipt({
      productTitle: newTitle.trim(),
      brand: newTitle.split(" ")[0] || "Brand",
      category: "electronics",
      price: Number(newPrice),
      originalPrice: Math.round(Number(newPrice) * 1.25),
      platform: newPlatform,
    });
    setOrders(getFlashOrders());
    setNewTitle("");
    setNewPrice("");
    setShowAddForm(false);
  };

  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(0, 0, 0, 0.65)",
        backdropFilter: "blur(5px)",
        zIndex: 99999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "16px",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: "100%",
          maxWidth: "600px",
          backgroundColor: "var(--color-canvas)",
          borderRadius: "var(--radius-none)",
          border: "1px solid var(--color-hairline)",
          boxShadow: "0 24px 60px rgba(0,0,0,0.25)",
          display: "flex",
          flexDirection: "column",
          maxHeight: "90vh",
          overflow: "hidden",
        }}
      >
        {/* Header */}
        <div
          style={{
            padding: "20px 24px",
            borderBottom: "1px solid var(--color-hairline)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "var(--color-ink)",
            color: "var(--color-canvas)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div
              style={{
                width: "34px",
                height: "34px",
                backgroundColor: "#f59e0b",
                color: "#111111",
                borderRadius: "var(--radius-sm)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 900,
                fontSize: "18px",
              }}
            >
              ⚡
            </div>
            <div>
              <h3 style={{ fontSize: "16px", fontWeight: 700, margin: 0 }}>Flash.co Shopping Intelligence</h3>
              <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.75)" }}>
                Auto-sync digital order receipts across Amazon, Flipkart & Myntra
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            style={{
              background: "rgba(255,255,255,0.15)",
              color: "#ffffff",
              border: "none",
              padding: "6px",
              borderRadius: "50%",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Body */}
        <div style={{ flex: 1, overflowY: "auto", padding: "24px" }}>
          {!account ? (
            /* Connect Form */
            <div>
              <div style={{ marginBottom: "20px" }}>
                <h4 style={{ fontSize: "16px", fontWeight: 700, marginBottom: "6px", color: "var(--color-ink)" }}>
                  Connect Your @flash.co Shopping Handle
                </h4>
                <p style={{ fontSize: "13px", color: "var(--color-mute)", lineHeight: 1.45 }}>
                  Flash.co parses your real-time e-commerce order receipts from Amazon, Flipkart, and Myntra to provide instant price drop alerts, warranty aggregation, and AI-personalized recommendations.
                </p>
              </div>

              <form onSubmit={handleConnect} style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                <div>
                  <label style={{ fontSize: "12px", fontWeight: 700, textTransform: "uppercase", display: "block", marginBottom: "6px", color: "var(--color-ink)" }}>
                    Flash.co Shopping Email:
                  </label>
                  <div style={{ position: "relative" }}>
                    <input
                      type="text"
                      placeholder="username (or username@flash.co)"
                      value={handleInput}
                      onChange={(e) => setHandleInput(e.target.value)}
                      required
                      style={{
                        width: "100%",
                        padding: "12px 14px",
                        fontSize: "14px",
                        fontWeight: 600,
                        border: "1px solid var(--color-hairline)",
                        borderRadius: "var(--radius-none)",
                        backgroundColor: "var(--color-soft-cloud)",
                        outline: "none",
                        fontFamily: "var(--font-ui)",
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ fontSize: "12px", fontWeight: 700, textTransform: "uppercase", display: "block", marginBottom: "6px", color: "var(--color-ink)" }}>
                    Flash API Key / Access Token (Optional):
                  </label>
                  <input
                    type="password"
                    placeholder="flash_live_sec_..."
                    value={apiKeyInput}
                    onChange={(e) => setApiKeyInput(e.target.value)}
                    style={{
                      width: "100%",
                      padding: "12px 14px",
                      fontSize: "14px",
                      border: "1px solid var(--color-hairline)",
                      borderRadius: "var(--radius-none)",
                      backgroundColor: "var(--color-soft-cloud)",
                      outline: "none",
                      fontFamily: "var(--font-ui)",
                    }}
                  />
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "var(--color-success)", fontWeight: 600 }}>
                  <ShieldCheck size={14} /> End-to-end encrypted order inbox sync
                </div>

                <button
                  type="submit"
                  disabled={isSyncing}
                  className="btn-primary"
                  style={{
                    height: "44px",
                    marginTop: "8px",
                    fontSize: "14px",
                    fontWeight: 700,
                    gap: "8px",
                    justifyContent: "center",
                  }}
                >
                  <Zap size={16} />
                  <span>{isSyncing ? "Connecting to Flash.co..." : "Connect Flash.co & Sync Receipts"}</span>
                </button>
              </form>
            </div>
          ) : (
            /* Connected Dashboard & Receipts List */
            <div>
              {/* Account Status Header */}
              <div
                style={{
                  backgroundColor: "rgba(16, 185, 129, 0.08)",
                  border: "1px solid rgba(16, 185, 129, 0.25)",
                  padding: "14px 18px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "20px",
                  flexWrap: "wrap",
                  gap: "10px",
                }}
              >
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "var(--color-success)", fontWeight: 800, fontSize: "13px" }}>
                    <CheckCircle2 size={16} />
                    <span>CONNECTED TO {account.handle.toUpperCase()}</span>
                  </div>
                  <span style={{ fontSize: "12px", color: "var(--color-mute)" }}>
                    {orders.length} digital receipts synchronized
                  </span>
                </div>

                <button
                  onClick={handleDisconnect}
                  style={{
                    fontSize: "12px",
                    color: "var(--color-sale)",
                    fontWeight: 600,
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    textDecoration: "underline",
                  }}
                >
                  Disconnect
                </button>
              </div>

              {/* Order Receipts Header */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "14px" }}>
                <h4 style={{ fontSize: "14px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.5px", color: "var(--color-ink)", margin: 0 }}>
                  Parsed Order Receipts:
                </h4>
                <button
                  onClick={() => setShowAddForm(!showAddForm)}
                  className="btn-secondary"
                  style={{ height: "32px", padding: "0 12px", fontSize: "12px", gap: "4px" }}
                >
                  <Plus size={13} />
                  <span>Add Receipt</span>
                </button>
              </div>

              {/* Add Custom Receipt Form */}
              {showAddForm && (
                <form
                  onSubmit={handleManualAddReceipt}
                  style={{
                    backgroundColor: "var(--color-soft-cloud)",
                    padding: "14px",
                    marginBottom: "16px",
                    border: "1px solid var(--color-hairline)",
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                  }}
                >
                  <input
                    type="text"
                    placeholder="Product Title (e.g. Apple Watch Series 9)"
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    required
                    style={{ padding: "8px 12px", fontSize: "13px", border: "1px solid var(--color-hairline)" }}
                  />
                  <div style={{ display: "flex", gap: "8px" }}>
                    <input
                      type="number"
                      placeholder="Price in ₹"
                      value={newPrice}
                      onChange={(e) => setNewPrice(e.target.value)}
                      required
                      style={{ flex: 1, padding: "8px 12px", fontSize: "13px", border: "1px solid var(--color-hairline)" }}
                    />
                    <select
                      value={newPlatform}
                      onChange={(e) => setNewPlatform(e.target.value)}
                      style={{ padding: "8px 12px", fontSize: "13px", border: "1px solid var(--color-hairline)" }}
                    >
                      <option value="amazon">Amazon</option>
                      <option value="flipkart">Flipkart</option>
                      <option value="myntra">Myntra</option>
                    </select>
                  </div>
                  <button type="submit" className="btn-primary" style={{ height: "36px", fontSize: "13px" }}>
                    Save to Flash.co Inbox
                  </button>
                </form>
              )}

              {/* Receipts Stream */}
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {orders.map((ord, idx) => (
                  <div
                    key={ord.orderId || idx}
                    style={{
                      padding: "14px",
                      backgroundColor: "var(--color-canvas)",
                      border: "1px solid var(--color-hairline)",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: "12px",
                      flexWrap: "wrap",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                      <div
                        style={{
                          width: "44px",
                          height: "44px",
                          backgroundColor: "var(--color-soft-cloud)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontWeight: 700,
                          fontSize: "11px",
                          color: "var(--color-ink)",
                        }}
                      >
                        <Package size={20} />
                      </div>
                      <div>
                        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                          <PlatformBadge platform={ord.platform} size="sm" />
                          <span style={{ fontSize: "11px", color: "var(--color-mute)", fontWeight: 600 }}>
                            {ord.orderId} · {ord.orderDate}
                          </span>
                        </div>
                        <h5 style={{ fontSize: "14px", fontWeight: 700, margin: "3px 0", color: "var(--color-ink)" }}>
                          {ord.productTitle}
                        </h5>
                        <div style={{ fontSize: "12px", color: "var(--color-success)", fontWeight: 600 }}>
                          Status: {ord.status}
                        </div>
                      </div>
                    </div>

                    <div style={{ textAlign: "right" }}>
                      <div style={{ fontSize: "16px", fontWeight: 800, color: "var(--color-ink)" }}>
                        ₹{Number(ord.price).toLocaleString("en-IN")}
                      </div>
                      {ord.originalPrice && ord.originalPrice > ord.price && (
                        <div style={{ fontSize: "11px", color: "var(--color-mute)", textDecoration: "line-through" }}>
                          MRP: ₹{Number(ord.originalPrice).toLocaleString("en-IN")}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div
          style={{
            padding: "16px 24px",
            borderTop: "1px solid var(--color-hairline)",
            backgroundColor: "var(--color-soft-cloud)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span style={{ fontSize: "12px", color: "var(--color-mute)" }}>
            ⚡ Flash.co Digital Receipts Sync
          </span>
          <button
            onClick={onClose}
            className="btn-primary"
            style={{ height: "38px", padding: "0 20px", fontSize: "13px" }}
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
}
