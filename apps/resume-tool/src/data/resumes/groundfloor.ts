import { baseSkills, companyReferences, contact, educationFinanceScu, experience } from "@/data/base-profile";
import type { Resume, SkillCategory } from "@/types/resume";

const groundfloorSkills: SkillCategory[] = [
  {
    label: "Full-stack",
    items: [
      "TypeScript",
      "React & Next.js (production admin and consumer surfaces)",
      "React Native (production agency apps, Ply)",
      "Ruby on Rails (GraphQL APIs shared by web and mobile clients, Bloom.wine)",
      "Node.js",
      "PostgreSQL (modeling, performance, Prisma; strong SQL)",
    ],
  },
  {
    label: "Growth & integrations",
    items: [
      "Third-party integrations: Stripe, Shopify, Mailchimp, ActiveCampaign, Shipstation",
      "Transactional and marketing email systems (React Email, Plantfolio)",
      "Partnering with product on onboarding, subscriptions, and conversion flows",
    ],
  },
  {
    label: "Platform & delivery",
    items: [
      "AWS (S3, EC2)",
      "CI/CD and agile delivery",
      "Monorepos, async jobs, webhooks",
      "Mentorship via pairing and code review (no direct reports)",
    ],
  },
  baseSkills[4],
];

export const groundfloorResume: Resume = {
  slug: "groundfloor",
  pageTitle: "Shenstone, Andrew - Application for Senior Software Engineer @ Groundfloor",
  target: {
    company: "Groundfloor",
    role: "Senior Software Engineer",
    teamOrFocus: "Growth & investor experience (full-stack pod)",
  },
  contact,
  about:
    "Senior software engineer with 12+ years shipping full-stack products where growth, trust, and integrations matter. I bring production Ruby on Rails experience (GraphQL APIs consumed by web and mobile at Bloom.wine), deep TypeScript and React/Next.js work, production React Native from Ply (including large-scale public apps), and PostgreSQL modeling with a finance degree that matches alternative-investing products. I have shipped Stripe flows, subscription and onboarding surfaces, and extensive martech integrations—not Segment specifically, but the same pattern: wire reliable events and partner with marketing on measurement. Vue.js is not my recent daily stack; I would ramp quickly in your pod alongside strong React fundamentals. I like cross-functional work with product, design, and marketing, and I take features from design through deployment with high quality.",
  skills: groundfloorSkills,
  experience,
  companyReferences,
  education: educationFinanceScu,
};
