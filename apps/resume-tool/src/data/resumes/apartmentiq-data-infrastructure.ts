import {
  baseSkills,
  companyReferences,
  contact,
  educationFinanceScu,
  experience,
} from "@/data/base-profile";
import type { Resume, SkillCategory } from "@/types/resume";

const apartmentiqSkills: SkillCategory[] = [
  {
    label: "Data platform & pipelines",
    items: [
      "ETL-style pipelines and marketplace integrations in production (Tune Inc)",
      "Async ingestion patterns: webhooks, background jobs, and queue-like workflows (Inngest on Plantfolio)",
      "Structured feed and API integration across commerce, CMS, and payments vendors (Bloom, Plantfolio)",
      "PostgreSQL: complex reporting queries, relational modeling, migrations, and performance-aware SQL (Bloom, Plantfolio/Prisma)",
    ],
  },
  {
    label: "Rails, backend & product delivery",
    items: [
      "Ruby on Rails (~6 years through Rails 6): GraphQL APIs, monolith patterns, and operator-facing features (Bloom; agency Rails work)",
      "Node.js services and API design; JSON/XML-shaped integrations at the application layer",
      "End-to-end ownership from scoping with product through deployment, monitoring, and iteration",
      "Documentation, code review, and mentoring habits that match platform knowledge-sharing expectations",
    ],
  },
  {
    label: "Cloud, observability & stack ramps",
    items: [
      "AWS in production (S3, EC2); RDS, ECS, Lambda, and OpenSearch align to your stack with a focused ramp",
      "CI/CD (CircleCI, Vercel/Turbo); testing discipline (Vitest, Cypress) on paths where bad data breaks trust",
      "Python, web scraping at scale, dbt, and Airflow are not headline tenure; batch-style and event-driven workflows in Node/Rails are",
      "B2B SaaS and martech-adjacent delivery (Bloom integrations; data-heavy admin and reporting surfaces)",
    ],
  },
  baseSkills.find((c) => c.label === "AI-native product & workflow") ?? baseSkills[3],
];

export const apartmentiqDataInfrastructureResume: Resume = {
  slug: "apartmentiq-data-infrastructure",
  createdAt: "2026-05-29",
  pageTitle:
    "Shenstone, Andrew - Application for Senior Software Engineer, Data Infrastructure @ ApartmentIQ",
  homeListLabel: "ApartmentIQ",
  target: {
    company: "ApartmentIQ",
    role: "Senior Software Engineer, Data Infrastructure",
    teamOrFocus: "Shared data platform (Rentable family) — remote US",
  },
  contact,
  about: `Senior software engineer with 12+ years shipping production systems where data and integrations are the product. I am applying to help evolve ApartmentIQ's shared data platform: ingestion quality, pipeline reliability, and datasets that unlock customer-facing features across Market Research, Market Surveys, and Daylight Revenue.

I bring roughly six years of **Ruby on Rails** in production, **ETL-style pipelines** at Tune, complex **PostgreSQL** reporting and modeling at Bloom and Plantfolio, and async ingestion in production today (webhooks, background jobs). I work autonomously from concept through deployment, partner with product and application engineering on roadmap trade-offs, and communicate outcomes clearly to stakeholders.

Python, web scraping at scale, and dbt/Airflow are not my headline tenure; I have shipped reliable batch-style and event-driven workflows and ramp quickly on AWS beyond S3/EC2. Multifamily rentals is new domain; B2B data and martech-shaped products are not.`,
  skills: apartmentiqSkills,
  experience,
  companyReferences,
  education: educationFinanceScu,
  outreachEmail: {
    label: "3rd-tier LinkedIn or email (loose connection; personalize [First name])",
    subject: "Data platform engineering at ApartmentIQ / Andrew Shenstone",
    body: `Hi [First name],

I hope this is okay as a loose LinkedIn connection. I applied for Senior Software Engineer on ApartmentIQ's shared data platform and am interested in how you ingest and productize multifamily market data. I am not assuming you are on that team or hiring; any perspective or pointer would help.

I am a senior engineer with production Ruby on Rails, PostgreSQL, ETL-style pipelines, and async ingestion workflows, plus twelve years overall. Python, Airflow, and web scraping at scale would be ramps for me; Rails and pipeline ownership are not.

Happy to share my resume if useful. Thank you for reading a note from a distant connection.

Andrew Shenstone
shenst1@gmail.com
339-223-0797`,
  },
};
