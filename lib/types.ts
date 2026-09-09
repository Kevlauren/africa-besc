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
  | "clock";

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
  note: string;
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
  footnoteValue: string;
  footnoteLabel: string;
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
  footer: FooterContent;
}
