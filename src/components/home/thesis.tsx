import { Section, Reveal } from "@/components/ui";

/**
 * §8.4 — The Thesis opener. A breath of editorial serif altitude before the
 * dense rack; the contrast is the product story. Sidehead in col 1, the thesis
 * line in display-l serif, one tight support paragraph at ≤66ch. No CTA — this
 * block only sets altitude before the descent. Copy verbatim from content/01 §4
 * (locked manifesto sentence + support paragraph A).
 */
export function Thesis() {
  return (
    <Section index="00" label="The Argument">
      <Reveal as="p" y={24} className="display-l max-w-[18ch] text-ink">
        Engineers stopped writing their own auth. Founders should stop running
        their own back office.
      </Reveal>
      <Reveal delay={0.09}>
        <p className="body mt-8 max-w-[66ch] text-ink-muted">
          You offload billing to Stripe and auth to Clerk already.
          HORZ-ARCHITECTURE is the same move, one level up: support, legal, HR,
          marketing, analytics, and tax run as managed layers, read from one
          company brain, and never hit payroll. You keep the one vertical only
          you can build.
        </p>
      </Reveal>
    </Section>
  );
}
