import { profile } from "@/data/profile";

export function Experience() {
  return (
    <section className="border-b border-border/60 py-20" id="experience">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-3 text-sm font-medium tracking-wide text-accent uppercase">
          Experience
        </p>
        <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
          A dozen years across agency, platform, and founder roles
        </h2>
        <ol className="mt-12 space-y-0">
          {profile.experience.map((role, index) => (
            <li
              key={`${role.company}-${role.period}`}
              className="relative grid gap-4 border-l border-border py-8 pl-8 md:grid-cols-[200px_1fr] md:gap-12 md:pl-10"
            >
              <span
                aria-hidden="true"
                className="absolute top-10 left-0 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-accent ring-4 ring-background"
              />
              <div>
                <p className="text-sm font-medium text-muted">{role.period}</p>
                {index === 0 && (
                  <span className="mt-2 inline-block rounded-full bg-accent/15 px-2.5 py-0.5 text-xs font-medium text-accent">
                    Current
                  </span>
                )}
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-foreground">
                  {role.title}
                </h3>
                <p className="mt-1 text-accent">{role.company}</p>
                <p className="mt-3 text-muted">{role.summary}</p>
                <ul className="mt-4 space-y-2">
                  {role.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex gap-2 text-sm text-muted before:mt-2 before:h-1 before:w-1 before:shrink-0 before:rounded-full before:bg-warm before:content-['']"
                    >
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
