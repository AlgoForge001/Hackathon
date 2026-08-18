import React, { useState, useRef, useEffect } from "react";
import { X, Send, Sparkles, Loader2, ExternalLink, Bot, User } from "lucide-react";
import { sendChatMessage } from "../../services/api";

export default function FloatingAIChat({ isOpen, onClose, onSelectProduct }) {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hello! I'm your AI Shopping Assistant. Ask me to compare products, find deals, or recommend items based on your budget.",
      products: [],
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

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

      const reply = response?.reply || "Here are the best product matches I found across platforms:";
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
          content: "Sorry, I had trouble processing that request. Please try again.",
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
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(0, 0, 0, 0.45)",
        backdropFilter: "blur(4px)",
        zIndex: 200,
        display: "flex",
        justifyContent: "flex-end",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "480px",
          height: "100%",
          backgroundColor: "var(--color-canvas)",
          display: "flex",
          flexDirection: "column",
          boxShadow: "-8px 0 30px rgba(0, 0, 0, 0.2)",
          animation: "slideIn 0.25s ease-out",
        }}
      >
        {/* Chat Header */}
        <div
          style={{
            padding: "18px 24px",
            borderBottom: "1px solid var(--color-hairline)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "var(--color-ink)",
            color: "var(--color-canvas)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div
              style={{
                width: "32px",
                height: "32px",
                borderRadius: "var(--radius-full)",
                backgroundColor: "rgba(255,255,255,0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Sparkles size={16} />
            </div>
            <div>
              <h3 style={{ fontSize: "15px", fontWeight: 700 }}>AI Shopping Advisor</h3>
              <span style={{ fontSize: "12px", color: "#4ade80", fontWeight: 500 }}>Live · OpenRouter Powered</span>
            </div>
          </div>

          <button
            onClick={onClose}
            style={{
              color: "var(--color-canvas)",
              padding: "6px",
              borderRadius: "var(--radius-full)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <X size={20} />
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
                  maxWidth: "85%",
                  padding: "12px 16px",
                  borderRadius: msg.role === "user" ? "18px 18px 2px 18px" : "18px 18px 18px 2px",
                  backgroundColor: msg.role === "user" ? "var(--color-ink)" : "var(--color-canvas)",
                  color: msg.role === "user" ? "var(--color-canvas)" : "var(--color-ink)",
                  fontSize: "14px",
                  lineHeight: 1.45,
                  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
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
                  {msg.products.map((p) => (
                    <div
                      key={p.product_id || p.id}
                      onClick={() => {
                        if (onSelectProduct) onSelectProduct(p);
                        onClose();
                      }}
                      style={{
                        backgroundColor: "var(--color-canvas)",
                        padding: "10px",
                        borderRadius: "8px",
                        display: "flex",
                        gap: "12px",
                        alignItems: "center",
                        cursor: "pointer",
                        border: "1px solid var(--color-hairline)",
                        transition: "border-color 0.15s ease",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--color-ink)")}
                      onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--color-hairline)")}
                    >
                      <img
                        src={p.image_url}
                        alt={p.title}
                        style={{
                          width: "52px",
                          height: "52px",
                          objectFit: "cover",
                          borderRadius: "4px",
                          backgroundColor: "var(--color-soft-cloud)",
                        }}
                      />
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <h4
                          style={{
                            fontSize: "13px",
                            fontWeight: 600,
                            color: "var(--color-ink)",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                          }}
                        >
                          {p.title}
                        </h4>
                        <div style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "2px" }}>
                          <span style={{ fontSize: "13px", fontWeight: 700, color: "var(--color-ink)" }}>
                            ₹{Number(p.price).toLocaleString("en-IN")}
                          </span>
                          <span
                            style={{
                              fontSize: "10px",
                              fontWeight: 700,
                              textTransform: "uppercase",
                              backgroundColor: "var(--color-soft-cloud)",
                              padding: "2px 6px",
                              borderRadius: "4px",
                            }}
                          >
                            {p.platform}
                          </span>
                        </div>
                      </div>
                      <ExternalLink size={15} color="var(--color-mute)" />
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}

          {loading && (
            <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "var(--color-mute)", fontSize: "13px" }}>
              <Loader2 size={16} className="animate-spin" style={{ animation: "spin 1s linear infinite" }} />
              <span>AI is thinking & comparing platform listings...</span>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Quick Sample Prompts */}
        <div
          style={{
            padding: "10px 16px",
            backgroundColor: "var(--color-canvas)",
            borderTop: "1px solid var(--color-hairline-soft)",
            display: "flex",
            gap: "8px",
            overflowX: "auto",
          }}
        >
          {samplePrompts.map((prompt) => (
            <button
              key={prompt}
              onClick={() => {
                setInputMessage(prompt);
              }}
              style={{
                fontSize: "12px",
                fontWeight: 500,
                color: "var(--color-charcoal)",
                backgroundColor: "var(--color-soft-cloud)",
                padding: "4px 12px",
                borderRadius: "var(--radius-lg)",
                whiteSpace: "nowrap",
              }}
            >
              {prompt}
            </button>
          ))}
        </div>

        {/* Input Bar */}
        <form
          onSubmit={handleSend}
          style={{
            padding: "16px",
            borderTop: "1px solid var(--color-hairline)",
            backgroundColor: "var(--color-canvas)",
            display: "flex",
            gap: "10px",
          }}
        >
          <input
            type="text"
            placeholder="Ask about specs, price deals, or upgrades..."
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            disabled={loading}
            style={{
              flex: 1,
              backgroundColor: "var(--color-soft-cloud)",
              border: "1px solid transparent",
              borderRadius: "var(--radius-md)",
              padding: "10px 16px",
              fontSize: "14px",
              outline: "none",
              fontFamily: "var(--font-ui)",
            }}
            onFocus={(e) => (e.currentTarget.style.borderColor = "var(--color-ink)")}
            onBlur={(e) => (e.currentTarget.style.borderColor = "transparent")}
          />
          <button
            type="submit"
            className="btn-primary"
            disabled={loading || !inputMessage.trim()}
            style={{
              width: "44px",
              height: "44px",
              padding: 0,
              borderRadius: "var(--radius-full)",
              opacity: loading || !inputMessage.trim() ? 0.5 : 1,
            }}
          >
            <Send size={16} />
          </button>
        </form>
      </div>

      <style>{`
        @keyframes slideIn {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}
