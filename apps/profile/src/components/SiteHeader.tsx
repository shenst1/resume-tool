import { FleurDeLisMark } from "@/components/FleurDeLisMark";
import { profile } from "@/data/profile";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          className="flex items-center gap-2.5 font-display text-lg font-semibold tracking-tight text-foreground transition-colors hover:text-accent"
          href="/"
        >
          <FleurDeLisMark className="shrink-0" size={28} />
          <span>
            {profile.name.split(" ")[0]}
            <span className="text-accent">.</span>
          </span>
        </a>
        <nav aria-label="Primary" className="hidden items-center gap-8 sm:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              className="text-sm text-muted transition-colors hover:text-foreground"
              href={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          className="rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-accent/50 hover:text-accent"
          href={`mailto:${profile.email}`}
        >
          Get in touch
        </a>
      </div>
    </header>
  );
}
