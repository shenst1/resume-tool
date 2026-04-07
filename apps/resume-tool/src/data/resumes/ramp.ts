import {
  about,
  baseSkills,
  companyReferences,
  contact,
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
  about,
  application:
    "Juno’s mission—fixing guest travel and expense with a modern, full-stack platform—maps directly to what I’ve built at Plantfolio: complex booking-adjacent workflows, PostgreSQL-backed data models, Stripe for real money, and AI features that reduce manual coordination. I’m fluent in TypeScript, React, and PostgreSQL, comfortable owning ambiguous problems end-to-end, and I’ve shipped integrations and payment flows at Bloom.wine and Tilia alongside product-led full-stack work. I want to help guests and admins move from fragmented processes to a cohesive experience, and to build the payments and agent-assisted tooling that makes that reliable at scale.",
  skills: rampSkills,
  experience,
  companyReferences,
  education: "Bachelor of Science in Finance - Santa Clara University",
};
