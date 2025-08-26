// src/hooks/useHls.ts
import Hls from "hls.js";
import { useEffect } from "react";
export function useHls(
  videoRef: React.RefObject<HTMLVideoElement>,
  src?: string
) {
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !src) return;
    if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = src;
      return;
    }
    if (Hls.isSupported()) {
      const hls = new Hls({ maxBufferLength: 10 });
      hls.loadSource(src);
      hls.attachMedia(video);
      return () => hls.destroy();
    }
  }, [videoRef, src]);
}
