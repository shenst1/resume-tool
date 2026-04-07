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
    label: "Frontend",
    items: [
      "TypeScript",
      "React",
      "Next.js (SSR, RSC, performance-minded delivery)",
      "Tailwind CSS",
      "Shadcn UI",
      "Hooks, component architecture, and render optimization",
      "Responsive & accessible UI",
    ],
  },
  {
    label: "Data fetching & tooling",
    items: [
      "React Query (Bloom, Tune), SWR, and Next.js server components (e.g. Plantfolio)",
      "Modern bundlers & monorepos (pnpm, Turbo)",
      "Design-token-friendly styling and component systems",
    ],
  },
  {
    label: "Testing & quality",
    items: ["Vitest", "Cypress", "Pragmatic unit, integration, and E2E coverage"],
  },
  {
    label: "Commerce & complex flows",
    items: [
      "E-commerce and marketplace-style workflows",
      "Travel-adjacent and booking-style product surfaces",
      "Stripe and payment-adjacent integrations",
      "Multi-brand and integration-heavy UIs",
    ],
  },
  {
    label: "Collaboration (IC)",
    items: [
      "Async-friendly technical writing & consensus building",
      "Pairing & code review (Bloom, Tilia)",
      "Roadmap input with product and business partners",
    ],
  },
  baseSkills[1],
  baseSkills[3],
  baseSkills[4],
];

export const hopperHtsResume: Resume = {
  slug: "hopper-hts",
  pageTitle:
    "Shenstone, Andrew - Application for Senior Frontend Engineer — HTS Stays & Packages @ Hopper",
  target: {
    company: "Hopper",
    role: "Senior Frontend Engineer",
    teamOrFocus: "HTS — Stays & Packages (Commerce)",
  },
  contact,
  about:
    "Senior engineer with 12+ years shipping React/TypeScript products across commerce, integrations, and complex operator workflows. I care about frontend architecture that scales—SSR-friendly Next.js stacks, performance (code-splitting, caching, pragmatic Lighthouse work), accessible responsive UI, and testable boundaries. I’ve built monorepo-backed products (pnpm/Turbo), mentored at Bloom and Tilia, and partnered tightly with product and design while owning features end-to-end when needed. Hopper Technology Solutions’ multi-tenant travel commerce engine maps to what I like: configurable partner portals, high-stakes checkout and search flows, and long-term maintainability—not one-off pages. My finance degree and fintech-leaning work (Tilia, Stripe-heavy flows) pair well with Hopper’s travel + fintech story; I’m excited to help Stays & Packages ship lodging and package experiences that stay fast and coherent across global partner brands.",
  skills: hopperHtsSkills,
  experience,
  companyReferences,
  education: educationFinanceScu,
};
