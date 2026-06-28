import type { AnchorHTMLAttributes, ReactNode } from "react";
import Link from "next/link";

/**
 * FlareLink — the inline text link (§7.2), the second sanctioned flare use and
 * the single most-repeated motion on the site: a 1px underline wipes in
 * left→right on hover (the seam atom). Colour is `flare-link`, the APCA-safe
 * inline tone in both themes. `quiet` drops the flare for footer/meta links
 * (secondary → primary on hover). External links get a trailing ↗ in tertiary.
 */
export function FlareLink({
  href,
  quiet = false,
  external = false,
  className = "",
  children,
  ...rest
}: {
  href: string;
  quiet?: boolean;
  external?: boolean;
  className?: string;
  children: ReactNode;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "className">) {
  const cls = `inline-link ${quiet ? "quiet" : ""} ${className}`.trim();
  const content = (
    <>
      {children}
      {external ? (
        <span className="ext" aria-hidden="true">
          {" ↗"}
        </span>
      ) : null}
    </>
  );

  if (external) {
    return (
      <a className={cls} href={href} target="_blank" rel="noreferrer" {...rest}>
        {content}
      </a>
    );
  }
  return (
    <Link className={cls} href={href} {...rest}>
      {content}
    </Link>
  );
}
