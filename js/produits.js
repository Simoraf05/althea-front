// Les prix sont des exemples. Les deux produits épuisés servent à tester le tri.
export const produits = [
  { id: 'tensiometre', nom: 'Tensiomètre électronique de bras', prix: 49.9, stock: 0, prioritaire: true,
    categorie: 'diagnostic', image: 'img/tensiometre-face-800.jpg', description: 'Tensiomètre de bras numérique.', caracteristique: 'Brassard 22 à 42 cm, mémoire de 60 mesures.' },
  { id: 'kit-diagnostic', nom: 'Kit de diagnostic médical', prix: 129, stock: 8, prioritaire: true,
    categorie: 'diagnostic', image: 'img/categorie-diagnostic.png', description: 'Les accessoires pour les examens du cabinet.', caracteristique: 'Kit de diagnostic avec rangement.' },
  { id: 'oxymetre', nom: 'Oxymètre de pouls', prix: 34.5, stock: 20, prioritaire: true,
    categorie: 'diagnostic', image: 'img/oxymetre-photo.jpg', description: 'Mesure du pouls et de la saturation.', caracteristique: 'Écran numérique, alimentation par piles.' },
  { id: 'stethoscope', nom: 'Stéthoscope', prix: 39.9, stock: 15, prioritaire: false,
    categorie: 'diagnostic', image: 'img/stethoscope-photo.png', description: 'Stéthoscope pour les examens courants.', caracteristique: 'Double pavillon et embouts souples.' },
  { id: 'kit-soins', nom: 'Kit de soins', prix: 24.9, stock: 15, prioritaire: false,
    categorie: 'soins', image: 'img/categorie-soins.png', description: 'Matériel pour les soins du quotidien.', caracteristique: 'Compresses et accessoires de soins.' },
  { id: 'gants', nom: 'Gants nitrile <img src="x" onerror="alert(1)">', prix: 9.9, stock: 30, prioritaire: false,
    categorie: 'consommables', image: 'img/categorie-consommables.png', description: 'Produit de test : son nom doit rester du texte.', caracteristique: 'Boîte de 100 gants sans latex.' },
  { id: 'echographe', nom: 'Échographe portable', prix: 2490, stock: 0, prioritaire: false,
    categorie: 'diagnostic', image: 'img/banniere-echographe.png', description: 'Appareil pour les examens par échographie.', caracteristique: 'Écran intégré et appareil transportable.' },
  { id: 'table-examen', nom: 'Table d’examen', prix: 289, stock: 6, prioritaire: false,
    categorie: 'mobilier', image: 'img/categorie-mobilier.png', description: 'Table pour équiper le cabinet.', caracteristique: 'Dossier réglable et revêtement lavable.' },
];

export const trouverProduit = (id) => produits.find((produit) => produit.id === id);
