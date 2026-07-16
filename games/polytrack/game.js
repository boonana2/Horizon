// Preview tabs: Gallery / Description / Controls
document.querySelectorAll(".tab-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
    document.querySelectorAll(".tab-panel").forEach(p => p.classList.remove("active"));
    btn.classList.add("active");
    document.querySelector(`.tab-panel[data-panel="${btn.dataset.tab}"]`).classList.add("active");
  });
});

// Play Button: Open the huge local polytrack.html in a clean, unrestricted browser window
document.getElementById("start-play").addEventListener("click", () => {
  // Opening the file in a new window bypasses the iframe's sandbox security blocks,
  // allowing Chrome to run the local physics engine completely offline!
  window.open("polytrack.html", "_blank");
});
