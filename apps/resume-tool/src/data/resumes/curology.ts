import { baseSkills, companyReferences, contact, experience } from "@/data/base-profile";
import type { Resume, SkillCategory } from "@/types/resume";

const curologySkills: SkillCategory[] = [
  {
    label: "Platform, APIs & distributed patterns",
    items: [
      "Production APIs and schema design: GraphQL at Bloom and Tilia; REST and Server Actions on Plantfolio",
      "Event-driven and async delivery: Inngest, webhooks, background jobs; integration boundaries in a TypeScript monorepo",
      "Relational and document data: PostgreSQL with Prisma today; MongoDB in production before a deliberate Postgres migration",
      "Monolith-adjacent scale: years beside a Rails GraphQL core with Next.js clients; service boundaries and CI/CD without claiming a formal microservices migration lead title",
    ],
  },
  {
    label: "TypeScript, Node & React full stack",
    items: [
      "TypeScript",
      "JavaScript",
      "Node.js",
      "React",
      "Next.js (App Router, server components)",
      "SQL and relational modeling (PostgreSQL, Prisma; complex schemas and reporting)",
    ],
  },
  {
    label: "AWS, quality & production ownership",
    items: [
      "AWS (S3, EC2) in production; CI/CD, Git, automated testing (Vitest, Cypress)",
      "Production health mindset: high test coverage at Tilia; incident-style ownership through founder and platform delivery",
      "Cross-functional partnership with product, design, and stakeholders; mentorship via pairing and review (no direct reports)",
    ],
  },
  {
    label: "Python & honest ramp",
    items: [
      "Python is not my primary production language today; strongest depth is TypeScript/Node and Rails-shaped services",
      "Comfort ramping on Python services with clear contracts, tests, and code review; collaborate on polyglot stacks without overstating tenure",
    ],
  },
  baseSkills.find((c) => c.label === "AI-native product & workflow") ?? baseSkills[3],
];

export const curologyResume: Resume = {
  slug: "curology",
  createdAt: "2026-05-20",
  pageTitle: "Shenstone, Andrew - Application for Senior Software Engineer @ Curology",
  homeListLabel: "Curology",
  target: {
    company: "Curology",
    role: "Senior Software Engineer",
    teamOrFocus: "Platform migration (monolith toward microservices)",
  },
  contact,
  about: `Senior software engineer with 12+ years shipping production systems where APIs, schemas, and reliability matter as much as the UI. At Plantfolio I own a **TypeScript** monorepo on **PostgreSQL** with Prisma, async workflows via Inngest and webhooks, and **AWS** (S3, EC2) after a real Mongo-to-Postgres migration. Bloom and Tilia gave me years beside large **GraphQL** APIs, high test coverage, and regulated-adjacent delivery where production health is non-negotiable.

Curology's move from monolith toward microservices is the platform work I want: clear service boundaries, observability-minded shipping, and incident ownership. I have not led a formal migration program by title; I have built distributed patterns in production (event-driven jobs, integration boundaries, relational and document stores) and I partner well with product, design, and data stakeholders. **Python** is not my primary language today; I ramp quickly on service stacks with strong contracts and tests.

I work AI-natively (Cursor, Claude-class agents) with judgment on architecture and production risk, and I mentor engineers through pairing and review without direct reports.`,
  skills: curologySkills,
  experience,
  companyReferences,
  outreachEmail: {
    label: "3rd-tier LinkedIn or email (loose connection; personalize [First name])",
    subject: "Senior Software Engineer at Curology / Andrew Shenstone",
    body: `Hi [First name],

I hope this is okay as a loose LinkedIn connection. I applied for Senior Software Engineer at Curology and am interested in how the team is approaching the monolith-to-microservices migration. I am not assuming you are hiring or on the platform path; any perspective would help.

I am a senior full-stack engineer (TypeScript, Node, Postgres, React) with production APIs, event-driven workflows, and AWS usage, plus honest gaps on Python depth and not having led a formal migration program by title. I work AI-natively with Cursor and care about production ownership and mentoring through review.

Happy to share my resume if useful. Thank you for reading a note from a distant connection.

Andrew Shenstone
shenst1@gmail.com
339-223-0797`,
  },
};
