# Dutchie — First round interview prep

**Status:** Rejected after EM screen with Cyril — see **[interview-debrief-cyril.md](./interview-debrief-cyril.md)** for what worked and what to improve. Keep this file for story beats if you re-enter the process or interview similar roles.

**Role:** Staff Software Engineer, Front-End (Ecommerce Platform)  
**Interviewer:** [Cyril Van Dyke](https://www.linkedin.com/in/cyril-van-dyke-35880160/)  
**Tailored resume:** `http://localhost:3000/jobs/dutchie-staff-frontend`

---

## Who you’re talking to: Cyril Van Dyke

| Signal | Detail |
|--------|--------|
| **Role** | Engineering Manager at **Dutchie** (since **Jan 2026**—relatively new to Dutchie, not new to leading) |
| **Location** | **Portland, OR** |
| **Prior** | **Senior EM / EM at Opal** (hiring, zero turnover over 24 months, roadmap with Principal Engineers, dev happiness) |
| **IC depth** | **Lead / Senior FE at Billups**—React modernization, testing, CI/CD, hiring a FE team |
| **Earlier** | **NAVEX Global**—compliance/GDPR, APIs for mobile, enterprise UX |
| **Stack (public resume)** | **TypeScript, React, Redux**, Go, Node, Postgres, Docker/K8s, Datadog, CircleCI |
| **GitHub** | [@cyril-vandyke](https://github.com/cyril-vandyke) (org: GetDutchie) |

### How to read that as an interviewer

- EM who has **shipped React** and cares about **team health, hiring, CI/CD, and modernization**—not a pure people manager who hasn’t coded in years.
- **NAVEX + your Bloom alcohol story** = shared language for **regulated software** (compliance, constraints, “can’t break checkout”).
- **Opal** = cross-functional roadmap, **Principal Engineer** partnership, **career development**—good hook for your **Staff** narrative (mentoring, standards, multi-month platform work).
- **~3 months at Dutchie** = he may still be **calibrating levels and team norms**; your job is to make the **Staff bar** obvious without overselling title.

**Sources:** [cyril.coffee resume](https://cyril.coffee/page/resume/), LinkedIn/GitHub aggregators (verify live on call).

---

## What this first round is likely probing

For **Staff FE, Ecommerce Platform** with an **EM**, expect a blend of:

1. **Why Dutchie / why this team** (not generic “cannabis is hot”).
2. **Bloom as proof**—regulated retail, Shopify Plus, Rails GraphQL, Next admin, mentoring.
3. **Staff behaviors**—mentoring, technical direction, scoping when the ideal path isn’t available (from the JD).
4. **Honest ramps**—**Apollo Client**, **Styled Components**, cannabis domain labels (resume already states this; don’t walk it back).
5. **Hands-on commitment**—Staff here is not “architect only.”
6. **Level check**—they may validate **Staff vs Senior** (12+ years but no formal Staff title—see `swot.md`).

Less likely in round 1 with an EM: deep system design or live coding—but have **2–3 crisp technical explanations** ready (GraphQL schema ownership, pagination/performance, test strategy).

---

## Anchor narrative (60–90 seconds)

Memorize the **beats**, not a word-for-word script:

1. **Hook:** Ecommerce Platform is the closest match in my career—regulated retail where operators and consumers both depend on the product.
2. **Proof:** At Bloom I built the greenfield **Next.js** operator admin and worked on **Rails GraphQL** APIs used by web and mobile, with **Shopify Plus** and integrations under alcohol regulations.
3. **Staff angle:** I led through **pairing, review, and standards** (no direct reports)—Bloom standalone migration (Polaris escape + auth POC phasing) and mentoring a fast-ramping engineer on that Next.js surface.
4. **Today:** Plantfolio kept me sharp on **TypeScript**, **Mongo** (1+ year production) then **Postgres**, and performance at real catalog scale.
5. **Close:** I’m applying at **Staff** because I want to own **platform-level frontend outcomes** on a long-lived stack—not a title bump—and I’m honest about **Apollo/Styled Components** as house-tool ramps.

---

## Mentorship — proof without metrics

Interviewers do not need a scorecard. They need evidence that **someone else got better and shipped because of you**.

| Weak (philosophy) | Strong (proof) |
|-------------------|----------------|
| “I mentor through pairing” | “I taught Amir on our Next migration; within **a couple of weeks** his PRs needed **no review comments**—just approve—and leadership trusted him to own more of the surface.” |

**If Cyril asks “how do you know you’re good at mentorship?”**  
“I can point to **Amir**, a remote engineer on the Bloom standalone Next app. Early on his PRs needed a lot of feedback on component design and architecture. Within **a couple of weeks** I was giving thumbs-up **without comments**. My boss gained confidence in his pace fast enough to expand his ownership.”

---

## STAR stories (draft — say out loud)

Practice **beats**, not a script. Target **60–90 seconds** each; end with **what you’d do differently** once.

### 1. Scoping — Bloom: Polaris escape → standalone Next (JD: “ideal path not available”)

**Use this instead of “we do agile.”** This is a product + platform tradeoff.

| | |
|--|--|
| **Situation** | The **ideal product path** was staying **embedded in Shopify**: operators feel like they are still in Shopify, and **Polaris** keeps the admin visually aligned with their storefront. That is the right UX when it works. In practice the team was **hamstrung**—slow shipping, painful testing, limited UX—and that ideal was **not realistic** for what Bloom needed to deliver. |
| **Action** | You proposed a **standalone Next.js** app on **existing Rails GraphQL APIs**—not because embedded Shopify is wrong in theory, but because velocity and capability mattered more than staying inside Polaris. Scoped risk: **auth POC first** (hardest part). After auth worked, rebuilt to **feature parity** quickly because APIs already existed. Sold stakeholders on faster dev, easier testing, and shipping outside the design-system cage—the owner found that especially appealing. |
| **Result** | Buy-in; team moved fast through the feature set; platform enabled **parallel work** (including **Amir** on the same Next surface). Much of that stack **remains in production** across clients. |
| **One-liner** | “The ideal was embedded Shopify so the product feels native to the merchant—but that path wasn’t realistic for our velocity. We phased a standalone Next migration: auth POC first, then feature parity on existing Rails APIs.” |
| **Dutchie tie** | Same platform judgment Dutchie needs: honor the ideal UX when you can, and when constraints block delivery, choose a clear integration surface and ship—without pretending the tradeoff is free. |

---

### 2. Mentorship — Bloom: Amir on Next migration (~90s)

| | |
|--|--|
| **Situation** | You initiated the move from **embedded app → standalone API-backed Next.js** admin. **Amir**, a fast-learning remote engineer in Brazil, was assigned to help you. |
| **Action** | You taught **component design** and **application architecture**—how to structure the Next app, reuse components, consume **Rails GraphQL**, and test the standalone surface. Early PRs needed substantial review comments. |
| **Result** | Within **a couple of weeks**, Amir’s PRs improved so much you were **approving with no comments** (thumbs-up only). He shipped **very fast** overall. Your boss gained **confidence in his ability** to own slices you had been carrying; the team could parallelize. **Measurable proof:** review burden on you dropped from heavy feedback to clean approvals in weeks—not years. |
| **Do not lead with** | Layoff / “I trained myself out of a job.” |
| **If it comes up** | One sentence: “Leadership redistributed work after he ramped; there were broader business pressures—but it validated that the patterns I taught held up in production.” |

**Optional detail if asked:** One specific feature Amir owned solo after ramp: ___________ (fill in if you remember)

---

### 3. Standards — Tune: oversized PRs, silo work, sunk-cost pressure (~60–90s)

| | |
|--|--|
| **Situation** | Teammate repeatedly worked in a **silo for three or four days** on **massive PRs**. You **offered pairing early**; they would not. After a couple of days you knew it would not be an appropriately sized PR. You **called it out at standup**; your manager encouraged them to size down—it **did not happen**. |
| **Action** | Reviewed in chunks and asked for splits multiple times. When they used **sunk cost** (“I spent all this time—are you really going to make me waste it?”), you **refused to approve** and **escalated to your manager** to merge **without your stamp**—with clear criteria (size, reviewability, rollback risk), not a personal fight. |
| **Result** | You held the **merge quality bar** even when you could not change how they worked. **Conclusion is not “I fixed them”**—it is “I did the Staff things in a system that did not enforce behavior.” |
| **Staff framing** | Review is a team gate; empathy is not lowering the bar. Staff brings **evidence** to the EM; manager owns consequences. |
| **Growth edge** | **Today:** written **split plan** (Merge 1/2/3), not only standup comments; **draft PR** norms; pair on **approach** before the silo days; document “why blocked” for the lead. |
| **Do not lead with** | “He never shipped useful work” or Tune layoff. |

**Stake-driving (if it comes up):** Legitimate = POC + metrics (webpack story). Toxic = guilt to override review. Counter-move = slices + criteria + **manager-owned merge decision**.

**Generic STAR bank:** `http://localhost:3000/star` (Staff vs Manager section)

**[FILL]:** Year at Tune: ___________ | What the huge PR changed (area): ___________

---

### 4. Platform / prioritization — Tune: webpack → react-scripts (~60s)

| | |
|--|--|
| **Situation** | Legacy **webpack** setup; dev machines ~**75% CPU**; painful builds. Your **direct manager would not prioritize** abstract tech debt. |
| **Action** | Found **another team more impacted** by the pain; built a **POC**; showed **~50% smaller prod build**, **~60% fewer npm deps**, dev CPU **under ~5%** (verify numbers still feel right). |
| **Result** | Shipped the modernization; learned to win prioritization via **pain owner + proof**, not lectures. |
| **Platform tie** | “I care about developer experience because I’ve been blocked by tooling—platform work multiplies the team.” (Resonates with Cyril’s Billups React modernization background.) |

**Motivation line (not a full story):** “I’m consistently surprised how much bad dev UX teams tolerate in silence—that’s why platform work satisfies me.” Then pivot to this POC or Bloom standalone.

---

### Quick reference (other stories if time)

| Story | When to use |
|-------|-------------|
| **Bloom greenfield + regulated retail** | Core platform fit; Shopify Plus; alcohol compliance |
| **Tilia GraphQL + 90% tests** | Reliability; short tenure—one line only unless asked |
| **Plantfolio scale / Mongo→Postgres** | Data-heavy ecommerce; honest migration story |

---

## Staff vs Manager (blur on purpose)

| **Staff owns** | **Manager owns** |
|----------------|------------------|
| Technical risk, merge quality, norms (PR size, review bar) | Performance, consequences, forcing behavior |
| Written slice plans, approval criteria, escalation with evidence | Final merge when you refuse approval |
| Multiplying others (Amir story) | Allocation and PIP |

**Your Staff goal:** Make good engineering the path of least resistance—and refuse to sign your name on work you cannot maintain.

**If asked about underperformers:** “I raise it early with specifics, offer pairing, document risk in writing, and partner with the manager on norms—I do not try to be the manager.”

---

## What to downplay in round 1

| Topic | Guidance |
|-------|----------|
| **Tilia tenure** | “Partnered well with another senior; Chakra was team-wide.” Skip underperforming teammates unless asked. |
| **“People don’t work”** | Use the underperformance line above—not frustration, evidence + EM partnership. |
| **Philosophy** | Only **after** a concrete story: “The pattern I repeat is…” |

---

## Technical talking points (short answers)

**GraphQL (strength):**  
“I’ve owned both sides—schema/resolvers on Rails at Bloom and consuming/evolving platform GraphQL at Tilia. I care about **N+1**, **pagination**, and **typed clients** so frontend teams don’t guess contracts.”

**Apollo (ramp):**  
“I haven’t had Apollo as the daily client headline; I’ve used GraphQL in production with typed clients and cache-aware patterns. I’d ramp on **your cache policies and colocation standards** in the first sprint.”

**Rails (differentiator on this team):**  
“I’m not frontend-only—I’m productive in the **Rails console** and models when the bug is in the API layer (~6 years through Rails 6; I ramp on newer Rails with team conventions).”

**Mongo + Postgres:**  
“Plantfolio shipped on **Mongo** for 1+ year, then migrated to **Postgres**—I understand why Dutchie runs both.”

**Staff vs Senior (if asked):**  
“Senior ships excellent features. Staff **sets patterns**—component/API usage, review bar, mentoring—and **unblocks the team** on ambiguous platform work across months. I’ve done that informally; I want that as the job.”

---

## Questions to ask Cyril (pick 4–5)

1. How is **Ecommerce Platform** bounded vs other frontend teams—and what surfaces do you own (consumer checkout, third-party, API-driven)?
2. What does **Staff** mean on your team today—tech lead, project lead, or org-wide standards?
3. Biggest **technical debt** on consumer flows right now (Apollo, Styled Components, legacy Rails, performance)?
4. How do you want Staff engineers to partner with **backend/Rails**—shared on-call, API design reviews, or FE-led contracts?
5. What convinced you to join Dutchie in 2026—and what are you trying to change on the team in your first year?
6. How does the team balance **shipping speed** with **state-by-state regulatory** changes?
7. What would **success in 90 days** look like for this hire?

Avoid leading with comp in round 1 unless he brings it up. Staff band on posting: **$162K–$220K** (confirm level in band when appropriate).

---

## Risks to handle calmly

| Concern | Your line |
|---------|-----------|
| **No Staff title before** | “I’ve operated at that scope at Bloom and Tilia; I’m applying where the work matches, and I’d rather be calibrated honestly in this conversation.” |
| **Cannabis naivety** | “I haven’t shipped in cannabis; I have shipped in **heavily regulated retail** where mistakes hit compliance and money.” |
| **Referral** | If applicable: one sentence—“[Name] spoke highly of the platform mission”—don’t lean on it as a crutch. |
| **Apollo / Styled Components** | **Fast ramp**, not “I’ll learn GraphQL.” |

---

## Day-before checklist

- [ ] Re-read `http://localhost:3000/jobs/dutchie-staff-frontend`
- [ ] Skim [Dutchie about](https://business.dutchie.com/about) and [Greenhouse Staff posting](https://job-boards.greenhouse.io/thedutchie/jobs/8124721002)
- [ ] Glance at [Cyril’s public resume](https://cyril.coffee/page/resume/)—one natural reference max (e.g. React modernization + testing at Billups)
- [ ] Say out loud: **STAR #1 scoping** (Polaris → Next, auth POC), then **#2 mentorship** (Brazil dev)
- [ ] Fill in **[FILL]** blanks in mentorship and Tune sections if you remember details
- [ ] Prepare **2 questions** about his transition to Dutchie

---

## Practice order for Cyril (first round)

1. **Bloom scoping** — ideal = embedded Shopify/Polaris; realistic = standalone Next, auth POC first → ecommerce platform fit  
2. **Bloom mentorship** — Amir on same migration (PRs clean in ~2 weeks) → Staff “multiply others”  
3. **Bloom regulated retail** — operator + consumer, Shopify Plus, Rails GraphQL (anchor narrative)  
4. **Tune webpack POC** or **stake-driving PR** — only if he asks about review culture, standards, or developer experience  

---

## Related repo files

- `job.md` — posting summary and fit notes
- `swot.md` — strengths, weaknesses, interview notes
- `interview-prep.md` — this file (Cyril / Dutchie specific)
- **`interview-debrief-cyril.md`** — post-interview analysis (outcome, Staff framing, closing)
- **[INTERVIEW-GUIDANCE.md](../../INTERVIEW-GUIDANCE.md)** — repo-wide interview priorities
- **[interview-reminders.md](../interview-reminders.md)** — cross-company habits
- **STAR story bank (all interviews):** `http://localhost:3000/star`
- `resumes/` — export PDF from resume viewer when ready
