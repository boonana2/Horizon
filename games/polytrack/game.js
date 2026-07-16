// game.js - Handles the Horizon template overlay menus

document.addEventListener('DOMContentLoaded', () => {
  const startPlayBtn = document.getElementById('start-play');
  const previewOverlay = document.getElementById('preview');
  const menuOverlay = document.getElementById('menu');
  const backBtn = document.getElementById('back-to-preview');
  const mode2pBtn = document.getElementById('mode-2p');
  const modeCpuBtn = document.getElementById('mode-cpu');

  // When clicking "Play" on the Preview screen, show the Mode selection menu
  if (startPlayBtn && previewOverlay && menuOverlay) {
    startPlayBtn.addEventListener('click', () => {
      previewOverlay.classList.add('hidden');
      menuOverlay.classList.remove('hidden');
    });
  }

  // When clicking "Back" on the Mode selection menu, go back to Preview
  if (backBtn && previewOverlay && menuOverlay) {
    backBtn.addEventListener('click', () => {
      menuOverlay.classList.add('hidden');
      previewOverlay.classList.remove('hidden');
    });
  }

  // Dismiss the menu screen entirely and let the underlying game render
  const launchGame = () => {
    if (menuOverlay) menuOverlay.classList.add('hidden');
    if (previewOverlay) previewOverlay.classList.add('hidden');
    // The CDN game scripts automatically capture keyboard focus once the overlays are gone
  };

  if (mode2pBtn) mode2pBtn.addEventListener('click', launchGame);
  if (modeCpuBtn) modeCpuBtn.addEventListener('click', launchGame);
});
