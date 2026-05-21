import { baseSkills, companyReferences, contact, experience } from "@/data/base-profile";
import type { Resume, SkillCategory } from "@/types/resume";

const finiteStateSkills: SkillCategory[] = [
  {
    label: "Full-stack & Postgres",
    items: [
      "TypeScript",
      "React",
      "Next.js (App Router, Server Components, API routes)",
      "Node.js",
      "PostgreSQL",
      "Neon (managed Postgres, production)",
      "Supabase (evaluated for Plantfolio; did not ship—comfortable ramping on Auth/RLS patterns)",
      "MongoDB (Plantfolio production before Postgres migration)",
      "Prisma",
    ],
  },
  {
    label: "AI-native engineering",
    items: [
      "Cursor IDE (top 1% user)",
      "OpenAI API & AI SDK",
      "Agent-assisted scaffolding, refactors, and schema/migration iteration",
      "Production LLM features: vision, RAG-style retrieval, workflows (Plantfolio)",
    ],
  },
  {
    label: "Security & platform",
    items: [
      "Authorization patterns: RLS, subscription tiers, Clerk",
      "KYC and identity-adjacent tooling (Tilia, payments platform)",
      "AWS (S3, EC2), Vercel",
      "CI/CD, Vitest, Cypress",
    ],
  },
  baseSkills[3],
];

export const finiteStateResume: Resume = {
  slug: "finite-state",
  pageTitle:
    "Shenstone, Andrew - Application for Senior Full-Stack Software Engineer (Next.js + Supabase + AI-Native) @ Finite State",
  target: {
    company: "Finite State",
    role: "Senior Full-Stack Software Engineer",
    teamOrFocus: "Next.js + Supabase + AI-Native",
  },
  contact,
  about:
    "Senior software engineer with 12+ years shipping full-stack TypeScript products, including a founder-led Next.js platform. On Plantfolio I shipped production on MongoDB for 1+ year, then migrated to PostgreSQL on Neon with Prisma—I explored Supabase but did not ship on it; today auth and access patterns run through Clerk with Postgres-centric modeling. That is close to your Next.js + Postgres + Supabase-shaped stack: strong Postgres discipline now, straightforward ramp on Supabase Auth/RLS where you use it. I use Cursor daily as core workflow, not novelty. At Tilia I contributed to KYC and identity-adjacent tooling in a regulated payments context. I would ramp on firmware and SBOM specifics alongside your security researchers while bringing application-layer and data-boundary rigor.",
  skills: finiteStateSkills,
  experience,
  companyReferences,
};
