import type { Dictionary } from "@/lib/types";

export const fr: Dictionary = {
  langLabel: { fr: "FR", en: "EN" },
  nav: {
    menuLabel: "Menu",
    cta: "Obtenir mon ECTN",
    links: [
      { label: "Accueil", href: "/" },
      { label: "Services", href: "/#services" },
      { label: "Devis transit", href: "/cotation" },
      // { label: "Pays couverts", href: "/#pays-couverts" },
      { label: "Comment ça marche", href: "/#pourquoi" },
      // { label: "À propos", href: "/#temoignages" },
      { label: "FAQ", href: "/#faq" },
      { label: "Contact", href: "/contact" },
    ],
  },
  hero: {
    chips: ["Traitement rapide", "Assistance personnalisée", "Paiement sécurisé"],
    title: "Plus de 12 ans d'expertise au service de vos",
    titleAccent: "formalités ECTN / BESC.",
    subtitle:
      "Africa BESC accompagne les exportateurs, transitaires et entreprises dans l’obtention de leurs certificats ECTN/BESC. Forts de plus de 12 ans d’expérience, nous assurons un suivi rigoureux et réactif pour garantir la conformité de vos expéditions et l’obtention rapide de vos certificats.",
    primaryCta: "Soumettre ma demande ECTN / BESC",
    secondaryCta: "Découvrir nos autres services",
    // note: "Recevez votre certificat par e-mail ou WhatsApp sous 24 heures suivant le paiement.",
    badgeValue: "Entre 24 et 72 h",
    badgeLabel: "Délai moyen de délivrance",
    imageLabel: "Port · conteneurs · navire de fret",
    image: "/images/hero/hero-port.jpg",
  },
  stats: [
    { value: "3 320+", label: "Certificats générés" },
    { value: "150+", label: "Clients accompagnés" },
    { value: "14", label: "Destinations couvertes" },
    { value: "7j/7", label: "Assistance" },
  ],
  services: {
    label: "Nos services",
    title: "Simplifiez vos formalités d'expédition vers",
    titleAccent: "l'Afrique",
    subtitle:
      "Africa BESC accompagne les exportateurs, transitaires et entreprises pour l'obtention de leur certificat BESC/ECTN et pour les formalités de transit vers plusieurs destinations africaines.",
    rotatedNote: "",
    learnMore: "En savoir plus",
    items: [
      {
        icon: "file-text",
        title: "ECTN/BESC",
        subtitle: "Pour la conformité de vos expéditions",
        description:
          "Document obligatoire pour de nombreuses destinations africaines, l'ECTN/BESC permet d'assurer la traçabilité des marchandises et la conformité de vos expéditions. Nous prenons en charge l'ensemble des démarches nécessaires à son obtention dans les meilleurs délais.",
        image: "/images/services/ectn-document.jpg",
      },
      {
        icon: "compass",
        title: "Pays couverts",
        subtitle: "UNE EXPERTISE MULTI-DESTINATIONS",
        description:
          "Les exigences varient selon les pays de destination. Notre équipe vous accompagne dans l'identification des documents requis et vous oriente vers la procédure adaptée afin de garantir la conformité de votre expédition.",
        image: "/images/services/ctn-world-map.jpg",
      },
      {
        icon: "package",
        title: "Formalités de transit",
        subtitle: "IMPORTATION ET EXPORTATION EN TOUTE SÉRÉNITÉ",
        description:
          "Au-delà de l'obtention de votre ECTN/BESC, nous vous accompagnons dans la gestion de vos formalités d'importation et d'exportation : dédouanement, suivi documentaire et coordination des opérations jusqu'à la destination finale de vos marchandises.",
        image: "/images/services/besc-containers.jpg",
      },
      {
        icon: "clipboard-check",
        title: "Assistance documentaire",
        subtitle: "Un accompagnement de bout en bout",
        description:
          "Notre équipe vérifie la conformité de vos documents et vous assiste à chaque étape de votre dossier afin de garantir un traitement fluide, rapide et sécurisé de vos formalités.",
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
    rotatedNote: "",
    mapValue: "14",
    mapLabel: "Destinations africaines couvertes",
    // footnoteValue: "11",
    // footnoteLabel: "Destinations africaines couvertes",
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
      { name: "Niger", code: "ne", flag: "🇳🇪" },
      { name: "Burkina Faso", code: "bf", flag: "🇧🇫" },
      { name: "Mali", code: "ml", flag: "🇲🇱" },
    ],
  },
  why: {
    label: "Pourquoi Africa BESC ?",
    title: "Vos formalités d'expédition, sans",
    titleAccent: "complications.",
    rotatedNote: "",
    securedLabel: "Carte bancaire, virement bancaire ou FedaPay",
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
        description:
          "Réglez par carte bancaire, virement bancaire ou FedaPay, en toute sécurité.",
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
    rotatedNote: "",
    image: "/images/hero/hero-cargo-ship.jpg",
    imageAlt: "Porte-conteneurs à quai, prêt à appareiller",
  },
  testimonials: {
    label: "Témoignages clients",
    title: "Ils nous font",
    titleAccent: "confiance",
    subtitle:
      "Chaque jour, des entreprises, transitaires et exportateurs nous confient leurs expéditions vers l'Afrique.",
    rotatedNote: "",
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
    rotatedNote: "",
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
  contact: {
    metaTitle: "Contact",
    metaDescription:
      "Contactez l'équipe Africa BESC pour vos formalités ECTN / BESC / CTN. Réponse sous 24 h ouvrées.",
    label: "Contact",
    title: "Parlons de votre",
    titleAccent: "expédition",
    subtitle:
      "Une question sur l'ECTN / BESC ou le CTN, un devis, un dossier en cours, une assitance pour vos transits ? Écrivez-nous : notre équipe vous répond en moins de 30 minutes.",
    form: {
      lastName: "Nom",
      firstName: "Prénoms",
      email: "E-mail",
      subject: "Sujet",
      subjectPlaceholder: "Ex. Demande d'ECTN pour le Bénin",
      message: "Message",
      messagePlaceholder:
        "Décrivez votre besoin : port de départ, destination, type de marchandise…",
      submit: "Envoyer le message",
      sending: "Envoi en cours…",
      successTitle: "Message envoyé",
      successBody:
        "Merci ! Votre message a bien été transmis. Notre équipe vous répond sous 24 h ouvrées.",
      another: "Envoyer un autre message",
      errorTitle: "L'envoi a échoué",
      errorBody:
        "Un problème est survenu. Réessayez dans un instant ou écrivez-nous directement à ",
      required: "Ce champ est requis.",
      invalidEmail: "Saisissez une adresse e-mail valide.",
      consent:
        "En envoyant ce formulaire, vous acceptez que vos informations soient utilisées pour traiter votre demande.",
    },
    info: {
      title: "Nos coordonnées",
      intro:
        "Vous pouvez aussi nous joindre directement par ces canaux.",
      emailLabel: "E-mail",
      phoneLabel: "Téléphone",
      addressLabel: "Adresse",
      hoursLabel: "Disponibilité",
      hoursValue: "7j/7, réponse sous 24 h ouvrées",
    },
  },
  quote: {
    navLabel: "Cotation transit",
    metaTitle: "Demande de cotation transit",
    metaDescription:
      "Obtenez une cotation de transit pour vos importations vers l'Afrique : maritime, aérien, routier et dédouanement. Réponse détaillée sous 24 à 48 h.",
    hero: {
      label: "Cotation de transit",
      chips: ["Réponse rapide", "Accompagnement personnalisé", "Service fiable"],
      title: "Une prise en charge complète de",
      titleAccent: "vos formalités de transit.",
      subtitle:
        "Simplifiez vos opérations d’import-export grâce à une estimation claire des coûts et un accompagnement complet dans vos démarches administratives, douanières et logistiques jusqu’à la destination finale.",
      primaryCta: "Demander un devis pour mes formalités import-export",
      secondaryCta: "Parler à un conseiller",
      imageAlt:
        "Terminal portuaire : porte-conteneurs, grues et agent de transit sur le quai",
      imageNote: "",
    },
    intro: {
      label: "Le service",
      title: "Un seul interlocuteur pour tout votre",
      titleAccent: "transit import",
      body: [
        "De l'enlèvement chez votre fournisseur à la livraison de vos marchandises, nous prenons en charge chaque maillon de la chaîne : réservation du fret, suivi documentaire, formalités douanières et acheminement final.",
        "Vous remplissez une seule demande. Nous revenons vers vous avec une cotation lisible, ligne par ligne, et un délai d'acheminement estimé.",
      ],
      points: [
        "Fret maritime (FCL / LCL), aérien et routier",
        "Assurance cargo et emballage sur demande",
        "Déclaration en douane import et export",
        "Pré-acheminement et livraison finale",
        "ECTN / BESC / CTN intégrés au dossier",
      ],
      imageAlt: "Opérateur logistique vérifiant un dossier de transit",
    },
    coverage: {
      label: "Modes couverts",
      title: "Le bon mode pour chaque",
      titleAccent: "cargaison",
      subtitle:
        "Nous comparons les options et vous recommandons la combinaison la plus adaptée à votre budget et à vos délais.",
      items: [
        {
          icon: "ship",
          title: "Maritime",
          description:
            "Conteneur complet (FCL) ou groupage (LCL) au départ des principaux ports, avec suivi jusqu'au déchargement.",
        },
        {
          icon: "plane",
          title: "Aérien",
          description:
            "Pour les envois urgents ou à forte valeur : réservation, manutention et documentation aérienne.",
        },
        {
          icon: "truck",
          title: "Routier",
          description:
            "Pré- et post-acheminement, transport régional et livraison finale jusqu'à votre site.",
        },
        {
          icon: "file-check",
          title: "Dédouanement",
          description:
            "Classification tarifaire, déclaration import/export et gestion des documents réglementaires.",
        },
      ],
    },
    steps: {
      label: "Comment ça marche",
      title: "De la demande à la",
      titleAccent: "livraison",
      items: [
        {
          title: "Décrivez votre besoin",
          description:
            "Remplissez le formulaire : origine, destination, nature et volume de la marchandise, incoterm souhaité.",
        },
        {
          title: "Recevez votre cotation",
          description:
            "Sous 24 à 48 h, une cotation détaillée avec le coût de chaque poste et le délai d'acheminement estimé.",
        },
        {
          title: "Validez le dossier",
          description:
            "Vous confirmez la cotation ; nous ouvrons le dossier de transit et réservons le fret.",
        },
        {
          title: "On gère le transit",
          description:
            "Suivi documentaire, douane et acheminement jusqu'à la livraison finale, avec un point de contact unique.",
        },
      ],
    },
    cta: {
      label: "Prêt à importer ?",
      title: "Lancez votre demande de",
      titleAccent: "cotation",
      subtitle:
        "Un formulaire, une réponse chiffrée. Aucune obligation d'engagement.",
      primaryCta: "Obtenir une cotation",
      note: "Formulaire sécurisé, hébergé sur notre plateforme.",
      imageAlt: "Conteneurs empilés dans un terminal, prêts à l'expédition",
    },
    form: {
      label: "Demande de cotation",
      title: "Obtenez votre cotation",
      titleAccent: "pour les formalités au port d'arrivée.",
      subtitle:
        "Indiquez le port de destination et les spécificités de votre cargaison pour recevoir une estimation approximative sous 24 à 48 heures.",
      sections: {
        contact: "Vos coordonnées",
        route: "Origine et destination",
        cargo: "Marchandise et transport",
        options: "Prestations complémentaires",
        details: "Précisions",
        documents: "Documents obligatoires",
      },
      fields: {
        firstName: "Prénom",
        lastName: "Nom",
        companyName: "Société",
        email: "E-mail",
        phone: "Téléphone ou WhatsApp",
        phoneHint: "Avec l'indicatif pays.",
        originCountry: "Pays d'origine",
        originCity: "Port ou ville de départ",
        originCityPlaceholder: "Ex. Shanghai, Anvers, Jebel Ali",
        destinationCountry: "Pays de destination",
        destinationCity: "Port ou ville de livraison",
        destinationCityPlaceholder: "Ex. Cotonou, Lomé, Bamako",
        transportMode: "Mode de transport souhaité",
        incoterms: "Incoterms",
        hsCode: "Code SH / HS Code (position tarifaire)",
        hsCodeHint:
          "Code douanier à 6, 8 ou 10 chiffres : il détermine la taxation, la réglementation et les droits de douane applicables.",
        message: "Informations complémentaires",
        messagePlaceholder:
          "Contraintes de délai, marchandise dangereuse, nombre de colis, etc.",
        optionalSuffix: "(facultatif)",
      },
      options: {
        cargoInsurance: "Je souhaite une assurance cargo",
        customsClearance: "Je souhaite le dédouanement à l'arrivée",
      },
      files: {
        billOfLading: "Connaissement maritime (Bill of Lading)",
        commercialInvoice: "Facture commerciale finale",
        packingList: "Liste de colisage (Packing List)",
        freightInvoice: "Facture de fret",
        freightInvoiceHint:
          "Si le fret n'est pas inclus dans la facture commerciale (vente FOB).",
        hint: "PDF, JPG, PNG ou WEBP. 5 Mo maximum par fichier.",
      },
      selectPlaceholder: "Sélectionner…",
      consent:
        "J'autorise Africa BESC à utiliser ces informations pour établir ma cotation de transit.",
      submit: "Demander ma cotation",
      sending: "Envoi en cours…",
      successTitle: "Demande envoyée",
      successBody:
        "Merci ! Votre demande de cotation a bien été transmise. Notre équipe revient vers vous sous 24 à 48 heures.",
      another: "Envoyer une autre demande",
      errorTitle: "L'envoi a échoué",
      errorBody:
        "Un problème est survenu. Réessayez dans un instant ou écrivez-nous directement à",
      errors: {
        required: "Ce champ est requis.",
        invalidEmail: "Saisissez une adresse e-mail valide.",
        fileRequired: "Ce document est requis.",
        fileTooLarge: "Fichier trop volumineux (5 Mo maximum par fichier).",
        fileType: "Format non accepté : utilisez un PDF ou une image.",
        totalTooLarge: "Le poids total des documents dépasse 15 Mo.",
        consentRequired: "Vous devez cocher cette case pour continuer.",
      },
    },
  },
  demande: {
    metaTitle: "Demande d'ECTN / BESC",
    metaDescription:
      "Déposez votre demande d'ECTN / BESC en ligne : trajet de la cargaison, informations sur l'expédition et documents à joindre. Traitement sous 24 à 72 h.",
    label: "Demande en ligne",
    title: "Votre demande d'ECTN / BESC,",
    titleAccent: "en une seule étape.",
    subtitle:
      "Renseignez le trajet de votre cargaison, les détails de l'expédition et joignez vos documents. Notre équipe traite votre dossier et revient vers vous sous 24 à 72 heures.",
    checklistTitle: "À préparer avant de commencer",
    checklist: [
      "Le connaissement (Bill of Lading) et son numéro",
      "La facture commerciale des marchandises",
      "La déclaration d'exportation",
      "La liste de colisage (packing list)",
      "La facture de fret",
      "Les cartes grises si l'envoi contient des véhicules",
    ],
    sections: {
      route: "Trajet de la cargaison",
      applicant: "Demandeur",
      shipment: "Détails de l'expédition",
      documents: "Documents à joindre",
      signature: "Signature et engagement",
    },
    fields: {
      countryOfLoading: "Pays de chargement",
      destinationCountry: "Pays de destination",
      destinationHint:
        "Le pays de destination peut aussi être une escale de transit du navire.",
      firstName: "Prénom",
      lastName: "Nom",
      companyName: "Société",
      email: "E-mail",
      phone: "Téléphone ou WhatsApp",
      phoneHint: "Indiquez un numéro valide, avec l'indicatif pays.",
      blNumber: "Numéro de connaissement (BL)",
      blNumberHint: "Tel qu'il figure sur le Bill of Lading.",
      currency: "Devise des marchandises",
      freightPayment: "Type de paiement du fret",
      incoterms: "Incoterms",
      optionalSuffix: "(facultatif)",
    },
    selectPlaceholder: "Sélectionner…",
    files: {
      blDocument: "Connaissement (Bill of Lading)",
      commercialInvoice: "Facture commerciale des marchandises",
      exportDeclaration: "Déclaration d'exportation",
      packingList: "Liste de colisage",
      freightInvoice: "Facture de fret",
      grayCards: "Cartes grises des véhicules",
      grayCardsHint: "À joindre si votre envoi contient des véhicules.",
      hint: "Formats acceptés : PDF, JPG, PNG ou WEBP. 5 Mo maximum par fichier, 12 Mo au total.",
    },
    signature: {
      label: "Signez dans le cadre ci-dessous",
      hint: "Utilisez la souris ou le doigt pour signer.",
      clear: "Effacer",
    },
    consent:
      "Je certifie l'exactitude des informations et des documents fournis, et j'autorise Africa BESC à les utiliser pour traiter ma demande d'ECTN / BESC.",
    submit: "Envoyer ma demande",
    sending: "Envoi en cours…",
    successTitle: "Demande envoyée",
    successBody:
      "Merci ! Votre demande d'ECTN / BESC et vos documents ont bien été transmis. Notre équipe revient vers vous sous 24 à 72 heures.",
    another: "Envoyer une autre demande",
    errorTitle: "L'envoi a échoué",
    errorBody:
      "Un problème est survenu. Réessayez dans un instant ou écrivez-nous directement à",
    errors: {
      required: "Ce champ est requis.",
      invalidEmail: "Saisissez une adresse e-mail valide.",
      fileRequired: "Ce document est requis.",
      fileTooLarge: "Fichier trop volumineux (5 Mo maximum par document).",
      fileType: "Format non accepté : utilisez un PDF ou une image.",
      totalTooLarge: "Le poids total des documents dépasse 12 Mo.",
      signatureRequired: "Votre signature est requise.",
      consentRequired: "Vous devez cocher cette case pour continuer.",
    },
  },
  footer: {
    tagline: "Your trusted ECTN & BESC partner for Africa.",
    columns: [
      {
        title: "Navigation",
        links: [
          { label: "Accueil", href: "/#accueil" },
          { label: "À propos", href: "/#temoignages" },
          { label: "Services", href: "/#services" },
          { label: "Pays couverts", href: "/#pays-couverts" },
          { label: "FAQ", href: "/#faq" },
          { label: "Contact", href: "/contact" },
        ],
      },
      {
        title: "Nos services",
        links: [
          { label: "Demande ECTN/BESC", href: "/demande" },
          { label: "ECTN", href: "/#services" },
          { label: "BESC", href: "/#services" },
          { label: "CTN", href: "/#services" },
          { label: "Assistance documentaire", href: "/#services" },
          { label: "Cotation transit", href: "/cotation" },
        ],
      },
    ],
    contact: {
       title: "Contact",
      email: "info@beninbesc.com",
      phone: "+229 01 23 45 67",
      lines: ["Sainte Anne la mer, France"],
    },
    legal: "© 2026 Africa BESC. Tous droits réservés.",
  },
};