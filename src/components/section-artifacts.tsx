"use client";

/**
 * Section-language artifacts (§2.4 / §8.5 · cols 8–12 of each stratum) — the
 * Phase-7 illustration & animation pass (content/06 §3, "THE STRATA — the rack").
 *
 * Each function draws its own work *in section* — never a screenshot, never a
 * stock icon. These are hairline glyphs in the survey vocabulary: one ink weight,
 * `currentColor` (so they inherit the row's tertiary→secondary brightening), no
 * fill except hair-thin nodes.
 *
 * "One degree of life on hover" (content/06 §3): at rest each band is a calm,
 * legible drawing; on pointer-hover the layer's *own* micro-motion plays once —
 * the queue clears to the core, the redline strikes and signs off, the org
 * accretes a hire, the launch sweeps to T-0, the sparkline lifts its anomaly, the
 * brain traces a citation, the return lands its R&D credit. Exactly one vermilion
 * accent lights per hover (`flare`), always the layer's single critical node; it
 * clears the moment the pointer leaves, so the one-flare law holds (§4) — the
 * persistent 5/12 core stays the rack's primary flare, this is the second, tiny,
 * on-the-row mark, the same core+node grammar the function heroes already ship.
 *
 * Reduced motion / keyboard focus (§8.10): `snap` collapses every transition to
 * 0 — the resolved end-state renders instantly, fully legible, no draw, no count.
 *
 * Geometry sits on a 132×44 box; `vector-effect: non-scaling-stroke` keeps every
 * hairline pin-sharp as the box scales between the editorial and control racks.
 */

import { motion, type Transition } from "framer-motion";
import { ease } from "@/lib/motion";

type Bezier = [number, number, number, number];
const LINE = ease.line as unknown as Bezier;

export type ArtifactProps = {
  /** the row is hovered/focused — play the resolved drawing */
  active: boolean;
  /** light the single vermilion accent (pointer-hover only; never under reduced) */
  flare: boolean;
  /** collapse motion to an instant snap (reduced-motion / SSR / keyboard focus) */
  snap: boolean;
};

const VB = { viewBox: "0 0 132 44", fill: "none", "aria-hidden": true } as const;
const stroke = {
  stroke: "currentColor",
  strokeWidth: 1,
  vectorEffect: "non-scaling-stroke" as const,
  strokeLinecap: "square" as const,
} as const;

/** one house-ease transition, or an instant snap under reduced-motion/focus. */
const t = (snap: boolean, delay = 0, dur = 0.55): Transition =>
  snap ? { duration: 0 } : { duration: dur, delay, ease: LINE };

/** the lone vermilion accent — a 1.8px node that fades in on hover, out on leave. */
function Flare({ cx, cy, on, snap, r = 1.9 }: { cx: number; cy: number; on: boolean; snap: boolean; r?: number }) {
  return (
    <motion.circle
      cx={cx}
      cy={cy}
      r={r}
      fill="var(--flare)"
      initial={false}
      animate={{ opacity: on ? 1 : 0, scale: on ? 1 : 0.4 }}
      style={{ transformBox: "fill-box", transformOrigin: "center" }}
      transition={t(snap, on ? 0.2 : 0, 0.3)}
    />
  );
}

/* —— 01 · CUSTOMER SERVICE — the queue clears; one row escalates to the core —— */
function QueueCollapse({ active, flare, snap }: ArtifactProps) {
  // a draining queue: bars right-aligned, shortening down the stack.
  const bars = [
    { y: 6, w: 104 },
    { y: 14, w: 80 },
    { y: 22, w: 58 },
    { y: 30, w: 40 },
  ];
  return (
    <svg {...VB}>
      {bars.map((b, i) => (
        <motion.line
          key={i}
          x1={128 - b.w}
          y1={b.y}
          x2={128}
          y2={b.y}
          {...stroke}
          initial={false}
          // on hover the resolved tickets clear: fade back, slide right out
          animate={{ opacity: active ? 0.16 : 0.9, x: active ? 10 : 0 }}
          transition={t(snap, active ? i * 0.06 : 0, 0.45)}
        />
      ))}
      {/* the one escalated ticket — slides left to the core and takes the flare */}
      <motion.g
        initial={false}
        animate={{ x: active ? -6 : 0 }}
        transition={t(snap, active ? 0.18 : 0, 0.5)}
      >
        <line x1={8} y1={38} x2={60} y2={38} {...stroke} />
        <Flare cx={8} cy={38} on={flare} snap={snap} />
      </motion.g>
    </svg>
  );
}

/* —— 02 · LEGAL — the redline strikes in; counsel signs off on the spine —— */
function Redline({ active, flare, snap }: ArtifactProps) {
  return (
    <svg {...VB}>
      {/* the mini-datum the document hangs from */}
      <line x1={0} y1={4} x2={132} y2={4} {...stroke} opacity={0.45} />
      {/* body lines (static) */}
      {[12, 18, 36].map((y, i) => (
        <line key={i} x1={8} y1={y} x2={i % 2 ? 96 : 118} y2={y} {...stroke} opacity={0.7} />
      ))}
      {/* the struck clause + its tracked replacement above */}
      <line x1={8} y1={28} x2={104} y2={28} {...stroke} opacity={0.7} />
      <motion.line
        x1={8}
        y1={28}
        x2={104}
        y2={28}
        {...stroke}
        // the strike draws left→right on hover
        initial={false}
        animate={{ pathLength: active ? 1 : 0 }}
        transition={t(snap, 0, 0.5)}
      />
      <motion.line
        x1={8}
        y1={24}
        x2={70}
        y2={24}
        {...stroke}
        initial={false}
        animate={{ opacity: active ? 0.85 : 0 }}
        transition={t(snap, active ? 0.32 : 0, 0.35)}
      />
      {/* counsel sign-off, on the spine (left / core side) */}
      <Flare cx={6} cy={38} on={flare} snap={snap} />
    </svg>
  );
}

/* —— 03 · HR — the org accretes one hire at the bottom of the section —— */
function NestedOrg({ active, flare, snap }: ArtifactProps) {
  const rows = [
    { x: 0, w: 122 },
    { x: 14, w: 92 },
    { x: 14, w: 78 },
    { x: 28, w: 56 },
  ];
  return (
    <svg {...VB}>
      {rows.map((r, i) => (
        <line key={i} x1={r.x} y1={6 + i * 8} x2={r.x + r.w} y2={6 + i * 8} {...stroke} opacity={0.85} />
      ))}
      {/* the connecting spines */}
      <line x1={14} y1={14} x2={14} y2={22} {...stroke} opacity={0.4} />
      <line x1={28} y1={30} x2={28} y2={38} {...stroke} opacity={0.4} />
      {/* the new hire — a dashed band seams in at the bottom on hover */}
      <motion.line
        x1={28}
        y1={40}
        x2={84}
        y2={40}
        {...stroke}
        strokeDasharray="3 3"
        initial={false}
        animate={{ pathLength: active ? 1 : 0 }}
        transition={t(snap, 0, 0.5)}
      />
      <Flare cx={28} cy={40} on={flare} snap={snap} />
    </svg>
  );
}

/* —— 04 · MARKETING — the launch axis sweeps; the core lands on T-0 —— */
function LaunchTimeline({ active, flare, snap }: ArtifactProps) {
  const ticks = [10, 30, 50, 70, 90, 110];
  const t0 = 50; // ship day, on the core side of the axis
  return (
    <svg {...VB}>
      <line x1={0} y1={30} x2={132} y2={30} {...stroke} opacity={0.55} />
      {ticks.map((x, i) => (
        <line key={i} x1={x} y1={x === t0 ? 12 : 24} x2={x} y2={30} {...stroke} opacity={x === t0 ? 1 : 0.7} />
      ))}
      {/* the sweep marker travels along the axis to T-0 on hover */}
      <motion.line
        x1={0}
        y1={30}
        x2={132}
        y2={30}
        {...stroke}
        initial={false}
        animate={{ pathLength: active ? t0 / 132 : 0 }}
        transition={t(snap, 0, 0.55)}
      />
      {/* the ship marker head + flare on T-0 */}
      <line x1={t0 - 5} y1={12} x2={t0 + 5} y2={12} {...stroke} />
      <Flare cx={t0} cy={30} on={flare} snap={snap} />
    </svg>
  );
}

/* —— 05 · ANALYTICS — the sparkline lifts; the anomaly takes the flare —— */
function Sparkline({ active, flare, snap }: ArtifactProps) {
  const pts = "0,32 20,26 40,30 60,18 80,22 100,12 132,6";
  const anomaly = { x: 100, y: 12 };
  return (
    <svg {...VB}>
      <line x1={0} y1={40} x2={132} y2={40} {...stroke} opacity={0.35} />
      {/* the faint baseline trend, always present */}
      <polyline points={pts} {...stroke} strokeLinejoin="round" opacity={0.4} />
      {/* on hover the metric redraws crisp, left→right */}
      <motion.polyline
        points={pts}
        {...stroke}
        strokeLinejoin="round"
        initial={false}
        animate={{ pathLength: active ? 1 : 0 }}
        transition={t(snap, 0, 0.6)}
      />
      {/* the anomaly's up-caret, fading in just before the flare lands */}
      <motion.path
        d={`M${anomaly.x - 4} ${anomaly.y - 2} l4 -5 l4 5`}
        {...stroke}
        initial={false}
        animate={{ opacity: active ? 0.85 : 0 }}
        transition={t(snap, active ? 0.4 : 0, 0.3)}
      />
      <Flare cx={anomaly.x} cy={anomaly.y} on={flare} snap={snap} />
    </svg>
  );
}

/* —— 06 · COMPANY BRAIN — an edge traces out; the source is attached —— */
function KnowledgeGraph({ active, flare, snap }: ArtifactProps) {
  const nodes = [
    { x: 18, y: 22 }, // the founder / core node — on the left, the spine side
    { x: 48, y: 8 },
    { x: 54, y: 36 },
    { x: 86, y: 18 },
    { x: 112, y: 10 },
    { x: 118, y: 34 },
  ];
  const edges: [number, number][] = [
    [0, 1],
    [0, 2],
    [1, 3],
    [2, 3],
    [3, 4],
    [3, 5],
  ];
  return (
    <svg {...VB}>
      {edges.map(([a, b], i) => (
        <line key={i} x1={nodes[a].x} y1={nodes[a].y} x2={nodes[b].x} y2={nodes[b].y} {...stroke} opacity={0.4} />
      ))}
      {nodes.map((n, i) => (
        <circle key={i} cx={n.x} cy={n.y} r={i === 0 ? 2 : 1.6} fill="currentColor" opacity={i === 0 ? 0.9 : 0.7} />
      ))}
      {/* on hover one edge traces from the founder node to a neighbour... */}
      <motion.line
        x1={nodes[0].x}
        y1={nodes[0].y}
        x2={nodes[3].x}
        y2={nodes[3].y}
        {...stroke}
        initial={false}
        animate={{ pathLength: active ? 1 : 0 }}
        transition={t(snap, 0, 0.55)}
      />
      {/* ...and a citation tick settles at its end */}
      <motion.line
        x1={nodes[3].x}
        y1={nodes[3].y}
        x2={nodes[3].x + 8}
        y2={nodes[3].y - 6}
        {...stroke}
        initial={false}
        animate={{ opacity: active ? 0.8 : 0 }}
        transition={t(snap, active ? 0.45 : 0, 0.3)}
      />
      <Flare cx={nodes[0].x} cy={nodes[0].y} on={flare} snap={snap} r={2.2} />
    </svg>
  );
}

/* —— 07 · TAX — the return lands its R&D credit, the signature line —— */
function FilingItems({ active, flare, snap }: ArtifactProps) {
  const rows = [8, 18, 28, 38];
  const rnd = 28; // the R&D credit line — the one that takes the flare
  return (
    <svg {...VB}>
      {rows.map((y, i) => (
        <g key={i}>
          {/* the index tick */}
          <line x1={0} y1={y} x2={8} y2={y} {...stroke} opacity={0.7} />
          {/* the line-item */}
          <line x1={16} y1={y} x2={i === rows.length - 1 ? 132 : 96} y2={y} {...stroke} opacity={0.8} />
        </g>
      ))}
      {/* the right-aligned figure column sets in on hover, top→bottom */}
      {rows.map((y, i) => (
        <motion.line
          key={i}
          x1={108}
          y1={y}
          x2={128}
          y2={y}
          {...stroke}
          initial={false}
          animate={{ opacity: active ? (y === rnd ? 0.95 : 0.55) : 0 }}
          transition={t(snap, active ? i * 0.07 : 0, 0.3)}
        />
      ))}
      {/* the R&D credit lands the flare on the spine side */}
      <Flare cx={4} cy={rnd} on={flare} snap={snap} />
    </svg>
  );
}

/** Registry keyed by the stratum index — the homepage rack maps over this. */
export const SECTION_ARTIFACTS: Record<string, (p: ArtifactProps) => React.ReactNode> = {
  "01": QueueCollapse,
  "02": Redline,
  "03": NestedOrg,
  "04": LaunchTimeline,
  "05": Sparkline,
  "06": KnowledgeGraph,
  "07": FilingItems,
};
