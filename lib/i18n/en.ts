import type { Dictionary } from "@/lib/types";

export const en: Dictionary = {
  langLabel: { fr: "FR", en: "EN" },
  nav: {
    menuLabel: "Menu",
    cta: "Get my ECTN",
    links: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/#services" },
      { label: "Transit quote", href: "/cotation" },
      // { label: "Covered countries", href: "/#pays-couverts" },
      { label: "How it works", href: "/#pourquoi" },
      // { label: "About", href: "/#temoignages" },
      { label: "FAQ", href: "/#faq" },
      { label: "Contact", href: "/contact" },
    ],
  },
  hero: {
    chips: ["Fast processing", "Personal assistance", "Secure payment"],
    title: "Get your ECTN | BESC quickly and",
    titleAccent: "simply.",
    subtitle:
      "We support exporters, freight forwarders and companies in obtaining their ECTN/BESC certificates for shipments to Africa.",
    primaryCta: "Request my ECTN",
    secondaryCta: "Explore our services",
    // note: "Receive your certificate by email or WhatsApp within 24 hours of payment.",
    badgeValue: "24 h",
    badgeLabel: "Average issuing time",
    imageLabel: "Port · containers · cargo ship",
    image: "/images/hero/hero-port.jpg",
  },
  stats: [
    { value: "3,320+", label: "Certificates issued" },
    { value: "150+", label: "Clients supported" },
    { value: "14", label: "Destinations covered" },
    { value: "24/7", label: "Assistance" },
  ],
  services: {
    label: "Our services",
    title: "Simplify your shipping formalities to",
    titleAccent: "Africa",
    subtitle:
      "Africa BESC assists exporters, freight forwarders, and companies in obtaining their BESC/ECTN certificates and in completing transit formalities for shipments to various African destinations.",
    rotatedNote: "More than a document, a trusted partner",
    learnMore: "Learn more",
    items: [
      {
        icon: "file-text",
        title: "ECTN/BESC",
        subtitle: "For the traceability of your goods",
        description:
          "A mandatory document in several African countries that enables electronic tracking of shipments and ensures the security of goods.",
        image: "/images/services/ectn-document.jpg",
      },
      {
        icon: "package",
        title: "CTN / BESC",
        subtitle: "Depending on the destination",
        description:
          "Depending on the country, the document may be called a CTN or a BESC. We’ll help you identify the correct procedure based on your destination.",
        image: "/images/services/besc-containers.jpg",
      },
      {
        icon: "compass",
        title: "Transit Quote",
        subtitle: "Clear import formalities",
        description:
          "Quickly receive a personalized estimate of your transit and shipping costs to your final destination.",
        image: "/images/services/ctn-world-map.jpg",
      },
      {
        icon: "clipboard-check",
        title: "Document assistance",
        subtitle: "End-to-end support",
        description:
          "Our team checks your documents and guides you at every step, for a simple, fast and reliable experience.",
        image: "/images/services/assistance-paperwork.jpg",
      },
    ],
  },
  countries: {
    label: "Covered countries",
    title: "Expertise tailored to every",
    titleAccent: "destination",
    subtitle:
      "ECTN/BESC requirements can vary by destination country. Select your destination to learn about the required steps.",
    selectPlaceholder: "Choose a destination country",
    cta: "See covered countries",
    rotatedNote: "Africa at the heart of our services",
    mapValue: "14",
    mapLabel: "African destinations covered",
    list: [
      { name: "Benin", code: "bj", flag: "🇧🇯" },
      { name: "Togo", code: "tg", flag: "🇹🇬" },
      { name: "Ghana", code: "gh", flag: "🇬🇭" },
      { name: "Nigeria", code: "ng", flag: "🇳🇬" },
      { name: "Senegal", code: "sn", flag: "🇸🇳" },
      { name: "Guinea", code: "gn", flag: "🇬🇳" },
      { name: "Guinea-Bissau", code: "gw", flag: "🇬🇼" },
      { name: "Burundi", code: "bi", flag: "🇧🇮" },
      { name: "South Sudan", code: "ss", flag: "🇸🇸" },
      { name: "Equatorial Guinea", code: "gq", flag: "🇬🇶" },
      { name: "Central African Republic", code: "cf", flag: "🇨🇫" },
      { name: "Niger", code: "ne", flag: "🇳🇪" },
      { name: "Burkina Faso", code: "bf", flag: "🇧🇫" },
      { name: "Mali", code: "ml", flag: "🇲🇱" },
    ],
  },
  why: {
    label: "Why Africa BESC?",
    title: "Your shipping formalities, without",
    titleAccent: "complications.",
    rotatedNote: "Africa, closer",
    securedLabel: "Bank card, bank transfer or FedaPay",
    items: [
      {
        icon: "zap",
        title: "Fast processing",
        description: "Your request is handled quickly by our team.",
      },
      {
        icon: "headset",
        title: "Personal support",
        description: "A single point of contact guides you through the process.",
      },
      {
        icon: "globe",
        title: "Multi-country expertise",
        description:
          "In-depth knowledge of the specific requirements of many African destinations.",
      },
      {
        icon: "shield-check",
        title: "Secure payment",
        description:
          "Pay securely by bank card, bank transfer or FedaPay.",
      },
    ],
  },
  ctaBanner: {
    label: "Your next shipment",
    title: "Is your cargo ready to",
    titleAccent: "ship?",
    subtitle: "Start your ECTN/BESC request in just a few minutes.",
    primaryCta: "Start my request",
    secondaryCta: "Talk to an advisor",
    note: "Got a question? Our team replies quickly.",
    rotatedNote: "Your projects go further, with confidence",
    image: "/images/hero/hero-cargo-ship.jpg",
    imageAlt: "Container ship at the quay, ready to set sail",
  },
  testimonials: {
    label: "Client testimonials",
    title: "They",
    titleAccent: "trust us",
    subtitle:
      "Every day, companies, freight forwarders and exporters trust us with their shipments to Africa.",
    rotatedNote: "Happy partners, a more connected Africa",
    items: [
      {
        quote:
          "A clear procedure and very responsive support. We received our certificate quickly.",
        name: "Abdoulaye K.",
        role: "Freight forwarder",
        country: "Senegal",
        initials: "AK",
      },
      {
        quote:
          "A reliable and professional service. The team is available and answers our questions quickly. Highly recommended.",
        name: "Claudia M.",
        role: "Import-Export",
        country: "Nigeria",
        initials: "CM",
      },
      {
        quote:
          "Thanks to Africa BESC, we obtained our ECTN stress-free. A real time-saver for our operations.",
        name: "David T.",
        role: "Project Forwarder",
        country: "Benin",
        initials: "DT",
      },
    ],
  },
  faq: {
    label: "FAQ",
    title: "Frequently asked",
    titleAccent: "questions",
    subtitle:
      "Quickly find answers to the most common questions about our ECTN/BESC services.",
    rotatedNote: "A question? We are here for you.",
    items: [
      {
        question: "What is an ECTN/BESC?",
        answer:
          "The ECTN (Electronic Cargo Tracking Note) or BESC (Electronic Cargo Tracking Slip) is an electronic tracking document required by many African countries for any cargo bound for their ports. It lets authorities monitor and trace imported goods.",
      },
      {
        question: "In which countries is it mandatory?",
        answer:
          "The document is mandatory in around ten West and Central African countries, including Benin, Togo, Ghana, Nigeria, Senegal, Guinea, Guinea-Bissau, Burundi, South Sudan, Equatorial Guinea and the Central African Republic.",
      },
      {
        question: "Which documents do I need to provide?",
        answer:
          "Usually: the commercial invoice, the bill of lading or waybill, the export declaration (EX1) and, depending on the destination, the certificate of origin. Our team gives you the exact list for your country.",
      },
      {
        question: "How long does it take to get my certificate?",
        answer:
          "Once we have the complete documents and payment, the certificate is generally issued within 24 business hours. Timelines can vary depending on the destination and local authorities.",
      },
      {
        question: "When should I request my ECTN?",
        answer:
          "Ideally, start the request as soon as the bill of lading is issued, and before the vessel arrives at the discharge port. Some countries apply penalties for certificates obtained after arrival.",
      },
      {
        question: "Can I amend an ECTN after it is created?",
        answer:
          "Yes. Corrections are possible before final validation. After issuance, an amendment request can be filed with the authorities; additional fees may apply depending on the destination.",
      },
      {
        question: "How do I pay?",
        answer:
          "Payment is made online by bank card (Visa, Mastercard) securely. A receipt is sent to you automatically after payment.",
      },
      {
        question: "How will I receive my certificate?",
        answer:
          "Your certificate is sent to you as a PDF by email and, if you wish, via WhatsApp, as soon as it is validated.",
      },
      {
        question: "What if I don't know which document to request?",
        answer:
          "Just tell us your port of departure and your destination. We identify the required document (ECTN, BESC or CTN) and the applicable procedure for you.",
      },
    ],
    support: {
      text: "Can't find the answer to your question? Our team is at your disposal.",
      cta: "Contact us",
    },
  },
  contact: {
    metaTitle: "Contact",
    metaDescription:
      "Get in touch with the Africa BESC team for your ECTN / BESC / CTN formalities. Reply within 24 business hours.",
    label: "Contact",
    title: "Let's talk about your",
    titleAccent: "shipment",
    subtitle:
      "Do you have a question about the ECTN/BESC or the CTN, need a quote, have an ongoing case, or require assistance with your shipments? Write to us: our team will respond within 30 minutes.",
    form: {
      lastName: "Last name",
      firstName: "First name",
      email: "Email",
      subject: "Subject",
      subjectPlaceholder: "e.g. ECTN request for Benin",
      message: "Message",
      messagePlaceholder:
        "Describe your need: port of departure, destination, type of goods…",
      submit: "Send message",
      sending: "Sending…",
      successTitle: "Message sent",
      successBody:
        "Thank you! Your message has been sent. Our team replies within 24 business hours.",
      another: "Send another message",
      errorTitle: "Sending failed",
      errorBody:
        "Something went wrong. Try again in a moment or email us directly at ",
      required: "This field is required.",
      invalidEmail: "Enter a valid email address.",
      consent:
        "By submitting this form, you agree that your information may be used to process your request.",
    },
    info: {
      title: "Our details",
      intro: "You can also reach us directly through these channels.",
      emailLabel: "Email",
      phoneLabel: "Phone",
      addressLabel: "Address",
      hoursLabel: "Availability",
      hoursValue: "24/7, reply within 24 business hours",
    },
  },
  quote: {
    navLabel: "Transit quote",
    metaTitle: "Transit quote request",
    metaDescription:
      "Get a transit quote for your imports to Africa: ocean, air, road and customs clearance. Detailed reply within 24 to 48 hours.",
    hero: {
      label: "Transit quotation",
      chips: ["Fast reply", "Personal support", "Reliable service"],
      title: "Your imports,",
      titleAccent: "made clear.",
      subtitle:
        "Get a quick, personalized estimate of your transit and shipping costs to your final destination.",
      primaryCta: "Get an import request",
      secondaryCta: "Talk to an advisor",
      imageAlt:
        "Port terminal: container ship, cranes and a transit agent on the quay",
      imageNote: "From the world to Africa, simply.",
    },
    intro: {
      label: "The service",
      title: "One point of contact for your whole",
      titleAccent: "import transit",
      body: [
        "From pickup at your supplier to delivery of your goods, we handle every link of the chain: freight booking, document tracking, customs formalities and final haulage.",
        "You fill in a single request. We come back with a clear quote, line by line, and an estimated transit time.",
      ],
      points: [
        "Ocean freight (FCL / LCL), air and road",
        "Cargo insurance and packing on request",
        "Import and export customs declaration",
        "Pre-carriage and final delivery",
        "ECTN / BESC / CTN included in the file",
      ],
      imageAlt: "Logistics operator checking a transit file",
    },
    coverage: {
      label: "Modes covered",
      title: "The right mode for every",
      titleAccent: "shipment",
      subtitle:
        "We compare the options and recommend the combination that best fits your budget and timeline.",
      items: [
        {
          icon: "ship",
          title: "Ocean",
          description:
            "Full container (FCL) or groupage (LCL) from major ports, tracked through to discharge.",
        },
        {
          icon: "plane",
          title: "Air",
          description:
            "For urgent or high-value shipments: booking, handling and air documentation.",
        },
        {
          icon: "truck",
          title: "Road",
          description:
            "Pre- and post-carriage, regional transport and final delivery to your site.",
        },
        {
          icon: "file-check",
          title: "Customs",
          description:
            "Tariff classification, import/export declaration and regulatory document handling.",
        },
      ],
    },
    steps: {
      label: "How it works",
      title: "From request to",
      titleAccent: "delivery",
      items: [
        {
          title: "Describe your need",
          description:
            "Fill in the form: origin, destination, nature and volume of goods, preferred incoterm.",
        },
        {
          title: "Get your quote",
          description:
            "Within 24 to 48 h, a detailed quote with the cost of each item and the estimated transit time.",
        },
        {
          title: "Approve the file",
          description:
            "You confirm the quote; we open the transit file and book the freight.",
        },
        {
          title: "We handle the transit",
          description:
            "Document tracking, customs and haulage through to final delivery, with a single point of contact.",
        },
      ],
    },
    cta: {
      label: "Ready to import?",
      title: "Start your quote",
      titleAccent: "request",
      subtitle:
        "One form, one priced answer. No commitment required.",
      primaryCta: "Get an import request",
      note: "A secure form, hosted on our own platform.",
      imageAlt: "Stacked containers in a terminal, ready to ship",
    },
    form: {
      label: "Quote request",
      title: "Get a quote",
      titleAccent: "for customs formalities at the port of arrival.",
      subtitle:
        "Provide the destination port and the details of your cargo to receive an approximate estimate within 24 to 48 hours.",
      sections: {
        contact: "Your details",
        route: "Origin and destination",
        cargo: "Goods and transport",
        options: "Additional services",
        details: "More information",
        documents: "Required documents",
      },
      fields: {
        firstName: "First name",
        lastName: "Last name",
        companyName: "Company",
        email: "Email",
        phone: "Phone or WhatsApp",
        phoneHint: "Include the country code.",
        originCountry: "Country of origin",
        originCity: "Port or city of departure",
        originCityPlaceholder: "e.g. Shanghai, Antwerp, Jebel Ali",
        destinationCountry: "Destination country",
        destinationCity: "Port or city of delivery",
        destinationCityPlaceholder: "e.g. Cotonou, Lomé, Bamako",
        transportMode: "Preferred transport mode",
        incoterms: "Incoterms",
        hsCode: "HS Code (tariff heading)",
        hsCodeHint:
          "6, 8 or 10-digit customs code: it determines the taxation, regulation and customs duties that apply.",
        message: "Additional information",
        messagePlaceholder:
          "Deadline constraints, dangerous goods, number of packages, etc.",
        optionalSuffix: "(optional)",
      },
      options: {
        cargoInsurance: "I would like cargo insurance",
        customsClearance: "I would like customs clearance on arrival",
      },
      files: {
        billOfLading: "Bill of Lading (B/L)",
        commercialInvoice: "Final commercial invoice",
        packingList: "Packing list",
        freightInvoice: "Freight invoice",
        freightInvoiceHint:
          "If freight is not included in the commercial invoice (FOB sales).",
        hint: "PDF, JPG, PNG or WEBP. 5 MB max per file.",
      },
      selectPlaceholder: "Select…",
      consent:
        "I authorise Africa BESC to use this information to prepare my transit quote.",
      submit: "Request my quote",
      sending: "Sending…",
      successTitle: "Request sent",
      successBody:
        "Thank you! Your quote request has been sent. Our team will get back to you within 24 to 48 hours.",
      another: "Send another request",
      errorTitle: "Sending failed",
      errorBody:
        "Something went wrong. Try again in a moment or email us directly at",
      errors: {
        required: "This field is required.",
        invalidEmail: "Enter a valid email address.",
        fileRequired: "This document is required.",
        fileTooLarge: "File too large (5 MB max per file).",
        fileType: "Unsupported format: use a PDF or an image.",
        totalTooLarge: "The total size of the documents exceeds 15 MB.",
        consentRequired: "You must tick this box to continue.",
      },
    },
  },
  demande: {
    metaTitle: "ECTN / BESC request",
    metaDescription:
      "Submit your ECTN / BESC request online: cargo route, shipment details and supporting documents. Processed within 24 to 72 hours.",
    label: "Online request",
    title: "Your ECTN / BESC request,",
    titleAccent: "in a single step.",
    subtitle:
      "Enter your cargo route, the shipment details and attach your documents. Our team processes your file and gets back to you within 24 to 72 hours.",
    checklistTitle: "Have these ready before you start",
    checklist: [
      "The Bill of Lading and its number",
      "The commercial invoice for the goods",
      "The export declaration",
      "The packing list",
      "The freight invoice",
      "Vehicle gray cards if the shipment contains cars",
    ],
    sections: {
      route: "Cargo route",
      applicant: "Applicant",
      shipment: "Shipment details",
      documents: "Supporting documents",
      signature: "Signature and declaration",
    },
    fields: {
      countryOfLoading: "Country of loading",
      destinationCountry: "Destination country",
      destinationHint:
        "The destination country may also be one of the vessel's transit stops.",
      firstName: "First name",
      lastName: "Last name",
      companyName: "Company",
      email: "Email",
      phone: "Phone or WhatsApp",
      phoneHint: "Enter a valid number, including the country code.",
      blNumber: "Bill of lading number",
      blNumberHint: "Exactly as shown on the Bill of Lading.",
      currency: "Currency of goods",
      freightPayment: "Freight payment type",
      incoterms: "Incoterms",
      optionalSuffix: "(optional)",
    },
    selectPlaceholder: "Select…",
    files: {
      blDocument: "Bill of Lading",
      commercialInvoice: "Commercial invoice for the goods",
      exportDeclaration: "Export declaration",
      packingList: "Packing list",
      freightInvoice: "Freight invoice",
      grayCards: "Vehicle gray cards",
      grayCardsHint: "Attach if your shipment contains vehicles.",
      hint: "Accepted formats: PDF, JPG, PNG or WEBP. 5 MB max per file, 12 MB in total.",
    },
    signature: {
      label: "Sign in the box below",
      hint: "Use your mouse or finger to sign.",
      clear: "Clear",
    },
    consent:
      "I certify that the information and documents provided are accurate, and I authorise Africa BESC to use them to process my ECTN / BESC request.",
    submit: "Send my request",
    sending: "Sending…",
    successTitle: "Request sent",
    successBody:
      "Thank you! Your ECTN / BESC request and documents have been sent. Our team will get back to you within 24 to 72 hours.",
    another: "Send another request",
    errorTitle: "Sending failed",
    errorBody:
      "Something went wrong. Try again in a moment or email us directly at",
    errors: {
      required: "This field is required.",
      invalidEmail: "Enter a valid email address.",
      fileRequired: "This document is required.",
      fileTooLarge: "File too large (5 MB max per document).",
      fileType: "Unsupported format: use a PDF or an image.",
      totalTooLarge: "The total size of the documents exceeds 12 MB.",
      signatureRequired: "Your signature is required.",
      consentRequired: "You must tick this box to continue.",
    },
  },
  footer: {
    tagline: "Your trusted ECTN & BESC partner for Africa.",
    columns: [
      {
        title: "Navigation",
        links: [
          { label: "Home", href: "/#accueil" },
          { label: "About", href: "/#temoignages" },
          { label: "Services", href: "/#services" },
          { label: "Covered countries", href: "/#pays-couverts" },
          { label: "FAQ", href: "/#faq" },
          { label: "Contact", href: "/contact" },
        ],
      },
      {
        title: "Our services",
        links: [
          { label: "ECTN/BESC request", href: "/demande" },
          { label: "ECTN", href: "/#services" },
          { label: "BESC", href: "/#services" },
          { label: "CTN", href: "/#services" },
          { label: "Document assistance", href: "/#services" },
          { label: "Transit quote", href: "/cotation" },
        ],
      },
    ],
    contact: {
      title: "Contact",
      email: "info@africa-besc.com",
      phone: "+229 01 23 45 67",
      lines: ["Sainte Anne la mer, France"],
    },
    legal: "© 2026 Africa BESC. All rights reserved.",
  },
};
