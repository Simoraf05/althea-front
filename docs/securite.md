# Sécurité et formulaires

Le projet utilise HTML, CSS et JavaScript. Les formulaires de compte restent des maquettes, car aucun serveur ne gère les comptes.

## Choix dans les pages

| Protection | Où | Rôle |
|---|---|---|
| CSP et referrer | Head des six pages | Limiter les ressources au site et les informations transmises aux autres sites. |
| POST | Connexion et inscription | Garder les mots de passe hors de l’adresse. HTTPS sera nécessaire en production. |
| required, type et minlength | Champs des formulaires | Aider à corriger les saisies invalides. |
| noopener noreferrer | Liens ouverts dans un nouvel onglet | Protéger l’onglet d’origine. |
| .gitignore | Racine du projet | Exclure les secrets et les fichiers locaux. |

Une politique CSP est ajoutée dans le `head` des six pages. Elle limite le chargement des ressources à celles du site et bloque notamment les scripts et styles intégrés directement au HTML. Une balise `referrer` limite aussi les informations d’adresse transmises vers les autres sites.

Les liens externes ouverts dans un nouvel onglet utilisent `rel="noopener noreferrer"`. Le texte « nouvel onglet » est prévu pour les lecteurs d’écran.

## Formulaires

La recherche utilise `GET` : les critères sont placés dans l’adresse. La connexion et l’inscription utilisent `POST` pour éviter de mettre les mots de passe dans l’URL. POST ne chiffre pas les données : un site publié avec de vrais comptes devra utiliser HTTPS.

Les attributs `required`, `type="email"`, `minlength` et `maxlength` vérifient une partie de la saisie dans le navigateur. Les champs de compte utilisent aussi `autocomplete` pour les gestionnaires de mots de passe.

Ces contrôles peuvent être contournés. Le serveur devra vérifier les données et comparer les deux mots de passe de l’inscription. Avec Live Server, l’envoi des formulaires de compte peut afficher « Cannot POST », car aucun traitement n’est prévu.

## Tests enregistrés

- Un style ajouté directement sur le titre a été bloqué par la CSP, puis retiré.
- L’envoi d’un mot de passe fictif en POST ne l’a pas placé dans l’adresse.
- En retirant `required`, un formulaire vide a pu être envoyé. Cela montre pourquoi les contrôles du navigateur ne suffisent pas.

Le fichier `.gitignore` sert à ne pas ajouter les secrets et les fichiers locaux au dépôt. Lors de la mise en place du serveur, la CSP pourra aussi être envoyée dans les en-têtes HTTP.

## XSS — jour 3

Le nom d’un produit, un avis ou un mot de recherche peut contenir du HTML. Ces données sont écrites avec `textContent`, jamais interprétées comme du code. Les cartes et les avis sont assemblés avec `createElement` et `append`.

Trois essais sont gardés : le nom piégé des gants, un avis contenant des balises et une recherche contenant une image avec un événement. Ils s’affichent comme du texte et ne déclenchent aucune alerte. La note d’avis égale à 50 est ignorée.

Le tri venant de l’adresse est comparé aux valeurs connues. Les prix doivent être des nombres finis et positifs. La quantité de la fiche est revérifiée en JavaScript : entier de 1 à 10, même si les attributs HTML sont retirés.

Le panier ne sauvegarde que l’identifiant et la quantité. À la relecture, les produits inconnus, épuisés et les quantités invalides sont ignorés. Les doublons sont regroupés. Le total utilise le prix du catalogue, pas un prix stocké dans le navigateur.

Ces contrôles protègent la maquette côté navigateur. Un futur serveur devra refaire les vérifications, notamment les prix et les stocks.
