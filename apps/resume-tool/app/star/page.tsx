import Link from "next/link";
import { CollapsibleArticle } from "@/components/star/CollapsibleArticle";
import { MarkdownContent } from "@/components/star/MarkdownContent";
import {
  InterviewPrepMobileNav,
  InterviewPrepSidebar,
} from "@/components/star/InterviewPrepNav";
import {
  interviewGuides,
  type InterviewGuide,
} from "@/data/interview-guides";
import {
  quickReferenceStories,
  staffVsManager,
  stakeDrivingNotes,
  starFramework,
  starStories,
  type StarStory,
} from "@/data/star-stories";

export const metadata = {
  title: "Interview Prep — STAR Stories & Guides",
  description:
    "Behavioral stories, production triage, Plantfolio framing, and Staff notes for interviews",
};

function shortTitle(title: string) {
  return title.split("—")[0].trim();
}

const navGroups = [
  {
    title: "Guides",
    links: interviewGuides.map((g) => ({
      href: `#${g.id}`,
      label: shortTitle(g.title),
    })),
  },
  {
    title: "STAR setup",
    links: [
      { href: "#star-framework", label: "How to use STAR" },
      { href: "#staff-notes", label: "Staff vs Manager" },
      { href: "#stake-driving", label: "Stake-driving" },
    ],
  },
  {
    title: "Stories",
    links: starStories.map((s) => ({
      href: `#${s.id}`,
      label: shortTitle(s.title),
    })),
  },
  {
    title: "More",
    links: [{ href: "#quick-reference", label: "Quick reference" }],
  },
];

function GuideSummary({ guide }: { guide: InterviewGuide }) {
  return (
    <>
      <div className="flex flex-wrap items-start justify-between gap-2">
        <h3 className="text-lg font-semibold text-gray-900 sm:text-xl">{guide.title}</h3>
        {guide.duration && (
          <span className="text-sm text-gray-500">{guide.duration}</span>
        )}
      </div>
      <p className="mt-1 text-sm text-violet-900 leading-relaxed">{guide.subtitle}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {guide.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-violet-100 px-2.5 py-0.5 text-xs font-medium text-violet-900"
          >
            {tag}
          </span>
        ))}
      </div>
    </>
  );
}

function GuideBody({ guide }: { guide: InterviewGuide }) {
  return (
    <>
      <div className="space-y-5 text-[15px] leading-relaxed">
        {guide.sections.map((section) => (
          <div key={section.heading}>
            <h4 className="font-semibold text-gray-900">{section.heading}</h4>
            <div className="text-gray-700 mt-1">
              <MarkdownContent content={section.content} />
            </div>
          </div>
        ))}
      </div>
      {guide.speakableTemplate && (
        <div className="mt-5 rounded-lg bg-violet-50 border border-violet-100 px-4 py-3">
          <p className="text-sm font-semibold text-violet-900">Speakable template</p>
          <div className="text-sm text-violet-950 mt-1 whitespace-pre-wrap">
            <MarkdownContent content={guide.speakableTemplate} />
          </div>
        </div>
      )}
      {guide.oneLiner && (
        <div className="mt-4 rounded-lg bg-emerald-50 border border-emerald-100 px-4 py-3">
          <p className="text-sm font-semibold text-emerald-900">One-liner</p>
          <div className="text-sm text-emerald-950 mt-1">
            <MarkdownContent content={guide.oneLiner} />
          </div>
        </div>
      )}
      {guide.doNot && guide.doNot.length > 0 && (
        <div className="mt-4 text-sm text-amber-900 bg-amber-50 border border-amber-100 rounded-lg px-3 py-2">
          <p className="font-semibold mb-1">Do not</p>
          <ul className="list-disc pl-4 space-y-1">
            {guide.doNot.map((item) => (
              <li key={item}>
                <MarkdownContent content={item} inline />
              </li>
            ))}
          </ul>
        </div>
      )}
      {guide.interviewNotes && guide.interviewNotes.length > 0 && (
        <div className="mt-4 text-sm text-gray-600">
          <MarkdownContent
            content={guide.interviewNotes.map((n) => `- ${n}`).join("\n")}
          />
        </div>
      )}
    </>
  );
}

function StorySummary({ story }: { story: StarStory }) {
  return (
    <>
      <div className="flex flex-wrap items-start justify-between gap-2">
        <h3 className="text-lg font-semibold text-gray-900 sm:text-xl">{story.title}</h3>
        <span className="text-sm text-gray-500">{story.duration}</span>
      </div>
      <p className="mt-1 text-sm font-medium text-emerald-800">{story.company}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {story.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-700"
          >
            {tag}
          </span>
        ))}
      </div>
    </>
  );
}

function StoryBody({ story }: { story: StarStory }) {
  return (
    <>
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
    </>
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
    <div>
      <h3 className="text-lg font-semibold text-gray-900 mb-3">{title}</h3>
      <ul className="list-disc pl-5 space-y-2 text-gray-700 text-[15px] leading-relaxed">
        {items.map((item) => (
          <li key={item}>
            <MarkdownContent content={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function StarStoriesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-8">
        <div className="mb-8">
          <Link href="/" className="text-gray-600 hover:text-gray-900 text-sm">
            ← Back to Resume Viewer
          </Link>
        </div>

        <header className="mb-8 max-w-3xl">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Interview Prep</h1>
          <p className="text-gray-600 leading-relaxed">
            Guides and STAR stories—expand a section to practice. Company-specific
            notes live in{" "}
            <code className="text-sm bg-gray-200 px-1 rounded">prospects/</code>.
          </p>
        </header>

        <InterviewPrepMobileNav groups={navGroups} />

        <div className="mt-8 flex gap-10 lg:mt-10">
          <InterviewPrepSidebar groups={navGroups} />

          <main className="min-w-0 flex-1 max-w-3xl">
            <section id="section-guides" className="mb-12 scroll-mt-24">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Guides</h2>
              <div className="space-y-4">
                {interviewGuides.map((guide) => (
                  <CollapsibleArticle
                    key={guide.id}
                    id={guide.id}
                    defaultOpen={guide.id === "tell-me-about-yourself"}
                    borderClassName="border-violet-200"
                    summary={<GuideSummary guide={guide} />}
                  >
                    <GuideBody guide={guide} />
                  </CollapsibleArticle>
                ))}
              </div>
            </section>

            <section id="section-star" className="mb-12 scroll-mt-24">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">STAR stories</h2>

              <CollapsibleArticle
                id="star-framework"
                defaultOpen
                borderClassName="border-indigo-200"
                summary={
                  <h3 className="text-lg font-semibold text-gray-900">
                    {starFramework.title}
                  </h3>
                }
              >
                <ul className="list-disc pl-5 space-y-2 text-gray-700 text-[15px]">
                  {starFramework.bullets.map((b) => (
                    <li key={b}>
                      <MarkdownContent content={b} />
                    </li>
                  ))}
                </ul>
                <div className="mt-5 grid gap-3 sm:grid-cols-2 text-sm">
                  <div className="rounded-lg bg-red-50/80 p-3 border border-red-100">
                    <p className="font-semibold text-red-900">Weak</p>
                    <div className="text-gray-700 mt-1">
                      <MarkdownContent content={starFramework.mentorshipProof.weak} />
                    </div>
                  </div>
                  <div className="rounded-lg bg-emerald-50/80 p-3 border border-emerald-100">
                    <p className="font-semibold text-emerald-900">Strong</p>
                    <div className="text-gray-700 mt-1">
                      <MarkdownContent content={starFramework.mentorshipProof.strong} />
                    </div>
                  </div>
                </div>
              </CollapsibleArticle>

              <div className="mt-4 space-y-4">
                <CollapsibleArticle
                  id="staff-notes"
                  summary={
                    <h3 className="text-lg font-semibold text-gray-900">
                      {staffVsManager.title}
                    </h3>
                  }
                >
                  <div className="grid gap-4 sm:grid-cols-2">
                    <BulletList title="Staff owns" items={staffVsManager.staffOwns} />
                    <div className="space-y-4">
                      <BulletList title="Manager owns" items={staffVsManager.managerOwns} />
                      <p className="text-sm text-gray-700 leading-relaxed rounded-lg bg-gray-50 border border-gray-200 p-4">
                        <span className="font-semibold">Staff goal: </span>
                        <MarkdownContent content={staffVsManager.staffGoal} inline />
                      </p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-gray-600">
                    <span className="font-semibold">Underperformance (if asked):</span>{" "}
                    <MarkdownContent content={staffVsManager.underperformanceLine} inline />
                  </p>
                </CollapsibleArticle>

                <CollapsibleArticle
                  id="stake-driving"
                  summary={
                    <h3 className="text-lg font-semibold text-gray-900">
                      {stakeDrivingNotes.title}
                    </h3>
                  }
                >
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
                </CollapsibleArticle>
              </div>

              <div className="mt-6 space-y-4">
                {starStories.map((story) => (
                  <CollapsibleArticle
                    key={story.id}
                    id={story.id}
                    summary={<StorySummary story={story} />}
                  >
                    <StoryBody story={story} />
                  </CollapsibleArticle>
                ))}
              </div>
            </section>

            <section id="quick-reference" className="mb-12 scroll-mt-24">
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
                <code className="bg-gray-100 px-1 rounded">
                  prospects/Dutchie/interview-prep.md
                </code>{" "}
                for Cyril-specific notes and practice order.
              </p>
            </footer>
          </main>
        </div>
      </div>
    </div>
  );
}
