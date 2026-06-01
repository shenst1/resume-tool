import {
  baseSkills,
  companyReferences,
  contact,
  educationFinanceScu,
  experience,
} from "@/data/base-profile";
import type { Resume, SkillCategory } from "@/types/resume";

const topstepSeniorFullstackSkills: SkillCategory[] = [
  {
    label: "Full stack (posting)",
    items: [
      "TypeScript across frontend and backend: React, Next.js, Node.js services, and API design in production",
      "GraphQL and REST in production (Bloom, Tilia, agency work); typed clients and pragmatic schema boundaries",
      "PostgreSQL with Prisma: schema design, migrations, indexing discipline, and MongoDB-to-Postgres migration on Plantfolio",
      "Cloud-native delivery on Vercel/AWS patterns; CI/CD, safe rollouts, and production debugging habits",
    ],
  },
  {
    label: "Payments, async & distributed patterns",
    items: [
      "Stripe subscriptions and checkout lifecycle in production (Plantfolio); payments/KYC-adjacent tooling at Tilia",
      "Event-style workflows: Inngest, webhooks, background jobs; care for partial failure, idempotency, and reconciliation",
      "High-stakes commerce integrations (Bloom Shopify Plus); operator tooling when money movement must stay correct",
      "SQL Server and exchange-grade low-latency trading stacks are not my headline; transfer is Postgres, async discipline, and finance B.S.",
    ],
  },
  {
    label: "Quality, observability & ownership",
    items: [
      "Automated testing in production norms (Vitest, Cypress at Plantfolio; strong coverage culture at Tilia)",
      "Metrics, logging, and incident-minded ownership from agency scale through founder product delivery",
      "Cross-team collaboration on platform patterns, code review, and raising engineering standards without direct reports",
    ],
  },
  baseSkills.find((c) => c.label === "Architecture & async") ?? baseSkills[3],
];

export const topstepSeniorFullstackResume: Resume = {
  slug: "topstep-senior-fullstack",
  createdAt: "2026-06-01",
  pageTitle:
    "Shenstone, Andrew - Application for Senior Full Stack Engineer @ Topstep",
  homeListLabel: "Topstep",
  target: {
    company: "Topstep",
    role: "Senior Full Stack Engineer",
    teamOrFocus:
      "Payments and purchasing platform; distributed systems for trader experience; remote to hybrid",
  },
  contact,
  about: `Senior full-stack engineer with 12+ years shipping production systems on **TypeScript**, **React**, **Next.js**, **GraphQL**, **REST**, and **PostgreSQL**—the stack this role centers on. I like backbone work: APIs other teams depend on, purchase and subscription flows that stay correct under load, and event-driven patterns (webhooks, background jobs, Inngest) where eventual consistency and race conditions actually matter.

Topstep’s payments and purchasing platform maps to work I have done: **Stripe** lifecycle on Plantfolio, payments and KYC-adjacent tooling at Tilia, and commerce integrations at Bloom where reliability and operator clarity were non-negotiable. I bring a production mindset (tests, instrumentation, end-to-end ownership) and I influence patterns through review and pairing, not title inflation.

I have not operated **SQL Server** or prop-firm trading execution at exchange latency; my depth is Postgres, Node/TS services, and money-movement UX. The broader Topstep ecosystem also uses **.NET** in places—I would ramp on house conventions. B.S. Finance (Santa Clara) helps me reason about trader-facing money flows; remote-to-hybrid and on-call participation are alignments I would confirm candidly in process.`,
  skills: topstepSeniorFullstackSkills,
  experience,
  companyReferences,
  education: educationFinanceScu,
  outreachEmail: {
    label:
      "3rd-tier LinkedIn or email (loose connection; personalize [First name])",
    subject:
      "Senior full stack engineering at Topstep / Andrew Shenstone",
    body: `Hi [First name],

I hope this is okay to send as a loose LinkedIn connection. I applied for Senior Full Stack Engineer at Topstep and am interested in the payments and purchasing platform side of the trader experience. I am not assuming you are hiring or on that team; any perspective or pointer would help.

I am a senior engineer with production TypeScript, React, Next.js, Postgres, GraphQL, Stripe, and event-driven/async patterns from product and agency work, plus a finance degree. SQL Server and exchange-grade trading latency are areas I would ramp inside your standards.

If a short chat ever makes sense, I would be glad to connect. I can share my resume if helpful.

Thank you,
Andrew Shenstone
shenst1@gmail.com
339-223-0797`,
  },
};
