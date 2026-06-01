import {
  baseSkills,
  companyReferences,
  contact,
  educationFinanceScu,
  experience,
} from "@/data/base-profile";
import type { Resume, SkillCategory } from "@/types/resume";

const flexSkills: SkillCategory[] = [
  {
    label: "Frontend (Flex-aligned)",
    items: [
      "React and TypeScript in production for 12+ years across SPAs (Bloom, Tilia), Next.js (Plantfolio), and high-traffic consumer surfaces",
      "Checkout and onboarding UX where mistakes become support tickets: Stripe flows on Plantfolio; Shopify Plus commerce at Bloom",
      "Multiple product surfaces in practice: merchant/operator admin at Bloom, payments-platform tooling at Tilia, founder-owned consumer app at Plantfolio",
      "Design-system partnership (Chakra lead at Tilia; Tailwind/Shadcn at Plantfolio); Figma-to-code on consumer flows",
    ],
  },
  {
    label: "Payments, commerce & integrations",
    items: [
      "Stripe in production: subscriptions, checkout, billing lifecycle (Plantfolio); Stripe listed on Flex platform integrations",
      "Payments-adjacent platform delivery at Tilia (KYC, identity verification, high test coverage on revenue paths)",
      "Third-party and platform integrations (Shopify Plus, webhooks, idempotency-minded error handling)",
      "B.S. Finance for pre-tax benefits, reconciliation, and merchant money-movement conversations",
      "HSA/FSA eligibility rules and Letter of Medical Necessity workflows: domain ramp, not prior product tenure",
    ],
  },
  {
    label: "Execution, quality & AI",
    items: [
      "Vitest, React Testing Library, and Cypress for predictable UI quality",
      "Cross-functional work with product, design, and business stakeholders; execution bias on founder delivery",
      "AI-native engineering: Cursor (top 1% user) and production LLM features on Plantfolio; aligns with posting's AI tooling expectation",
      "Mentoring through pairing and code review (no direct reports)",
    ],
  },
  baseSkills.find((c) => c.label === "Architecture & async") ?? baseSkills[3],
];

export const flexFrontendEngineerResume: Resume = {
  slug: "flex-frontend-engineer",
  createdAt: "2026-06-01",
  pageTitle: "Shenstone, Andrew - Application for Frontend Engineer @ Flex",
  homeListLabel: "Flex",
  target: {
    company: "Flex",
    role: "Frontend Engineer",
    teamOrFocus: "Merchant and consumer applications (HSA/FSA checkout)",
  },
  contact,
  about: `I am applying for Frontend Engineer at Flex because the role is **React**-first product work across merchant and consumer surfaces where checkout clarity and trust matter. I have 12+ years shipping web applications, with strong overlap on commerce checkout (**Stripe** on Plantfolio, **Shopify Plus** at Bloom) and payments-adjacent tooling at Tilia where correctness and test discipline were non-negotiable.

I thrive in ambiguity: founder delivery at Plantfolio, cross-functional partnership with product and design, and owning frontend architecture gaps across multiple apps rather than only ticket throughput. I use **Cursor** daily (top 1% user) and ship production AI features on my own product, which matches your emphasis on AI-assisted velocity without skipping review on money paths.

HSA/FSA eligibility, split tender, and Letter of Medical Necessity flows are new domain for me; what transfers is regulated-feeling checkout UX, integration-heavy stacks (your platform lists **Stripe**, Shopify, and APIs), and a **B.S. Finance** background for benefits and merchant revenue conversations. Remote U.S. works well for me.`,
  skills: flexSkills,
  experience,
  companyReferences,
  education: educationFinanceScu,
  outreachEmail: {
    label: "3rd-tier LinkedIn or email (loose connection; personalize [First name])",
    subject: "Frontend engineering at Flex / Andrew Shenstone",
    body: `Hi [First name],

I hope this is okay as a loose LinkedIn connection. I applied for Frontend Engineer at Flex and am interested in how the team builds merchant and consumer experiences for HSA/FSA checkout. I am not assuming you are on engineering or hiring; any perspective or pointer would help.

I am a senior frontend-leaning engineer with 12+ years, production React and TypeScript, Stripe and commerce checkout work, and payments-platform delivery at Tilia. HSA/FSA domain specifics would be a ramp for me; checkout trust and integration-heavy UI are not.

Happy to share my resume if useful. Thank you for reading a note from a distant connection.

Andrew Shenstone
shenst1@gmail.com
339-223-0797`,
  },
};
