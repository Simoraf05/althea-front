// On teste la rupture en premier : même un prioritaire épuisé va à la fin.
const rang = ({ stock, prioritaire }) => {
  if (stock === 0) return 2;
  if (prioritaire) return 0;
  return 1;
};

// sort modifie un tableau : on travaille toujours sur une copie.
export const trierCatalogue = (liste) => [...liste].sort((a, b) => rang(a) - rang(b));

// On place les épuisés à la fin, puis on compare les prix.
const comparerPrix = (a, b, sens) =>
  Number(a.stock === 0) - Number(b.stock === 0) || sens * (a.prix - b.prix);

export const TRIS = {
  recommande: trierCatalogue,
  'prix-croissant': (liste) => [...liste].sort((a, b) => comparerPrix(a, b, 1)),
  'prix-decroissant': (liste) => [...liste].sort((a, b) => comparerPrix(a, b, -1)),
};

// Un tri inconnu dans l’adresse devient le tri recommandé.
export const lireTri = (valeur) => Object.hasOwn(TRIS, valeur) ? valeur : 'recommande';
export const trierPar = (liste, choix) => TRIS[lireTri(choix)](liste);
