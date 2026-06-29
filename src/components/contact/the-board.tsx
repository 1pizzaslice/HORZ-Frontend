"use client";

import { useRef, type ReactNode } from "react";
import { motion, useInView, useReducedMotion, type Variants } from "framer-motion";
import { Container, Datum, Eyebrow, FlareLink } from "@/components/ui";
import { Blueprint } from "@/components/function-page/blueprint";
import { ease } from "@/lib/motion";

type Bezier = [number, number, number, number];
const LINE = ease.line as unknown as Bezier;

/**
 * TheBoard (content/08) — the contact directory drawn as a switchboard. Six lines
 * descend top to bottom, each a route: a 2-digit mono index, who it's for, the
 * channel, a response reading. The two primary lines (01 Start building, 02 Talk
 * to us) render as filled strata of equal weight; 03–06 as hairline reference
 * rows. A single vertical core descends on the 5/12 line through the two filled
 * strata and seats on line 02 — the one founder-answered line — terminating in
 * the page's single vermilion flare node. The core lives in the clear gutter
 * between the line's index/name (left of the 5/12 line) and its copy (right of it),
 * so it never crosses text. On mobile the board stacks and the core is hidden.
 *
 * Role addresses ship as live mailto: links (founder call, Phase 5b); response-time
 * targets, the booking slot, the brand-kit URL, and /careers stay [PLACEHOLDER].
 */

/* ── a line on the board ───────────────────────────────────────────────────── */
function Line({
  index,
  name,
  who,
  channel,
  response,
  body,
  standalone,
  cta,
  stamp,
  artifact,
  filled = false,
  children,
}: {
  index: string;
  name: string;
  who: ReactNode;
  channel: ReactNode;
  response: ReactNode;
  body?: ReactNode;
  standalone: string;
  cta: ReactNode;
  stamp: ReactNode;
  artifact?: ReactNode;
  filled?: boolean;
  /** the absolutely-positioned core/node overlay (line 02 only) */
  children?: ReactNode;
}) {
  return (
    <div
      className={`relative grid grid-cols-1 gap-y-6 border-b border-line py-10 md:grid-cols-12 md:gap-x-8 md:py-12 ${
        filled ? "" : "opacity-95"
      }`}
    >
      {children}

      {/* LEFT of the core (cols 1–4): index + name + the board stamp */}
      <div className="md:col-span-4">
        <div className="flex items-baseline gap-3">
          <span className={`index ${filled ? "text-ink" : "text-ink-faint"}`}>{index}</span>
          <span className={`ui-label ${filled ? "text-ink" : "text-ink-muted"}`}>{name}</span>
        </div>
        <div className="mt-4">{stamp}</div>
      </div>

      {/* RIGHT of the core (cols 6–12): the copy, the CTA, the artifact */}
      <div className="md:col-span-7 md:col-start-6">
        <p className="body-sm max-w-[60ch] text-ink-muted">
          <span className="text-ink">Who it&apos;s for</span> — {who}
        </p>
        <dl className="mt-4 grid grid-cols-1 gap-x-6 gap-y-1.5 sm:grid-cols-[5.5rem_1fr]">
          <dt className="ui-label text-ink-muted">Channel</dt>
          <dd className="body-sm text-ink-muted">{channel}</dd>
          <dt className="ui-label text-ink-muted">Response</dt>
          <dd className="body-sm text-ink-muted">{response}</dd>
        </dl>
        {body ? <p className="body-sm mt-4 max-w-[60ch] text-ink-muted">{body}</p> : null}

        <p className={`mt-5 ${filled ? "serif text-[1.25rem] leading-snug text-ink" : "body text-ink"}`}>
          {standalone}
        </p>

        <div className="mt-4 flex flex-wrap items-baseline gap-x-6 gap-y-2">{cta}</div>

        {artifact ? <div className="mt-7">{artifact}</div> : null}
      </div>
    </div>
  );
}

/* ── board artifacts — drawn in the section language (line-work + mono) ─────── */
function Stamp({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-control border border-line px-2.5 py-1">
      <span className="block size-1.5 rounded-full bg-ink-faint" aria-hidden="true" />
      <span className="index text-ink-muted">{label}</span>
    </span>
  );
}

/** the seated jack — line 01, the self-serve start */
function JackStamp() {
  return (
    <div className="flex flex-col gap-3">
      <Stamp label="LIVE" />
      <span className="index text-ink-faint">WAIT 00</span>
    </div>
  );
}

/** the staffed glyph — line 02, the one human-answered line (neutral; the flare is the core) */
function StaffedStamp() {
  return (
    <div className="flex flex-col gap-3">
      <Stamp label="STAFFED" />
      <svg width={26} height={20} viewBox="0 0 26 20" fill="none" aria-hidden="true" className="text-ink-faint">
        <circle cx="13" cy="6" r="4" stroke="currentColor" strokeWidth={1} />
        <path d="M5 19c0-4.4 3.6-8 8-8s8 3.6 8 8" stroke="currentColor" strokeWidth={1} />
      </svg>
    </div>
  );
}

function LockStamp() {
  return (
    <svg width={22} height={24} viewBox="0 0 22 24" fill="none" aria-hidden="true" className="text-ink-faint">
      <rect x="3" y="10" width="16" height="12" stroke="currentColor" strokeWidth={1} />
      <path d="M6.5 10V6.5a4.5 4.5 0 0 1 9 0V10" stroke="currentColor" strokeWidth={1} />
    </svg>
  );
}

/** the document tabs the security desk returns */
function DocTabs() {
  return (
    <div className="flex flex-wrap gap-2" aria-hidden="true">
      {["SOC2", "DPA", "PEN-TEST", "SUBPROC"].map((t) => (
        <span key={t} className="index rounded-control border border-line px-2 py-1 text-ink-faint">
          {t}
        </span>
      ))}
    </div>
  );
}

/** the per-layer status strip — all neutral here; the degraded-flare state is not on this page */
function StatusStrip() {
  return (
    <div className="flex items-center gap-3">
      <span className="flex gap-[3px]" aria-hidden="true">
        {Array.from({ length: 7 }, (_, i) => (
          <span key={i} className="block size-2.5 border border-line bg-transparent" />
        ))}
      </span>
      <span className="index text-ink-faint">07 / 07 UP</span>
    </div>
  );
}

/** the press card — wordmark tile + a download tick over two ruled lines */
function PressCard() {
  return (
    <div className="flex items-center gap-4" aria-hidden="true">
      <span className="grid size-12 place-items-center rounded-control border border-line">
        <span className="serif text-base text-ink-muted">h</span>
      </span>
      <span className="flex flex-col gap-1.5">
        <span className="block h-[2px] w-24 bg-line" />
        <span className="block h-[2px] w-16 bg-line" />
        <span className="index mt-1 text-ink-faint">KIT ↓ [PLACEHOLDER]</span>
      </span>
    </div>
  );
}

/* ── the descending core — seats on line 02, the one flare node ────────────── */
function BoardCore() {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });
  const reduced = useReducedMotion() ?? false;
  const animate = inView && !reduced;

  const coreV: Variants = {
    hidden: { scaleY: 0 },
    visible: { scaleY: 1, transition: { duration: 0.9, ease: LINE } },
  };
  const nodeV: Variants = {
    hidden: { opacity: 0, scale: 0.4 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.32, ease: LINE, delay: 0.9 } },
  };
  const seat = (v: Variants) =>
    animate ? { initial: "hidden" as const, animate: "visible" as const, variants: v } : {};

  return (
    <span ref={ref} aria-hidden="true" className="pointer-events-none absolute inset-0 hidden md:block">
      {/* the core descends from above (clipped by the wrapper) to line 02's node */}
      <motion.span
        className="absolute left-[41.667%] w-[1.5px] origin-top bg-flare"
        style={{ top: "-28rem", bottom: "50%" }}
        {...seat(coreV)}
      />
      {/* the single flare node — the founder-answered line */}
      <motion.span
        className="absolute left-[41.667%] top-1/2 size-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-flare"
        {...seat(nodeV)}
      />
    </span>
  );
}

/* ── the board ─────────────────────────────────────────────────────────────── */
export function TheBoard() {
  return (
    <section aria-label="The board, in section" className="relative">
      <Datum />
      <Blueprint className="opacity-50" />
      <Container width="wide" className="section">
        <Eyebrow as="h2" className="mb-12">
          The board, in section
        </Eyebrow>

        {/* the two filled strata — the core threads them and seats on line 02 */}
        <div className="relative overflow-hidden border-t border-line">
          <Line
            index="01"
            name="START BUILDING"
            filled
            who="founders and small teams ready to begin now, no call required."
            channel="the app. Sign up and the first layer runs before we'd ever speak."
            response={
              <>
                logged on submit.{" "}
                <span className="font-mono text-ink-faint">
                  [PLACEHOLDER — target: account live in under a minute]
                </span>
              </>
            }
            standalone="Begin without us in the room."
            stamp={<JackStamp />}
            cta={
              <FlareLink href="/login" className="index uppercase">
                Start building →
              </FlareLink>
            }
          />
          <Line
            index="02"
            name="TALK TO US"
            filled
            who="teams and larger companies replacing a drawer of point tools — a helpdesk seat here, Rippling there, a bookkeeper, three analytics dashboards that disagree. Multi-layer rollouts, a migration off what you already run, multiple entities, a data-residency requirement, and the procurement and security review that come with all of it."
            channel={
              <>
                a founder, by call or thread.{" "}
                <FlareLink href="mailto:talk@horz.dev" quiet className="font-mono">
                  talk@horz.dev
                </FlareLink>
                , or book a slot{" "}
                <span className="font-mono text-ink-faint">[PLACEHOLDER]</span>. Not an
                SDR, not a drip sequence.
              </>
            }
            response={
              <>
                first reply within{" "}
                <span className="font-mono text-ink-faint">
                  [PLACEHOLDER — target: one business day]
                </span>
                . A founder answers this line, not a queue.
              </>
            }
            body="The seven layers don't change with headcount. The bigger the back office, the more of it you hand back, and the terms get drawn to fit."
            standalone="Hand back the whole back office, at any size."
            stamp={<StaffedStamp />}
            cta={
              <FlareLink href="mailto:talk@horz.dev" className="index uppercase">
                Talk to us →
              </FlareLink>
            }
          >
            <BoardCore />
          </Line>
        </div>

        {/* the four hairline reference rows */}
        <div className="border-t border-line">
          <Line
            index="03"
            name="SECURITY & TRUST"
            who="security, legal, and procurement running a vendor review before a pilot can start."
            channel={
              <>
                <FlareLink href="mailto:security@horz.dev" quiet className="font-mono">
                  security@horz.dev
                </FlareLink>
                . The desk and the controls live at{" "}
                <FlareLink href="/security" quiet className="font-mono">
                  /security
                </FlareLink>
                .
              </>
            }
            response={
              <span className="font-mono text-ink-faint">
                first reply within [PLACEHOLDER — target: two business days].
              </span>
            }
            body="Ask and we send your trust pack: the SOC 2 Type II report, the signed GDPR Article 28 DPA, the sub-processor list, and a recent pen-test report, all [verify before launch]. We complete your questionnaire. The review happens before the pilot, not after it."
            standalone="Clear the review before the pilot."
            stamp={<LockStamp />}
            artifact={<DocTabs />}
            cta={
              <FlareLink href="/security" className="index uppercase">
                Read security →
              </FlareLink>
            }
          />
          <Line
            index="04"
            name="SUPPORT"
            who="existing customers with a layer to fix or a question mid-run."
            channel={
              <>
                in-app, or{" "}
                <FlareLink href="mailto:support@horz.dev" quiet className="font-mono">
                  support@horz.dev
                </FlareLink>
                . Live state on the public board:{" "}
                <span className="font-mono text-ink">status.horz.dev</span>.
              </>
            }
            response={
              <>
                first reply within{" "}
                <span className="font-mono text-ink-faint">[PLACEHOLDER]</span>. The
                layers fail independently, so the status page reads per layer.
              </>
            }
            body="Read the board before you write. status.horz.dev tells you whether the issue is yours or ours."
            standalone="Check the board first."
            stamp={<StatusStrip />}
            cta={
              <FlareLink href="/status" className="index uppercase">
                Open status →
              </FlareLink>
            }
          />
          <Line
            index="05"
            name="PRESS"
            who="media and analysts."
            channel={
              <>
                <FlareLink href="mailto:media@horz.dev" quiet className="font-mono">
                  media@horz.dev
                </FlareLink>
                . The brand kit lives at{" "}
                <span className="font-mono text-ink-faint">[PLACEHOLDER]</span>.
              </>
            }
            response={<span className="font-mono text-ink-faint">first reply within [PLACEHOLDER].</span>}
            standalone="Pull the brand kit; ask us the rest."
            stamp={<PressCard />}
            cta={
              <>
                <FlareLink href="mailto:media@horz.dev" className="index uppercase">
                  Email press →
                </FlareLink>
                <span className="index text-ink-faint">Get kit · [PLACEHOLDER]</span>
              </>
            }
          />
          <Line
            index="06"
            name="CAREERS"
            who="people who want to build the thing that lets a company stay small."
            channel={
              <>
                <FlareLink href="mailto:careers@horz.dev" quiet className="font-mono">
                  careers@horz.dev
                </FlareLink>
                . Open roles at{" "}
                <span className="font-mono text-ink">/careers</span>{" "}
                <span className="font-mono text-ink-faint">[PLACEHOLDER]</span>.
              </>
            }
            response={
              <span className="font-mono text-ink-faint">
                we reply when a role is open. [PLACEHOLDER]
              </span>
            }
            body="We run lean on purpose: the back office is offloaded to the product we sell, so we hire only into the core. Roles post when the core needs them."
            standalone="We hire into the core only."
            stamp={<Stamp label="LEAN" />}
            cta={
              <FlareLink href="/careers" className="index uppercase">
                See roles →
              </FlareLink>
            }
          />
        </div>
      </Container>
    </section>
  );
}
