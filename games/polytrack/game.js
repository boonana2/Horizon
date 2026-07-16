document.addEventListener('DOMContentLoaded', () => {
  const startPlayBtn = document.getElementById('start-play');
  const previewOverlay = document.getElementById('preview');

  // Elements for tab switching (Gallery, Description, Controls)
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabPanels = document.querySelectorAll('.tab-panel');

  // --- 1. HANDLE TAB SWITCHING ---
  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      tabButtons.forEach(btn => btn.classList.remove('active'));
      tabPanels.forEach(panel => panel.classList.remove('active'));

      button.classList.add('active');

      const targetPanelId = button.getAttribute('data-tab');
      const targetPanel = document.querySelector(`[data-panel="${targetPanelId}"]`);
      if (targetPanel) {
        targetPanel.classList.add('active');
      }
    });
  });

  // --- 2. LAUNCH GAME MANUALLY ON PLAY CLICK ---
  if (startPlayBtn && previewOverlay) {
    startPlayBtn.addEventListener('click', () => {
      // 1. Hide the start screen preview overlay
      previewOverlay.classList.add('hidden');

      // 2. Dynamically load the game engine scripts so the game only starts now
      const errorScreenScript = document.createElement('script');
      errorScreenScript.src = "https://cdn.jsdelivr.net/gh/AZURE2077/polytrack-beta-0.6.0@main/error_screen.bundle.js";
      errorScreenScript.defer = true;
      document.body.appendChild(errorScreenScript);

      const mainScript = document.createElement('script');
      mainScript.src = "https://cdn.jsdelivr.net/gh/AZURE2077/polytrack-beta-0.6.0@main/main.bundle.js";
      mainScript.defer = true;
      document.body.appendChild(mainScript);

      // 3. Keep canvas focus ready for control input
      const gameCanvas = document.getElementById('screen');
      if (gameCanvas) {
        gameCanvas.focus();
      }
    });
  }
});
