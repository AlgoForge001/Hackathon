import React from "react";

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "var(--color-canvas)",
        borderTop: "1px solid var(--color-hairline)",
        paddingTop: "48px",
        paddingBottom: "32px",
        marginTop: "64px",
      }}
    >
      <div className="container">
        {/* 4 Columns (ui.md Spec) */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "36px",
            paddingBottom: "40px",
          }}
        >
          {/* Column 1 */}
          <div>
            <h4 style={{ fontSize: "14px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: "16px" }}>
              Platforms Compared
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px", fontSize: "14px", color: "var(--color-mute)" }}>
              <li><a href="#amazon" style={{ color: "inherit" }}>Amazon India Deals</a></li>
              <li><a href="#flipkart" style={{ color: "inherit" }}>Flipkart Assured Offers</a></li>
              <li><a href="#myntra" style={{ color: "inherit" }}>Myntra Fashion & Audio</a></li>
              <li><a href="#price-tracking" style={{ color: "inherit" }}>Historical Price Tracking</a></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h4 style={{ fontSize: "14px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: "16px" }}>
              AI Shopping Engine
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px", fontSize: "14px", color: "var(--color-mute)" }}>
              <li><a href="#sentiment" style={{ color: "inherit" }}>Sentiment Review Analyzer</a></li>
              <li><a href="#why-buy" style={{ color: "inherit" }}>Why Buy This Engine</a></li>
              <li><a href="#budget-explorer" style={{ color: "inherit" }}>Budget Explorer Tool</a></li>
              <li><a href="#alerts" style={{ color: "inherit" }}>Price Drop Alerts</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 style={{ fontSize: "14px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: "16px" }}>
              Popular Categories
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px", fontSize: "14px", color: "var(--color-mute)" }}>
              <li><a href="#electronics" style={{ color: "inherit" }}>Noise Cancelling Headphones</a></li>
              <li><a href="#footwear" style={{ color: "inherit" }}>Athletic & Running Shoes</a></li>
              <li><a href="#smartphones" style={{ color: "inherit" }}>5G Smartphones & Flagships</a></li>
              <li><a href="#fashion" style={{ color: "inherit" }}>Denim & Casual Polos</a></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h4 style={{ fontSize: "14px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: "16px" }}>
              About Shopsy
            </h4>
            <p style={{ fontSize: "13px", color: "var(--color-mute)", lineHeight: 1.5, marginBottom: "12px" }}>
              AI-Powered Multi-Platform Shopping Intelligence. Powered by real-time aggregation across Amazon, Flipkart, and Myntra.
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "12px", color: "var(--color-success)", fontWeight: 600 }}>
              <span style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "var(--color-success)" }}></span>
              Server Status: Operational
            </div>
          </div>
        </div>

        {/* Fine Print Legal Row (ui.md Spec) */}
        <div
          style={{
            borderTop: "1px solid var(--color-hairline-soft)",
            paddingTop: "24px",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "16px",
            fontSize: "12px",
            color: "var(--color-mute)",
          }}
        >
          <div>
            © 2026 Shopsy AI Personal Shopping Assistant. All rights reserved.
          </div>
          <div style={{ display: "flex", gap: "20px" }}>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Platform Ethics</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
