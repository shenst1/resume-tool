import { about, baseSkills, companyReferences, contact, experience } from "@/data/base-profile";
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
    "I am a senior software engineer with 12+ years of experience building full-stack applications. I have a proven track record of architecting and shipping complex, user-focused products from concept to scale. I excel at balancing technical excellence with product impact, and I'm passionate about mentoring teams while delivering exceptional user experiences.",
  application:
    "I'm excited about the opportunity to shape Mercury's greenfield product from its earliest stages. My experience building Plantfolio from the ground up, architecting a sophisticated monorepo, implementing AI-powered features, and delivering production solutions for both consumers and businesses, directly aligns with Mercury's need for someone who can drive technical direction while keeping user experience front and center. With a finance degree and fintech experience at Tilia, I understand the unique challenges of building financial products that founders and operators rely on daily. I thrive in ambiguity, excel at mentoring teams, and have a proven track record of making smart tradeoffs between speed and quality while building scalable, maintainable systems.",
  skills: mercurySkills,
  experience,
  companyReferences,
  education: "Bachelor of Science in Finance - Santa Clara University",
};

