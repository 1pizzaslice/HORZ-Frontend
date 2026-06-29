import {
  Container,
  CTA,
  Datum,
  Eyebrow,
  FlareLink,
  Reveal,
} from "@/components/ui";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { Objections } from "@/components/function-page/objections";
import { SecurityHero } from "./security-hero";

/**
 * /security — Security & Trust (content/03). The cut that runs *under* the rack,
 * read below the datum at station −0.0500. It resolves the load-bearing objection
 * (can I trust AI to run my contracts, taxes, money, hiring, and data) in full:
 * the human on the signature line, the audit trail, scoped data, named compliance,
 * continuity without lock-in, and the lines we will never cross. The floor inverts
 * the house CTA order (Talk to us primary) by intent, for the procurement audience.
 *
 * All copy verbatim from content/03; forward-looking commitments keep their
 * [verify before launch] / [PLACEHOLDER] flags visible, never silently shipped.
 */
export function SecurityPage() {
  return (
    <>
      <SiteNav heroOverlay />
      <main>
        <SecurityHero />
        <Guarantees />
        <ObjectionsSection />
        <WhereThisResolves />
        <Floor />
      </main>
      <SiteFooter />
    </>
  );
}

/* ── content (verbatim from content/03) ───────────────────────────────────── */
const EPIGRAPH =
  "Engineers trust Stripe with the money and Clerk with the keys. The question one level up is the same one, and it has the same answer: a named human on the line, and a record behind them.";

type Control = { name: string; status: string };
const CONTROLS: Control[] = [
  { name: "SOC 2 Type II report", status: "[PLACEHOLDER — target: report available, then renewed annually]" },
  { name: "GDPR Article 28 DPA, available to sign", status: "[verify before launch]" },
  { name: "EU Standard Contractual Clauses for transfers out of the EEA", status: "stated per regulation [verify]" },
  { name: "Data residency options", status: "[verify]" },
  { name: "Encryption in transit and at rest", status: "[verify]" },
  { name: "Data retention and deletion on exit, including erasure on request", status: "[verify]" },
  { name: "Breach notification to you within [PLACEHOLDER — target]", status: "[verify]" },
  { name: "Per-layer availability target", status: "[PLACEHOLDER — target]" },
  { name: "Published sub-processor list, with notice before it changes", status: "[verify before launch]" },
  { name: "Independent penetration test, report available under NDA", status: "[PLACEHOLDER — target / cadence]" },
  { name: "SSO/SAML, role-based access control, least-privilege defaults", status: "[verify]" },
];

const NEVER = [
  "Never train a shared model on your data.",
  "Never sign or file without a named human on the line.",
  "Never dead-end your data on the way out.",
];

type Guarantee = {
  index: string;
  claim: string;
  body?: string[];
  register?: Control[];
  aside?: string;
  never?: string[];
};

const GUARANTEES: Guarantee[] = [
  {
    index: "01",
    claim: "Nothing gets signed, filed, or paid without a named, accountable human.",
    body: [
      "The model drafts; a person attests. For your own paper, that person is you. For the regulated layers it is a licensed party: a licensed attorney signs what gets signed on Legal (02), a licensed CPA or EA signs what gets filed on Tax (07), and you authorize the e-file as the officer on Form 8879-CORP. A payroll run waits on your approval before it moves money. No artifact leaves on a model's word; the signature, not the software, is what a regulator or counterparty holds.",
    ],
  },
  {
    index: "02",
    claim: "Every artifact carries the record of how it was made.",
    body: [
      "The source document. The playbook and the version it was checked against. Every change, with the reason attached. Who or what approved it, and the timestamp. One thread, bound to the artifact, not a separate log you reconcile after the fact. You can answer “why did we do that” for anything the layers shipped — months later, without asking the person who did it, because the reason traveled with the work.",
    ],
  },
  {
    index: "03",
    claim: "Your Company Brain (06) is yours. It is never pooled into a shared training set.",
    body: [
      "The six functions read and write to one graph that belongs to you. Connectors to your source systems are read-only, so Stripe, Drive, Gmail, and your helpdesk stay authoritative and nothing is moved out of the systems you already control. Every access is logged against a name. Your corpus trains no shared model, and permissions resolve at query time against the source, so the Brain never widens who can open the cap table or a comp doc. These are commitments we hold ourselves to before launch, not yet audited controls; [verify before launch].",
    ],
  },
  {
    index: "04",
    claim: "The controls have names, reports, and dates.",
    body: [
      "We name what we hold and mark what we are still building, so nothing on this page claims a control we cannot show you the report for.",
    ],
    register: CONTROLS,
  },
  {
    index: "05",
    claim: "You can walk away with everything, and one layer down is not seven down.",
    body: [
      "Export your entire company graph and every artifact at any time: the filed returns and workpapers, the signed contracts, the resolved threads, the approved metric definitions. The layers degrade independently behind a public status page, so a Marketing outage never holds up a Delaware franchise filing. The accountable humans are real parties of record, not a model that disappears with the vendor. The concentration a founder fears here is the safeguard, not the risk: more is recoverable, not less. The standing export and the public per-layer status page are commitments we hold ourselves to; [verify before launch].",
    ],
    aside: "A backend you can't walk away from isn't one we'd want to sell.",
  },
  {
    index: "06",
    claim: "Three lines we hold, stated plainly.",
    never: NEVER,
  },
];

const OBJECTIONS = [
  {
    q: "If horz goes down or dies, my whole back office fails at once.",
    a: "The whole back office on one young vendor is the right thing to worry about, so the exit is built before you need it. The standing export is a running copy, not a support ticket: it refreshes on every signed or filed artifact and lands in open formats — PDFs for the executed paper, a structured dump (JSON plus CSV) for the graph and the metric definitions, so it imports without us. The regulated work hands off to a named successor: a filed return and its workpapers move to the CPA or firm you choose, a contract and its playbook to your next attorney, because the licensed signer is already on the record. The vendor going away is not your data going away.",
  },
  {
    q: "AI hallucinates — I'm not signing what a model made up.",
    a: "You aren't. Drafting is the only thing the model does on its own; a named human attests to anything signed or filed. You see every change and the playbook rule it traces to, with the source document behind it, so review reads as an audit rather than a leap of faith. The signer owns accuracy regardless of the tool, which is why review is wired into the pipeline instead of bolted on after. Routine paper clears fast; a genuinely novel term escalates to the licensed reviewer with the issue already isolated.",
  },
  {
    q: "My contracts, cap table, and payroll data are the most sensitive thing I have.",
    a: "They stay scoped to your Company Brain (06), never pooled into a shared training set, with every access logged against a name. Connectors are read-only, so the data stays in the systems you already run and the Brain holds an index, not a second copy that drifts. Permissions mirror the source at query time: if you can't open the comp doc today, the Brain won't quote it back to you.",
  },
];

type Resolve = { title: string; desc: string; label: string; href: string };
const RESOLVES: Resolve[] = [
  {
    title: "Pricing FAQ",
    desc: "“Can I trust AI to file my taxes or sign my contracts?” and “What if horz goes down, or goes away?” resolve here in full.",
    label: "See pricing",
    href: "/pricing",
  },
  {
    title: "02 Legal",
    desc: "the licensed attorney on every signature line, with the redline traced to your playbook.",
    label: "02 Legal",
    href: "/legal",
  },
  {
    title: "07 Tax",
    desc: "the licensed CPA or EA who signs as preparer, and Form 8879-CORP you sign as officer.",
    label: "07 Tax",
    href: "/tax",
  },
  {
    title: "06 Company Brain",
    desc: "read-only connectors, per-access logging, and a corpus that trains no shared model.",
    label: "06 Company Brain",
    href: "/company-brain",
  },
  {
    title: "Contact",
    desc: "open a formal vendor-security review or send a questionnaire to the desk.",
    label: "Contact",
    href: "/contact",
  },
];

/* ── the struck negation tick (06) — a graphic mark, zero flare ────────────── */
function StruckTick() {
  return (
    <svg
      width={20}
      height={14}
      viewBox="0 0 20 14"
      fill="none"
      aria-hidden="true"
      className="mt-1 shrink-0 text-ink-faint"
    >
      <line x1="0" y1="7" x2="20" y2="7" stroke="currentColor" strokeWidth={1} />
      <line x1="3" y1="12" x2="17" y2="2" stroke="currentColor" strokeWidth={1} />
    </svg>
  );
}

/* ── the guarantees, in section — the descent (content/03) ─────────────────── */
function Guarantees() {
  return (
    <section aria-label="The guarantees, in section">
      <Datum />
      <Container width="content" className="section">
        <Reveal>
          <Eyebrow as="h2">STATION −0.0500 · THE GUARANTEES, IN SECTION</Eyebrow>
        </Reveal>
        <Reveal delay={0.06}>
          <p className="serif mt-8 max-w-[40ch] text-[1.375rem] leading-snug text-ink md:text-[1.625rem]">
            {EPIGRAPH}
          </p>
        </Reveal>

        <div className="mt-16 border-t border-line">
          {GUARANTEES.map((g) => (
            <Reveal
              key={g.index}
              className="grid grid-cols-1 gap-x-8 gap-y-5 border-b border-line py-12 md:grid-cols-[4rem_1fr] md:py-16"
            >
              <span className="index text-[1.375rem] leading-none text-ink-faint">
                {g.index}
              </span>
              <div className="min-w-0">
                <h3
                  className="serif max-w-[34ch] text-ink"
                  style={{ fontSize: "1.625rem", lineHeight: 1.25, letterSpacing: "-0.014em" }}
                >
                  {g.claim}
                </h3>

                {g.body?.map((p, i) => (
                  <p key={i} className="body mt-6 max-w-[66ch] text-ink-muted">
                    {p}
                  </p>
                ))}

                {g.register ? (
                  <ul className="mt-10 border-t border-line">
                    {g.register.map((c) => (
                      <li
                        key={c.name}
                        className="grid grid-cols-1 gap-x-6 gap-y-1 border-b border-line py-3.5 sm:grid-cols-[1fr_auto] sm:items-baseline"
                      >
                        <span className="body-sm text-ink">{c.name}</span>
                        <span className="font-mono text-[0.6875rem] uppercase tracking-[0.08em] text-ink-faint sm:text-right">
                          {c.status}
                        </span>
                      </li>
                    ))}
                  </ul>
                ) : null}

                {g.aside ? (
                  <p className="serif mt-7 max-w-[52ch] text-[1.125rem] italic leading-snug text-ink-muted">
                    {g.aside}
                  </p>
                ) : null}

                {g.never ? (
                  <ul className="mt-8 border-t border-line">
                    {g.never.map((line) => (
                      <li
                        key={line}
                        className="flex items-start gap-4 border-b border-line py-4"
                      >
                        <StruckTick />
                        <span className="body text-ink">{line}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ── Objections — the trust objection, answered in full ────────────────────── */
function ObjectionsSection() {
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

/* ── Where this resolves — the cross-links ─────────────────────────────────── */
function WhereThisResolves() {
  return (
    <section aria-label="Where this resolves">
      <Datum />
      <Container width="content" className="section">
        <Reveal>
          <Eyebrow as="h2" className="mb-6">
            Where this resolves
          </Eyebrow>
          <p className="body max-w-[66ch] text-ink-muted">
            This page closes the trust objection the other surfaces point to. Each
            link lands on the human and the record behind that layer.
          </p>
        </Reveal>

        <Reveal delay={0.08} as="ul" className="mt-10 border-t border-line">
          {RESOLVES.map((r) => (
            <li
              key={r.title}
              className="grid grid-cols-1 items-baseline gap-x-8 gap-y-2 border-b border-line py-5 md:grid-cols-[1fr_auto]"
            >
              <p className="body-sm max-w-[64ch] text-ink-muted">
                <span className="ui-label text-ink">{r.title}</span> — {r.desc}
              </p>
              <FlareLink href={r.href} className="index uppercase">
                {`${r.label} →`}
              </FlareLink>
            </li>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}

/* ── The floor — inverted CTA order (Talk to us primary) by intent ─────────── */
function Floor() {
  return (
    <section aria-label="Talk to us" data-nav-flare="off" className="relative bg-horizon">
      <Datum />
      {/* the signature core arrives at the floor and terminates in one flare tick */}
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
          <p className="display-m max-w-[12ch] text-ink">Talk to us.</p>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <CTA href="/contact" variant="primary" size="lg">
              Talk to us.
            </CTA>
            <CTA href="/login" variant="secondary" size="lg">
              Start building.
            </CTA>
          </div>
        </Reveal>

        <Reveal delay={0.18}>
          <div className="mt-14 max-w-[66ch] border-t border-line pt-8">
            <h3 className="ui-label text-ink">Security contact.</h3>
            <p className="body mt-3 text-ink-muted">
              Request the SOC 2 Type II report, the GDPR Article 28 DPA, or the
              current sub-processor list at{" "}
              <FlareLink href="mailto:security@horz.dev" quiet className="font-mono">
                security@horz.dev
              </FlareLink>
              . Report a vulnerability to the same address; we acknowledge within{" "}
              <span className="font-mono text-ink-faint">[PLACEHOLDER — target]</span>{" "}
              and keep you on the thread to resolution.
            </p>
          </div>
        </Reveal>

        <p className="index mt-12 text-ink-faint">
          END OF SECTION · STATION −0.0500
        </p>
      </Container>
    </section>
  );
}
