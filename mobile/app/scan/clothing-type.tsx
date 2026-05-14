import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { useScanStore } from "../../store/scan";
import { useLanguageStore } from "../../store/language";
import { t } from "../../services/i18n";

const GOLD = "#C9A84C";

export default function ClothingTypeScreen() {
  const router = useRouter();
  const { gender, setClothingType } = useScanStore();
  const { lang } = useLanguageStore();

  const options = [
    { label: t(lang, "tops"),     value: "tops",      icon: "shirt-outline",  desc: t(lang, "topsSub") },
    { label: t(lang, "bottom"),   value: "bottom",    icon: "layers-outline", desc: t(lang, "bottomSub") },
    { label: t(lang, "fullBody"), value: "full_body", icon: "body-outline",   desc: t(lang, "fullBodySub") },
  ] as const;

  const handleSelect = (type: "tops" | "bottom" | "full_body") => {
    setClothingType(type);
    router.push("/scan/input-method");
  };

  const genderLabel = gender ? t(lang, gender as any) : "";

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.back}>
          <Ionicons name="arrow-back" size={22} color="rgba(255,255,255,0.6)" />
        </TouchableOpacity>
        <Text style={styles.step}>STEP 1 OF 3</Text>
      </View>

      <Text style={styles.title}>{t(lang, "shoppingFor")}</Text>
      <Text style={styles.sub}>
        {t(lang, "man") !== gender
          ? <>For <Text style={{ color: GOLD }}>{genderLabel.toUpperCase()}</Text></>
          : <Text style={{ color: GOLD }}>{genderLabel.toUpperCase()}</Text>
        }
      </Text>

      <View style={styles.options}>
        {options.map((opt) => (
          <TouchableOpacity
            key={opt.value}
            onPress={() => handleSelect(opt.value)}
            activeOpacity={0.8}
          >
            <LinearGradient colors={["#1a1a1a", "#111"]} style={styles.card}>
              <View style={styles.iconWrap}>
                <Ionicons name={opt.icon as any} size={28} color={GOLD} />
              </View>
              <View style={styles.cardText}>
                <Text style={styles.cardLabel}>{opt.label}</Text>
                <Text style={styles.cardDesc}>{opt.desc}</Text>
              </View>
              <Ionicons name="chevron-forward" size={18} color="rgba(255,255,255,0.2)" />
            </LinearGradient>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#0A0A0A", padding: 24 },
  header:    { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 32 },
  back:      { padding: 4 },
  step:      { color: "rgba(255,255,255,0.3)", fontSize: 10, letterSpacing: 3 },

  title:     { fontSize: 32, fontWeight: "300", color: "#fff", lineHeight: 40, marginBottom: 8 },
  sub:       { color: "rgba(255,255,255,0.4)", fontSize: 13, letterSpacing: 2, marginBottom: 36 },

  options:   { gap: 14 },
  card:      { flexDirection: "row", alignItems: "center", padding: 20, gap: 16, borderColor: "rgba(255,255,255,0.05)", borderWidth: 1, borderRadius: 2 },
  iconWrap:  { width: 50, height: 50, backgroundColor: "rgba(201,168,76,0.1)", borderRadius: 1, alignItems: "center", justifyContent: "center" },
  cardText:  { flex: 1 },
  cardLabel: { color: "#fff", fontSize: 16, fontWeight: "400", letterSpacing: 1, marginBottom: 4 },
  cardDesc:  { color: "rgba(255,255,255,0.35)", fontSize: 12 },
});
