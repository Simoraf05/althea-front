/* Les produits du catalogue : des données, pas du HTML. */
export const produits = [
  {
    id: 'oxymetre', nom: 'Oxymètre de pouls', prix: 24.9, stock: 15, prioritaire: true, image: 'oxymetre.svg',
    description: 'Oxymètre de pouls à pince : il mesure la saturation en oxygène et la fréquence cardiaque en quelques secondes.',
    caracteristiques: [['Type', 'Oxymètre de pouls à pince'], ['Mesures', 'Saturation en oxygène et pouls'], ['Affichage', 'Écran numérique'], ['Alimentation', 'Piles']],
  },
  {
    id: 'thermometre', nom: 'Thermomètre sans contact', prix: 19.9, stock: 22, prioritaire: false, image: 'thermometre.svg',
    description: 'Thermomètre infrarouge : la température du front en une seconde, sans toucher la peau.',
    caracteristiques: [['Type', 'Thermomètre infrarouge'], ['Mesure', 'Front, sans contact'], ['Affichage', 'Écran rétroéclairé'], ['Alimentation', 'Piles']],
  },
  {
    id: 'stethoscope', nom: 'Stéthoscope double pavillon', prix: 35, stock: 8, prioritaire: true, image: 'stethoscope.svg',
    description: 'Stéthoscope à double pavillon pour l’auscultation des adultes et des enfants.',
    caracteristiques: [['Type', 'Stéthoscope double pavillon'], ['Usage', 'Auscultation cardiaque et pulmonaire'], ['Pavillon', 'Deux faces : adulte et enfant'], ['Entretien', 'Olives amovibles']],
  },
  {
    id: 'tensiometre-poignet', nom: 'Tensiomètre de poignet', prix: 39.9, stock: 0, prioritaire: true, image: 'tensiometre-poignet.svg',
    description: 'Tensiomètre de poignet compact, pratique en déplacement.',
    caracteristiques: [['Type', 'Tensiomètre électronique de poignet'], ['Affichage', 'Écran numérique'], ['Mémoire', '60 mesures'], ['Alimentation', 'Piles']],
  },
  {
    id: 'thermometre-auriculaire', nom: 'Thermomètre auriculaire', prix: 29.9, stock: 12, prioritaire: false, image: 'thermometre.svg',
    description: 'Thermomètre auriculaire : une mesure rapide de la température dans l’oreille.',
    caracteristiques: [['Type', 'Thermomètre auriculaire'], ['Mesure', 'Dans l’oreille'], ['Affichage', 'Écran numérique'], ['Alimentation', 'Piles']],
  },
  {
    id: 'tensiometre', nom: 'Tensiomètre électronique de bras', prix: 49.9, stock: 0, prioritaire: false, image: 'tensiometre.svg',
    description: 'Tensiomètre électronique destiné à mesurer la pression artérielle au bras. Son écran facilite la lecture des résultats.',
    caracteristiques: [['Type', 'Tensiomètre électronique à bras'], ['Affichage', 'Écran numérique'], ['Utilisation', 'Mesure de la pression artérielle'], ['Alimentation', 'Piles']],
    brassard: true, // affiche le tableau des tailles de brassard
    galerie: [
      { fichier: 'tensiometre-face-400.jpg', srcset: 'img/tensiometre-face-400.jpg 400w, img/tensiometre-face-800.jpg 800w', alt: 'Tensiomètre vu de face : écran numérique affichant la pression et le pouls' },
      { fichier: 'tensiometre-detail-1.svg', alt: 'Détail de l’écran du tensiomètre' },
      { fichier: 'tensiometre-detail-2.svg', alt: 'Détail du brassard du tensiomètre' },
    ],
  },
  // Produit piège : test permanent contre la faille XSS (voir docs/securite.md). Ne pas le retirer.
  {
    id: 'gants-nitrile', nom: 'Gants nitrile <img src="x" onerror="alert(1)">', prix: 9.5, stock: 40, prioritaire: false, image: 'categorie-consommables.svg',
    description: 'Gants d’examen en nitrile, sans poudre, en boîte de 100.',
    caracteristiques: [['Type', 'Gants d’examen'], ['Matière', 'Nitrile'], ['Poudre', 'Sans poudre'], ['Conditionnement', 'Boîte de 100']],
  },
];

export const trouverProduit = (id) => produits.find((p) => p.id === id);
