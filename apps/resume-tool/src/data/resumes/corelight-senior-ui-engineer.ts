import { baseSkills, companyReferences, contact, experience } from "@/data/base-profile";
import type { Resume, SkillCategory } from "@/types/resume";

const corelightSkills: SkillCategory[] = [
  {
    label: "React, TypeScript & UI architecture",
    items: [
      "React and TypeScript in production for many years; Next.js (App Router, RSC) on Plantfolio; large, long-lived UIs at Bloom.wine and Tilia",
      "Component libraries and design systems: Tailwind, Shadcn UI, Chakra UI (including adoption leadership at Tilia); accessible, responsive layouts",
      "Systems view of state, data loading, and composition across a big surface—not just leaf components",
    ],
  },
  {
    label: "Data-heavy APIs & visual UX",
    items: [
      "GraphQL schema-through-client in production (Bloom Rails GraphQL, Tilia); REST integrations across commerce and platform work",
      "Interfaces for dense, operational data: admin tooling, reporting, filtering, and performance-conscious rendering",
      "PostgreSQL and relational modeling familiarity to partner credibly with backend engineers (not a DBA resume line)",
    ],
  },
  {
    label: "Quality, agility & partnership",
    items: [
      "Testing: Vitest, Cypress; strong coverage discipline on Tilia tools team; documentation and code review habits",
      "Agile delivery: sprints, standups, retros in product engineering teams",
      "Partnership with design (Figma) and product on complex flows from wireframe to production",
    ],
  },
  baseSkills.find((c) => c.label === "AI-native product & workflow") ?? baseSkills[3],
];

export const corelightSeniorUiEngineerResume: Resume = {
  slug: "corelight-senior-ui-engineer",
  createdAt: "2026-05-15",
  pageTitle: "Shenstone, Andrew - Application for Senior UI Engineer @ Corelight",
  homeListLabel: "Corelight",
  target: {
    company: "Corelight",
    role: "Senior UI Engineer",
    teamOrFocus: "Fleet Manager — frontend architecture for fleet-scale sensor management and security operations UI",
  },
  contact,
  about: `Senior UI-leaning engineer with twelve years shipping React and TypeScript across SaaS, commerce, and a founder-led product. I am strongest where the interface has to tame large, complicated datasets: GraphQL and REST in production, thoughtful component architecture, accessibility, and close collaboration with design and backend teams so features stay maintainable after launch.

Corelight’s Fleet Manager problem—making fleet-scale sensor operations and security-relevant data legible and fast—is the kind of end-to-end ownership I want: bridge sophisticated APIs to interfaces operators can trust under pressure.

Network detection, Zeek, and Suricata are not my day-to-day domain today; my ramp is learning your data model and defender workflows alongside engineering partners, while contributing immediately on frontend craft, integration patterns, and quality.`,
  skills: corelightSkills,
  experience,
  companyReferences,
};
