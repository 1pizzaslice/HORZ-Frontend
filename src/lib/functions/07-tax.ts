import type { FunctionPage } from "./types";

export const tax: FunctionPage = {
  index: "07",
  slug: "tax",
  name: "Tax",
  rackLine: "Federal, state, and franchise, filed on time.",
  seo: "Function page for layer 07 — the tax layer that derives what you owe, drafts every form from your closed books, and files before the date with a licensed CPA on the signature.",

  headline: "Every return your company owes, on one calendar.",
  subhead: [
    "Form 1120, the Delaware franchise report, a return in every state you've hired into, an R&D credit on Form 6765, a 1099-NEC for each contractor. Drafted from your closed books, signed by a licensed CPA, transmitted before the deadline.",
  ],

  work: {
    intro:
      "Connect the inputs once: bank feeds (Mercury, Brex, Ramp), payroll (Gusto, Rippling), billing (Stripe), cap table (Carta). horz reads them through Company Brain (06), derives what you owe and where, drafts each form, routes it to a licensed preparer to sign, and files before the date. Here is what it produces, top to bottom. Each is a section cut, never a screenshot.",
    artifacts: [
      { caption: "07 / A", title: "Federal return — Form 1120 / 1120-S / 1065", body: "Your corporate income return, drafted from the closed books, every figure carrying a link back to the transaction it came from." },
      { caption: "07 / B", title: "Delaware franchise — annual report and payment", body: "The March 1 filing, computed both ways so you pay the Assumed Par Value figure instead of the default Authorized Shares quote." },
      { caption: "07 / C", title: "State income and franchise returns — one per nexus state", body: "A return in each state where a remote hire or revenue crossed the threshold, registered before you were required to collect." },
      { caption: "07 / D", title: "R&D credit study — Form 6765 with Form 8974 offset", body: "Qualifying spend isolated from the year's transactions and claimed against payroll tax, up to the statutory cap for a company that has never turned a profit." },
      { caption: "07 / E", title: "Section 174A election — plus retroactive 2022–2024 amendments", body: "The R&D expensing election, with prior-year amendments filed before the retroactive window closes. [statute · verify provision and date with current tax counsel]" },
      { caption: "07 / F", title: "Sales tax — registrations and periodic returns", body: "Registration and remittance across the roughly 25 jurisdictions that tax SaaS, tracked against Wayfair economic thresholds." },
      { caption: "07 / G", title: "Form 1099-NEC — every contractor paid $600 or more", body: "One form per contractor, prepared and filed by January 31, before the per-form penalty lands." },
      { caption: "07 / H", title: "Form 5472 — for 25%-foreign-owned corporations", body: "The disclosure that carries a $25,000 penalty for being late [statute · verify], filed on time when a foreign owner holds 25% or more." },
      { caption: "07 / I", title: "Quarterly estimated payments — vouchers and schedule", body: "Four estimates dated and scheduled against the live IRS and state calendars, paid without a reminder." },
      { caption: "07 / J", title: "Form 8879-CORP — e-file authorization package", body: "The sheet you sign as an officer, under penalty of perjury, to authorize the transmission. Nothing files without it." },
      { caption: "07 / K", title: "Tax calendar and obligation map", body: "The dated map of everything this entity owes, derived from the facts (entity type, state of incorporation, where employees live, where revenue lands), not remembered." },
    ],
  },

  pipeline: {
    title: "How the layer runs",
    intro: "The pipeline, connect to filed. Each step keyed to its mono index.",
    steps: [
      { code: "07.i01", label: "Connect.", body: "Bank feeds, payroll, billing, and cap table connect once." },
      { code: "07.i02", label: "Derive.", body: "The layer reads through Company Brain (06) and derives what you owe and where, from entity type, state of incorporation, where employees live, and where revenue lands." },
      { code: "07.i03", label: "Draft.", body: "Each form is drafted from the closed books, every figure carrying a link back to the source transaction." },
      { code: "07.i04", label: "Review.", body: "A licensed CPA or EA reviews and signs as paid preparer, with high-judgment calls escalated and the facts already attached." },
      { code: "07.i05", label: "Authorize.", body: "You sign Form 8879-CORP as the officer. You authorize the e-file." },
      { code: "07.i06", label: "File.", body: "The return transmits before the deadline; workpapers and the audit trail are captured as it goes." },
    ],
  },

  subRack: {
    intro: "A control-panel mini-rack. Statutory amounts are confirmed with tax counsel before launch.",
    rows: [
      { code: "07.1", name: "Federal Return", desc: "File Form 1120 from your closed books, before April 15." },
      { code: "07.2", name: "Delaware Franchise", desc: "File the annual report and elect Assumed Par Value over the Authorized Shares quote (capped at $200,000 [statute · verify])." },
      { code: "07.3", name: "Multi-State & Nexus", desc: "Track all 50 states; file where a remote hire or $100,000 creates nexus." },
      { code: "07.4", name: "R&D Credit", desc: "Claim the R&D credit against payroll on Form 6765, to the statutory cap." },
      { code: "07.5", name: "Sales Tax", desc: "Register and remit across the ~25 jurisdictions that tax SaaS." },
      { code: "07.6", name: "Contractor & Foreign", desc: "File every 1099-NEC and Form 5472 before the penalty lands." },
      { code: "07.7", name: "Tax Calendar", desc: "Hold every deadline and quarterly estimate on the live IRS and state calendars." },
    ],
  },

  connects: {
    title: "Connects to",
    intro: "You connect the inputs once; the layer derives, drafts, and files across them.",
    groups: [
      {
        items: [
          { label: "Bank feeds", note: "Mercury, Brex, Ramp" },
          { label: "Payroll", note: "Gusto, Rippling" },
          { label: "Billing", note: "Stripe" },
          { label: "Cap table", note: "Carta, Pulley" },
          { label: "Accounting / books", note: "QuickBooks, Xero (the closed books)" },
          { label: "Filing", note: "IRS e-file, state portals, Delaware Division of Corporations" },
          { label: "Legal (02)", note: "entity deadlines handed over" },
          { label: "Company Brain (06)", note: "the facts the obligation map derives from" },
        ],
      },
    ],
  },

  cost: {
    title: "What it costs to do this yourself",
    intro:
      "Market figures here are external estimates to verify before launch. Statutory penalties are confirmed with tax counsel before launch.",
    items: [
      { body: "Startup tax prep runs $2,000–$10,000/year [est.] for a CPA, more once an R&D study and multi-state returns are in scope." },
      { body: "An R&D credit study alone runs $5,000–$15,000 [est.] in fees, often eating a chunk of the credit it claims." },
      { body: "A missed Form 5472 is $25,000 [statute · verify]. A missed 1099-NEC is $60–330 per form [statute · verify]. A late Delaware franchise is $200 plus interest [statute · verify]." },
      { body: "The cost that doesn't appear on a fee schedule: substantiation you can't produce in an audit, which turns a lookup into a reconstruction." },
    ],
  },

  trust: {
    items: [
      { lead: "A human signs every filing.", body: "A licensed CPA or EA signs as paid preparer; you sign Form 8879-CORP as the officer. Nothing files without it." },
      { lead: "Every figure is substantiated.", body: "Each number carries a workpaper and a source-transaction line, built as the return is built." },
      { lead: "The calendar is built, not recalled.", body: "The obligation map is derived from your entity and your filings, and horz files ahead of each date." },
      { lead: "We stand behind the deadline.", body: "If a horz-managed filing is late through our error, [PLACEHOLDER: we cover the penalty]." },
      { lead: "Compliance posture.", body: "SOC 2 Type II on the platform; financial and entity data held under those controls and never trained on." },
    ],
  },

  proof: {
    rows: [
      { label: "R&D CREDITS CLAIMED", value: "$[PLACEHOLDER]", note: "across [PLACEHOLDER] startups" },
      { label: "RETURNS FILED", value: "[PLACEHOLDER]", note: "[PLACEHOLDER: 100%] before deadline" },
      { label: "DE FRANCHISE CUT", value: "$[PLACEHOLDER] → $[PLACEHOLDER]", note: "(Assumed Par Value)" },
      { label: "LATE FILINGS", value: "[PLACEHOLDER: 0]", note: "across [PLACEHOLDER] entities in [PLACEHOLDER] states" },
    ],
  },

  objections: [
    {
      q: "I'm not signing a return an AI wrote.",
      a: "You aren't. A licensed CPA or EA signs as paid preparer, and you sign Form 8879-CORP as the officer. horz drafts the return and shows the source transaction behind every number. The human stays on the signature line; the machine removes the data entry.",
    },
    {
      q: "If the IRS audits, who is accountable?",
      a: "The paid preparer who signed is accountable, and every figure carries a workpaper and a source line. Most founders fail audits because they can't substantiate a number they claimed. Here the substantiation is built as the return is built, so an audit becomes a lookup, not a reconstruction.",
    },
    {
      q: "Tax is too edge-case-heavy to automate. My situation is unusual.",
      a: "The forms are standard. The judgment is the edge cases: the Delaware method, R&D qualification, nexus thresholds, foreign ownership. horz automates the standard work and routes the judgment calls to the preparer with the facts already attached. The unusual parts get more human attention, not less.",
    },
    {
      q: "What if it misses a deadline and I eat the penalty?",
      a: "The calendar is built from your entity and your filings, and horz files ahead of each date. If a horz-managed filing is late through our error, [PLACEHOLDER: we cover the penalty]. The DIY baseline is $200 plus interest for Delaware and $25,000 for a missed Form 5472 [statute · verify].",
    },
  ],

  oneOfSeven:
    "Tax is layer 07 of the seven horz runs around your core. The return is built from books Company Brain (06) already closed; the obligation map is derived from the same graph, never re-collected by questionnaire.",
};
