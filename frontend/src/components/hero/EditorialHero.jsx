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
    <section style={{ position: "relative", width: "100%", overflow: "hidden" }}>
      <div className="container" style={{ paddingTop: "20px" }}>
        {/* Editorial Campaign Hero Tile with Exact Aura Mesh Gradient */}
        <div
          className="aura-mesh-hero aura-mesh-animated"
          style={{
            position: "relative",
            width: "100%",
            minHeight: "520px",
            borderRadius: "var(--radius-none)",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "clamp(32px, 5vw, 56px)",
            color: "var(--color-canvas)",
            border: "1px solid rgba(255, 255, 255, 0.12)",
            boxShadow: "0 24px 60px rgba(0,0,0,0.45)",
          }}
        >
          {/* Authentic Film Grain Noise Texture */}
          <div className="aura-grain-overlay" />

          {/* High-Intensity Diagonal Aura Light Streak */}
          <div className="aura-glow-beam" />

          {/* Top Tagline */}
          <div style={{ position: "relative", zIndex: 2, display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
            <span
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.15)",
                backdropFilter: "blur(8px)",
                padding: "6px 16px",
                borderRadius: "var(--radius-lg)",
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "1px",
                textTransform: "uppercase",
              }}
            >
              Multi-Platform AI Comparison
            </span>
            <span style={{ fontSize: "13px", color: "var(--color-hairline)", display: "flex", alignItems: "center", gap: "4px" }}>
              <ShieldCheck size={14} color="#4ade80" /> Verified Real-Time Live Pricing
            </span>
          </div>

          {/* Towering Display Campaign Lockup with Fixed-Height Typing Animation */}
          <div style={{ maxWidth: "800px", marginTop: "32px", marginBottom: "32px" }}>
            <div style={{ minHeight: "155px", display: "flex", flexDirection: "column", justifyContent: "flex-start" }}>
              <h1 className="display-campaign" style={{ color: "var(--color-canvas)", textShadow: "0 2px 20px rgba(0,0,0,0.5)", margin: 0, lineHeight: 0.95 }}>
                COMPARE. DECIDE.<br />
                <span style={{ color: "var(--color-canvas)", display: "inline-block", minHeight: "1.15em" }}>
                  {typedText}
                  <span className="typing-cursor" style={{ color: "#FF9900" }}>|</span>
                </span>
              </h1>
            </div>
            <p
              style={{
                fontSize: "16px",
                color: "rgba(255,255,255,0.85)",
                marginTop: "16px",
                maxWidth: "560px",
                lineHeight: 1.5,
              }}
            >
              Unified cross-platform intelligence across Amazon, Flipkart, and Myntra. Real-time review sentiment, true price drop alerts, and instant AI recommendations.
            </p>

            {/* Interactive Hero AI Search Bar */}
            <form onSubmit={handleHeroSubmit} style={{ marginTop: "24px", maxWidth: "620px" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: "var(--color-canvas)",
                  borderRadius: "var(--radius-lg)",
                  padding: "6px 8px 6px 20px",
                  boxShadow: "0 8px 30px rgba(0,0,0,0.35)",
                }}
              >
                <Search size={20} color="var(--color-mute)" style={{ marginRight: "12px", flexShrink: 0 }} />
                <input
                  type="text"
                  placeholder="Ask anything (e.g. 'Best running shoes under ₹5000')..."
                  value={heroSearch}
                  onChange={(e) => setHeroSearch(e.target.value)}
                  style={{
                    flex: 1,
                    border: "none",
                    outline: "none",
                    fontSize: "15px",
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
                    padding: "10px 20px",
                    fontSize: "14px",
                    fontWeight: 700,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                  }}
                >
                  <span>Search</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </form>

            {/* Quick Trending Searches */}
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "16px", flexWrap: "wrap" }}>
              <span style={{ fontSize: "12px", color: "var(--color-hairline)", fontWeight: 600 }}>Trending:</span>
              {trendingSearches.map((item) => (
                <button
                  key={item.label}
                  onClick={() => navigate(`/search?q=${encodeURIComponent(item.query)}`)}
                  style={{
                    backgroundColor: "rgba(255,255,255,0.12)",
                    color: "var(--color-canvas)",
                    border: "1px solid rgba(255,255,255,0.25)",
                    padding: "4px 14px",
                    borderRadius: "var(--radius-lg)",
                    fontSize: "12px",
                    fontWeight: 500,
                    transition: "all 0.15s ease",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "var(--color-canvas)";
                    e.currentTarget.style.color = "var(--color-ink)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.12)";
                    e.currentTarget.style.color = "var(--color-canvas)";
                  }}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Bottom Action Bar */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "16px",
              borderTop: "1px solid rgba(255,255,255,0.15)",
              paddingTop: "18px",
            }}
          >
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <button
                onClick={() => navigate("/deals")}
                className="btn-outline-on-image"
                style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}
              >
                <Zap size={14} fill="var(--color-ink)" />
                <span>Shop Today's Deals</span>
              </button>
              <button
                onClick={onOpenChat}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  backgroundColor: "rgba(255,255,255,0.15)",
                  color: "var(--color-canvas)",
                  padding: "0 24px",
                  height: "42px",
                  borderRadius: "var(--radius-lg)",
                  fontSize: "14px",
                  fontWeight: 600,
                  backdropFilter: "blur(10px)",
                }}
              >
                <Sparkles size={15} color="#f59e0b" />
                Ask Shopping Assistant
              </button>
            </div>

            <div style={{ fontSize: "13px", color: "var(--color-hairline)", display: "flex", gap: "20px" }}>
              <span>Amazon Fulfilled</span>
              <span>Flipkart Assured</span>
              <span>Myntra Luxe</span>
            </div>
          </div>
        </div>

        {/* ─── 3 FEATURED MARKETPLACE AD BANNER IMAGES ─────────────────────── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "18px",
            marginTop: "20px",
          }}
        >
          {/* Ad Card 1: Amazon Tech Carnival */}
          <div
            onClick={() => navigate("/category/electronics")}
            style={{
              position: "relative",
              height: "170px",
              backgroundColor: "#1E293B",
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
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "24px", color: "#ffffff", margin: "8px 0 4px 0", letterSpacing: "0.5px", lineHeight: 1.1 }}>
                FLAGSHIP AUDIO & GADGETS
              </h3>
              <p style={{ fontSize: "12px", color: "#cbd5e1", margin: 0, fontWeight: 600 }}>
                Save up to ₹8,000 on Sony & Apple
              </p>
            </div>
            <div style={{ zIndex: 2, alignSelf: "flex-end" }}>
              <span style={{ fontSize: "11px", fontWeight: 800, color: "#ffffff", display: "inline-flex", alignItems: "center", gap: "4px", backgroundColor: "rgba(255,255,255,0.2)", padding: "6px 12px", backdropFilter: "blur(4px)" }}>
                Shop Tech <ArrowRight size={12} />
              </span>
            </div>
          </div>

          {/* Ad Card 2: Flipkart Footwear Festival */}
          <div
            onClick={() => navigate("/category/footwear")}
            style={{
              position: "relative",
              height: "170px",
              backgroundColor: "#1E3A8A",
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
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "24px", color: "#ffffff", margin: "8px 0 4px 0", letterSpacing: "0.5px", lineHeight: 1.1 }}>
                AIR MAX & SNEAKER DROPS
              </h3>
              <p style={{ fontSize: "12px", color: "#bfdbfe", margin: 0, fontWeight: 600 }}>
                Flat 40% Off Marathon & Streetwear
              </p>
            </div>
            <div style={{ zIndex: 2, alignSelf: "flex-end" }}>
              <span style={{ fontSize: "11px", fontWeight: 800, color: "#ffffff", display: "inline-flex", alignItems: "center", gap: "4px", backgroundColor: "rgba(255,255,255,0.2)", padding: "6px 12px", backdropFilter: "blur(4px)" }}>
                Shop Shoes <ArrowRight size={12} />
              </span>
            </div>
          </div>

          {/* Ad Card 3: Myntra Fashion & Luxury */}
          <div
            onClick={() => navigate("/category/fashion")}
            style={{
              position: "relative",
              height: "170px",
              backgroundColor: "#831843",
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
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "24px", color: "#ffffff", margin: "8px 0 4px 0", letterSpacing: "0.5px", lineHeight: 1.1 }}>
                DENIM & DESIGNER POLOS
              </h3>
              <p style={{ fontSize: "12px", color: "#fbcfe8", margin: 0, fontWeight: 600 }}>
                Authentic Levi's, Tommy & Ray-Ban
              </p>
            </div>
            <div style={{ zIndex: 2, alignSelf: "flex-end" }}>
              <span style={{ fontSize: "11px", fontWeight: 800, color: "#ffffff", display: "inline-flex", alignItems: "center", gap: "4px", backgroundColor: "rgba(255,255,255,0.2)", padding: "6px 12px", backdropFilter: "blur(4px)" }}>
                Shop Wardrobe <ArrowRight size={12} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
