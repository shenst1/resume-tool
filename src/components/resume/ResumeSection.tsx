interface ResumeSectionProps {
  title: string;
  children: React.ReactNode;
}

export function ResumeSection({ title, children }: ResumeSectionProps) {
  return (
    <section className="mb-10">
      <h2 className="text-xl font-bold mb-5 border-b border-gray-400 pb-2.5 text-gray-600 leading-tight">{title}</h2>
      <div className="leading-relaxed">
        {children}
      </div>
    </section>
  );
}
