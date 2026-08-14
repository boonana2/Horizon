const games = [
  { title: "Angry Birds", slug: "angry-birds", blurb: "A physics‑based puzzle game where you launch different birds from a slingshot to destroy structures and knock out enemy pigs.", ready: true },
  { title: "Badminton", slug: "badminton", blurb: "A fast, physics‑based racket game where two players volley a shuttle across the court using precise timing, positioning, and quick reactions.", ready: true },
  { title: "Basketball Legends", slug: "basketball-legends", blurb: "A fast, chaotic arcade basketball game with iconic players and flashy special moves.", ready: true },
  { title: "Bomberman", slug: "bomberman", blurb: "A fast-paced multiplayer action game where players place bombs to be the last one standing.", ready: true },
  { title: "Chess", slug: "chess", blurb: "A strategic board game where two players move different‑ability pieces on an 8×8 grid to checkmate the opponent's king.", ready: true },
  { title: "Crossy Road", slug: "crossy-road", blurb: "An endless arcade hopper where players guide characters across traffic, rivers, and obstacles while aiming for the longest possible run.", ready: true },
  { title: "Draw Climber", slug: "draw-climber", blurb: "A physics‑based racing game where players sketch custom legs for a block‑shaped runner to adapt to changing terrain.", ready: true },
  { title: "Drift Boss", slug: "drift-boss", blurb: "A casual drifting game where players steer a car along a narrow, winding platform, maintaining control to avoid falling off the edge.", ready: true },
  { title: "Fireboy & Watergirl: Forest", slug: "fbwg:forest", blurb: "A puzzle-platformer where players guide both characters through several puzzles to reach the exit of each level.", ready: true },
  { title: "Fireboy & Watergirl: Light", slug: "fbwg:light", blurb: "A puzzle-platformer where players guide both characters through several puzzles to reach the exit of each level.", ready: true },
  { title: "Fireboy & Watergirl: Ice", slug: "fbwg:ice", blurb: "A puzzle-platformer where players guide both characters through several puzzles to reach the exit of each level.", ready: true },
  { title: "Fireboy & Watergirl: Crystal", slug: "fbwg:crystal", blurb: "A puzzle-platformer where players guide both characters through several puzzles to reach the exit of each level.", ready: true },
  { title: "Fireboy & Watergirl & Greenblub 1", slug: "fbwggb1", blurb: "A puzzle-platformer where players guide both characters through several puzzles to reach the exit of each level.", ready: true },
  { title: "Fireboy & Watergirl & Greenblub 2", slug: "gbwggb2", blurb: "A puzzle-platformer where players guide both characters through several puzzles to reach the exit of each level.", ready: true },
  { title: "Fishy", slug: "fishy", blurb: "A survival arcade game where you swim through the ocean eating smaller fish to grow while avoiding larger predators that can swallow you whole.", ready: true },
  { title: "Geometry Dash", slug: "gd", blurb: "A rhythm‑based platformer where you jump, fly, and dodge obstacles in fast, music‑synced levels.", ready: true },
  { title: "Geometry Dash Vibes", slug: "gd-vibes", blurb: "A rhythm‑runner where you hold space to float upward and release to drop while dodging spikes and obstacles.", ready: true },
  { title: "Google Baseball", slug: "gbaseball", blurb: "A timing‑based arcade sports game where players hit pitches and rack up runs against increasingly tricky AI fielders.", ready: true },
  { title: "Google Garden Gnomes", slug: "ggg", blurb: "A physics‑based launch game where players catapult gnomes to plant flowers and score points across whimsical garden environments.", ready: true },
  { title: "Google Minesweeper", slug: "gminesweeper", blurb: "A classic logic‑based grid game where players uncover tiles and use numbered clues to avoid hidden mines.", ready: true },
  { title: "Google Snake", slug: "gsnake", blurb: "A classic grid‑based arcade game where players guide a growing snake to collect food without colliding with walls or themselves.", ready: true },
  { title: "Guess Their Answer", slug: "guesstheiranswer", blurb: "A fast party‑style guessing game where players try to name the most common responses to everyday questions before time runs out.", ready: true },
  { title: "GumDrop Hop", slug: "gumdrophop", blurb: "A light arcade platformer where a bouncing gumdrop leaps across floating candy platforms, collecting stars while avoiding falls.", ready: true },
  { title: "Helix Jump", slug: "helix", blurb: "A fast‑paced arcade game where players guide a falling ball through rotating helix platforms while avoiding obstacles.", ready: true },
  { title: "Hole.io", slug: "holeio", blurb: "A competitive arcade game where players control a growing black hole that swallows objects, buildings, and opponents to become the largest on the map.", ready: true },
  { title: "Idle Breakout", slug: "idle-breakout", blurb: "An idle brick‑breaking game where you buy balls, upgrade them, and let them destroy blocks automatically to earn more cash.", ready: true },
  { title: "Papa's Bakeria", slug: "pbakeria", blurb: "A time‑management cooking simulator where you run a restaurant, take orders, prepare food, and serve customers as fast and accurately as possible.", ready: true },
  { title: "Papa's Burgeria", slug: "pburgeria", blurb: "A time‑management cooking simulator where you run a restaurant, take orders, prepare food, and serve customers as fast and accurately as possible.", ready: true },
  { title: "Papa's Cheeseria", slug: "pcheeseria", blurb: "A time‑management cooking simulator where you run a restaurant, take orders, prepare food, and serve customers as fast and accurately as possible.", ready: true },
  { title: "Papa's Cupcakeria", slug: "pcupcakeria", blurb: "A time‑management cooking simulator where you run a restaurant, take orders, prepare food, and serve customers as fast and accurately as possible.", ready: true },
  { title: "Papa's Donuteria", slug: "pdonuteria", blurb: "A time‑management cooking simulator where you run a restaurant, take orders, prepare food, and serve customers as fast and accurately as possible.", ready: true },
  { title: "Papa's Freezeria", slug: "pfreezeria", blurb: "A time‑management cooking simulator where you run a restaurant, take orders, prepare food, and serve customers as fast and accurately as possible.", ready: true },
  { title: "Papa's Hotdoggeria", slug: "photdoggeria", blurb: "A time‑management cooking simulator where you run a restaurant, take orders, prepare food, and serve customers as fast and accurately as possible.", ready: true },
  { title: "Papa's Pancakeria", slug: "ppancakeria", blurb: "A time‑management cooking simulator where you run a restaurant, take orders, prepare food, and serve customers as fast and accurately as possible.", ready: true },
  { title: "Papa's Pastaria", slug: "ppastaria", blurb: "A time‑management cooking simulator where you run a restaurant, take orders, prepare food, and serve customers as fast and accurately as possible.", ready: true },
  { title: "Papa's Pizzeria", slug: "ppizzeria", blurb: "A time‑management cooking simulator where you run a restaurant, take orders, prepare food, and serve customers as fast and accurately as possible.", ready: true },
  { title: "Papa's Scooperia", slug: "pscooperia", blurb: "A time‑management cooking simulator where you run a restaurant, take orders, prepare food, and serve customers as fast and accurately as possible.", ready: true },
  { title: "Papa's Sushiria", slug: "psushiria", blurb: "A time‑management cooking simulator where you run a restaurant, take orders, prepare food, and serve customers as fast and accurately as possible.", ready: true },
  { title: "Papa's Taco Mia", slug: "ptacomia", blurb: "A time‑management cooking simulator where you run a restaurant, take orders, prepare food, and serve customers as fast and accurately as possible.", ready: true },
  { title: "Papa's Wingeria", slug: "pwingeria", blurb: "A time‑management cooking simulator where you run a restaurant, take orders, prepare food, and serve customers as fast and accurately as possible.", ready: true },
  { title: "Paper.io", slug: "paperio", blurb: "A territory‑capture game where you draw lines to expand your area while protecting your trail from other players.", ready: true },
  { title: "Ping Pong", slug: "pingpong", blurb: "A fast, close‑range table sport where two players hit a lightweight ball back and forth using small paddles on a divided table.", ready: true },
  { title: "Poly Track", slug: "polytrack", blurb: "A fast-paced racing game where players race through custom tracks, compete for the fastest times, and build their own courses.", ready: true },
  { title: "Rocket League", slug: "rocket-league", blurb: "A high‑speed sports game where you drive rocket‑powered cars to hit a giant ball and score goals.", ready: true },
  { title: "Rooftop Snipers 1", slug: "rs1", blurb: "A precision‑focused shooting game where players eliminate targets from elevated vantage points while managing timing and accuracy.", ready: true },
  { title: "Rooftop Snipers 2", slug: "rs2", blurb: "A precision‑focused shooting game where players eliminate targets from elevated vantage points while managing timing and accuracy.", ready: true },
  { title: "Run 1", slug: "run1", blurb: "A fast‑paced 3D platformer where players sprint, jump, and wall‑run through collapsing tunnels and floating platforms to reach the end of each level.", ready: true },
  { title: "Run 2", slug: "run2", blurb: "A fast‑paced 3D platformer where players sprint, jump, and wall‑run through collapsing tunnels and floating platforms to reach the end of each level.", ready: true },
  { title: "Run 3", slug: "run3", blurb: "A fast‑paced 3D platformer where players sprint, jump, and wall‑run through collapsing tunnels and floating platforms to reach the end of each level.", ready: true },
  { title: "Slope", slug: "slope", blurb: "A fast downhill game where you control a speeding ball while dodging obstacles.", ready: true },
  { title: "Solar Smash", slug: "solarsmash", blurb: "A planet‑destruction simulator where players use powerful weapons and cosmic phenomena to obliterate worlds in spectacular detail.", ready: true },
  { title: "Stick Archers Battle", slug: "stickarcherbattle", blurb: "A minimalist archery duel game where players aim, draw, and fire arrows to defeat opponents using precise angle control and timing.", ready: true },
  { title: "Subway Surfers", slug: "subway-surfers", blurb: "An endless‑runner where you sprint down train tracks, dodge obstacles, and collect coins while escaping the inspector.", ready: true },
  { title: "Summit Smash", slug: "summit-smash", blurb: "A fast-paced multiplayer platform fighter inspired by Super Smash Bros.", ready: true },
  { title: "Superhot", slug: "superhot", blurb: "A first‑person action shooter game where time only moves when you move.", ready: true },
  { title: "Tennis", slug: "tennis", blurb: "A fast, court‑based sport where players hit a bouncing ball over a net using rackets, trying to land shots inbounds that the opponent can't return.", ready: true },
  { title: "Time Shooter 2", slug: "ts2", blurb: "A tactical first‑person action game where time only moves when the player moves, creating strategic combat encounters.", ready: true },
  { title: "Time Shooter 3", slug: "ts3", blurb: "A tactical first‑person action game where time only moves when the player moves, creating strategic combat encounters.", ready: true },
  { title: "Tiny Fishing", slug: "tiny-fishing", blurb: "A simple click‑and‑upgrade game where you drop a line, catch stacked fish, and earn coins to extend your line and increase your haul.", ready: true },
  { title: "Tomb of the Mask", slug: "tomb", blurb: "A rapid‑movement arcade maze game where players climb vertically through trap‑filled levels using instant swipe‑based motion.", ready: true },
  { title: "Vex 4", slug: "vex4", blurb: "A fast‑paced stickman platformer where players navigate deadly obstacle courses using precise movement and timing.", ready: true },
  { title: "Vex 5", slug: "vex5", blurb: "A fast‑paced stickman platformer where players navigate deadly obstacle courses using precise movement and timing.", ready: true },
  { title: "Vex 6", slug: "vex6", blurb: "A fast‑paced stickman platformer where players navigate deadly obstacle courses using precise movement and timing.", ready: true },
  { title: "Vex 7", slug: "vex7", blurb: "A fast‑paced stickman platformer where players navigate deadly obstacle courses using precise movement and timing.", ready: true },
  { title: "Vex 8", slug: "vex8", blurb: "A fast‑paced stickman platformer where players navigate deadly obstacle courses using precise movement and timing.", ready: true },
  { title: "Vex X3M 1", slug: "vexx3m1", blurb: "A fast‑paced motorcycle platformer where players race through obstacle‑filled tracks using precise jumps, momentum control, and stunt‑based movement.", ready: true },
  { title: "Vex X3M 2", slug: "vexx3m2", blurb: "A fast‑paced motorcycle platformer where players race through obstacle‑filled tracks using precise jumps, momentum control, and stunt‑based movement.", ready: true },
  { title: "2048", slug: "2048", blurb: "A sliding‑tile puzzle where you combine matching numbers to reach the 2048 tile.", ready: true },
  { title: "8-Ball", slug: "8ball", blurb: "A classic billiards game where you aim, shoot, and sink all your assigned balls before finishing with the 8‑ball.", ready: true },

  { title: "test game 1", slug: "smash", blurb: "", ready: false },
];

// ---------------------------------------------------------
// Section definitions: which slugs belong to which category,
// and in what order sections appear on the page. Any ready
// game not listed here falls into "More Games" as a safety
// net so nothing silently disappears if this list drifts out
// of sync with the games array above.
// ---------------------------------------------------------
const sectionDefs = [
  {
    name: "Action & Shooters",
    slugs: ["rs1", "rs2", "superhot", "ts2", "ts3"],
  },
  {
    name: "Arcade",
    slugs: ["bomberman", "crossy-road", "draw-climber", "drift-boss", "fishy", "gd", "gd-vibes", "guesstheiranswer", "gumdrophop", "helix", "holeio", "paperio", "polytrack", "run1", "run2", "run3", "slope", "solarsmash", "stickarcherbattle", "subway-surfers", "summit-smash", "tiny-fishing", "tomb", "vex4", "vex5", "vex6", "vex7", "vex8", "vexx3m1", "vexx3m2",],
  },
  {
    name: "Cooking",
    slugs: [
      "pbakeria", "pburgeria", "pcheeseria", "pcupcakeria", "pdonuteria",
      "pfreezeria", "photdoggeria", "ppancakeria", "ppastaria", "ppizzeria",
      "pscooperia", "psushiria", "ptacomia", "pwingeria",
    ],
  },
  {
    name: "Google Suite",
    slugs: ["gbaseball", "ggg", "gminesweeper", "gsnake"],
  },
  {
    name: "Idle",
    slugs: ["idle-breakout"],
  },
  {
    name: "Puzzle",
    slugs: ["angry-birds", "fbwg:forest", "fbwg:light", "fbwg:ice", "fbwg:crystal", "fbwggb1", "gbwggb2", "2048"],
  },
  {
    name: "Sports",
    slugs: ["badminton", "basketball-legends", "pingpong", "rocket-league", "tennis", "8ball"],
  },
  {
    name: "Strategy",
    slugs: ["chess"],
  },
];

const grid = document.getElementById("grid");
const count = document.getElementById("game-count");
const readyGames = games.filter(g => g.ready);
count.textContent = `${readyGames.length} live`;

const bySlug = new Map(games.map(g => [g.slug, g]));
const usedSlugs = new Set();

function makeTile(game, indexLabel) {
  const card = document.createElement(game.ready ? "a" : "div");
  card.className = "tile" + (game.ready ? "" : " locked");
  if (game.ready) card.href = `games/${game.slug}/index.html`;
  card.dataset.title = game.title.toLowerCase();
  card.innerHTML = `
    <span class="tile-num">${indexLabel}</span>
    <h3>${game.title}</h3>
    <p>${game.blurb}</p>
    <span class="tile-status">${game.ready ? "Play" : "Locked"}</span>
  `;
  return card;
}

// Reuses the existing .grid class for tile layout, so section
// grids look identical to the old single grid. .game-section
// and .section-heading are new, smaller-scale echoes of
// .grid-heading defined in style.css.
function makeSection(title, liveCount) {
  const section = document.createElement("section");
  section.className = "game-section";

  const header = document.createElement("div");
  header.className = "section-heading";
  header.innerHTML = `<h3>${title}</h3><span class="count">${liveCount} live</span>`;

  const sectionGrid = document.createElement("div");
  sectionGrid.className = "grid";

  section.appendChild(header);
  section.appendChild(sectionGrid);
  grid.appendChild(section);
  return sectionGrid;
}

let globalIndex = 0;

sectionDefs.forEach(({ name, slugs }) => {
  const sectionGames = slugs.map(slug => bySlug.get(slug)).filter(Boolean);
  if (sectionGames.length === 0) return;

  const liveCount = sectionGames.filter(g => g.ready).length;
  const sectionGrid = makeSection(name, liveCount);

  sectionGames.forEach(game => {
    usedSlugs.add(game.slug);
    globalIndex++;
    sectionGrid.appendChild(makeTile(game, String(globalIndex).padStart(2, "0")));
  });
});

// Anything ready that wasn't placed in a named section above.
const leftoverReady = games.filter(g => g.ready && !usedSlugs.has(g.slug));
if (leftoverReady.length > 0) {
  const sectionGrid = makeSection("More Games", leftoverReady.length);
  leftoverReady.forEach(game => {
    usedSlugs.add(game.slug);
    globalIndex++;
    sectionGrid.appendChild(makeTile(game, String(globalIndex).padStart(2, "0")));
  });
}

// Unready/locked games get their own section at the bottom.
const lockedGames = games.filter(g => !g.ready);
if (lockedGames.length > 0) {
  const sectionGrid = makeSection("Coming Soon", 0);
  lockedGames.forEach(game => {
    globalIndex++;
    sectionGrid.appendChild(makeTile(game, String(globalIndex).padStart(2, "0")));
  });
}

// ---------------------------------------------------------
// Search: filters tiles by title as the user types, and hides
// any section whose tiles are all filtered out.
// ---------------------------------------------------------
const searchInput = document.getElementById("search");
if (searchInput) {
  searchInput.addEventListener("input", () => {
    const query = searchInput.value.trim().toLowerCase();
    document.querySelectorAll(".game-section").forEach(section => {
      let anyVisible = false;
      section.querySelectorAll(".tile").forEach(tile => {
        const matches = tile.dataset.title.includes(query);
        tile.style.display = matches ? "" : "none";
        if (matches) anyVisible = true;
      });
      section.style.display = anyVisible ? "" : "none";
    });
  });
}
