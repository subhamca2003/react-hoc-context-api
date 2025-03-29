import React, { createContext, useState } from 'react';

// Create a Context
export const ThemeContext = createContext();

// Create a Provider component
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light'); // default is light theme

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};