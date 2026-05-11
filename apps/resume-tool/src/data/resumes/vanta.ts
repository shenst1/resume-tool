import {
  baseSkills,
  companyReferences,
  contact,
  educationFinanceScu,
  experience,
} from "@/data/base-profile";
import type { Resume, SkillCategory } from "@/types/resume";

const vantaSkills: SkillCategory[] = [
  {
    label: "Full-stack product engineering",
    items: [
      "React, TypeScript, and Next.js for user-facing SaaS",
      "Node.js, API design, and service boundaries in production",
      "GraphQL in real products (Bloom: shared API across web and other clients; schema collaboration with backend)",
      "PostgreSQL and Prisma / Neon daily (Plantfolio); MongoDB is a straightforward ramp for document-style workloads",
    ],
  },
  {
    label: "SaaS, growth & monetization surfaces",
    items: [
      "Stripe: subscriptions, billing, and account lifecycle patterns (Plantfolio)",
      "Self-serve and upgrade paths: ownership of onboarding and payment flows end to end",
      "B2B and operator-heavy UIs: clear states, fewer surprises, enterprise-appropriate pace",
    ],
  },
  {
    label: "Technical leadership (IC)",
    items: [
      "Leading multi-stakeholder projects without needing a manager title: scope, sequencing, and tradeoffs",
      "Mentoring through pairing, review, and breaking work into teachable chunks—not formal people management on my résumé",
      "Cross-team collaboration on shared primitives and avoiding one-off hacks",
    ],
  },
  {
    label: "Speed, judgment & AI",
    items: [
      "0→1 and fast iteration (Plantfolio founder chapter) plus long-lived platforms (Bloom, agencies)",
      "Cursor (Top 1% user): AI for speed with review and responsibility, not blind paste",
    ],
  },
  baseSkills[3],
  baseSkills[4],
];

export const vantaResume: Resume = {
  slug: "vanta",
  pageTitle: "Shenstone, Andrew - Application for Senior Fullstack Product Engineer @ Vanta",
  target: {
    company: "Vanta",
    role: "Senior Fullstack Product Engineer",
    teamOrFocus: "Emerging products & product platform (posting pipeline)",
  },
  contact,
  about:
    "Senior full-stack engineer with twelve years shipping B2B and consumer SaaS where the UI and the data model both have to hold up. Vanta’s stack—React, TypeScript, Node, and GraphQL—is close to what I run at Plantfolio and what I shipped at Bloom, with PostgreSQL as my deepest production database experience and MongoDB as something I expect to pick up quickly on your codebase. I have owned Stripe-heavy flows, self-serve purchase paths, and complex admin experiences where small UX mistakes turn into support tickets. I am not a career security practitioner; I learn domains by reading, asking good questions, and respecting regulated workflows—your posting explicitly welcomes that profile. The role’s Monetization, Expansion, and TPRM lanes all map to patterns I have touched: entitlements and trials as a product problem, revenue-adjacent reliability, and vendor-style relationship data as structured objects—not headlines on my résumé from a GRC product yet, but the engineering shape is familiar. I mentor through pairing and review and by coordinating work across engineers without claiming direct reports or formal task-assignment authority. I use AI tools with curiosity and judgment as you describe.",
  skills: vantaSkills,
  experience,
  companyReferences,
  education: educationFinanceScu,
};
