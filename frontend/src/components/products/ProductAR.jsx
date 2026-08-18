import React, { useState, useEffect, useRef } from "react";
import { Box, Sparkles, AlertCircle, RefreshCw, Smartphone, Eye, Maximize2 } from "lucide-react";

/**
 * ProductAR Component
 * 
 * Renders an interactive 3D and Augmented Reality (AR) viewer using Google's <model-viewer>.
 * 
 * NOTE: 
 * - On Android, <model-viewer> uses Google Scene Viewer / WebXR.
 * - On iOS, it uses Apple AR Quick Look (requiring a .usdz asset in ios-src).
 * - No native app installation required; works directly in standard mobile browsers (Chrome / Safari),
 *   but native AR triggers will not launch inside restricted in-app webviews (e.g. Instagram, LinkedIn, Facebook).
 * 
 * @param {string} glbUrl - URL to GLB 3D model asset (Required for 3D/WebXR/SceneViewer)
 * @param {string} usdzUrl - Optional URL to USDZ model asset (for iOS Quick Look)
 * @param {string} poster - Optional preview image while 3D model downloads
 * @param {string} alt - Alt description for accessibility
 * @param {string} height - Height of the viewer container (default: "450px")
 * @param {boolean} autoRotate - Whether the model automatically rotates (default: true)
 * @param {boolean} showArPrompt - Display prominent 'View in Your Room' banner
 * @param {function} onClose - Optional modal close callback if rendered in a modal
 */
export default function ProductAR({
  glbUrl,
  usdzUrl,
  poster,
  alt = "3D product model",
  height = "450px",
  autoRotate = true,
  showArPrompt = true,
  onClose,
}) {
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState(false);
  const [arSupported, setArSupported] = useState(false);
  const modelViewerRef = useRef(null);

  useEffect(() => {
    setLoading(true);
    setLoadError(false);

    const viewer = modelViewerRef.current;
    if (!viewer) return;

    const handleLoad = () => {
      setLoading(false);
      setLoadError(false);
      if (viewer.canActivateAR) {
        setArSupported(true);
      }
    };

    const handleError = (event) => {
      console.warn("ProductAR: Model loading error:", event);
      setLoading(false);
      setLoadError(true);
    };

    const handleArStatus = (event) => {
      if (event.detail.status === "failed") {
        console.warn("AR Session failed to start");
      }
    };

    viewer.addEventListener("load", handleLoad);
    viewer.addEventListener("error", handleError);
    viewer.addEventListener("ar-status", handleArStatus);

    return () => {
      viewer.removeEventListener("load", handleLoad);
      viewer.removeEventListener("error", handleError);
      viewer.removeEventListener("ar-status", handleArStatus);
    };
  }, [glbUrl, usdzUrl]);

  // Graceful fallback if no 3D asset URL is provided
  if (!glbUrl) {
    return (
      <div
        style={{
          width: "100%",
          height,
          backgroundColor: "var(--color-soft-cloud)",
          border: "1px dashed var(--color-hairline)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "24px",
          textAlign: "center",
        }}
      >
        <Box size={36} color="var(--color-mute)" style={{ marginBottom: "12px" }} />
        <h4 style={{ fontSize: "16px", fontWeight: 700, margin: "0 0 6px 0", color: "var(--color-ink)" }}>
          AR Preview Not Available
        </h4>
        <p style={{ fontSize: "13px", color: "var(--color-mute)", margin: 0, maxWidth: "320px" }}>
          AR preview not available for this product. 3D spatial models are currently active for curated demo products.
        </p>
      </div>
    );
  }

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height,
        backgroundColor: "var(--color-soft-cloud)",
        borderRadius: "var(--radius-none)",
        overflow: "hidden",
        border: "1px solid var(--color-hairline)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* ─── Google Model Viewer Web Component ─── */}
      {!loadError ? (
        <model-viewer
          ref={modelViewerRef}
          src={glbUrl}
          ios-src={usdzUrl || undefined}
          alt={alt}
          poster={poster || undefined}
          ar
          ar-modes="webxr scene-viewer quick-look"
          camera-controls
          auto-rotate={autoRotate ? "" : undefined}
          rotation-per-second="30deg"
          shadow-intensity="1"
          shadow-softness="0.8"
          exposure="1.1"
          environment-image="neutral"
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "transparent",
            outline: "none",
            "--poster-color": "transparent",
          }}
        >
          {/* Custom AR Button inside model-viewer slot */}
          <button
            slot="ar-button"
            style={{
              position: "absolute",
              bottom: "16px",
              left: "50%",
              transform: "translateX(-50%)",
              backgroundColor: "var(--color-ink)",
              color: "var(--color-canvas)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              borderRadius: "var(--radius-pill)",
              padding: "10px 20px",
              fontSize: "13px",
              fontWeight: 800,
              display: "flex",
              alignItems: "center",
              gap: "8px",
              cursor: "pointer",
              boxShadow: "0 8px 24px rgba(0, 0, 0, 0.25)",
              zIndex: 10,
              whiteSpace: "nowrap",
              backdropFilter: "blur(6px)",
            }}
          >
            <Smartphone size={16} color="#00ffcc" />
            <span>View in Your Room (AR)</span>
          </button>
        </model-viewer>
      ) : (
        /* Graceful Fallback if model fails to load */
        <div
          style={{
            padding: "24px",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <AlertCircle size={36} color="var(--color-sale)" style={{ marginBottom: "12px" }} />
          <h4 style={{ fontSize: "16px", fontWeight: 700, margin: "0 0 6px 0", color: "var(--color-ink)" }}>
            AR preview not available for this product
          </h4>
          <p style={{ fontSize: "13px", color: "var(--color-mute)", margin: "0 0 16px 0", maxWidth: "340px" }}>
            The 3D spatial asset could not be streamed. Please check your internet connection or try again.
          </p>
          <button
            onClick={() => {
              setLoadError(false);
              setLoading(true);
            }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              padding: "8px 16px",
              backgroundColor: "var(--color-ink)",
              color: "var(--color-canvas)",
              border: "none",
              fontSize: "12px",
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            <RefreshCw size={13} /> Retry 3D Load
          </button>
        </div>
      )}

      {/* ─── Loading Overlay ─── */}
      {loading && !loadError && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(255, 255, 255, 0.85)",
            backdropFilter: "blur(4px)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 5,
          }}
        >
          <div
            style={{
              width: "36px",
              height: "36px",
              border: "3px solid var(--color-hairline)",
              borderTopColor: "var(--color-ink)",
              borderRadius: "50%",
              animation: "spin 0.8s linear infinite",
              marginBottom: "12px",
            }}
          />
          <span style={{ fontSize: "12px", fontWeight: 800, textTransform: "uppercase", letterSpacing: "1px", color: "var(--color-ink)" }}>
            Loading 3D Spatial Model...
          </span>
          <span style={{ fontSize: "11px", color: "var(--color-mute)", marginTop: "4px" }}>
            Optimizing geometry &amp; AR textures
          </span>
        </div>
      )}

      {/* ─── Interactive Controls Hint Overlay ─── */}
      {!loading && !loadError && (
        <div
          style={{
            position: "absolute",
            top: "14px",
            left: "14px",
            backgroundColor: "rgba(17, 17, 17, 0.85)",
            color: "#ffffff",
            padding: "5px 12px",
            borderRadius: "var(--radius-pill)",
            fontSize: "11px",
            fontWeight: 700,
            display: "flex",
            alignItems: "center",
            gap: "6px",
            pointerEvents: "none",
            backdropFilter: "blur(4px)",
          }}
        >
          <Box size={13} color="#00ffcc" />
          <span>Interactive 3D • Drag to Orbit • Scroll to Zoom</span>
        </div>
      )}

      {/* ─── Close Button (Optional if in Modal) ─── */}
      {onClose && (
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "14px",
            right: "14px",
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            border: "1px solid var(--color-hairline)",
            borderRadius: "50%",
            width: "32px",
            height: "32px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            zIndex: 10,
          }}
        >
          ✕
        </button>
      )}
    </div>
  );
}
