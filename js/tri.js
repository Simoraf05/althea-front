const rang = ({ stock, prioritaire }) => {
  if (stock === 0) return 2;
  if (prioritaire) return 0;
  return 1;
};

// sort modifie un tableau : on travaille toujours sur une copie.
export const trierCatalogue = (liste) => [...liste].sort((a, b) => rang(a) - rang(b));

const comparerPrix = (a, b, sens) =>
  Number(a.stock === 0) - Number(b.stock === 0) || sens * (a.prix - b.prix);

export const TRIS = {
  recommande: trierCatalogue,
  'prix-croissant': (liste) => [...liste].sort((a, b) => comparerPrix(a, b, 1)),
  'prix-decroissant': (liste) => [...liste].sort((a, b) => comparerPrix(a, b, -1)),
};

export const lireTri = (valeur) => Object.hasOwn(TRIS, valeur) ? valeur : 'recommande';
export const trierPar = (liste, choix) => TRIS[lireTri(choix)](liste);
