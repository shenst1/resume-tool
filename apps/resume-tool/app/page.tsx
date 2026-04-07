import Link from "next/link";
import { getAllResumeSlugs } from "@/data/resumes";

export default function Home() {
  const slugs = getAllResumeSlugs().filter((s) => s !== "base");
  
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Resume Viewer</h1>
        <div className="space-y-4 mb-8">
          <Link
            href="/jobs/base"
            className="block p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow border border-gray-200 border-emerald-200 bg-emerald-50/50"
          >
            <h2 className="text-xl font-semibold">Base resume</h2>
            <p className="text-gray-600 text-sm mt-1">
              General-purpose resume (not tailored to a company)
            </p>
          </Link>
          <Link
            href="/typescript"
            className="block p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow border border-gray-200 border-indigo-200 bg-indigo-50/50"
          >
            <h2 className="text-xl font-semibold">TypeScript Review</h2>
            <p className="text-gray-600 text-sm mt-1">
              Interview questions & refreshers
            </p>
          </Link>
          <Link
            href="/typescript/benefits"
            className="block p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow border border-gray-200 border-indigo-200 bg-indigo-50/50"
          >
            <h2 className="text-xl font-semibold">TypeScript Benefits & Downsides</h2>
            <p className="text-gray-600 text-sm mt-1">
              Pros, cons, and when to use it
            </p>
          </Link>
        </div>
        <h2 className="text-lg font-semibold text-gray-700 mb-4">Resumes</h2>
        <div className="space-y-4">
          {slugs.map((slug) => (
            <Link
              key={slug}
              href={`/jobs/${slug}`}
              className="block p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow border border-gray-200"
            >
              <h2 className="text-xl font-semibold capitalize">{slug}</h2>
              <p className="text-gray-600 text-sm mt-1">View resume</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
