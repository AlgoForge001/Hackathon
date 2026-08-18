import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext(null);

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Global Auth Modal state
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authModalTab, setAuthModalTab] = useState("login"); // "login" | "register"

  const openAuthModal = (tab = "login") => {
    setError(null);
    setAuthModalTab(tab);
    setIsAuthModalOpen(true);
  };

  const closeAuthModal = () => {
    setError(null);
    setIsAuthModalOpen(false);
  };

  // Fetch logged in user details if token exists
  useEffect(() => {
    const fetchUser = async () => {
      if (!token) {
        setLoading(false);
        return;
      }

      try {
        const res = await axios.get(`${API_URL}/auth/me`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (res.data.success) {
          setUser(res.data.user);
        }
      } catch (err) {
        console.warn("Session verification error, logging out:", err.message);
        logout();
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [token]);

  // Handle Local Email/Password Login
  const login = async (email, password) => {
    setLoading(true);
    setError(null);
    try {
      const res = await axios.post(`${API_URL}/auth/login`, { email, password });
      if (res.data.success) {
        const { token: jwtToken, user: userData } = res.data;
        localStorage.setItem("token", jwtToken);
        setToken(jwtToken);
        setUser(userData);
        closeAuthModal();
        return userData;
      }
    } catch (err) {
      const message = err.response?.data?.message || "Login failed. Please check your credentials.";
      setError(message);
      throw new Error(message);
    } finally {
      setLoading(false);
    }
  };

  // Handle Local Registration
  const register = async (name, email, password) => {
    setLoading(true);
    setError(null);
    try {
      const res = await axios.post(`${API_URL}/auth/register`, { name, email, password });
      if (res.data.success) {
        const { token: jwtToken, user: userData } = res.data;
        localStorage.setItem("token", jwtToken);
        setToken(jwtToken);
        setUser(userData);
        closeAuthModal();
        return userData;
      }
    } catch (err) {
      const message = err.response?.data?.message || "Registration failed. Please check your information.";
      setError(message);
      throw new Error(message);
    } finally {
      setLoading(false);
    }
  };

  // Handle Instant 1-Click Demo Login
  const loginAsDemo = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await axios.post(`${API_URL}/auth/demo`);
      if (res.data.success) {
        const { token: jwtToken, user: userData } = res.data;
        localStorage.setItem("token", jwtToken);
        setToken(jwtToken);
        setUser(userData);
        closeAuthModal();
        return userData;
      }
    } catch (err) {
      // Fallback demo user if backend is offline
      const fallbackUser = {
        id: "demo-user-123",
        _id: "demo-user-123",
        name: "Demo Shopper",
        email: "demo.shopper@shopsy.ai",
        authProvider: "demo",
        picture: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
        role: "user",
      };
      setUser(fallbackUser);
      closeAuthModal();
      return fallbackUser;
    } finally {
      setLoading(false);
    }
  };

  // Handle Google Login Success
  const handleGoogleSuccess = async (credentialResponse) => {
    setLoading(true);
    setError(null);
    try {
      const res = await axios.post(`${API_URL}/auth/google`, {
        credential: credentialResponse.credential,
      });

      if (res.data.success) {
        const { token: jwtToken, user: userData } = res.data;
        localStorage.setItem("token", jwtToken);
        setToken(jwtToken);
        setUser(userData);
        closeAuthModal();
        return userData;
      }
    } catch (err) {
      console.error("Google Auth failed on server:", err);
      const message = err.response?.data?.message || "Failed to authenticate with Google.";
      setError(message);
      throw new Error(message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleFailure = (err) => {
    console.error("Google Login error:", err);
    setError("Google Sign-In failed or was cancelled.");
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setUser(null);
    setError(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        loading,
        error,
        setError,
        login,
        register,
        loginAsDemo,
        handleGoogleSuccess,
        handleGoogleFailure,
        logout,
        isAuthenticated: !!user,
        isAuthModalOpen,
        authModalTab,
        openAuthModal,
        closeAuthModal,
        setAuthModalTab,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
