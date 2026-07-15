// Hapus semua array const itchGames manual di sini

async function loadPortfolio() {
  const gamesContainer = document.getElementById("games");

  // Tampilkan teks loading sementara data diambil
  gamesContainer.innerHTML =
    "<p style='color:white; text-align:center;'>Memuat game dari Itch.io...</p>";

  try {
    // Gunakan RSS2JSON untuk mengubah XML Itch.io menjadi JSON
    const rssUrl = "https://nelsss.itch.io/feed.xml";
    const response = await fetch(
      `https://api.rss2json.com/v1/api.json?rss_url=${rssUrl}`,
    );
    const data = await response.json();

    gamesContainer.innerHTML = ""; // Bersihkan indikator loading

    // Looping data otomatis dari Itch.io
    data.items.forEach((game) => {
      const gameCard = document.createElement("article");
      gameCard.classList.add("game-card");

      // Mengambil gambar dari thumbnail RSS (jika kosong, gunakan default)
      const coverImg = game.thumbnail || "img/default-cover.png";

      gameCard.innerHTML = `
        <img src="${coverImg}" alt="${game.title}" class="game-cover">
        <div class="game-info">
          <h3>${game.title}</h3>
          <p>Game terbaru dari Nelsss! Klik tombol di bawah untuk melihat detail lengkapnya di Itch.io.</p> <br>
          <a href="${game.link}" target="_blank" class="btn-play">Mainkan di Itch.io</a>
        </div>
      `;

      gamesContainer.appendChild(gameCard);
    });
  } catch (error) {
    console.error("Gagal mengambil data:", error);
    gamesContainer.innerHTML =
      "<p style='color:white;'>Gagal memuat game. Silakan refresh halaman.</p>";
  }
}

// Tetap jalankan fungsi saat halaman selesai dimuat
document.addEventListener("DOMContentLoaded", loadPortfolio);
