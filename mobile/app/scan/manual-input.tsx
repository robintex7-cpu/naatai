import { useState } from "react";
import { View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity, ActivityIndicator } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useScanStore } from "../../store/scan";
import { scanAPI } from "../../services/api";
import Toast from "react-native-toast-message";

const GOLD = "#C9A84C";

const FIELDS = [
  { key: "height",        label: "Height",         unit: "cm", required: true  },
  { key: "weight",        label: "Weight",          unit: "kg", required: false },
  { key: "chest",         label: "Chest / Bust",    unit: "cm", required: false },
  { key: "waist",         label: "Waist",           unit: "cm", required: false },
  { key: "hips",          label: "Hips",            unit: "cm", required: false },
  { key: "shoulder_width",label: "Shoulder Width",  unit: "cm", required: false },
  { key: "inseam",        label: "Inseam",          unit: "cm", required: false },
  { key: "sleeve_length", label: "Sleeve Length",   unit: "cm", required: false },
  { key: "neck",          label: "Neck",            unit: "cm", required: false },
  { key: "thigh",         label: "Thigh",           unit: "cm", required: false },
] as const;

export default function ManualInputScreen() {
  const [values,   setValues]   = useState<Record<string, string>>({});
  const [loading,  setLoading]  = useState(false);
  const { scanId } = useScanStore();
  const router     = useRouter();

  const set = (key: string, val: string) =>
    setValues((v) => ({ ...v, [key]: val }));

  const submit = async () => {
    if (!values.height || isNaN(Number(values.height))) {
      Toast.show({ type: "error", text1: "Height is required" });
      return;
    }
    const measurements: Record<string, number> = {};
    for (const f of FIELDS) {
      if (values[f.key]) measurements[f.key] = parseFloat(values[f.key]);
    }
    setLoading(true);
    try {
      await scanAPI.submitManual(scanId!, measurements);
      router.replace(`/scan/results?scanId=${scanId}`);
    } catch {
      Toast.show({ type: "error", text1: "Submission failed" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}><Ionicons name="arrow-back" size={22} color="rgba(255,255,255,0.6)" /></TouchableOpacity>
        <Text style={styles.step}>MANUAL MEASUREMENTS</Text>
      </View>

      <Text style={styles.title}>Enter Your{"\n"}Measurements</Text>
      <Text style={styles.sub}>Use a flexible tape measure. All values in cm.</Text>

      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        <View style={styles.fields}>
          {FIELDS.map((f) => (
            <View key={f.key} style={styles.field}>
              <Text style={styles.fieldLabel}>{f.label}{f.required ? " *" : ""}</Text>
              <View style={styles.inputWrap}>
                <TextInput
                  style={styles.input}
                  value={values[f.key] || ""}
                  onChangeText={(v) => set(f.key, v)}
                  keyboardType="decimal-pad"
                  placeholder="0"
                  placeholderTextColor="rgba(255,255,255,0.15)"
                  selectionColor={GOLD}
                />
                <Text style={styles.unit}>{f.unit}</Text>
              </View>
            </View>
          ))}
        </View>
        <View style={{ height: 100 }} />
      </ScrollView>

      <TouchableOpacity style={[styles.btn, loading && { opacity: 0.5 }]} onPress={submit} disabled={loading}>
        {loading
          ? <ActivityIndicator color="#000" />
          : <><Text style={styles.btnText}>GET MY SIZE</Text><Ionicons name="arrow-forward" size={18} color="#000" /></>
        }
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container:  { flex: 1, backgroundColor: "#0A0A0A", padding: 24 },
  header:     { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 24 },
  step:       { color: "rgba(255,255,255,0.3)", fontSize: 10, letterSpacing: 3 },
  title:      { fontSize: 30, fontWeight: "300", color: "#fff", lineHeight: 38, marginBottom: 8 },
  sub:        { color: "rgba(255,255,255,0.4)", fontSize: 13, marginBottom: 28 },

  fields:     { gap: 12 },
  field:      { flexDirection: "row", alignItems: "center", justifyContent: "space-between", backgroundColor: "#111", borderColor: "rgba(255,255,255,0.05)", borderWidth: 1, paddingHorizontal: 16, paddingVertical: 14 },
  fieldLabel: { color: "rgba(255,255,255,0.6)", fontSize: 13, flex: 1 },
  inputWrap:  { flexDirection: "row", alignItems: "center", gap: 6 },
  input:      { color: "#fff", fontSize: 18, fontWeight: "300", textAlign: "right", minWidth: 60 },
  unit:       { color: GOLD, fontSize: 12, letterSpacing: 1 },

  btn:        { backgroundColor: GOLD, flexDirection: "row", justifyContent: "center", alignItems: "center", gap: 10, padding: 16 },
  btnText:    { color: "#000", fontSize: 13, letterSpacing: 3, fontWeight: "600" },
});
