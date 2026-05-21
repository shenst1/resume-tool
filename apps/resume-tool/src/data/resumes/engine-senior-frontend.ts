import {
  baseSkills,
  companyReferences,
  contact,
  educationFinanceScu,
  experience,
} from "@/data/base-profile";
import type { Resume, SkillCategory } from "@/types/resume";

const engineSkills: SkillCategory[] = [
  {
    label: "Frontend (Engine-aligned)",
    items: [
      "TypeScript and React.js in production for 12+ years; Next.js (App Router, RSC) on Plantfolio; long-lived SPAs at Bloom and Tilia",
      "Responsive layouts, cross-browser discipline, and performance-minded delivery (code splitting, loading UX, pragmatic bundle tuning)",
      "HTML and CSS depth (Tailwind/Chakra today; adopt house CSS patterns per repo)",
      "Accessibility-minded component work; design-system partnership with Figma (Bloom, Tilia Chakra adoption)",
    ],
  },
  {
    label: "Agentic engineering (explicit posting)",
    items: [
      "Cursor (top 1% user): default agentic workflow from scoping through review—not a recent experiment",
      "Claude-class coding agents on every feature; human ownership of architecture, tests, and production risk",
      "Codebases structured for agent-friendly iteration: typed TypeScript, clear boundaries, Vitest/Cypress",
    ],
  },
  {
    label: "Pluses & full-stack partnership",
    items: [
      "React Native in production (Ply agency; Washington State Fair scale)",
      "Ruby on Rails (~6 years through Rails 6): productive in console and monolith; recent work is React-heavy",
      "REST and GraphQL in production; partner with backend on distributed systems and API contracts",
      "Stripe subscriptions and checkout (Plantfolio); payments-platform tooling (Tilia)",
    ],
  },
  baseSkills.find((c) => c.label === "Architecture & async") ?? baseSkills[3],
];

export const engineSeniorFrontendResume: Resume = {
  slug: "engine-senior-frontend",
  createdAt: "2026-05-20",
  pageTitle:
    "Shenstone, Andrew - Application for Senior Software Engineer, Frontend @ Engine",
  homeListLabel: "Engine",
  target: {
    company: "Engine",
    role: "Senior Software Engineer, Frontend",
    teamOrFocus: "Corporate travel, charge card, and spend management platform",
  },
  contact,
  about: `I am applying for Senior Software Engineer, Frontend at Engine because the role matches how I ship: **TypeScript**, **React**, responsive UI, performance discipline, and a daily **Cursor**/Claude agentic workflow (top 1% Cursor user) while I still own architecture, review, and production risk.

I have 12+ years building customer-facing web and mobile: Bloom admin and commerce integrations, Tilia payments tooling, and founder delivery at Plantfolio (Next.js, accessible components, Stripe). I also have roughly six years on Ruby on Rails through Rails 6 and production React Native (State Fair scale). I collaborate with product and design from scoping through fixes in prod and partner on distributed systems when APIs need it.

Corporate travel and card spend are new domains for me; I am honest about that gap. What transfers is multi-step commerce flows, fintech integrations, finance schooling, and making complex operator UX feel simple.`,
  skills: engineSkills,
  experience,
  companyReferences,
  education: educationFinanceScu,
  outreachEmail: {
    label: "3rd-tier LinkedIn or email (loose connection; personalize [First name])",
    subject: "Frontend engineering at Engine / Andrew Shenstone",
    body: `Hi [First name],

I hope this is okay as a loose LinkedIn connection. I applied for Senior Software Engineer, Frontend and am interested in Engine's travel and spend platform work. I am not assuming you are on that team or hiring; any perspective or pointer would help.

I am a senior frontend-leaning engineer with production React and TypeScript, a daily Cursor and Claude agentic workflow, Rails and React Native depth as pluses, and Stripe plus payments-platform experience. Travel booking at Engine scale would be a ramp for me; commerce and fintech UI habits are not.

Happy to share my resume if useful. Thank you for reading a note from a distant connection.

Andrew Shenstone
shenst1@gmail.com
339-223-0797`,
  },
};
