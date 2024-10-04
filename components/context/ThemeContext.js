import React, { createContext, useContext, useState } from "react";
import { darkBgColor, primaryBgColor } from "../../Styles";

const ThemeContext = createContext();

export const useThemeContext = () => {
  return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const theme = {
    backgroundColor: isDarkTheme ? darkBgColor : primaryBgColor,
    textColor: isDarkTheme ? "#fff" : "#000",
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isDarkTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
