import { View, Text, StyleSheet, FlatList, TouchableOpacity, ActivityIndicator, Image } from "react-native";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { scanAPI } from "../../services/api";
import { useLanguageStore } from "../../store/language";
import { t } from "../../services/i18n";

const GOLD = "#C9A84C";

const statusColor: Record<string, string> = {
  completed:  "#4caf50",
  processing: "#ff9800",
  pending:    "#9e9e9e",
  failed:     "#f44336",
};

export default function HistoryScreen() {
  const router = useRouter();
  const { lang } = useLanguageStore();

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["scans"],
    queryFn: async () => { const { data } = await scanAPI.listScans(); return data; },
  });

  if (isLoading) return (
    <View style={[styles.container, styles.centered]}>
      <ActivityIndicator color={GOLD} size="large" />
    </View>
  );

  if (!data?.length) return (
    <View style={[styles.container, styles.centered]}>
      <Ionicons name="body-outline" size={48} color="rgba(255,255,255,0.1)" />
      <Text style={styles.emptyTitle}>{t(lang, "noScans")}</Text>
      <Text style={styles.emptyText}>{t(lang, "noScansSub")}</Text>
      <TouchableOpacity style={styles.ctaBtn} onPress={() => router.push("/(tabs)/home")}>
        <Text style={styles.ctaBtnText}>{t(lang, "startFirstScan")}</Text>
      </TouchableOpacity>
    </View>
  );

  const methodLabel = (method: string) => {
    if (method === "video")  return t(lang, "scan3D");
    if (method === "photo")  return t(lang, "photoScan");
    return t(lang, "manual");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>{t(lang, "scanHistory")}</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => String(item.id)}
        onRefresh={refetch}
        refreshing={isLoading}
        contentContainerStyle={{ padding: 16, gap: 12 }}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => router.push(`/scan/results?scanId=${item.id}`)}
            style={styles.card}
            activeOpacity={0.8}
          >
            <View style={styles.thumb}>
              {item.thumbnail_path
                ? <Image source={{ uri: `http://localhost:8000/storage/thumbnails/${item.id}.jpg` }} style={styles.thumbImg} />
                : <Ionicons name="body-outline" size={32} color="rgba(255,255,255,0.15)" />
              }
            </View>

            <View style={styles.info}>
              <View style={styles.topRow}>
                <Text style={styles.cardTitle}>
                  {item.gender.charAt(0).toUpperCase() + item.gender.slice(1)} · {item.clothing_type.replace("_", " ")}
                </Text>
                <View style={[styles.statusDot, { backgroundColor: statusColor[item.status] || "#9e9e9e" }]} />
              </View>
              <Text style={styles.method}>{methodLabel(item.input_method)}</Text>
              <Text style={styles.date}>Scan #{item.id}</Text>
            </View>

            <Ionicons name="chevron-forward" size={16} color="rgba(255,255,255,0.2)" />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container:  { flex: 1, backgroundColor: "#0A0A0A" },
  centered:   { alignItems: "center", justifyContent: "center", gap: 14 },
  pageTitle:  { color: "rgba(255,255,255,0.3)", fontSize: 10, letterSpacing: 4, padding: 24, paddingBottom: 8 },

  card:       { flexDirection: "row", alignItems: "center", backgroundColor: "#111", borderColor: "rgba(255,255,255,0.05)", borderWidth: 1, padding: 14, gap: 14 },
  thumb:      { width: 52, height: 64, backgroundColor: "#1a1a1a", alignItems: "center", justifyContent: "center", overflow: "hidden" },
  thumbImg:   { width: "100%", height: "100%", resizeMode: "cover" },
  info:       { flex: 1, gap: 4 },
  topRow:     { flexDirection: "row", alignItems: "center", justifyContent: "space-between" },
  cardTitle:  { color: "#fff", fontSize: 14, fontWeight: "400" },
  statusDot:  { width: 7, height: 7, borderRadius: 4 },
  method:     { color: GOLD, fontSize: 11, letterSpacing: 1 },
  date:       { color: "rgba(255,255,255,0.3)", fontSize: 11 },

  emptyTitle: { color: "#fff", fontSize: 18, fontWeight: "300" },
  emptyText:  { color: "rgba(255,255,255,0.3)", fontSize: 13 },
  ctaBtn:     { backgroundColor: GOLD, paddingHorizontal: 24, paddingVertical: 12, marginTop: 8 },
  ctaBtnText: { color: "#000", letterSpacing: 3, fontSize: 12, fontWeight: "600" },
});
