import React from "react";
import { ArrowRight } from "lucide-react";

export default function CategoryRail({ onSelectCategory }) {
  const categoryTiles = [
    {
      id: "electronics",
      title: "AUDIO & ELECTRONICS",
      subtitle: "Noise Cancelling, TWS & Premium Sound",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop",
      btnText: "Shop Electronics",
    },
    {
      id: "footwear",
      title: "ATHLETIC & RUNNING",
      subtitle: "Performance Footwear & Street Classics",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop",
      btnText: "Shop Footwear",
    },
    {
      id: "fashion",
      title: "DENIM & APPAREL",
      subtitle: "Slim Fits, Everyday Polos & Smart Casuals",
      image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=800&auto=format&fit=crop",
      btnText: "Shop Fashion",
    },
    {
      id: "home",
      title: "SMART LIVING",
      subtitle: "BLDC Airflow, Air Fryers & Kitchen Blends",
      image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=800&auto=format&fit=crop",
      btnText: "Shop Home",
    },
  ];

  return (
    <section className="section-rhythm" style={{ backgroundColor: "var(--color-soft-cloud)", padding: "48px 0" }}>
      <div className="container">
        {/* Header */}
        <div style={{ marginBottom: "28px" }}>
          <span style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase", color: "var(--color-mute)" }}>
            Curated Verticals
          </span>
          <h2 className="heading-xl" style={{ marginTop: "4px" }}>
            EXPLORE BY CATEGORY
          </h2>
        </div>

        {/* 4-Up Cinematic Category Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "20px",
          }}
        >
          {categoryTiles.map((tile) => (
            <div
              key={tile.id}
              onClick={() => {
                onSelectCategory(tile.id);
                const elem = document.getElementById("featured-grid");
                if (elem) elem.scrollIntoView({ behavior: "smooth" });
              }}
              style={{
                position: "relative",
                height: "380px",
                borderRadius: "var(--radius-none)",
                overflow: "hidden",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                padding: "24px",
                backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.85) 100%), url('${tile.image}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                transition: "transform 0.25s ease, box-shadow 0.25s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 12px 30px rgba(0,0,0,0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {/* Copy Lockup */}
              <div style={{ marginBottom: "16px", color: "var(--color-canvas)" }}>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "28px", letterSpacing: "0.5px", lineHeight: 1 }}>
                  {tile.title}
                </h3>
                <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.8)", marginTop: "4px" }}>
                  {tile.subtitle}
                </p>
              </div>

              {/* On-Image White Pill CTA (ui.md Spec) */}
              <div>
                <button
                  className="btn-outline-on-image"
                  style={{
                    height: "38px",
                    padding: "0 20px",
                    fontSize: "13px",
                    gap: "6px",
                  }}
                >
                  <span>{tile.btnText}</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
