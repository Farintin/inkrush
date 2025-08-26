// src/features/feed/FeedPage.tsx
import type { PropsWithChildren, CSSProperties } from "react";

type TabProps = PropsWithChildren<{
  className: string;
  style?: CSSProperties;
}>;

export default function Tab({ children, className, ...restProps }: TabProps) {
  className = `h-full w-full bg-blue-500 ${className}`;
  return (
    <div className={className} {...restProps}>
      {children}
    </div>
  );
}
