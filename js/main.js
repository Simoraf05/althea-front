import { initialiserPanier, afficherPanier } from './vue-panier.js';
import { CLE, recharger } from './panier.js';
import { initialiserRecherche } from './recherche.js';
import { initialiserFiche } from './fiche.js';
import { chargerAvis } from './avis.js';
import { initialiserMenu } from './menu.js';
import { initialiserCarrousel } from './carrousel.js';
import { initialiserCatalogue } from './catalogue.js';
import { mettreAJourIcone } from './icone-panier.js';

initialiserCatalogue();
mettreAJourIcone();

initialiserMenu();
initialiserCarrousel();

initialiserFiche();
chargerAvis();

initialiserRecherche();

initialiserPanier();

// L’événement storage arrive dans les autres onglets du même site.
window.addEventListener('storage', (event) => {
  if (event.key !== CLE && event.key !== null) return;
  recharger();
  mettreAJourIcone();
  afficherPanier();
});
