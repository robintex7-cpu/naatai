import { useState } from "react";
import {
  View, Text, StyleSheet, TouchableOpacity,
  Image, ScrollView, ActivityIndicator, Platform, Dimensions,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useScanStore } from "../../store/scan";
import { scanAPI } from "../../services/api";
import Toast from "react-native-toast-message";

let ImagePicker: any = null;
if (Platform.OS !== "web") {
  ImagePicker = require("expo-image-picker");
}

const GOLD = "#C9A84C";
const { width } = Dimensions.get("window");
const SLOT_W = (width - 24 * 2 - 16) / 2;

// ── Web file picker ────────────────────────────────────────────────────────

function pickFileWeb(): Promise<string | null> {
  return new Promise((resolve) => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.onchange = () => {
      const file = input.files?.[0];
      resolve(file ? URL.createObjectURL(file) : null);
    };
    input.oncancel = () => resolve(null);
    input.click();
  });
}

// ── Main screen ─────────────────────────────────────────────────────────────

export default function PhotoScanScreen() {
  const [frontUri,  setFrontUri]  = useState<string | null>(null);
  const [backUri,   setBackUri]   = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const { scanId } = useScanStore();
  const router = useRouter();

  const pickPhoto = async (side: "front" | "back") => {
    let uri: string | null = null;

    if (Platform.OS === "web") {
      uri = await pickFileWeb();
    } else {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        Toast.show({ type: "error", text1: "Photo library access required" });
        return;
      }
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: false,
        quality: 0.95,
      });
      if (!result.canceled && result.assets[0]) uri = result.assets[0].uri;
    }

    if (uri) side === "front" ? setFrontUri(uri) : setBackUri(uri);
  };

  const takePhoto = async (side: "front" | "back") => {
    if (Platform.OS === "web") {
      const uri = await pickFileWeb();
      if (uri) side === "front" ? setFrontUri(uri) : setBackUri(uri);
      return;
    }
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== "granted") return;
    const result = await ImagePicker.launchCameraAsync({ allowsEditing: false, quality: 0.95 });
    if (!result.canceled && result.assets[0]) {
      side === "front" ? setFrontUri(result.assets[0].uri) : setBackUri(result.assets[0].uri);
    }
  };

  const submit = async () => {
    if (!frontUri) {
      Toast.show({ type: "error", text1: "Please add the front photo of the garment" });
      return;
    }
    setUploading(true);
    try {
      await scanAPI.uploadPhotos(scanId!, frontUri, backUri ?? undefined);
      router.replace(`/scan/processing?scanId=${scanId}`);
    } catch {
      Toast.show({ type: "error", text1: "Upload failed. Check connection." });
    } finally {
      setUploading(false);
    }
  };

  const bothDone = !!frontUri && !!backUri;

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} hitSlop={12}>
          <Ionicons name="arrow-back" size={22} color="rgba(255,255,255,0.6)" />
        </TouchableOpacity>
        <Text style={styles.step}>GARMENT PHOTO SCAN</Text>
        <View style={{ width: 22 }} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 120 }}>

        {/* Instruction banner */}
        <LinearGradient colors={["#1a1400", "#111"]} style={styles.banner}>
          <View style={styles.bannerIcon}>
            <Ionicons name="shirt-outline" size={28} color={GOLD} />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.bannerTitle}>Lay the garment flat</Text>
            <Text style={styles.bannerSub}>Place the item on a bed or table. Smooth out all wrinkles. Shoot straight from above.</Text>
          </View>
        </LinearGradient>

        {/* How-to guide */}
        <View style={styles.howTo}>
          <Text style={styles.howToTitle}>HOW TO PHOTOGRAPH</Text>
          <View style={styles.steps}>
            {[
              { icon: "bed-outline",        text: "Lay garment flat on a bed or table" },
              { icon: "crop-outline",        text: "Fill the frame — entire garment visible" },
              { icon: "sunny-outline",       text: "Use good lighting, avoid shadows" },
              { icon: "contract-outline",    text: "Remove all folds and straighten seams" },
              { icon: "camera-outline",      text: "Shoot straight down from above" },
            ].map((s, i) => (
              <View key={i} style={styles.stepRow}>
                <View style={styles.stepNum}><Text style={styles.stepNumText}>{i + 1}</Text></View>
                <Ionicons name={s.icon as any} size={18} color={GOLD} />
                <Text style={styles.stepText}>{s.text}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Photo slots */}
        <View style={styles.slotsRow}>
          <GarmentSlot
            side="front"
            uri={frontUri}
            onCamera={() => takePhoto("front")}
            onGallery={() => pickPhoto("front")}
          />
          <GarmentSlot
            side="back"
            uri={backUri}
            onCamera={() => takePhoto("back")}
            onGallery={() => pickPhoto("back")}
          />
        </View>

        {/* Progress indicator */}
        <View style={styles.progress}>
          <View style={[styles.progressDot, frontUri && styles.progressDotDone]} />
          <View style={[styles.progressLine, frontUri && backUri && styles.progressLineDone]} />
          <View style={[styles.progressDot, backUri && styles.progressDotDone]} />
        </View>
        <Text style={styles.progressLabel}>
          {!frontUri ? "Add front photo to continue" : !backUri ? "Front done — add back for better accuracy" : "Both photos ready — tap Analyse"}
        </Text>

      </ScrollView>

      {/* Submit */}
      <View style={styles.submitWrap}>
        <TouchableOpacity
          style={[styles.submitBtn, !frontUri && styles.submitDisabled]}
          onPress={submit}
          disabled={!frontUri || uploading}
          activeOpacity={0.85}
        >
          {uploading ? (
            <ActivityIndicator color="#000" />
          ) : (
            <>
              <Ionicons name="analytics-outline" size={20} color="#000" />
              <Text style={styles.submitText}>ANALYSE GARMENT</Text>
              <Ionicons name="arrow-forward" size={18} color="#000" />
            </>
          )}
        </TouchableOpacity>
        {!backUri && frontUri && (
          <Text style={styles.skipNote}>Back photo is optional but improves accuracy</Text>
        )}
      </View>
    </View>
  );
}

// ── Garment photo slot ────────────────────────────────────────────────────────

function GarmentSlot({ side, uri, onCamera, onGallery }: {
  side: "front" | "back";
  uri: string | null;
  onCamera: () => void;
  onGallery: () => void;
}) {
  const label = side === "front" ? "FRONT" : "BACK";
  const required = side === "front";

  return (
    <View style={slot.wrap}>
      {/* Label */}
      <View style={slot.labelRow}>
        <Text style={slot.label}>{label} {required && <Text style={slot.req}>*</Text>}</Text>
        {uri && <Ionicons name="checkmark-circle" size={16} color="#4caf50" />}
      </View>

      {/* Photo box — portrait ratio simulating garment */}
      <TouchableOpacity
        style={[slot.box, uri && slot.boxFilled]}
        onPress={Platform.OS === "web" ? onGallery : onCamera}
        activeOpacity={0.8}
      >
        {uri ? (
          <Image source={{ uri }} style={slot.image} resizeMode="contain" />
        ) : (
          <View style={slot.empty}>
            {/* Garment outline SVG-like illustration */}
            <View style={slot.garmentOutline}>
              <View style={slot.garmentBody} />
              <View style={slot.garmentSleeve} />
              <View style={slot.garmentSleeveR} />
            </View>
            <Text style={slot.emptyTitle}>TAP TO ADD</Text>
            <Text style={slot.emptyHint}>Garment laid flat,{"\n"}shoot from above</Text>
          </View>
        )}
        {/* Corner guide marks */}
        {!uri && <>
          <View style={[slot.corner, slot.cornerTL]} />
          <View style={[slot.corner, slot.cornerTR]} />
          <View style={[slot.corner, slot.cornerBL]} />
          <View style={[slot.corner, slot.cornerBR]} />
        </>}
      </TouchableOpacity>

      {/* Action buttons */}
      <View style={slot.actions}>
        {Platform.OS !== "web" && (
          <TouchableOpacity style={slot.btn} onPress={onCamera}>
            <Ionicons name="camera-outline" size={16} color={GOLD} />
            <Text style={slot.btnText}>Camera</Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity style={[slot.btn, Platform.OS === "web" && { flex: 1 }]} onPress={onGallery}>
          <Ionicons name={Platform.OS === "web" ? "cloud-upload-outline" : "images-outline"} size={16} color={GOLD} />
          <Text style={slot.btnText}>{Platform.OS === "web" ? "Upload" : "Gallery"}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// ── Styles ────────────────────────────────────────────────────────────────────

const styles = StyleSheet.create({
  container:    { flex: 1, backgroundColor: "#0A0A0A" },
  header:       { flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 24, paddingTop: 56, paddingBottom: 16, borderBottomColor: "rgba(255,255,255,0.05)", borderBottomWidth: 1 },
  step:         { color: "rgba(255,255,255,0.5)", fontSize: 10, letterSpacing: 3 },

  banner:       { margin: 20, marginBottom: 0, borderRadius: 4, padding: 16, flexDirection: "row", alignItems: "flex-start", gap: 14, borderColor: "rgba(201,168,76,0.15)", borderWidth: 1 },
  bannerIcon:   { width: 44, height: 44, borderRadius: 22, backgroundColor: "rgba(201,168,76,0.1)", alignItems: "center", justifyContent: "center" },
  bannerTitle:  { color: "#fff", fontSize: 15, fontWeight: "500", marginBottom: 4 },
  bannerSub:    { color: "rgba(255,255,255,0.45)", fontSize: 12, lineHeight: 18 },

  howTo:        { margin: 20, marginBottom: 0 },
  howToTitle:   { color: "rgba(255,255,255,0.25)", fontSize: 9, letterSpacing: 4, marginBottom: 12 },
  steps:        { gap: 10 },
  stepRow:      { flexDirection: "row", alignItems: "center", gap: 12 },
  stepNum:      { width: 20, height: 20, borderRadius: 10, backgroundColor: "rgba(201,168,76,0.15)", alignItems: "center", justifyContent: "center" },
  stepNumText:  { color: GOLD, fontSize: 10, fontWeight: "600" },
  stepText:     { color: "rgba(255,255,255,0.55)", fontSize: 13, flex: 1 },

  slotsRow:     { flexDirection: "row", gap: 16, paddingHorizontal: 20, marginTop: 24 },

  progress:     { flexDirection: "row", alignItems: "center", justifyContent: "center", marginTop: 20, gap: 0 },
  progressDot:  { width: 10, height: 10, borderRadius: 5, backgroundColor: "rgba(255,255,255,0.15)" },
  progressDotDone: { backgroundColor: GOLD },
  progressLine: { width: 60, height: 1, backgroundColor: "rgba(255,255,255,0.1)" },
  progressLineDone: { backgroundColor: GOLD },
  progressLabel:{ color: "rgba(255,255,255,0.35)", fontSize: 11, textAlign: "center", marginTop: 10, paddingHorizontal: 24 },

  submitWrap:   { position: "absolute", bottom: 0, left: 0, right: 0, padding: 20, backgroundColor: "rgba(10,10,10,0.95)", borderTopColor: "rgba(255,255,255,0.05)", borderTopWidth: 1 },
  submitBtn:    { backgroundColor: GOLD, flexDirection: "row", justifyContent: "center", alignItems: "center", gap: 10, padding: 16, borderRadius: 2 },
  submitDisabled:{ opacity: 0.35 },
  submitText:   { color: "#000", fontSize: 13, letterSpacing: 3, fontWeight: "600" },
  skipNote:     { color: "rgba(255,255,255,0.25)", fontSize: 11, textAlign: "center", marginTop: 8 },
});

const slot = StyleSheet.create({
  wrap:         { flex: 1 },

  labelRow:     { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 8 },
  label:        { color: "rgba(255,255,255,0.5)", fontSize: 10, letterSpacing: 3, fontWeight: "600" },
  req:          { color: GOLD },

  box:          { aspectRatio: 0.75, backgroundColor: "#111", borderColor: "rgba(255,255,255,0.07)", borderWidth: 1, borderRadius: 4, overflow: "hidden", marginBottom: 10, position: "relative" },
  boxFilled:    { borderColor: "rgba(201,168,76,0.3)" },
  image:        { width: "100%", height: "100%" },

  empty:        { flex: 1, alignItems: "center", justifyContent: "center", gap: 12, padding: 10 },
  garmentOutline:{ alignItems: "center", opacity: 0.18 },
  garmentBody:  { width: 48, height: 56, borderWidth: 1.5, borderColor: "#fff", borderRadius: 4 },
  garmentSleeve:{ position: "absolute", left: -18, top: 6, width: 18, height: 22, borderWidth: 1.5, borderColor: "#fff", borderRadius: 2 },
  garmentSleeveR:{ position: "absolute", right: -18, top: 6, width: 18, height: 22, borderWidth: 1.5, borderColor: "#fff", borderRadius: 2 },
  emptyTitle:   { color: GOLD, fontSize: 10, letterSpacing: 3, fontWeight: "600" },
  emptyHint:    { color: "rgba(255,255,255,0.25)", fontSize: 10, textAlign: "center", lineHeight: 15 },

  // Corner guide marks
  corner:       { position: "absolute", width: 14, height: 14, borderColor: GOLD, opacity: 0.5 },
  cornerTL:     { top: 6, left: 6, borderTopWidth: 1.5, borderLeftWidth: 1.5 },
  cornerTR:     { top: 6, right: 6, borderTopWidth: 1.5, borderRightWidth: 1.5 },
  cornerBL:     { bottom: 6, left: 6, borderBottomWidth: 1.5, borderLeftWidth: 1.5 },
  cornerBR:     { bottom: 6, right: 6, borderBottomWidth: 1.5, borderRightWidth: 1.5 },

  actions:      { flexDirection: "row", gap: 8 },
  btn:          { flex: 1, flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 6, paddingVertical: 10, backgroundColor: "#161616", borderColor: "rgba(201,168,76,0.2)", borderWidth: 1, borderRadius: 2 },
  btnText:      { color: GOLD, fontSize: 11, letterSpacing: 1 },
});
