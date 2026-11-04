import { produits } from './produits.js';
import { trierPar, lireTri } from './tri.js';
import { afficherCatalogue } from './catalogue.js';
import { ajouter, panier, CLE, recharger } from './panier.js';
import { mettreAJourIcone } from './icone-panier.js';
import { initialiserMenu } from './menu.js';
import { initialiserCarrousel } from './carrousel.js';
import { initialiserFiche } from './fiche.js';
import { chargerAvis } from './avis.js';
import { initialiserRecherche } from './recherche.js';
import { initialiserVuePanier, afficherPanier } from './vue-panier.js';
import { lancerTests } from './tests.js';

initialiserMenu();
initialiserCarrousel();
initialiserFiche();
chargerAvis();
initialiserRecherche();
initialiserVuePanier();
mettreAJourIcone();

const liste = document.querySelector('#liste-produits');
const caseDispo = document.querySelector('#dispo-seulement');
const compteur = document.querySelector('#nb-produits');
const selectTri = document.querySelector('#choix-tri');
if (liste) {
  const params = new URLSearchParams(location.search);
  const triInitial = lireTri(params.get('tri'));
  if (selectTri) selectTri.value = triInitial;
  if (caseDispo) caseDispo.checked = params.get('disponibles') === 'oui';
  const rafraichir = () => {
    const resultats = produits.filter((produit) => !caseDispo?.checked || produit.stock > 0);
    afficherCatalogue(liste, trierPar(resultats, selectTri?.value || triInitial));
    if (compteur) compteur.textContent = `${resultats.length} produit${resultats.length > 1 ? 's' : ''}`;
  };
  caseDispo?.addEventListener('change', () => {
    const paramsActuels = new URLSearchParams(location.search);
    if (caseDispo.checked) paramsActuels.set('disponibles', 'oui');
    else paramsActuels.delete('disponibles');
    history.replaceState(null, '', `${location.pathname}?${paramsActuels.toString()}${location.hash}`);
    rafraichir();
  });
  selectTri?.addEventListener('change', () => {
    const triSecurise = lireTri(selectTri.value);
    selectTri.value = triSecurise;
    const paramsActuels = new URLSearchParams(location.search);
    paramsActuels.set('tri', triSecurise);
    history.replaceState(null, '', `${location.pathname}?${paramsActuels.toString()}${location.hash}`);
    rafraichir();
  });
  liste.addEventListener('click', (event) => {
    const bouton = event.target.closest('button[data-id]');
    if (!bouton || bouton.disabled) return;
    if (ajouter(bouton.dataset.id)) {
      mettreAJourIcone();
      bouton.textContent = 'Ajouté au panier';
      window.setTimeout(() => { if (bouton.isConnected) bouton.textContent = 'Ajouter au panier'; }, 1200);
    }
  });
  rafraichir();
}

window.addEventListener('storage', (event) => {
  if (event.key !== CLE && event.key !== null) return;
  recharger();
  mettreAJourIcone();
  afficherPanier();
});

if (new URLSearchParams(location.search).has('tests')) lancerTests();

