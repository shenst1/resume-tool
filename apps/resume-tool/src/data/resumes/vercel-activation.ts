import {
  baseSkills,
  companyReferences,
  contact,
  educationFinanceScu,
  experience,
} from "@/data/base-profile";
import type { Resume, SkillCategory } from "@/types/resume";

const vercelActivationSkills: SkillCategory[] = [
  {
    label: "Platform & frontend",
    items: [
      "TypeScript",
      "JavaScript",
      "Next.js",
      "React",
      "Vercel",
      "Node.js",
      "Fast pages and healthy Core Web Vitals",
    ],
  },
  {
    label: "Product-led engineering",
    items: [
      "Customer discovery & friction triage",
      "Hypothesis-driven iteration",
      "End-to-end ownership: prototype through production",
      "Quality: Vitest, Cypress, code review",
    ],
  },
  baseSkills[2],
  baseSkills[3],
  baseSkills[4],
];

export const vercelActivationResume: Resume = {
  slug: "vercel-activation",
  pageTitle: "Shenstone, Andrew - Application for Software Engineer — Activation @ Vercel",
  target: {
    company: "Vercel",
    role: "Software Engineer",
    teamOrFocus: "Activation (funnels, adoption, experiments)",
  },
  contact,
  about:
    "Senior engineer with 12+ years; strongest in TypeScript, JavaScript, and Next.js. Plantfolio runs on Vercel, so I spend every day in the same kind of stack your customers use. As a founder I talked with users to find drop-off, tightened onboarding, and shipped changes where we could see whether more people finished the job—not just whether we shipped tickets. I start from a clear question, put basic measurement in place, and iterate. I use Flutter (Dart) for mobile work alongside React Native. Go is not a language I have leaned on professionally; if this role needs Go, I will put real time into learning it. I have not had the title growth engineer and I have not been the main owner of a company-wide A/B testing platform; that is work I want to grow into here.",
  skills: vercelActivationSkills,
  experience,
  companyReferences,
  education: educationFinanceScu,
};
