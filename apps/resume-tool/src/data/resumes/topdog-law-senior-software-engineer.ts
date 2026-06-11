import {
  baseSkills,
  companyReferences,
  contact,
  educationFinanceScu,
  experience,
} from "@/data/base-profile";
import type { Resume, SkillCategory } from "@/types/resume";

const topdogLawSkills: SkillCategory[] = [
  {
    label: "Platform engineering (TopDog-aligned)",
    items: [
      "TypeScript and Node.js in production across a 12+ package monorepo (Plantfolio); APIs, server actions, and service boundaries",
      "Next.js and React for product and internal-style operational UIs; end-to-end ownership from design through production support",
      "PostgreSQL with Prisma: schema design, migrations, and relational models built to evolve",
      "Redis (Vercel KV) for job state and bulk-query params; Inngest for async orchestration (BullMQ/RabbitMQ-class patterns)",
      "NestJS is a ramp; Express-style services in production (render-worker) with the same API and module discipline",
    ],
  },
  {
    label: "Reliability, integrations & delivery",
    items: [
      "Third-party and internal integrations (Stripe, Clerk, Shopify Plus, webhooks) with idempotency-minded handling",
      "Isolated workers, background jobs, and polling flows for long-running operational work",
      "CI/CD (Vercel/Turbo/pnpm; CircleCI at Bloom); Docker-friendly deployment patterns; Git PR and review culture",
      "Vitest, React Testing Library, and Cypress; production troubleshooting and iterative hardening",
      "AWS (S3, EC2) in production",
    ],
  },
  {
    label: "Leadership & context",
    items: [
      "Founder-stage ownership: limited direction, high accountability, operational workflows tied to real customers",
      "Mentoring through code review, pairing, and architecture discussion (Bloom, Tilia; no direct reports)",
      "Legal/professional services and case-management domain is new; B2B operator tooling and intake-style flows transfer",
      "High-growth marketing + operations narrative at TopDog maps to commerce and platform delivery experience",
    ],
  },
  baseSkills.find((c) => c.label === "AI-native product & workflow") ?? baseSkills[3],
];

export const topdogLawSeniorSoftwareEngineerResume: Resume = {
  slug: "topdog-law-senior-software-engineer",
  createdAt: "2026-06-01",
  pageTitle:
    "Shenstone, Andrew - Application for Senior Software Engineer @ TopDog Law",
  homeListLabel: "TopDog Law",
  target: {
    company: "TopDog Law",
    role: "Senior Software Engineer",
    teamOrFocus: "Technology platform (services, APIs, operational tooling)",
  },
  contact,
  about: `I am applying for Senior Software Engineer at TopDog Law because the role is hands-on platform work: **TypeScript**, **Node.js**, **React**, **Next.js**, **PostgreSQL**, async jobs, and internal tools that support real operational workflows, not shelfware.

I have 12+ years shipping production systems. On Plantfolio I own a TypeScript monorepo end to end: APIs and data models, **Redis**-backed job flows, **Inngest** orchestration for background processing, isolated Node services, and operational UIs operators depend on. I reduce complexity through clear boundaries, tests, and review, and I mentor through pairing without direct reports. **NestJS** and **BullMQ** by name are ramps; the underlying patterns (structured Node services, queues, reliable job state) are how I already ship.

Personal injury operations and legal case platforms are new domain for me; what transfers is building reliable software for high-stakes workflows, integrating with external systems, and moving fast with sound judgment in a scaling organization. I am U.S.-based and motivated by early-stage ownership where the systems you build shape how the firm runs nationally.`,
  skills: topdogLawSkills,
  experience,
  companyReferences,
  education: educationFinanceScu,
  outreachEmail: {
    label: "Technical recruiter (after applying; personalize [First name])",
    subject: "Senior Software Engineer application / Andrew Shenstone",
    body: `Hey [First name],

I recently applied for Senior Software Engineer at TopDog Law through your job portal. Same resume attached here.

I'm writing to let you know ⛔️🤖 I'm not a robot and I'm genuinely interested in whether I'm the right fit. I applied because I think my background fits the role, and I'd love to get a conversation started if you're the right person to talk to.

Andrew`,
  },
};
