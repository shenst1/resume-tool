import { baseSkills, companyReferences, contact, experience } from "@/data/base-profile";
import type { Resume, SkillCategory } from "@/types/resume";

const conveyorSkills: SkillCategory[] = [
  {
    label: "Full-stack SaaS & ownership",
    items: [
      "Founder 0→1 on Plantfolio: own priorities, scope, and delivery across backend, frontend, and production AI features",
      "B2B-adjacent platform work at Tilia (payments/KYC tooling) and Bloom (operator SaaS on Shopify Plus)",
      "REST and GraphQL APIs, PostgreSQL with Prisma, relational modeling built to evolve for years",
      "Ruby on Rails (~6 years through Rails 6): GraphQL APIs, monolith patterns, CI/CD at Bloom; productive ramp on Conveyor’s Rails services",
    ],
  },
  {
    label: "React, AWS & AI product",
    items: [
      "React, Next.js, and TypeScript for customer-facing and admin surfaces; Tailwind and design-system habits",
      "AWS (S3, EC2) in production; SaaS architecture concepts (auth, async jobs, integrations) across multiple products",
      "Production LLM features: vision, chat, RAG/embeddings, and semantic search (Plantfolio); AI-native engineering with Cursor daily",
      "Python is not my primary production language today; strong transfer from Node and Rails services with motivation to ramp where Conveyor’s AI stack needs it",
    ],
  },
  {
    label: "Product craft & team habits",
    items: [
      "Product sense from customer calls through ship-and-verify; inform roadmap with feasibility and scope trade-offs",
      "Code review, maintainability, and mentoring through pairing (no direct reports); high accountability without title inflation",
      "Vitest, Cypress, and test discipline from payments-adjacent delivery (Tilia); bias for action in startup contexts",
    ],
  },
  baseSkills.find((c) => c.label === "AI-native product & workflow") ?? baseSkills[3],
];

export const conveyorSeniorFullstackResume: Resume = {
  slug: "conveyor-senior-fullstack",
  createdAt: "2026-05-29",
  pageTitle:
    "Shenstone, Andrew - Application for Senior Fullstack Software Engineer @ Conveyor",
  homeListLabel: "Conveyor",
  target: {
    company: "Conveyor",
    role: "Senior Fullstack Software Engineer",
    teamOrFocus:
      "Customer Trust AI platform (Sue, Phil); remote U.S. / Canada",
  },
  contact,
  about: `Senior full-stack engineer with 12+ years shipping B2B-facing product end to end. Conveyor’s mission (automate security reviews and RFP misery with agentic AI) matches how I work today: **Ruby on Rails** services and **GraphQL** at Bloom, **React** and **Next.js** on modern surfaces, **PostgreSQL** in production, and founder ownership of production **LLM** features on Plantfolio (chat, retrieval, vision customers use—not demos).

I want high-accountability startup impact: shape the platform, own projects across backend, frontend, and AI, pair often, and keep the codebase maintainable for the next engineer. I inform roadmaps with feasibility, review code constructively, and mentor without direct reports. **AWS** and integration-heavy SaaS are familiar; security-questionnaire domain is new vocabulary, but trust-sensitive, document-heavy workflows are not (payments/KYC at Tilia, regulated commerce at Bloom).

**Python** is a ramp, not my daily language; my transfer is Rails and Node with strong relational data and API habits. I am direct about that and motivated to learn inside Conveyor’s stack while contributing immediately on Rails, React, and AI-powered product surfaces.`,
  skills: conveyorSkills,
  experience,
  companyReferences,
  outreachEmail: {
    label:
      "3rd-tier LinkedIn or email (loose connection; personalize [First name])",
    subject: "Senior fullstack engineering at Conveyor / Andrew Shenstone",
    body: `Hi [First name],

I hope this is okay to send as a loose LinkedIn connection. I applied for Senior Fullstack Software Engineer at Conveyor and am interested in your customer trust automation and agentic AI direction (Sue and Phil). I am not assuming you are hiring or on engineering; any perspective or pointer would help.

I am a senior full-stack engineer with Rails, React, Postgres, and AWS patterns, founder ownership of production LLM features, and B2B SaaS delivery habits. Python would be a ramp for me; security-review domain would be new, and I am direct about both.

If a short chat ever makes sense, I would be glad to connect. I can share my resume if helpful.

Thank you,
Andrew Shenstone
shenst1@gmail.com
339-223-0797`,
  },
};
