import type { ComponentProps } from "@/types";
// import { Bell, MessageCircle } from "lucide-react";

export const Column = ({
  children,
  className,
  ...restProps
}: ComponentProps) => {
  className = `comp-Column flex items-center flex-1
  ${className}`;
  return (
    <div className={className} {...restProps}>
      {children}
    </div>
  );
};

export default function Header({
  children,
  className,
  ...restProps
}: ComponentProps) {
  return (
    <div
      className={`comp-Header flex flex-row items-stretch px-2 py-1 ${className}`}
      {...restProps}
    >
      {children}
    </div>
  );
}
