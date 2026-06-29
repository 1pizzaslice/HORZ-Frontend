"use client";

import { useEffect, useLayoutEffect, useState } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { Container, Datum, Eyebrow } from "@/components/ui";
import { Blueprint } from "@/components/function-page/blueprint";
import { ease } from "@/lib/motion";
import { PricingArt, nodeYFrac } from "./pricing-art";

type Bezier = [number, number, number, number];
const LINE = ease.line as unknown as Bezier;

/** Pre-paint arm without the SSR warning (and dodges set-state-in-effect). */
const useIsoLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

/**
 * PricingHero (content/04) — the section read as a table. Left: the coordinate
 * eyebrow, the serif headline (Formula A, §8.13), the function-not-seat subhead,
 * the mono footnote. Right: the inclusion matrix drawn as a section on a blueprint
 * plate, pierced by the one vertical flare core, which lights a single node on
 * 06 COMPANY BRAIN — the substrate that is in every tier, the constant the price
 * is built on.
 *
 * No CTA here — the page's one flare CTA fill lives at the floor. Set-piece plays
 * once on mount; SSR / no-JS / reduced-motion render it already drawn.
 */
export function PricingHero() {
  const reduced = useReducedMotion() ?? false;
  const [mounted, setMounted] = useState(false);
  useIsoLayoutEffect(() => {
    setMounted(true);
  }, []);
  const animateIt = mounted && !reduced;

  const drawingV: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.72, ease: LINE, delay: 0.15 } },
  };
  const coreV: Variants = {
    hidden: { scaleY: 0 },
    visible: { scaleY: 1, transition: { duration: 0.8, ease: LINE, delay: 0.6 } },
  };
  const nodeV: Variants = {
    hidden: { opacity: 0, scale: 0.4 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.32, ease: LINE, delay: 1.3 } },
  };
  const seat = (v: Variants) =>
    animateIt ? { initial: "hidden" as const, animate: "visible" as const, variants: v } : {};

  return (
    <header className="relative overflow-hidden">
      <Datum />
      <Container
        width="wide"
        className="grid items-center gap-12 pb-16 pt-32 md:min-h-[80vh] md:grid-cols-12 md:gap-8 md:pb-24 md:pt-40"
      >
        {/* —— LEFT: the verbal stack —— */}
        <div className="md:col-span-5">
          <Eyebrow as="p" className="mb-6">
            STATION −0.0750 · PRICING
          </Eyebrow>

          <h1
            className="serif text-ink"
            style={{
              fontSize: "clamp(2.25rem, 4.4vw, 3.5rem)",
              lineHeight: 1.06,
              letterSpacing: "-0.02em",
            }}
          >
            Priced by how much of the company you hand over.
          </h1>

          <p className="body mt-7 max-w-[52ch] text-ink-muted">
            You pay by the function, not the seat. Four layers, six, or all seven
            — the count is the price.
          </p>

          <p className="index mt-8 text-ink-faint">
            07 LAYERS · 06 BRAIN ALWAYS ON · PAY FOR WHAT YOU TURN ON
          </p>
        </div>

        {/* —— RIGHT: the inclusion matrix as a section —— */}
        <div className="relative flex min-h-[320px] items-center justify-center md:col-span-7 md:min-h-[440px]">
          <Blueprint className="opacity-70" />
          <div className="relative w-full">
            <motion.div {...seat(drawingV)}>
              <PricingArt />
            </motion.div>
            {/* the core — descends last on the 5/12 spine */}
            <motion.span
              className="pointer-events-none absolute left-[41.667%] w-[1.5px] origin-top bg-flare"
              style={{ top: "13%", bottom: "12%" }}
              aria-hidden="true"
              {...seat(coreV)}
            />
            {/* the single lit node — 06 Company Brain, the substrate in every tier */}
            <motion.span
              className="pointer-events-none absolute left-[41.667%] size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-flare"
              style={{ top: `${nodeYFrac * 100}%` }}
              aria-hidden="true"
              {...seat(nodeV)}
            />
          </div>
        </div>
      </Container>
    </header>
  );
}
