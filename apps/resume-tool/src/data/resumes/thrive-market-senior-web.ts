import {
  baseSkills,
  companyReferences,
  contact,
  educationFinanceScu,
  experience,
} from "@/data/base-profile";
import type { Resume, SkillCategory } from "@/types/resume";

const thriveMarketSkills: SkillCategory[] = [
  {
    label: "E-commerce web (primary lane)",
    items: [
      "React, TypeScript, and Next.js in production for 12+ years; member and checkout UX on Plantfolio; admin and commerce surfaces at Bloom",
      "Shopify Plus at scale (all Bloom clients)—integrations, operator tooling, and commerce flows under real money",
      "Stripe subscriptions and checkout in production (Plantfolio); payments-adjacent delivery at Tilia",
      "Performance, accessibility, and testability: Vitest, Cypress, React Testing Library; 90%+ coverage culture at Tilia",
    ],
  },
  {
    label: "Platform delivery & collaboration",
    items: [
      "CI/CD (CircleCI at Bloom; Vercel/Turbo/pnpm today); pragmatic automation and refactor discipline",
      "REST and GraphQL APIs; service boundaries and incremental architecture in production monoliths and modern stacks",
      "Cross-functional partnership with product, design, and QA from discovery through production verification",
      "Mentoring via pairing and code review; help teams diagnose systemic blockers (no direct reports or formal recruiting ownership)",
    ],
  },
  {
    label: "Scale & stack context",
    items: [
      "High-traffic seasonal consumer delivery (Washington State Fair React Native app during peak season)",
      "AWS (S3, EC2) in production; microservices and distributed-system patterns at a practical product-engineering level",
      "Angular and dedicated PWA framework tenure are ramps; React/Next and progressive enhancement habits are production-default",
      "Seven consecutive years at one Thrive-scale D2C grocer is not my résumé shape; commerce and membership product work is",
    ],
  },
  baseSkills.find((c) => c.label === "AI-native product & workflow") ?? baseSkills[3],
];

export const thriveMarketSeniorWebResume: Resume = {
  slug: "thrive-market-senior-web",
  createdAt: "2026-05-29",
  pageTitle:
    "Shenstone, Andrew - Application for Senior Software Engineer, Web @ Thrive Market",
  homeListLabel: "Thrive Market",
  target: {
    company: "Thrive Market",
    role: "Senior Software Engineer, Web",
    teamOrFocus: "E-commerce web experience (remote-first US)",
  },
  contact,
  about: `I am applying for Senior Software Engineer, Web at Thrive Market because the role is high-scale e-commerce front-end work: **React**, tested member and checkout experiences, and performance where traffic makes every regression visible.

I have twelve years building web and commerce products, including **Shopify Plus** integrations and operator tooling at Bloom, **Stripe** subscriptions and checkout on Plantfolio, and high-traffic seasonal consumer apps (Washington State Fair). I ship with **CI/CD**, strong automated testing, and close partnership with product, design, and QA. I mentor through pairing and review and help teams remove systemic delivery blockers.

The posting also describes platform leadership, recruiting, and vendor management; that is not my headline tenure as a people manager. My fit is senior hands-on web engineering on commerce paths, technical influence through code and collaboration, and the velocity and quality bar this team describes.`,
  skills: thriveMarketSkills,
  experience,
  companyReferences,
  education: educationFinanceScu,
  outreachEmail: {
    label: "3rd-tier LinkedIn or email (loose connection; personalize [First name])",
    subject: "Web engineering at Thrive Market / Andrew Shenstone",
    body: `Hi [First name],

I hope this is okay as a loose LinkedIn connection. I applied for Senior Software Engineer, Web at Thrive Market and am interested in how you build member-facing e-commerce at scale. I am not assuming you are on that team or hiring; any perspective or pointer would help.

I am a senior web engineer with production React, Shopify Plus and Stripe commerce work, CI/CD and testing discipline, and twelve years overall. The requirements section reads partly like platform leadership; my fit is hands-on web and commerce delivery with mentoring through review, not people management.

Happy to share my resume if useful. Thank you for reading a note from a distant connection.

Andrew Shenstone
shenst1@gmail.com
339-223-0797`,
  },
};
