import React from "react";
import { 
  Split, 
  Sparkles, 
  TrendingDown, 
  Sliders, 
  MessageSquareText, 
  ShieldCheck, 
  Zap, 
  CheckCircle2,
  ArrowRight,
  Search,
  Bell,
  Scale
} from "lucide-react";

export default function SolutionsOverview({ onOpenChat, onExploreDeals }) {
  const problemsAndSolutions = [
    {
      problem: "Price Fragmentation",
      problemDesc: "Prices vary wildly across Amazon, Flipkart, and Myntra, forcing customers to open 10+ tabs manually.",
      solution: "Unified Multi-Platform Feed",
      solutionDesc: "Real-time aggregated comparison in a single view with instant lowest-price highlights.",
      icon: Scale,
    },
    {
      problem: "Fake & Overwhelming Reviews",
      problemDesc: "Thousands of 5-star fake reviews and long essays make it impossible to know the real quality.",
      solution: "2-Sentence AI Review Synthesis",
      solutionDesc: "AI extracts exactly what buyers love vs what they complain about with sentiment analysis.",
      icon: Sparkles,
    },
    {
      problem: "Hidden Deals & Fake Discounts",
      problemDesc: "Artificially inflated MRPs trick customers into believing they are getting 70% discounts.",
      solution: "Best Overall Value Scoring",
      solutionDesc: "Weighted algorithmic formula evaluating Price Value (35%), Ratings (30%), Sentiment (20%), and Delivery (15%).",
      icon: TrendingDown,
    },
    {
      problem: "Budget Uncertainty",
      problemDesc: "Shoppers don't know if spending ₹1,000 more gets a significantly better product.",
      solution: "Interactive Budget Explorer",
      solutionDesc: "Intelligently calculates and explains exactly what feature upgrades unlock at higher budget tiers.",
      icon: Sliders,
    },
  ];

  const features = [
    {
      title: "Cross-Platform Real-Time Aggregator",
      badge: "LIVE INTEGRATION",
      desc: "Connects directly with major Indian e-commerce platforms (Amazon India, Flipkart, Myntra) to display verified stock, prices, and shipping estimates.",
      tags: ["Amazon Fulfilled", "Flipkart Assured", "Myntra Luxe"],
    },
    {
      title: "Conversational AI Shopping Assistant",
      badge: "OPENROUTER LLM",
      desc: "Chat in natural language like 'Find running shoes under ₹4000 with good arch support'. Intent parsing extracts precise filters automatically.",
      tags: ["Intent Parsing", "Context Memory", "Instant Suggestions"],
    },
    {
      title: "Algorithmic 'Why Buy This' Verdicts",
      badge: "INSTANT INTELLIGENCE",
      desc: "Every product gets a concise 1-sentence objective justification focusing on tangible specs, price value, and verified rating count.",
      tags: ["No Marketing Fluff", "Data-Driven", "100% Objective"],
    },
    {
      title: "Automated Price Drop Alerts",
      badge: "PRICE TRACKER",
      desc: "Set your target price for any item across platforms and get alerted the second a flash sale or price reduction occurs.",
      tags: ["Custom Thresholds", "Multi-Platform Tracking", "1-Click Alert"],
    },
  ];

  return (
    <section style={{ backgroundColor: "var(--color-canvas)", borderBottom: "1px solid var(--color-hairline)" }}>
      {/* ─── 1. PLATFORM VALUE STATS STRIP ───────────────────────── */}
      <div style={{ backgroundColor: "var(--color-soft-cloud)", borderBottom: "1px solid var(--color-hairline)" }}>
        <div
          className="container"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "24px",
            padding: "24px",
            textAlign: "center",
          }}
        >
          <div>
            <div style={{ fontFamily: "var(--font-display)", fontSize: "36px", color: "var(--color-ink)", lineHeight: 1 }}>
              3 MAJOR PLATFORMS
            </div>
            <div style={{ fontSize: "13px", color: "var(--color-mute)", fontWeight: 500, marginTop: "4px" }}>
              Amazon · Flipkart · Myntra
            </div>
          </div>
          <div>
            <div style={{ fontFamily: "var(--font-display)", fontSize: "36px", color: "var(--color-ink)", lineHeight: 1 }}>
              100% LIVE
            </div>
            <div style={{ fontSize: "13px", color: "var(--color-mute)", fontWeight: 500, marginTop: "4px" }}>
              Real-time In-Stock Verification
            </div>
          </div>
          <div>
            <div style={{ fontFamily: "var(--font-display)", fontSize: "36px", color: "var(--color-ink)", lineHeight: 1 }}>
              AI REVIEW SYNTHESIS
            </div>
            <div style={{ fontSize: "13px", color: "var(--color-mute)", fontWeight: 500, marginTop: "4px" }}>
              Pros, Cons & Sentiment Scores
            </div>
          </div>
          <div>
            <div style={{ fontFamily: "var(--font-display)", fontSize: "36px", color: "var(--color-ink)", lineHeight: 1 }}>
              ZERO OVERPAYING
            </div>
            <div style={{ fontSize: "13px", color: "var(--color-mute)", fontWeight: 500, marginTop: "4px" }}>
              Best Overall Value Algorithm
            </div>
          </div>
        </div>
      </div>

      {/* ─── 2. THE PROBLEM & OUR SOLUTION MATRIX ─────────────────── */}
      <div className="container" style={{ padding: "64px 24px" }}>
        <div style={{ textAlign: "center", maxWidth: "720px", margin: "0 auto 48px" }}>
          <span style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase", color: "var(--color-mute)" }}>
            Why We Built AlgoForge ShopAI
          </span>
          <h2 className="heading-xl" style={{ marginTop: "8px" }}>
            MODERN E-COMMERCE IS BROKEN.<br />WE FIXED IT WITH AI.
          </h2>
          <p style={{ fontSize: "16px", color: "var(--color-charcoal)", marginTop: "12px", lineHeight: 1.5 }}>
            Online shopping forces buyers into manual comparison, deceptive sales, and analysis paralysis. AlgoForge transforms fractured marketplace data into definitive buying decisions.
          </p>
        </div>

        {/* 4-Up Problem & Solution Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "24px",
          }}
        >
          {problemsAndSolutions.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                style={{
                  backgroundColor: "var(--color-soft-cloud)",
                  border: "1px solid var(--color-hairline)",
                  borderRadius: "var(--radius-none)",
                  padding: "24px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  transition: "transform 0.2s ease, border-color 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-3px)";
                  e.currentTarget.style.borderColor = "var(--color-ink)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.borderColor = "var(--color-hairline)";
                }}
              >
                <div>
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "var(--radius-sm)",
                      backgroundColor: "var(--color-ink)",
                      color: "var(--color-canvas)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "16px",
                    }}
                  >
                    <Icon size={20} />
                  </div>

                  {/* Problem */}
                  <div style={{ marginBottom: "16px", paddingBottom: "16px", borderBottom: "1px solid var(--color-hairline)" }}>
                    <div style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase", color: "var(--color-sale)", letterSpacing: "0.5px" }}>
                      The Problem: {item.problem}
                    </div>
                    <p style={{ fontSize: "13px", color: "var(--color-mute)", marginTop: "4px", lineHeight: 1.4 }}>
                      {item.problemDesc}
                    </p>
                  </div>

                  {/* Solution */}
                  <div>
                    <div style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase", color: "var(--color-success)", letterSpacing: "0.5px" }}>
                      AlgoForge Solution: {item.solution}
                    </div>
                    <p style={{ fontSize: "14px", fontWeight: 500, color: "var(--color-ink)", marginTop: "4px", lineHeight: 1.45 }}>
                      {item.solutionDesc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ─── 3. CORE ARCHITECTURAL SOLUTIONS ──────────────────────── */}
      <div style={{ backgroundColor: "var(--color-soft-cloud)", padding: "64px 0", borderTop: "1px solid var(--color-hairline)" }}>
        <div className="container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "16px", marginBottom: "36px" }}>
            <div>
              <span style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase", color: "var(--color-mute)" }}>
                Core Capabilities
              </span>
              <h2 className="heading-xl" style={{ marginTop: "4px" }}>
                EVERYTHING YOU NEED TO BUY SMARTER
              </h2>
            </div>

            <div style={{ display: "flex", gap: "12px" }}>
              <button onClick={onOpenChat} className="btn-primary" style={{ height: "42px", padding: "0 20px", fontSize: "14px" }}>
                <Sparkles size={15} />
                <span>Launch AI Advisor</span>
              </button>
              <button onClick={onExploreDeals} className="btn-secondary" style={{ height: "42px", padding: "0 20px", fontSize: "14px" }}>
                <span>View Live Catalog</span>
              </button>
            </div>
          </div>

          {/* 2x2 Feature Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "24px",
            }}
          >
            {features.map((feat, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: "var(--color-canvas)",
                  padding: "28px",
                  border: "1px solid var(--color-hairline)",
                  borderRadius: "var(--radius-none)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <span
                    style={{
                      fontSize: "11px",
                      fontWeight: 800,
                      letterSpacing: "0.5px",
                      color: "var(--color-ink)",
                      backgroundColor: "var(--color-soft-cloud)",
                      padding: "4px 10px",
                      borderRadius: "var(--radius-sm)",
                      textTransform: "uppercase",
                      display: "inline-block",
                      marginBottom: "12px",
                    }}
                  >
                    {feat.badge}
                  </span>

                  <h3 style={{ fontSize: "18px", fontWeight: 700, color: "var(--color-ink)", lineHeight: 1.3 }}>
                    {feat.title}
                  </h3>

                  <p style={{ fontSize: "14px", color: "var(--color-charcoal)", marginTop: "8px", lineHeight: 1.5 }}>
                    {feat.desc}
                  </p>
                </div>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "20px" }}>
                  {feat.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      style={{
                        fontSize: "11px",
                        fontWeight: 600,
                        color: "var(--color-mute)",
                        backgroundColor: "var(--color-soft-cloud)",
                        padding: "3px 8px",
                        borderRadius: "var(--radius-sm)",
                      }}
                    >
                      ✓ {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── 4. HOW IT WORKS (3 SIMPLE STEPS) ────────────────────── */}
      <div className="container" style={{ padding: "64px 24px" }}>
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <span style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase", color: "var(--color-mute)" }}>
            Workflow
          </span>
          <h2 className="heading-xl" style={{ marginTop: "4px" }}>
            HOW ALGOFORGE WORKS IN 3 STEPS
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "32px",
            position: "relative",
          }}
        >
          {/* Step 1 */}
          <div style={{ textAlign: "center", padding: "20px" }}>
            <div
              style={{
                width: "56px",
                height: "56px",
                borderRadius: "var(--radius-full)",
                backgroundColor: "var(--color-ink)",
                color: "var(--color-canvas)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "var(--font-display)",
                fontSize: "28px",
                margin: "0 auto 16px",
              }}
            >
              1
            </div>
            <h3 style={{ fontSize: "16px", fontWeight: 700 }}>Search or Ask in Plain English</h3>
            <p style={{ fontSize: "14px", color: "var(--color-mute)", marginTop: "6px", lineHeight: 1.45 }}>
              Type any product keyword or conversational prompt like "best running shoes under ₹5000".
            </p>
          </div>

          {/* Step 2 */}
          <div style={{ textAlign: "center", padding: "20px" }}>
            <div
              style={{
                width: "56px",
                height: "56px",
                borderRadius: "var(--radius-full)",
                backgroundColor: "var(--color-ink)",
                color: "var(--color-canvas)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "var(--font-display)",
                fontSize: "28px",
                margin: "0 auto 16px",
              }}
            >
              2
            </div>
            <h3 style={{ fontSize: "16px", fontWeight: 700 }}>Real-Time Multi-Platform Aggregation</h3>
            <p style={{ fontSize: "14px", color: "var(--color-mute)", marginTop: "6px", lineHeight: 1.45 }}>
              Our engine queries Amazon, Flipkart, and Myntra simultaneously, extracting verified prices and sentiment.
            </p>
          </div>

          {/* Step 3 */}
          <div style={{ textAlign: "center", padding: "20px" }}>
            <div
              style={{
                width: "56px",
                height: "56px",
                borderRadius: "var(--radius-full)",
                backgroundColor: "var(--color-ink)",
                color: "var(--color-canvas)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "var(--font-display)",
                fontSize: "28px",
                margin: "0 auto 16px",
              }}
            >
              3
            </div>
            <h3 style={{ fontSize: "16px", fontWeight: 700 }}>Decide with AI & Buy at Lowest Price</h3>
            <p style={{ fontSize: "14px", color: "var(--color-mute)", marginTop: "6px", lineHeight: 1.45 }}>
              Review the Best Overall pick, check upgrade possibilities, or set a price drop alert in 1-click.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
