import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4">
      <div className="text-center max-w-2xl">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent">
          NaatAI
        </h1>
        <p className="text-xl text-gray-400 mb-2">360° Body Scanner</p>
        <p className="text-gray-500 mb-12">
          10 seconds of video &rarr; textured 3D mesh
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Link
            href="/capture"
            className="flex flex-col items-center gap-4 rounded-2xl border border-sky-500/30 bg-sky-500/10 p-8 hover:bg-sky-500/20 transition-all"
          >
            <div className="w-16 h-16 rounded-full bg-sky-500/20 flex items-center justify-center text-3xl">
              📷
            </div>
            <div>
              <p className="font-semibold text-lg text-sky-400">Capture Now</p>
              <p className="text-sm text-gray-400 mt-1">
                Follow on-screen guides to record your body scan
              </p>
            </div>
          </Link>

          <Link
            href="/upload"
            className="flex flex-col items-center gap-4 rounded-2xl border border-gray-700 bg-gray-800/40 p-8 hover:bg-gray-800/70 transition-all"
          >
            <div className="w-16 h-16 rounded-full bg-gray-700/50 flex items-center justify-center text-3xl">
              📁
            </div>
            <div>
              <p className="font-semibold text-lg text-gray-200">Upload Video</p>
              <p className="text-sm text-gray-400 mt-1">
                Upload an existing 360° or standard video
              </p>
            </div>
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-3 gap-4 text-center text-sm text-gray-500">
          <div>
            <p className="text-2xl font-bold text-gray-300">10s</p>
            <p>video needed</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-gray-300">~5 min</p>
            <p>processing time</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-gray-300">OBJ</p>
            <p>output format</p>
          </div>
        </div>
      </div>
    </main>
  );
}
