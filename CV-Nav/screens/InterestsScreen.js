import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "../themes/ThemeContext";
import InterestsSection from "../components/InterestsSection";

export default function InterestsScreen() {
  const { theme } = useTheme();

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={{ backgroundColor: theme.background }}>
        <InterestsSection />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});
