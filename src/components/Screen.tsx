// src/features/feed/FeedPage.tsx
import type { PropsWithChildren } from "react";

export default function Screen({ children }: PropsWithChildren) {
  return (
    <div className="flex-1 w-full overflow-hidden flex-grow bg-red-500">
      {children}
    </div>
  );
}
