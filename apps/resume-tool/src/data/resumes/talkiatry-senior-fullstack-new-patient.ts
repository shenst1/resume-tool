import {
  baseSkills,
  companyReferences,
  contact,
  educationFinanceScu,
  experience,
} from "@/data/base-profile";
import type { Resume, SkillCategory } from "@/types/resume";

const talkiatryNewPatientSkills: SkillCategory[] = [
  {
    label: "Full stack (posting)",
    items: [
      "TypeScript end to end: React, Next.js, and Node.js services in production (Plantfolio monorepo; Bloom admin)",
      "API design (REST, GraphQL in production at Bloom/Tilia); Prisma and PostgreSQL; clear specs and risk callouts before build",
      "AWS in production (S3, EC2); Vercel-forward delivery with same rollout, testing, and observability habits",
      "Documentation, code review, Vitest/Cypress, and post-mortem-minded ownership",
    ],
  },
  {
    label: "Growth, onboarding & product partnership",
    items: [
      "Founder work on Plantfolio: customer discovery, onboarding and subscription flows (Stripe, Clerk), friction hunting with real users",
      "Partnership with product and design from discovery through production (Bloom, Tilia, agency)",
      "Measurement-minded iteration (funnels, whether users finish jobs); not the owner of a company-wide experimentation platform",
      "Mentoring through pairing and review (Bloom); informal tech lead habits without direct reports",
    ],
  },
  {
    label: "Healthcare-adjacent context",
    items: [
      "High-trust, regulated-adjacent delivery: payments/KYC tooling at Tilia; alcohol compliance and operator workflows at Bloom",
      "Telehealth/behavioral-health domain is new; motivated by mission and careful UX for sensitive start-of-care journeys",
    ],
  },
  baseSkills.find((c) => c.label === "AI-native product & workflow") ?? baseSkills[3],
];

export const talkiatrySeniorFullstackNewPatientResume: Resume = {
  slug: "talkiatry-senior-fullstack-new-patient",
  createdAt: "2026-06-01",
  pageTitle:
    "Shenstone, Andrew - Application for Senior Full-Stack Engineer @ Talkiatry",
  homeListLabel: "Talkiatry",
  target: {
    company: "Talkiatry",
    role: "Senior Full-Stack Engineer",
    teamOrFocus:
      "New Patient Experience (growth, onboarding, conversion); TypeScript on AWS",
  },
  contact,
  about: `Senior full-stack engineer with 12+ years shipping **TypeScript**, **React**, **Node.js**, and **AWS** in production. I like growth-shaped product work: onboarding that respects the user, APIs that stay simple as volume climbs, and partnership with product, design, and data so features are measurable—not just shipped.

Talkiatry’s New Patient Experience team maps to how I have worked: at Plantfolio I owned discovery through start-of-care-style flows (auth, subscriptions, Stripe, customer calls to find drop-off); at Bloom and Tilia I built reliable full-stack surfaces where mistakes hurt trust and compliance. I write specs, flag risks early, mentor through review and pairing, and I am comfortable with tech-lead-shaped initiatives when the scope warrants it.

I have not owned a dedicated growth engineering title or a company-wide **A/B** experimentation program; my iteration habit is hypothesis-driven measurement and tight loops with stakeholders, and I would ramp on your analytics and experiment tooling. Psychiatry/telehealth is new domain depth for me; regulated and sensitive workflows are not. Remote US and mission-driven healthcare are strong fits for why I am applying.`,
  skills: talkiatryNewPatientSkills,
  experience,
  companyReferences,
  education: educationFinanceScu,
  outreachEmail: {
    label: "Technical recruiter (after applying; personalize [First name])",
    subject: "Senior Full-Stack Engineer application / Andrew Shenstone",
    body: `Hey [First name],

I recently applied for Senior Full-Stack Engineer on the New Patient Experience team at Talkiatry through your job portal. Same resume attached here.

I'm writing to let you know ⛔️🤖 I'm not a robot and I'm genuinely interested in whether I'm the right fit. TypeScript full stack and patient onboarding-style product work are why I applied, and I'd love to get a conversation started if you're the right person to talk to.

Andrew`,
  },
};
