import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { profileData } from "../data/profileData";
import { useTheme } from "../themes/ThemeContext";

const ProfileHeader = () => {
  const { theme } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.primary }]}>
      <Image
        source={profileData.photo}
        style={[styles.profileImage, { borderColor: theme.secondary }]}
      />
      <View style={styles.textContainer}>
        <Text style={[styles.name, { color: theme.textLight }]}>
          {profileData.name}
        </Text>
        <Text style={[styles.role, { color: theme.textLight }]}>
          {profileData.role}
        </Text>
        <Text style={[styles.subtitle, { color: theme.textLight }]}>
          {profileData.subtitle}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "center",
    paddingTop: 30,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 4,
    marginBottom: 15,
  },
  textContainer: {
    alignItems: "center",
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    letterSpacing: 2,
  },
  role: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 5,
  },
  subtitle: {
    fontSize: 14,
    marginTop: 3,
  },
});

export default ProfileHeader;
