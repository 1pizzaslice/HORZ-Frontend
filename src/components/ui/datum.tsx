/**
 * Datum — the 1px structural section line (§2 / §6 / §8.7 Device B). The same
 * weight, colour, and position site-wide: every major section opens on one.
 * It is *not* the signature (that's the strata + core); it's the grid made
 * visible. The live variant — the dusk band — is its own primitive (<DuskBand>).
 */
export function Datum({ className = "" }: { className?: string }) {
  return <div className={`datum ${className}`.trim()} aria-hidden="true" />;
}
