import type { Lang } from "@/lib/types";

/** A selectable option with a stable machine value and a label per language. */
export interface FormOption {
  value: string;
  fr: string;
  en: string;
}

export interface LocalizedOption {
  value: string;
  label: string;
}

/**
 * Countries a shipment can be loaded from. Broad list on purpose: the loading
 * port is rarely one of our covered destinations. Sorted for display in the
 * component via localeCompare, so the source order here does not matter.
 */
export const LOADING_COUNTRIES: FormOption[] = [
  { value: "ZA", fr: "Afrique du Sud", en: "South Africa" },
  { value: "AL", fr: "Albanie", en: "Albania" },
  { value: "DZ", fr: "Algérie", en: "Algeria" },
  { value: "DE", fr: "Allemagne", en: "Germany" },
  { value: "AO", fr: "Angola", en: "Angola" },
  { value: "SA", fr: "Arabie saoudite", en: "Saudi Arabia" },
  { value: "AR", fr: "Argentine", en: "Argentina" },
  { value: "AU", fr: "Australie", en: "Australia" },
  { value: "AT", fr: "Autriche", en: "Austria" },
  { value: "BH", fr: "Bahreïn", en: "Bahrain" },
  { value: "BD", fr: "Bangladesh", en: "Bangladesh" },
  { value: "BE", fr: "Belgique", en: "Belgium" },
  { value: "BJ", fr: "Bénin", en: "Benin" },
  { value: "BY", fr: "Bélarus", en: "Belarus" },
  { value: "BO", fr: "Bolivie", en: "Bolivia" },
  { value: "BA", fr: "Bosnie-Herzégovine", en: "Bosnia and Herzegovina" },
  { value: "BW", fr: "Botswana", en: "Botswana" },
  { value: "BR", fr: "Brésil", en: "Brazil" },
  { value: "BG", fr: "Bulgarie", en: "Bulgaria" },
  { value: "BF", fr: "Burkina Faso", en: "Burkina Faso" },
  { value: "BI", fr: "Burundi", en: "Burundi" },
  { value: "KH", fr: "Cambodge", en: "Cambodia" },
  { value: "CM", fr: "Cameroun", en: "Cameroon" },
  { value: "CA", fr: "Canada", en: "Canada" },
  { value: "CV", fr: "Cap-Vert", en: "Cape Verde" },
  { value: "CF", fr: "République centrafricaine", en: "Central African Republic" },
  { value: "CL", fr: "Chili", en: "Chile" },
  { value: "CN", fr: "Chine", en: "China" },
  { value: "CY", fr: "Chypre", en: "Cyprus" },
  { value: "CO", fr: "Colombie", en: "Colombia" },
  { value: "KM", fr: "Comores", en: "Comoros" },
  { value: "CG", fr: "Congo", en: "Congo" },
  { value: "CD", fr: "République démocratique du Congo", en: "DR Congo" },
  { value: "KR", fr: "Corée du Sud", en: "South Korea" },
  { value: "CR", fr: "Costa Rica", en: "Costa Rica" },
  { value: "CI", fr: "Côte d'Ivoire", en: "Côte d'Ivoire" },
  { value: "HR", fr: "Croatie", en: "Croatia" },
  { value: "CU", fr: "Cuba", en: "Cuba" },
  { value: "DK", fr: "Danemark", en: "Denmark" },
  { value: "DJ", fr: "Djibouti", en: "Djibouti" },
  { value: "DO", fr: "République dominicaine", en: "Dominican Republic" },
  { value: "EG", fr: "Égypte", en: "Egypt" },
  { value: "AE", fr: "Émirats arabes unis", en: "United Arab Emirates" },
  { value: "EC", fr: "Équateur", en: "Ecuador" },
  { value: "ER", fr: "Érythrée", en: "Eritrea" },
  { value: "ES", fr: "Espagne", en: "Spain" },
  { value: "EE", fr: "Estonie", en: "Estonia" },
  { value: "SZ", fr: "Eswatini", en: "Eswatini" },
  { value: "US", fr: "États-Unis", en: "United States" },
  { value: "ET", fr: "Éthiopie", en: "Ethiopia" },
  { value: "FJ", fr: "Fidji", en: "Fiji" },
  { value: "FI", fr: "Finlande", en: "Finland" },
  { value: "FR", fr: "France", en: "France" },
  { value: "GA", fr: "Gabon", en: "Gabon" },
  { value: "GM", fr: "Gambie", en: "Gambia" },
  { value: "GH", fr: "Ghana", en: "Ghana" },
  { value: "GR", fr: "Grèce", en: "Greece" },
  { value: "GT", fr: "Guatemala", en: "Guatemala" },
  { value: "GN", fr: "Guinée", en: "Guinea" },
  { value: "GQ", fr: "Guinée équatoriale", en: "Equatorial Guinea" },
  { value: "GW", fr: "Guinée-Bissau", en: "Guinea-Bissau" },
  { value: "HN", fr: "Honduras", en: "Honduras" },
  { value: "HK", fr: "Hong Kong", en: "Hong Kong" },
  { value: "HU", fr: "Hongrie", en: "Hungary" },
  { value: "IN", fr: "Inde", en: "India" },
  { value: "ID", fr: "Indonésie", en: "Indonesia" },
  { value: "IQ", fr: "Irak", en: "Iraq" },
  { value: "IR", fr: "Iran", en: "Iran" },
  { value: "IE", fr: "Irlande", en: "Ireland" },
  { value: "IS", fr: "Islande", en: "Iceland" },
  { value: "IL", fr: "Israël", en: "Israel" },
  { value: "IT", fr: "Italie", en: "Italy" },
  { value: "JM", fr: "Jamaïque", en: "Jamaica" },
  { value: "JP", fr: "Japon", en: "Japan" },
  { value: "JO", fr: "Jordanie", en: "Jordan" },
  { value: "KZ", fr: "Kazakhstan", en: "Kazakhstan" },
  { value: "KE", fr: "Kenya", en: "Kenya" },
  { value: "KW", fr: "Koweït", en: "Kuwait" },
  { value: "LV", fr: "Lettonie", en: "Latvia" },
  { value: "LB", fr: "Liban", en: "Lebanon" },
  { value: "LR", fr: "Libéria", en: "Liberia" },
  { value: "LY", fr: "Libye", en: "Libya" },
  { value: "LT", fr: "Lituanie", en: "Lithuania" },
  { value: "LU", fr: "Luxembourg", en: "Luxembourg" },
  { value: "MK", fr: "Macédoine du Nord", en: "North Macedonia" },
  { value: "MG", fr: "Madagascar", en: "Madagascar" },
  { value: "MY", fr: "Malaisie", en: "Malaysia" },
  { value: "MW", fr: "Malawi", en: "Malawi" },
  { value: "MV", fr: "Maldives", en: "Maldives" },
  { value: "ML", fr: "Mali", en: "Mali" },
  { value: "MT", fr: "Malte", en: "Malta" },
  { value: "MA", fr: "Maroc", en: "Morocco" },
  { value: "MR", fr: "Mauritanie", en: "Mauritania" },
  { value: "MU", fr: "Maurice", en: "Mauritius" },
  { value: "MX", fr: "Mexique", en: "Mexico" },
  { value: "MD", fr: "Moldavie", en: "Moldova" },
  { value: "MN", fr: "Mongolie", en: "Mongolia" },
  { value: "ME", fr: "Monténégro", en: "Montenegro" },
  { value: "MZ", fr: "Mozambique", en: "Mozambique" },
  { value: "MM", fr: "Myanmar", en: "Myanmar" },
  { value: "NA", fr: "Namibie", en: "Namibia" },
  { value: "NP", fr: "Népal", en: "Nepal" },
  { value: "NI", fr: "Nicaragua", en: "Nicaragua" },
  { value: "NE", fr: "Niger", en: "Niger" },
  { value: "NG", fr: "Nigeria", en: "Nigeria" },
  { value: "NO", fr: "Norvège", en: "Norway" },
  { value: "NZ", fr: "Nouvelle-Zélande", en: "New Zealand" },
  { value: "OM", fr: "Oman", en: "Oman" },
  { value: "UG", fr: "Ouganda", en: "Uganda" },
  { value: "UZ", fr: "Ouzbékistan", en: "Uzbekistan" },
  { value: "PK", fr: "Pakistan", en: "Pakistan" },
  { value: "PA", fr: "Panama", en: "Panama" },
  { value: "PG", fr: "Papouasie-Nouvelle-Guinée", en: "Papua New Guinea" },
  { value: "PY", fr: "Paraguay", en: "Paraguay" },
  { value: "NL", fr: "Pays-Bas", en: "Netherlands" },
  { value: "PE", fr: "Pérou", en: "Peru" },
  { value: "PH", fr: "Philippines", en: "Philippines" },
  { value: "PL", fr: "Pologne", en: "Poland" },
  { value: "PT", fr: "Portugal", en: "Portugal" },
  { value: "QA", fr: "Qatar", en: "Qatar" },
  { value: "RO", fr: "Roumanie", en: "Romania" },
  { value: "GB", fr: "Royaume-Uni", en: "United Kingdom" },
  { value: "RU", fr: "Russie", en: "Russia" },
  { value: "RW", fr: "Rwanda", en: "Rwanda" },
  { value: "ST", fr: "Sao Tomé-et-Principe", en: "Sao Tome and Principe" },
  { value: "SN", fr: "Sénégal", en: "Senegal" },
  { value: "RS", fr: "Serbie", en: "Serbia" },
  { value: "SC", fr: "Seychelles", en: "Seychelles" },
  { value: "SL", fr: "Sierra Leone", en: "Sierra Leone" },
  { value: "SG", fr: "Singapour", en: "Singapore" },
  { value: "SK", fr: "Slovaquie", en: "Slovakia" },
  { value: "SI", fr: "Slovénie", en: "Slovenia" },
  { value: "SO", fr: "Somalie", en: "Somalia" },
  { value: "SD", fr: "Soudan", en: "Sudan" },
  { value: "SS", fr: "Soudan du Sud", en: "South Sudan" },
  { value: "LK", fr: "Sri Lanka", en: "Sri Lanka" },
  { value: "SE", fr: "Suède", en: "Sweden" },
  { value: "CH", fr: "Suisse", en: "Switzerland" },
  { value: "SY", fr: "Syrie", en: "Syria" },
  { value: "TW", fr: "Taïwan", en: "Taiwan" },
  { value: "TZ", fr: "Tanzanie", en: "Tanzania" },
  { value: "TD", fr: "Tchad", en: "Chad" },
  { value: "CZ", fr: "Tchéquie", en: "Czechia" },
  { value: "TH", fr: "Thaïlande", en: "Thailand" },
  { value: "TG", fr: "Togo", en: "Togo" },
  { value: "TT", fr: "Trinité-et-Tobago", en: "Trinidad and Tobago" },
  { value: "TN", fr: "Tunisie", en: "Tunisia" },
  { value: "TR", fr: "Turquie", en: "Türkiye" },
  { value: "UA", fr: "Ukraine", en: "Ukraine" },
  { value: "UY", fr: "Uruguay", en: "Uruguay" },
  { value: "VE", fr: "Venezuela", en: "Venezuela" },
  { value: "VN", fr: "Viêt Nam", en: "Vietnam" },
  { value: "YE", fr: "Yémen", en: "Yemen" },
  { value: "ZM", fr: "Zambie", en: "Zambia" },
  { value: "ZW", fr: "Zimbabwe", en: "Zimbabwe" },
  { value: "OTHER", fr: "Autre pays", en: "Other country" },
];

/** Destinations Africa BESC covers. Mirrors countries.list in the dictionaries. */
export const DESTINATION_COUNTRIES: FormOption[] = [
  { value: "BJ", fr: "Bénin", en: "Benin" },
  { value: "TG", fr: "Togo", en: "Togo" },
  { value: "GH", fr: "Ghana", en: "Ghana" },
  { value: "NG", fr: "Nigeria", en: "Nigeria" },
  { value: "SN", fr: "Sénégal", en: "Senegal" },
  { value: "GN", fr: "Guinée", en: "Guinea" },
  { value: "GW", fr: "Guinée-Bissau", en: "Guinea-Bissau" },
  { value: "BI", fr: "Burundi", en: "Burundi" },
  { value: "SS", fr: "Soudan du Sud", en: "South Sudan" },
  { value: "GQ", fr: "Guinée équatoriale", en: "Equatorial Guinea" },
  { value: "CF", fr: "République centrafricaine", en: "Central African Republic" },
  { value: "NE", fr: "Niger", en: "Niger" },
  { value: "BF", fr: "Burkina Faso", en: "Burkina Faso" },
  { value: "ML", fr: "Mali", en: "Mali" },
];

export const CURRENCIES: FormOption[] = [
  { value: "USD", fr: "USD (dollar américain)", en: "USD (US dollar)" },
  { value: "EUR", fr: "EUR (euro)", en: "EUR (euro)" },
  { value: "GBP", fr: "GBP (livre sterling)", en: "GBP (pound sterling)" },
  { value: "XOF", fr: "XOF (franc CFA BCEAO)", en: "XOF (CFA franc BCEAO)" },
  { value: "XAF", fr: "XAF (franc CFA BEAC)", en: "XAF (CFA franc BEAC)" },
  { value: "CNY", fr: "CNY (yuan renminbi)", en: "CNY (yuan renminbi)" },
  { value: "JPY", fr: "JPY (yen)", en: "JPY (yen)" },
  { value: "CHF", fr: "CHF (franc suisse)", en: "CHF (Swiss franc)" },
  { value: "CAD", fr: "CAD (dollar canadien)", en: "CAD (Canadian dollar)" },
  { value: "AED", fr: "AED (dirham des Émirats)", en: "AED (UAE dirham)" },
  { value: "SAR", fr: "SAR (riyal saoudien)", en: "SAR (Saudi riyal)" },
  { value: "INR", fr: "INR (roupie indienne)", en: "INR (Indian rupee)" },
  { value: "TRY", fr: "TRY (livre turque)", en: "TRY (Turkish lira)" },
  { value: "MAD", fr: "MAD (dirham marocain)", en: "MAD (Moroccan dirham)" },
  { value: "EGP", fr: "EGP (livre égyptienne)", en: "EGP (Egyptian pound)" },
  { value: "ZAR", fr: "ZAR (rand sud-africain)", en: "ZAR (South African rand)" },
  { value: "NGN", fr: "NGN (naira)", en: "NGN (Nigerian naira)" },
  { value: "GHS", fr: "GHS (cedi ghanéen)", en: "GHS (Ghanaian cedi)" },
  { value: "OTHER", fr: "Autre devise", en: "Other currency" },
];

export const FREIGHT_PAYMENT_TYPES: FormOption[] = [
  {
    value: "prepaid",
    fr: "Prépayé (Prepaid)",
    en: "Prepaid",
  },
  {
    value: "freight_collect",
    fr: "Fret payable à destination (Freight collect)",
    en: "Freight collect",
  },
  {
    value: "as_per_charter_party",
    fr: "Selon la charte-partie (As per charter party)",
    en: "As per charter party",
  },
  {
    value: "free_of_freight",
    fr: "Exempt de fret (Free of freight)",
    en: "Free of freight",
  },
];

/** Transport modes for an import transit quote. */
export const TRANSPORT_MODES: FormOption[] = [
  { value: "sea_fcl", fr: "Maritime FCL (conteneur complet)", en: "Ocean FCL (full container)" },
  { value: "sea_lcl", fr: "Maritime LCL (groupage)", en: "Ocean LCL (groupage)" },
  { value: "air", fr: "Aérien", en: "Air" },
  { value: "road", fr: "Routier", en: "Road" },
  { value: "multimodal", fr: "Multimodal", en: "Multimodal" },
  { value: "advise", fr: "À conseiller selon mon besoin", en: "Recommend the best option" },
];

/** Container types, for FCL quotes. */
export const CONTAINER_TYPES: FormOption[] = [
  { value: "20dv", fr: "20' standard", en: "20' standard" },
  { value: "40dv", fr: "40' standard", en: "40' standard" },
  { value: "40hc", fr: "40' High Cube", en: "40' High Cube" },
  { value: "20rf", fr: "20' frigorifique", en: "20' reefer" },
  { value: "40rf", fr: "40' frigorifique", en: "40' reefer" },
  { value: "other", fr: "Autre ou plusieurs types", en: "Other or several types" },
];

/** Incoterms 2020. */
export const INCOTERMS: FormOption[] = [
  { value: "EXW", fr: "EXW (à l'usine)", en: "EXW (Ex Works)" },
  { value: "FCA", fr: "FCA (franco transporteur)", en: "FCA (Free Carrier)" },
  { value: "FAS", fr: "FAS (franco le long du navire)", en: "FAS (Free Alongside Ship)" },
  { value: "FOB", fr: "FOB (franco à bord)", en: "FOB (Free On Board)" },
  { value: "CFR", fr: "CFR (coût et fret)", en: "CFR (Cost and Freight)" },
  { value: "CIF", fr: "CIF (coût, assurance, fret)", en: "CIF (Cost, Insurance and Freight)" },
  { value: "CPT", fr: "CPT (port payé jusqu'à)", en: "CPT (Carriage Paid To)" },
  { value: "CIP", fr: "CIP (port payé, assurance comprise)", en: "CIP (Carriage and Insurance Paid To)" },
  { value: "DAP", fr: "DAP (rendu au lieu de destination)", en: "DAP (Delivered At Place)" },
  { value: "DPU", fr: "DPU (rendu au lieu déchargé)", en: "DPU (Delivered At Place Unloaded)" },
  { value: "DDP", fr: "DDP (rendu droits acquittés)", en: "DDP (Delivered Duty Paid)" },
];

/** Localize + sort options for a native <select>. */
export function localizeOptions(
  options: FormOption[],
  lang: Lang,
  { sort = false }: { sort?: boolean } = {},
): LocalizedOption[] {
  const mapped = options.map((o) => ({ value: o.value, label: o[lang] }));
  if (sort) {
    mapped.sort((a, b) => a.label.localeCompare(b.label, lang));
  }
  return mapped;
}

/** Resolve a stored value back to a human label, for the notification e-mail. */
export function labelFor(
  options: FormOption[],
  value: string,
  lang: Lang,
): string {
  return options.find((o) => o.value === value)?.[lang] ?? value;
}

export function isValidOption(options: FormOption[], value: string): boolean {
  return options.some((o) => o.value === value);
}
