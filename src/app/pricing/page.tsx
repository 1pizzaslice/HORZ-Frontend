import type { Metadata } from "next";
import { PricingPage } from "@/components/pricing/pricing-page";

/**
 * /pricing — content/04. A top-level static route; the nav + footer "Pricing"
 * links resolve here. Takes routing precedence over the [slug] function segment
 * (which 404s anything outside the seven layers). SEO from content/02.
 */
export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Add layers as you grow, not seven vendors at once. One bill, one approval surface, all reading the same brain. Pricing scales with what you offload.",
};

export default function PricingRoute() {
  return <PricingPage />;
}
