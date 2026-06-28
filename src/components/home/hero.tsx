"use client";

import { useEffect, useLayoutEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useTransform,
  animate as animateValue,
  type Variants,
} from "framer-motion";
import { CTA } from "@/components/ui";
import { STRATA } from "@/lib/nav-data";
import { ease } from "@/lib/motion";

/**
 * §8.2 — Hero (00 · the cut). The split blueprint, founder-chosen: the verbal
 * stack on the left, the seven-stratum cut drawn on the right, bleeding to the
 * edge. The single vertical core lands on the page 5/12 line, between the words
 * and the drawing — and the tagline word "Vertically." is seated on it (the one
 * structural serif fingerprint of the whole site, used exactly once, §5).
 *
 * The only animated set-piece on the site (§8.6a) — datum draws → strata seam in,
 * indices roll 01→07 → the core descends LAST in flare → the live datum blooms
 * into the 96px dusk band. Plays once on load; SSR / no-JS / reduced-motion render
 * the cut already drawn. Every string verbatim from content/01 §2.
 *
 * Reconciliations (documented for FRONTEND_PROGRESS): display-xl's 96px does not
 * sit in the 41.667% split column without ragged wraps, so the hero headline rides
 * a fitted `.hero-headline` clamp (≈44→76px, still serif/400); the tagline drops to
 * display-m so the headline dominates (§7 — the tagline is never the hero).
 */
type Bezier = [number, number, number, number];
const LINE = ease.line as unknown as Bezier;
const SOFT = ease.soft as unknown as Bezier;

const useIsoLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

/** beat-2 landing time per stratum (mirrors the §8.6a beat table) */
const landAt = (i: number) => 0.6 + i * 0.11;

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
const duskV: Variants = {
  hidden: { opacity: 0, scaleY: 0 },
  visible: { opacity: 1, scaleY: 1, transition: { duration: 0.8, ease: SOFT, delay: 1.9 } },
};

/* —— the mono index rolling 00→0n as its stratum lands (§8.6a beat 3) —— */
function CountIndex({
  value,
  play,
  animateIt,
}: {
  value: string;
  play: boolean;
  animateIt: boolean;
}) {
  const target = parseInt(value, 10);
  const mv = useMotionValue(0);
  const text = useTransform(mv, (v) => String(Math.round(v)).padStart(2, "0"));
  useEffect(() => {
    if (!play) return;
    const controls = animateValue(mv, target, {
      duration: 0.56,
      delay: landAt(target - 1),
      ease: LINE,
    });
    return () => controls.stop();
  }, [play, target, mv]);

  if (!animateIt) return <span className="index">{value}</span>;
  return <motion.span className="index">{text}</motion.span>;
}

/* —— the right-hand drawing: 7 strata + the dusk band + the page core —— */
function HeroCut({ play, animateIt }: { play: boolean; animateIt: boolean }) {
  const seat = (variants: Variants) =>
    animateIt
      ? {
          initial: "hidden" as const,
          animate: play ? ("visible" as const) : ("hidden" as const),
          variants,
        }
      : {};

  return (
    <div className="hero-cut" aria-hidden="true">
      {/* the live datum blooms last into the 96px dusk band (beat 5) */}
      <motion.div className="dusk-band the-section-dusk" {...seat(duskV)} />
      {/* the hairline the strata hang from (beat 1) */}
      <motion.div className="the-section-datum" {...seat(datumV)} />

      <div className="hero-strata">
        {STRATA.map((s, i) => (
          <div key={s.index} className="hero-stratum">
            <motion.div className="hero-stratum-content" {...seat(contentV(i))}>
              <CountIndex value={s.index} play={play} animateIt={animateIt} />
              <span className="hero-stratum-name">{s.name}</span>
            </motion.div>
            <motion.div className="hero-stratum-seam" {...seat(seamV(i))} />
          </div>
        ))}
        {/* the single vertical core — descends last, the page's 5/12 spine */}
        <motion.div className="hero-core" {...seat(coreV)} />
      </div>
    </div>
  );
}

export function Hero() {
  const reduced = useReducedMotion() ?? false;
  const [mounted, setMounted] = useState(false);
  useIsoLayoutEffect(() => setMounted(true), []);
  const animateIt = mounted && !reduced;
  const play = animateIt; // above the fold — the cut draws on load

  return (
    <section className="hero" aria-label="horz — the modular backend for everything around your business">
      <div className="hero-inner">
        {/* —— LEFT: the verbal stack —— */}
        <div className="hero-words">
          <p className="eyebrow">STATION 0.0000 — THE COMPANY, IN SECTION</p>

          <h1 className="hero-headline mt-6 text-ink">
            The modular backend for everything around your business.
          </h1>

          {/* the tagline rides the core: "Vertically." ends on the 5/12 line */}
          <p className="hero-tagline display-m mt-8 text-ink">
            Scale Horizontally.
            <br />
            Focus Vertically.
          </p>

          <p className="lead mt-8 max-w-[52ch] text-ink-muted">
            Support, legal, HR, marketing, analytics, and tax — six functions on
            one company brain. You keep the one part only you can build.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <CTA href="/login" variant="primary" size="lg">
              Start building.
            </CTA>
            <CTA href="/contact" variant="secondary" size="lg">
              Talk to us.
            </CTA>
          </div>

          <p className="index mt-8 text-ink-faint">
            07 LAYERS · 1 CORE · 0 DEPARTMENTS
          </p>
        </div>

        {/* —— RIGHT: the drawn cut —— keyed so it mounts hidden once, pre-paint —— */}
        <HeroCut key={animateIt ? "play" : "static"} play={play} animateIt={animateIt} />
      </div>
    </section>
  );
}
