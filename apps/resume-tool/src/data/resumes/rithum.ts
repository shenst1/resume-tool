import { companyReferences, contact, educationFinanceScu, experience } from "@/data/base-profile";
import type { Resume, SkillCategory } from "@/types/resume";

const rithumSkills: SkillCategory[] = [
  {
    label: "TypeScript, web & Node",
    items: [
      "TypeScript",
      "JavaScript",
      "React & Next.js (production admin and consumer products)",
      "Node.js",
      "Angular: not my recent daily framework; strong React/component-architecture background and fast ramp in enterprise codebases",
    ],
  },
  {
    label: "Commerce, APIs & scale",
    items: [
      "Commerce and marketplace-style integrations (Shopify ecosystem, Stripe, Shipstation, multi-channel APIs)",
      "REST and GraphQL integration; third-party partner and marketplace APIs",
      "PostgreSQL, Prisma; complex relational modeling and reporting",
      "ETL-style pipelines and operator workflows (Tune)",
    ],
  },
  {
    label: "AWS, quality & delivery",
    items: [
      "AWS (S3, EC2) in production; eager to deepen Lambda, data stores, and event-driven patterns with the team",
      "CI/CD, Git workflows, Vitest, Cypress; quality considered throughout development",
      "Cursor IDE (top 1% user)—AI-assisted development as daily practice",
    ],
  },
  {
    label: "Leadership",
    items: [
      "Technical leadership without direct reports: architecture input, code review, pairing, mentorship",
      "Breaking down complex work, agile collaboration with product and design",
    ],
  },
];

export const rithumResume: Resume = {
  slug: "rithum",
  pageTitle: "Shenstone, Andrew - Application for Senior Software Engineer (Retailers) @ Rithum",
  target: {
    company: "Rithum",
    role: "Senior Software Engineer",
    teamOrFocus: "Retailers business function",
  },
  contact,
  about:
    "Senior software engineer with 12+ years building software for commerce and long-lived SaaS: integrations across Shopify, Stripe, and marketing systems at Bloom; high-traffic seasonal retail; and a founder-led product with AI-enabled features. I match Rithum’s emphasis on quality throughout development—automated tests, reviews, and clear ownership—and on mentoring engineers through pairing and feedback. My core production stack is TypeScript, React, and Node; Angular is not my recent daily framework, but I’m effective ramping in large front-end codebases with disciplined patterns. On AWS I have shipped with S3 and EC2 and am motivated to grow into the broader serverless and data-plane services your stack lists. I use Cursor daily as a core development tool. I want to help retailers scale on a connected commerce network where reliability and cross-team delivery matter.",
  skills: rithumSkills,
  experience,
  companyReferences,
  education: educationFinanceScu,
};
