import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, Send, Trash2 } from "lucide-react";
import { useShopping } from "../../context/ShoppingContext.jsx";
import ChatMessage from "./ChatMessage.jsx";
import PromptSuggestions from "./PromptSuggestions.jsx";

const ChatDrawer = () => {
  const { chatOpen, closeChat, chatHistory, chatLoading, sendMessage } = useShopping();
  const [input, setInput] = useState("");
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  // Auto-scroll to bottom on new messages
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatHistory, chatLoading]);

  // Focus input when drawer opens
  useEffect(() => {
    if (chatOpen) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [chatOpen]);

  const handleSend = () => {
    const msg = input.trim();
    if (!msg || chatLoading) return;
    setInput("");
    sendMessage(msg);
  };

  const handleKey = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <AnimatePresence>
      {chatOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeChat}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(0,0,0,0.4)",
              zIndex: 100,
              backdropFilter: "blur(2px)",
            }}
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 320 }}
            style={{
              position: "fixed",
              top: 0,
              right: 0,
              bottom: 0,
              width: "min(420px, 100vw)",
              background: "rgba(10, 14, 24, 0.97)",
              backdropFilter: "blur(24px)",
              borderLeft: "1px solid rgba(255,255,255,0.08)",
              zIndex: 101,
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* Header */}
            <div
              style={{
                padding: "18px 20px",
                borderBottom: "1px solid rgba(255,255,255,0.06)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexShrink: 0,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: 10,
                    background: "linear-gradient(135deg, rgba(129,140,248,0.3), rgba(56,189,248,0.2))",
                    border: "1px solid rgba(129,140,248,0.3)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}
                >
                  <Sparkles size={15} color="#818CF8" />
                </div>
                <div>
                  <p style={{ fontWeight: 700, fontSize: "0.9rem", color: "#F8FAFC" }}>Shopsy AI Assistant</p>
                  <p style={{ fontSize: "0.7rem", color: "#10B981" }}>● Online · OpenRouter Powered</p>
                </div>
              </div>
              <div style={{ display: "flex", gap: 6 }}>
                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={closeChat} className="btn-icon" style={{ width: 32, height: 32, borderRadius: 8 }}>
                  <X size={15} color="#64748B" />
                </motion.button>
              </div>
            </div>

            {/* Messages or Suggestions */}
            <div style={{ flex: 1, overflowY: "auto", padding: "16px 16px 8px" }}>
              {chatHistory.length === 0 ? (
                <div>
                  {/* Welcome */}
                  <div style={{ textAlign: "center", padding: "20px 16px 24px" }}>
                    <div
                      style={{
                        width: 52, height: 52, borderRadius: 16,
                        background: "linear-gradient(135deg, rgba(129,140,248,0.2), rgba(56,189,248,0.15))",
                        border: "1px solid rgba(129,140,248,0.25)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        margin: "0 auto 14px",
                      }}
                    >
                      <Sparkles size={22} color="#818CF8" />
                    </div>
                    <p style={{ fontWeight: 700, fontSize: "1rem", color: "#F8FAFC", marginBottom: 6 }}>
                      Hi! I'm your AI Shopping Assistant 👋
                    </p>
                    <p style={{ fontSize: "0.8rem", color: "#64748B", lineHeight: 1.5 }}>
                      Ask me anything — I'll search across Amazon, Flipkart & Myntra and give you my best recommendation.
                    </p>
                  </div>
                  <PromptSuggestions />
                </div>
              ) : (
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {chatHistory.map((msg, i) => (
                    <ChatMessage key={i} message={msg} />
                  ))}

                  {/* Typing Indicator */}
                  {chatLoading && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      style={{ display: "flex", gap: 10, alignItems: "center" }}
                    >
                      <div
                        style={{
                          width: 30, height: 30, borderRadius: "50%",
                          background: "linear-gradient(135deg, rgba(129,140,248,0.3), rgba(56,189,248,0.2))",
                          border: "1px solid rgba(129,140,248,0.3)",
                          display: "flex", alignItems: "center", justifyContent: "center",
                          flexShrink: 0,
                        }}
                      >
                        <Sparkles size={14} color="#818CF8" />
                      </div>
                      <div style={{ padding: "10px 14px", borderRadius: "4px 16px 16px 16px", background: "rgba(129,140,248,0.1)", border: "1px solid rgba(129,140,248,0.18)" }}>
                        <div style={{ display: "flex", gap: 4 }}>
                          {[0, 0.15, 0.3].map((delay, i) => (
                            <motion.div
                              key={i}
                              animate={{ y: [0, -4, 0] }}
                              transition={{ duration: 0.6, delay, repeat: Infinity }}
                              style={{ width: 6, height: 6, borderRadius: "50%", background: "#818CF8" }}
                            />
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}

                  <div ref={bottomRef} />
                </div>
              )}
            </div>

            {/* Input Bar */}
            <div
              style={{
                padding: "14px 16px",
                borderTop: "1px solid rgba(255,255,255,0.06)",
                display: "flex",
                gap: 8,
                flexShrink: 0,
              }}
            >
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKey}
                placeholder="Ask about any product…"
                style={{
                  flex: 1,
                  background: "rgba(15, 23, 42, 0.8)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: 12,
                  padding: "10px 14px",
                  color: "#F8FAFC",
                  fontSize: "0.875rem",
                  fontFamily: "var(--font-main)",
                  outline: "none",
                }}
              />
              <motion.button
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.94 }}
                onClick={handleSend}
                disabled={!input.trim() || chatLoading}
                style={{
                  width: 42, height: 42,
                  borderRadius: 12,
                  background: input.trim() && !chatLoading
                    ? "linear-gradient(135deg, #818CF8, #38BDF8)"
                    : "rgba(255,255,255,0.05)",
                  border: "none", cursor: "pointer",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  transition: "background 0.2s",
                  flexShrink: 0,
                }}
              >
                <Send size={16} color={input.trim() && !chatLoading ? "#fff" : "#475569"} />
              </motion.button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ChatDrawer;
