import axios from "axios";
import * as SecureStore from "expo-secure-store";
import { Platform } from "react-native";
import {
  MOCK_ENABLED,
  mockLogin,
  mockCreateScan,
  mockUploadVideo,
  mockUploadPhotos,
  mockSubmitManual,
  mockGetScan,
  mockListScans,
} from "./mockApi";

const BASE_URL =
  Platform.OS === "web"
    ? "http://localhost:8000/api/v1"
    : "http://192.168.1.100:8000/api/v1"; // ← Update to your server IP

export const api = axios.create({
  baseURL: BASE_URL,
  timeout: 60000,
});

// Attach auth token automatically
api.interceptors.request.use(async (config) => {
  const token =
    Platform.OS === "web"
      ? localStorage.getItem("access_token")
      : await SecureStore.getItemAsync("access_token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Auto-refresh on 401
api.interceptors.response.use(
  (res) => res,
  async (err) => {
    if (err.response?.status === 401) {
      const refresh =
        Platform.OS === "web"
          ? localStorage.getItem("refresh_token")
          : await SecureStore.getItemAsync("refresh_token");

      if (refresh) {
        try {
          const { data } = await axios.post(`${BASE_URL}/auth/refresh`, { refresh_token: refresh });
          if (Platform.OS === "web") {
            localStorage.setItem("access_token", data.access_token);
          } else {
            await SecureStore.setItemAsync("access_token", data.access_token);
          }
          err.config.headers.Authorization = `Bearer ${data.access_token}`;
          return api.request(err.config);
        } catch {
          /* force logout handled by store */
        }
      }
    }
    return Promise.reject(err);
  }
);

// ── Auth ──────────────────────────────────────────────────────────────────

export const authAPI = {
  loginWithToken: async (login_token: string) => {
    if (MOCK_ENABLED) {
      const data = await mockLogin(login_token);
      return { data };
    }
    return api.post("/auth/token-login", { login_token });
  },

  refresh: (refresh_token: string) =>
    api.post("/auth/refresh", { refresh_token }),
};

// ── Scans ─────────────────────────────────────────────────────────────────

export const scanAPI = {
  create: async (data: { gender: string; clothing_type: string; input_method: string }) => {
    if (MOCK_ENABLED) {
      const result = await mockCreateScan(data);
      return { data: result };
    }
    return api.post("/scans/", data);
  },

  uploadVideo: async (scanId: number, uri: string, referenceHeight?: number) => {
    if (MOCK_ENABLED) {
      const result = await mockUploadVideo(scanId);
      return { data: result };
    }
    const form = new FormData();
    form.append("video", { uri, name: "scan.mp4", type: "video/mp4" } as any);
    if (referenceHeight) form.append("reference_height", String(referenceHeight));
    return api.post(`/scans/${scanId}/upload-video`, form, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  },

  uploadPhotos: async (scanId: number, frontUri: string, backUri?: string, referenceHeight?: number) => {
    if (MOCK_ENABLED) {
      const result = await mockUploadPhotos(scanId);
      return { data: result };
    }
    const form = new FormData();
    form.append("front", { uri: frontUri, name: "front.jpg", type: "image/jpeg" } as any);
    if (backUri) form.append("back", { uri: backUri, name: "back.jpg", type: "image/jpeg" } as any);
    if (referenceHeight) form.append("reference_height", String(referenceHeight));
    return api.post(`/scans/${scanId}/upload-photos`, form, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  },

  submitManual: async (scanId: number, measurements: Record<string, number>) => {
    if (MOCK_ENABLED) {
      const result = await mockSubmitManual(scanId);
      return { data: result };
    }
    return api.post(`/scans/${scanId}/manual`, measurements);
  },

  getScan: async (scanId: number) => {
    if (MOCK_ENABLED) {
      const result = await mockGetScan(scanId);
      return { data: result };
    }
    return api.get(`/scans/${scanId}`);
  },

  listScans: async () => {
    if (MOCK_ENABLED) {
      const result = await mockListScans();
      return { data: result };
    }
    return api.get("/scans/");
  },

  getMeshUrl: (scanId: number) => `${BASE_URL}/scans/${scanId}/mesh`,
};
