import { useEffect } from "react";
import { useRouter } from "expo-router";
import { View, ActivityIndicator } from "react-native";
import { useAuthStore } from "../store/auth";

export default function Index() {
  const { isLoggedIn, loadFromStorage } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    loadFromStorage().then(() => {
      if (isLoggedIn) router.replace("/(tabs)/home");
      else            router.replace("/login");
    });
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: "#0A0A0A", alignItems: "center", justifyContent: "center" }}>
      <ActivityIndicator color="#C9A84C" size="large" />
    </View>
  );
}
