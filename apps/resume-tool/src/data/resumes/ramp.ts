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
  pageTitle:
    "Shenstone, Andrew - Application for Software Engineer, Travel @ Ramp",
  target: {
    company: "Ramp",
    role: "Software Engineer, Travel",
    teamOrFocus: "Juno",
  },
  contact,
  about:
    "Senior software engineer with 12+ years building full-stack products; Juno’s mission—better guest travel and expense on a modern stack—maps to what I’ve shipped at Plantfolio: complex workflows, PostgreSQL-backed models, Stripe for real money, and AI to cut manual coordination. I’m fluent in TypeScript, React, and PostgreSQL, comfortable owning ambiguous problems end-to-end, and I’ve delivered integrations and payment flows at Bloom.wine and Tilia alongside product-led work. I act as technical lead informally (pairing, code review). I want to help guests and admins move from fragmented processes to a cohesive experience and to build reliable payments and agent-assisted tooling at scale.",
  skills: rampSkills,
  experience,
  companyReferences,
  education: educationFinanceScu,
};
