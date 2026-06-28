import { Container, Datum, Eyebrow, Reveal } from "@/components/ui";

/**
 * §8.3 — Proof, as a survey log (never a logo wall). Named artifacts and concrete
 * numbers in the instrument's own mono voice: a ledger on the datum. Every figure
 * is honestly stamped [PLACEHOLDER] until real data is swapped in pre-launch
 * (content/01 §3 + the number policy in 00 §7) — the unverified stamp reads as
 * survey annotation, on-brand, not a dodge.
 */
const FIELD_LOG = [
  { value: "12,418", label: "tickets resolved in your product's voice", index: "01" },
  { value: "3,140", label: "GDPR Article 28 DPAs issued", index: "02" },
  { value: "47/12", label: "launch posts shipped / cited in AI answers", index: "04" },
  { value: "1.2M", label: "company facts answered, source attached", index: "06" },
  { value: "2,400", label: "Delaware franchise filings, before March 1", index: "07" },
];

function PlaceholderTag() {
  return (
    <span className="rounded-control border border-line px-1.5 py-px font-mono text-[10px] uppercase leading-none tracking-[0.1em] text-ink-faint">
      placeholder
    </span>
  );
}

export function ProofLog() {
  return (
    <section aria-label="Field log">
      <Datum />
      <Container width="content" className="section">
        <div className="mb-10 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-3">
          <Eyebrow as="h2">Field Log</Eyebrow>
          <span className="index text-ink-faint">STATION · 0.0000</span>
        </div>

        {/* the ledger — each row a thin stratum, hairline-divided, mono-voiced */}
        <ul className="border-t border-line">
          {FIELD_LOG.map((row, i) => (
            <Reveal
              as="li"
              key={row.index}
              delay={Math.min(i, 5) * 0.09}
              className="grid grid-cols-[auto_1fr_auto] items-baseline gap-x-4 border-b border-line py-5 sm:grid-cols-[7.5rem_8rem_1fr_auto] sm:gap-x-8"
            >
              {/* the unverified stamp */}
              <span className="order-1 sm:self-center">
                <PlaceholderTag />
              </span>
              {/* the figure — large mono, tabular, right-aligned so the column locks */}
              <span className="index order-3 col-span-2 text-[1.75rem] leading-none tracking-tight text-ink sm:order-2 sm:col-span-1 sm:text-right sm:text-[2rem]">
                {row.value}
              </span>
              {/* the named artifact */}
              <span className="body-sm order-4 col-span-2 text-ink-muted sm:order-3 sm:col-span-1">
                {row.label}
              </span>
              {/* the stratum index */}
              <span className="index order-2 text-right text-ink-faint sm:order-4">
                {row.index}
              </span>
            </Reveal>
          ))}
        </ul>

        <p className="caption mt-6 font-mono uppercase tracking-[0.08em] text-ink-faint">
          Field log · 5-row sample of 07 · all figures [placeholder] until verified
        </p>
      </Container>
    </section>
  );
}
