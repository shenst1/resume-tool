import {
  baseSkills,
  companyReferences,
  contact,
  experience,
} from "@/data/base-profile";
import type { Resume, SkillCategory } from "@/types/resume";

const customerIoSkills: SkillCategory[] = [
  {
    label: "Frontend",
    items: [
      "TypeScript",
      "React",
      "Next.js",
      "JavaScript (modern)",
      "HTML & CSS",
      "Tailwind CSS",
      "Shadcn UI",
      "Ember.js (early professional use at Ply; would re-ramp; eager to pair with experts)",
    ],
  },
  {
    label: "Product & craft",
    items: [
      "Accessible, performant UI",
      "Design systems & reusable components",
      "Complex workflows simplified for end users",
      "Collaboration with design and product",
    ],
  },
  {
    label: "Testing & quality",
    items: ["Vitest", "Cypress", "Practical unit, integration, and E2E coverage"],
  },
  {
    label: "Ways of working",
    items: [
      "Ownership across ambiguity (including founder-led delivery)",
      "Pairing, code review, and mentoring (Bloom, Tilia)",
      "AI-assisted development (Cursor power user) for speed and better tradeoffs",
    ],
  },
  baseSkills[1],
  baseSkills[3],
  baseSkills[4],
];

export const customerIoResume: Resume = {
  slug: "customer-io",
  pageTitle:
    "Shenstone, Andrew - Application for Senior Software Engineer, Frontend @ Customer.io",
  target: {
    company: "Customer.io",
    role: "Senior Software Engineer, Frontend",
    teamOrFocus: "Americas Remote",
  },
  contact,
  about:
    "Senior engineer with 12+ years focused on React/TypeScript products, complex admin workflows, and craft-level UI. Customer.io’s work—behavioral data powering email, push, in-app, and SMS that people actually want—lines up with my background in martech- and commerce-adjacent integrations, long-lived operator tools, and founder-owned product delivery at Plantfolio. I think like a user: accessibility, performance, and design systems that scale. I touched Ember.js in early client work at Ply Interactive when the framework was new; it’s not my recent daily stack, but it’s not alien, and I’m comfortable ramping in a codebase where React and Ember coexist. I like ownership, async collaboration, and using AI thoughtfully to ship faster without cutting corners on quality.",
  skills: customerIoSkills,
  experience,
  companyReferences,
};
