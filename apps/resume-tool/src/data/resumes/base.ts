import { about, baseSkills, companyReferences, contact, educationFinanceScu, experience } from "@/data/base-profile";
import type { Resume } from "@/types/resume";

export const baseResume: Resume = {
  slug: "base",
  pageTitle: "Senior Software Engineer | Full-Stack Development",
  metadataTitle: "Shenstone, Andrew - Senior Software Engineer",
  target: {
    company: "",
    role: "Senior Software Engineer",
  },
  contact,
  about,
  skills: baseSkills,
  experience,
  companyReferences,
  education: educationFinanceScu,
};
