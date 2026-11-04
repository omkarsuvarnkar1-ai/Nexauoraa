/**
 * Nexaouraa Consultancy - Infinite Headline Ticker
 */
document.addEventListener('DOMContentLoaded', function () {
  const tickerParents = document.querySelectorAll('.ticker-parent');

  tickerParents.forEach(parent => {
    const track = parent.querySelector('.ticker-track') || parent.querySelector('.animate-ticker') || parent.querySelector('.ticker-animate');
    if (!track) return;

    // Pause on hover
    parent.addEventListener('mouseenter', () => {
      track.style.animationPlayState = 'paused';
    });

    parent.addEventListener('mouseleave', () => {
      track.style.animationPlayState = 'running';
    });
  });
});
