import type { FunctionPage } from "./types";

export const marketing: FunctionPage = {
  index: "04",
  slug: "marketing",
  name: "Marketing",
  rackLine: "Ships the site, posts, launches, and search.",
  seo: "Function page for layer 04 — the marketing layer that writes the site, ships the posts, runs the launch, and reports what each piece returned.",

  headline: "Your marketing layer, written and shipped.",
  subhead: [
    "Hand it your product, your positioning, and a few samples of how you write. It writes the landing page, ships [PLACEHOLDER: 8] posts a month, runs the 6-week launch, and reports what each piece returned. You set the calendar; it ships against it.",
  ],

  work: {
    intro:
      "A vertical descent through the artifacts this layer produces. Each is a drawn artifact in the section language, never a screenshot.",
    artifacts: [
      { caption: "04 / A", title: "Brand voice profile, versioned and locked", body: "The single source for how you sound, built once from 3–5 of your own samples and the messaging map you approve." },
      { caption: "04 / B", title: "Marketing landing page", body: "The page that explains the product in one read: hero, features, pricing, FAQ." },
      { caption: "04 / C", title: "Waitlist page with a referral mechanic", body: "A single-field capture page that grows by referral before launch." },
      { caption: "04 / D", title: "1,500-word SEO how-to guide", body: "An edited, grounded long-form post written to rank and to be cited." },
      { caption: "04 / E", title: "Keyword + AI-citation (GEO) coverage map", body: "Where you rank on Google and where AI answer engines cite you, by query." },
      { caption: "04 / F", title: "llms.txt and schema / meta markup", body: "The machine-readable files that make the site legible to crawlers and answer engines." },
      { caption: "04 / G", title: "Changelog / release-notes entry", body: "A dated record of what shipped, kept current." },
      { caption: "04 / H", title: "Product Hunt launch kit", body: "Tagline, gallery copy, first comment, and a hunter outreach list." },
      { caption: "04 / I", title: "Launch-day email sequence (3 timed sends)", body: "Three emails timed across launch day, each compliant before it sends." },
      { caption: "04 / J", title: "Weekly newsletter issue", body: "The recurring send, on cadence, in your voice." },
      { caption: "04 / K", title: "LinkedIn / X post set with assets", body: "The cross-channel post set, scheduled with its images." },
      { caption: "04 / L", title: "Monthly marketing report", body: "Traffic, signups, and source attribution. What returned and what to cut." },
    ],
  },

  pipeline: {
    title: "How it runs, intake to ship",
    steps: [
      { code: "04.i01", label: "Intake (once).", body: "You give product, positioning, ICP, pricing, existing assets, and 3–5 samples of how you write. horz builds a versioned brand voice profile and messaging map, stored in Company Brain (06), so every other layer draws from the same source." },
      { code: "04.i02", label: "Plan.", body: "horz proposes a monthly content and launch calendar ([PLACEHOLDER: 8] posts, [PLACEHOLDER: 4] newsletters, 1 launch). You approve or redline it in one review. Nothing is open-ended." },
      { code: "04.i03", label: "Produce.", body: "The layer drafts each artifact against the voice profile and live keyword + GEO research. Every product claim is grounded against your own docs in Company Brain, so specs, numbers, and feature names are real." },
      { code: "04.i04", label: "Review (human-in-the-loop).", body: "Each piece routes to a human editor, then to you for one-click approve or redline. Compliance runs before the gate: CAN-SPAM footer and one-click opt-out on email, FTC AI and endorsement disclosure on paid placement, GDPR consent basis checked. Off-brand drafts are flagged, not queued." },
      { code: "04.i05", label: "Ship.", body: "Approved artifacts publish on schedule to the CMS, email tool, Product Hunt, and social. Launches run the full 6 weeks: waitlist build, public-build posts, T-0 at 12:01am PST, three launch-day emails." },
      { code: "04.i06", label: "Measure.", body: "Each artifact is tracked to traffic and signups via Search Console and the Analytics layer (05). A weekly report states what returned and what to cut. The next calendar updates from it." },
    ],
  },

  subRack: {
    intro: "A control-panel mini-rack. Each sub-capability is coded and one line.",
    rows: [
      { code: "04.1", name: "Site & Pages", desc: "Writes and ships the marketing site, landing pages, and changelog." },
      { code: "04.2", name: "Content Engine", desc: "Publishes [PLACEHOLDER: 8] posts and guides a month, in your voice." },
      { code: "04.3", name: "Search (SEO + GEO)", desc: "Ranks on Google and earns citations in AI answers." },
      { code: "04.4", name: "Launches", desc: "Runs the 6-week launch sequence to T-0." },
      { code: "04.5", name: "Email & Social", desc: "Sends the newsletter and posts to every channel on cadence." },
      { code: "04.6", name: "Attribution", desc: "Ties each signup to the post that earned it." },
      { code: "04.7", name: "Voice & Brand", desc: "Holds the versioned voice profile and flags off-brand drafts before review." },
    ],
  },

  connects: {
    title: "Connects to",
    intro: "You connect the stack once; the layer runs across it instead of handing you another dashboard.",
    groups: [
      {
        items: [
          { label: "CMS / site", note: "Webflow, Framer, or your Next.js repo (PRs to a content directory)" },
          { label: "Email & lifecycle", note: "Resend, Loops, Customer.io, Mailchimp" },
          { label: "Launch surfaces", note: "Product Hunt, Hacker News, waitlist tools" },
          { label: "Social", note: "X and LinkedIn (scheduled posting + assets)" },
          { label: "Search", note: "Google Search Console; llms.txt and schema markup served from your host" },
          { label: "Analytics", note: "GA4 / PostHog, surfaced through the Analytics layer (05)" },
          { label: "CRM", note: "HubSpot / Attio for signup and lead handoff" },
          { label: "Company Brain (06)", note: "the single grounded source for product facts and voice" },
        ],
      },
    ],
  },

  cost: {
    title: "What it costs to do this yourself",
    intro:
      "Market figures and statutory penalties here are external estimates to verify before launch. horz performance figures are marked [PLACEHOLDER].",
    items: [
      { lead: "Hire it out.", body: "A fractional CMO runs $8,000–$22,000/month [est.]. A B2B content agency, $5,000–$15,000/month [est.]. An SEO retainer, $2,500–$5,000/month [est.]. A freelance writer, $150–$2,500 per post [est.]. A real marketing function is six figures a year before a single signup." },
      { lead: "Do it with tools.", body: "You still operate the stack yourself: a copy tool, a GEO/SEO tool, an email tool, analytics. That runs $300–$800/month [est.] in seats you still have to drive." },
      { lead: "Do it personally.", body: "Marketing eats 10–15 hours a week [est.] you owe the core product, and it is the first thing dropped when engineering gets hard. The site ships once and rots." },
      { lead: "Get the launch wrong.", body: "A Product Hunt launch is a 6-week project, not a launch-day decision. Plan it in three days with no waitlist and you land at #8 instead of #1, on the one launch you had." },
      { lead: "Legal exposure.", body: "A CAN-SPAM violation is $51,744 per email [statute · verify]. FTC AI-content and disclosure non-compliance reaches $53,088 per violation [statute · verify]. GDPR fines run up to EUR 20M or 4% of global turnover [statute · verify]. One careless cold send is a five-figure mistake." },
      { lead: "Lose the new search.", body: "Overlap between top Google links and AI-cited sources has fallen from roughly 70% to under 20% [est. · verify], and the top 15 domains capture about 68% of AI citation share [est. · verify]. A founder not doing GEO is missing from the answers buyers now read first." },
    ],
  },

  trust: {
    items: [
      { lead: "Human-in-the-loop by default.", body: "Nothing publishes without your approval. The calendar is approved before any production starts, and every artifact has an approve/redline gate." },
      { lead: "Audit trail.", body: "Every published piece logs what drafted it, who reviewed it, the timestamp, the source it was grounded on, and full version history. You can answer \"why did we say that\" for any sentence shipped." },
      { lead: "Grounded against hallucination.", body: "Product claims are checked against your own docs in Company Brain before review." },
      { lead: "Email law.", body: "CAN-SPAM footers, accurate headers, honest subject lines, and one-click opt-out are enforced on every send. GDPR consent or legitimate-interest basis is checked for EU recipients before a campaign goes out." },
      { lead: "Advertising law.", body: "FTC AI-content and endorsement disclosure are applied to any paid placement. CCPA opt-outs are honored on tracked traffic." },
      { lead: "Brand consistency as a gate.", body: "The voice profile is versioned and locked. Off-brand drafts are flagged before they reach the review queue." },
    ],
  },

  proof: {
    rows: [
      { label: "[PLACEHOLDER: 47] posts shipped · [PLACEHOLDER: 12] cited in AI answers · last 30 days" },
      { label: "launch sequence: 6 weeks · [PLACEHOLDER: 11] artifacts · finished [PLACEHOLDER: #2] on Product Hunt" },
      { label: "[PLACEHOLDER: 0] CAN-SPAM / GDPR incidents across [PLACEHOLDER: 38,400] emails sent" },
    ],
  },

  objections: [
    {
      q: "AI marketing content is generic slop. It will make us sound like every other AI startup.",
      a: "Every draft is generated against your voice profile and grounded in your own product docs, not a model default or a template. A human editor and then you approve each piece before it ships, and off-brand drafts are flagged out of the queue. The bar is your last good post, not the model's first guess.",
    },
    {
      q: "Marketing is positioning, and positioning is taste. I can't hand my taste to a layer.",
      a: "You keep the taste. You set the messaging map and approve the calendar; horz executes against it. The layer owns the production line (the site, posts, launches, and search), not the decision of who you are. Same split as offloading billing to Stripe while you still set the price.",
    },
    {
      q: "AI-written content tanks SEO and gets penalized by Google.",
      a: "Google rewards helpful content regardless of how it was made. What gets penalized is thin, unedited, mass-produced pages. horz ships edited, grounded pieces and writes for both Google ranking and AI-answer citation. The real risk now is the opposite: AI-cited sources overlap with top Google links by under 20% [est. · verify], so not doing GEO is how you go missing.",
    },
    {
      q: "What about the legal exposure: spam laws, false claims, AI disclosure?",
      a: "Compliance is part of the pipeline, not an afterthought. CAN-SPAM footers and one-click opt-out, GDPR consent, FTC AI and endorsement disclosure on paid placements, and claims grounded to source all run before the approval gate. A single CAN-SPAM slip is $51,744 per email [statute · verify]. The layer's whole job is to never send one.",
    },
  ],

  oneOfSeven:
    "Marketing is layer 04 of seven, pulled out of the rack and opened. Each layer is an offloadable company function, grounded in the same Company Brain.",
};
