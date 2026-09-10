# Africa BESC — Landing page

Landing page pour un service d'obtention de certificats **ECTN / BESC / CTN** pour
les expéditions vers l'Afrique. Développée en **Next.js 14 (App Router) + TypeScript
+ Tailwind CSS**, avec une bibliothèque de composants réutilisables et une
adaptation responsive complète (mobile / tablette / desktop).

## Démarrage

```bash
npm install
npm run dev      # http://localhost:3000
```

Autres scripts :

```bash
npm run build    # build de production
npm run start    # sert le build
npm run lint     # ESLint (next/core-web-vitals)
```

> Le premier build télécharge les polices Google (`IBM Plex Sans` pour le corps,
> `Source Serif 4` pour les accents et notes) via `next/font`. Une connexion
> réseau est nécessaire pour `build` / `dev`.

## Architecture

```
app/
  layout.tsx        SEO/OpenGraph, polices, <LanguageProvider>, <Header/> + <Footer/>
  page.tsx          Accueil -> <HomePage />
  contact/page.tsx  Page /contact -> <Contact /> (formulaire)
  cotation/page.tsx Page /cotation -> <Quote /> (présentation + formulaire de cotation)
  demande/page.tsx  Page /demande -> <Demande /> (formulaire ECTN/BESC)
  api/contact/route.ts   Route POST : valide + envoie le message par Resend
  api/demande/route.ts   Route POST : valide + envoie la demande ECTN/BESC (pièces jointes) par Resend
  api/cotation/route.ts  Route POST : valide + envoie la demande de cotation import par Resend
  globals.css       Directives Tailwind + classes utilitaires (.eyebrow, .card-surface…)
  icon.svg          Favicon

components/
  HomePage.tsx              Assemble toutes les sections
  providers/
    LanguageProvider.tsx    Contexte i18n FR/EN + persistance localStorage
  layout/
    Header.tsx              Nav sticky + menu mobile + switch de langue
    Footer.tsx
    Logo.tsx
    LanguageSwitcher.tsx
  sections/
    Hero.tsx  StatsBar.tsx  Services.tsx  ServiceCard.tsx
    CountriesCovered.tsx  WhyUs.tsx  CtaBanner.tsx
    Testimonials.tsx  Faq.tsx  Contact.tsx  ContactForm.tsx
    Quote.tsx  CotationForm.tsx  Demande.tsx  DemandeForm.tsx
  africa/
    AfricaMap.tsx            Carte SVG interactive des pays couverts
  ui/
    Button.tsx  Container.tsx  Icon.tsx  SectionHeading.tsx  SectionLabel.tsx
    RotatedNote.tsx  ImageSlot.tsx  Accordion.tsx  Carousel.tsx
    Reveal.tsx  PaymentBadges.tsx  Field.tsx  SignaturePad.tsx

lib/
  types.ts          Types du dictionnaire de contenu
  cn.ts             Helper classNames
  formOptions.ts    Listes déroulantes du formulaire /demande (pays, devises, Incoterms…)
  i18n/
    fr.ts  en.ts    Contenu intégral (FR = langue par défaut)
    index.ts
```

## Contenu & internationalisation

Tout le texte vit dans `lib/i18n/fr.ts` et `lib/i18n/en.ts` et respecte le type
`Dictionary` (`lib/types.ts`). Les sections sont des composants **présentationnels**
qui reçoivent leur portion de contenu en props — faciles à réutiliser et à tester.

Le sélecteur `FR / EN` (header) bascule le dictionnaire à chaud ; le choix est
mémorisé dans `localStorage`. Le rendu serveur se fait en français pour le SEO.

## Médias

### Logo (à uploader)

`components/layout/Logo.tsx` est un **emplacement** : déposez vos fichiers dans
`public/images/logo/` en gardant les noms `logo-light.svg` (fond sombre : header
sur le hero + footer) et `logo-dark.svg` (fond clair : header au scroll + pages
internes). Voir `public/images/logo/README.md`. Aucune modification de code après
l'upload ; un logo provisoire s'affiche en attendant. Le composant réserve la
hauteur (`h-8`→`h-10` header, `h-10`→`h-11` footer) et met `width:auto`
(`max-w-[200px]`), en gérant les deux thèmes.

### Page Cotation transit

`/cotation` (`app/cotation/page.tsx` → `components/sections/Quote.tsx`) : présente
le service de cotation de transit (hero, « Le service », modes couverts, étapes,
bannière CTA), puis un **formulaire de demande de cotation import** natif
(`components/sections/CotationForm.tsx`, section `#formulaire`).

Les CTA de la page pointent vers `#formulaire`. Champs : coordonnées, origine
(pays + port/ville), destination (pays couvert + port/ville), mode de transport,
Incoterms, nature/poids/volume de la marchandise, type de conteneur, valeur +
devise, date d'enlèvement, assurance cargo, dédouanement, message, et 2 documents
facultatifs (facture proforma, liste de colisage). Options dans `lib/formOptions.ts`
(`TRANSPORT_MODES`, `CONTAINER_TYPES`).

POST `multipart/form-data` vers `app/api/cotation/route.ts` : validation, honeypot,
envoi par **Resend** vers `ECTN_INBOX` (mêmes variables que `/demande`),
`replyTo` = e-mail du demandeur, sujet `Nouvelle demande de cotation import — …`.

### Page Demande ECTN/BESC

`/demande` (`app/demande/page.tsx` → `components/sections/Demande.tsx` →
`components/sections/DemandeForm.tsx`) : formulaire natif de demande d'ECTN/BESC.

- **Champs** : pays de chargement, pays de destination, prénom, nom, société
  (facultatif), e-mail, téléphone/WhatsApp, n° de BL, devise, type de paiement du
  fret, Incoterms. Listes déroulantes dans `lib/formOptions.ts` (bilingues).
- **Documents** (PDF/JPG/PNG/WEBP, 5 Mo/fichier, 12 Mo au total) : connaissement,
  facture commerciale, déclaration d'export, liste de colisage, facture de fret,
  cartes grises (facultatif si véhicules).
- **Signature** : `components/ui/SignaturePad.tsx` (canvas → PNG).
- POST `multipart/form-data` vers `app/api/demande/route.ts` : validation,
  honeypot, puis envoi par **Resend** vers `ECTN_INBOX` avec les documents et la
  signature en pièces jointes, `replyTo` = e-mail du demandeur.

**Configuration** (voir `.env.example`) :

| Variable | Rôle |
|---|---|
| `RESEND_API_KEY` | Clé API Resend. Absente → l'API renvoie `email_not_configured` (503) et rien n'est envoyé. |
| `ECTN_INBOX` | Destinataire des demandes. Défaut : `info@beninbesc.com`. |
| `RESEND_FROM` | Expéditeur (domaine vérifié Resend ; `onboarding@resend.dev` pour un test). |

> Hébergement : l'envoi transite par la route API avec les fichiers en pièces
> jointes. Sur Vercel (serverless/hobby) le corps de requête est plafonné à
> ~4,5 Mo ; déployez sur une cible qui accepte des corps plus lourds, ou passez
> plus tard à un upload direct (stockage + liens dans l'e-mail).

### Page Contact

`/contact` (`app/contact/page.tsx` → `components/sections/Contact.tsx`) : titre +
coordonnées + formulaire **Nom · Prénoms · E-mail · Sujet · Message**
(`components/sections/ContactForm.tsx`, validation + états d'envoi + honeypot).
Accès : lien « Contact » du header et bouton « Nous contacter » de la FAQ. Le
formulaire POST (JSON) vers `app/api/contact/route.ts` : validation, honeypot,
puis envoi par **Resend** vers `ECTN_INBOX` (même boîte que les demandes ECTN),
`replyTo` = e-mail de l'expéditeur, sujet `Nouveau message de contact — …`.
Mêmes variables d'environnement que `/demande` (`RESEND_API_KEY`, `ECTN_INBOX`,
`RESEND_FROM` ; sans clé → 503 `email_not_configured`).

### Médias du domaine

Les visuels (port, conteneurs, documents, carte, drapeaux) sont dans
`public/images/` :

```
public/images/
  hero/       hero-port.jpg, hero-cargo-ship.jpg, containers-yard.jpg
  services/   ectn-document.jpg, besc-containers.jpg, ctn-world-map.jpg,
              assistance-paperwork.jpg, + variantes
  flags/      bj tg gh ng sn gn gw bi ss gq cf .svg  (codes ISO)
  africa.svg  fond de carte MapSVG (un <path> par pays, id = code ISO)
  CREDITS.md  sources + licences (Pexels + flagcdn + MapSVG, libres)
```

### Carte d'Afrique interactive

`components/africa/AfricaMap.tsx` rend `africa.svg` : chaque pays de
`countries.list` (dans `lib/i18n/*.ts`) est cliquable / survolable (surbrillance
+ infobulle + marqueur), les autres servent de fond neutre. Le module
`components/africa/africaPaths.ts` est **généré** :

```bash
node scripts/gen-africa-paths.mjs   # relit africa.svg -> africaPaths.ts
```

Pour ajouter une destination : ajoutez `{ name, code }` dans `countries.list`
(FR + EN). Si le `<path id="XX">` correspondant n'existe pas encore dans
`africa.svg`, ajoutez-le puis relancez le script.

Les chemins sont référencés dans `lib/i18n/*.ts` (`hero.image`,
`services.items[].image`, `countries.list[].code`). `components/ui/ImageSlot.tsx`
affiche un placeholder de marque si la prop `src` est absente — pour remplacer un
visuel, écrasez le fichier dans `public/images/` ou changez le chemin dans le
dictionnaire.

## Responsive

- Grilles `1 → 2 → 4` colonnes selon le breakpoint.
- Sections Services / Témoignages : grille sur desktop, carrousel à défilement
  (scroll-snap) avec flèches et pastilles sur mobile/tablette.
- Menu de navigation en tiroir plein écran sous `lg`.
- Annotations manuscrites verticales masquées sous `xl`.
- `prefers-reduced-motion` respecté par le composant `Reveal`.
