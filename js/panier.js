import { trouverProduit } from './produits.js';

export const CLE = 'althea-panier-v1';

const sauvegarder = () => {
  try {
    localStorage.setItem(CLE, JSON.stringify(panier));
  } catch {
    // Le panier reste utilisable si le stockage du navigateur est indisponible.
  }
};

function charger() {
  try {
    const lignes = JSON.parse(localStorage.getItem(CLE) || '[]');
    if (!Array.isArray(lignes)) return [];
    return lignes
      .filter((ligne) => ligne && typeof ligne.id === 'string'
        && trouverProduit(ligne.id)
        && Number.isInteger(ligne.quantite)
        && ligne.quantite >= 1 && ligne.quantite <= 99)
      .map(({ id, quantite }) => ({ id, quantite }));
  } catch {
    return [];
  }
}

export const panier = charger();

export function ajouter(id) {
  const produit = trouverProduit(id);
  if (!produit || produit.stock <= 0) return false;
  const ligne = panier.find((article) => article.id === id);
  if (ligne) {
    if (ligne.quantite >= Math.min(99, produit.stock)) return false;
    ligne.quantite += 1;
  } else {
    panier.push({ id, quantite: 1 });
  }
  sauvegarder();
  return true;
}

export function changerQuantite(id, quantite) {
  const ligne = panier.find((article) => article.id === id);
  if (!ligne) return;
  if (Number.isInteger(quantite) && quantite <= 0) {
    supprimer(id);
    return;
  }
  if (!Number.isInteger(quantite)) return;
  const produit = trouverProduit(id);
  ligne.quantite = Math.min(99, produit?.stock ?? 99, quantite);
  if (ligne.quantite <= 0) supprimer(id);
  else sauvegarder();
}

export function supprimer(id) {
  const index = panier.findIndex((article) => article.id === id);
  if (index >= 0) {
    panier.splice(index, 1);
    sauvegarder();
  }
}

export const compterArticles = () =>
  panier.reduce((somme, { quantite }) => somme + quantite, 0);

export const calculerTotal = () => panier.reduce((somme, { id, quantite }) => {
  const produit = trouverProduit(id);
  return produit ? somme + produit.prix * quantite : somme;
}, 0);

export function recharger() {
  panier.splice(0, panier.length, ...charger());
}

