const CLE_THEME = 'althea-theme';
const racine = document.documentElement;

function appliquerTheme(theme, memoriser = false) {
  const sombre = theme === 'dark';
  racine.dataset.theme = sombre ? 'dark' : 'light';

  document.querySelectorAll('.logo img').forEach((logo) => {
    logo.src = sombre ? 'img/logo-dark.svg' : 'img/logo.svg';
  });

  const metaCouleur = document.querySelector('meta[name="theme-color"]');
  if (metaCouleur) metaCouleur.content = sombre ? '#121a28' : '#2d5bd1';

  document.querySelectorAll('.theme-toggle').forEach((bouton) => {
    const etiquette = sombre ? 'Activer le thème clair' : 'Activer le thème sombre';
    bouton.setAttribute('aria-label', etiquette);
    bouton.setAttribute('title', etiquette);
    bouton.setAttribute('aria-pressed', String(sombre));
    const icone = bouton.querySelector('.theme-toggle-icon');
    if (icone) icone.textContent = sombre ? '☀️' : '🌙';
  });

  if (memoriser) {
    try {
      localStorage.setItem(CLE_THEME, sombre ? 'dark' : 'light');
    } catch {
      // Le thème reste utilisable même si le stockage local est désactivé.
    }
  }
}

let themeInitial = 'light';
try {
  themeInitial = localStorage.getItem(CLE_THEME) === 'dark' ? 'dark' : 'light';
} catch {
  // Le site démarre en thème clair si le stockage local est indisponible.
}
appliquerTheme(themeInitial);

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.theme-toggle').forEach((bouton) => {
    bouton.addEventListener('click', () => {
      appliquerTheme(racine.dataset.theme === 'dark' ? 'light' : 'dark', true);
    });
  });
});

window.addEventListener('storage', (event) => {
  if (event.key === CLE_THEME) appliquerTheme(event.newValue === 'dark' ? 'dark' : 'light');
});
