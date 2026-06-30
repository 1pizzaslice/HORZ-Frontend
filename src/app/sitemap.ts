import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";
import { FUNCTION_SLUGS } from "@/lib/functions";

/**
 * /sitemap.xml — every PUBLIC route, and only public routes.
 *
 * Sourced from FUNCTION_SLUGS so it can never drift from the real routes. The
 * internal showcase routes (/_kit, /_section, /_tokens) and the not-yet-shipped
 * `soon` destinations are intentionally absent — listing a route here is a
 * "please index this" signal, so we only ever list pages that exist and should
 * rank.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const home: MetadataRoute.Sitemap[number] = {
    url: SITE_URL,
    lastModified,
    changeFrequency: "weekly",
    priority: 1,
  };

  const functions: MetadataRoute.Sitemap = FUNCTION_SLUGS.map((slug) => ({
    url: `${SITE_URL}/${slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const pages: MetadataRoute.Sitemap = [
    { path: "/pricing", priority: 0.7 },
    { path: "/manifesto", priority: 0.6 },
    { path: "/security", priority: 0.6 },
    { path: "/founding-access", priority: 0.6 },
    { path: "/contact", priority: 0.5 },
    { path: "/terms", priority: 0.3 },
    { path: "/privacy", priority: 0.3 },
    { path: "/cookies", priority: 0.3 },
  ].map(({ path, priority }) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency: "monthly",
    priority,
  }));

  return [home, ...functions, ...pages];
}
