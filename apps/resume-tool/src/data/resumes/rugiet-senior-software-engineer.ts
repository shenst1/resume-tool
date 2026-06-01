import {
  baseSkills,
  companyReferences,
  contact,
  educationFinanceScu,
  experience,
} from "@/data/base-profile";
import type { Resume, SkillCategory } from "@/types/resume";

const rugietSkills: SkillCategory[] = [
  {
    label: "Rails, React & React Native (posting stack)",
    items: [
      "Ruby on Rails through Rails 6 in production (~6 years): GraphQL and REST APIs, data models, CI/CD (Bloom; agency Rails work)",
      "React in production for 12+ years; Next.js today (Plantfolio); hooks, component architecture, and pragmatic state management",
      "React Native in production (Ply agency; Washington State Fair scale); cross-platform mobile shipped end to end",
      "PostgreSQL: indexing-minded queries, migrations, complex reporting SQL (Ply/Bloom; Plantfolio on Neon today)",
    ],
  },
  {
    label: "Platform, quality & cloud",
    items: [
      "Background jobs and async patterns (Inngest, webhooks; Rails-side job throughput is familiar territory; Sidekiq per house conventions)",
      "Vitest and React Testing Library today; Jest/RTL where the repo standardizes; Cypress for broader flows; 90%+ coverage discipline at Tilia",
      "AWS (S3, EC2) and Vercel in production; CircleCI and Turbo/pnpm CI/CD; monitoring-minded delivery on revenue and patient-trust paths",
      "Mobile release (App Store Connect, Google Play, EAS, OTA): shipped RN apps in agency context; full store-release ownership is a ramp to deepen, not a headline specialty today",
    ],
  },
  {
    label: "AI-native engineering & regulated product",
    items: [
      "Cursor (top 1% user) and Claude-class agents daily: refactors, tests, framework upgrades, and review with human ownership of architecture and production risk",
      "GitHub Actions and repo automation habits; structured TypeScript monorepos for agent-friendly iteration",
      "Telehealth/HIPAA: not headline tenure; regulated-adjacent delivery from payments/KYC tooling (Tilia) and compliance-minded commerce (Bloom)",
    ],
  },
  baseSkills.find((c) => c.label === "Architecture & async") ?? baseSkills[3],
];

export const rugietSeniorSoftwareEngineerResume: Resume = {
  slug: "rugiet-senior-software-engineer",
  createdAt: "2026-05-29",
  pageTitle:
    "Shenstone, Andrew - Application for Senior Software Engineer @ Rugiet",
  homeListLabel: "Rugiet",
  target: {
    company: "Rugiet",
    role: "Senior Software Engineer",
    teamOrFocus: "Web and mobile platform (Rails, React, React Native; telemedicine)",
  },
  contact,
  about: `Senior software engineer with 12+ years shipping production software on the stack Rugiet runs: **Ruby on Rails**, **React**, **React Native**, and **PostgreSQL**. I lead with systems thinking—data models, API boundaries, and what patients and providers actually experience—before reaching for new tools.

At Bloom I built Rails GraphQL APIs and a greenfield Next.js admin product still in production for many clients. At Ply I shipped production **React Native** apps at major seasonal scale. On Plantfolio I own the full stack on **Vercel** with **AWS** for media, high test discipline, and a daily **Cursor** workflow (top 1% user) that matches your AI-driven development lane: faster refactors and test generation with human judgment on architecture and release risk.

Telehealth and **HIPAA** are new domain vocabulary for me; I transfer careful handling of sensitive data from payments/KYC work at Tilia. App Store Connect, **EAS**, and OTA release orchestration would be areas I deepen on the job—I have shipped mobile features in production, but store-release ownership has not been my daily title recently. Remote U.S. works for me.`,
  skills: rugietSkills,
  experience,
  companyReferences,
  education: educationFinanceScu,
  outreachEmail: {
    label: "3rd-tier LinkedIn or email (loose connection; personalize [First name])",
    subject: "Senior software engineering at Rugiet / Andrew Shenstone",
    body: `Hi [First name],

I hope this is okay as a loose LinkedIn connection. I applied for Senior Software Engineer at Rugiet and am interested in how the team ships across Rails, React, and React Native for patient and provider experiences. I am not assuming you are on engineering or hiring; any perspective or pointer would help.

I am a senior engineer with production Ruby on Rails, React, React Native, and PostgreSQL, agency-scale mobile delivery, and a daily Cursor workflow. Telehealth and HIPAA would be new domain for me; systems thinking, testing discipline, and AI-native shipping habits are not.

Happy to share my resume if useful. Thank you for reading a note from a distant connection.

Andrew Shenstone
shenst1@gmail.com
339-223-0797`,
  },
};
