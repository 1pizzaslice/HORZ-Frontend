/**
 * GlyphSpinner — the loading indicator (§7.1.1): the section glyph *redrawing*,
 * not a circular throbber. Three strata fade in sequence (a cut being re-cut)
 * while the short core holds. Under reduced motion the CSS animation freezes
 * (§10) and it reads as a static glyph — never a spinning circle.
 */
export function GlyphSpinner({ size = 14 }: { size?: number }) {
  return (
    <svg
      className="glyph-spinner"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth={1.8}
      strokeLinecap="square"
      aria-hidden="true"
    >
      <line className="s1" x1="3" y1="6" x2="20" y2="6" stroke="currentColor" />
      <line className="s2" x1="3" y1="12" x2="15" y2="12" stroke="currentColor" />
      <line className="s3" x1="3" y1="18" x2="18" y2="18" stroke="currentColor" />
      <line x1="9" y1="3" x2="9" y2="21" stroke="currentColor" opacity={0.55} />
    </svg>
  );
}
