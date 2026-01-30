import { View, Text, StyleSheet } from "react-native";
import { interestsData } from "../data/interestsData";
import { useTheme } from "../themes/ThemeContext";

const InterestsSection = () => {
  const { theme } = useTheme();

  return (
    <View style={styles.wrapper}>
      <Text style={[styles.title, { color: theme.text }]}>
        {interestsData.title}
      </Text>

      <View style={[styles.card, { backgroundColor: theme.card }]}>
        {interestsData.interests.map((interest, index) => (
          <Text
            key={index}
            style={[styles.interest, { color: theme.textSecondary }]}
          >
            • {interest}
          </Text>
        ))}
      </View>
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
  card: {
    padding: 16,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  interest: {
    fontSize: 15,
    marginBottom: 8,
    lineHeight: 22,
  },
});

export default InterestsSection;
