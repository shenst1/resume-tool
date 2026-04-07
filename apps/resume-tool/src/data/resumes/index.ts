import type { Resume } from "@/types/resume";
import { assuredResume } from "./assured";
import { builderResume } from "./builder";
import { mercuryResume } from "./mercury";
import { rampResume } from "./ramp";

export const resumes: Record<string, Resume> = {
  assured: assuredResume,
  builder: builderResume,
  mercury: mercuryResume,
  ramp: rampResume,
};

export function getResume(slug: string): Resume | undefined {
  return resumes[slug];
}

export function getAllResumeSlugs(): string[] {
  return Object.keys(resumes);
}
