"use client";

import { motion, useReducedMotion } from "framer-motion";
import { VisualFrame } from "./VisualFrame";

export function FintechPaymentsVisual() {
  const reduceMotion = useReducedMotion();

  return (
    <VisualFrame
      aspect="video"
      className="bg-[linear-gradient(145deg,#0a1218_0%,#0c0f0d_45%,#101a14_100%)]"
    >
      <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(color-mix(in_srgb,var(--foreground)_8%,transparent)_1px,transparent_1px),linear-gradient(90deg,color-mix(in_srgb,var(--foreground)_8%,transparent)_1px,transparent_1px)] [background-size:28px_28px]" />

      <motion.div
        animate={reduceMotion ? undefined : { opacity: [0.2, 0.45, 0.2] }}
        className="absolute top-0 right-0 h-40 w-56 rounded-full bg-sky-500/15 blur-3xl"
        transition={{
          duration: 7,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        animate={reduceMotion ? undefined : { opacity: [0.15, 0.35, 0.15] }}
        className="absolute bottom-0 left-0 h-36 w-48 rounded-full bg-emerald-500/10 blur-3xl"
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 0.8,
        }}
      />

      <div className="relative flex h-full flex-col items-center justify-center px-8 text-center">
        <p className="font-mono text-[10px] tracking-[0.28em] text-sky-300/80 uppercase">
          Fintech · Payments
        </p>
        <p className="mt-3 font-display text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
          Digital payments platform
        </p>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted">
          KYC, identity tooling, and platform APIs for regulated money movement
        </p>
        <div className="mt-5 flex flex-wrap justify-center gap-2">
          {["KYC", "GraphQL", "Risk tooling"].map((tag, index) => (
            <motion.span
              key={tag}
              animate={reduceMotion ? undefined : { opacity: [0.55, 1, 0.55] }}
              className="rounded-full border border-border/80 bg-background/50 px-3 py-1 font-mono text-[10px] text-foreground/75"
              transition={{
                duration: 2.4,
                repeat: Number.POSITIVE_INFINITY,
                delay: index * 0.35,
              }}
            >
              {tag}
            </motion.span>
          ))}
        </div>
      </div>
    </VisualFrame>
  );
}
