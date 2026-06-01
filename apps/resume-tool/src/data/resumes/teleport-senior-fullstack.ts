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
      "Production TypeScript and React across Next.js, admin consoles, and long-session operator workflows (Bloom, Plantfolio, Tilia)",
      "Server-side pagination, filtering, and URL-driven navigation patterns in dense UIs; maps to Teleport performance and discoverability work",
      "Onboarding and guided setup UX from founder delivery; documentation and tests that match what ships (Vitest, Cypress)",
    ],
  },
  {
    label: "Web security & identity-minded design",
    items: [
      "Trust-adjacent delivery: KYC and risk tooling at Tilia; Clerk auth, tiered access, and Postgres Row-Level Security on Plantfolio",
      "Least-privilege and short-lived access habits; passwordless and cryptographic identity are domain ramps, not claims of PAM production tenure",
      "Conscious about web security fundamentals: auth boundaries, sensitive data handling, and avoiding shared-secret shortcuts",
    ],
  },
  {
    label: "Lifecycle, RFDs & open-source culture",
    items: [
      "Full product lifecycle: customer friction through design, implementation, rollout, and production debugging (Plantfolio founder)",
      "Technical writing and design discussion before code; comfortable with Markdown RFC/RFD-style rigor and reviewable tradeoffs",
      "Open source as public craft: aligns with Teleport’s RFD process and community-facing code expectations",
    ],
  },
  {
    label: "Go & backend (honest ramp)",
    items: [
      "Go is not shipped professionally on my résumé yet; Teleport’s take-home (Go + TypeScript) is how I intend to demonstrate backend fluency",
      "Node services, GraphQL, and API design in production today; read and learn systems languages quickly under code review",
      "Rust is not production history; ramp alongside team guidance if it appears at the edges",
    ],
  },
  baseSkills.find((c) => c.label === "Cloud & Tools") ?? baseSkills[4],
];

export const teleportSeniorFullstackResume: Resume = {
  slug: "teleport-senior-fullstack",
  createdAt: "2026-05-15",
  pageTitle:
    "Shenstone, Andrew - Application for Senior Full Stack Engineer @ Teleport",
  homeListLabel: "Teleport",
  target: {
    company: "Teleport",
    role: "Senior Full Stack Engineer (Product)",
    teamOrFocus:
      "Teleport core UI & APIs (Connect, onboarding, passwordless); remote-first; Go + TypeScript take-home",
  },
  contact,
  about: `Product-focused full-stack engineer with twelve years shipping **TypeScript** and **React** surfaces operators rely on, plus backend APIs and data boundaries that keep access trustworthy. Teleport’s mission (infrastructure identity for humans, machines, workloads, and AI agents) is the right problem as agentic systems stretch who and what needs access.

I want the full lifecycle you describe: learn from customers, write design docs before big bets, implement in the open, test, and document. Recent work maps to your roadmap themes: guided onboarding, pagination and filtering at scale, and auth-minded UX (Clerk, RLS, KYC-adjacent tooling at Tilia). I care about web security as product design, not a checkbox.

I am direct about the gap: I have not shipped production **Go** or Rust yet, while most Teleport backend code is Go. My near-term leverage is strong on the TypeScript/React side, security-aware product thinking, and RFD-style rigor; I plan to prove Go through your take-home and review rhythm, not by overstating tenure I do not have.`,
  skills: teleportSeniorFullstackSkills,
  experience,
  companyReferences,
  education: educationFinanceScu,
  outreachEmail: {
    label:
      "3rd-tier LinkedIn or email (loose connection; personalize [First name])",
    subject: "Product full stack engineering at Teleport / Andrew Shenstone",
    body: `Hi [First name],

I hope this is okay to send as a loose LinkedIn connection. I applied for Senior Full Stack Engineer (product) at Teleport and am interested in infrastructure identity and the Connect/onboarding/passwordless product surface. I am not assuming you are hiring or on product engineering; any perspective would help.

I am a product-minded full-stack engineer with production TypeScript and React, security- and auth-aware delivery, and end-to-end ownership through docs and tests. Go is a ramp I am preparing for via your take-home, not production history I would overstate.

Happy to share my resume if useful. Thank you for reading a note from a distant connection.

Andrew Shenstone
shenst1@gmail.com
339-223-0797`,
  },
};
