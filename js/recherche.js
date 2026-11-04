import { produits } from './produits.js';
import { afficherCatalogue, brancherAjout } from './catalogue.js';
import { trierPar, lireTri } from './tri.js';

export const normaliser = (texte) => texte.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();

// Un nombre venu de l'adresse : un vrai nombre positif, sinon la valeur par défaut.
export const lireNombre = (texte, parDefaut) => {
  const n = Number(texte);
  return texte && Number.isFinite(n) && n >= 0 ? n : parDefaut;
};

export const filtrerProduits = (liste, { mot = '', prixMin = 0, prixMax = Infinity, dispo = false } = {}) =>
  liste.filter((p) => normaliser(p.nom).includes(normaliser(mot))
    && p.prix >= prixMin && p.prix <= prixMax && (!dispo || p.stock > 0));

export function initialiserRecherche() {
  const liste = document.querySelector('#resultats-produits');
  if (!liste) return;
  const params = new URLSearchParams(location.search);
  const mot = (params.get('q') ?? params.get('nom') ?? '').trim();
  const prixMin = lireNombre(params.get('prixMin'), 0);
  const prixMax = lireNombre(params.get('prixMax'), Infinity);
  const dispo = params.get('disponibles') === '1';
  const tri = lireTri(params.get('tri'));

  const trouves = trierPar(filtrerProduits(produits, { mot, prixMin, prixMax, dispo }), tri);
  afficherCatalogue(liste, trouves);
  brancherAjout(liste); // « Ajouter au panier » marche aussi dans les résultats
  const n = trouves.length;
  // Le mot vient de l'adresse : textContent seulement (XSS réfléchi)
  document.querySelector('#titre-resultats').textContent =
    `${mot ? `Résultats pour « ${mot} »` : 'Résultats'} : ${n} produit${n > 1 ? 's' : ''}`;
  document.querySelector('#aucun-resultat').hidden = n > 0;
  document.querySelector('.pagination').hidden = true; // tous les résultats tiennent sur une page

  // On remet les choix dans les champs (propriété value : du texte)
  const poser = (selecteur, valeur) => { document.querySelector(selecteur).value = valeur; };
  poser('#recherche-entete', mot);
  poser('#f-nom', mot);
  poser('#f-min', prixMin > 0 ? String(prixMin) : '');
  poser('#f-max', Number.isFinite(prixMax) ? String(prixMax) : '');
  poser('#f-tri', tri);
  document.querySelector('#f-dispo').checked = dispo;
}
