import type { Resume } from "@/types/resume";
import { ExperienceSection } from "./ExperienceSection";
import { renderInlineBold } from "./renderInlineBold";
import { ResumeHeader } from "./ResumeHeader";
import { ResumeSection } from "./ResumeSection";
import { SkillsSection } from "./SkillsSection";

interface ResumeTemplateProps {
  data: Resume;
}

export function ResumeTemplate({ data }: ResumeTemplateProps) {
  const summaryTitle = data.summarySectionTitle ?? "SUMMARY";
  const summaryParagraphs = data.about
    .trim()
    .split(/\n\s*\n/)
    .map((p) => p.replace(/\s+/g, " ").trim())
    .filter(Boolean);

  return (
    <div className="max-w-4xl mx-auto p-5">
      <ResumeHeader 
        contact={data.contact}
        title={data.pageTitle}
      />
      
      <ResumeSection title={summaryTitle}>
        <div className="space-y-3 text-gray-700 leading-relaxed">
          {summaryParagraphs.map((paragraph) => (
            <p key={paragraph}>{renderInlineBold(paragraph)}</p>
          ))}
        </div>
      </ResumeSection>
      
      <ResumeSection title="SKILLS">
        <SkillsSection skills={data.skills} />
      </ResumeSection>
      
      {data.education && (
        <ResumeSection title="EDUCATION">
          <p className="text-gray-700 leading-relaxed">{data.education}</p>
        </ResumeSection>
      )}
      
      <ResumeSection title="EXPERIENCE">
        <ExperienceSection experiences={data.experience} />
      </ResumeSection>
      
      <ResumeSection title="COMPANY REFERENCE">
        <div className="space-y-2.5">
          {data.companyReferences.map((ref) => (
            <p
              key={`${ref.name}-${ref.years}-${ref.href ?? ""}`}
              className="text-gray-700 leading-relaxed"
            >
              <strong className="text-gray-800">{ref.name}</strong> ({ref.years}) - {ref.description}
              {ref.href && (
                <> - <a href={ref.href} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{ref.href.replace("https://", "").replace("http://", "")}</a></>
              )}
            </p>
          ))}
        </div>
      </ResumeSection>
    </div>
  );
}
