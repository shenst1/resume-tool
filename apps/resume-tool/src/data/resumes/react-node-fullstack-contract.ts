import {
  baseSkills,
  companyReferences,
  contact,
  educationFinanceScu,
  experience,
} from "@/data/base-profile";
import type { Resume, SkillCategory } from "@/types/resume";

const reactNodeContractSkills: SkillCategory[] = [
  {
    label: "Full stack (posting stack)",
    items: [
      "TypeScript across frontend and backend in production (Plantfolio monorepo today)",
      "React and Next.js (App Router, Server Components) for performant customer-facing UI",
      "Node.js APIs, Server Actions, and RESTful service boundaries",
      "PostgreSQL with Prisma: schema design, migrations, relational modeling, and query performance",
    ],
  },
  {
    label: "Ownership, quality & production",
    items: [
      "End-to-end ownership from ambiguous requirements through deploy and iteration (Plantfolio founder; Bloom, Tilia)",
      "Automated testing (Vitest, Cypress); code review and maintainability as default habits",
      "Production debugging, reliability improvements, and pragmatic observability on paths users depend on",
      "AWS in production (S3, EC2); CI/CD with Vercel/Turbo/pnpm and CircleCI history at Bloom",
    ],
  },
  {
    label: "Collaboration & contract fit",
    items: [
      "Partner with product and design to translate fuzzy scope into shippable milestones",
      "GraphQL in production where teams standardize on it (Bloom, Tilia); REST is daily default for new APIs",
      "Flexible remote delivery; comfortable with contract engagement and async collaboration",
    ],
  },
  baseSkills.find((c) => c.label === "AI-native product & workflow") ?? baseSkills[3],
];

export const reactNodeFullstackContractResume: Resume = {
  slug: "react-node-fullstack-contract",
  createdAt: "2026-05-29",
  pageTitle:
    "Shenstone, Andrew - Application for Fullstack Developer (React/Node.js)",
  homeListLabel: "React/Node Contract",
  target: {
    company: "Confidential (LinkedIn contract)",
    role: "Fullstack Developer (React/Node.js)",
    teamOrFocus: "Remote hourly contract · 10–40 hrs/week",
  },
  contact,
  about: `Senior full-stack engineer with twelve years shipping production systems on **TypeScript**, **React**, **Node.js**, and **PostgreSQL** end to end. I am applying for the remote Fullstack Developer contract to own core product workflows from API design through UI, with strong schema modeling, testing, and production reliability.

Plantfolio is my daily proof of the stack: Next.js and React on the front, Node services and server actions on the back, Postgres with Prisma, AWS for media, and REST integrations throughout. I collaborate with product and design on ambiguous scope, maintain quality through review and automated tests, and debug production issues with clear, durable fixes.

Flexible contract hours fit how I already work as a founder-operator shipping full-stack product end to end.`,
  skills: reactNodeContractSkills,
  experience,
  companyReferences,
  education: educationFinanceScu,
  outreachEmail: {
    label: "LinkedIn follow-up (company unknown; personalize if you learn the name)",
    subject: "Fullstack Developer (React/Node.js) contract / Andrew Shenstone",
    body: `Hi,

I applied via LinkedIn Easy Apply for the Fullstack Developer (React/Node.js) contract role and wanted to introduce myself directly in case it helps the review queue.

I am a senior full-stack engineer with production TypeScript, React, Node.js, and PostgreSQL, including founder ownership of a live product on that exact stack. I am open to remote contract work at the listed hour range and can start with a short technical conversation if useful.

Happy to share more detail or code samples. Thank you for your time.

Andrew Shenstone
shenst1@gmail.com
339-223-0797`,
  },
};
