import { baseSkills, companyReferences, contact, experience } from "@/data/base-profile";
import type { Resume, SkillCategory } from "@/types/resume";

const rezdySkills: SkillCategory[] = [
  {
    label: "Startup-mode product engineering",
    items: [
      "Founder 0→1 on Plantfolio: turn ambiguous ideas into plans, ship end to end, verify with real users",
      "Clarify scope, edge cases, and customer impact before writing code; partner directly with product and design",
      "Pragmatic tradeoffs between speed, quality, maintainability, and product value under minimal oversight",
      "12+ years in product-focused teams; staff-level habits through review, patterns, and execution standards (no direct reports)",
    ],
  },
  {
    label: "Full-stack delivery & quality",
    items: [
      "TypeScript, React, Next.js, Node.js, PostgreSQL, and REST/GraphQL APIs in production",
      "Operator- and commerce-adjacent SaaS: Bloom (Shopify Plus wineries), Tilia (payments platform tooling), high-traffic seasonal surfaces",
      "Testing and rollout discipline: Vitest, Cypress; high-coverage culture on payments-adjacent work at Tilia",
      "Ruby on Rails (~6 years through Rails 6) when services or legacy-adjacent integration patterns matter",
    ],
  },
  {
    label: "AI-assisted engineering (posting-aligned)",
    items: [
      "Cursor (top 1% user) and Claude-class agents daily: force multiplier with human judgment on architecture and production risk",
      "Production LLM features on Plantfolio (vision, chat, retrieval); codebase structured for agent-friendly iteration",
      "Direct communication on tradeoffs, risks, and uncertainty; bias for action without outsourcing decisions to tools",
    ],
  },
  baseSkills.find((c) => c.label === "Cloud & Tools") ?? baseSkills[4],
];

export const rezdySeniorStaffSoftwareEngineerResume: Resume = {
  slug: "rezdy-senior-staff-software-engineer",
  createdAt: "2026-05-29",
  pageTitle:
    "Shenstone, Andrew - Application for Senior / Staff Software Engineer @ Rezdy",
  homeListLabel: "Rezdy",
  target: {
    company: "Rezdy",
    role: "Senior / Staff Software Engineer",
    teamOrFocus:
      "New product (high-autonomy squad); sister brands Checkfront & Regiondo; remote",
  },
  contact,
  about: `Senior product engineer with 12+ years shipping full-stack software in ambiguous, high-ownership environments. Rezdy’s charter for this role matches how I work: clarify loosely defined ideas before coding, break problems into shippable increments, and move with urgency without sacrificing maintainability or rollout judgment.

Plantfolio is my proof point for startup-mode execution inside a larger industry context: customer calls, technical plans, implementation across backend and frontend, tests, and production verification. I use AI coding assistants daily (Cursor, top 1% user) as a force multiplier while keeping architecture, review, and risk calls human-owned. At Bloom and Tilia I shipped operator-facing SaaS where booking, payments, and trust-sensitive workflows had to stay correct under real load.

Tours and activities booking is new domain vocabulary for me; what transfers is B2B operator software, multi-sided commerce patterns, and building greenfield product alongside established platforms. I am applying at senior scope with staff-level habits (patterns, reviews, clearer execution standards) and would calibrate level with you on impact expectations and team shape.`,
  skills: rezdySkills,
  experience,
  companyReferences,
  outreachEmail: {
    label:
      "3rd-tier LinkedIn or email (loose connection; personalize [First name])",
    subject: "Senior / staff software engineering at Rezdy / Andrew Shenstone",
    body: `Hi [First name],

I hope this is okay to send as a loose LinkedIn connection. I applied for Senior / Staff Software Engineer at Rezdy (new product squad) and am interested in high-autonomy work across the Checkfront/Regiondo/Rezdy group. I am not assuming you are hiring or on engineering; any perspective or pointer would help.

I am a senior full-stack engineer with founder 0→1 ownership, production TypeScript/React/Node/Postgres delivery, and daily AI-assisted development with strong engineering judgment. Experiences booking is new domain for me; operator SaaS and commerce patterns are not.

If a short chat ever makes sense, I would be glad to connect. I can share my resume if helpful.

Thank you,
Andrew Shenstone
shenst1@gmail.com
339-223-0797`,
  },
};
