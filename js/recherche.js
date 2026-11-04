import { produits } from './produits.js';
import { afficherCatalogue } from './catalogue.js';
import { trierPar, lireTri } from './tri.js';

export const normaliser = (texte = '') => String(texte)
  .normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();

export const lireNombre = (texte, parDefaut) => {
  if (texte === null || String(texte).trim() === '') return parDefaut;
  const nombre = Number(texte);
  return Number.isFinite(nombre) && nombre >= 0 ? nombre : parDefaut;
};

export function filtrerProduits(liste, criteres = {}) {
  const { mot = '', description = '', caracteristique = '', categories = [], prixMin = 0,
    prixMax = Infinity, dispo = false } = criteres;
  const recherche = [mot, description, caracteristique].map(normaliser).filter(Boolean);
  return liste.filter((produit) => {
    const texte = normaliser(`${produit.nom} ${produit.description || ''} ${produit.categorie || ''}`);
    return recherche.every((terme) => texte.includes(terme))
      && produit.prix >= prixMin && produit.prix <= prixMax
      && (!dispo || produit.stock > 0)
      && (!categories.length || categories.includes(produit.categorie));
  });
}

export function initialiserRecherche() {
  const liste = document.querySelector('#resultats-produits');
  const titre = document.querySelector('#titre-resultats');
  if (!liste || !titre) return;
  const params = new URLSearchParams(location.search);
  const mot = params.get('q') || params.get('nom') || '';
  const criteres = {
    mot,
    description: params.get('description') || '',
    caracteristique: params.get('caracteristique') || '',
    prixMin: lireNombre(params.get('prixMin'), 0),
    prixMax: lireNombre(params.get('prixMax'), Infinity),
    dispo: params.get('disponibles') === 'oui',
    categories: params.getAll('categorie[]'),
  };
  const tri = lireTri(params.get('tri'));
  const trouves = trierPar(filtrerProduits(produits, criteres), tri);
  afficherCatalogue(liste, trouves);
  titre.textContent = `Résultats pour « ${mot} » : ${trouves.length} produit${trouves.length > 1 ? 's' : ''}`;
  const vide = document.querySelector('#aucun-resultat');
  if (vide) vide.hidden = trouves.length > 0;
  const champEntete = document.querySelector('#recherche-entete');
  const champNom = document.querySelector('#f-nom');
  if (champEntete) champEntete.value = mot;
  if (champNom) champNom.value = params.get('nom') || mot;
  ['description', 'caracteristique', 'prixMin', 'prixMax'].forEach((nom) => {
    const champ = document.querySelector(`[name="${nom}"]`);
    if (champ && params.has(nom)) champ.value = params.get(nom);
  });
  const disponible = document.querySelector('#disponibles');
  if (disponible) disponible.checked = criteres.dispo;
  document.querySelectorAll('[name="categorie[]"]').forEach((caseCategorie) => {
    caseCategorie.checked = criteres.categories.includes(caseCategorie.value);
  });
  const select = document.querySelector('#f-tri');
  if (select) select.value = tri;
  const pagination = document.querySelector('.resultats .pagination');
  if (pagination) pagination.hidden = true;
}

