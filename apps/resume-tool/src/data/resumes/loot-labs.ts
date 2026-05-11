import {
  baseSkills,
  companyReferences,
  contact,
  experience,
} from "@/data/base-profile";
import type { Resume, SkillCategory } from "@/types/resume";

const lootLabsSkills: SkillCategory[] = [
  {
    label: "Frontend (production systems)",
    items: [
      "Next.js with React Server Components and TypeScript (Plantfolio, Bloom)",
      "Tailwind CSS, Shadcn UI, responsive layouts from design intent",
      "Zustand, React Hook Form, component architecture",
      "Framer Motion; polish and UX details without sacrificing velocity",
      "Performance: rendering efficiency, caching strategy, Lighthouse-minded delivery",
      "Collaboration through Figma; shared component conventions with design",
    ],
  },
  {
    label: "Data & integrations",
    items: [
      "GraphQL in production APIs consumed across web & mobile (Bloom Rails GraphQL)",
      "Stripe subscriptions, onboarding, payments (Plantfolio)",
      "Shopify Plus–adjacent integrations; ShipStation; multi-vendor ecommerce patterns (Bloom)",
    ],
  },
  {
    label: "Ownership & mentorship (IC)",
    items: [
      "End-to-end feature ownership from discovery through production iteration (Plantfolio)",
      "Informal tech lead habits: pairing, code review, standards (Bloom, Tilia)",
      "High-trust remote collaboration with product and cross-functional teammates",
    ],
  },
  {
    label: "Backend & platforms (when needed)",
    items: [
      "Node.js, Server Actions pattern; PostgreSQL and Prisma (Plantfolio)",
      "AWS S3 media pipelines; pragmatic cloud usage alongside Vercel",
      "React Native production apps at scale (Ply Interactive — seasonal high traffic)",
    ],
  },
  baseSkills.find((c) => c.label === "Cloud & Tools") ?? baseSkills[4],
];

export const lootLabsResume: Resume = {
  slug: "loot-labs",
  pageTitle:
    "Shenstone, Andrew - Application for Senior Full Stack Engineer (Frontend Leaning) @ Loot Labs",
  target: {
    company: "Loot Labs",
    role: "Senior Full Stack Engineer (Frontend Leaning)",
    teamOrFocus: "Boxed.gg — polished web UX, commerce-adjacent flows, performance",
  },
  contact,
  about:
    "I've played Magic: The Gathering since Exodus (started at twelve), competed for many years, and sold cards on TCGplayer, so collectibles aren't theoretical for me; I'm familiar with what drives trust, value, and repeat behavior from both hobbyist and transactional angles. Professionally I'm a senior engineer with 12+ years leaning frontend while still owning features full stack when it matters: Next.js and TypeScript, Tailwind-aligned UI, and attention to how experiences feel under real load. I've shipped commerce-heavy work end to end (Stripe subscriptions, Shopify-adjacent tooling, shipping and marketing integrations) and high-traffic public and seasonal surfaces. GraphQL-backed products are familiar from Bloom, where Rails GraphQL endpoints served multiple clients. On Plantfolio I'm founder/engineer across ambiguous scope, turning intent into shippable UI, guarding performance, and mentoring via review without direct reports. I care about joyful collector-facing products paired with dependable payments and fulfillment, which aligns with Loot Labs and Boxed.gg.",
  skills: lootLabsSkills,
  experience,
  companyReferences,
};
