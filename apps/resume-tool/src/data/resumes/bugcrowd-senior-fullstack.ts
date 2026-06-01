import {
  baseSkills,
  companyReferences,
  contact,
  educationFinanceScu,
  experience,
} from "@/data/base-profile";
import type { Resume, SkillCategory } from "@/types/resume";

const bugcrowdSkills: SkillCategory[] = [
  {
    label: "Full stack (posting stack)",
    items: [
      "TypeScript and modern JavaScript across React, Next.js (App Router, RSC), and Node.js services",
      "PostgreSQL with Prisma: relational modeling, migrations, complex queries, and operational discipline (Plantfolio today)",
      "OAuth-style auth in production via Clerk; JWT and session patterns; careful handling of multi-tenant access",
      "CI/CD (CircleCI, GitHub Actions habits), Vercel deployments, and AWS (S3, EC2) in production",
    ],
  },
  {
    label: "Integrations, reliability & leadership",
    items: [
      "Webhooks, async jobs (Inngest), and ETL-style pipelines (Tune); pub/sub semantics and idempotent integration design",
      "Production debugging, testing (Vitest, Cypress), and rollout-minded delivery from payments-adjacent work at Tilia",
      "Technical leadership through architecture, code review, and mentoring (no direct reports); cross-team influence on patterns and quality",
      "Drizzle and n8n are adjacent ramps; integration and ORM fundamentals transfer directly",
    ],
  },
  {
    label: "AI application development (preferred)",
    items: [
      "LLM APIs (OpenAI), AI SDK, embeddings, prompt engineering, and semantic search in production on Plantfolio",
      "AI-native engineering: Cursor (top 1% user), agent workflows with human judgment on architecture and production risk",
      "Temporal/Make/Zapier-style automation is a motivated ramp from Inngest and webhook pipelines, not headline n8n tenure",
    ],
  },
  baseSkills.find((c) => c.label === "Architecture & async") ?? baseSkills[3],
];

export const bugcrowdSeniorFullstackResume: Resume = {
  slug: "bugcrowd-senior-fullstack",
  createdAt: "2026-05-29",
  pageTitle:
    "Shenstone, Andrew - Application for Senior Full Stack Engineer @ Bugcrowd",
  homeListLabel: "Bugcrowd",
  target: {
    company: "Bugcrowd",
    role: "Senior Full Stack Engineer",
    teamOrFocus:
      "Security Knowledge Platform; 100% remote (Greenhouse lists MA, NY, PA, OK)",
  },
  contact,
  about: `Senior full-stack engineer with 12+ years shipping production systems on **TypeScript**, **React**, **Next.js**, **PostgreSQL**, and **Prisma**, plus **Vercel** and **AWS** deployment habits. Bugcrowd’s stack and preferred AI surface area match my recent work closely: integration patterns (webhooks, async jobs, ETL-style pipelines), auth-minded multi-tenant delivery, and production LLM features (embeddings, semantic search, OpenAI APIs on Plantfolio).

I lead through architecture, reviews, and mentoring without direct reports—aligning scrum execution with sensible system design, prototyping new approaches when they improve reliability or velocity, and caring about observability and rollout risk. Crowdsourced security is new domain vocabulary for me; what transfers is API-first platform work, third-party integrations, and building software where trust and correctness matter (payments/KYC at Tilia, regulated commerce at Bloom).

B.S. Finance (Santa Clara), not computer science—my engineering track record is the proof. n8n-specific automation is a ramp from Inngest and webhook pipelines; I would not overstate cybersecurity tenure I do not have.`,
  skills: bugcrowdSkills,
  experience,
  companyReferences,
  education: educationFinanceScu,
  outreachEmail: {
    label:
      "3rd-tier LinkedIn or email (loose connection; personalize [First name])",
    subject: "Senior full stack engineering at Bugcrowd / Andrew Shenstone",
    body: `Hi [First name],

I hope this is okay to send as a loose LinkedIn connection. I applied for Senior Full Stack Engineer at Bugcrowd and am interested in your Security Knowledge Platform and AI-powered crowdsourced security direction. I am not assuming you are hiring or on engineering; any perspective or pointer would help.

I am a senior full-stack engineer with production TypeScript, Next.js, Prisma, Postgres, Vercel/AWS, webhooks and async integrations, and production LLM/embeddings work on my own product. Security domain and n8n would be ramps I am direct about.

If a short chat ever makes sense, I would be glad to connect. I can share my resume if helpful.

Thank you,
Andrew Shenstone
shenst1@gmail.com
339-223-0797`,
  },
};
