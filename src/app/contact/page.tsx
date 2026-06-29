import type { Metadata } from "next";
import { ContactPage } from "@/components/contact/contact-page";

/**
 * /contact — content/08. A top-level static route; the footer "Contact" link
 * resolves here (its `soon` flag is removed in nav-data). Takes routing precedence
 * over the [slug] function segment (which 404s anything outside the seven layers).
 */
export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell us what you're building. We'll tell you what you can put down. Six channels on one board: a self-serve start, a founder on the line for migrations and larger rollouts, security, support, press, and careers.",
};

export default function ContactRoute() {
  return <ContactPage />;
}
