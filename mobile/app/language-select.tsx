import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  FlatList,
} from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { LANGUAGES, type Lang } from "../services/i18n";
import { useLanguageStore } from "../store/language";

const GOLD = "#C9A84C";

export default function LanguageSelectScreen() {
  const router = useRouter();
  const { lang, setLang } = useLanguageStore();

  const handleSelect = (code: Lang) => {
    setLang(code);
    router.back();
  };

  return (
    <SafeAreaView style={styles.safe}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} hitSlop={12}>
          <Ionicons name="chevron-back" size={22} color="rgba(255,255,255,0.7)" />
        </TouchableOpacity>
        <Text style={styles.title}>Language</Text>
        <View style={{ width: 22 }} />
      </View>

      <FlatList
        data={LANGUAGES}
        keyExtractor={(item) => item.code}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => {
          const active = item.code === lang;
          return (
            <TouchableOpacity
              style={[styles.row, active && styles.rowActive]}
              onPress={() => handleSelect(item.code)}
              activeOpacity={0.7}
            >
              <Text style={styles.flag}>{item.flag}</Text>
              <View style={styles.rowText}>
                <Text style={[styles.label, active && { color: GOLD }]}>{item.label}</Text>
                {item.rtl && (
                  <Text style={styles.rtlBadge}>RTL</Text>
                )}
              </View>
              {active && (
                <Ionicons name="checkmark" size={18} color={GOLD} />
              )}
            </TouchableOpacity>
          );
        }}
        ItemSeparatorComponent={() => <View style={styles.sep} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe:       { flex: 1, backgroundColor: "#0A0A0A" },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomColor: "rgba(255,255,255,0.07)",
    borderBottomWidth: 1,
  },
  title: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "300",
    letterSpacing: 2,
  },

  list:       { paddingHorizontal: 20, paddingTop: 12 },

  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 18,
    paddingHorizontal: 16,
    borderRadius: 10,
    backgroundColor: "rgba(255,255,255,0.03)",
    gap: 14,
  },
  rowActive:  { backgroundColor: "rgba(201,168,76,0.08)", borderColor: "rgba(201,168,76,0.3)", borderWidth: 1 },

  flag:       { fontSize: 28 },

  rowText:    { flex: 1, flexDirection: "row", alignItems: "center", gap: 10 },
  label:      { color: "rgba(255,255,255,0.8)", fontSize: 16, fontWeight: "300" },
  rtlBadge:   { fontSize: 9, color: GOLD, borderColor: GOLD, borderWidth: 1, borderRadius: 3, paddingHorizontal: 4, paddingVertical: 1, letterSpacing: 1 },

  sep:        { height: 8 },
});
