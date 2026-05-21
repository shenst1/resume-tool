import { baseSkills, companyReferences, contact, experience } from "@/data/base-profile";
import type { Resume, SkillCategory } from "@/types/resume";

const attentiveSkills: SkillCategory[] = [
  {
    label: "High-scale data systems & backends",
    items: [
      "Production services in TypeScript/Node.js and PostgreSQL: modeling, migrations, complex queries, and APIs that downstream consumers rely on",
      "ETL-style pipelines and integrations (Tune marketplace automation; third-party APIs and webhooks across Bloom, Plantfolio, Tilia)",
      "Async workloads: background jobs, queues, and webhooks (Inngest) with attention to idempotency, retries, and failure visibility",
      "Performance and operational discipline on data-heavy features (Plantfolio: large entity catalogs, search, media, multi-tenant Postgres with RLS)",
    ],
  },
  {
    label: "Identity-adjacent craft (honest center of gravity)",
    items: [
      "Entity-centric modeling and consolidation patterns in product data (plants, users, folios, media—relationship integrity and de-duplication reflexes without claiming a production “device graph” résumé line)",
      "Data quality habits: validation at boundaries, clear contracts for ingestion, and testing that survives refactors (Vitest, Cypress; high coverage discipline at Tilia)",
      "Privacy- and security-minded delivery: multi-tenant isolation (RLS), payments-adjacent handling of sensitive data (Tilia), auth tiers (Clerk on Plantfolio)",
      "Collaboration with product stakeholders on ambiguous requirements; translate “what/why” into incremental, measurable technical plans",
    ],
  },
  {
    label: "Stack breadth (cross-functional delivery)",
    items: [
      "GraphQL in production (Bloom, Tilia) when typed clients and shared schemas help teams move; REST-first when that is the clearer contract",
      "React/Next.js depth when Identity work pairs with front-end engineers on instrumentation or internal tooling",
    ],
  },
  baseSkills.find((c) => c.label === "AI-native product & workflow") ?? baseSkills[3],
];

export const attentiveIdentityResume: Resume = {
  slug: "attentive-identity",
  createdAt: "2026-05-15",
  pageTitle: "Shenstone, Andrew - Application for Senior Software Engineer (Identity) @ Attentive",
  homeListLabel: "Attentive (Identity)",
  target: {
    company: "Attentive",
    role: "Senior Software Engineer",
    teamOrFocus: "Identity — high-scale resolution, session enrichment, and cross-functional data quality",
  },
  contact,
  about: `Senior software engineer with 12+ years shipping data-heavy backends and integrations: ETL-style pipelines, PostgreSQL modeling, async ingestion through webhooks and jobs, and APIs that product and analytics rely on. I do my best work where correctness and operability matter—integration-heavy automation at Tune and founder-led Plantfolio with large catalogs, structured entities, and multi-tenant data.

The Identity team is the sort of scope I want: identity resolution and enrichment at very high event volume, with explicit expectations for data quality, privacy, and security and close partnership with Data Science, Product, and Analytics.

I have not run a marketing identity graph at that event volume before. My transfer is disciplined pipeline ownership, incremental hardening of ingestion and resolution paths, and delivery alongside stakeholders who reason from metrics; I ramp quickly when matching goals and constraints are spelled out.`,
  skills: attentiveSkills,
  experience,
  companyReferences,
};
