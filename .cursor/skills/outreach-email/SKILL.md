---
name: outreach-email
description: >-
  Drafts outreach for job applications: default is a short, human note to a
  technical recruiter after applying in the portal (résumé attached). Also covers
  warm referral or hiring-manager email when the user has a real connection. Use
  when the user asks for recruiter email copy alongside a tailored resume or
  post-apply follow-up.
---

# Outreach email

## Default: technical recruiter (post-apply)

Use this for **`outreachEmail` on tailored resumes** in the resume workflow and for `prospects/<Folder>/outreach-email.md`.

**When:** User has already applied on the company job portal and is emailing or LinkedIn-messaging a **technical recruiter** to stand out as a human (not a referral, not a loose connection).

**Assumptions:**

- Same tailored résumé PDF is **attached** to the email (already in the ATS from the portal).
- No invented relationship (“we met at…”, “referred by…”).
- Recipient may not be the right contact; one soft line is enough (“if you’re the right person to talk to”).

**Tone:** Short, direct, lightly informal. A touch of humor is OK (e.g. “not a robot”) if it stays respectful. Goal is human signal, not a second cover letter or stack dump.

**Typography:** Follow **`/.cursor/rules.md`** (e.g. avoid em dashes).

### Template (adapt role and company per posting)

**Label (in resume app):** `Technical recruiter (after applying; personalize [First name])`

**Subject:**

- `[Role title] application / Andrew Shenstone`
- `Applied for [Role title] at [Company] / Andrew Shenstone`

**Body:**

```text
Hey [First name],

I recently applied for [Role title] at [Company] through your job portal. Same resume attached here.

I'm writing to let you know ⛔️🤖 I'm not a robot and I'm genuinely interested in whether I'm the right fit. I applied because I think my background fits the role, and I'd love to get a conversation started if you're the right person to talk to.

Andrew
```

**Optional (use sparingly):** One sentence of honest fit only if it stays conversational (e.g. “Rails and React are where I’ve shipped most.”). Do not mirror the job description in bullets.

**Sign-off:** First name only (`Andrew`) unless the user requests full signature and contact block.

### Anti-patterns (recruiter post-apply)

- Long fit paragraphs or résumé bullets in the email body.
- “Happy to share my resume” when they already applied and attached it.
- Loose-connection framing (“hope this is okay as a LinkedIn connection”).
- Fabricated referrals or overstated warmth.
- Multiple em dashes or corporate hype.

---

## Alternate: warm path (referral or known contact)

Use when the user has a **real** connection: referral, prior interview in household, met at event, or direct email from someone they know.

**Tone:** Direct, warm, professional; short paragraphs; no hype.

**Structure:**

1. Greeting + how they got this email (specific, truthful).
2. Interest: role + company, one line.
3. Fit: 2–4 sentences on strongest overlaps; honest gaps if relevant.
4. Ask: résumé attached and/or short call; thanks.

**Subject patterns:**

- `Andrew Shenstone / [Role title] ([context])`
- `[Role title] application - Andrew Shenstone`

**Sign-off:** Use `contact` from `apps/resume-tool/src/data/base-profile.ts` when full signature is appropriate.

**Optional artifact:** Save as `prospects/<Folder>/recruiter-email.md` when distinct from the default `outreach-email.md` (only when user asks).

---

## Information to confirm or infer

Ask only if blocking; otherwise use `[brackets]`.

| Piece | Notes |
|-------|--------|
| Recipient name | `[First name]` in template |
| Company | Match careers posting |
| Role title | Exact title from posting |
| Attachment | Same PDF as portal application |
