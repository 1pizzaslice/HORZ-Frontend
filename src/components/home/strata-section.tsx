import { Container, Datum, Eyebrow, Reveal } from "@/components/ui";
import { TheSection } from "@/components/the-section";
import { DensityProvider } from "@/lib/density";

/**
 * §8.5 — The Strata (01–07). The heart of the page and the literal picture of the
 * model. Editorial air gives way to the Control-Panel rack: the dense `<TheSection>`
 * (control density, w-wide), strata divided by hairlines, the core piercing all
 * seven on the 5/12 line. The density jolt — airy header into the instrument rack —
 * is "the modular backend for the whole company," made visible (§6).
 *
 * No dusk band here: one live datum per page belongs to the hero. The rack re-runs
 * the quieter seam-in on enter (TheSection handles it via useInView).
 * Header copy verbatim from content/01 §5.
 */
export function StrataSection() {
  return (
    <section aria-label="The seven layers">
      <Datum />
      <Container width="content" className="section pb-0 md:pb-0">
        <Reveal>
          <Eyebrow as="p" className="mb-4">
            Breadth
          </Eyebrow>
          <h2 className="h2 max-w-[16ch] text-ink">
            Seven layers around your product.
          </h2>
        </Reveal>
      </Container>

      {/* the rack — the instrument jolt, full control-panel width */}
      <Container width="wide" className="pb-24 pt-12 md:pb-32">
        <DensityProvider density="control">
          <TheSection />
        </DensityProvider>
      </Container>
    </section>
  );
}
