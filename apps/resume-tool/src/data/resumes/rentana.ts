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
    label: "Data & backend",
    items: [
      "PostgreSQL (complex schemas, performance-minded queries)",
      "ETL-style pipelines and third-party integrations",
      "API design; GraphQL in production (Rails GraphQL at Bloom)",
      "Async workflows (Inngest, webhooks, background jobs)",
      "Normalizing messy operational data at Bloom and Tune",
    ],
  },
  {
    label: "AI & analytics-ready product",
    items: [
      "Production AI features: vision, assistants, RAG-style retrieval (Plantfolio)",
      "OpenAI API and AI SDK; embeddings and search (Algolia + vectors)",
      "Metrics-minded shipping: reporting-heavy wine commerce features (Bloom)",
    ],
  },
  {
    label: "Full-stack & quality",
    items: [
      "TypeScript (static typing end-to-end)",
      "React, Next.js, React Native",
      "Vitest, Cypress; CI/CD discipline",
      "Collaboration with design on UX for operators (Bloom, Tilia)",
    ],
  },
  baseSkills.find((c) => c.label === "Cloud & Tools") ?? baseSkills[4],
];

export const rentanaResume: Resume = {
  slug: "rentana",
  pageTitle: "Shenstone, Andrew - Application for Software Engineer @ Rentana",
  target: {
    company: "Rentana",
    role: "Software Engineer",
    teamOrFocus: "Data pipelines, greenfield systems, AI-powered revenue platform",
  },
  contact,
  about:
    "Senior software engineer with 12+ years building full-stack products where trusted data, integrations, and clear UX decide outcomes. On Plantfolio I lived greenfield scope end to end: PostgreSQL with sophisticated modeling, background workflows, production AI features (vision, contextual assistants, retrieval-style workflows), and search over a large structured catalog. At Bloom I shipped GraphQL APIs consumed across apps and deep Shopify-adjacent commerce integrations with reporting surfaces operators relied on daily; at Tune I built ETL-style pipelines for marketplace automation. I partner tightly with product leadership out of habit (founder role today; senior IC before). I am motivated by Rentana's mix of normalized third-party data, analytical features, and ML-backed pricing intelligence. Multifamily operations are not my background yet; I pick up domain context quickly when problems are concrete. Hands-on training of ML models has been lighter than shipping LLM and retrieval features in production, something I would discuss plainly with your team.",
  skills: rentanaSkills,
  experience,
  companyReferences,
  education: educationFinanceScu,
};
