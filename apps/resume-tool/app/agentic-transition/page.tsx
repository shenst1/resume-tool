import Link from "next/link";
import { ArchitectureMap } from "@/components/agentic-transition/ArchitectureMap";
import { CommitActivityChart } from "@/components/agentic-transition/CommitActivityChart";
import {
  aiWorkflowBullets,
  commitActivityByMonth,
  headlineMetrics,
  leverageComparison,
  reportMeta,
  timelinePhases,
} from "@/data/agentic-transition-report";

export const metadata = {
  title: "Agentic Transition — AI Leverage Report | Andrew Shenstone",
  description:
    "How AI scaled solo-founder output on Plantfolio over 12 months — for Owner.com Scale Yourself.",
};

export default function AgenticTransitionPage() {
  const peakCommits = commitActivityByMonth.reduce(
    (best, row) => (row.commits > best.commits ? row : best),
    commitActivityByMonth[0],
  );
  const last12Total = commitActivityByMonth.reduce((n, r) => n + r.commits, 0);
  const reportDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="agentic-report min-h-screen bg-white text-gray-900">
      <p className="no-print sticky top-0 z-10 border-b border-amber-200 bg-amber-50 px-6 py-2 text-center text-sm text-amber-950">
        <strong>Save as PDF:</strong> Cmd/Ctrl+P → Save as PDF. Enable &quot;Background
        graphics&quot; so chart colors print. Navigation links are hidden in the PDF.
      </p>

      <header className="border-b-2 border-emerald-700 bg-emerald-50">
        <div className="mx-auto max-w-5xl px-6 py-10 sm:py-12">
          <Link
            href="/"
            className="no-print mb-6 inline-block text-sm text-emerald-800 hover:text-emerald-950"
          >
            ← Resume Viewer
          </Link>
          <p className="text-sm font-semibold uppercase tracking-wide text-emerald-800">
            {reportMeta.preparedFor}
          </p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            {reportMeta.title}
          </h1>
          <p className="mt-3 max-w-2xl text-xl text-gray-700">{reportMeta.subtitle}</p>
          <p className="mt-5 max-w-3xl text-[17px] leading-relaxed text-gray-700">
            I am a solo founder-engineer. Without AI-assisted development, I would not have
            shipped a production platform with this many services, workers, and data paths in
            ~18 months. This report shows the scale and how leverage changed over time.
          </p>
          <p className="mt-4 text-sm text-gray-600 print:text-gray-800">
            Product: {reportMeta.productUrl} · Architecture: {reportMeta.architectureUrl}
          </p>
          <div className="no-print mt-6 flex flex-wrap gap-3">
            <a
              href={reportMeta.productUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-md border border-emerald-700 bg-white px-4 py-2 text-sm font-medium text-emerald-900"
            >
              Live product
            </a>
            <a
              href={reportMeta.architectureUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-800"
            >
              Architecture docs
            </a>
            <Link
              href="/jobs/owner-fullstack"
              className="inline-flex rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-800"
            >
              Owner tailored resume
            </Link>
          </div>
        </div>
      </header>

      <section className="border-b border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-5xl px-6 py-10">
          <h2 className="mb-6 text-lg font-bold text-gray-900">Evidence at a glance</h2>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
            {headlineMetrics.map((m) => (
              <div
                key={m.label}
                className="rounded-lg border border-gray-300 bg-white p-4 print:border-gray-400"
              >
                <p className="text-3xl font-bold tabular-nums text-emerald-800 sm:text-4xl">
                  {m.value}
                </p>
                <p className="mt-1 text-sm font-semibold text-gray-900">{m.label}</p>
                <p className="mt-0.5 text-xs text-gray-600">{m.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-5xl space-y-14 px-6 py-10 print:space-y-10">
        <section className="break-inside-avoid">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">Executive summary</h2>
          <div className="space-y-4 text-[17px] leading-relaxed text-gray-800">
            <p>
              <strong>Plantfolio</strong> is a Turborepo monorepo I built as founder and sole
              engineer: three Next.js apps, Flutter mobile, two Railway workers, dual PostgreSQL
              databases (main + plants with pgvector), and a dozen production integrations,
              documented at plantfolio.garden/support/architecture.
            </p>
            <p>
              <strong>Cursor</strong> (top 1% user) and Claude-class agents are how I hold
              architecture, migrations, and integration work in my head while shipping. The monorepo
              is agent-friendly: bounded packages, server actions, typed env, CI on every push.
            </p>
            <p>
              Commit activity peaked in <strong>{peakCommits.month}</strong> (
              {peakCommits.commits} commits). I slowed active development in late 2025 to focus on
              hiring; the product and docs remain the proof.{" "}
              <strong>{last12Total}</strong> commits in the chart window (May 2024 – Nov 2025).
            </p>
          </div>
        </section>

        <section className="break-inside-avoid rounded-lg border border-gray-300 bg-white p-6 print:border-gray-400">
          <h2 className="mb-2 text-2xl font-bold text-gray-900">Output over time</h2>
          <p className="mb-6 text-sm text-gray-600">
            Git commit velocity on Plantfolio (solo author). Values shown on every bar.
          </p>
          <CommitActivityChart data={commitActivityByMonth} />
        </section>

        <section className="break-inside-avoid">
          <h2 className="mb-6 text-2xl font-bold text-gray-900">Three phases</h2>
          <div className="ml-3 space-y-0 border-l-2 border-emerald-600">
            {timelinePhases.map((phase) => (
              <div key={phase.period} className="relative pb-8 pl-8 last:pb-0">
                <span className="absolute -left-[9px] top-1 h-4 w-4 rounded-full border-2 border-white bg-emerald-600 print:border-gray-100" />
                <p className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                  {phase.period}
                </p>
                <h3 className="mt-1 text-lg font-bold text-gray-900">{phase.title}</h3>
                <p className="mt-2 leading-relaxed text-gray-700">{phase.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="break-inside-avoid">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            Leverage before vs. after agents
          </h2>
          <table className="w-full border-collapse border border-gray-400 text-left text-sm">
            <thead>
              <tr className="bg-emerald-700 text-white print:bg-emerald-800">
                <th className="border border-gray-400 px-3 py-2 font-semibold">Dimension</th>
                <th className="border border-gray-400 px-3 py-2 font-semibold">
                  Pre-agentic solo IC
                </th>
                <th className="border border-gray-400 px-3 py-2 font-semibold">
                  Last ~12 months
                </th>
              </tr>
            </thead>
            <tbody>
              {leverageComparison.map((row, i) => (
                <tr
                  key={row.dimension}
                  className={i % 2 === 0 ? "bg-white" : "bg-gray-50 print:bg-gray-100"}
                >
                  <td className="border border-gray-300 px-3 py-2 font-semibold text-gray-900">
                    {row.dimension}
                  </td>
                  <td className="border border-gray-300 px-3 py-2 text-gray-700">
                    {row.before}
                  </td>
                  <td className="border border-gray-300 px-3 py-2 text-gray-900">
                    {row.after}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section className="break-inside-avoid rounded-lg border border-gray-300 p-6 print:border-gray-400">
          <h2 className="mb-2 text-2xl font-bold text-gray-900">What this scale means</h2>
          <p className="mb-6 max-w-2xl text-gray-700">
            A solo founder historically ships one app and one database. Plantfolio is a
            multi-surface platform with async workers and AI in the product path.
          </p>
          <ArchitectureMap />
        </section>

        <section className="break-inside-avoid">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">How I scale myself (workflow)</h2>
          <ul className="list-disc space-y-3 pl-5 text-gray-800">
            {aiWorkflowBullets.map((bullet) => (
              <li key={bullet} className="leading-relaxed">
                {bullet}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-lg border border-dashed border-gray-400 bg-gray-50 p-5 text-center">
          <p className="text-sm leading-relaxed text-gray-700">{reportMeta.generatedNote}</p>
          <p className="mt-3 text-sm font-medium text-gray-900">
            {reportMeta.author} · {reportDate}
          </p>
        </section>
      </div>

      <footer className="no-print border-t border-gray-200 py-6 text-center text-sm text-gray-500">
        Optimized for Print → Save as PDF (attachment for Owner.com Scale Yourself).
      </footer>
    </div>
  );
}
