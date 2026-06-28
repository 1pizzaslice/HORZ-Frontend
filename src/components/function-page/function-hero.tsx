"use client";

import { useEffect, useLayoutEffect, useState } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { FunctionPage } from "@/lib/functions";
import { Container, Datum, Eyebrow } from "@/components/ui";
import { ease } from "@/lib/motion";
import { Blueprint } from "./blueprint";
import { FUNCTION_HERO_ART } from "./hero-art";

type Bezier = [number, number, number, number];
const LINE = ease.line as unknown as Bezier;

/** Pre-paint arm without the SSR warning (and dodges the set-state-in-effect rule). */
const useIsoLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

/**
 * FunctionHero (§8.12) — the single stratum, pulled out of the rack and opened.
 * Left: the layer label, the oversized mono index (the one place an index goes
 * display-size), the serif headline, the lead subhead. Right: the artifact drawn
 * in section on a blueprint plate, pierced by the one vertical flare core that
 * descends last and lands on the layer's single human / critical node.
 *
 * No CTA here — the page's one flare CTA fill lives at the floor (§8.12). The
 * hero's only flare is the core + its node. Set-piece plays once on mount; SSR /
 * no-JS / reduced-motion render it already drawn.
 */
export function FunctionHero({ fn }: { fn: FunctionPage }) {
  const reduced = useReducedMotion() ?? false;
  const [mounted, setMounted] = useState(false);
  useIsoLayoutEffect(() => {
    setMounted(true);
  }, []);
  const animateIt = mounted && !reduced;

  const art = FUNCTION_HERO_ART[fn.index];
  const Art = art?.Art;

  const drawingV: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.72, ease: LINE, delay: 0.15 } },
  };
  const coreV: Variants = {
    hidden: { scaleY: 0 },
    visible: { scaleY: 1, transition: { duration: 0.7, ease: LINE, delay: 0.6 } },
  };
  const nodeV: Variants = {
    hidden: { opacity: 0, scale: 0.4 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.32, ease: LINE, delay: 1.15 } },
  };
  const seat = (v: Variants) =>
    animateIt
      ? { initial: "hidden" as const, animate: "visible" as const, variants: v }
      : {};

  return (
    <header className="relative overflow-hidden">
      <Datum />
      <Container
        width="wide"
        className="grid items-center gap-12 pb-16 pt-32 md:min-h-[86vh] md:grid-cols-12 md:gap-8 md:pb-24 md:pt-40"
      >
        {/* —— LEFT: the verbal stack —— */}
        <div className="md:col-span-5">
          <Eyebrow as="p" className="mb-5">
            {`Layer ${fn.index} · ${fn.name}`}
          </Eyebrow>

          {/* the oversized mono index — the masthead numeral */}
          <span
            className="mono block leading-none text-ink-muted"
            style={{ fontSize: "clamp(3.5rem, 8vw, 6rem)", letterSpacing: "-0.02em" }}
            aria-hidden="true"
          >
            {fn.index}
          </span>

          <h1
            className="serif mt-6 text-ink"
            style={{
              fontSize: "clamp(2.5rem, 4.8vw, 4rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.022em",
            }}
          >
            {fn.headline}
          </h1>

          {fn.kicker ? (
            <p className="lead mt-6 max-w-[52ch] text-ink-muted">{fn.kicker}</p>
          ) : null}

          {fn.subhead.map((p, i) => (
            <p key={i} className="body mt-5 max-w-[58ch] text-ink-muted">
              {p}
            </p>
          ))}
        </div>

        {/* —— RIGHT: the stratum opened, drawn in section —— */}
        <div className="relative flex min-h-[300px] items-center justify-center md:col-span-7 md:min-h-[420px]">
          <Blueprint className="opacity-70" />
          {Art ? (
            <div className="relative w-full px-2">
              <motion.div {...seat(drawingV)}>
                <Art />
              </motion.div>
              {/* the one vertical core, on the drawing's 5/12 spine, descends last */}
              <motion.span
                className="pointer-events-none absolute inset-y-0 left-[41.667%] w-[1.5px] origin-top bg-flare"
                aria-hidden="true"
                {...seat(coreV)}
              />
              {/* the single human / critical node the core lands on */}
              <motion.span
                className="pointer-events-none absolute left-[41.667%] size-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-flare"
                style={{ top: `${(art?.nodeY ?? 0.5) * 100}%` }}
                aria-hidden="true"
                {...seat(nodeV)}
              />
            </div>
          ) : null}
        </div>
      </Container>
    </header>
  );
}
