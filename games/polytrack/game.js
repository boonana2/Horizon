// Preview tabs switching: Gallery / Description / Controls
document.querySelectorAll(".tab-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
    document.querySelectorAll(".tab-panel").forEach(p => p.classList.remove("active"));
    btn.classList.add("active");
    document.querySelector(`.tab-panel[data-panel="${btn.dataset.tab}"]`).classList.add("active");
  });
});

const previewOverlay = document.getElementById("preview");
const gameIframe = document.getElementById("game-iframe");
const showPreviewBtn = document.getElementById("show-preview-btn");
const playBtn = document.getElementById("start-play");

// Start playing: Hide preview overlay, show navbar "Preview" button, and load the embedded game
playBtn.addEventListener("click", () => {
  previewOverlay.classList.add("hidden");
  showPreviewBtn.style.display = "inline-block";
  gameIframe.src = "polytrack.html"; // Loads the local PolyTrack game
  gameIframe.focus();
});

// Back to Preview button in navbar: Show preview overlay, hide navbar button, and unload the game to clear memory
showPreviewBtn.addEventListener("click", () => {
  previewOverlay.classList.remove("hidden");
  showPreviewBtn.style.display = "none";
  gameIframe.src = "about:blank"; // Safe unload prevents lingering audio or WebGL execution in the background
});
