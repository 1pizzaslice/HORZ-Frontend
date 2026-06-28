import type { ElementType, ReactNode } from "react";

/**
 * Container — the editorial frame (§6). Four widths, no fifth:
 *   prose 680 (reading measure ~66ch) · content 1200 (default editorial) ·
 *   wide 1440 (the control-panel rack) · bleed 100vw (datum, dusk band, strata).
 * Outer margins are the §6 responsive steps (24 → 48 → 80) via `.frame`.
 */
type ContainerWidth = "prose" | "content" | "wide" | "bleed";

const WIDTH_CLASS: Record<ContainerWidth, string> = {
  prose: "frame frame-prose",
  content: "frame",
  wide: "frame frame-wide",
  bleed: "", // full-bleed: no frame, no max-width, no inline padding
};

export function Container({
  width = "content",
  as: As = "div",
  className = "",
  children,
}: {
  width?: ContainerWidth;
  as?: ElementType;
  className?: string;
  children: ReactNode;
}) {
  return <As className={`${WIDTH_CLASS[width]} ${className}`.trim()}>{children}</As>;
}
