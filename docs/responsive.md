# Mise en page responsive — TP 2

Le TP 2 reprend les pages du TP 1 pour les adapter au téléphone, à la tablette et à l’ordinateur. Sur la première version, les cartes et les photos étaient surtout empilées. La nouvelle mise en page utilise mieux la largeur disponible.

## Organisation du CSS

Les styles de base correspondent aux petits écrans. Deux media queries ajoutent ensuite les changements :

- À partir de `48rem` : l’en-tête se réorganise, les bannières deviennent plus larges et les catégories passent sur quatre colonnes.
- À partir de `64rem` : la fiche produit passe sur deux colonnes, les filtres se placent à côté des résultats et le pied apparaît sur trois colonnes.

Flexbox sert notamment à l’en-tête et aux cartes de l’accueil. Grid sert aux listes de produits, au défilement de la galerie et à la disposition de la fiche produit.

Le carrousel, la galerie et le tableau peuvent défiler dans leur propre zone. Cela évite d’élargir toute la page sur téléphone.

## Mode sombre

Les couleurs sont regroupées dans `css/variables.css`. La media query `@media (prefers-color-scheme: dark)` remplace les couleurs claires par des fonds sombres et des textes clairs. Le changement suit le réglage de l’appareil.

Le logo garde un fond blanc pour rester visible. Les fonds des photos de produits restent aussi blancs. Le mode sombre concerne la page et ses éléments, pas les photos.

[Capture de l’accueil en mode sombre](captures/accueil-sombre.png).

## Carrousel et mouvements

Le carrousel utilise `overflow-x` et `scroll-snap-type` pour faire défiler les images et les aligner. Les pastilles pointent vers chaque image. La galerie utilise le même principe. Les boutons précédent/suivant et la mise à jour de la pastille active restent à développer.

Le défilement fluide et le déplacement des cartes au survol sont activés seulement si l’utilisateur n’a pas demandé de réduire les animations, avec `prefers-reduced-motion: no-preference`.

## Captures et vérifications

Les résultats enregistrés pour les six pages à 320, 360, 768 et 1 280 px ne montrent pas de débordement horizontal, en thème clair comme en thème sombre.

| Page | 360 px | 768 px | 1 280 px |
|---|---|---|---|
| Accueil | [Téléphone](captures/index-360.png) | [Tablette](captures/index-768.png) | [Ordinateur](captures/index-1280.png) |
| Catégorie | [Téléphone](captures/categorie-360.png) | [Tablette](captures/categorie-768.png) | [Ordinateur](captures/categorie-1280.png) |
| Produit | [Téléphone](captures/produit-360.png) | [Tablette](captures/produit-768.png) | [Ordinateur](captures/produit-1280.png) |

Une règle `@media print` simplifie la fiche produit pour l’impression. L’en-tête, les boutons d’achat et les produits similaires sont masqués. La version imprimée enregistrée tient sur une page A4.

Les autres résultats et les vérifications manuelles restantes sont dans [audit.md](audit.md).

## Menu burger sans JavaScript

Le menu commun utilise `details` et `summary`. Il est fermé au chargement et s’ouvre au clic, avec Entrée ou Espace. Les liens sont ensuite accessibles avec Tab. Le navigateur gère l’état ouvert ou fermé, sans attribut `aria-expanded` figé. Le menu se place sous l’en-tête pour ne pas élargir la page.
