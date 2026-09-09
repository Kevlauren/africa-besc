# Logo — à remplacer

Déposez ici **vos** fichiers, en gardant exactement ces noms :

| Fichier | Où il est utilisé | Fond | Couleur du logo attendue |
| --- | --- | --- | --- |
| `logo-light.svg` | Header au-dessus du hero, **footer** | sombre (navy) | version **claire** (blanc / doré) |
| `logo-dark.svg` | Header après défilement, pages internes (Contact…) | clair (crème) | version **foncée** (navy / doré) |

## Contraintes

- **Formats** : `.svg` (recommandé) ou `.png`. Si vous fournissez du PNG,
  renommez en `logo-light.png` / `logo-dark.png` **et** changez l'extension dans
  `components/layout/Logo.tsx` (constante `LOGO_SRC`).
- **Même hauteur / même ratio** pour les deux fichiers (lockup horizontal
  conseillé, ~4:1 à ~5:1, ex. `viewBox="0 0 210 48"`).
- Le composant réserve la hauteur (`h-9` ≈ 36 px dans le header, `h-10` dans le
  footer, `h-11` ≈ 44 px sur grand écran) et met `width: auto`, plafonné à
  `max-w-[200px]`.
- Marges internes réduites au minimum : le fichier doit être « détouré ».

Tant que ces fichiers ne sont pas remplacés, un logo provisoire s'affiche. Aucune
autre modification de code n'est nécessaire après l'upload.
