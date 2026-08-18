import React, { useState, useEffect } from "react";
import { X, Star, Sparkles, ExternalLink, Bell, ArrowRight, ShieldCheck, Check, TrendingUp } from "lucide-react";
import { getProductById, getProductAlternatives, exploreBudget, createPriceAlert } from "../../services/api";

export default function ProductModal({ product, onClose, onSelectAlternative }) {
  const [productDetail, setProductDetail] = useState(null);
  const [allVariants, setAllVariants] = useState([]);
  const [alternatives, setAlternatives] = useState({ cheaper: [], similar: [], premium: [] });
  const [extraBudget, setExtraBudget] = useState("3000");
  const [budgetUpgrades, setBudgetUpgrades] = useState([]);
  const [targetPrice, setTargetPrice] = useState("");
  const [alertSuccess, setAlertSuccess] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!product) return;
    setLoading(true);
    setAlertSuccess(false);

    const productId = product.product_id || product.id;

    // Fetch full product details + variants + alternatives
    Promise.all([
      getProductById(productId),
      getProductAlternatives(productId),
    ])
      .then(([prodData, altData]) => {
        if (prodData?.product) {
          setProductDetail(prodData.product);
          setAllVariants(prodData.allPlatformVariants || [prodData.product]);
          setTargetPrice(Math.round(prodData.product.price * 0.9).toString());
        } else {
          setProductDetail(product);
          setAllVariants([product]);
          setTargetPrice(Math.round(product.price * 0.9).toString());
        }

        if (altData) {
          setAlternatives(altData);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load product detail:", err);
        setProductDetail(product);
        setAllVariants([product]);
        setLoading(false);
      });
  }, [product]);

  const handleBudgetExplore = async () => {
    if (!productDetail) return;
    try {
      const res = await exploreBudget(productDetail.product_id || productDetail.id, Number(extraBudget));
      if (res?.upgradedOptions) {
        setBudgetUpgrades(res.upgradedOptions);
      }
    } catch (err) {
      console.error("Budget explore error:", err);
    }
  };

  const handleSetAlert = async (e) => {
    e.preventDefault();
    if (!productDetail || !targetPrice) return;
    try {
      await createPriceAlert({
        productId: productDetail.product_id || productDetail.id,
        productTitle: productDetail.title,
        currentPrice: productDetail.price,
        targetPrice: Number(targetPrice),
        platform: productDetail.platform,
      });
      setAlertSuccess(true);
    } catch (err) {
      console.error("Price alert error:", err);
    }
  };

  if (!product) return null;

  const current = productDetail || product;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        backdropFilter: "blur(6px)",
        zIndex: 250,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "960px",
          maxHeight: "90vh",
          backgroundColor: "var(--color-canvas)",
          borderRadius: "var(--radius-none)",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          boxShadow: "0 20px 50px rgba(0, 0, 0, 0.3)",
        }}
      >
        {/* Header Strip */}
        <div
          style={{
            padding: "16px 24px",
            borderBottom: "1px solid var(--color-hairline)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ fontSize: "12px", fontWeight: 700, textTransform: "uppercase", color: "var(--color-mute)" }}>
              Cross-Platform Product Comparison
            </span>
          </div>
          <button onClick={onClose} className="btn-icon-circular">
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div style={{ flex: 1, overflowY: "auto", padding: "32px 24px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "36px",
            }}
          >
            {/* Left: Product Media Studio */}
            <div>
              <div
                style={{
                  width: "100%",
                  aspectRatio: "1/1",
                  backgroundColor: "var(--color-soft-cloud)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                }}
              >
                <img
                  src={current.image_url}
                  alt={current.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>

              {/* AI Sentiment Bar */}
              <div
                style={{
                  marginTop: "16px",
                  padding: "12px 16px",
                  backgroundColor: "var(--color-soft-cloud)",
                  borderRadius: "var(--radius-sm)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span
                    style={{
                      width: "10px",
                      height: "10px",
                      borderRadius: "50%",
                      backgroundColor: current.sentiment === "green" ? "var(--color-success)" : current.sentiment === "yellow" ? "#f59e0b" : "var(--color-sale)",
                    }}
                  />
                  <span style={{ fontSize: "13px", fontWeight: 600 }}>
                    AI Sentiment: {current.sentiment === "green" ? "Highly Positive (92%+ Satisfied)" : current.sentiment === "yellow" ? "Mixed Reviews" : "Needs Review"}
                  </span>
                </div>
                <span style={{ fontSize: "12px", fontWeight: 700, color: "var(--color-mute)" }}>
                  {current.rating}★ ({current.review_count?.toLocaleString("en-IN")})
                </span>
              </div>
            </div>

            {/* Right: Pricing, Multi-Platform Listings, Specs */}
            <div>
              <span style={{ fontSize: "13px", fontWeight: 600, color: "var(--color-mute)", textTransform: "uppercase" }}>
                {current.brand} · {current.category}
              </span>
              <h2 style={{ fontSize: "22px", fontWeight: 700, color: "var(--color-ink)", marginTop: "4px", lineHeight: 1.3 }}>
                {current.title}
              </h2>

              {/* Price Callout */}
              <div style={{ display: "flex", alignItems: "baseline", gap: "12px", marginTop: "12px" }}>
                <span style={{ fontSize: "28px", fontWeight: 800, color: "var(--color-ink)" }}>
                  ₹{Number(current.price).toLocaleString("en-IN")}
                </span>
                {current.original_price && (
                  <span style={{ fontSize: "16px", color: "var(--color-mute)", textDecoration: "line-through" }}>
                    ₹{Number(current.original_price).toLocaleString("en-IN")}
                  </span>
                )}
                {current.discount_percent > 0 && (
                  <span style={{ fontSize: "15px", fontWeight: 700, color: "var(--color-sale)" }}>
                    {current.discount_percent}% OFF
                  </span>
                )}
              </div>

              {/* AI Why Buy Verdict */}
              {current.why_buy && (
                <div
                  style={{
                    backgroundColor: "rgba(0, 125, 72, 0.06)",
                    borderLeft: "3px solid var(--color-success)",
                    padding: "10px 14px",
                    margin: "16px 0",
                    fontSize: "13px",
                    color: "var(--color-ink)",
                    lineHeight: 1.4,
                  }}
                >
                  <strong>Why Buy This:</strong> {current.why_buy}
                </div>
              )}

              {/* Multi-Platform Comparison Table */}
              <div style={{ marginTop: "20px" }}>
                <h4 style={{ fontSize: "13px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.5px", color: "var(--color-ink)", marginBottom: "8px" }}>
                  Multi-Platform Real-Time Comparison:
                </h4>

                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  {allVariants.map((v, i) => (
                    <div
                      key={i}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "10px 14px",
                        backgroundColor: v.platform === current.platform ? "var(--color-soft-cloud)" : "var(--color-canvas)",
                        border: "1px solid var(--color-hairline)",
                        borderRadius: "var(--radius-sm)",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <span style={{ fontSize: "13px", fontWeight: 700, textTransform: "uppercase" }}>
                          {v.platform}
                        </span>
                        <span style={{ fontSize: "12px", color: "var(--color-mute)" }}>
                          ({v.delivery_estimate || "2-3 days"})
                        </span>
                      </div>

                      <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                        <span style={{ fontSize: "15px", fontWeight: 700, color: "var(--color-ink)" }}>
                          ₹{Number(v.price).toLocaleString("en-IN")}
                        </span>
                        <a
                          href={v.product_url || (v.platform === "amazon" 
                            ? `https://www.amazon.in/s?k=${encodeURIComponent(product.product_name || product.name || "")}`
                            : v.platform === "flipkart"
                            ? `https://www.flipkart.com/search?q=${encodeURIComponent(product.product_name || product.name || "")}`
                            : `https://www.myntra.com/search?rawQuery=${encodeURIComponent(product.product_name || product.name || "")}`)}
                          target="_blank"
                          rel="noreferrer"
                          className="btn-primary"
                          style={{
                            height: "32px",
                            padding: "0 14px",
                            fontSize: "12px",
                            gap: "4px",
                          }}
                        >
                          <span>Buy</span>
                          <ExternalLink size={12} />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price Alert Form */}
              <div
                style={{
                  marginTop: "24px",
                  padding: "16px",
                  backgroundColor: "var(--color-soft-cloud)",
                  borderRadius: "var(--radius-sm)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                  <Bell size={16} />
                  <span style={{ fontSize: "13px", fontWeight: 700 }}>Set Price Drop Alert</span>
                </div>

                {alertSuccess ? (
                  <div style={{ color: "var(--color-success)", fontSize: "13px", display: "flex", alignItems: "center", gap: "6px" }}>
                    <Check size={16} /> Price alert set! You will be notified if the price hits ₹{targetPrice}.
                  </div>
                ) : (
                  <form onSubmit={handleSetAlert} style={{ display: "flex", gap: "8px" }}>
                    <input
                      type="number"
                      placeholder="Target price in ₹"
                      value={targetPrice}
                      onChange={(e) => setTargetPrice(e.target.value)}
                      style={{
                        flex: 1,
                        padding: "8px 12px",
                        fontSize: "14px",
                        border: "1px solid var(--color-hairline)",
                        borderRadius: "var(--radius-sm)",
                        backgroundColor: "var(--color-canvas)",
                        fontFamily: "var(--font-ui)",
                      }}
                    />
                    <button type="submit" className="btn-primary" style={{ height: "38px", padding: "0 18px", fontSize: "13px" }}>
                      Track
                    </button>
                  </form>
                )}
              </div>

              {/* Budget Explorer Widget */}
              <div style={{ marginTop: "24px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                  <TrendingUp size={16} color="var(--color-ink)" />
                  <span style={{ fontSize: "13px", fontWeight: 700, textTransform: "uppercase" }}>
                    Budget Explorer (What unlocks with more budget?)
                  </span>
                </div>

                <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                  <span style={{ fontSize: "13px" }}>+ ₹</span>
                  <select
                    value={extraBudget}
                    onChange={(e) => setExtraBudget(e.target.value)}
                    style={{
                      padding: "6px 12px",
                      borderRadius: "var(--radius-sm)",
                      border: "1px solid var(--color-hairline)",
                      fontSize: "13px",
                      fontWeight: 600,
                    }}
                  >
                    <option value="1000">1,000</option>
                    <option value="2000">2,000</option>
                    <option value="3000">3,000</option>
                    <option value="5000">5,000</option>
                    <option value="10000">10,000</option>
                  </select>
                  <button onClick={handleBudgetExplore} className="btn-secondary" style={{ height: "34px", padding: "0 16px", fontSize: "12px" }}>
                    Explore Upgrades
                  </button>
                </div>

                {budgetUpgrades.length > 0 && (
                  <div style={{ marginTop: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
                    {budgetUpgrades.map((up, i) => (
                      <div
                        key={i}
                        onClick={() => {
                          if (onSelectAlternative) onSelectAlternative(up);
                        }}
                        style={{
                          padding: "8px 12px",
                          backgroundColor: "var(--color-soft-cloud)",
                          borderRadius: "4px",
                          fontSize: "12px",
                          cursor: "pointer",
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <div>
                          <strong>{up.title}</strong> (₹{Number(up.price).toLocaleString("en-IN")})
                          <div style={{ color: "var(--color-mute)" }}>{up.upgradeReason}</div>
                        </div>
                        <ArrowRight size={14} />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
