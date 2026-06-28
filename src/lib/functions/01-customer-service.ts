import type { FunctionPage } from "./types";

export const customerService: FunctionPage = {
  index: "01",
  slug: "customer-service",
  name: "Customer Service",
  rackLine: "Resolves tickets 24/7, in your product's voice.",
  seo: "Function page for layer 01 — the support layer that reads every ticket, resolves what it can in your product's voice, and routes the rest to you with the full thread attached.",

  headline: "Your support layer, answered and closed.",
  subhead: [
    "It reads every inbound message: the 2am password reset, the billing dispute, the \"where's my refund\" filed as a bug report. It finds the answer in your docs and your systems and closes it in your product's voice. The tickets it can't close cleanly route to you with the full transcript, the customer's account state, and a drafted reply attached. You keep the edge cases worth your attention. The queue stops being yours.",
  ],

  work: {
    intro:
      "A vertical descent of the artifacts this layer produces. Each is a drawn section, never a screenshot.",
    artifacts: [
      {
        caption: "01 / A",
        title: "Confidence-scored triage queue",
        body: "Every inbound message classified by intent, account state, and sentiment, then routed: close, draft, or escalate.",
      },
      {
        caption: "01 / B",
        title: "Resolved ticket threads",
        body: "Closed conversations written in your tone, with the action taken and a source citation attached to the reply.",
      },
      {
        caption: "01 / C",
        title: "Escalation handoffs",
        body: "The edge cases passed to a person: full transcript, the customer's account state, and a draft ready to send.",
      },
      {
        caption: "01 / D",
        title: "Macros and canned responses",
        body: "Reusable replies built from your top intents, versioned as your product changes.",
      },
      {
        caption: "01 / E",
        title: "Help-center articles",
        body: "New docs drafted when a question recurs and no answer exists, queued for your approval.",
      },
      {
        caption: "01 / F",
        title: "Multilingual replies",
        body: "The same answer returned in the customer's language across [PLACEHOLDER: 30+] languages.",
      },
      {
        caption: "01 / G",
        title: "Weekly support digest",
        body: "What customers asked, what broke, and what the product should fix, rolled up once a week.",
      },
      {
        caption: "01 / H",
        title: "Immutable audit log",
        body: "For any resolution: the input, the retrieved source, the model version, the action taken, and the human who approved it.",
      },
    ],
  },

  pipeline: {
    title: "How the layer runs",
    intro: "The pipeline, intake to digest. Each step keyed to its mono index.",
    steps: [
      {
        code: "01.i01",
        label: "Ingest.",
        body: "Connect your help center, product docs, changelog, and past ticket logs. The layer builds a retrieval index and learns your tone from threads you already resolved.",
      },
      {
        code: "01.i02",
        label: "Wire actions.",
        body: "Authenticated tool access to billing (Stripe), your auth provider, your app DB/API, and CRM, so it can issue a refund, reset a seat, or resend an invoice, not only answer.",
      },
      {
        code: "01.i03",
        label: "Triage.",
        body: "Every message is classified by intent, account state, and sentiment, then scored for confidence.",
      },
      {
        code: "01.i04",
        label: "Resolve.",
        body: "High-confidence tickets are answered and closed in your voice, the action executed and logged, a source citation attached.",
      },
      {
        code: "01.i05",
        label: "Escalate.",
        body: "Low-confidence, high-risk, or explicit \"get me a human\" tickets route to you with the transcript, the customer data, and a draft to send.",
      },
      {
        code: "01.i06",
        label: "Review.",
        body: "A sampled slice of closed tickets queues for your approval; pinned corrections update behavior, and policy rules force set cases to a person.",
      },
      {
        code: "01.i07",
        label: "Output.",
        body: "Closed threads, an updated help-center article when a gap recurs, and a weekly digest of what customers asked, what broke, and what to fix.",
      },
    ],
  },

  subRack: {
    intro: "The sub-capabilities, rendered as a control-panel mini-rack inside 01.",
    rows: [
      { code: "01.1", name: "Triage & Intent", desc: "Classifies every ticket by intent, account state, and sentiment." },
      { code: "01.2", name: "Resolution", desc: "Closes the ticket with no human touch, in your product's voice." },
      { code: "01.3", name: "Actioned Replies", desc: "Runs refunds, seat resets, and invoice re-sends, not just replies." },
      { code: "01.4", name: "Human Escalation", desc: "Hands edge cases to a person with the full thread attached." },
      { code: "01.5", name: "Knowledge Sync", desc: "Drafts help-center articles from recurring questions." },
      { code: "01.6", name: "Voice & QA", desc: "Matches your tone; samples [PLACEHOLDER: 5%] of replies for review." },
      { code: "01.7", name: "Weekly Digest", desc: "Reports CSAT, deflection, and surfaced bugs every week." },
    ],
  },

  connects: {
    title: "What it reads, what it acts on",
    groups: [
      {
        head: "Reads",
        items: [
          { label: "Help center and docs (Notion, GitBook, Markdown, your marketing site)" },
          { label: "Past ticket logs (Zendesk, Intercom, Gorgias, Front, Help Scout)" },
          { label: "Channels: in-app chat widget, email, Slack, WhatsApp/SMS" },
          { label: "Product changelog and status page" },
          { label: "Company Brain (layer 06) as the shared knowledge graph" },
        ],
      },
      {
        head: "Acts on",
        items: [
          { label: "Stripe", note: "refunds, invoices, billing state" },
          { label: "Your auth provider", note: "seat resets, account access" },
          { label: "Your app DB/API", note: "order status, account changes" },
          { label: "CRM (HubSpot/Salesforce)", note: "contact and deal context" },
        ],
      },
    ],
    footer:
      "You connect the stack once; the layer runs across it instead of handing you another dashboard.",
  },

  cost: {
    title: "The math on doing it yourself",
    intro:
      "Market figures here are external estimates to verify before launch. Every horz performance figure is marked [PLACEHOLDER].",
    items: [
      { body: "A first support hire runs $60–80k/year [est.] fully loaded, and covers one timezone, one language, eight hours a day." },
      { body: "Founders who self-serve support lose 8–12 hours/week [est.] to the inbox, the most expensive labor in the company answering \"how do I reset my password.\"" },
      { body: "Human cost per resolution sits at about $9 [est.]. The same ticket resolved by this layer runs about $0.94 [PLACEHOLDER]." },
      { body: "Coverage gaps compound: a 2am ticket waits until morning, first-response time slips, churn follows. Customers are roughly 2.4x [est.] more likely to stay after a fast resolution." },
    ],
  },

  trust: {
    items: [
      { lead: "Human-in-the-loop by policy.", body: "You set the rules that always route to a person: refunds over a set amount, cancellations, legal or safety language. A sampled [PLACEHOLDER: 5%] of closed tickets queues for review." },
      { lead: "Confidence-gated.", body: "Any reply below your threshold becomes a draft a human approves, never an answer that sends itself." },
      { lead: "Grounded answers.", body: "Each reply is retrieved from your docs and systems and cites its source. The layer says \"I don't know\" and escalates rather than inventing policy." },
      { lead: "PII redaction before logging.", body: "Customer data is masked before any prompt or completion is written to the log, a common AI audit finding when it is skipped." },
      { lead: "Immutable audit trail.", body: "For any resolution you can produce the input, the retrieved source, the model version, the action taken, and the human who approved it." },
      { lead: "Compliance posture.", body: "SOC 2 Type II and ISO 27001 on the platform; GDPR-aligned handling with regional data residency and DPAs you can pass through to your own customers." },
    ],
    footer: "You sign off the edge cases; the layer closes the rest.",
  },

  proof: {
    rows: [
      { label: "DEFLECTION", value: "[PLACEHOLDER: 68%]", note: "tickets closed with no human touch (mo. 3)" },
      { label: "FIRST_RESP", value: "[PLACEHOLDER: 41s]", note: "median, every channel, 24/7" },
      { label: "COST/TICKET", value: "[PLACEHOLDER: $0.94]", note: "by the layer · vs $9 [est.] by hand" },
    ],
  },

  objections: [
    {
      q: "AI will hallucinate a policy and tell a customer something that costs me money.",
      a: "It answers only from your docs and systems, cites the source, and is gated by a confidence threshold; below it, the reply becomes a draft a human approves. Refunds, cancellations, and anything you flag always route to a person. It is built to say \"I don't know\" and escalate, which is cheaper than a confident wrong answer.",
    },
    {
      q: "Support is where I hear my customers. If I hand it off, I go deaf to the product.",
      a: "You hear more, not less. Every ticket is classified and rolled into a weekly digest of top intents, what broke, and what to fix. You read the pattern instead of 200 individual \"it's not working\" threads.",
    },
    {
      q: "It'll sound like a robot and embarrass my brand.",
      a: "It learns tone from your resolved tickets, help center, and docs, not a generic template. You can read a sample of replies, pin corrections, and set what it must never say. The test is whether a customer can tell, and the bar we hold is that they can't.",
    },
    {
      q: "My product is technical and regulated; a generic bot can't handle my tickets.",
      a: "The standard work is tier-1 volume: resets, refunds, billing, status. That is what the layer closes. The technical and regulated remainder is exactly what it escalates to you, with full context. You stop drowning in the easy tickets and keep the hard ones. It runs inside SOC 2 and GDPR controls, with an audit trail for every decision.",
    },
  ],

  oneOfSeven:
    "Customer service is the first stratum of seven. Each is an offloadable company function drawing from the same Company Brain.",
};
