export type AppliedCompany = {
  name: string;
  careersPage: string | null;
  linkedInCompanyPage: string | null;
  notes?: string;
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
