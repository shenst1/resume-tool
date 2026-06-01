import {
  baseSkills,
  companyReferences,
  contact,
  educationFinanceScu,
  experience,
} from "@/data/base-profile";
import type { Resume, SkillCategory } from "@/types/resume";

const compaSkills: SkillCategory[] = [
  {
    label: "Full stack (Compa stack overlap)",
    items: [
      "React, TypeScript, and GraphQL in production (Bloom Rails GraphQL; Tilia platform API; typed clients end to end)",
      "Node.js services, REST APIs, PostgreSQL with Prisma, and relational modeling for data-heavy workflows",
      "AWS (S3, EC2) in production; CI/CD and pragmatic architecture choices for enterprise SaaS surfaces",
      "Django and Python are not my primary production stacks today; motivated ramp with strong service, test, and review habits from Node and Rails",
    ],
  },
  {
    label: "Data-driven product & enterprise workflows",
    items: [
      "Complex operator and admin UIs: Bloom (Shopify Plus), Tilia (payments/KYC tooling), Plantfolio founder delivery",
      "Integrations and pipelines: webhooks, async jobs (Inngest), ETL-style work at Tune; careful handling of sensitive data",
      "B.S. Finance (Santa Clara) useful lens for compensation, pay bands, and business-facing tradeoffs (HR tech domain still a ramp)",
    ],
  },
  {
    label: "Startup ownership & AI",
    items: [
      "Founder 0→1 on Plantfolio: autonomous delivery, roadmap collaboration, outcomes over tools",
      "Production LLM features and AI-native engineering (Cursor top 1% user); interest in AI agents and data products aligns with Compa direction",
      "Code review, testing (Vitest, Cypress), and direct communication on tradeoffs and rollout risk",
    ],
  },
  baseSkills.find((c) => c.label === "AI-native product & workflow") ?? baseSkills[3],
];

export const compaSoftwareEngineerResume: Resume = {
  slug: "compa-software-engineer",
  createdAt: "2026-05-29",
  pageTitle: "Shenstone, Andrew - Application for Software Engineer @ Compa",
  homeListLabel: "Compa",
  target: {
    company: "Compa",
    role: "Software Engineer",
    teamOrFocus:
      "All teams — enterprise compensation platform; remote-friendly (office preference: Irvine, Denver, or Boston per posting)",
  },
  contact,
  about: `Software engineer with 12+ years shipping production web apps and backend systems in collaborative, high-ownership environments. Compa’s mix of live compensation data, enterprise workflows, and AI-augmented decision-making fits how I work: **React**, **TypeScript**, and **GraphQL** on the front, relational data and integrations behind it, and pragmatic tradeoffs that favor customer outcomes over toolchain religion.

I have founder experience on Plantfolio (full-stack delivery, data models, production LLM features) and platform years at Bloom and Tilia where complex admin UX and sensitive data had to stay trustworthy. GraphQL is production vocabulary for me, not a tutorial stack. **AWS** shows up in my recent work; **Django** and day-to-day **Python** would be a ramp I would make inside your patterns, similar to other polyglot teams I have joined successfully.

Compensation and HR tech are new domain labels for me; B.S. Finance gives me fluency on pay, bands, and business context, not comp-team operations. I am remote-capable and would discuss office proximity (Irvine, Denver, Boston) honestly during the process.`,
  skills: compaSkills,
  experience,
  companyReferences,
  education: educationFinanceScu,
  outreachEmail: {
    label:
      "3rd-tier LinkedIn or email (loose connection; personalize [First name])",
    subject: "Software engineering at Compa / Andrew Shenstone",
    body: `Hi [First name],

I hope this is okay to send as a loose LinkedIn connection. I applied for Software Engineer at Compa and am interested in your real-time compensation intelligence platform and enterprise customer base. I am not assuming you are hiring or on engineering; any perspective or pointer would help.

I am a senior full-stack engineer with production React, TypeScript, GraphQL, Postgres, and AWS patterns, founder ownership on an AI-native product, and a finance degree that helps me reason about pay data (HR comp workflows would be new for me). Django/Python would be a ramp, not something I would overstate.

If a short chat ever makes sense, I would be glad to connect. I can share my resume if helpful.

Thank you,
Andrew Shenstone
shenst1@gmail.com
339-223-0797`,
  },
};
