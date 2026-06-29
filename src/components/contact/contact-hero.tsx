import { Container, Datum, DuskBand, Eyebrow, Reveal } from "@/components/ui";

/**
 * ContactHero (content/08) — the switchboard's opening. The coordinate eyebrow at
 * STATION 0.0000, the serif line seated on the live dusk band (the page's one
 * gradient), and the subhead naming the six channels on the board. The board
 * itself — the six lines, the descending core, the one flare node — is the next
 * section (<TheBoard>); the hero is the words it rises from.
 */
export function ContactHero() {
  return (
    <header className="relative overflow-hidden">
      <Datum />
      <Container width="content" className="pt-32 md:pt-40">
        <Reveal>
          <Eyebrow as="p">STATION 0.0000 · THE BOARD</Eyebrow>
        </Reveal>
        <Reveal delay={0.06} y={24}>
          <h1
            className="serif mt-10 max-w-[18ch] text-ink"
            style={{
              fontSize: "clamp(2.5rem, 5.2vw, 4rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.021em",
            }}
          >
            Tell us what you&apos;re building. We&apos;ll tell you what you can put
            down.
          </h1>
        </Reveal>
        <Reveal delay={0.12} as="p" className="body mt-8 max-w-[64ch] text-ink-muted">
          Six channels on one board: a self-serve start, a founder on the line for
          migrations and larger rollouts, a security desk that returns the trust
          pack, a support line tied to the public status page, press, and careers.
          Pick the line. We log the call.
        </Reveal>
      </Container>
      {/* the one gradient, once per page — the horizon the board rises from */}
      <DuskBand className="mt-20 md:mt-28" />
    </header>
  );
}
