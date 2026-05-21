import {
  baseSkills,
  companyReferences,
  contact,
  educationFinanceScu,
  experience,
} from "@/data/base-profile";
import type { Resume, SkillCategory } from "@/types/resume";

const pushpressSkills: SkillCategory[] = [
  {
    label: "Payments & billing",
    items: [
      "Stripe in production: subscriptions, checkout, onboarding, and lifecycle flows (Plantfolio)",
      "KYC, identity verification, and risk-adjacent tooling on a payments platform (Tilia)",
      "Multi-party commerce patterns: operator payouts, member/customer billing, platform integrations (Bloom Shopify Plus; Tune marketplace automation)",
      "Stripe Connect: not my headline tenure today; strong Stripe API fundamentals and quick ramp on Connect marketplace flows",
      "Idempotency, webhooks, refunds, and reconciliation-minded delivery; B.S. Finance for money-movement conversations",
    ],
  },
  {
    label: "Full-stack (posting stack)",
    items: [
      "TypeScript",
      "Node.js",
      "React",
      "Next.js",
      "REST API design",
      "PostgreSQL and Prisma; complex relational modeling and reporting queries",
    ],
  },
  {
    label: "Reliability & leadership",
    items: [
      "High test discipline (90%+ unit coverage on critical app at Tilia); Vitest and Cypress",
      "Cross-functional work with product and design; clear communication when money is involved",
      "Mentoring through pairing and code review (no direct reports)",
      "Incident-minded ownership: care about production behavior on revenue paths, not only happy-path UI",
    ],
  },
  baseSkills.find((c) => c.label === "AI-native product & workflow") ?? baseSkills[2],
];

export const pushpressSeniorFintechResume: Resume = {
  slug: "pushpress-senior-fintech",
  createdAt: "2026-05-20",
  pageTitle:
    "Shenstone, Andrew - Application for Senior Software Engineer, Fintech @ PushPress",
  homeListLabel: "PushPress",
  target: {
    company: "PushPress",
    role: "Senior Software Engineer, Fintech",
    teamOrFocus: "Billing platform (Stripe Connect)",
  },
  contact,
  about: `I am applying for Senior Software Engineer, Fintech at PushPress because billing and payments are where I have done my most careful full-stack work: money has to be correct, observable, and explainable to operators and finance partners.

I ship in **TypeScript**, **Node.js**, and **React**. On Plantfolio I own **Stripe** subscriptions and checkout end to end. At Tilia I built on a payments platform with **KYC** and identity-adjacent tooling and very high test coverage on tools customers relied on. At Bloom I lived in multi-sided commerce (winery operators and end customers) with **Shopify Plus**, **Stripe**, and integrations where reporting and reconciliation mistakes become support tickets. **Stripe Connect** marketplace payouts are the main ramp I name plainly; the underlying habits (webhooks, idempotency, refund flows, audit-friendly modeling) are already how I work.

I have 12+ years in software engineering (above your 5+ bar) and a **B.S. Finance** background for reconciliation and revenue conversations. I mentor through reviews and pairing (no direct reports) and want to own the financial engine for independent gym owners, not only the dashboard around it.`,
  skills: pushpressSkills,
  experience,
  companyReferences,
  education: educationFinanceScu,
  outreachEmail: {
    label: "3rd-tier LinkedIn or email (loose connection; personalize [First name])",
    subject: "Fintech engineering at PushPress / Andrew Shenstone",
    body: `Hi [First name],

I hope this is okay as a loose LinkedIn connection. I applied for Senior Software Engineer, Fintech and am interested in PushPress's billing platform and marketplace payments work. I am not assuming you are on that team or hiring; any perspective or pointer would help.

I am a senior full-stack engineer with production Stripe (subscriptions and checkout), payments-platform experience at Tilia (KYC-adjacent tooling), and multi-sided commerce integrations at Bloom. Node, TypeScript, and React are my daily stack.

Happy to share my resume if useful. Thank you for reading a note from a distant connection.

Andrew Shenstone
shenst1@gmail.com
339-223-0797`,
  },
};
