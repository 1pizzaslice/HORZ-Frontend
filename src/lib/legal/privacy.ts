import type { LegalDoc } from "./types";

/**
 * Privacy Policy — a standard SaaS privacy notice adapted to horz, covering the
 * usual jurisdictions (GDPR/UK, US state laws). Pre-launch template; counsel
 * review required before launch. No effective date. Retention and similar
 * specifics are phrased as principles, not invented guarantees, so nothing here
 * is a claim we cannot stand behind.
 */
export const PRIVACY: LegalDoc = {
  slug: "privacy",
  title: "Privacy Policy",
  kicker: "STATION 0.0210 · LEGAL",
  intro: [
    "This Privacy Policy explains how horz, Inc. (“horz,” “we,” “us”) collects, uses, and shares personal information when you visit our website, request founding access, or use our Service, and the choices you have. It applies to personal information we handle as a controller.",
    "When we process personal information on behalf of a customer using our Service — that is, as a processor acting on the customer’s instructions — our handling is governed by our agreement with that customer, including any Data Processing Addendum, rather than this Policy.",
  ],
  clauses: [
    {
      index: "01",
      heading: "Who we are and how to contact us",
      blocks: [
        "horz, Inc. is the entity responsible for the personal information described in this Policy. For any privacy question or to exercise a right, contact us at the address at the end of this Policy.",
      ],
    },
    {
      index: "02",
      heading: "The information we collect",
      blocks: [
        { subheading: "Information you provide" },
        {
          list: [
            "account and contact details — name, email, company, and role when you request access, sign up, or contact us;",
            "communications — the contents of messages you send us and our correspondence with you;",
            "billing details — where you purchase, the payment and billing information needed to process it (card data is handled by our payment processor, not stored by us).",
          ],
        },
        { subheading: "Information we collect automatically" },
        {
          list: [
            "usage data — pages viewed, features used, and actions taken in the Service;",
            "device and log data — IP address, browser and device type, language, and timestamps;",
            "cookies and similar technologies — as described in our Cookie Policy.",
          ],
        },
        { subheading: "Information from third parties" },
        "We may receive information from service providers, analytics partners, and, where you connect them, third-party services you integrate with the Service.",
        { subheading: "Customer Data" },
        "When you use the Service, you may submit data about your own customers, employees, or operations. We process that data as a processor on your behalf under your customer agreement, not under this Policy.",
      ],
    },
    {
      index: "03",
      heading: "How we use personal information",
      blocks: [
        "We use personal information to:",
        {
          list: [
            "provide, operate, secure, and improve the Service;",
            "create and administer accounts and respond to requests, including founding-access requests;",
            "process payments and manage billing;",
            "communicate with you about the Service, including service and security notices and, where permitted, updates you can opt out of;",
            "monitor, prevent, and investigate fraud, abuse, and security incidents; and",
            "comply with law and enforce our terms.",
          ],
        },
      ],
    },
    {
      index: "04",
      heading: "Legal bases for processing (EEA/UK)",
      blocks: [
        "Where the GDPR or UK GDPR applies, we rely on: performance of a contract with you; our legitimate interests in operating and improving the Service and keeping it secure (balanced against your rights); your consent, where we ask for it (for example certain cookies or marketing); and compliance with legal obligations.",
      ],
    },
    {
      index: "05",
      heading: "How we share personal information",
      blocks: [
        "We do not sell personal information. We share it only as needed:",
        {
          list: [
            "service providers and subprocessors who process it on our behalf under contract (for example hosting, payments, analytics, and communications);",
            "professional advisors engaged to deliver a layer, where you direct that work;",
            "to comply with law, legal process, or a lawful government request, and to protect rights, safety, and the integrity of the Service; and",
            "in connection with a merger, financing, acquisition, or sale of assets, subject to this Policy.",
          ],
        },
      ],
    },
    {
      index: "06",
      heading: "International data transfers",
      blocks: [
        "We are based in the United States and may process personal information there and in other countries. Where we transfer personal information across borders, we use appropriate safeguards, such as standard contractual clauses, where required by law.",
      ],
    },
    {
      index: "07",
      heading: "Data retention",
      blocks: [
        "We keep personal information for as long as needed to provide the Service, maintain your account, comply with our legal obligations, resolve disputes, and enforce our agreements. When it is no longer needed, we delete or de-identify it in the ordinary course.",
      ],
    },
    {
      index: "08",
      heading: "How we protect personal information",
      blocks: [
        "We maintain administrative, technical, and organizational safeguards designed to protect personal information, scoped to the sensitivity of the data. Our security practices, and the controls we make available to customers, are described at /security. No method of transmission or storage is completely secure, and we cannot guarantee absolute security.",
      ],
    },
    {
      index: "09",
      heading: "Your rights and choices",
      blocks: [
        "Depending on where you live, you may have the right to access, correct, delete, or port your personal information, to object to or restrict certain processing, and to withdraw consent. You can also opt out of marketing emails using the link in them. To make a request, contact us at the address below; we will verify and respond as required by law, and will not discriminate against you for exercising a right.",
      ],
    },
    {
      index: "10",
      heading: "EEA and UK privacy rights",
      blocks: [
        "If you are in the EEA or UK, you have the rights described above under the GDPR or UK GDPR, and the right to lodge a complaint with your local supervisory authority. We would appreciate the chance to address your concern first.",
      ],
    },
    {
      index: "11",
      heading: "US state privacy rights",
      blocks: [
        "If you are a resident of a US state with a comprehensive privacy law (such as California, Colorado, Connecticut, Virginia, and others), you may have the rights to know, access, correct, delete, and obtain a portable copy of your personal information, and to opt out of targeted advertising, sale, or certain profiling. We do not sell personal information or share it for cross-context behavioral advertising as those terms are defined by those laws. To exercise a right, use the contact address below; you may use an authorized agent where the law allows.",
      ],
    },
    {
      index: "12",
      heading: "Cookies and similar technologies",
      blocks: [
        "We use cookies and similar technologies to operate the site, remember preferences, and understand usage. You can control them as described in our Cookie Policy and through your browser settings.",
      ],
    },
    {
      index: "13",
      heading: "Automated decision-making",
      blocks: [
        "The Service uses automation, including AI models, to assist the work in each layer. Where a layer prepares an output that has a legal or similarly significant effect — such as a filing or a signed document — a human reviews and approves it, and you remain in control of what is sent on your behalf. We do not make solely automated decisions about you that produce legal effects without a human in the loop.",
      ],
    },
    {
      index: "14",
      heading: "Children’s privacy",
      blocks: [
        "The Service is for businesses and is not directed to children under 16, and we do not knowingly collect personal information from them. If you believe a child has provided us personal information, contact us and we will delete it.",
      ],
    },
    {
      index: "15",
      heading: "Third-party links",
      blocks: [
        "Our site and Service may link to third-party sites and services that we do not control. Their privacy practices are governed by their own policies, and we encourage you to review them.",
      ],
    },
    {
      index: "16",
      heading: "Changes to this policy",
      blocks: [
        "We may update this Policy as our practices or the law change. If we make a material change, we will take reasonable steps to notify you, for example by posting the updated Policy or contacting you. Your continued use of the Service after a change takes effect means you accept the updated Policy.",
      ],
    },
  ],
  contact: {
    line: "To exercise a privacy right, or with any question about this Policy, write to us at",
    email: "contact@horz.dev",
  },
};
