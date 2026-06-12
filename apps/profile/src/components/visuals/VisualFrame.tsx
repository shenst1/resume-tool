import type { ReactNode } from "react";

type VisualFrameProps = {
  children: ReactNode;
  className?: string;
  aspect?: "portrait" | "square" | "video";
};

const aspectClasses = {
  portrait: "aspect-[4/5]",
  square: "aspect-square",
  video: "aspect-video",
};

export function VisualFrame({
  children,
  className = "",
  aspect = "portrait",
}: VisualFrameProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-border/80 bg-surface ring-1 ring-border/40 ${aspectClasses[aspect]} ${className}`}
    >
      {children}
    </div>
  );
}
