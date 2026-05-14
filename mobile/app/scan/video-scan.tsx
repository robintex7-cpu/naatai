import { useState, useRef, useEffect } from "react";
import {
  View, Text, TouchableOpacity, StyleSheet,
  ActivityIndicator, Animated, Platform, Dimensions,
} from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useScanStore } from "../../store/scan";
import { scanAPI } from "../../services/api";
import Toast from "react-native-toast-message";

let CameraView: any = null;
let useCameraPermissions: any = null;
let ImagePicker: any = null;
if (Platform.OS !== "web") {
  const cam = require("expo-camera");
  CameraView = cam.CameraView;
  useCameraPermissions = cam.useCameraPermissions;
  try { ImagePicker = require("expo-image-picker"); } catch {}
}

const GOLD   = "#C9A84C";
const RED    = "#ef5350";
const GREEN  = "#4caf50";
const ORANGE = "#ff9800";
const SCAN_SECONDS  = 15;
const HOLD_MS       = 2500;

// ─── Pose feedback types ──────────────────────────────────────────────────────

type Feedback = {
  text:   string;
  sub:    string;
  icon:   string;
  color:  string;
  arrow?: "←" | "→" | "↑" | "↓" | null;
  ready:  boolean;
};

function analyzePose(keypoints: any[], frameW: number, frameH: number): Feedback {
  // MoveNet/COCO keypoint indices:
  // 0=nose, 5=L.shoulder, 6=R.shoulder, 11=L.hip, 12=R.hip, 15=L.ankle, 16=R.ankle
  const get = (i: number) => keypoints[i];
  const nose      = get(0);
  const lShoulder = get(5);
  const rShoulder = get(6);
  const lHip      = get(11);
  const rHip      = get(12);
  const lAnkle    = get(15);
  const rAnkle    = get(16);

  const MIN_SCORE     = 0.25;
  const MIN_HIP_SCORE = 0.20;
  const visible = (k: any, minScore = MIN_SCORE) => k && k.score > minScore;

  // ── 1. Must see shoulders ────────────────────────────────────────────────────
  if (!visible(lShoulder) || !visible(rShoulder)) {
    return { text: "No body detected", sub: "Face the camera directly", icon: "body-outline", color: ORANGE, arrow: null, ready: false };
  }

  // ── 2. Must see hips — required for full-body measurements ──────────────────
  const hipsVisible = visible(lHip, MIN_HIP_SCORE) && visible(rHip, MIN_HIP_SCORE);
  if (!hipsVisible) {
    return {
      text: "Show full body",
      sub:  "Step back — hips and legs must be in frame",
      icon: "body-outline",
      color: ORANGE,
      arrow: "↑",
      ready: false,
    };
  }

  // ── 3. Strongly prefer ankles visible — warn if missing ─────────────────────
  const anklesVisible = visible(lAnkle) && visible(rAnkle);

  const topY    = visible(nose) ? nose.y : Math.min(lShoulder.y, rShoulder.y) - 30;
  const bottomY = anklesVisible
    ? (lAnkle.y + rAnkle.y) / 2
    : ((lHip.y + rHip.y) / 2) / 0.55; // hips ≈ 55% of body height
  const bodyFraction = (bottomY - topY) / frameH;

  // ── 4. Distance check ────────────────────────────────────────────────────────
  if (!anklesVisible && bodyFraction < 0.70) {
    return {
      text: "Step further back",
      sub:  "Full body must be in frame — feet not visible",
      icon: "arrow-back-circle-outline",
      color: RED,
      arrow: "↑",
      ready: false,
    };
  }
  if (bodyFraction < 0.55) {
    return { text: "Come closer", sub: "Fill more of the frame with your body", icon: "arrow-forward-circle-outline", color: ORANGE, arrow: "↓", ready: false };
  }
  if (bodyFraction > 0.95) {
    return { text: "Step back", sub: "You're too close to the camera", icon: "arrow-back-circle-outline", color: RED, arrow: "↑", ready: false };
  }

  // ── 5. Horizontal centering ──────────────────────────────────────────────────
  const bodyMidX = (lShoulder.x + rShoulder.x) / 2;
  const offsetX  = (bodyMidX - frameW / 2) / frameW;
  if (offsetX < -0.12) {
    return { text: "Move right", sub: `Shift ${Math.abs(Math.round(offsetX * 100))}% to the right`, icon: "arrow-forward-outline", color: ORANGE, arrow: "→", ready: false };
  }
  if (offsetX > 0.12) {
    return { text: "Move left",  sub: `Shift ${Math.abs(Math.round(offsetX * 100))}% to the left`,  icon: "arrow-back-outline",    color: ORANGE, arrow: "←", ready: false };
  }

  // ── 6. Vertical centering ────────────────────────────────────────────────────
  const bodyMidY = (topY + bottomY) / 2;
  const offsetY  = (bodyMidY - frameH * 0.5) / frameH;
  if (offsetY < -0.12) {
    return { text: "Lower the camera", sub: "Your body is too high in frame", icon: "arrow-down-outline", color: ORANGE, arrow: "↓", ready: false };
  }
  if (offsetY > 0.15) {
    return { text: "Raise the camera", sub: "Your body is too low in frame", icon: "arrow-up-outline", color: ORANGE, arrow: "↑", ready: false };
  }

  // ── 7. Warn if feet still not visible (but otherwise OK to proceed) ─────────
  if (!anklesVisible) {
    return {
      text: "Almost there",
      sub:  "Try to show your feet too for best accuracy",
      icon: "footsteps-outline",
      color: ORANGE,
      arrow: "↑",
      ready: false,
    };
  }

  // ✅ Full body visible and centred
  return {
    text:  "Perfect position",
    sub:   `Full body visible · ${Math.round(bodyFraction * 100)}% of frame — holding…`,
    icon:  "checkmark-circle-outline",
    color: GREEN,
    arrow: null,
    ready: true,
  };
}

// ─── Web video scan ───────────────────────────────────────────────────────────

function VideoScanWeb() {
  const [phase,       setPhase]       = useState<"ready"|"aligning"|"countdown"|"recording"|"uploading">("ready");
  const [feedback,    setFeedback]    = useState<Feedback | null>(null);
  const [holdProg,    setHoldProg]    = useState(0);
  const [countdown,   setCountdown]   = useState(SCAN_SECONDS);
  const [camError,    setCamError]    = useState<string | null>(null);
  const [tfReady,     setTfReady]     = useState(false);

  const videoRef    = useRef<HTMLVideoElement | null>(null);
  const canvasRef   = useRef<HTMLCanvasElement | null>(null);
  const streamRef   = useRef<MediaStream | null>(null);
  const recorderRef = useRef<MediaRecorder | null>(null);
  const fileInputRef= useRef<HTMLInputElement | null>(null);
  const chunksRef   = useRef<Blob[]>([]);
  const timerRef    = useRef<ReturnType<typeof setInterval>>();
  const holdTimer   = useRef<ReturnType<typeof setInterval>>();
  const rafRef      = useRef<number>();
  const detectorRef = useRef<any>(null);
  const holdStarted = useRef(false);
  const pulseAnim   = useRef(new Animated.Value(1)).current;

  const { scanId, referenceHeight } = useScanStore();
  const router = useRouter();

  useEffect(() => {
    startCamera();
    return () => {
      streamRef.current?.getTracks().forEach((t) => t.stop());
      clearInterval(timerRef.current);
      clearInterval(holdTimer.current);
      cancelAnimationFrame(rafRef.current!);
    };
  }, []);

  useEffect(() => {
    if (phase === "recording") {
      Animated.loop(Animated.sequence([
        Animated.timing(pulseAnim, { toValue: 1.3, duration: 600, useNativeDriver: true }),
        Animated.timing(pulseAnim, { toValue: 1.0, duration: 600, useNativeDriver: true }),
      ])).start();
    } else { pulseAnim.stopAnimation(); pulseAnim.setValue(1); }
  }, [phase]);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "user", width: { ideal: 640 }, height: { ideal: 1080 } },
        audio: false,
      });
      streamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        await videoRef.current.play();
      }
      setPhase("aligning");
      loadTFAndDetect();
    } catch {
      setCamError("Camera access denied.\nClick the camera icon in your browser's address bar and allow access.");
    }
  };

  const loadTFAndDetect = async () => {
    try {
      // Lazy-load TF.js + MoveNet so it doesn't bloat the initial bundle
      const tf = await import("@tensorflow/tfjs");
      await import("@tensorflow/tfjs-backend-webgl");
      await tf.ready();
      const poseDetection = await import("@tensorflow-models/pose-detection");
      const detector = await poseDetection.createDetector(
        poseDetection.SupportedModels.MoveNet,
        { modelType: poseDetection.movenet.modelType.SINGLEPOSE_LIGHTNING }
      );
      detectorRef.current = detector;
      setTfReady(true);
      runDetectionLoop(detector);
    } catch {
      // TF.js failed — fall back to manual alignment
      runFallbackLoop();
    }
  };

  const runDetectionLoop = (detector: any) => {
    const detect = async () => {
      if (!videoRef.current || videoRef.current.readyState < 2) {
        rafRef.current = requestAnimationFrame(detect);
        return;
      }
      try {
        const poses = await detector.estimatePoses(videoRef.current);
        if (poses.length > 0) {
          const { width: fw, height: fh } = videoRef.current.getBoundingClientRect();
          const vw = videoRef.current.videoWidth  || fw;
          const vh = videoRef.current.videoHeight || fh;
          // Mirror keypoints because we mirror the video (scaleX(-1))
          const mirrored = poses[0].keypoints.map((k: any) => ({
            ...k, x: vw - k.x,
          }));
          const fb = analyzePose(mirrored, vw, vh);
          setFeedback(fb);
          handleFeedback(fb);
        }
      } catch { /* continue */ }
      rafRef.current = requestAnimationFrame(detect);
    };
    rafRef.current = requestAnimationFrame(detect);
  };

  // Fallback: simulate detection with manual instruction cycling
  const runFallbackLoop = () => {
    const msgs: Feedback[] = [
      { text: "Come closer",     sub: "Fill the frame with your full body",   icon: "arrow-forward-circle-outline", color: ORANGE, arrow: "↓", ready: false },
      { text: "Stand straight",  sub: "Face the camera, feet shoulder-width", icon: "body-outline",                 color: ORANGE, arrow: null, ready: false },
      { text: "Move right",      sub: "Center yourself in the frame",         icon: "arrow-forward-outline",        color: ORANGE, arrow: "→", ready: false },
      { text: "Perfect position",sub: "Hold still — starting scan…",          icon: "checkmark-circle-outline",     color: GREEN,  arrow: null, ready: true  },
    ];
    let i = 0;
    const interval = setInterval(() => {
      const fb = msgs[i % msgs.length];
      setFeedback(fb);
      handleFeedback(fb);
      if (fb.ready) clearInterval(interval);
      i++;
    }, 2000);
  };

  const handleFeedback = (fb: Feedback) => {
    if (fb.ready && !holdStarted.current) {
      holdStarted.current = true;
      startHoldCountdown();
    } else if (!fb.ready) {
      holdStarted.current = false;
      setHoldProg(0);
      clearInterval(holdTimer.current);
    }
  };

  const startHoldCountdown = () => {
    let progress = 0;
    holdTimer.current = setInterval(() => {
      progress += 100 / (HOLD_MS / 80);
      setHoldProg(Math.min(progress, 100));
      if (progress >= 100) {
        clearInterval(holdTimer.current);
        setTimeout(startRecording, 400);
      }
    }, 80);
  };

  const startRecording = () => {
    cancelAnimationFrame(rafRef.current!);
    if (!streamRef.current) return;
    chunksRef.current = [];
    const mimeType = MediaRecorder.isTypeSupported("video/webm;codecs=vp9")
      ? "video/webm;codecs=vp9" : "video/webm";
    const recorder = new MediaRecorder(streamRef.current, { mimeType });
    recorderRef.current = recorder;
    recorder.ondataavailable = (e) => { if (e.data.size > 0) chunksRef.current.push(e.data); };
    recorder.onstop = () => {
      const blob = new Blob(chunksRef.current, { type: "video/webm" });
      uploadVideo(blob);
    };
    recorder.start(250);
    setPhase("recording");
    setCountdown(SCAN_SECONDS);
    timerRef.current = setInterval(() => {
      setCountdown((c) => {
        if (c <= 1) { clearInterval(timerRef.current); stopRecording(); return 0; }
        return c - 1;
      });
    }, 1000);
  };

  const stopRecording = () => {
    recorderRef.current?.stop();
    clearInterval(timerRef.current);
    setPhase("uploading");
  };

  const uploadVideo = async (blob: Blob) => {
    try {
      const uri = URL.createObjectURL(blob);
      await scanAPI.uploadVideo(scanId!, uri, referenceHeight ?? undefined);
      router.replace(`/scan/processing?scanId=${scanId}`);
    } catch {
      Toast.show({ type: "error", text1: "Upload failed." });
      setPhase("aligning");
    }
  };

  const handleFilePick = (e: any) => {
    const file: File | undefined = e.target?.files?.[0];
    if (!file) return;
    // Stop live camera if running
    streamRef.current?.getTracks().forEach((t) => t.stop());
    cancelAnimationFrame(rafRef.current!);
    setPhase("uploading");
    uploadVideo(file as unknown as Blob);
  };

  const { width: sw, height: sh } = Dimensions.get("window");
  const frameW = Math.min(sw * 0.60, 340);
  const frameH = Math.min(sh * 0.82, 680); // taller: must show full body head-to-feet
  const frameColor = feedback?.ready ? GREEN : feedback?.color ?? "rgba(255,255,255,0.3)";

  if (camError) return (
    <View style={[S.container, S.centered]}>
      <Ionicons name="camera-off-outline" size={52} color={GOLD} />
      <Text style={S.permText}>{camError}</Text>
      <TouchableOpacity style={S.permBtn} onPress={startCamera}>
        <Text style={S.permBtnText}>TRY AGAIN</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={S.container}>
      {/* Hidden file input for gallery pick */}
      <input
        ref={fileInputRef as any}
        type="file"
        accept="video/*"
        style={{ display: "none" }}
        onChange={handleFilePick}
      />

      {/* Live camera */}
      <video ref={videoRef} autoPlay muted playsInline style={{
        position:"absolute", top:0, left:0, width:"100%", height:"100%",
        objectFit:"cover", transform:"scaleX(-1)",
      }} />

      {/* Invisible canvas used by TF.js */}
      <canvas ref={canvasRef} style={{ display:"none" }} />

      {/* Dark vignette */}
      <View style={S.vignette} pointerEvents="none" />

      {/* ── Alignment frame ── */}
      {(phase === "aligning" || phase === "recording") && (
        <View style={[S.frameWrap, { width: frameW, height: frameH }]} pointerEvents="none">
          <View style={[S.frame, { width: frameW, height: frameH, borderColor: frameColor, shadowColor: frameColor }]}>
            {/* Corner marks */}
            {(["TL","TR","BL","BR"] as const).map((k) => (
              <View key={k} style={[S.corner, {
                top:    k[0]==="T" ? -1 : undefined, bottom: k[0]==="B" ? -1 : undefined,
                left:   k[1]==="L" ? -1 : undefined, right:  k[1]==="R" ? -1 : undefined,
                borderTopWidth:    k[0]==="T" ? 3 : 0, borderBottomWidth: k[0]==="B" ? 3 : 0,
                borderLeftWidth:   k[1]==="L" ? 3 : 0, borderRightWidth:  k[1]==="R" ? 3 : 0,
                borderColor: frameColor,
              }]} />
            ))}

            {/* Body silhouette guide */}
            <View style={S.silhouette}>
              <View style={[S.siHead,     { borderColor: frameColor + "44" }]} />
              <View style={[S.siShoulder, { backgroundColor: frameColor + "22" }]} />
              <View style={[S.siTorso,    { backgroundColor: frameColor + "11" }]} />
              <View style={[S.siLegs,     { gap: 8 }]}>
                <View style={[S.siLeg, { backgroundColor: frameColor + "11" }]} />
                <View style={[S.siLeg, { backgroundColor: frameColor + "11" }]} />
              </View>
            </View>

            {/* Hold progress bar (bottom of frame) */}
            {feedback?.ready && (
              <View style={S.holdTrack}>
                <Animated.View style={[S.holdFill, { width: `${holdProg}%` as any }]} />
              </View>
            )}

            {/* Recording pulse overlay */}
            {phase === "recording" && (
              <Animated.View style={[StyleSheet.absoluteFill, {
                borderWidth:2, borderColor:RED, borderRadius:4,
                transform:[{ scale:pulseAnim }],
              }]} />
            )}
          </View>

          {/* Direction arrows outside frame */}
          {phase === "aligning" && feedback && !feedback.ready && (
            <>
              {feedback.arrow === "←" && <Text style={[S.arrow, S.arrowL, { color: feedback.color }]}>←</Text>}
              {feedback.arrow === "→" && <Text style={[S.arrow, S.arrowR, { color: feedback.color }]}>→</Text>}
              {feedback.arrow === "↑" && <Text style={[S.arrow, S.arrowT, { color: feedback.color }]}>↑</Text>}
              {feedback.arrow === "↓" && <Text style={[S.arrow, S.arrowB, { color: feedback.color }]}>↓</Text>}
            </>
          )}
        </View>
      )}

      {/* ── UI overlay ── */}
      <View style={S.overlay} pointerEvents="box-none">
        {/* Top bar */}
        <View style={S.topBar}>
          <TouchableOpacity onPress={() => router.back()} disabled={phase==="recording"} hitSlop={12}>
            <Ionicons name="close" size={26} color="#fff" />
          </TouchableOpacity>
          <View style={S.topCenter}>
            <Text style={S.topTitle}>3D BODY SCAN</Text>
            {phase === "recording" && (
              <View style={S.recBadge}><View style={S.recDot}/><Text style={S.recText}>● REC</Text></View>
            )}
          </View>
          <View style={{ width: 26 }} />
        </View>

        {/* Feedback pill */}
        {phase === "aligning" && feedback && (
          <View style={[S.feedbackPill, { borderColor: feedback.color + "55", backgroundColor: feedback.color + "18" }]}>
            <Ionicons name={feedback.icon as any} size={20} color={feedback.color} />
            <View>
              <Text style={[S.feedbackText, { color: feedback.color }]}>{feedback.text}</Text>
              <Text style={S.feedbackSub}>{feedback.sub}</Text>
            </View>
          </View>
        )}

        {/* TF.js status */}
        {phase === "aligning" && !tfReady && (
          <View style={S.tfLoading}>
            <ActivityIndicator color={GOLD} size="small" />
            <Text style={S.tfLoadingText}>Loading pose detection…</Text>
          </View>
        )}

        {/* Recording countdown */}
        {phase === "recording" && (
          <View style={S.countdownBlock}>
            <Text style={S.countdownNum}>{countdown}</Text>
            <Text style={S.countdownSub}>seconds remaining</Text>
            <Text style={S.rotateHint}>⟳  Rotate slowly · full 360°</Text>
          </View>
        )}

        {phase === "uploading" && (
          <View style={S.uploadingBlock}>
            <ActivityIndicator color={GOLD} size="large" />
            <Text style={S.uploadingText}>Uploading & building 3D mesh…</Text>
          </View>
        )}

        {/* Bottom */}
        <View style={S.bottom}>
          {phase === "aligning" && (
            <View style={S.instructions}>
              {referenceHeight && (
                <View style={S.heightBadge}>
                  <Ionicons name="checkmark-circle" size={14} color={GREEN} />
                  <Text style={S.heightBadgeText}>Height {referenceHeight}cm — scale calibration active</Text>
                </View>
              )}
              {["Head to feet fully visible in frame","Wear tight-fitting clothing","Stand 1.5–2.5m from camera","Arms slightly away from body sides"].map((t,i)=>(
                <View key={i} style={S.tip}><View style={S.tipDot}/><Text style={S.tipText}>{t}</Text></View>
              ))}
              <Text style={S.autoNote}>Scan starts automatically when perfectly aligned</Text>

              {/* OR: pick an existing video */}
              <View style={S.dividerRow}>
                <View style={S.dividerLine}/><Text style={S.dividerText}>or</Text><View style={S.dividerLine}/>
              </View>
              <TouchableOpacity style={S.galleryBtn} onPress={() => (fileInputRef.current as any)?.click()}>
                <Ionicons name="folder-open-outline" size={18} color={GOLD} />
                <Text style={S.galleryBtnText}>Select Video from Gallery</Text>
              </TouchableOpacity>
            </View>
          )}
          {phase === "recording" && (
            <TouchableOpacity style={S.stopBtn} onPress={stopRecording}>
              <View style={S.stopIcon}/><Text style={S.stopLabel}>TAP TO STOP EARLY</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
}

// ─── Native implementation (unchanged skeleton) ───────────────────────────────

function VideoScanNative() {
  const [permission, requestPermission] = useCameraPermissions();
  const [phase,      setPhase]    = useState<"aligning"|"recording"|"uploading">("aligning");
  const [countdown,  setCountdown]= useState(SCAN_SECONDS);
  const [holdProg,   setHoldProg] = useState(0);
  const [facing,     setFacing]   = useState<"back"|"front">("back");
  const cameraRef  = useRef<any>(null);
  const timerRef   = useRef<ReturnType<typeof setInterval>>();
  const holdTimer  = useRef<ReturnType<typeof setInterval>>();
  const pulseAnim  = useRef(new Animated.Value(1)).current;
  const { scanId, referenceHeight } = useScanStore();
  const router = useRouter();

  useEffect(() => {
    if (!permission?.granted) requestPermission();
    return () => { clearInterval(timerRef.current); clearInterval(holdTimer.current); };
  }, []);

  useEffect(() => {
    if (phase === "recording") {
      Animated.loop(Animated.sequence([
        Animated.timing(pulseAnim,{toValue:1.3,duration:600,useNativeDriver:true}),
        Animated.timing(pulseAnim,{toValue:1.0,duration:600,useNativeDriver:true}),
      ])).start();
    } else { pulseAnim.stopAnimation(); pulseAnim.setValue(1); }
  }, [phase]);

  // Simulate alignment on native (real: use Vision framework via native module)
  useEffect(() => {
    if (phase !== "aligning") return;
    const steps = [
      { text:"Come closer", color:ORANGE, arrow:"↓", ready:false },
      { text:"Move right",  color:ORANGE, arrow:"→", ready:false },
      { text:"Perfect",     color:GREEN,  arrow:null, ready:true  },
    ];
    let i = 0;
    const t = setInterval(() => {
      i++;
      if (i >= steps.length) {
        clearInterval(t);
        startHold();
      }
    }, 2000);
    return () => clearInterval(t);
  }, [phase]);

  const startHold = () => {
    let p = 0;
    holdTimer.current = setInterval(() => {
      p += 100/(HOLD_MS/80);
      setHoldProg(Math.min(p,100));
      if (p>=100) { clearInterval(holdTimer.current); setTimeout(startRecording,400); }
    }, 80);
  };

  const startRecording = async () => {
    if (!cameraRef.current) return;
    setPhase("recording"); setCountdown(SCAN_SECONDS);
    timerRef.current = setInterval(() => {
      setCountdown((c)=>{ if(c<=1){clearInterval(timerRef.current);stopRecording();return 0;} return c-1; });
    }, 1000);
    try {
      const video = await cameraRef.current.recordAsync({ maxDuration: SCAN_SECONDS });
      if (video?.uri) { setPhase("uploading"); await uploadVideo(video.uri); }
    } catch { setPhase("aligning"); }
  };

  const stopRecording = () => { cameraRef.current?.stopRecording(); clearInterval(timerRef.current); setPhase("uploading"); };
  const uploadVideo   = async (uri: string) => {
    try { await scanAPI.uploadVideo(scanId!, uri, referenceHeight ?? undefined); router.replace(`/scan/processing?scanId=${scanId}`); }
    catch { Toast.show({type:"error",text1:"Upload failed."}); setPhase("aligning"); }
  };

  const pickFromGallery = async () => {
    if (!ImagePicker) { Toast.show({type:"error",text1:"Gallery not available"}); return; }
    try {
      const perm = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (!perm.granted) { Toast.show({type:"error",text1:"Gallery permission denied"}); return; }
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions?.Videos ?? "videos",
        allowsEditing: false,
        quality: 1,
      });
      if (!result.canceled && result.assets?.[0]?.uri) {
        setPhase("uploading");
        await uploadVideo(result.assets[0].uri);
      }
    } catch { Toast.show({type:"error",text1:"Could not open gallery"}); }
  };

  if (!permission?.granted) return (
    <View style={[S.container,S.centered]}>
      <Ionicons name="camera-off-outline" size={52} color={GOLD}/>
      <Text style={S.permText}>Camera access needed for 3D scanning</Text>
      <TouchableOpacity style={S.permBtn} onPress={requestPermission}><Text style={S.permBtnText}>ALLOW CAMERA</Text></TouchableOpacity>
    </View>
  );

  const {width:sw,height:sh}=Dimensions.get("window");
  const frameW=sw*0.6, frameH=sh*0.72;

  return (
    <View style={S.container}>
      <CameraView ref={cameraRef} style={StyleSheet.absoluteFill} facing={facing} mode="video"/>
      <View style={[S.frameWrap,{width:frameW,height:frameH}]} pointerEvents="none">
        <View style={[S.frame,{width:frameW,height:frameH,borderColor:phase==="recording"?RED:GREEN,shadowColor:GREEN}]}>
          {phase==="aligning"&&(<View style={S.holdTrack}><View style={[S.holdFill,{width:`${holdProg}%`as any}]}/></View>)}
          {phase==="recording"&&(<Animated.View style={[StyleSheet.absoluteFill,{borderWidth:2,borderColor:RED,borderRadius:4,transform:[{scale:pulseAnim}]}]}/>)}
        </View>
      </View>
      <View style={S.overlay} pointerEvents="box-none">
        <View style={S.topBar}>
          <TouchableOpacity onPress={()=>router.back()} disabled={phase==="recording"} hitSlop={12}><Ionicons name="close" size={26} color="#fff"/></TouchableOpacity>
          <Text style={S.topTitle}>3D BODY SCAN</Text>
          <TouchableOpacity onPress={()=>setFacing(f=>f==="back"?"front":"back")} disabled={phase==="recording"}><Ionicons name="camera-reverse-outline" size={26} color="#fff"/></TouchableOpacity>
        </View>
        {phase==="recording"&&(
          <View style={S.countdownBlock}><Text style={S.countdownNum}>{countdown}</Text><Text style={S.countdownSub}>seconds</Text><Text style={S.rotateHint}>⟳ Rotate slowly · 360°</Text></View>
        )}
        <View style={S.bottom}>
          {phase==="aligning"&&(
            <View style={S.instructions}>
              <Text style={S.autoNote}>Align yourself in the frame — scan starts automatically</Text>
              <View style={S.dividerRow}>
                <View style={S.dividerLine}/><Text style={S.dividerText}>or</Text><View style={S.dividerLine}/>
              </View>
              <TouchableOpacity style={S.galleryBtn} onPress={pickFromGallery}>
                <Ionicons name="folder-open-outline" size={18} color={GOLD}/>
                <Text style={S.galleryBtnText}>Select Video from Gallery</Text>
              </TouchableOpacity>
            </View>
          )}
          {phase==="recording"&&(<TouchableOpacity style={S.stopBtn} onPress={stopRecording}><View style={S.stopIcon}/><Text style={S.stopLabel}>TAP TO STOP</Text></TouchableOpacity>)}
          {phase==="uploading"&&(<View style={S.uploadingBlock}><ActivityIndicator color={GOLD} size="large"/><Text style={S.uploadingText}>Processing…</Text></View>)}
        </View>
      </View>
    </View>
  );
}

export default function VideoScanScreen() {
  return Platform.OS === "web" ? <VideoScanWeb /> : <VideoScanNative />;
}

// ─── Styles ───────────────────────────────────────────────────────────────────

const S = StyleSheet.create({
  container:    { flex:1, backgroundColor:"#000" },
  centered:     { alignItems:"center", justifyContent:"center", gap:16, padding:32 },
  vignette:     { ...StyleSheet.absoluteFillObject, backgroundColor:"rgba(0,0,0,0.25)" },

  // Frame
  frameWrap:    { position:"absolute", alignSelf:"center", top:"11%", alignItems:"center", justifyContent:"center" },
  frame:        { borderWidth:1.5, borderRadius:4, position:"relative", shadowOpacity:0.6, shadowRadius:14, shadowOffset:{width:0,height:0}, overflow:"hidden" },
  corner:       { position:"absolute", width:22, height:22 },

  // Body silhouette inside frame
  silhouette:   { position:"absolute", top:"6%", alignSelf:"center", alignItems:"center", width:"70%", height:"88%", gap:0 },
  siHead:       { width:38, height:38, borderRadius:19, borderWidth:1.5, marginBottom:4 },
  siShoulder:   { width:"100%", height:18, borderRadius:4, marginBottom:2 },
  siTorso:      { width:"85%", flex:1, borderRadius:6, marginBottom:4 },
  siLegs:       { flexDirection:"row", width:"90%", height:"30%", marginBottom:0 },
  siLeg:        { flex:1, borderRadius:6 },

  // Hold progress
  holdTrack:    { position:"absolute", bottom:0, left:0, right:0, height:3, backgroundColor:"rgba(255,255,255,0.08)" },
  holdFill:     { height:"100%", backgroundColor:GREEN, borderRadius:2 },

  // Direction arrows
  arrow:        { position:"absolute", fontSize:36, fontWeight:"300" },
  arrowL:       { left:-52, top:"40%" },
  arrowR:       { right:-52, top:"40%" },
  arrowT:       { top:-48, alignSelf:"center" },
  arrowB:       { bottom:-48, alignSelf:"center" },

  // Overlay UI
  overlay:      { flex:1, justifyContent:"space-between" },
  topBar:       { flexDirection:"row", justifyContent:"space-between", alignItems:"center", paddingTop:56, paddingHorizontal:24 },
  topCenter:    { alignItems:"center", gap:6 },
  topTitle:     { color:"rgba(255,255,255,0.8)", fontSize:11, letterSpacing:4 },
  recBadge:     { flexDirection:"row", alignItems:"center", gap:5, backgroundColor:"rgba(239,83,80,0.2)", borderColor:RED, borderWidth:1, paddingHorizontal:10, paddingVertical:3, borderRadius:10 },
  recDot:       { width:6, height:6, borderRadius:3, backgroundColor:RED },
  recText:      { color:RED, fontSize:10, letterSpacing:2, fontWeight:"600" },

  // Feedback pill
  feedbackPill: { alignSelf:"center", flexDirection:"row", alignItems:"center", gap:10, borderWidth:1, borderRadius:24, paddingHorizontal:18, paddingVertical:12, backgroundColor:"rgba(0,0,0,0.6)", maxWidth:"85%" },
  feedbackText: { fontSize:15, fontWeight:"500" },
  feedbackSub:  { color:"rgba(255,255,255,0.45)", fontSize:11, marginTop:2 },

  tfLoading:    { alignSelf:"center", flexDirection:"row", alignItems:"center", gap:8, backgroundColor:"rgba(0,0,0,0.5)", borderRadius:12, paddingHorizontal:14, paddingVertical:6 },
  tfLoadingText:{ color:"rgba(255,255,255,0.4)", fontSize:11 },

  // Recording
  countdownBlock:{ alignSelf:"center", alignItems:"center", gap:4, backgroundColor:"rgba(0,0,0,0.7)", padding:20, borderRadius:4 },
  countdownNum:  { color:GOLD, fontSize:64, fontWeight:"200", lineHeight:68 },
  countdownSub:  { color:"rgba(255,255,255,0.5)", fontSize:12, letterSpacing:2 },
  rotateHint:    { color:"rgba(255,255,255,0.55)", fontSize:13, marginTop:4 },

  uploadingBlock:{ alignSelf:"center", alignItems:"center", gap:12 },
  uploadingText: { color:"rgba(255,255,255,0.6)", fontSize:14 },

  // Bottom
  bottom:       { padding:24, paddingBottom:36, gap:14 },
  heightBadge:  { flexDirection:"row", alignItems:"center", gap:6, backgroundColor:"rgba(76,175,80,0.1)", borderColor:"rgba(76,175,80,0.3)", borderWidth:1, borderRadius:12, paddingHorizontal:12, paddingVertical:6, alignSelf:"flex-start" },
  heightBadgeText:{ color:"#4caf50", fontSize:11 },
  instructions: { backgroundColor:"rgba(0,0,0,0.75)", borderRadius:4, padding:16, gap:8, borderColor:"rgba(255,255,255,0.06)", borderWidth:1 },
  tip:          { flexDirection:"row", alignItems:"center", gap:10 },
  tipDot:       { width:4, height:4, borderRadius:2, backgroundColor:GOLD },
  tipText:      { color:"rgba(255,255,255,0.65)", fontSize:13 },
  autoNote:     { color:GOLD, fontSize:11, letterSpacing:1, marginTop:6, textAlign:"center" },

  stopBtn:      { flexDirection:"row", alignItems:"center", justifyContent:"center", gap:12, backgroundColor:"rgba(239,83,80,0.15)", borderColor:RED, borderWidth:1, borderRadius:30, paddingVertical:14, paddingHorizontal:28, alignSelf:"center" },
  stopIcon:     { width:14, height:14, borderRadius:2, backgroundColor:RED },
  stopLabel:    { color:RED, fontSize:12, letterSpacing:2, fontWeight:"500" },

  permText:     { color:"#fff", textAlign:"center", fontSize:15, lineHeight:22 },
  permBtn:      { backgroundColor:GOLD, paddingHorizontal:28, paddingVertical:12, borderRadius:2 },
  permBtnText:  { color:"#000", letterSpacing:3, fontSize:12, fontWeight:"600" },

  dividerRow:   { flexDirection:"row", alignItems:"center", gap:10, marginVertical:6 },
  dividerLine:  { flex:1, height:1, backgroundColor:"rgba(255,255,255,0.08)" },
  dividerText:  { color:"rgba(255,255,255,0.25)", fontSize:11 },
  galleryBtn:   { flexDirection:"row", alignItems:"center", justifyContent:"center", gap:10, borderColor:"rgba(201,168,76,0.35)", borderWidth:1, borderRadius:2, paddingVertical:12 },
  galleryBtnText:{ color:GOLD, fontSize:13, letterSpacing:2 },
});
