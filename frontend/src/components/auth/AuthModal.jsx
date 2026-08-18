import React, { useState } from "react";
import { 
  X, 
  Mail, 
  Lock, 
  User as UserIcon, 
  Eye, 
  EyeOff, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  AlertCircle,
  ShieldCheck,
  Zap
} from "lucide-react";
import { GoogleLogin } from "@react-oauth/google";
import { useAuth } from "../../context/AuthContext";

export default function AuthModal() {
  const {
    isAuthModalOpen,
    closeAuthModal,
    authModalTab,
    setAuthModalTab,
    login,
    register,
    loginAsDemo,
    handleGoogleSuccess,
    handleGoogleFailure,
    error,
    setError,
    loading,
  } = useAuth();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  if (!isAuthModalOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccessMessage("");

    try {
      if (authModalTab === "login") {
        await login(email, password);
      } else {
        await register(name, email, password);
      }
    } catch (err) {
      // Error is set in AuthContext
    }
  };

  const handleDemoClick = async () => {
    setError(null);
    try {
      await loginAsDemo();
    } catch (err) {
      // Handled
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(0, 0, 0, 0.75)",
        backdropFilter: "blur(6px)",
        zIndex: 99999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
      }}
      onClick={closeAuthModal}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "440px",
          backgroundColor: "var(--color-canvas)",
          borderRadius: "var(--radius-lg)",
          border: "1px solid var(--color-hairline)",
          boxShadow: "0 24px 60px rgba(0, 0, 0, 0.35)",
          overflow: "hidden",
          position: "relative",
          animation: "modalFadeIn 0.2s ease-out",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header Bar */}
        <div
          style={{
            padding: "20px 24px 16px",
            borderBottom: "1px solid var(--color-hairline)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "var(--color-soft-cloud)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div
              style={{
                width: "32px",
                height: "32px",
                backgroundColor: "var(--color-ink)",
                color: "#ffffff",
                borderRadius: "var(--radius-sm)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 900,
                fontSize: "16px",
              }}
            >
              S
            </div>
            <div>
              <h3 style={{ margin: 0, fontSize: "16px", fontWeight: 800, color: "var(--color-ink)", letterSpacing: "0.3px" }}>
                {authModalTab === "login" ? "Welcome Back to Shopsy" : "Create Your Shopsy Account"}
              </h3>
              <p style={{ margin: 0, fontSize: "11px", color: "var(--color-mute)" }}>
                {authModalTab === "login" ? "Sign in to access price alerts & saved items" : "Join for AI deals, alerts & arbitrage tracking"}
              </p>
            </div>
          </div>

          <button
            onClick={closeAuthModal}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "4px",
              color: "var(--color-ink)",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Tab Switcher */}
        <div style={{ display: "flex", borderBottom: "1px solid var(--color-hairline)" }}>
          <button
            onClick={() => {
              setError(null);
              setAuthModalTab("login");
            }}
            style={{
              flex: 1,
              padding: "12px",
              fontSize: "13px",
              fontWeight: 700,
              border: "none",
              borderBottom: authModalTab === "login" ? "2.5px solid var(--color-ink)" : "2.5px solid transparent",
              backgroundColor: authModalTab === "login" ? "var(--color-canvas)" : "var(--color-soft-cloud)",
              color: authModalTab === "login" ? "var(--color-ink)" : "var(--color-mute)",
              cursor: "pointer",
              transition: "all 0.15s ease",
            }}
          >
            Sign In
          </button>
          <button
            onClick={() => {
              setError(null);
              setAuthModalTab("register");
            }}
            style={{
              flex: 1,
              padding: "12px",
              fontSize: "13px",
              fontWeight: 700,
              border: "none",
              borderBottom: authModalTab === "register" ? "2.5px solid var(--color-ink)" : "2.5px solid transparent",
              backgroundColor: authModalTab === "register" ? "var(--color-canvas)" : "var(--color-soft-cloud)",
              color: authModalTab === "register" ? "var(--color-ink)" : "var(--color-mute)",
              cursor: "pointer",
              transition: "all 0.15s ease",
            }}
          >
            Create Account
          </button>
        </div>

        <div style={{ padding: "24px" }}>
          {/* Error Message Alert */}
          {error && (
            <div
              style={{
                backgroundColor: "#fef2f2",
                border: "1px solid #fecaca",
                color: "#991b1b",
                padding: "10px 14px",
                borderRadius: "var(--radius-sm)",
                fontSize: "12px",
                fontWeight: 600,
                display: "flex",
                alignItems: "center",
                gap: "8px",
                marginBottom: "16px",
              }}
            >
              <AlertCircle size={15} color="#dc2626" style={{ flexShrink: 0 }} />
              <span>{error}</span>
            </div>
          )}

          {/* 1-Click Instant Demo Shopper Access */}
          <button
            type="button"
            onClick={handleDemoClick}
            disabled={loading}
            style={{
              width: "100%",
              padding: "11px 16px",
              backgroundColor: "var(--color-soft-cloud)",
              color: "var(--color-ink)",
              border: "1.5px dashed var(--color-ink)",
              borderRadius: "var(--radius-sm)",
              fontSize: "13px",
              fontWeight: 700,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              marginBottom: "18px",
              transition: "all 0.15s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "var(--color-ink)";
              e.currentTarget.style.color = "#ffffff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "var(--color-soft-cloud)";
              e.currentTarget.style.color = "var(--color-ink)";
            }}
          >
            <Zap size={15} color="#f59e0b" fill="#f59e0b" />
            <span>1-Click Instant Demo Login (Judge / Tester)</span>
          </button>

          {/* Google Login Component */}
          <div style={{ display: "flex", justifyContent: "center", marginBottom: "18px" }}>
            <GoogleLogin
              onSuccess={handleGoogleSuccess}
              onError={handleGoogleFailure}
              useOneTap={false}
              theme="outline"
              size="large"
              shape="pill"
              text={authModalTab === "login" ? "signin_with" : "signup_with"}
              width="390"
            />
          </div>

          {/* Divider */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              margin: "18px 0",
              color: "var(--color-mute)",
              fontSize: "11px",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.5px",
            }}
          >
            <div style={{ flex: 1, height: "1px", backgroundColor: "var(--color-hairline)" }} />
            <span>Or continue with email</span>
            <div style={{ flex: 1, height: "1px", backgroundColor: "var(--color-hairline)" }} />
          </div>

          {/* Email / Password Form */}
          <form onSubmit={handleSubmit}>
            {authModalTab === "register" && (
              <div style={{ marginBottom: "14px" }}>
                <label style={{ display: "block", fontSize: "12px", fontWeight: 700, marginBottom: "6px", color: "var(--color-ink)" }}>
                  Full Name
                </label>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    border: "1px solid var(--color-hairline)",
                    borderRadius: "var(--radius-sm)",
                    padding: "0 12px",
                    backgroundColor: "var(--color-canvas)",
                  }}
                >
                  <UserIcon size={16} color="var(--color-mute)" style={{ marginRight: "8px" }} />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Sharma"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={{
                      width: "100%",
                      padding: "10px 0",
                      border: "none",
                      outline: "none",
                      fontSize: "13px",
                      color: "var(--color-ink)",
                      background: "transparent",
                    }}
                  />
                </div>
              </div>
            )}

            <div style={{ marginBottom: "14px" }}>
              <label style={{ display: "block", fontSize: "12px", fontWeight: 700, marginBottom: "6px", color: "var(--color-ink)" }}>
                Email Address
              </label>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  border: "1px solid var(--color-hairline)",
                  borderRadius: "var(--radius-sm)",
                  padding: "0 12px",
                  backgroundColor: "var(--color-canvas)",
                }}
              >
                <Mail size={16} color="var(--color-mute)" style={{ marginRight: "8px" }} />
                <input
                  type="email"
                  required
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "10px 0",
                    border: "none",
                    outline: "none",
                    fontSize: "13px",
                    color: "var(--color-ink)",
                    background: "transparent",
                  }}
                />
              </div>
            </div>

            <div style={{ marginBottom: "20px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
                <label style={{ fontSize: "12px", fontWeight: 700, color: "var(--color-ink)" }}>
                  Password
                </label>
                {authModalTab === "login" && (
                  <span style={{ fontSize: "11px", color: "var(--color-mute)", cursor: "pointer" }}>
                    Forgot?
                  </span>
                )}
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  border: "1px solid var(--color-hairline)",
                  borderRadius: "var(--radius-sm)",
                  padding: "0 12px",
                  backgroundColor: "var(--color-canvas)",
                }}
              >
                <Lock size={16} color="var(--color-mute)" style={{ marginRight: "8px" }} />
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  minLength={6}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "10px 0",
                    border: "none",
                    outline: "none",
                    fontSize: "13px",
                    color: "var(--color-ink)",
                    background: "transparent",
                  }}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  style={{ background: "none", border: "none", cursor: "pointer", padding: "4px", color: "var(--color-mute)" }}
                >
                  {showPassword ? <EyeOff size={15} /> : <Eye size={15} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              style={{
                width: "100%",
                padding: "12px",
                backgroundColor: "var(--color-ink)",
                color: "var(--color-canvas)",
                border: "none",
                borderRadius: "var(--radius-sm)",
                fontSize: "14px",
                fontWeight: 800,
                cursor: loading ? "not-allowed" : "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                opacity: loading ? 0.7 : 1,
              }}
            >
              <span>{loading ? "Please wait..." : authModalTab === "login" ? "Sign In" : "Create Account"}</span>
              <ArrowRight size={16} />
            </button>
          </form>

          {/* Footer Security Badge */}
          <div
            style={{
              marginTop: "20px",
              paddingTop: "16px",
              borderTop: "1px solid var(--color-hairline-soft)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "6px",
              fontSize: "11px",
              color: "var(--color-mute)",
            }}
          >
            <ShieldCheck size={14} color="#059669" />
            <span>Protected by Arcjet Shield WAF &amp; Rate Limiting</span>
          </div>
        </div>
      </div>
    </div>
  );
}
