export const produits = [
  { id: 'tensiometre-bras', nom: 'Tensiomètre électronique de bras', prix: 49.90, stock: 8, prioritaire: true, image: 'img/tensiometre.svg', categorie: 'diagnostic', description: 'Un tensiomètre électronique avec écran facile à lire.' },
  { id: 'oxymetre', nom: 'Oxymètre de pouls', prix: 24.90, stock: 12, prioritaire: true, image: 'img/oxymetre.svg', categorie: 'diagnostic', description: 'Mesure simple de la saturation en oxygène.' },
  { id: 'thermometre', nom: 'Thermomètre sans contact', prix: 19.90, stock: 0, prioritaire: false, image: 'img/thermometre.svg', categorie: 'diagnostic', description: 'Thermomètre infrarouge sans contact.' },
  { id: 'stethoscope', nom: 'Stéthoscope double pavillon', prix: 35.00, stock: 6, prioritaire: true, image: 'img/stethoscope.svg', categorie: 'diagnostic', description: 'Stéthoscope polyvalent à double pavillon.' },
  { id: 'glucometre', nom: 'Glucomètre', prix: 29.90, stock: 0, prioritaire: true, image: 'img/glucometre.svg', categorie: 'diagnostic', description: 'Appareil de mesure de la glycémie.' },
  { id: 'tensiometre-poignet', nom: 'Tensiomètre de poignet', prix: 39.90, stock: 4, prioritaire: false, image: 'img/tensiometre-poignet.svg', categorie: 'diagnostic', description: 'Tensiomètre compact pour le poignet.' },
  { id: 'gants-piege', nom: 'Gants nitrile <img src="x" onerror="alert(1)">', prix: 8.90, stock: 0, prioritaire: false, image: 'img/categorie-consommables.svg', categorie: 'consommables', description: 'Produit de test permanent contre les injections HTML.' },
];

export const trouverProduit = (id) => produits.find((produit) => produit.id === id);

