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
  Ruler
} from "lucide-react";

export default function SpatialARViewerModal({ product, onClose }) {
  if (!product) return null;

  const [rotationAngle, setRotationAngle] = useState(0);
  const [activeViewMode, setActiveViewMode] = useState("3d"); // "3d" | "ar" | "dimensions"
  const [activeLighting, setActiveLighting] = useState("studio"); // "studio" | "dark" | "warm"
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

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
                3D SPATIAL & AR INSPECTION
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
              <RotateCw size={13} /> 360° Spin
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
            height: "440px",
            background: getLightingBackground(),
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            transition: "background 0.3s ease",
          }}
        >
          {/* Main Stage Image with 3D Rotation Transform */}
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

            {/* Dimension Overlay Lines in Dimension Mode */}
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

          {/* HUD Status Overlay */}
          <div
            style={{
              position: "absolute",
              top: "16px",
              left: "16px",
              backgroundColor: "rgba(255, 255, 255, 0.85)",
              backdropFilter: "blur(6px)",
              padding: "6px 12px",
              borderRadius: "4px",
              fontSize: "11px",
              fontWeight: 700,
              display: "flex",
              alignItems: "center",
              gap: "6px",
              color: "var(--color-ink)",
            }}
          >
            <Compass size={13} color="var(--color-ink)" />
            <span>Orientation: {rotationAngle}°</span>
          </div>

          {/* Lighting Controls */}
          <div
            style={{
              position: "absolute",
              top: "16px",
              right: "16px",
              display: "flex",
              alignItems: "center",
              gap: "6px",
              backgroundColor: "rgba(255, 255, 255, 0.85)",
              backdropFilter: "blur(6px)",
              padding: "4px 8px",
              borderRadius: "var(--radius-pill)",
            }}
          >
            <button
              onClick={() => setActiveLighting("studio")}
              title="Studio Lighting"
              style={{
                border: "none",
                background: activeLighting === "studio" ? "var(--color-ink)" : "transparent",
                color: activeLighting === "studio" ? "#ffffff" : "var(--color-ink)",
                borderRadius: "50%",
                width: "26px",
                height: "26px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              <Sun size={13} />
            </button>
            <button
              onClick={() => setActiveLighting("dark")}
              title="Dark Tech Lighting"
              style={{
                border: "none",
                background: activeLighting === "dark" ? "var(--color-ink)" : "transparent",
                color: activeLighting === "dark" ? "#ffffff" : "var(--color-ink)",
                borderRadius: "50%",
                width: "26px",
                height: "26px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              <Moon size={13} />
            </button>
          </div>
        </div>

        {/* Interactive Rotation & Angle Selector */}
        <div style={{ padding: "20px 24px", backgroundColor: "var(--color-canvas)", borderTop: "1px solid var(--color-hairline)" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "24px", flexWrap: "wrap" }}>
            {/* 360 Spin Slider */}
            <div style={{ flex: 1, minWidth: "240px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px", fontWeight: 700, marginBottom: "6px" }}>
                <span>360° Drag Rotation</span>
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
                    width: "48px",
                    height: "48px",
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
      </div>
    </div>
  );
}
