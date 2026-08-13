import type { Metadata } from "next";
import Link from "next/link";
import { AppliedCompaniesTable } from "@/components/applied/AppliedCompaniesTable";
import { getAppliedCompaniesFile } from "@/data/applied-companies";

export const metadata: Metadata = {
  title: "Applied companies · Resume Viewer",
  description: "Companies with tailored resumes, careers pages, and LinkedIn",
};

export default function AppliedCompaniesPage() {
  const data = getAppliedCompaniesFile();

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <Link
          href="/"
          className="mb-6 inline-block text-sm font-medium text-gray-500 hover:text-gray-800"
        >
          ← Resume Viewer
        </Link>
        <h1 className="mb-1 text-3xl font-bold tracking-tight text-gray-900">
          Applied companies
        </h1>
        <p className="mb-8 text-sm text-gray-600">
          {data.count} employers with a tailored resume. Careers and LinkedIn
          open in a new tab.
        </p>
        <AppliedCompaniesTable companies={data.companies} />
      </div>
    </div>
  );
}
