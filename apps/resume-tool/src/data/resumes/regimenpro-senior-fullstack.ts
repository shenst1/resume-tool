import {
  baseSkills,
  companyReferences,
  contact,
  educationFinanceScu,
  experience as baseExperience,
} from "@/data/base-profile";
import type { ExperienceRole, Resume, SkillCategory } from "@/types/resume";

const regimenproExperience: ExperienceRole[] = baseExperience.map((role) => {
  if (role.company !== "Bloom.wine") return role;
  return {
    ...role,
    groups: [
      {
        heading: "Shopify Plus & ecommerce",
        bullets: [
          "Bloom’s product was a public **Shopify App Store** app on Plus—Liquid, Admin/Storefront APIs, and integrations (Stripe, Shipstation, Mailchimp) for winery clients",
          "Greenfield **Next.js** admin and **Rails GraphQL** APIs for web and mobile under regulated alcohol retail",
        ],
      },
    ],
  };
});

const regimenproSkills: SkillCategory[] = [
  {
    label: "Shopify Plus & ecommerce",
    items: [
      "App Store app on Plus (Bloom): Liquid, Admin API, Storefront API, orders/payments/fulfillment integrations",
      "Rails GraphQL and React/Next operator tooling aligned with live storefronts",
      "Stripe and third-party connectors (Bloom, Plantfolio)",
    ],
  },
  {
    label: "Full stack",
    items: [
      "Ruby on Rails (~6 years); React, Next.js, TypeScript; PostgreSQL/Prisma (Plantfolio)",
      "AWS (S3, EC2), webhooks, Inngest; CI/CD and strong review habits",
    ],
  },
  {
    label: "0→1 & AI",
    items: [
      "Founder-led Plantfolio: discovery through production",
      "Cursor and Claude-class workflow daily; OpenAI in production",
      "Cross-functional with product, design, and ops",
    ],
  },
];

export const regimenproSeniorFullstackResume: Resume = {
  slug: "regimenpro-senior-fullstack",
  createdAt: "2026-05-20",
  pageTitle:
    "Shenstone, Andrew - Application for Senior Full Stack Engineer @ RegimenPro",
  homeListLabel: "RegimenPro",
  target: {
    company: "RegimenPro",
    role: "Senior Full Stack Engineer",
    teamOrFocus: "Remote full-time (Tilton, NH HQ)",
  },
  contact,
  about: `I am applying for Senior Full Stack Engineer at RegimenPro because the role is **Shopify Plus** ecommerce plus APIs for mobile, third parties, and internal tools—the same shape of work I owned at Bloom.

Bloom shipped a public **Shopify App Store** app on Plus: **Liquid**, APIs, **Rails** GraphQL, and **Next.js** admin for operator and mobile clients. I have 12+ years in software engineering and run **Plantfolio** 0→1 today (**Postgres**, **Stripe**, **AWS**, AI-native delivery).`,
  skills: regimenproSkills,
  experience: regimenproExperience,
  companyReferences,
  education: educationFinanceScu,
  outreachEmail: {
    label:
      "3rd-tier LinkedIn or email (loose connection; personalize [First name])",
    subject: "Full stack engineering at RegimenPro / Andrew Shenstone",
    body: `Hi [First name],

I applied for Senior Full Stack Engineer at RegimenPro. At Bloom I shipped a Shopify App Store app on Plus (Liquid, APIs, Rails). I also run Plantfolio full stack today.

If a short chat or a pointer to the right person ever helps, I would appreciate it.

Thank you,
Andrew Shenstone
shenst1@gmail.com
339-223-0797`,
  },
};
