/**
 * The Pricing signature drawing (§8.13) — the inclusion matrix drawn as a section.
 * Seven layer strata down the left (01 CUSTOMER SERVICE … 07 TAX); three tier
 * columns to the right (S · M · L = SOLO / STARTUP / SCALE); each cell drawn as a
 * filled disc (run by horz) or a hairline ring (still yours). Reading the grid is
 * reading a section — which layers each tier owns, and how the price is just the
 * count of filled strata. The vertical core descends on the 5/12 line in the clear
 * gutter between the labels and the cells.
 *
 * Everything here is neutral hairline. The one vermilion flare — the descending
 * core and the single lit node on 06 COMPANY BRAIN (the substrate in every tier) —
 * is overlaid by <PricingHero> so the set-piece animates and the one-flare law is
 * held in one place. `nodeYFrac` is the 06 row's fraction of the viewBox height.
 */
const VB = { viewBox: "0 0 480 400", fill: "none" } as const;
const hair = {
  stroke: "currentColor",
  strokeWidth: 1,
  vectorEffect: "non-scaling-stroke" as const,
  fill: "none",
} as const;

export const SPINE_X = 200; // 200 / 480 = 41.667% (the 5/12 line)

/** the seven strata, top to bottom, and their short labels */
const ROWS: { label: string; cells: [number, number, number] }[] = [
  { label: "01 CUSTOMER SERVICE", cells: [1, 1, 1] },
  { label: "02 LEGAL", cells: [0, 1, 1] },
  { label: "03 HR", cells: [0, 0, 1] },
  { label: "04 MARKETING", cells: [1, 1, 1] },
  { label: "05 ANALYTICS", cells: [1, 1, 1] },
  { label: "06 COMPANY BRAIN", cells: [1, 1, 1] },
  { label: "07 TAX", cells: [0, 1, 1] },
];

const ROW_Y = (i: number) => 78 + i * 38; // 78 … 306
const COLS = [288, 344, 400]; // S · M · L cell centres (right of the core)
/** the lit node lands on 06 COMPANY BRAIN — the substrate in every tier */
export const FLARE_ROW = 5;
export const nodeYFrac = ROW_Y(FLARE_ROW) / 400;

function L({
  x,
  y,
  children,
  anchor = "start",
  size = 9.5,
  opacity = 0.5,
  tabular = false,
}: {
  x: number;
  y: number;
  children: string;
  anchor?: "start" | "middle" | "end";
  size?: number;
  opacity?: number;
  tabular?: boolean;
}) {
  return (
    <text
      x={x}
      y={y}
      fontSize={size}
      fill="currentColor"
      textAnchor={anchor}
      className="font-mono"
      style={{
        letterSpacing: "0.06em",
        fontVariantNumeric: tabular ? "tabular-nums" : undefined,
      }}
      opacity={opacity}
    >
      {children}
    </text>
  );
}

export function PricingArt() {
  return (
    <svg {...VB} className="block h-auto w-full text-ink-muted">
      {/* column heads — the three tiers, read as a section across the top */}
      <L x={24} y={44} opacity={0.6}>
        INCLUSION · 07 STRATA
      </L>
      {(["S", "M", "L"] as const).map((c, i) => (
        <L key={c} x={COLS[i]} y={44} anchor="middle" opacity={0.6}>
          {c}
        </L>
      ))}
      {/* a faint datum under the heads */}
      <line x1={24} y1={56} x2={420} y2={56} {...hair} opacity={0.3} />

      {/* the seven strata, each labelled, each pierced by the core */}
      {ROWS.map((r, i) => {
        const y = ROW_Y(i);
        return (
          <g key={r.label} opacity={0.9}>
            <L x={24} y={y + 3} opacity={0.55}>
              {r.label}
            </L>
            {/* the stratum rule, in the cell field */}
            <line x1={250} y1={y} x2={420} y2={y} {...hair} opacity={0.32} />
            {/* the node where the core crosses (neutral; the lit one is flare,
                drawn by the hero overlay) */}
            <circle cx={SPINE_X} cy={y} r={3.5} {...hair} opacity={0.75} />
            {/* the inclusion cells: filled disc = run by horz, ring = still yours */}
            {r.cells.map((on, c) =>
              on ? (
                <circle
                  key={c}
                  cx={COLS[c]}
                  cy={y}
                  r={4}
                  fill="currentColor"
                  opacity={0.85}
                />
              ) : (
                <circle
                  key={c}
                  cx={COLS[c]}
                  cy={y}
                  r={4}
                  {...hair}
                  opacity={0.45}
                />
              ),
            )}
          </g>
        );
      })}

      {/* the tier fill-count, read as the price — a calm mono tally at the foot */}
      <line x1={24} y1={334} x2={420} y2={334} {...hair} opacity={0.3} />
      <L x={24} y={356} opacity={0.5}>
        FILLED · THE COUNT IS THE PRICE
      </L>
      {(["4", "6", "7"] as const).map((n, i) => (
        <L key={i} x={COLS[i]} y={356} anchor="middle" opacity={0.6} tabular>
          {`${n}/7`}
        </L>
      ))}
    </svg>
  );
}
