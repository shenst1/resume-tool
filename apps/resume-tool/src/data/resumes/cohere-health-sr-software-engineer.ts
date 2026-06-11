import {
  baseSkills,
  companyReferences,
  contact,
  educationFinanceScu,
  experience,
} from "@/data/base-profile";
import type { Resume, SkillCategory } from "@/types/resume";

const cohereHealthSkills: SkillCategory[] = [
  {
    label: "Full-stack (Cohere-aligned)",
    items: [
      "React, JavaScript, TypeScript, HTML, and CSS in production for 12+ years; Next.js and Tailwind/Shadcn on Plantfolio",
      "Node.js services and APIs in production (Plantfolio monorepo); pragmatic microservice boundaries via workers and integration services",
      "PostgreSQL and Prisma: schema design, migrations, and queries that support real business workflows",
      "Server-side rendering patterns via Next.js (RSC, server actions); React Email for transactional templates",
      "Vitest, React Testing Library, and Cypress for unit, integration, and E2E discipline",
    ],
  },
  {
    label: "Cloud, auth & regulated delivery",
    items: [
      "AWS S3 and EC2 in production; Lambda is a ramp with transferable serverless/async patterns (Inngest, webhooks)",
      "Authentication and authorization in production (Clerk, subscription tiers, Postgres-centric access patterns; KYC-adjacent tooling at Tilia)",
      "Multi-tenant and sensitive-data habits from payments platform and commerce integrations",
      "Cross-functional work with product, operations-shaped stakeholders, and engineering (Bloom, Tilia, founder delivery)",
    ],
  },
  {
    label: "Healthcare & stack context",
    items: [
      "Healthcare analytics and prior-auth workflows are new domain; regulated, high-trust delivery at Tilia transfers",
      "Python is an honest ramp; Node and Rails OO backend patterns are production-strong",
      "React Native in production (agency); Java/Spring Boot are plus ramps, not headline tenure",
      "B.S. Finance (Santa Clara) for equivalent professional experience where CS degree is listed",
    ],
  },
  baseSkills.find((c) => c.label === "AI-native product & workflow") ?? baseSkills[3],
];

export const cohereHealthSrSoftwareEngineerResume: Resume = {
  slug: "cohere-health-sr-software-engineer",
  createdAt: "2026-06-01",
  pageTitle:
    "Shenstone, Andrew - Application for Sr Software Engineer @ Cohere Health",
  homeListLabel: "Cohere Health",
  target: {
    company: "Cohere Health",
    role: "Sr Software Engineer",
    teamOrFocus: "Full stack (healthcare analytics / payment services)",
  },
  contact,
  about: `I am applying for Sr Software Engineer at Cohere Health because the role is full-stack delivery in a high-trust domain: **React**, **Node.js**, tested cloud software, and collaboration with operations and data partners to ship features clinicians and clients can rely on.

I have 12+ years in software (above your 6+ bar), with **PostgreSQL** schema design, **Clerk**-based auth and tiered access on Plantfolio, and payments-adjacent, careful delivery at Tilia. I build maintainable **TypeScript** services, conduct unit and integration testing as part of CI, and partner cross-functionally from discovery through production. **AWS (S3, EC2)** is in my history; **Lambda** would ramp quickly alongside patterns I already use for async jobs and isolated workers.

Prior-auth and payment-services analytics are new domain for me; what transfers is secure integrations, clear data models, and self-directed problem solving in fast-moving environments. **Python** and formal CS degree requirements are gaps I name plainly; **B.S. Finance** covers equivalent professional experience, and I ramp languages inside team standards.`,
  skills: cohereHealthSkills,
  experience,
  companyReferences,
  education: educationFinanceScu,
  outreachEmail: {
    label: "Technical recruiter (after applying; personalize [First name])",
    subject: "Sr Software Engineer application / Andrew Shenstone",
    body: `Hey [First name],

I recently applied for Sr Software Engineer at Cohere Health through your job portal. Same resume attached here.

I'm writing to let you know ⛔️🤖 I'm not a robot and I'm genuinely interested in whether I'm the right fit. I applied because I think my background fits the role, and I'd love to get a conversation started if you're the right person to talk to.

Andrew`,
  },
};
