// src/features/feed/FeedPage.tsx
import type { ComponentProps } from "@/types";
type TabProps = ComponentProps;

export default function Tab({ children, className, ...restProps }: TabProps) {
  className = `comp-Tab h-full w-full overflow-auto
   bg-blue-500 
  ${className}`;
  return (
    <div className={className} {...restProps}>
      {children}
    </div>
  );
}
