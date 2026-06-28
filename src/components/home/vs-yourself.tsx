"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container, Datum, Eyebrow, Reveal } from "@/components/ui";
import { ease, duration } from "@/lib/motion";

/**
 * §8.7 — Vs. doing it yourself. Comparison without the checkmark-grid cliché: two
 * section cuts of one company, drawn side by side. The rows (01–07) run down the
 * shared center spine and never change — only who runs them does. The left cut
 * sags (four layers UNSTAFFED, a thin overloaded grey core); the right cut is the
 * clean rack with the earned flare core. Flare as scarcity, made literal: the left
 * is starved of it. No green check / red X — the drawing carries the verdict.
 * Caption verbatim from content/01 §7.
 */
const ROWS = [
  { index: "01", name: "Customer Service", staffed: true },
  { index: "02", name: "Legal", staffed: false },
  { index: "03", name: "HR", staffed: false },
  { index: "04", name: "Marketing", staffed: true },
  { index: "05", name: "Analytics", staffed: false },
  { index: "06", name: "Company Brain", staffed: true },
  { index: "07", name: "Tax", staffed: false },
];

const ROW = "flex h-16 items-center border-t border-line";

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
            {/* —— WITHOUT: the sagging cut —— */}
            <div className="relative">
              {/* the thin, overloaded, flare-starved core (md+ only — below md the
                  3-col grid stays but the %-line would cut the fixed-width names) */}
              <span
                className="pointer-events-none absolute bottom-0 left-[32%] top-0 hidden w-px bg-ink-faint opacity-40 md:block"
                aria-hidden="true"
              />
              {ROWS.map((r, i) =>
                !r.staffed && i === 2 && !reduced ? (
                  // one seam stalls and jitters — the survey of a building that sags
                  <motion.div
                    key={r.index}
                    className={`${ROW} justify-end pr-4`}
                    initial={{ x: 0 }}
                    whileInView={{ x: [0, -3, 2, -1, 0] }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      ease: ease.move,
                      delay: 0.3 + i * 0.05,
                    }}
                  >
                    <WithoutBand name={r.name} staffed={r.staffed} />
                  </motion.div>
                ) : (
                  <div key={r.index} className={`${ROW} justify-end pr-4`}>
                    <WithoutBand name={r.name} staffed={r.staffed} />
                  </div>
                ),
              )}
            </div>

            {/* —— the shared index spine —— */}
            <div className="border-x border-line">
              {ROWS.map((r) => (
                <div key={r.index} className={`${ROW} justify-center`}>
                  <span className="index text-ink-faint">{r.index}</span>
                </div>
              ))}
            </div>

            {/* —— WITH horz: the clean rack —— */}
            <div className="relative">
              {/* the one earned flare core — pierces the rack in the clear right
                  margin (mirrors the WITHOUT core at left-32%), never cutting a name.
                  md+ only — below md the %-line would cut the fixed-width names */}
              <motion.span
                className="pointer-events-none absolute bottom-0 right-[32%] top-0 hidden w-[1.5px] origin-top bg-flare md:block"
                aria-hidden="true"
                initial={reduced ? { scaleY: 1 } : { scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: duration.draw, ease: ease.line, delay: 0.6 }}
              />
              {ROWS.map((r) => (
                <div key={r.index} className={`${ROW} pl-4`}>
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

/** the left-cut rendering of a row: staffed rows hold; unstaffed sag to tertiary. */
function WithoutBand({ name, staffed }: { name: string; staffed: boolean }) {
  if (staffed) {
    return <span className="ui-label text-ink-muted">{name}</span>;
  }
  return (
    <span className="flex items-center gap-2">
      <span className="ui-label text-ink-faint">{name}</span>
      <span className="rounded-control border border-line px-1.5 py-px font-mono text-[10px] uppercase leading-none tracking-[0.1em] text-ink-faint">
        unstaffed
      </span>
    </span>
  );
}
