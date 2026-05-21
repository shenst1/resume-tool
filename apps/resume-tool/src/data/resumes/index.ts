import type { Resume } from "@/types/resume";
import { afreshProductionPlanningResume } from "./afresh-production-planning";
import { algoliaGrowthFullstackResume } from "./algolia-growth-fullstack";
import { alteryxResume } from "./alteryx";
import { assuredResume } from "./assured";
import { attentiveIdentityResume } from "./attentive-identity";
import { baseResume } from "./base";
import { bestowResume } from "./bestow";
import { bluehostResume } from "./bluehost";
import { builderResume } from "./builder";
import { closeFrontendResume } from "./close-frontend";
import { ouraSeniorFullstackCommerceResume } from "./oura-senior-fullstack-commerce";
import { ownerFullstackResume } from "./owner-fullstack";
import { orbisProductFrontendResume } from "./orbis-product-frontend";
import { orumSeniorFullstackResume } from "./orum-senior-fullstack";
import { curologyResume } from "./curology";
import { customerIoResume } from "./customer-io";
import { corelightSeniorUiEngineerResume } from "./corelight-senior-ui-engineer";
import { cutPlusDryResume } from "./cut-plus-dry";
import { dagsterPlatformResume } from "./dagster-platform";
import { dutchieStaffFrontendResume } from "./dutchie-staff-frontend";
import { earninSeniorFullstackResume } from "./earnin-senior-fullstack";
import { engineSeniorFrontendResume } from "./engine-senior-frontend";
import { finiteStateResume } from "./finite-state";
import { foodsmartStaffBackendResume } from "./foodsmart-staff-backend";
import { groundfloorResume } from "./groundfloor";
import { headwayStaffPayerResume } from "./headway-staff-payer";
import { higharcResume } from "./higharc";
import { hopperHtsResume } from "./hopper-hts";
import { imaginePediatricsSeniorFullstackResume } from "./imagine-pediatrics-senior-fullstack";
import { lootLabsResume } from "./loot-labs";
import { magnetGraykeyResume } from "./magnet-graykey";
import { mercuryResume } from "./mercury";
import { mixpanelProactiveInsightsResume } from "./mixpanel-proactive-insights";
import { neotaxSeniorFullstackResume } from "./neotax-senior-fullstack";
import { nourishSeniorFullstackResume } from "./nourish-senior-fullstack";
import { pandadocResume } from "./pandadoc";
import { postscriptResume } from "./postscript";
import { pushpressSeniorFintechResume } from "./pushpress-senior-fintech";
import { rampResume } from "./ramp";
import { rentanaResume } from "./rentana";
import { renewedVisionResume } from "./renewed-vision";
import { reflowResume } from "./reflow";
import { regimenproSeniorFullstackResume } from "./regimenpro-senior-fullstack";
import { rithumResume } from "./rithum";
import { sailpointLeadFullstackResume } from "./sailpoint-lead-fullstack";
import { subwayResume } from "./subway";
import { teleportSeniorFullstackResume } from "./teleport-senior-fullstack";
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
  "algolia-growth-fullstack": algoliaGrowthFullstackResume,
  alteryx: alteryxResume,
  assured: assuredResume,
  "attentive-identity": attentiveIdentityResume,
  bestow: bestowResume,
  bluehost: bluehostResume,
  builder: builderResume,
  "close-frontend": closeFrontendResume,
  "oura-senior-fullstack-commerce": ouraSeniorFullstackCommerceResume,
  "owner-fullstack": ownerFullstackResume,
  "orbis-product-frontend": orbisProductFrontendResume,
  "orum-senior-fullstack": orumSeniorFullstackResume,
  curology: curologyResume,
  "customer-io": customerIoResume,
  "corelight-senior-ui-engineer": corelightSeniorUiEngineerResume,
  "cut-plus-dry": cutPlusDryResume,
  "dagster-platform": dagsterPlatformResume,
  "dutchie-staff-frontend": dutchieStaffFrontendResume,
  "earnin-senior-fullstack": earninSeniorFullstackResume,
  "engine-senior-frontend": engineSeniorFrontendResume,
  "finite-state": finiteStateResume,
  "foodsmart-staff-backend": foodsmartStaffBackendResume,
  groundfloor: groundfloorResume,
  "headway-staff-payer": headwayStaffPayerResume,
  higharc: higharcResume,
  "hopper-hts": hopperHtsResume,
  "imagine-pediatrics-senior-fullstack": imaginePediatricsSeniorFullstackResume,
  "loot-labs": lootLabsResume,
  "magnet-graykey": magnetGraykeyResume,
  mercury: mercuryResume,
  "mixpanel-proactive-insights": mixpanelProactiveInsightsResume,
  "neotax-senior-fullstack": neotaxSeniorFullstackResume,
  "nourish-senior-fullstack": nourishSeniorFullstackResume,
  pandadoc: pandadocResume,
  postscript: postscriptResume,
  "pushpress-senior-fintech": pushpressSeniorFintechResume,
  ramp: rampResume,
  rentana: rentanaResume,
  "renewed-vision": renewedVisionResume,
  reflow: reflowResume,
  "regimenpro-senior-fullstack": regimenproSeniorFullstackResume,
  rithum: rithumResume,
  "sailpoint-lead-fullstack": sailpointLeadFullstackResume,
  subway: subwayResume,
  "teleport-senior-fullstack": teleportSeniorFullstackResume,
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
