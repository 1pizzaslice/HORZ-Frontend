import type { FunctionPage } from "./types";

export const analytics: FunctionPage = {
  index: "05",
  slug: "analytics",
  name: "Analytics",
  rackLine: "Every metric, defined once, on one dashboard.",
  seo: "Function page for layer 05 — the analytics layer that pipes every source into one warehouse, fixes one approved definition per metric, and answers in plain English with the SQL shown.",

  headline: "Your analytics layer, defined once and answered.",
  subhead: [
    "One governed warehouse, one approved definition per metric, and a box you ask in plain English. It ships the live dashboard, the weekly metrics digest, the monthly board numbers, and anomaly alerts with a ranked root-cause, and it shows the SQL behind every figure. Not a BI tool you operate. The analytics function you offload.",
  ],

  work: {
    intro:
      "A vertical descent through what this layer produces. Each artifact is drawn in the section language, never a screenshot.",
    artifacts: [
      { caption: "05 / A", title: "The live metrics dashboard", body: "One board for MRR, NRR, CAC, payback, runway, DAU/MAU, activation, and churn, each computed on the definition you approved." },
      { caption: "05 / B", title: "The metric dictionary", body: "One approved, versioned definition per metric, each mapped to the raw tables it reads from." },
      { caption: "05 / C", title: "The weekly metrics digest", body: "A Monday inbox note: what moved, by how much, and why, before you open a single tab." },
      { caption: "05 / D", title: "The monthly board / investor-update numbers block", body: "The board-deck metric page and the investor-update figures, generated, then held for your review before they're sent." },
      { caption: "05 / E", title: "Anomaly alerts with ranked root-cause", body: "A flagged metric with its likely cause ranked, e.g. signups −22% Tue · 80% paid search · campaign X paused." },
      { caption: "05 / F", title: "Ad-hoc query answers", body: "A plain-English question returns a number, plus the SQL it ran and the rows it used." },
      { caption: "05 / G", title: "Cohort, funnel, and retention reports", body: "Retention by signup week, activation by source, funnel by step, built on demand." },
      { caption: "05 / H", title: "The managed warehouse and metric models", body: "The warehouse, the pipelines, and the semantic models. Infrastructure you own the output of, not a tool you run." },
    ],
  },

  pipeline: {
    title: "How the layer runs",
    intro: "The pipeline, source to answer. Each step keyed to its mono index.",
    steps: [
      { code: "05.i01", label: "Ingest.", body: "Connect billing, the product DB, product analytics, CRM, and ads. The layer pipes them into one governed warehouse on a schedule." },
      { code: "05.i02", label: "Model.", body: "It fixes one approved, versioned definition per metric, each mapped to the raw tables it reads from. You approve the definition before any number quotes it." },
      { code: "05.i03", label: "Ask.", body: "A plain-English question is compiled to SQL against the semantic layer (never your raw tables) and returns a number, the SQL, and the rows it touched." },
      { code: "05.i04", label: "Watch.", body: "Anomaly detection flags any metric that leaves its range and ranks the likely cause from the connected sources." },
      { code: "05.i05", label: "Report.", body: "The weekly digest and the monthly board numbers are generated on cadence." },
      { code: "05.i06", label: "Review.", body: "Board and investor numbers are held for your sign-off before they're sent. You read the SQL behind any figure first." },
    ],
  },

  subRack: {
    intro: "A control-panel mini-rack.",
    rows: [
      { code: "05.1", name: "Ingest", desc: "Pipes 10+ sources into one governed warehouse." },
      { code: "05.2", name: "Metric Layer", desc: "Fixes one approved, versioned definition per metric." },
      { code: "05.3", name: "Ask", desc: "Answers a plain-English question in [PLACEHOLDER: 9s], SQL shown." },
      { code: "05.4", name: "Dashboard", desc: "Renders MRR, NRR, CAC, and runway on one board." },
      { code: "05.5", name: "Anomaly Watch", desc: "Flags any metric that leaves its range, with a ranked root-cause." },
      { code: "05.6", name: "Reporting", desc: "Ships the weekly digest and the monthly board numbers." },
      { code: "05.7", name: "Cohorts", desc: "Builds retention, funnel, and cohort reports on demand." },
    ],
  },

  connects: {
    title: "Connects to",
    intro: "You connect the stack once; the layer pipes it into one warehouse instead of handing you another dashboard.",
    groups: [
      {
        items: [
          { label: "Billing", note: "Stripe" },
          { label: "Product / app DB", note: "Postgres, your API" },
          { label: "Product analytics", note: "PostHog, GA4, Amplitude" },
          { label: "CRM", note: "HubSpot, Salesforce" },
          { label: "Ads", note: "Google Ads, Meta" },
          { label: "Warehouse", note: "managed by horz, or your Snowflake / BigQuery" },
          { label: "Company Brain (06)", note: "the shared canonical definitions every layer reads" },
        ],
      },
    ],
  },

  cost: {
    title: "What it costs to do this yourself",
    intro:
      "Market figures here are external estimates to verify before launch. horz performance figures are marked [PLACEHOLDER].",
    items: [
      { body: "An analytics engineer runs about $158k/year [est.] fully loaded, before the warehouse and BI seats underneath them." },
      { body: "A self-run stack (warehouse, ETL, a BI tool, seats) runs $500–$2,000/month [est.] that you still have to model and maintain." },
      { body: "Without one definition layer, MRR in Stripe disagrees with signups in PostHog, and you reconcile the two by hand the night before a board meeting." },
      { body: "The decision you delay because you can't trust the number is the real cost, and it does not show on any invoice." },
    ],
  },

  trust: {
    items: [
      { lead: "The model never queries your raw tables.", body: "It writes SQL against a semantic layer of definitions you approved, and every answer ships with the SQL and the rows it touched." },
      { lead: "PII masked before any model call.", body: "Customer data is masked before anything reaches a model and is never written to logs." },
      { lead: "Role-scoped at the query level.", body: "Each person sees only the fields and rows their role allows, and every read is logged for SOC 2." },
      { lead: "You own the definitions.", body: "You approve what \"active,\" \"churned,\" and \"MRR\" mean; the number on the dashboard is the one you signed off." },
      { lead: "Board numbers held for sign-off.", body: "Investor and board figures are generated, then held for your review before they're sent." },
    ],
  },

  proof: {
    rows: [
      { label: "SOURCES UNIFIED INTO ONE WAREHOUSE", value: "[PLACEHOLDER: 11]" },
      { label: "QUERY ACCURACY vs THE SEMANTIC LAYER", value: "[PLACEHOLDER: 92%]" },
      { label: "MEDIAN QUESTION → ANSWERED NUMBER", value: "[PLACEHOLDER: 9s]" },
      { label: "ANOMALIES FLAGGED BEFORE FOUNDER NOTICED", value: "[PLACEHOLDER: 38]" },
      { label: "ANALYTICS-ENGINEER HIRE AVOIDED", value: "$158K/yr [est.]" },
    ],
  },

  objections: [
    {
      q: "AI gets the numbers wrong or hallucinates SQL.",
      a: "It never queries your raw tables. It writes SQL against a semantic layer of definitions you approved, which is why accuracy runs [PLACEHOLDER: 85–95%] against the roughly 65% [est.] that raw text-to-SQL gives. Every answer ships with the SQL and the rows it touched, so you check the math in ten seconds instead of trusting a number you can't trace.",
    },
    {
      q: "My data is too messy and scattered for this to work.",
      a: "Messy and scattered is the normal starting state, and removing it is most of the job. The layer maps your dozen sources into one warehouse and forces one definition per metric. The mess is the work, not a precondition you fix first.",
    },
    {
      q: "I don't want an AI touching customer data or sending it to a model.",
      a: "PII is masked before anything reaches a model and is never written to logs. Access is role-scoped at the query level, and every read is logged for SOC 2. The model sees aggregates and approved fields, not raw customer records.",
    },
    {
      q: "I'll lose the founder intuition I get from being in the data myself.",
      a: "You keep the questions; the layer removes the SQL between you and the answer. You still decide what \"active\" means (you approve every definition) and you can read the SQL behind any number. It is faster access to your own data, not a wall in front of it.",
    },
  ],

  oneOfSeven:
    "Analytics is layer 05 of seven. It shares its canonical definitions with Company Brain (06), so the number on your dashboard is the number in every other layer.",
};
