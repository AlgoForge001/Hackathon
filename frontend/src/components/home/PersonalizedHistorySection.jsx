import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { 
  Sparkles, 
  RefreshCw, 
  ShoppingBag, 
  Star, 
  ShieldCheck, 
  ArrowRight, 
  ExternalLink, 
  Clock, 
  Zap, 
  CheckCircle2, 
  UserCheck, 
  Tag 
} from "lucide-react";
import PlatformBadge from "../products/PlatformBadge";
import SentimentBadge from "../products/SentimentBadge";
import { 
  USER_PERSONAS, 
  getGeminiPersonalizedRecommendations 
} from "../../services/geminiRecommendationService";
import { getFlashAccount, getFlashOrders } from "../../services/flashService";
import { getCategoryFallbackImage } from "../../services/mockData";

export default function PersonalizedHistorySection({ onSelectProduct }) {
  const [selectedPersonaId, setSelectedPersonaId] = useState("tech_audiophile");
  const [flashAccount, setFlashAccount] = useState(null);
  const [loading, setLoading] = useState(true);
  const [recommendationsData, setRecommendationsData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setFlashAccount(getFlashAccount());
  }, []);

  const fetchRecommendations = (personaId) => {
    setLoading(true);

    if (personaId === "flash_live_sync") {
      const flashOrders = getFlashOrders();
      const flashPersona = {
        id: "flash_live_sync",
        name: `Flash.co Verified Orders (${flashAccount ? flashAccount.handle : "Live Inbox"})`,
        tagline: "Live digital order receipts parsed from Amazon, Flipkart & Myntra",
        history: {
          pastOrders: flashOrders.map((o) => ({
            title: o.productTitle,
            brand: o.brand || "Top Brand",
            price: o.price,
            platform: o.platform,
            date: o.orderDate || "Recent",
          })),
          priceRange: { min: 2000, max: 50000, preferredAvg: 15000 },
          favoriteBrands: [...new Set(flashOrders.map((o) => o.brand).filter(Boolean))],
          favoritePlatforms: [...new Set(flashOrders.map((o) => o.platform).filter(Boolean))],
          interestCategories: ["electronics", "footwear", "home"],
        },
      };

      getGeminiPersonalizedRecommendations(flashPersona)
        .then((data) => {
          setRecommendationsData(data);
          setLoading(false);
        })
        .catch(() => {
          setLoading(false);
        });
      return;
    }

    getGeminiPersonalizedRecommendations(personaId)
      .then((data) => {
        setRecommendationsData(data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchRecommendations(selectedPersonaId);
  }, [selectedPersonaId]);

  let activePersona = USER_PERSONAS.find((p) => p.id === selectedPersonaId);
  if (!activePersona && selectedPersonaId === "flash_live_sync") {
    const flashOrders = getFlashOrders();
    activePersona = {
      id: "flash_live_sync",
      name: `Flash.co Verified Orders (${flashAccount ? flashAccount.handle : "Live Inbox"})`,
      tagline: "Live digital order receipts parsed from Amazon, Flipkart & Myntra",
      history: {
        pastOrders: flashOrders.map((o) => ({
          title: o.productTitle,
          brand: o.brand || "Top Brand",
          price: o.price,
          platform: o.platform,
          date: o.orderDate || "Recent",
        })),
        priceRange: { min: 2000, max: 50000, preferredAvg: 15000 },
        favoriteBrands: [...new Set(flashOrders.map((o) => o.brand).filter(Boolean))],
        favoritePlatforms: [...new Set(flashOrders.map((o) => o.platform).filter(Boolean))],
        interestCategories: ["electronics", "footwear", "home"],
      },
    };
  }
  if (!activePersona) activePersona = USER_PERSONAS[0];

  return (
    <section 
      id="personalized-recommendations" 
      className="section-rhythm" 
      style={{ 
        padding: "56px 0", 
        backgroundColor: "var(--color-canvas)",
        borderTop: "1px solid var(--color-hairline)",
        borderBottom: "1px solid var(--color-hairline)"
      }}
    >
      <div className="container">
        {/* ─── 1. SECTION HEADER WITH GEMINI AI BADGE ─────────────── */}
        <div 
          style={{ 
            display: "flex", 
            justifyContent: "space-between", 
            alignItems: "flex-end", 
            flexWrap: "wrap", 
            gap: "16px", 
            marginBottom: "24px" 
          }}
        >
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
              <span
                style={{
                  backgroundColor: "rgba(16, 185, 129, 0.1)",
                  color: "var(--color-success)",
                  fontSize: "11px",
                  fontWeight: 800,
                  textTransform: "uppercase",
                  padding: "4px 10px",
                  borderRadius: "var(--radius-sm)",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "5px",
                  letterSpacing: "0.5px",
                  border: "1px solid rgba(16, 185, 129, 0.25)"
                }}
              >
                <Sparkles size={13} color="var(--color-success)" />
                Powered by Google Gemini AI & Flash.co
              </span>
              <span style={{ fontSize: "12px", color: "var(--color-mute)", fontWeight: 500 }}>
                • Purchase History & Cross-Platform Receipts
              </span>
            </div>

            <h2 className="heading-xl" style={{ marginTop: "2px" }}>
              RECOMMENDED FOR YOU · BASED ON YOUR SHOPPING HISTORY
            </h2>
            <p style={{ fontSize: "14px", color: "var(--color-mute)", marginTop: "4px", maxWidth: "680px" }}>
              Gemini & Flash.co analyze your verified order receipts across Amazon, Flipkart, and Myntra to predict your highest-value next upgrade.
            </p>
          </div>

          {/* Regenerate AI Recommendations Button */}
          <button
            onClick={() => fetchRecommendations(selectedPersonaId)}
            disabled={loading}
            className="btn-secondary"
            style={{
              height: "42px",
              padding: "0 18px",
              fontSize: "13px",
              gap: "8px",
              borderRadius: "var(--radius-lg)",
            }}
          >
            <RefreshCw size={14} className={loading ? "animate-spin" : ""} style={{ animation: loading ? "spin 1s linear infinite" : "none" }} />
            <span>{loading ? "Synthesizing with Gemini..." : "Re-Analyze with Gemini AI"}</span>
          </button>
        </div>

        {/* ─── 2. INTERACTIVE SHOPPING PROFILE & HISTORY CONTROL ──── */}
        <div
          style={{
            backgroundColor: "var(--color-soft-cloud)",
            border: "1px solid var(--color-hairline)",
            padding: "20px 24px",
            marginBottom: "28px",
          }}
        >
          {/* Persona Switcher Chips */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap", marginBottom: "16px" }}>
            <span style={{ fontSize: "12px", fontWeight: 700, textTransform: "uppercase", color: "var(--color-mute)", letterSpacing: "0.5px" }}>
              Shopping Profile:
            </span>

            {/* ⚡ Flash.co Live Sync Chip */}
            <button
              onClick={() => setSelectedPersonaId("flash_live_sync")}
              className={`filter-chip ${selectedPersonaId === "flash_live_sync" ? "active" : ""}`}
              style={{
                fontSize: "13px",
                fontWeight: 700,
                cursor: "pointer",
                padding: "6px 14px",
                backgroundColor: selectedPersonaId === "flash_live_sync" ? "var(--color-ink)" : "rgba(245, 158, 11, 0.12)",
                color: selectedPersonaId === "flash_live_sync" ? "var(--color-canvas)" : "#d97706",
                border: selectedPersonaId === "flash_live_sync" ? "1px solid var(--color-ink)" : "1px solid rgba(245, 158, 11, 0.35)",
              }}
            >
              <span>⚡</span>
              <span>Flash.co Live Receipts ({flashAccount ? flashAccount.handle : "Sync"})</span>
            </button>

            {USER_PERSONAS.map((p) => {
              const isActive = selectedPersonaId === p.id;
              return (
                <button
                  key={p.id}
                  onClick={() => setSelectedPersonaId(p.id)}
                  className={`filter-chip ${isActive ? "active" : ""}`}
                  style={{
                    fontSize: "13px",
                    fontWeight: 600,
                    cursor: "pointer",
                    padding: "6px 14px"
                  }}
                >
                  <UserCheck size={13} />
                  <span>{p.name}</span>
                </button>
              );
            })}
          </div>

          {/* Active History Profile Details */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "16px",
              paddingTop: "14px",
              borderTop: "1px solid var(--color-hairline-soft)",
              fontSize: "13px",
            }}
          >
            {/* Past Orders */}
            <div>
              <span style={{ fontSize: "11px", fontWeight: 700, color: "var(--color-mute)", textTransform: "uppercase", display: "block", marginBottom: "6px" }}>
                Recent Order Receipts:
              </span>
              <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                {activePersona.history.pastOrders.map((order, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", color: "var(--color-ink)", fontWeight: 500 }}>
                    <span>• {order.title}</span>
                    <span style={{ color: "var(--color-mute)", fontSize: "12px" }}>
                      ₹{order.price.toLocaleString("en-IN")} ({order.platform.toUpperCase()})
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Budget & Brand Affinity */}
            <div>
              <span style={{ fontSize: "11px", fontWeight: 700, color: "var(--color-mute)", textTransform: "uppercase", display: "block", marginBottom: "6px" }}>
                Spending & Brand Affinity:
              </span>
              <div style={{ color: "var(--color-ink)" }}>
                <div><strong>Budget Bracket:</strong> ₹{activePersona.history.priceRange.min.toLocaleString("en-IN")} – ₹{activePersona.history.priceRange.max.toLocaleString("en-IN")}</div>
                <div style={{ marginTop: "4px" }}>
                  <strong>Favorite Brands:</strong> {activePersona.history.favoriteBrands.join(", ") || "Top Brands"}
                </div>
              </div>
            </div>

            {/* Preferred Platforms */}
            <div>
              <span style={{ fontSize: "11px", fontWeight: 700, color: "var(--color-mute)", textTransform: "uppercase", display: "block", marginBottom: "6px" }}>
                Marketplace Receipts Verified:
              </span>
              <div style={{ display: "flex", gap: "8px", marginTop: "4px", flexWrap: "wrap" }}>
                {(activePersona.history.favoritePlatforms.length > 0 ? activePersona.history.favoritePlatforms : ["amazon", "flipkart", "myntra"]).map((plat) => (
                  <PlatformBadge key={plat} platform={plat} size="sm" />
                ))}
              </div>
              <div style={{ fontSize: "11px", color: "var(--color-success)", fontWeight: 600, marginTop: "8px", display: "flex", alignItems: "center", gap: "4px" }}>
                <CheckCircle2 size={13} /> Flash.co digital receipts verified
              </div>
            </div>
          </div>
        </div>

        {/* ─── 3. GEMINI AI PERSONA SYNTHESIS INSIGHT BOX ────────── */}
        {recommendationsData?.personaInsight && (
          <div
            style={{
              backgroundColor: "rgba(17, 17, 17, 0.03)",
              borderLeft: "4px solid var(--color-ink)",
              padding: "16px 20px",
              marginBottom: "28px",
              display: "flex",
              alignItems: "flex-start",
              gap: "12px",
            }}
          >
            <div
              style={{
                width: "28px",
                height: "28px",
                borderRadius: "var(--radius-sm)",
                backgroundColor: "var(--color-ink)",
                color: "var(--color-canvas)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                marginTop: "2px",
              }}
            >
              <Sparkles size={14} color="#f59e0b" />
            </div>
            <div>
              <div style={{ fontSize: "12px", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.5px", color: "var(--color-ink)", marginBottom: "3px" }}>
                Personal Shopper Insight:
              </div>
              <p style={{ fontSize: "14px", color: "var(--color-charcoal)", lineHeight: 1.45 }}>
                {recommendationsData.personaInsight}
              </p>
            </div>
          </div>
        )}

        {/* ─── 4. PERSONALIZED PRODUCTS GRID ─────────────────────── */}
        {loading ? (
          <div style={{ textAlign: "center", padding: "64px 20px" }}>
            <div style={{ fontSize: "15px", fontWeight: 600, color: "var(--color-mute)" }}>
              Analyzing Flash.co order receipts and finding best deals...
            </div>
          </div>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "28px 20px",
            }}
          >
            {recommendationsData?.products?.map((product) => {
              const discountPercent = product.discount_percent || product.discountPercent || 0;
              const isSale = discountPercent > 0;
              const originalPrice = product.original_price || product.originalPrice;
              const productId = product.product_id || product.id || product.groupId;

              return (
                <div
                  key={productId}
                  onClick={() => {
                    if (onSelectProduct) onSelectProduct(product);
                    navigate(`/product/${productId}`);
                  }}
                  style={{
                    backgroundColor: "var(--color-canvas)",
                    border: "1px solid var(--color-hairline)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    cursor: "pointer",
                    transition: "transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-4px)";
                    e.currentTarget.style.boxShadow = "0 12px 28px rgba(0,0,0,0.08)";
                    e.currentTarget.style.borderColor = "var(--color-ink)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                    e.currentTarget.style.borderColor = "var(--color-hairline)";
                  }}
                >
                  {/* Media Canvas */}
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      aspectRatio: "1/1",
                      backgroundColor: "var(--color-soft-cloud)",
                      overflow: "hidden",
                      borderBottom: "1px solid var(--color-hairline)",
                    }}
                  >
                    <img
                      src={product.image_url || product.imageUrl || getCategoryFallbackImage(product.category)}
                      alt={product.title}
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                      loading="lazy"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = getCategoryFallbackImage(product.category);
                      }}
                    />

                    {/* AI Match Score Badge */}
                    <div
                      style={{
                        position: "absolute",
                        top: "10px",
                        left: "10px",
                        backgroundColor: "var(--color-ink)",
                        color: "var(--color-canvas)",
                        fontSize: "11px",
                        fontWeight: 800,
                        padding: "3px 8px",
                        borderRadius: "var(--radius-sm)",
                        display: "flex",
                        alignItems: "center",
                        gap: "4px",
                        letterSpacing: "0.5px",
                      }}
                    >
                      <Zap size={11} fill="#f59e0b" color="#f59e0b" />
                      <span>{product.aiMatchScore || 96}% MATCH</span>
                    </div>

                    {/* Platform Badge */}
                    <div style={{ position: "absolute", top: "10px", right: "10px" }}>
                      <PlatformBadge platform={product.platform} size="sm" />
                    </div>

                    {/* Discount Tag */}
                    {isSale && (
                      <div
                        style={{
                          position: "absolute",
                          bottom: "10px",
                          left: "10px",
                          backgroundColor: "var(--color-sale)",
                          color: "#ffffff",
                          fontSize: "11px",
                          fontWeight: 800,
                          padding: "2px 6px",
                          borderRadius: "var(--radius-sm)",
                        }}
                      >
                        {discountPercent}% OFF
                      </div>
                    )}
                  </div>

                  {/* Body & AI Reason */}
                  <div style={{ padding: "16px", display: "flex", flexDirection: "column", flex: 1, justifyContent: "space-between" }}>
                    <div>
                      {/* Brand & Category */}
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "4px" }}>
                        <span style={{ fontSize: "11px", fontWeight: 700, color: "var(--color-mute)", textTransform: "uppercase" }}>
                          {product.brand} · {product.category}
                        </span>
                        {product.rating && (
                          <span style={{ fontSize: "12px", fontWeight: 700, display: "flex", alignItems: "center", gap: "2px" }}>
                            <Star size={12} fill="#f59e0b" color="#f59e0b" />
                            {Number(product.rating).toFixed(1)}
                          </span>
                        )}
                      </div>

                      {/* Title */}
                      <h3
                        style={{
                          fontSize: "14px",
                          fontWeight: 600,
                          color: "var(--color-ink)",
                          lineHeight: 1.35,
                          display: "-webkit-box",
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                          marginBottom: "8px",
                          minHeight: "38px",
                        }}
                      >
                        {product.title}
                      </h3>

                      {/* AI Why Recommended Tag */}
                      <div
                        style={{
                          backgroundColor: "var(--color-soft-cloud)",
                          padding: "8px 10px",
                          borderRadius: "var(--radius-sm)",
                          fontSize: "12px",
                          color: "var(--color-charcoal)",
                          lineHeight: 1.35,
                          marginBottom: "12px",
                          borderLeft: "3px solid var(--color-success)",
                        }}
                      >
                        <strong style={{ color: "var(--color-success)" }}>Why you'll love it: </strong>
                        {product.personalizedReason}
                      </div>
                    </div>

                    {/* Price & CTA */}
                    <div>
                      <div style={{ display: "flex", alignItems: "baseline", gap: "8px", marginBottom: "8px" }}>
                        <span style={{ fontSize: "18px", fontWeight: 800, color: "var(--color-ink)" }}>
                          ₹{Number(product.price).toLocaleString("en-IN")}
                        </span>
                        {originalPrice && isSale && (
                          <span style={{ fontSize: "12px", color: "var(--color-mute)", textDecoration: "line-through" }}>
                            ₹{Number(originalPrice).toLocaleString("en-IN")}
                          </span>
                        )}
                      </div>

                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          fontSize: "12px",
                          fontWeight: 700,
                          color: "var(--color-ink)",
                          borderTop: "1px solid var(--color-hairline-soft)",
                          paddingTop: "8px",
                        }}
                      >
                        <span>View Deals</span>
                        <ArrowRight size={13} />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      <style>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}</style>
    </section>
  );
}
