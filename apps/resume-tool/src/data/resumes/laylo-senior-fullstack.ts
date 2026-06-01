import {
  baseSkills,
  companyReferences,
  contact,
  educationFinanceScu,
  experience,
} from "@/data/base-profile";
import type { Resume, SkillCategory } from "@/types/resume";

const layloSeniorFullstackSkills: SkillCategory[] = [
  {
    label: "Full stack & drop-scale product (posting)",
    items: [
      "TypeScript, React, and Next.js in production for 12+ years; Node.js services and API design end to end",
      "GraphQL and REST in production (Bloom, Tilia, agency work); typed clients and pragmatic schema boundaries",
      "AWS in production (S3, EC2); Vercel/Turbo CI habits; real-time and high-traffic patterns from commerce and fair-scale apps",
      "Founder delivery at Plantfolio: 0-to-1 product, Figma-to-ship UX, Stripe, and patterns that stay maintainable under growth",
    ],
  },
  {
    label: "AI-native engineering (explicit posting)",
    items: [
      "Cursor (top 1% user) and Claude-class agents daily: force multiplier with human ownership of architecture and production risk",
      "Codebases structured for agent-friendly iteration: typed monorepos, Vitest/Cypress, clear package boundaries",
      "Critically review AI output before merge; set standards through pairing and review, not title inflation",
    ],
  },
  {
    label: "Creator, commerce & product partnership",
    items: [
      "Creator-adjacent commerce: Shopify Plus integrations (Bloom), payments tooling (Tilia), founder product with subscription flows",
      "Product opinions backed by customer calls, design partnership, and pushback when scope hurts users",
      "Startup speed with production integrity: tests, instrumentation, and safe rollouts when moments cannot break",
    ],
  },
  baseSkills.find((c) => c.label === "Architecture & async") ?? baseSkills[3],
];

export const layloSeniorFullstackResume: Resume = {
  slug: "laylo-senior-fullstack",
  createdAt: "2026-06-01",
  pageTitle:
    "Shenstone, Andrew - Application for Senior Fullstack Engineer @ Laylo",
  homeListLabel: "Laylo",
  target: {
    company: "Laylo",
    role: "Senior Fullstack Engineer",
    teamOrFocus:
      "Drop CRM for creators; 0-to-1 products with founders; remote North America",
  },
  contact,
  about: `Senior full-stack engineer who ships 0-to-1 products with founders: **TypeScript**, **React**, **Node.js**, **GraphQL**, and **AWS**, plus a daily **Cursor** and Claude-class workflow (top 1% Cursor user) where I own architecture and review, not autopilot merges.

Laylo’s drop CRM maps to how I work: high-stakes moments, visually demanding UX, and real-time fan data that has to stay correct under traffic. I built Plantfolio from scratch (product, Figma partnership, Next.js, Stripe, Postgres) and have creator-commerce context from Bloom and payments-adjacent tooling at Tilia. I push back in product threads when something will hurt users, and I set patterns through code review and pairing.

I have not shipped inside the music or live-events industry specifically; fan CRM and drop launch mechanics would be ramps inside your domain. Neo4j and mobile-native depth are not my headline tenure. Remote North America and founder-close collaboration are alignments I would confirm in process.`,
  skills: layloSeniorFullstackSkills,
  experience,
  companyReferences,
  education: educationFinanceScu,
  outreachEmail: {
    label:
      "3rd-tier LinkedIn or email (loose connection; personalize [First name])",
    subject: "Senior fullstack engineering at Laylo / Andrew Shenstone",
    body: `Hi [First name],

I hope this is okay to send as a loose LinkedIn connection. I applied for Senior Fullstack Engineer at Laylo and am interested in drop CRM and creator-facing product work. I am not assuming you are hiring or on engineering; any perspective or pointer would help.

I am a senior engineer with production TypeScript, React, Node, GraphQL, AWS, founder 0-to-1 delivery, and a daily Cursor and Claude agentic workflow. Music and live-events domain depth would be a ramp for me, not something I would overstate.

If a short chat ever makes sense, I would be glad to connect. I can share my resume if helpful.

Thank you,
Andrew Shenstone
shenst1@gmail.com
339-223-0797`,
  },
};
