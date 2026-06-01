import {
  baseSkills,
  companyReferences,
  contact,
  educationFinanceScu,
  experience,
} from "@/data/base-profile";
import type { Resume, SkillCategory } from "@/types/resume";

const ezcaterSkills: SkillCategory[] = [
  {
    label: "Payments & finance tech",
    items: [
      "Stripe in production: subscriptions, checkout, webhooks, and lifecycle flows (Plantfolio; Bloom Shopify Plus integrations)",
      "Payments platform context: KYC, identity verification, and risk-adjacent tooling on Tilia's platform",
      "Multi-party commerce patterns: operator billing, refunds, and reconciliation-minded delivery where mistakes become support tickets",
      "Restaurant partner payouts, tax engines, Adyen/Braintree, PCI/SCA depth: honest ramps; B.S. Finance for money-movement and reconciliation conversations",
    ],
  },
  {
    label: "Backend (posting stack)",
    items: [
      "Ruby on Rails through Rails 6 in production (~6 years): GraphQL API endpoints, CI/CD, and monolith patterns (Bloom; agency Rails work)",
      "PostgreSQL: complex relational modeling, reporting queries, and migrations (Ply/Bloom; Plantfolio on Neon today)",
      "GraphQL in production (Bloom Rails API; Tilia platform API); REST in daily work",
      "Go and Java: not my primary daily stacks; productive ramp alongside strong Rails and Node fundamentals",
    ],
  },
  {
    label: "Quality, delivery & AI-native workflow",
    items: [
      "90%+ unit test coverage on critical Tilia tooling; Vitest and Cypress elsewhere; code review and CI/CD (CircleCI, Turbo/pnpm)",
      "Cursor (top 1% user) and Claude-class agents in daily engineering; share patterns with peers, human ownership of architecture and production risk",
      "Feature flags, incremental rollout, and telemetry: align with team standards (formal LaunchDarkly-class tooling is a ramp, not a headline)",
      "On-call and production triage: incident-minded ownership on revenue paths, not only happy-path features",
    ],
  },
  baseSkills.find((c) => c.label === "Architecture & async") ?? baseSkills[3],
];

export const ezcaterSeniorFinanceTechResume: Resume = {
  slug: "ezcater-senior-finance-tech",
  createdAt: "2026-05-29",
  pageTitle:
    "Shenstone, Andrew - Application for Senior Software Engineer, Finance Technology @ ezCater",
  homeListLabel: "ezCater",
  target: {
    company: "ezCater",
    role: "Senior Software Engineer, Finance Technology",
    teamOrFocus: "Finance tech platform (payments, invoicing, RP payouts, tax)",
  },
  contact,
  about: `I am applying for Senior Software Engineer, Finance Technology at ezCater because money has to be correct, observable, and explainable—and that is where I have done my most careful work. I have 12+ years building services and customer-facing products, with **Ruby on Rails** (~6 years through Rails 6), **PostgreSQL**, and **GraphQL** in production, plus **Stripe** subscriptions and checkout end to end on Plantfolio and commerce integrations at Bloom.

At Tilia I shipped on a payments platform with KYC and identity-adjacent tooling and very high test coverage on tools operators relied on. I use **Cursor** daily (top 1% user) with Claude-class agents and still own architecture, review, and production risk—the posting's AI-assisted workflow is how I already ship. Restaurant partner disbursements, dedicated tax engines, Adyen/Braintree, and Go/Java services would be ramps I name plainly; webhooks, idempotency, refund flows, and reconciliation-minded modeling are already how I work.

I mentor through pairing and review (no direct reports), collaborate well with product on ambiguous scope, and am comfortable with on-call when the rotation is run thoughtfully. Remote U.S. works for me.`,
  skills: ezcaterSkills,
  experience,
  companyReferences,
  education: educationFinanceScu,
  outreachEmail: {
    label: "3rd-tier LinkedIn or email (loose connection; personalize [First name])",
    subject: "Finance Technology engineering at ezCater / Andrew Shenstone",
    body: `Hi [First name],

I hope this is okay as a loose LinkedIn connection. I applied for Senior Software Engineer, Finance Technology and am interested in how the team is modernizing payments, payouts, and tax as ezCater scales. I am not assuming you are on that team or hiring; any perspective or pointer would help.

I am a senior engineer with production Ruby on Rails, PostgreSQL, GraphQL, Stripe, and payments-platform work at Tilia, plus a daily Cursor workflow. Go and marketplace payout systems at ezCater scale would be ramps for me; reconciliation-minded delivery and high test discipline on money paths are not.

Happy to share my resume if useful. Thank you for reading a note from a distant connection.

Andrew Shenstone
shenst1@gmail.com
339-223-0797`,
  },
};
