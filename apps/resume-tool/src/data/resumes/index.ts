import type { Resume } from "@/types/resume";
import { afreshProductionPlanningResume } from "./afresh-production-planning";
import { alteryxResume } from "./alteryx";
import { assuredResume } from "./assured";
import { baseResume } from "./base";
import { bestowResume } from "./bestow";
import { bluehostResume } from "./bluehost";
import { builderResume } from "./builder";
import { curologyResume } from "./curology";
import { customerIoResume } from "./customer-io";
import { cutPlusDryResume } from "./cut-plus-dry";
import { dagsterPlatformResume } from "./dagster-platform";
import { earninSeniorFullstackResume } from "./earnin-senior-fullstack";
import { finiteStateResume } from "./finite-state";
import { foodsmartStaffBackendResume } from "./foodsmart-staff-backend";
import { groundfloorResume } from "./groundfloor";
import { higharcResume } from "./higharc";
import { hopperHtsResume } from "./hopper-hts";
import { lootLabsResume } from "./loot-labs";
import { magnetGraykeyResume } from "./magnet-graykey";
import { mercuryResume } from "./mercury";
import { mixpanelProactiveInsightsResume } from "./mixpanel-proactive-insights";
import { neotaxSeniorFullstackResume } from "./neotax-senior-fullstack";
import { pandadocResume } from "./pandadoc";
import { postscriptResume } from "./postscript";
import { rampResume } from "./ramp";
import { rentanaResume } from "./rentana";
import { renewedVisionResume } from "./renewed-vision";
import { reflowResume } from "./reflow";
import { rithumResume } from "./rithum";
import { sailpointLeadFullstackResume } from "./sailpoint-lead-fullstack";
import { subwayResume } from "./subway";
import { tennaResume } from "./tenna";
import { tripleseatPrincipalUiResume } from "./tripleseat-principal-ui";
import { twineResume } from "./twine";
import { vannevarResume } from "./vannevar";
import { vantaResume } from "./vanta";
import { veevaFrontEndResume } from "./veeva-front-end";
import { vercelActivationResume } from "./vercel-activation";
import { whatnotPaymentsTreasuryResume } from "./whatnot-payments-treasury";

export const resumes: Record<string, Resume> = {
  base: baseResume,
  "afresh-production-planning": afreshProductionPlanningResume,
  alteryx: alteryxResume,
  assured: assuredResume,
  bestow: bestowResume,
  bluehost: bluehostResume,
  builder: builderResume,
  curology: curologyResume,
  "customer-io": customerIoResume,
  "cut-plus-dry": cutPlusDryResume,
  "dagster-platform": dagsterPlatformResume,
  "earnin-senior-fullstack": earninSeniorFullstackResume,
  "finite-state": finiteStateResume,
  "foodsmart-staff-backend": foodsmartStaffBackendResume,
  groundfloor: groundfloorResume,
  higharc: higharcResume,
  "hopper-hts": hopperHtsResume,
  "loot-labs": lootLabsResume,
  "magnet-graykey": magnetGraykeyResume,
  mercury: mercuryResume,
  "mixpanel-proactive-insights": mixpanelProactiveInsightsResume,
  "neotax-senior-fullstack": neotaxSeniorFullstackResume,
  pandadoc: pandadocResume,
  postscript: postscriptResume,
  ramp: rampResume,
  rentana: rentanaResume,
  "renewed-vision": renewedVisionResume,
  reflow: reflowResume,
  rithum: rithumResume,
  "sailpoint-lead-fullstack": sailpointLeadFullstackResume,
  subway: subwayResume,
  tenna: tennaResume,
  "tripleseat-principal-ui": tripleseatPrincipalUiResume,
  twine: twineResume,
  vannevar: vannevarResume,
  vanta: vantaResume,
  "veeva-front-end": veevaFrontEndResume,
  "vercel-activation": vercelActivationResume,
  "whatnot-payments-treasury": whatnotPaymentsTreasuryResume,
};

export function getResume(slug: string): Resume | undefined {
  return resumes[slug];
}

export function getAllResumeSlugs(): string[] {
  return Object.keys(resumes);
}
