import {
  baseSkills,
  companyReferences,
  contact,
  educationFinanceScu,
  experience,
} from "@/data/base-profile";
import type { Resume, SkillCategory } from "@/types/resume";

const bestowSkills: SkillCategory[] = [
  {
    label: "Frontend platform & SSR",
    items: [
      "React",
      "Next.js (App Router, Server Components, TypeScript)",
      "SSR-minded architecture and production performance",
      "Component architecture, modular boundaries, monorepos (Turbo, pnpm)",
      "Accessibility-minded and responsive delivery",
    ],
  },
  {
    label: "GraphQL & APIs",
    items: [
      "Shipping UIs against GraphQL (Bloom: Rails GraphQL consumed by web and other clients)",
      "Schema collaboration, query shape, and performance awareness with backend partners",
    ],
  },
  {
    label: "Testing & quality",
    items: [
      "Vitest",
      "Cypress",
      "Unit and integration discipline; code review as a teaching tool",
      "Jest / React Testing Library ecosystem: familiar through overlap with common React stacks",
    ],
  },
  {
    label: "Developer experience & delivery",
    items: [
      "CI/CD ownership mindset; CircleCI in production at Bloom; recent work often Vercel-forward—same fundamentals (jobs, caching, rollout discipline)",
      "Nx: not primary stack today; strong monorepo habits to map across",
    ],
  },
  baseSkills[2],
  baseSkills[4],
];

export const bestowResume: Resume = {
  slug: "bestow",
  pageTitle: "Shenstone, Andrew - Application for Software Engineer, Frontend Platform @ Bestow",
  target: {
    company: "Bestow",
    role: "Software Engineer",
    teamOrFocus: "Frontend Platform",
  },
  contact,
  about:
    "Senior engineer with 12+ years of React and production Next.js—server components, typed contracts, and fast pages for real users. Plantfolio is a multi-package monorepo (Turbo, pnpm) where I set patterns, not just features: what we share, how we test, and how deployments stay boring. At Bloom I lived on a GraphQL surface shared across apps; I know how APIs turn into frontend pain when schema and usage are not negotiated early, and I push for shapes and performance decisions that hold at scale. I test with Vitest and Cypress today; Jest, React Testing Library, and Playwright are the same general playbook, and I am happy to align on what your platform team already picked. I lead through pairing and clear code review—no direct reports. I have shipped with CircleCI before, including at Bloom; day-to-day recently is more Vercel-heavy, but pipeline problems are the same work under different logos. Nx is not my everyday monorepo tool—that is the clearer ramp against your posting. I use Cursor as a top 1% user and treat AI as leverage for tests and UI work, not a substitute for judgment.",
  skills: bestowSkills,
  experience,
  companyReferences,
  education: educationFinanceScu,
};
