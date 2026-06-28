"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/**
 * Smooth scroll (§8.11) — the one Lenis instance, tuned *against* "parallax soup":
 * low inertia, short duration, no momentum theatrics. It drives native scroll, so
 * IntersectionObserver reveals and Framer's `useInView` keep working unchanged.
 *
 * Disabled on touch and under reduced motion (§8.11): coarse pointers get native
 * momentum scroll, and reduced-motion gets the plain document scroll. Renders
 * nothing — it only installs the rAF loop for its lifetime.
 */
export function SmoothScroll() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    if (reduce || coarse) return;

    const lenis = new Lenis({
      lerp: 0.1, // calm, low-inertia (§8.11)
      duration: 1.0,
      smoothWheel: true,
    });

    let frame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);

  return null;
}
