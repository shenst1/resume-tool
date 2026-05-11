import {
  baseSkills,
  companyReferences,
  contact,
  educationFinanceScu,
  experience,
} from "@/data/base-profile";
import type { Resume, SkillCategory } from "@/types/resume";

const vannevarSkills: SkillCategory[] = [
  {
    label: "Frontend craft",
    items: [
      "TypeScript and React in production for many years—composable components, clear boundaries, maintainability for the next engineer",
      "Tailwind CSS and design-system-style patterns (Shadcn UI)",
      "Performance-aware rendering, state management, and shaping flows for heavy data",
      "Next.js and modern React (Plantfolio; Bloom admin)",
    ],
  },
  {
    label: "Operator-grade experiences",
    items: [
      "Dense workflows, reporting, and filtering users live in (Bloom; internal and agency-side web)",
      "Partnering with design (Figma) and product to turn vague needs into shippable UX",
      "High-stakes tone: accuracy, legibility, and calm UI when the underlying data is noisy",
    ],
  },
  {
    label: "Leadership (IC)",
    items: [
      "Mentoring through pairing, code review, and standards—informal tech lead, no direct reports",
      "Shared libraries and tooling mindset (monorepo habits at Plantfolio)",
    ],
  },
  {
    label: "Full-stack adjacency",
    items: [
      "Node.js in real products",
      "PostgreSQL and Prisma (Plantfolio); comfortable extending APIs to unblock the UI",
      "OpenSearch: not claimed on résumé today; happy to learn your search stack",
    ],
  },
  baseSkills[3],
  baseSkills[4],
];

export const vannevarResume: Resume = {
  slug: "vannevar",
  pageTitle: "Shenstone, Andrew - Application for Frontend Engineer, Decision Advantage @ Vannevar",
  target: {
    company: "Vannevar",
    role: "Frontend Engineer",
    teamOrFocus: "Decision Advantage",
  },
  contact,
  about:
    "Engineer with twelve years in the field and a steady focus on the interface: how operators read a screen, move through a workflow, and trust what they see. I ship TypeScript, React, and Tailwind in production, care about components that compose and code that the next person can own, and I have built a lot of dense, data-heavy UIs—reporting, admin, filters, and long session work—where confusion has a real cost. I have not spent a career in defense or intelligence tradecraft; I learn domains by sitting with users, drawing crisp workflows, and iterating. Technically I lean full-stack when the UI needs it: Node and PostgreSQL are in my daily work at Plantfolio. OpenSearch is not on my résumé yet. I mentor through review and pairing, not a manager title. If the role needs a clearance or quarterly travel for research and field debug, I am open to that conversation. I want the work to feel consumer-grade even when the subject matter is serious—that is the bar your posting describes.",
  skills: vannevarSkills,
  experience,
  companyReferences,
  education: educationFinanceScu,
};
