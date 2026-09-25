import type * as React from "react";

import { cn } from "@/lib/utils";

interface MarqueeProps extends React.ComponentPropsWithoutRef<"div"> {
  children: React.ReactNode;
  className?: string;
  duration?: number;
  delay?: number;
  gap?: number;
  pauseOnHover?: boolean;
  repeat?: number;
  reverse?: boolean;
  vertical?: boolean;
}

const MARQUEE_COPY_IDS = [
  "copy-1",
  "copy-2",
  "copy-3",
  "copy-4",
  "copy-5",
  "copy-6",
  "copy-7",
  "copy-8",
] as const;

function Marquee(props: MarqueeProps) {
  const {
    children,
    className,
    duration = 40,
    delay = 0,
    gap = 1,
    pauseOnHover = false,
    repeat = 4,
    reverse = false,
    vertical = false,
    ...rest
  } = props;

  return (
    <div
      style={
        {
          "--marquee-duration": `${duration}s`,
          "--marquee-delay": `${delay}s`,
          "--marquee-gap": `${gap}rem`,
        } as React.CSSProperties
      }
      className={cn(
        "group flex gap-(--marquee-gap) overflow-hidden p-3",
        {
          "flex-row": !vertical,
          "flex-col": vertical,
        },
        className,
      )}
      {...rest}
    >
      {MARQUEE_COPY_IDS.slice(0, repeat).map((copyId) => (
        <div
          key={copyId}
          className={cn(
            "flex shrink-0 justify-around gap-(--marquee-gap) [animation-delay:var(--marquee-delay)]",
            {
              "animate-marquee-horizontal flex-row": !vertical,
              "animate-marquee-vertical flex-col": vertical,
              "group-hover:paused": pauseOnHover,
              "direction-[reverse]": reverse,
            },
          )}
        >
          {children}
        </div>
      ))}
    </div>
  );
}

export { Marquee, type MarqueeProps };
