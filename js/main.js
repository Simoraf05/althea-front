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
