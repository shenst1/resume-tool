import {
  baseSkills,
  companyReferences,
  contact,
  educationFinanceScu,
  experience,
} from "@/data/base-profile";
import type { Resume, SkillCategory } from "@/types/resume";

const solaceSkills: SkillCategory[] = [
  {
    label: "Full stack (Solace stack)",
    items: [
      "React and TypeScript in production across Next.js (Plantfolio), admin and commerce surfaces (Bloom, Tilia), and high-traffic consumer apps",
      "Node.js services, REST and GraphQL APIs, and end-to-end ownership from data models through UI",
      "PostgreSQL with Prisma: relational modeling, migrations, and operational discipline (Plantfolio today; Bloom reporting SQL)",
      "Tailwind CSS and Shadcn UI in recent production work; Radix primitives through shadcn patterns",
      "Redis and NestJS with TypeORM are motivated ramps from comparable Node/Postgres service work, not headline tenure today",
      "Heroku-class PaaS and continuous deploy habits from AWS, Vercel, and CircleCI-backed production workflows",
    ],
  },
  {
    label: "Product ownership & startup execution",
    items: [
      "Autonomous workflow ownership: requirements through specs, implementation, deploy, and follow-up (Plantfolio founder; Bloom/Tilia cross-functional)",
      "Consumer-oriented UX judgment from mobile and web products where confusion erodes trust (State Fair peak traffic, commerce flows)",
      "Daily shipping bias with test discipline (Vitest, Cypress; high coverage culture at Tilia)",
      "Clear written communication with product and design partners; feedback-heavy review and pairing culture",
    ],
  },
  {
    label: "Healthcare-adjacent & regulated product",
    items: [
      "Insurance- and eligibility-shaped integrations and multi-stakeholder flows (inference from Medicare advocacy marketplace; verify in interview)",
      "Regulated-adjacent delivery from alcohol commerce (Bloom) and payments/KYC tooling (Tilia)",
      "Sensitive data handling habits from payments-adjacent platforms; HIPAA-specific systems are a ramp, not claimed tenure",
    ],
  },
  baseSkills.find((c) => c.label === "AI-native product & workflow") ?? baseSkills[3],
];

export const solaceFullstackResume: Resume = {
  slug: "solace-fullstack",
  createdAt: "2026-06-01",
  pageTitle:
    "Shenstone, Andrew - Application for Full Stack Engineer @ Solace",
  homeListLabel: "Solace",
  target: {
    company: "Solace",
    role: "Full Stack Engineer",
    teamOrFocus: "Product engineering (U.S.; verify remote vs Redwood City hybrid)",
  },
  contact,
  about: `Full-stack engineer with twelve years shipping **React**, **TypeScript**, **Node.js**, and **PostgreSQL** from database models through UI—founder 0→1 on Plantfolio and enterprise product at Bloom and Tilia. I want Solace’s pace: own ambiguous product workflows, write specs that make deploys boring, commit daily, and see advocate–patient features land with real users.

That maps to how I already work: autonomous delivery with product and design, refactor without fear, and consumer-grade UX where confusion has real consequences. I influence direction through clear communication and absorb feedback in review.

NestJS with TypeORM and Solace’s Heroku deploy path are not my current daily stack; I build the same shape of APIs on Node with Prisma and ship on AWS- and Vercel-class infrastructure. Medicare advocacy is new domain; regulated commerce, insurance-shaped integrations, and trust-heavy flows transfer. B.S. Finance (Santa Clara), not computer science; production track record is the proof.`,
  skills: solaceSkills,
  experience,
  companyReferences,
  education: educationFinanceScu,
  outreachEmail: {
    label:
      "3rd-tier LinkedIn or email (loose connection; personalize [First name])",
    subject: "Full stack engineering at Solace / Andrew Shenstone",
    body: `Hi [First name],

I hope this is okay as a loose LinkedIn connection. I applied for Full Stack Engineer at Solace and am interested in how you pair patients with advocates and scale advocacy as standard care. I am not assuming you are on engineering or hiring; any perspective or pointer would help.

I am a full-stack engineer with production React, TypeScript, Node, and Postgres, founder 0→1 work on Plantfolio, and regulated-adjacent product from commerce and payments tooling. NestJS and TypeORM are a ramp for me; healthcare advocacy is new domain, and I am direct about both.

Happy to share my resume if useful. Thank you for reading a note from a distant connection.

Andrew Shenstone
shenst1@gmail.com
339-223-0797`,
  },
};
