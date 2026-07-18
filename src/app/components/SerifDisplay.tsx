import type { ReactNode } from "react";

type SerifDisplayProps = {
  children: ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3";
};

export function SerifDisplay({ children, className = "", as: Tag = "h2" }: SerifDisplayProps) {
  return (
    <Tag
      className={`font-serif tracking-tight ${className}`}
      style={{ fontFamily: "'Playfair Display', serif" }}
    >
      {children}
    </Tag>
  );
}
