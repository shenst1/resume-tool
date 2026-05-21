import {
  baseSkills,
  companyReferences,
  contact,
  educationFinanceScu,
  experience,
} from "@/data/base-profile";
import type { Resume, SkillCategory } from "@/types/resume";

const headwayStaffPayerSkills: SkillCategory[] = [
  {
    label: "LLM-powered product systems",
    items: [
      "Shipped user-facing LLM features in production: vision and language models, structured extraction, and pragmatic model choice (Plantfolio)",
      "AI SDK and OpenAI APIs; bias toward evaluation, iteration, and observability so features stay reliable—not one-off demos",
      "Comfortable with the \"what to automate vs keep human\" tradeoff in sensitive workflows; eager to deepen formal eval loops for regulated healthcare AI",
    ],
  },
  {
    label: "Full-stack & data-heavy backends",
    items: [
      "TypeScript end to end on Next.js and Node; PostgreSQL with Prisma and thoughtful schema design in production",
      "Python is not my heaviest production lane today; I ramp quickly across languages and have used Django in past work—FastAPI and SQLAlchemy are a focused study path, not a blank slate",
      "GraphQL schema-through-client experience (Bloom, Tilia); API design, debugging across layers, and ownership from problem to deployed fix",
    ],
  },
  {
    label: "Frontend for complex, trusted workflows",
    items: [
      "React and Next.js with server components, disciplined data fetching, and performance habits that matter in long-session products",
      "Remix is not in my production history yet; same mental model as modern React loaders and server boundaries—I learn your house patterns quickly",
      "Dense admin and operator surfaces (Bloom reporting/admin; Plantfolio); accessible, maintainable UI with tests where they buy the most safety",
    ],
  },
  {
    label: "Leadership craft (no direct reports)",
    items: [
      "Informal technical lead through pairing, design discussion, and code review that teaches patterns—not just blocks merges",
      "Founder chapter on Plantfolio: ambiguous scopes, tight iteration, clear async updates across stakeholders",
      "Established standards, component libraries, and CI-backed quality so teams move fast without sharp edges",
    ],
  },
  baseSkills.find((c) => c.label === "Cloud & Tools") ?? baseSkills[4],
];

export const headwayStaffPayerResume: Resume = {
  slug: "headway-staff-payer",
  createdAt: "2026-05-15",
  pageTitle:
    "Shenstone, Andrew - Application for Staff Software Engineer (Payer) — Payers & Outcomes @ Headway",
  homeListLabel: "Headway (Payers)",
  target: {
    company: "Headway",
    role: "Staff Software Engineer (Payer)",
    teamOrFocus: "Payers & Outcomes — clinical quality, risk, and trustworthy AI at scale",
  },
  contact,
  about: `Staff-shaped engineer with twelve years shipping end-to-end product: **TypeScript**, **Next.js**, **PostgreSQL**, and production LLM features users actually rely on. I like hard problems where the interface, the API, and the data model all have to stay honest, especially when the stakes are trust and safety, not just click-through.

Payers & Outcomes is the kind of mandate I want: intelligent systems over real clinical and claims volume, feedback loops that help providers instead of punishing them, and evaluation discipline so models don’t become liability dressed up as automation. My proof is Plantfolio (founder-lead, full stack, AI in the loop) plus prior chapters on risk-adjacent tooling, multi-tenant data rules, and mentoring without needing a manager title.

I have not worked inside U.S. insurance claims, billing, or HIPAA-scoped healthcare stacks—that is squarely a domain ramp I’d treat with respect. My transfer is deep full-stack execution, regulated-adjacent fintech tooling (Tilia), and a finance degree that helps me read payer and utilization problems without glazing over.`,
  skills: headwayStaffPayerSkills,
  experience,
  companyReferences,
  education: educationFinanceScu,
};
