import type { ReactNode } from "react";
import { Container } from "./container";
import { Datum } from "./datum";
import { Eyebrow } from "./eyebrow";

/**
 * Section — the page's structural unit (§8.0). Every major section opens on a
 * full-bleed datum and pulls its label into the left margin as a Swiss sidehead,
 * with the body on the wide column and real right-hand negative space (§6 — we
 * never center body prose). Vertical air and rail width respond to density via
 * CSS, so this stays a server component.
 */
export function Section({
  index,
  label,
  description,
  width = "content",
  topDatum = true,
  id,
  className = "",
  children,
}: {
  index?: string;
  label?: string;
  description?: ReactNode;
  width?: "prose" | "content" | "wide";
  topDatum?: boolean;
  id?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className={className}>
      {topDatum ? <Datum /> : null}
      <Container width={width} className="section">
        <div className="section-grid">
          {(label || index) && (
            <div className="mb-8 md:mb-0">
              <div className="md:sticky md:top-24">
                {label ? <Eyebrow index={index}>{label}</Eyebrow> : null}
                {description ? (
                  <p className="caption mt-3 max-w-[24ch] text-ink-faint">
                    {description}
                  </p>
                ) : null}
              </div>
            </div>
          )}
          <div className="min-w-0">{children}</div>
        </div>
      </Container>
    </section>
  );
}
