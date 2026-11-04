# Vérifications — TP 1 et TP 2

Dernier contrôle local : 4 novembre 2026, avec Edge. Les six pages sont concernées.

## Affichage et navigation

| Vérification | Résultat |
|---|---|
| 320, 360, 768 et 1 280 px, clair et sombre | Aucun débordement horizontal sur les 48 affichages. |
| Texte agrandi à 200 % | Aucun débordement détecté ; ce test ne remplace pas le zoom natif. |
| Tab et Maj + Tab | Éléments parcourus au clavier, focus visible. |
| Lien « Aller au contenu » | Accès au contenu principal sur les six pages. |
| Carrousel et pastilles | Accès aux images par leurs liens. |
| Galerie et tableau | Défilement au clavier. |
| Réduction des animations | Réglage respecté. |
| Produit épuisé | Quantité et bouton d’achat désactivés. |
| Pied de page | Masqué sur mobile ; ses liens restent dans le menu. |
| Impression | En-tête et boutons masqués, fiche sur fond blanc. |
| Console | Aucune erreur pendant les tests d’affichage. |

Les dix captures sont dans `captures/` et dans le README. Les choix de mise en page sont dans [responsive.md](responsive.md). Les tests CSP et POST sont décrits dans [securite.md](securite.md).

## Lighthouse et syntaxe

Lighthouse 13.6.0, profil mobile, le 4 novembre 2026 :

| Page | Accessibilité |
|---|---|
| Accueil | 100/100 |
| Catégorie | 100/100 |
| Produit | 100/100 |
| Recherche | 100/100 |
| Connexion | 100/100 |
| Inscription | 100/100 |

Ces scores concernent les contrôles automatiques et ne remplacent pas une vérification manuelle.

La vérification locale de la structure HTML et de la syntaxe CSS ne relève pas d’erreur. Les images utilisées et les liens de documentation existent.

La validation HTML W3C de la version précédente ne relevait aucune erreur. Elle reste à renouveler sur la version finale. La validation CSS officielle reste également à faire : le service renvoyait une erreur lors du premier essai ; le dernier envoi a été bloqué avant transmission.

## Vérifications restantes avant le rendu

- Refaire les validations officielles HTML et CSS W3C.
- Vérifier le zoom natif à 200 % et parcourir le site avec Narrateur.
La version des TP 1 et 2 est préparée sur la branche `Ryan_Mambou`, avec le tag `jour-2`.

Les filtres, la pagination et les comptes restent des maquettes : le JavaScript et le serveur ne font pas partie du travail réalisé pour ces deux TP.

Le dernier passage après la mise en forme du code et la correction du panier confirme : structure HTML et syntaxe CSS locales sans erreur, 48 affichages sans débordement, liens d’évitement, saisies invalides et impression vérifiés. Les captures correspondent à cette version.

## Menu burger — 4 novembre 2026

Sur les six pages à 320, 360, 768 et 1 280 px : menu fermé au chargement, ouverture au clic, fermeture avec Entrée, ouverture avec Espace et accès aux liens avec Tab vérifiés. Aucun débordement horizontal détecté dans ces 24 cas. Le HTML et la syntaxe CSS passent les vérifications locales.
