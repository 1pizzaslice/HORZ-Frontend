import { StackedLockup } from "@/components/brand";
import { ThemeToggleLabeled } from "@/components/theme-toggle";
import { Container, Datum, Eyebrow, FlareLink, StatusDot } from "@/components/ui";
import {
  FOOTER_COLUMNS,
  NAMESPACE_NOTE,
  POSITIONING_ONE_LINER,
  STATUS_LINE,
  TAGLINE,
  type NavLink,
} from "@/lib/nav-data";

/**
 * Site footer (§7.7 / §8.10) — the closing section cut. A final datum tops it;
 * the directory renders as four mini-strata, mono-indexed A–D, hairline rows.
 * The status line carries a single non-flare success dot. The bottom row seats
 * on `horizon-floor` — the warm ground where the night meets earth, the one
 * brand payoff at the literal bottom. No flare here at all; the calm exit.
 */
function FooterLink({ link }: { link: NavLink }) {
  if (link.soon) {
    return (
      <span className="body-sm inline-flex items-center gap-2 text-ink-faint">
        {link.label}
        <span className="rounded-control border border-line px-1.5 py-px font-mono text-[10px] uppercase tracking-[0.1em] text-ink-faint">
          soon
        </span>
      </span>
    );
  }
  return (
    <FlareLink href={link.href} external={link.external} quiet className="body-sm">
      {link.label}
    </FlareLink>
  );
}

export function SiteFooter() {
  return (
    <footer className="relative bg-bg">
      <Datum />
      <Container width="content" className="pt-20 pb-12 md:pt-24">
        <div className="grid grid-cols-12 gap-x-6 gap-y-14">
          {/* brand block — cols 1–4 */}
          <div className="col-span-12 md:col-span-4">
            <StackedLockup />
            <p className="body-sm mt-6 max-w-[34ch] text-ink-muted">
              {POSITIONING_ONE_LINER}
            </p>
            <p className="mono mt-3 text-[12px] text-ink-faint">{TAGLINE}</p>
            <p className="mono mt-8 text-[11px] leading-5 text-ink-faint">
              {NAMESPACE_NOTE}
            </p>
          </div>

          {/* directory — cols 5–12, four mini-strata */}
          <div className="col-span-12 grid grid-cols-2 gap-x-6 gap-y-12 md:col-span-8 md:grid-cols-4">
            {FOOTER_COLUMNS.map((col) => (
              <nav key={col.index} aria-label={col.head}>
                <Eyebrow as="p" index={col.index} className="mb-5">
                  {col.head}
                </Eyebrow>
                <ul className="flex flex-col gap-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <FooterLink link={link} />
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        {/* status readout — a mini instrument stratum */}
        <div className="mt-16">
          <Datum />
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 pt-5">
            <StatusDot tone="success" label="All layers operational" />
            <span className="mono text-[12px] tracking-[0.04em] text-ink-muted">
              {STATUS_LINE.state}
            </span>
            <span className="mono text-[12px] tracking-[0.04em] text-ink-faint">
              {STATUS_LINE.detail}
            </span>
            <span className="mono ml-auto text-[12px] tracking-[0.04em] text-ink-faint">
              {STATUS_LINE.station}
            </span>
          </div>
        </div>
      </Container>

      {/* baseplate — seats on the warm horizon floor */}
      <div className="bg-horizon">
        <Container
          width="content"
          className="flex flex-col gap-4 py-6 sm:flex-row sm:items-center sm:justify-between"
        >
          <span className="caption text-ink-faint">
            © 2026 horz · The core stays yours.
          </span>
          <div className="flex items-center gap-6">
            <FlareLink href="/privacy" quiet className="caption">
              Privacy
            </FlareLink>
            <FlareLink href="/terms" quiet className="caption">
              Terms
            </FlareLink>
            <ThemeToggleLabeled />
          </div>
        </Container>
      </div>
    </footer>
  );
}
