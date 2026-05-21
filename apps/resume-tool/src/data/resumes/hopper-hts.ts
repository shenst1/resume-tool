import {
  baseSkills,
  companyReferences,
  contact,
  educationFinanceScu,
  experience,
} from "@/data/base-profile";
import type { Resume, SkillCategory } from "@/types/resume";

const hopperHtsSkills: SkillCategory[] = [
  {
    label: "React, TypeScript & modern web platform",
    items: [
      "React with hooks and component architecture; Next.js with SSR, RSC, and hydration-aware delivery (Plantfolio, Bloom admin still in broad production)",
      "TypeScript as default for recent products; performance work including code-splitting, lazy loading, caching, and pragmatic Lighthouse-oriented tuning",
      "Advanced CSS in practice: Tailwind CSS, Shadcn UI, Chakra UI (Tilia adoption lead); SCSS or CSS-in-JS house styles are a quick ramp where your repo standardizes them",
    ],
  },
  {
    label: "Tooling, data fetching & monorepos",
    items: [
      "React Query on Bloom and Tune; SWR and RSC patterns on Plantfolio—comfortable in the TanStack-style client and server boundary model",
      "Monorepos with pnpm and Turbo (Plantfolio); CircleCI and CI/CD habits; Vite-class tooling adoptable where teams standardize it",
    ],
  },
  {
    label: "Quality, accessibility & complex flows",
    items: [
      "Responsive, accessible UI; testing with Vitest and Cypress and judgment about what to test at unit vs integration vs E2E depth",
      "E-commerce and marketplace-style flows (Bloom on Shopify Plus, Tune automation, Plantfolio checkout); Stripe and payment-adjacent surfaces (Tilia)",
      "Multi-brand and integration-heavy UIs—Bloom served many winery clients from shared platform patterns; maps to white-label portal thinking",
    ],
  },
  {
    label: "Full-stack context (when the feature needs it)",
    items: [
      "Node.js services, PostgreSQL, Prisma, and API design on Plantfolio; GraphQL consumption and contribution at Bloom and Tilia—enough to own slices top to bottom when the team works that way",
    ],
  },
  baseSkills.find((c) => c.label === "AI-native product & workflow") ?? baseSkills[3],
];

export const hopperHtsResume: Resume = {
  slug: "hopper-hts",
  createdAt: "2026-05-15",
  pageTitle:
    "Shenstone, Andrew - Application for Senior Frontend / Full-Stack Engineer — HTS Stays & Packages @ Hopper",
  homeListLabel: "Hopper (HTS)",
  target: {
    company: "Hopper",
    role: "Senior Frontend / Full-Stack Engineer",
    teamOrFocus: "Hopper Technology Solutions — Stays & Packages (lodging & bundled travel commerce)",
  },
  contact,
  about: `Senior engineer with twelve years shipping React and TypeScript products across commerce, marketplaces, and a founder-led platform. I care about frontends that survive real scale: SSR-friendly Next.js stacks, disciplined data fetching, performance budgets, accessibility, and tests that protect the behaviors users rely on.

HTS as a configurable, multi-tenant travel commerce engine—and Stays & Packages in particular—is the kind of problem I want on my plate: search and booking flows, checkout that stays trustworthy across partner brands, and architecture that makes new portals repeatable instead of bespoke.

I am not an alumnus of Hopper or deep in airline PNRs; my transfer is Bloom-style multi-client delivery, Stripe-heavy and fintech-adjacent work (plus a finance undergraduate lens), and full-stack ownership on Plantfolio when features truly run top to bottom.`,
  skills: hopperHtsSkills,
  experience,
  companyReferences,
  education: educationFinanceScu,
};
