import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { aboutData } from "../data/aboutData";
import { useTheme } from "../themes/ThemeContext";

const AboutSection = () => {
  const { theme } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.card }]}>
      <Text style={[styles.title, { color: theme.textSecondary }]}>
        {aboutData.title}
      </Text>
      <Text style={[styles.text, { color: theme.textSecondary }]}>
        {aboutData.description}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    margin: 16,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  text: {
    fontSize: 14,
    lineHeight: 22,
    textAlign: "justify",
  },
});

export default AboutSection;
