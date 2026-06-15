#!/usr/bin/env node
/**
 * Export a resume page to PDF via Playwright (print media).
 * Requires `pnpm dev` running in apps/resume-tool (default http://localhost:3000).
 *
 * Usage:
 *   pnpm export-pdf --slug motley-fool-senior-software-engineer-nextjs --prospect MotleyFool
 *   pnpm export-pdf --slug ramp --prospect Ramp --base-url http://localhost:3001
 */

import { mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const RESUME_TOOL_ROOT = path.resolve(__dirname, "..");
const REPO_ROOT = path.resolve(RESUME_TOOL_ROOT, "../..");

function parseArgs(argv) {
  const args = { slug: null, prospect: null, baseUrl: null };
  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];
    if (arg === "--slug" && argv[i + 1]) {
      args.slug = argv[++i];
    } else if (arg.startsWith("--slug=")) {
      args.slug = arg.slice("--slug=".length);
    } else if (arg === "--prospect" && argv[i + 1]) {
      args.prospect = argv[++i];
    } else if (arg.startsWith("--prospect=")) {
      args.prospect = arg.slice("--prospect=".length);
    } else if (arg === "--base-url" && argv[i + 1]) {
      args.baseUrl = argv[++i];
    } else if (arg.startsWith("--base-url=")) {
      args.baseUrl = arg.slice("--base-url=".length);
    }
  }
  return args;
}

function usage() {
  console.error(`Usage: pnpm export-pdf --slug <slug> --prospect <FolderName> [--base-url http://localhost:3000]

Requires the resume-tool dev server (pnpm dev) on the base URL.`);
}

function sanitizePdfFilename(title) {
  const base = title
    .replace(/[\\/:*?"<>|]/g, "")
    .replace(/\s+/g, " ")
    .trim();
  if (!base) {
    throw new Error("Could not derive PDF filename from page title");
  }
  return `${base}.pdf`;
}

async function preflight(url) {
  try {
    const res = await fetch(url, { redirect: "follow" });
    if (!res.ok) {
      throw new Error(`HTTP ${res.status}`);
    }
    return true;
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    throw new Error(
      `Cannot reach ${url} (${message}). Start the dev server first:\n  cd apps/resume-tool && pnpm dev`
    );
  }
}

async function main() {
  const { slug, prospect, baseUrl: baseUrlArg } = parseArgs(process.argv.slice(2));

  if (!slug || !prospect) {
    usage();
    process.exit(1);
  }

  const baseUrl = (baseUrlArg ?? process.env.RESUME_BASE_URL ?? "http://localhost:3000").replace(
    /\/$/,
    ""
  );
  const pageUrl = `${baseUrl}/jobs/${slug}`;
  const outDir = path.join(REPO_ROOT, "prospects", prospect, "resumes");

  console.log(`Preflight: ${pageUrl}`);
  await preflight(pageUrl);

  await mkdir(outDir, { recursive: true });

  const browser = await chromium.launch({ headless: true });
  try {
    const context = await browser.newContext({ colorScheme: "light" });
    const page = await context.newPage();

    await page.goto(pageUrl, { waitUntil: "networkidle", timeout: 60_000 });
    await page.waitForSelector(".resume-print", { timeout: 30_000 });
    await page.evaluate(() => document.fonts.ready);

    const pdfFilename = sanitizePdfFilename(await page.title());
    const outPath = path.join(outDir, pdfFilename);

    await page.emulateMedia({ media: "print" });

    await page.pdf({
      path: outPath,
      format: "Letter",
      printBackground: true,
      margin: {
        top: "0.75in",
        right: "0.75in",
        bottom: "0.75in",
        left: "0.75in",
      },
    });

    console.log(`Wrote ${outPath}`);
  } finally {
    await browser.close();
  }
}

main().catch((err) => {
  console.error(err instanceof Error ? err.message : err);
  process.exit(1);
});
