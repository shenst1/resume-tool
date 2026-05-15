import { baseSkills, companyReferences, contact, experience } from "@/data/base-profile";
import type { Resume, SkillCategory } from "@/types/resume";

const foodsmartSkills: SkillCategory[] = [
  {
    label: "Backend & APIs",
    items: [
      "TypeScript and Node.js services, routing, and pragmatic service boundaries",
      "REST API design, versioning, performance, and contracts shaped for real front-end consumers",
      "PostgreSQL with Prisma: relational modeling, migrations, complex queries, and operational discipline",
      "GraphQL in production elsewhere (Bloom, Tilia)—useful when systems need it, but REST-first matches your posting",
    ],
  },
  {
    label: "AWS, async workloads & data stores",
    items: [
      "AWS (S3, EC2) in production; patterns transferable to RDS-backed workloads, Lambda handlers, and queue-driven flows (SQS-style semantics align with Inngest/webhook pipelines I have shipped)",
      "Background jobs, webhooks, and async processing (Inngest); careful idempotency, retries, and failure modes",
      "MySQL and DynamoDB / Redshift are not my strongest résumé line items—relational Postgres is; happy to deepen NoSQL and warehouse patterns where Foodsmart’s roadmap needs them",
    ],
  },
  {
    label: "Staff-level delivery & quality",
    items: [
      "Code review, testing strategy (Vitest, Cypress), and production debugging with an eye toward recurrence prevention",
      "Cross-functional work with product: requirements, use cases, and trade-offs made explicit before build",
      "Frontend literacy when needed: React, Next.js, and full-stack ownership on Plantfolio—enough to keep APIs honest for real UIs",
      "Docker in everyday dev contexts; Kubernetes mostly lighter exposure to date—confirm expectations for on-call and cluster ownership",
      "Retool or similar low-code internal tools: limited production ownership; quick study for clinician and ops surfaces",
    ],
  },
  baseSkills.find((c) => c.label === "AI/ML") ?? baseSkills[3],
];

export const foodsmartStaffBackendResume: Resume = {
  slug: "foodsmart-staff-backend",
  createdAt: "2026-05-14",
  pageTitle: "Shenstone, Andrew - Application for Staff Software Engineer (Backend) @ Foodsmart",
  homeListLabel: "Foodsmart",
  target: {
    company: "Foodsmart",
    role: "Staff Software Engineer (Backend focus)",
    teamOrFocus: "Platform APIs, data infrastructure, clinical & member workflows",
  },
  contact,
  about: `Staff-minded backend engineer with 12+ years shipping **TypeScript** and **Node.js** services, **PostgreSQL** data models, and **REST** APIs that product teams and web clients actually depend on. I design for operability: clear boundaries, disciplined testing, and production debugging that ends in durable fixes—not heroics every outage.

Foodsmart’s world—personalized nutrition, benefits integrations, and tools dietitians use daily—needs the same engineering habits as other regulated-adjacent domains I’ve touched: correctness under load, careful handling of sensitive data, and APIs that don’t fight the frontend. My deepest AWS production footprint today centers S3 and EC2 with strong patterns around async work (queues, webhooks, background jobs); I’m ready to own **Lambda, SQS, and RDS** the way your platform already does, not force a rewrite to match my history.

Clinical nutrition and payer lines of business are new vocabulary for me; my transfer is platform craft and cross-functional leadership (standards, reviews, mentoring without direct reports). I stay close enough to **React** and **Next.js** to keep end-to-end quality honest when slices of frontend need senior attention.`,
  skills: foodsmartSkills,
  experience,
  companyReferences,
};
