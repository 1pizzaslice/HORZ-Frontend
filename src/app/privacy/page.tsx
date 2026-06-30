import type { Metadata } from "next";
import { LegalDocument } from "@/components/legal/legal-document";
import { PRIVACY } from "@/lib/legal";
import { pageMetadata, LEGAL_SEO } from "@/lib/seo";
import { JsonLd } from "@/components/ui/json-ld";
import { breadcrumbLd } from "@/lib/structured-data";

/**
 * /privacy — Privacy Policy. A top-level static route; the footer "Privacy" links
 * and the baseplate "Privacy" link resolve here. Takes precedence over [slug].
 */
export const metadata: Metadata = pageMetadata({
  title: LEGAL_SEO.privacy.title,
  titleAbsolute: true,
  description: LEGAL_SEO.privacy.description,
  path: "/privacy",
});

export default function PrivacyRoute() {
  return (
    <>
      <JsonLd
        data={breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Privacy Policy", path: "/privacy" },
        ])}
      />
      <LegalDocument doc={PRIVACY} />
    </>
  );
}
