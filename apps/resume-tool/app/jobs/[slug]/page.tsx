import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getResume, getAllResumeSlugs } from "@/data/resumes";
import { ResumeTemplate } from "@/components/resume/ResumeTemplate";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllResumeSlugs();
  return slugs.map((slug) => ({ slug }));
}

function formatPageTitle(name: string, role: string, company: string): string {
  // Extract last name and first name from "Andrew W. Shenstone"
  const nameParts = name.trim().split(/\s+/);
  const lastName = nameParts[nameParts.length - 1];
  const firstName = nameParts[0];
  return `${lastName}, ${firstName} - ${role} @ ${company}`;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const resume = getResume(slug);
  
  if (!resume) {
    return {
      title: "Resume",
    };
  }
  
  const title = formatPageTitle(
    resume.contact.name,
    resume.target.role,
    resume.target.company
  );
  
  return {
    title,
  };
}

export default async function JobResumePage({ params }: PageProps) {
  const { slug } = await params;
  const resume = getResume(slug);
  
  if (!resume) {
    notFound();
  }
  
  return (
    <div className="min-h-screen bg-white print:bg-white">
      <ResumeTemplate data={resume} />
    </div>
  );
}
