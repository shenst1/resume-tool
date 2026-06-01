import {
  baseSkills,
  companyReferences,
  contact,
  educationFinanceScu,
  experience,
} from "@/data/base-profile";
import type { Resume, SkillCategory } from "@/types/resume";

const toastSkills: SkillCategory[] = [
  {
    label: "Full-stack web (Flex team stack)",
    items: [
      "TypeScript, React, and Next.js in production for 12+ years; long-lived SPAs at Bloom and Tilia",
      "Tailwind CSS and Shadcn UI on Plantfolio; Chakra adoption at Tilia; Bootstrap/Polaris patterns at Ply",
      "Node.js APIs and Express (Tune); Server Actions and API design on Plantfolio; GraphQL in production",
      "High-fidelity Figma mocks to production UI (Bloom component library; Plantfolio design system)",
    ],
  },
  {
    label: "Product delivery & consumer scale",
    items: [
      "Founder-led end-to-end ownership: discovery, experiments, ship, iterate, verify in production",
      "Consumer-facing surfaces at meaningful scale (Washington State Fair React Native app during peak season)",
      "Commerce and checkout flows (Stripe on Plantfolio; Shopify Plus integrations at Bloom)",
      "Agile mindset: ship quickly with tests, then refactor; Vitest, React Testing Library, and Cypress in production",
    ],
  },
  {
    label: "AWS, tooling & AI culture fit",
    items: [
      "AWS in production (S3, EC2); Docker is a ramp alongside Git and CI/CD habits (CircleCI, Vercel/Turbo)",
      "Java/Kotlin are not headline tenure; productive on Ruby on Rails APIs and Node services when backend work is needed",
      "Cursor (top 1% user) and Claude-class agents daily—matches Toast's AI-assisted engineering culture",
      "Cross-functional collaboration with product and design; mentoring via pairing and code review (no direct reports)",
    ],
  },
  baseSkills.find((c) => c.label === "Architecture & async") ?? baseSkills[3],
];

export const toastDigitalStorefrontResume: Resume = {
  slug: "toast-digital-storefront",
  createdAt: "2026-05-29",
  pageTitle:
    "Shenstone, Andrew - Application for Senior Software Engineer (Fullstack), Digital Storefront @ Toast",
  homeListLabel: "Toast",
  target: {
    company: "Toast",
    role: "Senior Software Engineer (Fullstack), Digital Storefront",
    teamOrFocus: "Digital Storefront Flex — Online Ordering, VoiceAI, branded web & mobile",
  },
  contact,
  about: `I am applying for Senior Software Engineer (Fullstack) on Toast's Digital Storefront Flex team because the role matches how I work: **React**, **Tailwind**, and **Node.js** full-stack delivery with fast iteration, tested code, and real product voice from discovery through production.

I have 12+ years shipping consumer-facing web applications, including founder-owned product work at Plantfolio (Next.js, Figma-to-code, Stripe checkout), React SPAs at Bloom and Tilia, and high-traffic seasonal mobile delivery (Washington State Fair). I implement high-fidelity design mocks, maintain Vitest/Cypress-class test coverage, and use **Cursor** (top 1% user) daily in line with Toast's AI culture.

Java/Kotlin backend and deep AWS/Docker ops are ramps; my recent backend work is Node and Rails APIs with AWS S3/EC2 in production. Restaurant ordering is a new domain; building guest-facing UX at scale and iterating with product is not.`,
  skills: toastSkills,
  experience,
  companyReferences,
  education: educationFinanceScu,
  outreachEmail: {
    label: "3rd-tier LinkedIn or email (loose connection; personalize [First name])",
    subject: "Digital Storefront engineering at Toast / Andrew Shenstone",
    body: `Hi [First name],

I hope this is okay to send as a loose LinkedIn connection. I applied for Senior Software Engineer (Fullstack) on the Digital Storefront Flex team and am interested in Toast's consumer-facing restaurant products (online ordering, branded web, mobile). I am not assuming you are on that team or hiring; any perspective or pointer would help.

I am a senior full-stack engineer with production React, Tailwind, and Node.js, founder-style product ownership, Figma-to-ship habits, and a daily Cursor workflow. Java/Kotlin and restaurant POS depth are ramps for me, not headline tenure.

Happy to share my resume if useful. Thank you for reading a note from a distant connection.

Andrew Shenstone
shenst1@gmail.com
339-223-0797`,
  },
};
