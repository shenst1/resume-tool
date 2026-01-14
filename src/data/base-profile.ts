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

export const about =
  "I am a senior software engineer with 12+ years of experience building full-stack applications. I have a proven track record of architecting and shipping complex, user-focused products from concept to scale. I excel at balancing technical excellence with product impact, and I'm passionate about bridging the gap between technical complexity and user-friendly experiences.";

export const baseSkills: SkillCategory[] = [
  {
    label: "Frontend",
    items: [
      "TypeScript",
      "React 19",
      "Next.js 15",
      "Tailwind CSS",
      "Shadcn UI",
      "React Hook Form",
      "Zustand",
      "Framer Motion",
    ],
  },
  {
    label: "Backend",
    items: ["Node.js", "PostgreSQL", "Prisma", "Server Actions", "API Design"],
  },
  {
    label: "AI/ML",
    items: [
      "OpenAI API",
      "AI SDK",
      "Vector Embeddings",
      "Natural Language Processing",
      "Retrieval Augmented Generation (RAG)",
    ],
  },
  {
    label: "Architecture",
    items: ["Monorepos", "Microservices", "Event-driven Systems", "Performance Optimization"],
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
        heading: "Product Leadership & Architecture",
        bullets: [
          "Architected and built a comprehensive plant management platform from the ground up, serving as both technical lead and product owner",
          "Owned the full feature cycle: joined customer calls to identify friction points, architected solutions, implemented, tested, and verified success in production",
          "Designed and implemented a sophisticated monorepo architecture with 12+ packages, enabling rapid development and maintainable codebases",
          "Led product strategy and user experience decisions, making product micro-decisions and navigating ambiguity to deliver value iteratively",
        ],
      },
      {
        heading: "Technical Achievements",
        bullets: [
          "AI Integration: Built advanced AI-powered features including plant identification from photos, contextual chatbot (Sage), and smart text extraction from plant tags using OpenAI's vision and language models",
          "Modern Frontend Architecture: Implemented Next.js 15 with React 19, React Server Components, and TypeScript, achieving exceptional performance and developer experience",
          "Complex Data Modeling: Designed and implemented sophisticated PostgreSQL schemas with Prisma, handling complex relationships between users, plants, folios, and media with 15+ interconnected models",
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
          "Delivered a production rollout for an independent garden center to automate plant signage generation",
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
          "Established coding standards and architectural patterns that enabled rapid, consistent development",
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
          "Spearheaded and guided a team through the successful adoption of Chakra UI, reducing bespoke components and establishing cohesive design patterns",
          "Maintained exceptional unit test coverage of over 90% for the Tools team application, alongside comprehensive end-to-end testing",
          "Led the swift creation and deployment of a homepage reporting dashboard within the initial two months of joining",
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
          "Architected a greenfield Next.js application for the primary admin interface of the Bloom product",
          "Engineered Ruby on Rails GraphQL API endpoints shared by multiple applications across mobile and web devices",
          "Collaborated with designers using Figma, establishing component library standards usable by both engineering and design",
          "Integrated DatoCMS and extended application functionality through third-party API integrations (Shopify, Mailchimp, Stripe, Shipstation, ActiveCampaign)",
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
          "Automated a client workflow using a Node.js/Express API and React.js, reducing the time to complete the task from 10-15 minutes to 10-30 seconds",
          "Modernized the primary legacy React.js application by moving from a custom Webpack process to react-scripts, resulting in a 50% reduction in production build size and a 60% reduction in NPM dependencies",
          "Reduced development machine CPU usage from 75% to <5% by simplifying the build pipeline and dependency graph",
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
        bullets: [
          "Developed numerous web applications including The Washington State Fair, Georgetownbeer.com, WashingtonWine.org, TwoWolvesWine.com, Novaerus.com, WellAir, and Plasma-air.com",
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
      "AI-powered plant management platform with 40,000+ plant database serving both consumer garden management and independent garden center services",
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
    description: "Leader in commerce services for the alcohol industry",
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
      "Boutique agency specializing in pixel-perfect custom websites and mobile applications; developed Bloom.wine product internally (2017-2019)",
  },
];

