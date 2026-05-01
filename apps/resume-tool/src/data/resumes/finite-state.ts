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
      "Supabase (Auth, Row-Level Security, production experience)",
      "Neon (managed Postgres)",
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
    "Senior software engineer with 12+ years shipping full-stack TypeScript products, including a founder-led Next.js platform backed by PostgreSQL. On Plantfolio I lived the stack you are hiring for: production Supabase with Row-Level Security for tenant isolation, later migrated to Neon for managed Postgres—plus Prisma, complex relational modeling, and AI-accelerated delivery from schema work to shipped features. I use Cursor daily as core workflow, not novelty. At Tilia I contributed to KYC and identity-adjacent tooling in a regulated payments context. I am motivated by secure, data-centric systems and clear authz boundaries; I would ramp on firmware and SBOM specifics alongside your security researchers while bringing strong application-layer and Postgres discipline.",
  skills: finiteStateSkills,
  experience,
  companyReferences,
};
