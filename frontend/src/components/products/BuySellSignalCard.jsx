import React, { useState } from "react";
import { 
  TrendingUp, 
  TrendingDown, 
  ShieldCheck, 
  AlertCircle, 
  Zap, 
  Clock, 
  Target, 
  Activity, 
  CheckCircle2, 
  ArrowRight,
  Info,
  DollarSign,
  BarChart3,
  Flame
} from "lucide-react";
import { computeProductPriceSignal } from "../../services/signalAlgorithm";
import PlatformBadge from "./PlatformBadge";

export default function BuySellSignalCard({ product, variants = [], onSetTargetPrice }) {
  const [showTechnicalDetails, setShowTechnicalDetails] = useState(false);

  const signalData = computeProductPriceSignal(product, variants);
  if (!signalData) return null;

  const {
    signal,
    signalLabel,
    signalColor,
    verdictBadge,
    compositeScore,
    confidencePct,
    recommendation,
    isAllTimeLow,
    dropProbabilityPct,
    targetEntryPrice,
    potentialSavingsAtTarget,
    cheapestPlatform,
    cheapestPrice,
    arbitrageSaving,
    arbitrageSavingPct,
    metrics,
  } = signalData;

  const isBuy = signal === "STRONG_BUY" || signal === "BUY";
  const isHold = signal === "HOLD";
  const isSell = signal === "SELL_WAIT";

  return (
    <div
      style={{
        backgroundColor: "var(--color-canvas)",
        border: `2px solid ${isBuy ? "#10b981" : isHold ? "#f59e0b" : "#ef4444"}`,
        borderRadius: "var(--radius-none)",
        padding: "24px",
        marginTop: "32px",
        boxShadow: "0 8px 30px rgba(0,0,0,0.06)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Top Banner Tag */}
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          backgroundColor: signalColor,
          color: "#ffffff",
          fontSize: "11px",
          fontWeight: 900,
          letterSpacing: "0.5px",
          textTransform: "uppercase",
          padding: "4px 14px",
        }}
      >
        Quantitative Python Algorithm
      </div>

      {/* Header Section */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "16px", marginBottom: "20px" }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "5px",
                backgroundColor: "var(--color-ink)",
                color: "var(--color-canvas)",
                fontSize: "11px",
                fontWeight: 800,
                padding: "3px 8px",
                borderRadius: "var(--radius-sm)",
                textTransform: "uppercase",
              }}
            >
              <Activity size={12} color="#f59e0b" />
              Real-Time Algorithmic Signal
            </span>
            <span style={{ fontSize: "12px", color: "var(--color-mute)", fontWeight: 600 }}>
              Confidence: <strong>{confidencePct}%</strong>
            </span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
            <h3 style={{ fontSize: "26px", fontWeight: 900, margin: 0, color: signalColor, display: "flex", alignItems: "center", gap: "8px" }}>
              {isBuy ? <TrendingDown size={28} /> : isHold ? <Clock size={28} /> : <AlertCircle size={28} />}
              {signalLabel}
            </h3>
            <span
              style={{
                backgroundColor: isBuy ? "rgba(16, 185, 129, 0.12)" : isHold ? "rgba(245, 158, 11, 0.12)" : "rgba(239, 68, 68, 0.12)",
                color: signalColor,
                fontSize: "12px",
                fontWeight: 800,
                padding: "4px 10px",
                borderRadius: "var(--radius-pill)",
              }}
            >
              {verdictBadge}
            </span>
          </div>
        </div>

        {/* Target Price & Savings Box */}
        <div
          style={{
            backgroundColor: "var(--color-soft-cloud)",
            border: "1px solid var(--color-hairline)",
            padding: "12px 18px",
            textAlign: "right",
            minWidth: "180px",
          }}
        >
          <div style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase", color: "var(--color-mute)" }}>
            Optimal Target Entry:
          </div>
          <div style={{ fontSize: "20px", fontWeight: 900, color: "var(--color-ink)", marginTop: "2px" }}>
            ₹{targetEntryPrice.toLocaleString("en-IN")}
          </div>
          {potentialSavingsAtTarget > 0 ? (
            <div style={{ fontSize: "11px", color: "#059669", fontWeight: 700, marginTop: "2px" }}>
              Save up to ₹{potentialSavingsAtTarget.toLocaleString("en-IN")}
            </div>
          ) : (
            <div style={{ fontSize: "11px", color: "#059669", fontWeight: 700, marginTop: "2px" }}>
              ✓ Current price is at target!
            </div>
          )}
        </div>
      </div>

      {/* Algorithmic Rationale */}
      <div
        style={{
          backgroundColor: isBuy ? "rgba(16, 185, 129, 0.05)" : "var(--color-soft-cloud)",
          borderLeft: `4px solid ${signalColor}`,
          padding: "14px 18px",
          marginBottom: "20px",
          fontSize: "14px",
          color: "var(--color-charcoal)",
          lineHeight: 1.5,
        }}
      >
        <strong>Algorithmic Verdict: </strong>
        {recommendation}
      </div>

      {/* 4-KPI Metric Strip */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
          gap: "12px",
          marginBottom: "20px",
        }}
      >
        <div style={{ backgroundColor: "var(--color-soft-cloud)", padding: "12px", border: "1px solid var(--color-hairline)" }}>
          <div style={{ fontSize: "11px", color: "var(--color-mute)", fontWeight: 700, textTransform: "uppercase" }}>Best Store Now</div>
          <div style={{ fontSize: "16px", fontWeight: 900, color: "var(--color-ink)", marginTop: "4px" }}>
            {cheapestPlatform}
          </div>
          <div style={{ fontSize: "11px", color: "var(--color-mute)", marginTop: "2px" }}>
            ₹{cheapestPrice.toLocaleString("en-IN")}
          </div>
        </div>

        <div style={{ backgroundColor: "var(--color-soft-cloud)", padding: "12px", border: "1px solid var(--color-hairline)" }}>
          <div style={{ fontSize: "11px", color: "var(--color-mute)", fontWeight: 700, textTransform: "uppercase" }}>Cross-Arbitrage</div>
          <div style={{ fontSize: "16px", fontWeight: 900, color: arbitrageSaving > 0 ? "#059669" : "var(--color-ink)", marginTop: "4px" }}>
            {arbitrageSaving > 0 ? `₹${arbitrageSaving.toLocaleString("en-IN")}` : "Equal"}
          </div>
          <div style={{ fontSize: "11px", color: "var(--color-mute)", marginTop: "2px" }}>
            {arbitrageSavingPct}% platform spread
          </div>
        </div>

        <div style={{ backgroundColor: "var(--color-soft-cloud)", padding: "12px", border: "1px solid var(--color-hairline)" }}>
          <div style={{ fontSize: "11px", color: "var(--color-mute)", fontWeight: 700, textTransform: "uppercase" }}>14D Drop Chance</div>
          <div style={{ fontSize: "16px", fontWeight: 900, color: dropProbabilityPct > 50 ? "#f59e0b" : "#059669", marginTop: "4px" }}>
            {dropProbabilityPct}%
          </div>
          <div style={{ fontSize: "11px", color: "var(--color-mute)", marginTop: "2px" }}>
            Cyclic sale probability
          </div>
        </div>

        <div style={{ backgroundColor: "var(--color-soft-cloud)", padding: "12px", border: "1px solid var(--color-hairline)" }}>
          <div style={{ fontSize: "11px", color: "var(--color-mute)", fontWeight: 700, textTransform: "uppercase" }}>Quant Score</div>
          <div style={{ fontSize: "16px", fontWeight: 900, color: signalColor, marginTop: "4px" }}>
            {compositeScore}/100
          </div>
          <div style={{ fontSize: "11px", color: "var(--color-mute)", marginTop: "2px" }}>
            Multi-factor weighted
          </div>
        </div>
      </div>

      {/* Collapsible Technical Indicators Section */}
      <div style={{ borderTop: "1px solid var(--color-hairline)", paddingTop: "14px" }}>
        <button
          type="button"
          onClick={() => setShowTechnicalDetails(!showTechnicalDetails)}
          style={{
            background: "none",
            border: "none",
            fontSize: "12px",
            fontWeight: 700,
            color: "var(--color-ink)",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "6px",
            padding: 0,
          }}
        >
          <BarChart3 size={14} />
          <span>{showTechnicalDetails ? "Hide Technical Quant Indicators ▲" : "View Technical Quant Indicators (RSI, SMA, Bollinger) ▼"}</span>
        </button>

        {showTechnicalDetails && (
          <div
            style={{
              marginTop: "14px",
              backgroundColor: "var(--color-soft-cloud)",
              border: "1px solid var(--color-hairline)",
              padding: "16px",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "14px",
              fontSize: "12px",
            }}
          >
            <div>
              <span style={{ color: "var(--color-mute)", fontWeight: 700 }}>RSI (14-Day Momentum):</span>
              <div style={{ fontWeight: 800, fontSize: "14px", marginTop: "2px" }}>
                {metrics.rsi14d} / 100
                <span style={{ fontSize: "11px", fontWeight: 500, marginLeft: "6px", color: metrics.rsi14d < 45 ? "#059669" : "#f59e0b" }}>
                  ({metrics.rsi14d < 45 ? "Oversold Discount" : "Normal Momentum"})
                </span>
              </div>
            </div>

            <div>
              <span style={{ color: "var(--color-mute)", fontWeight: 700 }}>30-Day Moving Average (SMA-30):</span>
              <div style={{ fontWeight: 800, fontSize: "14px", marginTop: "2px" }}>
                ₹{metrics.sma30d.toLocaleString("en-IN")}
                <span style={{ fontSize: "11px", fontWeight: 600, marginLeft: "6px", color: metrics.smaDeviationPct <= 0 ? "#059669" : "#ef4444" }}>
                  ({metrics.smaDeviationPct > 0 ? `+${metrics.smaDeviationPct}%` : `${metrics.smaDeviationPct}%`})
                </span>
              </div>
            </div>

            <div>
              <span style={{ color: "var(--color-mute)", fontWeight: 700 }}>Bollinger Volatility Corridor:</span>
              <div style={{ fontWeight: 800, fontSize: "14px", marginTop: "2px" }}>
                ₹{metrics.bollingerBands.lower.toLocaleString("en-IN")} – ₹{metrics.bollingerBands.upper.toLocaleString("en-IN")}
              </div>
              <div style={{ fontSize: "10px", color: "var(--color-mute)", marginTop: "2px" }}>
                Bandwidth: {metrics.bollingerBands.bandwidthPct}% · StdDev: ₹{metrics.bollingerBands.stdDev}
              </div>
            </div>

            <div>
              <span style={{ color: "var(--color-mute)", fontWeight: 700 }}>90-Day Historical Range:</span>
              <div style={{ fontWeight: 800, fontSize: "14px", marginTop: "2px" }}>
                ₹{metrics.allTimeLow90d.toLocaleString("en-IN")} (Low) – ₹{metrics.allTimeHigh90d.toLocaleString("en-IN")} (High)
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
