import { baseSkills, companyReferences, contact, experience } from "@/data/base-profile";
import type { Resume, SkillCategory } from "@/types/resume";

const magnetGraykeySkills: SkillCategory[] = [
  {
    label: "Frontend & design systems",
    items: [
      "TypeScript",
      "React",
      "Next.js (App Router, Server Components)",
      "Tailwind CSS",
      "Shadcn UI",
      "Design-system rollout & adoption (Chakra UI at Tilia)",
      "Component libraries paired with design (Figma; Polaris-aligned patterns)",
      "Performance-minded shipping (bundles, caching, server/client boundaries)",
    ],
  },
  {
    label: "Quality, testing & CI/CD",
    items: [
      "Vitest",
      "Cypress",
      "Automated UI testing in production workflows",
      "CircleCI",
      "CI/CD pipelines",
      "Git",
      "High coverage discipline on critical apps (90%+ tools surface at Tilia)",
    ],
  },
  {
    label: "Security-aware engineering",
    items: [
      "Auth & authorization patterns (Clerk; Supabase Row-Level Security)",
      "Multi-tenant isolation patterns",
      "KYC and identity-adjacent tooling (payments platform context)",
      "Modern JavaScript security posture (sanitized boundaries, thoughtful client/server splits)",
    ],
  },
  baseSkills.find((c) => c.label === "AI/ML") ?? baseSkills[3],
];

export const magnetGraykeyResume: Resume = {
  slug: "magnet-graykey",
  createdAt: "2026-05-14",
  pageTitle:
    "Shenstone, Andrew - Application for Senior Frontend Software Engineer @ Magnet Forensics",
  homeListLabel: "Magnet Graykey",
  target: {
    company: "Magnet Forensics",
    role: "Senior Frontend Software Engineer",
    teamOrFocus: "Graykey platform web experiences",
  },
  contact,
  about: `Senior frontend engineer with 12+ years on React and TypeScript—from agency delivery to founder-led Next.js. I've driven design-system adoption (Chakra at Tilia), built reusable UI from scratch (Plantfolio), aligned teams to Polaris earlier in my career, and modernized a legacy React toolchain at Tune.

Quality and collaboration are core: Cypress and Vitest in production, CircleCI-backed workflows, and mentoring through pairing and code review (no direct reports).

Graykey is new domain for me (no forensic/device UI on my resume yet). I partner tightly with design and QA, bring auth and multi-tenant discipline from Postgres-heavy products and payments-adjacent security habits, and I'm motivated to deepen Python and Flask/FastAPI-class backends alongside Linux-backed workflows where your stack needs it.`,
  skills: magnetGraykeySkills,
  experience,
  companyReferences,
};
