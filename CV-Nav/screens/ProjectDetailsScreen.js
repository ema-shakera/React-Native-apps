import React from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  Image,
  Linking,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "../themes/ThemeContext";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

export default function ProjectDetailsScreen({ route }) {
  const { theme } = useTheme();
  const { project } = route.params;

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={{ backgroundColor: theme.background }}>
        <View style={styles.wrapper}>
          <Image source={project.image} style={styles.image} />
          <Text style={[styles.title, { color: theme.text }]}>
            {project.title}
          </Text>
          <Text style={[styles.details, { color: theme.textSecondary }]}>
            {project.details}
          </Text>

          <Text style={[styles.techTitle, { color: theme.text }]}>
            Tech Used
          </Text>
          {project.tech.map((item) => (
            <Text
              key={item}
              style={[styles.techItem, { color: theme.textSecondary }]}
            >
              • {item}
            </Text>
          ))}
          {project?.projectLink ? (
            <Text>
              <FontAwesome5 name="project-diagram" size={12} color={theme.link} padding={4} />
              <Text
                style={[styles.linkText, { color: theme.link }]}
                onPress={() => Linking.openURL(project.projectLink)}
              >
                View Project Here
              </Text>
            </Text>
          ) : null}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  wrapper: {
    padding: 16,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 12,
    marginBottom: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 8,
  },
  details: {
    fontSize: 14,
    lineHeight: 22,
    marginBottom: 16,
  },
  techTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
  },
  techItem: {
    fontSize: 14,
    marginBottom: 4,
  },
  linkText: {
    marginTop: 12,
    textDecorationLine: "underline",
  },
});
