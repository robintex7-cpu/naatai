import { useState } from "react";
import {
  View, Text, TextInput, TouchableOpacity,
  StyleSheet, ScrollView, Platform,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useScanStore } from "../../store/scan";

const GOLD = "#C9A84C";

export default function HeightInputScreen() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [unit,   setUnit]   = useState<"cm" | "ft">("cm");
  const router = useRouter();
  const { setReferenceHeight } = useScanStore();

  const parsedHeight = (): number | null => {
    if (unit === "cm") {
      const v = parseFloat(height);
      return v > 100 && v < 250 ? v : null;
    }
    const match = height.match(/^(\d+)[''´`]?\s*(\d*)[""„]?$/);
    if (match) {
      const ft = parseInt(match[1]);
      const inches = parseInt(match[2] || "0");
      const cm = ft * 30.48 + inches * 2.54;
      return cm > 100 && cm < 250 ? Math.round(cm) : null;
    }
    return null;
  };

  const isValid = parsedHeight() !== null;

  const proceed = () => {
    const h = parsedHeight();
    if (h) setReferenceHeight(h);
    router.push("/scan/video-scan");
  };

  const skip = () => {
    router.push("/scan/video-scan");
  };

  return (
    <LinearGradient colors={["#0A0A0A", "#111", "#0A0A0A"]} style={styles.container}>
      <ScrollView contentContainerStyle={styles.inner} keyboardShouldPersistTaps="handled">

        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()} hitSlop={12}>
            <Ionicons name="arrow-back" size={22} color="rgba(255,255,255,0.5)" />
          </TouchableOpacity>
          <Text style={styles.step}>BEFORE YOUR SCAN</Text>
          <View style={{ width: 22 }} />
        </View>

        <View style={styles.card}>
          <View style={styles.cardIconRow}>
            <Ionicons name="analytics-outline" size={28} color={GOLD} />
            <View>
              <Text style={styles.cardTitle}>Improve accuracy to ±1.5 cm</Text>
              <Text style={styles.cardSub}>Your height calibrates the 3D scale exactly</Text>
            </View>
          </View>

          <View style={styles.compareTable}>
            {[
              { method: "Without height", accuracy: "±4–7 cm",  bar: 0.30, color: "#ef5350" },
              { method: "With height",    accuracy: "±1.5–2 cm", bar: 0.92, color: "#4caf50" },
            ].map((row) => (
              <View key={row.method} style={styles.compareRow}>
                <Text style={styles.compareLabel}>{row.method}</Text>
                <View style={styles.compareBarWrap}>
                  <View style={[styles.compareBar, { width: `${row.bar * 100}%` as any, backgroundColor: row.color }]} />
                </View>
                <Text style={[styles.compareAccuracy, { color: row.color }]}>{row.accuracy}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.unitRow}>
          {(["cm", "ft"] as const).map((u) => (
            <TouchableOpacity
              key={u}
              style={[styles.unitBtn, unit === u && styles.unitBtnActive]}
              onPress={() => { setUnit(u); setHeight(""); }}
            >
              <Text style={[styles.unitBtnText, unit === u && { color: GOLD }]}>
                {u === "cm" ? "Centimetres" : "Feet & Inches"}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.inputWrap}>
          <Text style={styles.inputLabel}>YOUR HEIGHT</Text>
          <View style={styles.inputRow}>
            <TextInput
              style={styles.input}
              value={height}
              onChangeText={setHeight}
              placeholder={unit === "cm" ? "e.g. 182" : "e.g. 5'11"}
              placeholderTextColor="rgba(255,255,255,0.2)"
              keyboardType={unit === "cm" ? "numeric" : "default"}
              selectionColor={GOLD}
              maxLength={unit === "cm" ? 3 : 6}
            />
            <Text style={styles.inputUnit}>{unit === "cm" ? "cm" : "ft"}</Text>
          </View>
          {isValid && (
            <Text style={styles.inputValid}>
              ✓ {parsedHeight()} cm — ready for precise scanning
            </Text>
          )}
        </View>

        <View style={styles.inputWrap}>
          <Text style={styles.inputLabel}>WEIGHT <Text style={styles.optional}>(optional)</Text></Text>
          <View style={styles.inputRow}>
            <TextInput
              style={styles.input}
              value={weight}
              onChangeText={setWeight}
              placeholder="e.g. 88"
              placeholderTextColor="rgba(255,255,255,0.2)"
              keyboardType="numeric"
              selectionColor={GOLD}
              maxLength={3}
            />
            <Text style={styles.inputUnit}>kg</Text>
          </View>
        </View>

        <View style={styles.whyBox}>
          <Text style={styles.whyTitle}>WHY THIS MATTERS</Text>
          {[
            "The camera cannot measure real-world distance",
            "Your height sets the exact scale for every measurement",
            "A 1cm height error causes <0.5cm measurement error",
            "Without height, the model guesses from shoulder width (±15% error)",
          ].map((tip, i) => (
            <View key={i} style={styles.whyRow}>
              <Text style={styles.whyNum}>{i + 1}</Text>
              <Text style={styles.whyText}>{tip}</Text>
            </View>
          ))}
        </View>

        <TouchableOpacity
          style={[styles.proceedBtn, !isValid && styles.proceedBtnSoft]}
          onPress={proceed}
          activeOpacity={0.85}
        >
          <Ionicons name={isValid ? "checkmark-circle" : "scan-outline"} size={20} color={isValid ? "#000" : GOLD} />
          <Text style={[styles.proceedText, !isValid && { color: GOLD }]}>
            {isValid ? "START SCAN WITH MY HEIGHT" : "ENTER HEIGHT TO CONTINUE"}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.skipBtn} onPress={skip}>
          <Text style={styles.skipText}>Skip — scan without height (less accurate)</Text>
        </TouchableOpacity>

      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container:  { flex: 1 },
  inner:      { padding: 24, paddingTop: 56, paddingBottom: 40, gap: 20 },

  header:     { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 4 },
  step:       { color: "rgba(255,255,255,0.3)", fontSize: 10, letterSpacing: 3 },

  card:       { backgroundColor: "#111", borderColor: "rgba(201,168,76,0.2)", borderWidth: 1, borderRadius: 6, padding: 20, gap: 16 },
  cardIconRow:{ flexDirection: "row", alignItems: "center", gap: 14 },
  cardTitle:  { color: "#fff", fontSize: 16, fontWeight: "400" },
  cardSub:    { color: "rgba(255,255,255,0.4)", fontSize: 12, marginTop: 2 },

  compareTable:{ gap: 10 },
  compareRow: { flexDirection: "row", alignItems: "center", gap: 10 },
  compareLabel:{ color: "rgba(255,255,255,0.5)", fontSize: 11, width: 110 },
  compareBarWrap:{ flex: 1, height: 4, backgroundColor: "rgba(255,255,255,0.06)", borderRadius: 2, overflow: "hidden" },
  compareBar: { height: "100%", borderRadius: 2 },
  compareAccuracy:{ fontSize: 11, fontWeight: "600", width: 72, textAlign: "right" },

  unitRow:    { flexDirection: "row", gap: 10 },
  unitBtn:    { flex: 1, paddingVertical: 10, borderRadius: 4, borderWidth: 1, borderColor: "rgba(255,255,255,0.1)", alignItems: "center", backgroundColor: "#111" },
  unitBtnActive:{ borderColor: GOLD, backgroundColor: "rgba(201,168,76,0.08)" },
  unitBtnText:{ color: "rgba(255,255,255,0.5)", fontSize: 13 },

  inputWrap:  { gap: 8 },
  inputLabel: { color: "rgba(255,255,255,0.3)", fontSize: 9, letterSpacing: 3 },
  optional:   { color: "rgba(255,255,255,0.2)", fontSize: 9 },
  inputRow:   { flexDirection: "row", alignItems: "center", backgroundColor: "#111", borderColor: "rgba(255,255,255,0.08)", borderWidth: 1, borderRadius: 4, paddingHorizontal: 16 },
  input:      { flex: 1, color: "#fff", fontSize: 28, fontWeight: "200", paddingVertical: 14, letterSpacing: 2 },
  inputUnit:  { color: GOLD, fontSize: 16, fontWeight: "300", marginLeft: 8 },
  inputValid: { color: "#4caf50", fontSize: 12, letterSpacing: 0.5 },

  whyBox:     { backgroundColor: "#0d0d0d", borderRadius: 4, padding: 16, gap: 10, borderColor: "rgba(255,255,255,0.04)", borderWidth: 1 },
  whyTitle:   { color: "rgba(255,255,255,0.2)", fontSize: 9, letterSpacing: 3, marginBottom: 4 },
  whyRow:     { flexDirection: "row", gap: 10, alignItems: "flex-start" },
  whyNum:     { color: GOLD, fontSize: 11, fontWeight: "600", width: 16 },
  whyText:    { color: "rgba(255,255,255,0.45)", fontSize: 12, lineHeight: 18, flex: 1 },

  proceedBtn: { backgroundColor: GOLD, flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 10, padding: 16, borderRadius: 2 },
  proceedBtnSoft:{ backgroundColor: "transparent", borderWidth: 1, borderColor: GOLD },
  proceedText:{ color: "#000", fontSize: 13, letterSpacing: 3, fontWeight: "600" },

  skipBtn:    { alignItems: "center", paddingVertical: 12 },
  skipText:   { color: "rgba(255,255,255,0.2)", fontSize: 12 },
});
