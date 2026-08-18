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
  Share2,
  Box,
  Truck,
  RotateCw,
  Zap,
  TrendingDown
} from "lucide-react";
import PlatformBadge from "../components/products/PlatformBadge";
import SentimentBadge from "../components/products/SentimentBadge";
import ProductCard from "../components/products/ProductCard";
import PriceHistoryGraph from "../components/products/PriceHistoryGraph";
import SpatialARViewerModal from "../components/tools/SpatialARViewerModal";
import { getProductById, getProductAlternatives, exploreBudget, createPriceAlert } from "../services/api";
import { getCategoryFallbackImage, mockProducts, CATEGORY_DEFINITIONS } from "../services/mockData";

export default function ProductDetailPage({ onOpenChat }) {
  const { productId } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [variants, setVariants] = useState([]);
  const [alternatives, setAlternatives] = useState({ cheaper: [], similar: [], premium: [] });
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isARModalOpen, setIsARModalOpen] = useState(false);
  const [targetPrice, setTargetPrice] = useState("");
  const [alertSuccess, setAlertSuccess] = useState(false);
  const [loading, setLoading] = useState(true);
  const [copiedLink, setCopiedLink] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setLoading(true);
    setAlertSuccess(false);
    setSelectedImageIndex(0);

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
        const cleanId = productId?.replace(/-amazon$/, "").replace(/-flipkart$/, "").replace(/-myntra$/, "");
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
      setTimeout(() => setAlertSuccess(false), 5000);
    } catch (err) {
      console.error("Failed to create price alert:", err);
    }
  };

  const handleCopyShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  if (loading || !product) {
    return (
      <div style={{ minHeight: "70vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              width: "48px",
              height: "48px",
              border: "3px solid var(--color-hairline)",
              borderTopColor: "var(--color-ink)",
              borderRadius: "50%",
              animation: "spin 0.8s linear infinite",
              margin: "0 auto 16px",
            }}
          />
          <h3 style={{ fontFamily: "var(--font-display)", fontSize: "24px" }}>LOADING PRODUCT INTELLIGENCE...</h3>
        </div>
      </div>
    );
  }

  // 4-image array with fallback
  const images = product.images && product.images.length >= 4 
    ? product.images 
    : [
        product.imageUrl || product.image_url,
        product.imageUrl || product.image_url,
        product.imageUrl || product.image_url,
        product.imageUrl || product.image_url,
      ];

  // Best platform deal
  const sortedVariants = [...variants].sort((a, b) => a.price - b.price);
  const bestVariant = sortedVariants[0] || product;
  const maxVariantPrice = Math.max(...variants.map((v) => v.price));
  const maxSavings = maxVariantPrice - bestVariant.price;

  // More products in this category
  const moreInCategory = mockProducts
    .filter((p) => p.category === product.category && (p.groupId || p.group_id) !== (product.groupId || product.group_id))
    .filter((v, i, a) => a.findIndex((t) => (t.groupId || t.group_id) === (v.groupId || v.group_id)) === i)
    .slice(0, 6);

  return (
    <div style={{ backgroundColor: "var(--color-canvas)", minHeight: "100vh", paddingBottom: "80px" }}>
      {/* 1. Breadcrumbs Header */}
      <div style={{ borderBottom: "1px solid var(--color-hairline)", backgroundColor: "var(--color-soft-cloud)" }}>
        <div className="container" style={{ padding: "12px 16px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px" }}>
            <Link to="/" style={{ color: "var(--color-mute)", display: "flex", alignItems: "center", gap: "4px" }}>
              <ArrowLeft size={14} /> Home
            </Link>
            <span style={{ color: "var(--color-mute)" }}>/</span>
            <Link to={`/category/${product.category}`} style={{ color: "var(--color-mute)", textTransform: "capitalize" }}>
              {product.category}
            </Link>
            <span style={{ color: "var(--color-mute)" }}>/</span>
            <span style={{ fontWeight: 600, color: "var(--color-ink)", maxWidth: "300px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
              {product.name || product.product_name || product.title}
            </span>
          </div>

          <button
            onClick={handleCopyShare}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              background: "none",
              border: "1px solid var(--color-hairline)",
              padding: "5px 12px",
              borderRadius: "var(--radius-pill)",
              fontSize: "12px",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            <Share2 size={13} /> {copiedLink ? "Link Copied!" : "Share"}
          </button>
        </div>
      </div>

      {/* 2. Main Product Showcase Hero (Gallery + Intelligence Column) */}
      <div className="container" style={{ paddingTop: "32px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))",
            gap: "40px",
            alignItems: "start",
          }}
        >
          {/* ─── LEFT: 4-Angle Interactive Gallery & AR Button ─── */}
          <div>
            <div
              style={{
                position: "relative",
                aspectRatio: "1/1",
                backgroundColor: "var(--color-soft-cloud)",
                border: "1px solid var(--color-hairline)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
              }}
            >
              <img
                src={images[selectedImageIndex % images.length]}
                alt={product.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  padding: "24px",
                  transition: "transform 0.3s ease",
                }}
              />

              {/* Best Overall Badge */}
              {(product.is_best_overall || product.isBestOverall) && (
                <div
                  style={{
                    position: "absolute",
                    top: "16px",
                    left: "16px",
                    backgroundColor: "var(--color-ink)",
                    color: "var(--color-canvas)",
                    padding: "4px 12px",
                    borderRadius: "4px",
                    fontSize: "11px",
                    fontWeight: 800,
                    textTransform: "uppercase",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                  }}
                >
                  <Sparkles size={12} color="#FFD700" /> AI Best Overall Deal
                </div>
              )}

              {/* Interactive 3D / AR View Launch Button */}
              <button
                onClick={() => setIsARModalOpen(true)}
                style={{
                  position: "absolute",
                  bottom: "16px",
                  right: "16px",
                  backgroundColor: "rgba(17, 17, 17, 0.9)",
                  color: "#ffffff",
                  border: "none",
                  borderRadius: "var(--radius-pill)",
                  padding: "8px 16px",
                  fontSize: "12px",
                  fontWeight: 700,
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  cursor: "pointer",
                  boxShadow: "0 4px 14px rgba(0,0,0,0.2)",
                  backdropFilter: "blur(6px)",
                }}
              >
                <Box size={15} color="#00ffcc" />
                <span>3D & AR View</span>
              </button>
            </div>

            {/* 4 Clickable Angle Thumbnails */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: "12px",
                marginTop: "16px",
              }}
            >
              {images.slice(0, 4).map((imgUrl, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImageIndex(idx)}
                  style={{
                    aspectRatio: "1/1",
                    backgroundColor: "var(--color-soft-cloud)",
                    border: selectedImageIndex === idx ? "2px solid var(--color-ink)" : "1px solid var(--color-hairline)",
                    padding: "4px",
                    cursor: "pointer",
                    overflow: "hidden",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src={imgUrl}
                    alt={`Angle ${idx + 1}`}
                    style={{ width: "100%", height: "100%", objectFit: "contain" }}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* ─── RIGHT: Product Intelligence, Pricing & Multi-Platform Overview ─── */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
              <span style={{ fontSize: "12px", fontWeight: 800, textTransform: "uppercase", letterSpacing: "1px", color: "var(--color-mute)" }}>
                {product.brand}
              </span>
              <span style={{ color: "var(--color-hairline)" }}>•</span>
              <span style={{ fontSize: "12px", fontWeight: 700, textTransform: "uppercase", color: "var(--color-sale)" }}>
                {product.category}
              </span>
            </div>

            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "36px",
                lineHeight: 1.1,
                letterSpacing: "0.5px",
                color: "var(--color-ink)",
                margin: "0 0 16px 0",
              }}
            >
              {product.name || product.product_name || product.title}
            </h1>

            {/* Rating & Reviews Bar */}
            <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "20px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "4px", backgroundColor: "var(--color-soft-cloud)", padding: "4px 10px", borderRadius: "4px" }}>
                <Star size={15} fill="var(--color-ink)" color="var(--color-ink)" />
                <span style={{ fontSize: "13px", fontWeight: 800 }}>{Number(product.rating || 4.5).toFixed(1)}</span>
                <span style={{ fontSize: "12px", color: "var(--color-mute)" }}>({(product.review_count || 1200).toLocaleString("en-IN")} reviews)</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "#059669", fontWeight: 700 }}>
                <CheckCircle2 size={15} /> 100% Authentic Seller
              </div>
            </div>

            {/* Price Card */}
            <div
              style={{
                backgroundColor: "var(--color-soft-cloud)",
                padding: "20px",
                border: "1px solid var(--color-hairline)",
                marginBottom: "24px",
              }}
            >
              <div style={{ display: "flex", alignItems: "baseline", gap: "12px", flexWrap: "wrap" }}>
                <span style={{ fontSize: "36px", fontWeight: 900, color: "var(--color-ink)" }}>
                  ₹{Number(bestVariant.price).toLocaleString("en-IN")}
                </span>
                {bestVariant.original_price && (
                  <span style={{ fontSize: "18px", color: "var(--color-mute)", textDecoration: "line-through" }}>
                    ₹{Number(bestVariant.original_price).toLocaleString("en-IN")}
                  </span>
                )}
                {bestVariant.discount_percent > 0 && (
                  <span
                    style={{
                      fontSize: "13px",
                      fontWeight: 800,
                      color: "#ffffff",
                      backgroundColor: "var(--color-sale)",
                      padding: "3px 8px",
                      borderRadius: "4px",
                    }}
                  >
                    SAVE {bestVariant.discount_percent}%
                  </span>
                )}
              </div>

              {maxSavings > 0 && (
                <div style={{ marginTop: "8px", fontSize: "12px", fontWeight: 700, color: "#059669" }}>
                  🎉 Save up to ₹{maxSavings.toLocaleString("en-IN")} by purchasing on {bestVariant.platform?.toUpperCase()} instead of other stores!
                </div>
              )}
            </div>

            {/* AI Summary Recommendation Box */}
            <div
              style={{
                border: "1px solid var(--color-ink)",
                padding: "16px 20px",
                marginBottom: "24px",
                backgroundColor: "var(--color-canvas)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
                <Sparkles size={16} color="var(--color-ink)" />
                <span style={{ fontSize: "12px", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.5px" }}>
                  AI Purchase Recommendation
                </span>
              </div>
              <p style={{ fontSize: "13px", color: "var(--color-ink)", lineHeight: 1.5, margin: 0 }}>
                {product.why_buy || product.whyBuy || `Top rated ${product.category} product with high durability, verified buyer sentiment, and best market pricing.`}
              </p>
            </div>

            {/* Price Drop Alert Form */}
            <form onSubmit={handleSetAlert} style={{ display: "flex", gap: "10px", marginBottom: "16px" }}>
              <div style={{ flex: 1 }}>
                <input
                  type="number"
                  placeholder="Target Price (₹)"
                  value={targetPrice}
                  onChange={(e) => setTargetPrice(e.target.value)}
                  style={{
                    width: "100%",
                    height: "44px",
                    padding: "0 14px",
                    border: "1px solid var(--color-hairline)",
                    fontSize: "13px",
                    fontWeight: 600,
                    outline: "none",
                  }}
                />
              </div>
              <button
                type="submit"
                style={{
                  height: "44px",
                  padding: "0 20px",
                  backgroundColor: "var(--color-ink)",
                  color: "var(--color-canvas)",
                  border: "none",
                  fontSize: "13px",
                  fontWeight: 700,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  whiteSpace: "nowrap",
                }}
              >
                <Bell size={14} /> Set Price Alert
              </button>
            </form>
            {alertSuccess && (
              <div style={{ fontSize: "12px", color: "#059669", fontWeight: 700, marginBottom: "16px" }}>
                ✓ Price drop alert set! We'll notify you when it drops below ₹{Number(targetPrice).toLocaleString("en-IN")}.
              </div>
            )}
          </div>
        </div>

        {/* ─── 3. REBUILT LIVE MULTI-PLATFORM COMPARISON (Point 5) ─── */}
        <section style={{ marginTop: "60px" }}>
          <div style={{ borderBottom: "1px solid var(--color-hairline)", paddingBottom: "12px", marginBottom: "24px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ fontSize: "11px", fontWeight: 800, textTransform: "uppercase", letterSpacing: "1px", color: "var(--color-mute)" }}>
                Live Marketplace Arbitrage
              </span>
            </div>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "32px", letterSpacing: "0.5px", margin: "4px 0 0 0", color: "var(--color-ink)" }}>
              LIVE MULTI-PLATFORM COMPARISON
            </h2>
            <p style={{ fontSize: "13px", color: "var(--color-mute)", margin: "2px 0 0 0" }}>
              Real-time pricing, verified delivery speeds, and in-stock status across major retailers
            </p>
          </div>

          {/* 3-Store Side-by-Side Comparison Cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "20px",
            }}
          >
            {variants.map((v) => {
              const isLowest = v.price === bestVariant.price;
              const storeColor = v.platform === "amazon" ? "#FF9900" : v.platform === "flipkart" ? "#2874F0" : "#FF3F6C";

              return (
                <div
                  key={v.platform}
                  style={{
                    backgroundColor: "var(--color-canvas)",
                    border: isLowest ? "2px solid var(--color-ink)" : "1px solid var(--color-hairline)",
                    padding: "24px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    position: "relative",
                  }}
                >
                  {isLowest && (
                    <div
                      style={{
                        position: "absolute",
                        top: "-12px",
                        left: "20px",
                        backgroundColor: "var(--color-ink)",
                        color: "#ffffff",
                        fontSize: "10px",
                        fontWeight: 900,
                        textTransform: "uppercase",
                        padding: "3px 10px",
                        letterSpacing: "0.5px",
                        borderRadius: "2px",
                      }}
                    >
                      Lowest Price Guaranteed
                    </div>
                  )}

                  <div>
                    {/* Platform Header */}
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <span
                          style={{
                            display: "inline-block",
                            width: "12px",
                            height: "12px",
                            borderRadius: "50%",
                            backgroundColor: storeColor,
                          }}
                        />
                        <span style={{ fontSize: "16px", fontWeight: 800, textTransform: "uppercase", color: "var(--color-ink)" }}>
                          {v.platform}
                        </span>
                      </div>
                      <span style={{ fontSize: "11px", fontWeight: 700, color: v.in_stock !== false ? "#059669" : "var(--color-sale)" }}>
                        {v.in_stock !== false ? "In Stock" : "Out of Stock"}
                      </span>
                    </div>

                    {/* Price */}
                    <div style={{ marginBottom: "16px" }}>
                      <div style={{ fontSize: "28px", fontWeight: 900, color: "var(--color-ink)" }}>
                        ₹{Number(v.price).toLocaleString("en-IN")}
                      </div>
                      {v.original_price && (
                        <div style={{ fontSize: "13px", color: "var(--color-mute)", textDecoration: "line-through" }}>
                          ₹{Number(v.original_price).toLocaleString("en-IN")} ({v.discount_percent}% off)
                        </div>
                      )}
                    </div>

                    {/* Store Meta details */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "12px", color: "var(--color-mute)", marginBottom: "20px" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                        <Truck size={14} color="var(--color-ink)" />
                        <span>Delivery: <strong>{v.delivery_estimate || "2-3 days"}</strong></span>
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                        <ShieldCheck size={14} color="var(--color-ink)" />
                        <span>Seller: <strong>{v.seller || "Official Brand Retailer"}</strong></span>
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                        <Star size={14} color="var(--color-ink)" />
                        <span>Rating: <strong>{v.rating || 4.5} ★</strong> ({(v.review_count || 1000).toLocaleString("en-IN")})</span>
                      </div>
                    </div>
                  </div>

                  {/* Direct Store Button */}
                  <a
                    href={v.product_url || `https://www.${v.platform}.in`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "8px",
                      width: "100%",
                      padding: "12px",
                      backgroundColor: isLowest ? "var(--color-ink)" : "var(--color-soft-cloud)",
                      color: isLowest ? "#ffffff" : "var(--color-ink)",
                      textDecoration: "none",
                      fontSize: "13px",
                      fontWeight: 700,
                      border: isLowest ? "none" : "1px solid var(--color-hairline)",
                      cursor: "pointer",
                      textAlign: "center",
                    }}
                  >
                    <span>Buy on {v.platform?.toUpperCase()}</span>
                    <ExternalLink size={14} />
                  </a>
                </div>
              );
            })}
          </div>

          {/* 4. Interactive 90-Day Price History Trend Graph (Point 5) */}
          <PriceHistoryGraph product={product} priceHistory={product.price_history || product.priceHistory} />
        </section>

        {/* ─── 5. MARKET COMPARISON & RECOMMENDED ALTERNATIVES (Point 6) ─── */}
        <section style={{ marginTop: "60px" }}>
          <div style={{ borderBottom: "1px solid var(--color-hairline)", paddingBottom: "12px", marginBottom: "24px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ fontSize: "11px", fontWeight: 800, textTransform: "uppercase", letterSpacing: "1px", color: "var(--color-mute)" }}>
                AI Market Matrix
              </span>
            </div>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "32px", letterSpacing: "0.5px", margin: "4px 0 0 0", color: "var(--color-ink)" }}>
              RECOMMENDED ALTERNATIVES
            </h2>
            <p style={{ fontSize: "13px", color: "var(--color-mute)", margin: "2px 0 0 0" }}>
              Compare against budget-friendly alternatives, direct spec matches, and premium upgrades
            </p>
          </div>

          {/* 3 Structured Alternative Tiers */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "24px",
            }}
          >
            {/* 1. Cheaper Pick */}
            {alternatives.cheaper?.[0] && (
              <div style={{ backgroundColor: "var(--color-canvas)", border: "1px solid var(--color-hairline)", padding: "20px" }}>
                <div style={{ display: "inline-block", backgroundColor: "rgba(16, 185, 129, 0.12)", color: "#059669", fontSize: "11px", fontWeight: 800, padding: "3px 8px", borderRadius: "2px", marginBottom: "12px", textTransform: "uppercase" }}>
                  Cheaper Alternative (Save Money)
                </div>
                <div style={{ aspectRatio: "16/10", backgroundColor: "var(--color-soft-cloud)", marginBottom: "12px", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <img
                    src={alternatives.cheaper[0].imageUrl || alternatives.cheaper[0].image_url || alternatives.cheaper[0].images?.[0]}
                    alt={alternatives.cheaper[0].title}
                    style={{ width: "100%", height: "100%", objectFit: "contain", padding: "12px" }}
                  />
                </div>
                <h4 style={{ fontSize: "15px", fontWeight: 700, margin: "0 0 6px 0", color: "var(--color-ink)" }}>
                  {alternatives.cheaper[0].name || alternatives.cheaper[0].product_name || alternatives.cheaper[0].title}
                </h4>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
                  <span style={{ fontSize: "18px", fontWeight: 900 }}>₹{Number(alternatives.cheaper[0].price).toLocaleString("en-IN")}</span>
                  <span style={{ fontSize: "12px", color: "#059669", fontWeight: 800 }}>
                    -₹{(product.price - alternatives.cheaper[0].price).toLocaleString("en-IN")} Cheaper
                  </span>
                </div>
                <p style={{ fontSize: "12px", color: "var(--color-mute)", margin: "0 0 16px 0", lineHeight: 1.4 }}>
                  {alternatives.cheaper[0].why_buy || alternatives.cheaper[0].whyBuy || "Great budget alternative offering great essential specs at a lower cost."}
                </p>
                <Link
                  to={`/product/${alternatives.cheaper[0].product_id || alternatives.cheaper[0].id}`}
                  style={{
                    display: "block",
                    textAlign: "center",
                    padding: "10px",
                    backgroundColor: "var(--color-soft-cloud)",
                    color: "var(--color-ink)",
                    fontSize: "12px",
                    fontWeight: 700,
                    textDecoration: "none",
                    border: "1px solid var(--color-hairline)",
                  }}
                >
                  View Cheaper Option →
                </Link>
              </div>
            )}

            {/* 2. Direct Match Pick */}
            {alternatives.similar?.[0] && (
              <div style={{ backgroundColor: "var(--color-canvas)", border: "1px solid var(--color-hairline)", padding: "20px" }}>
                <div style={{ display: "inline-block", backgroundColor: "rgba(59, 130, 246, 0.12)", color: "#2563eb", fontSize: "11px", fontWeight: 800, padding: "3px 8px", borderRadius: "2px", marginBottom: "12px", textTransform: "uppercase" }}>
                  Spec-for-Spec Match (Same Tier)
                </div>
                <div style={{ aspectRatio: "16/10", backgroundColor: "var(--color-soft-cloud)", marginBottom: "12px", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <img
                    src={alternatives.similar[0].imageUrl || alternatives.similar[0].image_url || alternatives.similar[0].images?.[0]}
                    alt={alternatives.similar[0].title}
                    style={{ width: "100%", height: "100%", objectFit: "contain", padding: "12px" }}
                  />
                </div>
                <h4 style={{ fontSize: "15px", fontWeight: 700, margin: "0 0 6px 0", color: "var(--color-ink)" }}>
                  {alternatives.similar[0].name || alternatives.similar[0].product_name || alternatives.similar[0].title}
                </h4>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
                  <span style={{ fontSize: "18px", fontWeight: 900 }}>₹{Number(alternatives.similar[0].price).toLocaleString("en-IN")}</span>
                  <span style={{ fontSize: "12px", color: "var(--color-mute)", fontWeight: 700 }}>
                    Similar Price
                  </span>
                </div>
                <p style={{ fontSize: "12px", color: "var(--color-mute)", margin: "0 0 16px 0", lineHeight: 1.4 }}>
                  {alternatives.similar[0].why_buy || alternatives.similar[0].whyBuy || "Direct competitor offering comparable specs with distinct design styling."}
                </p>
                <Link
                  to={`/product/${alternatives.similar[0].product_id || alternatives.similar[0].id}`}
                  style={{
                    display: "block",
                    textAlign: "center",
                    padding: "10px",
                    backgroundColor: "var(--color-soft-cloud)",
                    color: "var(--color-ink)",
                    fontSize: "12px",
                    fontWeight: 700,
                    textDecoration: "none",
                    border: "1px solid var(--color-hairline)",
                  }}
                >
                  View Spec Match →
                </Link>
              </div>
            )}

            {/* 3. Premium Upgrade */}
            {alternatives.premium?.[0] && (
              <div style={{ backgroundColor: "var(--color-canvas)", border: "1px solid var(--color-hairline)", padding: "20px" }}>
                <div style={{ display: "inline-block", backgroundColor: "rgba(168, 85, 247, 0.12)", color: "#9333ea", fontSize: "11px", fontWeight: 800, padding: "3px 8px", borderRadius: "2px", marginBottom: "12px", textTransform: "uppercase" }}>
                  Premium Upgrade (More Features)
                </div>
                <div style={{ aspectRatio: "16/10", backgroundColor: "var(--color-soft-cloud)", marginBottom: "12px", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <img
                    src={alternatives.premium[0].imageUrl || alternatives.premium[0].image_url || alternatives.premium[0].images?.[0]}
                    alt={alternatives.premium[0].title}
                    style={{ width: "100%", height: "100%", objectFit: "contain", padding: "12px" }}
                  />
                </div>
                <h4 style={{ fontSize: "15px", fontWeight: 700, margin: "0 0 6px 0", color: "var(--color-ink)" }}>
                  {alternatives.premium[0].name || alternatives.premium[0].product_name || alternatives.premium[0].title}
                </h4>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
                  <span style={{ fontSize: "18px", fontWeight: 900 }}>₹{Number(alternatives.premium[0].price).toLocaleString("en-IN")}</span>
                  <span style={{ fontSize: "12px", color: "#9333ea", fontWeight: 800 }}>
                    +₹{(alternatives.premium[0].price - product.price).toLocaleString("en-IN")} Upgrade
                  </span>
                </div>
                <p style={{ fontSize: "12px", color: "var(--color-mute)", margin: "0 0 16px 0", lineHeight: 1.4 }}>
                  {alternatives.premium[0].why_buy || alternatives.premium[0].whyBuy || "Flagship tier option with upgraded premium components and superior ratings."}
                </p>
                <Link
                  to={`/product/${alternatives.premium[0].product_id || alternatives.premium[0].id}`}
                  style={{
                    display: "block",
                    textAlign: "center",
                    padding: "10px",
                    backgroundColor: "var(--color-soft-cloud)",
                    color: "var(--color-ink)",
                    fontSize: "12px",
                    fontWeight: 700,
                    textDecoration: "none",
                    border: "1px solid var(--color-hairline)",
                  }}
                >
                  View Premium Upgrade →
                </Link>
              </div>
            )}
          </div>
        </section>

        {/* ─── 6. MORE IN THIS CATEGORY (Point 7) ─── */}
        <section style={{ marginTop: "60px" }}>
          <div style={{ borderBottom: "1px solid var(--color-hairline)", paddingBottom: "12px", marginBottom: "24px", display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
            <div>
              <span style={{ fontSize: "11px", fontWeight: 800, textTransform: "uppercase", letterSpacing: "1px", color: "var(--color-mute)" }}>
                Curated Vertical
              </span>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "32px", letterSpacing: "0.5px", margin: "4px 0 0 0", color: "var(--color-ink)", textTransform: "uppercase" }}>
                MORE IN {product.category}
              </h2>
            </div>
            <Link
              to={`/category/${product.category}`}
              style={{ fontSize: "13px", fontWeight: 700, color: "var(--color-ink)", display: "flex", alignItems: "center", gap: "4px" }}
            >
              View Full Category Catalog →
            </Link>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
              gap: "24px",
            }}
          >
            {moreInCategory.map((item) => (
              <ProductCard
                key={item.id || item.product_id}
                product={item}
                onSelectProduct={(p) => navigate(`/product/${p.product_id || p.id}`)}
              />
            ))}
          </div>
        </section>
      </div>

      {/* 7. AR / VR Spatial Inspection Modal */}
      {isARModalOpen && (
        <SpatialARViewerModal product={product} onClose={() => setIsARModalOpen(false)} />
      )}
    </div>
  );
}
