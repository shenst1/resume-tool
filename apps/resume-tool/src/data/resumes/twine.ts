import { baseSkills, companyReferences, contact, experience } from "@/data/base-profile";
import type { Resume, SkillCategory } from "@/types/resume";

const twineSkills: SkillCategory[] = [
  {
    label: "Production systems & architecture",
    items: [
      "End-to-end SDLC: discovery and requirements through design, shipping, and ongoing maintenance",
      "Scalable API design, versioning, and integration boundaries across services",
      "Async workflows, webhooks, and ETL-style pipelines in production",
      "Cloud-backed architectures (AWS, Vercel) with reliability and performance in mind",
    ],
  },
  {
    label: "Core implementation stack",
    items: [
      "TypeScript, JavaScript, React, Next.js, Node.js",
      "PostgreSQL with Prisma; complex schemas and performance-aware queries",
      "Monorepos (pnpm, Turbo) and patterns that keep large codebases maintainable",
    ],
  },
  {
    label: "Quality, testing & operations",
    items: [
      "Automated testing (Vitest, Cypress) and strong regression discipline on teams",
      "CI/CD (CircleCI; modern pipelines elsewhere); builds that stay predictable at scale",
      "Production troubleshooting mindset: narrow incidents, guardrails, and measurable improvements",
    ],
  },
  baseSkills.find((c) => c.label === "AI/ML") ?? baseSkills[3],
];

export const twineResume: Resume = {
  slug: "twine",
  createdAt: "2026-05-14",
  pageTitle: "Shenstone, Andrew - Application for Software Engineer @ Twine",
  homeListLabel: "Twine",
  target: {
    company: "Twine",
    role: "Software Engineer",
    teamOrFocus: "Production systems & platform (fully remote)",
  },
  contact,
  about: `Senior software engineer with 12+ years owning software from requirements and design through deployment and iteration—APIs, data layers, and UIs that have to stay dependable in production. I default to clear module boundaries, sensible abstractions, and tests that protect what users actually rely on, and I’m used to collaborating across time zones as an individual contributor who still helps the team level up through pairing and code review.

Twine’s freelance marketplace is not a domain I have shipped before, but my recent work is a close cousin to what marketplaces need: multi-tenant patterns, trustworthy workflows, and integrations that fail in understandable ways. On AI, I have integrated models and retrieval workflows into a real product (vision, chat, embeddings, background jobs)—I’m not training models from scratch, but I am comfortable bringing ML-backed capabilities into production systems responsibly.`,
  skills: twineSkills,
  experience,
  companyReferences,
};
