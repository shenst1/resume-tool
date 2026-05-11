import {
  baseSkills,
  companyReferences,
  contact,
  educationFinanceScu,
  experience,
} from "@/data/base-profile";
import type { Resume, SkillCategory } from "@/types/resume";

const reflowSkills: SkillCategory[] = [
  {
    label: "React, TypeScript & product UI",
    items: [
      "React and TypeScript in production well beyond the 5+ years / 3+ years React you list",
      "Next.js and modern React patterns (Plantfolio; Bloom admin)",
      "Tailwind CSS and Shadcn UI (Radix-class headless primitives)",
      "Rich workflows: nested data, filters, executive dashboards (Bloom reporting and admin)",
    ],
  },
  {
    label: "Design systems & shared libraries",
    items: [
      "Growing and consuming shared component libraries across a monorepo (Plantfolio)",
      "Storybook: not my headline today; comfortable making it the source of truth for a shared library",
      "Figma partnership and quality bars from Bloom and Tilia",
    ],
  },
  {
    label: "AI-assisted product surfaces",
    items: [
      "Plantfolio: conversational AI (Sage), vision and text models, structured model output",
      "Cursor IDE (Top 1% user) per posting’s expectation for AI-accelerated development",
      "Streaming chat, alerts, and generated summaries: same product class as your agent and deliverables surfaces",
    ],
  },
  {
    label: "Quality, APIs & auth",
    items: [
      "Unit and end-to-end tests (Vitest, Cypress); code review as a habit",
      "REST integration and typed client patterns; OpenAPI-generated clients as a team convention I adopt quickly; GraphQL-heavy consumers at Bloom when the API leans that way",
      "Production auth (e.g. Clerk); OIDC and JWT-heavy stacks are a deepen-on-the-job area where the posting marks them as valuable",
      "Playwright: bonus in post; align with team choice",
    ],
  },
  {
    label: "Build & delivery",
    items: [
      "Turbo, pnpm, Next.js toolchain today; Vite or esbuild-first setups are a short ramp when that is how you ship",
    ],
  },
  baseSkills[4],
];

export const reflowResume: Resume = {
  slug: "reflow",
  homeListLabel: "Re:Build (Reflow)",
  pageTitle: "Shenstone, Andrew - Application for Senior Frontend Engineer, Reflow @ Re:Build",
  target: {
    company: "Re:Build",
    role: "Senior Frontend Engineer",
    teamOrFocus: "Reflow (AI platform for hardware product development)",
  },
  contact,
  about:
    "Senior frontend engineer with twelve years in React and TypeScript, well past the five-year and three-year React focus you list. Reflow at Re:Build is a hardware coordination and AI-native product where I would bring the same craft I use on Plantfolio: shared component libraries, dense workflows, executive dashboards, and LLM-backed features, with Cursor as a daily tool (top 1% user). Hardware program and PLM vocabulary is new for me as a specialty, not a past job title. I ship with Vitest and Cypress, use Turbo and Next as my default stack, and adopt Storybook, Vite-style builds, and OpenAPI-generated clients when that is how your team ships. Auth today is production-grade with providers like Clerk; I go deeper on OIDC and JWT as your stack requires. I lead through design partnership, architecture discussion, and code review, not formal people management.",
  skills: reflowSkills,
  experience,
  companyReferences,
  education: educationFinanceScu,
};
