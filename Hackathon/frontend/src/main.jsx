import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { AuthProvider } from "./context/AuthContext.jsx";
import { ShoppingProvider } from "./context/ShoppingContext.jsx";
import "./index.css";
import App from "./App.jsx";

const GOOGLE_CLIENT_ID =
  import.meta.env.VITE_GOOGLE_CLIENT_ID ||
  "1030765326914-rcbsncn9cd9b0jlddnltmrk1trtsq948.apps.googleusercontent.com";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <AuthProvider>
        <ShoppingProvider>
          <App />
        </ShoppingProvider>
      </AuthProvider>
    </GoogleOAuthProvider>
  </StrictMode>
);
