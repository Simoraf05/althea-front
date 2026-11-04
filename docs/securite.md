# Sécurité et formulaires

Le projet contient seulement du HTML et du CSS. Les formulaires préparent la saisie des informations, mais aucun serveur ne gère les comptes.

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
