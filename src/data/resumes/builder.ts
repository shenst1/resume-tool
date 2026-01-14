import { about, baseSkills, companyReferences, contact, experience } from "@/data/base-profile";
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
  about,
  application:
    "As an early adopter of headless CMS platforms, I've spent years understanding the unique challenges of making developer-centric tools accessible to non-technical users. At Ply Interactive, I built our in-house CMS from the ground up, and I've extensively used DatoCMS across multiple projects. My experience building Plantfolio, implementing AI-powered features, and owning the full product cycle from customer discovery to production directly aligns with Builder.io's need for engineers who can partner with Product and Design. As a top 1% user of Cursor IDE, I'm an expert with AI-assisted development tools and understand how AI can bridge the gap between intent and execution.",
  skills: builderSkills,
  experience,
  companyReferences,
};

