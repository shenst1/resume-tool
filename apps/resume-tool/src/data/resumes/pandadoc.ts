import { companyReferences, contact, experience } from "@/data/base-profile";
import type { Resume, SkillCategory } from "@/types/resume";

const pandadocSkills: SkillCategory[] = [
  {
    label: "Next.js, React & Vercel",
    items: [
      "Next.js in production with React Server Components and TypeScript (Plantfolio; Bloom public and admin paths)",
      "Vercel deployment and edge-minded architecture; Node and full-stack patterns when the marketing site needs them",
      "Component architecture, design-system-style reuse, and collaboration through Figma",
    ],
  },
  {
    label: "Headless CMS & content operations",
    items: [
      "DatoCMS: flexible content models, structured fields, and workflows so marketers ship without blocking on engineers (Bloom)",
      "Earlier: custom Ruby gem CMS for Rails projects (Ply); comfortable treating the CMS as a product for internal users",
      "Contentful: I have not shipped it in production yet; the work matches what I did with DatoCMS (content types, fields, safe publishing for marketing)",
    ],
  },
  {
    label: "Performance, SEO & growth tooling",
    items: [
      "Lighthouse-minded delivery, rendering and caching discipline, high-traffic public app experience (seasonal scale, Ply)",
      "Technical SEO fundamentals as part of shipping (structure, performance, sane metadata patterns)",
      "Optimizely / VWO / enterprise A/B platforms: not claimed on résumé; analytics and integration patterns from commerce and SaaS work—ready to own experimentation with marketing partners",
      "Plantfolio: OpenAI and AI-assisted features; interested in pragmatic AI on marketing surfaces when it speeds real journeys",
    ],
  },
  {
    label: "Cross-functional leadership (IC)",
    items: [
      "Bridge between marketing priorities and engineering reality: scope trade-offs, clear technical options, ship campaigns without sacrificing the codebase",
      "Informal technical lead: architecture calls, code review, pairing, standards (no direct reports)",
      "Balance long-term refactors with launch deadlines; “ship it” bias with judgment on when to slow down",
    ],
  },
];

export const pandadocResume: Resume = {
  slug: "pandadoc",
  pageTitle: "Shenstone, Andrew - Application for Senior Web Developer @ PandaDoc",
  target: {
    company: "PandaDoc",
    role: "Senior Web Developer",
    teamOrFocus: "Public web / growth (pandadoc.com)",
  },
  contact,
  about:
    "12+ years on the web where marketing and engineering meet: Next.js, TypeScript, and Vercel in production; headless CMS with real ownership of how content is modeled (DatoCMS at Bloom; earlier custom CMS work). I like fast pages, technical SEO done properly, and setups that let marketing publish without engineering holding the keys on every change. I have not used Contentful in production, but I have done the same kind of structured-content work elsewhere, so I am not starting cold. I have not lived in Optimizely or VWO day to day; I still play well with growth teams, wire things up carefully, and learn new tools when that is what the stack needs. Plantfolio leans hard on AI-assisted features; on a marketing site I care about features that actually help visitors, not gimmicks. I set technical direction in practice (architecture, review, pairing) without direct reports, and I am fine being the engineer Revenue Marketing and Design pull in when the public site really matters.",
  skills: pandadocSkills,
  experience,
  companyReferences,
};
