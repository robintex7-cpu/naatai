const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

export async function uploadVideo(file: File): Promise<{ job_id: string }> {
  const form = new FormData();
  form.append("file", file);

  const res = await fetch(`${API_URL}/process`, {
    method: "POST",
    body: form,
  });

  if (!res.ok) {
    const data = await res.json().catch(() => ({}));
    throw new Error((data as { detail?: string }).detail || "Upload failed");
  }

  return res.json() as Promise<{ job_id: string }>;
}

export async function getStatus(jobId: string): Promise<{
  job_id: string;
  status: string;
  progress: number;
  step: string;
}> {
  const res = await fetch(`${API_URL}/status/${jobId}`);
  if (!res.ok) throw new Error("Status check failed");
  return res.json();
}
