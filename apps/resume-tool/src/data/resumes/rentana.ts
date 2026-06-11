import {
  baseSkills,
  companyReferences,
  contact,
  educationFinanceScu,
  experience,
} from "@/data/base-profile";
import type { Resume, SkillCategory } from "@/types/resume";

const rentanaSkills: SkillCategory[] = [
  {
    label: "Full stack (posting)",
    items: [
      "TypeScript and React in production (Next.js, SPAs, React Native history)",
      "PostgreSQL (complex schemas, performance-minded queries)",
      "GraphQL APIs in production (Rails GraphQL at Bloom)",
      "Unit, integration, and E2E testing (Vitest, Cypress); CI/CD discipline",
    ],
  },
  {
    label: "Data & pipelines",
    items: [
      "ETL-style pipelines and third-party integrations",
      "Normalizing messy operational data at Bloom and Tune",
      "Async workflows (Inngest, webhooks, background jobs)",
      "Metrics-minded shipping: reporting-heavy commerce features (Bloom)",
    ],
  },
  {
    label: "AI & analytics-ready product",
    items: [
      "Production AI features: vision, assistants, RAG-style retrieval (Plantfolio)",
      "OpenAI API and AI SDK; embeddings and search (Algolia + vectors)",
      "Data security and integrity habits from regulated commerce workflows",
    ],
  },
  baseSkills.find((c) => c.label === "Cloud & Tools") ?? baseSkills[4],
];

export const rentanaResume: Resume = {
  slug: "rentana",
  createdAt: "2026-06-10",
  pageTitle:
    "Shenstone, Andrew - Application for Full-Stack Software Engineer @ Rentana",
  target: {
    company: "Rentana",
    role: "Full-Stack Software Engineer",
    teamOrFocus:
      "Greenfield data systems, pipelines, AI-powered revenue platform; remote (USA)",
  },
  contact,
  about: `Senior full-stack engineer with 12+ years building products where trusted data, integrations, and clear operator UX decide outcomes. On Plantfolio I owned greenfield scope end to end: **PostgreSQL**, background workflows, production AI features, and search over a large structured catalog. At Bloom I shipped **GraphQL** APIs and commerce integrations with reporting surfaces operators relied on daily; at Tune I built ETL-style pipelines for marketplace automation.

Rentana's mix of normalized third-party data, analytical features, and ML-backed pricing intelligence is the kind of problem I want. I partner tightly with product leadership out of habit (founder today; senior IC before) and I have shipped **TypeScript** and **React** stacks with unit, integration, and E2E test discipline across front and back.

Multifamily operations are not my background yet; I pick up domain context quickly when problems are concrete. Hands-on training of classical ML models has been lighter than shipping LLM and retrieval features in production; I would discuss that plainly with your team.`,
  skills: rentanaSkills,
  experience,
  companyReferences,
  education: educationFinanceScu,
  outreachEmail: {
    label: "Technical recruiter (after applying; personalize [First name])",
    subject: "Full-Stack Software Engineer application / Andrew Shenstone",
    body: `Hey [First name],

I recently applied for Full-Stack Software Engineer at Rentana through your job portal. Same resume attached here.

I'm writing to let you know ⛔️🤖 I'm not a robot and I'm genuinely interested in whether I'm the right fit. Data pipelines and React/TypeScript full-stack work are where I have shipped most, and I'd love to get a conversation started if you're the right person to talk to.

Andrew`,
  },
};
