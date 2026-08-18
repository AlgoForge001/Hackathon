import React, { useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Camera, Upload, ImageIcon } from "lucide-react";
import { useShopping } from "../../context/ShoppingContext.jsx";
import { searchByImage } from "../../services/api.js";

const ImageSearchModal = () => {
  const { imageModalOpen, toggleImageModal, pushToast } = useShopping();
  const fileRef = useRef(null);
  const [dragging, setDragging] = React.useState(false);
  const [preview, setPreview] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const handleFile = (file) => {
    if (!file || !file.type.startsWith("image/")) return;
    const reader = new FileReader();
    reader.onload = (e) => setPreview(e.target.result);
    reader.readAsDataURL(file);
  };

  const handleSearch = async () => {
    if (!preview) return;
    setLoading(true);
    try {
      await searchByImage(preview);
      pushToast({ type: "info", message: "Image search complete! Showing visually similar products." });
      toggleImageModal();
    } catch {
      pushToast({ type: "error", message: "Image search failed. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setPreview(null);
    setLoading(false);
    toggleImageModal();
  };

  return (
    <AnimatePresence>
      {imageModalOpen && (
        <>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={handleClose}
            style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.7)", zIndex: 100, backdropFilter: "blur(8px)" }} />
          <motion.div
            initial={{ opacity: 0, scale: 0.88, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.88, y: 24 }}
            transition={{ type: "spring", damping: 26, stiffness: 300 }}
            style={{
              position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)",
              width: "min(440px, 90vw)", background: "rgba(10, 14, 24, 0.98)",
              backdropFilter: "blur(24px)", border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 24, zIndex: 101, padding: 28,
            }}
          >
            <button onClick={handleClose} className="btn-icon" style={{ position: "absolute", top: 14, right: 14, width: 30, height: 30, borderRadius: 8 }}>
              <X size={14} color="#64748B" />
            </button>

            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
              <div style={{ width: 36, height: 36, borderRadius: 10, background: "rgba(56,189,248,0.12)", border: "1px solid rgba(56,189,248,0.25)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Camera size={16} color="#38BDF8" />
              </div>
              <div>
                <h3 style={{ fontWeight: 700, fontSize: "1rem" }}>Image Search</h3>
                <p style={{ fontSize: "0.72rem", color: "#64748B" }}>Find visually similar products across platforms</p>
              </div>
            </div>

            {/* Dropzone */}
            <div
              onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
              onDragLeave={() => setDragging(false)}
              onDrop={(e) => { e.preventDefault(); setDragging(false); handleFile(e.dataTransfer.files[0]); }}
              onClick={() => fileRef.current?.click()}
              style={{
                border: `2px dashed ${dragging ? "rgba(56,189,248,0.6)" : "rgba(255,255,255,0.12)"}`,
                borderRadius: 14,
                padding: "28px 20px",
                textAlign: "center",
                cursor: "pointer",
                background: dragging ? "rgba(56,189,248,0.06)" : "rgba(255,255,255,0.02)",
                transition: "all 0.2s ease",
                marginBottom: 16,
                overflow: "hidden",
              }}
            >
              {preview ? (
                <img src={preview} alt="preview" style={{ maxHeight: 180, maxWidth: "100%", borderRadius: 10, objectFit: "contain" }} />
              ) : (
                <>
                  <ImageIcon size={36} color="#38BDF8" style={{ margin: "0 auto 12px" }} />
                  <p style={{ fontSize: "0.88rem", color: "#94A3B8", marginBottom: 4 }}>
                    Drop an image here or click to upload
                  </p>
                  <p style={{ fontSize: "0.75rem", color: "#475569" }}>
                    PNG, JPG, WEBP supported
                  </p>
                </>
              )}
            </div>

            <input ref={fileRef} type="file" accept="image/*" style={{ display: "none" }} onChange={(e) => handleFile(e.target.files[0])} />

            <div style={{ display: "flex", gap: 8 }}>
              {preview && (
                <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                  onClick={() => setPreview(null)} className="btn btn-ghost" style={{ flex: 1 }}>
                  Clear
                </motion.button>
              )}
              <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                onClick={preview ? handleSearch : () => fileRef.current?.click()}
                disabled={loading}
                className="btn btn-primary" style={{ flex: 2 }}>
                {loading ? "Searching…" : preview ? <><Camera size={14} /> Search by Image</> : <><Upload size={14} /> Choose Image</>}
              </motion.button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ImageSearchModal;
