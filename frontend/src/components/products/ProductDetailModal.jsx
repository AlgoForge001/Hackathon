import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Star, Clock, ExternalLink, Bell, Sparkles, TrendingUp } from "lucide-react";
import { useShopping } from "../../context/ShoppingContext.jsx";
import PlatformBadge from "./PlatformBadge.jsx";
import SentimentBadge from "./SentimentBadge.jsx";
import BestOverallBadge from "./BestOverallBadge.jsx";
import { getProductAlternatives } from "../../services/api.js";
import ProductMiniCard from "../chat/ProductMiniCard.jsx";

const formatINR = (n) =>
  new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(n);

const ProductDetailModal = () => {
  const { detailModalOpen, selectedProduct: p, closeProduct, openAlertModal, bestOverallId, openBudgetModal } = useShopping();
  const [tab, setTab] = useState("overview");
  const [alternatives, setAlternatives] = useState({ cheaper: null, similar: null, premium: null });
  const [altLoading, setAltLoading] = useState(false);

  const isBest = p?.id === bestOverallId;

  useEffect(() => {
    if (!p || tab !== "alternatives") return;
    const fetch = async () => {
      setAltLoading(true);
      try {
        const result = await getProductAlternatives(p.id);
        setAlternatives(result);
      } catch {
        setAlternatives({ cheaper: null, similar: null, premium: null });
      } finally {
        setAltLoading(false);
      }
    };
    fetch();
  }, [p, tab]);

  const tabs = [
    { id: "overview",      label: "Overview" },
    { id: "ai",            label: "✨ AI Insights" },
    { id: "specs",         label: "Specs" },
    { id: "alternatives",  label: "Alternatives" },
  ];

  return (
    <AnimatePresence>
      {detailModalOpen && p && (
        <>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={closeProduct}
            style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.7)", zIndex: 110, backdropFilter: "blur(6px)" }} />
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            transition={{ type: "spring", damping: 28, stiffness: 280 }}
            style={{
              position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)",
              width: "min(680px, 95vw)", maxHeight: "88vh", overflowY: "auto",
              background: "rgba(10, 14, 24, 0.99)", backdropFilter: "blur(28px)",
              border: `1px solid ${isBest ? "rgba(251,191,36,0.3)" : "rgba(255,255,255,0.1)"}`,
              borderRadius: 24, zIndex: 111,
              boxShadow: isBest ? "0 0 40px rgba(251,191,36,0.12)" : "0 20px 60px rgba(0,0,0,0.6)",
            }}
          >
            {/* Image + Header */}
            <div style={{ position: "relative" }}>
              <div style={{ height: 220, overflow: "hidden", borderRadius: "24px 24px 0 0" }}>
                <img src={p.imageUrl} alt={p.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 30%, rgba(10,14,24,0.95) 100%)" }} />
              </div>
              <button onClick={closeProduct} className="btn-icon"
                style={{ position: "absolute", top: 14, right: 14, width: 32, height: 32, borderRadius: 10, background: "rgba(0,0,0,0.5)", zIndex: 2 }}>
                <X size={15} color="#fff" />
              </button>

              <div style={{ position: "absolute", bottom: 20, left: 24, right: 24 }}>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 8 }}>
                  <PlatformBadge platform={p.platform} size="lg" />
                  {isBest && <BestOverallBadge score={p.bestOverallScore} />}
                  <SentimentBadge sentiment={p.sentiment} score={p.sentimentScore} pros={p.sentimentPros} cons={p.sentimentCons} size="lg" />
                </div>
                <h2 style={{ fontSize: "1.2rem", fontWeight: 800, color: "#F8FAFC", lineHeight: 1.3 }}>{p.title}</h2>
              </div>
            </div>

            {/* Price Row */}
            <div style={{ padding: "16px 24px", borderBottom: "1px solid rgba(255,255,255,0.06)", display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
              <div>
                <span style={{ fontSize: "1.8rem", fontWeight: 800, color: "#F8FAFC" }}>{formatINR(p.price)}</span>
                {p.originalPrice > p.price && (
                  <>
                    <span style={{ fontSize: "1rem", color: "#64748B", textDecoration: "line-through", marginLeft: 10 }}>{formatINR(p.originalPrice)}</span>
                    <span style={{ fontSize: "0.85rem", color: "#10B981", fontWeight: 700, marginLeft: 8 }}>-{p.discountPercent}%</span>
                  </>
                )}
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <Star size={14} fill="#F59E0B" color="#F59E0B" />
                <span style={{ fontWeight: 700, color: "#F59E0B" }}>{p.rating}</span>
                <span style={{ color: "#64748B", fontSize: "0.85rem" }}>({p.reviewCount?.toLocaleString("en-IN")})</span>
              </div>
              {p.deliveryEstimate && (
                <div style={{ display: "flex", gap: 5, alignItems: "center" }}>
                  <Clock size={13} color="#38BDF8" />
                  <span style={{ fontSize: "0.82rem", color: "#38BDF8" }}>{p.deliveryEstimate}</span>
                </div>
              )}
              <div style={{ display: "flex", gap: 8, marginLeft: "auto" }}>
                <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
                  onClick={() => openAlertModal(p)} className="btn btn-ghost" style={{ padding: "8px 14px", fontSize: "0.8rem" }}>
                  <Bell size={13} /> Alert
                </motion.button>
                <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
                  onClick={() => { closeProduct(); openBudgetModal(p); }} className="btn btn-ghost" style={{ padding: "8px 14px", fontSize: "0.8rem" }}>
                  <TrendingUp size={13} /> Budget+
                </motion.button>
                <motion.a whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
                  href={p.productUrl || p.product_url || (p.platform === "amazon" 
                    ? `https://www.amazon.in/s?k=${encodeURIComponent(p.name || p.title || "")}`
                    : p.platform === "flipkart" 
                    ? `https://www.flipkart.com/search?q=${encodeURIComponent(p.name || p.title || "")}`
                    : `https://www.myntra.com/search?rawQuery=${encodeURIComponent(p.name || p.title || "")}`)} 
                  target="_blank" rel="noopener noreferrer"
                  className="btn btn-primary" style={{ padding: "8px 16px", fontSize: "0.8rem", textDecoration: "none" }}>
                  Buy Now <ExternalLink size={12} />
                </motion.a>
              </div>
            </div>

            {/* Tabs */}
            <div style={{ display: "flex", gap: 0, borderBottom: "1px solid rgba(255,255,255,0.06)", padding: "0 24px" }}>
              {tabs.map((t) => (
                <button key={t.id} onClick={() => setTab(t.id)}
                  style={{
                    padding: "12px 16px", background: "none", border: "none", cursor: "pointer",
                    fontSize: "0.82rem", fontWeight: tab === t.id ? 700 : 400,
                    color: tab === t.id ? "#C4B5FD" : "#64748B",
                    borderBottom: `2px solid ${tab === t.id ? "#818CF8" : "transparent"}`,
                    fontFamily: "var(--font-main)", transition: "all 0.15s", whiteSpace: "nowrap",
                  }}>
                  {t.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div style={{ padding: 24 }}>
              {tab === "overview" && (
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  <p style={{ fontSize: "0.9rem", color: "#94A3B8", lineHeight: 1.6 }}>{p.reviewSummary}</p>
                  {p.specs && Object.keys(p.specs).length > 0 && (
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: 10 }}>
                      {Object.entries(p.specs).slice(0, 4).map(([k, v]) => (
                        <div key={k} style={{ padding: "10px 12px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 10 }}>
                          <p style={{ fontSize: "0.68rem", color: "#64748B", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 4 }}>{k}</p>
                          <p style={{ fontSize: "0.85rem", fontWeight: 600, color: "#F8FAFC" }}>{v}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {tab === "ai" && (
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  <div style={{ padding: 16, background: "rgba(129,140,248,0.08)", border: "1px solid rgba(129,140,248,0.2)", borderRadius: 12 }}>
                    <div style={{ display: "flex", gap: 6, marginBottom: 8 }}>
                      <Sparkles size={14} color="#818CF8" />
                      <span style={{ fontSize: "0.72rem", fontWeight: 700, color: "#818CF8", textTransform: "uppercase", letterSpacing: "0.07em" }}>Why Buy This?</span>
                    </div>
                    <p style={{ fontSize: "0.9rem", color: "#C4B5FD", lineHeight: 1.6 }}>{p.whyBuy}</p>
                  </div>
                  <div style={{ padding: 16, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 12 }}>
                    <p style={{ fontSize: "0.72rem", fontWeight: 700, color: "#64748B", textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: 10 }}>Review Summary</p>
                    <p style={{ fontSize: "0.875rem", color: "#94A3B8", lineHeight: 1.6 }}>{p.reviewSummary}</p>
                  </div>
                  {isBest && (
                    <div style={{ padding: 16, background: "rgba(251,191,36,0.08)", border: "1px solid rgba(251,191,36,0.2)", borderRadius: 12 }}>
                      <p style={{ fontSize: "0.72rem", fontWeight: 700, color: "#FCD34D", textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: 6 }}>AI Score</p>
                      <span style={{ fontSize: "2rem", fontWeight: 800, color: "#FCD34D" }}>{p.bestOverallScore}<span style={{ fontSize: "1rem" }}>/100</span></span>
                    </div>
                  )}
                </div>
              )}

              {tab === "specs" && (
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: 12 }}>
                  {p.specs && Object.entries(p.specs).map(([k, v]) => (
                    <div key={k} style={{ padding: "12px 14px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 10 }}>
                      <p style={{ fontSize: "0.7rem", color: "#64748B", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 5 }}>{k}</p>
                      <p style={{ fontSize: "0.9rem", fontWeight: 600, color: "#F8FAFC" }}>{v}</p>
                    </div>
                  ))}
                </div>
              )}

              {tab === "alternatives" && (
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  {altLoading ? (
                    <p style={{ color: "#64748B", textAlign: "center", padding: 20 }}>Finding alternatives…</p>
                  ) : (
                    [
                      { key: "cheaper", label: "💰 Budget Pick", color: "#10B981" },
                      { key: "similar", label: "🔄 Similar Option", color: "#818CF8" },
                      { key: "premium", label: "⭐ Premium Upgrade", color: "#F59E0B" },
                    ].map(({ key, label, color }) => alternatives[key] ? (
                      <div key={key}>
                        <p style={{ fontSize: "0.72rem", fontWeight: 700, color, textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: 8 }}>{label}</p>
                        <ProductMiniCard product={alternatives[key]} />
                      </div>
                    ) : null)
                  )}
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProductDetailModal;
