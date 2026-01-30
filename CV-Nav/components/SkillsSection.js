import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Modal,
  ScrollView,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { skillsData, availableSkills } from "../data/skillsData";
import { useTheme } from "../themes/ThemeContext";

const SkillsSection = () => {
  const { theme } = useTheme();

  const [skills, setSkills] = useState(skillsData.skills);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const [searchQuery, setSearchQuery] = useState("");

  const [customSkill, setCustomSkill] = useState("");

  const removeSkill = (skillToRemove) => {
    Alert.alert(
      "Remove Skill",
      `Are you sure you want to remove "${skillToRemove}"?`,
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Remove",
          style: "destructive",
          onPress: () => {
            setSkills(skills.filter((skill) => skill !== skillToRemove));
          },
        },
      ],
    );
  };

  const addSkill = (skillToAdd) => {
    if (skills.includes(skillToAdd)) {
      Alert.alert(
        "Already Added",
        `"${skillToAdd}" is already in your skills list.`,
      );
      return;
    }

    setSkills([...skills, skillToAdd]);
    Alert.alert("Success", `"${skillToAdd}" added to your skills!`);
  };

  const addCustomSkill = () => {
    const trimmedSkill = customSkill.trim();

    if (trimmedSkill === "") {
      Alert.alert("Empty Skill", "Please enter a skill name.");
      return;
    }

    if (skills.includes(trimmedSkill)) {
      Alert.alert(
        "Already Added",
        `"${trimmedSkill}" is already in your skills list.`,
      );
      return;
    }

    setSkills([...skills, trimmedSkill]);
    setCustomSkill("");
    Alert.alert("Success", `"${trimmedSkill}" added to your skills!`);
  };

  const filteredSkills = availableSkills.filter(
    (skill) =>
      skill.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !skills.includes(skill),
  );

  return (
    <View style={styles.wrapper}>
      {/* Header with title and add button */}
      <View style={styles.header}>
        <Text style={[styles.title, { color: theme.text }]}>
          {skillsData.title}
        </Text>

        <TouchableOpacity
          style={[
            styles.addButton,
            { backgroundColor: theme.buttonBackground },
          ]}
          onPress={() => setIsModalVisible(true)}
          activeOpacity={0.7}
        >
          <Ionicons name="add" size={20} color={theme.buttonIcon} />
          <Text style={[styles.addButtonText, { color: theme.buttonText }]}>
            Add
          </Text>
        </TouchableOpacity>
      </View>

      {/* Skills Display */}
      <View style={styles.skillsContainer}>
        {skills.length === 0 ? (
          <Text style={[styles.emptyText, { color: theme.textTertiary }]}>
            No skills added yet. Tap "Add" to get started!
          </Text>
        ) : (
          skills.map((skill, index) => (
            <View
              key={index}
              style={[styles.skillTag, { backgroundColor: theme.card }]}
            >
              <Text style={[styles.skillText, { color: theme.text }]}>
                {skill}
              </Text>
              <TouchableOpacity
                onPress={() => removeSkill(skill)}
                style={styles.removeButton}
                activeOpacity={0.7}
              >
                <Ionicons name="close-circle" size={20} color={theme.accent} />
              </TouchableOpacity>
            </View>
          ))
        )}
      </View>

      {/* Add Skill Modal */}
      <Modal
        visible={isModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setIsModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View
            style={[styles.modalContent, { backgroundColor: theme.background }]}
          >
            <View style={styles.modalHeader}>
              <Text style={[styles.modalTitle, { color: theme.text }]}>
                Add New Skill
              </Text>
              <TouchableOpacity
                onPress={() => setIsModalVisible(false)}
                activeOpacity={0.7}
              >
                <Ionicons name="close" size={28} color={theme.text} />
              </TouchableOpacity>
            </View>

            <View style={styles.customSkillSection}>
              <Text style={[styles.sectionLabel, { color: theme.text }]}>
                Add Custom Skill:
              </Text>
              <View style={styles.inputContainer}>
                <TextInput
                  style={[
                    styles.input,
                    {
                      backgroundColor: theme.card,
                      color: theme.text,
                      borderColor: theme.border,
                    },
                  ]}
                  placeholder="e.g., Photoshop, Public Speaking"
                  placeholderTextColor={theme.textTertiary}
                  value={customSkill}
                  onChangeText={setCustomSkill}
                />
                <TouchableOpacity
                  style={[
                    styles.addIconButton,
                    { backgroundColor: theme.buttonBackground },
                  ]}
                  onPress={addCustomSkill}
                  activeOpacity={0.7}
                >
                  <Ionicons name="add" size={24} color={theme.buttonIcon} />
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.searchSection}>
              <Text style={[styles.sectionLabel, { color: theme.text }]}>
                Or Choose from List:
              </Text>
              <View
                style={[
                  styles.searchBar,
                  {
                    backgroundColor: theme.card,
                    borderColor: theme.border,
                  },
                ]}
              >
                <Ionicons name="search" size={20} color={theme.textTertiary} />
                <TextInput
                  style={[styles.searchInput, { color: theme.text }]}
                  placeholder="Search skills..."
                  placeholderTextColor={theme.textTertiary}
                  value={searchQuery}
                  onChangeText={setSearchQuery}
                />
              </View>
            </View>

            <ScrollView style={styles.skillsList}>
              {filteredSkills.length === 0 ? (
                <Text
                  style={[styles.noResultsText, { color: theme.textTertiary }]}
                >
                  {searchQuery
                    ? "No skills found matching your search."
                    : "All available skills have been added!"}
                </Text>
              ) : (
                filteredSkills.map((skill, index) => (
                  <TouchableOpacity
                    key={index}
                    style={[
                      styles.availableSkillItem,
                      {
                        backgroundColor: theme.card,
                        borderColor: theme.border,
                      },
                    ]}
                    onPress={() => addSkill(skill)}
                    activeOpacity={0.7}
                  >
                    <Text
                      style={[styles.availableSkillText, { color: theme.text }]}
                    >
                      {skill}
                    </Text>
                    <Ionicons
                      name="add-circle"
                      size={24}
                      color={theme.buttonBackground}
                    />
                  </TouchableOpacity>
                ))
              )}
            </ScrollView>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
  },
  addButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  addButtonText: {
    fontSize: 14,
    fontWeight: "600",
    marginLeft: 6,
  },

  skillsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  skillTag: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingLeft: 16,
    paddingRight: 12,
    borderRadius: 20,
    marginBottom: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  skillText: {
    fontSize: 15,
    fontWeight: "500",
    marginRight: 8,
  },
  removeButton: {
    padding: 2,
  },
  emptyText: {
    fontSize: 15,
    fontStyle: "italic",
    textAlign: "center",
    paddingVertical: 30,
  },

  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    justifyContent: "flex-end",
  },
  modalContent: {
    height: "80%",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 20,
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: "bold",
  },

  customSkillSection: {
    marginBottom: 20,
  },
  sectionLabel: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 10,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  input: {
    flex: 1,
    height: 45,
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 15,
    borderWidth: 1,
  },
  addIconButton: {
    width: 45,
    height: 45,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  searchSection: {
    marginBottom: 15,
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    height: 45,
    borderRadius: 10,
    paddingHorizontal: 15,
    borderWidth: 1,
  },
  searchInput: {
    flex: 1,
    fontSize: 15,
    marginLeft: 10,
  },

  skillsList: {
    flex: 1,
  },
  availableSkillItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 1,
  },
  availableSkillText: {
    fontSize: 15,
    fontWeight: "500",
  },
  noResultsText: {
    fontSize: 14,
    textAlign: "center",
    marginTop: 20,
    fontStyle: "italic",
  },
});

export default SkillsSection;
