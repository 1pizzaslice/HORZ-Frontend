import type { LegalDoc } from "./types";
import { TERMS } from "./terms";
import { PRIVACY } from "./privacy";
import { COOKIES } from "./cookies";

/**
 * The three pre-launch policies, addressed by slug. Routes (`/terms`, `/privacy`,
 * `/cookies`) and the footer read from here so they can never drift from the
 * documents. DPA, Subprocessors, and the SOC 2 report stay `soon` in the footer
 * until the real artifacts exist.
 */
export const LEGAL_DOCS: Record<LegalDoc["slug"], LegalDoc> = {
  terms: TERMS,
  privacy: PRIVACY,
  cookies: COOKIES,
};

export { TERMS } from "./terms";
export { PRIVACY } from "./privacy";
export { COOKIES } from "./cookies";

export const LEGAL_SLUGS = Object.keys(LEGAL_DOCS) as LegalDoc["slug"][];

export function getLegalDoc(slug: string): LegalDoc | undefined {
  return (LEGAL_DOCS as Record<string, LegalDoc>)[slug];
}

/** Cross-link nav used by the renderer (title + href per doc). */
export const LEGAL_NAV = LEGAL_SLUGS.map((slug) => ({
  slug,
  title: LEGAL_DOCS[slug].title,
  href: `/${slug}`,
}));

export type { LegalDoc } from "./types";
