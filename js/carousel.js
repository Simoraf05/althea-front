export function initialiserCarrousel() {
    const zone = document.querySelector('.defile');
    const precedent = document.querySelector('.precedent');
    const suivant = document.querySelector('.suivant');

    if (!zone || !precedent || !suivant) return;

    const defiler = (sens) => {
        const doux = !window.matchMedia(
            '(prefers-reduced-motion: reduce)'
        ).matches;

        zone.scrollBy({
            left: sens * zone.clientWidth,
            behavior: doux ? 'smooth' : 'auto'
        });
    };

    precedent.addEventListener('click', () => defiler(-1));
    suivant.addEventListener('click', () => defiler(1));
    const slides = zone.querySelectorAll('[id]');
    const pastilles = document.querySelectorAll('.pastilles a');

    if (slides.length && pastilles.length) {
        const observateur = new IntersectionObserver((entrees) => {
            entrees.forEach((entree) => {
                if (!entree.isIntersecting) return;

                const id = entree.target.id;

                pastilles.forEach((lien) => {
                    if (lien.hash === `#${id}`) {
                        lien.setAttribute('aria-current', 'true');
                    } else {
                        lien.removeAttribute('aria-current');
                    }
                });
            });
        }, {
            root: zone,
            threshold: 0.6
        });

        slides.forEach((slide) => observateur.observe(slide));
    }
}