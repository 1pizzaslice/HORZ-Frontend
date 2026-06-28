/**
 * Function hero drawings (§8.12 / content/06 brief) — the per-layer set-piece, as
 * a Phase-4 placeholder in the section language (Phase 7 enriches + animates these).
 *
 * Each is the function's signature artifact drawn *in section*: hairline line-work,
 * mono labels, oversized numerals, no screenshots. All neutral (no flare): every
 * drawing is composed around the 5/12 spine (viewBox x = 200 of 480) so the one
 * flare CORE — overlaid by <FunctionHero> and descending last — lands exactly on
 * the layer's single human / critical node (`nodeY`). One flare element, on the
 * allow-list, welded to the thesis: the founder's depth piercing the breadth.
 */
import type { ComponentType } from "react";

const VB = { viewBox: "0 0 480 360", fill: "none" } as const;
const hair = {
  stroke: "currentColor",
  strokeWidth: 1,
  vectorEffect: "non-scaling-stroke" as const,
  fill: "none",
} as const;

/** a faint mono label inside a drawing */
function L({
  x,
  y,
  children,
  anchor = "start",
  size = 11,
  opacity = 0.5,
}: {
  x: number;
  y: number;
  children: string;
  anchor?: "start" | "middle" | "end";
  size?: number;
  opacity?: number;
}) {
  return (
    <text
      x={x}
      y={y}
      fontSize={size}
      fill="currentColor"
      textAnchor={anchor}
      className="font-mono"
      style={{ letterSpacing: "0.06em" }}
      opacity={opacity}
    >
      {children}
    </text>
  );
}

/** the small neutral ring the flare core lands on */
function Node({ x, y }: { x: number; y: number }) {
  return <circle cx={x} cy={y} r={4} {...hair} />;
}

/* —— 01 · CUSTOMER SERVICE — the support queue draining, one row escalated —— */
function QueueArt() {
  const rows = [
    { y: 96, tag: "RESET" },
    { y: 132, tag: "REFUND" },
    { y: 168, tag: "BUG" },
    { y: 204, tag: "BILLING" },
    { y: 240, tag: "ESCALATED" },
    { y: 276, tag: "RESET" },
  ];
  return (
    <svg {...VB} className="w-full text-ink-muted">
      <L x={40} y={48} opacity={0.6}>QUEUE_DEPTH</L>
      <text x={448} y={56} fontSize={30} fill="currentColor" textAnchor="end" className="font-mono" style={{ fontVariantNumeric: "tabular-nums" }} opacity={0.85}>248</text>
      <line x1={40} y1={70} x2={448} y2={70} {...hair} opacity={0.4} />
      {rows.map((r, i) => (
        <g key={i} opacity={i === 4 ? 1 : 0.85}>
          <L x={40} y={r.y + 4} opacity={0.6}>{String(i + 1).padStart(2, "0")}</L>
          <line x1={72} y1={r.y} x2={300} y2={r.y} {...hair} />
          <L x={316} y={r.y + 4} opacity={i === 4 ? 0.9 : 0.45}>{r.tag}</L>
        </g>
      ))}
      <Node x={200} y={240} />
      <line x1={200} y1={244} x2={200} y2={300} {...hair} opacity={0.5} />
      <line x1={200} y1={300} x2={236} y2={300} {...hair} opacity={0.5} />
      <L x={244} y={304} opacity={0.6}>→ YOU</L>
    </svg>
  );
}

/* —— 02 · LEGAL — a contract redlined, the counsel sign-off on the spine —— */
function RedlineArt() {
  const bodyLines = [96, 114, 132, 150, 168, 186, 204, 222];
  return (
    <svg {...VB} className="w-full text-ink-muted">
      <L x={40} y={52} opacity={0.6}>MUTUAL NDA</L>
      <line x1={40} y1={68} x2={300} y2={68} {...hair} strokeWidth={1.5} />
      {bodyLines.map((y, i) => (
        <line key={i} x1={56} y1={y} x2={i % 2 ? 296 : 356} y2={y} {...hair} opacity={0.8} />
      ))}
      {/* redline strike + tracked replacement (neutral; Phase 7 tints it) */}
      <line x1={56} y1={150} x2={280} y2={150} {...hair} />
      <line x1={56} y1={150} x2={280} y2={150} {...hair} transform="translate(0 -3)" opacity={0.4} />
      <line x1={56} y1={140} x2={210} y2={140} {...hair} opacity={0.6} />
      <line x1={56} y1={204} x2={250} y2={204} {...hair} />
      <line x1={56} y1={204} x2={250} y2={204} {...hair} transform="translate(0 -3)" opacity={0.4} />
      <L x={372} y={154} opacity={0.55}>CL. 7.2</L>
      <L x={372} y={208} opacity={0.55}>GOV. LAW: DE</L>
      {/* counsel sign-off, on the spine */}
      <Node x={200} y={290} />
      <line x1={120} y1={290} x2={196} y2={290} {...hair} opacity={0.4} />
      <L x={120} y={312} opacity={0.6}>COUNSEL SIGN-OFF</L>
    </svg>
  );
}

/* —— 03 · HR — the org as nested strata, the founder's seat on the spine —— */
function OrgArt() {
  const depts = [
    { y: 118, label: "ENG", comp: "L4 · ×3 · 180–210k", role: { y: 142, comp: "L3 · ×2 · 150–170k" } },
    { y: 190, label: "GTM", comp: "×2 · 120–150k", role: { y: 214, comp: "×1 · 90–110k" } },
    { y: 262, label: "OPS", comp: "×1 · 110–130k", role: null as null | { y: number; comp: string } },
  ];
  return (
    <svg {...VB} className="w-full text-ink-muted">
      <Node x={200} y={72} />
      <L x={212} y={62} opacity={0.7}>FOUNDER</L>
      <line x1={200} y1={76} x2={200} y2={96} {...hair} opacity={0.4} />
      {depts.map((d, i) => (
        <g key={i}>
          <line x1={56} y1={d.y} x2={420} y2={d.y} {...hair} />
          <L x={40} y={d.y + 4} opacity={0.6}>{d.label}</L>
          <L x={456} y={d.y + 4} anchor="end" opacity={0.5}>{d.comp}</L>
          {d.role ? (
            <>
              <line x1={84} y1={d.role.y} x2={392} y2={d.role.y} {...hair} opacity={0.7} />
              <line x1={76} y1={d.y + 4} x2={76} y2={d.role.y} {...hair} opacity={0.4} />
              <L x={456} y={d.role.y + 4} anchor="end" opacity={0.45}>{d.role.comp}</L>
            </>
          ) : null}
        </g>
      ))}
      <line x1={84} y1={296} x2={300} y2={296} {...hair} opacity={0.5} strokeDasharray="2 3" />
      <L x={84} y={318} opacity={0.55}>+ NEW HIRE</L>
    </svg>
  );
}

/* —— 04 · MARKETING — the launch axis, T-0 on the spine —— */
function LaunchArt() {
  const labels = ["T-6W", "T-4W", "T-2W", "T-1W", "T-0", "+3D", "+7D"];
  const xs = labels.map((_, i) => 200 + (i - 4) * 48);
  return (
    <svg {...VB} className="w-full text-ink-muted">
      <L x={40} y={48} opacity={0.6}>LAUNCH SEQUENCE · 6 WEEKS</L>
      <line x1={8} y1={208} x2={472} y2={208} {...hair} />
      {xs.map((x, i) => {
        const isT0 = i === 4;
        return (
          <g key={i}>
            <line x1={x} y1={208} x2={x} y2={isT0 ? 176 : 192} {...hair} opacity={isT0 ? 1 : 0.8} />
            <L x={x} y={228} anchor="middle" opacity={isT0 ? 0.85 : 0.5}>{labels[i]}</L>
          </g>
        );
      })}
      {/* pre-launch artifact glyphs */}
      <rect x={xs[0] - 8} y={140} width={16} height={22} {...hair} opacity={0.7} />
      {[0, 1, 2].map((k) => (
        <line key={k} x1={xs[1] - 9} y1={146 + k * 6} x2={xs[1] + 9} y2={146 + k * 6} {...hair} opacity={0.7} />
      ))}
      <path d={`M${xs[2] - 9} 146 h18 v16 h-18 z M${xs[2] - 9} 146 l9 8 l9 -8`} {...hair} opacity={0.7} />
      <path d={`M${xs[3]} 142 l8 12 h-16 z`} {...hair} opacity={0.7} />
      <Node x={200} y={208} />
      <L x={200} y={262} anchor="middle" opacity={0.7}>SHIP</L>
    </svg>
  );
}

/* —— 05 · ANALYTICS — the metric rack, the flagged metric on the spine —— */
function SparklineArt() {
  const rows = [
    { y: 80, label: "MRR", fig: "$48.2K", pts: "0,8 26,4 52,10 78,2 104,6 130,0" },
    { y: 120, label: "NRR", fig: "112%", pts: "0,6 26,5 52,3 78,4 104,2 130,1" },
    { y: 160, label: "CAC", fig: "$310", pts: "0,4 26,6 52,5 78,8 104,6 130,7" },
    { y: 200, label: "CHURN", fig: "2.4%", pts: "0,4 26,5 52,3 78,6 104,2 130,9" },
    { y: 240, label: "RUNWAY", fig: "14 mo", pts: "0,9 26,8 52,7 78,6 104,5 130,4" },
    { y: 280, label: "DAU", fig: "8.1K", pts: "0,7 26,5 52,6 78,3 104,4 130,1" },
  ];
  return (
    <svg {...VB} className="w-full text-ink-muted">
      <L x={40} y={48} opacity={0.6}>SEMANTIC LAYER · ONE DEFINITION</L>
      {rows.map((r, i) => (
        <g key={i} opacity={i === 3 ? 1 : 0.85}>
          <L x={40} y={r.y + 4} opacity={0.65}>{r.label}</L>
          <text x={188} y={r.y + 4} fontSize={12} fill="currentColor" textAnchor="end" className="font-mono" style={{ fontVariantNumeric: "tabular-nums" }} opacity={0.75}>{r.fig}</text>
          <g transform={`translate(232 ${r.y - 6})`}>
            <polyline points={r.pts} {...hair} opacity={i === 3 ? 0.9 : 0.55} strokeLinejoin="round" />
          </g>
        </g>
      ))}
      <Node x={200} y={200} />
      <L x={210} y={190} opacity={0.85}>▲ +18%</L>
    </svg>
  );
}

/* —— 06 · COMPANY BRAIN — the knowledge graph, the founder node on the spine —— */
function GraphArt() {
  const nodes: [number, number][] = [
    [200, 184], // founder / core — on the spine
    [96, 96],
    [128, 248],
    [300, 84],
    [372, 196],
    [288, 300],
    [120, 168],
    [392, 296],
    [332, 150],
  ];
  const edges: [number, number][] = [
    [0, 1], [0, 2], [0, 3], [0, 4], [0, 6], [3, 8], [4, 7], [2, 5], [4, 5], [1, 6],
  ];
  return (
    <svg {...VB} className="w-full text-ink-muted">
      <L x={448} y={48} anchor="end" opacity={0.55}>[PLACEHOLDER] sources</L>
      {edges.map(([a, b], i) => (
        <line key={i} x1={nodes[a][0]} y1={nodes[a][1]} x2={nodes[b][0]} y2={nodes[b][1]} {...hair} opacity={0.45} />
      ))}
      {nodes.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={i === 0 ? 4 : 3} fill="currentColor" opacity={i === 0 ? 1 : 0.8} />
      ))}
      {/* a citation tick on one edge end */}
      <line x1={372} y1={196} x2={384} y2={188} {...hair} opacity={0.6} />
      <L x={96} y={82} anchor="middle" opacity={0.5}>PERSON</L>
      <L x={300} y={70} anchor="middle" opacity={0.5}>CUSTOMER</L>
      <L x={400} y={208} opacity={0.5}>DEAL</L>
      <L x={128} y={266} anchor="middle" opacity={0.5}>DOC</L>
      <L x={288} y={318} anchor="middle" opacity={0.5}>DECISION</L>
      <L x={210} y={180} opacity={0.75}>FOUNDER / CORE</L>
    </svg>
  );
}

/* —— 07 · TAX — the return as line-items, the R&D credit on the spine —— */
function FilingArt() {
  const rows = [
    { label: "FORM 1120", fig: "—", status: "FILED" },
    { label: "DE FRANCHISE", fig: "$400", status: "FILED" },
    { label: "STATE RETURNS", fig: "×4", status: "FILED" },
    { label: "FORM 6765", fig: "-$500,000", status: "FILED" },
    { label: "1099-NEC", fig: "×7", status: "FILED" },
    { label: "FORM 5472", fig: "—", status: "FILED" },
    { label: "ESTIMATES", fig: "Q1–Q4", status: "FILED" },
  ];
  return (
    <svg {...VB} className="w-full text-ink-muted">
      <L x={40} y={48} opacity={0.6}>RETURN · DRAFTED FROM CLOSED BOOKS</L>
      {rows.map((r, i) => {
        const y = 88 + i * 30;
        const isRnd = i === 3;
        return (
          <g key={i} opacity={isRnd ? 1 : 0.85}>
            <L x={40} y={y + 4} opacity={0.6}>{String(i + 1).padStart(2, "0")}</L>
            <L x={72} y={y + 4} opacity={0.7}>{r.label}</L>
            <text x={372} y={y + 4} fontSize={12} fill="currentColor" textAnchor="end" className="font-mono" style={{ fontVariantNumeric: "tabular-nums" }} opacity={isRnd ? 0.9 : 0.65}>{r.fig}</text>
            <L x={392} y={y + 4} opacity={0.45}>{r.status}</L>
            <line x1={40} y1={y + 14} x2={456} y2={y + 14} {...hair} opacity={0.3} />
          </g>
        );
      })}
      <Node x={200} y={178} />
      <line x1={40} y1={316} x2={456} y2={316} {...hair} opacity={0.5} />
      <L x={40} y={336} opacity={0.6}>DUE 03.01 // FILED</L>
    </svg>
  );
}

export type HeroArt = { Art: ComponentType; nodeY: number };

/** keyed by stratum index; `nodeY` = the fraction of height the flare core lands on. */
export const FUNCTION_HERO_ART: Record<string, HeroArt> = {
  "01": { Art: QueueArt, nodeY: 240 / 360 },
  "02": { Art: RedlineArt, nodeY: 290 / 360 },
  "03": { Art: OrgArt, nodeY: 72 / 360 },
  "04": { Art: LaunchArt, nodeY: 208 / 360 },
  "05": { Art: SparklineArt, nodeY: 200 / 360 },
  "06": { Art: GraphArt, nodeY: 184 / 360 },
  "07": { Art: FilingArt, nodeY: 178 / 360 },
};
