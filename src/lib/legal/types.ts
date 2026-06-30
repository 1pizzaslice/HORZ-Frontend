/**
 * The legal-document content model. The three pre-launch policies (Terms,
 * Privacy, Cookies) are authored as structured data and rendered by ONE
 * component (`<LegalDocument>`) in the Section language — a numbered strata of
 * clauses, a sticky contents rail, the calm exit. No per-page layout code.
 *
 * Deliberately NO "last updated" / effective date anywhere (founder's call for
 * the tease — a stale date reads worse than none). These are standard,
 * professional templates adapted to horz and MUST be reviewed by counsel before
 * launch; that gate lives in PROGRESS, not on the page.
 */

/** A block inside a clause: a paragraph (string), a bullet list, or a minor heading. */
export type LegalBlock =
  | string
  | { list: string[] }
  | { subheading: string };

export type LegalClause = {
  /** two-digit survey index, "01" … */
  index: string;
  heading: string;
  blocks: LegalBlock[];
};

export type LegalDoc = {
  slug: "terms" | "privacy" | "cookies";
  /** the page H1 */
  title: string;
  /** the coordinate eyebrow, e.g. "STATION 0.0200 · LEGAL" */
  kicker: string;
  /** opening lead paragraphs, set above the clauses */
  intro: string[];
  clauses: LegalClause[];
  /** the closing contact line + address */
  contact: { line: string; email: string };
};
