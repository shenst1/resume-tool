import {
  baseSkills,
  companyReferences,
  contact,
  educationFinanceScu,
  experience,
} from "@/data/base-profile";
import type { Resume, SkillCategory } from "@/types/resume";

const mixpanelProactiveInsightsSkills: SkillCategory[] = [
  {
    label: "AI-powered product work",
    items: [
      "LLM integrations in production: chat, vision, structured extraction, pragmatic model choice (Plantfolio)",
      "AI SDK and OpenAI APIs; building features users touch, not demos",
      "Agent-style flows and orchestration: ready to align with shared platform from your AI Engine team",
    ],
  },
  {
    label: "Frontend for analytics & insights",
    items: [
      "React, TypeScript, and Next.js for dense, trustworthy UIs",
      "Dashboards, filtering, and long-session workflows (Bloom reporting and admin; Plantfolio analytics-style surfaces)",
      "Instrumenting product usage and caring whether features actually get adopted",
    ],
  },
  {
    label: "Full-stack delivery",
    items: [
      "Node.js, PostgreSQL, Prisma, and API design in production",
      "Python and Django: not my most-shipped stack today; comfortable ramping for services that sit next to your query engine",
      "Debugging across layers: reproduce, narrow, fix, verify",
    ],
  },
  {
    label: "How I work",
    items: [
      "Async-friendly collaboration and clear written technical updates",
      "Greenfield and ambiguous scopes: founder chapter with tight iteration loops",
      "Pairing, review, and informal technical lead (no direct reports)",
      "On-call: open to rotation; ask what your expectations look like in practice",
    ],
  },
  baseSkills[4],
];

export const mixpanelProactiveInsightsResume: Resume = {
  slug: "mixpanel-proactive-insights",
  pageTitle: "Shenstone, Andrew - Application for Software Engineer, Proactive Insights @ Mixpanel",
  target: {
    company: "Mixpanel",
    role: "Software Engineer",
    teamOrFocus: "Proactive Insights",
  },
  contact,
  about:
    "Software engineer with twelve years shipping products end to end. Proactive Insights is the kind of problem I like: greenfield, AI-native, and anchored in real user behavior—what changed, why it might have changed, and what someone should do next. At Plantfolio I build React and TypeScript frontends on top of Node and PostgreSQL, ship LLM-backed features people use every week, and think hard about instrumentation and adoption, not just release notes. I am genuinely curious about analytics tools because bad answers from data usually trace back to unclear questions, missing context, or UI that hides the story. Mixpanel’s Python and Django path is a learning stretch for me compared to my deepest production miles in TypeScript and Node; I am upfront about that and motivated to contribute on both sides of the stack where you need me. Degree is Finance (Santa Clara University) with equivalent engineering tenure; I work well async, take ownership in ambiguous spaces, and I want to be on a small team that defines a new category inside a product millions of people already trust.",
  skills: mixpanelProactiveInsightsSkills,
  experience,
  companyReferences,
  education: educationFinanceScu,
};
