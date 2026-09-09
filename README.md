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

> Le premier build télécharge les polices Google (`Inter`, `Caveat`) via
> `next/font`. Une connexion réseau est nécessaire pour `build` / `dev`.

## Architecture

```
app/
  layout.tsx        SEO/OpenGraph, polices, <LanguageProvider>, <Header/> + <Footer/>
  page.tsx          Accueil -> <HomePage />
  contact/page.tsx  Page /contact -> <Contact /> (formulaire)
  cotation/page.tsx Page /cotation -> <Quote /> (présentation cotation transit)
  api/contact/route.ts  Route POST : valide le formulaire (TODO: envoi réel)
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
    Testimonials.tsx  Faq.tsx
  africa/
    AfricaMap.tsx            Carte SVG interactive des pays couverts
  ui/
    Button.tsx  Container.tsx  Icon.tsx  SectionHeading.tsx  SectionLabel.tsx
    RotatedNote.tsx  ImageSlot.tsx  Accordion.tsx  Carousel.tsx
    Reveal.tsx  PaymentBadges.tsx

lib/
  types.ts          Types du dictionnaire de contenu
  cn.ts             Helper classNames
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
le service de demande de cotation de transit (hero image + dégradé, « Le service »,
modes couverts, étapes, bannière CTA), même direction design que l'accueil.

Le bouton **« Obtenir une demande d'import »** (2 emplacements : hero + bannière)
redirige vers un **JotForm**. Remplacez l'URL dans `lib/i18n/fr.ts` **et**
`en.ts` → `quote.formUrl` (`https://form.jotform.com/VOTRE-ID-JOTFORM`).

### Page Contact

`/contact` (`app/contact/page.tsx` → `components/sections/Contact.tsx`) : titre +
coordonnées + formulaire **Nom · Prénoms · E-mail · Sujet · Message**
(`components/sections/ContactForm.tsx`, validation + états d'envoi + honeypot).
Accès : lien « Contact » du header et bouton « Nous contacter » de la FAQ (plus
les CTA du hero / de la bannière). Le formulaire POST vers `app/api/contact/route.ts`
qui valide et renvoie 200 — **branchez l'envoi réel** (e-mail / CRM) à l'endroit
marqué `TODO` dans ce fichier.

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
