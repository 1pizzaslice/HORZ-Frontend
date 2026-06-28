"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { InlineLockup } from "@/components/brand";
import { CTA, Eyebrow, Datum } from "@/components/ui";
import { NAV_UTILITY, STRATA } from "@/lib/nav-data";
import { duration, ease } from "@/lib/motion";

/**
 * Mobile nav (§7.6) — a full-height surface-raised sheet from the right, 1px
 * border left, 0px radius (it's a panel/stratum, not a card). Nav items render
 * as strata: 56px rows, hairline dividers, a mono index welded left, an h4
 * title; a tapped row's seam thickens to flare. CTAs pin to the bottom on a
 * datum. Focus is trapped; Esc / scrim / × close; reduced motion → opacity only
 * (Framer's reducedMotion="user", set at the layout).
 */
export function MobileNav({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const panelRef = useRef<HTMLElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  // lock scroll, focus the close control, trap Tab, close on Esc
  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    const prevFocus = document.activeElement as HTMLElement | null;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key !== "Tab") return;
      const focusables = panelRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      if (!focusables || focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      prevFocus?.focus();
    };
  }, [open, onClose]);

  const secondary = [
    { label: "Pricing", href: "/pricing" },
    { label: "Manifesto", href: "/manifesto" },
  ];

  return (
    <AnimatePresence>
      {open ? (
        <div className="fixed inset-0 z-[100] md:hidden">
          {/* scrim */}
          <motion.button
            type="button"
            aria-label="Close menu"
            onClick={onClose}
            className="absolute inset-0 bg-bg/60 backdrop-blur-[2px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: duration.base, ease: ease.soft }}
          />

          {/* the sheet — a panel/stratum */}
          <motion.aside
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            className="absolute right-0 top-0 flex h-dvh w-[min(88vw,420px)] flex-col border-l border-line bg-raised"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.26, ease: ease.line }}
          >
            {/* header */}
            <div className="flex h-16 items-center justify-between border-b border-line px-6">
              <InlineLockup />
              <button
                ref={closeRef}
                type="button"
                onClick={onClose}
                aria-label="Close menu"
                className="grid size-9 place-items-center rounded-control text-ink-muted transition-colors duration-150 ease-micro hover:text-ink"
              >
                <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="square">
                  <path d="M5 5l14 14M19 5L5 19" />
                </svg>
              </button>
            </div>

            {/* the layers, drawn as strata */}
            <nav className="flex-1 overflow-y-auto px-6 pb-8">
              <Eyebrow as="p" className="mb-1 mt-7">
                Product
              </Eyebrow>
              {STRATA.map((s) => (
                <Link
                  key={s.index}
                  href={s.href}
                  onClick={onClose}
                  className="stratum-row seam seam-top group"
                >
                  <span className="index w-7 shrink-0 text-ink-faint">{s.index}</span>
                  <span className="h4 text-ink transition-colors duration-150 ease-micro group-hover:text-ink">
                    {s.name}
                  </span>
                </Link>
              ))}

              <div className="mt-8">
                {secondary.map((l) => (
                  <Link
                    key={l.label}
                    href={l.href}
                    onClick={onClose}
                    className="stratum-row seam seam-top"
                  >
                    <span className="h4 text-ink">{l.label}</span>
                  </Link>
                ))}
                <Link
                  href={NAV_UTILITY.login.href}
                  onClick={onClose}
                  className="stratum-row seam seam-top"
                >
                  <span className="ui-label text-ink-muted">{NAV_UTILITY.login.label}</span>
                </Link>
              </div>
            </nav>

            {/* CTAs pinned to the bottom on a datum */}
            <div className="px-6 pb-8 pt-2">
              <Datum />
              <div className="mt-6 flex flex-col gap-3">
                <CTA href="/login" variant="primary" size="lg" block onClick={onClose}>
                  {NAV_UTILITY.primary}
                </CTA>
                <CTA href="/contact" variant="secondary" size="lg" block onClick={onClose}>
                  {NAV_UTILITY.secondary}
                </CTA>
              </div>
            </div>
          </motion.aside>
        </div>
      ) : null}
    </AnimatePresence>
  );
}
