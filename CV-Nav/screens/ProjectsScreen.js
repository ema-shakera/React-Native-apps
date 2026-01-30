import React from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "../themes/ThemeContext";
import { projectsData } from "../data/projectsData";

export default function ProjectsScreen({ navigation }) {
  const { theme } = useTheme();

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={{ backgroundColor: theme.background }}>
        <View style={styles.wrapper}>
          <Text style={[styles.title, { color: theme.text }]}>My Projects</Text>

          {projectsData.map((project) => (
            <View
              key={project.id}
              style={[styles.card, { backgroundColor: theme.card }]}
            >
              <Image source={project.image} style={styles.image} />
              <Text style={[styles.projectTitle, { color: theme.text }]}>
                {project.title}
              </Text>
              <Text
                style={[styles.projectText, { color: theme.textSecondary }]}
              >
                {project.shortDescription}
              </Text>

              <TouchableOpacity
                style={[
                  styles.detailsButton,
                  { backgroundColor: theme.buttonBackground },
                ]}
                onPress={() =>
                  navigation.navigate("ProjectDetails", { project })
                }
                activeOpacity={0.7}
              >
                <Text style={[styles.detailsText, { color: theme.buttonText }]}>
                  More Details
                </Text>
              </TouchableOpacity>
            </View>
          ))}
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
    gap: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
  },
  card: {
    padding: 16,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: "100%",
    height: 160,
    borderRadius: 10,
    marginBottom: 12,
  },
  projectTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 6,
  },
  projectText: {
    fontSize: 14,
    marginBottom: 12,
  },
  detailsButton: {
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: "center",
  },
  detailsText: {
    fontSize: 14,
    fontWeight: "600",
  },
});
