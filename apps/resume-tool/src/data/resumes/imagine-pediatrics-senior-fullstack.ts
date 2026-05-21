import { baseSkills, companyReferences, contact, experience } from "@/data/base-profile";
import type { Resume, SkillCategory } from "@/types/resume";

const imaginePediatricsSkills: SkillCategory[] = [
  {
    label: "Backend, APIs & integrations",
    items: [
      "TypeScript and Node.js services, pragmatic service boundaries, and production-hardened API contracts for web and mobile consumers",
      "REST-first design with GraphQL production experience elsewhere (Bloom, Tilia) when architecture calls for it",
      "PostgreSQL with Prisma: relational modeling, migrations, complex queries, and operational discipline",
      "Third-party integrations (Stripe, Clerk, webhooks, CMS, commerce platforms)—idempotency, retries, and observability-minded error handling",
    ],
  },
  {
    label: "Cloud, reliability & security",
    items: [
      "AWS (S3, EC2) in production; async workflows (Inngest, webhooks, background jobs) and integration pipelines (ETL-style work at Tune)",
      "Terraform: not a headline on my résumé yet; motivated to adopt your modules and review practices while contributing on services and clients immediately",
      "Testing and reviews as delivery hygiene (Vitest, Cypress; high coverage discipline at Tilia); careful handling of sensitive data in payments-adjacent and multi-tenant contexts",
    ],
  },
  {
    label: "Frontend & full-stack collaboration",
    items: [
      "React and Next.js (App Router, React Server Components) on Plantfolio; Chakra UI adoption leadership at Tilia; Tailwind and Shadcn UI in recent work",
      "Cross-functional partnership with product and design; scope estimation and explicit trade-offs before build",
      "React Native and Flutter history—useful when virtual-care surfaces span web and mobile",
    ],
  },
  baseSkills.find((c) => c.label === "AI-native product & workflow") ?? baseSkills[3],
];

export const imaginePediatricsSeniorFullstackResume: Resume = {
  slug: "imagine-pediatrics-senior-fullstack",
  createdAt: "2026-05-15",
  pageTitle: "Shenstone, Andrew - Application for Senior Fullstack Engineer @ Imagine Pediatrics",
  homeListLabel: "Imagine Pediatrics",
  target: {
    company: "Imagine Pediatrics",
    role: "Senior Fullstack Engineer",
    teamOrFocus: "Platform, APIs, and virtual-care product engineering (U.S. remote)",
  },
  contact,
  about: `Senior full-stack engineer shipping **TypeScript**, **Node.js**, **PostgreSQL**, and **React**/**Next.js** in production—APIs, third-party integrations, and async workflows included. I have repeatedly worked where reliability, security, and cross-functional clarity matter (payments-adjacent platforms, commerce at scale, and founder-led product with real users).

Imagine Pediatrics’ model—pediatrician-led, virtual-first care for children with special health care needs—matches how I want engineering to show up: high-trust systems and collaboration across clinical, product, and operations stakeholders.

**AWS (S3, EC2)** and full-stack delivery are in my recent history; **Terraform** and **FHIR** are not headline experience yet. I am direct about those gaps and motivated to ramp inside your standards while contributing immediately on services, integrations, and client-facing features.`,
  skills: imaginePediatricsSkills,
  experience,
  companyReferences,
};
