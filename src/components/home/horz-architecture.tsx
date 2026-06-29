"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useMotionValueEvent,
  useReducedMotion,
  useTransform,
} from "framer-motion";
import { Container, Datum, Eyebrow, Reveal } from "@/components/ui";
import { STRATA } from "@/lib/nav-data";
import { ease } from "@/lib/motion";

/**
 * §8.6 / content/06 §4 — HORZ-ARCHITECTURE, the page's one interactive diagram:
 * the thesis made operable. The integrated section pulls apart into its two
 * halves — the breadth horz owns, and the one depth the founder keeps.
 *
 * On pointer devices a **drag handle sits on the datum**; dragging it drives a
 * live `SEPARATION` value from 0→100%. The seven strata gather left under the
 * `horz` wordmark; the single core slides right and resolves into `YOUR CORE`, the
 * flare welded to it the whole way (the founder's depth never leaves the founder).
 * The page scrolls normally — nothing pins, nothing jacks.
 *
 * Never traps meaning behind a gesture (§8.6): on touch, keyboard-only, or
 * `prefers-reduced-motion` the resolved 100% state renders directly — separation
 * shown as a *fact*, no handle — and the declarative paragraph carries the
 * argument in prose regardless. Copy verbatim from content/01 §6.
 */
const useIsoLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

const ROW_H = 36; // px per stratum in this diagram

/** the 20-cell tabular readout bar, e.g. `[██████████··········]`. */
function bar(v: number) {
  const filled = Math.round((v / 100) * 20);
  return `[${"█".repeat(filled)}${"·".repeat(20 - filled)}]`;
}

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

export function HorzArchitecture() {
  const reduced = useReducedMotion() ?? false;
  const [mounted, setMounted] = useState(false);
  const [interactive, setInteractive] = useState(false);
  const [maxX, setMaxX] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.5 });
  const demoed = useRef(false);

  // the single source of truth, 0→100. drag updates `x`; everything derives `sep`.
  const x = useMotionValue(0);
  const sep = useMotionValue(0);

  useIsoLayoutEffect(() => {
    setMounted(true);
    // motion-allowed → the drag interaction (the handle is `touch-none`, so it
    // works on touch without fighting page scroll); reduced-motion → the 100% fact.
    setInteractive(!reduced);
    if (reduced) sep.set(100);
  }, [reduced, sep]);

  // measure the handle's travel; keep it current on resize.
  useEffect(() => {
    if (!interactive) return;
    const measure = () => {
      const el = trackRef.current;
      if (el) setMaxX(Math.max(0, el.offsetWidth - 28)); // 28 = handle width
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [interactive]);

  // derive the 0→100 separation from the handle position
  useMotionValueEvent(x, "change", (v) => {
    if (maxX > 0) sep.set(Math.min(100, Math.max(0, (v / maxX) * 100)));
  });

  // auto-demonstrate once on scroll-in: the cut pulls apart to 100%, then the
  // handle rests separated and the visitor can drag it to scrub the thesis.
  useEffect(() => {
    if (!interactive || !inView || maxX <= 0 || demoed.current) return;
    demoed.current = true;
    const controls = animate(x, maxX, { duration: 1.1, ease: ease.line as [number, number, number, number], delay: 0.25 });
    return () => controls.stop();
  }, [interactive, inView, maxX, x]);

  // —— derived visuals (read `sep`, animate nothing imperatively) ——
  const strataX = useTransform(sep, [0, 100], [0, -14]);
  const mergedOpacity = useTransform(sep, [0, 55], [1, 0]);
  const liftedOpacity = useTransform(sep, [35, 100], [0, 1]);
  const liftedX = useTransform(sep, [0, 100], [-24, 0]);
  const liftedScaleY = useTransform(sep, [0, 100], [0.66, 1]);
  const capLeftOpacity = useTransform(sep, [0, 40], [0.001, 1]);
  const barText = useTransform(sep, (v) => bar(v));
  const pctText = useTransform(sep, (v) => `${String(Math.round(v)).padStart(3, " ")}%`);

  const stackHeight = STRATA.length * ROW_H;
  // static (SSR / no-JS / non-interactive): the resolved separated end-state.
  const staticSeparated = !mounted || !interactive;

  return (
    <section ref={sectionRef} aria-label="HORZ-ARCHITECTURE">
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

        <Reveal delay={0.08}>
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
                style={staticSeparated ? undefined : { opacity: capLeftOpacity }}
              >
                HORZ OWNS THIS — 07 LAYERS, 0 DEPARTMENTS
              </motion.p>

              {/* the strata block (breadth) — slides slightly left on separation */}
              <motion.div
                className="relative w-full md:w-[62%]"
                style={staticSeparated ? { x: -14 } : { x: strataX }}
              >
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
                {/* the merged core — pierces the stack at the page 5/12 line, then
                    fades as the cut separates. left% is relative to this w-[62%]
                    block: 67.2% × 62% = 41.667% = the box's true 5/12 line, in the
                    clear space right of the mono names — never cutting them. */}
                <motion.span
                  className="pointer-events-none absolute bottom-0 left-[67.2%] top-0 w-[1.5px] bg-flare"
                  style={staticSeparated ? { opacity: 0 } : { opacity: mergedOpacity }}
                  aria-hidden="true"
                />
              </motion.div>

              {/* the founder's core, lifted out to the right (the depth they keep).
                  below md the strata goes full-width, so the lifted core stacks
                  beneath it (mx-auto, mt-10) instead of overlaying it. */}
              <motion.div
                className="static mx-auto mt-10 flex origin-top flex-col items-center md:absolute md:right-[6%] md:top-2 md:mt-0"
                style={
                  staticSeparated
                    ? { height: stackHeight, opacity: 1, x: 0, scaleY: 1 }
                    : { height: stackHeight, opacity: liftedOpacity, x: liftedX, scaleY: liftedScaleY }
                }
              >
                <span className="serif mb-3 text-[1.25rem] leading-none text-ink">
                  You build this.
                </span>
                <span className="w-[1.5px] flex-1 bg-flare" aria-hidden="true" />
                <span className="index mt-3 text-ink-faint">YOUR CORE</span>
              </motion.div>
            </div>

            {/* the drag handle on the datum (pointer devices only) */}
            {!staticSeparated ? (
              <div className="relative mt-8">
                <div ref={trackRef} className="relative h-7">
                  {/* the datum the handle rides */}
                  <span className="pointer-events-none absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-datum" aria-hidden="true" />
                  <motion.button
                    type="button"
                    aria-label="Drag to separate the seven layers from your core"
                    drag="x"
                    dragConstraints={{ left: 0, right: maxX }}
                    dragElastic={0}
                    dragMomentum={false}
                    style={{ x }}
                    whileDrag={{ cursor: "grabbing" }}
                    className="absolute left-0 top-0 flex h-7 w-7 cursor-grab touch-none items-center justify-center rounded-control border border-flare bg-bg text-flare"
                  >
                    <span className="font-mono text-[13px] leading-none" aria-hidden="true">
                      ‖
                    </span>
                  </motion.button>
                </div>
                <p className="mt-3 flex items-center gap-3" aria-hidden="true">
                  <span className="index whitespace-pre text-ink-faint">SEPARATION</span>
                  <motion.span className="index whitespace-pre text-ink-muted">{barText}</motion.span>
                  <motion.span className="index whitespace-pre tabular-nums text-ink-muted">{pctText}</motion.span>
                </p>
                <p className="caption mt-2 font-mono uppercase tracking-[0.08em] text-ink-faint">
                  Drag the handle — pull your core out of the stack
                </p>
              </div>
            ) : (
              <p className="mt-8 flex items-center gap-3 index text-ink-faint" aria-hidden="true">
                <span className="whitespace-pre">SEPARATION</span>
                <span className="whitespace-pre text-ink-muted">{bar(100)}</span>
                <span className="whitespace-pre tabular-nums text-ink-muted">100%</span>
              </p>
            )}
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
