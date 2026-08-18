import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mic, X, Check, AlertCircle } from "lucide-react";
import { useShopping } from "../../context/ShoppingContext.jsx";
import useVoiceSearch from "../../hooks/useVoiceSearch.js";

const VoiceSearchModal = () => {
  const { voiceModalOpen, toggleVoiceModal, setQuery, runSearch } = useShopping();
  const { listening, transcript, supported, startListening, stopListening, reset } = useVoiceSearch();

  // Auto-search when speech ends and transcript is non-empty
  useEffect(() => {
    if (!listening && transcript.trim() && voiceModalOpen) {
      const timer = setTimeout(() => {
        setQuery(transcript);
        runSearch({ query: transcript });
        toggleVoiceModal();
        reset();
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [listening, transcript]);

  const handleClose = () => {
    stopListening();
    reset();
    toggleVoiceModal();
  };

  return (
    <AnimatePresence>
      {voiceModalOpen && (
        <>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={handleClose}
            style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.7)", zIndex: 100, backdropFilter: "blur(8px)" }} />
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 30 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            style={{
              position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)",
              width: "min(360px, 88vw)", textAlign: "center",
              background: "rgba(10, 14, 24, 0.98)", backdropFilter: "blur(24px)",
              border: "1px solid rgba(255,255,255,0.1)", borderRadius: 24,
              zIndex: 101, padding: "36px 28px 28px",
            }}
          >
            <button onClick={handleClose} className="btn-icon"
              style={{ position: "absolute", top: 14, right: 14, width: 30, height: 30, borderRadius: 8 }}>
              <X size={14} color="#64748B" />
            </button>

            {!supported ? (
              <div>
                <AlertCircle size={40} color="#EF4444" style={{ margin: "0 auto 16px" }} />
                <p style={{ fontWeight: 600, color: "#F8FAFC", marginBottom: 8 }}>Not Supported</p>
                <p style={{ fontSize: "0.85rem", color: "#64748B" }}>
                  Voice search requires Chrome or Edge on desktop. Please type your query instead.
                </p>
              </div>
            ) : (
              <>
                {/* Mic Button with Pulse Rings */}
                <div style={{ position: "relative", display: "inline-block", marginBottom: 28 }}>
                  {listening && (
                    <>
                      {[1, 1.5, 2].map((scale, i) => (
                        <motion.div
                          key={i}
                          animate={{ scale: [1, scale], opacity: [0.5, 0] }}
                          transition={{ duration: 1.5, delay: i * 0.4, repeat: Infinity }}
                          style={{
                            position: "absolute",
                            inset: 0,
                            borderRadius: "50%",
                            background: "rgba(129,140,248,0.3)",
                          }}
                        />
                      ))}
                    </>
                  )}
                  <motion.button
                    whileHover={{ scale: 1.06 }}
                    whileTap={{ scale: 0.94 }}
                    onClick={listening ? stopListening : startListening}
                    style={{
                      position: "relative",
                      width: 80, height: 80, borderRadius: "50%",
                      background: listening
                        ? "linear-gradient(135deg, #818CF8, #38BDF8)"
                        : "rgba(129,140,248,0.12)",
                      border: `2px solid ${listening ? "#818CF8" : "rgba(129,140,248,0.3)"}`,
                      cursor: "pointer",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      boxShadow: listening ? "0 0 32px rgba(129,140,248,0.5)" : "none",
                      transition: "all 0.3s ease",
                    }}
                  >
                    <Mic size={30} color={listening ? "#fff" : "#818CF8"} />
                  </motion.button>
                </div>

                <p style={{ fontWeight: 700, fontSize: "1rem", color: "#F8FAFC", marginBottom: 8 }}>
                  {listening ? "Listening…" : transcript ? "Got it!" : "Tap to Speak"}
                </p>

                {transcript ? (
                  <div style={{
                    padding: "12px 16px", borderRadius: 10,
                    background: "rgba(16,185,129,0.08)", border: "1px solid rgba(16,185,129,0.2)",
                    marginBottom: 16,
                  }}>
                    <p style={{ fontSize: "0.9rem", color: "#6EE7B7", fontStyle: "italic" }}>
                      "{transcript}"
                    </p>
                  </div>
                ) : (
                  <p style={{ fontSize: "0.82rem", color: "#64748B", marginBottom: 16 }}>
                    {listening
                      ? "Speak your query clearly…"
                      : "Try: \"Noise cancelling headphones under ₹5000\""}
                  </p>
                )}

                {transcript && !listening && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                    style={{ display: "flex", gap: 8, justifyContent: "center" }}>
                    <div style={{ display: "flex", gap: 4, alignItems: "center", color: "#10B981", fontSize: "0.8rem" }}>
                      <Check size={13} />
                      Searching in a moment…
                    </div>
                  </motion.div>
                )}
              </>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default VoiceSearchModal;
