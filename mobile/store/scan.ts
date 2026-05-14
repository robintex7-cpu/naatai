import { create } from "zustand";

export interface ScanConfig {
  gender:          "man" | "woman" | "kid" | null;
  clothingType:    "tops" | "bottom" | "full_body" | null;
  inputMethod:     "manual" | "video" | "photo" | null;
  scanId:          number | null;
  referenceHeight: number | null;
}

interface ScanState extends ScanConfig {
  setGender:          (g: ScanConfig["gender"]) => void;
  setClothingType:    (c: ScanConfig["clothingType"]) => void;
  setInputMethod:     (m: ScanConfig["inputMethod"]) => void;
  setScanId:          (id: number) => void;
  setReferenceHeight: (h: number) => void;
  reset:              () => void;
}

export const useScanStore = create<ScanState>((set) => ({
  gender:          null,
  clothingType:    null,
  inputMethod:     null,
  scanId:          null,
  referenceHeight: null,

  setGender:          (gender)          => set({ gender }),
  setClothingType:    (clothingType)    => set({ clothingType }),
  setInputMethod:     (inputMethod)     => set({ inputMethod }),
  setScanId:          (scanId)          => set({ scanId }),
  setReferenceHeight: (referenceHeight) => set({ referenceHeight }),
  reset:              () => set({ gender: null, clothingType: null, inputMethod: null, scanId: null, referenceHeight: null }),
}));
