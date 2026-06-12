import { profile } from "@/data/profile";

export function Approach() {
  return (
    <section className="border-b border-border/60 bg-surface py-20">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-3 text-sm font-medium tracking-wide text-accent uppercase">
          Approach
        </p>
        <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
          {profile.approach.title}
        </h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {profile.approach.items.map((item, index) => (
            <article
              key={item.title}
              className="rounded-2xl border border-border bg-surface-raised p-6"
            >
              <span className="font-display text-sm text-warm">
                0{index + 1}
              </span>
              <h3 className="mt-2 font-display text-xl font-medium text-foreground">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
