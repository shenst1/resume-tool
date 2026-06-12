import { profile } from "@/data/profile";

export function Skills() {
  return (
    <section className="border-b border-border/60 bg-surface py-20">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-3 text-sm font-medium tracking-wide text-accent uppercase">
          Expertise
        </p>
        <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
          What I bring to a team
        </h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {profile.skillGroups.map((group) => (
            <div
              key={group.label}
              className="rounded-2xl border border-border bg-surface-raised p-6"
            >
              <h3 className="font-display text-lg font-medium text-foreground">
                {group.label}
              </h3>
              <ul className="mt-4 space-y-2">
                {group.items.map((item) => (
                  <li key={item} className="text-sm text-muted">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
