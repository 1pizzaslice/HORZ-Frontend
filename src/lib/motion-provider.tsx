"use client";

import { MotionConfig, useReducedMotion } from "framer-motion";

/**
 * Reduced-motion is first-class, not retrofitted (§8.10). Two layers cooperate:
 *
 *  1. CSS — globals.css §10 collapses every animation/transition when the OS
 *     reports `prefers-reduced-motion: reduce`. That covers the seam atoms,
 *     the dusk drift, all CSS motion. It needs no JS.
 *  2. JS — Framer Motion respects the same query via `reducedMotion="user"`,
 *     so set-pieces fall back to opacity-only with no transforms.
 *
 * This wrapper installs (2) site-wide. Components that animate with Framer read
 * `useMotionPref()` to branch (e.g. opacity-only vs. a 16px rise).
 */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

/** True when the visitor asked for reduced motion — branch set-pieces on this. */
export function useMotionPref(): { reduced: boolean } {
  return { reduced: useReducedMotion() ?? false };
}
