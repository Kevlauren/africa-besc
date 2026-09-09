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
  layout.tsx        Métadonnées SEO/OpenGraph, polices, <LanguageProvider>
  page.tsx          Point d'entrée -> <HomePage />
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

Les visuels du domaine (port, conteneurs, documents, carte, drapeaux) sont fournis
dans `public/images/` :

```
public/images/
  hero/       hero-port.jpg, hero-cargo-ship.jpg, containers-yard.jpg
  services/   ectn-document.jpg, besc-containers.jpg, ctn-world-map.jpg,
              assistance-paperwork.jpg, + variantes
  flags/      bj tg gh ng sn gn gw bi ss gq cf .svg  (codes ISO)
  CREDITS.md  sources + licences (Pexels + flagcdn, libres, sans attribution)
```

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
