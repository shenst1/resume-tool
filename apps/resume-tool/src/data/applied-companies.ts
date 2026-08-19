import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import type { AppliedCompaniesFile } from "@/data/applied-companies-types";

const EMPTY_FILE: AppliedCompaniesFile = {
  count: 0,
  companies: [],
};

function resolveAppliedCompaniesPath(): string | null {
  const candidates = [
    join(process.cwd(), "..", "..", "applied-companies.json"),
    join(process.cwd(), "applied-companies.json"),
  ];
  for (const filePath of candidates) {
    if (existsSync(filePath)) return filePath;
  }
  return null;
}

export function getAppliedCompaniesFile(): AppliedCompaniesFile {
  const filePath = resolveAppliedCompaniesPath();
  if (!filePath) return EMPTY_FILE;
  const raw = readFileSync(filePath, "utf8");
  return JSON.parse(raw) as AppliedCompaniesFile;
}
