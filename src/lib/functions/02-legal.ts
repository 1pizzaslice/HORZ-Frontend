import type { FunctionPage } from "./types";

export const legal: FunctionPage = {
  index: "02",
  slug: "legal",
  name: "Legal",
  rackLine: "Contracts, DPAs, and filings, redlined.",
  seo: "Function page for layer 02 — the legal layer that drafts, redlines, and files your paper, with a licensed attorney on every signature line.",

  kicker: "Engineers stopped writing their own auth. Founders can stop redlining their own NDAs.",
  headline: "Your legal layer, redlined and filed.",
  subhead: [
    "It drafts the NDA, redlines the inbound vendor MSA, issues the GDPR Article 28 DPA a prospect asked for, papers the offer letter for your next hire, and files the Delaware C-corp packet with the 83(b) elections. A licensed attorney signs off before anything is signed or filed. Counsel signs; you decide. The layer does the paper.",
  ],

  work: {
    intro:
      "A descent of the artifacts this layer produces, each drawn as a section cut through the document. No screenshots.",
    artifacts: [
      {
        caption: "02 / A",
        title: "Vendor MSA redline",
        body: "An inbound master services agreement reviewed against your playbook and returned as tracked changes plus a change summary.",
      },
      {
        caption: "02 / B",
        title: "Mutual NDA",
        body: "A one-way or mutual non-disclosure agreement, drafted or redlined from your standard terms.",
      },
      {
        caption: "02 / C",
        title: "Customer MSA and order form",
        body: "Your SaaS subscription agreement and the order form that prices it.",
      },
      {
        caption: "02 / D",
        title: "GDPR Article 28 DPA",
        body: "A data-processing agreement with a sub-processor list and EU Standard Contractual Clauses.",
      },
      {
        caption: "02 / E",
        title: "Delaware C-corp incorporation packet",
        body: "Certificate of incorporation, bylaws, initial board consents, restricted stock purchase agreements, and 83(b) elections.",
      },
      {
        caption: "02 / F",
        title: "Offer letter and IP assignment (PIIA)",
        body: "An employment offer letter and the proprietary-information and inventions agreement that travels with it.",
      },
      {
        caption: "02 / G",
        title: "USPTO trademark application",
        body: "A trademark filing prepared per class.",
      },
    ],
  },

  pipeline: {
    title: "How a contract moves",
    intro: "The pipeline, intake to filing. Each step is a section cut.",
    steps: [
      {
        code: "02.i01",
        label: "Intake.",
        body: "A counterparty's paper (a vendor MSA, an inbound NDA, a customer order form) arrives by email forward, upload, or a connected DocuSign/CLM repository. Or you request a document you need: a DPA, an offer letter, an incorporation packet.",
      },
      {
        code: "02.i02",
        label: "Context pull.",
        body: "The layer reads your standard positions and prior signed contracts from Company Brain (06), plus entity details, governing law, and cap-table facts. The draft starts from your terms, not a blank template.",
      },
      {
        code: "02.i03",
        label: "Classify and map.",
        body: "Every clause is matched against your playbook (liability cap, indemnity, governing law, auto-renewal, IP, data-processing) and each deviation is flagged with the fallback position attached.",
      },
      {
        code: "02.i04",
        label: "Draft.",
        body: "It returns a tracked-changes .docx plus a plain-English summary of what changed and why. Each change traces to a playbook rule.",
      },
      {
        code: "02.i05",
        label: "Human review.",
        body: "A licensed attorney signs off on anything that will be signed or filed. A standard NDA clears fast; genuinely novel terms escalate with the issue already isolated.",
      },
      {
        code: "02.i06",
        label: "Execute and file.",
        body: "The clean signing copy routes into DocuSign, then lands in the repository with renewal dates, obligations, and the full audit trail captured. Deadlines that touch the entity (annual report, franchise filing) hand off to Tax (07).",
      },
    ],
  },

  subRack: {
    intro: "A control-panel mini-rack. Each line is one capability, coded and verb-first.",
    rows: [
      { code: "02.1", name: "Redline inbound paper", desc: "reviews a vendor MSA against your playbook in [PLACEHOLDER: under 10 min]." },
      { code: "02.2", name: "Draft from your positions", desc: "generates NDAs, MSAs, and order forms from your standard terms." },
      { code: "02.3", name: "Run privacy compliance", desc: "issues GDPR Article 28 DPAs, SCCs, and a current sub-processor list." },
      { code: "02.4", name: "File corporate docs", desc: "files incorporation, board consents, and 83(b) inside the 30-day window." },
      { code: "02.5", name: "Paper the hires", desc: "drafts offer letters, IP assignments, and contractor agreements with an AB5 check." },
      { code: "02.6", name: "Track obligations", desc: "holds every renewal date and auto-renewal in one repository." },
      { code: "02.7", name: "Escalate to counsel", desc: "routes high-risk clauses to a licensed attorney before signing." },
    ],
  },

  connects: {
    title: "Connects to",
    intro: "You connect the stack once; the layer reads and writes across it.",
    groups: [
      {
        items: [
          { label: "Contract repositories / CLM", note: "DocuSign, Ironclad, or a connected Drive folder" },
          { label: "Signature", note: "DocuSign, Dropbox Sign" },
          { label: "Cap table + entity", note: "Carta, Pulley (governing law, stock, ownership facts)" },
          { label: "Corporate filing", note: "Delaware Division of Corporations, USPTO, state registries" },
          { label: "HR (03)", note: "offer language and the handbook it papers" },
          { label: "Tax (07)", note: "entity deadlines (annual report, franchise) handed off" },
          { label: "Company Brain (06)", note: "your positions, prior contracts, and cap-table facts, read by this layer and broadcast to no one" },
        ],
      },
    ],
  },

  cost: {
    title: "What it takes off your desk",
    intro:
      "Market figures here are external estimates to verify before launch. horz performance figures are marked [PLACEHOLDER]; statutory amounts and deadlines are stated as fact and confirmed with counsel before launch.",
    items: [
      { body: "A legal team averages roughly 3 hours per contract [est.], and about 40% [est.] of that goes to low-complexity paper like routine NDAs and standard service agreements." },
      { body: "Boutique counsel runs $400–$600/hour [est.]. One enterprise negotiation (a round of comments, a call, a redline) runs 4–8 hours [est.], so $1,600–$4,800 per deal [est.]." },
      { body: "First-year legal spend lands at $5,000–$15,000 [est.] for most startups. A full AI-SaaS package (incorporation, subscription agreement, ToS, privacy policy, DPA) reaches $8,000–$20,000+ [est.]. A priced seed round runs $10,000–$25,000 [est.]." },
      { body: "A missing GDPR Article 28 DPA carries Article 83(4) fines up to EUR 10,000,000 or 2% of worldwide annual turnover, whichever is higher [statute · verify]." },
      { body: "The 83(b) election has a hard 30-day window [statute · verify]. Miss it and it is unrecoverable; the tax bill arrives as the shares vest." },
      { body: "Misclassifying a contractor under California AB5 exposes you to back taxes, penalties, and class-action litigation." },
    ],
    footer:
      "The cost that never shows on an invoice: you are the bottleneck, and the deal, the hire, or the renewal waits on the contract sitting in your inbox for [PLACEHOLDER] days of cycle time per deal.",
  },

  trust: {
    items: [
      { lead: "Human-in-the-loop is the product.", body: "The model drafts and redlines; a licensed attorney attests to anything signed or filed. Nothing gets signed or filed without a licensed human on the signature line." },
      { lead: "Audit trail on every artifact.", body: "The source document, the playbook version it was reviewed against, each change with its reason, and who or what approved it." },
      { lead: "Named regimes covered.", body: "GDPR Article 28 and 83, EU SCCs and Transfer Impact Assessments, the IRS 83(b) 30-day deadline, Delaware annual-report and franchise dates (handed to Tax, 07), USPTO trademark classes, and SOC 2 control evidence." },
      { lead: "Nothing files itself.", body: "No document signs or files itself. The sign-off node stays human." },
      { lead: "Your data stays scoped.", body: "Positions, prior contracts, cap table, and entity facts live in Company Brain (06), read by this layer and pooled into no shared training set." },
    ],
  },

  proof: {
    rows: [
      { label: "NDAs redlined", value: "[PLACEHOLDER]", note: "median turnaround [PLACEHOLDER: 8 min]" },
      { label: "GDPR Art. 28 DPAs issued", value: "[PLACEHOLDER]", note: "sub-processor lists current" },
      { label: "contracts under tracking", value: "[PLACEHOLDER]", note: "missed auto-renewals [PLACEHOLDER: 0]" },
    ],
  },

  objections: [
    {
      q: "AI hallucinates. I'm not signing a contract a model made up.",
      a: "Nothing gets signed or filed without a licensed attorney on the signature line. The model drafts and redlines against your playbook, and counsel attests. You see every tracked change and the rule it traces to. Because the signer owns accuracy regardless of the tool, review is wired into the pipeline, not bolted on after.",
    },
    {
      q: "Who is liable when it gets a clause wrong?",
      a: "A licensed attorney reviews and stands behind the filed work, the same accountability you get from a firm, backed by the audit trail showing what was reviewed and why. You are never handed raw model output and told to trust it. High-risk terms escalate to that attorney with the issue already isolated.",
    },
    {
      q: "My contracts and cap table are the most sensitive thing I have.",
      a: "Your positions, prior contracts, and entity data stay scoped to your Company Brain (06), not pooled into shared training. Every access is logged. The layer reads your context to draft from your terms; it does not expose it to anyone else.",
    },
    {
      q: "My deals aren't templates. The edge cases are exactly where this breaks.",
      a: "Routine paper (an inbound NDA, a standard order form) clears fast against your playbook. Genuinely novel terms escalate to counsel with the deviation flagged and a fallback already drafted. You spend attorney attention on the clauses that are actually unusual and skip it on the ninety that aren't.",
    },
  ],

  oneOfSeven:
    "Legal is layer 02 of the seven horz runs around your business. It pulls your positions from Company Brain (06), papers your hires with HR (03), and hands entity deadlines to Tax (07).",
};
