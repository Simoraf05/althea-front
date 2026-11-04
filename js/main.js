import { produits } from './produits.js';
import { trierPar, lireTri, trierCatalogue } from './tri.js';
import { afficherCatalogue, brancherAjout } from './catalogue.js';
import { recharger, CLE } from './panier.js';
import { mettreAJourIcone } from './icone-panier.js';
import { initialiserAnnonce } from './annonce.js';
import { initialiserMenu } from './menu.js';
import { initialiserCarrousel } from './carrousel.js';
import { initialiserFiche } from './fiche.js';
import { chargerAvis } from './avis.js';
import { initialiserRecherche } from './recherche.js';
import { initialiserPagePanier, afficherPanier } from './vue-panier.js';

function initialiserAccueil() {
  const liste = document.querySelector('#top-produits');
  if (!liste) return; // seulement sur l'accueil
  afficherCatalogue(liste, trierCatalogue(produits).slice(0, 4)); // les 4 premiers du tri recommandé
  brancherAjout(liste);
}

function initialiserCatalogue() {
  const liste = document.querySelector('#liste-produits');
  if (!liste) return; // les autres pages n'ont pas de catalogue
  const caseDispo = document.querySelector('#dispo-seulement');
  const choixTri = document.querySelector('#choix-tri');
  const nb = document.querySelector('#nb-produits');
  choixTri.value = lireTri(new URLSearchParams(location.search).get('tri'));

  const rafraichir = () => { // filtrer, puis trier, puis afficher
    const voulus = caseDispo.checked ? produits.filter((p) => p.stock > 0) : produits;
    afficherCatalogue(liste, trierPar(voulus, choixTri.value));
    nb.textContent = `${voulus.length} produit${voulus.length > 1 ? 's' : ''}`;
  };
  caseDispo.addEventListener('change', rafraichir);
  choixTri.addEventListener('change', () => {
    const params = new URLSearchParams(location.search);
    params.set('tri', choixTri.value);
    history.replaceState(null, '', `?${params}`); // le lien garde le tri, sans recharger
    rafraichir();
  });
  brancherAjout(liste);
  rafraichir();
}

initialiserAnnonce();
initialiserMenu();
initialiserCarrousel();
initialiserAccueil();
initialiserCatalogue();
initialiserFiche();
chargerAvis(); // après initialiserFiche : l'id du produit est à jour
initialiserRecherche();
initialiserPagePanier();
mettreAJourIcone();

// Un autre onglet a changé le panier : on relit, puis on redessine.
window.addEventListener('storage', (event) => {
  if (event.key !== CLE) return;
  recharger();
  mettreAJourIcone();
  afficherPanier();
});

if (new URLSearchParams(location.search).has('tests')) {
  import('./tests.js').then((m) => m.lancerTests());
}
