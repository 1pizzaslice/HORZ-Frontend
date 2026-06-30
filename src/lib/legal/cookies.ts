import type { LegalDoc } from "./types";

/**
 * Cookie Policy — a standard cookie notice adapted to horz. Pre-launch template;
 * counsel review required before launch. No effective date. Cookie categories
 * are described generically so the notice stays accurate before the production
 * cookie inventory is finalized.
 */
export const COOKIES: LegalDoc = {
  slug: "cookies",
  title: "Cookie Policy",
  kicker: "STATION 0.0220 · LEGAL",
  intro: [
    "This Cookie Policy explains how horz, Inc. (“horz,” “we,” “us”) uses cookies and similar technologies on our website and Service, and how you can control them. It supplements our Privacy Policy.",
  ],
  clauses: [
    {
      index: "01",
      heading: "What cookies are",
      blocks: [
        "Cookies are small text files placed on your device when you visit a site. They let the site remember your actions and preferences over time. We also use similar technologies such as local storage and pixels; we refer to all of them as “cookies” here.",
      ],
    },
    {
      index: "02",
      heading: "Why we use them",
      blocks: [
        "We use cookies to keep the site working, to remember your preferences such as your theme, to keep your session secure, and to understand how the site is used so we can improve it.",
      ],
    },
    {
      index: "03",
      heading: "The cookies we use",
      blocks: [
        { subheading: "Strictly necessary" },
        "Required for the site and Service to function — for example, security, load balancing, and remembering your session. These cannot be switched off through our controls.",
        { subheading: "Preferences" },
        "Remember choices you make, such as your night/day theme, so the experience is consistent across visits.",
        { subheading: "Analytics" },
        "Help us understand usage in aggregate — which pages are visited and how features perform — so we can improve them. Where required, we set these only with your consent.",
      ],
    },
    {
      index: "04",
      heading: "Third-party cookies",
      blocks: [
        "Some cookies are set by third parties we use to deliver parts of the site, such as analytics or infrastructure providers. Their use of information is governed by their own privacy policies.",
      ],
    },
    {
      index: "05",
      heading: "How long cookies last",
      blocks: [
        "Session cookies are deleted when you close your browser. Persistent cookies remain for a set period or until you delete them, and are used to remember you and your preferences across visits.",
      ],
    },
    {
      index: "06",
      heading: "Managing cookies",
      blocks: [
        "Most browsers let you view, manage, block, and delete cookies through their settings. Blocking strictly necessary cookies may stop parts of the site from working. Where we offer a cookie control on the site, you can use it to manage non-essential cookies.",
      ],
    },
    {
      index: "07",
      heading: "Do Not Track and Global Privacy Control",
      blocks: [
        "Some browsers send a “Do Not Track” or Global Privacy Control signal. Where the law requires us to honor a recognized opt-out preference signal, we do so. There is no common industry standard for Do Not Track, and practices may evolve.",
      ],
    },
    {
      index: "08",
      heading: "Changes to this policy",
      blocks: [
        "We may update this Cookie Policy as our practices or the law change. If we make a material change, we will take reasonable steps to bring it to your attention, for example by posting the updated Policy.",
      ],
    },
  ],
  contact: {
    line: "Questions about cookies? Write to us at",
    email: "contact@horz.dev",
  },
};
