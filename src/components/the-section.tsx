"use client";

/**
 * THE SECTION — horz's signature artifact (§2 / §7.5.2 / §8.5).
 *
 * Every horz surface is a section cut through a company: the seven functions
 * render as horizontal strata, stacked edge-to-edge and divided by hairline
 * seams, each welded to a 2-digit mono index, all pierced once by a single
 * vertical core in flare on the 5/12 column line. The strata are the breadth
 * horz owns; the core is the depth the founder keeps. It is the literal picture
 * of the business model and of the tagline — recognizable from a cropped fragment.
 *
 * The entry set-piece is the only orchestrated sequence on the site (§8.6a),
 * here driven by Framer Motion's declarative timeline rather than GSAP:
 *
 *   1 · datum draws left→right        (scaleX, --dur-draw)
 *   2 · strata seam in, top→bottom    (scaleX, 110ms stagger) + content fades up 8px
 *   3 · indices roll 00→0n            (lands with each seam)
 *   4 · the core descends LAST        (scaleY from the datum, in flare)
 *   5 · the dusk band blooms          (hero context only — `withDuskBand`)
 *
 * Reduced motion (§8.10): the Section is rendered **already drawn** — every
 * stratum, index, and the core present, no transforms. Theme + density are
 * handled entirely by tokens / the [data-density] context, so the same drawing
 * serves the airy editorial rack and the dense control-panel rack.
 *
 * STACK NOTE: DESIGN_SYSTEM §8.6/§8.11 specs the hero cut as a GSAP timeline.
 * The locked build stack (FRONTEND_ROADMAP) is Framer Motion + Lenis with no
 * GSAP. Framer's per-element transition delays reproduce the §8.6a beat table
 * frame-for-frame, so we stay in the locked stack. Flagged in FRONTEND_PROGRESS.
 */

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  motion,
  useInView,
  useReducedMotion,
  useMotionValue,
  useTransform,
  animate,
  type Variants,
} from "framer-motion";
import { STRATA } from "@/lib/nav-data";
import { ease } from "@/lib/motion";
import { SECTION_ARTIFACTS } from "./section-artifacts";

// Framer types a cubic-bezier ease as a 4-tuple, not number[]
type Bezier = [number, number, number, number];
const LINE = ease.line as unknown as Bezier;
const SOFT = ease.soft as unknown as Bezier;

/** Per-stratum landing time — beat 2 starts at 0.6s, staggered 110ms (§8.6a). */
const landAt = (i: number) => 0.6 + i * 0.11;

/* —— the §8.6a beats, as declarative variants —— */
const datumV: Variants = {
  hidden: { scaleX: 0 },
  visible: { scaleX: 1, transition: { duration: 0.72, ease: LINE } },
};
const seamV = (i: number): Variants => ({
  hidden: { scaleX: 0 },
  visible: { scaleX: 1, transition: { duration: 0.56, ease: LINE, delay: landAt(i) } },
});
const contentV = (i: number): Variants => ({
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: LINE, delay: landAt(i) } },
});
const coreV: Variants = {
  hidden: { scaleY: 0 },
  visible: { scaleY: 1, transition: { duration: 0.64, ease: LINE, delay: 1.7 } },
};
// the dusk blooms BEFORE the core descends (content/06 §1) so the vermilion core
// is the final beat — depth lands on top of the lit breadth.
const duskV: Variants = {
  hidden: { opacity: 0, scaleY: 0 },
  visible: { opacity: 1, scaleY: 1, transition: { duration: 0.8, ease: SOFT, delay: 1.3 } },
};

/** Avoid the SSR useLayoutEffect warning while keeping the pre-paint timing. */
const useIsoLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

/* —— the mono index that rolls 00→0n as its stratum lands (§8.6a beat 3) —— */
function CountIndex({
  value,
  delay,
  play,
  animateIt,
}: {
  value: string;
  delay: number;
  play: boolean;
  animateIt: boolean;
}) {
  const target = parseInt(value, 10);
  const mv = useMotionValue(0);
  const text = useTransform(mv, (v) => String(Math.round(v)).padStart(2, "0"));

  useEffect(() => {
    if (!play) return;
    const controls = animate(mv, target, { duration: 0.56, delay, ease: LINE });
    return () => controls.stop();
  }, [play, target, delay, mv]);

  // static / reduced-motion: the index is simply already set
  if (!animateIt) return <span className="index stratum-index">{value}</span>;
  return <motion.span className="index stratum-index">{text}</motion.span>;
}

/* —— the `┊→` row affordance (§8.5): a dotted core-tick + a hairline arrow —— */
function Chevron() {
  return (
    <svg width={22} height={14} viewBox="0 0 22 14" fill="none" aria-hidden="true">
      <line x1="1" y1="0" x2="1" y2="14" stroke="currentColor" strokeWidth={1} strokeDasharray="1.5 2.5" vectorEffect="non-scaling-stroke" />
      <path d="M8 3l5 4-5 4" stroke="currentColor" strokeWidth={1} strokeLinecap="square" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}

/* —— the rack: 7 strata + the one shared core. Remounted when arming so the
   hidden initial state takes hold before the browser paints (no flash). —— */
function Rack({
  play,
  animateIt,
  reduced,
  withDuskBand,
}: {
  play: boolean;
  animateIt: boolean;
  reduced: boolean;
  withDuskBand: boolean;
}) {
  const seat = (variants: Variants) => {
    if (!animateIt) return {};
    return {
      initial: "hidden" as const,
      animate: play ? ("visible" as const) : ("hidden" as const),
      variants,
    };
  };

  // "one degree of life on hover" (§8.5 / content/06 §3): the hovered/focused
  // row plays its own micro-motion and lights the single flare accent; pointer
  // hover animates, keyboard focus snaps to the resolved end-state (no motion).
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [focusIndex, setFocusIndex] = useState<number | null>(null);
  const activeIndex = hoverIndex ?? focusIndex;

  return (
    <>
      {withDuskBand ? (
        <motion.div className="dusk-band the-section-dusk" aria-hidden="true" {...seat(duskV)} />
      ) : null}

      <motion.div className="the-section-datum" aria-hidden="true" {...seat(datumV)} />

      <div className="the-section-strata">
        {STRATA.map((s, i) => {
          const Artifact = SECTION_ARTIFACTS[s.index];
          // reduced: every row at its resolved end-state, no motion, no per-row
          // flare (the core stays the only flare). otherwise the active row alone
          // resolves + flares; pointer hover animates, keyboard focus snaps.
          const artifactProps = reduced
            ? { active: true, flare: false, snap: true }
            : {
                active: activeIndex === i,
                flare: activeIndex === i,
                snap: hoverIndex === null && focusIndex === i,
              };
          return (
            <Link
              key={s.index}
              href={s.href}
              className="stratum"
              aria-label={`${s.index} ${s.name} — ${s.blurb}`}
              onPointerEnter={() => setHoverIndex(i)}
              onPointerLeave={() => setHoverIndex((cur) => (cur === i ? null : cur))}
              onFocus={() => setFocusIndex(i)}
              onBlur={() => setFocusIndex((cur) => (cur === i ? null : cur))}
            >
              <motion.div className="stratum-content" {...seat(contentV(i))}>
                {/* left of the core — what the layer IS */}
                <span className="stratum-lead">
                  <CountIndex value={s.index} delay={landAt(i)} play={play} animateIt={animateIt} />
                  <span className="stratum-text">
                    <span className="stratum-name">{s.name}</span>
                    <span className="stratum-claim">{s.blurb}</span>
                  </span>
                </span>
                {/* right of the core — the work drawn in section */}
                <span className="stratum-figure">
                  <span className="stratum-artifact">{Artifact ? <Artifact {...artifactProps} /> : null}</span>
                  <span className="stratum-chevron">
                    <Chevron />
                  </span>
                </span>
              </motion.div>
              <motion.div className="stratum-seam" aria-hidden="true" {...seat(seamV(i))} />
            </Link>
          );
        })}

        {/* the single vertical core — drawn once for the whole rack, on the 5/12
            line, the only saturated flare in the drawing (§2 / §7.5.2). */}
        <motion.div className="rack-core" aria-hidden="true" {...seat(coreV)} />
      </div>
    </>
  );
}

export function TheSection({
  withDuskBand = false,
  className = "",
}: {
  /** Open the live datum into the 96px dusk band as the final beat (hero only). */
  withDuskBand?: boolean;
  className?: string;
}) {
  const reduced = useReducedMotion() ?? false;
  const [mounted, setMounted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  // the set-piece plays once, when the rack enters the viewport (§8.6a)
  const inView = useInView(ref, { once: true, amount: 0.3 });

  // arm only after mount and only when motion is allowed; the pre-paint swap
  // (layout effect) means the hidden initial state never flashes the drawn one.
  useIsoLayoutEffect(() => {
    setMounted(true);
  }, []);

  const animateIt = mounted && !reduced;
  const play = animateIt && inView;

  return (
    <div ref={ref} className={`the-section ${className}`.trim()}>
      {/* keyed on `animateIt` so the motion subtree mounts with initial="hidden"
          exactly once, before paint — SSR/no-JS/reduced all render fully drawn. */}
      <Rack key={animateIt ? "play" : "static"} play={play} animateIt={animateIt} reduced={reduced} withDuskBand={withDuskBand} />
    </div>
  );
}
