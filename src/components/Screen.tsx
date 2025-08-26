// src/features/feed/FeedPage.tsx
import type { PropsWithChildren } from "react";

export default function Screen({ children }: PropsWithChildren) {
  return (
    <div className="h-full w-full bg-ink.bg overflow-hidden flex-grow bg-red-500">
      {children}
    </div>
  );
}
