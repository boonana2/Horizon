// ---------------------------------------------------------
// Add a new game by adding one object to this list.
// slug = the folder name inside /games/ that holds the game.
// If a game isn't built yet, set ready: false and it'll show
// as a locked slot instead of a broken link.
// ---------------------------------------------------------
const games = [
  { title: "Untitled Game", slug: "game-1", blurb: "Not started yet.", ready: false },
  { title: "Untitled Game", slug: "game-2", blurb: "Not started yet.", ready: false },
  { title: "Untitled Game", slug: "game-3", blurb: "Not started yet.", ready: false },
];

const shelf = document.getElementById("shelf");
const count = document.getElementById("cart-count");

const readyGames = games.filter(g => g.ready);
count.textContent = `${readyGames.length} loaded`;

games.forEach((game, i) => {
  const card = document.createElement(game.ready ? "a" : "div");
  card.className = "cartridge" + (game.ready ? "" : " locked");
  if (game.ready) card.href = `games/${game.slug}/index.html`;

  card.innerHTML = `
    <div class="cartridge-top"></div>
    <div class="cartridge-label">
      <span class="cartridge-num">${String(i + 1).padStart(2, "0")}</span>
      <h3>${game.title}</h3>
      <p>${game.blurb}</p>
      <span class="cartridge-status">${game.ready ? "PRESS START" : "LOCKED"}</span>
    </div>
  `;

  shelf.appendChild(card);
});
