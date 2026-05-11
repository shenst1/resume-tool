import { baseSkills, companyReferences, contact, educationFinanceScu, experience } from "@/data/base-profile";
import type { Resume, SkillCategory } from "@/types/resume";

const subwaySkills: SkillCategory[] = [
  ...baseSkills.slice(0, 2),
  {
    label: "CMS & content delivery",
    items: [
      "Headless CMS integration",
      "DatoCMS",
      "GraphQL & JSON content APIs",
      "Content modeling & templates",
      "Custom CMS (Rails gem)",
    ],
  },
  ...baseSkills.slice(2),
];

export const subwayResume: Resume = {
  slug: "subway",
  pageTitle: "Shenstone, Andrew - Application for Senior AEM & React / Next.js Software Engineer @ Subway",
  target: {
    company: "Subway",
    role: "Senior AEM & React / Next.js Software Engineer",
    teamOrFocus: "Headquarters digital / web",
  },
  contact,
  about:
    "Senior software engineer with 12+ years shipping customer-facing web and commerce experiences—including high-traffic public mobile/web and long-lived Next.js products. I’m strongest where this role intersects: React and Next.js (SSR, performance-minded builds), clean separation between CMS-backed content and UI, and integrating content through GraphQL/JSON APIs. I have deep headless CMS experience (DatoCMS, custom Rails CMS, in-house content tooling) rather than production Adobe AEM; I’m upfront about that gap and confident the patterns translate. I partner tightly with product and design, care about accessibility and quality bars on public surfaces, and act as technical lead in practice (pairing, review, no direct reports).",
  skills: subwaySkills,
  experience,
  companyReferences,
  education: educationFinanceScu,
};
