"use client";

import { useState } from "react";
import type { Objection } from "@/lib/functions/types";

/**
 * Objections — an accordion built from the hairline seam (the interaction atom),
 * not icon-in-circle cards (§8.13). Question `h4` Diatype, answer `body` ≤66ch.
 * The open row reveals via a grid-rows 0fr→1fr height transition on the house
 * ease; under reduced-motion the global rule collapses the transition to instant.
 * The caret is a hairline chevron that rotates — no plus-in-a-bubble.
 */
export function Objections({ items }: { items: Objection[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <ul className="border-t border-line">
      {items.map((o, i) => {
        const isOpen = open === i;
        return (
          <li key={i} className="border-b border-line">
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : i)}
              className="group flex w-full items-start justify-between gap-6 py-6 text-left"
            >
              <span className="h4 max-w-[52ch] text-ink transition-colors duration-150 ease-micro group-hover:text-ink">
                {o.q}
              </span>
              <svg
                width={16}
                height={16}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                aria-hidden="true"
                className="mt-1 shrink-0 text-ink-faint transition-transform duration-300 ease-line"
                style={{ transform: isOpen ? "rotate(180deg)" : "none" }}
              >
                <path d="M5 9l7 7 7-7" />
              </svg>
            </button>
            <div
              className="grid"
              style={{
                gridTemplateRows: isOpen ? "1fr" : "0fr",
                transition: "grid-template-rows 320ms cubic-bezier(0.16,1,0.3,1)",
              }}
            >
              <div className="overflow-hidden">
                <p className="body max-w-[66ch] pb-7 text-ink-muted">{o.a}</p>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
