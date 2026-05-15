import { baseSkills, companyReferences, contact, experience } from "@/data/base-profile";
import type { Resume, SkillCategory } from "@/types/resume";

const higharcSkills: SkillCategory[] = [
  {
    label: "Core stack (posting align)",
    items: [
      "TypeScript",
      "JavaScript",
      "React",
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "Prisma",
      "API design & versioning",
    ],
  },
  {
    label: "Integrations & enterprise-style delivery",
    items: [
      "REST and third-party APIs (commerce, payments, CMS, logistics—Bloom, Tilia)",
      "GraphQL across services and clients (Tilia, Bloom, earlier agency)",
      "Webhooks, background jobs, async workflows (Inngest, ETL-style work at Tune)",
      "B2B / multi-customer platforms (many winery tenants on shared patterns at Bloom)",
      "Cross-functional work with product stakeholders and customer constraints",
    ],
  },
  {
    label: "Quality & scale",
    items: [
      "Automated testing (Vitest, Cypress) and high regression bar on teams",
      "CI/CD (CircleCI; pnpm/Turbo monorepos)",
      "Performance and reliability-minded shipping on production systems",
    ],
  },
  baseSkills.find((c) => c.label === "AI/ML") ?? baseSkills[3],
];

export const higharcResume: Resume = {
  slug: "higharc",
  createdAt: "2026-05-14",
  pageTitle:
    "Shenstone, Andrew - Application for Senior Full Stack Software Engineer @ Higharc",
  homeListLabel: "Higharc",
  target: {
    company: "Higharc",
    role: "Senior Full Stack Software Engineer",
    teamOrFocus: "B2B platform integrations (including ERP connectivity)",
  },
  contact,
  about: `Senior full-stack engineer with 12+ years on TypeScript, React, Next.js, Node, and PostgreSQL—shipping products where third-party systems, API contracts, and reliability all have to hold up in the real world.

I’ve repeatedly worked the integration layer: many vendor APIs plus Rails GraphQL across web and mobile at Bloom, GraphQL we built and consumed at Tilia’s payments platform, and ETL-style automation and Node services at Tune—always with product and stakeholder alignment, not just ticket implementation.

I haven’t spent years inside a single ERP product; my strength is designing maintainable integration boundaries, handling uneven partner APIs, and raising the bar on tests and observability where services touch customers. Code and references: github.com/shenst1.`,
  skills: higharcSkills,
  experience,
  companyReferences,
};
