/**
 * Function-page content model (Phase 4 · §8.12).
 *
 * One typed shape, seven data files, one template. Every string here is VERBATIM
 * from `content/function-pages/*` — the single source of truth for function copy.
 * Nothing is improvised; metrics keep their [PLACEHOLDER] / [est.] / [statute ·
 * verify] stamps until real data is swapped in pre-launch (PROGRESS §3.8/§3.10).
 *
 * Markdown formatting from the source (inline `code`, **bold**, > quotes, the
 * ASCII survey-log boxes) is stripped to plain fields here; the template re-draws
 * them in the section language. The WORDS are unchanged.
 */

/** A drawn artifact in "The work, in section" — h3 title + a one-line body. */
export type WorkArtifact = { caption: string; title: string; body: string };

/** A pipeline step: mono code (`01.i03`), the verb-lead, the body. */
export type PipelineStep = { code: string; label: string; body: string };

/** A sub-capability row in the control-panel mini-rack. */
export type SubCapability = { code: string; name: string; desc: string };

/** A connector / read / act-on entry. `note` is the systems it touches. */
export type ConnectItem = { label: string; note?: string };
/** "Connects to" is one group; 01 splits into "Reads" / "Acts on". */
export type ConnectGroup = { head?: string; items: ConnectItem[] };

/** A bold-led bullet (trust controls; the cost/math ledger). */
export type LedgerItem = { lead?: string; body: string };

/** A founder objection + the answer. */
export type Objection = { q: string; a: string };

/** A survey-log row: label, optional figure, optional note. */
export type ProofRow = { label: string; value?: string; note?: string };

export type FunctionPage = {
  /** "01"…"07" */
  index: string;
  /** route slug, e.g. "customer-service" */
  slug: string;
  /** "Customer Service" */
  name: string;
  /** the rack one-liner from frontmatter */
  rackLine: string;
  /** meta description (frontmatter `purpose`) */
  seo: string;

  /** 06's content eyebrow; rendered as a lead kicker above the headline */
  kicker?: string;
  /** the serif headline (locked choice) */
  headline: string;
  /** the lead subhead, one entry per paragraph */
  subhead: string[];

  work: { intro?: string; artifacts: WorkArtifact[] };
  pipeline: { title: string; intro?: string; steps: PipelineStep[] };
  subRack: { intro?: string; rows: SubCapability[] };
  connects: { title: string; intro?: string; groups: ConnectGroup[]; footer?: string };
  cost: { title: string; intro?: string; items: LedgerItem[]; footer?: string };
  trust: { intro?: string; items: LedgerItem[]; footer?: string };
  proof: { rows: ProofRow[] };
  /** default "Objections"; 06 = "What founders ask first" */
  objectionsTitle?: string;
  objections: Objection[];
  /** the cross-sell paragraph (verbatim) */
  oneOfSeven: string;
};
