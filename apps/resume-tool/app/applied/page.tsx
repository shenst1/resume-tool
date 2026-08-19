import type { Metadata } from "next";
import Link from "next/link";

const PROSPECTS_URL =
  "https://app.notion.com/p/67df472bedd349bb8e2fa5652be81be4";

export const metadata: Metadata = {
  title: "Applied companies · Resume Viewer",
  description: "Job-search tracking moved to Notion Prospects",
};

export default function AppliedCompaniesPage() {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8 sm:px-8">
      <div className="mx-auto max-w-2xl">
        <Link
          href="/"
          className="mb-6 inline-block text-sm font-medium text-gray-500 hover:text-gray-800"
        >
          ← Resume Viewer
        </Link>
        <h1 className="mb-1 text-3xl font-bold tracking-tight text-gray-900">
          Applied companies
        </h1>
        <p className="mb-6 text-sm text-gray-600">
          Employer tracking lives in Notion Prospects now. The local JSON list
          was removed.
        </p>
        <a
          href={PROSPECTS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-lg border border-sky-200 bg-sky-50 px-4 py-3 text-sm font-medium text-sky-800 hover:bg-sky-100"
        >
          Open Prospects in Notion
        </a>
      </div>
    </div>
  );
}
