import type { Resume } from "@/types/resume";
import { assuredResume } from "./assured";
import { baseResume } from "./base";
import { builderResume } from "./builder";
import { mercuryResume } from "./mercury";
import { postscriptResume } from "./postscript";
import { rampResume } from "./ramp";

export const resumes: Record<string, Resume> = {
  base: baseResume,
  assured: assuredResume,
  builder: builderResume,
  mercury: mercuryResume,
  postscript: postscriptResume,
  ramp: rampResume,
};

export function getResume(slug: string): Resume | undefined {
  return resumes[slug];
}

export function getAllResumeSlugs(): string[] {
  return Object.keys(resumes);
}
