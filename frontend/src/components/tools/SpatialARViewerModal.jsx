import React, { useState } from "react";
import { 
  X, 
  RotateCw, 
  Box, 
  Maximize2, 
  Sun, 
  Moon, 
  Layers, 
  Smartphone, 
  Check, 
  Compass,
  Ruler,
  Sparkles
} from "lucide-react";
import ProductAR from "../products/ProductAR";

export default function SpatialARViewerModal({ product, onClose }) {
  if (!product) return null;

  const [rotationAngle, setRotationAngle] = useState(0);
  const [activeViewMode, setActiveViewMode] = useState("3d"); // "3d" | "dimensions"
  const [activeLighting, setActiveLighting] = useState("studio"); // "studio" | "dark" | "warm"
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const glbUrl = product.glbUrl || product.glb_url;
  const usdzUrl = product.usdzUrl || product.usdz_url;

  const images = product.images && product.images.length > 0 
    ? product.images 
    : [product.imageUrl || product.image_url, product.imageUrl || product.image_url];

  const dimensions = product.dimensions || {
    width: "18.5 cm",
    height: "24.0 cm",
    depth: "7.2 cm",
    weight: "250g",
  };

  const getLightingBackground = () => {
    switch (activeLighting) {
      case "dark":
        return "radial-gradient(circle at center, #222222 0%, #111111 100%)";
      case "warm":
        return "radial-gradient(circle at center, #fff8f0 0%, #f5ece0 100%)";
      case "studio":
      default:
        return "radial-gradient(circle at center, #ffffff 0%, #f0f0f0 100%)";
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        backdropFilter: "blur(8px)",
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
      }}
      onClick={onClose}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "960px",
          backgroundColor: "var(--color-canvas)",
          borderRadius: "var(--radius-none)",
          border: "1px solid var(--color-hairline)",
          boxShadow: "0 24px 60px rgba(0,0,0,0.3)",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          style={{
            padding: "16px 24px",
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
                borderRadius: "var(--radius-sm)",
                backgroundColor: "var(--color-ink)",
                color: "#ffffff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box size={16} />
            </div>
            <div>
              <h4 style={{ fontFamily: "var(--font-display)", fontSize: "20px", margin: 0, letterSpacing: "0.5px" }}>
                3D SPATIAL &amp; AR INSPECTION
              </h4>
              <p style={{ fontSize: "11px", color: "var(--color-mute)", margin: 0 }}>
                {product.name || product.product_name || product.title}
              </p>
            </div>
          </div>

          {/* Mode Switcher */}
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <button
              onClick={() => setActiveViewMode("3d")}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                padding: "6px 14px",
                fontSize: "12px",
                fontWeight: 700,
                borderRadius: "var(--radius-pill)",
                border: "1px solid",
                borderColor: activeViewMode === "3d" ? "var(--color-ink)" : "var(--color-hairline)",
                backgroundColor: activeViewMode === "3d" ? "var(--color-ink)" : "var(--color-canvas)",
                color: activeViewMode === "3d" ? "#ffffff" : "var(--color-ink)",
                cursor: "pointer",
              }}
            >
              <RotateCw size={13} /> 3D &amp; AR Model
            </button>
            <button
              onClick={() => setActiveViewMode("dimensions")}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                padding: "6px 14px",
                fontSize: "12px",
                fontWeight: 700,
                borderRadius: "var(--radius-pill)",
                border: "1px solid",
                borderColor: activeViewMode === "dimensions" ? "var(--color-ink)" : "var(--color-hairline)",
                backgroundColor: activeViewMode === "dimensions" ? "var(--color-ink)" : "var(--color-canvas)",
                color: activeViewMode === "dimensions" ? "#ffffff" : "var(--color-ink)",
                cursor: "pointer",
              }}
            >
              <Ruler size={13} /> Real Dimensions
            </button>
            <button
              onClick={onClose}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "6px",
                marginLeft: "8px",
                color: "var(--color-ink)",
              }}
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* 3D Visual Stage */}
        <div
          style={{
            position: "relative",
            height: "460px",
            background: activeViewMode === "3d" && glbUrl ? "transparent" : getLightingBackground(),
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            transition: "background 0.3s ease",
          }}
        >
          {/* Primary View: Real 3D Model with Google <model-viewer> if GLB exists and 3D mode is active */}
          {activeViewMode === "3d" && glbUrl ? (
            <ProductAR
              glbUrl={glbUrl}
              usdzUrl={usdzUrl}
              poster={images[0]}
              alt={product.title}
              height="100%"
              autoRotate={true}
            />
          ) : (
            /* Fallback or Dimension View */
            <div
              style={{
                position: "relative",
                width: "360px",
                height: "360px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transform: `rotateY(${rotationAngle}deg) scale(1.05)`,
                transition: "transform 0.1s ease-out",
                cursor: "grab",
              }}
            >
              <img
                src={images[selectedImageIndex % images.length]}
                alt={product.title}
                style={{
                  maxWidth: "90%",
                  maxHeight: "90%",
                  objectFit: "contain",
                  filter: "drop-shadow(0 20px 30px rgba(0,0,0,0.15))",
                  userSelect: "none",
                }}
                draggable={false}
              />

              {/* Dimension Overlay Lines */}
              {activeViewMode === "dimensions" && (
                <div
                  style={{
                    position: "absolute",
                    inset: "10px",
                    border: "1.5px dashed #059669",
                    borderRadius: "4px",
                    pointerEvents: "none",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    padding: "6px",
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "11px", fontWeight: 800, color: "#059669" }}>
                    <span>WIDTH: {dimensions.width}</span>
                    <span>DEPTH: {dimensions.depth}</span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "11px", fontWeight: 800, color: "#059669" }}>
                    <span>HEIGHT: {dimensions.height}</span>
                    <span>WEIGHT: {dimensions.weight}</span>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Interactive Rotation & Angle Selector in 2D/Dimension Mode */}
        {(!glbUrl || activeViewMode === "dimensions") && (
          <div style={{ padding: "16px 24px", backgroundColor: "var(--color-canvas)", borderTop: "1px solid var(--color-hairline)" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "24px", flexWrap: "wrap" }}>
              {/* 360 Spin Slider */}
              <div style={{ flex: 1, minWidth: "240px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px", fontWeight: 700, marginBottom: "6px" }}>
                  <span>360° Perspective Rotation</span>
                  <span style={{ color: "var(--color-mute)" }}>{rotationAngle}°</span>
                </div>
                <input
                  type="range"
                  min="-180"
                  max="180"
                  value={rotationAngle}
                  onChange={(e) => setRotationAngle(Number(e.target.value))}
                  style={{
                    width: "100%",
                    accentColor: "var(--color-ink)",
                    cursor: "pointer",
                  }}
                />
              </div>

              {/* 4 Camera Angle Thumbnails */}
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                {images.slice(0, 4).map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImageIndex(idx)}
                    style={{
                      width: "44px",
                      height: "44px",
                      border: selectedImageIndex === idx ? "2px solid var(--color-ink)" : "1px solid var(--color-hairline)",
                      borderRadius: "4px",
                      padding: "2px",
                      backgroundColor: "var(--color-soft-cloud)",
                      cursor: "pointer",
                      overflow: "hidden",
                    }}
                  >
                    <img src={img} alt={`Angle ${idx + 1}`} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
