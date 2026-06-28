import type { SVGProps } from "react";

/**
 * The wordmark glyph — the Section in miniature: four horizontal strata
 * (breadth, in ink) pierced once by the vertical core (the founder, in flare).
 * The single most-repeated instance of the signature.
 */
export function Glyph({
  size = 22,
  ...props
}: { size?: number } & SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth={1.6}
      strokeLinecap="square"
      aria-hidden="true"
      {...props}
    >
      <line x1="2.5" y1="5" x2="21" y2="5" stroke="var(--text-primary)" />
      <line x1="2.5" y1="10" x2="15" y2="10" stroke="var(--text-primary)" />
      <line x1="2.5" y1="15" x2="18" y2="15" stroke="var(--text-primary)" />
      <line x1="2.5" y1="20" x2="12" y2="20" stroke="var(--text-primary)" />
      <line
        x1="10"
        y1="2.5"
        x2="10"
        y2="22.5"
        stroke="var(--flare)"
        strokeWidth={1.8}
      />
    </svg>
  );
}

/**
 * Inline lockup — `horz` (grotesque, ink) + `.dev` (mono, tertiary, one step
 * down). The namespace it resolves in, not part of the name. The nav uses this:
 * the glyph would be noise there (§3). Flare never touches the wordmark.
 */
export function InlineLockup({ size = 19 }: { size?: number }) {
  return (
    <span className="flex items-baseline">
      <span
        className="font-grotesk font-medium text-ink"
        style={{ fontSize: size, letterSpacing: "-0.02em" }}
      >
        horz
      </span>
      <span
        className="font-mono text-ink-faint"
        style={{ fontSize: Math.round(size * 0.68), letterSpacing: 0 }}
      >
        .dev
      </span>
    </span>
  );
}

/**
 * Stacked lockup — the glyph above `horz.dev`. The footer's mark (§7.7): a quiet
 * brand payoff at the baseplate. The wordmark stands alone, never with the tagline.
 */
export function StackedLockup() {
  return (
    <span className="flex flex-col gap-3">
      <Glyph size={26} />
      <InlineLockup size={20} />
    </span>
  );
}

/** Back-compat: glyph + inline lockup, used by the Phase-0 holding pages. */
export function Wordmark() {
  return (
    <span className="flex items-baseline gap-[10px]">
      <Glyph className="translate-y-[3px]" />
      <InlineLockup />
    </span>
  );
}

/**
 * Section-glyph menu trigger (§7.6) — three strata + a short core, not three
 * plain bars. On open the strata "cut" into a cross. Strokes transition on the
 * primary ease; under reduced motion the global rule (§10) makes it an instant
 * swap. Purely presentational — the parent owns the button + aria.
 */
export function MenuGlyph({ open }: { open: boolean }) {
  const t = "transition-transform duration-200 ease-line";
  return (
    <svg width={22} height={22} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      {/* top stratum → rotates into the cut */}
      <line
        x1="3"
        y1="7"
        x2="21"
        y2="7"
        stroke="currentColor"
        strokeWidth={1.6}
        strokeLinecap="square"
        className={t}
        style={{
          transformOrigin: "center",
          transform: open ? "translateY(5px) rotate(45deg)" : "none",
        }}
      />
      {/* middle stratum → fades */}
      <line
        x1="3"
        y1="12"
        x2="15"
        y2="12"
        stroke="currentColor"
        strokeWidth={1.6}
        strokeLinecap="square"
        className="transition-opacity duration-200 ease-line"
        style={{ opacity: open ? 0 : 1 }}
      />
      {/* bottom stratum → rotates into the cut */}
      <line
        x1="3"
        y1="17"
        x2="18"
        y2="17"
        stroke="currentColor"
        strokeWidth={1.6}
        strokeLinecap="square"
        className={t}
        style={{
          transformOrigin: "center",
          transform: open ? "translateY(-5px) rotate(-45deg)" : "none",
        }}
      />
      {/* the short core — flare, holds through the cut */}
      <line
        x1="9"
        y1="3"
        x2="9"
        y2="21"
        stroke="var(--flare)"
        strokeWidth={1.6}
        strokeLinecap="square"
        className="transition-opacity duration-200 ease-line"
        style={{ opacity: open ? 0 : 0.7 }}
      />
    </svg>
  );
}
