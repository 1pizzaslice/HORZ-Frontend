import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { Hero } from "@/components/home/hero";
import { ProofLog } from "@/components/home/proof-log";
import { Thesis } from "@/components/home/thesis";
import { StrataSection } from "@/components/home/strata-section";
import { HorzArchitecture } from "@/components/home/horz-architecture";
import { VsYourself } from "@/components/home/vs-yourself";
import { PricingTeaser } from "@/components/home/pricing-teaser";
import { ManifestoFloor } from "@/components/home/manifesto-floor";

/**
 * The homepage (DESIGN_SYSTEM Part 5) — one section cut, read top to bottom.
 * The visitor arrives at the survey station at dusk, watches the company drawn as
 * strata (hero), descends through proof → thesis → the rack → the interactive
 * separation → the comparison → pricing, and steps off at the warm floor.
 *
 * Eight datums, eight sections, one core threading the column (§8.0). The nav
 * overlays the hero (heroOverlay) so the page's one above-the-fold flare CTA lives
 * in the hero, not the bar. Footer closes the cut.
 */
export default function Home() {
  return (
    <>
      <SiteNav heroOverlay />
      <main>
        <Hero />
        <ProofLog />
        <Thesis />
        <StrataSection />
        <HorzArchitecture />
        <VsYourself />
        <PricingTeaser />
        <ManifestoFloor />
      </main>
      <SiteFooter />
    </>
  );
}
