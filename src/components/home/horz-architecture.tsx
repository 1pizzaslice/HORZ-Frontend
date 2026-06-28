"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import {
  motion,
  useInView,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import { Container, Datum, Eyebrow, Reveal } from "@/components/ui";
import { STRATA } from "@/lib/nav-data";
import { ease, duration } from "@/lib/motion";

/**
 * §8.6 — HORZ-ARCHITECTURE, the page's one interactive diagram: the thesis made
 * manipulable. The visitor separates the horizontal (ours) from the vertical
 * (theirs). Default: strata and core merged. On scroll-in it auto-demonstrates
 * once — the flare core lifts out of the stack to the right and resolves into the
 * founder's vertical, captioned `You build this.`; a manual toggle replays it.
 *
 * Never traps meaning behind a gesture (§8.6): SSR / no-JS / reduced-motion render
 * the separated end-state statically, and the declarative paragraph below carries
 * the argument in plain prose regardless. Copy verbatim from content/01 §6.
 */
const useIsoLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

const ROW_H = 36; // px per stratum in this diagram

/* —— the separation beats, as variants (merged ↔ separated) —— */
const strataV: Variants = {
  merged: { x: 0 },
  separated: { x: -10, transition: { duration: duration.reveal, ease: ease.line } },
};
const mergedCoreV: Variants = {
  merged: { opacity: 1 },
  separated: { opacity: 0, transition: { duration: 0.3, ease: ease.soft } },
};
const sepCoreV: Variants = {
  merged: { opacity: 0, x: -24, scaleY: 0.66 },
  separated: {
    opacity: 1,
    x: 0,
    scaleY: 1,
    transition: { duration: duration.draw, ease: ease.line, delay: 0.2 },
  },
};
const capV = (delay: number): Variants => ({
  merged: { opacity: 0, y: 6 },
  separated: { opacity: 1, y: 0, transition: { duration: duration.reveal, ease: ease.line, delay } },
});

function Cross({ className }: { className: string }) {
  return (
    <svg
      className={`absolute ${className} text-ink-faint`}
      width={9}
      height={9}
      viewBox="0 0 9 9"
      fill="none"
      aria-hidden="true"
    >
      <line x1="4.5" y1="0" x2="4.5" y2="9" stroke="currentColor" strokeWidth={1} />
      <line x1="0" y1="4.5" x2="9" y2="4.5" stroke="currentColor" strokeWidth={1} />
    </svg>
  );
}

function Diagram({
  animateIt,
  separated,
}: {
  animateIt: boolean;
  separated: boolean;
}) {
  // static (SSR / no-JS / reduced): render the separated end-state, no motion.
  const state = separated ? "separated" : "merged";
  const seat = (variants: Variants) =>
    animateIt
      ? { initial: "merged" as const, animate: state, variants }
      : {};
  const stackHeight = STRATA.length * ROW_H;

  return (
    <div
      className="relative mt-10 border border-line px-6 py-10 md:px-12"
      role="img"
      aria-label="The seven horizontal layers horz runs, with the founder's single vertical core lifted out to the side."
    >
      <Cross className="left-1.5 top-1.5" />
      <Cross className="right-1.5 top-1.5" />
      <Cross className="bottom-1.5 left-1.5" />
      <Cross className="bottom-1.5 right-1.5" />

      <div className="relative" style={{ minHeight: stackHeight + 24 }}>
        {/* left caption — over the strata (the breadth horz owns) */}
        <motion.p
          className="index mb-4 text-ink-faint"
          {...seat(capV(0.36))}
        >
          HORZ OWNS THIS — 07 LAYERS, 0 DEPARTMENTS
        </motion.p>

        {/* the strata block (breadth) — slides slightly left on separation */}
        <motion.div className="relative w-full md:w-[62%]" {...seat(strataV)}>
          {STRATA.map((s) => (
            <div
              key={s.index}
              className="flex items-center gap-3 border-t border-line"
              style={{ height: ROW_H }}
            >
              <span className="index w-6 text-ink-faint">{s.index}</span>
              <span className="caption font-mono uppercase tracking-[0.06em] text-ink-muted">
                {s.name}
              </span>
              <span className="ml-3 hidden h-px flex-1 bg-line sm:block" />
            </div>
          ))}
          {/* the merged core — pierces the stack at the page 5/12 line, then fades.
              NOTE: this span lives inside the w-[62%] strata block, so its left% is
              relative to that block, not the box. 67.2% × 62% = 41.667% = the box's
              true 5/12 line, landing in the clear space right of the mono names (they
              end ~174px in) at every md+/desktop width — never cutting them.
              static (reduced / SSR / no-JS): track `separated` directly, so the
              already-drawn end-state shows the core lifted OUT, not in two places */}
          <motion.span
            className="pointer-events-none absolute bottom-0 left-[67.2%] top-0 w-[1.5px] bg-flare"
            style={animateIt ? undefined : { opacity: separated ? 0 : 1 }}
            aria-hidden="true"
            {...seat(mergedCoreV)}
          />
        </motion.div>

        {/* the founder's core, lifted out to the right (the depth they keep).
            below md the strata goes full-width, so the lifted core stacks beneath it
            (mx-auto, mt-10) instead of overlaying it; absolute right-gutter at md+. */}
        <motion.div
          className="static mx-auto mt-10 flex origin-top flex-col items-center md:absolute md:right-[6%] md:top-2 md:mt-0"
          style={{ height: stackHeight }}
          {...seat(sepCoreV)}
        >
          <span className="serif mb-3 text-[1.25rem] leading-none text-ink">
            You build this.
          </span>
          <span className="w-[1.5px] flex-1 bg-flare" aria-hidden="true" />
          <span className="index mt-3 text-ink-faint">YOUR CORE</span>
        </motion.div>
      </div>
    </div>
  );
}

export function HorzArchitecture() {
  const reduced = useReducedMotion() ?? false;
  const [mounted, setMounted] = useState(false);
  // null = follow the scroll auto-demo; true/false = the visitor took control
  const [override, setOverride] = useState<boolean | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  useIsoLayoutEffect(() => setMounted(true), []);
  const animateIt = mounted && !reduced;

  // static (SSR / no-JS / reduced) shows the separated end-state; otherwise it
  // auto-demonstrates once on scroll-in (inView), and the toggle can override.
  const separated = !animateIt || (override ?? inView);

  return (
    <section ref={ref} aria-label="HORZ-ARCHITECTURE">
      <Datum />
      <Container width="content" className="section">
        <Reveal>
          <Eyebrow as="p" className="mb-4">
            The Architecture
          </Eyebrow>
          <p className="display-m max-w-[16ch] text-ink">
            This is HORZ-ARCHITECTURE.
          </p>
        </Reveal>

        {/* keyed on animateIt so the motion subtree mounts hidden once, pre-paint */}
        <Reveal delay={0.08}>
          <Diagram key={animateIt ? "play" : "static"} animateIt={animateIt} separated={separated} />
          <div className="mt-5 flex items-center gap-4">
            <span className="index text-ink-faint" aria-live="polite">
              SEPARATION · {separated ? "100" : "0"}%
            </span>
            <button
              type="button"
              onClick={() => setOverride(!separated)}
              className="inline-link quiet ui-label"
            >
              {separated ? "Reset the cut" : "Pull the core"}
            </button>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <p className="body mt-12 max-w-[66ch] text-ink-muted">
            The next billion-dollar company has one founder deep in a single
            vertical, with the six horizontal functions running as layers
            beneath. No solo company has crossed $100M in revenue yet; the
            constraint was never the product, it was headcount. The breadth is a
            dependency you add. The depth is the only thing that was ever yours.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
