import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, AlertTriangle, Info, X } from "lucide-react";
import { useShopping } from "../../context/ShoppingContext.jsx";

const iconMap = {
  success: <CheckCircle2 size={16} color="#10B981" />,
  error:   <AlertTriangle size={16} color="#EF4444" />,
  info:    <Info size={16} color="#38BDF8" />,
};

const colorMap = {
  success: { bg: "rgba(16,185,129,0.12)",  border: "rgba(16,185,129,0.3)",  text: "#6EE7B7" },
  error:   { bg: "rgba(239,68,68,0.12)",   border: "rgba(239,68,68,0.3)",   text: "#FCA5A5" },
  info:    { bg: "rgba(56,189,248,0.12)",   border: "rgba(56,189,248,0.3)",  text: "#7DD3FC" },
};

const Toast = ({ toast }) => {
  const { removeToast } = useShopping();
  const cfg = colorMap[toast.type] || colorMap.info;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, x: 60, scale: 0.9 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      exit={{ opacity: 0, x: 60, scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 28 }}
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: 10,
        padding: "12px 14px",
        borderRadius: 12,
        background: cfg.bg,
        border: `1px solid ${cfg.border}`,
        backdropFilter: "blur(20px)",
        maxWidth: 340,
        boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
      }}
    >
      <div style={{ flexShrink: 0, marginTop: 1 }}>{iconMap[toast.type] || iconMap.info}</div>
      <p style={{ fontSize: "0.83rem", color: cfg.text, lineHeight: 1.45, flex: 1 }}>
        {toast.message}
      </p>
      <button
        onClick={() => removeToast(toast.id)}
        style={{ background: "none", border: "none", cursor: "pointer", flexShrink: 0, padding: 0 }}
      >
        <X size={13} color="#64748B" />
      </button>
    </motion.div>
  );
};

export const ToastContainer = () => {
  const { toasts } = useShopping();

  return (
    <div
      style={{
        position: "fixed",
        bottom: 24,
        right: 24,
        display: "flex",
        flexDirection: "column",
        gap: 10,
        zIndex: 200,
      }}
    >
      <AnimatePresence>
        {toasts.map((toast) => (
          <Toast key={toast.id} toast={toast} />
        ))}
      </AnimatePresence>
    </div>
  );
};

export default Toast;
