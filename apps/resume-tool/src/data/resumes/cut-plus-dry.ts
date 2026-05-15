import { baseSkills, companyReferences, contact, experience } from "@/data/base-profile";
import type { Resume, SkillCategory } from "@/types/resume";

const cutPlusDrySkills: SkillCategory[] = [
  {
    label: "Product engineering & AI-accelerated delivery",
    items: [
      "React, TypeScript, and JavaScript at production SaaS scale",
      "Shipped AI-powered product experiences (vision, language models, embeddings, RAG-style workflows)",
      "Daily Cursor-class workflows; comfortable integrating AI-assisted coding into team practice responsibly",
      "Technical writing, clear user stories, and non-functional requirements (performance, scalability) treated as first-class",
    ],
  },
  {
    label: "Backend, data & integrations",
    items: [
      "Node.js and PostgreSQL (Prisma)—complex schemas, migrations, and pragmatic performance",
      "GraphQL in production (schema consumption, typed clients, multi-app sharing—Bloom, Tilia)",
      "Third-party APIs, webhooks, ETL-style and async jobs (Inngest); ERP-adjacent complexity at a patterns level",
      "Honest gap to calibrate in interview: posting lists Java, PHP, and MySQL heavily—deepest production work is TypeScript, Node, and Postgres; shipped Ruby on Rails (GraphQL APIs) and used to learning service stacks where the product already lives",
    ],
  },
  {
    label: "Cloud, reliability & collaboration",
    items: [
      "AWS (S3, EC2), Vercel; CI/CD (CircleCI; pnpm/Turbo monorepos)",
      "Automated testing (Vitest, Cypress); code review, pairing, and cross-functional work with product and design",
      "Defect triage, refactors, and technical debt managed without freezing roadmap",
    ],
  },
  baseSkills.find((c) => c.label === "Architecture & async") ?? baseSkills[3],
];

export const cutPlusDryResume: Resume = {
  slug: "cut-plus-dry",
  createdAt: "2026-05-14",
  pageTitle: "Shenstone, Andrew - Application for Senior Software Engineer @ Cut+Dry",
  homeListLabel: "Cut+Dry",
  target: {
    company: "Cut+Dry",
    role: "Senior Software Engineer",
    teamOrFocus: "Distributor, restaurant, and manufacturer-facing platform",
  },
  contact,
  about: `Senior software engineer with 12+ years building customer-facing B2B and B2C products where integrations, data quality, and performance all show up in revenue—not slide decks. I ship in **React** and **TypeScript** day to day, have production **GraphQL** across web and mobile surfaces, and run an **AWS**-backed stack with mature **CI/CD** and automated testing.

Cut+Dry’s bet—bringing foodservice distribution online with an AI-native way of building and a product that touches operators in the field—maps to how I work: **Cursor**-heavy development, **LLM**-backed features in real products, and ruthless focus on boring reliability (monitoring, refactors, clear stories) alongside new capability. My résumé is not centered on Java, PHP, or MySQL; if those languages own critical paths in your monolith or services, I would ramp deliberately alongside engineers who know those corners, while contributing immediately on React, APIs, cloud operations, and AI-assisted velocity org-wide.`,
  skills: cutPlusDrySkills,
  experience,
  companyReferences,
};
