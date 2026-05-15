import {
  baseSkills,
  companyReferences,
  contact,
  educationFinanceScu,
  experience,
} from "@/data/base-profile";
import type { Resume, SkillCategory } from "@/types/resume";

const neotaxSkills: SkillCategory[] = [
  {
    label: "TypeScript full stack",
    items: [
      "TypeScript end to end; Node.js services and application backends",
      "React and Next.js for customer-facing and internal UIs",
      "Prisma ORM and PostgreSQL—migrations, relational modeling, performance-aware SQL",
    ],
  },
  {
    label: "Data ingestion, async pipelines & integrations",
    items: [
      "ETL-style and event-driven workflows: webhooks, background jobs, Inngest, queue-like patterns in production",
      "Third-party APIs across payroll, commerce, payments, CMS, and bespoke vendor systems—reading docs, handling edge cases and partial failures",
      "GraphQL in production (Tilia, Bloom, agency)—bonus alignment per posting",
      "Schema design for multi-tenant and heterogeneous customer data",
    ],
  },
  {
    label: "Reliability, cloud & startup execution",
    items: [
      "Automated testing: Vitest, Cypress; code review and operational troubleshooting",
      "AWS (S3, EC2), Vercel; CI/CD with CircleCI, pnpm/Turbo monorepos",
      "Early-stage ownership: founder-led product (Plantfolio) plus venture-backed teams (Bloom, Tilia)",
    ],
  },
  baseSkills.find((c) => c.label === "AI/ML") ?? baseSkills[3],
];

export const neotaxSeniorFullstackResume: Resume = {
  slug: "neotax-senior-fullstack",
  createdAt: "2026-05-14",
  pageTitle: "Shenstone, Andrew - Application for Senior Full-Stack Software Engineer @ Neo.Tax",
  homeListLabel: "Neo.Tax",
  target: {
    company: "Neo.Tax",
    role: "Senior Full-Stack Software Engineer",
    teamOrFocus: "Platform — shared libraries, data models, providers, ingestion",
  },
  contact,
  about: `Senior full-stack engineer with 12+ years shipping **TypeScript**, **Node.js**, and **React** systems where **PostgreSQL**, careful data modeling, and integrations are the product. I’ve built and operated async, ingestion-heavy workflows (webhooks, background jobs, ETL-style pipelines) and many third-party connectors—exactly the “read the API docs, absorb the quirks, make the pipeline boringly reliable” muscle Platform needs.

Neo.Tax automates work finance teams used to outsource; I have a **finance** undergraduate background and care about auditability and traceability even when I’m not filing the return myself. Your posting asks for the ability to design and implement without leaning on AI—that’s my default: clarity of schema and flow first; **Cursor** and models are accelerators after the approach is sound, not a substitute for ownership.

R&D tax and capitalization rules are not my professional specialty yet; my transferable depth is platform plumbing at quality bar, cross-functional scoping with product and data stakeholders, and early-stage judgment from a founder-led product plus venture-backed SaaS.`,
  skills: neotaxSkills,
  experience,
  companyReferences,
  education: educationFinanceScu,
};
