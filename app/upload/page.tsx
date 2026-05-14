"use client";
import { useRef, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { uploadVideo } from "@/lib/api";

export default function UploadPage() {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const [dragging, setDragging] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");

  const handleFile = useCallback(
    async (file: File) => {
      if (!file.type.startsWith("video/")) {
        setError("Please select a video file.");
        return;
      }
      setError("");
      setUploading(true);
      try {
        const { job_id } = await uploadVideo(file);
        router.push(`/processing/${job_id}`);
      } catch (err: unknown) {
        const msg = err instanceof Error ? err.message : "Upload failed";
        setError(msg);
        setUploading(false);
      }
    },
    [router]
  );

  const onDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setDragging(false);
      const file = e.dataTransfer.files[0];
      if (file) handleFile(file);
    },
    [handleFile]
  );

  if (uploading) {
    return (
      <main className="flex flex-col items-center justify-center min-h-screen gap-4">
        <div className="w-12 h-12 border-4 border-sky-500 border-t-transparent rounded-full animate-spin" />
        <p className="text-xl font-semibold">Uploading...</p>
      </main>
    );
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4">
      <h2 className="text-3xl font-bold mb-8">Upload Video</h2>

      <div
        onClick={() => inputRef.current?.click()}
        onDragOver={(e) => {
          e.preventDefault();
          setDragging(true);
        }}
        onDragLeave={() => setDragging(false)}
        onDrop={onDrop}
        className={`cursor-pointer border-2 border-dashed rounded-2xl p-16 text-center transition-all max-w-md w-full ${
          dragging
            ? "border-sky-400 bg-sky-500/10"
            : "border-gray-600 hover:border-gray-400"
        }`}
      >
        <p className="text-5xl mb-4">🎥</p>
        <p className="text-lg font-semibold text-gray-200">
          Drop your video here
        </p>
        <p className="text-sm text-gray-500 mt-2">or click to browse</p>
        <p className="text-xs text-gray-600 mt-4">
          MP4, MOV, AVI, MKV — 10 to 60 seconds recommended
        </p>
        <input
          ref={inputRef}
          type="file"
          accept="video/*"
          className="hidden"
          onChange={(e) =>
            e.target.files?.[0] && handleFile(e.target.files[0])
          }
        />
      </div>

      {error && <p className="text-red-400 mt-4 text-sm">{error}</p>}

      <div className="mt-8 max-w-md w-full bg-gray-800/50 rounded-xl p-5 text-sm text-gray-400 space-y-1">
        <p className="font-semibold text-gray-300 mb-3">Tips for best results:</p>
        <p>• Person should rotate slowly and fully (360°)</p>
        <p>• Good lighting, no harsh backlight</p>
        <p>• Full body visible from head to feet</p>
        <p>• Minimal / fitted clothing = more mesh detail</p>
        <p>• 10–15 second clip is ideal</p>
      </div>
    </main>
  );
}
