import type { FunctionPage } from "./types";

export const companyBrain: FunctionPage = {
  index: "06",
  slug: "company-brain",
  name: "Company Brain",
  rackLine: "The graph of everything the company knows, with the source attached.",
  seo: "Function page for layer 06 — the memory layer that holds everything the company knows as one cited graph, and the substrate the other six layers read and write.",

  kicker: "Answers what your company knows, with the source and last-edited date attached.",
  headline: "Your company's memory, indexed and cited.",
  subhead: [
    "A cited answer with its source documents and each source's last-edited date. A graph of every person, customer, deal, document, and decision, and the edges between them. A decision log, an onboarding brief, a dossier on any customer or vendor, and the canonical pricing, refund, and brand facts the other six layers read from. Your company already knows these things. This is the layer that can retrieve them.",
    "The \"why\" behind your pricing, the promise you made a customer in March, the vendor you passed on and the reason, the refund rule someone settled in Slack at 1am: today that knowledge sits in Slack, Notion, Drive, Gmail, Linear, GitHub, and call transcripts, and most of it lives in two or three people's heads. Company Brain reads all of it and holds it as one connected graph. You ask in plain language; it answers with the source attached.",
  ],

  work: {
    intro:
      "A vertical descent through what this layer produces. Every panel is drawn in the section language, never a screenshot of a real tool.",
    artifacts: [
      { caption: "06 / A", title: "A cited answer", body: "The response to a plain-language question, returned with its linked source documents and the date each was last edited. No source, no claim." },
      { caption: "06 / B", title: "The knowledge graph", body: "A browsable map of every person, customer, deal, document, and decision, with the relationships and claims between them resolved and deduped." },
      { caption: "06 / C", title: "A decision record", body: "What was decided, when, by whom, the reason, and what later superseded it. The \"why\" stops living in one person's head." },
      { caption: "06 / D", title: "A new-hire onboarding brief", body: "What a person needs to know about a project, account, or system, assembled from the graph before their first day." },
      { caption: "06 / E", title: "A dossier on demand", body: "\"Everything we know about [customer / vendor / deal],\" citations included, in one read." },
      { caption: "06 / F", title: "A freshness report", body: "Documents untouched past a set window, duplicates, and conflicting versions, routed to a human to resolve." },
      { caption: "06 / G", title: "A canonical-fact set", body: "The agreed pricing logic, refund policy, and brand facts the other six layers read so they stay consistent. One source of truth instead of six contradicting copies." },
      { caption: "06 / H", title: "A context API / MCP endpoint", body: "The graph exposed over MCP so layers 01–07 read the same facts, and every write back lands as a new node with provenance." },
    ],
  },

  pipeline: {
    title: "How the layer runs",
    intro: "The pipeline, connect to serve. Each step keyed to its mono index.",
    steps: [
      { code: "06.i01", label: "Connect.", body: "Index your sources read-only, source permissions intact. The Brain reads; it does not move your data out of the systems that hold it." },
      { code: "06.i02", label: "Resolve.", body: "Build the graph: people, customers, deals, documents, and decisions, with the edges and claims between them resolved and deduped." },
      { code: "06.i03", label: "Ask.", body: "A plain-language question returns a cited answer with its source documents and each source's last-edited date." },
      { code: "06.i04", label: "Record.", body: "Every decision lands in the log with its date, owner, reason, and what later superseded it." },
      { code: "06.i05", label: "Govern.", body: "A weekly freshness pass flags stale, duplicate, and conflicting docs and routes them to a human to resolve." },
      { code: "06.i06", label: "Serve.", body: "The graph is exposed over MCP so layers 01–07 read the same facts; every write back lands as a new node with provenance." },
    ],
  },

  subRack: {
    intro: "The layer, opened. Seven sub-capabilities, coded 06.1–06.7.",
    rows: [
      { code: "06.1", name: "Connectors", desc: "Indexes 12+ sources read-only, source permissions intact." },
      { code: "06.2", name: "Knowledge Graph", desc: "Maps every person, deal, doc, and decision as one graph." },
      { code: "06.3", name: "Ask", desc: "Answers any question in plain language, with citations." },
      { code: "06.4", name: "Decision Log", desc: "Records each decision with date, owner, and reason." },
      { code: "06.5", name: "Onboarding Brief", desc: "Writes a new hire's first-week brief from the graph." },
      { code: "06.6", name: "Freshness & Governance", desc: "Flags stale, duplicate, and conflicting facts every week." },
      { code: "06.7", name: "Context API", desc: "Serves the same facts to the other six layers over MCP." },
    ],
  },

  connects: {
    title: "Connects to",
    intro: "You connect the stack once, read-only; the Brain indexes it without moving it.",
    groups: [
      {
        items: [
          { label: "Docs / wiki", note: "Notion, Confluence, Google Drive" },
          { label: "Chat", note: "Slack, Microsoft Teams" },
          { label: "Email", note: "Gmail, Outlook" },
          { label: "Engineering", note: "Linear, Jira, GitHub" },
          { label: "CRM", note: "HubSpot, Salesforce, Attio" },
          { label: "Calls", note: "Gong, Fireflies transcripts" },
          { label: "The other six layers (01–05, 07)", note: "read and write here over MCP" },
        ],
      },
    ],
  },

  cost: {
    title: "What it costs to do this yourself",
    intro: "Market figures here are external estimates to verify before launch.",
    items: [
      { body: "The knowledge is already yours. The cost is that it lives across 6–8 tools [est.] and in two or three people's heads, and retrieval is a Slack search plus a \"who knows about X\" ping." },
      { body: "The expensive version: a decision re-litigated because no one recorded why it was made the first time, and the context that walks out the door when the person holding it leaves." },
      { body: "A dedicated knowledge/ops hire runs $90–140k/year [est.]. The cheaper-looking alternative is the founder serving as the company's index, which scales to exactly one company." },
    ],
  },

  trust: {
    items: [
      { lead: "Read-only, never trained on.", body: "Connectors are read-only and your corpus never trains a model. Zero-data-retention terms with the model providers, SOC 2 Type II, a GDPR DPA, and a log of every read." },
      { lead: "Permissions mirror the source.", body: "Access is resolved at query time against the source system; each person sees only what they could already open. The Brain never widens who sees what." },
      { lead: "Every answer is cited.", body: "Each answer returns with its source and the date that source was last edited. Where two documents disagree, you see both flagged, not an averaged guess." },
      { lead: "Writes carry provenance.", body: "Facts written back by other layers land as new nodes with their origin attached; nothing is overwritten silently." },
      { lead: "Your source of truth stays put.", body: "The Brain is an index over your data, not a copy that replaces it. Notion, Slack, and Drive remain authoritative." },
    ],
  },

  proof: {
    rows: [
      { label: "SOURCES INDEXED", value: "[PLACEHOLDER]", note: "across the company" },
      { label: "MEDIAN ANSWER", value: "[PLACEHOLDER]s", note: "[PLACEHOLDER] citations attached" },
      { label: "SOURCED & CURRENT", value: "[PLACEHOLDER]%", note: "of answers cite a source edited in the last [PLACEHOLDER] days" },
      { label: "FLAGGED THIS MONTH", value: "[PLACEHOLDER]", note: "stale, duplicate, or conflicting docs routed to a human" },
    ],
  },

  objectionsTitle: "What founders ask first",
  objections: [
    {
      q: "I'm not feeding my whole company into someone's AI for it to train on.",
      a: "Connectors are read-only and your corpus never trains a model. Zero-data-retention terms with the model providers, SOC 2 Type II, a GDPR DPA, and a log of every read. The Brain is a private index over your data, not a contribution to anyone's training set.",
    },
    {
      q: "It'll hallucinate a confident, wrong answer about my own company.",
      a: "If it can't cite the source, it won't make the claim. Every answer is grounded in your documents and returns with the citation and the date that source was last edited. Where two documents disagree you see both flagged, not an averaged guess, and you can audit any answer back to the exact line it came from.",
    },
    {
      q: "My docs are a mess and half are out of date. Garbage in, garbage out.",
      a: "That is what the freshness pass is for. It finds the duplicates, the stale docs, and the conflicting versions you didn't know you had, then routes them to you to resolve. The Brain makes the mess legible before it answers from it.",
    },
    {
      q: "Permissions. I can't have everyone able to see the cap table or comp doc.",
      a: "Access mirrors the source system at query time. Each person sees only what they could already open, the Brain never overrides your existing permissions, and every access is logged. A read-only connector cannot widen who sees what.",
    },
    {
      q: "If I put my whole company on one young backend and it goes down, I lose everything at once.",
      a: "The Brain is an index over your data, not custody of it. Connectors are read-only, so Notion, Slack, Drive, and the rest stay intact and authoritative; nothing is moved out of the systems you already control. You can export the full graph and every artifact at any time, the layers degrade independently, status is public, and the licensed humans on the legal, HR, and tax lines are real accountable parties. The concentration is in retrieval, not in where your source of truth lives.",
    },
  ],

  oneOfSeven:
    "Company Brain is the sixth of seven layers, and the one the other six read and write. Resolved tickets, signed DPAs, comp data, launches, metrics, and filings all land here as facts; Customer Service, Legal, HR, Marketing, Analytics, and Tax all answer from this one memory.",
};
