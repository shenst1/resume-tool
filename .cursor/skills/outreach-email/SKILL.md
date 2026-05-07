---
name: outreach-email
description: >-
  Drafts concise recruiter or hiring-contact outreach when the user has a warm
  path (referral, prior interview in household, shared email) or at least the
  recipient’s email. Use when the user asks for an intro email, cold outreach to
  someone named at a company, or application email copy alongside a tailored resume.
---

# Warm outreach email (known contact or email)

## When to use

Apply when the user is emailing **someone specific** at a target company (recruiter, HM, employee) and wants copy they can paste into Gmail or LinkedIn. If there is **only** a job board apply flow with no person, use a shorter “cover note” variant without pretending there is a referral.

## Outcomes

1. **Draft email** in chat: subject line options, body, signature placeholders only where data is missing.
2. **Honest framing** of fit and gaps (especially must-haves they may not meet); turn deal-breakers into a **respectful screen question** when appropriate.
3. **Optional artifact**: If `prospects/<Company>/` exists or the user is using this repo’s job workflow, offer to save the final draft as `prospects/<Folder>/recruiter-email.md` (overwrite only when asked).

## Style and constraints

- **Tone**: Direct, warm, professional; short paragraphs; no hype.
- **Typography**: Follow **`/.cursor/rules.md`** for email-specific preferences (e.g. avoiding em dashes). Use commas, parentheses, colons, or new sentences instead unless the rules say otherwise.
- **Facts**: Do not invent how the user got the address, titles, or relationship. Use only what the user (or `base-profile` / tailored resume) supplies.
- **ASCII**: Prefer plain hyphen or “and” in subjects if the user wants maximal compatibility across clients.

## Information to confirm or infer

Ask only if blocking; otherwise draft with `[brackets]` for missing items.

| Piece | Notes |
|-------|--------|
| Recipient name | Correct spelling for greeting |
| Company | Legal vs consumer brand if relevant |
| Role title | Match careers posting |
| Path to contact | Referral name + relationship, or “found email via…” |
| Attachments | e.g. tailored résumé PDF |
| Screen question | One clear yes/no or “non-starter?” question on gaps |

## Structure (template)

**Subject** (pick one pattern; avoid em dashes per **`/.cursor/rules.md`**):

- `Andrew Shenstone / [Role title] ([context])`
- `[Role title] application - Andrew Shenstone`

**Body**:

1. **Greeting** + one sentence on **how they got this email** (specific person or context).
2. **Interest**: role + company, one tight line.
3. **Fit**: 2–4 sentences: strongest overlaps with posting (stack, domain, scale). Mention transferable stacks when true (e.g. Ruby → Python) without overstating.
4. **Gaps** *(if any)*: plain admission + either readiness to ramp or one **direct question** about whether the gap is disqualifying.
5. **Ask**: résumé attached and/or short call; thanks.

**Sign-off**: Use `contact` from `apps/resume-tool/src/data/base-profile.ts` when this repo is in context.

## Anti-patterns

- Fabricated referrals or overstating connection depth.
- Long bullet mirrors of the job description.
- Multiple em dashes or fancy punctuation when **`/.cursor/rules.md`** disallows them.
- Passive endings with no clear next step.
