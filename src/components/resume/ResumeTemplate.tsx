import type { Resume } from "@/types/resume";
import { ResumeHeader } from "./ResumeHeader";
import { ResumeSection } from "./ResumeSection";
import { SkillsSection } from "./SkillsSection";
import { ExperienceSection } from "./ExperienceSection";

interface ResumeTemplateProps {
  data: Resume;
}

export function ResumeTemplate({ data }: ResumeTemplateProps) {
  const applicationTitle = `${data.target.company.toUpperCase()} APPLICATION`;
  
  return (
    <div className="max-w-4xl mx-auto p-5">
      <ResumeHeader 
        contact={data.contact}
        title={data.pageTitle}
      />
      
      <ResumeSection title="ABOUT ME">
        <p className="text-gray-700 leading-relaxed">{data.about}</p>
      </ResumeSection>
      
      <ResumeSection title={applicationTitle}>
        <p className="text-gray-700 leading-relaxed">{data.application}</p>
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
          {data.companyReferences.map((ref, idx) => (
            <p key={idx} className="text-gray-700 leading-relaxed">
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
