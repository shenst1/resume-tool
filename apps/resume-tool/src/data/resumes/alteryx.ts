import { baseSkills, companyReferences, contact, experience } from "@/data/base-profile";
import type { Resume, SkillCategory } from "@/types/resume";

const alteryxSkills: SkillCategory[] = [
  {
    label: "AI & product frontend",
    items: [
      "TypeScript",
      "React",
      "Next.js (App Router, server components)",
      "LLM-powered features in production: vision, chat, RAG-style retrieval, workflow automation (Plantfolio)",
      "OpenAI API & AI SDK; iterative shipping in ambiguous product spaces",
    ],
  },
  {
    label: "Craft, accessibility & quality",
    items: [
      "Polished UX: design systems (Shadcn, Chakra adoption at Tilia), Figma partnership (Bloom)",
      "Accessibility- and performance-minded delivery",
      "Automated testing: Vitest, Cypress; high coverage on critical paths (Tilia)",
      "CI/CD, Git-based workflows, code review",
    ],
  },
  {
    label: "Architecture & data-rich UIs",
    items: [
      "API integration and service-oriented backends (GraphQL, REST, webhooks)",
      "Complex admin and reporting UIs (Bloom, Tune), ETL-adjacent pipelines",
      "Monorepos (pnpm, Turbo), mentoring through pairing and pairing-style collaboration",
    ],
  },
  baseSkills[4],
];

export const alteryxResume: Resume = {
  slug: "alteryx",
  pageTitle: "Shenstone, Andrew - Application for Sr. Software Engineer (Front-End) @ Alteryx",
  target: {
    company: "Alteryx",
    role: "Sr. Software Engineer (Front-End)",
    teamOrFocus: "AI experiences (Copilot, GenAI, extensibility)",
  },
  contact,
  about:
    "Senior software engineer with 12+ years building production web applications with TypeScript and React—most recently a founder-led Next.js product where I shipped real LLM features: vision, contextual assistants, RAG-style retrieval, and workflows that replace manual steps. That maps directly to conversational surfaces, tool actions, and trustworthy AI UX in complex domains. I’m comfortable owning medium-sized initiatives end-to-end across product ambiguity, partnering with design and backend, and raising quality through tests, reviews, and mentorship. I have deep experience with data-heavy operator interfaces and integrations (Bloom, Tune). Python and C# are not my primary résumé languages today; I am used to working across service boundaries with clear contracts and would partner closely with AI and platform teams on APIs, telemetry, and integration patterns. I want to help Alteryx deliver Copilot, GenAI Tools, and extensible AI surfaces with clarity, safety, and craft.",
  skills: alteryxSkills,
  experience,
  companyReferences,
};
