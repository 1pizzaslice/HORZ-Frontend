"use client";

import { SURFACE_COLOR, THEME_STORAGE_KEY, type Theme } from "@/lib/theme";

/**
 * Flip the surface and persist it. The icon/label shown is chosen purely by CSS
 * from html[data-theme] (globals.css §9), so server and client render identical
 * markup — no hydration mismatch, no mounted-flash.
 */
function toggleTheme() {
  const root = document.documentElement;
  const current = (root.getAttribute("data-theme") as Theme) ?? "dark";
  const next: Theme = current === "dark" ? "light" : "dark";
  root.setAttribute("data-theme", next);
  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute("content", SURFACE_COLOR[next]);
  try {
    localStorage.setItem(THEME_STORAGE_KEY, next);
  } catch {
    /* storage may be unavailable; the toggle still works for the session */
  }
}

/** Icon switch (sun in night, moon in day) — nav / kit utility. */
export function ThemeToggle() {
  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle day / night"
      className="theme-toggle grid size-[34px] place-items-center rounded-control border border-line text-ink-muted transition-colors duration-150 ease-micro hover:border-ink-faint hover:text-ink"
    >
      {/* sun — shown in dark mode (tap to go light) */}
      <svg
        className="icon-sun size-4"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.6}
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5L19 19M19 5l-1.5 1.5M6.5 17.5L5 19" />
      </svg>
      {/* moon — shown in light mode (tap to go dark) */}
      <svg
        className="icon-moon size-4"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.6}
      >
        <path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5Z" />
      </svg>
    </button>
  );
}

/**
 * Labeled Night / Day toggle — the footer's switch (§8.10). Stays in the survey
 * metaphor, never "dark/light." The active surface reads in ink (CSS-driven),
 * the other in tertiary. No flare — the footer is the calm exit.
 */
export function ThemeToggleLabeled() {
  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Switch surface — Night (blue hour) or Day (day station)"
      className="ui-label inline-flex items-center gap-2"
    >
      <span className="theme-label theme-label-night" title="Blue hour">
        Night
      </span>
      <span className="text-ink-faint" aria-hidden="true">
        /
      </span>
      <span className="theme-label theme-label-day" title="Day station">
        Day
      </span>
    </button>
  );
}
