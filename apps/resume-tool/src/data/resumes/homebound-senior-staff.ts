import {
  baseSkills,
  companyReferences,
  contact,
  educationFinanceScu,
  experience,
} from "@/data/base-profile";
import type { Resume, SkillCategory } from "@/types/resume";

const homeboundSkills: SkillCategory[] = [
  {
    label: "Homebound stack",
    items: [
      "TypeScript across frontend and backend in production (Plantfolio monorepo today)",
      "React and Next.js for customer-facing and internal admin experiences",
      "Node.js services, Server Actions, and API design with clear contracts",
      "GraphQL in production (Bloom Rails API; Tilia platform API)—schema, resolvers, and typed clients",
      "PostgreSQL with Prisma: relational modeling, migrations, and performance-aware SQL",
      "AWS in production (S3, EC2); CI/CD with CircleCI, Vercel/Turbo/pnpm",
    ],
  },
  {
    label: "AI-native engineering (explicit posting)",
    items: [
      "Cursor (top 1% user) and Claude-class agents daily—from scoping through review",
      "Human ownership of architecture, tests, and production risk; can explain how AI changes approach",
      "AI-native product features in production (Plantfolio: vision, chat, semantic search)",
    ],
  },
  {
    label: "Ownership, delivery & leadership",
    items: [
      "End-to-end feature ownership: technical design, deploy, monitoring, iteration (founder; Bloom, Tilia)",
      "Translate messy operational workflows into reliable software with product, design, and non-technical partners",
      "Mentoring via pairing, design review, and code review; influence technical direction (no direct reports)",
      "Pragmatic architecture: ship incrementally without sacrificing long-term maintainability",
    ],
  },
  baseSkills.find((c) => c.label === "Architecture & async") ?? baseSkills[3],
];

export const homeboundSeniorStaffResume: Resume = {
  slug: "homebound-senior-staff",
  createdAt: "2026-05-29",
  pageTitle:
    "Shenstone, Andrew - Application for Senior Software Engineer @ Homebound",
  homeListLabel: "Homebound",
  target: {
    company: "Homebound",
    role: "Senior Software Engineer",
    teamOrFocus: "Full stack platform (Senior L4; Staff calibrated in process)",
  },
  contact,
  about: `I am applying for Senior Software Engineer at Homebound because the role is full-stack product work on the stack I ship daily: **TypeScript**, **Node**, **React**, **GraphQL**, **PostgreSQL**, and **AWS**, with ownership from design through production monitoring.

I have twelve years building software, including founder-owned product at Plantfolio and GraphQL APIs at Bloom and Tilia. I partner with product and design to turn messy real-world workflows into reliable software, mentor through review and pairing (no direct reports), and use **Cursor** (top 1% user) and Claude-class agents as a core part of how I work—not a substitute for architecture, tests, or judgment.

Residential construction is new domain for me; operator tooling, configurable workflows, and customer purchase flows are not. I am targeting Senior (L4) and open to level calibration in your process.`,
  skills: homeboundSkills,
  experience,
  companyReferences,
  education: educationFinanceScu,
  outreachEmail: {
    label: "3rd-tier LinkedIn or email (loose connection; personalize [First name])",
    subject: "Engineering at Homebound / Andrew Shenstone",
    body: `Hi [First name],

I hope this is okay as a loose LinkedIn connection. I applied for Senior Software Engineer at Homebound and am interested in how you modernize homebuilding with TypeScript, React, GraphQL, and Postgres. I am not assuming you are on engineering or hiring; any perspective or pointer would help.

I am a senior full-stack engineer with production work on that stack, founder ownership of a live product, daily Cursor and Claude-class workflows, and twelve years overall. Construction ops is new domain for me; shipping internal and customer-facing software from ambiguous requirements is not.

Happy to share my resume if useful. Thank you for reading a note from a distant connection.

Andrew Shenstone
shenst1@gmail.com
339-223-0797`,
  },
};
