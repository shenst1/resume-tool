import {
  baseSkills,
  companyReferences,
  contact,
  experience,
} from "@/data/base-profile";
import type { Resume, SkillCategory } from "@/types/resume";

const customerIoSkills: SkillCategory[] = [
  {
    label: "Fullstack product engineering",
    items: [
      "TypeScript, React, Next.js, Node.js: ship product-facing features end to end",
      "Go: not my primary production language today; strong statically typed backend habits (Node, Rails) and motivated ramp on Customer.io’s stack",
      "Ember.js: early professional use at Ply when the framework was new; comfortable pairing in a React + Ember codebase",
      "APIs, PostgreSQL, Prisma; relational modeling and performant queries",
    ],
  },
  {
    label: "Product craft & martech-adjacent",
    items: [
      "Operator and marketer-style workflows: complex admin UIs, design systems (Chakra at Tilia; Bloom + Figma)",
      "Integrations ecosystem: Shopify, Stripe, Mailchimp, ActiveCampaign (Bloom); messaging and lifecycle patterns",
      "Accessibility, frontend polish, and backend performance as one customer experience",
    ],
  },
  {
    label: "Ownership & AI-native delivery",
    items: [
      "Founder-led 0→1: own problems end to end, bias for action, verify in production",
      "AI agents in daily workflow: Cursor (top 1% user); scope multi-file work, prompt, review output (posting-aligned)",
      "Mentoring via pairing and code review (Bloom, Tilia; no direct reports)",
      "Vitest, Cypress; testable, performant code habits",
    ],
  },
  baseSkills.find((c) => c.label === "Cloud & Tools") ?? baseSkills[4],
];

export const customerIoResume: Resume = {
  slug: "customer-io",
  createdAt: "2026-05-20",
  pageTitle:
    "Shenstone, Andrew - Application for Fullstack (Product) Engineer @ Customer.io",
  homeListLabel: "Customer.io",
  target: {
    company: "Customer.io",
    role: "Fullstack (Product) Engineer",
    teamOrFocus: "Americas Remote",
  },
  contact,
  about: `I am applying for Fullstack (Product) Engineer at Customer.io because the role matches how I work: own customer-facing problems end to end, care about polish and performance together, and ship full-stack product value—not tickets in isolation.

I have 12+ years building and scaling product features (**TypeScript**, **React**, **Node**, PostgreSQL). Customer.io’s world—behavioral data powering email, push, in-app, and SMS people actually want—lines up with martech-adjacent integrations and long-lived operator tools at Bloom, plus founder ownership at Plantfolio. **Go** is a ramp for me, not a gap in fundamentals: I am used to statically typed services, clear APIs, and tests on paths where regressions hurt trust.

I think like a user as well as an engineer. I used **Ember** early at Ply; my daily stack is **React**, and I am happy in a mixed codebase. I work AI-natively: **Cursor** and agent-assisted multi-file changes with human review—scope the work, verify the output, ship. I mentor through pairing and reviews (no direct reports) and like teams that question “how we’ve always done it” when forward motion is better.`,
  skills: customerIoSkills,
  experience,
  companyReferences,
  outreachEmail: {
    label: "3rd-tier LinkedIn or email (loose connection; personalize [First name])",
    subject: "Fullstack product engineering at Customer.io / Andrew Shenstone",
    body: `Hi [First name],

I hope this is okay as a loose LinkedIn connection. I applied for Fullstack (Product) Engineer at Customer.io and am interested in how the team ships communication tools customers rely on. I am not assuming you are hiring or on the product engineering path; any perspective would help.

I am a senior full-stack engineer (React, TypeScript, Node, Postgres) with founder ownership experience, martech-adjacent integrations at Bloom, and daily AI-assisted development with Cursor. I am ramping Go where teams use it and have early Ember history if that is still in the stack.

Happy to share my resume if useful. Thank you for reading a note from a distant connection.

Andrew Shenstone
shenst1@gmail.com
339-223-0797`,
  },
};
