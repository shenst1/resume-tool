import {
  baseSkills,
  companyReferences,
  contact,
  educationFinanceScu,
  experience,
} from "@/data/base-profile";
import type { Resume, SkillCategory } from "@/types/resume";

const postscriptSkills: SkillCategory[] = [
  {
    label: "Frontend",
    items: [
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Shadcn UI",
      "Component architecture & reusable UI systems",
      "Performance & rendering optimization",
      "Accessibility-minded delivery",
    ],
  },
  {
    label: "Testing & quality",
    items: ["Vitest", "Cypress", "Unit, integration, and E2E testing"],
  },
  {
    label: "Collaboration & leadership (IC)",
    items: [
      "Pairing & code review with mid-level and junior engineers",
      "Cross-functional delivery with design, product, and backend",
      "Technical planning, estimation, and recruiting participation",
    ],
  },
  baseSkills[1],
  baseSkills[3],
  {
    label: "Commerce & ecosystem",
    items: [
      "Shopify ecosystem (Polaris-era component standards)",
      "Stripe & third-party ecommerce APIs",
      "High-traffic seasonal retail web experiences",
    ],
  },
  baseSkills[4],
];

export const postscriptResume: Resume = {
  slug: "postscript",
  pageTitle:
    "Shenstone, Andrew - Application for Senior Frontend Engineer — Messaging Channels @ Postscript",
  target: {
    company: "Postscript",
    role: "Senior Frontend Engineer",
    teamOrFocus: "Messaging Channels",
  },
  contact,
  about:
    "Senior engineer with deep frontend craft and 12+ years shipping React/TypeScript products—including complex, interactive admin experiences, commerce integrations, and high-traffic seasonal sites. I care about polished UX, accessible and performant delivery, and frontend patterns that scale (shared components, testing discipline, clear architecture). I’ve mentored engineers through pairing and code review at Bloom and Tilia, partnered daily with design and product, and helped establish UI patterns and quality bars without needing people management on my title. Postscript’s multi-channel messaging platform for Shopify merchants fits my background: commerce-adjacent integrations (Shopify ecosystem, Stripe, APIs), rich workflows beyond simple CRUD, and founder-led shipping where frontend quality and iteration speed both matter.",
  skills: postscriptSkills,
  experience,
  companyReferences,
  education: educationFinanceScu,
};
