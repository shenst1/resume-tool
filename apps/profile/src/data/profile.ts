export type Link = {
  label: string;
  href: string;
};

export type ProfileImageRef = {
  src: string;
  alt: string;
  fit?: "cover" | "contain";
};

export type Project = {
  name: string;
  tagline: string;
  description: string;
  href?: string;
  years: string;
  tags: string[];
  image?: ProfileImageRef;
  logo?: ProfileImageRef;
};

export type ExperienceEntry = {
  title: string;
  company: string;
  period: string;
  summary: string;
  highlights: string[];
};

export const profile = {
  name: "Andrew Shenstone",
  legalName: "Andrew W. Shenstone",
  title: "Senior Product Engineer",
  subtitle:
    "Full-stack in practice · Front-end at heart · AI-native by default",
  location: "Bend, Oregon",
  email: "shenst1@gmail.com",
  phone: "339-223-0797",
  links: [
    { label: "LinkedIn", href: "https://linkedin.com/in/ashenstone" },
    { label: "GitHub", href: "https://github.com/shenst1" },
    { label: "Plantfolio", href: "https://plantfolio.garden/" },
  ] satisfies Link[],
  images: {
    headshot: {
      src: "/images/headshot.jpeg",
      alt: "Andrew Shenstone smiling in a warmly lit indoor setting",
    },
  } satisfies Record<string, ProfileImageRef>,
  hero: {
    headline: "I ship products people actually use—",
    headlineAccent: "from discovery through production.",
    intro:
      "Twelve years building software across agency, platform, and founder work. I partner with product and design, own the stack when the feature needs it, and use AI-assisted engineering as a daily practice—not a gimmick.",
  },
  about: {
    paragraphs: [
      "I'm a senior product engineer who defaults to full-stack ownership with a front-end emphasis. React, TypeScript, and Next.js are what I ship today; Ruby on Rails, GraphQL, PostgreSQL, and MongoDB show up repeatedly across my career.",
      "As founder and lead engineer at Plantfolio, I built an AI-native plant management platform—LLM vision, conversational UX, and semantic search over 40,000+ species—on a monorepo structured for agent-friendly iteration. Cursor (top 1% user) and Claude-class agents are part of my daily workflow; I still own architecture, tests, and what reaches production.",
      "Before Plantfolio, I shipped at Tilia (payments and identity tooling), Bloom.wine (commerce for wineries on Shopify Plus), and Ply Interactive (agency work including React Native apps at major event scale). I lead through pairing, review, and clear execution—no direct reports, but real technical influence.",
    ],
    education: "B.S. Finance, Santa Clara University — 2010",
  },
  metrics: [
    { value: "12+", label: "Years shipping software" },
    { value: "40k+", label: "Species in Plantfolio catalog" },
    { value: "90%+", label: "Test coverage at Tilia" },
    { value: "Top 1%", label: "Cursor power user" },
  ],
  projects: [
    {
      name: "Plantfolio",
      tagline: "Founder & Lead Engineer",
      description:
        "AI-native plant management: photo ID, Sage assistant, smart tagging, and vector search. Full-stack Next.js monorepo with Clerk, Stripe, Algolia, and Neon Postgres—designed for both customers and coding agents.",
      href: "https://plantfolio.garden/",
      years: "2023 — Present",
      tags: ["Next.js", "AI / RAG", "TypeScript", "Monorepo"],
      image: {
        src: "/images/plantfolio.png",
        alt: "Plantfolio plant management dashboard",
      },
    },
    {
      name: "Bloom.wine",
      tagline: "Senior Software Engineer",
      description:
        "Greenfield Next.js admin for winery clients on Shopify Plus. Rails GraphQL APIs, DatoCMS, and integrations across Stripe, Mailchimp, and Shipstation—much of the stack still in production.",
      href: "https://bloom.wine/",
      years: "2020 — 2022",
      tags: ["Next.js", "GraphQL", "Rails", "Commerce"],
      image: {
        src: "/images/bloom.png",
        alt: "Bloom.wine commerce platform marketing site",
      },
    },
    {
      name: "Tilia",
      tagline: "Senior Software Engineer",
      description:
        "Payments platform tooling: KYC and identity-adjacent features, GraphQL API evolution, Chakra UI adoption, and a reporting dashboard shipped in the first two months on the team.",
      href: "https://tilia.io/",
      years: "2023",
      tags: ["React", "GraphQL", "Payments", "Design systems"],
      image: {
        src: "/images/tilia.jpg",
        alt: "Tilia payments platform interface",
      },
    },
    {
      name: "Washington State Fair",
      tagline: "React Native · Ply Interactive",
      description:
        "Cross-platform mobile app in sustained multi-year production—very high traffic during fair season, from tens of thousands into hundreds of thousands of users cumulatively.",
      years: "Agency era",
      tags: ["React Native", "Mobile", "High traffic"],
      image: {
        src: "/images/washington-state-fair-screenshot.png",
        alt: "Washington State Fair mobile app home screen",
        fit: "contain",
      },
      logo: {
        src: "/images/washington-state-fair-logo.png",
        alt: "Washington State Fair logo",
      },
    },
  ] satisfies Project[],
  experience: [
    {
      title: "Founder & Lead Engineer",
      company: "Plantfolio",
      period: "Nov 2023 — Present",
      summary:
        "AI-native product and engineering from zero to production customers.",
      highlights: [
        "LLM vision, chat, and RAG search in production",
        "MongoDB → PostgreSQL migration on Neon",
        "Garden-center signage automation case study",
      ],
    },
    {
      title: "Senior Software Engineer",
      company: "Tilia",
      period: "Jan — Aug 2023",
      summary:
        "Payments platform tools team; GraphQL and design-system leadership.",
      highlights: [
        "Chakra UI adoption across the team",
        "90%+ unit test coverage",
        "Homepage reporting dashboard in first 60 days",
      ],
    },
    {
      title: "Senior Software Engineer",
      company: "Bloom.wine",
      period: "Sep 2020 — Oct 2022",
      summary: "Greenfield admin and GraphQL APIs for winery commerce.",
      highlights: [
        "Next.js admin still in wide production use",
        "Shopify Plus integrations at scale",
        "Informal tech lead via pairing and review",
      ],
    },
    {
      title: "Software Engineer II",
      company: "Tune Inc",
      period: "Aug 2019 — May 2020",
      summary:
        "Marketplace automation pipelines and legacy React modernization.",
      highlights: [
        "10–15 min workflow → 10–30 sec automation",
        "50% smaller production bundles",
      ],
    },
    {
      title: "Software Developer",
      company: "Ply Interactive",
      period: "Jun 2014 — Jul 2019",
      summary:
        "Agency delivery: React Native, Rails, GraphQL, and commerce platforms.",
      highlights: [
        "Multiple production React Native apps",
        "Bloom.wine product built internally",
        "GraphQL and Gatsby agency transition",
      ],
    },
  ] satisfies ExperienceEntry[],
  skillGroups: [
    {
      label: "Product & craft",
      items: [
        "Discovery → build → measure",
        "UX partnership with design",
        "B2B SaaS & commerce",
        "Technical leadership without direct reports",
      ],
    },
    {
      label: "Frontend",
      items: [
        "TypeScript",
        "React & Next.js",
        "React Native",
        "Tailwind CSS",
        "Design systems",
      ],
    },
    {
      label: "Full-stack",
      items: [
        "Node.js",
        "Ruby on Rails",
        "PostgreSQL & MongoDB",
        "GraphQL",
        "Stripe & payments",
      ],
    },
    {
      label: "AI-native",
      items: [
        "LLM features in production",
        "RAG & embeddings",
        "Cursor & agent workflows",
        "Agent-friendly monorepos",
        "OpenAI API & AI SDK",
      ],
    },
  ],
  approach: {
    title: "How I work",
    items: [
      {
        title: "Start with the problem",
        body: "Customer calls, prototypes, and tight feedback loops—not slides about slides.",
      },
      {
        title: "Ship in thin slices",
        body: "Scope something shippable, get it in front of users, and measure whether it helped.",
      },
      {
        title: "AI as leverage, not autopilot",
        body: "Agents for speed across a typed, tested codebase; humans own architecture and production risk.",
      },
      {
        title: "Own the whole feature",
        body: "UI, APIs, data models, and the release checklist—whatever the product needs.",
      },
    ],
  },
};
