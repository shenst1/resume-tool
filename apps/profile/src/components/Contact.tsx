import { ContactVisual } from "@/components/visuals/ContactVisual";
import { profile } from "@/data/profile";

export function Contact() {
  return (
    <section className="py-20" id="contact">
      <div className="mx-auto max-w-6xl px-6">
        <div className="overflow-hidden rounded-3xl border border-border bg-[linear-gradient(135deg,var(--surface-raised),var(--surface))]">
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-12">
              <p className="mb-3 text-sm font-medium tracking-wide text-accent uppercase">
                Contact
              </p>
              <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                Let&apos;s build something worth shipping
              </h2>
              <p className="mt-4 max-w-md text-muted">
                Open to senior product engineering roles, founder-adjacent work,
                and conversations about AI-native product development. Based in
                Bend, Oregon; remote-friendly.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  className="inline-flex justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-background transition-opacity hover:opacity-90"
                  href={`mailto:${profile.email}`}
                >
                  {profile.email}
                </a>
                <a
                  className="inline-flex justify-center rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent/40"
                  href={profile.links[0].href}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Connect on LinkedIn
                </a>
              </div>
            </div>
            <div className="border-t border-border p-6 md:border-t-0 md:border-l md:p-8">
              <ContactVisual />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
