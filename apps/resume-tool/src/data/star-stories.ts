/**
 * Generic STAR story bank — duplicated for interview prep; company-specific notes live in prospects/.
 * String fields support Markdown: **bold**, *italic*, lists (- item), multiple paragraphs (blank line).
 */

export type StarStory = {
  id: string;
  title: string;
  tags: string[];
  company: string;
  duration: string;
  situation: string;
  action: string;
  result: string;
  oneLiner: string;
  interviewNotes?: string[];
  doNotLeadWith?: string;
  growthEdge?: string;
};

export const starFramework = {
  title: "How to use STAR (without sounding generic)",
  bullets: [
    "Lead with a **specific** situation (company, constraint, name if appropriate)—not “we use agile.”",
    "Action is what **you** did, with verbs: proposed, taught, refused, escalated, built POC.",
    "Result is **evidence**: speed, approvals, production, review load dropped—not feelings.",
    "End with **what you’d do differently** once (shows Staff growth).",
    "Target **60–90 seconds** spoken; memorize beats, not a script.",
  ],
  mentorshipProof: {
    weak: "I mentor through pairing.",
    strong:
      "I taught Amir on our Next migration; within a couple of weeks his PRs needed no review comments—just approve—and leadership trusted him to own more of the surface.",
  },
};

export const staffVsManager = {
  title: "Staff vs Manager (blur on purpose)",
  staffOwns: [
    "Technical risk and merge quality (what you will maintain)",
    "Norms: PR size, review bar, architecture docs, slice plans",
    "Making tradeoffs visible (ideal path vs realistic path)",
    "Multiplying others: pairing offered, teaching, clean patterns",
    "Escalating with **written criteria** to the EM—not performance PIPs",
  ],
  managerOwns: [
    "Performance conversations and consequences",
    "Forcing pairing attendance or work allocation",
    "Final merge decision when you refuse approval",
  ],
  staffGoal:
    "Make good engineering the path of least resistance—and refuse to sign your name on work you cannot maintain. Partner with the EM on people problems; bring evidence, not frustration.",
  underperformanceLine:
    "I raise it early with specifics, offer pairing, document risk in writing, and partner with the manager on norms—I do not try to be the manager.",
};

export const stakeDrivingNotes = {
  title: "Stake-driving: legitimate vs toxic",
  legitimate: [
    "POC that proves pain (Tune webpack: impacted team + metrics)",
    "Phased migration with risk first (Bloom: auth POC before feature parity)",
    "RFC / written slice plan so “yes” is easy",
  ],
  toxic: [
    "Irreversible personal investment used to override review (“I spent weeks—approve anyway”)",
  ],
  counterMoves: [
    "Written split plan (Merge 1 / 2 / 3), not just “too big”",
    "Approval criteria: size, tests, rollback—then escalate to manager for merge without your stamp",
    "Team norm on max PR size and draft PRs early",
  ],
};

export const starStories: StarStory[] = [
  {
    id: "bloom-scoping",
    title: "Scoping — ideal embedded Shopify vs standalone Next",
    tags: ["Scoping", "Platform", "Ecommerce", "Bloom"],
    company: "Bloom.wine",
    duration: "~90s",
    situation:
      "The ideal product path was staying embedded in Shopify: operators feel like they are still in Shopify, and Polaris keeps the admin aligned with their storefront. That is the right UX when it works. In practice the team was hamstrung—slow shipping, painful testing, limited UX—and that ideal was not realistic for what Bloom needed to deliver.",
    action:
      "Proposed a standalone Next.js app on existing Rails GraphQL APIs—not because embedded Shopify is wrong in theory, but because velocity mattered more than staying inside Polaris. Scoped risk: auth POC first (hardest part). After auth worked, rebuilt to feature parity quickly because APIs already existed. Sold stakeholders on faster dev, easier testing, and shipping outside the design-system cage.",
    result:
      "Stakeholder buy-in; team moved fast through the feature set; parallel work including Amir on the same Next surface. Much of that stack remains in production across winery clients.",
    oneLiner:
      "*The ideal was embedded Shopify so the product feels native to the merchant—but that path wasn't realistic for our velocity. We phased standalone Next: auth POC first, then feature parity on existing Rails APIs.*",
    interviewNotes: [
      "Use for “ideal path not available” — product + platform tradeoff, not sprint planning.",
      "Dutchie tie: honor ideal UX when you can; when blocked, clear integration surface and ship.",
    ],
  },
  {
    id: "bloom-amir",
    title: "Mentorship — Amir on Next migration",
    tags: ["Mentorship", "Staff", "Bloom"],
    company: "Bloom.wine",
    duration: "~90s",
    situation:
      "Initiated move from embedded app to standalone API-backed Next.js admin. Amir, a fast-learning remote engineer in Brazil, was assigned to help.",
    action:
      "Taught component design and application architecture—Next structure, reusable components, Rails GraphQL consumption, testing the standalone surface. Offered pairing; early PRs needed substantial review comments.",
    result:
      "Within a couple of weeks, Amir's PRs improved so much I was approving with no comments (thumbs-up only). Boss gained confidence to expand his ownership; team could parallelize. Review burden dropped from heavy feedback to clean approvals in weeks.",
    oneLiner:
      "*Early PRs needed lots of comments; within a couple of weeks I was thumbs-up with no comments—that's how I know the teaching transferred.*",
    doNotLeadWith: "Layoff / trained myself out of a job.",
    interviewNotes: [
      "If layoff comes up: one sentence on leadership redistributing work + broader business pressures—not the headline.",
    ],
  },
  {
    id: "tune-stake-driving",
    title: "Standards — oversized PRs and sunk-cost pressure",
    tags: ["Standards", "Review", "Staff", "Tune"],
    company: "Tune Inc",
    duration: "~60–90s",
    situation:
      "Teammate repeatedly worked in a silo for three or four days on massive PRs. I offered pairing early; they would not. After a couple of days I knew the PR would not be appropriately sized. I called it out at standup; manager encouraged them to size down—it did not happen.",
    action:
      "Reviewed in chunks and asked for splits multiple times. When they used sunk cost (“I spent all this time—are you really going to make me waste it?”), I refused to approve and escalated to my manager to merge without my stamp—with clear criteria: size, reviewability, rollback risk. Not a personal fight.",
    result:
      "Held the merge quality bar even when the org did not change their working style. Learned: standup nods are not enough; today I would add a written slice plan, draft PR norms, and explicit manager-owned merge decision earlier.",
    oneLiner:
      "*I tried pairing and standup visibility first; when sunk-cost pressure hit, I escalated with criteria instead of rubber-stamping.*",
    growthEdge:
      "Earlier written split plan (Merge 1/2/3), team max PR size, pair on approach before the silo days—not only standup comments.",
    interviewNotes: [
      "Conclusion is not “I fixed them”—it's “I did Staff things in a system that didn't enforce behavior.”",
      "Skip Tune layoff unless asked.",
      "Optional growth story for review culture / Staff bar questions.",
    ],
  },
  {
    id: "tune-webpack",
    title: "Platform — webpack to react-scripts via pain owner + POC",
    tags: ["Platform", "DevEx", "Prioritization", "Tune"],
    company: "Tune Inc",
    duration: "~60s",
    situation:
      "Legacy webpack; dev machines around 75% CPU; painful builds. Direct manager would not prioritize abstract tech debt.",
    action:
      "Found another team more impacted by the pain; built a POC; showed roughly 50% smaller prod build, ~60% fewer npm deps, dev CPU under ~5% (verify before telling).",
    result:
      "Shipped modernization; learned prioritization via pain owner + proof, not lectures.",
    oneLiner:
      "*Manager wouldn't fund debt in the abstract—I found who felt the pain, proved it with a POC, and shipped.*",
    interviewNotes: [
      "Positive Staff story—pairs with Cyril's Billups modernization background.",
      "Legitimate stake-driving: POC + metrics, not guilt.",
    ],
  },
];

export const quickReferenceStories = [
  {
    title: "Bloom greenfield + regulated retail",
    when: "Core ecommerce platform fit; Shopify Plus; alcohol compliance",
  },
  {
    title: "Tilia GraphQL + 90% tests",
    when: "Reliability; keep short unless asked (short tenure)",
  },
  {
    title: "Plantfolio scale / Mongo to Postgres",
    when: "Data-heavy ecommerce; honest migration story",
  },
];
