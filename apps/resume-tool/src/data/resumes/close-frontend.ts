import { baseSkills, companyReferences, contact, experience } from "@/data/base-profile";
import type { Resume, SkillCategory } from "@/types/resume";

const closeSkills: SkillCategory[] = [
  {
    label: "Frontend (Close-aligned)",
    items: [
      "React primary for 12+ years; TypeScript in production today across SPAs and design-system-heavy apps",
      "JavaScript, HTML, and modern CSS (Tailwind/Chakra depth today; adopt CSS modules per house style)",
      "Performance: code splitting, skeleton/loading UX, pragmatic bundle and render tuning",
      "Component libraries and reusable UI patterns (Chakra adoption lead at Tilia; Shadcn/Tailwind at Plantfolio)",
    ],
  },
  {
    label: "APIs, real-time & data",
    items: [
      "REST and HTTP fundamentals in daily work",
      "GraphQL in production (Bloom Rails API; Tilia platform API—schema through typed clients; subscriptions are a ramp)",
      "Async and live-update patterns (background jobs, webhooks); WebSockets/WebRTC/Twilio calling stacks are an honest ramp, not a headline specialty",
    ],
  },
  {
    label: "Testing & toolchain",
    items: [
      "Vitest and React Testing Library (current default)",
      "Cypress for E2E today; Playwright is the same playbook where the team standardizes",
      "Vite-class builds: comfortable adopting Vite per repo (Webpack/react-scripts modernization at Tune)",
      "Storybook and Chromatic VRT: align with team standards (formal Storybook not my daily headline recently)",
    ],
  },
  {
    label: "Product craft, B2B SaaS & AI",
    items: [
      "B2B SaaS operator workflows: Bloom (commerce/martech), Tilia (payments platform), Plantfolio (founder product)",
      "Figma collaboration and design-system partnership (Bloom)",
      "OpenAI and vision/language features in production (Plantfolio); AI-assisted engineering with Cursor (top 1% user)",
      "Code review, pairing, and informal technical lead (mentoring; no direct reports)",
    ],
  },
  baseSkills.find((c) => c.label === "Cloud & Tools") ?? baseSkills[4],
];

export const closeFrontendResume: Resume = {
  slug: "close-frontend",
  createdAt: "2026-05-20",
  pageTitle: "Shenstone, Andrew - Application for Frontend Software Engineer @ Close",
  homeListLabel: "Close",
  target: {
    company: "Close",
    role: "Frontend Software Engineer",
    teamOrFocus: "Product development team (CRM / cross-functional squads)",
  },
  contact,
  about: `I am applying for Frontend Software Engineer at Close because the role matches how I ship: **React** and **TypeScript** in production, close work with product and design, and tests that protect real behavior. I have 12+ years on customer-facing web surfaces, with B2B SaaS depth at Bloom, Tilia, and Plantfolio.

I use **GraphQL** in production (Bloom, Tilia) and **REST** daily. **Vitest** and **React Testing Library** are my defaults; **Playwright** is the same discipline as Cypress when that is what the repo runs. **OpenAI** ships in production on Plantfolio; I work **Cursor**-first in daily engineering, which lines up with Close's AI-assisted product direction. Real-time calling (**WebSockets**, **WebRTC**, Twilio) is an honest ramp, not my deepest specialty.

**CSS modules**, **Vite**, and **Storybook**/**Chromatic** differ from my recent Tailwind/Next monorepos, but the craft problems are the same. I have not sold on a dedicated CRM, but I have lived inside commerce, payments, and martech workflows where operators depend on accurate UI. U.S.-based (ET-friendly), fully remote, and I mentor through pairing and review (no direct reports).`,
  skills: closeSkills,
  experience,
  companyReferences,
  outreachEmail: {
    label: "3rd-tier LinkedIn or email (loose connection; personalize [First name])",
    subject: "Frontend engineering at Close / Andrew Shenstone",
    body: `Hi [First name],

I hope this is okay as a loose LinkedIn connection. I applied for Frontend Software Engineer at Close and am interested in how the team ships communication-first CRM and AI-assisted sales workflows. I am not assuming you are on product engineering or hiring; any perspective or pointer would help.

I am a senior frontend-leaning engineer with 12+ years, production React and TypeScript, GraphQL at Bloom and Tilia, OpenAI in production on my own product, and a daily Cursor workflow. WebRTC and telephony depth would be a ramp for me; B2B operator UI and design-system work are not.

Happy to share my resume if useful. Thank you for reading a note from a distant connection.

Andrew Shenstone
shenst1@gmail.com
339-223-0797`,
  },
};
