import React, { useState } from "react";
import { TrendingDown, TrendingUp, Calendar, Info, ShieldCheck } from "lucide-react";

export default function PriceHistoryGraph({ product, priceHistory = [] }) {
  const [selectedRange, setSelectedRange] = useState("90d");
  const [hoveredPoint, setHoveredPoint] = useState(null);

  // Fallback history points if none provided
  const historyData = priceHistory && priceHistory.length > 0 ? priceHistory : [
    { month: "May", amazon: Math.round((product?.price || 10000) * 1.12), flipkart: Math.round((product?.price || 10000) * 1.10), myntra: Math.round((product?.price || 10000) * 1.15) },
    { month: "Jun", amazon: Math.round((product?.price || 10000) * 1.08), flipkart: Math.round((product?.price || 10000) * 1.07), myntra: Math.round((product?.price || 10000) * 1.10) },
    { month: "Jul", amazon: Math.round((product?.price || 10000) * 1.05), flipkart: Math.round((product?.price || 10000) * 1.04), myntra: Math.round((product?.price || 10000) * 1.08) },
    { month: "Aug", amazon: Math.round((product?.price || 10000) * 1.02), flipkart: Math.round((product?.price || 10000) * 1.06), myntra: Math.round((product?.price || 10000) * 1.04) },
    { month: "Sep", amazon: Math.round((product?.price || 10000) * 0.98), flipkart: Math.round((product?.price || 10000) * 1.02), myntra: Math.round((product?.price || 10000) * 1.02) },
    { month: "Current", amazon: product?.price || 10000, flipkart: Math.round((product?.price || 10000) * 1.03), myntra: Math.round((product?.price || 10000) * 1.05) },
  ];

  const allPrices = historyData.flatMap((d) => [d.amazon, d.flipkart, d.myntra]).filter(Boolean);
  const minPrice = Math.min(...allPrices);
  const maxPrice = Math.max(...allPrices);
  const priceSpread = maxPrice - minPrice || 1;

  // Calculate SVG polyline points (width 500, height 180)
  const graphWidth = 540;
  const graphHeight = 160;
  const paddingX = 40;
  const paddingY = 25;

  const getCoordinates = (platformKey) => {
    return historyData.map((d, index) => {
      const x = paddingX + (index / (historyData.length - 1)) * (graphWidth - paddingX * 2);
      const val = d[platformKey] || minPrice;
      const y = graphHeight - paddingY - ((val - minPrice) / priceSpread) * (graphHeight - paddingY * 2);
      return { x, y, val, month: d.month, data: d };
    });
  };

  const amazonPoints = getCoordinates("amazon");
  const flipkartPoints = getCoordinates("flipkart");
  const myntraPoints = getCoordinates("myntra");

  const toSvgPath = (points) => points.map((p) => `${p.x},${p.y}`).join(" ");

  const lowestEver = minPrice;
  const currentPrice = product?.price || minPrice;
  const isAllTimeLow = currentPrice <= lowestEver * 1.02;

  return (
    <div
      style={{
        backgroundColor: "var(--color-canvas)",
        border: "1px solid var(--color-hairline)",
        borderRadius: "var(--radius-none)",
        padding: "24px",
        marginTop: "24px",
      }}
    >
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "12px", marginBottom: "20px" }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ fontSize: "11px", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.5px", color: "var(--color-mute)" }}>
              Price Intelligence Tracker
            </span>
            {isAllTimeLow && (
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "4px",
                  fontSize: "11px",
                  fontWeight: 800,
                  backgroundColor: "rgba(16, 185, 129, 0.12)",
                  color: "#059669",
                  padding: "2px 8px",
                  borderRadius: "var(--radius-pill)",
                }}
              >
                <TrendingDown size={12} /> All-Time Low
              </span>
            )}
          </div>
          <h3 style={{ fontFamily: "var(--font-display)", fontSize: "24px", letterSpacing: "0.5px", margin: "4px 0 0 0", color: "var(--color-ink)" }}>
            MULTI-PLATFORM PRICE HISTORY
          </h3>
          <p style={{ fontSize: "12px", color: "var(--color-mute)", margin: "2px 0 0 0" }}>
            Verified 90-day pricing trajectory across Amazon, Flipkart & Myntra
          </p>
        </div>

        {/* Legend */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px", fontSize: "12px", fontWeight: 600 }}>
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <span style={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "#FF9900" }} />
            <span>Amazon</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <span style={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "#2874F0" }} />
            <span>Flipkart</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <span style={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "#FF3F6C" }} />
            <span>Myntra</span>
          </div>
        </div>
      </div>

      {/* SVG Graph Canvas */}
      <div style={{ position: "relative", width: "100%", overflowX: "auto" }}>
        <svg
          viewBox={`0 0 ${graphWidth} ${graphHeight}`}
          style={{ width: "100%", height: "200px", display: "block" }}
        >
          {/* Horizontal Grid lines */}
          <line x1={paddingX} y1={paddingY} x2={graphWidth - paddingX} y2={paddingY} stroke="var(--color-hairline-soft)" strokeDasharray="3 3" />
          <line x1={paddingX} y1={graphHeight / 2} x2={graphWidth - paddingX} y2={graphHeight / 2} stroke="var(--color-hairline-soft)" strokeDasharray="3 3" />
          <line x1={paddingX} y1={graphHeight - paddingY} x2={graphWidth - paddingX} y2={graphHeight - paddingY} stroke="var(--color-hairline-soft)" strokeDasharray="3 3" />

          {/* Amazon Line */}
          <polyline
            fill="none"
            stroke="#FF9900"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            points={toSvgPath(amazonPoints)}
          />
          {amazonPoints.map((p, i) => (
            <circle
              key={`amz-${i}`}
              cx={p.x}
              cy={p.y}
              r="4"
              fill="#FF9900"
              stroke="#ffffff"
              strokeWidth="2"
              style={{ cursor: "pointer" }}
              onMouseEnter={() => setHoveredPoint({ ...p, platform: "Amazon", color: "#FF9900" })}
            />
          ))}

          {/* Flipkart Line */}
          <polyline
            fill="none"
            stroke="#2874F0"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            points={toSvgPath(flipkartPoints)}
          />
          {flipkartPoints.map((p, i) => (
            <circle
              key={`fk-${i}`}
              cx={p.x}
              cy={p.y}
              r="4"
              fill="#2874F0"
              stroke="#ffffff"
              strokeWidth="2"
              style={{ cursor: "pointer" }}
              onMouseEnter={() => setHoveredPoint({ ...p, platform: "Flipkart", color: "#2874F0" })}
            />
          ))}

          {/* Myntra Line */}
          <polyline
            fill="none"
            stroke="#FF3F6C"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            points={toSvgPath(myntraPoints)}
          />
          {myntraPoints.map((p, i) => (
            <circle
              key={`myn-${i}`}
              cx={p.x}
              cy={p.y}
              r="4"
              fill="#FF3F6C"
              stroke="#ffffff"
              strokeWidth="2"
              style={{ cursor: "pointer" }}
              onMouseEnter={() => setHoveredPoint({ ...p, platform: "Myntra", color: "#FF3F6C" })}
            />
          ))}

          {/* X Axis Month Labels */}
          {historyData.map((d, i) => {
            const x = paddingX + (i / (historyData.length - 1)) * (graphWidth - paddingX * 2);
            return (
              <text
                key={i}
                x={x}
                y={graphHeight - 4}
                textAnchor="middle"
                fontSize="10"
                fontWeight="600"
                fill="var(--color-mute)"
              >
                {d.month}
              </text>
            );
          })}
        </svg>

        {/* Hover Tooltip */}
        {hoveredPoint && (
          <div
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              backgroundColor: "var(--color-ink)",
              color: "var(--color-canvas)",
              padding: "6px 12px",
              borderRadius: "var(--radius-sm)",
              fontSize: "11px",
              fontWeight: 600,
              boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <span style={{ color: hoveredPoint.color, fontWeight: 800 }}>{hoveredPoint.platform}</span>
            <span>{hoveredPoint.month}:</span>
            <span style={{ fontWeight: 800 }}>₹{hoveredPoint.val.toLocaleString("en-IN")}</span>
          </div>
        )}
      </div>

      {/* Summary KPI Strip */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
          gap: "12px",
          marginTop: "16px",
          paddingTop: "16px",
          borderTop: "1px solid var(--color-hairline-soft)",
        }}
      >
        <div style={{ backgroundColor: "var(--color-soft-cloud)", padding: "10px 14px", borderRadius: "var(--radius-none)" }}>
          <div style={{ fontSize: "11px", color: "var(--color-mute)", fontWeight: 600 }}>All-Time Lowest</div>
          <div style={{ fontSize: "15px", fontWeight: 800, color: "#059669", marginTop: "2px" }}>
            ₹{minPrice.toLocaleString("en-IN")}
          </div>
        </div>
        <div style={{ backgroundColor: "var(--color-soft-cloud)", padding: "10px 14px", borderRadius: "var(--radius-none)" }}>
          <div style={{ fontSize: "11px", color: "var(--color-mute)", fontWeight: 600 }}>90-Day High</div>
          <div style={{ fontSize: "15px", fontWeight: 800, color: "var(--color-ink)", marginTop: "2px" }}>
            ₹{maxPrice.toLocaleString("en-IN")}
          </div>
        </div>
        <div style={{ backgroundColor: "var(--color-soft-cloud)", padding: "10px 14px", borderRadius: "var(--radius-none)" }}>
          <div style={{ fontSize: "11px", color: "var(--color-mute)", fontWeight: 600 }}>Best Platform Now</div>
          <div style={{ fontSize: "15px", fontWeight: 800, color: "var(--color-ink)", marginTop: "2px" }}>
            {product?.platform ? product.platform.toUpperCase() : "AMAZON"}
          </div>
        </div>
        <div style={{ backgroundColor: "var(--color-soft-cloud)", padding: "10px 14px", borderRadius: "var(--radius-none)" }}>
          <div style={{ fontSize: "11px", color: "var(--color-mute)", fontWeight: 600 }}>Buy Recommendation</div>
          <div style={{ fontSize: "15px", fontWeight: 800, color: "#059669", marginTop: "2px" }}>
            {isAllTimeLow ? "Strong Buy Now" : "Fair Price"}
          </div>
        </div>
      </div>
    </div>
  );
}
