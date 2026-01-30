// components/ExperienceSection.js
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { experienceData } from "../data/experienceData";
import { useTheme } from "../themes/ThemeContext";

const ExperienceSection = () => {
  const { theme } = useTheme();

  return (
    <View style={styles.wrapper}>
      <Text style={[styles.title, { color: theme.text }]}>
        {experienceData.title}
      </Text>

      {experienceData.experiences.map((exp, index) => (
        <View
          key={index}
          style={[styles.experienceCard, { backgroundColor: theme.card }]}
        >
          <Text style={[styles.experienceTitle, { color: theme.text }]}>
            {exp.title}
          </Text>
          <Text style={[styles.description, { color: theme.textSecondary }]}>
            {exp.description}
          </Text>
          <Text style={[styles.year, { color: theme.textTertiary }]}>
            {exp.year}
          </Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 16,
  },
  experienceCard: {
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  experienceTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    marginBottom: 8,
    lineHeight: 20,
  },
  year: {
    fontSize: 13,
    fontStyle: "italic",
  },
});

export default ExperienceSection;
