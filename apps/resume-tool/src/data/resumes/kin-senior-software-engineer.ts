import {
  baseSkills,
  companyReferences,
  contact,
  educationFinanceScu,
  experience,
} from "@/data/base-profile";
import type { Resume, SkillCategory } from "@/types/resume";

const kinSkills: SkillCategory[] = [
  {
    label: "Full-stack (Kin stack)",
    items: [
      "TypeScript and React in production for 12+ years; Next.js and Node on Plantfolio today",
      "Ruby on Rails (~6 years through Rails 6): GraphQL APIs, CMS patterns, CircleCI at Bloom; comfortable contributing in Ruby on Kin services",
      "PostgreSQL and Prisma in production (Plantfolio migration from MongoDB); relational modeling and query tuning in daily work",
      "Python is an honest ramp; object-oriented backend patterns transfer from Rails and Node",
    ],
  },
  {
    label: "Architecture, quality & delivery",
    items: [
      "Large, complex production systems: Bloom commerce platform, Tilia payments tooling, founder-owned Plantfolio end to end",
      "Vitest, React Testing Library, Cypress; 90%+ coverage discipline on critical paths at Tilia",
      "Agile partnership with product, design, and QA from discovery through production verification",
      "Incident-minded ownership: care about reliability on revenue and customer paths, not only happy-path features",
    ],
  },
  {
    label: "Mentorship & regulated product context",
    items: [
      "Mentoring through pair programming, code review, and design discussion (no direct reports)",
      "KYC and identity-adjacent tooling on a payments platform (Tilia); careful handling of sensitive data",
      "B.S. Finance for risk, pricing, and business-value conversations in insurance-adjacent domains",
      "Homeowners insurance policy/admin domain is new; regulated workflow and integration discipline transfer",
      "AI-assisted engineering: Cursor (top 1% user) aligns with Kin's lean, technology-multiplying culture",
    ],
  },
  baseSkills.find((c) => c.label === "Architecture & async") ?? baseSkills[3],
];

export const kinSeniorSoftwareEngineerResume: Resume = {
  slug: "kin-senior-software-engineer",
  createdAt: "2026-06-01",
  pageTitle:
    "Shenstone, Andrew - Application for Senior Software Engineer (Full Stack Focus) @ Kin",
  homeListLabel: "Kin",
  target: {
    company: "Kin",
    role: "Senior Software Engineer",
    teamOrFocus: "Full stack focus (customer experience and internal operations)",
  },
  contact,
  about: `I am applying for Senior Software Engineer (full stack focus) at Kin because the stack and scope match how I ship: **TypeScript**, **React**, **Ruby**, and **PostgreSQL** across customer and operator surfaces where correctness and clarity matter.

I have 12+ years delivering complex production software. At Bloom I spent roughly six years on **Rails** GraphQL services and commerce integrations; on Plantfolio I own **PostgreSQL**, **Stripe**, and a modern **TypeScript** frontend with strong tests. At Tilia I worked on payments-adjacent, regulated-feeling tooling with high coverage and mentoring through pairing and review (no direct reports). A **B.S. Finance** background helps me connect technical investments to business outcomes, which fits insurance product work even though P&C policy systems are a domain ramp for me.

I partner closely with product and QA, participate in agile delivery, and use **Cursor** daily to move faster without skipping architectural judgment. **Python** is not my headline language today. Central/Eastern U.S. time zone preference is worth confirming with recruiting based on my location; I am U.S.-based with unrestricted work authorization and remote-first experience.`,
  skills: kinSkills,
  experience,
  companyReferences,
  education: educationFinanceScu,
  outreachEmail: {
    label: "3rd-tier LinkedIn or email (loose connection; personalize [First name])",
    subject: "Full-stack engineering at Kin / Andrew Shenstone",
    body: `Hi [First name],

I hope this is okay as a loose LinkedIn connection. I applied for Senior Software Engineer (full stack focus) at Kin and am interested in how engineering scales homeowner insurance products on TypeScript, Ruby, and PostgreSQL. I am not assuming you are on that team or hiring; any perspective or pointer would help.

I am a senior full-stack engineer with 12+ years, production React and TypeScript, roughly six years of Rails, PostgreSQL in production today, and payments-adjacent regulated delivery at Tilia. Insurance domain specifics would be a ramp for me; full-stack ownership and mentoring are not.

Happy to share my resume if useful. Thank you for reading a note from a distant connection.

Andrew Shenstone
shenst1@gmail.com
339-223-0797`,
  },
};
