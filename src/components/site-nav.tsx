"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { InlineLockup, MenuGlyph } from "@/components/brand";
import { MobileNav } from "@/components/mobile-nav";
import { CTA } from "@/components/ui";
import { NAV_UTILITY, STRATA } from "@/lib/nav-data";
import { ease } from "@/lib/motion";

/**
 * Site nav (§8.1 / §7.6) — the first datum. A 1px full-bleed datum runs under a
 * transparent bar; on scroll past the hero it seats (bg 80% + blur, hairline
 * sharpens). Left: the inline lockup (no glyph — noise here, §3). Center: the
 * three links, the active route carrying a persistent 1px flare tick. Right:
 * Log in + Talk to us (ghost) + Start building.
 *
 * `heroOverlay` is the homepage rule: the hero owns the one flare CTA above the
 * fold, so the nav's primary stays ghost until you scroll past it — two flare
 * fills in one viewport would break the ratio (§8.1).
 */
export function SiteNav({ heroOverlay = false }: { heroOverlay?: boolean }) {
  const pathname = usePathname();
  const [seated, setSeated] = useState(!heroOverlay);
  const [flareOff, setFlareOff] = useState(false);
  const [productOpen, setProductOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const productRef = useRef<HTMLDivElement>(null);

  // seat the bar after 24px of scroll (only meaningful when overlaying a hero)
  useEffect(() => {
    if (!heroOverlay) return;
    const onScroll = () => setSeated(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [heroOverlay]);

  // a section that owns its own flare CTA fill (the manifesto floor) marks itself
  // `[data-nav-flare="off"]`; while it's in view the nav primary reverts to a
  // bordered button so there is never more than one flare fill per viewport (§8.11).
  useEffect(() => {
    const targets = Array.from(document.querySelectorAll('[data-nav-flare="off"]'));
    if (!targets.length) return;
    const visible = new Set<Element>();
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) visible.add(e.target);
          else visible.delete(e.target);
        }
        setFlareOff(visible.size > 0);
      },
      { threshold: 0 },
    );
    targets.forEach((t) => io.observe(t));
    return () => io.disconnect();
  }, []);

  // close the product menu on outside click / Esc
  useEffect(() => {
    if (!productOpen) return;
    const onClick = (e: MouseEvent) => {
      if (!productRef.current?.contains(e.target as Node)) setProductOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setProductOpen(false);
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [productOpen]);

  // the primary fills with flare only once the hero's CTA has left the viewport,
  // and never while a section that owns the page's flare CTA fill is in view
  const primaryFilled = (!heroOverlay || seated) && !flareOff;
  const links = [
    { label: "Pricing", href: "/pricing" },
    { label: "Manifesto", href: "/manifesto" },
  ];

  return (
    <>
      <header
        data-seated={seated}
        className="nav-bar fixed inset-x-0 top-0 z-50"
      >
        <div className="frame relative flex h-16 items-center justify-between">
          <Link href="/" aria-label="horz — home" className="shrink-0">
            <InlineLockup />
          </Link>

          {/* center links (desktop) */}
          <nav className="absolute left-1/2 hidden -translate-x-1/2 items-stretch gap-1 md:flex">
            {/* Product → the strata menu */}
            <div ref={productRef} className="relative flex items-stretch">
              <button
                type="button"
                aria-expanded={productOpen}
                aria-haspopup="true"
                onClick={() => setProductOpen((v) => !v)}
                className={`ui-label flex h-16 items-center gap-1.5 px-3 transition-colors duration-150 ease-micro ${
                  productOpen ? "text-ink" : "text-ink-muted hover:text-ink"
                }`}
              >
                Product
                <svg
                  width={11}
                  height={11}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  className="transition-transform duration-200 ease-line"
                  style={{ transform: productOpen ? "rotate(180deg)" : "none" }}
                  aria-hidden="true"
                >
                  <path d="M5 9l7 7 7-7" />
                </svg>
              </button>

              <AnimatePresence>
                {productOpen ? (
                  <motion.div
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 4 }}
                    transition={{ duration: 0.16, ease: ease.soft }}
                    className="absolute left-1/2 top-full z-50 w-[560px] -translate-x-1/2 border border-line bg-raised shadow-[var(--shadow-elevation)]"
                  >
                    {/* the layer menu, drawn as a strata rack */}
                    {STRATA.map((s) => (
                      <Link
                        key={s.index}
                        href={s.href}
                        onClick={() => setProductOpen(false)}
                        className="seam seam-top group relative flex items-baseline gap-4 border-t border-line px-5 py-3.5 first:border-t-0 hover:bg-surface"
                      >
                        <span className="index w-6 shrink-0 pt-0.5 text-ink-faint">
                          {s.index}
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="ui-label block text-ink">{s.name}</span>
                          <span className="body-sm mt-0.5 block text-ink-muted">
                            {s.blurb}
                          </span>
                        </span>
                      </Link>
                    ))}
                    <Link
                      href="/pricing"
                      onClick={() => setProductOpen(false)}
                      className="flex items-center justify-between border-t border-line bg-surface/40 px-5 py-3 hover:bg-surface"
                    >
                      <span className="eyebrow">Pricing</span>
                      <span className="text-ink-faint" aria-hidden="true">
                        →
                      </span>
                    </Link>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>

            {links.map((l) => {
              const active = pathname === l.href;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  aria-current={active ? "page" : undefined}
                  className={`ui-label flex h-16 items-center px-3 ${
                    active
                      ? "nav-link-active"
                      : "seam text-ink-muted transition-colors duration-150 ease-micro hover:text-ink"
                  }`}
                >
                  {l.label}
                </Link>
              );
            })}
          </nav>

          {/* right cluster (desktop) */}
          <div className="hidden items-center gap-2 md:flex">
            <Link
              href={NAV_UTILITY.login.href}
              className="inline-link quiet ui-label mr-2"
            >
              {NAV_UTILITY.login.label}
            </Link>
            <CTA href="/contact" variant="ghost" size="sm">
              {NAV_UTILITY.secondary}
            </CTA>
            <CTA
              href="/login"
              variant={primaryFilled ? "primary" : "secondary"}
              size="sm"
            >
              {NAV_UTILITY.primary}
            </CTA>
          </div>

          {/* mobile trigger */}
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(true)}
            className="grid size-10 place-items-center text-ink md:hidden"
          >
            <MenuGlyph open={mobileOpen} />
          </button>
        </div>

        {/* the nav sits on a full-bleed datum, like every section; it sharpens
            from datum → border once the bar seats on scroll (§8.1) */}
        <div
          className="datum absolute inset-x-0 bottom-0"
          style={{ background: seated ? "var(--border)" : "var(--datum)" }}
          aria-hidden="true"
        />
      </header>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
