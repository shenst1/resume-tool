import {
  baseSkills,
  companyReferences,
  contact,
  educationFinanceScu,
  experience,
} from "@/data/base-profile";
import type { Resume, SkillCategory } from "@/types/resume";

const earninSkills: SkillCategory[] = [
  {
    label: "Frontend & product engineering",
    items: [
      "React, TypeScript, HTML/CSS; Next.js including App Router, SSR/SSG patterns, routing, and performance-minded data fetching",
      "Component architecture, state management, and design-system habits (Tailwind, Shadcn UI, Chakra adoption at scale)",
      "Accessibility and resilient UX for real users—not demoware",
    ],
  },
  {
    label: "Backend, APIs & data (with honest stack center of gravity)",
    items: [
      "Production backend depth in Node.js, PostgreSQL (Prisma), REST and GraphQL APIs, multi-tenant data modeling, and integrations",
      "Ruby on Rails services (Bloom GraphQL API) and pragmatic service boundaries under product pressure",
      "Caching, queues, webhooks, and background jobs (Inngest) where reliability matters",
      "Posting centers Python and Django: not my longest production résumé lane today—my transferable work is service design, ORM-level modeling, auth and security discipline, and operating APIs at scale; motivated to ramp Django where your Early Bets stack depends on it",
    ],
  },
  {
    label: "0-to-1 execution, quality & cloud",
    items: [
      "Founder-led product from zero to production (Plantfolio): ambiguity, scope trade-offs, and fast learning loops with real users",
      "Automated testing across the stack (Vitest, Cypress); code review, pairing, and standards that survive team growth",
      "AWS (S3, EC2), Vercel, CI/CD; metrics-, observability-, and operational-excellence-oriented delivery",
      "Cursor-class AI-assisted development in daily workflow",
    ],
  },
  baseSkills.find((c) => c.label === "AI/ML") ?? baseSkills[3],
];

export const earninSeniorFullstackResume: Resume = {
  slug: "earnin-senior-fullstack",
  createdAt: "2026-05-14",
  pageTitle: "Shenstone, Andrew - Application for Senior Full Stack Engineer @ EarnIn",
  homeListLabel: "EarnIn",
  target: {
    company: "EarnIn",
    role: "Senior Full Stack Engineer",
    teamOrFocus: "Early Bets — 0-to-1 initiatives",
  },
  contact,
  about: `Senior full-stack engineer with meaningful 0-to-1 ownership: I founded and built Plantfolio end to end on **Next.js**, **React Server Components**, **TypeScript**, and **PostgreSQL**, with pragmatic service boundaries—exactly the kind of ambiguous, high-leverage environment Early Bets describes. Before that I shipped B2C and B2B products at scale (Bloom.wine, Tilia payments tooling, agency-era high-traffic apps) where performance, security, and integrations are non-negotiable.

I partner tightly with product and design, set testing and CI habits that teams actually keep, and think in trade-offs (velocity vs. debt, scope vs. risk) rather than defaulting to the easiest ticket. Earned wage access sits at the intersection of consumer trust and regulated reality; I have adjacent muscle from payments-adjacent and commerce stacks plus a finance undergraduate background—useful lens when product decisions have compliance and behavior implications.

Your posting asks for Python and Django as a core backend lane. My deepest production services are Node and Rails-shaped APIs with strong Postgres discipline; I am direct about that gap and motivated to own Django services credibly where they anchor your architecture, while contributing immediately on **Next.js**, **React**, and full-stack standards org-wide.`,
  skills: earninSkills,
  experience,
  companyReferences,
  education: educationFinanceScu,
};
