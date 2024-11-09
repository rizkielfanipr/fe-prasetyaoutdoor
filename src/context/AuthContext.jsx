import React, { createContext, useState, useEffect, useContext } from 'react';

// Buat konteks untuk otentikasi
export const AuthContext = createContext();

// Provider untuk konteks otentikasi
export const AuthProvider = ({ children }) => {
  if (!children) {
    console.error("AuthProvider requires children prop");
    return null; // Menghindari error jika children tidak ada
  }

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      if (parsedUser.token) {
        setIsLoggedIn(true);
        setUser(parsedUser);
      }
    }
  }, []);

  const login = (userData) => {
    setIsLoggedIn(true);
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData)); // Pastikan userData berisi token
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook kustom untuk menggunakan konteks otentikasi
export const useAuth = () => {
  return useContext(AuthContext);
};
