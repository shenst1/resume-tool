import type { CompanyReference, Contact, ExperienceRole, SkillCategory } from "@/types/resume";

export const contact: Contact = {
  name: "Andrew W. Shenstone",
  phone: "339-223-0797",
  email: "shenst1@gmail.com",
  links: [
    { label: "linkedin.com/in/ashenstone", href: "http://linkedin.com/in/ashenstone" },
    { label: "github.com/shenst1", href: "http://github.com/shenst1" },
  ],
};

/**
 * Default summary narrative (used by tailored resumes that import `about`).
 * The `base` résumé uses `baseResumeAbout` in `resumes/base.ts` for Indeed / general profile.
 */
export const about = `Senior product engineer with 12+ years shipping software—full-stack in practice, with a front-end emphasis. My default way of working is AI-native engineering: Cursor (top 1% user) and Claude Code–class agents on every feature, with human ownership of architecture, tests, and production risk.

Plantfolio is both where that shows up in the product—LLM vision, chat, and retrieval customers use—and where I designed the codebase for agent-friendly iteration. I partner with product and design from discovery through production on React and TypeScript, and own APIs and data models when the feature needs it.

GraphQL shows up repeatedly in production (Bloom, Tilia, agency work). I also have years on Ruby on Rails through Rails 6, MongoDB and PostgreSQL in production, and commerce and payments integrations. I lead through pairing, review, and execution planning (no direct reports).`;

/** Standard education line (Finance; relevant for fintech / business context). */
export const educationFinanceScu = "B.S. Finance, Santa Clara University — 2010";

export const baseSkills: SkillCategory[] = [
  {
    label: "Frontend",
    items: [
      "TypeScript",
      "React",
      "React Native",
      "Flutter",
      "Dart",
      "Next.js",
      "Tailwind CSS",
      "Shadcn UI",
      "React Hook Form",
      "Zustand",
      "Framer Motion",
    ],
  },
  {
    label: "Backend",
    items: [
      "Node.js",
      "PostgreSQL",
      "MongoDB (production Plantfolio ~1+ year before Postgres migration)",
      "Prisma",
      "Server Actions",
      "API Design",
      "GraphQL (production-hardened; schema/resolvers and typed clients—not my default for brand-new APIs)",
    ],
  },
  {
    label: "AI-native product & workflow",
    items: [
      "AI-native product delivery: vision, conversational UX, RAG/embeddings in production (Plantfolio)",
      "OpenAI API, AI SDK, vector embeddings",
      "AI-assisted engineering: Cursor (top 1% user), Claude Code–class workflows—daily practice since the current wave of coding agents, not a recent experiment",
      "Codebases structured for agent-friendly work: typed TypeScript monorepos, tests, clear package boundaries",
    ],
  },
  {
    label: "Architecture & async",
    items: [
      "Monorepos",
      "Async workflows (Inngest, webhooks, background jobs)",
      "ETL pipelines",
      "Performance optimization",
    ],
  },
  {
    label: "Cloud & Tools",
    items: [
      "AWS (S3, EC2)",
      "Vercel",
      "Algolia",
      "Inngest",
      "Clerk Auth",
      "Stripe",
      "Git",
      "CircleCI",
      "CI/CD",
      "pnpm",
      "Turbo",
      "Cursor IDE (Top 1% user)",
    ],
  },
];

export const experience: ExperienceRole[] = [
  {
    title: "Founder & Lead Engineer",
    company: "Plantfolio",
    start: "November 2023",
    end: "Present",
    groups: [
      {
        heading: "AI-native product & engineering",
        bullets: [
          "Built Plantfolio as an AI-native application: plant ID from photos, contextual assistant (Sage), smart tag extraction, and semantic search over 40,000+ species—LLM features customers use in production, not demos",
          "AI-native way of building: Cursor (top 1% user) and Claude-class agents are my default workflow from early in the product; I own architecture and review while using AI for speed across the 12+ package monorepo",
          "Designed the monorepo for agent-friendly iteration—TypeScript, clear boundaries, Vitest/Cypress, and consistent patterns so AI-assisted shipping stays maintainable",
        ],
      },
      {
        heading: "Product Leadership & Architecture",
        bullets: [
          "Architected and built a comprehensive plant management platform from the ground up, serving as both technical lead and product owner",
          "Owned the full feature cycle: joined customer calls to identify friction points, architected solutions, implemented, tested, and verified success in production",
          "Led product strategy and user experience decisions, making product micro-decisions and navigating ambiguity to deliver value iteratively",
        ],
      },
      {
        heading: "Technical Achievements",
        bullets: [
          "Modern Frontend Architecture: Implemented Next.js with React, React Server Components, and TypeScript, achieving exceptional performance and developer experience",
          "Data modeling & migration: Built Plantfolio on MongoDB and shipped production there for 1+ year, then migrated late to PostgreSQL on Neon (15+ interconnected models with Prisma today)—deep familiarity with document and relational modeling tradeoffs",
          "Database choices: Evaluated Supabase during exploration but did not ship on it; chose Neon for managed Postgres; auth and subscription tiers via Clerk with Postgres-centric access patterns in production today",
          "Content Management: Created sophisticated content management system with rich text editing, plant tagging, and flexible data structures",
        ],
      },
      {
        heading: "Scale & Performance",
        bullets: [
          "Managed a database of 40,000+ plant species with advanced search capabilities using Algolia and vector embeddings",
          "Implemented comprehensive media management system with AWS S3, supporting image optimization, galleries, and metadata extraction",
          "Built robust authentication and authorization systems with Clerk, supporting multiple user types and subscription tiers",
          "Optimized application performance through React Server Components, efficient data fetching, and strategic caching",
        ],
      },
      {
        heading: "Client Case Study - AI Signage",
        bullets: [
          "Delivered a production rollout for an independent garden center to automate plant signage generation; one independent retail customer in ongoing production who has been an enthusiastic reference",
          "Enabled bulk plant import (plain text) to printable signs in seconds; reduced a weekend-long manual process to minutes after initial setup",
          "Demonstrated ability to translate customer requirements into scalable technical solutions and shorten feedback loops",
        ],
      },
      {
        heading: "Full-Stack Ownership",
        bullets: [
          "Developed complete payment integration with Stripe, subscription management, and user onboarding flows",
          "Built comprehensive email system with React Email, supporting transactional emails, notifications, and marketing campaigns",
          "Implemented advanced search and filtering capabilities with Algolia, supporting complex plant queries and user preferences",
        ],
      },
      {
        heading: "Code Quality & Leadership",
        bullets: [
          "Established coding standards and architectural patterns that enabled rapid, consistent development—with AI-assisted velocity grounded in tests and human review",
          "Implemented comprehensive testing strategy with Vitest and Cypress, maintaining high code quality",
          "Built reusable component library and design system, ensuring consistent UI/UX across the platform",
        ],
      },
    ],
  },
  {
    title: "Senior Software Engineer",
    company: "Tilia",
    start: "January 2023",
    end: "August 2023",
    groups: [
      {
        bullets: [
          "Partnered with cross-functional teams in product and design to revamp critical user-facing features",
          "Built and shipped work in support of KYC, identity verification, and risk-adjacent tooling as part of Tilia’s payments platform (tools team context)",
          "Introduced and evolved a GraphQL API on the platform while consuming it from our product—hands-on with both server-side schema/resolvers and client integration",
          "Spearheaded and guided a team through the successful adoption of Chakra UI, reducing bespoke components and establishing cohesive design patterns",
          "Mentored engineers through pairing and code review in an informal technical lead capacity (no direct reports)",
          "Maintained exceptional unit test coverage of over 90% for the Tools team application, alongside comprehensive end-to-end testing",
          "Led the swift creation and deployment of a homepage reporting dashboard within the initial two months of joining",
          "Role ended in a company-wide layoff affecting approximately one-third of employees",
        ],
      },
    ],
  },
  {
    title: "Senior Software Engineer",
    company: "Bloom.wine",
    start: "September 2020",
    end: "October 2022",
    groups: [
      {
        bullets: [
          "Architected a greenfield Next.js application for the primary admin interface of the Bloom product; much of that stack remains in production across many winery clients today",
          "Engineered Ruby on Rails GraphQL API endpoints shared by multiple applications across mobile and web devices",
          "CI/CD with CircleCI for build, test, and deployment workflows alongside the Next.js and Rails stack",
          "Mentored engineers through pairing and code review in an informal technical lead capacity (no direct reports)",
          "Collaborated with designers using Figma, establishing component library standards usable by both engineering and design",
          "Integrated DatoCMS and extended application functionality through third-party API integrations (Shopify, Mailchimp, Stripe, Shipstation, ActiveCampaign); all Bloom winery clients were on Shopify Plus",
        ],
      },
    ],
  },
  {
    title: "Software Engineer II",
    company: "Tune Inc - Marketplace Automation",
    start: "August 2019",
    end: "May 2020",
    groups: [
      {
        bullets: [
          "Built and operated ETL-style data pipelines and integrations supporting marketplace automation workflows",
          "Automated a client workflow using a Node.js/Express API and React.js, reducing the time to complete the task from 10-15 minutes to 10-30 seconds",
          "Modernized the primary legacy React.js application by moving from a custom Webpack process to react-scripts, resulting in a 50% reduction in production build size and a 60% reduction in NPM dependencies",
          "Reduced development machine CPU usage from 75% to <5% by simplifying the build pipeline and dependency graph",
          "Role ended in a company-wide layoff",
        ],
      },
    ],
  },
  {
    title: "Software Developer",
    company: "Ply Interactive Inc",
    start: "June 2014",
    end: "July 2019",
    groups: [
      {
        heading: "React Native",
        bullets: [
          "Shipped multiple production React Native applications for agency clients—cross-platform mobile apps delivered end to end",
          "Washington State Fair: React Native app in sustained multi-year production; very high traffic during fair season, from tens of thousands of users into the hundreds of thousands cumulatively over seasons",
        ],
      },
      {
        heading: "Web & platforms",
        bullets: [
          "Developed numerous web applications including Georgetownbeer.com, WashingtonWine.org, TwoWolvesWine.com, Novaerus.com, WellAir, and Plasma-air.com",
          "Built a standalone Ruby gem Content Management System, enabling simplified content management within Ruby on Rails projects",
          "Transitioned the agency to modern technologies like GraphQL, Gatsby.js, and React.js, improving delivery times for new projects",
          "Bloom.wine Product Development: Built extensive reporting features using complex PostgreSQL queries and interactive filtering, saving clients thousands of hours on previously manual tasks",
          "Engineered a flexible Wine Club membership structure for wineries, allowing for diverse client configuration and broadening the range of potential sales targets",
          "Communicated and enforced the standards of Shopify's Polaris React.js component library with designers, resulting in efficiencies gained from leveraging pre-built components",
        ],
      },
    ],
  },
];

export const companyReferences: CompanyReference[] = [
  {
    name: "Plantfolio",
    years: "2023-Present",
    description:
      "AI-native plant management platform (vision, chat, RAG search); built with AI-assisted engineering (Cursor-first) and 40,000+ species catalog",
    href: "https://plantfolio.garden/",
  },
  {
    name: "Tilia",
    years: "2023",
    description: "All-in-one payment platform for digital economies",
    href: "https://tilia.io/",
  },
  {
    name: "Bloom.wine",
    years: "2020-2022",
    description:
      "Commerce services for the alcohol industry; all clients on Shopify Plus",
    href: "https://bloom.wine/",
  },
  {
    name: "Tune Inc - Marketplace Automation",
    years: "2019-2020",
    description: "SaaS platform for managing marketing partnerships across mobile and web",
    href: "https://tune.com/",
  },
  {
    name: "Ply Interactive Inc",
    years: "2014-2019",
    description:
      "Boutique agency: web and production React Native apps (e.g. Washington State Fair at major scale); developed Bloom.wine product internally (2017-2019)",
  },
];

