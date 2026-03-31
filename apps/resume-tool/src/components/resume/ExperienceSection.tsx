import type { ExperienceRole } from "@/types/resume";

interface ExperienceSectionProps {
  experiences: ExperienceRole[];
}

export function ExperienceSection({ experiences }: ExperienceSectionProps) {
  return (
    <div className="space-y-10">
      {experiences.map((exp, idx) => (
        <div key={idx} className="border-b border-gray-200 pb-8 last:border-b-0">
          <div className="mb-4">
            <h3 className="text-xl font-bold text-gray-800 mb-1 leading-tight">{exp.title}</h3>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span className="font-semibold">{exp.company}</span>
              <span className="text-gray-400">|</span>
              <span className="text-xs">{exp.start} - {exp.end}</span>
            </div>
          </div>
          
          {exp.groups.map((group, groupIdx) => (
            <div key={groupIdx} className="mb-5 last:mb-0">
              {group.heading && (
                <h4 className="text-lg font-semibold mb-2.5 text-gray-700 leading-tight">{group.heading}</h4>
              )}
              <ul className="list-disc list-inside space-y-1.5 ml-4 leading-relaxed">
                {group.bullets.map((bullet, bulletIdx) => (
                  <li key={bulletIdx} className="text-gray-700">{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
