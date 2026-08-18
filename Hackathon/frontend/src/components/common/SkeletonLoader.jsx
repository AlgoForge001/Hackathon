import React from "react";

const SkeletonLoader = () => (
  <div className="glass-card" style={{ overflow: "hidden" }}>
    <div className="skeleton" style={{ height: 180 }} />
    <div style={{ padding: 16, display: "flex", flexDirection: "column", gap: 12 }}>
      <div style={{ display: "flex", gap: 8 }}>
        <div className="skeleton" style={{ height: 22, width: 80, borderRadius: 9999 }} />
        <div className="skeleton" style={{ height: 22, width: 90, borderRadius: 9999 }} />
      </div>
      <div className="skeleton" style={{ height: 16, width: "90%" }} />
      <div className="skeleton" style={{ height: 16, width: "70%" }} />
      <div className="skeleton" style={{ height: 28, width: 120 }} />
      <div className="skeleton" style={{ height: 14, width: 100, borderRadius: 9999 }} />
      <div className="skeleton" style={{ height: 64, borderRadius: 8 }} />
      <div style={{ display: "flex", gap: 8 }}>
        <div className="skeleton" style={{ flex: 1, height: 38, borderRadius: 9999 }} />
        <div className="skeleton" style={{ width: 38, height: 38, borderRadius: 10 }} />
        <div className="skeleton" style={{ width: 38, height: 38, borderRadius: 10 }} />
      </div>
    </div>
  </div>
);

export default SkeletonLoader;
