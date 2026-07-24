/**
 * Interview prep guides (process-first answers, framing) — rendered on /star.
 * Markdown in section content: **bold**, lists, blank line = paragraph.
 */

export type InterviewGuideSection = {
  heading: string;
  content: string;
};

export type InterviewGuide = {
  id: string;
  title: string;
  subtitle: string;
  tags: string[];
  duration?: string;
  sections: InterviewGuideSection[];
  speakableTemplate?: string;
  oneLiner?: string;
  doNot?: string[];
  interviewNotes?: string[];
};

export const tellMeAboutYourselfGuide: InterviewGuide = {
  id: "tell-me-about-yourself",
  title: "Tell me about yourself — opener",
  subtitle:
    "Hook with the salon story, lean on Bloom and team work, brief Plantfolio, close forward (~90s)",
  tags: ["Opener", "TMAY", "Bloom", "Humor"],
  duration: "~90s",
  sections: [
    {
      heading: "Hook — salon website (pause for the laugh)",
      content: `After **Code Fellows in 2013** I was eager to build anything real. I made a deal with a salon owner: their website in exchange for **free haircuts for life**. She may have gotten the better end of that deal. *[pause]* I'm bald.

This sets tone: builder, entrepreneur, human. Don't rush the pause.`,
    },
    {
      heading: "Agency → Bloom (the spine — spend the most time here)",
      content: `I spent the first half of my career at **Ply Interactive**, a boutique agency—React Native, Rails, cross-team client work, front-end and UX.

One internal project kept growing until it became **Bloom**, a commerce platform for wineries. I was on it from early product work through senior engineering: **Rails GraphQL APIs**, greenfield **Next.js** admin, **Shopify Plus** integrations—and I **mentored engineers** on that stack. Much of what we built is still in production across many winery clients.`,
    },
    {
      heading: "Bloom scale — customers vs end users (if they ask)",
      content: `Be precise so "thousands of users" doesn't sound inflated:

- **Customers** = winery businesses (on the order of **many / ~100** clients—not consumer DAU).
- **End users** = people buying wine through checkout flows **we owned**. Every shopper at those wineries depended on our commerce code working.

So: many direct clients, but **thousands of end customers** touched our checkout and commerce stack in production. That's the scale story—B2B2C reach, not "Bloom had thousands of winery accounts."`,
    },
    {
      heading: "Tune & Tilia (short — one beat each)",
      content: `Two VC-backed startups after Bloom—small eng teams (~3 engineers) with product, design, and PM, two-week sprints, daily standups.

- **Tune:** marketplace automation; shipped measurable platform wins (build pipeline / DevEx).
- **Tilia:** payments-adjacent tooling, KYC surfaces, **90%+ unit test coverage** on critical apps.

Skip long agile process talk—everyone says it.`,
    },
    {
      heading: "Plantfolio (brief — don't end here)",
      content: `Most recently **Plantfolio**—AI-first tooling for independent garden centers, starting with signage for hundreds of plant varieties per season. I shipped something I'm proud of in **production**, including a **reference customer** who uses it successfully.

I'm not continuing as a solo founder—not because the tech failed, but because I want to build **with a team** on problems bigger than I can sell into alone. Happy to go deeper if asked; don't open that thread unless they pull it.`,
    },
    {
      heading: "Close forward (required)",
      content: `End with **why you're here**, not history:

"I'm now looking for a team where I can bring the same end-to-end ownership to [their product / domain]—which is why this role stood out."

Customize the bracket per company.`,
    },
  ],
  speakableTemplate: `I like to start with how I got into this. After Code Fellows in 2013 I traded a website to a salon owner for free haircuts for life. She probably won that deal. *[pause]* I'm bald.

I spent the first half of my career at a boutique agency—React Native, Rails, lots of client work. One internal project became **Bloom**, a commerce platform for wineries. I was on that through senior engineering: Rails GraphQL, greenfield Next.js admin, Shopify Plus—and I mentored engineers. We scaled to **many winery clients**, and because we owned **checkout and commerce code**, **thousands of end customers** relied on our software when they bought wine online.

After that, **Tune** and **Tilia**—small cross-functional teams, production SaaS under real constraints.

Most recently I built **Plantfolio**, AI-assisted tooling for garden centers, in production with a reference customer. I'm proud of what shipped; I'm now looking for a **team** where I can bring that ownership to [this kind of work]—which is why I'm here.`,
  oneLiner:
    "*Salon hook → Bloom as the proof → startups → short Plantfolio → why this role.*",
  doNot: [
    "Run past ~2 minutes—compress Tune/Tilia and Plantfolio.",
    "Say \"thousands of users\" without the winery-client / checkout clarification if they look confused.",
    "End on \"too risky to continue\" or Plantfolio doubt—close forward.",
    "Lead every interview answer with Plantfolio (see Plantfolio framing guide).",
    "Claim exact Bloom client count unless you know it—\"many winery clients\" is safe.",
  ],
  interviewNotes: [
    "Customize the closing bracket per company (domain, stack, team size).",
    "Resume follow-up: clarify Bloom B2B2C scale (winery customers vs checkout end users) on base/Bloom bullets when editing.",
    "Pairs with Bloom Amir STAR story if they ask about mentorship right after TMAY.",
  ],
};

export const productionBugGuide: InterviewGuide = {
  id: "production-bug",
  title: "Production bug — process-first answer",
  subtitle:
    "When you cannot name one dramatic outage (and that is normal for senior engineers)",
  tags: ["Production", "Triage", "Behavioral", "No war story needed"],
  duration: "~90s",
  sections: [
    {
      heading: "Reframe the question (say this out loud)",
      content: `Interviewers are usually testing **judgment, ownership, and communication**—not whether you survived a six-hour outage.

You can open honestly:

"I don't have one catastrophic production-war story that sticks in my head. Most of what I've dealt with is triage, fix, verify, deploy, and move on. What I *do* have is a consistent way I handle production reports so I don't waste the team or miss something that hurts revenue."`,
    },
    {
      heading: "Your triage process (compress to ~60 seconds)",
      content: `1. **Reproduce locally first** (~10 minutes). Rule out false positives before paging anyone—bad data, stale cache, and user error are common.

2. **Check the backlog.** Big orgs duplicate work. If it exists, escalate priority and learn status.

3. **If new, write a ticket**—even if you fix it the same day. Tracking matters.

4. **Severity lens:** Is anyone blocked from using the product? Is money involved (checkout, billing, KYC)? How broad is impact?

5. **Follow team triage policy**—on-call, severity labels, who owns escalation. Don't improvise severity in a vacuum.

6. **If truly urgent, own the path to prod**—fix, test the broken path, deploy, confirm in production, communicate to whoever reported it.`,
    },
    {
      heading: "What they're really scoring",
      content: `- Calm under uncertainty
- Not crying wolf (false positives)
- Ownership vs. throwing over the wall
- Communication when it matters
- Learning without theater`,
    },
    {
      heading: "Small anchors if they push for a specific example",
      content: `Pick the **smallest true shape** you can defend—no invented Sev-1:

- **False positive:** Support said X was broken; 10-minute repro showed bad import data, not the stack. Fixed data + guard in import path.

- **Money path:** Stripe webhook edge case; user state mismatch. Traced logs, fixed idempotency/retry, deployed, confirmed affected user.

- **Integration flake:** Upstream API timeouts after deploy; added retry/fallback, watched error rate.

- **Regulated-adjacent flow (Bloom/Tilia):** Onboarding/KYC step failed for a subset after an API change; high test coverage; patch same day.

If nothing clicks: **false positive + process** is a complete Staff-level answer.`,
    },
    {
      heading: "Memory jog (5 min before interview)",
      content: `Skim for recall—not to invent:

- Stripe / Clerk auth tier mismatch (Plantfolio)
- Search index out of sync after import (Algolia)
- LLM bad output in prod → fallback or guard
- GraphQL/API change broke a client (Bloom/Tilia)
- CMS/import broke a page`,
    },
  ],
  speakableTemplate: `When something's reported in production, my first move isn't heroics—it's **don't waste the team**. I try to reproduce locally in about ten minutes. A lot of "bugs" are bad data or user error.

If it's real, I check the backlog. If it's new, I ticket it. Then I ask: **is anyone blocked, and is money involved?** That drives whether I fix now or queue properly. I follow the team's triage policy.

When it's urgent, I own it end to end: fix, test the path that broke, deploy, confirm in prod, and tell whoever reported it.

I don't have one catastrophic outage story; most production work looks like **triage, fix, ship, verify**—and I'm comfortable with that.`,
  oneLiner:
    "*I'd rather be boring in production than memorable for the wrong reason—triage first, ticket everything real, own the urgent path to prod.*",
  doNot: [
    "Fabricate a Sev-1 you cannot defend in follow-ups.",
    "Apologize for not having a war story—reframe to process + judgment.",
    "Give only abstract process if they explicitly ask for one example—use a small anchor.",
    "Make STAR the headline unless they insist; lead with judgment.",
  ],
  interviewNotes: [
    "Pairs with Bloom/Tilia reliability stories if they want team context.",
    "Founder work: production discipline still applies even at small user count.",
  ],
};

export const plantfolioFramingGuide: InterviewGuide = {
  id: "plantfolio-framing",
  title: "Plantfolio — interview framing (not a side project)",
  subtitle:
    "Revenue and user count are not the same as engineering credibility; route stories to team work first",
  tags: ["Founder", "Collaboration", "AI-native", "Defensive questions"],
  duration: "read before behavioral rounds",
  sections: [
    {
      heading: "What you are feeling (name it)",
      content: `Plantfolio did not win financially yet. That can feel like "the app is a failure" and bleed into interviews as **solo side-projecter who vibes alone**.

Separate facts:

- **GTM / sales** is a skill you did not optimize for—not proof you cannot ship production software or work on a team.
- **One enthusiastic production customer** (signage rollout) is real evidence, not nothing.
- **12+ years on teams** (Bloom, Tilia, Tune, Ply) is your collaboration proof. Plantfolio is the **most recent** chapter, not the only one.`,
    },
    {
      heading: "Story routing — lead with team work",
      content: `For behavioral rounds, **default story order**:

1. **Bloom** — Amir mentorship, standalone Next scoping, Shopify Plus at scale, many winery clients in production.
2. **Tilia** — cross-functional product/design, KYC/payments surfaces, 90%+ test coverage, GraphQL platform work.
3. **Tune** — webpack POC, stake-driving with criteria, cross-team pain owner.
4. **Plantfolio** — only when the question is 0→1, AI-native product, full-stack ownership, or "tell me about something you built end to end."

Do **not** open every answer with "as founder of Plantfolio…" Interviewers hear **solo** and stop listening for collaboration.`,
    },
    {
      heading: '"Was it only you?"',
      content: `**Short answer:** "On Plantfolio I was the only engineer—I owned architecture, implementation, and production. Before that I spent years on teams at Bloom, Tilia, and Tune, where I mentored through pairing and review, worked in standups, and shipped alongside product and design."

**Then pivot:** "The collaboration story I'd point to is…" → **Bloom Amir** or **Tilia cross-functional** or **Tune review standards**.

Never let "only you" be the last word.`,
    },
    {
      heading: '"How many users?" / "Is anyone using it?"',
      content: `**Honest + pivot** (no apology spiral):

"Plantfolio is in production with a small user base—I focused on building the product and technical stack, not distribution. I have one independent retail customer in ongoing production who has been an enthusiastic reference for the signage workflow. The stack is the same seriousness I bring to team work: Stripe subscriptions, Clerk auth, Postgres, weekly releases, tests."

**Pivot to scale they care about:**

- 40,000+ species catalog, real search and media load
- Production LLM features customers use—not demos
- Same **Next.js / TypeScript / Node** stack as the role

User count answers **distribution**. They hired for **engineering**. Redirect.`,
    },
    {
      heading: "AI-native without sounding like vibe coding",
      content: `Weak (what you fear you sound like): "I use Cursor and ship fast alone."

Strong (true):

"I work AI-native: Cursor is daily infrastructure, top 1% usage—but **I own architecture, tests, and merge decisions**. On Plantfolio that meant a typed monorepo, Vitest/Cypress, and human review before production. I shipped a production MCP server on the live API, not a weekend demo. AI multiplies throughput; it does not replace judgment."

**Evidence beats adjectives:** monorepo boundaries, test strategy, MCP in prod, fallbacks for LLM behavior.

If they conflate AI-assisted with low quality: "The bar went up, not down—I review everything that touches money, auth, or customer data."`,
    },
    {
      heading: "When memory is the blocker",
      content: `You do not need to recall every bug or sprint. You need **3 memorized beats** on this page:

- Bloom Amir (mentorship proof)
- Bloom scoping OR Tune webpack (judgment + impact)
- Production bug process (above)

Practice **one-liners** out loud once per day—not full scripts. Interviewers hear confidence in beats, not perfect recall.`,
    },
    {
      heading: "If you are failing early behavioral rounds",
      content: `Possible causes (not only Plantfolio):

- Leading with founder solo narrative → sounds like no teamwork
- AI talk without Bloom/Tilia counterbalance → sounds like lone vibe coder
- No specific example when pushed → sounds vague (use STAR bank + small anchors)
- Defensive tone on user count → sounds like the project embarrasses you

**Fix for next round:** First two behavioral answers = **Bloom or Tilia**. Mention Plantfolio only when the question requires 0→1 or AI product. Practice production-bug process answer so you are not hunting memory under pressure.`,
    },
  ],
  oneLiner:
    "*Plantfolio proves I can own a production stack solo; Bloom and Tilia prove I multiply teams—I lead interviews with the second, not the first.*",
  doNot: [
    "Open every behavioral with Plantfolio / founder / AI speed.",
    "Apologize for one user or no revenue—state facts, pivot to engineering.",
    "Claim a user count or revenue you cannot defend.",
    "Say you cannot remember any stories—use this page's beats.",
    "Let 'only you' hang without a team counterexample in the same answer.",
  ],
  interviewNotes: [
    "Washington State Fair RN app = high-traffic consumer proof from agency era if they want scale.",
    "Agentic Transition report (/agentic-transition) for AI leverage artifact if a company cares about AI workflow depth.",
  ],
};

export const interviewGuides: InterviewGuide[] = [
  tellMeAboutYourselfGuide,
  productionBugGuide,
  plantfolioFramingGuide,
];
