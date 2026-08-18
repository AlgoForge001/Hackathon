import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { X, Send, Sparkles, Loader2, ExternalLink, Bot, User, Zap, Star } from "lucide-react";
import { sendChatMessage } from "../../services/api";
import { getCategoryFallbackImage } from "../../services/mockData";
import PlatformBadge from "../products/PlatformBadge";

export default function FloatingAIChat({ isOpen, onClose, onSelectProduct }) {
  const navigate = useNavigate();
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hello! I'm your Gemini AI Shopping Assistant. Ask me to compare products, find deals across Amazon/Flipkart/Myntra, evaluate specs, or recommend top items for your budget.",
      products: [],
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Auto scroll to bottom
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen]);

  const handleSend = async (e) => {
    e?.preventDefault();
    if (!inputMessage.trim() || loading) return;

    const userText = inputMessage.trim();
    setInputMessage("");

    const newHistory = [...messages, { role: "user", content: userText }];
    setMessages(newHistory);
    setLoading(true);

    try {
      const response = await sendChatMessage({
        message: userText,
        history: newHistory.map((m) => ({ role: m.role, content: m.content })),
      });

      const reply = response?.reply || "Here are the best product matches I found across Amazon, Flipkart, and Myntra:";
      const products = response?.suggestedProducts || [];

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: reply,
          products: products,
        },
      ]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Sorry, I had trouble processing that request with Gemini AI. Please try again.",
          products: [],
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const samplePrompts = [
    "Find running shoes under ₹4000",
    "Sony XM5 vs AirPods Pro 2",
    "Best noise cancelling headphones",
    "Compare boAt Rockerz 550 across platforms",
  ];

  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        backdropFilter: "blur(4px)",
        zIndex: 99999,
        display: "flex",
        justifyContent: "flex-end",
        transition: "opacity 0.2s ease",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: "100%",
          maxWidth: "520px",
          height: "100%",
          backgroundColor: "var(--color-canvas)",
          display: "flex",
          flexDirection: "column",
          boxShadow: "-8px 0 30px rgba(0, 0, 0, 0.3)",
          animation: "slideIn 0.25s ease-out",
          position: "relative",
        }}
      >
        {/* Chat Header */}
        <div
          style={{
            padding: "16px 20px",
            borderBottom: "1px solid var(--color-hairline)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "var(--color-ink)",
            color: "var(--color-canvas)",
            gap: "12px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px", minWidth: 0 }}>
            <div
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "var(--radius-full)",
                backgroundColor: "rgba(255,255,255,0.15)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <Sparkles size={18} color="#f59e0b" />
            </div>
            <div style={{ minWidth: 0 }}>
              <h3 style={{ fontSize: "15px", fontWeight: 700, margin: 0, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                AI Shopping Advisor
              </h3>
              <span style={{ fontSize: "12px", color: "#4ade80", fontWeight: 600, display: "flex", alignItems: "center", gap: "4px" }}>
                <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#4ade80" }}></span>
                Live · Google Gemini 2.5 Flash
              </span>
            </div>
          </div>

          {/* ❌ HIGH-VISIBILITY CLOSE BUTTON */}
          <button
            onClick={onClose}
            aria-label="Close Chat"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.18)",
              color: "#ffffff",
              border: "1px solid rgba(255, 255, 255, 0.35)",
              padding: "6px 14px",
              borderRadius: "20px",
              display: "flex",
              alignItems: "center",
              gap: "6px",
              cursor: "pointer",
              fontSize: "13px",
              fontWeight: 700,
              transition: "all 0.15s ease",
              flexShrink: 0,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.18)";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            <X size={16} strokeWidth={2.5} />
            <span>Close</span>
          </button>
        </div>

        {/* Message Thread */}
        <div
          style={{
            flex: 1,
            overflowY: "auto",
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            backgroundColor: "var(--color-soft-cloud)",
          }}
        >
          {messages.map((msg, idx) => (
            <div
              key={idx}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: msg.role === "user" ? "flex-end" : "flex-start",
                gap: "8px",
              }}
            >
              <div
                style={{
                  maxWidth: "88%",
                  padding: "12px 16px",
                  borderRadius: msg.role === "user" ? "18px 18px 2px 18px" : "18px 18px 18px 2px",
                  backgroundColor: msg.role === "user" ? "var(--color-ink)" : "var(--color-canvas)",
                  color: msg.role === "user" ? "var(--color-canvas)" : "var(--color-ink)",
                  fontSize: "14px",
                  lineHeight: 1.45,
                  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
                  whiteSpace: "pre-wrap",
                }}
              >
                {msg.content}
              </div>

              {/* Suggested Product Cards inside chat */}
              {msg.products && msg.products.length > 0 && (
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                    marginTop: "4px",
                  }}
                >
                  {msg.products.map((p) => {
                    const productId = p.groupId || p.product_id || p.id;
                    return (
                      <div
                        key={productId}
                        onClick={() => {
                          if (onSelectProduct) onSelectProduct(p);
                          navigate(`/product/${productId}`);
                          onClose();
                        }}
                        style={{
                          backgroundColor: "var(--color-canvas)",
                          padding: "10px 12px",
                          borderRadius: "var(--radius-sm)",
                          display: "flex",
                          gap: "12px",
                          alignItems: "center",
                          cursor: "pointer",
                          border: "1px solid var(--color-hairline)",
                          transition: "border-color 0.15s ease, box-shadow 0.15s ease",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.borderColor = "var(--color-ink)";
                          e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.06)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderColor = "var(--color-hairline)";
                          e.currentTarget.style.boxShadow = "none";
                        }}
                      >
                        <img
                          src={p.image_url || p.imageUrl || getCategoryFallbackImage(p.category)}
                          alt={p.title}
                          style={{
                            width: "54px",
                            height: "54px",
                            objectFit: "cover",
                            borderRadius: "4px",
                            backgroundColor: "var(--color-soft-cloud)",
                            flexShrink: 0,
                          }}
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = getCategoryFallbackImage(p.category);
                          }}
                        />
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "6px" }}>
                            <span style={{ fontSize: "11px", fontWeight: 700, color: "var(--color-mute)", textTransform: "uppercase" }}>
                              {p.brand}
                            </span>
                            {p.platform && <PlatformBadge platform={p.platform} size="sm" />}
                          </div>
                          <h4
                            style={{
                              fontSize: "13px",
                              fontWeight: 600,
                              color: "var(--color-ink)",
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              marginTop: "2px",
                            }}
                          >
                            {p.title}
                          </h4>
                          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "2px" }}>
                            <span style={{ fontSize: "13px", fontWeight: 800, color: "var(--color-ink)" }}>
                              ₹{Number(p.price).toLocaleString("en-IN")}
                            </span>
                            {p.rating && (
                              <span style={{ fontSize: "11px", color: "var(--color-mute)", display: "flex", alignItems: "center", gap: "2px", fontWeight: 600 }}>
                                <Star size={11} fill="#f59e0b" color="#f59e0b" />
                                {Number(p.rating).toFixed(1)}
                              </span>
                            )}
                          </div>
                        </div>
                        <ExternalLink size={15} color="var(--color-mute)" />
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          ))}

          {loading && (
            <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "var(--color-mute)", fontSize: "13px", padding: "8px 0" }}>
              <Loader2 size={16} className="animate-spin" style={{ animation: "spin 1s linear infinite" }} />
              <span>Gemini AI is analyzing real-time prices & specs...</span>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Quick Suggestion Chips */}
        <div
          style={{
            padding: "10px 16px",
            backgroundColor: "var(--color-canvas)",
            borderTop: "1px solid var(--color-hairline)",
            display: "flex",
            gap: "8px",
            overflowX: "auto",
            whiteSpace: "nowrap",
          }}
        >
          {samplePrompts.map((prompt, idx) => (
            <button
              key={idx}
              onClick={() => {
                setInputMessage(prompt);
              }}
              style={{
                fontSize: "12px",
                padding: "6px 12px",
                borderRadius: "var(--radius-full)",
                border: "1px solid var(--color-hairline)",
                backgroundColor: "var(--color-soft-cloud)",
                color: "var(--color-charcoal)",
                cursor: "pointer",
                flexShrink: 0,
                fontWeight: 500,
              }}
            >
              {prompt}
            </button>
          ))}
        </div>

        {/* Chat Input */}
        <form
          onSubmit={handleSend}
          style={{
            padding: "16px 20px",
            borderTop: "1px solid var(--color-hairline)",
            display: "flex",
            gap: "10px",
            backgroundColor: "var(--color-canvas)",
          }}
        >
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="Ask Gemini to find deals, compare, or recommend..."
            disabled={loading}
            style={{
              flex: 1,
              padding: "12px 16px",
              border: "1px solid var(--color-hairline)",
              borderRadius: "var(--radius-md)",
              fontSize: "14px",
              outline: "none",
              backgroundColor: "var(--color-soft-cloud)",
              color: "var(--color-ink)",
              fontFamily: "var(--font-ui)",
            }}
          />
          <button
            type="submit"
            disabled={!inputMessage.trim() || loading}
            style={{
              width: "44px",
              height: "44px",
              borderRadius: "var(--radius-md)",
              backgroundColor: inputMessage.trim() ? "var(--color-ink)" : "var(--color-hairline)",
              color: "var(--color-canvas)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: inputMessage.trim() && !loading ? "pointer" : "not-allowed",
              border: "none",
              transition: "background-color 0.15s ease",
            }}
          >
            <Send size={18} />
          </button>
        </form>
      </div>

      <style>{`
        @keyframes slideIn { from { transform: translateX(100%); } to { transform: translateX(0); } }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
}
