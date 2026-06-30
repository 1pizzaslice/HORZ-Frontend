import { Container, CTA, Datum, Eyebrow, FlareLink, Reveal } from "@/components/ui";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { Objections } from "@/components/function-page/objections";
import { PricingHero } from "./pricing-hero";

/**
 * /pricing — content/04. The section read as a table: priced by how much of the
 * company you hand over. Three tiers as full-width strata + the inclusion matrix
 * drawn as a section (filled vs hairline cells), the FAQ as a hairline accordion,
 * and the warm floor.
 *
 * Founder-approved Phase-5b presentation: commit to the model, defer only the
 * numbers — the price slot reads "Founding pricing — set with our first customers"
 * (never "coming soon"), and one conversion motion everywhere, Talk to us → /contact
 * (a founder, not a queue), so no lead is lost. Real dollar figures stay
 * [PLACEHOLDER] until set with the first customers. Copy verbatim from content/04.
 */
export function PricingPage() {
  return (
    <>
      <SiteNav heroOverlay />
      <main id="main-content" tabIndex={-1}>
        <PricingHero />
        <Tiers />
        <Matrix />
        <FoundingPricing />
        <AboveScale />
        <Questions />
        <Floor />
      </main>
      <SiteFooter />
    </>
  );
}

/* ── tiers (verbatim from content/04) ──────────────────────────────────────── */
type Tier = {
  index: string;
  name: string;
  who: string;
  runs: string[];
  yours: string[];
  headline: string;
  body: string;
  filled: number;
  recommended?: boolean;
};

const TIERS: Tier[] = [
  {
    index: "01",
    name: "SOLO",
    who: "the founder who just shipped and is still the entire company. Solo to three.",
    runs: ["01 CUSTOMER SERVICE", "04 MARKETING", "05 ANALYTICS", "06 COMPANY BRAIN"],
    yours: ["02 LEGAL", "03 HR", "07 TAX"],
    headline: "Your week goes back to the product.",
    body: "The support queue, the marketing site, and the metrics, all sitting on one brain that already knows your product. The 2am password-reset ticket gets answered in your voice. The blog ships on a schedule instead of dying after three posts. Every number reconciles to one definition of MRR, not a Stripe CSV that disagrees with PostHog. The functions that face outward run themselves; the only thing on your calendar is the thing only you can build.",
    filled: 4,
  },
  {
    index: "02",
    name: "STARTUP",
    who: "seed to Series A. Revenue, signed contracts, multi-state filings stacking up, and no one to hand them to.",
    runs: [
      "01 CUSTOMER SERVICE",
      "02 LEGAL",
      "04 MARKETING",
      "05 ANALYTICS",
      "06 COMPANY BRAIN",
      "07 TAX",
    ],
    yours: ["03 HR"],
    headline: "The legal and financial spine, without a lawyer or a CPA on payroll.",
    body: "Everything in SOLO, plus the paper and the filings. A vendor MSA redlined against your playbook before lunch. A GDPR Article 28 DPA issued the day a prospect asks for one. Your Delaware franchise tax filed before March 1, the R&D credit claimed on Form 6765. A licensed attorney signs what gets signed; a licensed CPA or EA signs what gets filed; you authorize the e-file as the officer.",
    filled: 6,
    recommended: true,
  },
  {
    index: "03",
    name: "SCALE",
    who: "growth-stage. A team to pay, a drawer full of point tools to retire, the whole back office to put on one backend.",
    runs: [
      "01 CUSTOMER SERVICE",
      "02 LEGAL",
      "03 HR",
      "04 MARKETING",
      "05 ANALYTICS",
      "06 COMPANY BRAIN",
      "07 TAX",
    ],
    yours: ["your core product. Nothing else."],
    headline: "Hire your tenth engineer before your first HR manager.",
    body: "The last department joins the stack. Sourcing on one disclosed rubric, offers struck against a current 409A, I-9s and state new-hire reports filed inside the window, every payroll cycle run for your sign-off. Seven vendors collapse into one dependency reading one brain: the offer letter pulls the comp band, the tax return pulls the payroll, the support reply pulls the refund policy. You add headcount to your one vertical, not to the back office.",
    filled: 7,
  },
];

const PRICE_SLOT = "Founding pricing — set with our first customers.";

/** the included-layers count, drawn as a mini section: N filled bands + the rest hairline */
function LayerMeter({ filled }: { filled: number }) {
  return (
    <span className="flex items-center gap-3">
      <span className="flex flex-col gap-[3px]" aria-hidden="true">
        {Array.from({ length: 7 }, (_, i) => (
          <span key={i} className={`h-[3px] w-14 ${i < filled ? "bg-ink" : "bg-line"}`} />
        ))}
      </span>
      <span className="index whitespace-nowrap text-ink-faint">{filled} / 7</span>
    </span>
  );
}

function Tiers() {
  return (
    <section aria-label="Tiers">
      <Datum />
      <Container width="content" className="section">
        <div className="border-t border-line">
          {TIERS.map((t) => (
            <Reveal
              key={t.index}
              className="relative border-b border-line py-12 md:py-16"
            >
              {/* the recommended tier earns the one flare tick — the default, marked */}
              {t.recommended ? (
                <span
                  className="absolute bottom-0 left-0 top-0 w-[1.5px] bg-flare"
                  aria-hidden="true"
                />
              ) : null}

              <div className={t.recommended ? "pl-6" : ""}>
                {/* identity left · meter + price right */}
                <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                  <div>
                    <div className="flex items-baseline gap-4">
                      <span className="index text-ink-faint">{t.index}</span>
                      <span className="ui-label text-ink">{t.name}</span>
                      {t.recommended ? (
                        <span className="index text-ink-faint">— default</span>
                      ) : null}
                    </div>
                    <p className="body-sm mt-3 max-w-[52ch] text-ink-muted">
                      <span className="text-ink">Who it&apos;s for</span> — {t.who}
                    </p>
                  </div>

                  <div className="flex flex-col gap-3 md:items-end">
                    <LayerMeter filled={t.filled} />
                    <p className="caption text-ink-faint md:text-right">{PRICE_SLOT}</p>
                    <FlareLink href="/contact" className="index uppercase">
                      Talk to us →
                    </FlareLink>
                  </div>
                </div>

                {/* the tier statement + the prose */}
                <p
                  className="serif mt-9 max-w-[30ch] text-ink"
                  style={{ fontSize: "1.5rem", lineHeight: 1.2, letterSpacing: "-0.012em" }}
                >
                  {t.headline}
                </p>
                <p className="body mt-5 max-w-[66ch] text-ink-muted">{t.body}</p>

                {/* runs / still-yours, in the layer codes */}
                <dl className="mt-7 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-[7rem_1fr]">
                  <dt className="ui-label text-ink-muted">Runs · {t.filled}/7</dt>
                  <dd className="font-mono text-[0.8125rem] leading-relaxed text-ink">
                    {t.runs.join("  ·  ")}
                  </dd>
                  <dt className="ui-label text-ink-muted">Still yours</dt>
                  <dd className="font-mono text-[0.8125rem] leading-relaxed text-ink-faint">
                    {t.yours.join("  ·  ")}
                  </dd>
                </dl>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ── the inclusion matrix, drawn as a section ──────────────────────────────── */
const LAYER_HEADS = ["01", "02", "03", "04", "05", "06", "07"];
const MATRIX: { tier: string; cells: number[] }[] = [
  { tier: "SOLO", cells: [1, 0, 0, 1, 1, 1, 0] },
  { tier: "STARTUP", cells: [1, 1, 0, 1, 1, 1, 1] },
  { tier: "SCALE", cells: [1, 1, 1, 1, 1, 1, 1] },
];

/** a single inclusion cell: filled disc (run by horz) or hairline ring (still yours) */
function Cell({ on }: { on: boolean }) {
  return (
    <span className="flex justify-center" aria-hidden="true">
      <span
        className={`block size-[11px] rounded-full ${
          on ? "bg-ink" : "border border-line bg-transparent"
        }`}
      />
    </span>
  );
}

function Matrix() {
  return (
    <section aria-label="The inclusion matrix">
      <Datum />
      <Container width="content" className="section">
        <Reveal>
          <Eyebrow as="h2" className="mb-4">
            The inclusion matrix
          </Eyebrow>
          <p className="body max-w-[60ch] text-ink-muted">
            Reading the grid is reading a section: which of the seven layers each
            tier runs. The numbers across the top are the layers, 01 through 07.
          </p>
        </Reveal>

        <Reveal delay={0.08} className="mt-10 overflow-x-auto">
          <div className="min-w-[34rem] border-t border-line">
            {/* heads */}
            <div className="grid grid-cols-[6rem_repeat(7,1fr)] items-center border-b border-line py-3">
              <span className="index text-ink-faint">TIER</span>
              {LAYER_HEADS.map((h) => (
                <span key={h} className="index text-center text-ink-faint">
                  {h}
                </span>
              ))}
            </div>
            {/* rows */}
            {MATRIX.map((row) => (
              <div
                key={row.tier}
                className="grid grid-cols-[6rem_repeat(7,1fr)] items-center border-b border-line py-4"
              >
                <span className="ui-label text-ink">{row.tier}</span>
                {row.cells.map((c, i) => (
                  <Cell key={i} on={c === 1} />
                ))}
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <p className="caption mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-ink-faint">
            <span className="flex items-center gap-2">
              <span className="block size-[11px] rounded-full bg-ink" aria-hidden="true" />
              filled stratum: run by horz.
            </span>
            <span className="flex items-center gap-2">
              <span
                className="block size-[11px] rounded-full border border-line"
                aria-hidden="true"
              />
              hairline stratum: still yours.
            </span>
          </p>
          <p className="body mt-8 max-w-[66ch] text-ink-muted">
            <span className="font-mono text-ink">06 COMPANY BRAIN</span> is in every
            tier. It is the substrate the other six layers read from and write to;
            there is no horz without it. The price moves with the count of filled
            strata above it.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}

/* ── founding pricing — why the numbers wait (content/04) ──────────────────── */
function FoundingPricing() {
  return (
    <section aria-label="Founding pricing">
      <Datum />
      <Container width="content" className="section">
        <Reveal>
          <Eyebrow as="h2" className="mb-6">
            Founding pricing
          </Eyebrow>
        </Reveal>
        <Reveal delay={0.06} as="p" className="body max-w-[66ch] text-ink-muted">
          The model is set: you pay for the layers you turn on, with Company Brain
          underneath all three tiers. The numbers are not set yet, and we would
          rather draw them with our first customers than guess at them without you.
        </Reveal>
        <Reveal delay={0.1} as="p" className="body mt-6 max-w-[66ch] text-ink-muted">
          Founding customers get a founder on the line, hands-on onboarding, a say
          in what ships next, and their founding rate held for good. Tell us which
          layers you&apos;d hand over, and we draw the terms against your real
          numbers.
        </Reveal>
        <Reveal delay={0.14}>
          <div className="mt-8">
            <FlareLink href="/contact" className="ui-label">
              Talk to us →
            </FlareLink>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

/* ── above SCALE — the multi-entity line (content/04) ──────────────────────── */
function AboveScale() {
  return (
    <section aria-label="Above SCALE">
      <Datum />
      <Container width="content" className="section">
        <Reveal>
          <Eyebrow as="h2" className="mb-6">
            Above SCALE
          </Eyebrow>
        </Reveal>
        <Reveal delay={0.06} as="p" className="body max-w-[66ch] text-ink-muted">
          Multiple entities, a data-residency requirement, or volume past what a
          tier should meter. The seven layers don&apos;t change; the terms get
          drawn to fit. A founder answers, not a queue.
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-8">
            <FlareLink href="/contact" className="ui-label">
              Talk to us →
            </FlareLink>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

/* ── questions — the pricing FAQ (verbatim, content/04) ────────────────────── */
// exported so the route can emit it as FAQPage JSON-LD (same Q&A the visitor reads)
export const QUESTIONS = [
  {
    q: "How do you price this — per seat, or per resolution?",
    a: "By the function, flat. You pay for the layers a tier runs, not per seat and not per resolved ticket. A support tool that bills per resolved ticket charges you more the more customers you win; a layer you depend on shouldn't. One number, one bill — the whole back office covered.",
  },
  {
    q: "Can I start small?",
    a: "Yes. You already run Stripe, maybe Pilot, maybe Rippling. SOLO is the floor: four functions for the founder who's still the whole company, starting with the ones bleeding the most time, usually the support queue and the marketing site. horz is the backend beneath your existing tools, and it lights up layer by layer as you move up tiers. This is not a rip-and-replace.",
  },
  {
    q: "I already run Stripe, Rippling, and Pilot. Why switch?",
    a: "Those each own one function and can't read each other. horz's layers share one brain, so the contract redline knows your pricing, the support reply knows your refund policy, the tax return reads the closed books. The integration is the product. You're not buying seven better tools. You're buying the one thing seven tools can't be: connected.",
  },
  {
    q: "What happens when I outgrow a tier?",
    a: "You move up, which is just lighting a hairline stratum. Nothing re-onboards: the brain, the history, and the connected sources carry over, because they were the foundation the whole time. Outgrowing SOLO means you started taking revenue and signing contracts, so Legal and Tax switch on; outgrowing STARTUP means you started hiring, so HR does. The company changes, the foundation doesn't.",
  },
  {
    q: "Who owns my data? Do you train on it?",
    a: "You own it. Connectors are read-only by default, your corpus never trains a shared model, and zero-data-retention terms hold with the underlying model providers. Every layer runs under SOC 2 Type II with a GDPR DPA. Company Brain mirrors your existing permissions at query time: if you can't open a document in Drive, the brain won't quote it to you.",
  },
  {
    q: "What if horz goes down, or goes away?",
    a: "The whole back office on one young vendor is the right thing to worry about. Three things answer it. The artifacts are already yours: a standing export of the company graph, plus every filed return, signed contract, and resolved thread the layers produced (see cancellation, below). The accountability is human: a licensed CPA, EA, or attorney signs what gets filed or signed, as a real party of record, not a model. And the layers fail independently behind a public status page, so a Marketing outage doesn't hold up a Delaware franchise filing. Connectors stay read-only, so Stripe, Drive, and your helpdesk keep running with or without us.",
  },
  {
    q: "Can I cancel? What do I keep?",
    a: "Cancel anytime, no exit interview. You keep the artifacts the layers produced: the filed returns and workpapers, the signed contracts, the resolved threads, the approved metric definitions, and an export of the company graph. They were yours when they were drafted, and cancellation doesn't claw them back. A backend you can't walk away from isn't one we'd want to sell.",
  },
  {
    q: "Isn't this just a bundle of seven worse point tools?",
    a: "No. A bundle is seven products behind one invoice. horz is seven functions behind one brain. A support tool can't read a legal tool; a bookkeeper can't read your inbox. Our layers write to and read from the same graph, so each one is informed by the other six. The bundle is the failure mode we are built against.",
  },
  {
    q: "Can I trust AI to file my taxes or sign my contracts?",
    a: "horz drafts and runs; you stay on the signature line. Nothing gets signed or filed without a licensed human there: a CPA or EA signs the return, an attorney signs the contract, and you authorize the e-file as the officer. Each layer produces a named, reviewable artifact with the source behind every line. We under-claim on purpose.",
  },
];

function Questions() {
  return (
    <section aria-label="Questions">
      <Datum />
      <Container width="content" className="section">
        <Reveal>
          <Eyebrow as="h2" className="mb-8">
            Questions
          </Eyebrow>
        </Reveal>
        <Reveal delay={0.06}>
          <Objections items={QUESTIONS} />
        </Reveal>
      </Container>
    </section>
  );
}

/* ── the floor — one conversion motion, Talk to us (the page's one flare fill) ─ */
function Floor() {
  return (
    <section aria-label="Talk to us" data-nav-flare="off" className="relative bg-horizon">
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
          <Eyebrow as="p" className="mb-8">
            The Floor
          </Eyebrow>
        </Reveal>
        <Reveal delay={0.05} y={24}>
          <p className="display-m max-w-[16ch] text-ink">
            Tell us what you&apos;d hand over.
          </p>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <CTA href="/contact" variant="primary" size="lg">
              Talk to us.
            </CTA>
            <CTA href="/founding-access" variant="secondary" size="lg">
              Request founding access.
            </CTA>
          </div>
        </Reveal>

        <p className="index mt-14 text-ink-faint">
          07 LAYERS · 06 BRAIN ALWAYS ON · THE COUNT IS THE PRICE
        </p>
        <p className="index mt-3 text-ink-faint">
          END OF SECTION · STATION −0.0750
        </p>
      </Container>
    </section>
  );
}
