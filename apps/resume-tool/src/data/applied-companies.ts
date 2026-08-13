import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import type { AppliedCompaniesFile } from "@/data/applied-companies-types";

function resolveAppliedCompaniesPath(): string {
  const candidates = [
    join(process.cwd(), "..", "..", "applied-companies.json"),
    join(process.cwd(), "applied-companies.json"),
  ];
  for (const filePath of candidates) {
    if (existsSync(filePath)) return filePath;
  }
  throw new Error(
    "applied-companies.json not found. Expected at the profile-tools repo root.",
  );
}

export function getAppliedCompaniesFile(): AppliedCompaniesFile {
  const raw = readFileSync(resolveAppliedCompaniesPath(), "utf8");
  return JSON.parse(raw) as AppliedCompaniesFile;
}
