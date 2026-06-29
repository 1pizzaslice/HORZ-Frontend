import { Container, CTA, Datum, Eyebrow, FlareLink, Reveal } from "@/components/ui";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { Objections } from "@/components/function-page/objections";
import { ContactHero } from "./contact-hero";
import { TheBoard } from "./the-board";

/**
 * /contact — content/08. The station directory drawn as a switchboard. The hero
 * line on the live dusk band, the board of six channels (with the core seating on
 * the one founder-answered line), the objections, where-this-points cross-links,
 * and the warm floor. Copy verbatim from content/08.
 */
export function ContactPage() {
  return (
    <>
      <SiteNav heroOverlay />
      <main>
        <ContactHero />
        <TheBoard />
        <ContactObjections />
        <WhereThisPoints />
        <Floor />
      </main>
      <SiteFooter />
    </>
  );
}

/* ── objections (verbatim, content/08; outer quotes stripped to match accordion) ─ */
const OBJECTIONS = [
  {
    q: "'Talk to us' sounds like a sales funnel. I don't want an SDR working me.",
    a: "You won't get one. The Talk-to-us line is answered by a founder, not a queue, and there is no drip sequence behind the form. If self-serve fits, Start building skips the call entirely and the first layer is running the same day.",
  },
  {
    q: "Is horz only for solo founders? We run 200 people and a drawer of point tools.",
    a: "No. The standing is scale-agnostic: the bigger the company, the more back-office headcount it can hand back. Migrations off a sprawl of point tools, multi-layer rollouts, multiple entities, a data-residency requirement, and procurement all run through the Talk-to-us line. The seven layers don't change with size; the terms get drawn to fit.",
  },
  {
    q: "We can't pilot until our security team clears you.",
    a: "That is the Security & trust line. Ask and we send the trust pack: the SOC 2 Type II report, a signed GDPR Article 28 DPA, the sub-processor list, and a recent pen-test report, all [verify before launch]. Then we complete your questionnaire. The full controls live at /security, and the review happens before the pilot.",
  },
  {
    q: "I'm a customer and a layer is down. Where do I go?",
    a: "The Support line, and the public board first. status.horz.dev reads each layer independently, so you can see whether the issue is yours or ours before you write. A Marketing outage never holds up a Delaware franchise filing.",
  },
];

function ContactObjections() {
  return (
    <section aria-label="Objections">
      <Datum />
      <Container width="content" className="section">
        <Reveal>
          <Eyebrow as="h2" className="mb-8">
            Objections
          </Eyebrow>
        </Reveal>
        <Reveal delay={0.06}>
          <Objections items={OBJECTIONS} />
        </Reveal>
      </Container>
    </section>
  );
}

/* ── where this points — the cross-links (content/08) ──────────────────────── */
type Point = { title: string; desc: string; label: string; href: string };
const POINTS: Point[] = [
  {
    title: "Pricing",
    desc: "what each route costs to act on.",
    label: "See pricing",
    href: "/pricing",
  },
  {
    title: "Security & Trust",
    desc: "the controls and the trust pack, marked and dated.",
    label: "Read security",
    href: "/security",
  },
  {
    title: "Manifesto",
    desc: "why we run the six functions around your product.",
    label: "Manifesto",
    href: "/manifesto",
  },
  {
    title: "Status",
    desc: "the public board, read per layer.",
    label: "Open status",
    href: "/status",
  },
];

function WhereThisPoints() {
  return (
    <section aria-label="Where this points">
      <Datum />
      <Container width="content" className="section">
        <Reveal>
          <Eyebrow as="h2" className="mb-6">
            Where this points
          </Eyebrow>
        </Reveal>
        <Reveal delay={0.08} as="ul" className="mt-4 border-t border-line">
          {POINTS.map((p) => (
            <li
              key={p.title}
              className="grid grid-cols-1 items-baseline gap-x-8 gap-y-2 border-b border-line py-5 md:grid-cols-[1fr_auto]"
            >
              <p className="body-sm max-w-[64ch] text-ink-muted">
                <span className="ui-label text-ink">{p.title}</span> — {p.desc}
              </p>
              <FlareLink href={p.href} className="index uppercase">
                {`${p.label} →`}
              </FlareLink>
            </li>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}

/* ── the floor — Start building primary (content/08); the page's one flare fill ─ */
function Floor() {
  return (
    <section aria-label="Start building" data-nav-flare="off" className="relative bg-horizon">
      <Datum />
      {/* the core arrives at the floor and terminates in one flare tick */}
      <span
        className="pointer-events-none absolute left-1/2 top-0 flex flex-col items-center md:left-[41.667%]"
        aria-hidden="true"
      >
        <span className="h-16 w-[1.5px] bg-flare" />
        <span className="h-[1.5px] w-5 bg-flare" />
      </span>

      <Container width="content" className="section">
        <Reveal>
          <Eyebrow as="p" className="mb-8">
            The Floor
          </Eyebrow>
        </Reveal>
        <Reveal delay={0.05} y={24}>
          <p className="display-m max-w-[14ch] text-ink">Start building.</p>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <CTA href="/login" variant="primary" size="lg">
              Start building.
            </CTA>
            <CTA href="mailto:talk@horz.dev" variant="secondary" size="lg">
              Talk to us.
            </CTA>
          </div>
        </Reveal>

        <p className="index mt-14 text-ink-faint">
          06 CHANNELS · 1 BOARD · A FOUNDER ON THE LINE
        </p>
        <p className="index mt-3 text-ink-faint">END OF SECTION · STATION 0.0000</p>
      </Container>
    </section>
  );
}
