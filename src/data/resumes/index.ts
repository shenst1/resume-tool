import type { Resume } from "@/types/resume";
import { assuredResume } from "./assured";
import { builderResume } from "./builder";
import { mercuryResume } from "./mercury";

export const resumes: Record<string, Resume> = {
  assured: assuredResume,
  builder: builderResume,
  mercury: mercuryResume,
};

export function getResume(slug: string): Resume | undefined {
  return resumes[slug];
}

export function getAllResumeSlugs(): string[] {
  return Object.keys(resumes);
}
