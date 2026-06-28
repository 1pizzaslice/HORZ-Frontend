"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ease, duration } from "@/lib/motion";

/**
 * Reveal — the house scroll-reveal (§8.5), the only entry motion besides the
 * Section set-piece. Opacity + a 16px rise, single-pass, never re-triggering:
 * `viewport={{ once: true }}` fires once and unobserves. The instrument is
 * composed; it does not fly in. Large hero-adjacent lines may rise up to 24px.
 *
 * Stagger is the caller's job — pass `delay = Math.min(i, 5) * 0.09` so a long
 * list caps at the sixth item's delay (no 2-second cascade). Reduced motion
 * (§8.5): the rise drops to 0, opacity-only — everything is simply present.
 */
type Tag = "div" | "section" | "p" | "li" | "ul" | "span" | "figure";

export function Reveal({
  as = "div",
  delay = 0,
  y = 16,
  amount = 0,
  className = "",
  children,
}: {
  as?: Tag;
  delay?: number;
  /** rise distance; ceiling is 24px for hero-adjacent display lines (§8.5) */
  y?: number;
  /** how much must be visible before firing (0 = any pixel) */
  amount?: number;
  className?: string;
  children: ReactNode;
}) {
  const reduced = useReducedMotion() ?? false;
  const Comp = motion[as];

  return (
    <Comp
      initial={reduced ? { opacity: 0 } : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount, margin: "0px 0px -12% 0px" }}
      transition={{ duration: duration.reveal, ease: ease.line, delay }}
      className={className}
    >
      {children}
    </Comp>
  );
}
