export function initialiserMenu() {
  const bouton = document.querySelector('.menu-bouton');
  const menu = document.querySelector('.menu');
  if (!bouton || !menu) return;
  bouton.setAttribute('aria-expanded', 'false');
  bouton.setAttribute('aria-controls', 'menu-principal');
  menu.id = 'menu-principal';
  const fermer = () => bouton.setAttribute('aria-expanded', 'false');
  bouton.addEventListener('click', () => {
    const ouvert = bouton.getAttribute('aria-expanded') === 'true';
    bouton.setAttribute('aria-expanded', String(!ouvert));
  });
  menu.addEventListener('click', (event) => {
    if (event.target.closest('a')) fermer();
  });
  document.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape' || bouton.getAttribute('aria-expanded') !== 'true') return;
    fermer();
    bouton.focus();
  });
}

