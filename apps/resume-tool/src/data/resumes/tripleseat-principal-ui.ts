import { baseSkills, companyReferences, contact, experience } from "@/data/base-profile";
import type { Resume, SkillCategory } from "@/types/resume";

const tripleseatSkills: SkillCategory[] = [
  {
    label: "UI platform & modern React",
    items: [
      "React 18 production depth; React 19 upgrades are a normal next step—not a blocker—for a consolidation effort like yours",
      "TypeScript-first applications",
      "Tailwind CSS; Shadcn UI in production (not prototype-only); Radix primitives through shadcn and direct where needed",
      "Design tokens, theming, composition patterns, accessibility-minded components",
      "Performance budgets and rendering discipline on SaaS-scale UIs",
    ],
  },
  {
    label: "AI-native UX & engineering workflows",
    items: [
      "Production AI-assisted UX: vision and language models, embeddings, RAG-style flows, conversational surfaces",
      "Streaming and async UI patterns for model output",
      "Daily use of Cursor-class tooling; comfortable championing AI-accelerated SDLC with guardrails",
      "Partnering with product and design on patterns that feel native, not bolted on",
    ],
  },
  {
    label: "Testing, migration & org-scale standards",
    items: [
      "Component testing and E2E (Vitest, Cypress); ready to help define visual regression as part of a single standard",
      "Large front-end migrations without freezing product (e.g., spearheaded Chakra UI adoption on a constrained timeline)",
      "Legacy stack modernization experience (e.g., Webpack/build debt, dual-codebase agency contexts—not Kendo specifically, but the playbook transfers)",
      "Mentorship through pairing, code review, and crisp reviews with design leadership",
    ],
  },
  baseSkills.find((c) => c.label === "Architecture & async") ?? baseSkills[3],
];

export const tripleseatPrincipalUiResume: Resume = {
  slug: "tripleseat-principal-ui",
  createdAt: "2026-05-14",
  pageTitle:
    "Shenstone, Andrew - Application for Principal Engineer (UI Platform & AI-Native UX) @ Tripleseat",
  homeListLabel: "Tripleseat",
  target: {
    company: "Tripleseat",
    role: "Principal Engineer",
    teamOrFocus: "UI platform — shadcn, Radix, Tailwind, AI-native product UX",
  },
  contact,
  about: `I am a senior front-end–leaning full-stack engineer with 12+ years shipping production UIs on SaaS and high-traffic products—including **Next.js**, **Tailwind CSS**, reusable component patterns, and **Shadcn UI** on a complex app, plus **TypeScript** throughout. I have shipped AI-assisted product UX users touch every day (vision, chat, embeddings, background jobs), led adoption of a design system on a deadline (Chakra at Tilia), owned cohesive UI architecture on multi-surface products, and modernized front-end stacks where legacy and new had to coexist.

Tripleseat’s mandate maps cleanly to how I like to work: own the component system on top of **Radix** and **shadcn/ui**, align tokens and accessibility baselines, and pair with design and product so AI surfaces—streaming, tooling, human-in-the-loop—feel first-class. You are on **React 18** today; moving to **React 19** is a natural part of that modernization, and I am comfortable planning and landing that upgrade as part of a large Kendo-to-**shadcn/ui** migration without treating the framework step as a separate science project.

Hospitality-specific domain depth is not my headline credential—your bonus list calls that out—but B2B workflow software, busy operational users, and integrate-heavy products are familiar territory. What I have not shipped yet is a dedicated UI MCP server for an agentic internal toolchain; I would treat that as a focused collaboration with platform and architecture, alongside clear standards so every “AI bet” lands cleanly in the product.`,
  skills: tripleseatSkills,
  experience,
  companyReferences,
};
