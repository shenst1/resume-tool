import Link from "next/link";
import { MarkdownContent } from "@/components/star/MarkdownContent";
import {
  quickReferenceStories,
  staffVsManager,
  stakeDrivingNotes,
  starFramework,
  starStories,
  type StarStory,
} from "@/data/star-stories";

export const metadata = {
  title: "STAR Stories — Interview Story Bank",
  description:
    "Concrete STAR stories and Staff framing for behavioral interviews",
};

function StoryCard({ story }: { story: StarStory }) {
  return (
    <article
      id={story.id}
      className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm scroll-mt-8"
    >
      <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
        <h3 className="text-xl font-semibold text-gray-900">{story.title}</h3>
        <span className="text-sm text-gray-500">{story.duration}</span>
      </div>
      <p className="text-sm font-medium text-emerald-800 mb-3">
        {story.company}
      </p>
      <div className="flex flex-wrap gap-2 mb-5">
        {story.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-700"
          >
            {tag}
          </span>
        ))}
      </div>
      <dl className="space-y-4 text-[15px] leading-relaxed">
        <div>
          <dt className="font-semibold text-gray-900">Situation</dt>
          <dd className="text-gray-700 mt-1">
            <MarkdownContent content={story.situation} />
          </dd>
        </div>
        <div>
          <dt className="font-semibold text-gray-900">Action</dt>
          <dd className="text-gray-700 mt-1">
            <MarkdownContent content={story.action} />
          </dd>
        </div>
        <div>
          <dt className="font-semibold text-gray-900">Result</dt>
          <dd className="text-gray-700 mt-1">
            <MarkdownContent content={story.result} />
          </dd>
        </div>
      </dl>
      <div className="mt-5 rounded-lg bg-emerald-50 border border-emerald-100 px-4 py-3">
        <p className="text-sm font-semibold text-emerald-900">One-liner</p>
        <div className="text-sm text-emerald-950 mt-1">
          <MarkdownContent content={story.oneLiner} />
        </div>
      </div>
      {story.growthEdge && (
        <div className="mt-4 text-sm text-gray-600">
          <span className="font-semibold text-gray-800">Growth edge: </span>
          <MarkdownContent content={story.growthEdge} inline />
        </div>
      )}
      {story.doNotLeadWith && (
        <div className="mt-3 text-sm text-amber-900 bg-amber-50 border border-amber-100 rounded-lg px-3 py-2">
          <span className="font-semibold">Do not lead with: </span>
          <MarkdownContent content={story.doNotLeadWith} inline />
        </div>
      )}
      {story.interviewNotes && story.interviewNotes.length > 0 && (
        <div className="mt-4 text-sm text-gray-600">
          <MarkdownContent
            content={story.interviewNotes.map((n) => `- ${n}`).join("\n")}
          />
        </div>
      )}
    </article>
  );
}

function BulletList({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <section className="rounded-xl border border-gray-200 bg-white p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-3">{title}</h3>
      <ul className="list-disc pl-5 space-y-2 text-gray-700 text-[15px] leading-relaxed">
        {items.map((item) => (
          <li key={item}>
            <MarkdownContent content={item} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function StarStoriesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto p-8">
        <div className="flex flex-wrap items-center gap-4 mb-8">
          <Link href="/" className="text-gray-600 hover:text-gray-900 text-sm">
            ← Back to Resume Viewer
          </Link>
        </div>

        <header className="mb-10">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">STAR Story Bank</h1>
          <p className="text-gray-600 leading-relaxed">
            Concrete behavioral stories—say out loud, don&apos;t recite philosophy.
            Company-specific interview notes (e.g. Dutchie + Cyril) live in{" "}
            <code className="text-sm bg-gray-200 px-1 rounded">prospects/</code>.
          </p>
        </header>

        <section className="mb-10 rounded-xl border border-indigo-200 bg-indigo-50/50 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-3">
            {starFramework.title}
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-700 text-[15px]">
            {starFramework.bullets.map((b) => (
              <li key={b}>
                <MarkdownContent content={b} />
              </li>
            ))}
          </ul>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 text-sm">
            <div className="rounded-lg bg-white/80 p-3 border border-red-100">
              <p className="font-semibold text-red-900">Weak</p>
              <div className="text-gray-700 mt-1">
                <MarkdownContent content={starFramework.mentorshipProof.weak} />
              </div>
            </div>
            <div className="rounded-lg bg-white/80 p-3 border border-emerald-100">
              <p className="font-semibold text-emerald-900">Strong</p>
              <div className="text-gray-700 mt-1">
                <MarkdownContent content={starFramework.mentorshipProof.strong} />
              </div>
            </div>
          </div>
        </section>

        <div className="mb-10 grid gap-4 sm:grid-cols-2">
          <BulletList title={staffVsManager.title} items={staffVsManager.staffOwns} />
          <div className="space-y-4">
            <BulletList title="Manager owns" items={staffVsManager.managerOwns} />
            <p className="text-sm text-gray-700 leading-relaxed rounded-lg bg-white border border-gray-200 p-4">
              <span className="font-semibold">Staff goal: </span>
              <MarkdownContent content={staffVsManager.staffGoal} inline />
            </p>
          </div>
        </div>

        <section className="mb-10 rounded-xl border border-gray-200 bg-white p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            {stakeDrivingNotes.title}
          </h2>
          <div className="grid gap-4 sm:grid-cols-3 text-sm">
            <div>
              <p className="font-semibold text-emerald-800 mb-2">Legitimate</p>
              <ul className="list-disc pl-4 text-gray-700 space-y-1">
                {stakeDrivingNotes.legitimate.map((l) => (
                  <li key={l}>
                    <MarkdownContent content={l} />
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-semibold text-red-800 mb-2">Toxic</p>
              <ul className="list-disc pl-4 text-gray-700 space-y-1">
                {stakeDrivingNotes.toxic.map((t) => (
                  <li key={t}>
                    <MarkdownContent content={t} />
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-semibold text-gray-800 mb-2">Counter-moves</p>
              <ul className="list-disc pl-4 text-gray-700 space-y-1">
                {stakeDrivingNotes.counterMoves.map((c) => (
                  <li key={c}>
                    <MarkdownContent content={c} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <p className="text-sm text-gray-600 mb-4">
          <span className="font-semibold">Underperformance (if asked):</span>{" "}
          <MarkdownContent content={staffVsManager.underperformanceLine} inline />
        </p>

        <nav className="mb-8 flex flex-wrap gap-2 text-sm">
          {starStories.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="rounded-md border border-gray-300 bg-white px-3 py-1 hover:bg-gray-50"
            >
              {s.title.split("—")[0].trim()}
            </a>
          ))}
        </nav>

        <div className="space-y-8 mb-12">
          {starStories.map((story) => (
            <StoryCard key={story.id} story={story} />
          ))}
        </div>

        <section className="mb-12">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Quick reference (other angles)
          </h2>
          <ul className="space-y-2">
            {quickReferenceStories.map((ref) => (
              <li
                key={ref.title}
                className="rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm"
              >
                <span className="font-semibold text-gray-900">{ref.title}</span>
                <span className="text-gray-600">
                  {" "}
                  — <MarkdownContent content={ref.when} inline />
                </span>
              </li>
            ))}
          </ul>
        </section>

        <footer className="text-sm text-gray-500 border-t border-gray-200 pt-6">
          <p>
            Dutchie first round: see{" "}
            <code className="bg-gray-100 px-1 rounded">prospects/Dutchie/interview-prep.md</code>{" "}
            for Cyril-specific notes and practice order.
          </p>
        </footer>
      </div>
    </div>
  );
}
