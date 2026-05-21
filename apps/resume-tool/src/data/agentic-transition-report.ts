/** Stats sourced from Plantfolio monorepo git (Nov 2023 – Nov 2025) and public architecture docs. */

export const reportMeta = {
  title: "Agentic Transition",
  subtitle: "How AI scaled my output over the last 12 months",
  preparedFor: "Owner.com — Scale Yourself",
  author: "Andrew Shenstone",
  generatedNote:
    "This report was built in profile-tools with Cursor—the same agentic workflow it describes.",
  architectureUrl: "https://www.plantfolio.garden/support/architecture",
  productUrl: "https://www.plantfolio.garden/",
};

export const headlineMetrics = [
  { label: "Git commits (solo founder)", value: "1,635", detail: "Nov 2023 → Nov 2025" },
  { label: "TypeScript / TSX files", value: "876", detail: "~65k lines in monorepo" },
  { label: "Shared packages", value: "19", detail: "Bounded domains for humans + agents" },
  { label: "Deployable apps & workers", value: "6", detail: "3 Next.js · 2 Railway · Flutter mobile" },
  { label: "Production integrations", value: "12+", detail: "Auth, pay, search, AI, email, blob, events…" },
  { label: "PostgreSQL databases", value: "2", detail: "Main + plants (pgvector)" },
] as const;

/** Monthly commit counts — `git log` on Plantfolio main branch worktree. */
export const commitActivityByMonth: { month: string; commits: number; phase: "ramp" | "peak" | "wind-down" }[] = [
  { month: "2024-05", commits: 59, phase: "ramp" },
  { month: "2024-06", commits: 77, phase: "ramp" },
  { month: "2024-07", commits: 54, phase: "ramp" },
  { month: "2024-08", commits: 84, phase: "peak" },
  { month: "2024-09", commits: 78, phase: "peak" },
  { month: "2024-10", commits: 148, phase: "peak" },
  { month: "2024-11", commits: 85, phase: "peak" },
  { month: "2024-12", commits: 60, phase: "peak" },
  { month: "2025-01", commits: 28, phase: "peak" },
  { month: "2025-02", commits: 47, phase: "peak" },
  { month: "2025-03", commits: 83, phase: "peak" },
  { month: "2025-04", commits: 81, phase: "peak" },
  { month: "2025-05", commits: 40, phase: "wind-down" },
  { month: "2025-06", commits: 42, phase: "wind-down" },
  { month: "2025-07", commits: 34, phase: "wind-down" },
  { month: "2025-08", commits: 30, phase: "wind-down" },
  { month: "2025-09", commits: 61, phase: "wind-down" },
  { month: "2025-10", commits: 49, phase: "wind-down" },
  { month: "2025-11", commits: 43, phase: "wind-down" },
];

export const timelinePhases = [
  {
    period: "Nov 2023 – Spring 2024",
    title: "0→1 under agent-assisted velocity",
    body: "Bootstrapped Plantfolio from customer discovery into a Turborepo monorepo. MongoDB in production first, then a late Postgres migration—scope a solo founder historically would not attempt without AI pair-programming on architecture, migrations, and integration glue.",
  },
  {
    period: "Summer 2024 – Spring 2025",
    title: "Peak leverage — platform, not feature",
    body: "Shipped event-driven workers (change-stream → Inngest), signage render pipeline, dual-database Prisma models, AI identification + RAG, and three Next.js surfaces. Commit velocity peaked Oct 2024 (148 commits). Cursor became the default builder—not a cheat sheet.",
  },
  {
    period: "Late 2025 – present",
    title: "Intentional pause, proof retained",
    body: "Stepped back from active Plantfolio development to focus on the job search. The leverage story is the system already in production—not recent commit count. Architecture docs and live product remain the evidence.",
  },
] as const;

export const architectureSurfaces = [
  { name: "web", role: "Marketing & public pages", stack: "Next.js 16 · Vercel" },
  { name: "dashboard", role: "Product UI + Inngest host", stack: "Next.js 16 · Vercel" },
  { name: "admin", role: "Internal operations", stack: "Next.js 16 · Vercel" },
  { name: "plantfolio_mobile", role: "Gardeners on mobile", stack: "Flutter" },
  { name: "change-stream-worker", role: "Postgres LISTEN → Inngest", stack: "Node · Railway" },
  { name: "render-worker", role: "Sign PDF/ZIP rendering", stack: "Express · Railway" },
] as const;

export const backendPackages = [
  "@plantfolio/server",
  "@plantfolio/db",
  "@plantfolio/auth",
  "@plantfolio/ai",
  "@plantfolio/events",
  "@plantfolio/search",
  "@plantfolio/payments",
  "@plantfolio/identification",
  "@plantfolio/media",
  "@plantfolio/email",
  "@plantfolio/plants",
  "@plantfolio/kv",
] as const;

export const externalServices = [
  "Clerk",
  "Stripe",
  "Neon (Postgres ×2)",
  "Inngest",
  "Algolia",
  "Vercel Blob",
  "Resend",
  "OpenAI / Gemini",
  "Plant.id",
  "Sentry",
  "AWS S3",
  "pgvector",
] as const;

export const leverageComparison = [
  {
    dimension: "System breadth",
    before: "One primary app + API; defer workers and mobile",
    after: "6 deployables, 19 packages, dual DB, async workers",
  },
  {
    dimension: "Integrations per year",
    before: "Handful; long integration spikes",
    after: "12+ vendors wired with typed env schemas & CI",
  },
  {
    dimension: "Data modeling",
    before: "Would pick one store and live with limits",
    after: "Mongo → production → migrate to Postgres + pgvector catalog",
  },
  {
    dimension: "AI in product",
    before: "Prototype-only without shipping discipline",
    after: "Vision ID, Sage assistant, embeddings, RAG in production",
  },
  {
    dimension: "How I build",
    before: "Hand-write boilerplate; context-switch heavy",
    after: "Cursor top 1%; agents across monorepo boundaries daily",
  },
  {
    dimension: "Documentation",
    before: "Often skipped under time pressure",
    after: "Public architecture site agents and hires can read",
  },
] as const;

export const aiWorkflowBullets = [
  "Monorepo boundaries (@plantfolio/*) so agents edit in scoped packages—not one giant file.",
  "Server Actions over public REST: fewer endpoints, clearer mutation surfaces for humans and LLMs.",
  "Typed env validation per app; `pnpm env:sync` keeps workers and Next apps aligned.",
  "Vitest + GitHub Actions on every push; agents get fast feedback loops.",
  "Architecture docs at plantfolio.garden/support/architecture—onboarding for future me and for tools.",
] as const;
