---
name: resume
description: >-
  When the user shares a job posting, researches the company and role, writes
  tailored resume data for the profile-tools resume app, creates a prospects
  folder with job notes and SWOT, and summarizes findings in chat. Use when the
  user pastes or links a job description, asks for a tailored resume for a new
  application, or mentions preparing materials for a specific company or role.
---

# Job post → tailored resume + prospect folder

## Outcomes (deliver every time)

1. **Chat summary** — Short notes on the company, role fit, and anything uncertain (flag assumptions).
2. **Resume in the app** — New slug under `apps/resume-tool`, registered in `src/data/resumes/index.ts`, includes **`createdAt`** (see below), `pnpm run build` passes.
3. **Prospect folder** — `prospects/<FolderName>/` with at least `job.md` and `swot.md`; `resumes/` present for the user’s PDF later.
4. **No PDF generation** — User prints from the browser (Cmd/Ctrl+P → Save as PDF) after review.

## Research

- Use **web search** (and the company’s own site/careers page) for product, funding stage, stack, recent news, and mission. Prefer **primary sources**; label **inference** when the posting is the only source.
- If the user only pasted text without a URL, work from that and note gaps.
- Do **not** invent metrics; use qualitative alignment from `base-profile` experience.

## Folder and slug naming

- **`prospects/<FolderName>/`** — Human-readable company (or team) name: e.g. `Ramp`, `Assured`, `Builder.io`. Avoid spaces in folder names when possible; use `Builder.io`-style if that matches existing repo patterns.
- **Resume slug** — URL-safe, lowercase, hyphenated: `ramp`, `stripe-payments`, `acme-corp`. Must match the filename `src/data/resumes/<slug>.ts` and route `/jobs/<slug>`.

## Resume implementation (`apps/resume-tool`)

1. **Add** `src/data/resumes/<slug>.ts` exporting `<camelCase>Resume: Resume` with:
   - `slug`, **`createdAt`** — ISO calendar date **`YYYY-MM-DD`** for the day the tailored resume was added (use **today’s date** when creating it). This drives the home page (**Recently added** is the default tab): entries **without** `createdAt` are treated as older than five days and appear only under **Library**; with `createdAt`, the resume appears under **Recently added** (first five days) until that window passes, then **Library**. Omit only when intentionally backfilling legacy resumes (same behavior as missing).
   - `pageTitle` (e.g. `Shenstone, Andrew - Application for <Role> @ <Company>`),
   - `target: { company, role, teamOrFocus? }`,
   - `contact` from `@/data/base-profile`,
   - **`about`** — **Scannable SUMMARY** recruiters can skim in ~15 seconds: aim for **~80–140 words** in **2–3 short paragraphs**, separated by a **blank line** in the string so the renderer prints distinct blocks; **lead with role fit**, then proof, then honest gaps/ramp—defer proof points to EXPERIENCE. Write in **plain, human language** (what you shipped, what you have not used yet, why transfer still applies)—**no insider mash-ups** or unexplained shorthand (e.g. say “I have not used Contentful in production; I have done the same structured-content work with DatoCMS,” not invented phrases like “logo ramp”).
   - **`skills`** — Start from `baseSkills`; add/reorder categories or items to mirror the posting (e.g. payments, CMS, AI). Keep honest: don’t invent skills.
   - **`experience`** — Import from `base-profile` unless a role-specific tweak is needed;
   - **`companyReferences`** — From `base-profile` unless a one-line tweak helps.
   - **`education`** — Use `educationFinanceScu` from `@/data/base-profile` when fintech/business relevance is useful (optional otherwise).
2. **Register** in `src/data/resumes/index.ts` (import + add to `resumes` object).
3. **Run** `pnpm run build` from `apps/resume-tool` and fix failures before finishing.

See repo root `README.md` § Adding a New Resume for the `Resume` type shape.

## Prospect folder files

### `prospects/<FolderName>/job.md`

Template:

```markdown
# <Company> — <Role title>

- **Posting:** [title](URL) *(or paste key excerpt if no URL)*
- **Product / team:** …
- **Location / remote:** …
- **Stack / keywords from post:** …
- **Comp** *(if listed):* …

## Research notes (agent)

- **What they do:** …
- **Why this role exists / problems:** …
- **Fit angles (honest):** …
- **Sources:** bullets with links

## Tailored resume

- **Local preview:** `http://localhost:3000/jobs/<slug>`
- **PDF:** User saves via Print → Save as PDF into `prospects/<FolderName>/resumes/`.
```

### `prospects/<FolderName>/swot.md`

Use clear, **plain language** (no unexplained jargon). Ground in research + posting; separate **facts** from **opinion**.

Template:

```markdown
# SWOT — <Company> (<Role>)

## Strengths
- …

## Weaknesses
- …

## Opportunities
- …

## Threats
- …

## Notes
- Assumptions or items to verify in interview.
```

### `resumes/`

- Ensure `prospects/<FolderName>/resumes/` exists (add `.gitkeep` if the repo uses empty dirs for this).

## Order of operations

1. Parse posting + clarify company name and slug.
2. Research (web + posting).
3. Draft tailored `about` + skills; implement new resume file (**include `createdAt: "YYYY-MM-DD"`**) + `index.ts`.
4. Create `prospects/.../job.md` + `swot.md` + `resumes/`.
5. Run `pnpm run build` in `apps/resume-tool`.
6. Reply in chat with **brief** company/role notes and **where to preview** (`/jobs/<slug>`); remind user to export PDF when satisfied.

## Anti-patterns

- Claiming **direct reports** or **official** titles the user did not state.
- **Skipping `createdAt`** on **new** tailored resumes — always set it when adding an application today so the index tabs stay accurate.
- **Duplicate** `base` resume in the home page list — new slugs appear in the Resumes section (Library / Recently added tabs); do not special-case unless the user asks.
- Creating **marketing fluff** or unverifiable SWOT claims; prefer “unknown / verify in interview.”
- **Opaque jargon in `about` or skill lines** — If a phrase needs a second read, rewrite it. Prefer full sentences over hiring slang or brand shorthand unless the term is standard (e.g. “SEO,” “CMS”).