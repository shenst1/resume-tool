---
name: recruiter-message
description: >-
  Drafts a LinkedIn message to a recruiter using Dan Thiry's outbound template,
  adapted for Andrew Shenstone (senior fullstack engineer). Writes the draft
  into the Notion Prospects company page body. Use when the user wants to
  message a recruiter, shares a recruiter LinkedIn URL, or asks for a Dan-style
  / Sales Nav / inbound recruiter note.
---

# Recruiter message (Dan template)

First LinkedIn note to someone hiring. Goal is to look like a sourced candidate, not an ATS PDF. **Do not lead with "I applied."**

Draft only. Do not send. Do not invent a relationship.

## Who to write

**One person. One message.** Never draft two InMails, two greetings, or a recruiter copy plus an HM copy in the same turn.

If the user pastes several LinkedIn URLs, pick **one** recipient:

1. The person they labeled best / first / "message them."
2. Else the clearest recruiter / TA / Head of People for this role.
3. Else the first URL.

Put the other URLs in **People notes** only. Do not write a second body.

**Default: recruiter / TA / Head of People.**

**Hiring manager only when both are true:** they are clearly the engineering (or role) manager, **and** they have a LinkedIn hiring badge. A TA person with a hiring badge for a different job is still the recruiter path.

If the user pasted a URL into the wrong Notion field, classify from the profile and store it in **Recruiter LinkedIn** or **Hiring manager LinkedIn** accordingly.

## Inputs

The user usually provides:

1. **LinkedIn URL** of the person they are writing to (or it is already on the Notion row).
2. **Company / role** already in Notion Prospects (or named in chat).
3. **Optional extra fit reasons** to weave in. One short sentence max. Skip if none.

If the LinkedIn URL or company is missing, ask once. Otherwise infer.

## Gather context (every time)

1. **Recipient.** Open the LinkedIn URL. Take first name, current title, and company from the profile. If LinkedIn is login-walled, use the name from the URL slug and say you could not verify title.
2. **Job in Notion.** Query Prospects (data source `collection://c61e0bc1-11fa-42d4-88a5-be564befaef4`, page https://app.notion.com/p/67df472bedd349bb8e2fa5652be81be4). Match **Company**. Read **Potential roles**, **Open roles**, **Target role**, **Careers page**, **People notes**, **Notes**. Use the exact live title from **Target role** if set, else the role the user named. If several roles and none is marked, ask.
3. **Do not invent** a req, stack, or hiring-manager name. If Notion has no live role, say so and draft against what is actually there, or stop.

## Voice

- Short, human. Separate paragraphs with blank lines: greeting, careers sentence, proof, availability, resume line, sign-off, then contact.
- **Do not introduce yourself.** No "Andrew Shenstone here" and no title line. LinkedIn already shows who is writing. Start with the careers sentence after the greeting.
- No em dashes (see `.cursor/rules.md`).
- No cover letter. No bullet dump. No fabricated referral.
- Sign **Andrew**. Availability is always **10am-3pm PST Monday-Friday**.
- After the sign-off, always put contact on its own lines at the bottom:
  - `shenst1@gmail.com`
  - `339-223-0797`
- Do not use Plantfolio, "sole engineer," MCP, or catalog-size stats as the proof line unless the user asks. Default proof: 12 years shipping fullstack on small product teams (React / TypeScript / Next.js). Add a true domain or prior-company detail only when it matches the req (e.g. fintech / Tilia for payments). Skip internal program or team nicknames from the posting (e.g. "Early Bets") unless they are in the role title.

## Dan's template (source; content beats only)

Use Dan's beats (careers page, one proof line, availability, resume). Do **not** copy his self-intro or one-paragraph density.

```text
Hi Andrew,
Dan Thiry here, Senior Recruiter looking for a team and company I can make a big impact at. I viewed the careers page and see that XYZ  is looking for a Technical Recruiter who can move at Start up pace and source/qualify both technical talent and GTM folks. Most recently I was at Halcyon and Sumo Logic where I typically owned 10 open positions at a time, averaging 5 hires per month, and less than 35 days time to hire. I'm available 10am-2pm MST Monday-Friday this week and I'd love to chat if you think I could be a good fit for XYZ's team.

Here's my resume and contact info!

Cheers,
Dan
```

## Andrew's fill-in

**Subject** (InMail; always include):

- Default: `[exact role title] / Andrew Shenstone`
- If the user gave a distinctive extra the recipient would recognize (hobby, domain, prior company), `[exact role title] / [short hook]`
- Under ~80 characters. No em dashes. No "opportunity" / "interested in chatting."

```text
Hi [First name],

I viewed the careers page and see that [Company] is looking for a [exact role title] who can [1 short phrase from the live req].

Most recently [one proof sentence].

I'm available 10am-3pm PST Monday-Friday this week and I'd love to chat if you think I could be a good fit for [Company]'s team.

Here's my resume and contact info!

Cheers,
Andrew

shenst1@gmail.com
339-223-0797
```

### How to fill the blanks

| Blank | Rule |
|-------|------|
| `[First name]` | From LinkedIn. Never "Hiring Team." |
| `[Company]` | Notion company name. |
| `[exact role title]` | Exact title from Notion **Target role** / careers. |
| `[1 short phrase from the live req]` | One clause from the posting: stack, ownership, or 0-to-1. Not a keyword list. Not an internal initiative name. |
| `[one proof sentence]` | True and specific. No invented metrics. No Plantfolio-as-marker unless asked. Fold domain fit here (e.g. fintech) when it is true, not as a second pitch paragraph. |

Keep **Here's my resume and contact info!** as in Dan's note. Always end with email and phone under the sign-off.

## Write it to Notion (every time)

After drafting, put the paste-ready message in the **body** of that company's Prospects page. Do not only put it in chat.

1. `fetch` the page first. Prefer `insert_content` (append). Do not `replace_content` unless the page is empty of anything you must keep.
2. Append **one** LinkedIn message section (replace if a section for this person already exists). Do not append a second section for a backup recruiter.

```markdown
## LinkedIn message

**To:** [Full name] ([title]) — [LinkedIn URL]
**Role:** [exact role title]
**Subject:** [InMail subject]
**Drafted:** [YYYY-MM-DD]
**Status:** Not sent

[paste-ready message as a fenced code block]
```

3. Also set properties when known: **Recruiter LinkedIn** or **Hiring manager LinkedIn**, and a short line in **People notes**. Do not invent a next-action status value.

## Output in chat

Subject line, **one** paste-ready LinkedIn message in a single code block, plus the Notion page link. One sentence of context (who, which role, recruiter vs HM).

Do not also paste a second copy for another person. Do not paste a connection note in chat unless InMail is unavailable (no Message button). If they are not connected but can InMail, skip the connection note. If a connection note is needed, keep it under 200 characters and name company + role; still only one extra block, never a second InMail.

## Example

**Subject:** Growth Engineering Manager / Andrew Shenstone

```text
Hi Janelle,

I viewed the careers page and see that Calendly is looking for a Growth Engineering Manager who can own product-facing fullstack work with a small team.

Most recently I've spent 12 years shipping React and TypeScript on small product teams.

I'm available 10am-3pm PST Monday-Friday this week and I'd love to chat if you think I could be a good fit for Calendly's team.

Here's my resume and contact info!

Cheers,
Andrew

shenst1@gmail.com
339-223-0797
```
