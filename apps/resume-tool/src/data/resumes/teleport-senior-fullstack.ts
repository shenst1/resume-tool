import {
  baseSkills,
  companyReferences,
  contact,
  educationFinanceScu,
  experience,
} from "@/data/base-profile";
import type { Resume, SkillCategory } from "@/types/resume";

const teleportSeniorFullstackSkills: SkillCategory[] = [
  {
    label: "Product full stack (TypeScript & React)",
    items: [
      "Production TypeScript and React across Next.js, admin consoles, and long-session workflows (Bloom, Plantfolio, Tilia tools)",
      "Thoughtful data fetching, pagination, and filtering patterns in dense operator UIs; maps to making Teleport faster and clearer at scale",
      "Testing with Vitest and Cypress; documentation that matches what ships",
    ],
  },
  {
    label: "Web security & trust boundaries",
    items: [
      "Identity- and trust-adjacent work: KYC and risk tooling at Tilia; authentication and tiered authorization with Clerk on Plantfolio",
      "PostgreSQL Row-Level Security and tenant isolation in production; conscious about least privilege at the data layer even if the product is not a PAM tool",
      "Mindset aligned with zero-trust themes: short-lived access, explicit permissions, and avoiding \"just use a shared secret\" shortcuts",
    ],
  },
  {
    label: "APIs, backends & open-source style delivery",
    items: [
      "Node services and API design; GraphQL schema-through-client work (Bloom, Tilia)",
      "Comfort with technical writing, design discussion, and iteration with stakeholders (founder chapter on Plantfolio)",
      "Open source culture is a draw: public clarity, reviewable design, and RFD-style rigor map to how I already decide and document tradeoffs",
    ],
  },
  {
    label: "Go & systems languages (honest ramp)",
    items: [
      "Go is not a language I have shipped professionally yet; your take-home and codebase are exactly how I want to convert systems programming hours into real fluency",
      "Production depth today is TypeScript and Node on the server; I read and learn new languages quickly and care about correctness under review",
      "Rust is also not in my production history; if the team mixes Rust at the edges, I will ramp alongside your guidance",
    ],
  },
  baseSkills.find((c) => c.label === "Cloud & Tools") ?? baseSkills[4],
];

export const teleportSeniorFullstackResume: Resume = {
  slug: "teleport-senior-fullstack",
  createdAt: "2026-05-15",
  pageTitle: "Shenstone, Andrew - Application for Senior Full Stack Engineer @ Teleport",
  homeListLabel: "Teleport",
  target: {
    company: "Teleport",
    role: "Senior Full Stack Engineer",
    teamOrFocus: "Product — Teleport core UI, APIs, and identity-forward user journeys",
  },
  contact,
  about: `Product-minded full-stack engineer with twelve years shipping **TypeScript** and **React** surfaces operators and customers actually use, from commerce admin at scale to a founder-led platform with strict auth and data boundaries. I care about security as an outcome of clear identity, access, and least-privilege design, not as a bolt-on.

Teleport's bet, unified infrastructure identity for humans, machines, and agents, is the right problem for how AI workloads stretch access patterns past what traditional PAM and network borders were built for. I want to build the product layer that makes that model approachable: Connect, onboarding, passwordless journeys, and fast, trustworthy control planes in the UI.

I am upfront about one gap: I have not shipped production **Go** or Rust yet, while your stack centers on Go for most backend work. My plan is to lean hard into your take-home and code review rhythm to get to productive contributions quickly; my near-term leverage is strong on the TypeScript and React side, security-aware design, and end-to-end ownership through docs and tests.`,
  skills: teleportSeniorFullstackSkills,
  experience,
  companyReferences,
  education: educationFinanceScu,
};
