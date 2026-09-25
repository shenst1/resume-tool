import {
  siGraphql,
  siMongodb,
  siNextdotjs,
  siNodedotjs,
  siPostgresql,
  siReact,
  siRubyonrails,
  siStripe,
  siTailwindcss,
  siTypescript,
} from "simple-icons";
import HeroSection from "@/components/shadcn-studio/blocks/hero-section-44/hero-section-44";
import { profile } from "@/data/profile";

const stack = [
  siTypescript,
  siReact,
  siNextdotjs,
  siNodedotjs,
  siPostgresql,
  siGraphql,
  siRubyonrails,
  siTailwindcss,
  siMongodb,
  siStripe,
].map((icon) => ({ name: icon.title, path: icon.path }));

export function Hero() {
  return (
    <HeroSection
      badge={profile.location}
      contactHref={`mailto:${profile.email}`}
      imageAlt={profile.images.headshot.alt}
      imageSrc={profile.images.headshot.src}
      intro={profile.hero.intro}
      name={profile.name.split(" ")[0] ?? profile.name}
      role={profile.title}
      stack={stack}
      subtitle={profile.subtitle}
      workHref="#work"
    />
  );
}
