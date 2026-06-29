"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from "framer-motion";
import { Container, Datum, Eyebrow, Reveal } from "@/components/ui";
import { ease } from "@/lib/motion";

/**
 * §8.3 / content/06 §2 — Proof, as a survey log (never a logo wall). Named
 * artifacts and concrete numbers in the instrument's own mono voice: a ledger on
 * the datum. Every figure is honestly stamped [PLACEHOLDER] until real data is
 * swapped in pre-launch (content/01 §3 + the number policy in 00 §7).
 *
 * On first intersection each tabular figure **counts up from 0 to its value**,
 * once, ~700ms on the house ease, staggered top→bottom — the survey reading out.
 * Fire-once: never re-runs, never reverses (content/06 §2). Reduced-motion / no-JS
 * render the final value with no count. Everything that is not a number stays
 * static — verbs, indices, names, leader dots. No flare here; proof is mono ink.
 */
type Bezier = [number, number, number, number];
const LINE = ease.line as unknown as Bezier;
const useIsoLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

// the figure column, as numbers so the count-up is exact; the suffix carries the
// non-counting tail (the cited count, the "M", the franchise unit) verbatim.
const FIELD_LOG = [
  { to: 12418, decimals: 0, suffix: "", label: "tickets resolved in your product's voice", index: "01" },
  { to: 3140, decimals: 0, suffix: "", label: "GDPR Article 28 DPAs issued", index: "02" },
  { to: 47, decimals: 0, suffix: "/12", label: "launch posts shipped / cited in AI answers", index: "04" },
  { to: 1.2, decimals: 1, suffix: "M", label: "company facts answered, source attached", index: "06" },
  { to: 2400, decimals: 0, suffix: "", label: "Delaware franchise filings, before March 1", index: "07" },
];

const fmt = (v: number, decimals: number, suffix: string) =>
  v.toLocaleString("en-US", { minimumFractionDigits: decimals, maximumFractionDigits: decimals }) +
  suffix;

function CountUpFigure({
  to,
  decimals,
  suffix,
  delay,
  className,
}: {
  to: number;
  decimals: number;
  suffix: string;
  delay: number;
  className: string;
}) {
  const reduced = useReducedMotion() ?? false;
  const [mounted, setMounted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.9 });
  const mv = useMotionValue(0);
  const text = useTransform(mv, (v) => fmt(v, decimals, suffix));

  useIsoLayoutEffect(() => setMounted(true), []);
  const animateIt = mounted && !reduced;

  useEffect(() => {
    if (!animateIt || !inView) return;
    const controls = animate(mv, to, { duration: 0.7, delay, ease: LINE });
    return () => controls.stop();
  }, [animateIt, inView, to, delay, mv]);

  // SSR / no-JS / reduced: the final figure, no count.
  return (
    <span ref={ref} className={className}>
      {animateIt ? <motion.span>{text}</motion.span> : fmt(to, decimals, suffix)}
    </span>
  );
}

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
              {/* the figure — large mono, tabular, right-aligned, counts up from 0 */}
              <CountUpFigure
                to={row.to}
                decimals={row.decimals}
                suffix={row.suffix}
                delay={Math.min(i, 5) * 0.06}
                className="index order-3 col-span-2 tabular-nums text-[1.75rem] leading-none tracking-tight text-ink sm:order-2 sm:col-span-1 sm:text-right sm:text-[2rem]"
              />
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
