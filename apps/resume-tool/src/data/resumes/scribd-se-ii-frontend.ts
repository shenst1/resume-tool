import {
  baseSkills,
  companyReferences,
  contact,
  educationFinanceScu,
  experience as baseExperience,
} from "@/data/base-profile";
import type { ExperienceRole, Resume, SkillCategory } from "@/types/resume";

const scribdFrontendExperience: ExperienceRole[] = baseExperience.map((role) => {
  if (role.company === "Plantfolio") {
    return {
      ...role,
      groups: [
        {
          heading: "Signup, onboarding & conversion surfaces",
          bullets: [
            "Owned auth, subscription tiers, and Stripe checkout flows end to end—first-run UX, paywall moments, and transactional email that reduce friction from signup through activation",
            "Built reusable component library and accessible UI patterns (Shadcn/Tailwind) with Vitest and Cypress so iteration on onboarding stays safe under change",
            "Next.js App Router with React Server Components and TypeScript monorepo (12+ packages); clear shared patterns for cross-app UI and data fetching",
            "Talked with users on calls to find drop-off, shipped fixes, and verified outcomes in production—not only ticket completion",
          ],
        },
        ...role.groups.filter((g) => g.heading !== "Signup, onboarding & conversion surfaces").slice(0, 2),
      ],
    };
  }
  if (role.company === "Bloom.wine") {
    return {
      ...role,
      groups: [
        {
          bullets: [
            "Architected greenfield Next.js admin consumed through Ruby on Rails GraphQL—comfortable partnering in a Rails-backed product while owning React UI quality",
            "Collaborated with design in Figma; established component standards used by engineering and design across commerce operator workflows",
            "Integrated Shopify Plus, Stripe, and martech tooling where checkout and lifecycle emails had to stay reliable under real retail traffic",
            "CI/CD with CircleCI; mentored via pairing and review (no direct reports)",
          ],
        },
      ],
    };
  }
  if (role.company === "Tilia") {
    return {
      ...role,
      groups: [
        {
          bullets: [
            "Shipped user-facing KYC and identity verification flows on a payments platform—high scrutiny on clarity, error states, and test coverage (90%+ unit, E2E)",
            "Evolved GraphQL API while building typed React clients—daily integration between frontend and backend contracts",
            "Led Chakra UI adoption to reduce one-off components and improve UI consistency across squads",
            "Mentored through pairing and code review (no direct reports)",
          ],
        },
      ],
    };
  }
  return role;
});

const scribdFrontendSkills: SkillCategory[] = [
  {
    label: "Frontend (Signup & Activation)",
    items: [
      "TypeScript and React in production for 12+ years; Next.js (App Router, RSC) on Plantfolio; Rails-backed GraphQL clients at Bloom",
      "Component architecture, state management (Zustand, React Hook Form), accessibility-minded UI, and Vitest/Cypress testing discipline",
      "Performance and polish: loading UX, code splitting, pragmatic bundle tuning, design-system partnership (Figma, Chakra, Shadcn)",
      "Monorepos and shared UI patterns: Turborepo/pnpm today; comfortable with platform constraints and cross-team libraries",
    ],
  },
  {
    label: "APIs, Rails & growth engineering",
    items: [
      "REST and GraphQL in production (Bloom Rails API; Tilia platform); integrate frontends with backend squads on complete funnel features",
      "Ruby on Rails (~6 years through Rails 6): productive in Rails-backed environments without needing to own backend roadmap",
      "Experimentation: pragmatic A/B mindset and data-informed iteration as founder; formal growth platforms (Optimizely-style) would align to team standards",
      "Personalization and lifecycle: onboarding, subscriptions, Clerk auth tiers, Stripe, and transactional email on Plantfolio",
    ],
  },
  {
    label: "AI fluency & remote collaboration",
    items: [
      "Cursor (top 1% user) and Claude-class agents daily for development, debugging, and exploration—with human ownership of architecture and risk",
      "Remote-first habits: written specs, architecture notes, and clear async updates from founder and platform work",
      "CI/CD (CircleCI, Vercel); Redis/Kafka/Terraform are honest ramps, not headline production ownership",
    ],
  },
  baseSkills.find((c) => c.label === "Cloud & Tools") ?? baseSkills[4],
];

export const scribdSeIiFrontendResume: Resume = {
  slug: "scribd-se-ii-frontend",
  createdAt: "2026-06-07",
  pageTitle:
    "Shenstone, Andrew - Application for Software Engineer II (Frontend) @ Scribd",
  homeListLabel: "Scribd (Growth)",
  target: {
    company: "Scribd",
    role: "Software Engineer II (Frontend)",
    teamOrFocus: "Signup & Activation · Growth Engineering",
  },
  contact,
  about: `I am applying for Software Engineer II (Frontend) on Signup & Activation because the role matches how I ship customer-facing web: **TypeScript**, **React**, and **Next.js** with attention to onboarding friction, accessible UI, and tests that protect real behavior. I have 12+ years in frontend-heavy delivery and am motivated by growth engineering where frontend quality directly moves acquisition and activation metrics.

On Plantfolio I owned signup, Clerk auth, subscription tiers, and Stripe checkout end to end, plus a typed monorepo and component library I iterate on with users in the loop. At Bloom I built **Next.js** on top of **Ruby on Rails** **GraphQL**; at Tilia I shipped identity and KYC flows with high test coverage. I integrate with **REST** and **GraphQL** daily, document clearly for remote teammates, and work **Cursor**-first (top 1% user) with human review on architecture and production risk.

Dedicated A/B and personalization platforms are not my headline tenure; I have run pragmatic experiments and rollout discipline as a founder and would ramp on Scribd's growth stack. The level is below my recent senior titles, but the team and problem space are what I want next.`,
  skills: scribdFrontendSkills,
  experience: scribdFrontendExperience,
  companyReferences,
  education: educationFinanceScu,
  outreachEmail: {
    label: "Technical recruiter (after applying; personalize [First name])",
    subject: "Software Engineer II (Frontend) application / Andrew Shenstone",
    body: `Hey [First name],

I recently applied for Software Engineer II (Frontend) on Signup & Activation at Scribd through your job portal. Same resume attached here.

I'm writing to let you know I'm not a robot and I'm genuinely interested in whether I'm the right fit. I applied because React, Next.js, and Rails-backed growth surfaces are where I've shipped most, and I'd love to get a conversation started if you're the right person to talk to.

Andrew`,
  },
};
