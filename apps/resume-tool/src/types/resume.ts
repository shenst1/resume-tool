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
  /** Job/company you're applying to. */
  target: {
    company: string;
    role: string;
    teamOrFocus?: string;
  };
  contact: Contact;
  about: string;
  application: string;
  skills: SkillCategory[];
  experience: ExperienceRole[];
  companyReferences: CompanyReference[];
  /** Optional education section */
  education?: string;
};

