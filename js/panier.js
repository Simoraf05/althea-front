import { trouverProduit } from './produits.js';
import { centimes } from './outils.js';

export const CLE = 'althea-panier';
const MAX = 99;

// Le stockage se modifie dans l'inspecteur : on ne garde que les lignes valides.
function charger() {
  try {
    const lu = JSON.parse(localStorage.getItem(CLE));
    if (!Array.isArray(lu)) return [];
    return lu
      .filter((l) => l && trouverProduit(l.id)?.stock > 0 && Number.isInteger(l.quantite) && l.quantite >= 1 && l.quantite <= MAX)
      .map(({ id, quantite }) => ({ id, quantite: Math.min(quantite, trouverProduit(id).stock) })); // jamais plus que le stock, jamais le prix
  } catch {
    return []; // texte abîmé : panier vide
  }
}

export const panier = charger();

const sauvegarder = () => {
  try {
    localStorage.setItem(CLE, JSON.stringify(panier));
  } catch {
    /* stockage refusé : le panier ne durera que sur cette page */
  }
};

// splice : on change le contenu, pas le tableau (d'autres fichiers l'importent).
export const recharger = () => panier.splice(0, panier.length, ...charger());

export function ajouter(id) {
  const produit = trouverProduit(id);
  if (!produit || produit.stock === 0) return;
  const max = Math.min(MAX, produit.stock);
  const ligne = panier.find((l) => l.id === id);
  if (ligne) ligne.quantite = Math.min(ligne.quantite + 1, max);
  else panier.push({ id, quantite: 1 });
  sauvegarder();
}

export function supprimer(id) {
  const i = panier.findIndex((l) => l.id === id);
  if (i !== -1) panier.splice(i, 1);
  sauvegarder();
}

export function changerQuantite(id, quantite) {
  if (!Number.isInteger(quantite)) return;
  if (quantite <= 0) { supprimer(id); return; }
  const ligne = panier.find((l) => l.id === id);
  if (ligne) {
    ligne.quantite = Math.min(quantite, MAX, trouverProduit(id).stock);
    sauvegarder();
  }
}

export const compterArticles = () => panier.reduce((n, l) => n + l.quantite, 0);

export const calculerTotal = () =>
  panier.reduce((somme, l) => somme + centimes(trouverProduit(l.id).prix) * l.quantite, 0) / 100;
