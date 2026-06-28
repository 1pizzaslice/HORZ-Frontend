/**
 * Blueprint — the recurring backdrop for a function hero (§8.12 drawing brief:
 * "a faint blueprint grid and corner registration crosshairs frame the surface").
 * Pure line-work, the brand's own vocabulary (§8.3 #4: structure is hairlines, not
 * fills or gradients): a faint SVG grid on `--grid-line` + four corner crosshairs.
 * No flare, no gradient, decorative-only (aria-hidden). It sits behind the drawing.
 */
export function Blueprint({ className = "" }: { className?: string }) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 ${className}`.trim()}
      aria-hidden="true"
    >
      {/* the faint engineering grid, drawn as hairlines (not a gradient) */}
      <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
        <defs>
          <pattern id="bp-grid" width="32" height="32" patternUnits="userSpaceOnUse">
            <path
              d="M32 0 H0 V32"
              fill="none"
              style={{ stroke: "var(--grid-line)" }}
              strokeWidth={1}
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#bp-grid)" />
      </svg>
      {/* corner registration crosshairs */}
      {(["left-2 top-2", "right-2 top-2", "bottom-2 left-2", "bottom-2 right-2"] as const).map(
        (pos, i) => (
          <svg
            key={i}
            width={14}
            height={14}
            viewBox="0 0 14 14"
            fill="none"
            className={`absolute text-ink-faint ${pos}`}
          >
            <line x1="7" y1="0" x2="7" y2="14" stroke="currentColor" strokeWidth={1} />
            <line x1="0" y1="7" x2="14" y2="7" stroke="currentColor" strokeWidth={1} />
          </svg>
        ),
      )}
    </div>
  );
}
