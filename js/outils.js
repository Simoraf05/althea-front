// Le prix est mis au format français seulement au moment de l’afficher.
export const formaterPrix = (prix) => `${prix.toFixed(2).replace('.', ',')} €`;
