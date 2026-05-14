/**
 * Mock API – lets you test every screen without running the backend.
 * Enable by setting EXPO_PUBLIC_MOCK=true in your .env.local
 */

export const MOCK_ENABLED = process.env.EXPO_PUBLIC_MOCK === "true";

// Simulated network delay (ms)
const delay = (ms = 800) => new Promise((r) => setTimeout(r, ms));

// ── Auth ─────────────────────────────────────────────────────────────────────

export const mockLogin = async (token: string) => {
  await delay(600);
  if (!token.startsWith("NAT-")) throw new Error("Invalid token");
  return {
    access_token:  "mock.jwt.access",
    refresh_token: "mock.jwt.refresh",
    user_id:       42,
    name:          "Demo Customer",
  };
};

// ── Scans ────────────────────────────────────────────────────────────────────

let mockScanId = 1000;

export const mockCreateScan = async (payload: {
  gender: string;
  clothing_type: string;
  input_method: string;
}) => {
  await delay(400);
  return { id: ++mockScanId, status: "pending", ...payload };
};

export const mockUploadVideo = async (scanId: number) => {
  await delay(1000);
  return { id: scanId, status: "processing" };
};

export const mockUploadPhotos = async (scanId: number) => {
  await delay(800);
  return { id: scanId, status: "processing" };
};

export const mockSubmitManual = async (scanId: number) => {
  await delay(300);
  return { id: scanId, status: "completed" };
};

// Simulate progressive processing: first few polls return "processing", then "completed"
const pollCount: Record<number, number> = {};

export const mockGetScan = async (scanId: number) => {
  await delay(500);
  pollCount[scanId] = (pollCount[scanId] ?? 0) + 1;

  if (pollCount[scanId] < 4) {
    return { id: scanId, status: "processing", progress: pollCount[scanId] * 25 };
  }

  // Completed result — realistic measurements
  return {
    id: scanId,
    status: "completed",
    measurements: {
      height_cm:           182,
      weight_kg:           88,
      chest_cm:            105,
      waist_cm:            94,
      hips_cm:             104,
      shoulder_width_cm:   48,
      inseam_cm:           82,
      neck_cm:             41,
      sleeve_length_cm:    67,
      thigh_cm:            62,
      confidence:          0.91,
    },
    size_recommendations: {
      tops: {
        recommended: "XL",
        all_sizes: [
          { size: "S",   score: 0.05 },
          { size: "M",   score: 0.20 },
          { size: "L",   score: 0.65 },
          { size: "XL",  score: 0.95 },
          { size: "XXL", score: 0.55 },
        ],
      },
      bottom: {
        recommended: "36",
        all_sizes: [
          { size: "30", score: 0.05 },
          { size: "32", score: 0.20 },
          { size: "34", score: 0.55 },
          { size: "36", score: 0.95 },
          { size: "38", score: 0.50 },
          { size: "40", score: 0.15 },
        ],
      },
    },
    mesh_url: null,
    created_at: new Date().toISOString(),
  };
};

export const mockListScans = async () => {
  await delay(400);
  return [
    {
      id: 999,
      status: "completed",
      gender: "man",
      clothing_type: "tops",
      created_at: new Date(Date.now() - 3 * 86400_000).toISOString(),
      size_recommendations: { tops: { recommended: "M" } },
    },
    {
      id: 998,
      status: "completed",
      gender: "man",
      clothing_type: "bottom",
      created_at: new Date(Date.now() - 10 * 86400_000).toISOString(),
      size_recommendations: { bottom: { recommended: "32" } },
    },
  ];
};
