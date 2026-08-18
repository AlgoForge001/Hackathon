import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Search, Sparkles, ArrowRight, ShieldCheck, Zap } from "lucide-react";

export default function EditorialHero({ onOpenChat }) {
  const [heroSearch, setHeroSearch] = useState("");
  const navigate = useNavigate();

  // Typing animation phrases
  const typingPhrases = [
    "NEVER OVERPAY.",
    "COMPARE 3 MAJOR STORES.",
    "FIND THE LOWEST PRICE.",
    "SMART SHOPPING WITH SHOPSY.",
    "BUY WITH 100% CONFIDENCE.",
  ];

  const [typedText, setTypedText] = useState("");
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = typingPhrases[phraseIdx % typingPhrases.length];
    let timer;

    if (!isDeleting && typedText === current) {
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && typedText === "") {
      setIsDeleting(false);
      setPhraseIdx((prev) => (prev + 1) % typingPhrases.length);
    } else {
      timer = setTimeout(() => {
        setTypedText(
          isDeleting
            ? current.substring(0, typedText.length - 1)
            : current.substring(0, typedText.length + 1)
        );
      }, isDeleting ? 35 : 75);
    }

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, phraseIdx]);

  const handleHeroSubmit = (e) => {
    e.preventDefault();
    if (heroSearch.trim()) {
      navigate(`/search?q=${encodeURIComponent(heroSearch.trim())}`);
    }
  };

  const trendingSearches = [
    { label: "Sony WH-1000XM5", query: "Sony WH-1000XM5" },
    { label: "Nike Air Max 270", query: "Nike Air Max" },
    { label: "AirPods Pro 2", query: "AirPods Pro" },
    { label: "Adidas Ultraboost", query: "Ultraboost" },
    { label: "Levi's 511", query: "Levis 511" },
    { label: "Pigeon Air Fryer", query: "Air Fryer" },
  ];

  return (
    <section style={{ position: "relative", width: "100%", padding: "24px 0 36px 0" }}>
      <div className="container">
        {/* Seamless Hero Container (No black card behind, clean natural page background) */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 0.8fr",
            gap: "clamp(24px, 5vw, 64px)",
            alignItems: "center",
            paddingBottom: "36px",
            borderBottom: "1px solid var(--color-hairline)",
          }}
          className="hero-grid-layout"
        >
          {/* ─── LEFT COLUMN: Text, Headline & AI Search ─── */}
          <div>
            {/* Top Status Bar */}
            <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap", marginBottom: "20px" }}>
              <span
                style={{
                  backgroundColor: "var(--color-soft-cloud)",
                  padding: "5px 14px",
                  borderRadius: "var(--radius-pill)",
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "0.8px",
                  textTransform: "uppercase",
                  color: "var(--color-ink)",
                  border: "1px solid var(--color-hairline)",
                }}
              >
                Multi-Platform AI Comparison
              </span>
              <span style={{ fontSize: "12px", color: "var(--color-mute)", display: "flex", alignItems: "center", gap: "5px" }}>
                <ShieldCheck size={14} color="#059669" /> Verified Live Real-Time Pricing
              </span>
            </div>

            {/* Display Campaign Lockup with Fixed-Height Typing Animation */}
            <div style={{ minHeight: "130px", display: "flex", flexDirection: "column", justifyContent: "flex-start" }}>
              <h1
                className="display-campaign"
                style={{
                  color: "var(--color-ink)",
                  margin: 0,
                  lineHeight: 0.95,
                  fontSize: "clamp(36px, 4.8vw, 60px)",
                }}
              >
                COMPARE. DECIDE.<br />
                <span style={{ color: "var(--color-ink)", display: "inline-block", minHeight: "1.15em" }}>
                  {typedText}
                  <span className="typing-cursor" style={{ color: "#FF9900" }}>|</span>
                </span>
              </h1>
            </div>

            <p
              style={{
                fontSize: "16px",
                color: "var(--color-mute)",
                marginTop: "16px",
                maxWidth: "540px",
                lineHeight: 1.6,
              }}
            >
              Unified cross-platform intelligence across Amazon, Flipkart, and Myntra. Real-time review sentiment, true price drop alerts, and instant AI recommendations.
            </p>

            {/* Interactive Hero AI Search Bar */}
            <form onSubmit={handleHeroSubmit} style={{ marginTop: "24px", maxWidth: "560px" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: "var(--color-canvas)",
                  borderRadius: "var(--radius-lg)",
                  padding: "6px 8px 6px 18px",
                  border: "1.5px solid var(--color-hairline)",
                  boxShadow: "0 6px 24px rgba(0, 0, 0, 0.06)",
                }}
              >
                <Search size={18} color="var(--color-mute)" style={{ marginRight: "10px", flexShrink: 0 }} />
                <input
                  type="text"
                  placeholder="Ask anything (e.g. 'Best running shoes under ₹5000')..."
                  value={heroSearch}
                  onChange={(e) => setHeroSearch(e.target.value)}
                  style={{
                    flex: 1,
                    border: "none",
                    outline: "none",
                    fontSize: "14px",
                    fontFamily: "var(--font-ui)",
                    color: "var(--color-ink)",
                    backgroundColor: "transparent",
                  }}
                />
                <button
                  type="submit"
                  style={{
                    backgroundColor: "var(--color-ink)",
                    color: "var(--color-canvas)",
                    border: "none",
                    borderRadius: "var(--radius-lg)",
                    padding: "10px 18px",
                    fontSize: "13px",
                    fontWeight: 700,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                  }}
                >
                  <span>Search</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            </form>

            {/* Quick Trending Searches */}
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "16px", flexWrap: "wrap" }}>
              <span style={{ fontSize: "12px", color: "var(--color-mute)", fontWeight: 600 }}>Trending:</span>
              {trendingSearches.map((item) => (
                <button
                  key={item.label}
                  onClick={() => navigate(`/search?q=${encodeURIComponent(item.query)}`)}
                  style={{
                    backgroundColor: "var(--color-soft-cloud)",
                    color: "var(--color-ink)",
                    border: "1px solid var(--color-hairline)",
                    padding: "4px 12px",
                    borderRadius: "var(--radius-pill)",
                    fontSize: "12px",
                    fontWeight: 500,
                    transition: "all 0.15s ease",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "var(--color-ink)";
                    e.currentTarget.style.color = "#ffffff";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "var(--color-soft-cloud)";
                    e.currentTarget.style.color = "var(--color-ink)";
                  }}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Action Buttons & Fulfillment Credential */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "14px",
                flexWrap: "wrap",
                marginTop: "28px",
              }}
            >
              <button
                onClick={() => navigate("/deals")}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  padding: "11px 22px",
                  backgroundColor: "var(--color-ink)",
                  color: "#ffffff",
                  borderRadius: "var(--radius-sm)",
                  fontSize: "13px",
                  fontWeight: 700,
                  border: "none",
                  cursor: "pointer",
                }}
              >
                <Zap size={14} fill="#ffffff" />
                <span>Shop Today's Deals</span>
              </button>

              <button
                onClick={onOpenChat}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  backgroundColor: "var(--color-soft-cloud)",
                  color: "var(--color-ink)",
                  padding: "10px 20px",
                  borderRadius: "var(--radius-sm)",
                  fontSize: "13px",
                  fontWeight: 600,
                  border: "1px solid var(--color-hairline)",
                  cursor: "pointer",
                }}
              >
                <Sparkles size={15} color="#d97706" />
                Ask Shopping Assistant
              </button>
            </div>
          </div>

          {/* ─── RIGHT COLUMN: 9:16 Video Showcase Frame ─── */}
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
                boxShadow: "0 20px 45px rgba(0, 0, 0, 0.16), 0 2px 8px rgba(0, 0, 0, 0.08)",
              }}
            >
              {/* 9:16 AutoPlay Video */}
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

        {/* ─── 3 FEATURED MARKETPLACE AD BANNER IMAGES ─────────────────────── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "18px",
            marginTop: "24px",
          }}
        >
          {/* Ad Card 1: Amazon Tech Carnival */}
          <div
            onClick={() => navigate("/category/electronics")}
            style={{
              position: "relative",
              height: "160px",
              backgroundColor: "#1E293B",
              borderRadius: "var(--radius-sm)",
              overflow: "hidden",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "24px",
              backgroundImage: `linear-gradient(90deg, rgba(15,23,42,0.95) 0%, rgba(15,23,42,0.7) 60%, rgba(15,23,42,0.3) 100%), url('https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80')`,
              backgroundSize: "cover",
              backgroundPosition: "center right",
              border: "1px solid var(--color-hairline)",
              transition: "transform 0.15s ease, box-shadow 0.15s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-3px)";
              e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <div style={{ zIndex: 2, maxWidth: "230px" }}>
              <span style={{ fontSize: "10px", fontWeight: 800, textTransform: "uppercase", letterSpacing: "1px", backgroundColor: "#FF9900", color: "#111111", padding: "2px 8px", borderRadius: "2px" }}>
                Amazon Deals
              </span>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "22px", color: "#ffffff", margin: "6px 0 3px 0", letterSpacing: "0.5px", lineHeight: 1.1 }}>
                FLAGSHIP AUDIO & GADGETS
              </h3>
              <p style={{ fontSize: "12px", color: "#cbd5e1", margin: 0, fontWeight: 600 }}>
                Save up to ₹8,000 on Sony & Apple
              </p>
            </div>
            <div style={{ zIndex: 2, alignSelf: "flex-end" }}>
              <span style={{ fontSize: "11px", fontWeight: 800, color: "#ffffff", display: "inline-flex", alignItems: "center", gap: "4px", backgroundColor: "rgba(255,255,255,0.2)", padding: "6px 12px", backdropFilter: "blur(4px)", borderRadius: "var(--radius-sm)" }}>
                Shop Tech <ArrowRight size={12} />
              </span>
            </div>
          </div>

          {/* Ad Card 2: Flipkart Footwear Festival */}
          <div
            onClick={() => navigate("/category/footwear")}
            style={{
              position: "relative",
              height: "160px",
              backgroundColor: "#1E3A8A",
              borderRadius: "var(--radius-sm)",
              overflow: "hidden",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "24px",
              backgroundImage: `linear-gradient(90deg, rgba(30,58,138,0.95) 0%, rgba(30,58,138,0.7) 60%, rgba(30,58,138,0.3) 100%), url('https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop&q=80')`,
              backgroundSize: "cover",
              backgroundPosition: "center right",
              border: "1px solid var(--color-hairline)",
              transition: "transform 0.15s ease, box-shadow 0.15s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-3px)";
              e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <div style={{ zIndex: 2, maxWidth: "230px" }}>
              <span style={{ fontSize: "10px", fontWeight: 800, textTransform: "uppercase", letterSpacing: "1px", backgroundColor: "#2874F0", color: "#ffffff", padding: "2px 8px", borderRadius: "2px" }}>
                Flipkart Assured
              </span>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "22px", color: "#ffffff", margin: "6px 0 3px 0", letterSpacing: "0.5px", lineHeight: 1.1 }}>
                AIR MAX & SNEAKER DROPS
              </h3>
              <p style={{ fontSize: "12px", color: "#bfdbfe", margin: 0, fontWeight: 600 }}>
                Flat 40% Off Marathon & Streetwear
              </p>
            </div>
            <div style={{ zIndex: 2, alignSelf: "flex-end" }}>
              <span style={{ fontSize: "11px", fontWeight: 800, color: "#ffffff", display: "inline-flex", alignItems: "center", gap: "4px", backgroundColor: "rgba(255,255,255,0.2)", padding: "6px 12px", backdropFilter: "blur(4px)", borderRadius: "var(--radius-sm)" }}>
                Shop Shoes <ArrowRight size={12} />
              </span>
            </div>
          </div>

          {/* Ad Card 3: Myntra Fashion & Luxury */}
          <div
            onClick={() => navigate("/category/fashion")}
            style={{
              position: "relative",
              height: "160px",
              backgroundColor: "#831843",
              borderRadius: "var(--radius-sm)",
              overflow: "hidden",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "24px",
              backgroundImage: `linear-gradient(90deg, rgba(131,24,67,0.95) 0%, rgba(131,24,67,0.7) 60%, rgba(131,24,67,0.3) 100%), url('https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800&auto=format&fit=crop&q=80')`,
              backgroundSize: "cover",
              backgroundPosition: "center right",
              border: "1px solid var(--color-hairline)",
              transition: "transform 0.15s ease, box-shadow 0.15s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-3px)";
              e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <div style={{ zIndex: 2, maxWidth: "230px" }}>
              <span style={{ fontSize: "10px", fontWeight: 800, textTransform: "uppercase", letterSpacing: "1px", backgroundColor: "#FF3F6C", color: "#ffffff", padding: "2px 8px", borderRadius: "2px" }}>
                Myntra Luxe
              </span>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "22px", color: "#ffffff", margin: "6px 0 3px 0", letterSpacing: "0.5px", lineHeight: 1.1 }}>
                DENIM & DESIGNER POLOS
              </h3>
              <p style={{ fontSize: "12px", color: "#fbcfe8", margin: 0, fontWeight: 600 }}>
                Authentic Levi's, Tommy & Ray-Ban
              </p>
            </div>
            <div style={{ zIndex: 2, alignSelf: "flex-end" }}>
              <span style={{ fontSize: "11px", fontWeight: 800, color: "#ffffff", display: "inline-flex", alignItems: "center", gap: "4px", backgroundColor: "rgba(255,255,255,0.2)", padding: "6px 12px", backdropFilter: "blur(4px)", borderRadius: "var(--radius-sm)" }}>
                Shop Wardrobe <ArrowRight size={12} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
