import { useEffect, useRef } from "react";
import { View, Text, StyleSheet, Animated } from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";
import { scanAPI } from "../../services/api";

const GOLD = "#C9A84C";

const STEPS = [
  "Extracting video frames…",
  "Running body pose estimation…",
  "Building 3D mesh…",
  "Calculating measurements…",
  "Generating size recommendations…",
  "Finalising results…",
];

export default function ProcessingScreen() {
  const { scanId }  = useLocalSearchParams<{ scanId: string }>();
  const router      = useRouter();
  const stepIndex   = useRef(0);
  const stepAnim    = useRef(new Animated.Value(0)).current;
  const spinAnim    = useRef(new Animated.Value(0)).current;
  const stepText    = useRef(STEPS[0]);

  useEffect(() => {
    Animated.loop(
      Animated.timing(spinAnim, { toValue: 1, duration: 1800, useNativeDriver: true })
    ).start();

    const stepTimer = setInterval(() => {
      stepIndex.current = (stepIndex.current + 1) % STEPS.length;
      stepText.current  = STEPS[stepIndex.current];
      Animated.sequence([
        Animated.timing(stepAnim, { toValue: 0, duration: 200, useNativeDriver: true }),
        Animated.timing(stepAnim, { toValue: 1, duration: 300, useNativeDriver: true }),
      ]).start();
    }, 3000);

    const pollTimer = setInterval(async () => {
      try {
        const { data } = await scanAPI.getScan(Number(scanId));
        if (data.status === "completed") {
          clearInterval(pollTimer);
          clearInterval(stepTimer);
          router.replace(`/scan/results?scanId=${scanId}`);
        } else if (data.status === "failed") {
          clearInterval(pollTimer);
          clearInterval(stepTimer);
          router.replace(`/scan/results?scanId=${scanId}&error=1`);
        }
      } catch { /* continue polling */ }
    }, 3000);

    return () => {
      clearInterval(stepTimer);
      clearInterval(pollTimer);
    };
  }, [scanId]);

  const spin = spinAnim.interpolate({ inputRange: [0, 1], outputRange: ["0deg", "360deg"] });

  return (
    <View style={styles.container}>

      <View style={styles.spinnerWrap}>
        <View style={styles.outerRing}>
          <Animated.View style={[styles.innerRing, { transform: [{ rotate: spin }] }]} />
        </View>
        <Text style={styles.logo}>N</Text>
      </View>

      <Text style={styles.title}>Processing Your Scan</Text>
      <Text style={styles.sub}>Our ML model is building your 3D body mesh</Text>

      <Animated.Text style={[styles.stepText, { opacity: stepAnim }]}>
        {stepText.current}
      </Animated.Text>

      <View style={styles.dots}>
        {STEPS.map((_, i) => (
          <View key={i} style={[styles.dot, i === stepIndex.current % STEPS.length && styles.dotActive]} />
        ))}
      </View>

      <Text style={styles.eta}>This usually takes 30–60 seconds</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:  { flex: 1, backgroundColor: "#0A0A0A", alignItems: "center", justifyContent: "center", padding: 40 },

  spinnerWrap:{ width: 120, height: 120, alignItems: "center", justifyContent: "center", marginBottom: 40 },
  outerRing:  { position: "absolute", width: 120, height: 120, borderRadius: 60, borderWidth: 1, borderColor: "rgba(201,168,76,0.2)" },
  innerRing:  { width: 120, height: 120, borderRadius: 60, borderWidth: 2, borderColor: "transparent", borderTopColor: GOLD },
  logo:       { color: GOLD, fontSize: 36, fontWeight: "300" },

  title:      { color: "#fff", fontSize: 22, fontWeight: "300", letterSpacing: 1, textAlign: "center", marginBottom: 8 },
  sub:        { color: "rgba(255,255,255,0.4)", fontSize: 13, textAlign: "center", marginBottom: 32 },

  stepText:   { color: GOLD, fontSize: 13, letterSpacing: 1, textAlign: "center", height: 20, marginBottom: 24 },

  dots:       { flexDirection: "row", gap: 6, marginBottom: 32 },
  dot:        { width: 5, height: 5, borderRadius: 2.5, backgroundColor: "rgba(255,255,255,0.15)" },
  dotActive:  { backgroundColor: GOLD, width: 16 },

  eta:        { color: "rgba(255,255,255,0.25)", fontSize: 11, letterSpacing: 2 },
});
