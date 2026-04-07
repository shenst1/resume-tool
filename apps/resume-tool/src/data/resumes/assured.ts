import { baseSkills, companyReferences, contact, educationFinanceScu, experience } from "@/data/base-profile";
import type { Resume } from "@/types/resume";

export const assuredResume: Resume = {
  slug: "assured",
  pageTitle: "Shenstone, Andrew - Application for Staff Frontend Engineer @ Assured",
  target: {
    company: "Assured",
    role: "Staff Frontend Engineer",
    teamOrFocus: "B2B SaaS Platform",
  },
  contact,
  about:
    "Senior software engineer with 12+ years building full-stack applications and shipping user-focused products from concept to scale. I care about the intersection of design and engineering—systems that scale with polish and usability. I'm excited about Assured's mission to modernize insurance: I've owned major frontend areas at Plantfolio, led Chakra UI adoption at Tilia (fewer bespoke components, cohesive patterns), and partnered with product and design at Bloom on component standards shared by engineering and design. I prioritize accessibility, visual precision, and reusable UI systems. Your stack (React, TypeScript, Node.js, Vercel, PostgreSQL, AWS) matches my daily work. I bring system thinking, informal mentoring through pairing and code review, and hands-on ownership to raise the bar for UX across claims processing.",
  skills: baseSkills,
  experience,
  companyReferences,
  education: educationFinanceScu,
};
