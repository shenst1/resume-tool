import {
  baseSkills,
  companyReferences,
  contact,
  educationFinanceScu,
  experience,
} from "@/data/base-profile";
import type { Resume, SkillCategory } from "@/types/resume";

const givecampusSkills: SkillCategory[] = [
  {
    label: "Full stack (GiveCampus stack)",
    items: [
      "Ruby on Rails (~6 years through Rails 6): GraphQL APIs, monolith patterns, CI/CD with CircleCI (Bloom; agency Rails work)",
      "React, TypeScript, and Next.js in production; comfortable across UI through backend services",
      "Node.js and JavaScript/TypeScript services; GraphQL and REST in daily work",
      "PostgreSQL: relational modeling, complex reporting queries, migrations, and performance-minded SQL (Bloom, Plantfolio/Prisma on Neon)",
    ],
  },
  {
    label: "Tech lead & pod delivery",
    items: [
      "Work breakdown and implementation tradeoffs with PM partners (Bloom, Tilia, Plantfolio founder)",
      "Incremental system design: ship in phases without painting into corners on scale or resilience",
      "Mentoring via pairing, code review, and interview help (no direct reports)",
      "High test coverage culture (90%+ unit tests at Tilia; Vitest/Cypress elsewhere); RSpec is the same discipline on Rails codebases",
    ],
  },
  {
    label: "Scale, payments & operations",
    items: [
      "Enterprise and high-traffic delivery: many winery clients on Bloom; Washington State Fair app at seasonal peak",
      "Stripe checkout and subscriptions in production (Plantfolio); payments-platform tooling (Tilia)",
      "AWS (S3, EC2) and CI/CD deployments; Heroku-class PaaS patterns are familiar from comparable production workflows",
      "Production triage and on-call-minded ownership on paths where regressions erode trust",
    ],
  },
  baseSkills.find((c) => c.label === "AI-native product & workflow") ?? baseSkills[3],
];

export const givecampusSeniorEngineerResume: Resume = {
  slug: "givecampus-senior-engineer",
  createdAt: "2026-05-29",
  pageTitle:
    "Shenstone, Andrew - Application for Senior Software Engineer @ GiveCampus",
  homeListLabel: "GiveCampus",
  target: {
    company: "GiveCampus",
    role: "Senior Software Engineer",
    teamOrFocus: "Pod engineering (remote US; optional Tech Lead path)",
  },
  contact,
  about: `I am applying for Senior Software Engineer at GiveCampus because the role is full-stack product work on a mission-driven platform: **Ruby on Rails**, **React**, **PostgreSQL**, pod-level technical leadership, and hands-on shipping from architecture through production support.

I have twelve years of production experience, including roughly six on **Ruby on Rails** at Bloom, where I built GraphQL APIs, Next.js admin surfaces, and commerce integrations for enterprise winery clients. I also founded Plantfolio on TypeScript, React, Node, and Postgres; shipped **Stripe** payments end to end; and delivered high-traffic consumer apps at agency scale. I partner with PMs on work breakdown and tradeoffs, mentor through review and pairing (no direct reports), and am comfortable with thoughtful on-call rotation.

Fundraising platforms are new domain for me; fintech and payments delivery are not. Vue is not my daily framework; React is.`,
  skills: givecampusSkills,
  experience,
  companyReferences,
  education: educationFinanceScu,
  outreachEmail: {
    label: "3rd-tier LinkedIn or email (loose connection; personalize [First name])",
    subject: "Senior engineering at GiveCampus / Andrew Shenstone",
    body: `Hi [First name],

I hope this is okay as a loose LinkedIn connection. I applied for Senior Software Engineer at GiveCampus and am interested in how you scale fundraising software for schools while staying profitable and mission-focused. I am not assuming you are on engineering or hiring; any perspective or pointer would help.

I am a senior full-stack engineer with production Ruby on Rails, React, PostgreSQL, and Stripe, plus twelve years overall and pod-style technical leadership through review and pairing. Fundraising is new domain for me; enterprise SaaS and payments paths are not.

Happy to share my resume if useful. Thank you for reading a note from a distant connection.

Andrew Shenstone
shenst1@gmail.com
339-223-0797`,
  },
};
