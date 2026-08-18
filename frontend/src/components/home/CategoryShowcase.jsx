import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { CATEGORY_DEFINITIONS } from "../../services/mockData";

export default function CategoryShowcase() {
  return (
    <section className="section-rhythm" style={{ padding: "48px 0", backgroundColor: "var(--color-canvas)" }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ marginBottom: "28px", borderBottom: "1px solid var(--color-hairline)", paddingBottom: "16px" }}>
          <span style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase", color: "var(--color-mute)" }}>
            Shop by Category
          </span>
          <h2 className="heading-xl" style={{ marginTop: "4px" }}>
            EXPLORE CURATED VERTICALS
          </h2>
          <p style={{ fontSize: "14px", color: "var(--color-mute)", marginTop: "2px" }}>
            Click any category card to open its dedicated catalog with specialized filters, specs & platform price comparisons.
          </p>
        </div>

        {/* 4-Up Amazon Quadrant Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "24px",
          }}
        >
          {CATEGORY_DEFINITIONS.map((cat) => (
            <div
              key={cat.id}
              style={{
                backgroundColor: "var(--color-soft-cloud)",
                border: "1px solid var(--color-hairline)",
                padding: "20px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
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
              {/* Header */}
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                  <span style={{ fontSize: "12px", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.5px", color: "var(--color-sale)" }}>
                    {cat.badge}
                  </span>
                  <span style={{ fontSize: "18px" }}>{cat.emoji}</span>
                </div>

                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "24px", letterSpacing: "0.5px", lineHeight: 1.1, color: "var(--color-ink)" }}>
                  {cat.label}
                </h3>
                <p style={{ fontSize: "12px", color: "var(--color-mute)", marginTop: "4px", minHeight: "34px", lineHeight: 1.4 }}>
                  {cat.tagline}
                </p>
              </div>

              {/* 4-Item Mini Quadrant Grid (Signature Amazon Design) */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "10px",
                  margin: "16px 0",
                }}
              >
                {cat.quadrantPreviews.map((item, idx) => (
                  <Link
                    key={idx}
                    to={`/category/${cat.id}`}
                    style={{
                      backgroundColor: "var(--color-canvas)",
                      padding: "8px",
                      borderRadius: "var(--radius-none)",
                      border: "1px solid var(--color-hairline-soft)",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      textAlign: "center",
                    }}
                  >
                    <div style={{ width: "100%", height: "85px", overflow: "hidden", marginBottom: "6px", backgroundColor: "var(--color-soft-cloud)" }}>
                      <img
                        src={item.image}
                        alt={item.title}
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        loading="lazy"
                      />
                    </div>
                    <span
                      style={{
                        fontSize: "11px",
                        fontWeight: 600,
                        color: "var(--color-ink)",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        width: "100%",
                      }}
                    >
                      {item.title}
                    </span>
                    <span style={{ fontSize: "11px", fontWeight: 700, color: "var(--color-mute)", marginTop: "2px" }}>
                      From {item.price}
                    </span>
                  </Link>
                ))}
              </div>

              {/* Dedicated Category Page Link */}
              <Link
                to={`/category/${cat.id}`}
                className="btn-secondary"
                style={{
                  width: "100%",
                  height: "40px",
                  fontSize: "13px",
                  fontWeight: 600,
                  gap: "6px",
                  backgroundColor: "var(--color-canvas)",
                  border: "1px solid var(--color-ink)",
                }}
              >
                <span>Explore {cat.shortLabel} Page</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
