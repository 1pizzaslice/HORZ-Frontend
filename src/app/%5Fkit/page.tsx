import type { Metadata } from "next";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { KitShowcase } from "@/components/kit-showcase";

export const metadata: Metadata = {
  title: "Component Kit",
  robots: { index: false, follow: false },
};

/* ===========================================================================
   /_kit — the Phase-1 showcase
   Renders every primitive in the kit, the real Nav + Footer, and a live
   theme + density toggle so the whole layer can be graded against
   DESIGN_SYSTEM.md §7 in both surfaces and both density modes. Internal route.
   ========================================================================= */
export default function KitPage() {
  return (
    <>
      <SiteNav heroOverlay />
      <KitShowcase />
      <SiteFooter />
    </>
  );
}
