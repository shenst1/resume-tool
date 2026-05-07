import { baseSkills, companyReferences, contact, experience } from "@/data/base-profile";
import type { Resume, SkillCategory } from "@/types/resume";

const dagsterSkills: SkillCategory[] = [
  {
    label: "Backend & data systems",
    items: [
      "PostgreSQL (complex schemas, performance-minded queries)",
      "API design & third-party integrations",
      "Node.js",
      "ETL-style pipelines & async workflows (Inngest, webhooks, jobs)",
      "GraphQL APIs consumed across clients (Rails GraphQL at Bloom)",
    ],
  },
  {
    label: "Platform & delivery",
    items: [
      "Monorepos (pnpm, Turbo); scalable module boundaries",
      "CI/CD, automated testing (Vitest, Cypress)",
      "AWS (S3, EC2); observability-minded shipping",
      "High-traffic B2B/B2C production systems",
    ],
  },
  {
    label: "Product engineering (TypeScript stack)",
    items: [
      "TypeScript",
      "React",
      "Next.js",
      "Prisma",
      "Stripe, auth & multi-tenant patterns (Clerk, Supabase RLS)",
    ],
  },
  baseSkills.find((c) => c.label === "AI/ML") ?? baseSkills[3],
];

export const dagsterPlatformResume: Resume = {
  slug: "dagster-platform",
  pageTitle:
    "Shenstone, Andrew - Application for Software Engineer, Platform @ Dagster Labs",
  target: {
    company: "Dagster Labs",
    role: "Software Engineer, Platform",
    teamOrFocus: "Platform API & Dagster+ foundations",
  },
  contact,
  about:
    "Senior software engineer with 12+ years shipping production systems where reliability, APIs, and data shape the product: B2B SaaS platforms, commerce integrations at scale, and a founder-led application on PostgreSQL with sophisticated modeling and background workflows. I enjoy the builder side of platform work—design, implementation, and refinement—not ticket-chasing ops for its own sake—and I raise quality through reviews, tests, and clear interfaces. Dagster's stack centers Python while valuing TypeScript, React, and GraphQL across the product; Python is not my primary résumé language today, but I am motivated to ramp where your codebase demands it and to contribute immediately on API contracts, Postgres discipline, cross-functional delivery, and pragmatic scalability.",
  skills: dagsterSkills,
  experience,
  companyReferences,
};
