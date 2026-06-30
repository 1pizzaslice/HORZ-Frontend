import {
  Container,
  CTA,
  Datum,
  DuskBand,
  Eyebrow,
  Reveal,
  Section,
} from "@/components/ui";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { ArchitectureFigure } from "./architecture-figure";

/**
 * /manifesto — the About / Manifesto page (content/05). The longest sustained GT
 * Sectra passage on the site: the brand's emotional altitude, stated as fact.
 * Five movements read top to bottom — the hero line on the live dusk band, the
 * manifesto body with serif pull-quotes at each altitude shift, the
 * HORZ-ARCHITECTURE thesis around the one static separation figure, the team
 * drawn as a thin stratum, and the warm closing floor (the page's one flare CTA
 * fill). All copy verbatim from content/05; declarative throughout.
 */
export function AboutPage() {
  return (
    <>
      <SiteNav heroOverlay />
      <main id="main-content" tabIndex={-1}>
        <AboutHero />
        <ManifestoBody />
        <ArchitectureThesis />
        <TeamInSection />
        <ClosingFloor />
      </main>
      <SiteFooter />
    </>
  );
}

/* ── 1 · Hero — the serif line seated on the live dusk band ───────────────── */
function AboutHero() {
  return (
    <header className="relative overflow-hidden">
      <Datum />
      <Container width="content" className="pt-32 md:pt-40">
        <Reveal>
          <Eyebrow as="p">STATION 0.0000 · MANIFESTO</Eyebrow>
        </Reveal>
        <Reveal delay={0.06} y={24}>
          <h1 className="display-xl mt-10 max-w-[17ch] text-ink">
            No company should staff the work that isn&apos;t its product.
          </h1>
        </Reveal>
      </Container>
      {/* the one gradient, once per page — the horizon the manifesto rises from */}
      <DuskBand className="mt-20 md:mt-28" />
    </header>
  );
}

/* ── 2 · Manifesto body — cols 1–7, serif pull-quotes at altitude shifts ───── */
function PullQuote({ children }: { children: React.ReactNode }) {
  return (
    <Reveal as="p" y={20} className="display-m my-12 max-w-[26ch] text-ink md:my-16">
      {children}
    </Reveal>
  );
}

function Body({ children }: { children: React.ReactNode }) {
  return (
    <Reveal as="p" className="body mt-6 max-w-[66ch] text-ink-muted first:mt-0">
      {children}
    </Reveal>
  );
}

function ManifestoBody() {
  return (
    <Section index="00" label="The Manifesto">
      <Body>
        Engineers stopped writing their own auth. Founders should stop running
        their own back office.
      </Body>
      <Body>
        Every product needs the same plumbing — auth, billing, analytics, comms.
        You used to write it. Now you import it: Stripe for billing, Clerk for
        auth, PostHog for analytics. You kept the core logic and offloaded the
        rest.
      </Body>
      <Body>
        The company around the product never got that treatment. Support still
        meant a hire. Legal still meant a retainer at $500 an hour [est.]. HR,
        marketing, analytics, tax — each one was a person, a vendor, or a weekend
        you didn&apos;t get back. A 2am support ticket. A Delaware franchise tax
        filing. A GDPR DPA a prospect asked for on a Tuesday. None of it is your
        product, and all of it lands on you.
      </Body>

      <PullQuote>
        You were never short on the idea. You were short on the company around
        it.
      </PullQuote>

      <Body>
        You were never short on the idea. You were short on a support queue you
        could trust at 2am, a contract you could redline by Friday, a franchise
        return filed before March 1. The product is the part a founder can
        already build alone. The company around it is what still takes
        [PLACEHOLDER · forty] hires.
      </Body>
      <Body>
        The math bent before AI touched it. Instagram reached $1B with 13 people.
        WhatsApp sold for $19B with 55 — about $345M per employee. The value a
        company holds per head has been climbing for over a decade. AI is the
        next order of magnitude on a line that was already drawn.
      </Body>

      <PullQuote>
        Instagram reached $1B with 13 people. The constraint was never ambition.
      </PullQuote>

      <Body>
        Be precise about where this stands. No one-person company has crossed
        $100M in revenue yet, and the honest reason is not the product. It is
        headcount, and the back office is the last place headcount hides. We
        would rather say that plainly than sell you a milestone that has not
        happened.
      </Body>
      <Body>
        horz is the same move, one level up. You added Stripe without hiring a
        payments team. You add horz without hiring support, legal, HR, marketing,
        analytics, or tax. Six functions on one company brain; seven layers, each
        returning an artifact you read and approve: a resolved ticket in your
        product&apos;s voice, a redlined DPA, a filed Form 1120. You import the
        back office the way you imported billing — as a dependency you don&apos;t
        maintain.
      </Body>

      <PullQuote>
        You import the back office the way you imported billing.
      </PullQuote>

      <Body>
        That changes what a small team can hold. Keep the one vertical only you
        can build. Run the seven horizontal functions off managed layers, and
        hold that line of headcount flat while the company grows. The nearly-solo
        company at real scale is no longer a thought experiment. It is an
        operational question, answered in revenue per employee.
      </Body>

      <PullQuote>Keep the one vertical only you can build. Import the rest.</PullQuote>
    </Section>
  );
}

/* ── 3 · The HORZ-ARCHITECTURE thesis — around the one static figure ───────── */
function ArchitectureThesis() {
  return (
    <section aria-label="The Architecture">
      <Datum />
      <Container width="content" className="section">
        <Reveal>
          <Eyebrow as="p">STATION 0.0000 · THE ARCHITECTURE</Eyebrow>
          <p className="index mt-4 text-ink-faint">HORZ-ARCHITECTURE</p>
          <p className="display-m mt-3 max-w-[16ch] text-ink">
            Scale Horizontally. Focus Vertically.
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <ArchitectureFigure />
        </Reveal>

        <div className="mt-12 max-w-[66ch]">
          <Body>A company is a section. Read it as a cut and two things separate.</Body>
          <Body>
            The horizontal is breadth: the seven functions every company runs no
            matter what it sells — customer service, legal, HR, marketing,
            analytics, the company brain, tax. They are the same at every company.
            They are not your advantage. horz owns them, stacked as layers 01
            through 07.
          </Body>
          <Body>
            The vertical is depth: the single core product only you can build.
            Your USP. The reason a customer chose you over the next tab. horz
            never touches it. That boundary is the entire trust signal: we run
            what isn&apos;t yours, and nothing else.
          </Body>
          <Body>
            The old default was to build both. You wrote the product, hired a
            department for each horizontal function, and your vertical got
            whatever attention the back office left over. The new default inverts
            it. Import the seven horizontal layers; spend all your depth on the
            one vertical.
          </Body>
          <Body>
            This holds at any size. A solo founder and a thousand-person company
            run the same seven horizontal functions; the difference is only how
            much headcount each has poured into them. The bigger the company, the
            bigger the back office it can hand back. Keeping only your core is not
            a small-company trick — it is what the best companies have shared at
            every scale.
          </Body>
          <Body>
            The layers are not seven tools wired together after the fact. They
            share one graph — the Company Brain (layer 06), the substrate every
            layer reads from and writes to. The legal layer redlines a contract
            that knows your pricing. The support layer answers a ticket that knows
            your refund policy. The tax layer files a return that knows your
            payroll. Seven point tools can&apos;t read each other; that is the
            difference between a bundle and a backend.
          </Body>
          <Body>
            Scale horizontally, and the company gets wider without getting heavier
            as horz adds layers beneath you. Focus vertically, and go as deep as
            you want on the one thing that is yours. That is the architecture.
            Breadth you depend on, depth you own.
          </Body>
        </div>
      </Container>
    </section>
  );
}

/* ── 4 · The team, in section — a thin stratum, read as a rack ─────────────── */
const TEAM: { index: string; role: string }[] = [
  { index: "01", role: "Founder · Core systems" },
  { index: "02", role: "Engineering · Layers 01–04" },
  { index: "03", role: "Engineering · Layers 05–07" },
  { index: "04", role: "Company Brain · Retrieval & graph" },
  { index: "05", role: "Counsel in the loop · Layer 02" },
  { index: "06", role: "Tax & compliance review · Layer 07" },
  { index: "07", role: "Design & brand" },
];

function TeamInSection() {
  return (
    <Section index="00" label="The team, in section">
      <Reveal>
        <p className="body max-w-[66ch] text-ink-muted">
          We run lean on purpose. horz is built by a small team, each person deep
          in one vertical, with the back office offloaded to the product we sell.
          The team is its own thin stratum in the section. Read it as a rack, not
          a wall of faces.
        </p>
      </Reveal>

      <Reveal delay={0.08} as="ul" className="mt-12 border-t border-line">
        {TEAM.map((m) => (
          <li
            key={m.index}
            className="grid grid-cols-[2.5rem_1fr] items-baseline gap-x-5 border-b border-line py-4 md:grid-cols-[3.5rem_14rem_1fr] md:gap-x-8"
          >
            <span className="index text-ink-faint">{m.index}</span>
            <span className="ui-label text-ink">[PLACEHOLDER]</span>
            <span className="body-sm col-span-2 mt-1 text-ink-muted md:col-span-1 md:mt-0">
              {m.role}
            </span>
          </li>
        ))}
      </Reveal>

      <p className="index mt-8 text-ink-faint">
        [PLACEHOLDER] PEOPLE · 07 LAYERS · 1 CORE
      </p>
    </Section>
  );
}

/* ── 5 · Closing — the warm floor (the page's one flare CTA fill) ──────────── */
function ClosingFloor() {
  return (
    <section aria-label="Build the product" data-nav-flare="off" className="relative bg-horizon">
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
          <Eyebrow as="p" index="07" className="mb-8">
            The Floor
          </Eyebrow>
        </Reveal>
        <Reveal delay={0.05} y={24}>
          <p className="display-m max-w-[20ch] text-ink">
            Build the product. We run the company around it.
          </p>
        </Reveal>

        <Reveal delay={0.14}>
          <div className="mt-12 flex flex-wrap items-center gap-4">
            <CTA href="/founding-access" variant="primary" size="lg">
              Request founding access.
            </CTA>
            <CTA href="/contact" variant="secondary" size="lg">
              Talk to us.
            </CTA>
          </div>
        </Reveal>

        <p className="index mt-12 text-ink-faint">
          07 LAYERS · 1 CORE · 0 BACK-OFFICE HIRES
        </p>
        <p className="index mt-3 text-ink-faint">END OF SECTION · STATION 0.0000</p>
      </Container>
    </section>
  );
}
