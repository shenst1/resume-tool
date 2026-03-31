import { baseSkills, companyReferences, contact, experience } from "@/data/base-profile";
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
    "I am a senior software engineer with 12+ years of experience building full-stack applications. I have a proven track record of architecting and shipping complex, user-focused products from concept to scale. I excel at balancing technical excellence with product impact, and I'm passionate about the intersection of design and engineering—building systems that scale while obsessing over polish and usability.",
  application:
    "I'm excited about Assured's mission to modernize insurance through technology. My experience directly aligns with what you're looking for: I've owned major areas of frontend codebases at Plantfolio (architecting from the ground up), led design system adoption at Tilia (Chakra UI, reducing bespoke components and establishing cohesive patterns), and collaborated closely with product and design at Bloom to build component library standards usable across engineering and design. I thrive at the intersection of design and engineering—I care deeply about end-user experience, accessibility, and visual precision, and I've built reusable UI systems and design libraries that maintain consistency at scale. Your stack (React, TypeScript, Node.js, Vercel, PostgreSQL, AWS) matches my daily work. I'm eager to bring my system-thinking, mentoring experience, and hands-on ownership to help shape Assured's B2B SaaS platform and raise the bar for UX across claims processing.",
  skills: baseSkills,
  experience,
  companyReferences,
  education: "Bachelor of Science in Finance - Santa Clara University",
};
