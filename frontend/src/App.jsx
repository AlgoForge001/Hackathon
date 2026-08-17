import React, { useState, useEffect } from "react";
import { GoogleLogin } from "@react-oauth/google";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import axios from "axios";
import {
  ShieldCheck,
  Sparkles,
  LogOut,
  UserCheck,
  Server,
  Database,
  KeyRound,
  CheckCircle2,
  AlertTriangle,
} from "lucide-react";
import { useAuth } from "./context/AuthContext.jsx";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

function App() {
  const { user, token, loading, error, handleGoogleSuccess, handleGoogleFailure, logout } =
    useAuth();
  const [apiHealth, setApiHealth] = useState({ loading: true, status: null });

  // Trigger celebration confetti on login
  const onLoginSuccess = async (res) => {
    try {
      await handleGoogleSuccess(res);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
    } catch (e) {
      console.error(e);
    }
  };

  // Check Backend & DB Health
  useEffect(() => {
    const checkHealth = async () => {
      try {
        const res = await axios.get(`${API_URL}/health`);
        setApiHealth({ loading: false, status: res.data.status, message: res.data.message });
      } catch (err) {
        setApiHealth({
          loading: false,
          status: "ERROR",
          message: "Could not reach backend API",
        });
      }
    };
    checkHealth();
  }, []);

  return (
    <div style={{ position: "relative", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <div className="ambient-glow-1" />
      <div className="ambient-glow-2" />

      {/* Navigation Header */}
      <header
        style={{
          position: "relative",
          zIndex: 10,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 40px",
          borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
          backdropFilter: "blur(10px)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "12px",
              background: "linear-gradient(135deg, #6366f1 0%, #a855f7 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 4px 15px rgba(99, 102, 241, 0.4)",
            }}
          >
            <Sparkles size={22} color="#ffffff" />
          </div>
          <div>
            <h1 style={{ fontSize: "1.25rem", fontWeight: 800, letterSpacing: "-0.02em" }}>
              VibeCode <span style={{ color: "#818cf8" }}>MERN</span>
            </h1>
          </div>
        </div>

        {/* Backend & DB Status indicator */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div className="badge badge-primary">
            <Server size={14} />
            <span>API: {apiHealth.status === "OK" ? "Online" : "Connecting..."}</span>
          </div>
          <div className="badge badge-success">
            <Database size={14} />
            <span>MongoDB Atlas Connected</span>
          </div>
        </div>
      </header>

      {/* Main Content Body */}
      <main
        style={{
          position: "relative",
          zIndex: 10,
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "40px 20px",
        }}
      >
        <AnimatePresence mode="wait">
          {!user ? (
            /* Login View */
            <motion.div
              key="login"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="glass-panel"
              style={{
                width: "100%",
                maxWidth: "480px",
                padding: "40px",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  width: "68px",
                  height: "68px",
                  borderRadius: "20px",
                  background: "rgba(99, 102, 241, 0.12)",
                  border: "1px solid rgba(99, 102, 241, 0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 24px",
                }}
              >
                <KeyRound size={32} color="#818cf8" />
              </div>

              <h2 style={{ fontSize: "1.85rem", fontWeight: 700, marginBottom: "8px" }}>
                Google Authentication
              </h2>
              <p style={{ color: "#94a3b8", fontSize: "0.95rem", marginBottom: "32px" }}>
                Sign in with your Google account to securely authenticate with the MERN backend.
              </p>

              {error && (
                <div
                  style={{
                    marginBottom: "24px",
                    padding: "12px 16px",
                    background: "rgba(239, 68, 68, 0.15)",
                    border: "1px solid rgba(239, 68, 68, 0.3)",
                    borderRadius: "12px",
                    color: "#fca5a5",
                    fontSize: "0.875rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    justifyContent: "center",
                  }}
                >
                  <AlertTriangle size={16} />
                  <span>{error}</span>
                </div>
              )}

              {/* Google Login Component */}
              <div style={{ display: "flex", justifyContent: "center", margin: "20px 0" }}>
                <GoogleLogin
                  onSuccess={onLoginSuccess}
                  onError={handleGoogleFailure}
                  useOneTap
                  theme="filled_black"
                  shape="pill"
                  size="large"
                  text="signin_with"
                />
              </div>

              <div
                style={{
                  marginTop: "32px",
                  paddingTop: "20px",
                  borderTop: "1px solid rgba(255, 255, 255, 0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  color: "#64748b",
                  fontSize: "0.85rem",
                }}
              >
                <ShieldCheck size={16} color="#34d399" />
                <span>Secured via Google ID Token & JWT Signature</span>
              </div>
            </motion.div>
          ) : (
            /* Logged-In User Dashboard */
            <motion.div
              key="dashboard"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.4 }}
              className="glass-panel"
              style={{
                width: "100%",
                maxWidth: "600px",
                padding: "40px",
              }}
            >
              {/* User Avatar & Header */}
              <div style={{ display: "flex", alignItems: "center", gap: "20px", marginBottom: "28px" }}>
                <img
                  src={
                    user.picture ||
                    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150"
                  }
                  alt={user.name}
                  referrerPolicy="no-referrer"
                  style={{
                    width: "72px",
                    height: "72px",
                    borderRadius: "50%",
                    border: "3px solid #6366f1",
                    boxShadow: "0 0 20px rgba(99, 102, 241, 0.4)",
                  }}
                />
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <h2 style={{ fontSize: "1.5rem", fontWeight: 700 }}>{user.name}</h2>
                    <CheckCircle2 size={20} color="#34d399" />
                  </div>
                  <p style={{ color: "#94a3b8", fontSize: "0.95rem" }}>{user.email}</p>
                </div>
              </div>

              {/* Account Details Box */}
              <div
                style={{
                  background: "rgba(0, 0, 0, 0.25)",
                  borderRadius: "16px",
                  padding: "20px",
                  border: "1px solid rgba(255, 255, 255, 0.05)",
                  marginBottom: "28px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                  fontSize: "0.9rem",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span style={{ color: "#64748b" }}>Role:</span>
                  <span style={{ color: "#818cf8", fontWeight: 600, textTransform: "uppercase" }}>
                    {user.role || "User"}
                  </span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span style={{ color: "#64748b" }}>Google ID:</span>
                  <span style={{ fontFamily: "var(--font-mono)", color: "#cbd5e1", fontSize: "0.8rem" }}>
                    {user.googleId ? `${user.googleId.slice(0, 8)}...${user.googleId.slice(-6)}` : "Verified"}
                  </span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span style={{ color: "#64748b" }}>Session Token:</span>
                  <span style={{ fontFamily: "var(--font-mono)", color: "#34d399", fontSize: "0.8rem" }}>
                    {token ? `${token.slice(0, 12)}...` : "Active"}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: "flex", justifyContent: "flex-end", gap: "12px" }}>
                <button className="btn-logout" onClick={logout}>
                  <LogOut size={18} />
                  <span>Sign Out</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer
        style={{
          position: "relative",
          zIndex: 10,
          textAlign: "center",
          padding: "16px",
          color: "#475569",
          fontSize: "0.85rem",
        }}
      >
        MongoDB Atlas • Express • React • Node.js • Google OAuth 2.0
      </footer>
    </div>
  );
}

export default App;
