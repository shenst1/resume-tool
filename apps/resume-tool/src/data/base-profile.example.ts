import type { CompanyReference, Contact, ExperienceRole, SkillCategory } from "@/types/resume";

/** Copy to `base-profile.ts` and fill in your details. */
export const contact: Contact = {
  name: "Your Name",
  phone: "000-000-0000",
  email: "you@example.com",
  links: [
    { label: "linkedin.com/in/you", href: "https://linkedin.com/in/you" },
    { label: "github.com/you", href: "https://github.com/you" },
  ],
};

export const about = `Your default summary paragraph(s). Separate paragraphs with blank lines.`;

export const educationFinanceScu = "B.S. Example, University — 20XX";

export const baseSkills: SkillCategory[] = [
  {
    label: "Frontend",
    items: ["TypeScript", "React", "Next.js"],
  },
];

export const experience: ExperienceRole[] = [
  {
    title: "Software Engineer",
    company: "Example Co",
    start: "January 2020",
    end: "Present",
    groups: [{ bullets: ["Shipped features end to end."] }],
  },
];

export const companyReferences: CompanyReference[] = [
  {
    name: "Example Co",
    years: "2020-Present",
    description: "Short company blurb",
    href: "https://example.com/",
  },
];
