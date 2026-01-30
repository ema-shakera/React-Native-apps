import { View, Text, StyleSheet } from "react-native";
import { languagesData } from "../data/languagesData";
import { useTheme } from "../themes/ThemeContext";

const LanguagesSection = () => {
  const { theme } = useTheme();

  return (
    <View style={styles.wrapper}>
      <Text style={[styles.title, { color: theme.text }]}>
        {languagesData.title}
      </Text>

      <View style={[styles.card, { backgroundColor: theme.card }]}>
        {languagesData.languages.map((language, index) => (
          <Text
            key={index}
            style={[styles.language, { color: theme.textSecondary }]}
          >
            • {language}
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
  language: {
    fontSize: 15,
    marginBottom: 8,
  },
});

export default LanguagesSection;
