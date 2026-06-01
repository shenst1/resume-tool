import {
  baseSkills,
  companyReferences,
  contact,
  educationFinanceScu,
  experience,
} from "@/data/base-profile";
import type { Resume, SkillCategory } from "@/types/resume";

const ltkSkills: SkillCategory[] = [
  {
    label: "Web & frontend (Creator org primary lane)",
    items: [
      "TypeScript and React.js in production for 12+ years; Next.js (App Router, RSC) on Plantfolio; long-lived SPAs at Bloom and Tilia",
      "Component architecture, state management, routing, and modularization in complex single-page applications",
      "Modern tooling: Vite/Turbo/pnpm today; Webpack modernization at Tune (50% smaller prod bundles); Vitest, React Testing Library, and Cypress in production",
      "Performance, accessibility, security-minded UI, and cross-browser discipline",
      "Design-system partnership (Chakra adoption at Tilia; Plantfolio component library; Figma at Bloom)",
    ],
  },
  {
    label: "AI-assisted development (explicit posting)",
    items: [
      "Cursor (top 1% user): default agentic workflow from scoping through review—not a recent experiment",
      "Claude-class coding agents on every feature; human ownership of architecture, tests, and production risk",
      "Critically evaluate AI-generated code before merge; codebases structured for agent-friendly iteration",
    ],
  },
  {
    label: "Full-stack, APIs & commerce context",
    items: [
      "REST and GraphQL in production; partner with backend teams on API contracts and service boundaries",
      "Ruby on Rails (~6 years through Rails 6): productive building and consuming APIs; recent headline work is React-heavy",
      "Shopify Plus at scale (all Bloom clients); Stripe checkout and subscriptions (Plantfolio); creator-commerce-adjacent integrations",
      "PostgreSQL and MongoDB in production; MySQL and DynamoDB are straightforward ramps on relational/document modeling habits",
    ],
  },
  {
    label: "AWS, ops & team impact",
    items: [
      "AWS in production (S3, EC2); ECS, Lambda, and RDS align to your stack with a clear ramp",
      "Docker and Datadog are not my headline tenure; CI/CD (CircleCI, Vercel/Turbo) and safe rollout habits transfer",
      "End-to-end ownership from discovery with product/design through production verification",
      "Mentoring via pairing, design review, and code review (no direct reports); distributed-team collaboration",
    ],
  },
  baseSkills.find((c) => c.label === "Architecture & async") ?? baseSkills[3],
];

export const ltkCreatorFullstackResume: Resume = {
  slug: "ltk-creator-fullstack",
  createdAt: "2026-05-29",
  pageTitle:
    "Shenstone, Andrew - Application for Senior Software Engineer, Fullstack @ LTK",
  homeListLabel: "LTK",
  target: {
    company: "LTK",
    role: "Senior Software Engineer, Fullstack",
    teamOrFocus: "Creator organization — creator onboarding and growth",
  },
  contact,
  about: `I am applying for Senior Software Engineer on LTK's Creator organization because the role matches how I ship: **React** and **TypeScript** web applications end to end, with full-stack ownership when APIs and data models need it. My default workflow is AI-native (**Cursor**, top 1% user; Claude-class agents daily) with human ownership of architecture, tests, and production risk.

I have 12+ years building production web experiences, including commerce- and creator-adjacent work: Bloom's admin and Shopify Plus integrations for winery clients, payments tooling at Tilia, and founder delivery at Plantfolio (Next.js, Stripe, accessible UI). I partner with product and design from discovery through rollout, mentor through pairing and review (no direct reports), and integrate with backend services via REST and **GraphQL** in production.

I have not used Vue.js in production; my framework depth is React. Go/Java backend services, ECS/Lambda/RDS, Datadog, and MySQL/DynamoDB would be ramps. I have PostgreSQL, MongoDB, and AWS (S3, EC2) today and ship tested code in fast iteration cycles.`,
  skills: ltkSkills,
  experience,
  companyReferences,
  education: educationFinanceScu,
  outreachEmail: {
    label: "3rd-tier LinkedIn or email (loose connection; personalize [First name])",
    subject: "Creator engineering at LTK / Andrew Shenstone",
    body: `Hi [First name],

I hope this is okay to send as a loose LinkedIn connection. I applied for Senior Software Engineer, Fullstack on the Creator organization and am interested in LTK's creator onboarding and growth work. I am not assuming you are on that team or hiring; any perspective or pointer would help.

I am a senior web-leaning full-stack engineer with production React and TypeScript, Shopify Plus and Stripe commerce context, a daily Cursor and Claude agentic workflow, and GraphQL/API integration experience. Vue.js and Go/Java backend depth are ramps for me, not headline tenure.

Happy to share my resume if useful. Thank you for reading a note from a distant connection.

Andrew Shenstone
shenst1@gmail.com
339-223-0797`,
  },
};
