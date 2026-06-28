import type { ElementType, ReactNode } from "react";

/**
 * Eyebrow — the single all-caps style (§5): 12px mono, +0.10em, UPPERCASE,
 * tertiary. The Swiss sidehead that pulls section labels into the left margin.
 * Optional mono `index` prefix (`01`…`07`) welds the survey-coordinate motif on.
 * Separators are neutral; vermilion stays on the closed allow-list (use StatusDot).
 */
export function Eyebrow({
  index,
  as: As = "span",
  className = "",
  children,
}: {
  index?: string;
  as?: ElementType;
  className?: string;
  children: ReactNode;
}) {
  return (
    <As className={`eyebrow ${className}`.trim()}>
      {index ? (
        <>
          <span className="index">{index}</span>
          <span className="dot"> · </span>
        </>
      ) : null}
      {children}
    </As>
  );
}
