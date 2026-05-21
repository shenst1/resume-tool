import {
  baseSkills,
  companyReferences,
  contact,
  educationFinanceScu,
  experience,
} from "@/data/base-profile";
import type { Resume, SkillCategory } from "@/types/resume";

const ouraSkills: SkillCategory[] = [
  {
    label: "Commerce & checkout (mission fit)",
    items: [
      "Stripe in production: subscriptions, checkout, and onboarding (Plantfolio)",
      "Shopify Plus at scale (all Bloom clients)—integrations, operator tooling, commerce flows under real money",
      "Payments-adjacent and risk-aware features (KYC, identity verification at Tilia)—not a career fraud/3DS specialist; learn quickly with partners",
      "B.S. Finance—helps reason about tax, pricing, and tradeoffs in global commerce conversations",
    ],
  },
  {
    label: "Frontend depth (JD primary lane)",
    items: [
      "TypeScript",
      "React",
      "Next.js (App Router, Server Components)",
      "Tailwind CSS",
      "Shadcn UI",
      "Design systems & shared components (Chakra adoption at Tilia; Plantfolio library)",
      "Vitest, React Testing Library, Cypress; Jest and Playwright are the same playbook where teams standardize",
      "Performance, accessibility, and pragmatic web UX",
    ],
  },
  {
    label: "Full-stack, AWS & operations",
    items: [
      "API design and service boundaries; GraphQL and REST in production",
      "AWS in production (S3, EC2); AWS Lambda, DynamoDB, and Redis are straightforward ramps on your commerce stack",
      "CI/CD (CircleCI at Bloom; Vercel/Turbo/pnpm today); monitoring and safe rollout habits—feature flags and formal A/B platforms would align to team standards",
      "High-traffic seasonal surfaces (Washington State Fair app)—relevant to launch and campaign peaks",
    ],
  },
  {
    label: "Team impact",
    items: [
      "End-to-end ownership: discovery with product/design through production verification (Plantfolio founder; Bloom, Tilia)",
      "Mentoring via pairing, design review, and code review (no direct reports)",
      "Pragmatic tradeoffs between speed and long-term maintainability",
    ],
  },
  baseSkills.find((c) => c.label === "AI-native product & workflow") ?? baseSkills[2],
];

export const ouraSeniorFullstackCommerceResume: Resume = {
  slug: "oura-senior-fullstack-commerce",
  createdAt: "2026-05-19",
  pageTitle:
    "Shenstone, Andrew - Application for Senior Fullstack Engineer @ Oura",
  homeListLabel: "Oura",
  target: {
    company: "Oura",
    role: "Senior Fullstack Engineer",
    teamOrFocus: "Commerce Mission — Cart & Checkout",
  },
  contact,
  about: `I am applying for Senior Fullstack Engineer on Oura’s Commerce Mission because cart and checkout are where I have done my best work: **TypeScript**, **React**, and **Next.js** with **Tailwind**, plus payments and commerce systems that cannot break under real money.

My default engineering workflow is what many teams now call AI-native: **Cursor** (top 1% user) and **Claude Code**–class agents every day, with tests, review, and architecture judgment still mine. I use that rhythm to ship founder-owned product work at speed—on Plantfolio, an AI-native app where I also own **Stripe** checkout and subscriptions, and at Bloom where every client was on **Shopify Plus**.

My deepest lane matches your frontend bar: modern React/Next.js, component libraries, performance, and accessibility. I also work across APIs and data models, with **AWS** in production today (S3, EC2) and a clear ramp on **Lambda**, **DynamoDB**, and **Redis**. Fraud controls, multi-currency checkout, and formal experimentation platforms are not my headline tenure—KYC-adjacent tooling at Tilia and finance-backed reasoning help. I have shipped apps that see huge spikes in traffic (e.g. the Washington State Fair mobile app during fair season), which is good preparation for busy launch weeks and holiday sales peaks like BFCM.

I have 12+ years in software engineering and mentor through reviews and pairing (no direct reports). I want revenue-critical paths done with operational discipline: monitoring, safe rollouts, and calm debugging when checkout matters most.`,
  skills: ouraSkills,
  experience,
  companyReferences,
  education: educationFinanceScu,
  outreachEmail: {
    label: "3rd-tier LinkedIn or email (loose connection; personalize [First name])",
    subject: "Commerce engineering at Oura / Andrew Shenstone",
    body: `Hi [First name],

I hope this is okay to send as a loose LinkedIn connection. I am interested in Oura's Commerce Mission (cart and checkout) and applied for the Senior Fullstack Engineer role. I am not assuming you are hiring or on that team; I would appreciate any perspective you are willing to share, or a pointer to the right person if there is one.

I am a senior full-stack engineer with a front-end lean: Shopify Plus commerce at Bloom, Stripe checkout on a founder-led product, and 12+ years overall. I work day to day in Cursor and Claude-class tooling and care about revenue paths that stay tested and observable in production.

If a short chat ever makes sense, I would be glad to connect. I can share my resume if helpful.

Thank you,
Andrew Shenstone
shenst1@gmail.com
339-223-0797`,
  },
};
