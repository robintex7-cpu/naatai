import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { useAuthStore } from "../../store/auth";
import { useScanStore } from "../../store/scan";
import { useLanguageStore } from "../../store/language";
import { t } from "../../services/i18n";
import NaataiMark from "../../components/NaataiMark";

const GOLD = "#C9A84C";

export default function HomeScreen() {
  const router  = useRouter();
  const { userName } = useAuthStore();
  const { setGender, reset } = useScanStore();
  const { lang } = useLanguageStore();

  const genderOptions = [
    { label: t(lang, "man"),   value: "man",   icon: "👔", color: "#1a237e" },
    { label: t(lang, "woman"), value: "woman", icon: "👗", color: "#880e4f" },
    { label: t(lang, "kid"),   value: "kid",   icon: "🧒", color: "#1b5e20" },
  ] as const;

  const steps = [
    { step: "01", title: t(lang, "step1Title"), desc: t(lang, "step1Desc") },
    { step: "02", title: t(lang, "step2Title"), desc: t(lang, "step2Desc") },
    { step: "03", title: t(lang, "step3Title"), desc: t(lang, "step3Desc") },
  ];

  const handleGenderSelect = (gender: "man" | "woman" | "kid") => {
    reset();
    setGender(gender);
    router.push("/scan/clothing-type");
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>

      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>{t(lang, "welcomeBack")}</Text>
          <Text style={styles.name}>{userName || "Customer"}</Text>
        </View>
        <View style={styles.logoRing}>
          <NaataiMark size={36} />
        </View>
      </View>

      {/* Banner */}
      <LinearGradient colors={["#1a1a1a", "#111"]} style={styles.banner}>
        <Text style={styles.bannerTitle}>
          {t(lang, "findPerfectFit").split("\n")[0]}{"\n"}
          <Text style={styles.bannerGold}>{t(lang, "findPerfectFit").split("\n")[1] ?? ""}</Text>
        </Text>
        <Text style={styles.bannerSub}>{t(lang, "findPerfectFitSub")}</Text>
        <View style={styles.goldBar} />
      </LinearGradient>

      {/* Gender Selection */}
      <Text style={styles.sectionTitle}>{t(lang, "whoIsThisFor")}</Text>

      <View style={styles.genderGrid}>
        {genderOptions.map((opt) => (
          <TouchableOpacity
            key={opt.value}
            style={styles.genderCard}
            onPress={() => handleGenderSelect(opt.value)}
            activeOpacity={0.8}
          >
            <LinearGradient
              colors={[opt.color + "44", opt.color + "22"]}
              style={styles.genderGradient}
            >
              <Text style={styles.genderIcon}>{opt.icon}</Text>
              <Text style={styles.genderLabel}>{opt.label}</Text>
              <Ionicons name="arrow-forward" size={14} color={GOLD} style={{ marginTop: 8 }} />
            </LinearGradient>
          </TouchableOpacity>
        ))}
      </View>

      {/* How it works */}
      <Text style={styles.sectionTitle}>{t(lang, "howItWorks")}</Text>

      <View style={styles.stepsWrap}>
        {steps.map((s) => (
          <View key={s.step} style={styles.stepRow}>
            <Text style={styles.stepNum}>{s.step}</Text>
            <View style={styles.stepText}>
              <Text style={styles.stepTitle}>{s.title}</Text>
              <Text style={styles.stepDesc}>{s.desc}</Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container:    { flex: 1, backgroundColor: "#0A0A0A" },
  content:      { padding: 20, paddingBottom: 40 },

  header:       { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 24 },
  greeting:     { color: "rgba(255,255,255,0.4)", fontSize: 12, letterSpacing: 2 },
  name:         { color: "#fff", fontSize: 22, fontWeight: "300", letterSpacing: 1 },

  banner:       { borderRadius: 2, padding: 28, marginBottom: 32, borderColor: "rgba(201,168,76,0.1)", borderWidth: 1 },
  bannerTitle:  { fontSize: 30, color: "#fff", fontWeight: "300", lineHeight: 38 },
  bannerGold:   { color: GOLD },
  bannerSub:    { color: "rgba(255,255,255,0.4)", fontSize: 13, lineHeight: 20, marginTop: 10 },
  goldBar:      { width: 40, height: 1, backgroundColor: GOLD, marginTop: 20 },

  sectionTitle: { color: "rgba(255,255,255,0.3)", fontSize: 10, letterSpacing: 3, marginBottom: 16 },

  genderGrid:   { flexDirection: "row", gap: 12, marginBottom: 32 },
  genderCard:   { flex: 1, borderRadius: 2, overflow: "hidden", borderColor: "rgba(255,255,255,0.05)", borderWidth: 1 },
  genderGradient:{ padding: 20, alignItems: "center" },
  genderIcon:   { fontSize: 32, marginBottom: 8 },
  genderLabel:  { color: "#fff", fontSize: 13, letterSpacing: 2, fontWeight: "500" },

  logoRing:     { width: 44, height: 44, borderRadius: 22, borderWidth: 1, borderColor: "rgba(201,168,76,0.35)", alignItems: "center", justifyContent: "center", overflow: "hidden" },

  stepsWrap:    { gap: 16 },
  stepRow:      { flexDirection: "row", alignItems: "flex-start", gap: 16, paddingBottom: 16, borderBottomColor: "rgba(255,255,255,0.05)", borderBottomWidth: 1 },
  stepNum:      { color: GOLD, fontSize: 24, fontWeight: "300", lineHeight: 28, minWidth: 36 },
  stepText:     { flex: 1 },
  stepTitle:    { color: "#fff", fontSize: 14, fontWeight: "500", marginBottom: 4 },
  stepDesc:     { color: "rgba(255,255,255,0.4)", fontSize: 12 },
});
