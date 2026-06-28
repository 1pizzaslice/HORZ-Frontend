import Link from "next/link";
import {
  Container,
  CTA,
  Datum,
  Eyebrow,
  FlareLink,
  Reveal,
  Section,
} from "@/components/ui";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { STRATA, POSITIONING_ONE_LINER } from "@/lib/nav-data";
import { getNeighbors, type FunctionPage } from "@/lib/functions";
import { FunctionHero } from "./function-hero";
import { Objections } from "./objections";

/**
 * The function detail page (§8.12) — one stratum pulled out of the rack and
 * opened, then walked top to bottom. One data-driven template renders all seven
 * (`01 customer-service … 07 tax`) from `lib/functions/*`; nothing per-page is
 * copy-pasted. Rhythm alternates editorial air (work, trust, the math) and
 * Control-Panel density (the pipeline, the capability rack) so the descent has a
 * jolt. The page's one flare CTA fill lives at the warm floor; the hero core and
 * the cross-sell tick are the only other flare on the page.
 */
export function FunctionPageView({ fn }: { fn: FunctionPage }) {
  return (
    <>
      <SiteNav heroOverlay />
      <main>
        <FunctionHero fn={fn} />
        <WorkInSection fn={fn} />
        <Pipeline fn={fn} />
        <SubRack fn={fn} />
        <Connects fn={fn} />
        <CostLedger fn={fn} />
        <TrustControl fn={fn} />
        <Proof fn={fn} />
        <ObjectionsSection fn={fn} />
        <CrossSell fn={fn} />
        <CtaFloor fn={fn} />
      </main>
      <SiteFooter />
    </>
  );
}

/* ── The work, in section — the artifact descent (editorial) ─────────────── */
function WorkInSection({ fn }: { fn: FunctionPage }) {
  return (
    <Section index={fn.index} label="The work, in section">
      {fn.work.intro ? (
        <Reveal>
          <p className="body mb-10 max-w-[68ch] text-ink-muted">{fn.work.intro}</p>
        </Reveal>
      ) : null}
      <ul className="border-t border-line">
        {fn.work.artifacts.map((a, i) => (
          <Reveal
            as="li"
            key={a.caption}
            delay={Math.min(i, 5) * 0.06}
            className="grid grid-cols-1 gap-x-8 gap-y-2 border-b border-line py-8 md:grid-cols-[7rem_1fr]"
          >
            <span className="index text-ink-faint">{a.caption}</span>
            <div>
              <h3 className="h3 text-ink">{a.title}</h3>
              <p className="body mt-2 max-w-[62ch] text-ink-muted">{a.body}</p>
            </div>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}

/* ── How the layer runs — the pipeline (control jolt) ────────────────────── */
function Pipeline({ fn }: { fn: FunctionPage }) {
  return (
    <section aria-label={fn.pipeline.title}>
      <Datum />
      <Container width="content" className="section">
        <Reveal>
          <Eyebrow as="h2" index={fn.index} className="mb-4">
            {fn.pipeline.title}
          </Eyebrow>
          {fn.pipeline.intro ? (
            <p className="body-sm max-w-[60ch] text-ink-muted">{fn.pipeline.intro}</p>
          ) : null}
        </Reveal>

        <ol className="relative mt-12">
          {/* the pipeline spine the step nodes sit on */}
          <span
            className="pointer-events-none absolute bottom-3 left-[7px] top-3 w-px bg-line"
            aria-hidden="true"
          />
          {fn.pipeline.steps.map((s, i) => (
            <Reveal
              as="li"
              key={s.code}
              delay={Math.min(i, 5) * 0.06}
              className="relative grid grid-cols-[auto_1fr] gap-x-6 pb-8 last:pb-0"
            >
              <span
                className="relative z-10 mt-1 block size-[15px] rounded-full border border-line bg-bg"
                aria-hidden="true"
              />
              <div>
                <div className="flex flex-wrap items-baseline gap-x-3">
                  <span className="index text-ink-faint">{s.code}</span>
                  <span className="ui-label text-ink">{s.label}</span>
                </div>
                <p className="body mt-2 max-w-[64ch] text-ink-muted">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}

/* ── Capability sub-rack — the Control-Panel mini-rack (dense, wide) ──────── */
function SubRack({ fn }: { fn: FunctionPage }) {
  return (
    <section aria-label="Capability rack">
      <Datum />
      <Container width="wide" className="section">
        <Reveal>
          <Eyebrow as="h2" index={fn.index} className="mb-4">
            Capability rack
          </Eyebrow>
          {fn.subRack.intro ? (
            <p className="body-sm max-w-[60ch] text-ink-muted">{fn.subRack.intro}</p>
          ) : null}
        </Reveal>

        <div className="mt-10 border-t border-line">
          {fn.subRack.rows.map((r, i) => (
            <Reveal
              key={r.code}
              delay={Math.min(i, 5) * 0.05}
              className="grid grid-cols-[3.5rem_1fr] items-baseline gap-x-5 border-b border-line py-4 md:grid-cols-[5rem_15rem_1fr] md:gap-x-8"
            >
              <span className="index text-ink-faint">{r.code}</span>
              <span
                className="mono text-[0.8125rem] uppercase text-ink"
                style={{ letterSpacing: "0.06em" }}
              >
                {r.name}
              </span>
              <span className="body-sm col-span-2 mt-1 text-ink-muted md:col-span-1 md:mt-0">
                {r.desc}
              </span>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ── Connects to — the stack ledger (01 splits Reads / Acts on) ───────────── */
function Connects({ fn }: { fn: FunctionPage }) {
  return (
    <Section index={fn.index} label={fn.connects.title}>
      {fn.connects.intro ? (
        <Reveal>
          <p className="body mb-10 max-w-[64ch] text-ink-muted">{fn.connects.intro}</p>
        </Reveal>
      ) : null}

      {fn.connects.groups.map((g, gi) => (
        <div key={gi} className={gi > 0 ? "mt-12" : ""}>
          {g.head ? (
            <Reveal>
              <Eyebrow as="p" className="mb-4">
                {g.head}
              </Eyebrow>
            </Reveal>
          ) : null}
          <ul className="border-t border-line">
            {g.items.map((it, i) => (
              <Reveal
                as="li"
                key={it.label}
                delay={Math.min(i, 5) * 0.05}
                className="grid grid-cols-1 gap-x-8 gap-y-1 border-b border-line py-4 md:grid-cols-[18rem_1fr]"
              >
                <span className="ui-label text-ink">{it.label}</span>
                {it.note ? (
                  <span className="body-sm text-ink-muted">{it.note}</span>
                ) : null}
              </Reveal>
            ))}
          </ul>
        </div>
      ))}

      {fn.connects.footer ? (
        <Reveal>
          <p className="body-sm mt-8 max-w-[64ch] text-ink-muted">{fn.connects.footer}</p>
        </Reveal>
      ) : null}
    </Section>
  );
}

/* ── The math — the cost ledger (named figures) ──────────────────────────── */
function CostLedger({ fn }: { fn: FunctionPage }) {
  return (
    <Section index={fn.index} label={fn.cost.title}>
      {fn.cost.intro ? (
        <Reveal>
          <p className="caption mb-8 max-w-[68ch] font-mono uppercase tracking-[0.06em] text-ink-faint">
            {fn.cost.intro}
          </p>
        </Reveal>
      ) : null}
      <ul className="border-t border-line">
        {fn.cost.items.map((it, i) => (
          <Reveal
            as="li"
            key={i}
            delay={Math.min(i, 5) * 0.06}
            className="grid grid-cols-[3rem_1fr] gap-x-6 border-b border-line py-5"
          >
            <span className="index text-ink-faint">{String(i + 1).padStart(2, "0")}</span>
            <p className="body max-w-[68ch] text-ink-muted">
              {it.lead ? (
                <span className="font-medium text-ink">{it.lead} </span>
              ) : null}
              {it.body}
            </p>
          </Reveal>
        ))}
      </ul>
      {fn.cost.footer ? (
        <Reveal>
          <p className="body mt-8 max-w-[68ch] text-ink">{fn.cost.footer}</p>
        </Reveal>
      ) : null}
    </Section>
  );
}

/* ── Trust and control — the human-gate ledger ───────────────────────────── */
function TrustControl({ fn }: { fn: FunctionPage }) {
  return (
    <Section index={fn.index} label="Trust and control">
      <ul className="border-t border-line">
        {fn.trust.items.map((it, i) => (
          <Reveal
            as="li"
            key={i}
            delay={Math.min(i, 5) * 0.06}
            className="grid grid-cols-1 gap-x-10 gap-y-2 border-b border-line py-6 md:grid-cols-[18rem_1fr]"
          >
            <span className="ui-label text-ink">{it.lead}</span>
            <p className="body max-w-[64ch] text-ink-muted">{it.body}</p>
          </Reveal>
        ))}
      </ul>
      {fn.trust.footer ? (
        <Reveal>
          <p className="body mt-8 max-w-[60ch] text-ink">{fn.trust.footer}</p>
        </Reveal>
      ) : null}
    </Section>
  );
}

/* ── Proof — the survey log (named quantities, not a logo wall) ───────────── */
function Proof({ fn }: { fn: FunctionPage }) {
  return (
    <section aria-label="Survey log">
      <Datum />
      <Container width="content" className="section">
        <div className="mb-8 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-3">
          <Eyebrow as="h2" index={fn.index}>
            Survey log
          </Eyebrow>
          <span className="index uppercase text-ink-faint">
            {`Layer ${fn.index} · ${fn.name}`}
          </span>
        </div>

        <ul className="border-t border-line">
          {fn.proof.rows.map((r, i) =>
            r.value ? (
              <Reveal
                as="li"
                key={i}
                delay={Math.min(i, 5) * 0.06}
                className="grid grid-cols-1 items-baseline gap-x-8 gap-y-1 border-b border-line py-4 sm:grid-cols-[1fr_auto]"
              >
                <span className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <span className="font-mono text-[0.8125rem] tracking-[0.04em] text-ink-faint">
                    {r.label}
                  </span>
                  {r.note ? (
                    <span className="body-sm text-ink-muted">{r.note}</span>
                  ) : null}
                </span>
                <span className="index text-[1.375rem] leading-none text-ink sm:text-right">
                  {r.value}
                </span>
              </Reveal>
            ) : (
              <Reveal
                as="li"
                key={i}
                delay={Math.min(i, 5) * 0.06}
                className="border-b border-line py-4"
              >
                <span className="font-mono text-[0.875rem] tracking-[0.02em] text-ink-muted">
                  {r.label}
                </span>
              </Reveal>
            ),
          )}
        </ul>

        <p className="caption mt-6 font-mono uppercase tracking-[0.08em] text-ink-faint">
          Survey log · every figure [placeholder] until verified
        </p>
      </Container>
    </section>
  );
}

/* ── Objections — the hairline accordion ─────────────────────────────────── */
function ObjectionsSection({ fn }: { fn: FunctionPage }) {
  return (
    <Section index={fn.index} label={fn.objectionsTitle ?? "Objections"}>
      <Objections items={fn.objections} />
    </Section>
  );
}

/* ── One of seven — the cross-sell strip + stratum nav ───────────────────── */
function CrossSell({ fn }: { fn: FunctionPage }) {
  const { prev, next } = getNeighbors(fn.slug);
  return (
    <section aria-label="One of seven">
      <Datum />
      <Container width="content" className="section">
        <Reveal>
          <Eyebrow as="p" className="mb-6">
            One of seven
          </Eyebrow>
          <p className="body max-w-[62ch] text-ink-muted">{fn.oneOfSeven}</p>
        </Reveal>

        {/* the rack, the current layer lit; the rest greyed (§8.12 cross-sell) */}
        <Reveal delay={0.08} className="mt-12 border-t border-line">
          {STRATA.map((s) => {
            const current = s.index === fn.index;
            const inner = (
              <>
                {current ? (
                  <span
                    className="absolute inset-y-0 left-0 w-[1.5px] bg-flare"
                    aria-hidden="true"
                  />
                ) : null}
                <span
                  className={`index ${current ? "pl-4 text-ink" : "text-ink-faint"}`}
                >
                  {s.index}
                </span>
                <span
                  className={`ui-label ${current ? "text-ink" : "text-ink-faint"}`}
                >
                  {s.name}
                </span>
                <span className="body-sm ml-auto hidden text-ink-faint md:block">
                  {s.blurb}
                </span>
              </>
            );
            return current ? (
              <div
                key={s.index}
                aria-current="page"
                className="relative flex items-baseline gap-4 border-b border-line py-4"
              >
                {inner}
              </div>
            ) : (
              <Link
                key={s.index}
                href={s.href}
                className="seam seam-top group relative flex items-baseline gap-4 border-b border-line py-4 transition-colors duration-150 ease-micro hover:bg-surface"
              >
                {inner}
              </Link>
            );
          })}
        </Reveal>

        <div className="mt-10 flex items-center justify-between gap-4">
          <FlareLink href={`/${prev.slug}`} quiet className="index uppercase">
            {`← ${prev.index} ${prev.name}`}
          </FlareLink>
          <FlareLink href={`/${next.slug}`} quiet className="index uppercase">
            {`${next.index} ${next.name} →`}
          </FlareLink>
        </div>
      </Container>
    </section>
  );
}

/* ── The floor — the page's one flare CTA fill (§8.12) ────────────────────── */
function CtaFloor({ fn }: { fn: FunctionPage }) {
  const [a, b] = POSITIONING_ONE_LINER.split(". ");
  return (
    <section aria-label="Start building" data-nav-flare="off" className="relative bg-horizon">
      <Datum />
      {/* the page core arrives at the floor and terminates in one flare tick */}
      <span
        className="pointer-events-none absolute left-1/2 top-0 flex flex-col items-center md:left-[41.667%]"
        aria-hidden="true"
      >
        <span className="h-16 w-[1.5px] bg-flare" />
        <span className="h-[1.5px] w-5 bg-flare" />
      </span>

      <Container width="content" className="section">
        <Reveal>
          <Eyebrow as="p" index={fn.index} className="mb-8">
            The Floor
          </Eyebrow>
        </Reveal>
        <Reveal delay={0.05} y={24}>
          <p className="display-l max-w-[18ch] text-ink">{a}.</p>
        </Reveal>
        <Reveal delay={0.12} y={24}>
          <p className="display-l mt-2 max-w-[18ch] text-ink-muted">{b}</p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-12 flex flex-wrap items-center gap-4">
            <CTA href="/login" variant="primary" size="lg">
              Start building.
            </CTA>
            <CTA href="/contact" variant="secondary" size="lg">
              Talk to us.
            </CTA>
          </div>
        </Reveal>

        <p className="index mt-12 text-ink-faint">
          {`END OF SECTION · LAYER ${fn.index} · ${fn.name}`}
        </p>
      </Container>
    </section>
  );
}
