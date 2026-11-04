import { produits } from './produits.js';
import { afficherCatalogue, brancherAjouts } from './catalogue.js';
import { trierPar, lireTri } from './tri.js';

export const normaliser = (texte) => texte.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();

export const lireNombre = (texte, parDefaut) => {
  const nombre = Number(texte);
  return texte !== null && texte.trim() !== '' && Number.isFinite(nombre) && nombre >= 0 ? nombre : parDefaut;
};

export const filtrerProduits = (liste, { mot = '', description = '', caracteristique = '', prixMin = 0,
  prixMax = Infinity, dispo = false, categories = [] } = {}) => liste.filter((produit) =>
  normaliser(produit.nom).includes(normaliser(mot))
  && normaliser(produit.description).includes(normaliser(description))
  && normaliser(produit.caracteristique).includes(normaliser(caracteristique))
  && produit.prix >= prixMin && produit.prix <= prixMax
  && (!dispo || produit.stock > 0)
  && (categories.length === 0 || categories.includes(produit.categorie)));

export function initialiserRecherche() {
  const liste = document.querySelector('#resultats-produits');
  if (!liste) return;
  const params = new URLSearchParams(location.search);
  const mot = params.get('q') ?? params.get('nom') ?? params.get('titre') ?? '';
  const prixMin = lireNombre(params.get('prixMin'), 0);
  const prixMax = lireNombre(params.get('prixMax'), Infinity);
  const dispo = (params.get('disponible') ?? params.get('disponibles')) === 'oui';
  const categoriesConnues = ['diagnostic', 'soins', 'mobilier', 'consommables'];
  const categories = params.getAll('categorie[]').filter((categorie) => categoriesConnues.includes(categorie));
  const selection = filtrerProduits(produits, { mot, prixMin, prixMax, dispo, categories,
    description: params.get('description') ?? '', caracteristique: params.get('caracteristique') ?? '' });
  afficherCatalogue(liste, trierPar(selection, params.get('tri')));
  document.querySelector('#titre-resultats').textContent = `Résultats pour « ${mot} » : ${selection.length} produits`;
  document.querySelector('#aucun-resultat').hidden = selection.length !== 0;
  document.querySelector('#q').value = mot;
  const form = document.querySelector('.facettes');
  form.querySelector('#f-nom').value = mot;
  form.querySelector('#f-description').value = params.get('description') ?? '';
  form.querySelector('#f-caracteristique').value = params.get('caracteristique') ?? '';
  form.querySelector('#f-min').value = params.has('prixMin') ? String(prixMin) : '';
  form.querySelector('#f-max').value = Number.isFinite(prixMax) ? String(prixMax) : '';
  form.querySelector('#disponibles').checked = dispo;
  form.querySelector('#tri').value = lireTri(params.get('tri'));
  form.querySelectorAll('[name="categorie[]"]').forEach((caseCategorie) => {
    caseCategorie.checked = categories.includes(caseCategorie.value);
  });
  document.querySelectorAll('.pagination').forEach((pagination) => { pagination.hidden = true; });
  brancherAjouts(liste, document.querySelector('#message-recherche'));
}
