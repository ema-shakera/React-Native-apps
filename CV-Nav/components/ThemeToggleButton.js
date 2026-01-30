import React from "react";
import { TouchableOpacity, StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "../themes/ThemeContext";

const ThemeToggleButton = () => {
  const { theme, isDarkMode, toggleTheme } = useTheme();

  return (
    <TouchableOpacity
      style={[
        styles.floatingButton,
        { backgroundColor: theme.buttonBackground },
      ]}
      onPress={toggleTheme}
      activeOpacity={0.8}
    >
      
      <Ionicons
        name={isDarkMode ? "sunny" : "moon"}
        size={24}
        color={theme.buttonIcon}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  floatingButton: {
    position: "absolute", 
    right: 20, 
    top: 50, 
    width: 56,
    height: 56,
    borderRadius: 28, 
    justifyContent: "center", 
    alignItems: "center",
    elevation: 8, 
    shadowColor: "#000", 
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3, 
    shadowRadius: 4, 
    zIndex: 999,
  },
});

export default ThemeToggleButton;
