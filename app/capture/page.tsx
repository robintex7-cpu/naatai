"use client";
import { useRef, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { uploadVideo } from "@/lib/api";

type Step = {
  instruction: string;
  duration: number;
  detail: string;
};

const STEPS: Step[] = [
  {
    instruction: "Get Ready",
    duration: 3,
    detail: "Stand 2–3 metres from the camera. Arms slightly out from your sides.",
  },
  {
    instruction: "Face Forward",
    duration: 3,
    detail: "Look straight at the camera. Stay still.",
  },
  {
    instruction: "Slowly Turn Right",
    duration: 4,
    detail: "Rotate slowly to your right. Keep your arms out.",
  },
  {
    instruction: "Keep Turning",
    duration: 3,
    detail: "Almost there — continue rotating...",
  },
  {
    instruction: "Face Forward Again",
    duration: 2,
    detail: "Complete the full rotation. Done!",
  },
];

const TOTAL_DURATION = STEPS.reduce((a, s) => a + s.duration, 0);

export default function CapturePage() {
  const router = useRouter();
  const videoRef = useRef<HTMLVideoElement>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);

  const [phase, setPhase] = useState<
    "intro" | "recording" | "uploading" | "error"
  >("intro");
  const [stepIndex, setStepIndex] = useState(0);
  const [stepProgress, setStepProgress] = useState(0);
  const [totalProgress, setTotalProgress] = useState(0);
  const [errorMsg, setErrorMsg] = useState("");

  const handleRecordingComplete = useCallback(async () => {
    setPhase("uploading");
    try {
      const blob = new Blob(chunksRef.current, { type: "video/webm" });
      const file = new File([blob], "capture.webm", { type: "video/webm" });
      const { job_id } = await uploadVideo(file);
      router.push(`/processing/${job_id}`);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Upload failed";
      setPhase("error");
      setErrorMsg(msg);
    }
  }, [router]);

  const startCapture = useCallback(async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: "environment",
          width: { ideal: 1920 },
          height: { ideal: 1080 },
        },
        audio: false,
      });

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      }

      chunksRef.current = [];
      const mimeType = MediaRecorder.isTypeSupported("video/webm;codecs=vp9")
        ? "video/webm;codecs=vp9"
        : "video/webm";
      const recorder = new MediaRecorder(stream, { mimeType });
      recorder.ondataavailable = (e) => chunksRef.current.push(e.data);
      recorder.onstop = handleRecordingComplete;
      mediaRecorderRef.current = recorder;

      setPhase("recording");
      recorder.start(100);

      let elapsed = 0;
      for (let i = 0; i < STEPS.length; i++) {
        const step = STEPS[i];
        const stepStart = elapsed;
        setStepIndex(i);

        await new Promise<void>((resolve) => {
          const interval = setInterval(() => {
            elapsed += 0.1;
            const stepElapsed = elapsed - stepStart;
            setStepProgress(
              Math.min((stepElapsed / step.duration) * 100, 100)
            );
            setTotalProgress(
              Math.min((elapsed / TOTAL_DURATION) * 100, 100)
            );
            if (stepElapsed >= step.duration) {
              clearInterval(interval);
              resolve();
            }
          }, 100);
        });
      }

      recorder.stop();
      stream.getTracks().forEach((t) => t.stop());
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Camera access denied";
      setPhase("error");
      setErrorMsg(msg);
    }
  }, [handleRecordingComplete]);

  if (phase === "intro") {
    return (
      <main className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Prepare Your Scan</h2>
        <div className="max-w-md bg-gray-800 rounded-2xl p-6 text-left space-y-2 mb-10">
          <p className="font-semibold text-white mb-3">Before you start:</p>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>✅ Place phone on a tripod or have someone hold it steady</li>
            <li>✅ Stand 2–3 metres away, full body visible head to feet</li>
            <li>✅ Good lighting — no harsh backlight behind you</li>
            <li>✅ Wear fitted or minimal clothing for better mesh detail</li>
            <li>✅ You will slowly rotate 360° during the 15-second recording</li>
            <li>✅ Keep your arms slightly out from your sides</li>
          </ul>
        </div>
        <button
          onClick={startCapture}
          className="bg-sky-500 hover:bg-sky-400 text-white font-bold py-4 px-10 rounded-2xl text-lg transition-all"
        >
          Start Guided Capture
        </button>
      </main>
    );
  }

  if (phase === "uploading") {
    return (
      <main className="flex flex-col items-center justify-center min-h-screen gap-4">
        <div className="w-12 h-12 border-4 border-sky-500 border-t-transparent rounded-full animate-spin" />
        <p className="text-xl font-semibold">Uploading your scan...</p>
        <p className="text-gray-400 text-sm">This may take a moment</p>
      </main>
    );
  }

  if (phase === "error") {
    return (
      <main className="flex flex-col items-center justify-center min-h-screen gap-4 text-center px-4">
        <p className="text-red-400 text-xl font-semibold">Something went wrong</p>
        <p className="text-gray-400">{errorMsg}</p>
        <button
          onClick={() => setPhase("intro")}
          className="mt-4 text-sky-400 underline"
        >
          Try again
        </button>
      </main>
    );
  }

  const currentStep = STEPS[stepIndex];

  return (
    <main className="relative flex flex-col min-h-screen bg-black overflow-hidden">
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover opacity-50"
        muted
        playsInline
      />

      {/* Body outline silhouette guide */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <svg
          viewBox="0 0 200 500"
          className="h-[65vh] opacity-25"
          fill="none"
          stroke="white"
          strokeWidth="3"
        >
          <ellipse cx="100" cy="50" rx="35" ry="40" />
          <line x1="100" y1="90" x2="100" y2="280" />
          <line x1="100" y1="130" x2="40" y2="220" />
          <line x1="100" y1="130" x2="160" y2="220" />
          <line x1="100" y1="280" x2="65" y2="460" />
          <line x1="100" y1="280" x2="135" y2="460" />
        </svg>
      </div>

      {/* REC indicator */}
      <div className="relative z-10 flex items-center gap-2 p-4">
        <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
        <span className="text-xs text-red-400 font-mono">REC</span>
      </div>

      <div className="relative z-10 flex flex-col justify-between flex-1 p-6">
        {/* Instruction */}
        <div className="text-center mt-4">
          <p className="text-3xl font-bold text-white drop-shadow-lg">
            {currentStep.instruction}
          </p>
          <p className="text-gray-300 mt-2 drop-shadow text-lg">
            {currentStep.detail}
          </p>
        </div>

        {/* Progress */}
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <span className="text-xs text-gray-400 w-20">This step</span>
            <div className="flex-1 bg-gray-700/60 rounded-full h-2">
              <div
                className="bg-sky-400 h-2 rounded-full transition-all duration-100"
                style={{ width: `${stepProgress}%` }}
              />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs text-gray-400 w-20">Overall</span>
            <div className="flex-1 bg-gray-700/60 rounded-full h-2">
              <div
                className="bg-green-400 h-2 rounded-full transition-all duration-100"
                style={{ width: `${totalProgress}%` }}
              />
            </div>
            <span className="text-xs text-gray-300">
              {Math.round(totalProgress)}%
            </span>
          </div>
          <div className="flex justify-center gap-2 mt-2">
            {STEPS.map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full transition-all ${
                  i < stepIndex
                    ? "bg-green-400"
                    : i === stepIndex
                    ? "bg-sky-400 scale-125"
                    : "bg-gray-600"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
