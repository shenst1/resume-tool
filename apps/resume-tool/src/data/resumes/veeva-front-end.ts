import { baseSkills, companyReferences, contact, experience } from "@/data/base-profile";
import type { Resume, SkillCategory } from "@/types/resume";

const veevaSkills: SkillCategory[] = [
  {
    label: "Modern JavaScript & React",
    items: [
      "React production experience across web apps, design systems, and multi-surface products",
      "JavaScript and ES6+; TypeScript daily in recent roles—comfortable in either stack the team standardizes",
      "Component architecture, performance, and pragmatic state management",
    ],
  },
  {
    label: "Styling, testing & quality",
    items: [
      "CSS with abstraction layers in practice: Tailwind CSS, Shadcn UI, Chakra UI, styled-system patterns; can adopt SASS or JSS conventions where your codebase expects them",
      "Unit and component testing: Vitest and React Testing Library patterns; comfortable moving to Jest where the repo standardizes it; Cypress for broader flows",
      "Collaboration with QA on coverage, regressions, and support troubleshooting",
    ],
  },
  {
    label: "Delivery, mentorship & adjacent stack",
    items: [
      "Git-based workflows, CI/CD (CircleCI, Turbo/pnpm pipelines); code review and mentoring via pairing and standards (e.g., Chakra adoption lead at Tilia)",
      "Familiarity with Java ecosystem tooling at a readable level: have worked alongside JVM services and monorepos in production contexts, but Java/Gradle/Jenkins/JUnit/Tomcat is not my primary daily stack—happy to deepen where UI engineers routinely touch build or smoke tests",
      "Long-lived products: Bloom admin Next.js still in production for many clients; Plantfolio—shipping durable UI, not throwaway prototypes",
    ],
  },
  baseSkills.find((c) => c.label === "Architecture & async") ?? baseSkills[3],
];

export const veevaFrontEndResume: Resume = {
  slug: "veeva-front-end",
  createdAt: "2026-05-18",
  pageTitle: "Shenstone, Andrew - Application for Front-End Software Engineer @ Veeva Systems",
  homeListLabel: "Veeva",
  target: {
    company: "Veeva Systems",
    role: "Front-End Software Engineer",
    teamOrFocus: "Life sciences cloud applications (UI)",
  },
  contact,
  about: `I am applying for Front-End Software Engineer at Veeva because the role matches my production history: **React** and **JavaScript** with ES6+ as the default, enterprise SaaS with disciplined releases, and close work with QA and backend partners.

I ship maintainable components, pragmatic performance, and tests centered on user behavior—**React Testing Library** with Vitest in recent repos; **Jest** where the team standardizes it. Styling has been Tailwind- and Chakra-heavy; I adopt SASS or JSS per house style. I mentor through reviews, pairing, and standards, not direct reports.

Life sciences domain depth is not on my resume yet. What transfers is dense, permissioned workflows and UIs built for long maintenance. I have worked next to JVM services, but Java build tooling is not my daily job—I pitch in where front-end engineers touch Gradle or Jenkins. I am U.S.-based with unrestricted authorization, can work PST or MST hours, and will confirm Work Anywhere details with recruiting.`,
  skills: veevaSkills,
  experience,
  companyReferences,
};
