/**
 * DuskBand — the one gradient, once per page (§8.6). A 96px band of light
 * seated on the section datum: a linear horizon, never an orb, never behind
 * text. It drifts ±2% hue over 20s (the only ambient loop) and the site-wide
 * grain rides over it to kill banding. Use at most once per page.
 */
export function DuskBand({ className = "" }: { className?: string }) {
  return <div className={`dusk-band ${className}`.trim()} aria-hidden="true" />;
}
