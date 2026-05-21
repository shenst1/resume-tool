import {
  companyReferences,
  contact,
  educationFinanceScu,
  experience,
} from "@/data/base-profile";
import type { Resume, SkillCategory } from "@/types/resume";

/** Indeed / general-purpose profile: senior product engineer, full-stack with front-end emphasis. */
export const baseResumeAbout = `Senior product engineer with 12+ years shipping software—full-stack in practice, with a front-end emphasis. My default way of working is AI-native engineering: **Cursor** (top 1% user) and **Claude Code**–class agents on every feature, with me owning architecture, tests, and what actually reaches production—not autopilot merges.

That workflow is how I built **Plantfolio**, which is also an AI-native product in the customer-facing sense: LLM vision, conversational UX, and retrieval over a large catalog, on a monorepo structured so agents can ship quickly without sacrificing maintainability. The product story and the engineering story reinforce each other; the experience section has the detail.

I am strongest where product, design, and engineering meet: clarify the problem, scope a shippable path, build the UI and APIs, and check whether the release helped. React has been my primary UI stack across agency, platform, and founder work; TypeScript and Next.js are what I ship today. I have also worked on Ruby on Rails (~6 years through Rails 6), MongoDB and PostgreSQL, and payments and commerce integrations. I lead through pairing, code review, and clear execution (no direct reports).`;

const baseResumeSkills: SkillCategory[] = [
  {
    label: "Product engineering",
    items: [
      "Discovery → build → measure: customer input, scoping, implementation, production verification",
      "Front-end-leaning full-stack: UX partnership, APIs, and data modeling when the product needs it",
      "B2B SaaS, commerce, and regulated retail (payments-adjacent at Tilia; Shopify Plus at Bloom)",
      "Informal technical lead via pairing, reviews, and design-system adoption (no direct reports)",
    ],
  },
  {
    label: "Frontend (primary)",
    items: [
      "TypeScript",
      "React",
      "Next.js (App Router, Server Components)",
      "React Native",
      "Tailwind CSS",
      "Shadcn UI",
      "Component libraries & design systems",
      "Accessibility and performance-minded UI",
    ],
  },
  {
    label: "Full-stack & APIs",
    items: [
      "Node.js",
      "Ruby on Rails (~6 years through Rails 6; GraphQL and monolith work at Bloom and agency)",
      "PostgreSQL",
      "MongoDB (1+ year production on Plantfolio before Postgres migration)",
      "Prisma",
      "GraphQL (production across multiple products)",
      "REST & API design",
      "Stripe",
    ],
  },
  {
    label: "AI-native product & engineering",
    items: [
      "AI-native product: LLM vision, chat, RAG/search in production (Plantfolio)",
      "AI-assisted SDLC: Cursor (top 1% user), Claude Code–class agents—daily since the current wave of coding tools",
      "Monorepos structured for agent-friendly iteration (pnpm, Turbo, typed TypeScript, tests)",
      "OpenAI API & AI SDK",
      "AWS (S3, EC2), Vercel, Vitest & Cypress",
    ],
  },
];

export const baseResume: Resume = {
  slug: "base",
  pageTitle: "Senior Product Engineer — Full-Stack (Front-End Focus)",
  metadataTitle: "Shenstone, Andrew - Senior Product Engineer",
  homeListLabel: "Base (Indeed / general)",
  target: {
    company: "",
    role: "Senior Product Engineer",
    teamOrFocus: "Full-stack with front-end emphasis",
  },
  contact,
  about: baseResumeAbout,
  skills: baseResumeSkills,
  experience,
  companyReferences,
  education: educationFinanceScu,
};
