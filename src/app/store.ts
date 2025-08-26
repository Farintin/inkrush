// src/app/store.ts
import { create } from "zustand";

type UIState = { muted: boolean; toggleMute: () => void };
export const useUI = create<UIState>((set) => ({
  muted: true,
  toggleMute: () => set((s) => ({ muted: !s.muted })),
}));
