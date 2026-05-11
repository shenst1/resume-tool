import {
  baseSkills,
  companyReferences,
  contact,
  educationFinanceScu,
  experience,
} from "@/data/base-profile";
import type { Resume, SkillCategory } from "@/types/resume";

const bluehostSkills: SkillCategory[] = [
  {
    label: "React, Next.js & TypeScript",
    items: [
      "React with hooks and modern patterns; Next.js App Router and Server Components in production (Plantfolio)",
      "TypeScript end-to-end for serious frontends",
      "State: Zustand and component-level patterns today; comfortable in Redux codebases when that is the house style",
      "Tailwind CSS and shared component libraries (Shadcn UI)",
    ],
  },
  {
    label: "AI product & LLM integration",
    items: [
      "OpenAI and AI SDK on Plantfolio: chat, vision, extraction, pragmatic model use behind real features",
      "Building UIs that wrap LLM-backed flows (chat, generation, recommendations pattern)",
      "Cursor IDE (Top 1% user): AI-assisted shipping is already how I work",
    ],
  },
  {
    label: "Speed, scale & delivery",
    items: [
      "High-traffic production web and mobile (seasonal public apps; long-running SaaS and commerce admin)",
      "REST and service-style backends; GraphQL experience at Bloom",
      "Git, CI/CD, Agile collaboration",
      "Vitest and Cypress (Jest-compatible habits where teams prefer Jest)",
    ],
  },
  baseSkills[3],
  baseSkills[4],
];

export const bluehostResume: Resume = {
  slug: "bluehost",
  pageTitle: "Shenstone, Andrew - Application for Senior Front-End Engineer @ Bluehost",
  target: {
    company: "Bluehost",
    role: "Senior Front-End Engineer",
    teamOrFocus: "Innovation / next-generation products",
  },
  contact,
  about:
    "Senior front-end engineer with 12+ years shipping for real users at speed. Bluehost’s innovation lane—prototypes and POCs that reach production fast, AI-native experiences, and high-traffic surfaces—matches how I run Plantfolio as founder: Next.js and TypeScript, Tailwind, LLM-backed features customers actually use, and Cursor as part of the daily toolchain (top 1% user). I have lived through ambiguous product definition, tight feedback loops, and owning outcomes end to end, not just components. My recent React state work leans on hooks and Zustand more than Redux; I read and extend Redux stacks without drama when that is what the product already chose. I test with Vitest and Cypress in the same spirit as Jest-heavy teams. I like the Bluehost mission: small businesses deserve tools that feel premium and simple at web scale—that is the same craft problem as making dense admin and builder flows feel approachable.",
  skills: bluehostSkills,
  experience,
  companyReferences,
  education: educationFinanceScu,
};
