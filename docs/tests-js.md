# Tests JavaScript — jour 3

Contrôles réalisés le 4 novembre 2026 avec Edge sur un serveur local.

## Tests des fonctions

Ouvrir `categorie.html?tests`. La page et la console affichent « Tests : 10 / 10 réussis ».

| Test | Attendu | Résultat |
|---|---|---|
| Prix 89.9 | 89,90 € | OK |
| Prix 24 | 24,00 € | OK |
| Produit épuisé | À la fin | OK |
| Produit prioritaire | En tête | OK |
| Prioritaire épuisé | À la fin | OK |
| Tableau d’origine | Inchangé après le tri | OK |
| Tri par prix | Croissant, épuisés à la fin | OK |
| Tri inconnu | Recommandé | OK |
| « StéThoscope » | « stethoscope » | OK |
| Prix maximum 50 | Exclure les produits plus chers | OK |

Le tri a aussi été volontairement remplacé par un rang constant pendant un test : le résultat descend à 7/10. Avec le tri normal, il revient à 10/10. Les tests détectent donc bien cette régression.

## Tests dans le navigateur

| Action | Attendu | Résultat |
|---|---|---|
| Cocher les disponibles | Les deux épuisés disparaissent | OK |
| Changer le tri et recharger | Même choix et même ordre | OK |
| Ouvrir au clavier, puis Échap | Menu fermé, focus sur le bouton | OK |
| Passer à 768 px | Menu visible, bouton masqué | OK |
| Boutons et défilement du carrousel | Bonne slide et bonne pastille | OK |
| Chercher « stethoscope » | Trouver le nom accentué | OK |
| Prix max 50, disponibles | 4 produits | OK |
| Filtrer description, caractéristique et catégorie | Produits correspondants | OK |
| Prix « abc » ou tri inconnu dans l’adresse | Critère ignoré ou tri recommandé | OK |
| Nom, recherche et avis piégés | Texte visible, aucune alerte | OK |
| Avis avec note 50 | Avis ignoré | OK |
| Simuler une erreur du fichier JSON | Message d’indisponibilité, page utilisable | OK |
| Fiche épuisée ou identifiant inconnu | Achat bloqué | OK |
| Fiche en stock, quantité 3 | Trois articles ajoutés | OK |
| Quantités 0, 50, « abc » et 1.5 | Refus même sans max dans le HTML | OK |
| Ajouter deux fois le même produit | Une ligne, quantité 2 | OK |
| Deux oxymètres et trois kits de soins | 69 + 74,70 = 143,70 € | OK |
| Recharger le panier | Articles et total conservés | OK |
| Ajouter depuis un second onglet | Premier onglet actualisé | OK |
| Supprimer ou saisir 0 | Ligne retirée, focus conservé | OK |
| Vider et recharger le panier | Il reste vide, pas d’articles de démonstration ajoutés | OK |
| Stockage cassé, produit inconnu ou quantité invalide | Ligne ignorée, pas de plantage | OK |
| Ajouter un faux prix au stockage | Prix officiel du catalogue conservé | OK |
| Produit présent deux fois dans le stockage | Une seule ligne après relecture | OK |
| Sept pages, quatre largeurs, clair et sombre | 56 affichages sans débordement | OK |

Les erreurs JavaScript et CSP ont été surveillées pendant les tests. L’erreur HTTP 503 utilisée pour le test des avis était volontaire.

## Point d’arrêt

Un point d’arrêt a été posé dans `ajouter`, avant la modification de la ligne. Au premier ajout, la ligne n’existe pas. Au second, elle existe avec la quantité 1, puis passe à 2. Le point d’arrêt a été retiré ; aucun `debugger` n’est conservé dans les fichiers du site.

## Limites

Les comptes restent des maquettes : pas de serveur et pas d’exercice d’intersession. Le contrôle au lecteur d’écran et les validations officielles W3C restent à faire. Les produits et les avis sont des exemples pour le TP.
