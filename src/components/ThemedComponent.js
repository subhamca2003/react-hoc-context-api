import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const ThemedComponent = () => {
  const { theme, toggleTheme } = useContext(ThemeContext); // Use the Context

  return (
    <div style={{ 
      background: theme === 'light' ? '#fff' : '#333', 
      color: theme === 'light' ? '#000' : '#fff', 
      padding: '20px', 
      borderRadius: '5px' 
    }}>
      <h1>{theme === 'light' ? 'Light Theme' : 'Dark Theme'}</h1>
      <div>The React Context API is a powerful feature that allows you to share 
        state between components without having to pass props through every level 
        of the component tree. Here's a simple example illustrating how to 
        create and use the Context API in a React application.
        </div>
      <button onClick={toggleTheme}>
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
      </button>
    </div>
  );
};

export default ThemedComponent;