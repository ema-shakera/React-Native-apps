import { View, Text, StyleSheet } from "react-native";
import { educationData } from "../data/educationData";
import { useTheme } from "../themes/ThemeContext";

const EducationSection = () => {
  const { theme } = useTheme();

  return (
    <View style={styles.wrapper}>
      <Text style={[styles.title, { color: theme.text }]}>
        {educationData.title}
      </Text>

      {educationData.degrees.map((edu, index) => (
        <View
          key={index}
          style={[styles.educationCard, { backgroundColor: theme.card }]}
        >
          <Text style={[styles.degree, { color: theme.text }]}>
            {edu.degree}
          </Text>

          {edu.group && (
            <Text style={[styles.institution, { color: theme.textSecondary }]}>
              GROUP: {edu.group}
            </Text>
          )}

          <Text style={[styles.institution, { color: theme.textSecondary }]}>
            {edu.institution}
          </Text>

          {edu.gpa && (
            <Text style={[styles.gpa, { color: theme.textSecondary }]}>
              GPA - {edu.gpa}
            </Text>
          )}

          <Text style={[styles.duration, { color: theme.textTertiary }]}>
            {edu.duration}
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
  educationCard: {
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  degree: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  institution: {
    fontSize: 14,
    marginBottom: 3,
  },
  gpa: {
    fontSize: 14,
    marginBottom: 3,
  },
  duration: {
    fontSize: 13,
    marginTop: 5,
  },
});

export default EducationSection;
