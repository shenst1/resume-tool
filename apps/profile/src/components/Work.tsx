import Image from "next/image";
import type { ComponentType } from "react";
import { FintechPaymentsVisual } from "@/components/visuals/FintechPaymentsVisual";
import type { Project, ProjectVisual } from "@/data/profile";
import { profile } from "@/data/profile";
import { ProfileImage } from "./ProfileImage";

const projectVisuals: Record<ProjectVisual, ComponentType> = {
  "fintech-payments": FintechPaymentsVisual,
};

function ProjectCard({ project }: { project: Project }) {
  const Visual = project.visual ? projectVisuals[project.visual] : null;

  const content = (
    <>
      <div className="relative mb-6">
        {Visual ? (
          <Visual />
        ) : project.image ? (
          <ProfileImage
            alt={project.image.alt}
            aspect="video"
            fit={project.image.fit}
            src={project.image.src}
            unoptimized
          />
        ) : (
          <div className="aspect-video rounded-2xl bg-[linear-gradient(135deg,var(--accent-soft),var(--surface-raised))] ring-1 ring-border/60" />
        )}
        {project.logo && (
          <div className="absolute right-4 bottom-4 rounded-lg bg-white/95 p-2 shadow-lg ring-1 ring-border/40">
            <Image
              alt={project.logo.alt}
              className="h-10 w-auto"
              height={40}
              src={project.logo.src}
              unoptimized
              width={120}
            />
          </div>
        )}
      </div>
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="font-display text-2xl font-semibold text-foreground">
          {project.name}
        </h3>
        <span className="text-sm text-muted">{project.years}</span>
      </div>
      <p className="mt-1 text-sm font-medium text-accent">{project.tagline}</p>
      <p className="mt-4 text-muted">{project.description}</p>
      <ul className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <li
            key={tag}
            className="rounded-full border border-border bg-background px-3 py-1 text-xs text-muted"
          >
            {tag}
          </li>
        ))}
      </ul>
    </>
  );

  if (project.href) {
    return (
      <a
        className="group block rounded-3xl border border-border bg-surface p-6 transition-colors hover:border-accent/40 hover:bg-surface-raised"
        href={project.href}
        rel="noopener noreferrer"
        target="_blank"
      >
        {content}
        <span className="mt-6 inline-flex text-sm font-medium text-accent group-hover:underline">
          View project →
        </span>
      </a>
    );
  }

  return (
    <article className="rounded-3xl border border-border bg-surface p-6">
      {content}
    </article>
  );
}

export function Work() {
  return (
    <section className="border-b border-border/60 py-20" id="work">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-3 text-sm font-medium tracking-wide text-accent uppercase">
          Selected work
        </p>
        <h2 className="max-w-2xl font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
          Products I&apos;ve built, scaled, and still care about
        </h2>
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {profile.projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
