import { create } from "zustand";
import { Platform } from "react-native";
import * as SecureStore from "expo-secure-store";
import { authAPI } from "../services/api";

interface AuthState {
  accessToken:  string | null;
  refreshToken: string | null;
  userId:       number | null;
  userName:     string | null;
  isLoggedIn:   boolean;
  login:        (token: string) => Promise<void>;
  logout:       () => Promise<void>;
  loadFromStorage: () => Promise<void>;
}

const store = (key: string, value: string | null) => {
  if (Platform.OS === "web") {
    if (value) localStorage.setItem(key, value);
    else        localStorage.removeItem(key);
  } else {
    if (value) return SecureStore.setItemAsync(key, value);
    else        return SecureStore.deleteItemAsync(key);
  }
};

const load = async (key: string): Promise<string | null> => {
  if (Platform.OS === "web") return localStorage.getItem(key);
  return SecureStore.getItemAsync(key);
};

export const useAuthStore = create<AuthState>((set) => ({
  accessToken:  null,
  refreshToken: null,
  userId:       null,
  userName:     null,
  isLoggedIn:   false,

  login: async (loginToken: string) => {
    const { data } = await authAPI.loginWithToken(loginToken);
    await store("access_token",  data.access_token);
    await store("refresh_token", data.refresh_token);
    set({
      accessToken:  data.access_token,
      refreshToken: data.refresh_token,
      userId:       data.user_id,
      userName:     data.name,
      isLoggedIn:   true,
    });
  },

  logout: async () => {
    await store("access_token",  null);
    await store("refresh_token", null);
    set({ accessToken: null, refreshToken: null, userId: null, userName: null, isLoggedIn: false });
  },

  loadFromStorage: async () => {
    const access  = await load("access_token");
    const refresh = await load("refresh_token");
    if (access) {
      set({ accessToken: access, refreshToken: refresh, isLoggedIn: true });
    }
  },
}));
