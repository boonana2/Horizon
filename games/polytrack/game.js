// game.js - Handles the template menus, tabs, and game launch triggers

document.addEventListener('DOMContentLoaded', () => {
  // Elements for main screen overlays
  const startPlayBtn = document.getElementById('start-play');
  const previewOverlay = document.getElementById('preview');
  const menuOverlay = document.getElementById('menu');
  const backBtn = document.getElementById('back-to-preview');
  const mode2pBtn = document.getElementById('mode-2p');
  const modeCpuBtn = document.getElementById('mode-cpu');

  // Elements for tab switching (Gallery, Description, Controls)
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabPanels = document.querySelectorAll('.tab-panel');

  // --- 1. HANDLE TAB SWITCHING (Gallery, Description, Controls) ---
  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove 'active' class from all buttons and panels
      tabButtons.forEach(btn => btn.classList.remove('active'));
      tabPanels.forEach(panel => panel.classList.remove('active'));

      // Add 'active' class to the clicked button
      button.classList.add('active');

      // Find and activate the matching content panel
      const targetPanelId = button.getAttribute('data-tab');
      const targetPanel = document.querySelector(`[data-panel="${targetPanelId}"]`);
      if (targetPanel) {
        targetPanel.classList.add('active');
      }
    });
  });

  // --- 2. OVERLAY NAVIGATION (Play -> Menu -> Game) ---
  
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

  // Dismiss overlays entirely and let the underlying game run
  const launchGame = () => {
    if (menuOverlay) menuOverlay.classList.add('hidden');
    if (previewOverlay) previewOverlay.classList.add('hidden');
    
    // Focus the game canvas so keyboard controls (WASD/Arrows) work immediately
    const gameCanvas = document.getElementById('screen');
    if (gameCanvas) {
      gameCanvas.focus();
    }
  };

  if (mode2pBtn) mode2pBtn.addEventListener('click', launchGame);
  if (modeCpuBtn) modeCpuBtn.addEventListener('click', launchGame);
});
