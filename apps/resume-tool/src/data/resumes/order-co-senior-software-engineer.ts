import {
  baseSkills,
  companyReferences,
  contact,
  educationFinanceScu,
  experience,
} from "@/data/base-profile";
import type { Resume, SkillCategory } from "@/types/resume";

const orderCoSeniorSoftwareEngineerSkills: SkillCategory[] = [
  {
    label: "Full stack & platform (posting)",
    items: [
      "Ruby on Rails through Rails 6 (~6 years agency + Bloom): GraphQL APIs, models, integrations, and production discipline",
      "PostgreSQL with Prisma today; relational modeling, migrations, and query performance; MongoDB-to-Postgres migration on Plantfolio",
      "React, TypeScript, and Next.js for admin and product surfaces; comfortable owning features end-to-end across stack boundaries",
      "REST and GraphQL APIs, webhooks, and third-party vendor integrations (Shopify Plus, Stripe, Mailchimp, payments tooling)",
    ],
  },
  {
    label: "AI-native delivery & quality bar",
    items: [
      "Cursor (top 1% user) and Claude-class agents daily with critical review before merge; judgment on correctness and security",
      "Design reviews, scoping, rollout, and post-release monitoring habits; push back on shortcuts that create long-term cost",
      "Testing: Vitest, Cypress; 90%+ unit coverage culture at Tilia; CircleCI at Bloom",
      "AWS (S3, EC2), CI/CD, and observability-minded production debugging",
    ],
  },
  {
    label: "B2B, spend & mentorship",
    items: [
      "Marketplace and multi-vendor commerce context (Bloom Shopify Plus; Tune marketplace automation; B2B freight founder work)",
      "Payments-adjacent: Stripe subscriptions and checkout (Plantfolio); KYC and payments platform tooling (Tilia)",
      "Mentoring through pairing and substantive code review (Bloom); informal tech lead scope without direct reports",
      "NetSuite, QuickBooks, and ACH/card-issuer depth are ramps; finance B.S. supports procurement and spend conversations",
    ],
  },
  baseSkills.find((c) => c.label === "Architecture & async") ?? baseSkills[3],
];

export const orderCoSeniorSoftwareEngineerResume: Resume = {
  slug: "order-co-senior-software-engineer",
  createdAt: "2026-06-01",
  pageTitle:
    "Shenstone, Andrew - Application for Senior Software Engineer @ Order.co",
  homeListLabel: "Order.co",
  target: {
    company: "Order.co",
    role: "Senior Software Engineer",
    teamOrFocus:
      "B2B marketplace / procurement platform; subsystem ownership; remote US",
  },
  contact,
  about: `Senior engineer with 12+ years shipping production systems on **Ruby on Rails**, **PostgreSQL**, **React**, and **TypeScript**—subsystems, integrations, and UIs where spend and trust have to stay correct. I own outcomes end to end: design reviews, early risk callouts, rollout and post-release follow-through, and mentoring through pairing and review.

Order.co’s guided B2B marketplace maps to work I have done: multi-vendor commerce and operator tooling at Bloom (Shopify Plus integrations, Rails GraphQL APIs), payments-adjacent delivery at Tilia, and Stripe-backed subscription flows on Plantfolio. I use **Cursor** daily (top 1% user) as an accelerant with human judgment on security and maintainability, and I am direct with product and finance stakeholders when scope needs reframing.

I have not shipped procurement or consolidated AP at Order.co’s scale. ERP connectors (NetSuite, QuickBooks) and card/ACH rails beyond Stripe are ramps I would learn inside your standards. B.S. Finance (Santa Clara) helps me reason about spend control and reconciliation with business partners.`,
  skills: orderCoSeniorSoftwareEngineerSkills,
  experience,
  companyReferences,
  education: educationFinanceScu,
  outreachEmail: {
    label: "Technical recruiter (after applying; personalize [First name])",
    subject: "Senior Software Engineer application / Andrew Shenstone",
    body: `Hey [First name],

I recently applied for Senior Software Engineer at Order.co through your job portal. Same resume attached here.

I'm writing to let you know ⛔️🤖 I'm not a robot and I'm genuinely interested in whether I'm the right fit. Rails, Postgres, and B2B integrations are where I have shipped most, and I'd love to get a conversation started if you're the right person to talk to.

Andrew`,
  },
};
