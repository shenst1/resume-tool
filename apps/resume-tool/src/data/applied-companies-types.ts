export type PotentialUrl = {
  label: string;
  url: string;
};

export type AppliedCompany = {
  name: string;
  careersPage: string | null;
  linkedInCompanyPage: string | null;
  notes?: string;
  /** Actual ATS / job-board listing page when the marketing careers page is empty or JS-only. */
  openRolesPage?: string | null;
  /** Roles that look like a product / fullstack / frontend fit. Not exhaustive. */
  potentialUrls?: PotentialUrl[];
  /** Navigation caveats. Do not treat a missing scrape as “no jobs.” */
  rolesCheckNote?: string;
};

export type AppliedCompaniesFile = {
  generatedAt?: string;
  count: number;
  companies: AppliedCompany[];
  targetCriteria?: {
    companySize?: string;
    preferredFrontend?: string;
    note?: string;
  };
};
