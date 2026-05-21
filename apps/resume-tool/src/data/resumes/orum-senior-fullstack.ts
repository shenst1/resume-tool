import {
  baseSkills,
  companyReferences,
  contact,
  educationFinanceScu,
  experience,
} from "@/data/base-profile";
import type { Resume, SkillCategory } from "@/types/resume";

const orumSkills: SkillCategory[] = [
  {
    label: "Backend & data (primary lane)",
    items: [
      "Node.js and TypeScript services, API design, and production debugging across layers",
      "PostgreSQL with Prisma: relational modeling, migrations, and query discipline under real load",
      "Ruby on Rails (~6 years): Bloom GraphQL API and service patterns transferable to your Ruby stack",
      "Event- and usage-shaped data: async workflows (Inngest, webhooks), ETL habits, instrumentation that supports product decisions",
    ],
  },
  {
    label: "Coaching, insights & AI product",
    items: [
      "Turning operational data into actionable product surfaces, not vanity dashboards (Bloom reporting/admin; Plantfolio analytics-style flows)",
      "LLM-backed features in production: chat, vision, structured extraction, RAG (Plantfolio)",
      "High test coverage culture (Tilia payments-adjacent tooling); code review and standards that survive growth",
    ],
  },
  {
    label: "Frontend (supporting lane)",
    items: [
      "React and TypeScript for dense admin and workflow UIs",
      "Next.js full-stack ownership on Plantfolio; enough frontend depth to keep APIs honest for real users",
    ],
  },
  {
    label: "Real-time, telephony & cloud (honest)",
    items: [
      "FreeSWITCH, SIP softswitch, audio streams, and speech pipelines: no production tenure; motivated to learn alongside your platform team",
      "Sales domain: new to me; transfer is high-volume product engineering, integrations, and shipping insights people act on",
      "AWS (S3, EC2) in production; GCP is a ramp, not a blocker on service design and operability",
    ],
  },
  baseSkills.find((c) => c.label === "AI-native product & workflow") ?? baseSkills[3],
];

export const orumSeniorFullstackResume: Resume = {
  slug: "orum-senior-fullstack",
  createdAt: "2026-05-20",
  pageTitle:
    "Shenstone, Andrew - Application for Senior Full Stack Software Engineer @ Orum",
  homeListLabel: "Orum",
  target: {
    company: "Orum",
    role: "Senior Full Stack Software Engineer",
    teamOrFocus: "Coaching + Analytics",
  },
  contact,
  about: `Senior full-stack engineer with twelve years shipping end to end. The Coaching + Analytics lane is the kind of work I want: turn high-volume call and usage data into coaching insights managers and reps can act on, not another dashboard nobody opens. I have spent years on **TypeScript**, **React**, **Node.js**, and **PostgreSQL** in production, plus roughly six years on **Ruby** services (Bloom GraphQL API), with founder ownership at Plantfolio and payments-adjacent, high-coverage delivery at Tilia.

I own features from discovery through deploy and iteration, mentor through pairing and review (no direct reports), and care about well-tested code on paths where regressions erode trust. Plantfolio adds AI-native product work (chat, vision, RAG) and async pipelines that mirror turning noisy real-world signals into structured product value.

I have not operated FreeSWITCH, SIP, or speech recognition in production, and sales tooling is new domain vocabulary for me. My transfer is backend-heavy full stack on your core web stack, honest APIs and data models, and learning telephony alongside your team. AWS is my deepest cloud footprint today; I am motivated to deepen GCP where your platform already runs.`,
  skills: orumSkills,
  experience,
  companyReferences,
  education: educationFinanceScu,
  outreachEmail: {
    label: "3rd-tier LinkedIn or email (loose connection; personalize [First name])",
    subject: "Senior full stack engineering at Orum / Andrew Shenstone",
    body: `Hi [First name],

I hope a note from a loose LinkedIn connection is okay. I applied for Senior Full Stack Software Engineer on Orum's Coaching + Analytics team and am interested in how you turn call data into coaching product, not only dialer mechanics. I am not assuming you hire for that team or want inbound messages.

I am a senior engineer with strong TypeScript, Node, Postgres, and Ruby history, founder ownership on an AI product, and a backend-heavy full-stack habit. I do not have telephony or FreeSWITCH tenure and would ramp that honestly alongside your stack.

Happy to share my resume if useful. Thank you for reading.

Andrew Shenstone
shenst1@gmail.com
339-223-0797`,
  },
};
