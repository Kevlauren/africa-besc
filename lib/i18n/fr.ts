import type { Dictionary } from "@/lib/types";

export const fr: Dictionary = {
  langLabel: { fr: "FR", en: "EN" },
  nav: {
    menuLabel: "Menu",
    cta: "Obtenir mon ECTN",
    links: [
      { label: "Accueil", href: "#accueil" },
      { label: "Services", href: "#services" },
      { label: "Pays couverts", href: "#pays-couverts" },
      { label: "Comment ça marche", href: "#pourquoi" },
      { label: "À propos", href: "#temoignages" },
      { label: "FAQ", href: "#faq" },
      { label: "Contact", href: "#contact" },
    ],
  },
  hero: {
    chips: ["Traitement rapide", "Assistance personnalisée", "Paiement sécurisé"],
    title: "Obtenez votre ECTN | BESC rapidement et",
    titleAccent: "simplement.",
    subtitle:
      "Nous accompagnons exportateurs, transitaires et entreprises dans l'obtention de leurs certificats ECTN/BESC pour leurs expéditions vers l'Afrique.",
    primaryCta: "Demander mon ECTN",
    secondaryCta: "Découvrir nos services",
    note: "Recevez votre certificat par e-mail ou WhatsApp sous 24 heures suivant le paiement.",
    badgeValue: "24 h",
    badgeLabel: "Délai moyen de délivrance",
    imageLabel: "Port · conteneurs · navire de fret",
    image: "/images/hero/hero-port.jpg",
  },
  stats: [
    { value: "3 320+", label: "Certificats générés" },
    { value: "150+", label: "Clients accompagnés" },
    { value: "11", label: "Destinations couvertes" },
    { value: "7j/7", label: "Assistance" },
  ],
  services: {
    label: "Nos services",
    title: "Simplifiez vos formalités d'expédition vers",
    titleAccent: "l'Afrique",
    subtitle:
      "Africa BESC accompagne les exportateurs, transitaires et entreprises pour des expéditions vers plusieurs destinations africaines.",
    rotatedNote: "Plus qu'un document, un partenaire de confiance",
    learnMore: "En savoir plus",
    items: [
      {
        icon: "file-text",
        title: "ECTN",
        subtitle: "Electronic Cargo Tracking Note",
        description:
          "Document obligatoire dans plusieurs pays d'Afrique permettant le suivi électronique des cargaisons et la sécurisation des marchandises.",
        image: "/images/services/ectn-document.jpg",
      },
      {
        icon: "package",
        title: "BESC",
        subtitle: "Bordereau Électronique de Suivi des Cargaisons",
        description:
          "Le BESC est exigé par certains pays d'Afrique pour la traçabilité des marchandises à destination.",
        image: "/images/services/besc-containers.jpg",
      },
      {
        icon: "compass",
        title: "CTN / BESC",
        subtitle: "Selon la destination",
        description:
          "Selon le pays, le document peut être appelé CTN ou BESC. Nous vous accompagnons pour identifier la bonne procédure en fonction de votre destination.",
        image: "/images/services/ctn-world-map.jpg",
      },
      {
        icon: "clipboard-check",
        title: "Assistance documentaire",
        subtitle: "Un accompagnement de bout en bout",
        description:
          "Notre équipe vérifie vos documents et vous accompagne à chaque étape, pour une expérience simple, rapide et fiable.",
        image: "/images/services/assistance-paperwork.jpg",
      },
    ],
  },
  countries: {
    label: "Pays couverts",
    title: "Une expertise adaptée à chaque",
    titleAccent: "destination",
    subtitle:
      "Les exigences ECTN/BESC peuvent varier selon le pays de destination. Sélectionnez votre destination pour connaître les démarches nécessaires.",
    selectPlaceholder: "Choisir un pays de destination",
    cta: "Voir les pays couverts",
    rotatedNote: "L'Afrique au cœur de nos services",
    mapValue: "11",
    mapLabel: "Destinations africaines couvertes",
    footnoteValue: "11",
    footnoteLabel: "Destinations africaines couvertes",
    list: [
      { name: "Bénin", code: "bj", flag: "🇧🇯" },
      { name: "Togo", code: "tg", flag: "🇹🇬" },
      { name: "Ghana", code: "gh", flag: "🇬🇭" },
      { name: "Nigeria", code: "ng", flag: "🇳🇬" },
      { name: "Sénégal", code: "sn", flag: "🇸🇳" },
      { name: "Guinée", code: "gn", flag: "🇬🇳" },
      { name: "Guinée-Bissau", code: "gw", flag: "🇬🇼" },
      { name: "Burundi", code: "bi", flag: "🇧🇮" },
      { name: "Soudan du Sud", code: "ss", flag: "🇸🇸" },
      { name: "Guinée équatoriale", code: "gq", flag: "🇬🇶" },
      { name: "République centrafricaine", code: "cf", flag: "🇨🇫" },
    ],
  },
  why: {
    label: "Pourquoi Africa BESC ?",
    title: "Vos formalités d'expédition, sans",
    titleAccent: "complications.",
    rotatedNote: "L'Afrique plus proche",
    securedLabel: "Paiement sécurisé par carte bancaire",
    items: [
      {
        icon: "zap",
        title: "Traitement rapide",
        description:
          "Votre demande est prise en charge rapidement par notre équipe.",
      },
      {
        icon: "headset",
        title: "Accompagnement personnalisé",
        description:
          "Un interlocuteur vous accompagne pendant toute la procédure.",
      },
      {
        icon: "globe",
        title: "Expertise multi-pays",
        description:
          "Une connaissance des exigences spécifiques de plusieurs destinations africaines.",
      },
      {
        icon: "shield-check",
        title: "Paiement sécurisé",
        description: "Paiement sécurisé par carte bancaire.",
      },
    ],
  },
  ctaBanner: {
    label: "Votre prochain envoi",
    title: "Votre cargaison est prête à",
    titleAccent: "partir ?",
    subtitle: "Lancez votre demande ECTN/BESC en quelques minutes.",
    primaryCta: "Commencer ma demande",
    secondaryCta: "Contacter un conseiller",
    note: "Une question ? Notre équipe vous répond rapidement.",
    rotatedNote: "Vos projets plus loin avec confiance",
    image: "/images/hero/hero-cargo-ship.jpg",
    imageAlt: "Porte-conteneurs à quai, prêt à appareiller",
  },
  testimonials: {
    label: "Témoignages clients",
    title: "Ils nous font",
    titleAccent: "confiance",
    subtitle:
      "Chaque jour, des entreprises, transitaires et exportateurs nous confient leurs expéditions vers l'Afrique.",
    rotatedNote: "Des partenaires satisfaits, une Afrique plus connectée",
    items: [
      {
        quote:
          "Une procédure claire et un accompagnement très réactif. Nous avons reçu notre certificat rapidement.",
        name: "Abdoulaye K.",
        role: "Transitaire",
        country: "Sénégal",
        initials: "AK",
      },
      {
        quote:
          "Un service fiable et professionnel. L'équipe est disponible et répond rapidement à nos questions. Je recommande vivement.",
        name: "Claudia M.",
        role: "Import-Export",
        country: "Nigeria",
        initials: "CM",
      },
      {
        quote:
          "Grâce à Africa BESC, nous avons obtenu notre ECTN sans stress. Un vrai gain de temps pour nos opérations.",
        name: "David T.",
        role: "Projet Forwarder",
        country: "Bénin",
        initials: "DT",
      },
    ],
  },
  faq: {
    label: "FAQ",
    title: "Questions",
    titleAccent: "fréquentes",
    subtitle:
      "Trouvez rapidement les réponses aux questions les plus courantes sur nos services ECTN/BESC.",
    rotatedNote: "Une question ? Nous sommes là pour vous.",
    items: [
      {
        question: "Qu'est-ce qu'un ECTN/BESC ?",
        answer:
          "L'ECTN (Electronic Cargo Tracking Note) ou BESC (Bordereau Électronique de Suivi des Cargaisons) est un document de suivi électronique exigé par de nombreux pays d'Afrique pour toute cargaison à destination de leurs ports. Il permet aux autorités de contrôler et de tracer les marchandises importées.",
      },
      {
        question: "Dans quels pays est-il obligatoire ?",
        answer:
          "Le document est obligatoire dans une dizaine de pays d'Afrique de l'Ouest et centrale, dont le Bénin, le Togo, le Ghana, le Nigeria, le Sénégal, la Guinée, la Guinée-Bissau, le Burundi, le Soudan du Sud, la Guinée équatoriale et la République centrafricaine.",
      },
      {
        question: "Quels documents dois-je fournir ?",
        answer:
          "Généralement : la facture commerciale, le connaissement (Bill of Lading) ou la lettre de transport, la déclaration d'exportation (EX1) et, selon la destination, le certificat d'origine. Notre équipe vous indique la liste exacte selon votre pays.",
      },
      {
        question: "Combien de temps faut-il pour obtenir mon certificat ?",
        answer:
          "Après réception des documents complets et du paiement, le certificat est généralement délivré sous 24 heures ouvrées. Les délais peuvent varier selon la destination et la disponibilité des autorités locales.",
      },
      {
        question: "Quand dois-je demander mon ECTN ?",
        answer:
          "L'idéal est de lancer la demande dès que le connaissement est émis, et avant l'arrivée du navire au port de déchargement. Certains pays appliquent des pénalités en cas de certificat obtenu après l'arrivée.",
      },
      {
        question: "Puis-je modifier un ECTN après sa création ?",
        answer:
          "Oui. Des corrections sont possibles avant validation finale. Après émission, une demande d'amendement peut être introduite auprès des autorités ; des frais additionnels peuvent s'appliquer selon la destination.",
      },
      {
        question: "Comment effectuer le paiement ?",
        answer:
          "Le paiement s'effectue en ligne par carte bancaire (Visa, Mastercard) de manière sécurisée. Un reçu vous est transmis automatiquement après règlement.",
      },
      {
        question: "Comment vais-je recevoir mon certificat ?",
        answer:
          "Votre certificat vous est envoyé au format PDF par e-mail et, si vous le souhaitez, via WhatsApp, dès sa validation.",
      },
      {
        question: "Que faire si je ne sais pas quel document demander ?",
        answer:
          "Indiquez-nous simplement votre port de départ et votre destination. Nous identifions pour vous le document requis (ECTN, BESC ou CTN) et la procédure applicable.",
      },
    ],
    support: {
      text: "Vous ne trouvez pas la réponse à votre question ? Notre équipe est à votre disposition.",
      cta: "Nous contacter",
    },
  },
  footer: {
    tagline: "Your trusted ECTN & BESC partner for Africa.",
    columns: [
      {
        title: "Navigation",
        links: [
          { label: "Accueil", href: "#accueil" },
          { label: "À propos", href: "#temoignages" },
          { label: "Services", href: "#services" },
          { label: "Pays couverts", href: "#pays-couverts" },
          { label: "FAQ", href: "#faq" },
          { label: "Contact", href: "#contact" },
        ],
      },
      {
        title: "Nos services",
        links: [
          { label: "ECTN", href: "#services" },
          { label: "BESC", href: "#services" },
          { label: "CTN", href: "#services" },
          { label: "Assistance documentaire", href: "#services" },
        ],
      },
    ],
    contact: {
      title: "Contact",
      email: "contact@africabesc.com",
      phone: "+229 01 23 45 67",
      lines: ["Cotonou, Bénin", "France"],
    },
    legal: "© 2026 Africa BESC. Tous droits réservés.",
  },
};
