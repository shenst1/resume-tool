import type { Contact } from "@/types/resume";

interface ResumeHeaderProps {
  contact: Contact;
  title: string;
}

export function ResumeHeader({ contact, title }: ResumeHeaderProps) {
  return (
    <header className="mb-10">
      <h1 className="text-2xl font-bold mb-1 text-gray-800 leading-tight">{contact.name}</h1>
      <p className="text-sm text-gray-600 mb-5 leading-relaxed">{title}</p>
      <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-700">
        <span>{contact.phone}</span>
        <span className="text-gray-400">•</span>
        <a href={`mailto:${contact.email}`} className="text-blue-600 hover:underline">
          {contact.email}
        </a>
        {contact.links.map((link, idx) => (
          <span key={link.href}>
            <span className="text-gray-400">•</span>
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline ml-1"
            >
              {link.label}
            </a>
          </span>
        ))}
      </div>
    </header>
  );
}
