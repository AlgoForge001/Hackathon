import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowRight,
  Sparkles,
  TrendingDown,
  ShieldCheck,
  Zap,
  ShoppingBag,
  LineChart,
  Layers,
  Bell,
  Sliders,
  CheckCircle2,
  ExternalLink,
  ChevronRight,
  Eye,
  Star
} from "lucide-react";
import { CATEGORY_DEFINITIONS, mockProducts } from "../services/mockData";

export default function LandingPage({ onOpenChat }) {
  const navigate = useNavigate();

  // Landing Typing animation phrases
  const landingPhrases = [
    "COMPARE AMAZON, FLIPKART & MYNTRA IN 1-CLICK.",
    "DISCOVER THE GUARANTEED LOWEST PRICE.",
    "AI-POWERED REVIEWS & SENTIMENT SCORING.",
    "TRACK 6-MONTH HISTORICAL PRICE TRENDS.",
    "SMART SHOPPING INTELLIGENCE FOR EVERY PURCHASE.",
  ];

  const [typedHeadline, setTypedHeadline] = useState("");
  const [headlineIdx, setHeadlineIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = landingPhrases[headlineIdx % landingPhrases.length];
    let timer;

    if (!isDeleting && typedHeadline === current) {
      timer = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && typedHeadline === "") {
      setIsDeleting(false);
      setHeadlineIdx((prev) => (prev + 1) % landingPhrases.length);
    } else {
      timer = setTimeout(() => {
        setTypedHeadline(
          isDeleting
            ? current.substring(0, typedHeadline.length - 1)
            : current.substring(0, typedHeadline.length + 1)
        );
      }, isDeleting ? 30 : 65);
    }

    return () => clearTimeout(timer);
  }, [typedHeadline, isDeleting, headlineIdx]);

  // Pick top 4 standout products for live preview showcase
  const previewProducts = mockProducts.slice(0, 4);

  const softwareSections = [
    {
      icon: <Layers size={24} color="#111111" />,
      tag: "Arbitrage Engine",
      title: "Live Multi-Platform Comparison",
      description:
        "Instantly compare identical products side-by-side across Amazon, Flipkart, and Myntra with transparent pricing, discount percentage, delivery speeds, and verified seller credentials.",
      badge: "Real-Time",
      link: "/",
    },
    {
      icon: <Sparkles size={24} color="#111111" />,
      tag: "AI Intelligence",
      title: "Shopsy AI Shopping Advisor",
      description:
        "Conversational AI advisor powered by advanced LLM intelligence. Ask questions, compare trade-offs, get personalized budget recommendations, and discover why you should buy.",
      badge: "AI Powered",
      action: onOpenChat,
    },
    {
      icon: <LineChart size={24} color="#111111" />,
      tag: "Market Timing",
      title: "6-Month Historical Price Graph",
      description:
        "Interactive SVG price trajectory tracking monthly price movements across all three platforms so you know whether current pricing is an all-time low or regular retail.",
      badge: "Historical Analytics",
      link: "/",
    },
    {
      icon: <TrendingDown size={24} color="#111111" />,
      tag: "Quantitative Scoring",
      title: "Buy / Sell / Hold Valuation Signal",
      description:
        "Algorithmic valuation scoring analyzing discount depth, market volatility, and seasonal sales to output high-confidence Strong Buy, Fair Price, or Wait signals.",
      badge: "Smart Algorithm",
      link: "/",
    },
    {
      icon: <ShieldCheck size={24} color="#111111" />,
      tag: "Review Intelligence",
      title: "Sentiment & Quality Summarization",
      description:
        "NLP engine parses thousands of customer reviews to highlight authentic pros and cons, calculate sentiment score badges (Green, Yellow, Red), and filter fake feedback.",
      badge: "Authenticity Shield",
      link: "/",
    },
    {
      icon: <Eye size={24} color="#111111" />,
      tag: "3D & AR Experience",
      title: "Spatial AR / 3D Product Viewer",
      description:
        "Inspect product dimensions, rotational viewing angles, material textures, and real-world scale directly in your browser before placing an order.",
      badge: "Immersive View",
      link: "/",
    },
    {
      icon: <Bell size={24} color="#111111" />,
      tag: "Price Drop Monitoring",
      title: "Instant Target Price Alerts",
      description:
        "Set your dream target price for any item in seconds. Our automated background watcher tracks price fluctuations and triggers alerts when deals go live.",
      badge: "Automated Watcher",
      link: "/",
    },
    {
      icon: <Sliders size={24} color="#111111" />,
      tag: "Budget Optimization",
      title: "Interactive Budget Explorer",
      description:
        "Dynamic discovery tool that reveals what premium features, battery upgrades, or flagship specs unlock if you increase your spending budget slightly.",
      badge: "Deal Discovery",
      link: "/",
    },
  ];

  return (
    <div style={{ backgroundColor: "var(--color-canvas)", color: "var(--color-ink)", minHeight: "100vh" }}>
      {/* ─── 1. HERO SECTION WITH CLEAN SEAMLESS BACKGROUND & 9:16 VIDEO SHOWCASE ─── */}
      <section
        style={{
          borderBottom: "1px solid var(--color-hairline)",
          paddingTop: "40px",
          paddingBottom: "40px",
          position: "relative",
          overflow: "hidden",
          backgroundColor: "var(--color-canvas)",
          color: "var(--color-ink)",
        }}
      >
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          {/* Main 2-Column Showcase */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "clamp(24px, 5vw, 64px)",
              alignItems: "center",
              marginBottom: "40px",
            }}
          >
            {/* ─── LEFT COLUMN: Text, Typing Headline & Action Buttons ─── */}
            <div>
              {/* Main Headline with Fixed-Height Typing Container */}
              <div style={{ minHeight: "140px", display: "flex", flexDirection: "column", justifyContent: "flex-start", marginBottom: "16px" }}>
                <h1
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(36px, 4.8vw, 60px)",
                    lineHeight: 1,
                    letterSpacing: "0.5px",
                    margin: 0,
                    color: "var(--color-ink)",
                  }}
                >
                  NEVER OVERPAY AGAIN. <br />
                  <span style={{ color: "var(--color-ink)", display: "inline-block", minHeight: "1.15em" }}>
                    {typedHeadline}
                    <span className="typing-cursor" style={{ color: "#FF9900" }}>|</span>
                  </span>
                </h1>
              </div>

              {/* Subtitle */}
              <p
                style={{
                  fontSize: "16px",
                  lineHeight: 1.6,
                  color: "var(--color-mute)",
                  maxWidth: "540px",
                  margin: "0 0 28px 0",
                }}
              >
                Shopsy combines real-time price arbitrage, AI sentiment intelligence, 90-day price tracking graphs, and AR spatial previews so you always secure the lowest price.
              </p>

              {/* Primary Action Buttons */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  flexWrap: "wrap",
                }}
              >
                <button
                  onClick={() => navigate("/")}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "14px 28px",
                    backgroundColor: "var(--color-ink)",
                    color: "var(--color-canvas)",
                    fontSize: "14px",
                    fontWeight: 800,
                    border: "none",
                    borderRadius: "var(--radius-sm)",
                    cursor: "pointer",
                    transition: "transform 0.15s ease, background-color 0.15s ease",
                    textDecoration: "none",
                    boxShadow: "0 4px 14px rgba(0,0,0,0.15)",
                  }}
                >
                  <ShoppingBag size={16} />
                  <span>LAUNCH APP</span>
                  <ArrowRight size={16} />
                </button>

                {onOpenChat && (
                  <button
                    onClick={onOpenChat}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      padding: "13px 24px",
                      backgroundColor: "var(--color-soft-cloud)",
                      color: "var(--color-ink)",
                      fontSize: "14px",
                      fontWeight: 700,
                      border: "1px solid var(--color-hairline)",
                      borderRadius: "var(--radius-sm)",
                      cursor: "pointer",
                    }}
                  >
                    <Sparkles size={16} color="#d97706" />
                    <span>Ask Shopsy AI Advisor</span>
                  </button>
                )}
              </div>
            </div>

            {/* ─── RIGHT COLUMN: 9:16 Video Showcase ─── */}
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  maxWidth: "320px",
                  aspectRatio: "9/16",
                  backgroundColor: "#000000",
                  borderRadius: "24px",
                  overflow: "hidden",
                  border: "1px solid var(--color-hairline)",
                  boxShadow: "0 20px 45px rgba(0, 0, 0, 0.14)",
                }}
              >
                <video
                  src="/hero-video.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </div>
            </div>
          </div>

          {/* Stats Row */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
              gap: "20px",
              paddingTop: "24px",
              borderTop: "1px solid var(--color-hairline)",
            }}
          >
            <div>
              <div style={{ fontFamily: "var(--font-display)", fontSize: "30px", color: "var(--color-ink)" }}>3 STORES</div>
              <div style={{ fontSize: "12px", color: "var(--color-mute)", fontWeight: 600 }}>Amazon, Flipkart, Myntra</div>
            </div>
            <div>
              <div style={{ fontFamily: "var(--font-display)", fontSize: "30px", color: "var(--color-ink)" }}>100% VERIFIED</div>
              <div style={{ fontSize: "12px", color: "var(--color-mute)", fontWeight: 600 }}>Authentic Retailer Stock</div>
            </div>
            <div>
              <div style={{ fontFamily: "var(--font-display)", fontSize: "30px", color: "#d97706" }}>UP TO 40%</div>
              <div style={{ fontSize: "12px", color: "var(--color-mute)", fontWeight: 600 }}>Average Arbitrage Savings</div>
            </div>
            <div>
              <div style={{ fontFamily: "var(--font-display)", fontSize: "30px", color: "var(--color-ink)" }}>AI POWERED</div>
              <div style={{ fontSize: "12px", color: "var(--color-mute)", fontWeight: 600 }}>Sentiment & Review Scoring</div>
            </div>
          </div>

          {/* Featured Live Promotional Ad Showcase Banner Row */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "20px",
              marginTop: "48px",
            }}
          >
            <div
              onClick={() => navigate("/category/electronics")}
              style={{
                height: "190px",
                borderRadius: "var(--radius-none)",
                overflow: "hidden",
                cursor: "pointer",
                padding: "24px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                backgroundImage: `linear-gradient(135deg, rgba(15,23,42,0.92) 0%, rgba(15,23,42,0.6) 100%), url('https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&auto=format&fit=crop&q=80')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                border: "1px solid var(--color-hairline)",
              }}
            >
              <div>
                <span style={{ fontSize: "10px", fontWeight: 800, textTransform: "uppercase", backgroundColor: "#FF9900", color: "#111111", padding: "3px 8px" }}>
                  Trending Tech Deals
                </span>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "26px", color: "#ffffff", margin: "8px 0 2px 0" }}>
                  PREMIUM NOISE-CANCELLING AUDIO
                </h3>
                <p style={{ fontSize: "12px", color: "#cbd5e1", margin: 0 }}>Sony WH-1000XM5 & Bose Ultra from ₹19,990</p>
              </div>
              <span style={{ fontSize: "11px", fontWeight: 800, color: "#ffffff", display: "inline-flex", alignItems: "center", gap: "4px" }}>
                Compare Store Deals <ArrowRight size={12} />
              </span>
            </div>

            <div
              onClick={() => navigate("/category/footwear")}
              style={{
                height: "190px",
                borderRadius: "var(--radius-none)",
                overflow: "hidden",
                cursor: "pointer",
                padding: "24px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                backgroundImage: `linear-gradient(135deg, rgba(30,58,138,0.92) 0%, rgba(30,58,138,0.6) 100%), url('https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=800&auto=format&fit=crop&q=80')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                border: "1px solid var(--color-hairline)",
              }}
            >
              <div>
                <span style={{ fontSize: "10px", fontWeight: 800, textTransform: "uppercase", backgroundColor: "#2874F0", color: "#ffffff", padding: "3px 8px" }}>
                  Footwear Arbitrage
                </span>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "26px", color: "#ffffff", margin: "8px 0 2px 0" }}>
                  MARATHON & PERFORMANCE RUNNING
                </h3>
                <p style={{ fontSize: "12px", color: "#bfdbfe", margin: 0 }}>Nike Air Max & Adidas Ultraboost up to 38% Off</p>
              </div>
              <span style={{ fontSize: "11px", fontWeight: 800, color: "#ffffff", display: "inline-flex", alignItems: "center", gap: "4px" }}>
                Compare Store Deals <ArrowRight size={12} />
              </span>
            </div>

            <div
              onClick={() => navigate("/category/fashion")}
              style={{
                height: "190px",
                borderRadius: "var(--radius-none)",
                overflow: "hidden",
                cursor: "pointer",
                padding: "24px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                backgroundImage: `linear-gradient(135deg, rgba(131,24,67,0.92) 0%, rgba(131,24,67,0.6) 100%), url('https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=800&auto=format&fit=crop&q=80')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                border: "1px solid var(--color-hairline)",
              }}
            >
              <div>
                <span style={{ fontSize: "10px", fontWeight: 800, textTransform: "uppercase", backgroundColor: "#FF3F6C", color: "#ffffff", padding: "3px 8px" }}>
                  Designer Wardrobe
                </span>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "26px", color: "#ffffff", margin: "8px 0 2px 0" }}>
                  AUTHENTIC DENIM & CASUAL POLOS
                </h3>
                <p style={{ fontSize: "12px", color: "#fbcfe8", margin: 0 }}>Levi's 511 & Tommy Hilfiger from ₹2,499</p>
              </div>
              <span style={{ fontSize: "11px", fontWeight: 800, color: "#ffffff", display: "inline-flex", alignItems: "center", gap: "4px" }}>
                Compare Store Deals <ArrowRight size={12} />
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 2. ALL CORE CAPABILITIES & SOFTWARE SECTIONS (Spacious & Modern) ─── */}
      <section style={{ padding: "100px 0", backgroundColor: "#fafafa", borderBottom: "1px solid var(--color-hairline)" }}>
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "760px", margin: "0 auto 64px auto" }}>
            <span
              style={{
                fontSize: "12px",
                fontWeight: 800,
                textTransform: "uppercase",
                letterSpacing: "1.5px",
                color: "var(--color-mute)",
                display: "inline-block",
                marginBottom: "8px",
              }}
            >
              Platform Architecture
            </span>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(36px, 5vw, 52px)",
                letterSpacing: "0.5px",
                margin: "0 0 16px 0",
                color: "var(--color-ink)",
                lineHeight: 1.05,
              }}
            >
              ALL SOFTWARE MODULES & FEATURES
            </h2>
            <p style={{ fontSize: "16px", color: "var(--color-mute)", lineHeight: 1.6, margin: 0 }}>
              An unbundled look at the complete intelligence suite built into Shopsy — designed for price transparency, automated monitoring, and effortless buying decisions.
            </p>
          </div>

          {/* Spacious Feature Bento Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
              gap: "32px",
            }}
          >
            {softwareSections.map((sec, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: "var(--color-canvas)",
                  border: "1px solid rgba(0,0,0,0.08)",
                  borderRadius: "var(--radius-none)",
                  padding: "36px 32px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  transition: "all 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
                  cursor: "pointer",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.02)",
                  position: "relative",
                  overflow: "hidden",
                }}
                onClick={() => {
                  if (sec.action) sec.action();
                  else if (sec.link) navigate(sec.link);
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-6px)";
                  e.currentTarget.style.boxShadow = "0 18px 40px rgba(0,0,0,0.08)";
                  e.currentTarget.style.borderColor = "var(--color-ink)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 2px 10px rgba(0,0,0,0.02)";
                  e.currentTarget.style.borderColor = "rgba(0,0,0,0.08)";
                }}
              >
                <div>
                  {/* Card Top Row: Icon + Badge */}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" }}>
                    <div
                      style={{
                        width: "52px",
                        height: "52px",
                        backgroundColor: "var(--color-soft-cloud)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        border: "1px solid var(--color-hairline-soft)",
                      }}
                    >
                      {sec.icon}
                    </div>
                    <span
                      style={{
                        fontSize: "11px",
                        fontWeight: 800,
                        backgroundColor: "var(--color-soft-cloud)",
                        color: "var(--color-ink)",
                        padding: "6px 14px",
                        borderRadius: "var(--radius-pill)",
                        textTransform: "uppercase",
                        letterSpacing: "0.8px",
                        border: "1px solid var(--color-hairline-soft)",
                      }}
                    >
                      {sec.badge}
                    </span>
                  </div>

                  {/* Tagline */}
                  <div
                    style={{
                      fontSize: "11px",
                      fontWeight: 800,
                      textTransform: "uppercase",
                      color: "#6366F1",
                      letterSpacing: "1px",
                      marginBottom: "8px",
                    }}
                  >
                    {sec.tag}
                  </div>

                  {/* Title */}
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "26px",
                      letterSpacing: "0.5px",
                      margin: "0 0 14px 0",
                      color: "var(--color-ink)",
                      lineHeight: 1.15,
                    }}
                  >
                    {sec.title}
                  </h3>

                  {/* Description */}
                  <p style={{ fontSize: "14px", color: "var(--color-mute)", lineHeight: 1.65, margin: 0 }}>
                    {sec.description}
                  </p>
                </div>

                {/* Footer Link */}
                <div
                  style={{
                    marginTop: "32px",
                    paddingTop: "18px",
                    borderTop: "1px solid var(--color-hairline-soft)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    fontSize: "13px",
                    fontWeight: 800,
                    color: "var(--color-ink)",
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                  }}
                >
                  <span>Launch Capability</span>
                  <div
                    style={{
                      width: "28px",
                      height: "28px",
                      backgroundColor: "var(--color-soft-cloud)",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <ChevronRight size={16} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 3. CATEGORY TAXONOMY OVERVIEW ──────────────────────────────── */}
      <section style={{ padding: "80px 0", backgroundColor: "var(--color-soft-cloud)", borderBottom: "1px solid var(--color-hairline)" }}>
        <div className="container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "16px", marginBottom: "40px" }}>
            <div>
              <span style={{ fontSize: "12px", fontWeight: 800, textTransform: "uppercase", letterSpacing: "1px", color: "var(--color-mute)" }}>
                Curated Catalog
              </span>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "42px", margin: "4px 0 0 0", color: "var(--color-ink)" }}>
                BROWSE 4 MASTER DEPARTMENTS
              </h2>
            </div>
            <button
              onClick={() => navigate("/")}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                padding: "10px 20px",
                backgroundColor: "var(--color-ink)",
                color: "var(--color-canvas)",
                fontSize: "13px",
                fontWeight: 700,
                border: "none",
                cursor: "pointer",
              }}
            >
              <span>View All Products</span>
              <ArrowRight size={14} />
            </button>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "20px",
            }}
          >
            {CATEGORY_DEFINITIONS.map((cat) => (
              <div
                key={cat.id}
                onClick={() => navigate(`/category/${cat.id}`)}
                style={{
                  backgroundColor: "var(--color-canvas)",
                  border: "1px solid var(--color-hairline)",
                  overflow: "hidden",
                  cursor: "pointer",
                  transition: "transform 0.15s ease, box-shadow 0.15s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow = "0 10px 24px rgba(0,0,0,0.06)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div style={{ height: "180px", overflow: "hidden", backgroundColor: "#f0f0f0", position: "relative" }}>
                  <img
                    src={cat.coverImage}
                    alt={cat.label}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      bottom: "10px",
                      left: "10px",
                      backgroundColor: "rgba(0,0,0,0.75)",
                      color: "#ffffff",
                      padding: "3px 8px",
                      fontSize: "10px",
                      fontWeight: 800,
                      textTransform: "uppercase",
                      letterSpacing: "0.5px",
                    }}
                  >
                    {cat.badge}
                  </div>
                </div>

                <div style={{ padding: "20px" }}>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "22px", margin: "0 0 6px 0", color: "var(--color-ink)" }}>
                    {cat.label}
                  </h3>
                  <p style={{ fontSize: "12px", color: "var(--color-mute)", margin: "0 0 16px 0", lineHeight: 1.4 }}>
                    {cat.tagline}
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                    {cat.subcategories.slice(1, 4).map((sub, i) => (
                      <span
                        key={i}
                        style={{
                          fontSize: "11px",
                          fontWeight: 600,
                          backgroundColor: "var(--color-soft-cloud)",
                          padding: "2px 8px",
                        }}
                      >
                        {sub}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 4. HOW IT WORKS (3 SIMPLE STEPS) ──────────────────────────── */}
      <section style={{ padding: "80px 0", borderBottom: "1px solid var(--color-hairline)" }}>
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto 50px auto" }}>
            <span style={{ fontSize: "12px", fontWeight: 800, textTransform: "uppercase", letterSpacing: "1px", color: "var(--color-mute)" }}>
              The Smart Workflow
            </span>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "42px", margin: "4px 0 0 0", color: "var(--color-ink)" }}>
              HOW SHOPSY WORKS
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "30px",
            }}
          >
            <div style={{ padding: "30px", backgroundColor: "var(--color-soft-cloud)", border: "1px solid var(--color-hairline)" }}>
              <div style={{ fontFamily: "var(--font-display)", fontSize: "36px", color: "var(--color-ink)", marginBottom: "8px" }}>
                01. SEARCH OR BROWSE
              </div>
              <p style={{ fontSize: "14px", color: "var(--color-mute)", lineHeight: 1.6, margin: 0 }}>
                Type any gadget, sneaker, jacket, or home appliance in our recommendation bar, or filter by category to browse verified products.
              </p>
            </div>

            <div style={{ padding: "30px", backgroundColor: "var(--color-soft-cloud)", border: "1px solid var(--color-hairline)" }}>
              <div style={{ fontFamily: "var(--font-display)", fontSize: "36px", color: "var(--color-ink)", marginBottom: "8px" }}>
                02. COMPARE & ANALYZE
              </div>
              <p style={{ fontSize: "14px", color: "var(--color-mute)", lineHeight: 1.6, margin: 0 }}>
                View side-by-side prices for Amazon, Flipkart, and Myntra. Inspect 6-month historical graphs, AR dimensions, and AI sentiment scores.
              </p>
            </div>

            <div style={{ padding: "30px", backgroundColor: "var(--color-soft-cloud)", border: "1px solid var(--color-hairline)" }}>
              <div style={{ fontFamily: "var(--font-display)", fontSize: "36px", color: "var(--color-ink)", marginBottom: "8px" }}>
                03. BUY AT LOWEST PRICE
              </div>
              <p style={{ fontSize: "14px", color: "var(--color-mute)", lineHeight: 1.6, margin: 0 }}>
                Click directly to the winning platform with guaranteed lowest pricing, official brand seller protection, and express delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 5. BIG BOTTOM CALL TO ACTION ──────────────────────────────── */}
      <section style={{ padding: "90px 0", backgroundColor: "var(--color-ink)", color: "var(--color-canvas)", textAlign: "center" }}>
        <div className="container" style={{ maxWidth: "800px", margin: "0 auto" }}>
          <span style={{ fontSize: "12px", fontWeight: 800, textTransform: "uppercase", letterSpacing: "1.5px", color: "var(--color-stone)" }}>
            Ready to shop smarter?
          </span>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(40px, 6vw, 68px)",
              lineHeight: 1,
              letterSpacing: "0.5px",
              margin: "12px 0 24px 0",
              color: "#ffffff",
            }}
          >
            ENTER THE SHOPSY MARKETPLACE NOW
          </h2>
          <p style={{ fontSize: "16px", color: "var(--color-stone)", lineHeight: 1.6, margin: "0 auto 36px auto", maxWidth: "600px" }}>
            Experience real-time price arbitrage, AI-driven review summarization, and multi-store analytics all in one unified interface.
          </p>

          <button
            onClick={() => navigate("/")}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              padding: "18px 44px",
              backgroundColor: "var(--color-canvas)",
              color: "var(--color-ink)",
              fontSize: "16px",
              fontWeight: 900,
              border: "none",
              cursor: "pointer",
              letterSpacing: "0.5px",
              transition: "transform 0.15s ease",
            }}
          >
            <span>LAUNCH APPLICATION</span>
            <ArrowRight size={20} />
          </button>
        </div>
      </section>
    </div>
  );
}
