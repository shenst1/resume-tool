import type { SkillCategory } from "@/types/resume";
import { renderInlineBold } from "./renderInlineBold";

interface SkillsSectionProps {
  skills: SkillCategory[];
}

export function SkillsSection({ skills }: SkillsSectionProps) {
  return (
    <div className="space-y-3.5">
      {skills.map((category) => (
        <div key={category.label} className="leading-relaxed">
          <strong className="font-semibold text-gray-800">{category.label}:</strong>{" "}
          <span className="text-gray-700">
            {category.items.map((item, i) => (
              <span key={`${category.label}-${i}`}>
                {i > 0 ? ", " : null}
                {renderInlineBold(item)}
              </span>
            ))}
          </span>
        </div>
      ))}
    </div>
  );
}
