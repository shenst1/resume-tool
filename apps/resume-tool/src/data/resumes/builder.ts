import { baseSkills, companyReferences, contact, educationFinanceScu, experience } from "@/data/base-profile";
import type { Resume, SkillCategory } from "@/types/resume";

const builderSkills: SkillCategory[] = [
  ...baseSkills.slice(0, 2),
  {
    label: "CMS & Content",
    items: ["DatoCMS", "Headless CMS Architecture", "Custom CMS Development", "Content Modeling"],
  },
  ...baseSkills.slice(2),
];

export const builderResume: Resume = {
  slug: "builder",
  pageTitle: "Shenstone, Andrew - Application for Senior Software Engineer - Fusion @ Builder.io",
  target: {
    company: "Builder.io",
    role: "Senior Software Engineer",
    teamOrFocus: "Fusion",
  },
  contact,
  about:
    "Senior software engineer with 12+ years building full-stack products—from agency CMS work to a founder-led product. I've spent years on headless CMS challenges: at Ply I built an in-house CMS as a Ruby gem, and I've shipped extensively with DatoCMS. Plantfolio sharpened AI-powered features and owning the full cycle from customer discovery to production—aligned with Fusion's need to partner with Product and Design. I act as technical lead in practice (pairing, code review, no direct reports). As a top 1% Cursor user, I'm fluent in AI-assisted development and how AI bridges intent and execution.",
  skills: builderSkills,
  experience,
  companyReferences,
  education: educationFinanceScu,
};
