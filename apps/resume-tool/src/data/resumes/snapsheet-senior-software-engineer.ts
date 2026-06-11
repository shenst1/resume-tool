import {
  baseSkills,
  companyReferences,
  contact,
  educationFinanceScu,
  experience,
} from "@/data/base-profile";
import type { Resume, SkillCategory } from "@/types/resume";

const snapsheetSeniorSoftwareEngineerSkills: SkillCategory[] = [
  {
    label: "Full stack (posting)",
    items: [
      "12+ years full-stack web delivery; React and TypeScript in production (Next.js, SPAs, React Native history)",
      "Ruby on Rails through Rails 6 (~6 years agency + Bloom): GraphQL APIs, models, and integrations shared across web and mobile clients",
      "API design in production (REST, GraphQL); schema and contract discipline with product and design partners",
      "Relational data modeling: PostgreSQL and Prisma today; MongoDB in production before migration; MySQL is a straightforward ramp on the same habits",
    ],
  },
  {
    label: "Scale, quality & collaboration",
    items: [
      "Performance and scalability awareness: high-traffic seasonal apps, commerce integrations, background jobs and webhooks",
      "Testing culture (Vitest, Cypress; 90%+ unit coverage norms at Tilia); CI/CD with CircleCI at Bloom",
      "Mentoring through pairing and code review (no direct reports); comfortable across multiple sprint initiatives",
      "Regulated, high-stakes workflows: alcohol retail compliance at Bloom; payments/KYC-adjacent tooling at Tilia",
    ],
  },
  {
    label: "Infrastructure (posting stack)",
    items: [
      "AWS (S3, EC2) in production; async patterns map to RabbitMQ-style messaging (webhooks, Inngest, background jobs)",
      "Redis, Elasticsearch, and Docker are ramps from adjacent production and integration work, not headline tenure",
    ],
  },
  baseSkills.find((c) => c.label === "Architecture & async") ?? baseSkills[3],
];

export const snapsheetSeniorSoftwareEngineerResume: Resume = {
  slug: "snapsheet-senior-software-engineer",
  createdAt: "2026-06-01",
  pageTitle:
    "Shenstone, Andrew - Application for Senior Software Engineer @ Snapsheet",
  homeListLabel: "Snapsheet",
  target: {
    company: "Snapsheet",
    role: "Senior Software Engineer",
    teamOrFocus:
      "Claims engine / multi-team placement (Claims Management, Framework, or similar); remote US",
  },
  contact,
  about: `Senior full-stack engineer with 12+ years building production web systems on **React** and **Ruby on Rails**, plus modern **TypeScript** and Node-era delivery. I like purposeful platform work: APIs, relational schemas, and server-side performance when partners depend on the software every day.

Snapsheet’s claims stack maps to work I have done in regulated, workflow-heavy products. At Bloom I built the greenfield **Next.js** admin and **Rails** **GraphQL** APIs behind Shopify Plus operations for many clients; at Tilia I shipped payments-adjacent tooling with strong test discipline. I mentor through pairing and review, contribute across parallel sprint work, and I am comfortable with remote-first collaboration.

I have not shipped insurance claims software specifically; complex operator workflows and integration-heavy SaaS transfer well. Recent headline databases are **PostgreSQL** and Mongo (migrated to Postgres on Plantfolio); **MySQL**, **Redis**, **Elasticsearch**, and **RabbitMQ** are ramps on your listed stack. B.S. Finance (Santa Clara) supports insurance-adjacent reasoning; degree is not CS-STEM on paper. Team placement during interviews is something I would align on openly.`,
  skills: snapsheetSeniorSoftwareEngineerSkills,
  experience,
  companyReferences,
  education: educationFinanceScu,
  outreachEmail: {
    label: "Technical recruiter (after applying; personalize [First name])",
    subject: "Senior Software Engineer application / Andrew Shenstone",
    body: `Hey [First name],

I recently applied for Senior Software Engineer at Snapsheet through your job portal. Same resume attached here.

I'm writing to let you know ⛔️🤖 I'm not a robot and I'm genuinely interested in whether I'm the right fit. Rails and React are where I have shipped most, and I'd love to get a conversation started if you're the right person to talk to.

Andrew`,
  },
};
