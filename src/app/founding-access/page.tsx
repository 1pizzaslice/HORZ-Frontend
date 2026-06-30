import type { Metadata } from "next";
import { FoundingAccessPage } from "@/components/founding-access/founding-access-page";
import { pageMetadata, FOUNDING_SEO } from "@/lib/seo";
import { JsonLd } from "@/components/ui/json-ld";
import { breadcrumbLd } from "@/lib/structured-data";

/**
 * /founding-access — the pre-launch lead capture (the retired "Log in" / self-serve
 * motion lands here). A top-level static route; takes precedence over the [slug]
 * function segment, which 404s anything outside the seven layers.
 */
export const metadata: Metadata = pageMetadata({
  title: FOUNDING_SEO.title,
  titleAbsolute: true,
  description: FOUNDING_SEO.description,
  path: "/founding-access",
});

export default function FoundingAccessRoute() {
  return (
    <>
      <JsonLd
        data={breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Founding access", path: "/founding-access" },
        ])}
      />
      <FoundingAccessPage />
    </>
  );
}
