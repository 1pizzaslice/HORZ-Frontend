"use client";

import { createContext, useContext } from "react";

/**
 * The two density modes (§6 / §7.5) — the product story told in layout.
 *
 *  • "editorial"  — airy. Generous section air (96/128/192), 24px internal
 *                   padding, sentence-case strata. The marketing altitude.
 *  • "control"    — the dense Control-Panel "rack" jolt. 16px padding, 8px row
 *                   rhythm, mono UPPERCASE labels, control widths. The instrument.
 *
 * A `data-density` attribute also rides on the provider wrapper so CSS-only
 * primitives (.stratum-row) respond without reading context.
 */
export type Density = "editorial" | "control";

const DensityContext = createContext<Density>("editorial");

export function DensityProvider({
  density,
  children,
}: {
  density: Density;
  children: React.ReactNode;
}) {
  return (
    <DensityContext.Provider value={density}>
      <div data-density={density}>{children}</div>
    </DensityContext.Provider>
  );
}

export function useDensity(): Density {
  return useContext(DensityContext);
}
