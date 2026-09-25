import { ArrowRightIcon } from "lucide-react";
import { ProfileImage } from "@/components/ProfileImage";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import IdCard from "@/components/ui/id-card";
import { Marquee } from "@/components/ui/marquee";
import GreetingWord from "./greeting-word";

export type HeroStackItem = {
  name: string;
  path: string;
};

type HeroSectionProps = {
  badge: string;
  name: string;
  role: string;
  subtitle: string;
  intro: string;
  imageSrc: string;
  imageAlt: string;
  workHref: string;
  contactHref: string;
  stack: HeroStackItem[];
};

const HeroSection = ({
  badge,
  name,
  role,
  subtitle,
  intro,
  imageSrc,
  imageAlt,
  workHref,
  contactHref,
  stack,
}: HeroSectionProps) => {
  return (
    <section className="hero-glow relative overflow-hidden border-b border-border/60">
      <div className="max-sm:pt-16 sm:py-16 lg:pt-24 lg:pb-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="space-y-6 lg:max-w-lg">
            <Badge
              variant="outline"
              className="h-6.5 gap-1 overflow-visible rounded-full border-border bg-card text-accent"
            >
              <span className="relative inline-flex size-1.5">
                <span className="absolute -inset-0.5 animate-[ping_1.8s_cubic-bezier(0,0,0.2,1)_infinite] rounded-full bg-accent/40 opacity-75" />
                <span className="relative inline-flex size-1.5 rounded-full bg-accent" />
              </span>
              {badge}
            </Badge>

            <h1 className="font-display mb-2 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl lg:leading-[1.05]">
              <span className="mb-1 block h-[1.15em] overflow-hidden">
                <GreetingWord />
              </span>
              I&apos;m {name}
            </h1>

            <p className="text-foreground text-xl font-medium sm:text-2xl lg:text-3xl">
              {role}
            </p>

            <p className="text-muted text-sm tracking-wide">{subtitle}</p>

            <p className="text-muted mb-8 max-w-2xl text-base">{intro}</p>

            <div className="flex flex-wrap items-center gap-2.5 pt-2">
              <Button
                variant="outline"
                className="hover:bg-surface-raised h-11 rounded-full px-4 text-base hover:text-foreground"
                asChild
              >
                <a href={workHref}>View work</a>
              </Button>

              <Button
                variant="outline"
                className="group hover:bg-card bg-card h-11 gap-2.5 rounded-full pr-4! pl-4! text-base shadow-sm transition-[padding] duration-300 hover:pl-2!"
                asChild
              >
                <a href={contactHref}>
                  <span className="bg-primary relative flex size-2.5 items-center justify-center overflow-hidden rounded-full transition-all duration-300 group-hover:size-6.5">
                    <ArrowRightIcon className="text-primary-foreground absolute size-4.5 -translate-x-3 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                  </span>
                  Let&apos;s connect
                </a>
              </Button>
            </div>

            <ProfileImage
              alt={imageAlt}
              aspect="portrait"
              className="mx-auto mt-10 w-full max-w-80 lg:hidden"
              priority
              src={imageSrc}
            />
          </div>
        </div>
      </div>

      <IdCard
        className="mx-auto mt-8 aspect-4/5 w-full max-w-80 max-lg:hidden lg:absolute lg:-top-16 lg:right-0 lg:left-0 lg:z-10 lg:mt-0 lg:aspect-auto lg:h-182 lg:max-w-none"
        frontImage={imageSrc}
      />

      <div className="relative mx-auto mt-6 mb-10 w-full max-w-6xl">
        <p className="sr-only">
          Technologies: {stack.map((item) => item.name).join(", ")}
        </p>
        <div className="from-background pointer-events-none absolute inset-y-0 left-0 z-1 w-16 bg-linear-to-r to-transparent sm:w-35" />
        <div className="from-background pointer-events-none absolute inset-y-0 right-0 z-1 w-16 bg-linear-to-l to-transparent sm:w-35" />
        <div className="mx-auto w-full overflow-hidden">
          <Marquee aria-hidden="true" duration={25} gap={2} pauseOnHover>
            {stack.map((item) => (
              <div
                key={item.name}
                className="bg-surface-raised border-border text-muted flex size-16 shrink-0 items-center justify-center rounded-md border"
              >
                <svg
                  aria-hidden="true"
                  className="size-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d={item.path} />
                </svg>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
