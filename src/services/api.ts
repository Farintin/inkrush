// src/services/api.ts
import { mockReels } from "./mockReels";

export type Reel = {
  id: string;
  playUrl: string; // or hlsUrl
  thumbUrl: string;
  caption: string;
  author: { id: string; handle: string; avatar: string; following?: boolean };
  stats: { likes: number; comments: number; shares: number; views: number };
  createdAt: string;
};

// const BASE = import.meta.env.VITE_API_BASE;

export async function getFeed() {
// { mode, reelId }: { mode?: string; reelId?: string }
  return Promise.resolve(mockReels);
}

// export async function getFeed({
//   mode,
//   reelId,
// }: {
//   mode?: string;
//   reelId?: string;
// }): Promise<Reel[]> {
//   const url = new URL(`${BASE}/feed`);
//   if (mode) url.searchParams.set("mode", mode);
//   if (reelId) url.searchParams.set("reelId", reelId);
//   const r = await fetch(url, { credentials: "include" });
//   if (!r.ok) throw new Error("Feed error");
//   return r.json();
// }
