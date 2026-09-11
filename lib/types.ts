export type Lang = "fr" | "en";

export type IconName =
  | "file-text"
  | "package"
  | "compass"
  | "clipboard-check"
  | "zap"
  | "headset"
  | "globe"
  | "shield-check"
  | "phone"
  | "mail"
  | "map-pin"
  | "arrow-right"
  | "chevron-down"
  | "chevron-left"
  | "chevron-right"
  | "menu"
  | "close"
  | "check"
  | "quote"
  | "linkedin"
  | "facebook"
  | "whatsapp"
  | "clock"
  | "truck"
  | "plane"
  | "ship"
  | "route"
  | "file-check";

export interface NavLink {
  label: string;
  href: string;
}

export interface HeroContent {
  chips: string[];
  title: string;
  titleAccent: string;
  subtitle: string;
  primaryCta: string;
  secondaryCta: string;
  // note: string;
  badgeValue: string;
  badgeLabel: string;
  imageLabel: string;
  image: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface ServiceItem {
  icon: IconName;
  title: string;
  subtitle: string;
  description: string;
  image: string;
}

export interface ServicesContent {
  label: string;
  title: string;
  titleAccent: string;
  subtitle: string;
  rotatedNote: string;
  learnMore: string;
  items: ServiceItem[];
}

export interface CountryItem {
  name: string;
  /** ISO 3166-1 alpha-2 code, used for the flag SVG in /public/images/flags. */
  code: string;
  /** Emoji fallback. */
  flag: string;
}

export interface CountriesContent {
  label: string;
  title: string;
  titleAccent: string;
  subtitle: string;
  selectPlaceholder: string;
  cta: string;
  rotatedNote: string;
  mapValue: string;
  mapLabel: string;
  // footnoteValue: string;
  // footnoteLabel: string;
  list: CountryItem[];
}

export interface FeatureItem {
  icon: IconName;
  title: string;
  description: string;
}

export interface WhyContent {
  label: string;
  title: string;
  titleAccent: string;
  rotatedNote: string;
  securedLabel: string;
  items: FeatureItem[];
}

export interface CtaBannerContent {
  label: string;
  title: string;
  titleAccent: string;
  subtitle: string;
  primaryCta: string;
  secondaryCta: string;
  note: string;
  rotatedNote: string;
  image: string;
  imageAlt: string;
}

export interface TestimonialItem {
  quote: string;
  name: string;
  role: string;
  country: string;
  initials: string;
}

export interface TestimonialsContent {
  label: string;
  title: string;
  titleAccent: string;
  subtitle: string;
  rotatedNote: string;
  items: TestimonialItem[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqContent {
  label: string;
  title: string;
  titleAccent: string;
  subtitle: string;
  rotatedNote: string;
  items: FaqItem[];
  support: {
    text: string;
    cta: string;
  };
}

export interface FooterColumn {
  title: string;
  links: NavLink[];
}

export interface FooterContent {
  tagline: string;
  columns: FooterColumn[];
  contact: {
    title: string;
    email: string;
    phone: string;
    lines: string[];
  };
  legal: string;
}

export interface ContactContent {
  metaTitle: string;
  metaDescription: string;
  label: string;
  title: string;
  titleAccent: string;
  subtitle: string;
  form: {
    lastName: string;
    firstName: string;
    email: string;
    subject: string;
    subjectPlaceholder: string;
    message: string;
    messagePlaceholder: string;
    submit: string;
    sending: string;
    successTitle: string;
    successBody: string;
    another: string;
    errorTitle: string;
    errorBody: string;
    required: string;
    invalidEmail: string;
    consent: string;
  };
  info: {
    title: string;
    intro: string;
    emailLabel: string;
    phoneLabel: string;
    addressLabel: string;
    hoursLabel: string;
    hoursValue: string;
  };
}

export interface QuoteContent {
  navLabel: string;
  metaTitle: string;
  metaDescription: string;
  hero: {
    label: string;
    chips: string[];
    title: string;
    titleAccent: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
    imageAlt: string;
    imageNote: string;
  };
  intro: {
    label: string;
    title: string;
    titleAccent: string;
    body: string[];
    points: string[];
    imageAlt: string;
  };
  coverage: {
    label: string;
    title: string;
    titleAccent: string;
    subtitle: string;
    items: FeatureItem[];
  };
  steps: {
    label: string;
    title: string;
    titleAccent: string;
    items: { title: string; description: string }[];
  };
  cta: {
    label: string;
    title: string;
    titleAccent: string;
    subtitle: string;
    primaryCta: string;
    note: string;
    imageAlt: string;
  };
  form: QuoteFormContent;
}

export interface QuoteFormContent {
  label: string;
  title: string;
  titleAccent: string;
  subtitle: string;
  sections: {
    contact: string;
    route: string;
    cargo: string;
    options: string;
    details: string;
    documents: string;
  };
  fields: {
    firstName: string;
    lastName: string;
    companyName: string;
    email: string;
    phone: string;
    phoneHint: string;
    originCountry: string;
    originCity: string;
    originCityPlaceholder: string;
    destinationCountry: string;
    destinationCity: string;
    destinationCityPlaceholder: string;
    transportMode: string;
    incoterms: string;
    hsCode: string;
    hsCodeHint: string;
    message: string;
    messagePlaceholder: string;
    optionalSuffix: string;
  };
  options: {
    cargoInsurance: string;
    customsClearance: string;
  };
  files: {
    billOfLading: string;
    commercialInvoice: string;
    packingList: string;
    freightInvoice: string;
    freightInvoiceHint: string;
    hint: string;
  };
  selectPlaceholder: string;
  consent: string;
  submit: string;
  sending: string;
  successTitle: string;
  successBody: string;
  another: string;
  errorTitle: string;
  errorBody: string;
  errors: {
    required: string;
    invalidEmail: string;
    fileRequired: string;
    fileTooLarge: string;
    fileType: string;
    totalTooLarge: string;
    consentRequired: string;
  };
}

export interface DemandeContent {
  metaTitle: string;
  metaDescription: string;
  label: string;
  title: string;
  titleAccent: string;
  subtitle: string;
  checklistTitle: string;
  checklist: string[];
  sections: {
    route: string;
    applicant: string;
    shipment: string;
    documents: string;
    signature: string;
  };
  fields: {
    countryOfLoading: string;
    destinationCountry: string;
    destinationHint: string;
    firstName: string;
    lastName: string;
    companyName: string;
    email: string;
    phone: string;
    phoneHint: string;
    blNumber: string;
    blNumberHint: string;
    currency: string;
    freightPayment: string;
    incoterms: string;
    optionalSuffix: string;
  };
  selectPlaceholder: string;
  files: {
    blDocument: string;
    commercialInvoice: string;
    exportDeclaration: string;
    packingList: string;
    freightInvoice: string;
    grayCards: string;
    grayCardsHint: string;
    hint: string;
  };
  signature: {
    label: string;
    hint: string;
    clear: string;
  };
  consent: string;
  submit: string;
  sending: string;
  successTitle: string;
  successBody: string;
  another: string;
  errorTitle: string;
  errorBody: string;
  errors: {
    required: string;
    invalidEmail: string;
    fileRequired: string;
    fileTooLarge: string;
    fileType: string;
    totalTooLarge: string;
    signatureRequired: string;
    consentRequired: string;
  };
}

export interface Dictionary {
  langLabel: Record<Lang, string>;
  nav: {
    links: NavLink[];
    cta: string;
    menuLabel: string;
  };
  hero: HeroContent;
  stats: StatItem[];
  services: ServicesContent;
  countries: CountriesContent;
  why: WhyContent;
  ctaBanner: CtaBannerContent;
  testimonials: TestimonialsContent;
  faq: FaqContent;
  contact: ContactContent;
  quote: QuoteContent;
  demande: DemandeContent;
  footer: FooterContent;
}
