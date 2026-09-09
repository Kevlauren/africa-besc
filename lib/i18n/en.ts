import type { Dictionary } from "@/lib/types";

export const en: Dictionary = {
  langLabel: { fr: "FR", en: "EN" },
  nav: {
    menuLabel: "Menu",
    cta: "Get my ECTN",
    links: [
      { label: "Home", href: "#accueil" },
      { label: "Services", href: "#services" },
      { label: "Covered countries", href: "#pays-couverts" },
      { label: "How it works", href: "#pourquoi" },
      { label: "About", href: "#temoignages" },
      { label: "FAQ", href: "#faq" },
      { label: "Contact", href: "#contact" },
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
    note: "Receive your certificate by email or WhatsApp within 24 hours of payment.",
    badgeValue: "24 h",
    badgeLabel: "Average issuing time",
    imageLabel: "Port · containers · cargo ship",
    image: "/images/hero/hero-port.jpg",
  },
  stats: [
    { value: "3,320+", label: "Certificates issued" },
    { value: "150+", label: "Clients supported" },
    { value: "11", label: "Destinations covered" },
    { value: "24/7", label: "Assistance" },
  ],
  services: {
    label: "Our services",
    title: "Simplify your shipping formalities to",
    titleAccent: "Africa",
    subtitle:
      "Africa BESC supports exporters, freight forwarders and companies for shipments to several African destinations.",
    rotatedNote: "More than a document, a trusted partner",
    learnMore: "Learn more",
    items: [
      {
        icon: "file-text",
        title: "ECTN",
        subtitle: "Electronic Cargo Tracking Note",
        description:
          "A mandatory document in several African countries that enables electronic cargo tracking and secures goods in transit.",
        image: "/images/services/ectn-document.jpg",
      },
      {
        icon: "package",
        title: "BESC",
        subtitle: "Electronic Cargo Tracking Slip",
        description:
          "The BESC is required by certain African countries for the traceability of goods at destination.",
        image: "/images/services/besc-containers.jpg",
      },
      {
        icon: "compass",
        title: "CTN / BESC",
        subtitle: "Depending on the destination",
        description:
          "Depending on the country, the document may be called CTN or BESC. We help you identify the right procedure for your destination.",
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
    mapValue: "11",
    mapLabel: "African destinations covered",
    footnoteValue: "11",
    footnoteLabel: "African destinations covered",
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
    ],
  },
  why: {
    label: "Why Africa BESC?",
    title: "Your shipping formalities, without",
    titleAccent: "complications.",
    rotatedNote: "Africa, closer",
    securedLabel: "Secure payment by bank card",
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
        description: "Secure payment by bank card.",
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
  footer: {
    tagline: "Your trusted ECTN & BESC partner for Africa.",
    columns: [
      {
        title: "Navigation",
        links: [
          { label: "Home", href: "#accueil" },
          { label: "About", href: "#temoignages" },
          { label: "Services", href: "#services" },
          { label: "Covered countries", href: "#pays-couverts" },
          { label: "FAQ", href: "#faq" },
          { label: "Contact", href: "#contact" },
        ],
      },
      {
        title: "Our services",
        links: [
          { label: "ECTN", href: "#services" },
          { label: "BESC", href: "#services" },
          { label: "CTN", href: "#services" },
          { label: "Document assistance", href: "#services" },
        ],
      },
    ],
    contact: {
      title: "Contact",
      email: "contact@africabesc.com",
      phone: "+229 01 23 45 67",
      lines: ["Cotonou, Benin", "France"],
    },
    legal: "© 2026 Africa BESC. All rights reserved.",
  },
};
