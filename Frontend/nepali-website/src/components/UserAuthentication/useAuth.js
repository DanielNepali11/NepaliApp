// AuthContext.js
import React, { createContext, useContext, useState } from 'react';

// Create an authentication context
const AuthContext = createContext();

// AuthProvider component to provide authentication state
export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  // Function to set user session when logged in
  const setUserSession = (username) => {
    setIsLoggedIn(true);
    setUsername(username);
  };

  // Function to clear user session when logged out
  const clearUserSession = () => {
    setIsLoggedIn(false);
    setUsername('');
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, username, setUserSession, clearUserSession }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to consume authentication context
export const useAuth = () => useContext(AuthContext);
