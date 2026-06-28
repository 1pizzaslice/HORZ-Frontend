"use client";

import { useState, type ReactNode } from "react";
import {
  CTA,
  Col,
  Container,
  Datum,
  DuskBand,
  Eyebrow,
  FlareLink,
  Grid,
  Section,
  StatusDot,
} from "@/components/ui";
import { ThemeToggle } from "@/components/theme-toggle";
import { DensityProvider, type Density, useDensity } from "@/lib/density";
import { STRATA } from "@/lib/nav-data";

/* —— a small arrow used on link/CTA demos —— */
function Arrow() {
  return (
    <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="square" aria-hidden="true">
      <path d="M5 12h13M13 6l6 6-6 6" />
    </svg>
  );
}

/* —— a labelled demo cell: a hairline-framed surface hosting one component —— */
function Demo({ caption, children }: { caption: string; children: ReactNode }) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex min-h-[88px] flex-wrap items-center gap-4 rounded-control border border-line bg-surface p-6">
        {children}
      </div>
      <span className="mono text-[12px] text-ink-faint">{caption}</span>
    </div>
  );
}

/* —— the density segmented control (flare-free dev chrome, §7.8 baseline) —— */
function DensityToggle({
  density,
  onChange,
}: {
  density: Density;
  onChange: (d: Density) => void;
}) {
  const opts: Density[] = ["editorial", "control"];
  return (
    <div className="flex items-center gap-1 border-b border-line">
      {opts.map((o) => (
        <button
          key={o}
          type="button"
          onClick={() => onChange(o)}
          aria-pressed={density === o}
          className={`ui-label relative px-3 py-2 capitalize transition-colors duration-150 ease-micro ${
            density === o ? "text-ink" : "text-ink-faint hover:text-ink-muted"
          }`}
        >
          {o}
          {density === o ? (
            <span className="absolute inset-x-3 bottom-[-1px] h-px bg-ink" aria-hidden="true" />
          ) : null}
        </button>
      ))}
    </div>
  );
}

/* —— the strata rack: the 7 layers as stratum rows (Phase-2 signature teaser) —— */
function StrataRack() {
  const density = useDensity();
  const upper = density === "control";
  return (
    <div className="border-y border-line">
      {STRATA.map((s) => (
        <a
          key={s.index}
          href="#"
          onClick={(e) => e.preventDefault()}
          className="stratum-row seam seam-top group px-1"
        >
          <span className="index w-8 shrink-0 text-ink-faint transition-colors duration-150 ease-micro group-hover:text-ink-muted">
            {s.index}
          </span>
          <span
            className={`min-w-0 flex-1 text-ink ${
              upper ? "ui-label uppercase tracking-[0.04em]" : "h4"
            }`}
          >
            {s.name}
          </span>
          {!upper ? (
            <span className="body-sm hidden truncate text-ink-muted sm:block">
              {s.blurb}
            </span>
          ) : null}
          <span className="ml-4 hidden text-ink-faint transition-colors duration-150 ease-micro group-hover:text-ink-muted md:block">
            <Arrow />
          </span>
        </a>
      ))}
    </div>
  );
}

export function KitShowcase() {
  const [density, setDensity] = useState<Density>("editorial");

  return (
    <DensityProvider density={density}>
      <main className="flex-1">
        {/* —— hero —— transparent nav overlays this; the dusk band is the one flare —— */}
        <Container width="content" className="pt-32 pb-16 md:pt-40">
          <Eyebrow as="p" index="P1" className="mb-6">
            Component Library
          </Eyebrow>
          <h1 className="display-l max-w-[16ch] text-ink">
            The kit, drawn from the section.
          </h1>
          <p className="lead mt-6 max-w-[58ch] text-ink-muted">
            Every primitive is a fragment of the Section — structural surfaces at
            0px, divided by hairlines; controls at 2px; the flare spent once.
            Toggle the surface and the density to prove each piece holds.
          </p>
        </Container>
        <DuskBand />

        {/* —— controls bar —— sticky under the nav —— */}
        <div className="sticky top-16 z-40 border-y border-line bg-bg/85 backdrop-blur-md">
          <Container
            width="content"
            className="flex items-center justify-between gap-4 py-3"
          >
            <Eyebrow as="span" className="hidden sm:inline">
              Kit Controls
            </Eyebrow>
            <div className="flex items-center gap-6">
              <DensityToggle density={density} onChange={setDensity} />
              <div className="flex items-center gap-3">
                <span className="mono hidden text-[12px] text-ink-faint sm:inline">
                  Night / Day
                </span>
                <ThemeToggle />
              </div>
            </div>
          </Container>
        </div>

        {/* —— BUTTONS —— */}
        <Section index="01" label="Buttons" description="§7.1 · 2px · ui-label · one flare fill per viewport">
          <div className="flex flex-col gap-10">
            <Demo caption="variants — primary (the one flare) · secondary (bottom seam) · ghost · destructive">
              <CTA variant="primary" size={density === "control" ? "sm" : "md"}>Start building.</CTA>
              <CTA variant="secondary" size={density === "control" ? "sm" : "md"}>Talk to us.</CTA>
              <CTA variant="ghost" size={density === "control" ? "sm" : "md"}>Read docs.</CTA>
              <CTA variant="destructive" size={density === "control" ? "sm" : "md"}>Delete layer.</CTA>
            </Demo>

            <Demo caption="sizes — sm 32 · md 40 · lg 48">
              <CTA variant="secondary" size="sm">Small</CTA>
              <CTA variant="secondary" size="md">Medium</CTA>
              <CTA variant="secondary" size="lg">Large</CTA>
              <CTA variant="primary" size="lg" trailingIcon={<Arrow />}>Start building.</CTA>
            </Demo>

            <Demo caption="states — disabled (no opacity wash) · loading (glyph redraw + bottom bar)">
              <CTA variant="primary" disabled>Start building.</CTA>
              <CTA variant="secondary" disabled>Talk to us.</CTA>
              <CTA variant="primary" loading>Start building.</CTA>
              <CTA variant="secondary" loading>Talk to us.</CTA>
            </Demo>
          </div>
        </Section>

        {/* —— LINKS & EYEBROWS —— */}
        <Section index="02" label="Links & labels" description="§7.2 / §5 · the seam-in atom + the one all-caps style">
          <div className="flex flex-col gap-10">
            <div className="max-w-prose">
              <p className="body text-ink-muted">
                Inline links are the second sanctioned flare use — hover any of
                them to draw the underline seam. Read the{" "}
                <FlareLink href="/manifesto">manifesto</FlareLink>, or talk to a{" "}
                <FlareLink href="/contact">founder on the team</FlareLink>. A{" "}
                <FlareLink href="/security" quiet>quiet link</FlareLink> carries no
                flare; an{" "}
                <FlareLink href="https://soc2.example.com" external>
                  external report
                </FlareLink>{" "}
                gets the trailing mark.
              </p>
            </div>
            <Demo caption="eyebrow — 12px mono · +0.10em · uppercase · tertiary · optional index">
              <Eyebrow>Horz-Architecture</Eyebrow>
              <span className="text-ink-faint">/</span>
              <Eyebrow index="01">Customer Service</Eyebrow>
            </Demo>
          </div>
        </Section>

        {/* —— STATUS —— */}
        <Section index="03" label="Status dots" description="§7.4 · 6px · colour carries the signal · live may pulse">
          <Demo caption="live (flare, pulsing) is the only vermilion dot — everything else is a non-flare signal">
            <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
              {[
                { tone: "live", label: "LIVE", pulse: true },
                { tone: "success", label: "OPERATIONAL" },
                { tone: "warning", label: "CALIBRATING" },
                { tone: "danger", label: "DEGRADED" },
                { tone: "neutral", label: "IDLE" },
              ].map((s) => (
                <span key={s.label} className="flex items-center gap-2.5">
                  <StatusDot tone={s.tone as "live"} pulse={s.pulse} />
                  <span className="mono text-[12px] tracking-[0.04em] text-ink-muted">
                    {s.label}
                  </span>
                </span>
              ))}
            </div>
          </Demo>
        </Section>

        {/* —— THE RACK —— */}
        <Section
          index="04"
          label="The rack"
          width="wide"
          description="the seven layers as strata — a teaser; the animated Section signature is Phase 2"
        >
          <p className="body-sm mb-6 max-w-prose text-ink-muted">
            Strata abut edge-to-edge, divided by hairlines at 0px radius, each
            welded to a 2-digit mono index. Hover a stratum and its seam thickens
            to flare. Switch density to feel the editorial ↔ control-panel jolt.
          </p>
          <StrataRack />
        </Section>

        {/* —— LAYOUT —— */}
        <Section index="05" label="Layout" description="§6 · 12-col / 24px gutter · four widths · the datum">
          <div className="flex flex-col gap-12">
            <div>
              <Eyebrow as="p" className="mb-4">Grid — asymmetry by default</Eyebrow>
              <Grid className="gap-y-3">
                <Col mdSpan={7} className="rounded-control border border-line bg-raised px-4 py-3">
                  <span className="mono text-[12px] text-ink-muted">cols 1–7 · content</span>
                </Col>
                <Col mdSpan={3} mdStart={8} className="rounded-control border border-line px-4 py-3">
                  <span className="mono text-[12px] text-ink-faint">8–10</span>
                </Col>
                <Col mdSpan={5} className="rounded-control border border-line px-4 py-3">
                  <span className="mono text-[12px] text-ink-faint">5 cols</span>
                </Col>
                <Col mdSpan={2} mdStart={6} className="rounded-control border border-line px-4 py-3">
                  <span className="mono text-[12px] text-ink-faint">core 5/12</span>
                </Col>
              </Grid>
            </div>

            <div>
              <Eyebrow as="p" className="mb-4">Containers — prose 680 · content 1200 · wide 1440</Eyebrow>
              <div className="flex flex-col gap-3">
                {[
                  { w: "prose", px: "680" },
                  { w: "content", px: "1200" },
                  { w: "wide", px: "1440" },
                ].map((c) => (
                  <div key={c.w} className="flex items-center gap-4">
                    <span className="mono w-20 shrink-0 text-[12px] text-ink-faint">{c.w}</span>
                    <div
                      className="h-2 rounded-control bg-ink-muted/40"
                      style={{ width: `${Number(c.px) / 18}%` }}
                    />
                    <span className="mono text-[11px] text-ink-faint">{c.px}px</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <Eyebrow as="p" className="mb-4">Datum — the 1px structural line at every section top</Eyebrow>
              <Datum />
            </div>
          </div>
        </Section>

        {/* —— THE SEAM ATOM —— */}
        <Section index="06" label="The seam" description="§7.0 · the single most-repeated motion on the site">
          <div className="flex flex-col gap-6">
            <p className="body max-w-prose text-ink-muted">
              One gesture underlies every hover: a 1px line wipes in{" "}
              <span className="mono text-ink">scaleX 0→1</span>, left-origin, 220ms
              on the primary ease. It is the link underline, the secondary button
              edge, the card seam, the nav and footer hovers. Under reduced motion
              it degrades to an opacity fade — state is never motion-only.
            </p>
            <Demo caption="hover each — the same atom, three hosts">
              <CTA variant="secondary">Bottom seam</CTA>
              <FlareLink href="#" onClick={(e) => e.preventDefault()}>An inline link</FlareLink>
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="seam seam-top relative inline-flex items-center rounded-control border border-line bg-surface px-4 py-2.5"
                style={{ ["--seam-color" as string]: "var(--flare)" }}
              >
                <span className="ui-label text-ink">Top-seam card</span>
              </a>
            </Demo>
          </div>
        </Section>
      </main>
    </DensityProvider>
  );
}
