// src/components/ReelCard/ReelCard.tsx
import { useRef } from "react";
import useVideoAutoplay from "./useVideoAutoplay";
import { useUI } from "@/app/store";
import type { Reel } from "@/services/api";

export default function ReelCard({
  reel,
  active,
}: {
  reel: Reel;
  active: boolean;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const { muted, toggleMute } = useUI();
  useVideoAutoplay(ref, active);

  return (
    <div className="h-full w-full relative">
      <video
        ref={ref}
        src={reel.playUrl} // HLS? then mount <video> + Hls.js via useHls hook
        className="h-full w-full object-cover"
        muted={muted}
        playsInline
        preload="metadata"
        loop
      />
      {/* right rail */}
      <div className="absolute right-2 bottom-24 flex flex-col gap-4 items-center">
        <button
          aria-label="Like"
          className="rounded-full bg-black/40 p-3 backdrop-blur"
        >
          {/* ♥ */}
        </button>
        <button
          aria-label="Comment"
          className="rounded-full bg-black/40 p-3 backdrop-blur"
        >
          {/* 💬 */}
        </button>
        <button
          aria-label="Share"
          className="rounded-full bg-black/40 p-3 backdrop-blur"
        >
          {/* ↗ */}
        </button>
      </div>
      {/* bottom caption */}
      <div className="absolute left-3 right-3 bottom-4 text-ink.text">
        <div className="flex items-center gap-2 mb-2">
          {/* avatar + handle + follow */}
        </div>
        <p className="text-sm text-ink.sub line-clamp-2">{reel.caption}</p>
      </div>
      {/* mute toggle */}
      <button
        onClick={toggleMute}
        aria-label="Toggle sound"
        className="absolute top-4 right-4 bg-black/40 rounded-full p-2"
      >
        {muted ? "🔇" : "🔊"}
      </button>
    </div>
  );
}
