import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext(null);

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
        console.error("Session verification error:", err);
        logout();
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [token]);

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
    console.error("Google Login popup error:", err);
    setError("Google Sign-In failed or was cancelled.");
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        loading,
        error,
        handleGoogleSuccess,
        handleGoogleFailure,
        logout,
        isAuthenticated: !!user,
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
