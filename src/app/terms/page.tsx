import type { Metadata } from "next";
import { LegalDocument } from "@/components/legal/legal-document";
import { TERMS } from "@/lib/legal";
import { pageMetadata, LEGAL_SEO } from "@/lib/seo";
import { JsonLd } from "@/components/ui/json-ld";
import { breadcrumbLd } from "@/lib/structured-data";

/**
 * /terms — Terms of Service. A top-level static route; the footer "Terms" links
 * and the baseplate "Terms" link resolve here. Takes precedence over [slug].
 */
export const metadata: Metadata = pageMetadata({
  title: LEGAL_SEO.terms.title,
  titleAbsolute: true,
  description: LEGAL_SEO.terms.description,
  path: "/terms",
});

export default function TermsRoute() {
  return (
    <>
      <JsonLd
        data={breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Terms of Service", path: "/terms" },
        ])}
      />
      <LegalDocument doc={TERMS} />
    </>
  );
}
