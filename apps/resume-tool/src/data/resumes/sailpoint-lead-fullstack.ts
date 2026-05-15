import { baseSkills, companyReferences, contact, experience } from "@/data/base-profile";
import type { Resume, SkillCategory } from "@/types/resume";

const sailpointSkills: SkillCategory[] = [
  {
    label: "Next.js full stack & frontend architecture",
    items: [
      "Next.js with React Server Components, App Router, and TypeScript in production (Plantfolio; Bloom admin was Next-centric)",
      "API routes, server actions, middleware, and BFF-style boundaries between UI and services",
      "React and TypeScript at senior depth; component architecture, Tailwind, Shadcn UI patterns",
      "Performance, security, and accessibility-minded delivery—happy to align with WCAG 2.1 bar and automated checks where you standardize them",
    ],
  },
  {
    label: "Headless CMS, content & integrations",
    items: [
      "Production headless CMS: DatoCMS at Bloom (schemas, structured content, editorial workflows)—Sanity not in production yet, but same problems: content modeling, previews, validation, and stable rendering contracts",
      "REST and GraphQL APIs consumed and designed across products (Tilia, Bloom, agency)",
      "Enterprise-style integrations: marketing and commerce stacks (Shopify Plus ecosystem, Mailchimp, Stripe, ActiveCampaign, Shipstation) plus many bespoke vendor APIs",
      "Preferred items to calibrate: page-builder / schema-driven rendering, WordPress or CMS migrations—agency-era web work included content-led sites; depth depends on your exact migration program",
    ],
  },
  {
    label: "Leadership (IC), quality & delivery",
    items: [
      "Technical leadership without people management: architecture direction, standards, pairing, and escalation support—explicitly how I’ve operated",
      "CI/CD (CircleCI; pnpm/Turbo monorepos), Git workflows, and automated testing (Vitest, Cypress)",
      "Internationalization at scale is not my headline credential; English-first products with strong discipline for layout, copy, and edge cases—ready to adopt your i18n stack and governance",
      "Design-system habits (Chakra adoption at Tilia, Shadcn systems, Shopify Polaris-era collaboration)—Storybook formally would be a learn-or-reintroduce tool depending on team standards",
    ],
  },
  baseSkills.find((c) => c.label === "Cloud & Tools") ?? baseSkills[4],
];

export const sailpointLeadFullstackResume: Resume = {
  slug: "sailpoint-lead-fullstack",
  createdAt: "2026-05-14",
  pageTitle:
    "Shenstone, Andrew - Application for Lead / Principal Full Stack Engineer @ SailPoint",
  homeListLabel: "SailPoint",
  target: {
    company: "SailPoint",
    role: "Lead / Principal Full Stack Engineer",
    teamOrFocus: "Web platforms — Next.js, CMS-driven experiences, integrations",
  },
  contact,
  about: `Lead-oriented full-stack engineer with 12+ years shipping **Next.js** and **React** applications where architecture, content, and integrations all have to survive enterprise scrutiny. I’m hands-on: **App Router** and **Server Components**, **TypeScript**, API routes and middleware patterns, and close partnership with product and design—not slide-only architecture.

SailPoint’s scale and buyer expectations mean performance, security, accessibility, and maintainable CMS modeling are the job. I’ve owned headless CMS work in production via **DatoCMS** (schemas, structured content, integrations); Sanity is on your preferred list rather than my résumé header today, but the underlying skill—structured content, previews, and predictable rendering—is the same. I’ve also lived in **GraphQL** and **REST** integration layers long enough to own the “full stack” glue you described, including marketing and operations-heavy workflows. Principal-style influence without direct reports matches how I already lead: standards, reviews, pairing, and calm escalation when production is on the line.`,
  skills: sailpointSkills,
  experience,
  companyReferences,
};
