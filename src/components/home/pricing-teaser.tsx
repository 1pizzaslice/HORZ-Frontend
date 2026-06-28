import { Container, Datum, Eyebrow, FlareLink, Reveal } from "@/components/ui";

/**
 * §8.8 — Pricing teaser. Not three cards: three strata, stacked, each a tier in the
 * section language. The axis is offload depth — how much of the company you hand over
 * — which restates the thesis as a price. Included layers are *drawn* as a mini
 * section (filled vs hairline-empty bands), never a checkmark grid. The recommended
 * tier carries the one flare core tick; no "Most Popular" balloon (§8.8).
 *
 * Counts are product facts, not metrics (SOLO 4 / STARTUP 6 / SCALE 7; Company Brain
 * in every tier) — quoted verbatim from content/01 §8, single source = the pricing page.
 */
const TIERS = [
  {
    index: "01",
    name: "Solo",
    who: "For the founder with no back office yet. Start here; add layers as you grow.",
    included: "Included: Company Brain + 3 layers (4 of 7).",
    filled: 4,
  },
  {
    index: "02",
    name: "Startup",
    who: "Seed to Series A, shipping product but losing founder hours to the inbox.",
    included: "Included: 6 of 7 layers, Company Brain among them.",
    filled: 6,
    recommended: true,
  },
  {
    index: "03",
    name: "Scale",
    who: "Growth-stage, replacing a sprawl of point tools with one backend.",
    included: "Included: all 7 layers.",
    filled: 7,
  },
];

/** the included-layers count, drawn as a mini section: N filled bands + the rest hairline. */
function LayerMeter({ filled }: { filled: number }) {
  return (
    <span className="flex items-center gap-4">
      <span className="flex flex-col gap-[3px]" aria-hidden="true">
        {Array.from({ length: 7 }, (_, i) => (
          <span
            key={i}
            className={`h-[3px] w-16 ${i < filled ? "bg-ink" : "bg-line"}`}
          />
        ))}
      </span>
      <span className="index whitespace-nowrap text-ink-faint">
        {filled} / 7
      </span>
    </span>
  );
}

export function PricingTeaser() {
  return (
    <section aria-label="Pricing">
      <Datum />
      <Container width="content" className="section">
        <Reveal>
          <Eyebrow as="p" className="mb-4">
            Pricing
          </Eyebrow>
          <h2 className="h2 max-w-[22ch] text-ink">
            Priced by how much of the company you hand over.
          </h2>
        </Reveal>

        <div className="mt-12 border-t border-line">
          {TIERS.map((tier, i) => (
            <Reveal
              key={tier.index}
              delay={Math.min(i, 5) * 0.09}
              className="relative grid grid-cols-1 gap-6 border-b border-line py-8 md:grid-cols-[1.2fr_1fr] md:items-center md:gap-12"
            >
              {/* the recommended tier earns the one flare tick — the default, marked */}
              {tier.recommended ? (
                <span
                  className="absolute bottom-0 left-0 top-0 w-[1.5px] bg-flare"
                  aria-hidden="true"
                />
              ) : null}

              <div className={tier.recommended ? "pl-6" : "pl-6 md:pl-0"}>
                <div className="flex items-baseline gap-4">
                  <span className="index text-ink-faint">{tier.index}</span>
                  <h3 className="h3 text-ink">{tier.name}</h3>
                  {tier.recommended ? (
                    <span className="index text-ink-faint">— default</span>
                  ) : null}
                </div>
                <p className="body-sm mt-3 max-w-[44ch] text-ink-muted">{tier.who}</p>
              </div>

              <div className="flex flex-col gap-4 pl-6 md:items-end md:pl-0 md:text-right">
                <LayerMeter filled={tier.filled} />
                <p className="caption text-ink-faint">{tier.included}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-10">
          <FlareLink href="/pricing" className="ui-label">
            View full pricing →
          </FlareLink>
        </div>
      </Container>
    </section>
  );
}
