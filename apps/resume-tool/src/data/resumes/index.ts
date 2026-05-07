import type { Resume } from "@/types/resume";
import { alteryxResume } from "./alteryx";
import { assuredResume } from "./assured";
import { baseResume } from "./base";
import { builderResume } from "./builder";
import { curologyResume } from "./curology";
import { customerIoResume } from "./customer-io";
import { dagsterPlatformResume } from "./dagster-platform";
import { finiteStateResume } from "./finite-state";
import { groundfloorResume } from "./groundfloor";
import { hopperHtsResume } from "./hopper-hts";
import { mercuryResume } from "./mercury";
import { postscriptResume } from "./postscript";
import { rampResume } from "./ramp";
import { rentanaResume } from "./rentana";
import { renewedVisionResume } from "./renewed-vision";
import { rithumResume } from "./rithum";

export const resumes: Record<string, Resume> = {
  base: baseResume,
  alteryx: alteryxResume,
  assured: assuredResume,
  builder: builderResume,
  curology: curologyResume,
  "customer-io": customerIoResume,
  "dagster-platform": dagsterPlatformResume,
  "finite-state": finiteStateResume,
  groundfloor: groundfloorResume,
  "hopper-hts": hopperHtsResume,
  mercury: mercuryResume,
  postscript: postscriptResume,
  ramp: rampResume,
  rentana: rentanaResume,
  "renewed-vision": renewedVisionResume,
  rithum: rithumResume,
};

export function getResume(slug: string): Resume | undefined {
  return resumes[slug];
}

export function getAllResumeSlugs(): string[] {
  return Object.keys(resumes);
}
