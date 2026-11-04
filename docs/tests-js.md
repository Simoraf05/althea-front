# Tests JavaScript · Althea Systems (jour 3)

## 1. Tests faits par script (Chromium headless, serveur local)

81 contrôles sur 81, tous réussis, dont la console sans aucune erreur (JavaScript ni CSP) sur les 8 pages à 360 et à 1 280 px.

| Test | Attendu | OK |
|------|---------|----|
| Débordement horizontal | aucun à 320, 360, 768 et 1 280 px sur 8 pages | ✔ |
| Pied de page | visible sur tous les écrans | ✔ |
| Catalogue | sept cartes créées par JavaScript | ✔ |
| Ordre du rayon | prioritaires en tête | ✔ |
| Ordre du rayon | épuisés à la fin, même le prioritaire | ✔ |
| Produit piège | nom en texte, pas d’alerte | ✔ |
| nombre de produits annoncé | réussi | ✔ |
| Filtre « Disponibles seulement » | 5 produits, aucun épuisé ; la touche Espace coche la case | ✔ |
| Tri par prix | liste triée et ?tri=prix-croissant dans l’adresse | ✔ |
| Tri | le choix reste après rechargement | ✔ |
| categorie.html?tri=<script> | tri recommandé, sans erreur | ✔ |
| Ajout au panier | point rouge, « Panier, 2 articles », stockage = id + quantité | ✔ |
| bouton des épuisés bloqué | réussi | ✔ |
| Panier : oxymètre ×2 | 49,80 € | ✔ |
| Panier : quantité 3 | 74,70 € | ✔ |
| Suppression | message « vide », focus sur le titre, point rouge éteint | ✔ |
| Stockage modifié à la main | lignes invalides ignorées (total 39,80 €) | ✔ |
| Stockage illisible | panier vide, aucune erreur | ✔ |
| Deux onglets | le total change dans l’autre onglet | ✔ |
| Menu burger à 360 px | fermé, ouvert, Échap le ferme et le focus revient sur « Menu » | ✔ |
| 360 px : logo, panier et bouton de mode sombre sur une ligne | réussi | ✔ |
| Menu à 1 280 px | bouton caché, menu visible | ✔ |
| en-tête à 1280 px : logo, panier et recherche sur la 1re rangée, menu dessous | réussi | ✔ |
| Carrousel | « Suivant » avance d’une slide, la pastille active suit | ✔ |
| carrousel : « Précédent » revient | réussi | ✔ |
| fiche ?id=oxymetre : nom, prix, achat possible | réussi | ✔ |
| fiche : tableau des tailles caché pour un autre produit, titre de l’onglet à jour | réussi | ✔ |
| Fiche : quantité 0, 50, « abc » | message, rien ajouté | ✔ |
| Fiche : max retiré dans l’inspecteur | 50 toujours refusé | ✔ |
| Fiche : quantité 3 | trois exemplaires ajoutés | ✔ |
| fiche → panier : 3 × 24,90 € = 74,70 € | réussi | ✔ |
| fiche : pas plus que le stock (8 stéthoscopes) | réussi | ✔ |
| Fiche : produit épuisé | champ et bouton bloqués | ✔ |
| fiche sans ?id : le tensiomètre (produit de la page) et son tableau des tailles | réussi | ✔ |
| fiche : ?id inconnu → produit par défaut, sans erreur | réussi | ✔ |
| fiche : nom piégé affiché en texte (titre, fil d’Ariane, onglet), sans alerte | réussi | ✔ |
| accueil : 4 top produits créés par JavaScript, avec bouton d’ajout | réussi | ✔ |
| accueil : ajout → notification et point rouge | réussi | ✔ |
| accueil : un clic sur un produit ouvre SA fiche | réussi | ✔ |
| fiche : 4 produits similaires (sans le produit lui-même) | réussi | ✔ |
| parcours : l’accueil, la fiche et les similaires remplissent le même panier | réussi | ✔ |
| recherche : « Ajouter au panier » fonctionne dans les résultats | réussi | ✔ |
| palette : toutes les variables existent (y compris celles de ton fichier) | réussi | ✔ |
| texte des slides blanc, pied de page bleu foncé avec texte crème, boutons #086288 | réussi | ✔ |
| Avis clients | 3 avis, moyenne 4,0 ; la note de 50 est ignorée | ✔ |
| Avis piégé | texte brut, sans alerte ni gras | ✔ |
| Fichier d’avis absent | message clair, page intacte | ✔ |
| Recherche « stethoscope » | trouve le stéthoscope | ✔ |
| recherche en majuscules | réussi | ✔ |
| Recherche piégée dans l’adresse | texte affiché, aucune alerte | ✔ |
| Filtres prix max 50 € + disponibles | 5 produits | ✔ |
| ?prixMax=abc&prixMin=-4&tri=<x> | ignorés, sans erreur | ✔ |
| mot remis dans le champ de l’en-tête | réussi | ✔ |
| categorie.html?tests | « Tests : 10 / 10 réussis » | ✔ |
| Bandeau de la catégorie à 1 280 px | moins de 320 px de haut | ✔ |
| bandeau de la catégorie à 1536 px : moins de 320 px de haut | réussi | ✔ |
| Carrousel | pas de barre de défilement visible | ✔ |
| Page ouverte avec Live Server | aucun bandeau d’aide | ✔ |
| Page ouverte par double clic | bandeau rouge qui explique d’utiliser Live Server | ✔ |
| Bouton de mode sombre | bascule, et le choix suit sur les autres pages | ✔ |
| mode sombre : retour au clair | réussi | ✔ |
| Mode sombre au premier passage | suit le réglage de l’appareil | ✔ |
| Impression en mode sombre | noir sur blanc | ✔ |
| Recherche dans le code (innerHTML, onclick, style=", debugger) | aucun résultat | ✔ |
| plus aucune trace de l’ancien bleu (#1d4ed8) dans le CSS, les images et les pages | réussi | ✔ |

## 2. À faire à la main (je ne peux pas les faire à votre place)

- [ ] Au clavier seulement, à 360 px : menu et Échap, boutons du carrousel, ajout au panier, quantité, suppression.
- [ ] Lecteur d’écran : annonces du nombre de produits, du total, des messages d’achat et des avis.
- [ ] Mode sombre : coup d’œil aux lignes du panier et aux messages.
- [ ] Validateurs HTML et CSS du W3C, Lighthouse Accessibilité ≥ 90.
- [ ] Point d’arrêt (étape 27) : ce qu’il vous a montré — à compléter par vous.

## 3. Calcul à la main

2 × 24,90 € = 49,80 € ; 3 × 24,90 € = 74,70 € ; 2 × 19,90 € = 39,80 €. Le code calcule en centimes (nombres entiers) puis divise par 100, pour éviter les erreurs d’arrondi des décimaux.
