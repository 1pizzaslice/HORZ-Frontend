import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FUNCTION_SLUGS, getFunction } from "@/lib/functions";
import { FunctionPageView } from "@/components/function-page/function-page";

/**
 * The seven function detail pages, served from one data-driven route (§8.12).
 * `generateStaticParams` + `dynamicParams = false` prerenders exactly the seven
 * layer slugs and 404s everything else — so future top-level routes (/pricing,
 * /manifesto, added in Phase 5 as their own static folders) take precedence and
 * are never shadowed by this dynamic segment.
 */
export function generateStaticParams() {
  return FUNCTION_SLUGS.map((slug) => ({ slug }));
}

export const dynamicParams = false;

type Params = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const fn = getFunction(slug);
  if (!fn) return {};
  return {
    title: fn.name,
    description: fn.rackLine,
  };
}

export default async function FunctionRoute({ params }: Params) {
  const { slug } = await params;
  const fn = getFunction(slug);
  if (!fn) notFound();
  return <FunctionPageView fn={fn} />;
}
