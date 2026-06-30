import type { LegalDoc } from "./types";

/**
 * Terms of Service — a standard SaaS agreement adapted to horz, structured along
 * the same coverage as comparable AI-platform terms. Pre-launch template; counsel
 * review required before launch (PROGRESS pre-launch gate). No effective date.
 */
export const TERMS: LegalDoc = {
  slug: "terms",
  title: "Terms of Service",
  kicker: "STATION 0.0200 · LEGAL",
  intro: [
    "These Terms of Service (the “Terms”) govern your access to and use of the horz website, products, and managed layers (together, the “Service”), operated by horz, Inc. (“horz,” “we,” “us”). By creating an account, requesting founding access, or using the Service, you agree to these Terms on behalf of yourself and any organization you represent (“you”).",
    "If you do not agree, do not use the Service. If you are using the Service for an organization, you represent that you are authorized to bind that organization to these Terms.",
  ],
  clauses: [
    {
      index: "01",
      heading: "Scope of these terms",
      blocks: [
        "These Terms apply to all access to and use of the Service. They incorporate by reference our Privacy Policy and Cookie Policy, and any order form, plan, or written agreement we sign with you (an “Order”). Where a signed Order conflicts with these Terms, the Order controls for that engagement.",
        "We may publish additional product-specific or layer-specific terms; where they apply, they form part of these Terms.",
      ],
    },
    {
      index: "02",
      heading: "The horz service",
      blocks: [
        "horz provides a modular backend for the work around your product — managed layers such as customer service, legal, HR, marketing, analytics, a shared company brain, and tax. The layers are assistive and operate under your direction; where a layer prepares a filing, contract, or other output for you, a human reviews and signs where we say a human signs, and you remain responsible for approving what is sent or filed on your behalf.",
        "We may add, change, or remove features of the Service. We will not materially reduce the core functionality of a paid layer during a paid term without notice.",
      ],
    },
    {
      index: "03",
      heading: "Eligibility and accounts",
      blocks: [
        "You must be at least 18 and able to form a binding contract to use the Service. You agree to provide accurate account information and to keep it current.",
        "You are responsible for your account credentials and for all activity under your account. Notify us promptly at the contact address below if you suspect unauthorized use. We are not liable for losses caused by unauthorized use of your account that you could have prevented.",
      ],
    },
    {
      index: "04",
      heading: "Authorized users",
      blocks: [
        "You may permit your employees and contractors (“Authorized Users”) to use the Service on your behalf. You are responsible for your Authorized Users’ compliance with these Terms and for everything they do through the Service.",
      ],
    },
    {
      index: "05",
      heading: "Acceptable use",
      blocks: [
        "You agree not to, and not to allow anyone to:",
        {
          list: [
            "use the Service in violation of any law, regulation, or third-party right;",
            "upload content you do not have the right to provide, or that infringes, defames, or violates privacy;",
            "attempt to gain unauthorized access to the Service, other accounts, or our systems, or probe, scan, or test their vulnerability except under a program we authorize in writing;",
            "interfere with or disrupt the integrity or performance of the Service, including by overloading, flooding, or denial-of-service;",
            "reverse engineer, decompile, or copy the Service except to the extent that restriction is prohibited by law;",
            "resell, sublicense, or provide the Service to third parties except as expressly permitted; or",
            "use the Service to build a competing product, or to generate unlawful, deceptive, or harmful content.",
          ],
        },
        "We may investigate suspected violations and may suspend or limit access to protect the Service, our users, or third parties.",
      ],
    },
    {
      index: "06",
      heading: "Customer data and content",
      blocks: [
        "“Customer Data” means the data, documents, and content you or your Authorized Users provide to, or generate through, the Service. As between you and horz, you own your Customer Data and your underlying product. The core stays yours.",
        "You grant horz a worldwide, non-exclusive license to host, process, transmit, and display Customer Data solely to provide, secure, and support the Service, and as you instruct through the layers. We process Customer Data in accordance with our Privacy Policy.",
        "You are responsible for the accuracy and legality of Customer Data and for having the rights and consents needed for us to process it.",
      ],
    },
    {
      index: "07",
      heading: "Confidentiality",
      blocks: [
        "Each party may access the other’s non-public information (“Confidential Information”). The receiving party will use it only to perform under these Terms and will protect it with at least reasonable care. Confidential Information does not include information that is public through no fault of the receiving party, independently developed, or rightfully received from a third party.",
      ],
    },
    {
      index: "08",
      heading: "Third-party services and subprocessors",
      blocks: [
        "The Service relies on third-party providers (for example, hosting, payment, and communication services) and may integrate with services you connect. We engage subprocessors to help deliver the Service and remain responsible for their performance to the extent stated in our Privacy Policy and any Data Processing Addendum.",
        "Third-party services you connect are governed by their own terms; we are not responsible for them.",
      ],
    },
    {
      index: "09",
      heading: "Founding access and pre-release service",
      blocks: [
        "Parts of the Service are offered on a founding-access or pre-release basis. These may change, may be incomplete, and are provided “as is” for evaluation. Service levels, response targets, and availability described during this period are goals, not commitments, unless stated in a signed Order.",
        "Founding pricing, where offered, is set with our first customers and held on the terms we agree with you in writing.",
      ],
    },
    {
      index: "10",
      heading: "Fees and payment",
      blocks: [
        "Paid features are billed as described on your plan or Order. Unless stated otherwise, fees are due in advance, are non-refundable except as required by law, and are exclusive of taxes, which you are responsible for.",
        "We may change pricing for future terms with notice. If you do not agree to a change, you may choose not to renew. Overdue amounts may accrue interest and we may suspend the Service for non-payment after notice.",
      ],
    },
    {
      index: "11",
      heading: "Intellectual property and feedback",
      blocks: [
        "The Service, including all software, models, designs, and content we provide (excluding Customer Data), is owned by horz or our licensors and is protected by intellectual-property laws. We grant you a limited, non-exclusive, non-transferable right to use the Service during your term, subject to these Terms.",
        "If you send us suggestions or feedback, you grant us a perpetual, royalty-free license to use it to improve the Service, without obligation to you.",
      ],
    },
    {
      index: "12",
      heading: "Disclaimers",
      blocks: [
        "Except as expressly stated, the Service is provided “as is” and “as available,” without warranties of any kind, whether express, implied, or statutory, including implied warranties of merchantability, fitness for a particular purpose, and non-infringement. We do not warrant that the Service will be uninterrupted, error-free, or that outputs will be accurate or complete.",
        "Outputs from the layers are tools to assist you. You are responsible for reviewing and approving any output before relying on it, and horz does not provide legal, tax, accounting, or other professional advice except where a licensed professional engaged through the Service expressly does so under a separate engagement.",
      ],
    },
    {
      index: "13",
      heading: "Limitation of liability",
      blocks: [
        "To the fullest extent permitted by law, neither party will be liable for indirect, incidental, special, consequential, or punitive damages, or for lost profits, revenue, or data, arising out of or related to these Terms or the Service.",
        "To the fullest extent permitted by law, each party’s total liability arising out of or related to these Terms will not exceed the amounts you paid to horz for the Service in the twelve months before the event giving rise to the liability. These limits do not apply to either party’s liability for breach of its confidentiality obligations, your payment obligations, or a party’s indemnification obligations.",
      ],
    },
    {
      index: "14",
      heading: "Indemnification",
      blocks: [
        "You will defend and indemnify horz against third-party claims arising from your Customer Data, your use of the Service in violation of these Terms, or your violation of law or third-party rights. We will defend and indemnify you against third-party claims that the Service, as provided by us and used in accordance with these Terms, infringes that third party’s intellectual-property rights. The indemnifying party’s obligations are conditioned on prompt notice, control of the defense, and reasonable cooperation.",
      ],
    },
    {
      index: "15",
      heading: "Term, suspension, and termination",
      blocks: [
        "These Terms apply while you use the Service. Either party may terminate for material breach that is not cured within 30 days of notice. We may suspend access where required to protect the Service or comply with law, and will restore access once the cause is resolved.",
        "On termination, your right to use the Service ends. We will make Customer Data available for export for a reasonable period and then delete it in the ordinary course, except where retention is required by law. Sections that by their nature should survive (including ownership, confidentiality, disclaimers, liability limits, and indemnities) survive termination.",
      ],
    },
    {
      index: "16",
      heading: "Changes to these terms",
      blocks: [
        "We may update these Terms as the Service evolves. If we make a material change, we will take reasonable steps to notify you, for example by posting the updated Terms or contacting you. Your continued use of the Service after a change takes effect means you accept the updated Terms.",
      ],
    },
    {
      index: "17",
      heading: "Governing law and disputes",
      blocks: [
        "These Terms are governed by the laws of the State of Delaware, without regard to its conflict-of-laws rules. The parties submit to the exclusive jurisdiction of the state and federal courts located in Delaware for any dispute not subject to an agreed alternative process, and each party waives any objection to venue there.",
      ],
    },
    {
      index: "18",
      heading: "General provisions",
      blocks: [
        "These Terms, with any Order and the policies they incorporate, are the entire agreement between you and horz about the Service and supersede prior agreements on the subject. If any provision is held unenforceable, the rest remains in effect. Our failure to enforce a provision is not a waiver. You may not assign these Terms without our consent; we may assign them in connection with a merger, acquisition, or sale of assets. Notices to horz should be sent to the contact address below.",
      ],
    },
  ],
  contact: {
    line: "Questions about these Terms? Write to us at",
    email: "contact@horz.dev",
  },
};
