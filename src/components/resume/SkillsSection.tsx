import type { SkillCategory } from "@/types/resume";

interface SkillsSectionProps {
  skills: SkillCategory[];
}

export function SkillsSection({ skills }: SkillsSectionProps) {
  return (
    <div className="space-y-3.5">
      {skills.map((category) => (
        <div key={category.label} className="leading-relaxed">
          <strong className="font-semibold text-gray-800">{category.label}:</strong>{" "}
          <span className="text-gray-700">{category.items.join(", ")}</span>
        </div>
      ))}
    </div>
  );
}
