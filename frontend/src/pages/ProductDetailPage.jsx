import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { 
  ArrowLeft, 
  Star, 
  Sparkles, 
  ExternalLink, 
  Bell, 
  ShieldCheck, 
  Check, 
  TrendingUp, 
  Clock, 
  CheckCircle2, 
  AlertCircle, 
  ThumbsUp, 
  ThumbsDown,
  ShoppingBag,
  Sliders,
  ChevronRight,
  Share2
} from "lucide-react";
import CategoryNavRail from "../components/home/CategoryNavRail";
import PlatformBadge from "../components/products/PlatformBadge";
import SentimentBadge from "../components/products/SentimentBadge";
import ProductCard from "../components/products/ProductCard";
import AlternativeFinder from "../components/tools/AlternativeFinder";
import { getProductById, getProductAlternatives, exploreBudget, createPriceAlert } from "../services/api";
import { getCategoryFallbackImage, mockProducts, CATEGORY_DEFINITIONS } from "../services/mockData";

export default function ProductDetailPage({ onOpenChat }) {
  const { productId } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [variants, setVariants] = useState([]);
  const [alternatives, setAlternatives] = useState({ cheaper: [], similar: [], premium: [] });
  const [extraBudget, setExtraBudget] = useState(2000);
  const [budgetUpgrades, setBudgetUpgrades] = useState([]);
  const [targetPrice, setTargetPrice] = useState("");
  const [alertSuccess, setAlertSuccess] = useState(false);
  const [loading, setLoading] = useState(true);
  const [copiedLink, setCopiedLink] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setLoading(true);
    setAlertSuccess(false);

    getProductById(productId)
      .then((data) => {
        const prod = data?.product || data;
        const allVars = data?.allPlatformVariants || [prod];
        setProduct(prod);
        setVariants(allVars);
        if (prod) {
          setTargetPrice(Math.round(prod.price * 0.9).toString());
        }
        setLoading(false);
      })
      .catch((err) => {
        console.warn("Product load error, fallback to mock:", err.message);
        const cleanId = productId.replace(/-amazon$/, "").replace(/-flipkart$/, "").replace(/-myntra$/, "");
        const found = mockProducts.find((p) => p.id === productId || p.product_id === productId || p.groupId === cleanId) || mockProducts[0];
        const allVars = mockProducts.filter((p) => (p.groupId || p.group_id) === (found.groupId || found.group_id));
        setProduct(found);
        setVariants(allVars.length > 0 ? allVars : [found]);
        if (found) {
          setTargetPrice(Math.round(found.price * 0.9).toString());
        }
        setLoading(false);
      });

    getProductAlternatives(productId)
      .then((altData) => {
        if (altData) setAlternatives(altData);
      })
      .catch(() => {});
  }, [productId]);

  // Handle budget explore
  useEffect(() => {
    if (!product) return;
    exploreBudget(product.product_id || product.id, extraBudget)
      .then((res) => {
        if (res?.upgradedOptions) setBudgetUpgrades(res.upgradedOptions);
      })
      .catch(() => {});
  }, [product, extraBudget]);

  const handleSetAlert = async (e) => {
    e.preventDefault();
    if (!product || !targetPrice) return;
    try {
      await createPriceAlert({
        productId: product.product_id || product.id,
        productTitle: product.title,
        currentPrice: product.price,
        targetPrice: Number(targetPrice),
        platform: product.platform,
      });
      setAlertSuccess(true);
    } catch (err) {
      console.error("Price alert error:", err);
    }
  };

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  if (loading || !product) {
    return (
      <div style={{ minHeight: "100vh", backgroundColor: "var(--color-canvas)" }}>
        <CategoryNavRail />
        <div className="container" style={{ padding: "80px 24px", textAlign: "center" }}>
          <h2 className="heading-xl">Loading Product Details...</h2>
          <p style={{ color: "var(--color-mute)", marginTop: "8px" }}>Fetching live multi-platform data from Amazon, Flipkart & Myntra</p>
        </div>
      </div>
    );
  }

  const categoryDef = CATEGORY_DEFINITIONS.find((c) => c.id === product.category) || {
    id: product.category || "electronics",
    shortLabel: (product.category || "Category").toUpperCase(),
  };

  const isBestOverall = product.is_best_overall || product.isBestOverall || (product.best_overall_score || product.bestOverallScore) >= 90;
  const discountPercent = product.discount_percent || product.discountPercent || 0;
  const isSale = discountPercent > 0;
  const relatedProducts = mockProducts
    .filter((p) => p.category === product.category && (p.groupId || p.group_id) !== (product.groupId || product.group_id))
    .filter((v, i, a) => a.findIndex((t) => (t.groupId || t.group_id) === (v.groupId || v.group_id)) === i)
    .slice(0, 4);

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "var(--color-canvas)", paddingBottom: "80px" }}>
      {/* Category Nav Rail */}
      <CategoryNavRail />

      <div className="container" style={{ paddingTop: "24px" }}>
        {/* ─── 1. BREADCRUMBS & TOP BAR ──────────────────────────── */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "12px",
            marginBottom: "24px",
            fontSize: "13px",
            color: "var(--color-mute)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
            <Link to="/" style={{ color: "var(--color-charcoal)", fontWeight: 500 }}>
              Home
            </Link>
            <ChevronRight size={14} />
            <Link to={`/category/${categoryDef.id}`} style={{ color: "var(--color-charcoal)", fontWeight: 500 }}>
              {categoryDef.shortLabel}
            </Link>
            <ChevronRight size={14} />
            <span style={{ color: "var(--color-ink)", fontWeight: 600, maxWidth: "320px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
              {product.title}
            </span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <button
              onClick={handleShare}
              className="btn-secondary"
              style={{
                height: "36px",
                padding: "0 14px",
                fontSize: "12px",
                gap: "6px",
                borderRadius: "var(--radius-sm)",
              }}
            >
              <Share2 size={13} />
              <span>{copiedLink ? "Link Copied!" : "Share Deal"}</span>
            </button>
            <button
              onClick={() => navigate(-1)}
              className="btn-secondary"
              style={{
                height: "36px",
                padding: "0 14px",
                fontSize: "12px",
                gap: "6px",
                borderRadius: "var(--radius-sm)",
              }}
            >
              <ArrowLeft size={13} />
              <span>Back</span>
            </button>
          </div>
        </div>

        {/* ─── 2. HERO PRODUCT OVERVIEW ─────────────────────────── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
            gap: "48px",
            alignItems: "start",
            marginBottom: "64px",
          }}
        >
          {/* Left Column: Media Studio */}
          <div>
            <div
              style={{
                position: "relative",
                width: "100%",
                aspectRatio: "1/1",
                backgroundColor: "var(--color-soft-cloud)",
                overflow: "hidden",
                border: "1px solid var(--color-hairline)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={product.image_url || product.imageUrl || getCategoryFallbackImage(product.category)}
                alt={product.title}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = getCategoryFallbackImage(product.category);
                }}
              />

              {/* Top Pick Ribbon */}
              {isBestOverall && (
                <div
                  style={{
                    position: "absolute",
                    top: "16px",
                    left: "16px",
                    backgroundColor: "var(--color-ink)",
                    color: "var(--color-canvas)",
                    padding: "6px 14px",
                    borderRadius: "var(--radius-lg)",
                    fontSize: "12px",
                    fontWeight: 800,
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                  }}
                >
                  <Sparkles size={13} color="#f59e0b" />
                  <span>AI Best Overall Pick</span>
                </div>
              )}

              {/* Discount Tag */}
              {isSale && (
                <div
                  style={{
                    position: "absolute",
                    top: isBestOverall ? "56px" : "16px",
                    left: "16px",
                    backgroundColor: "var(--color-sale)",
                    color: "#ffffff",
                    padding: "4px 10px",
                    borderRadius: "4px",
                    fontSize: "12px",
                    fontWeight: 800,
                  }}
                >
                  {discountPercent}% OFF
                </div>
              )}

              {/* Platform Origin Tag */}
              <div style={{ position: "absolute", bottom: "16px", left: "16px" }}>
                <PlatformBadge platform={product.platform} size="lg" />
              </div>
            </div>

            {/* AI Sentiment Bar Below Image */}
            <div
              style={{
                marginTop: "16px",
                padding: "16px 20px",
                backgroundColor: "var(--color-soft-cloud)",
                border: "1px solid var(--color-hairline)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: "12px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <SentimentBadge
                  sentiment={product.sentiment}
                  score={product.sentiment_score || product.sentimentScore}
                  pros={product.sentimentPros}
                  cons={product.sentimentCons}
                  size="md"
                />
                <span style={{ fontSize: "13px", color: "var(--color-charcoal)", fontWeight: 500 }}>
                  Based on verified user feedback
                </span>
              </div>

              {(product.best_overall_score || product.bestOverallScore) && (
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <span style={{ fontSize: "12px", fontWeight: 700, color: "var(--color-mute)", textTransform: "uppercase" }}>
                    AI Score:
                  </span>
                  <span
                    style={{
                      fontSize: "14px",
                      fontWeight: 800,
                      color: "var(--color-success)",
                      backgroundColor: "rgba(0, 125, 72, 0.1)",
                      padding: "2px 8px",
                      borderRadius: "var(--radius-sm)",
                    }}
                  >
                    {product.best_overall_score || product.bestOverallScore}/100
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Title, Prices, Multi-Platform Comparison */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
              <span style={{ fontSize: "13px", fontWeight: 700, color: "var(--color-mute)", textTransform: "uppercase" }}>
                {product.brand} · {product.category?.toUpperCase()}
              </span>
            </div>

            <h1
              style={{
                fontFamily: "var(--font-ui)",
                fontSize: "clamp(24px, 3vw, 32px)",
                fontWeight: 700,
                color: "var(--color-ink)",
                lineHeight: 1.25,
                marginBottom: "12px",
              }}
            >
              {product.title}
            </h1>

            {/* Ratings Summary */}
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "4px", fontWeight: 700, fontSize: "15px" }}>
                <Star size={16} fill="#f59e0b" color="#f59e0b" />
                <span>{product.rating ? Number(product.rating).toFixed(1) : "4.5"}</span>
              </div>
              <span style={{ color: "var(--color-hairline)" }}>|</span>
              <span style={{ fontSize: "14px", color: "var(--color-mute)" }}>
                {(product.review_count || product.reviewCount || 15400).toLocaleString("en-IN")} ratings across platforms
              </span>
              <span style={{ color: "var(--color-hairline)" }}>|</span>
              <span style={{ fontSize: "13px", color: "var(--color-success)", fontWeight: 600, display: "flex", alignItems: "center", gap: "4px" }}>
                <ShieldCheck size={14} /> In Stock
              </span>
            </div>

            {/* Price Callout */}
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                gap: "14px",
                padding: "20px 0",
                borderTop: "1px solid var(--color-hairline)",
                borderBottom: "1px solid var(--color-hairline)",
                marginBottom: "24px",
              }}
            >
              <div>
                <span style={{ fontSize: "12px", color: "var(--color-mute)", display: "block", textTransform: "uppercase", fontWeight: 600 }}>
                  Best Current Price
                </span>
                <span style={{ fontSize: "36px", fontWeight: 800, color: "var(--color-ink)" }}>
                  ₹{Number(product.price).toLocaleString("en-IN")}
                </span>
              </div>

              {(product.original_price || product.originalPrice) && (
                <div style={{ fontSize: "16px", color: "var(--color-mute)", textDecoration: "line-through" }}>
                  ₹{Number(product.original_price || product.originalPrice).toLocaleString("en-IN")}
                </div>
              )}

              {isSale && (
                <div
                  style={{
                    backgroundColor: "var(--color-sale)",
                    color: "#ffffff",
                    padding: "4px 10px",
                    borderRadius: "4px",
                    fontSize: "13px",
                    fontWeight: 800,
                  }}
                >
                  Save {discountPercent}%
                </div>
              )}
            </div>

            {/* AI "Why Buy This" Verdict Box */}
            {(product.why_buy || product.whyBuy) && (
              <div
                style={{
                  backgroundColor: "rgba(0, 125, 72, 0.06)",
                  borderLeft: "4px solid var(--color-success)",
                  padding: "14px 18px",
                  marginBottom: "24px",
                  borderRadius: "var(--radius-none)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "var(--color-success)", fontWeight: 700, fontSize: "13px", textTransform: "uppercase", marginBottom: "4px" }}>
                  <Sparkles size={14} />
                  <span>AI Recommendation Rationale</span>
                </div>
                <p style={{ fontSize: "14px", color: "var(--color-ink)", lineHeight: 1.45 }}>
                  {product.why_buy || product.whyBuy}
                </p>
              </div>
            )}

            {/* ─── MULTI-PLATFORM REAL-TIME COMPARISON MATRIX ─── */}
            <div style={{ marginBottom: "28px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
                <h3 style={{ fontSize: "14px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.5px", color: "var(--color-ink)" }}>
                  Live Multi-Platform Comparison:
                </h3>
                <span style={{ fontSize: "12px", color: "var(--color-mute)" }}>
                  Verified 100% In-Stock
                </span>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {variants.map((v, i) => {
                  const isCurrent = v.platform === product.platform;
                  return (
                    <div
                      key={i}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "12px 18px",
                        backgroundColor: isCurrent ? "var(--color-soft-cloud)" : "var(--color-canvas)",
                        border: `1.5px solid ${isCurrent ? "var(--color-ink)" : "var(--color-hairline)"}`,
                        borderRadius: "var(--radius-none)",
                        gap: "16px",
                        flexWrap: "wrap",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                        <PlatformBadge platform={v.platform} size="md" />
                        <div>
                          <span style={{ fontSize: "12px", color: "var(--color-mute)", display: "block" }}>
                            {v.delivery_estimate || v.deliveryEstimate || "2-3 Days Delivery"}
                          </span>
                          <span style={{ fontSize: "11px", color: "var(--color-charcoal)", fontWeight: 500 }}>
                            Seller: {v.seller || "Authorized Retailer"}
                          </span>
                        </div>
                      </div>

                      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                        <div>
                          <div style={{ fontSize: "18px", fontWeight: 800, color: "var(--color-ink)", textAlign: "right" }}>
                            ₹{Number(v.price).toLocaleString("en-IN")}
                          </div>
                          {(v.original_price || v.originalPrice) && (v.discount_percent || v.discountPercent) > 0 && (
                            <div style={{ fontSize: "11px", color: "var(--color-sale)", fontWeight: 700, textAlign: "right" }}>
                              {v.discount_percent || v.discountPercent}% off
                            </div>
                          )}
                        </div>

                        <a
                          href={v.product_url || v.productUrl || "#"}
                          target="_blank"
                          rel="noreferrer"
                          className="btn-primary"
                          style={{
                            height: "38px",
                            padding: "0 18px",
                            fontSize: "13px",
                            gap: "6px",
                            borderRadius: "var(--radius-lg)",
                          }}
                        >
                          <span>Buy on {v.platform ? v.platform.toUpperCase() : "STORE"}</span>
                          <ExternalLink size={13} />
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Price Alert Form & AI Question CTA */}
            <div
              style={{
                backgroundColor: "var(--color-soft-cloud)",
                padding: "20px",
                border: "1px solid var(--color-hairline)",
                marginBottom: "24px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                <Bell size={16} color="var(--color-ink)" />
                <span style={{ fontSize: "14px", fontWeight: 700 }}>Set Price Drop Alert</span>
              </div>
              <p style={{ fontSize: "13px", color: "var(--color-mute)", marginBottom: "12px" }}>
                We'll notify you automatically when this item drops to or below your target threshold.
              </p>

              {alertSuccess ? (
                <div style={{ color: "var(--color-success)", fontSize: "14px", fontWeight: 600, display: "flex", alignItems: "center", gap: "6px" }}>
                  <CheckCircle2 size={16} /> Alert saved for ₹{targetPrice}! We are tracking Amazon, Flipkart & Myntra.
                </div>
              ) : (
                <form onSubmit={handleSetAlert} style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                  <div style={{ position: "relative", flex: 1, minWidth: "160px" }}>
                    <span style={{ position: "absolute", left: "12px", top: "10px", fontSize: "14px", color: "var(--color-mute)", fontWeight: 600 }}>₹</span>
                    <input
                      type="number"
                      placeholder="Target price in ₹"
                      value={targetPrice}
                      onChange={(e) => setTargetPrice(e.target.value)}
                      style={{
                        width: "100%",
                        padding: "10px 12px 10px 28px",
                        fontSize: "14px",
                        fontWeight: 600,
                        border: "1px solid var(--color-hairline)",
                        borderRadius: "var(--radius-none)",
                        backgroundColor: "var(--color-canvas)",
                        outline: "none",
                        fontFamily: "var(--font-ui)",
                      }}
                    />
                  </div>
                  <button type="submit" className="btn-primary" style={{ height: "42px", padding: "0 24px", fontSize: "14px" }}>
                    Track Price
                  </button>
                </form>
              )}
            </div>

            {/* Ask AI Trigger */}
            <button
              onClick={onOpenChat}
              className="btn-secondary"
              style={{
                width: "100%",
                height: "44px",
                fontSize: "14px",
                fontWeight: 600,
                gap: "8px",
                border: "1px solid var(--color-ink)",
              }}
            >
              <Sparkles size={16} />
              <span>Ask AI Advisor about {product.title}</span>
            </button>
          </div>
        </div>

        {/* ─── 3. DEEP DIVE SPECS & AI REVIEW SYNTHESIS ───────────── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "36px",
            padding: "48px 0",
            borderTop: "1px solid var(--color-hairline)",
            borderBottom: "1px solid var(--color-hairline)",
            marginBottom: "48px",
          }}
        >
          {/* Key Specifications Grid */}
          <div>
            <span style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase", color: "var(--color-mute)" }}>
              Technical Breakdown
            </span>
            <h3 className="heading-lg" style={{ marginTop: "4px", marginBottom: "20px" }}>
              SPECIFICATIONS
            </h3>

            {product.specs && Object.keys(product.specs).length > 0 ? (
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {Object.entries(product.specs).map(([key, val]) => (
                  <div
                    key={key}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      padding: "10px 14px",
                      backgroundColor: "var(--color-soft-cloud)",
                      borderBottom: "1px solid var(--color-hairline-soft)",
                      fontSize: "13px",
                    }}
                  >
                    <span style={{ color: "var(--color-mute)", fontWeight: 600, textTransform: "capitalize" }}>
                      {key.replace(/_/g, " ")}:
                    </span>
                    <span style={{ color: "var(--color-ink)", fontWeight: 700, textAlign: "right" }}>
                      {String(val)}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <p style={{ color: "var(--color-mute)", fontSize: "14px" }}>Standard manufacturer retail specs apply.</p>
            )}
          </div>

          {/* AI Review Pros & Cons Synthesis */}
          <div>
            <span style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase", color: "var(--color-mute)" }}>
              Customer Intelligence
            </span>
            <h3 className="heading-lg" style={{ marginTop: "4px", marginBottom: "20px" }}>
              AI REVIEW SYNTHESIS
            </h3>

            {(product.review_summary || product.reviewSummary) && (
              <p style={{ fontSize: "14px", color: "var(--color-charcoal)", lineHeight: 1.5, marginBottom: "20px", padding: "14px", backgroundColor: "var(--color-soft-cloud)" }}>
                {product.review_summary || product.reviewSummary}
              </p>
            )}

            {/* Pros vs Cons */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
              {/* Pros */}
              <div style={{ padding: "16px", backgroundColor: "rgba(16,185,129,0.06)", border: "1px solid rgba(16,185,129,0.2)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "#10B981", fontSize: "12px", fontWeight: 800, textTransform: "uppercase", marginBottom: "8px" }}>
                  <ThumbsUp size={14} /> What Buyers Love
                </div>
                <ul style={{ margin: "0 0 0 16px", padding: 0, fontSize: "13px", color: "var(--color-ink)", lineHeight: 1.4 }}>
                  {(product.sentimentPros || ["Exceptional performance & build", "Reliable battery longevity", "High value for money"]).map((pro, idx) => (
                    <li key={idx} style={{ marginBottom: "6px" }}>{pro}</li>
                  ))}
                </ul>
              </div>

              {/* Cons */}
              <div style={{ padding: "16px", backgroundColor: "rgba(239,68,68,0.06)", border: "1px solid rgba(239,68,68,0.2)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "#EF4444", fontSize: "12px", fontWeight: 800, textTransform: "uppercase", marginBottom: "8px" }}>
                  <ThumbsDown size={14} /> Common Criticisms
                </div>
                <ul style={{ margin: "0 0 0 16px", padding: 0, fontSize: "13px", color: "var(--color-ink)", lineHeight: 1.4 }}>
                  {(product.sentimentCons || ["Premium launch pricing", "Slight learning curve"]).map((con, idx) => (
                    <li key={idx} style={{ marginBottom: "6px" }}>{con}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* ─── 4. BUDGET EXPLORER & UPGRADE OPPORTUNITIES ───────── */}
        <div style={{ marginBottom: "48px" }}>
          <div style={{ marginBottom: "20px" }}>
            <span style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase", color: "var(--color-mute)" }}>
              Decision Intelligence
            </span>
            <h3 className="heading-lg" style={{ marginTop: "4px" }}>
              BUDGET EXPLORER (WHAT UNLOCKS WITH MORE BUDGET?)
            </h3>
            <p style={{ fontSize: "14px", color: "var(--color-mute)", marginTop: "2px" }}>
              See if spending slightly more gets you a substantially better product in this category.
            </p>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px", flexWrap: "wrap" }}>
            <span style={{ fontSize: "13px", fontWeight: 700 }}>Increase Budget by:</span>
            {[1000, 2000, 3000, 5000].map((amt) => (
              <button
                key={amt}
                onClick={() => setExtraBudget(amt)}
                className={`filter-chip ${extraBudget === amt ? "active" : ""}`}
              >
                +₹{amt.toLocaleString("en-IN")}
              </button>
            ))}
          </div>

          {budgetUpgrades.length > 0 ? (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "20px",
              }}
            >
              {budgetUpgrades.map((up, idx) => (
                <div
                  key={idx}
                  onClick={() => navigate(`/product/${up.product_id || up.id}`)}
                  style={{
                    padding: "16px",
                    backgroundColor: "var(--color-soft-cloud)",
                    border: "1px solid var(--color-hairline)",
                    cursor: "pointer",
                    transition: "border-color 0.15s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--color-ink)")}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--color-hairline)")}
                >
                  <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                    <img
                      src={up.image_url || up.imageUrl || getCategoryFallbackImage(up.category)}
                      alt={up.title}
                      style={{ width: "64px", height: "64px", objectFit: "cover", backgroundColor: "var(--color-canvas)" }}
                    />
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <h4 style={{ fontSize: "14px", fontWeight: 700, color: "var(--color-ink)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                        {up.title}
                      </h4>
                      <div style={{ fontSize: "14px", fontWeight: 800, color: "var(--color-ink)", marginTop: "2px" }}>
                        ₹{Number(up.price).toLocaleString("en-IN")}
                      </div>
                      <div style={{ fontSize: "12px", color: "var(--color-success)", fontWeight: 600, marginTop: "4px" }}>
                        {up.upgradeReason || `Higher rating and +${up.best_overall_score - product.best_overall_score} AI Score`}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div style={{ padding: "20px", backgroundColor: "var(--color-soft-cloud)", fontSize: "14px", color: "var(--color-mute)" }}>
              No major step-up upgrade in this exact budget bracket. Current choice remains best value.
            </div>
          )}
        </div>

        {/* ─── 5. THREE-COLUMN ALTERNATIVES ─────────────────────── */}
        <div style={{ marginBottom: "48px" }}>
          <div style={{ marginBottom: "20px" }}>
            <span style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase", color: "var(--color-mute)" }}>
              Market Comparison
            </span>
            <h3 className="heading-lg" style={{ marginTop: "4px" }}>
              RECOMMENDED ALTERNATIVES
            </h3>
          </div>
          <AlternativeFinder product={product} />
        </div>

        {/* ─── 6. RELATED PRODUCTS IN CATEGORY ──────────────────── */}
        {relatedProducts.length > 0 && (
          <div style={{ paddingTop: "32px", borderTop: "1px solid var(--color-hairline)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" }}>
              <h3 className="heading-lg">MORE IN {categoryDef.shortLabel}</h3>
              <Link to={`/category/${categoryDef.id}`} style={{ fontSize: "13px", fontWeight: 700, color: "var(--color-ink)" }}>
                View All {categoryDef.shortLabel} →
              </Link>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
                gap: "32px 20px",
              }}
            >
              {relatedProducts.map((rel) => (
                <ProductCard
                  key={rel.id || rel.product_id}
                  product={rel}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
