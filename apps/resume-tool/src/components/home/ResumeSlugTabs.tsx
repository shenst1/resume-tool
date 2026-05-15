"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { isRecentlyAddedResume, RECENT_RESUME_DAYS } from "@/lib/resume-created-at";

export type ResumeIndexEntry = {
  slug: string;
  label: string;
  createdAt?: string;
};

type TabId = "library" | "recent";

export function ResumeSlugTabs({ entries }: { entries: ResumeIndexEntry[] }) {
  const [tab, setTab] = useState<TabId>("recent");

  const { library, recent } = useMemo(() => {
    const libraryList: ResumeIndexEntry[] = [];
    const recentList: ResumeIndexEntry[] = [];
    for (const e of entries) {
      if (isRecentlyAddedResume(e.createdAt)) recentList.push(e);
      else libraryList.push(e);
    }
    return { library: libraryList, recent: recentList };
  }, [entries]);

  const visible = tab === "library" ? library : recent;

  return (
    <div className="space-y-4">
      <div className="flex gap-2 border-b border-gray-200 pb-3">
        <button
          type="button"
          onClick={() => setTab("recent")}
          className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${
            tab === "recent"
              ? "bg-gray-900 text-white"
              : "bg-white text-gray-700 ring-1 ring-gray-200 hover:bg-gray-50"
          }`}
        >
          Recently added
          <span className="ml-2 tabular-nums text-xs opacity-80">{`(< ${RECENT_RESUME_DAYS} days)`}</span>
        </button>
        <button
          type="button"
          onClick={() => setTab("library")}
          className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${
            tab === "library"
              ? "bg-gray-900 text-white"
              : "bg-white text-gray-700 ring-1 ring-gray-200 hover:bg-gray-50"
          }`}
        >
          Library
          <span className="ml-2 tabular-nums text-xs opacity-80">({library.length})</span>
        </button>
      </div>
      <p className="text-sm text-gray-500">
        {tab === "library"
          ? `Tailored resumes without a created date, or added more than ${RECENT_RESUME_DAYS} days ago.`
          : `New entries stay here only for the first ${RECENT_RESUME_DAYS} days; then they move to Library.`}
      </p>
      {visible.length === 0 ? (
        <p className="rounded-lg border border-dashed border-gray-200 bg-white py-10 text-center text-gray-500">
          No resumes in this list yet.
        </p>
      ) : (
        <div className="space-y-4">
          {visible.map(({ slug, label, createdAt }) => (
            <Link
              key={slug}
              href={`/jobs/${slug}`}
              className="block rounded-lg border border-gray-200 bg-white p-4 shadow transition-shadow hover:shadow-md"
            >
              <h2 className="text-xl font-semibold">{label}</h2>
              <p className="mt-1 text-sm text-gray-600">View resume</p>
              {createdAt ? (
                <p className="mt-2 text-xs text-gray-400">Added {createdAt}</p>
              ) : null}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
