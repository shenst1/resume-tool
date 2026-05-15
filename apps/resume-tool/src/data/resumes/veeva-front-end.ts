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
  createdAt: "2026-05-14",
  pageTitle: "Shenstone, Andrew - Application for Front-End Software Engineer @ Veeva Systems",
  homeListLabel: "Veeva",
  target: {
    company: "Veeva Systems",
    role: "Front-End Software Engineer",
    teamOrFocus: "Life sciences cloud applications (UI)",
  },
  contact,
  about: `Front-end–leaning engineer with 12+ years building **React** and **JavaScript** UIs in SaaS, commerce, and a founder-led product—ES6+ and TypeScript are my daily bread, and I am comfortable fitting team conventions whether screens are typed or not. I care about resilient components, real performance budgets, and working cleanly with design and backend partners so features survive enterprise release cycles.

Testing is not optional: I use Vitest and **React Testing Library** day to day (Jest-equivalent patterns are a quick ramp if your repo is Jest-native); Cypress when end-to-end risk warrants it. I collaborate with QA so coverage matches what breaks in production. Styling work spans Tailwind, Chakra, and component libraries; if Veeva standardizes on SASS or JSS, I adopt the house style.

Life sciences domain depth is new to me; my transferable strength is getting complex, regulated-feeling workflows right in the UI—permissions, dense data, and long maintenance horizons—plus mentorship that makes teams faster (informal lead via reviews and pairing, no direct reports). I’m U.S.-based and can work PST/MST hours per your requirement; confirm any office or “Work Anywhere” nuances with recruiting.`,
  skills: veevaSkills,
  experience,
  companyReferences,
};
