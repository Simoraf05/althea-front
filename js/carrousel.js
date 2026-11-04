export function initialiserCarrousel() {
  const zone = document.querySelector('#une-defile');
  if (!zone) return;
  const slides = [...zone.querySelectorAll('.slide')];
  const pastilles = [...document.querySelectorAll('.pastilles a')];
  const reduireMouvement = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const defiler = (sens) => zone.scrollBy({
    left: sens * zone.clientWidth,
    behavior: reduireMouvement ? 'auto' : 'smooth',
  });
  document.querySelector('.precedent')?.addEventListener('click', () => defiler(-1));
  document.querySelector('.suivant')?.addEventListener('click', () => defiler(1));
  if (!('IntersectionObserver' in window)) return;
  const observateur = new IntersectionObserver((entrees) => {
    entrees.forEach((entree) => {
      if (!entree.isIntersecting) return;
      pastilles.forEach((lien) => {
        if (lien.hash === `#${entree.target.id}`) lien.setAttribute('aria-current', 'true');
        else lien.removeAttribute('aria-current');
      });
    });
  }, { root: zone, threshold: 0.6 });
  slides.forEach((slide) => observateur.observe(slide));
}

