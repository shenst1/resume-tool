export type Link = {
  label: string;
  href: string;
};

export type Contact = {
  name: string;
  phone: string;
  email: string;
  links: Link[];
};

export type SkillCategory = {
  label: string;
  items: string[];
};

export type ExperienceBulletGroup = {
  heading?: string;
  bullets: string[];
};

export type ExperienceRole = {
  title: string;
  company: string;
  start: string;
  end: string;
  groups: ExperienceBulletGroup[];
};

export type CompanyReference = {
  name: string;
  years: string;
  description: string;
  href?: string;
};

export type Resume = {
  /** Stable identifier used for routing. */
  slug: string;
  /** Shown as the big page heading. */
  pageTitle: string;
  /** If set, used for the browser tab title instead of "Last, First - Role @ Company". */
  metadataTitle?: string;
  /** Heading for the summary block (default: SUMMARY). */
  summarySectionTitle?: string;
  /** Job/company you're applying to. */
  target: {
    company: string;
    role: string;
    teamOrFocus?: string;
  };
  contact: Contact;
  /** Single opening narrative (replaces separate About + Application blocks). */
  about: string;
  skills: SkillCategory[];
  experience: ExperienceRole[];
  companyReferences: CompanyReference[];
  /** Optional education section */
  education?: string;
};

