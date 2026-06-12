"use client";

import { motion, useReducedMotion } from "framer-motion";
import { VisualFrame } from "./VisualFrame";

const orbitNodes = [
  { label: "Product", angle: 0 },
  { label: "React", angle: 72 },
  { label: "AI", angle: 144 },
  { label: "APIs", angle: 216 },
  { label: "Ship", angle: 288 },
];

const innerNodes = [
  { label: "Design", angle: 36 },
  { label: "Tests", angle: 180 },
  { label: "Data", angle: 324 },
];

function polarToCartesian(angle: number, radius: number) {
  const rad = ((angle - 90) * Math.PI) / 180;
  return {
    x: 160 + radius * Math.cos(rad),
    y: 200 + radius * Math.sin(rad),
  };
}

export function HeroVisual() {
  const reduceMotion = useReducedMotion();

  return (
    <VisualFrame
      aspect="portrait"
      className="mx-auto w-full max-w-sm shadow-2xl shadow-black/40"
    >
      <div className="absolute inset-0">
        <motion.div
          animate={reduceMotion ? undefined : { opacity: [0.35, 0.55, 0.35] }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,color-mix(in_srgb,var(--warm)_20%,transparent),transparent_55%)]"
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          animate={
            reduceMotion
              ? undefined
              : { opacity: [0.4, 0.7, 0.4], scale: [1, 1.04, 1] }
          }
          className="absolute -top-10 -right-10 h-48 w-48 rounded-full bg-accent/20 blur-3xl"
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          animate={
            reduceMotion
              ? undefined
              : { opacity: [0.3, 0.55, 0.3], scale: [1, 1.08, 1] }
          }
          className="absolute -bottom-8 -left-8 h-40 w-40 rounded-full bg-warm/15 blur-3xl"
          transition={{
            duration: 7,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_38%,color-mix(in_srgb,var(--accent)_16%,transparent),transparent_62%)]" />

        <svg
          aria-hidden="true"
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 320 400"
        >
          <defs>
            <linearGradient id="hero-line" x1="0%" x2="100%" y1="0%" y2="100%">
              <stop offset="0%" stopColor="#7cb87a" stopOpacity="0.15" />
              <stop offset="50%" stopColor="#7cb87a" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#d4a574" stopOpacity="0.4" />
            </linearGradient>
            <filter id="hero-glow">
              <feGaussianBlur result="blur" stdDeviation="3" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {[92, 118, 144].map((radius, index) => (
            <motion.circle
              key={radius}
              animate={{ rotate: index % 2 === 0 ? 360 : -360 }}
              cx="160"
              cy="200"
              fill="none"
              r={radius}
              stroke="url(#hero-line)"
              strokeDasharray="4 10"
              strokeWidth="1"
              style={{ originX: "160px", originY: "200px" }}
              transition={{
                duration: 28 + index * 8,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            />
          ))}

          {orbitNodes.map((node, index) => {
            const { x, y } = polarToCartesian(node.angle, 118);
            return (
              <g key={node.label}>
                <motion.line
                  animate={{ opacity: [0.2, 0.55, 0.2] }}
                  stroke="url(#hero-line)"
                  strokeWidth="1"
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: index * 0.35,
                  }}
                  x1="160"
                  x2={x}
                  y1="200"
                  y2={y}
                />
                <motion.circle
                  animate={{ scale: [1, 1.25, 1], opacity: [0.7, 1, 0.7] }}
                  cx={x}
                  cy={y}
                  fill="#7cb87a"
                  filter="url(#hero-glow)"
                  r="4"
                  transition={{
                    duration: 2.4,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: index * 0.25,
                  }}
                />
                <text
                  className="fill-foreground/80 text-[10px] font-medium"
                  textAnchor="middle"
                  x={x}
                  y={y + 18}
                >
                  {node.label}
                </text>
              </g>
            );
          })}

          {innerNodes.map((node, index) => {
            const { x, y } = polarToCartesian(node.angle, 72);
            return (
              <g key={node.label}>
                <motion.circle
                  animate={{ opacity: [0.35, 0.9, 0.35] }}
                  cx={x}
                  cy={y}
                  fill="#d4a574"
                  r="3"
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: index * 0.4,
                  }}
                />
                <text
                  className="fill-muted text-[9px]"
                  textAnchor="middle"
                  x={x}
                  y={y + 14}
                >
                  {node.label}
                </text>
              </g>
            );
          })}

          <motion.g
            animate={{ scale: [1, 1.04, 1] }}
            filter="url(#hero-glow)"
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            <circle
              cx="160"
              cy="200"
              fill="#0c0f0d"
              r="34"
              stroke="#2a332c"
              strokeWidth="1"
            />
            <path
              d="M160 178c0 0-.9 2.8-.9 4.7a2.7 2.7 0 0 0 .9 2.2v-6.9Z"
              fill="#7cb87a"
            />
            <path
              d="M160 178c0 0 .9 2.8.9 4.7a2.7 2.7 0 0 1-.9 2.2v-6.9Z"
              fill="#7cb87a"
            />
            <path
              d="M150.5 186.5c0 0 1.6 1.3 2.7 2.1-.8.7-1.4 1.5-1.8 2.5-.4 1.1-.5 2.2-.5 3.5h1.6c.1-1.3.5-2.5 1.4-3.5-1.4-1-3.4-2.6-3.4-4.6Z"
              fill="#7cb87a"
            />
            <path
              d="M169.5 186.5c0 0-1.6 1.3-2.7 2.1.8.7 1.4 1.5 1.8 2.5.4 1.1.5 2.2.5 3.5h-1.6c-.1-1.3-.5-2.5-1.4-3.5 1.4-1 3.4-2.6 3.4-4.6Z"
              fill="#7cb87a"
            />
            <path
              d="M160 188.5v4.8l-2.1 3.5h4.2l-2.1-3.5v-4.8Z"
              fill="#7cb87a"
            />
            <circle cx="160" cy="188.3" fill="#d4a574" r="0.9" />
          </motion.g>
        </svg>

        <div className="absolute inset-x-0 bottom-0 border-t border-border/50 bg-background/55 px-5 py-4 backdrop-blur-sm">
          <div className="flex items-center justify-between text-[11px] tracking-wide text-muted uppercase">
            <span>Discovery</span>
            <motion.span
              animate={{ opacity: [0.4, 1, 0.4] }}
              className="text-accent"
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              →
            </motion.span>
            <span>Build</span>
            <motion.span
              animate={{ opacity: [0.4, 1, 0.4] }}
              className="text-accent"
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: 0.5,
              }}
            >
              →
            </motion.span>
            <span>Ship</span>
          </div>
        </div>
      </div>
    </VisualFrame>
  );
}
