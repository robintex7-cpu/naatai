"use client";
import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { getStatus } from "@/lib/api";

type Job = {
  job_id: string;
  status: "queued" | "processing" | "complete" | "failed";
  progress: number;
  step: string;
};

const STEP_LABELS = [
  "Extracting frames",
  "Removing background",
  "Splitting 360° views",
  "Estimating camera positions",
  "Building dense point cloud",
  "Generating mesh",
];

export default function ProcessingPage() {
  const router = useRouter();
  const params = useParams();
  const jobId = params.jobId as string;
  const [job, setJob] = useState<Job | null>(null);

  useEffect(() => {
    const poll = async () => {
      try {
        const data = await getStatus(jobId);
        setJob(data);
        if (data.status === "complete") {
          router.push(`/result/${jobId}`);
        }
      } catch {}
    };

    poll();
    const interval = setInterval(poll, 2000);
    return () => clearInterval(interval);
  }, [jobId, router]);

  if (!job) {
    return (
      <main className="flex items-center justify-center min-h-screen">
        <div className="w-8 h-8 border-4 border-sky-500 border-t-transparent rounded-full animate-spin" />
      </main>
    );
  }

  if (job.status === "failed") {
    return (
      <main className="flex flex-col items-center justify-center min-h-screen gap-4 px-4 text-center">
        <p className="text-red-400 text-2xl font-bold">Processing failed</p>
        <p className="text-gray-400 text-sm">{job.step}</p>
        <a href="/" className="text-sky-400 underline mt-4">
          Start over
        </a>
      </main>
    );
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4">
      <div className="max-w-md w-full text-center">
        <div className="w-16 h-16 border-4 border-sky-500 border-t-transparent rounded-full animate-spin mx-auto mb-8" />
        <h2 className="text-2xl font-bold mb-2">Building your 3D mesh</h2>
        <p className="text-gray-400 mb-8">{job.step}</p>

        <div className="w-full bg-gray-800 rounded-full h-3 mb-10">
          <div
            className="bg-sky-500 h-3 rounded-full transition-all duration-500"
            style={{ width: `${job.progress}%` }}
          />
        </div>

        <div className="text-left space-y-3">
          {STEP_LABELS.map((label, i) => {
            const threshold = ((i + 1) / STEP_LABELS.length) * 100;
            const prevThreshold = (i / STEP_LABELS.length) * 100;
            const done = job.progress >= threshold;
            const active =
              job.progress < threshold && job.progress >= prevThreshold;
            return (
              <div key={i} className="flex items-center gap-3">
                <div
                  className={`w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-bold ${
                    done
                      ? "bg-green-500 text-white"
                      : active
                      ? "bg-sky-500 text-white animate-pulse"
                      : "bg-gray-700 text-gray-500"
                  }`}
                >
                  {done ? "✓" : i + 1}
                </div>
                <span
                  className={`text-sm ${
                    done
                      ? "text-gray-400 line-through"
                      : active
                      ? "text-white font-medium"
                      : "text-gray-600"
                  }`}
                >
                  {label}
                </span>
              </div>
            );
          })}
        </div>

        <p className="text-xs text-gray-600 mt-10">
          Processing takes 5–20 minutes on CPU. Do not close this tab.
        </p>
      </div>
    </main>
  );
}
