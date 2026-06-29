"use client";

import { useState } from "react";
import { CTA, Container, Eyebrow } from "@/components/ui";
import { ThemeToggle } from "@/components/theme-toggle";
import { TheSection } from "@/components/the-section";
import { DensityProvider, type Density } from "@/lib/density";

/* —— the density segmented control (flare-free dev chrome, mirrors /_kit) —— */
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
          data-density-opt={o}
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

export function SectionShowcase() {
  const [density, setDensity] = useState<Density>("editorial");
  // bumping this remounts both racks → the entry set-piece re-runs for grading.
  const [replay, setReplay] = useState(0);
  // the rack re-runs whenever density or the replay counter changes
  const runKey = `${density}-${replay}`;

  return (
    <DensityProvider density={density}>
      <main id="main-content" tabIndex={-1} className="flex-1">
        {/* —— intro —— transparent nav overlays this —— */}
        <Container width="content" className="pt-32 pb-12 md:pt-40">
          <Eyebrow as="p" index="P2" className="mb-6">
            The Signature
          </Eyebrow>
          <h1 className="display-l max-w-[18ch] text-ink">
            Your company, drawn in section.
          </h1>
          <p className="lead mt-6 max-w-[60ch] text-ink-muted">
            Seven functions as horizontal strata, divided by hairline seams, each
            welded to a 2-digit index — pierced once by a single vertical core on
            the 5/12 line. The strata are the breadth horz owns; the core is the
            depth the founder keeps. Drawn on enter; already-drawn under reduced
            motion. Toggle the surface and the density to prove the cut holds.
          </p>
        </Container>

        {/* —— controls bar —— sticky under the nav —— */}
        <div className="sticky top-16 z-40 border-y border-line bg-bg/85 backdrop-blur-md">
          <Container
            width="content"
            className="flex items-center justify-between gap-4 py-3"
          >
            <Eyebrow as="span" className="hidden sm:inline">
              Section Controls
            </Eyebrow>
            <div className="flex items-center gap-6">
              <CTA variant="secondary" size="sm" onClick={() => setReplay((n) => n + 1)}>
                Replay the cut
              </CTA>
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

        {/* —— THE RACK (§8.5 homepage slot — no dusk band, one live datum/page) —— */}
        <section>
          <Container width="wide" className="section">
            <div className="mb-10 flex items-end justify-between gap-6">
              <div>
                <Eyebrow as="p" className="mb-4">
                  Breadth
                </Eyebrow>
                <h2 className="h2 max-w-[18ch] text-ink">
                  Seven layers under your whole company.
                </h2>
              </div>
              <span className="mono hidden whitespace-nowrap text-[12px] text-ink-faint md:block">
                §8.5 · the strata
              </span>
            </div>
            <TheSection key={`rack-${runKey}`} />
          </Container>
        </section>

        {/* —— THE HERO CUT (§8.6a — the core descends last, then the dusk blooms) —— */}
        <section>
          <Container width="wide" className="section pt-0">
            <div className="mb-10">
              <Eyebrow as="p" className="mb-4">
                The Set-Piece
              </Eyebrow>
              <h2 className="h3 max-w-[28ch] text-ink">
                The same cut as the hero — the live datum opens into the dusk band.
              </h2>
              <p className="caption mt-3 max-w-[52ch] text-ink-faint">
                §8.6a · datum draws → strata seam in, 110ms stagger → indices roll
                01→07 → the core descends last in flare → the dusk band blooms.
              </p>
            </div>
            <TheSection key={`hero-${runKey}`} withDuskBand />
          </Container>
        </section>

        {/* —— grading note —— */}
        <Container width="content" className="pb-32">
          <div className="rounded-control border border-line bg-surface p-6">
            <Eyebrow as="p" className="mb-3">
              Grading notes
            </Eyebrow>
            <ul className="body-sm flex flex-col gap-2 text-ink-muted">
              <li>
                — Recognizable from a cropped fragment: strata + left-edge mono
                index + one vertical core on the 5/12 line.
              </li>
              <li>
                — Flare appears on the shared core, plus one accent on the hovered
                row&apos;s critical node — ≤5% of the viewport, one core for the rack.
              </li>
              <li>
                — Enable your OS &ldquo;reduce motion&rdquo; setting and reload: every
                row renders at its resolved end-state, no motion, no per-row flare.
              </li>
              <li>
                — Hover any stratum: the layer plays its one degree of life — the
                queue clears, the redline signs off, the sparkline lifts its anomaly
                — and a single vermilion node lights on its work. The row never moves.
              </li>
            </ul>
          </div>
        </Container>
      </main>
    </DensityProvider>
  );
}
