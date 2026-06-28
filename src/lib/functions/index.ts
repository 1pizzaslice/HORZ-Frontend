/**
 * Function-page registry (§8.12). Seven data files, one ordered list, the lookup
 * + stratum-nav helpers the dynamic route and the cross-sell strip consume.
 *
 * Order is the canonical 01…07 (the rack order): six functions + the shared
 * Company Brain (06). The same order drives `generateStaticParams`, the
 * `← prev / next →` stratum nav, and the "one of seven" greyed strip.
 */
import type { FunctionPage } from "./types";
import { customerService } from "./01-customer-service";
import { legal } from "./02-legal";
import { hr } from "./03-hr";
import { marketing } from "./04-marketing";
import { analytics } from "./05-analytics";
import { companyBrain } from "./06-company-brain";
import { tax } from "./07-tax";

export type { FunctionPage } from "./types";

/** The seven layers in rack order. */
export const FUNCTIONS: FunctionPage[] = [
  customerService,
  legal,
  hr,
  marketing,
  analytics,
  companyBrain,
  tax,
];

export const FUNCTION_SLUGS = FUNCTIONS.map((f) => f.slug);

export function getFunction(slug: string): FunctionPage | undefined {
  return FUNCTIONS.find((f) => f.slug === slug);
}

/** The wrap-around stratum nav: 01 ← 07, 07 → 01 (the rack is a loop). */
export function getNeighbors(slug: string): { prev: FunctionPage; next: FunctionPage } {
  const i = FUNCTIONS.findIndex((f) => f.slug === slug);
  const n = FUNCTIONS.length;
  return {
    prev: FUNCTIONS[(i - 1 + n) % n],
    next: FUNCTIONS[(i + 1) % n],
  };
}
