import {
  baseSkills,
  companyReferences,
  contact,
  experience,
} from "@/data/base-profile";
import type { Resume, SkillCategory } from "@/types/resume";

const algoliaGrowthSkills: SkillCategory[] = [
  {
    label: "Growth & full-stack product",
    items: [
      "Onboarding, activation, and operator UX across complex products (Plantfolio founder; Bloom admin)",
      "Full-stack shipping: TypeScript, React, Next.js, Node; APIs and integrations end to end",
      "Billing and payments integrations (Stripe); marketplace-style third-party connectors (Shopify Plus at Bloom)",
      "Data-informed delivery: customer calls, iteration, and measuring whether releases helped (founder habit)",
      "Mentoring through pairing, code review, and standards (Tilia Chakra adoption; no direct reports)",
    ],
  },
  {
    label: "Search, integrations & platform",
    items: [
      "Algolia in production: 40,000+ species catalog, advanced search and filtering (Plantfolio)",
      "GraphQL and REST integrations; webhooks and async workflows (Inngest, background jobs)",
      "AWS (S3, EC2) in production; event-driven patterns; GCP ramp where teams use it",
      "Experimentation and feature-flag platforms: align to team standards (not a dedicated growth-platform owner yet)",
    ],
  },
  {
    label: "Backend & AI-adjacent",
    items: [
      "Ruby on Rails (~6 years through Rails 6); willing to lean into Algolia’s Ruby stack and ramp on Golang",
      "OpenAI API and AI SDK; LLM features in production (Plantfolio)",
      "Monorepos (pnpm, Turbo), CI/CD, Vitest and Cypress",
      "Cursor (top 1% user): AI-native engineering workflow",
    ],
  },
];

export const algoliaGrowthFullstackResume: Resume = {
  slug: "algolia-growth-fullstack",
  createdAt: "2026-05-20",
  pageTitle:
    "Shenstone, Andrew - Application for Senior Software Engineer, Growth (Fullstack) @ Algolia",
  homeListLabel: "Algolia",
  target: {
    company: "Algolia",
    role: "Senior Software Engineer, Growth (Fullstack)",
    teamOrFocus: "Growth org",
  },
  contact,
  about: `I am applying for Senior Software Engineer, Growth (Fullstack) at Algolia because the role matches how I ship: help new users succeed quickly, build platform pieces (integrations, billing, notifications-style foundations), and own work across **TypeScript**, **React**, and services—not only UI polish.

On Plantfolio I use **Algolia** in production for search over 40,000+ plant species alongside embeddings, so I care personally about discovery UX and setup friction. As founder I owned onboarding flows, Stripe billing, integrations, and full-stack delivery with a growth mindset: talk to users, ship, measure, adjust. At Bloom I built operator tooling on **Shopify Plus** with many third-party integrations; at Tilia I shipped on a payments platform with strong testing discipline. I have ~six years on **Ruby on Rails** and am happy to work in Ruby day to day while ramping on **Golang** where the team goes.

Formal A/B platforms like Amplitude or Hex are not my headline tenure; I am used to pragmatic experiments, feature rollout discipline, and data-informed tradeoffs. I mentor through reviews and pairing and want to help customers get value from Algolia faster.`,
  skills: algoliaGrowthSkills,
  experience,
  companyReferences,
  outreachEmail: {
    label: "3rd-tier LinkedIn or email (loose connection; personalize [First name])",
    subject: "Growth engineering at Algolia / Andrew Shenstone",
    body: `Hi [First name],

I hope this is okay as a loose LinkedIn connection. I applied for the Senior Software Engineer, Growth (Fullstack) role and am interested in how Algolia helps teams get value from search quickly. I am not assuming you are on the Growth org or hiring; any perspective or pointer would mean a lot.

I am a full-stack product engineer (React, TypeScript, Node) with Rails experience and production use of Algolia on my own product (large catalog search). I have owned onboarding, billing integrations, and 0-to-1 features as a founder, and mentored through code review at Bloom and Tilia.

Happy to share my resume if useful. Thank you for reading a note from a distant connection.

Andrew Shenstone
shenst1@gmail.com
339-223-0797`,
  },
};
