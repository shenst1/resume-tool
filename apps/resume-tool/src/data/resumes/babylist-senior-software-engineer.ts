import {
  baseSkills,
  companyReferences,
  contact,
  educationFinanceScu,
  experience,
} from "@/data/base-profile";
import type { Resume, SkillCategory } from "@/types/resume";

const babylistSkills: SkillCategory[] = [
  {
    label: "Full-stack (Babylist stack)",
    items: [
      "React and TypeScript in production for 12+ years; Next.js and Node on Plantfolio today",
      "Ruby on Rails (~6 years through Rails 6): GraphQL APIs, CMS patterns, CircleCI at Bloom; eager to lean back into Rails day to day",
      "E-commerce and marketplace patterns: Shopify Plus integrations and operator tooling at Bloom; Stripe checkout and subscriptions on Plantfolio",
      "AWS (S3, EC2) in production; Sidekiq, MySQL, and Redis are honest ramps from Postgres/Mongo and async job patterns elsewhere",
    ],
  },
  {
    label: "AI-first engineering",
    items: [
      "Cursor (top 1% user) and Claude-class agents as daily workflow since early in the current wave, not a recent experiment",
      "Production LLM features on Plantfolio (vision, chat, retrieval); architectural judgment on when to accept vs rewrite AI-generated code",
      "Codebases structured for agent-friendly work: typed TypeScript monorepos, tests, clear boundaries",
      "Comfort with higher experimentation rate and throwing away approaches that do not ship value",
    ],
  },
  {
    label: "Delivery, quality & influence",
    items: [
      "Vitest, React Testing Library, Cypress; 90%+ coverage discipline on critical paths at Tilia",
      "End-to-end ownership: founder product from customer calls through production; cross-functional work with product and design",
      "Process and tooling improvements via review, pairing, and standards (Chakra adoption lead at Tilia; no direct reports)",
      "Revenue-adjacent and growth-style delivery: onboarding, billing, integrations, and measuring whether releases helped users",
      "Dedicated adtech platform tenure is not my headline; commerce, lifecycle integrations, and operator growth tooling are adjacent",
    ],
  },
  baseSkills.find((c) => c.label === "Architecture & async") ?? baseSkills[3],
];

export const babylistSeniorSoftwareEngineerResume: Resume = {
  slug: "babylist-senior-software-engineer",
  createdAt: "2026-06-01",
  pageTitle:
    "Shenstone, Andrew - Application for Senior Software Engineer @ Babylist",
  homeListLabel: "Babylist",
  target: {
    company: "Babylist",
    role: "Senior Software Engineer",
    teamOrFocus: "Engineering org (team fit via interview: revenue, product, or platform)",
  },
  contact,
  about: `I am applying for Senior Software Engineer at Babylist because the role matches how I already work: **React** and **Ruby on Rails** in production, marketplace and commerce systems where growth and reliability both matter, and **AI** as part of the daily workflow, not a side experiment.

I have 12+ years shipping end to end. At Bloom I spent roughly six years on **Rails** GraphQL APIs and **Shopify Plus** commerce integrations for winery operators and their customers. On Plantfolio I own a modern **TypeScript** stack with **Stripe**, strong tests, and production LLM features customers use. I use **Cursor** daily (top 1% user) with clear judgment on when generated code needs architectural correction. I mentor through design discussion, reviews, and pairing (no direct reports).

**MySQL**, **Redis**, and **Sidekiq** are ramps from Postgres/Mongo and background-job patterns I have shipped; the habits (migrations, observability, idempotent jobs) transfer. Dedicated adtech ownership is not my headline; registry, shop, and lifecycle commerce problems are familiar from multi-sided retail work. U.S.-based, remote-first, and excited about team placement across revenue, product experience, or platform during interviews.`,
  skills: babylistSkills,
  experience,
  companyReferences,
  education: educationFinanceScu,
  outreachEmail: {
    label: "Technical recruiter (after applying; personalize [First name])",
    subject: "Senior Software Engineer application / Andrew Shenstone",
    body: `Hey [First name],

I recently applied for Senior Software Engineer at Babylist through your job portal. Same resume attached here.

I'm writing to let you know ⛔️🤖 I'm not a robot and I'm genuinely interested in whether I'm the right fit. I applied because I think my background fits the role, and I'd love to get a conversation started if you're the right person to talk to.

Andrew`,
  },
};
