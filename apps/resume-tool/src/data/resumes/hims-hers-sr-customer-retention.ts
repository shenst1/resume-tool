import {
  baseSkills,
  companyReferences,
  contact,
  educationFinanceScu,
  experience,
} from "@/data/base-profile";
import type { Resume, SkillCategory } from "@/types/resume";

const himsHersSkills: SkillCategory[] = [
  {
    label: "Full-stack & e-commerce (retention lane)",
    items: [
      "React, TypeScript, and Next.js in production for 12+ years; acquisition, onboarding, and member-style flows on Plantfolio",
      "GraphQL in production (Bloom Rails API; Tilia platform API) with REST in daily work",
      "Node.js full-stack delivery (Plantfolio monorepo); commerce at Bloom (Shopify Plus, Stripe integrations) and Stripe subscriptions/checkout on Plantfolio",
      "PostgreSQL and Prisma in production; relational modeling and performance-minded queries",
      "Product discovery, prototypes, and iteration with design partners (Figma at Bloom; founder habit on Plantfolio)",
    ],
  },
  {
    label: "Mobile, platform & reliability",
    items: [
      "React Native in production (agency apps; Washington State Fair sustained multi-year delivery with very high seasonal traffic)",
      "AWS (S3, EC2) in production; async workers (Inngest), webhooks, and isolated services (render-worker) for reliability",
      "CI/CD (CircleCI at Bloom; Vercel/Turbo today); Vitest, React Testing Library, Cypress; 90%+ unit coverage culture at Tilia",
      "Kubernetes and Kotlin are honest ramps; microservice boundaries in practice via workers and shared GraphQL services, not headline K8s tenure",
      "Redis used in production job flows (Plantfolio sign rendering); observability-minded delivery, ramp on Datadog-class tooling per team standards",
    ],
  },
  {
    label: "Leadership & AI-native delivery",
    items: [
      "Mentoring through pairing, code review, and architecture discussion (Tilia Chakra adoption; Bloom greenfield admin; no direct reports)",
      "Technical influence: standards, testing bar, and cross-functional execution without people management",
      "Cursor (top 1% user) and production LLM features on Plantfolio; aligns with fast iteration and quality bar",
      "Telehealth and subscription retention domain is new; consumer acquisition/engagement commerce patterns transfer",
    ],
  },
  baseSkills.find((c) => c.label === "Architecture & async") ?? baseSkills[3],
];

export const himsHersSrCustomerRetentionResume: Resume = {
  slug: "hims-hers-sr-customer-retention",
  createdAt: "2026-06-01",
  pageTitle:
    "Shenstone, Andrew - Application for Sr. Software Engineer, Customer Retention @ Hims & Hers",
  homeListLabel: "Hims & Hers",
  target: {
    company: "Hims & Hers",
    role: "Sr. Software Engineer",
    teamOrFocus: "Customer Retention (Customer organization)",
  },
  contact,
  about: `I am applying for Sr. Software Engineer, Customer Retention at Hims & Hers because the role is full-stack work on patient acquisition and engagement surfaces where performance, reliability, and iteration matter. I have 12+ years shipping production software, with **React**, **Next.js**, **GraphQL**, **Node.js**, and **PostgreSQL** in daily use and deep e-commerce patterns from Bloom (Shopify Plus) and Plantfolio (Stripe checkout, onboarding, subscriptions).

I influence architecture and engineering quality through pairing, code review, and standards (Chakra adoption at Tilia, greenfield Next.js admin at Bloom), mentor without direct reports, and ship with strong CI/CD and automated testing. **React Native** is production experience (including high-traffic seasonal consumer apps), though I am not a mobile-only specialist. **AWS**, async workers, and service boundaries are familiar; **Kubernetes** and **Kotlin** would be ramps on your stack.

Telehealth retention mechanics are new to me; what transfers is consumer growth and commerce delivery, cross-functional product discovery, and observability-minded ownership on revenue- and experience-critical paths. B.S. Finance (Santa Clara) satisfies equivalent professional experience where CS is listed.`,
  skills: himsHersSkills,
  experience,
  companyReferences,
  education: educationFinanceScu,
  outreachEmail: {
    label: "Technical recruiter (after applying; personalize [First name])",
    subject:
      "Sr. Software Engineer, Customer Retention application / Andrew Shenstone",
    body: `Hey [First name],

I recently applied for Sr. Software Engineer, Customer Retention at Hims & Hers through your job portal. Same resume attached here.

I'm writing to let you know ⛔️🤖 I'm not a robot and I'm genuinely interested in whether I'm the right fit. I applied because I think my background fits the role, and I'd love to get a conversation started if you're the right person to talk to.

Andrew`,
  },
};
