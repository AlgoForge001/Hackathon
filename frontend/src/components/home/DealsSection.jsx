import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Zap, Clock, ArrowRight, TrendingDown } from "lucide-react";
import ProductCard from "../products/ProductCard";
import { mockProducts } from "../../services/mockData";

export default function DealsSection({ onSelectProduct }) {
  const [timeLeft, setTimeLeft] = useState({ hours: 5, minutes: 42, seconds: 18 });

  // Live countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 6, minutes: 0, seconds: 0 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Filter top deals (discount_percent >= 38%)
  const topDeals = mockProducts
    .filter((p) => (p.discount_percent || p.discountPercent) >= 38)
    // One from each group to avoid duplicates on home screen
    .filter((v, i, a) => a.findIndex((t) => (t.groupId || t.group_id) === (v.groupId || v.group_id)) === i)
    .slice(0, 4);

  const formatTimer = (num) => String(num).padStart(2, "0");

  return (
    <section className="section-rhythm" style={{ padding: "36px 0", backgroundColor: "var(--color-soft-cloud)" }}>
      <div className="container">
        {/* Header Block */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            flexWrap: "wrap",
            gap: "16px",
            marginBottom: "24px",
            borderBottom: "1px solid var(--color-hairline)",
            paddingBottom: "16px",
          }}
        >
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "4px" }}>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "4px",
                  backgroundColor: "var(--color-sale)",
                  color: "#ffffff",
                  fontSize: "11px",
                  fontWeight: 800,
                  textTransform: "uppercase",
                  padding: "3px 10px",
                  borderRadius: "4px",
                  letterSpacing: "0.5px",
                }}
              >
                <Zap size={12} fill="#ffffff" />
                Lightning Deals
              </span>

              {/* Countdown Clock */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  fontSize: "13px",
                  fontWeight: 700,
                  color: "var(--color-ink)",
                  backgroundColor: "var(--color-canvas)",
                  padding: "3px 12px",
                  borderRadius: "var(--radius-lg)",
                  border: "1px solid var(--color-hairline)",
                }}
              >
                <Clock size={13} color="var(--color-sale)" />
                <span>
                  Ends in {formatTimer(timeLeft.hours)}:{formatTimer(timeLeft.minutes)}:{formatTimer(timeLeft.seconds)}
                </span>
              </div>
            </div>

            <h2 className="heading-xl" style={{ marginTop: "6px" }}>
              TODAY'S TOP DISCOUNTS & MEGA DEALS
            </h2>
            <p style={{ fontSize: "14px", color: "var(--color-mute)", marginTop: "2px" }}>
              Handpicked 40%–55% clearance prices verified in real-time across Amazon, Flipkart & Myntra.
            </p>
          </div>

          <Link
            to="/deals"
            className="btn-primary"
            style={{
              height: "40px",
              padding: "0 20px",
              fontSize: "13px",
              gap: "6px",
            }}
          >
            <span>View All Deals</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* 4-Up Deals Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: "24px 20px",
          }}
        >
          {topDeals.map((product) => (
            <ProductCard
              key={product.id || product.product_id}
              product={product}
              onSelectProduct={onSelectProduct}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
