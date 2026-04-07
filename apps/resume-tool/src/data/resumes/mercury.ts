import { baseSkills, companyReferences, contact, educationFinanceScu, experience } from "@/data/base-profile";
import type { Resume, SkillCategory } from "@/types/resume";

const mercurySkills: SkillCategory[] = [
  ...baseSkills.slice(0, 2),
  ...baseSkills.slice(2),
];

export const mercuryResume: Resume = {
  slug: "mercury",
  pageTitle: "Shenstone, Andrew - Application for Senior Frontend Engineer - Payments @ Mercury",
  target: {
    company: "Mercury",
    role: "Senior Frontend Engineer",
    teamOrFocus: "Payments",
  },
  contact,
  about:
    "Senior software engineer with 12+ years shipping full-stack products from concept to scale. I'm excited to help shape Mercury's greenfield work: Plantfolio—from monorepo and AI features to production B2B and consumer paths—matches the need for strong technical direction with UX at the center. My B.S. in Finance (Santa Clara) plus fintech experience at Tilia ground how I build products founders and operators rely on daily. I thrive in ambiguity, provide informal technical leadership through pairing and code review, and trade off speed vs. quality deliberately on scalable, maintainable systems.",
  skills: mercurySkills,
  experience,
  companyReferences,
  education: educationFinanceScu,
};
