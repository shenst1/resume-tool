import type { Resume } from "@/types/resume";
import { alteryxResume } from "./alteryx";
import { assuredResume } from "./assured";
import { baseResume } from "./base";
import { bestowResume } from "./bestow";
import { bluehostResume } from "./bluehost";
import { builderResume } from "./builder";
import { curologyResume } from "./curology";
import { customerIoResume } from "./customer-io";
import { dagsterPlatformResume } from "./dagster-platform";
import { finiteStateResume } from "./finite-state";
import { groundfloorResume } from "./groundfloor";
import { hopperHtsResume } from "./hopper-hts";
import { lootLabsResume } from "./loot-labs";
import { mercuryResume } from "./mercury";
import { mixpanelProactiveInsightsResume } from "./mixpanel-proactive-insights";
import { pandadocResume } from "./pandadoc";
import { postscriptResume } from "./postscript";
import { rampResume } from "./ramp";
import { rentanaResume } from "./rentana";
import { renewedVisionResume } from "./renewed-vision";
import { reflowResume } from "./reflow";
import { rithumResume } from "./rithum";
import { subwayResume } from "./subway";
import { tennaResume } from "./tenna";
import { vannevarResume } from "./vannevar";
import { vantaResume } from "./vanta";
import { vercelActivationResume } from "./vercel-activation";
import { whatnotPaymentsTreasuryResume } from "./whatnot-payments-treasury";

export const resumes: Record<string, Resume> = {
  base: baseResume,
  alteryx: alteryxResume,
  assured: assuredResume,
  bestow: bestowResume,
  bluehost: bluehostResume,
  builder: builderResume,
  curology: curologyResume,
  "customer-io": customerIoResume,
  "dagster-platform": dagsterPlatformResume,
  "finite-state": finiteStateResume,
  groundfloor: groundfloorResume,
  "hopper-hts": hopperHtsResume,
  "loot-labs": lootLabsResume,
  mercury: mercuryResume,
  "mixpanel-proactive-insights": mixpanelProactiveInsightsResume,
  pandadoc: pandadocResume,
  postscript: postscriptResume,
  ramp: rampResume,
  rentana: rentanaResume,
  "renewed-vision": renewedVisionResume,
  reflow: reflowResume,
  rithum: rithumResume,
  subway: subwayResume,
  tenna: tennaResume,
  vannevar: vannevarResume,
  vanta: vantaResume,
  "vercel-activation": vercelActivationResume,
  "whatnot-payments-treasury": whatnotPaymentsTreasuryResume,
};

export function getResume(slug: string): Resume | undefined {
  return resumes[slug];
}

export function getAllResumeSlugs(): string[] {
  return Object.keys(resumes);
}
