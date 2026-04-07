import type { Resume } from "@/types/resume";
import { assuredResume } from "./assured";
import { baseResume } from "./base";
import { builderResume } from "./builder";
import { customerIoResume } from "./customer-io";
import { hopperHtsResume } from "./hopper-hts";
import { mercuryResume } from "./mercury";
import { postscriptResume } from "./postscript";
import { rampResume } from "./ramp";

export const resumes: Record<string, Resume> = {
  base: baseResume,
  assured: assuredResume,
  builder: builderResume,
  "customer-io": customerIoResume,
  "hopper-hts": hopperHtsResume,
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
