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
  createdAt: "2026-05-29",
  pageTitle: "Shenstone, Andrew - Application for Staff Engineer @ Owner",
  homeListLabel: "Owner",
  target: {
    company: "Owner",
    role: "Staff Engineer",
    teamOrFocus: "Remote (US / Canada)",
  },
  contact,
  about: `I am applying for Staff Engineer at Owner because the role is full-stack product work for independent restaurants and local businesses—the same kind of operator problems I have shipped for as a founder and at Bloom.

I have twelve years building with TypeScript, React, Next.js, and Node.js, including MongoDB in production. I founded Plantfolio end to end: talking to customers, designing features, writing tested code, and shipping to production, with AI built into the product itself. At Bloom I built admin and commerce systems for independent wineries on Shopify Plus.

I work closely with product and design, own projects from conception through launch, and mentor teammates through code review and pairing. Owner's vision—one system that does the work for owners—is the product direction I want to help build.`,
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
