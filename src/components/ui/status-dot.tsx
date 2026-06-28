/**
 * StatusDot — the fifth sanctioned flare use (§7.4): a 6px filled dot whose
 * colour carries the semantic. `live` is the only one that may pulse (opacity
 * 1→0.4 over 2s, never scale) and the only one that is vermilion. Everything
 * else — operational, info — is a non-flare signal colour, so the flare budget
 * is never spent on ordinary status.
 */
type Tone = "live" | "success" | "warning" | "danger" | "neutral";

const TONE_VAR: Record<Tone, string> = {
  live: "var(--flare)",
  success: "var(--success)",
  warning: "var(--warning)",
  danger: "var(--danger)",
  neutral: "var(--text-secondary)",
};

export function StatusDot({
  tone = "neutral",
  pulse = false,
  className = "",
  label,
}: {
  tone?: Tone;
  /** opacity pulse — reserved for a true real-time "live" state only */
  pulse?: boolean;
  className?: string;
  /** accessible name when the dot stands alone; omit if an adjacent label exists */
  label?: string;
}) {
  return (
    <span
      className={`status-dot ${pulse ? "status-dot-pulse" : ""} ${className}`.trim()}
      style={{ background: TONE_VAR[tone] }}
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
    />
  );
}
