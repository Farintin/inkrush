import { useEffect } from "react";

export default function useVideoAutoplay(
  ref: React.RefObject<HTMLVideoElement | null>,
  active: boolean
) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (!active) {
      el.pause();
      el.currentTime = 0;
      return;
    }

    const play = async () => {
      try {
        el.muted = true; // ensure autoplay works
        el.playsInline = true; // mobile Safari fix
        await el.play();
      } catch {
        // Autoplay might be blocked, safe to ignore
      }
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          play();
        } else {
          el.pause();
        }
      },
      { threshold: 0.8 }
    );

    io.observe(el);

    return () => {
      io.disconnect();
      el.pause();
    };
  }, [ref, active]);
}
