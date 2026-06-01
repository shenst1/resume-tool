import {
  baseSkills,
  companyReferences,
  contact,
  educationFinanceScu,
  experience,
} from "@/data/base-profile";
import type { Resume, SkillCategory } from "@/types/resume";

const rocketMoneyCoreSkills: SkillCategory[] = [
  {
    label: "Core stack (posting)",
    items: [
      "Node.js and TypeScript services, REST and GraphQL APIs, and pragmatic platform boundaries other teams depend on",
      "React and Next.js for internal tooling and product-adjacent surfaces; GraphQL in production (Bloom, Tilia)",
      "PostgreSQL with Prisma: relational modeling, migrations, and operational discipline at product scale",
      "End-to-end ownership: design docs, rollout, production debugging, and reliability-minded instrumentation",
    ],
  },
  {
    label: "Auth, privacy & platform leverage",
    items: [
      "Auth in production via Clerk (registration, sessions, subscription tiers, Postgres-centric access patterns on Plantfolio)",
      "OAuth/SSO and Auth0 are bonus ramps; session and least-privilege habits from multi-tenant and payments-adjacent delivery",
      "Sensitive data handling at Tilia (payments/KYC tooling) and regulated commerce at Bloom; formal GDPR deletion workflow ownership would be confirmed in interview",
      "Shared libraries, admin tooling, and integration patterns that keep other engineers on a paved path",
    ],
  },
  {
    label: "AI enablement & engineering workflow",
    items: [
      "Production LLM integrations (OpenAI, AI SDK) and embeddings/RAG on Plantfolio; interest in model gateways and shared AI infra for product teams",
      "Cursor (top 1% user) and Claude-class agents daily: exploration, implementation, debugging, with human judgment on architecture and risk",
      "LLMOps title experience is limited; transfer is shipping AI features and structuring codebases for safe iteration",
    ],
  },
  baseSkills.find((c) => c.label === "Architecture & async") ?? baseSkills[3],
];

export const rocketMoneyCoreSeniorFullstackResume: Resume = {
  slug: "rocket-money-core-senior-fullstack",
  createdAt: "2026-05-29",
  pageTitle:
    "Shenstone, Andrew - Application for Senior Full Stack Engineer, Core @ Rocket Money",
  homeListLabel: "Rocket Money",
  target: {
    company: "Rocket Money",
    role: "Senior Full Stack Engineer, Core",
    teamOrFocus:
      "Core platform (auth, privacy, AI enablement, internal tooling); hybrid 1–2×/week near Silver Spring, NYC, SF, Miami, or Denver",
  },
  contact,
  about: `Senior full-stack engineer with 12+ years building platform-shaped software on **Node.js**, **TypeScript**, **React**, **PostgreSQL**, and **GraphQL**—the Core team’s stack. I like high-leverage systems other teams depend on: authentication and account lifecycle (Clerk on Plantfolio), admin and operational tooling (Bloom, Tilia), and shared patterns that make the paved path the easy path.

Rocket Money’s Core charter maps to work I want next: correctness and resiliency on auth, privacy-minded handling of sensitive data, AI enablement others can build on, and end-to-end ownership from design through production reliability. I am an early adopter of AI-assisted engineering (**Cursor**, top 1% user) without outsourcing judgment, and I partner across product, data, and ops stakeholders in larger organizations—not only founder-mode delivery.

Auth0 and formal privacy-request/deletion program ownership are bonus areas I would ramp inside your standards; Clerk, OAuth-style flows, and payments-adjacent trust patterns are what I have shipped. B.S. Finance (Santa Clara) aligns with the mission; office hybrid (1–2×/week near listed hubs) is something I would align on candidly at apply time based on location.`,
  skills: rocketMoneyCoreSkills,
  experience,
  companyReferences,
  education: educationFinanceScu,
  outreachEmail: {
    label:
      "3rd-tier LinkedIn or email (loose connection; personalize [First name])",
    subject: "Senior full stack engineering, Core at Rocket Money / Andrew Shenstone",
    body: `Hi [First name],

I hope this is okay to send as a loose LinkedIn connection. I applied for Senior Full Stack Engineer, Core at Rocket Money and am interested in foundational auth, privacy, and AI enablement platforms. I am not assuming you are hiring or on Core; any perspective or pointer would help.

I am a senior engineer with production TypeScript, Node, React, Postgres, GraphQL, Clerk-based auth, and shared AI/LLM patterns from my own product, plus a finance degree. Auth0-specific and formal privacy-program ownership would be ramps I am direct about.

If a short chat ever makes sense, I would be glad to connect. I can share my resume if helpful.

Thank you,
Andrew Shenstone
shenst1@gmail.com
339-223-0797`,
  },
};
