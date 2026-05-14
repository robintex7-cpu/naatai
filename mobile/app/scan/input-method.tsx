import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { useScanStore } from "../../store/scan";
import { useLanguageStore } from "../../store/language";
import { t } from "../../services/i18n";
import { scanAPI } from "../../services/api";
import { useState } from "react";
import Toast from "react-native-toast-message";

const GOLD = "#C9A84C";

export default function InputMethodScreen() {
  const router  = useRouter();
  const { gender, clothingType, setInputMethod, setScanId } = useScanStore();
  const { lang } = useLanguageStore();
  const [loading, setLoading] = useState<string | null>(null);

  const methods = [
    {
      value:     "video" as const,
      icon:      "videocam-outline",
      label:     t(lang, "scan3D"),
      desc:      t(lang, "scan3DSub"),
      badge:     t(lang, "mostAccurate"),
      badgeColor: GOLD,
    },
    {
      value:     "photo" as const,
      icon:      "camera-outline",
      label:     t(lang, "photoScan"),
      desc:      t(lang, "photoScanSub"),
      badge:     t(lang, "quick"),
      badgeColor: "#4fc3f7",
    },
    {
      value:     "manual" as const,
      icon:      "pencil-outline",
      label:     t(lang, "manual"),
      desc:      t(lang, "manualSub"),
      badge:     t(lang, "manual").toUpperCase(),
      badgeColor: "rgba(255,255,255,0.3)",
    },
  ];

  const handleSelect = async (method: "video" | "photo" | "manual") => {
    setLoading(method);
    try {
      const { data } = await scanAPI.create({
        gender:        gender!,
        clothing_type: clothingType!,
        input_method:  method,
      });
      setInputMethod(method);
      setScanId(data.id);

      if (method === "video")  router.push("/scan/height-input");
      if (method === "photo")  router.push("/scan/photo-scan");
      if (method === "manual") router.push("/scan/manual-input");
    } catch {
      Toast.show({ type: "error", text1: "Failed to start scan. Check connection." });
    } finally {
      setLoading(null);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.back}>
          <Ionicons name="arrow-back" size={22} color="rgba(255,255,255,0.6)" />
        </TouchableOpacity>
        <Text style={styles.step}>STEP 2 OF 3</Text>
      </View>

      <Text style={styles.title}>{t(lang, "howToMeasure")}</Text>
      <Text style={styles.sub}>{t(lang, "chooseMethod")}</Text>

      <View style={styles.options}>
        {methods.map((m) => (
          <TouchableOpacity key={m.value} onPress={() => handleSelect(m.value)} activeOpacity={0.8} disabled={!!loading}>
            <LinearGradient colors={["#1a1a1a", "#111"]} style={[styles.card, loading === m.value && styles.cardLoading]}>
              <View style={styles.topRow}>
                <View style={styles.iconWrap}>
                  <Ionicons name={m.icon as any} size={26} color={GOLD} />
                </View>
                <View style={[styles.badge, { borderColor: m.badgeColor }]}>
                  <Text style={[styles.badgeText, { color: m.badgeColor }]}>{m.badge}</Text>
                </View>
              </View>
              <Text style={styles.cardLabel}>{m.label}</Text>
              <Text style={styles.cardDesc}>{m.desc}</Text>
            </LinearGradient>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:   { flex: 1, backgroundColor: "#0A0A0A", padding: 24 },
  header:      { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 32 },
  back:        { padding: 4 },
  step:        { color: "rgba(255,255,255,0.3)", fontSize: 10, letterSpacing: 3 },
  title:       { fontSize: 30, fontWeight: "300", color: "#fff", lineHeight: 38, marginBottom: 8 },
  sub:         { color: "rgba(255,255,255,0.4)", fontSize: 13, marginBottom: 32 },
  options:     { gap: 14 },
  card:        { padding: 22, borderColor: "rgba(255,255,255,0.05)", borderWidth: 1, borderRadius: 2, gap: 8 },
  cardLoading: { opacity: 0.5 },
  topRow:      { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  iconWrap:    { width: 46, height: 46, backgroundColor: "rgba(201,168,76,0.1)", borderRadius: 1, alignItems: "center", justifyContent: "center" },
  badge:       { borderWidth: 1, borderRadius: 1, paddingHorizontal: 8, paddingVertical: 3 },
  badgeText:   { fontSize: 9, letterSpacing: 2, fontWeight: "600" },
  cardLabel:   { color: "#fff", fontSize: 17, fontWeight: "400", letterSpacing: 0.5 },
  cardDesc:    { color: "rgba(255,255,255,0.4)", fontSize: 12, lineHeight: 18 },
});
