import {
  companyReferences,
  contact,
  educationFinanceScu,
  experience,
} from "@/data/base-profile";
import type { Resume, SkillCategory } from "@/types/resume";

/** Copy to `base.ts` after setting up `base-profile.ts`. */
export const baseResumeAbout = `Your general-purpose summary. Use **bold** for emphasis where helpful.`;

const baseResumeSkills: SkillCategory[] = [
  {
    label: "Skills",
    items: ["TypeScript", "React", "Next.js"],
  },
];

export const baseResume: Resume = {
  slug: "base",
  pageTitle: "Your Name — Role Title",
  metadataTitle: "Last, First - Role Title",
  homeListLabel: "Base (general)",
  target: {
    company: "",
    role: "Software Engineer",
    teamOrFocus: "Optional focus",
  },
  contact,
  about: baseResumeAbout,
  skills: baseResumeSkills,
  experience,
  companyReferences,
  education: educationFinanceScu,
};
