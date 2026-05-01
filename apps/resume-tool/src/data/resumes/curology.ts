import { companyReferences, contact, experience } from "@/data/base-profile";
import type { Resume, SkillCategory } from "@/types/resume";

const curologySkills: SkillCategory[] = [
  {
    label: "TypeScript, React & web platform",
    items: [
      "TypeScript",
      "JavaScript",
      "React",
      "Next.js (App Router, server components)",
      "Tailwind CSS and component-driven styling (design systems, Shadcn UI)",
    ],
  },
  {
    label: "Commerce & Shopify ecosystem",
    items: [
      "Shopify Plus: all Bloom.wine clients were on Plus—API integrations, commerce systems, Polaris UI standards with design",
      "Stripe, Shipstation, and multi-channel commerce integrations",
      "High-traffic retail and seasonal production (Ply)",
    ],
  },
  {
    label: "Data, quality & cloud",
    items: [
      "SQL and relational modeling (PostgreSQL, Prisma; complex schemas and reporting)",
      "AWS (S3, EC2) in production; CI/CD, Git, automated testing (Vitest, Cypress)",
      "OpenAI / AI SDK features in production (Plantfolio)—adjacent to ML-powered product surfaces",
    ],
  },
  {
    label: "Leadership & delivery",
    items: [
      "Mentorship through pairing and code review; informal technical lead (no direct reports)",
      "Cross-functional work with product and design; clear communication with stakeholders",
      "Architecting for change: monorepos, APIs, maintainable boundaries",
    ],
  },
];

export const curologyResume: Resume = {
  slug: "curology",
  pageTitle: "Shenstone, Andrew - Application for Senior Software Engineer @ Curology",
  target: {
    company: "Curology",
    role: "Senior Software Engineer",
    teamOrFocus: "Patient-facing apps & internal tools",
  },
  contact,
  about:
    "Senior software engineer with 12+ years shipping full-stack and frontend-heavy products with strong TypeScript, React, and SQL. At Bloom every winery client was on Shopify Plus—I built integrations, admin surfaces, and Polaris-aligned UI with designers alongside commerce flows that had to stay correct under real money and operations. I have production AWS usage (S3, EC2), automated testing and CI/CD, and a track record of mentoring engineers and leading technical delivery without needing people management on my title. Python is not my primary résumé language today; I am comfortable working across services with clear contracts and ramping where the stack requires it. Your posting also emphasizes Hydrogen and Oxygen for headless storefronts; my Bloom work centered on Plus merchant tooling and integrations rather than a Hydrogen/Oxygen storefront—happy to discuss how those patterns transfer. I am drawn to Curology’s mission: reliable software, patient trust, and craft at scale.",
  skills: curologySkills,
  experience,
  companyReferences,
};
