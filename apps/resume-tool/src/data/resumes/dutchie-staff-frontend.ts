import {
  baseSkills,
  companyReferences,
  contact,
  experience as baseExperience,
} from "@/data/base-profile";
import type { ExperienceRole, Resume, SkillCategory } from "@/types/resume";

const dutchieExperience: ExperienceRole[] = baseExperience.map((role) => {
  if (role.company !== "Bloom.wine") return role;
  return {
    ...role,
    groups: [
      {
        heading: "Ecommerce platform (regulated retail)",
        bullets: [
          "Architected the greenfield Next.js admin for Bloom’s primary operator product—retailer-facing tooling where wineries ran clubs, inventory, and compliance-sensitive workflows; much of that stack remains in production across many clients",
          "Worked across the Rails stack (~6 years through Rails 6, Bloom and earlier agency): GraphQL APIs, models, and the console—not only the React layer; can jump into both sides quickly and ramp on post–Rails 6 conventions",
          "Platform shape Dutchie would recognize: owned experiences, third-party surfaces, and API-driven flows consumed by web and mobile",
          "All winery clients on Shopify Plus—integrations (Shopify, Stripe, Shipstation, Mailchimp, ActiveCampaign) and Polaris-aligned UI with design; alcohol is a heavily regulated category with state-by-state constraints analogous to cannabis retail complexity",
          "Mentored engineers through pairing and code review in an informal technical lead capacity (no direct reports); collaborated with product and design in Figma on component standards",
        ],
      },
    ],
  };
});

const dutchieSkills: SkillCategory[] = [
  {
    label: "Ecommerce & platform (Bloom transfer)",
    items: [
      "Regulated retail ecommerce: alcohol commerce at Bloom (Shopify Plus, operator + consumer flows)",
      "React and TypeScript for mission-critical ordering and admin experiences",
      "Ruby on Rails (~6 years through Rails 6): productive in the console and across the app; recent work is React-heavy but I jump into Rails codebases fast and ramp on newer Rails versions",
      "React Native production apps (Ply)—relevant to multi-surface ecommerce (web, mobile, kiosk/SDK contexts)",
    ],
  },
  {
    label: "GraphQL, data & quality",
    items: [
      "GraphQL in production (Bloom shared API; Tilia platform API—schema through typed clients)",
      "Apollo Client: ramp on house client; fundamentals already in daily practice",
      "MongoDB: 1+ year production on Plantfolio before late migration to Postgres—know it well; aligns with Dutchie’s Mongo + Postgres mix",
      "PostgreSQL and Prisma on Neon today (Plantfolio); SQL reporting at Bloom",
      "Vitest, React Testing Library, Cypress—clean, tested, organized code",
    ],
  },
  {
    label: "Staff-level delivery",
    items: [
      "Mentoring through pairing, code review, and standards (Chakra adoption lead at Tilia; informal tech lead at Bloom—no direct reports)",
      "Cross-functional scoping with product and design when the ideal path is not available",
      "Component-driven UI; Styled Components adoptable (recent default: Tailwind/Chakra)",
    ],
  },
  baseSkills.find((c) => c.label === "AI-native product & workflow") ?? baseSkills[2],
];

export const dutchieStaffFrontendResume: Resume = {
  slug: "dutchie-staff-frontend",
  createdAt: "2026-05-19",
  pageTitle:
    "Shenstone, Andrew - Application for Staff Software Engineer, Front-End @ Dutchie",
  homeListLabel: "Dutchie",
  target: {
    company: "Dutchie",
    role: "Staff Software Engineer, Front-End",
    teamOrFocus: "Ecommerce Platform team",
  },
  contact,
  about: `I am applying for Staff Software Engineer, Front-End on Dutchie’s Ecommerce Platform because the work maps directly to Bloom: a regulated retail category where operators (wineries) and consumers both depend on software that cannot break compliance, checkout, or trust. I built the greenfield **Next.js** admin, shipped against **Ruby on Rails** **GraphQL** shared across web and mobile, and lived inside **Shopify Plus** integrations and Polaris-aligned UI with design—retailer success driving platform success, the same two-sided story Dutchie describes for dispensaries.

I have 12+ years in software engineering. **React** has been my primary UI stack from agency work through Bloom and founder delivery; **TypeScript** is what I ship in production today. I also have roughly **six years on Ruby on Rails** (through **Rails 6**) and am comfortable in a **Rails** console and across the monolith—not only the frontend—while catching up on changes since Rails 6. I lead as a hands-on engineer through mentoring, pairing, and review (no direct reports). **Apollo Client** and **Styled Components** are house-tool ramps; cannabis labeling is new, but state rules, operator tooling, and ordering UX are not.

This team is the closest match in my background to what you are building now—regulated retail ecommerce on a long-lived platform, not a surface-level stack overlap.`,
  skills: dutchieSkills,
  experience: dutchieExperience,
  companyReferences,
};
