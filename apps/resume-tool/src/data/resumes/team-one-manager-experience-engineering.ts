import {
  baseSkills,
  companyReferences,
  contact,
  educationFinanceScu,
  experience,
} from "@/data/base-profile";
import type { Resume, SkillCategory } from "@/types/resume";

const teamOneSkills: SkillCategory[] = [
  {
    label: "React platform & meta-frameworks",
    items: [
      "12+ years front-end delivery; React primary UI stack from agency (Ply) through Bloom, Tilia, and Plantfolio founder work",
      "Next.js App Router, React Server Components, SSR/CSR, and performance-minded rendering in production (Plantfolio)",
      "TypeScript, Node (SSR, tooling, BFF-shaped boundaries), HTML, and CSS across enterprise admin and consumer surfaces",
      "Hooks, context, and component design; Zustand in production; comfortable extending Redux codebases as house style",
      "TanStack Start and Astro are framework ramps; Next.js meta-framework concepts (ISR, streaming, PPR patterns) are production-default",
    ],
  },
  {
    label: "Quality, APIs & client delivery",
    items: [
      "Vitest, Cypress, and React Testing Library; Jest where the team standardizes it",
      "REST and GraphQL integration layers in production (Bloom, Tilia, agency); async data flows and error UX",
      "WCAG-minded accessibility, responsive design, and cross-browser discipline on public and operator-facing sites",
      "Git, CircleCI, and Vercel-class CI/CD; agile delivery with sprint breakdown, estimates, and risk callouts",
    ],
  },
  {
    label: "Hands-on leadership (honest scope)",
    items: [
      "Technical direction: standards, code review, design-system adoption (Chakra at Tilia; Shadcn/Tailwind on Plantfolio; Polaris with designers at Ply)",
      "Mentoring through pairing and review; informal tech lead at Bloom and Tilia (no direct reports today)",
      "Client- and stakeholder-facing clarity from boutique agency delivery and cross-functional product work",
      "Interview support and hiring participation as teams scale; formal people management (1:1s, performance reviews) is a growth area, not headline tenure",
    ],
  },
  baseSkills.find((c) => c.label === "AI-native product & workflow") ?? baseSkills[3],
];

export const teamOneManagerExperienceEngineeringResume: Resume = {
  slug: "team-one-manager-experience-engineering",
  createdAt: "2026-06-01",
  pageTitle:
    "Shenstone, Andrew - Application for Manager of Experience Engineering @ Team One",
  homeListLabel: "Team One",
  target: {
    company: "Team One",
    role: "Manager of Experience Engineering",
    teamOrFocus:
      "Experience engineering — premium brand digital platforms (verify office: LA HQ and five other NA offices)",
  },
  contact,
  about: `Manager of Experience Engineering at Team One is hands-on **React** leadership for enterprise-grade, brand-forward experiences—and that is how I have worked for twelve years, including five at boutique agency **Ply Interactive** shipping for luxury-adjacent and high-traffic clients, then platform and founder delivery on **TypeScript**, **Next.js**, and **Node**.

I lead through code, standards, and clear communication with design and product: scope breakdown, estimates, accessibility and performance bars, and mentoring engineers in hooks, modern CSS, and testable components. I have driven design-system adoption on deadline, presented technical tradeoffs to less technical stakeholders, and shipped **GraphQL** and **REST** integrations under client pressure.

The posting’s people-management lane—direct reports, performance reviews, and career development conversations—is not my headline résumé shape today; I mentor through pairing and review without direct reports. My fit is player-coach front-end leadership on premium digital work, with motivation to grow formal management craft inside Publicis Groupe. **Redux** is a comfortable house-style ramp; **Zustand** is what I ship daily. B.S. Finance (Santa Clara), not CS.`,
  skills: teamOneSkills,
  experience,
  companyReferences,
  education: educationFinanceScu,
  outreachEmail: {
    label:
      "3rd-tier LinkedIn or email (loose connection; personalize [First name])",
    subject:
      "Manager of Experience Engineering at Team One / Andrew Shenstone",
    body: `Hi [First name],

I hope this is okay as a loose LinkedIn connection. I applied for Manager of Experience Engineering at Team One and am interested in how your experience engineering team delivers for premium brand clients. I am not assuming you are on that team or hiring; any perspective or pointer would help.

I am a senior front-end-leaning engineer with twelve years on React and TypeScript, agency delivery at Ply, and recent Next.js product ownership on Plantfolio. Formal people management with direct reports is not my headline tenure; hands-on technical leadership, mentoring, and client-facing delivery are.

Happy to share my resume if useful. Thank you for reading a note from a distant connection.

Andrew Shenstone
shenst1@gmail.com
339-223-0797`,
  },
};
