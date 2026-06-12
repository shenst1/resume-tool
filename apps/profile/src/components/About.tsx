import { profile } from "@/data/profile";
import { ProfileImage } from "./ProfileImage";

export function About() {
  return (
    <section className="border-b border-border/60 py-20" id="about">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-16">
          <div>
            <p className="mb-3 text-sm font-medium tracking-wide text-accent uppercase">
              About
            </p>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              Product engineer who closes the loop
            </h2>
            <div className="mt-8 space-y-5 text-muted">
              {profile.about.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>
            <p className="mt-8 text-sm text-muted/80">
              {profile.about.education}
            </p>
          </div>
          <div className="lg:pt-14">
            <ProfileImage
              {...profile.images.headshot}
              aspect="square"
              imageClassName="object-[center_20%]"
            />
          </div>
        </div>

        <dl className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4">
          {profile.metrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-2xl border border-border bg-surface p-6"
            >
              <dt className="font-display text-3xl font-semibold text-accent">
                {metric.value}
              </dt>
              <dd className="mt-2 text-sm text-muted">{metric.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
