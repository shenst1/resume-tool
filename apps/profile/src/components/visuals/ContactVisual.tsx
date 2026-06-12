"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { VisualFrame } from "./VisualFrame";

const statusLines = [
  "status: open_to_opportunities",
  "location: bend_or · remote_ok",
  "stack: react · typescript · next.js",
  "mode: ai_native_engineering",
  "reply: usually_within_24h",
];

const channels = [
  { label: "Email", x: 72, y: 120 },
  { label: "LinkedIn", x: 248, y: 96 },
  { label: "GitHub", x: 260, y: 220 },
  { label: "Bend, OR", x: 88, y: 248 },
];

export function ContactVisual() {
  const reduceMotion = useReducedMotion();
  const [lineIndex, setLineIndex] = useState(0);

  useEffect(() => {
    if (reduceMotion) return;
    const timer = window.setInterval(() => {
      setLineIndex((current) => (current + 1) % statusLines.length);
    }, 2400);
    return () => window.clearInterval(timer);
  }, [reduceMotion]);

  return (
    <VisualFrame aspect="portrait" className="h-full min-h-[280px]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,color-mix(in_srgb,var(--accent)_18%,transparent),transparent_50%)]" />

      <svg
        aria-hidden="true"
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 320 400"
      >
        <defs>
          <linearGradient id="contact-wave" x1="0%" x2="100%" y1="0%" y2="0%">
            <stop offset="0%" stopColor="#7cb87a" stopOpacity="0" />
            <stop offset="50%" stopColor="#7cb87a" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#d4a574" stopOpacity="0" />
          </linearGradient>
        </defs>

        {[0, 1, 2].map((wave) => (
          <motion.path
            key={wave}
            animate={{
              d: [
                `M0 ${170 + wave * 28} C60 ${150 + wave * 28}, 120 ${190 + wave * 28}, 180 ${170 + wave * 28} S300 ${150 + wave * 28}, 320 ${170 + wave * 28}`,
                `M0 ${170 + wave * 28} C60 ${190 + wave * 28}, 120 ${150 + wave * 28}, 180 ${170 + wave * 28} S300 ${190 + wave * 28}, 320 ${170 + wave * 28}`,
                `M0 ${170 + wave * 28} C60 ${150 + wave * 28}, 120 ${190 + wave * 28}, 180 ${170 + wave * 28} S300 ${150 + wave * 28}, 320 ${170 + wave * 28}`,
              ],
              opacity: [0.25, 0.7, 0.25],
            }}
            fill="none"
            stroke="url(#contact-wave)"
            strokeWidth={wave === 1 ? 2 : 1}
            transition={{
              duration: 4 + wave,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: wave * 0.6,
            }}
          />
        ))}

        <motion.circle
          animate={{ r: [38, 52, 38], opacity: [0.12, 0.28, 0.12] }}
          cx="160"
          cy="185"
          fill="none"
          stroke="#7cb87a"
          strokeWidth="1"
          transition={{
            duration: 3.5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.circle
          animate={{ r: [54, 72, 54], opacity: [0.08, 0.18, 0.08] }}
          cx="160"
          cy="185"
          fill="none"
          stroke="#7cb87a"
          strokeWidth="1"
          transition={{
            duration: 4.5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 0.4,
          }}
        />

        {channels.map((channel, index) => (
          <g key={channel.label}>
            <motion.line
              animate={{ opacity: [0.15, 0.5, 0.15] }}
              stroke="#7cb87a"
              strokeDasharray="3 6"
              strokeWidth="1"
              transition={{
                duration: 2.5,
                repeat: Number.POSITIVE_INFINITY,
                delay: index * 0.3,
              }}
              x1="160"
              x2={channel.x}
              y1="185"
              y2={channel.y}
            />
            <motion.circle
              animate={{ scale: [1, 1.2, 1], opacity: [0.6, 1, 0.6] }}
              cx={channel.x}
              cy={channel.y}
              fill="#7cb87a"
              r="5"
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: index * 0.35,
              }}
            />
            <text
              className="fill-foreground/75 text-[10px] font-medium"
              textAnchor="middle"
              x={channel.x}
              y={channel.y + 18}
            >
              {channel.label}
            </text>
          </g>
        ))}

        <motion.circle
          animate={{ scale: [1, 1.08, 1] }}
          cx="160"
          cy="185"
          fill="#0c0f0d"
          r="22"
          stroke="#7cb87a"
          strokeWidth="1.5"
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.path
          animate={{ pathLength: [0.2, 1, 0.2] }}
          d="M148 185h24M160 173v24"
          fill="none"
          stroke="#d4a574"
          strokeLinecap="round"
          strokeWidth="2"
          transition={{
            duration: 2.8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </svg>

      <div className="absolute inset-x-0 bottom-0 border-t border-border/50 bg-background/70 p-5 backdrop-blur-md">
        <div className="mb-2 font-mono text-[10px] tracking-wider text-accent uppercase">
          open_channel
        </div>
        <div className="h-10 overflow-hidden font-mono text-xs text-muted">
          <AnimatePresence mode="wait">
            <motion.p
              key={statusLines[lineIndex]}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              initial={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.35 }}
            >
              <span className="text-accent">$</span> {statusLines[lineIndex]}
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                className="ml-1 inline-block h-3.5 w-1.5 translate-y-0.5 bg-accent"
                transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
              />
            </motion.p>
          </AnimatePresence>
        </div>
      </div>
    </VisualFrame>
  );
}
