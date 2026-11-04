/* Petites fonctions utiles partout. */
export const formaterPrix = (prix) => `${prix.toFixed(2).replace('.', ',')} €`;

// Prix en centimes (nombre entier) : évite les erreurs d'arrondi des décimaux (0,1 + 0,2).
export const centimes = (prix) => Math.round(prix * 100);

// Crée un élément. Le texte passe par textContent : jamais lu comme du HTML (règle n° 1).
export const el = (balise, classe, texte) => {
  const e = document.createElement(balise);
  if (classe) e.className = classe;
  if (texte !== undefined) e.textContent = texte;
  return e;
};
