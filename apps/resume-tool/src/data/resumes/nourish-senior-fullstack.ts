import {
  baseSkills,
  companyReferences,
  contact,
  educationFinanceScu,
  experience,
} from "@/data/base-profile";
import type { Resume, SkillCategory } from "@/types/resume";

const nourishSkills: SkillCategory[] = [
  {
    label: "Full stack (posting stack)",
    items: [
      "React and TypeScript in production across Next.js (Plantfolio), admin surfaces (Bloom, Tilia), and agency-era high-traffic apps",
      "Node.js services, REST and GraphQL APIs, and pragmatic service boundaries under product pressure",
      "PostgreSQL with Prisma: relational modeling, migrations, and operational discipline (Plantfolio today)",
      "React Native in production (Ply, Minnesota State Fair apps); Flutter history when mobile surfaces span platforms",
    ],
  },
  {
    label: "Product, integrations & experimentation",
    items: [
      "End-to-end ownership from discovery through production: customer calls, scope trade-offs, ship, verify (Plantfolio founder; Bloom cross-functional)",
      "Third-party integrations (Stripe, Clerk, webhooks, CMS, commerce platforms) with idempotency and observability-minded error handling",
      "Data-informed delivery: pragmatic experiments and rollout discipline; Amplitude is a motivated ramp from founder analytics habits, not headline platform tenure",
    ],
  },
  {
    label: "Quality, compliance-adjacent & startup execution",
    items: [
      "High test coverage culture (Vitest, Cypress; Tilia payments-adjacent tooling where regressions erode trust)",
      "Regulated-adjacent patterns from alcohol commerce (Bloom) and payments/KYC tooling (Tilia), useful lens for insurance and patient-facing healthcare flows",
      "0→1 startup energy on Plantfolio: fast shipping with standards that survive growth; AI-native product and engineering workflow (Cursor, production LLM features)",
    ],
  },
  baseSkills.find((c) => c.label === "AI-native product & workflow") ?? baseSkills[3],
];

export const nourishSeniorFullstackResume: Resume = {
  slug: "nourish-senior-fullstack",
  createdAt: "2026-05-29",
  pageTitle:
    "Shenstone, Andrew - Application for Senior Full Stack Engineer @ Nourish",
  homeListLabel: "Nourish",
  target: {
    company: "Nourish",
    role: "Senior Full Stack Engineer",
    teamOrFocus: "Growth, Consumer, or Services pod (remote or NYC hybrid)",
  },
  contact,
  about: `Senior full-stack engineer with 12+ years shipping user-facing product end to end on **React**, **TypeScript**, **Node.js**, **PostgreSQL**, and **Prisma**, plus production **React Native**. I want pod ownership at Nourish: take major codebase areas from idea through deployment, set ambitious timelines, and partner across product, design, and analytics in a data-driven experimentation culture.

Plantfolio is my 0→1 proof (customer calls through production, AI-native features customers use daily, insurance-adjacent trust habits from regulated commerce at Bloom and payments/KYC depth at Tilia). I ship fast without skipping tests, mentor through pairing and review, help teams interview as they scale, and work from first principles on scope and trade-offs.

Healthcare nutrition is new domain vocabulary for me; I transfer compliance-minded, multi-stakeholder product patterns from regulated retail and payments. Formal Amplitude platform ownership is a ramp from data-informed founder habits, not headline tenure today. B.S. Finance (Santa Clara), not computer science; my production engineering track record is the proof.`,
  skills: nourishSkills,
  experience,
  companyReferences,
  education: educationFinanceScu,
  outreachEmail: {
    label:
      "3rd-tier LinkedIn or email (loose connection; personalize [First name])",
    subject: "Senior full stack engineering at Nourish / Andrew Shenstone",
    body: `Hi [First name],

I hope this is okay to send as a loose LinkedIn connection. I applied for Senior Full Stack Engineer at Nourish and am interested in your AI-native nutrition care platform and pod-based engineering model. I am not assuming you are hiring or on engineering; any perspective or pointer to the right person would help.

I am a senior full-stack engineer with production React, TypeScript, Node, Postgres, Prisma, and React Native, founder 0→1 work on Plantfolio, and regulated-adjacent delivery from commerce and payments tooling. Healthcare is new domain for me; I am direct about that and motivated by the mission.

If a short chat ever makes sense, I would be glad to connect. I can share my resume if helpful.

Thank you,
Andrew Shenstone
shenst1@gmail.com
339-223-0797`,
  },
};
