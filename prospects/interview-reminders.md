# Interview reminders (living doc)

Edit after each debrief. Keep bullets short enough to skim the morning of an interview.

## Story and presence

- Open with a **human hook** (origin story, specific detail). You already have a strong pattern — keep refining, don’t over-rehearse the joke.
- **Listen visibly** — you already do this; treat it as a repeatable asset.

## Framing for larger-company audiences

- **Lead with governance, then speed** when discussing AI, agents, or “how I ship”: review, tests, conventions, observability, rollback — then velocity and deploy times.
- **Avoid “fix forward” as the first answer** to “what if the model writes bad code?” Pair speed with **how you catch problems before production**.
- Remember: **their constraints are real** (scale, on-call, legacy). You are not performing caution; you are **showing you can operate in their reality**.

## Guardrails & speed (vocabulary + habit)

- **Self-check:** When you feel the urge to lead with **how fast** you ship, reframe first: *“I’ve put a lot of guardrails in place so I’m allowed to move quickly.”* Speed is the **outcome**; guardrails are the **design**.
- **Phrase to own:** You want to sound like **someone who ships with AI and knows where the guardrails go** — not reckless, not anti-AI; deliberate.
- **Say “guardrails” on purpose** in interview answers about agents, workflow, and delivery. It signals maturity and lands well in panel settings.

### Story to develop (concrete beats abstract)

Build one **60–90 second** story you can drop when AI or velocity comes up. Fill from real experience — prompts:

- **What guardrails exist first?** (e.g. repo layout, conventions, typecheck/lint/CI, small deploy surface, feature flags — pick what’s true.)
- **Where is AI allowed vs. not?** (boundaries you enforce before you trust output.)
- **One beat where a guardrail caught or limited bad output** — even small. If nothing dramatic: “nothing catastrophic yet *because* of X” is still a story if X is specific.

Rehearse until the guardrail list rolls off naturally; then speed is a one-liner at the end.

## Technical deep dives

- For anything in the demo (polling, auth, jobs, uploads): prep **one level deeper** — tradeoffs, failure modes, what you’d change at 10× scale or longer waits. **Naming one pattern** (e.g. exponential backoff) beats debating whether the problem is “solved.”
- **Truth + ownership:** “I didn’t hand-write every line; I own the behavior and validated it” is fine if followed by **what you’d verify or change** under pressure.

## Staff-level interviews (not just Senior)

- **Definition alone is not enough.** After “what Staff means,” give **30s proof** from Bloom/Tilia (mentorship, platform bet, standards, POC) — then **20s** “at {company} I’d focus on…”
- **Do not lead with Plantfolio solo learning** as your only Staff prep story; founder mode proves velocity, not multiplying others.
- **Plantfolio for Staff (honest):** customer discovery, product empathy, reframing one-off client asks → generalized scope. You did **not** multiply engineers at scale there — use Bloom/Tilia for that proof ([Dutchie debrief](./Dutchie/interview-debrief-cyril.md#better-plantfolio-angle-staff--honest-about-scale)).
- **Pushback story:** IC reframed a big-customer ask → outcome for many customers. If the example is “we compromised,” reframe or pick another story (see Dutchie debrief).

## Closing block (last ~15 minutes)

- **Rule of three:** at most **three** questions prepared; go deep on one if invited — don’t stack many topics in overtime.
- **30s close:** why this company, why this level, why now — after your last question, not only “any concerns?”
- **Links after the call:** email architecture/portfolio URLs; in-meeting chat paste often **nofollow** or gets lost.
- If time is up: “One more question — I can email the rest.”
- **One question** tied to something they said — shows you were listening.
- **Optional short closer:** invite unresolved concerns without a long speech — e.g. what would make them confident you’d succeed in *their* environment.
- Prefer **specific and conversational** over generic “I want to be a yes for you” unless you’ve earned that tone in the room.

## Speech and pacing

- **Pause** instead of “um / you know / I guess.”
- **One idea per breath**; stop when the beat is done.
- When energy is low: **shorter answers**, more rehearsed beats — record 5-minute Staff / pushback / proudest-project answers and listen once for fillers.

## Screening format & boundaries

- **Know what you’re opting into.** Timed DS&A (trees, graphs, HackerRank) rewards **recent pattern reps**. If you haven’t been drilling, the expected hit rate is low — that’s statistics, not character.
- **Decline / reschedule is sometimes the power move** — If headspace and practice don’t match the bar, walking away *before* the screen often preserves more optionality than a bad signal. Polite + early beats resentful + underprepared.
- **Stack the deck outside the room:** timed practice, trees/graphs, **topological sort / dependency order**, cycle detection — *before* you agree to the next similar round. That’s prep, not “cheating”; in-interview dishonesty isn’t worth the tail risk.

## Emotional hygiene

- After a hard outcome: run **`prospects/process.md`** — don’t skip the physical step.
- **One attempt in a long pipeline** — outcome does not define craft or worth.

---

*Last updated: 2026-06-01 — Dutchie Cyril debrief (Staff framing, closing block, speech)*

**Debriefs:** [Dutchie — Cyril](./Dutchie/interview-debrief-cyril.md) · **Root index:** [INTERVIEW-GUIDANCE.md](../INTERVIEW-GUIDANCE.md)
