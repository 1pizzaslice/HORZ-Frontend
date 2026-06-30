import type { Metadata } from "next";
import { LegalDocument } from "@/components/legal/legal-document";
import { COOKIES } from "@/lib/legal";
import { pageMetadata, LEGAL_SEO } from "@/lib/seo";
import { JsonLd } from "@/components/ui/json-ld";
import { breadcrumbLd } from "@/lib/structured-data";

/**
 * /cookies — Cookie Policy. A top-level static route; the footer "Cookies" link
 * resolves here. Takes precedence over [slug].
 */
export const metadata: Metadata = pageMetadata({
  title: LEGAL_SEO.cookies.title,
  titleAbsolute: true,
  description: LEGAL_SEO.cookies.description,
  path: "/cookies",
});

export default function CookiesRoute() {
  return (
    <>
      <JsonLd
        data={breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Cookie Policy", path: "/cookies" },
        ])}
      />
      <LegalDocument doc={COOKIES} />
    </>
  );
}
