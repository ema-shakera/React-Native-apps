import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";

import { ThemeProvider, useTheme } from "./themes/ThemeContext";

import ProfileScreen from "./screens/ProfileScreen";
import AboutScreen from "./screens/AboutScreen";
import ContactScreen from "./screens/ContactScreen";
import EducationScreen from "./screens/EducationScreen";
import LanguagesScreen from "./screens/LanguagesScreen";
import ExperienceScreen from "./screens/ExperienceScreen";
import InterestsScreen from "./screens/InterestsScreen";
import SkillsScreen from "./screens/SkillsScreen";
import ProjectsScreen from "./screens/ProjectsScreen";
import ProjectDetailsScreen from "./screens/ProjectDetailsScreen";

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function ProfileStack() {
  const { theme } = useTheme();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="About" component={AboutScreen} />
      <Stack.Screen name="Contact" component={ContactScreen} />
      <Stack.Screen name="Education" component={EducationScreen} />
      <Stack.Screen name="Languages" component={LanguagesScreen} />
    </Stack.Navigator>
  );
}

function WorkStack() {
  const { theme } = useTheme();

  return (
    <Stack.Navigator>
      <Stack.Screen name="Experience" component={ExperienceScreen} />
      <Stack.Screen name="Projects" component={ProjectsScreen} />
      <Stack.Screen
        name="ProjectDetails"
        component={ProjectDetailsScreen}
        options={{ title: "Project Details" }}
      />
      <Stack.Screen name="Interests" component={InterestsScreen} />
      <Stack.Screen name="Skills" component={SkillsScreen} />
    </Stack.Navigator>
  );
}

function MainTabs() {
  const { theme } = useTheme();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: theme.primary,
          borderTopColor: theme.border,
          borderTopWidth: 1,
          paddingBottom: 25,
          paddingTop: 8,
          height: 85,
        },
        tabBarActiveTintColor: theme.textLight,
        tabBarInactiveTintColor: theme.textTertiary,
        tabBarLabelStyle: { fontSize: 12, fontWeight: "500" },
      }}
    >
      <Tab.Screen
        name="ProfileTab"
        component={ProfileStack}
        options={{
          title: "Profile",
          tabBarLabel: "Profile",
          tabBarIcon: ({ color }) => (
            <Ionicons name="person" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="WorkTab"
        component={WorkStack}
        options={{
          title: "Work",
          tabBarLabel: "Work",
          tabBarIcon: ({ color }) => (
            <Ionicons name="briefcase" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function RootNavigation() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen
          name="Home"
          component={MainTabs}
          options={{ title: "My CV" }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <RootNavigation />
    </ThemeProvider>
  );
}
