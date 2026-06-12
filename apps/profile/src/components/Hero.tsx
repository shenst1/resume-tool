import { HeroVisual } from "@/components/visuals/HeroVisual";
import { profile } from "@/data/profile";

export function Hero() {
  return (
    <section className="hero-glow relative overflow-hidden border-b border-border/60">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-[1fr_minmax(0,340px)] md:items-center md:py-24 lg:gap-16">
        <div>
          <p className="animate-fade-up mb-4 text-sm font-medium tracking-wide text-accent uppercase">
            {profile.title} · {profile.location}
          </p>
          <h1 className="animate-fade-up animate-fade-up-delay-1 font-display text-4xl leading-[1.1] font-semibold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            {profile.hero.headline}
            <span className="text-accent"> {profile.hero.headlineAccent}</span>
          </h1>
          <p className="animate-fade-up animate-fade-up-delay-2 mt-6 max-w-xl text-lg text-muted">
            {profile.hero.intro}
          </p>
          <p className="animate-fade-up animate-fade-up-delay-2 mt-3 text-sm text-muted/90">
            {profile.subtitle}
          </p>
          <div className="animate-fade-up animate-fade-up-delay-3 mt-8 flex flex-wrap gap-3">
            {profile.links.map((link) => (
              <a
                key={link.href}
                className="inline-flex items-center rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-background transition-opacity first:bg-accent hover:opacity-90 [&:not(:first-child)]:border [&:not(:first-child)]:border-border [&:not(:first-child)]:bg-surface [&:not(:first-child)]:font-medium [&:not(:first-child)]:text-foreground [&:not(:first-child)]:hover:border-accent/40"
                href={link.href}
                rel="noopener noreferrer"
                target="_blank"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <div className="animate-fade-up animate-fade-up-delay-2">
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}
