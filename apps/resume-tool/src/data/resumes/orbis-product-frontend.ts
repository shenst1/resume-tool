import {
  baseSkills,
  companyReferences,
  contact,
  educationFinanceScu,
  experience,
} from "@/data/base-profile";
import type { Resume, SkillCategory } from "@/types/resume";

const orbisSkills: SkillCategory[] = [
  {
    label: "Frontend",
    items: [
      "React, TypeScript, Next.js (App Router, RSC), HTML/CSS, responsive layouts",
      "Tailwind CSS and Shadcn UI; Chakra UI adoption at Tilia; component libraries and design-system habits with Figma-informed workflows",
      "Complex UIs: React Hook Form, Zustand, Framer Motion; performance-conscious data fetching",
    ],
  },
  {
    label: "Product & delivery",
    items: [
      "Founder-led Plantfolio: discovery through production, iteration with users, AI-powered features in approachable UX",
      "Cross-functional work with product and design; scope trade-offs and measurable outcomes",
      "Testing and quality (Vitest, Cypress); code review and pairing",
    ],
  },
  {
    label: "Backend & real-time context",
    items: [
      "Node.js, REST and GraphQL APIs (Bloom, Tilia); integrations and webhooks",
      "Async and event-driven patterns (Inngest, background jobs); WebSockets/SSE called out in postings are not my deepest specialty—I implement what the stack requires with clear contracts",
    ],
  },
  baseSkills.find((c) => c.label === "AI-native product & workflow") ?? baseSkills[3],
];

export const orbisProductFrontendResume: Resume = {
  slug: "orbis-product-frontend",
  createdAt: "2026-05-15",
  pageTitle: "Shenstone, Andrew - Application for Product (Front-End) Engineer @ Orbis",
  homeListLabel: "Orbis",
  target: {
    company: "Orbis",
    role: "Product (Front-End) Engineer",
    teamOrFocus: "Recruiter placement — confidential client, US remote",
  },
  contact,
  about: `Senior software engineer with strong front-end depth across React, TypeScript, Next.js, and Tailwind, plus full-stack context from Bloom.wine, Tilia, and founder-led Plantfolio. I focus on clear UX for complex flows, craft, and close work with product and design.

I am applying through Orbis for a front-end-leaning product engineer role: early-stage ownership of core UI, interactive surfaces, and collaboration with founders. That lines up with how I have shipped before—Plantfolio from zero and design-system adoption on larger teams.`,
  skills: orbisSkills,
  experience,
  companyReferences,
  education: educationFinanceScu,
};
