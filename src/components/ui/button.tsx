import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";
import Link from "next/link";
import { GlyphSpinner } from "./glyph-spinner";

/**
 * CTA — the button family (§7.1). Radius 2px, ui-label type, the seam-in atom.
 *
 *  • primary     — the single flare fill. One per viewport, full stop.
 *  • secondary   — hairline box; the one flare it shows is the bottom seam on hover.
 *  • ghost       — the quietest tier (nav/toolbar); no seam.
 *  • destructive — danger, never flare; its focus ring is danger too (§7.1.4).
 *
 * Renders an <a>/<Link> when `href` is set, else a <button>. Loading freezes the
 * label (width holds), swaps the leading icon for the glyph spinner, and seams a
 * 1px bar along the bottom edge. No lift, no shadow, no scale — ever.
 */
type Variant = "primary" | "secondary" | "ghost" | "destructive";
type Size = "sm" | "md" | "lg";

const SIZE_CLASS: Record<Size, string> = { sm: "btn-sm", md: "", lg: "btn-lg" };

type CommonProps = {
  variant?: Variant;
  size?: Size;
  icon?: ReactNode;
  trailingIcon?: ReactNode;
  loading?: boolean;
  block?: boolean;
  className?: string;
  children: ReactNode;
};

type ButtonProps = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof CommonProps | "href"> & {
    href?: undefined;
  };

type LinkProps = CommonProps & { href: string; external?: boolean } & Omit<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    keyof CommonProps | "href"
  >;

function classes(variant: Variant, size: Size, block: boolean, extra: string) {
  // secondary carries the seam pseudo-element (the bottom flare wipe); others don't
  return [
    "btn",
    `btn-${variant}`,
    SIZE_CLASS[size],
    block ? "btn-block" : "",
    variant === "secondary" ? "seam" : "",
    extra,
  ]
    .filter(Boolean)
    .join(" ");
}

function Inner({
  icon,
  trailingIcon,
  loading,
  children,
}: Pick<CommonProps, "icon" | "trailingIcon" | "loading" | "children">) {
  return (
    <>
      {loading ? (
        <GlyphSpinner />
      ) : icon ? (
        <span className="grid place-items-center" aria-hidden="true">
          {icon}
        </span>
      ) : null}
      <span className="btn-label">{children}</span>
      {trailingIcon && !loading ? (
        <span className="grid place-items-center" aria-hidden="true">
          {trailingIcon}
        </span>
      ) : null}
      {loading ? <span className="btn-loadbar" aria-hidden="true" /> : null}
    </>
  );
}

export function CTA(props: ButtonProps | LinkProps) {
  const cls = classes(
    props.variant ?? "secondary",
    props.size ?? "md",
    props.block ?? false,
    props.className ?? "",
  );
  const inner = (
    <Inner
      icon={props.icon}
      trailingIcon={props.trailingIcon}
      loading={props.loading}
    >
      {props.children}
    </Inner>
  );

  // —— link (Next <Link> / external <a>) ——
  if (props.href !== undefined) {
    const {
      variant: _v,
      size: _s,
      icon: _i,
      trailingIcon: _ti,
      loading: _l,
      block: _b,
      className: _c,
      children: _ch,
      href,
      external,
      ...anchorRest
    } = props;
    if (external) {
      return (
        <a className={cls} href={href} target="_blank" rel="noreferrer" {...anchorRest}>
          {inner}
        </a>
      );
    }
    return (
      <Link className={cls} href={href} {...anchorRest}>
        {inner}
      </Link>
    );
  }

  // —— button ——
  const {
    variant: _v,
    size: _s,
    icon: _i,
    trailingIcon: _ti,
    loading,
    block: _b,
    className: _c,
    children: _ch,
    href: _h,
    type = "button",
    disabled,
    ...buttonRest
  } = props;
  return (
    <button
      type={type}
      className={cls}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      {...buttonRest}
    >
      {inner}
    </button>
  );
}
