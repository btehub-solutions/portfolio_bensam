/**
 * M3 Spec-Compliant Carousel Controller
 */

export function initCarousel(containerElement) {
  if (!containerElement) return;

  const track = containerElement.querySelector('.bte-carousel');
  const prevBtn = containerElement.querySelector('.bte-carousel-prev');
  const nextBtn = containerElement.querySelector('.bte-carousel-next');

  if (track && prevBtn && nextBtn) {
    prevBtn.addEventListener('click', () => {
      track.scrollBy({ left: -296, behavior: 'smooth' });
    });

    nextBtn.addEventListener('click', () => {
      track.scrollBy({ left: 296, behavior: 'smooth' });
    });
  }
}
