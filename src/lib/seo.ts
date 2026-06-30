import type { Metadata } from "next";

/**
 * The single source of truth for SEO metadata (Phase 6).
 *
 * Every string here is VERBATIM from `content/02-global-nav-footer-seo.md`
 * §5 (titles < 60 / descriptions < 155) and §6 (OG / social) — the content
 * system is canonical for copy. The helper below turns a page's title/desc/path
 * into a COMPLETE metadata object: canonical URL, OpenGraph, Twitter, and an
 * explicit index/follow robots block (so "indexable" is never left to chance —
 * the founder's hard rule: no accidental noindex on a real page).
 *
 * Why explicit, per-page OpenGraph instead of inheriting the layout's: Next.js
 * merges metadata SHALLOWLY at the top level, so a page that sets `openGraph`
 * replaces the parent's entirely. The helper therefore emits the full OG object
 * every time (siteName/locale/type), and the site-wide OG *image* is supplied by
 * the `opengraph-image` file convention (which merges in separately).
 */

/** Canonical host. `.dev` is primary; `.io` is an alias to the same backend
 *  (content/02 §2 namespace note) — we canonicalise to ONE host so ranking
 *  signals never split across the two. */
export const SITE_URL = "https://horz.dev";
export const SITE_NAME = "horz";
export const SITE_LOCALE = "en_US";

/** content/02 §7 — the one positioning line, reused as the org description. */
export const POSITIONING_ONE_LINER =
  "Seven layers around your product. The core stays yours.";
export const TAGLINE = "Scale Horizontally. Focus Vertically.";

/* ── content/02 §5 · Home ─────────────────────────────────────────────────── */
export const HOME_TITLE =
  "horz — The modular backend for everything around you";
export const HOME_DESCRIPTION =
  "Offload support, legal, HR, marketing, analytics, and tax to managed layers on one company brain. Keep your core product. One backend, not seven vendors.";

/* ── content/02 §6 · OG / social (the social-card copy, distinct from §5) ──── */
export const OG_TITLE =
  "The modular backend for everything around your business — horz";
export const OG_DESCRIPTION =
  "Offload support, legal, HR, marketing, analytics, and tax to six managed layers on one company brain. Keep your core. Scale horizontally, focus vertically.";

/** The drawn §6 section-cut card. Served from public/ and referenced explicitly
 *  (the `opengraph-image` file convention only covers the segment it sits in, not
 *  nested routes — so we inherit it the normal metadata way instead). */
export const OG_IMAGE = {
  url: "/og-card.png",
  width: 1200,
  height: 630,
  alt: "A section cut through a company on the blue-hour field: seven horizontal strata labelled 01 Customer Service through 07 Tax, pierced once by a single vermilion vertical core ending in one flare node — the breadth horz runs, the founder's depth kept. Tagline: Scale Horizontally. Focus Vertically.",
};

/* ── content/02 §5 · the seven function pages (title + description) ────────── */
export const FUNCTION_SEO: Record<string, { title: string; description: string }> = {
  "customer-service": {
    title: "Customer Service — tickets resolved in your voice · horz",
    description:
      "A managed support layer that reads every ticket, answers in your product's voice, runs the refund, and escalates the edge cases with the full thread.",
  },
  legal: {
    title: "Legal — contracts redlined, DPAs issued, docs filed · horz",
    description:
      "Inbound MSAs redlined against your playbook, GDPR DPAs issued, Delaware filings prepared. A licensed attorney signs before anything is filed.",
  },
  hr: {
    title: "HR — hire, pay, and onboard without a manager · horz",
    description:
      "Source and screen candidates, issue offers and option grants on a current 409A, file I-9 and state new-hire reports on deadline. You approve every run.",
  },
  marketing: {
    title: "Marketing — site, posts, launches, and search · horz",
    description:
      "Writes and ships the marketing site, posts in your voice, the six-week launch sequence, and the SEO and AI-citation work. You approve; it publishes.",
  },
  analytics: {
    title: "Analytics — every metric, one dashboard · horz",
    description:
      "Wires Stripe, your database, PostHog, and the ad accounts into one warehouse, fixes every metric's definition once, and answers questions with SQL shown.",
  },
  "company-brain": {
    title: "Company Brain — answers, with the source attached · horz",
    description:
      "One connected graph of every person, customer, deal, document, and decision. Ask in plain language; get the answer with its source and last-edited date.",
  },
  tax: {
    title: "Tax — federal, state, franchise, filed on time · horz",
    description:
      "Form 1120, the Delaware franchise filing, multi-state returns, 1099-NECs, and the R&D credit — prepared from your closed books, signed by a licensed CPA.",
  },
};

/* ── content/02 §5 · static pages with crafted SEO titles ─────────────────── */
export const PRICING_SEO = {
  title: "Pricing — pay for what you offload · horz",
  description:
    "Add layers as you grow, not seven vendors at once. One bill, one approval surface, all reading the same brain. Pricing scales with what you offload.",
};
export const MANIFESTO_SEO = {
  title: "Manifesto — scale horizontally, focus vertically · horz",
  description:
    "Engineers stopped writing their own auth. Founders should stop running their own back office. Why we run the six functions around your product.",
};
/** Founding-access — the pre-launch lead-capture page (no content/02 §5 entry;
 *  written to match the §5 length rules: title < 60, description < 155). */
export const FOUNDING_SEO = {
  title: "Founding access — work with us before launch · horz",
  description:
    "horz isn't generally available yet. We onboard the first founders by hand — request founding access for hands-on setup and founding pricing held for good.",
};

/* ── the legal documents (§5 length rules; titles < 60, descriptions < 155) ─── */
export const LEGAL_SEO: Record<"terms" | "privacy" | "cookies", { title: string; description: string }> = {
  terms: {
    title: "Terms of Service · horz",
    description:
      "The terms that govern access to and use of horz — the Service, your accounts and data, acceptable use, founding access, fees, liability, and governing law.",
  },
  privacy: {
    title: "Privacy Policy · horz",
    description:
      "How horz collects, uses, shares, and protects personal information, and the rights and choices you have under GDPR, UK GDPR, and US state privacy laws.",
  },
  cookies: {
    title: "Cookie Policy · horz",
    description:
      "How horz uses cookies and similar technologies on its website and Service, the categories we use, and how to control them in your browser.",
  },
};

type PageMetaInput = {
  /** the page <title> text */
  title: string;
  /** content/02 titles already carry "· horz" — pass absolute so the
   *  "%s — horz" template doesn't double the brand. */
  titleAbsolute?: boolean;
  description: string;
  /** route path, e.g. "/pricing" or "/" — drives canonical + og:url */
  path: string;
  /** override the social-card title (defaults to the page title) */
  ogTitle?: string;
  /** override the social-card description (defaults to `description`) */
  ogDescription?: string;
};

/** Build a complete, index-safe Metadata object for a real (public) page. */
export function pageMetadata({
  title,
  titleAbsolute,
  description,
  path,
  ogTitle,
  ogDescription,
}: PageMetaInput): Metadata {
  const url = path === "/" ? SITE_URL : `${SITE_URL}${path}`;
  const resolvedOgTitle = ogTitle ?? (titleAbsolute ? title : `${title} — ${SITE_NAME}`);
  const resolvedOgDescription = ogDescription ?? description;
  return {
    title: titleAbsolute ? { absolute: title } : title,
    description,
    // self-referential canonical (relative → absolute via metadataBase). Stops
    // trailing-slash / query-string / .io-alias duplicates from splitting rank.
    alternates: { canonical: path },
    // explicit: this page IS for indexing. max-image-preview:large + full
    // snippet help rich results and AI Overviews surface the page well.
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    openGraph: {
      title: resolvedOgTitle,
      description: resolvedOgDescription,
      url,
      siteName: SITE_NAME,
      locale: SITE_LOCALE,
      type: "website",
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: resolvedOgTitle,
      description: resolvedOgDescription,
      images: [OG_IMAGE.url],
    },
  };
}
