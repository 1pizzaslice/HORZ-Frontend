import { Container, Datum, Eyebrow, FlareLink, Reveal } from "@/components/ui";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { LEGAL_NAV } from "@/lib/legal";
import type { LegalBlock, LegalDoc } from "@/lib/legal/types";

/**
 * <LegalDocument> — the one renderer for every policy (Terms / Privacy / Cookies).
 * The document is drawn as a section cut: a coordinate eyebrow, the serif title,
 * the intro lead, a sticky Contents rail in the left margin (the Swiss sidehead,
 * here as anchor nav), and the clauses as a numbered strata with hairline seams.
 * No flare CTA and no dusk band — legal is the calm, unembellished surface; the
 * one warmth is the footer's horizon floor. Reduced-motion safe (Reveal degrades).
 */

function Block({ block }: { block: LegalBlock }) {
  if (typeof block === "string") {
    return <p className="body mt-4 max-w-[66ch] text-ink-muted">{block}</p>;
  }
  if ("subheading" in block) {
    return <h3 className="ui-label mt-7 text-ink">{block.subheading}</h3>;
  }
  return (
    <ul className="mt-4 max-w-[66ch] space-y-2.5">
      {block.list.map((item, i) => (
        <li key={i} className="relative pl-5 text-ink-muted">
          <span
            className="absolute left-0 top-[0.55em] block h-px w-3 bg-ink-faint"
            aria-hidden="true"
          />
          <span className="body-sm">{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function LegalDocument({ doc }: { doc: LegalDoc }) {
  const others = LEGAL_NAV.filter((d) => d.slug !== doc.slug);

  return (
    <>
      <SiteNav heroOverlay />
      <main id="main-content" tabIndex={-1}>
        {/* —— the masthead —— */}
        <header className="relative">
          <Datum />
          <Container width="content" className="pt-32 md:pt-40">
            <Reveal>
              <Eyebrow as="p">{doc.kicker}</Eyebrow>
            </Reveal>
            <Reveal delay={0.06} y={20}>
              <h1
                className="serif mt-8 max-w-[18ch] text-ink"
                style={{
                  fontSize: "clamp(2.25rem, 4.4vw, 3.5rem)",
                  lineHeight: 1.06,
                  letterSpacing: "-0.02em",
                }}
              >
                {doc.title}
              </h1>
            </Reveal>
            {doc.intro.map((p, i) => (
              <Reveal key={i} delay={0.12 + i * 0.05} as="p" className="lead mt-6 max-w-[66ch] text-ink-muted">
                {p}
              </Reveal>
            ))}
          </Container>
        </header>

        {/* —— contents rail + clauses —— */}
        <Datum className="mt-16 md:mt-24" />
        <Container width="content" className="section">
          <div className="grid grid-cols-1 gap-x-12 gap-y-10 lg:grid-cols-[210px_1fr]">
            {/* Contents — sticky sidehead on desktop, a stacked box on mobile */}
            <nav aria-label="Contents" className="lg:sticky lg:top-24 lg:self-start">
              <Eyebrow as="p" className="mb-4">
                Contents
              </Eyebrow>
              <ol className="flex flex-col gap-2 border-t border-line pt-4">
                {doc.clauses.map((c) => (
                  <li key={c.index}>
                    <FlareLink href={`#clause-${c.index}`} quiet className="body-sm flex gap-3">
                      <span className="index shrink-0 text-ink-faint">{c.index}</span>
                      <span>{c.heading}</span>
                    </FlareLink>
                  </li>
                ))}
              </ol>
            </nav>

            {/* the clauses, a numbered strata */}
            <div className="min-w-0 border-t border-line">
              {doc.clauses.map((c) => (
                <section
                  key={c.index}
                  id={`clause-${c.index}`}
                  className="scroll-mt-24 border-b border-line py-10 first:pt-8"
                >
                  <div className="flex items-baseline gap-4">
                    <span className="index shrink-0 text-ink-faint">{c.index}</span>
                    <h2 className="h4 text-ink">{c.heading}</h2>
                  </div>
                  <div className="mt-2 md:pl-10">
                    {c.blocks.map((b, i) => (
                      <Block key={i} block={b} />
                    ))}
                  </div>
                </section>
              ))}

              {/* the closing contact line */}
              <div className="py-10">
                <p className="body max-w-[66ch] text-ink-muted">
                  {doc.contact.line}{" "}
                  <FlareLink href={`mailto:${doc.contact.email}`} className="font-mono text-ink">
                    {doc.contact.email}
                  </FlareLink>
                  .
                </p>

                {/* cross-links to the other policies */}
                <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-line pt-8">
                  <Eyebrow as="p">More legal</Eyebrow>
                  {others.map((d) => (
                    <FlareLink key={d.slug} href={d.href} className="index uppercase">
                      {`${d.title} →`}
                    </FlareLink>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </main>
      <SiteFooter />
    </>
  );
}
