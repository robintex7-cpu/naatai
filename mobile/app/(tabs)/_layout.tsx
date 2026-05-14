import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Platform } from "react-native";
import { useLanguageStore } from "../../store/language";
import { t } from "../../services/i18n";

const GOLD = "#C9A84C";

export default function TabLayout() {
  const { lang } = useLanguageStore();

  return (
    <Tabs
      screenOptions={{
        headerShown:      false,
        tabBarStyle:      {
          backgroundColor: "#111",
          borderTopColor:  "rgba(255,255,255,0.05)",
          height:          Platform.OS === "ios" ? 85 : 65,
          paddingBottom:   Platform.OS === "ios" ? 25 : 8,
        },
        tabBarActiveTintColor:   GOLD,
        tabBarInactiveTintColor: "rgba(255,255,255,0.3)",
        tabBarLabelStyle:        { fontSize: 10, letterSpacing: 1 },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: t(lang, "tabHome"),
          tabBarIcon: ({ color }) => <Ionicons name="home-outline" size={22} color={color} />,
        }}
      />
      <Tabs.Screen
        name="scan"
        options={{
          title: t(lang, "tabScan"),
          tabBarIcon: ({ color }) => <Ionicons name="body-outline" size={22} color={color} />,
        }}
      />
      <Tabs.Screen
        name="history"
        options={{
          title: t(lang, "tabHistory"),
          tabBarIcon: ({ color }) => <Ionicons name="time-outline" size={22} color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: t(lang, "tabProfile"),
          tabBarIcon: ({ color }) => <Ionicons name="person-outline" size={22} color={color} />,
        }}
      />
    </Tabs>
  );
}
