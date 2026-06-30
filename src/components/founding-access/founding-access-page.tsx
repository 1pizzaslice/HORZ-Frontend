import { Container, CTA, Datum, DuskBand, Eyebrow, FlareLink, Reveal, Section } from "@/components/ui";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";

/**
 * /founding-access — the pre-launch lead capture that replaces the retired
 * "Log in" / self-serve motion. horz isn't generally available yet; an empty
 * dashboard would read cheap, so the primary motion across the whole site now
 * lands here: a founder-to-founder request, answered by hand.
 *
 * Built in the Section language — coordinate eyebrow, serif line on the one dusk
 * band, a numbered strata of what the cohort gets, three honest steps, the mail
 * stated plainly, and the warm floor where the page core terminates in one flare
 * tick (the established floor pattern; no risky mid-page core to collide with).
 * The one request action is a mailto to contact@horz.dev — no backend, no form,
 * exactly "ping us, our team reaches out."
 */

const CONTACT_EMAIL = "contact@horz.dev";

/** the request action — a pre-addressed mail with a light prompt, no form/backend */
const REQUEST_MAILTO =
  `mailto:${CONTACT_EMAIL}?subject=` +
  encodeURIComponent("Founding access request") +
  "&body=" +
  encodeURIComponent(
    "Hi horz team,\n\nWe're building: \nWhat we'd hand off first: \nTeam size: \n\nThanks,",
  );

export function FoundingAccessPage() {
  return (
    <>
      <SiteNav heroOverlay />
      <main id="main-content" tabIndex={-1}>
        <FoundingHero />
        <WhatYouGet />
        <HowItWorks />
        <Floor />
      </main>
      <SiteFooter />
    </>
  );
}

/* ── hero — the coordinate eyebrow, the serif line on the live dusk band ─────── */
function FoundingHero() {
  return (
    <header className="relative overflow-hidden">
      <Datum />
      <Container width="content" className="pt-32 md:pt-40">
        <Reveal>
          <Eyebrow as="p">STATION 0.0001 · THE FOUNDING COHORT</Eyebrow>
        </Reveal>
        <Reveal delay={0.06} y={24}>
          <h1
            className="serif mt-10 max-w-[20ch] text-ink"
            style={{
              fontSize: "clamp(2.5rem, 5.2vw, 4rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.021em",
            }}
          >
            We open the doors by hand for the founding few.
          </h1>
        </Reveal>
        <Reveal delay={0.12} as="p" className="body mt-8 max-w-[62ch] text-ink-muted">
          horz isn&apos;t generally available yet. We&apos;re bringing on the first
          founders one conversation at a time. Request access and a founder reaches
          out — hands-on onboarding, founding pricing held for good, and a real say
          in what ships next.
        </Reveal>

        <Reveal delay={0.18}>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <CTA href={REQUEST_MAILTO} variant="primary" size="lg">
              Request founding access.
            </CTA>
            <CTA href="/contact" variant="secondary" size="lg">
              Talk to us.
            </CTA>
          </div>
        </Reveal>

        <p className="index mt-8 text-ink-faint">
          07 LAYERS · BUILT WITH THE FIRST FEW · NO WAITLIST AUTORESPONDER
        </p>
      </Container>
      {/* the one gradient, once per page — the horizon the cohort rises from */}
      <DuskBand className="mt-20 md:mt-28" />
    </header>
  );
}

/* ── what the cohort gets — a numbered strata (echoes content/04 founding terms) ─ */
type Perk = { index: string; title: string; body: string };
const PERKS: Perk[] = [
  {
    index: "01",
    title: "A founder on the line",
    body: "You're onboarded by a founder, by hand — not dropped into a signup form and left to a dashboard.",
  },
  {
    index: "02",
    title: "Founding rate, held for good",
    body: "The price we set with our first customers stays yours as we grow. You priced the thing; you keep the price.",
  },
  {
    index: "03",
    title: "A say in what ships",
    body: "The roadmap bends toward the cohort actually using it. What you need next moves up the queue.",
  },
  {
    index: "04",
    title: "First through every door",
    body: "Each of the seven layers opens to founding members before anyone else. You're early on all of them, not one.",
  },
];

function WhatYouGet() {
  return (
    <Section
      index="01"
      label="What founding access gets you"
      labelAs="h2"
      description="The terms we hold for the first cohort."
    >
      <ul className="border-t border-line">
        {PERKS.map((p, i) => (
          <Reveal key={p.index} as="li" delay={i * 0.06}>
            <div className="grid grid-cols-1 items-baseline gap-x-8 gap-y-2 border-b border-line py-6 md:grid-cols-[auto_1fr]">
              <span className="index pt-0.5 text-ink-faint">{p.index}</span>
              <div className="min-w-0">
                <h3 className="ui-label text-ink">{p.title}</h3>
                <p className="body-sm mt-2 max-w-[60ch] text-ink-muted">{p.body}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}

/* ── how it works — three honest steps, no false SLA ─────────────────────────── */
type Step = { index: string; title: string; body: string };
const STEPS: Step[] = [
  {
    index: "01",
    title: "Send a note",
    body: "Tell us what you're building and what you'd hand off first. One paragraph is plenty.",
  },
  {
    index: "02",
    title: "A founder reads it",
    body: "Not a queue and not an SDR. We reply in person — usually the same day.",
  },
  {
    index: "03",
    title: "We set you up by hand",
    body: "We bring you into the founding cohort, lock the founding rate, and stand up your first layers as they open.",
  },
];

function HowItWorks() {
  return (
    <Section index="02" label="How it works" labelAs="h2">
      <ol className="grid grid-cols-1 gap-px border border-line bg-line sm:grid-cols-3">
        {STEPS.map((s, i) => (
          <Reveal key={s.index} as="li" delay={i * 0.08}>
            <div className="flex h-full flex-col bg-bg p-6">
              <span className="index text-ink-faint">{`STEP ${s.index}`}</span>
              <h3 className="h4 mt-5 text-ink">{s.title}</h3>
              <p className="body-sm mt-3 text-ink-muted">{s.body}</p>
            </div>
          </Reveal>
        ))}
      </ol>

      <Reveal delay={0.1}>
        <div className="mt-10 flex flex-wrap items-baseline gap-x-3 gap-y-2">
          <span className="body-sm text-ink-muted">Or write us directly at</span>
          <FlareLink href={REQUEST_MAILTO} className="font-mono text-ink">
            {CONTACT_EMAIL}
          </FlareLink>
        </div>
      </Reveal>
    </Section>
  );
}

/* ── the floor — the page's one flare CTA fill; the core terminates here ──────── */
function Floor() {
  return (
    <section
      aria-label="Request founding access"
      data-nav-flare="off"
      className="relative bg-horizon"
    >
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
          <Eyebrow as="p" index="03" className="mb-8">
            The Floor
          </Eyebrow>
        </Reveal>
        <Reveal delay={0.05} y={24}>
          <p className="display-m max-w-[18ch] text-ink">
            Be one of the first founders we build with.
          </p>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <CTA href={REQUEST_MAILTO} variant="primary" size="lg">
              Request founding access.
            </CTA>
            <CTA href="/contact" variant="secondary" size="lg">
              Talk to us.
            </CTA>
          </div>
        </Reveal>

        <p className="index mt-14 text-ink-faint">
          1 COHORT · 1 FOUNDER ON THE LINE · THE CORE STAYS YOURS
        </p>
        <p className="index mt-3 text-ink-faint">END OF SECTION · STATION 0.0001</p>
      </Container>
    </section>
  );
}
