import { companyReferences, contact, educationFinanceScu, experience } from "@/data/base-profile";
import type { Resume, SkillCategory } from "@/types/resume";

const whatnotPaymentsTreasurySkills: SkillCategory[] = [
  {
    label: "Payments & money-movement surfaces",
    items: [
      "Stripe in production: subscriptions, checkout, and lifecycle flows (Plantfolio)",
      "Payments platform tools context: KYC, identity verification, and risk-adjacent operational features (Tilia)",
      "Commerce stacks where refunds, fulfillment, and catalog money flows intersect (Bloom—Shopify Plus clients)",
      "Webhooks, async reconciliation patterns, and partner/API integration habits that payment systems depend on",
    ],
  },
  {
    label: "Modeling, data & reliability",
    items: [
      "PostgreSQL and complex relational modeling; SQL-heavy reporting and operator tooling (agency and product work)",
      "Background jobs and event-style workflows (Inngest, integrations); care for correctness under partial failure",
      "International tax, customs, and ledgers-as-a-specialty: not my advertised depth; B.S. Finance helps me learn those domains quickly alongside legal/partners",
    ],
  },
  {
    label: "TypeScript, full-stack & platforms",
    items: [
      "TypeScript, JavaScript, React, Next.js, Node.js—shipping end-to-end services and UI for internal and external users",
      "High-scale seasonal and marketplace contexts (Washington State Fair app; Tune marketplace automation)",
      "Tests and review discipline (Vitest, Cypress; strong coverage norms at Tilia) in domains where regressions are costly",
    ],
  },
  {
    label: "Ownership & partnership",
    items: [
      "Trusted to advance ambiguous areas: product conversations, scoping trade-offs, shipping with leadership alignment",
      "Cross-functional work with product and design; clear communication when stakes involve trust and money movement",
      "Technical leadership without direct reports: architecture input, pairing, mentorship through code review",
    ],
  },
];

export const whatnotPaymentsTreasuryResume: Resume = {
  slug: "whatnot-payments-treasury",
  pageTitle: "Shenstone, Andrew - Application for Software Engineer (Payments - Treasury) @ Whatnot",
  target: {
    company: "Whatnot",
    role: "Software Engineer",
    teamOrFocus: "Payments — Treasury",
  },
  contact,
  about:
    "12+ years full-stack: Stripe at Plantfolio, payments and KYC-adjacent tooling at Tilia, Shopify Plus and integrations at Bloom. I like the unglamorous work (models, webhooks, operator tools, UX when a flow breaks). Whatnot’s Payments / Treasury lane is what I’m targeting: scale, cross-border money movement, and sane handling of tax, customs, returns, and refunds. I’m not a career tax-engine or ledger person; Finance B.S., I pick that world up as I go, and I’m plain-spoken in trade-off conversations.",
  skills: whatnotPaymentsTreasurySkills,
  experience,
  companyReferences,
  education: educationFinanceScu,
};
