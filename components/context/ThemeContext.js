import React, { createContext, useContext, useState } from "react";
import {
  darkBgColor,
  darkFontColor,
  primaryBgColor,
  primaryFontColor,
} from "../../Styles";

const ThemeContext = createContext();

// Custom hook for easier access to the ThemeContext
export const useThemeContext = () => {
  return useContext(ThemeContext);
};

// Provider component to manage the theme and provide it to all children components
export const ThemeProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  // Defining the theme object based on the current state (dark or light)
  const theme = {
    backgroundColor: isDarkTheme ? darkBgColor : primaryBgColor,
    textColor: isDarkTheme ? darkFontColor : primaryFontColor,
  };

  // Returning the provider with the current theme and toggle function.
  // These values are passed down to any components wrapped within the ThemeProvider
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isDarkTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
