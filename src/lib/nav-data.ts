/**
 * Nav / footer / system strings — verbatim from `content/02-global-nav-footer-seo.md`
 * (the single source of truth for chrome copy). Nothing here is improvised.
 *
 * `soon: true` follows the §2 build note exactly — only these destinations render
 * disabled with a `soon` tag until their content ships: Roadmap, Careers, Contact,
 * Brand kit, Survey Log, Field Notes, Security & Trust. Every other link carries
 * its real href and resolves as later phases land its page.
 */

export type NavLink = {
  label: string;
  href: string;
  /** undrafted destination → rendered inert with a `soon` tag, never dead-ended */
  soon?: boolean;
  /** external destinations get the trailing ↗ glyph in tertiary (§7.2) */
  external?: boolean;
};

/** The seven strata — six functions (01–05, 07) + the shared Company Brain (06). */
export type Stratum = {
  index: string;
  name: string;
  href: string;
  /** the canonical one-liner (verbatim, §00 §9 / §02 product menu) */
  blurb: string;
};

export const STRATA: Stratum[] = [
  { index: "01", name: "Customer Service", href: "/customer-service", blurb: "Resolves tickets in your product's voice." },
  { index: "02", name: "Legal", href: "/legal", blurb: "Redlines contracts, issues DPAs, files corporate docs." },
  { index: "03", name: "HR", href: "/hr", blurb: "Hires, pays, and onboards. No HR manager." },
  { index: "04", name: "Marketing", href: "/marketing", blurb: "Ships the site, posts, launches, and search." },
  { index: "05", name: "Analytics", href: "/analytics", blurb: "Every metric, defined once, on one dashboard." },
  { index: "06", name: "Company Brain", href: "/company-brain", blurb: "Answers what your company knows, source attached." },
  { index: "07", name: "Tax", href: "/tax", blurb: "Files federal, state, and franchise, on time." },
];

/** Top-level nav (§1). `Product` opens the layer menu; the others are routes. */
export const NAV_LINKS: NavLink[] = [
  { label: "Product", href: "#product" }, // opens the strata menu, no overview page at launch
  { label: "Pricing", href: "/pricing" },
  { label: "Manifesto", href: "/manifesto" },
];

/** Right-side utility + CTA copy (locked, §1 / §3). */
export const NAV_UTILITY = {
  login: { label: "Log in", href: "/login" }, // no period — utility, not a command
  primary: "Start building.",
  secondary: "Talk to us.",
};

/** The footer directory (§2) — each column a mini-stratum with a mono index. */
export type FooterColumn = { index: string; head: string; links: NavLink[] };

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    index: "A",
    head: "Product",
    links: [
      ...STRATA.map((s) => ({ label: `${s.index} ${s.name}`, href: s.href })),
      { label: "Pricing", href: "/pricing" },
      { label: "Roadmap", href: "/roadmap", soon: true }, // layers in survey
    ],
  },
  {
    index: "B",
    head: "Company",
    links: [
      { label: "Manifesto", href: "/manifesto" }, // combined manifesto + about
      { label: "Careers", href: "/careers", soon: true },
      { label: "Contact", href: "/contact", soon: true },
      { label: "Brand kit", href: "/brand", soon: true },
    ],
  },
  {
    index: "C",
    head: "Resources",
    links: [
      { label: "Docs", href: "/docs" },
      { label: "Survey Log", href: "/survey-log", soon: true }, // named artifacts, no logo wall
      { label: "Field Notes", href: "/field-notes", soon: true }, // the engineering blog
      { label: "Changelog", href: "/changelog" },
      { label: "Status", href: "/status" },
      { label: "Security & Trust", href: "/security", soon: true }, // SOC 2, controls, audit trail
    ],
  },
  {
    index: "D",
    head: "Legal",
    links: [
      { label: "Terms", href: "/terms" },
      { label: "Privacy", href: "/privacy" },
      { label: "DPA", href: "/dpa" }, // GDPR Article 28
      { label: "Subprocessors", href: "/subprocessors" },
      { label: "SOC 2 report", href: "/soc2" },
      { label: "Cookie settings", href: "/cookies" },
    ],
  },
];

/** Canonical strings reused across chrome — never paraphrased per page (§7). */
export const POSITIONING_ONE_LINER = "Seven layers around your product. The core stays yours.";
export const TAGLINE = "Scale Horizontally. Focus Vertically.";
export const NAMESPACE_NOTE = "NAMESPACE: .dev (primary) · .io (alias) → same backend";

/** Footer status line (§2). Default = all up; the dot is a non-flare success signal
 *  (§8.10 / §7.7 flare ledger). Coordinates carry the [PLACEHOLDER] until real data. */
export const STATUS_LINE = {
  state: "ALL LAYERS OPERATIONAL",
  detail: "07/07 UP — STA 7+00 · 37.7749°N 122.4194°W [PLACEHOLDER]",
  station: "STATION · 0.0000",
};

/** Theme labels stay in the survey metaphor — never "dark/light" (§2). */
export const THEME_LABELS = {
  dark: { label: "Night", title: "Blue hour" },
  light: { label: "Day", title: "Day station" },
};
