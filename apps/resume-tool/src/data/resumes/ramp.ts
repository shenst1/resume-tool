import {
  baseSkills,
  companyReferences,
  contact,
  educationFinanceScu,
  experience,
} from "@/data/base-profile";
import type { Resume, SkillCategory } from "@/types/resume";

const rampSkills: SkillCategory[] = [
  ...baseSkills.slice(0, 2),
  {
    label: "Payments & integrations",
    items: [
      "Stripe",
      "Payment & subscription flows",
      "Third-party APIs",
      "Webhook-driven systems",
    ],
  },
  ...baseSkills.slice(2),
];

export const rampResume: Resume = {
  slug: "ramp",
  createdAt: "2026-05-18",
  pageTitle:
    "Shenstone, Andrew - Application for Software Engineer, Travel @ Ramp",
  target: {
    company: "Ramp",
    role: "Software Engineer, Travel",
    teamOrFocus: "Juno",
  },
  contact,
  about: `I am applying for Software Engineer, Travel on Juno because the role centers on **TypeScript**, **React**, and **PostgreSQL**, plus payments, travel and booking integrations, and AI-assisted workflows. That is the kind of work I have shipped: multi-step flows, real money, and backends that have to stay correct.

On Plantfolio I owned PostgreSQL models, checkout, and Stripe; at Bloom.wine and Tilia I built integrations and webhook-driven flows alongside admin UIs. I am used to ambiguous scope, pairing, and review-heavy collaboration.

I have not delivered corporate travel booking at Ramp's scale in production. I am clear on that gap. What transfers is commerce and marketplace discipline, deep Stripe and integration mileage, and finance schooling—I get productive fast on your booking stack and policy edge cases without overclaiming domain tenure.`,
  skills: rampSkills,
  experience,
  companyReferences,
  education: educationFinanceScu,
};
