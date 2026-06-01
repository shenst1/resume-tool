import { baseSkills, companyReferences, contact, experience } from "@/data/base-profile";
import type { Resume, SkillCategory } from "@/types/resume";

const honorSkills: SkillCategory[] = [
  {
    label: "Backend, APIs & data",
    items: [
      "TypeScript and Node.js services, REST API design, versioning, and contracts shaped for real web and ops consumers",
      "PostgreSQL with Prisma: relational modeling, migrations, complex queries, and operational discipline at product scale",
      "Distributed-systems habits: async jobs, webhooks, idempotency, retries, and performance-minded debugging (Inngest, integration pipelines)",
      "Python is not my primary production language today; strong transfer from Node and years on Ruby on Rails, with motivation to ramp in Honor’s Python stack",
    ],
  },
  {
    label: "AWS, growth surfaces & integrations",
    items: [
      "AWS (S3, EC2) in production; service-oriented patterns transferable to Lambda, queues, and RDS-style workloads as DemandGen services grow",
      "Public digital experiences: Next.js, React, TypeScript, and Tailwind on Plantfolio; high-traffic marketing and commerce surfaces at Bloom",
      "Third-party integrations (Stripe, Clerk, CMS, commerce platforms); lead- and funnel-adjacent work is a motivated ramp, not headline Salesforce/MarTech tenure",
    ],
  },
  {
    label: "Delivery, collaboration & AI workflow",
    items: [
      "Cross-functional partnership with product, design, and operations; clear written and verbal trade-offs for technical and non-technical partners",
      "Code review, testing (Vitest, Cypress), and production debugging that ends in durable fixes; mentoring through pairing without direct reports",
      "AI-assisted engineering in daily practice (Cursor, agent workflows) for coding, reviews, and shipping velocity",
    ],
  },
  baseSkills.find((c) => c.label === "AI-native product & workflow") ?? baseSkills[3],
];

export const honorSeniorBackendResume: Resume = {
  slug: "honor-senior-backend",
  createdAt: "2026-05-29",
  pageTitle: "Shenstone, Andrew - Application for Senior Backend Engineer @ Honor",
  homeListLabel: "Honor",
  target: {
    company: "Honor",
    role: "Senior Backend Engineer",
    teamOrFocus: "DemandGen — public digital experiences and growth channels (remote, U.S.)",
  },
  contact,
  about: `Senior backend-leaning engineer with 12+ years building and operating production systems on **TypeScript**, **Node.js**, **PostgreSQL**, and **AWS**, plus enough **React**, **Next.js**, and **Tailwind** fluency to keep DemandGen’s public surfaces and APIs honest together. I care about systems families actually touch: discovery funnels, reliable integrations, and data models that survive real operations load.

Honor’s mission and the DemandGen charter (how thousands of families find care) line up with work I want next: cross-functional delivery with product, design, data, and care operations; mentoring through review and pairing; and AI-native engineering habits in both implementation and deployment workflows.

I have not shipped production **Python** as my day-to-day language; my transfer is Node/Rails-style service design and relational data at scale. Deep franchise MarTech stacks (Salesforce, ad platforms, CMS at Home Instead scale) are a ramp I would make inside your standards, not something I would pretend is already on my résumé.`,
  skills: honorSkills,
  experience,
  companyReferences,
  outreachEmail: {
    label:
      "3rd-tier LinkedIn or email (loose connection; personalize [First name])",
    subject: "Senior backend engineering at Honor / Andrew Shenstone",
    body: `Hi [First name],

I hope this is okay to send as a loose LinkedIn connection. I applied for Senior Backend Engineer at Honor (DemandGen interest) and am drawn to how your team connects families to care through public digital experiences. I am not assuming you are hiring or on engineering; any perspective or pointer to the right person would help.

I am a senior engineer with production TypeScript, Node, Postgres, AWS patterns, and React/Next experience for growth-facing surfaces, plus cross-functional habits from commerce and platform work. Python is a ramp for me, not my primary language today; aging-care MarTech at franchise scale would be new domain, and I am direct about both.

If a short chat ever makes sense, I would be glad to connect. I can share my resume if helpful.

Thank you,
Andrew Shenstone
shenst1@gmail.com
339-223-0797`,
  },
};
