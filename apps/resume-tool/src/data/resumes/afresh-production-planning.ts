import { baseSkills, companyReferences, contact, experience } from "@/data/base-profile";
import type { Resume, SkillCategory } from "@/types/resume";

const afreshSkills: SkillCategory[] = [
  {
    label: "Full-stack product (TypeScript)",
    items: [
      "TypeScript & JavaScript at a professional level",
      "React, Next.js, React Native, Flutter (Dart)—production UIs across web and mobile",
      "API design, server-side shipping, and third-party integrations",
      "GraphQL APIs consumed across multiple clients (Rails GraphQL at Bloom)",
    ],
  },
  {
    label: "Data, workflows & operations software",
    items: [
      "PostgreSQL with complex modeling (Prisma); performance-minded queries",
      "ETL-style pipelines, webhooks, and background jobs (Inngest)",
      "B2B/B2C production systems where correctness and uptime matter",
    ],
  },
  {
    label: "Quality, observability & delivery",
    items: [
      "Automated testing (Vitest, Cypress) and high bar for regressions on teams",
      "CI/CD (CircleCI elsewhere in history; modern pipelines with pnpm/Turbo)",
      "Shipping with an observability mindset as systems scale",
    ],
  },
  baseSkills.find((c) => c.label === "AI/ML") ?? baseSkills[3],
];

export const afreshProductionPlanningResume: Resume = {
  slug: "afresh-production-planning",
  createdAt: "2026-05-14",
  pageTitle:
    "Shenstone, Andrew - Application for Senior Full-Stack Engineer, Production Planning @ Afresh",
  target: {
    company: "Afresh",
    role: "Senior Full-Stack Engineer - Production Planning",
    teamOrFocus: "Tools for fresh operations, stores, and the supply chain",
  },
  contact,
  about: `Senior engineer with 12+ years shipping software where UI, APIs, and data all face real operational pressure—commerce platforms, high-traffic consumer apps, and a founder-led product pairing AI features with PostgreSQL workflows and retail-facing tooling.

Production Planning fits how I like to work: turn complex recommendations into tools store teams trust, partner tightly across product and design, and protect quality with tests and instrumentation.

Python, DBT, and Databricks are not my deepest daily stack today; GraphQL and data-heavy admin surfaces are—I'm comfortable adopting your conventions wherever the role needs more than TypeScript and Node.`,
  skills: afreshSkills,
  experience,
  companyReferences,
};
