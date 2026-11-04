import { trouverProduit } from './produits.js';

export const CLE = 'althea-panier';

// Le stockage peut être modifié dans l’inspecteur : chaque ligne est vérifiée.
export function charger() {
  try {
    const lignes = JSON.parse(localStorage.getItem(CLE)) ?? [];
    if (!Array.isArray(lignes)) return [];
    const propres = [];
    lignes.forEach((ligne) => {
      if (!ligne || typeof ligne.id !== 'string') return;
      const produit = trouverProduit(ligne.id);
      if (!produit || produit.stock === 0 || !Number.isInteger(ligne.quantite)
        || ligne.quantite < 1 || ligne.quantite > 99) return;
      const existante = propres.find((element) => element.id === ligne.id);
      if (existante) existante.quantite = Math.min(99, existante.quantite + ligne.quantite);
      else propres.push({ id: ligne.id, quantite: ligne.quantite });
    });
    return propres;
  } catch {
    return [];
  }
}

// On retrouve les articles sauvegardés quand on ouvre une nouvelle page.
export const panier = charger();

const sauvegarder = () => {
  try {
    localStorage.setItem(CLE, JSON.stringify(panier));
    return true;
  } catch {
    return false;
  }
};

export const stockageDisponible = () => {
  try {
    const essai = `${CLE}-test`;
    localStorage.setItem(essai, '1');
    localStorage.removeItem(essai);
    return true;
  } catch {
    return false;
  }
};

// Un nouvel ajout augmente la quantité si le produit est déjà présent.
export function ajouter(id) {
  const produit = trouverProduit(id);
  if (!produit || produit.stock === 0) return false;
  const ligne = panier.find((element) => element.id === id);
  if (ligne && ligne.quantite >= 99) return false;
  if (ligne) ligne.quantite += 1;
  else panier.push({ id, quantite: 1 });
  sauvegarder();
  return true;
}

export function supprimer(id) {
  const index = panier.findIndex((ligne) => ligne.id === id);
  if (index !== -1) panier.splice(index, 1);
  sauvegarder();
}

export function changerQuantite(id, quantite) {
  if (!Number.isInteger(quantite) || quantite > 99) return false;
  if (quantite <= 0) {
    supprimer(id);
    return true;
  }
  const ligne = panier.find((element) => element.id === id);
  if (!ligne) return false;
  ligne.quantite = quantite;
  sauvegarder();
  return true;
}

export const compterArticles = () => panier.reduce((somme, ligne) => somme + ligne.quantite, 0);

// On calcule en centimes pour éviter les erreurs d’arrondi des décimales.
export const calculerTotal = () => panier.reduce((somme, { id, quantite }) =>
  somme + Math.round(trouverProduit(id).prix * 100) * quantite, 0) / 100;

export const recharger = () => panier.splice(0, panier.length, ...charger());
