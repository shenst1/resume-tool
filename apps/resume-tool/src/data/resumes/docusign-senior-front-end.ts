import {
  baseSkills,
  companyReferences,
  contact,
  educationFinanceScu,
  experience,
} from "@/data/base-profile";
import type { Resume, SkillCategory } from "@/types/resume";

const docusignSkills: SkillCategory[] = [
  {
    label: "Frontend (DocuSign-aligned)",
    items: [
      "React and TypeScript in production for 12+ years; modular UI across SPAs (Bloom, Tilia), Next.js (Plantfolio), and React Native (agency scale)",
      "Responsive HTML and CSS (Tailwind, Chakra); design-system partnership with Figma and shared component libraries (Chakra adoption lead at Tilia)",
      "Performance-minded delivery: code splitting, loading UX, pragmatic bundle tuning on long-lived enterprise surfaces",
    ],
  },
  {
    label: "APIs, data & full-stack partnership",
    items: [
      "REST integration in daily work; GraphQL in production (Bloom, Tilia) when product APIs require it",
      "Node.js UI-facing and full-stack patterns (Plantfolio monorepo); C# is an honest ramp, not a résumé headline",
      "PostgreSQL and MongoDB in production (Plantfolio migration); SQL and document-store modeling, not Cosmos DB specifically",
      "WebSockets and live-update stacks: adjacent via webhooks and async jobs; not my deepest specialty",
    ],
  },
  {
    label: "Quality, SaaS & platform craft",
    items: [
      "Vitest, React Testing Library, and Cypress for predictable UI quality; same playbook for Playwright where the repo standardizes",
      "Enterprise SaaS operator workflows: Bloom commerce/martech, Tilia payments platform, long-lived admin products still in production",
      "Micro-frontend discipline: modular packages and monorepos in practice; DocuSign 1FE is new tooling, same separation problems",
      "Front-end analytics and A/B platforms (Optimizely-class): not daily headline work; integration patterns from commerce and SaaS, ready to ramp with product partners",
    ],
  },
  baseSkills.find((c) => c.label === "Architecture & async") ?? baseSkills[3],
];

export const docusignSeniorFrontEndResume: Resume = {
  slug: "docusign-senior-front-end",
  createdAt: "2026-05-29",
  pageTitle:
    "Shenstone, Andrew - Application for Sr. Front End Software Engineer @ DocuSign",
  homeListLabel: "DocuSign",
  target: {
    company: "DocuSign",
    role: "Sr. Front End Software Engineer",
    teamOrFocus: "Customer-facing product UI (Intelligent Agreement Management platform)",
  },
  contact,
  about: `I am applying for Sr. Front End Software Engineer at DocuSign because the role matches how I ship: **React** and **TypeScript** for responsive, modular customer UI, shared components with design partners, and **REST** integration across the stack. I have 12+ years on end-user-facing web products, including enterprise SaaS at Bloom and Tilia and founder delivery at Plantfolio.

I mentor through code review and pairing (no direct reports), care about predictable testing (Vitest, React Testing Library, Cypress), and partner with product on why a workflow exists before locking architecture. **Node.js** shows up in my recent full-stack work; **C#**, **Cosmos DB**, dedicated front-end experimentation platforms, and DocuSign's **1FE** micro-frontend framework would be ramps, not claims. Agreement lifecycle domain is new; what transfers is dense, permissioned workflows, design-system ownership, and shipping UI that stays maintainable for years.

Hybrid San Francisco would need a clear in-office cadence with recruiting; I am U.S.-based with unrestricted work authorization.`,
  skills: docusignSkills,
  experience,
  companyReferences,
  education: educationFinanceScu,
  outreachEmail: {
    label: "3rd-tier LinkedIn or email (loose connection; personalize [First name])",
    subject: "Sr. Front End engineering at DocuSign / Andrew Shenstone",
    body: `Hi [First name],

I hope this is okay as a loose LinkedIn connection. I applied for Sr. Front End Software Engineer and am interested in how DocuSign is building customer-facing UI on the IAM platform. I am not assuming you are on that team or hiring; any perspective or pointer would help.

I am a senior frontend-leaning engineer with 12+ years, production React and TypeScript, design-system and shared-component work, REST and GraphQL integration, and enterprise SaaS depth. C# and DocuSign's micro-frontend stack would be ramps for me; modular UI and long-lived product surfaces are not.

Happy to share my resume if useful. Thank you for reading a note from a distant connection.

Andrew Shenstone
shenst1@gmail.com
339-223-0797`,
  },
};
