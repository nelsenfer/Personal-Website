const modal = document.getElementById("developmentModal");

function closeModal() {
  modal.style.display = "none";
}

window.onload = () => {
  modal.style.display = "flex";
};

// Data Game Portofolio
const itchGames = [
  {
    title: "Apple Cat",
    description:
      "Pada suatu hari, di kehidupan hutan yang tenang, hiduplah sebuah apel langka bernama Lulu. Lulu adalah apel yang unik, karena sebagian tubuhnya berbentuk seperti kucing. Suatu hari, ketika ia sedang tertidur lelap, tiba-tiba angin kencang menghantam pohonnya dan mengganggu tidur tenangnya, hingga membuat Lulu terjatuh ke tanah.",
    coverImage:
      "https://img.itch.zone/aW1nLzI0MDMzNzA0LnBuZw==/original/PdPacE.png",
    link: "https://pemulabang.itch.io/apple-cat",
    tags: ["2D", "Platformer"],
  },
  {
    title: "KakiKan",
    description:
      "Play as a fish with legs, swimming through the reef in search of your friends. But beware of the hungry swordfishes waiting for the perfect moment to EAT you ! Swim > Collect Pearls > Jump n Hide",
    coverImage:
      "https://img.itch.zone/aW1hZ2UvMzk4NTU4Ny8yMzc4NTI0Ni5wbmc=/original/u9oeN6.png",
    link: "https://axllotl.itch.io/kakikan",
    tags: ["2D", "platformer", "hide and seek"],
  },
  {
    title: "Benang Merah",
    description:
      "Andre Pratama, seorang detektif muda, dipaksa menghadapi kenyataan pahit ketika mentornya ditemukan tewas di kantornya. Kematian itu bukan kecelakaan. Tidak juga bunuh diri. Ada sesuatu yang ditutupi.",
    coverImage:
      "https://img.itch.zone/aW1nLzI0MzczMDE0LnBuZw==/original/hJm0iy.png",
    link: "https://nelsss.itch.io/benang-merah",
    tags: ["Visual Novel", "RenPy", "crime"],
  },
  {
    title: "Monkey's Circus",
    description:
      "Di tengah gemerlap dunia sirkus yang penuh lampu dan tenda warna-warni, hiduplah seekor monyet pemula bernama Tino. Tino adalah monyet sederhana yang menyimpan mimpi besar untuk bisa tampil di atas panggung.",
    coverImage:
      "https://img.itch.zone/aW1nLzI5NzU4NDU4LnBuZw==/original/YBGzp%2F.png",
    link: "https://pemulabang.itch.io/monkeyscircus",
    tags: ["2D", "platformer", "circus"],
  },
  {
    title: "Blind Shot",
    description:
      "Game ini mengisahkan perjalanan Schwartz, seorang hitman legendaris misterius berpakaian taktis serba hitam pekat yang menyusup untuk menghancurkan jaringan kantor judi online ilegal berskala internasional.",
    coverImage:
      "https://img.itch.zone/aW1nLzI3MzkwODI4LnBuZw==/original/TtduYG.png",
    link: "https://nelsss.itch.io/blind-shot",
    tags: ["2.5D", "top down", "action", "shooter"],
  },
  {
    title: "Mystery Through The Lens",
    description:
      "Tachibana Takumi, seorang YouTuber yang biasa membuat konten paranormal, datang ke sebuah mansion Jepang modern yang terkenal angker. Ia berniat merekam pengalaman seperti biasa, namun kameranya tiba-tiba mati.",
    coverImage:
      "https://img.itch.zone/aW1nLzI3ODI0MTcyLnBuZw==/original/TKkLrI.png",
    link: "https://nelsss.itch.io/mysterytroughthelens",
    tags: ["2.5D", "top down", "horror", "puzzle"],
  },
  {
    title: "Spell Link",
    description:
      "Keserakahan manusia yang memburu prasasti purba demi harta telah mengusik ketenangan alam gaib. Bubo, seorang dukun sakti, harus bergerak cepat mengamankan artefak langka tersebut sebelum kekuatan di dalamnya disalahgunakan.",
    coverImage:
      "https://img.itch.zone/aW1nLzI5NzU4NDU4LnBuZw==/original/YBGzp%2F.png",
    link: "https://nelsss.itch.io/spell-link",
    tags: ["2D", "typing"],
    award: "🥉 Juara 3 IFEST 2026 UNPAD",
  },
];

// Fungsi Render Game dengan Filter & Badge
function loadPortfolio(filteredGames = itchGames) {
  const gamesContainer = document.getElementById("games");
  gamesContainer.innerHTML = "";

  if (filteredGames.length === 0) {
    gamesContainer.innerHTML = `<p style="text-align: center; color: #94a3b8; grid-column: 1/-1;">Tidak ada game dalam kategori ini.</p>`;
    return;
  }

  filteredGames.forEach((game) => {
    const gameCard = document.createElement("article");
    gameCard.classList.add("game-card");

    const awardBadge = game.award
      ? `<div class="award-badge">${game.award}</div>`
      : "";

    gameCard.innerHTML = `
      <div class="game-cover-wrapper">
        <img src="${game.coverImage}" alt="${game.title}" class="game-cover" onerror="this.src='https://via.placeholder.com/300x180?text=No+Cover'">
        ${awardBadge}
      </div>
      <div class="game-info">
        <h3>${game.title}</h3>
        <p>${game.description}</p>
        <div class="tags">
            <span class="genre-label">Genre: </span>
            ${game.tags
              .map((tag) => `<span class="tag">${tag}</span>`)
              .join("")}
        </div>
        <a href="${game.link}" target="_blank" class="btn-play">Mainkan di Itch.io</a>
      </div>
    `;

    gamesContainer.appendChild(gameCard);
  });
}

// Fungsi Filter Genre
function filterGames(category) {
  const buttons = document.querySelectorAll(".filter-btn");
  buttons.forEach((btn) => {
    if (
      btn.innerText.toLowerCase().includes(category.toLowerCase()) ||
      (category === "all" && btn.innerText === "Semua")
    ) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  if (category === "all") {
    loadPortfolio(itchGames);
  } else {
    const filtered = itchGames.filter((game) =>
      game.tags.some((tag) =>
        tag.toLowerCase().includes(category.toLowerCase()),
      ),
    );
    loadPortfolio(filtered);
  }
}

document.addEventListener("DOMContentLoaded", () => loadPortfolio());
