/* Le tri du cahier des charges : prioritaires en tête, épuisés à la fin. */
const rang = ({ stock, prioritaire }) => {
  if (stock === 0) return 2; // l'épuisé d'abord : un prioritaire épuisé va quand même à la fin
  if (prioritaire) return 0;
  return 1;
};

export const trierCatalogue = (liste) => [...liste].sort((a, b) => rang(a) - rang(b));

const epuisesALaFin = (comparer) => (liste) =>
  [...liste].sort((a, b) => (a.stock === 0) - (b.stock === 0) || comparer(a, b));

export const TRIS = {
  recommande: trierCatalogue,
  'prix-croissant': epuisesALaFin((a, b) => a.prix - b.prix),
  'prix-decroissant': epuisesALaFin((a, b) => b.prix - a.prix),
};

// Liste blanche : une valeur inconnue (tapée dans l'adresse) devient « recommande ».
export const lireTri = (valeur) => (Object.hasOwn(TRIS, valeur) ? valeur : 'recommande');
export const trierPar = (liste, choix) => TRIS[lireTri(choix)](liste);
