import { baseSkills, companyReferences, contact, experience } from "@/data/base-profile";
import type { Resume, SkillCategory } from "@/types/resume";

const renewedVisionSkills: SkillCategory[] = [
  {
    label: "Web, mobile & TypeScript",
    items: [
      "React",
      "React Native (multiple production apps; Washington State Fair scaled from tens of thousands into the hundreds of thousands of users cumulatively, Ply)",
      "Next.js (App Router, React Server Components, strategic caching)",
      "TypeScript (type-safe application code end to end)",
      "State management (Zustand, server/client boundaries)",
      "Performance: code splitting, bundle optimization, render efficiency",
    ],
  },
  {
    label: "Product & platform",
    items: [
      "Monorepos (pnpm, Turbo), 12+ package workspace (Plantfolio)",
      "Media-heavy UIs: image pipelines, AWS S3, galleries, search at scale",
      "API integration and data modeling (Prisma, PostgreSQL, Node)",
      "Design systems, accessibility-minded UI, Figma collaboration",
    ],
  },
  {
    label: "Leadership & delivery",
    items: [
      "End-to-end feature ownership from integration through UI",
      "Mentoring through pairing and code review (no direct reports)",
      "CI/CD, Vitest, Cypress; high-traffic seasonal production experience",
    ],
  },
  baseSkills[4],
];

export const renewedVisionResume: Resume = {
  slug: "renewed-vision",
  pageTitle:
    "Shenstone, Andrew - Application for Software Engineer (React / Next.js / React Native) @ Renewed Vision",
  target: {
    company: "Renewed Vision",
    role: "Software Engineer",
    teamOrFocus: "React / Next.js / React Native (web & cross-platform)",
  },
  contact,
  about:
    "Senior software engineer with 12+ years shipping production web and mobile products. At Ply I shipped multiple React Native apps to production, including the Washington State Fair app—high-traffic seasonal load, from tens of thousands of users into the hundreds of thousands cumulatively over seasons. Recently I have built a founder-led Next.js platform with deep TypeScript, App Router and server components, monorepo discipline (pnpm/Turbo), and performance-conscious delivery. I own features end-to-end: API integration, data modeling, component architecture, and production quality. At Bloom I built GraphQL APIs consumed by mobile and web clients. Renewed Vision’s live production and media-rich world fits what I have done at scale; I am motivated by mentoring through reviews and pairing and by growing architectural influence on shared frontend patterns.",
  skills: renewedVisionSkills,
  experience,
  companyReferences,
};
