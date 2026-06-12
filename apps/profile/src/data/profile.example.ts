/** Copy to `profile.ts` and fill in your details. */

export type Link = {
  label: string;
  href: string;
};

export type ProfileImageRef = {
  src: string;
  alt: string;
  fit?: "cover" | "contain";
};

export type Project = {
  name: string;
  tagline: string;
  description: string;
  href?: string;
  years: string;
  tags: string[];
  image?: ProfileImageRef;
  logo?: ProfileImageRef;
};

export type ExperienceEntry = {
  title: string;
  company: string;
  period: string;
  summary: string;
  highlights: string[];
};

export const profile = {
  name: "Your Name",
  legalName: "Your Legal Name",
  title: "Your Title",
  subtitle: "Short tagline",
  location: "City, State",
  email: "you@example.com",
  phone: "000-000-0000",
  links: [
    { label: "LinkedIn", href: "https://linkedin.com/in/you" },
    { label: "GitHub", href: "https://github.com/you" },
  ] satisfies Link[],
  images: {
    headshot: {
      src: "/images/headshot.jpeg",
      alt: "Your headshot",
    },
  } satisfies Record<string, ProfileImageRef>,
  hero: {
    headline: "Your headline—",
    headlineAccent: "accent phrase.",
    intro: "One or two sentences about what you do.",
  },
  about: {
    paragraphs: ["About paragraph one.", "About paragraph two."],
    education: "Degree, School — year",
  },
  metrics: [
    { value: "10+", label: "Years shipping software" },
    { value: "X", label: "Example metric" },
  ],
  projects: [] satisfies Project[],
  experience: [] satisfies ExperienceEntry[],
  skillGroups: [
    {
      label: "Skills",
      items: ["TypeScript", "React", "Next.js"],
    },
  ],
  approach: {
    title: "How I work",
    items: [
      {
        title: "Principle one",
        body: "Short description.",
      },
    ],
  },
};
