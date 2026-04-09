import { baseSkills, companyReferences, contact, educationFinanceScu, experience } from "@/data/base-profile";
import type { Resume, SkillCategory } from "@/types/resume";

const mercuryRiskSkills: SkillCategory[] = [
  {
    label: "AI & production ML",
    items: [
      "OpenAI API",
      "AI SDK",
      "Vector embeddings & RAG",
      "LLM features shipped to production (vision, chat, extraction, orchestration)",
      "Iterating toward reliable automation over manual review loops",
    ],
  },
  {
    label: "Risk & fintech",
    items: [
      "KYC and identity verification tooling (Tilia, payments platform)",
      "Payments and fintech product surfaces",
      "B.S. Finance, Santa Clara University",
    ],
  },
  {
    label: "Platform engineering",
    items: [
      "Full-stack delivery (TypeScript, React, Next.js, Node, PostgreSQL)",
      "Third-party APIs and integration-heavy systems",
      "Monorepos, async workflows, observability-minded delivery",
    ],
  },
  baseSkills[4],
];

export const mercuryResume: Resume = {
  slug: "mercury",
  pageTitle:
    "Shenstone, Andrew - Application for Senior Software Engineer - Risk (AI & Automation) @ Mercury",
  target: {
    company: "Mercury",
    role: "Senior Software Engineer",
    teamOrFocus: "Risk (AI & Automation)",
  },
  contact,
  about:
    "Senior software engineer with 12+ years building full-stack products where correctness, integrations, and operator trust matter. At Plantfolio I shipped production AI end to end: identification from photos, contextual assistants, RAG-style retrieval, and workflows that replace repetitive manual steps. At Tilia I worked on KYC, identity verification, and risk-adjacent tooling in a payments context, alongside high-coverage delivery and mentoring through pairing and code review. My finance degree grounds how I think about risk and incentives. I want to help Mercury build agentic, well-observed automation in Risk: clear outcomes, careful rollouts, and systems that stay understandable as they scale.",
  skills: mercuryRiskSkills,
  experience,
  companyReferences,
  education: educationFinanceScu,
};
