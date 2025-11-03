// src/Context/AuthContext.jsx
import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  // في البداية نخلي mock state — بعدين هتوصلها بالـ backend أو Firebase
  const [user, setUser] = useState({
    isAuthenticated: false,
    role: null, // 'admin' | 'restaurant' | 'user'
    data: null,
  });

  // لو عايز تخزن في localStorage بعد login:
  useEffect(() => {
    const raw = localStorage.getItem("readyup_auth");
    if (raw) {
      setUser(JSON.parse(raw));
    }
  }, []);

  const login = (payload) => {
    // payload مثال: { role: 'user', data: {...} }
    const next = { isAuthenticated: true, role: payload.role, data: payload.data };
    setUser(next);
    localStorage.setItem("readyup_auth", JSON.stringify(next));
  };

  const logout = () => {
    setUser({ isAuthenticated: false, role: null, data: null });
    localStorage.removeItem("readyup_auth");
  };

  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}
