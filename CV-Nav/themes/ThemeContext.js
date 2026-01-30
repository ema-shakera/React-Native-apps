import { createContext, useState, useContext, useEffect } from "react";
import { useColorScheme } from "react-native";
import { lightTheme, darkTheme } from "./colors";

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const colorScheme = useColorScheme();
  const [isDarkMode, setIsDarkMode] = useState(colorScheme === "dark");

  const theme = isDarkMode ? darkTheme : lightTheme;

  console.log({theme})

  const toggleTheme = () => {
    setIsDarkMode((previousMode) => !previousMode);
  };

  const value = {
    theme,
    isDarkMode,
    toggleTheme, 
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
