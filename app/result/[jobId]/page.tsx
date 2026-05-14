"use client";
import { useParams } from "next/navigation";
import MeshViewer from "@/components/MeshViewer";

export default function ResultPage() {
  const params = useParams();
  const jobId = params.jobId as string;
  const apiUrl =
    process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

  return (
    <main className="flex flex-col min-h-screen">
      <header className="flex items-center justify-between px-6 py-4 border-b border-gray-800">
        <h1 className="text-lg font-bold text-sky-400">NaatAI — Scan Result</h1>
        <div className="flex gap-3">
          <a
            href={`${apiUrl}/result/${jobId}/mesh.obj`}
            download="mesh.obj"
            className="bg-gray-700 hover:bg-gray-600 text-white text-sm font-medium py-2 px-4 rounded-lg transition-all"
          >
            Download OBJ
          </a>
          <a
            href={`${apiUrl}/result/${jobId}/texture.jpg`}
            download="texture.jpg"
            className="bg-sky-600 hover:bg-sky-500 text-white text-sm font-medium py-2 px-4 rounded-lg transition-all"
          >
            Download Texture
          </a>
        </div>
      </header>

      <div className="flex-1">
        <MeshViewer jobId={jobId} />
      </div>

      <footer className="px-6 py-3 text-center text-xs text-gray-600 border-t border-gray-800">
        Drag to rotate · Scroll to zoom · Right-click drag to pan
      </footer>
    </main>
  );
}
