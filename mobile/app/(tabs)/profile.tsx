import { View, Text, StyleSheet, TouchableOpacity, Alert, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useAuthStore } from "../../store/auth";
import { useLanguageStore } from "../../store/language";
import { t, LANGUAGES } from "../../services/i18n";
import NaataiMark from "../../components/NaataiMark";

const GOLD = "#C9A84C";

export default function ProfileScreen() {
  const { userName, userId, logout } = useAuthStore();
  const { lang } = useLanguageStore();
  const router = useRouter();

  const currentLang = LANGUAGES.find((l) => l.code === lang)!;

  const handleLogout = () => {
    Alert.alert(t(lang, "logout"), t(lang, "logoutConfirm"), [
      { text: t(lang, "cancel"), style: "cancel" },
      {
        text: t(lang, "logout"),
        style: "destructive",
        onPress: async () => {
          await logout();
          router.replace("/login");
        },
      },
    ]);
  };

  const MenuRow = ({ icon, label, onPress, danger, badge }: any) => (
    <TouchableOpacity style={styles.menuRow} onPress={onPress} activeOpacity={0.7}>
      <Ionicons name={icon} size={20} color={danger ? "#ef5350" : "rgba(255,255,255,0.5)"} />
      <Text style={[styles.menuLabel, danger && { color: "#ef5350" }]}>{label}</Text>
      {badge ? (
        <Text style={styles.badge}>{badge}</Text>
      ) : (
        <Ionicons name="chevron-forward" size={14} color="rgba(255,255,255,0.2)" />
      )}
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 40 }}>
      {/* Avatar */}
      <View style={styles.avatar}>
        <NaataiMark size={72} />
        <View style={styles.avatarInitial}>
          <Text style={styles.avatarLetter}>{(userName || "C")[0].toUpperCase()}</Text>
        </View>
        <Text style={styles.userName}>{userName || "Customer"}</Text>
        <Text style={styles.userId}>Customer #{userId}</Text>
      </View>

      {/* Account */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>{t(lang, "account")}</Text>
        <MenuRow icon="person-outline"  label={t(lang, "editProfile")}  onPress={() => {}} />
        <MenuRow icon="body-outline"    label={t(lang, "scanHistory")}  onPress={() => router.push("/(tabs)/history")} />
        <MenuRow icon="resize-outline"  label={t(lang, "savedProfiles")} onPress={() => {}} />
      </View>

      {/* App */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>{t(lang, "appSettings")}</Text>
        <MenuRow
          icon="globe-outline"
          label={t(lang, "language")}
          onPress={() => router.push("/language-select")}
          badge={`${currentLang.flag} ${currentLang.label}`}
        />
        <MenuRow icon="ruler-outline"        label={t(lang, "units")}         onPress={() => {}} />
        <MenuRow icon="notifications-outline" label={t(lang, "notifications")} onPress={() => {}} />
      </View>

      {/* Support */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>{t(lang, "support")}</Text>
        <MenuRow icon="help-circle-outline"       label={t(lang, "helpCenter")}    onPress={() => {}} />
        <MenuRow icon="document-text-outline"     label={t(lang, "privacyPolicy")} onPress={() => {}} />
        <MenuRow icon="information-circle-outline" label={t(lang, "appVersion")}   onPress={() => {}} />
      </View>

      {/* Logout */}
      <View style={styles.section}>
        <MenuRow icon="log-out-outline" label={t(lang, "logout")} onPress={handleLogout} danger />
      </View>

      <Text style={styles.brand}>NAATAI FIT · naatai.de</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container:    { flex: 1, backgroundColor: "#0A0A0A" },

  avatar:        { alignItems: "center", paddingVertical: 36, borderBottomColor: "rgba(255,255,255,0.05)", borderBottomWidth: 1 },
  avatarInitial: { width: 36, height: 36, borderRadius: 18, backgroundColor: GOLD, alignItems: "center", justifyContent: "center", marginTop: 10, marginBottom: 10 },
  avatarLetter:  { fontSize: 16, fontWeight: "400", color: "#000" },
  userName:     { color: "#fff", fontSize: 20, fontWeight: "300", letterSpacing: 1 },
  userId:       { color: "rgba(255,255,255,0.3)", fontSize: 12, marginTop: 4 },

  section:      { paddingHorizontal: 24, paddingTop: 24 },
  sectionTitle: { color: "rgba(255,255,255,0.25)", fontSize: 9, letterSpacing: 4, marginBottom: 8 },

  menuRow:      { flexDirection: "row", alignItems: "center", gap: 14, paddingVertical: 14, borderBottomColor: "rgba(255,255,255,0.04)", borderBottomWidth: 1 },
  menuLabel:    { flex: 1, color: "rgba(255,255,255,0.7)", fontSize: 14 },
  badge:        { color: "rgba(255,255,255,0.5)", fontSize: 12 },

  brand:        { color: "rgba(255,255,255,0.15)", textAlign: "center", fontSize: 11, letterSpacing: 3, marginTop: 32 },
});
