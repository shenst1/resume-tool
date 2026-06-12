import type { Resume } from "@/types/resume";
import { baseResume } from "./base";

/**
 * Copy to `index.ts` and add imports for each tailored resume file you create.
 * Tailored resume modules (`*.ts`) are local-only — see repo `.gitignore`.
 */
export const resumes: Record<string, Resume> = {
  base: baseResume,
};
