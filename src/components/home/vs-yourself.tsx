"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container, Datum, Eyebrow, Reveal } from "@/components/ui";
import { ease, duration } from "@/lib/motion";

/**
 * §8.7 / content/06 §5 — Vs. doing it yourself. Comparison without the
 * checkmark-grid cliché: two section cuts of one company, drawn side by side. The
 * rows (01–07) run down the shared center spine and never change — only who runs
 * them does.
 *
 * The contrast is *structural, not editorial* (the brief): the right cut is a
 * finished section — seven staffed bands, the earned flare core descending to a
 * single flare tick on the datum. The left cut is a section with holes — four
 * layers UNSTAFFED (0.5px dotted, no artifact, greyed), and **one mid-stack seam
 * that visibly halts at ~60%** with a hairline break at the freeze point: the
 * function the solo founder ran out of hours for. No flare reaches the left cut;
 * its core never fully descends because the structure under it is incomplete.
 *
 * Reduced motion (§8.10): both cuts render at their end-states immediately — the
 * stalled seam frozen with its break shown, the right core + flare tick drawn. The
 * comparison reads fully from the static frame. Caption verbatim from content/01 §7.
 */
const ROWS = [
  { index: "01", name: "Customer Service", staffed: true, stalled: false },
  { index: "02", name: "Legal", staffed: false, stalled: false },
  { index: "03", name: "HR", staffed: false, stalled: true }, // the one caught half-built
  { index: "04", name: "Marketing", staffed: true, stalled: false },
  { index: "05", name: "Analytics", staffed: false, stalled: false },
  { index: "06", name: "Company Brain", staffed: true, stalled: false },
  { index: "07", name: "Tax", staffed: false, stalled: false },
];

const ROW_H = "h-16";

export function VsYourself() {
  const reduced = useReducedMotion() ?? false;

  return (
    <section aria-label="The same company, two ways">
      <Datum />
      <Container width="content" className="section">
        <Reveal>
          <Eyebrow as="p" className="mb-4">
            Two Cuts
          </Eyebrow>
          <h2 className="h2 max-w-[20ch] text-ink">
            The same company, drawn two ways.
          </h2>
        </Reveal>

        {/* the two cuts, sharing a center column of indices (the structural seam) */}
        <Reveal delay={0.08} className="mt-14">
          {/* headers */}
          <div className="grid grid-cols-[1fr_3rem_1fr] md:grid-cols-[1fr_4rem_1fr]">
            <div>
              <Eyebrow as="p">Without</Eyebrow>
              <p className="index mt-2 text-ink-faint">1 FOUNDER · 7 JOBS</p>
            </div>
            <div aria-hidden="true" />
            <div className="md:text-right">
              <Eyebrow as="p">With horz</Eyebrow>
              <p className="index mt-2 text-ink-faint">1 FOUNDER · 1 JOB</p>
            </div>
          </div>

          {/* the cut body — three full-height columns so the cores can pierce */}
          <div className="mt-6 grid grid-cols-[1fr_3rem_1fr] md:grid-cols-[1fr_4rem_1fr]">
            {/* —— WITHOUT: the section with holes —— */}
            <div className="relative">
              {/* the thin, overloaded, flare-starved core (md+ only — below md the
                  3-col grid stays but the %-line would cut the fixed-width names) */}
              <span
                className="pointer-events-none absolute inset-y-0 left-[32%] hidden w-px bg-ink-faint opacity-40 md:block"
                aria-hidden="true"
              />
              {ROWS.map((r) => (
                <WithoutRow key={r.index} row={r} reduced={reduced} />
              ))}
            </div>

            {/* —— the shared index spine —— */}
            <div className="border-x border-line">
              {ROWS.map((r) => (
                <div key={r.index} className={`flex ${ROW_H} items-center justify-center border-t border-line`}>
                  <span className="index text-ink-faint">{r.index}</span>
                </div>
              ))}
            </div>

            {/* —— WITH horz: the finished cut —— */}
            <div className="relative">
              {/* the one earned flare core — pierces the rack in the clear right
                  margin (mirrors the WITHOUT core at left-32%), never cutting a name.
                  md+ only — below md the %-line would cut the fixed-width names.
                  descends the full cut and lands a single flare tick on its datum. */}
              <motion.span
                className="pointer-events-none absolute inset-y-0 left-[68%] hidden w-[1.5px] origin-top bg-flare md:block"
                aria-hidden="true"
                initial={reduced ? { scaleY: 1 } : { scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: duration.draw, ease: ease.line, delay: 0.6 }}
              />
              {/* the single flare tick where the core meets the cut's datum */}
              <motion.span
                className="pointer-events-none absolute bottom-0 left-[68%] hidden h-px w-7 -translate-x-1/2 origin-center bg-flare md:block"
                aria-hidden="true"
                initial={reduced ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
                whileInView={{ scaleX: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: duration.reveal, ease: ease.line, delay: 1.2 }}
              />
              {ROWS.map((r) => (
                <div key={r.index} className={`flex ${ROW_H} items-center border-t border-line pl-4`}>
                  <span className="ui-label text-ink">{r.name}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="body-sm mt-10 max-w-[58ch] text-ink-muted">
            Two cuts through one company. The rows don&apos;t change — who runs
            them does.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}

/** the left-cut rendering of a row: staffed bands hold; unstaffed sag; one stalls. */
function WithoutRow({
  row,
  reduced,
}: {
  row: { index: string; name: string; staffed: boolean; stalled: boolean };
  reduced: boolean;
}) {
  // the one stalled seam: a solid rule that draws to ~60% and freezes, with a
  // hairline break at the freeze point — work started, not finished.
  if (row.stalled) {
    return (
      <div className={`relative flex ${ROW_H} items-center justify-end pr-4`}>
        {/* the frozen seam: drawn 0→58%, a 4px break, then nothing */}
        <motion.span
          className="pointer-events-none absolute left-0 top-0 h-px origin-left bg-ink-faint"
          style={{ width: "58%" }}
          aria-hidden="true"
          initial={reduced ? { scaleX: 1 } : { scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: ease.line, delay: 0.2 }}
        />
        {/* the break tick — a short stub just past the freeze point */}
        <span
          className="pointer-events-none absolute top-0 h-px w-1.5 bg-ink-faint opacity-50"
          style={{ left: "60%" }}
          aria-hidden="true"
        />
        <span className="flex items-center gap-2">
          <span className="ui-label text-ink-faint">{row.name}</span>
          <span className="rounded-control border border-dotted border-line px-1.5 py-px font-mono text-[10px] uppercase leading-none tracking-[0.1em] text-ink-faint">
            half-built
          </span>
        </span>
      </div>
    );
  }

  if (row.staffed) {
    return (
      <div className={`flex ${ROW_H} items-center justify-end border-t border-line pr-4`}>
        <span className="ui-label text-ink-muted">{row.name}</span>
      </div>
    );
  }

  // an UNSTAFFED band: 0.5px dotted seam, greyed, no artifact — an empty outline
  return (
    <div className={`flex ${ROW_H} items-center justify-end border-t border-dotted border-line pr-4`}>
      <span className="flex items-center gap-2">
        <span className="ui-label text-ink-faint">{row.name}</span>
        <span className="rounded-control border border-line px-1.5 py-px font-mono text-[10px] uppercase leading-none tracking-[0.1em] text-ink-faint">
          unstaffed
        </span>
      </span>
    </div>
  );
}
