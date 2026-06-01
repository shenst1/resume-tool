import {
  baseSkills,
  companyReferences,
  contact,
  educationFinanceScu,
  experience as baseExperience,
} from "@/data/base-profile";
import type { ExperienceRole, Resume, SkillCategory } from "@/types/resume";

const scribdExperience: ExperienceRole[] = baseExperience.map((role) => {
  if (role.company === "Plantfolio") {
    return {
      ...role,
      groups: [
        {
          heading: "API & platform boundaries",
          bullets: [
            "Owned product-facing data access through typed server actions and shared packages—not a public REST surface—so web clients get clear contracts, predictable query shapes, and centralized error handling",
            "Event-driven async (Inngest, webhooks, change-stream worker) for search indexing, rendering, and side effects; designed integration boundaries so synchronous reads stay fast under real catalog volume (40,000+ species)",
            "Dual PostgreSQL databases with Prisma; pagination, filtering, and Algolia-backed search with performance and cache-friendly access patterns in mind",
            "Public architecture documentation for onboarding engineers and consistent integration patterns across apps",
          ],
        },
        ...role.groups.filter((g) => g.heading !== "API & platform boundaries").slice(0, 2),
      ],
    };
  }
  if (role.company === "Tilia") {
    return {
      ...role,
      groups: [
        {
          bullets: [
            "Introduced and evolved a GraphQL API on the payments platform while building product on top of it—hands-on with schema design, resolvers, and typed client integration",
            "Partnered with cross-functional teams on KYC and risk-adjacent tooling where API contracts and test coverage had to hold under production scrutiny",
            "Maintained 90%+ unit test coverage on the Tools application plus E2E tests; treated API regressions as product incidents",
            "Mentored engineers through pairing and code review (no direct reports)",
          ],
        },
      ],
    };
  }
  if (role.company === "Bloom.wine") {
    return {
      ...role,
      groups: [
        {
          bullets: [
            "Engineered Ruby on Rails GraphQL APIs consumed by Next.js admin, web, and mobile—primary integration layer between modern frontends and existing Rails systems",
            "Architected greenfield Next.js admin; reduced coupling by standardizing how clients fetched and mutated domain data through the shared API",
            "Integrated Shopify Plus, Stripe, and operator tooling where API design had to respect regulated retail constraints and real money flows",
            "CI/CD with CircleCI; mentored via pairing and review (no direct reports)",
          ],
        },
      ],
    };
  }
  return role;
});

const scribdSkills: SkillCategory[] = [
  {
    label: "Web API platform",
    items: [
      "Product-facing API design: GraphQL in production (Bloom Rails API, Tilia platform); REST and typed server-action boundaries on Plantfolio",
      "Ruby on Rails (~6 years through Rails 6): integrated and extended GraphQL APIs shared across web and mobile clients",
      "Contracts, versioning mindset, and testing: high coverage at Tilia; Vitest/Cypress and CI on Plantfolio",
      "Performance-aware APIs: pagination, filtering, caching, and search (Algolia); dual-database and event-driven indexing patterns",
      "gRPC: familiar with tradeoffs from platform reading; not my primary production integration style today",
    ],
  },
  {
    label: "Modern web & developer experience",
    items: [
      "React and Next.js (App Router, Server Components) in production—partner with frontend teams on integration patterns",
      "TypeScript monorepos (Turborepo, pnpm); clear package boundaries for safer cross-team consumption",
      "Observability and failure modes as part of design: Sentry, structured errors, async retries via Inngest",
      "Champion API usage through docs, review, and pairing—not only implementation",
    ],
  },
  {
    label: "Data, async & cloud",
    items: [
      "PostgreSQL and Prisma; MongoDB in production before migration—relational and document modeling tradeoffs",
      "Inngest, webhooks, background workers; ETL-style pipelines (Tune)",
      "AWS (S3, EC2); Vercel for Next.js deployments",
    ],
  },
  baseSkills.find((c) => c.label === "AI-native product & workflow") ?? baseSkills[2],
];

export const scribdSeniorWebApiResume: Resume = {
  slug: "scribd-senior-web-api",
  createdAt: "2026-05-20",
  pageTitle:
    "Shenstone, Andrew - Application for Senior Software Engineer, Web API Platform @ Scribd",
  homeListLabel: "Scribd",
  target: {
    company: "Scribd",
    role: "Senior Software Engineer, Web API Platform",
    teamOrFocus: "Web Platform · Developer Platform · Scribd Flex",
  },
  contact,
  about: `I am applying for Senior Software Engineer, Web API Platform because the role is greenfield API platform work on top of existing systems—exactly the shape of problems I have shipped: **Ruby on Rails** **GraphQL** at Bloom, platform **GraphQL** evolution at Tilia, and intentional data boundaries on Plantfolio (**Next.js**, **PostgreSQL**, async workers).

I have 12+ years in software engineering with a platform-leaning full-stack path. I design APIs with clear contracts, pagination and caching in mind, and production health (tests, observability, failure modes) as part of the design—not afterthoughts. I partner with frontend and backend teams, document integration patterns, and work AI-natively (Cursor top 1%) for speed with human ownership of schema and risk.

I have not owned a company-wide REST gateway at Scribd scale by title; I have built and maintained shared GraphQL and typed server layers that multiple clients depended on, and I am motivated by Web Modernization as a long-term mandate. gRPC in production would be a ramp; REST and GraphQL tradeoffs are daily vocabulary for me.`,
  skills: scribdSkills,
  experience: scribdExperience,
  companyReferences,
  education: educationFinanceScu,
  outreachEmail: {
    label:
      "3rd-tier LinkedIn or email (loose connection; personalize [First name])",
    subject: "Web API Platform at Scribd / Andrew Shenstone",
    body: `Hi [First name],

I hope this is okay as a loose LinkedIn connection. I applied for Senior Software Engineer, Web API Platform and am interested in how the Web Platform team is standardizing product-facing APIs for web modernization. I am not assuming you are on that team or hiring; any perspective would help.

I am a senior engineer with production GraphQL on Ruby on Rails (Bloom), platform GraphQL at Tilia, and typed API boundaries on a TypeScript monorepo today. I care about contracts, performance, and developer experience, and I work AI-natively with Cursor daily.

Happy to share my resume if useful. Thank you for reading.

Andrew Shenstone
shenst1@gmail.com
339-223-0797`,
  },
};
