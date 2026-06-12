import { profile } from "@/data/profile";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/60 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-muted sm:flex-row">
        <p>
          © {year} {profile.legalName}. Built with Next.js.
        </p>
        <nav aria-label="Footer" className="flex gap-6">
          {profile.links.map((link) => (
            <a
              key={link.href}
              className="transition-colors hover:text-foreground"
              href={link.href}
              rel="noopener noreferrer"
              target="_blank"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
