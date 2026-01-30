// components/ContactSection.js
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { contactData } from "../data/contactData";
import { useTheme } from "../themes/ThemeContext";

const ContactSection = () => {
  const { theme } = useTheme();

  const handlePress = (type, value) => {
    let url;

    switch (type) {
      case "email":
        url = `mailto:${value}`;
        break;
      case "web":
        url = value.startsWith("http") ? value : `https://${value}`;
        break;
      case "phone":
        url = `tel:${value}`;
        break;
      default:
        url = value;
    }

    Linking.openURL(url).catch(() => {
      Alert.alert("Error", `Could not open ${type}`);
    });
  };

  return (
    <View style={styles.wrapper}>
      <Text style={[styles.title, { color: theme.text }]}>
        {contactData.title}
      </Text>

      {contactData.contacts.map((contact, index) => (
        <TouchableOpacity
          key={index}
          style={[styles.contactRow, { backgroundColor: theme.card }]}
          onPress={() => handlePress(contact.type, contact.value)}
          activeOpacity={0.7}
        >
          <Ionicons
            name={contact.icon}
            size={22}
            color={theme.accent}
            style={styles.icon}
          />

          <View style={styles.textContainer}>
            <Text style={[styles.label, { color: theme.text }]}>
              {contact.label}
            </Text>
            <Text style={[styles.linkText, { color: theme.link }]}>
              {contact.value}
            </Text>
          </View>

          <Ionicons name="chevron-forward" size={20} color={theme.accent} />
        </TouchableOpacity>
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
  contactRow: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  icon: {
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
  },
  label: {
    fontSize: 13,
    fontWeight: "600",
    marginBottom: 4,
  },
  linkText: {
    fontSize: 14,
    fontWeight: "500",
  },
});

export default ContactSection;
