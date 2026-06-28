import { Container, CTA, Datum, Eyebrow, Reveal } from "@/components/ui";

/**
 * §8.9 — Manifesto / CTA, the warm floor. The descent ends on `horizon-floor`,
 * the single warm stratum, earned by position: after eight cool sections this is
 * the emotional payoff, in the serif voice. The page core — which has threaded the
 * whole column — terminates here in one flare datum-tick: the cut is complete.
 *
 * This spends the page's second and final flare CTA fill (the hero's left the
 * viewport long ago). Copy verbatim from content/01 §9 (locked manifesto lines).
 */
export function ManifestoFloor() {
  return (
    <section
      aria-label="Manifesto"
      data-nav-flare="off"
      className="relative bg-horizon"
    >
      <Datum />
      {/* the page spine arrives at the floor and stops — a surveyor's benchmark */}
      <span
        className="pointer-events-none absolute left-1/2 top-0 flex flex-col items-center md:left-[41.667%]"
        aria-hidden="true"
      >
        <span className="h-16 w-[1.5px] bg-flare" />
        <span className="h-[1.5px] w-5 bg-flare" />
      </span>

      <Container width="content" className="section">
        <div className="max-w-[20ch] md:max-w-none">
          <Reveal>
            <Eyebrow as="p" index="07" className="mb-8">
              The Floor
            </Eyebrow>
          </Reveal>

          <Reveal delay={0.05} y={24}>
            <p className="display-l max-w-[20ch] text-ink">
              You were never short on the idea.
            </p>
          </Reveal>
          <Reveal delay={0.12} y={24}>
            <p className="display-l mt-3 max-w-[24ch] text-ink-muted">
              You were short on a support queue, a contract redline, and a
              franchise tax filing.
            </p>
          </Reveal>
          <Reveal delay={0.19} y={24}>
            <p className="display-l mt-3 text-ink">We run those.</p>
          </Reveal>

          <Reveal delay={0.26}>
            <div className="mt-12 flex flex-wrap items-center gap-4">
              <CTA href="/login" variant="primary" size="lg">
                Start building.
              </CTA>
              <CTA href="/contact" variant="secondary" size="lg">
                Talk to us.
              </CTA>
            </div>
          </Reveal>

          <p className="index mt-12 text-ink-faint">
            END OF SECTION · STATION 0.0000
          </p>
        </div>
      </Container>
    </section>
  );
}
