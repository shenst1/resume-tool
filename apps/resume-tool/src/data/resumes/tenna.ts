import {
  baseSkills,
  companyReferences,
  contact,
  educationFinanceScu,
  experience,
} from "@/data/base-profile";
import type { Resume, SkillCategory } from "@/types/resume";

const tennaSkills: SkillCategory[] = [
  {
    label: "Frontend",
    items: [
      "TypeScript",
      "JavaScript",
      "React",
      "Next.js",
      "Node.js",
      "Component architecture & reusable UI",
      "Responsive layout & UX polish",
      "Performance optimization",
      "Accessibility-minded delivery",
    ],
  },
  {
    label: "Testing & quality",
    items: ["Vitest", "Cypress", "Unit, integration, and E2E testing", "Code review & maintainability"],
  },
  {
    label: "Collaboration & delivery",
    items: [
      "Cross-functional work with design, product, and backend",
      "Agile / iterative delivery",
      "Documentation for onboarding and shared context",
      "Pairing and informal technical lead (no direct reports)",
    ],
  },
  baseSkills[3],
  baseSkills[4],
];

export const tennaResume: Resume = {
  slug: "tenna",
  pageTitle: "Shenstone, Andrew - Application for Senior Front-end Engineer @ Tenna",
  target: {
    company: "Tenna",
    role: "Senior Front-end Engineer",
    teamOrFocus: "Construction equipment & asset platform",
  },
  contact,
  about:
    "Senior software engineer with 12+ years building customer-facing and internal products where the UI has to stay legible under real-world complexity—multi-step workflows, dense data, and performance that holds up for daily operators. I ship primarily in React and TypeScript with Node.js in the loop, care about reusable components and design-system-style consistency, and treat testing (Vitest, Cypress) and code review as part of the product bar. I’ve partnered closely with design and product at Bloom and Tilia, owned features from prototype thinking through production, and optimized frontends for maintainability and speed. Tenna’s mission—connecting construction assets, people, and data—fits that pattern: high-trust B2B software, field-adjacent realities, and interfaces that have to earn trust on every job. My AWS footprint today centers on S3 and EC2-class usage; I’m comfortable deepening exposure to the broader AWS services your stack relies on.",
  skills: tennaSkills,
  experience,
  companyReferences,
  education: educationFinanceScu,
};
