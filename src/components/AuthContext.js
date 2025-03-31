import React, { createContext, useState } from 'react';

// Create Context
export const AuthContext = createContext();

// Create a Provider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // State to hold user information
  const [accessToken, setAccessToken] = useState(null); // State for the token

  const loginUser = (token, userData) => {
    setAccessToken(token);
    setUser(userData); // Store user information
  };

  const logoutUser = () => {
    setAccessToken(null);
    setUser(null); // Clear user information on logout
  };

  return (
    <AuthContext.Provider value={{ user, accessToken, loginUser, logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
};