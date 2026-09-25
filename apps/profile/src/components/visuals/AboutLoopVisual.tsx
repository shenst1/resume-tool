"use client";

import { motion, useReducedMotion } from "framer-motion";
import { VisualFrame } from "./VisualFrame";

const center = { x: 160, y: 156 };
const orbitRadius = 92;

const stages = [
  { label: "Discover", angle: 270 },
  { label: "Build", angle: 30 },
  { label: "Ship", angle: 150 },
];

function polar(angle: number, radius: number) {
  const rad = (angle * Math.PI) / 180;
  return {
    x: center.x + radius * Math.cos(rad),
    y: center.y + radius * Math.sin(rad),
  };
}

export function AboutLoopVisual() {
  const reduceMotion = useReducedMotion();

  return (
    <VisualFrame
      aspect="square"
      className="mx-auto w-full max-w-[280px] shadow-2xl shadow-black/40"
    >
      <div className="absolute inset-0">
        <motion.div
          animate={reduceMotion ? undefined : { opacity: [0.35, 0.6, 0.35] }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_50%_46%,color-mix(in_srgb,var(--accent)_18%,transparent),transparent_62%)]"
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
              : { opacity: [0.25, 0.5, 0.25], scale: [1, 1.06, 1] }
          }
          className="absolute top-6 right-4 h-28 w-28 rounded-full bg-accent/20 blur-3xl"
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
              : { opacity: [0.2, 0.4, 0.2], scale: [1, 1.08, 1] }
          }
          className="absolute bottom-8 left-2 h-24 w-24 rounded-full bg-warm/15 blur-3xl"
          transition={{
            duration: 7,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        <svg
          aria-hidden="true"
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 320 320"
        >
          <defs>
            <linearGradient id="about-loop" x1="0%" x2="100%" y1="0%" y2="100%">
              <stop offset="0%" stopColor="#7cb87a" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#7cb87a" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#d4a574" stopOpacity="0.45" />
            </linearGradient>
            <filter id="about-glow">
              <feGaussianBlur result="blur" stdDeviation="2.5" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {[68, 92, 116].map((radius, index) => (
            <motion.circle
              key={radius}
              animate={
                reduceMotion
                  ? undefined
                  : { rotate: index % 2 === 0 ? 360 : -360 }
              }
              cx={center.x}
              cy={center.y}
              fill="none"
              r={radius}
              stroke="url(#about-loop)"
              strokeDasharray={index === 1 ? "2 8" : "4 10"}
              strokeWidth="1"
              style={{ originX: `${center.x}px`, originY: `${center.y}px` }}
              transition={{
                duration: 26 + index * 8,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            />
          ))}

          {stages.map((stage, index) => {
            const point = polar(stage.angle, orbitRadius);
            const label = polar(stage.angle, orbitRadius + 28);
            return (
              <g key={stage.label}>
                <motion.line
                  animate={
                    reduceMotion ? undefined : { opacity: [0.2, 0.55, 0.2] }
                  }
                  stroke="url(#about-loop)"
                  strokeWidth="1"
                  transition={{
                    duration: 3.2,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: index * 0.4,
                  }}
                  x1={center.x}
                  x2={point.x}
                  y1={center.y}
                  y2={point.y}
                />
                <motion.circle
                  animate={
                    reduceMotion
                      ? undefined
                      : { scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }
                  }
                  cx={point.x}
                  cy={point.y}
                  fill={index === 1 ? "#d4a574" : "#7cb87a"}
                  filter="url(#about-glow)"
                  r="4.5"
                  style={{ originX: `${point.x}px`, originY: `${point.y}px` }}
                  transition={{
                    duration: 2.4,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: index * 0.35,
                  }}
                />
                <text
                  className="fill-foreground/80 text-[11px] font-medium"
                  textAnchor="middle"
                  x={label.x}
                  y={label.y}
                >
                  {stage.label}
                </text>
              </g>
            );
          })}

          <motion.g
            animate={reduceMotion ? undefined : { rotate: 360 }}
            style={{ originX: `${center.x}px`, originY: `${center.y}px` }}
            transition={{
              duration: 9,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          >
            <circle
              cx={center.x}
              cy={center.y - orbitRadius}
              fill="#e8ebe6"
              filter="url(#about-glow)"
              r="3.5"
            />
          </motion.g>

          <g filter="url(#about-glow)">
            <circle
              cx={center.x}
              cy={center.y}
              fill="#0c0f0d"
              r="28"
              stroke="#2a332c"
              strokeWidth="1"
            />
            <path
              d="M160 138c0 0-.8 2.4-.8 4a2.3 2.3 0 0 0 .8 1.9v-5.9Z"
              fill="#7cb87a"
            />
            <path
              d="M160 138c0 0 .8 2.4.8 4a2.3 2.3 0 0 1-.8 1.9v-5.9Z"
              fill="#7cb87a"
            />
            <path
              d="M151.8 145.2c0 0 1.4 1.1 2.3 1.8-.7.6-1.2 1.3-1.5 2.1-.3.9-.4 1.9-.4 3h1.4c.1-1.1.4-2.1 1.2-2.9-1.2-.8-2.9-2.2-2.9-3.9Z"
              fill="#7cb87a"
            />
            <path
              d="M168.2 145.2c0 0-1.4 1.1-2.3 1.8.7.6 1.2 1.3 1.5 2.1.3.9.4 1.9.4 3h-1.4c-.1-1.1-.4-2.1-1.2-2.9 1.2-.8 2.9-2.2 2.9-3.9Z"
              fill="#7cb87a"
            />
            <path d="M160 146.8v4.1l-1.8 3h3.6l-1.8-3v-4.1Z" fill="#7cb87a" />
            <circle cx="160" cy="146.6" fill="#d4a574" r="0.8" />
          </g>
        </svg>
      </div>
    </VisualFrame>
  );
}
