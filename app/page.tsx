import Link from "next/link";
import { getAllResumeSlugs } from "@/data/resumes";

export default function Home() {
  const slugs = getAllResumeSlugs();
  
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Resume Viewer</h1>
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
