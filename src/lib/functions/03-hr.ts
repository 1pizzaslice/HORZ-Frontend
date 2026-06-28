import type { FunctionPage } from "./types";

export const hr: FunctionPage = {
  index: "03",
  slug: "hr",
  name: "HR",
  rackLine: "Hiring, payroll, and onboarding, on deadline.",
  seo: "Function page for layer 03 — the HR layer that sources, hires, onboards, and pays, with a person on every step that touches money or law.",

  headline: "Your HR layer, hired and paid.",
  subhead: [
    "Offer letters and ISO/NSO option grants struck against a current 409A. Form I-9 and the state new-hire report filed on deadline. Payroll run every cycle, benefits enrolled, the handbook and comp bands kept current. You make the hire and approve every run; the layer prepares, files, and dates the rest.",
  ],

  work: {
    intro:
      "A vertical descent through the artifacts this layer produces. Each lands named, signed, dated, and filed against its deadline in the audit trail.",
    artifacts: [
      { caption: "03 / A", title: "A job description + an approved scoring rubric", body: "Your one-line role spec written up as a JD and a scoring rubric you approve before anyone is screened." },
      { caption: "03 / B", title: "A ranked candidate shortlist", body: "Every candidate run through the same structured screen and scored on that one rubric, handed to you ranked with the evidence. The model never decides who gets hired." },
      { caption: "03 / C", title: "A state-correct offer letter", body: "The offer with at-will and the state's wage-rate-notice language, routed for e-signature on your go." },
      { caption: "03 / D", title: "An ISO/NSO option grant", body: "The grant priced to a live 409A fair market value, never a stale one." },
      { caption: "03 / E", title: "A completed Form I-9 + E-Verify case", body: "Work authorization verified within 3 business days of start, with E-Verify where the state mandates it." },
      { caption: "03 / F", title: "Form W-4 + state withholding setup", body: "Federal and state withholding set on day one." },
      { caption: "03 / G", title: "A state new-hire report, filed in the 20-day window", body: "The report each state requires, filed before its 20-day deadline." },
      { caption: "03 / H", title: "Benefits enrollment + the ACA notice", body: "Carrier enrollment and the ACA notice issued at onboarding." },
      { caption: "03 / I", title: "A run payroll cycle (W-2 and 1099)", body: "Each cycle prepared, approved by a person, then run." },
      { caption: "03 / J", title: "An employee handbook + PTO policy", body: "Written from your facts, not a template, and updated as you add states and headcount." },
      { caption: "03 / K", title: "A worker-classification memo (W-2 vs 1099)", body: "The classification call documented with its reasoning, not guessed." },
      { caption: "03 / L", title: "Compensation bands by role and level", body: "Bands by role and level, kept current as you grow." },
      { caption: "03 / M", title: "A performance review cycle", body: "Reviews drafted and scheduled on the cadence you set." },
      { caption: "03 / N", title: "An offboarding packet", body: "Final pay, the COBRA notice, and SSO access revoked, in one pass." },
    ],
  },

  pipeline: {
    title: "How one hire runs",
    intro: "A descent from spec to filed record. The human gate sits in the middle and again at the end.",
    steps: [
      { code: "03.i01", label: "Inputs.", body: "You write a one-line role (\"senior backend, $180–210k, remote US\") and connect your stack once: ATS, email + calendar, payroll/HRIS, cap table. Entity, states, stage, and comp philosophy come from Company Brain (06), so the layer never asks twice." },
      { code: "03.i02", label: "Recruiting.", body: "It drafts the JD and rubric you approve, posts the role, sources across boards and inbound, scores every candidate on that one rubric, sends outreach in your voice, and self-schedules screens against live calendar availability." },
      { code: "03.i03", label: "Screen + shortlist.", body: "Same structured screen and scorecard for every candidate, fully logged. You get a ranked shortlist with the evidence and make the hire/no-hire decision." },
      { code: "03.i04", label: "Offer + equity.", body: "On your go, it generates the state-correct offer letter and the ISO/NSO grant struck against a current 409A, then routes both for e-signature." },
      { code: "03.i05", label: "Onboarding on signature.", body: "It fires Form I-9 (E-Verify where mandated), W-4 plus the state withholding form, the state new-hire report inside the 20-day window, benefits enrollment and the ACA notice, the payroll record, and the equipment/SSO request." },
      { code: "03.i06", label: "Human review gate.", body: "You, or horz's licensed HR/payroll reviewer, sign off on every offer, every payroll run, every W-2-vs-1099 call, and every termination before it executes. Nothing that touches money or law fires on its own." },
      { code: "03.i07", label: "People ops.", body: "It runs each payroll cycle, keeps the handbook, PTO, and comp bands current as you add states and headcount, drafts and schedules reviews, and re-runs the 409A before the 12-month clock expires." },
    ],
  },

  subRack: {
    intro: "A control-panel mini-rack: each row a coded stratum, mono index, verb-first line.",
    rows: [
      { code: "03.1", name: "Recruiting", desc: "Source, screen, and schedule on one disclosed rubric." },
      { code: "03.2", name: "Offers & Equity", desc: "Issue offers and option grants on a current 409A." },
      { code: "03.3", name: "Onboarding & Compliance", desc: "File I-9, W-4, and the state new-hire report on deadline." },
      { code: "03.4", name: "Payroll & Benefits", desc: "Run every payroll cycle and enroll benefits." },
      { code: "03.5", name: "Classification", desc: "Decide W-2 vs 1099 and document the call." },
      { code: "03.6", name: "People Ops", desc: "Keep the handbook, PTO, and comp bands current." },
      { code: "03.7", name: "Offboarding", desc: "Issue final pay and COBRA, revoke access in one pass." },
    ],
  },

  connects: {
    title: "Connects to",
    intro: "You connect the stack once; the layer runs across it instead of handing you another dashboard.",
    groups: [
      {
        items: [
          { label: "ATS", note: "Greenhouse, Ashby, Lever" },
          { label: "Email + calendar", note: "Google Workspace, Microsoft 365 (outreach + self-scheduling)" },
          { label: "Payroll / HRIS", note: "Gusto, Rippling, Deel (EOR for international hires)" },
          { label: "Cap table + equity", note: "Carta, Pulley" },
          { label: "409A provider", note: "re-run on the 12-month clock" },
          { label: "Compliance portals", note: "E-Verify, state new-hire reporting" },
          { label: "Benefits", note: "broker/carrier enrollment + ACA notices" },
          { label: "Background checks", note: "Checkr or equivalent" },
          { label: "Identity / SSO", note: "Okta, Google (access provisioning + revocation)" },
          { label: "Company Brain (06)", note: "entity, states, comp philosophy, stage" },
        ],
      },
    ],
  },

  cost: {
    title: "The math on doing it yourself",
    intro:
      "Market figures here are external estimates to verify before launch. horz performance figures are marked [PLACEHOLDER]; statutory deadlines are stated as fact.",
    items: [
      { body: "A first HR/People hire runs $80–120k/year [est.] fully loaded, before the benefits and tooling stack underneath them." },
      { body: "Onboarding one hire by hand (offer, I-9, W-4, state report, benefits, payroll setup) runs roughly 40 hours of paperwork [est.] spread across people, none of it your product." },
      { body: "A blown 83(b) or a stale-409A option grant turns into a personal tax bill for the employee and a clawback conversation for you. Cost: trust, not just dollars." },
      { body: "A misclassified contractor (AB5, IRS) exposes you to back taxes, penalties, and class-action litigation [statute · verify]." },
    ],
  },

  trust: {
    items: [
      { lead: "A person signs everything that touches money or law.", body: "You, or horz's licensed HR/payroll reviewer, approve every offer, payroll run, classification call, and termination before it executes. The layer prepares and files; a person signs." },
      { lead: "One disclosed rubric, full audit trail.", body: "Every candidate is scored on the same rubric, with the evidence logged: who decided what, when, on what basis. That record is what NYC Local Law 144 (bias audit + 10-day applicant notice), Colorado SB 205 (alternative-process right, effective June 30, 2026), and the EU AI Act high-risk-HR obligations (effective Aug 2, 2026) ask you to produce. [statutes · verify dates before launch]" },
      { lead: "Employee data sits under SOC 2 Type II controls.", body: "SSNs, bank accounts, and tax IDs are held under those controls; a GDPR DPA covers EU staff; candidate and employee data never trains a shared model." },
      { lead: "The deadline calendar is enforced, not advisory.", body: "I-9 within 3 business days, the state new-hire report within 20 days, the 409A re-run before its 12-month expiry, W-2/1099 filing each January." },
      { lead: "A separate validation pass checks every drafted field,", body: "so a hallucinated value can't propagate from offer to benefits to payroll before a human catches it." },
    ],
    footer: "You make the hire; the layer files the rest.",
  },

  proof: {
    rows: [
      { label: "onboarding paperwork / hire", value: "[PLACEHOLDER] hrs", note: "vs ~40 hrs [est.] by hand" },
      { label: "on-time I-9 + state new-hire", value: "[PLACEHOLDER]%", note: "target 100%" },
      { label: "409A renewed before expiry", value: "[PLACEHOLDER] of [PLACEHOLDER]", note: "target 100%" },
    ],
  },

  objections: [
    {
      q: "AI hiring is a legal minefield: bias audits, discrimination claims.",
      a: "That is exactly why the layer scores every candidate on one disclosed rubric and logs the evidence. That record is what NYC Local Law 144 and Colorado SB 205 ask you to produce; applicants get the required notice and an alternative-process option, and the hire/no-hire call is always yours. You get the audit, not the liability of an unaudited model.",
    },
    {
      q: "I'm not letting a model run payroll and touch SSNs and bank accounts.",
      a: "It doesn't run them unsupervised. No payroll run, tax filing, or option grant executes until a person approves it, and the data lives under SOC 2 Type II controls and never trains a shared model. The layer prepares the cycle; you, or a licensed reviewer, sign it.",
    },
    {
      q: "An HR hallucination is worse than a support one. It's someone's job, pay, and equity.",
      a: "Agreed. Every money- and law-touching step is human-in-the-loop by design, and a separate validation pass checks the work before any field propagates. The layer drafts the offer and files the form; it does not set a strike price or decide a termination on its own.",
    },
    {
      q: "My handbook and comp need to fit my company, not a template.",
      a: "The layer writes from your facts in Company Brain (entity, states, stage, comp philosophy), not a generic template. You approve the bands and policies once, and they update as you add states and headcount. It stays your handbook; it just stops going stale.",
    },
  ],

  oneOfSeven:
    "HR is layer 03 of seven. Tax (07) pulls your payroll, Legal (02) pulls your handbook and offer language, Company Brain (06) holds your comp philosophy. HR is not a silo you re-key data into.",
};
