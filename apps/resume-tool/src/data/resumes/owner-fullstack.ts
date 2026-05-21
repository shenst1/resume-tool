import {
  baseSkills,
  companyReferences,
  contact,
  experience,
} from "@/data/base-profile";
import type { Resume, SkillCategory } from "@/types/resume";

const ownerSkills: SkillCategory[] = [
  {
    label: "0→1 product engineering",
    items: [
      "Founder-led delivery: customer calls, roadmap judgment, ship and verify in production (Plantfolio)",
      "Full-stack ownership from conception through launch—matches Owner’s build-new-features mandate",
      "Cross-functional partnership with product and design (Bloom, Tilia, agency)",
      "Mentoring and code review; informal technical lead (no direct reports)",
    ],
  },
  {
    label: "Owner stack overlap",
    items: [
      "TypeScript everywhere in recent production",
      "React and Next.js (App Router, Server Components)",
      "Node.js APIs and integrations",
      "MongoDB: 1+ year production on Plantfolio before Postgres/Neon migration—document modeling in production",
      "PostgreSQL and Prisma on Neon today (evaluated Supabase, did not ship on it)",
      "Vue listed in your stack is a ramp (React/Next primary)",
      "AWS (S3, EC2); Stripe, commerce, and operator-facing admin surfaces",
    ],
  },
  {
    label: "Local business & commerce",
    items: [
      "Independent operator tooling: wineries on Shopify Plus (Bloom); garden-center B2B rollout (Plantfolio)",
      "Online ordering, subscriptions, and payments-adjacent flows where mistakes cost real money",
      "Agentic product philosophy alignment: AI features and software that does work for operators",
    ],
  },
  baseSkills.find((c) => c.label === "AI-native product & workflow") ?? baseSkills[2],
  baseSkills.find((c) => c.label === "Cloud & Tools") ?? baseSkills[4],
];

export const ownerFullstackResume: Resume = {
  slug: "owner-fullstack",
  createdAt: "2026-05-20",
  pageTitle: "Shenstone, Andrew - Application for Software Engineer, Full-Stack @ Owner",
  homeListLabel: "Owner",
  target: {
    company: "Owner",
    role: "Software Engineer, Full-Stack",
    teamOrFocus: "Remote (US / Canada)",
  },
  contact,
  about: `I am applying for Software Engineer, Full-Stack at Owner because the role matches how I work: **TypeScript** across **React**, **Next.js**, and **Node**, 0→1 product ownership, and software that helps independent operators win online—not generic enterprise tools.

On Plantfolio I founded and shipped an **AI-native** product end to end—LLM vision, chat, and **RAG** search customers use—and I build with **AI-native engineering** as my default: **Cursor** (top 1% user), Claude-class agents, and a typed monorepo structured for agent-friendly iteration. Stack includes **MongoDB** (1+ year production), late migration to Postgres on **Neon** (evaluated Supabase, did not ship it), **Stripe**, and operator-facing UX. That maps to Owner’s agentic mission: local businesses, ordering paths, and high ownership. At Bloom I built commerce systems for independent wineries on **Shopify Plus**—same operator-economics shape as restaurants fighting platform fees.

I have 12+ years in software engineering (well past your 3+ bar) and thrive in product-focused startups: proactive communication, roadmap collaboration, and shipping across the system. **Vue** is not my daily framework; **React/Next** is. I am motivated by Owner’s agentic direction—software that does the work for owners.`,
  skills: ownerSkills,
  experience,
  companyReferences,
  outreachEmail: {
    label: "3rd-tier LinkedIn or email (loose connection; personalize [First name])",
    subject: "Full-stack engineering at Owner / Andrew Shenstone",
    body: `Hi [First name],

I hope a note from a loose LinkedIn connection is okay. I applied for Software Engineer, Full-Stack at Owner and am interested in how you ship agentic product for restaurant owners, not only the ordering surface. I am not assuming you hire for that team or want inbound messages.

I am a senior engineer with TypeScript, React, Next.js, Node, and Mongo in production, founder ownership on an AI-native product (vision, chat, RAG), and independent-operator commerce at Bloom on Shopify Plus. Vue would be a ramp; React/Next is my daily stack. Happy to share my resume if useful. Thank you for reading.

Andrew Shenstone
shenst1@gmail.com
339-223-0797`,
  },
};
