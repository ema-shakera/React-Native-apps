import React from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "../themes/ThemeContext";
import ProfileHeader from "../components/ProfileHeader";
import ThemeToggleButton from "../components/ThemeToggleButton";

export default function ProfileScreen({ navigation }) {
  const { theme } = useTheme();

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={{ backgroundColor: theme.background }}>
        <ProfileHeader />
        <ThemeToggleButton />

        <View style={styles.links}>
          <NavButton
            title="About"
            onPress={() => navigation.navigate("About")}
          />
          <NavButton
            title="Contact"
            onPress={() => navigation.navigate("Contact")}
          />
          <NavButton
            title="Education"
            onPress={() => navigation.navigate("Education")}
          />
          <NavButton
            title="Languages"
            onPress={() => navigation.navigate("Languages")}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function NavButton({ title, onPress }) {
  const { theme } = useTheme();

  return (
    <TouchableOpacity
      style={[styles.navButton, { backgroundColor: theme.card }]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Text style={[styles.navText, { color: theme.text }]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  links: {
    padding: 16,
    gap: 12,
  },
  navButton: {
    padding: 16,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  navText: {
    fontSize: 16,
    fontWeight: "600",
  },
});
