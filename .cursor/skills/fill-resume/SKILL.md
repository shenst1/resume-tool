---
name: fill-resume
description: >-
  Fills job-application forms (especially Greenhouse and similar ATS pages) using
  the user’s saved defaults plus contact data from the profile-tools resume app
  when applicable. Use when the user asks to fill out, pre-fill, or submit a job
  application, or to apply the standard eligibility/source/compensation answers.
---

# Fill job applications (resume defaults)

## Verbatim profile (user-supplied)

Use this block as the source of truth for **intent**; where spelling differs from what ATS fields expect, apply the **Normalized values** subsection when actually typing into forms.

```
My current location is Bend, Oregon
Yes, legally authorized 
No, do not require sponsorshipo
Aligned iwth posted range
I'm working on LInkedIn right now, assume linnked in.
Not a veteran
```

## Normalized values for forms

| Topic | Value to enter |
|--------|----------------|
| **Location (city)** | **Bend, Oregon** — when the control is an autocomplete (e.g. Greenhouse), type to search and select **Bend, Oregon, United States** if that option appears. |
| **Legally authorized to work in the United States** | **Yes** |
| **Require work sponsorship (now or future)** | **No** |
| **Live in the United States** | **Yes** (consistent with Bend, Oregon) |
| **Compensation expectations** (free text) | **Aligned with posted range.** |
| **How did you hear about this opportunity?** | **LinkedIn** unless the user specifies otherwise (user is actively searching on LinkedIn). |
| **If Other, specify** (when required) | **N/A** |
| **Veteran status** (Greenhouse-style options) | **I am not a protected veteran** |

## Contact & resume data (`profile-tools`)

When working in this repo, pull **name, phone, email, links** from `apps/resume-tool/src/data/base-profile.ts` unless the user overrides:

- **First / Last name** — split from `contact.name` (default split: **Andrew** / **Shenstone** for *Andrew W. Shenstone*; ask if legal first name differs).
- **Phone** — use E.164 or the site’s expected format; Greenhouse often pairs **Country** (United States +1) with a phone field (may want digits only without duplicate `+1`).
- **LinkedIn** — from `contact.links` (full **https** URL).

Tailored resume PDFs: user exports from `/jobs/<slug>` and may attach manually; the agent generally **cannot** attach local files through the browser MCP unless the environment supports it—tell the user to **Attach** the PDF if upload fails.

## Greenhouse / custom comboboxes

- Many fields are **not** native `<select>` elements. Open the flyout, then **`browser_click`** the **option** row (e.g. **Yes** / **No** / **LinkedIn**).
- **Location** is often typeahead: **`browser_type`** with **`slowly: true`**, wait for options, then click the correct city row.
- Keep **`browser_snapshot`** fresh after each dropdown change; **refs** churn.
- Use short **`element`** labels for clicks if long descriptions hit stale-reference quirks (e.g. element: **Yes**, **No**, **LinkedIn**).

## Checklist before submit

- Required uploads (**Resume/CV**) present.
- Eligibility answers match the user’s immigration reality (never invent **Yes** on authorization/sponsorship).
- User reviews **voluntary self-ID** (gender, ethnicity, disability) unless they explicitly asked the agent to set specific choices.
- User clicks **Submit** after a final read (agent does not submit without explicit confirmation if the user previously asked only to “fill”).
