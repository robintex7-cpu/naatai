import { useState, useRef } from "react";
import {
  View, Text, TextInput, TouchableOpacity, StyleSheet,
  KeyboardAvoidingView, Platform, ActivityIndicator, ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useAuthStore } from "../store/auth";
import { useLanguageStore } from "../store/language";
import { t, LANGUAGES } from "../services/i18n";
import NaataiMark from "../components/NaataiMark";
import Toast from "react-native-toast-message";

const GOLD = "#C9A84C";

export default function LoginScreen() {
  const [tokenParts, setTokenParts] = useState<string[]>(Array(8).fill(""));
  const [loading,    setLoading]    = useState(false);
  const refs = useRef<TextInput[]>([]);
  const { login }      = useAuthStore();
  const { lang, setLang } = useLanguageStore();
  const router         = useRouter();

  const handleChange = (val: string, idx: number) => {
    const char = val.slice(-1).toUpperCase();
    const next = [...tokenParts];
    next[idx]  = char;
    setTokenParts(next);
    if (char && idx < 7) refs.current[idx + 1]?.focus();
  };

  const handleBackspace = (key: string, idx: number) => {
    if (key === "Backspace" && !tokenParts[idx] && idx > 0) {
      refs.current[idx - 1]?.focus();
    }
  };

  const handleLogin = async () => {
    const token = "NAT-" + tokenParts.join("");
    if (tokenParts.some((p) => !p)) {
      Toast.show({ type: "error", text1: t(lang, "invalidToken") });
      return;
    }
    setLoading(true);
    try {
      await login(token);
      router.replace("/(tabs)/home");
    } catch {
      Toast.show({ type: "error", text1: t(lang, "invalidToken") });
    } finally {
      setLoading(false);
    }
  };

  const currentLang = LANGUAGES.find((l) => l.code === lang)!;

  return (
    <LinearGradient colors={["#0A0A0A", "#111111", "#0A0A0A"]} style={styles.container}>
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : undefined} style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={styles.inner} keyboardShouldPersistTaps="handled">

          {/* Language Picker (top right) */}
          <View style={styles.langRow}>
            {LANGUAGES.map((l) => (
              <TouchableOpacity
                key={l.code}
                style={[styles.langBtn, l.code === lang && styles.langBtnActive]}
                onPress={() => setLang(l.code)}
                activeOpacity={0.7}
              >
                <Text style={styles.langFlag}>{l.flag}</Text>
                <Text style={[styles.langCode, l.code === lang && { color: GOLD }]}>{l.code.toUpperCase()}</Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Logo */}
          <View style={styles.logoWrap}>
            <NaataiMark size={130} />
            <View style={styles.wordmark}>
              <Text style={styles.logo}>NAATAI</Text>
              <Text style={styles.logoSub}>FIT</Text>
            </View>
            <View style={styles.goldLine} />
            <Text style={styles.tagline}>{t(lang, "tagline")}</Text>
          </View>

          {/* Token Input */}
          <View style={styles.card}>
            <Text style={styles.cardTitle}>{t(lang, "enterToken")}</Text>
            <Text style={styles.cardSub}>{t(lang, "tokenHint")}</Text>

            <Text style={styles.prefix}>{t(lang, "tokenPrefix")} –</Text>

            <View style={styles.otpRow}>
              {tokenParts.map((val, i) => (
                <TextInput
                  key={i}
                  ref={(r) => { if (r) refs.current[i] = r; }}
                  style={[styles.otpBox, val && styles.otpBoxFilled]}
                  value={val}
                  maxLength={1}
                  autoCapitalize="characters"
                  keyboardType="default"
                  onChangeText={(v) => handleChange(v, i)}
                  onKeyPress={({ nativeEvent }) => handleBackspace(nativeEvent.key, i)}
                  selectionColor={GOLD}
                  caretHidden
                />
              ))}
            </View>

            <Text style={styles.example}>{t(lang, "tokenExample")}</Text>

            <TouchableOpacity
              style={[styles.btn, loading && styles.btnDisabled]}
              onPress={handleLogin}
              disabled={loading}
              activeOpacity={0.85}
            >
              {loading
                ? <ActivityIndicator color="#000" />
                : <Text style={styles.btnText}>{t(lang, "login")}</Text>
              }
            </TouchableOpacity>
          </View>

          <Text style={styles.footer}>Naatai UG · naatai.de</Text>
        </ScrollView>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container:    { flex: 1 },
  inner:        { flexGrow: 1, justifyContent: "center", padding: 24, paddingTop: 60 },

  langRow:      { flexDirection: "row", justifyContent: "center", gap: 6, marginBottom: 32, flexWrap: "wrap" },
  langBtn:      { alignItems: "center", paddingVertical: 6, paddingHorizontal: 10, borderRadius: 6, borderWidth: 1, borderColor: "rgba(255,255,255,0.08)", backgroundColor: "rgba(255,255,255,0.03)" },
  langBtnActive:{ borderColor: "rgba(201,168,76,0.5)", backgroundColor: "rgba(201,168,76,0.08)" },
  langFlag:     { fontSize: 18, marginBottom: 2 },
  langCode:     { color: "rgba(255,255,255,0.4)", fontSize: 9, letterSpacing: 1 },

  logoWrap:     { alignItems: "center", marginBottom: 40 },
  wordmark:     { alignItems: "center", marginTop: 14 },
  logo:         { fontSize: 36, letterSpacing: 12, color: GOLD, fontWeight: "300" },
  logoSub:      { fontSize: 13, letterSpacing: 8,  color: "#fff", marginTop: -2 },
  goldLine:     { width: 40, height: 1, backgroundColor: GOLD, marginVertical: 16 },
  tagline:      { color: "rgba(255,255,255,0.4)", fontSize: 13, letterSpacing: 2, textAlign: "center" },

  card:         { backgroundColor: "#111", borderColor: "rgba(255,255,255,0.05)", borderWidth: 1, borderRadius: 2, padding: 28, marginBottom: 24 },
  cardTitle:    { color: "#fff", fontSize: 18, fontWeight: "300", letterSpacing: 1, marginBottom: 8 },
  cardSub:      { color: "rgba(255,255,255,0.4)", fontSize: 12, lineHeight: 18, marginBottom: 24 },

  prefix:       { color: GOLD, fontSize: 20, letterSpacing: 4, fontWeight: "300", marginBottom: 12, textAlign: "center" },

  otpRow:       { flexDirection: "row", justifyContent: "center", gap: 8, marginBottom: 10 },
  otpBox:       {
    width: 36, height: 48,
    borderWidth: 1, borderColor: "rgba(255,255,255,0.1)",
    borderRadius: 2,
    color: "#fff", fontSize: 20, textAlign: "center", fontWeight: "500",
    backgroundColor: "#1a1a1a",
  },
  otpBoxFilled: { borderColor: GOLD },

  example:      { color: "rgba(255,255,255,0.2)", fontSize: 11, textAlign: "center", marginBottom: 28, letterSpacing: 2 },

  btn:          { backgroundColor: GOLD, paddingVertical: 15, alignItems: "center", borderRadius: 1 },
  btnDisabled:  { opacity: 0.5 },
  btnText:      { color: "#000", fontSize: 14, letterSpacing: 4, fontWeight: "600" },

  footer:       { color: "rgba(255,255,255,0.2)", textAlign: "center", fontSize: 11, letterSpacing: 2 },
});
