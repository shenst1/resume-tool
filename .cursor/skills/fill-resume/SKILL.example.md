---
name: fill-resume
description: >-
  Fills job-application forms (especially Greenhouse and similar ATS pages) using
  the user’s saved defaults plus contact data from the profile-tools resume app
  when applicable. Use when the user asks to fill out, pre-fill, or submit a job
  application, or to apply the standard eligibility/source/compensation answers.
---

# Fill job applications (resume defaults)

Copy this file to `SKILL.md` and replace placeholders with your real defaults.

## Normalized values for forms

| Topic | Value to enter |
|--------|----------------|
| **Location (city)** | Your city, state |
| **Legally authorized to work in the United States** | Yes / No |
| **Require work sponsorship (now or future)** | Yes / No |
| **Compensation expectations** (free text) | Your preference |
| **How did you hear about this opportunity?** | LinkedIn, etc. |
| **Veteran status** | Your answer |

## Contact & resume data (`profile-tools`)

Pull **name, phone, email, links** from `apps/resume-tool/src/data/base-profile.ts` unless the user overrides.

Tailored resume PDFs: user exports from `/jobs/<slug>` and may attach manually.
