import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "../themes/ThemeContext";
import LanguagesSection from "../components/LanguagesSection";

export default function LanguagesScreen() {
  const { theme } = useTheme();

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={{ backgroundColor: theme.background }}>
        <LanguagesSection />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});
