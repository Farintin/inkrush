// src/features/feed/FeedPage.tsx
import { useQuery } from "@tanstack/react-query";
import { useSwipeable } from "react-swipeable";
import { useState, useEffect } from "react";
import ReelCard from "@/components/ReelCard/ReelCard";
import { getFeed } from "@/services/api";
import Tab from "@/components/Tab";

export default function FeedPage({
  mode = "feed",
  reelId,
}: {
  mode?: "feed" | "single";
  reelId?: string;
}) {
  const [idx, setIdx] = useState(0);
  const { data } = useQuery({
    queryKey: ["feed", mode, reelId],
    queryFn: () => getFeed(),
  });
  const items = data ?? [];

  const swipe = useSwipeable({
    onSwipedUp: () => setIdx((i) => Math.min(i + 1, items.length - 1)),
    onSwipedDown: () => setIdx((i) => Math.max(i - 1, 0)),
    trackTouch: true,
    preventScrollOnSwipe: true,
  });

  useEffect(() => {
    // prefetch next two videos’ metadata
    // (actual prefetch via React Query if next page exists)
  }, [idx]);

  if (!items.length)
    return <div className="h-dvh grid place-items-center">Loading…</div>;

  return (
    <Tab {...swipe} className="bg-ink.bg overflow-hidden">
      {items.map((item, i) => (
        <div
          key={item.id}
          className="absolute inset-0 transition-transform duration-300"
          style={{ transform: `translateY(${(i - idx) * 100}%)` }}
        >
          <ReelCard reel={item} active={i === idx} />
        </div>
      ))}
    </Tab>
  );
}
