const rang = ({ stock, prioritaire }) => {
  if (stock === 0) return 2;
  if (prioritaire) return 0;
  return 1;
};

export const trierCatalogue = (liste) =>
  [...liste].sort((a, b) => rang(a) - rang(b));

const garderEpuisesALaFin = (liste, comparaison) => [...liste].sort((a, b) => {
  if ((a.stock === 0) !== (b.stock === 0)) return a.stock === 0 ? 1 : -1;
  return comparaison(a, b);
});

export const TRIS = {
  recommande: trierCatalogue,
  'prix-croissant': (liste) => garderEpuisesALaFin(liste, (a, b) => a.prix - b.prix),
  'prix-decroissant': (liste) => garderEpuisesALaFin(liste, (a, b) => b.prix - a.prix),
};

export const lireTri = (valeur) =>
  Object.hasOwn(TRIS, valeur) ? valeur : 'recommande';

export const trierPar = (liste, choix = 'recommande') => TRIS[lireTri(choix)](liste);

