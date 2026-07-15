const modal = document.getElementById("developmentModal");

function closeModal() {
  modal.style.display = "none";
}

window.onload = () => {
  modal.style.display = "flex";
};

// portofolio games

// 1. Siapkan Data Game Kamu
// Cukup tambahkan game baru ke sini di masa depan
const itchGames = [
  {
    title: "Apple Cat",
    description:
      "Pada suatu hari, di kehidupan hutan yang tenang, hiduplah sebuah apel langka bernama Lulu. Lulu adalah apel yang unik, karena sebagian tubuhnya berbentuk seperti kucing. Suatu hari, ketika ia sedang tertidur lelap, tiba-tiba angin kencang menghantam pohonnya dan mengganggu tidur tenangnya, hingga membuat Lulu terjatuh ke tanah. Saat terbangun, ia mendapati dirinya dijebak oleh seekor ulat yang siap mengincarnya sebagai santapan. Akankah Lulu bisa melarikan diri dari pengejaran sang ulat?.",
    coverImage:
      "https://img.itch.zone/aW1nLzI0MDMzNzA0LnBuZw==/original/PdPacE.png", // Ganti dengan Link Gambar Cover dari Itch.io
    link: "https://pemulabang.itch.io/apple-cat", // Link ke halaman game
    tags: ["2D", "Platformer"],
  },

  {
    title: "KakiKan",
    description:
      "Play as a fish with legs, swimming through the reef in search of your friends. But beware of the hungry swordfishes waiting for the perfect moment to EAT you ! <br> Swim > Collect Pearls > Jump n Hide",
    coverImage:
      "https://img.itch.zone/aW1hZ2UvMzk4NTU4Ny8yMzc4NTI0Ni5wbmc=/original/u9oeN6.png", // Ganti dengan Link Gambar Cover
    link: "https://axllotl.itch.io/kakikan",
    tags: ["2D", "platformer", "hide and seek", "control is lie"],
  },
  {
    title: "Benang Merah",
    description:
      "Andre Pratama, seorang detektif muda, dipaksa menghadapi kenyataan pahit ketika mentornya ditemukan tewas di kantornya.<br>Kematian itu bukan kecelakaan. Tidak juga bunuh diri. Ada sesuatu yang ditutupi.<br>Dengan waktu yang terus bergerak dan ancaman yang makin dekat, Andre harus menemukan benang merah kebenaran sebelum ia sendiri menjadi korban berikutnya.",
    coverImage:
      "https://img.itch.zone/aW1nLzI0MzczMDE0LnBuZw==/original/hJm0iy.png", // Ganti dengan Link Gambar Cover
    link: "https://nelsss.itch.io/benang-merah",
    tags: ["Visual Novel", "RenPy", "crime"],
  },
  {
    title: "Monkey's Circus",
    description:
      "Di tengah gemerlap dunia sirkus yang penuh lampu dan tenda warna-warni, hiduplah seekor monyet pemula bernama Tino. Tino adalah monyet sederhana yang menyimpan mimpi besar untuk bisa tampil di atas panggung dan membuat penonton tersenyum. Tanpa sengaja, ia menemukan pengumuman perekrutan pemain sirkus dan memberanikan diri untuk mencoba, meski hatinya dipenuhi rasa ragu dan takut gagal. Ketika tiba saatnya ia harus tampil sendirian di atas tali dengan sepeda roda satu, akankah Tino mampu menjaga keseimbangan dan meraih kesuksesan pertamanya?",
    coverImage:
      "https://img.itch.zone/aW1nLzI1MjQ2NTI5LnBuZw==/original/%2BKvOju.png", // Ganti dengan Link Gambar Cover
    link: "https://pemulabang.itch.io/monkeyscircus",
    tags: ["2D", "platformer", "circus"],
  },
  {
    title: "Monkey's Circus",
    description:
      "Game ini mengisahkan perjalanan Schwartz, seorang hitman legendaris misterius berpakaian taktis serba hitam pekat yang menyusup untuk menghancurkan jaringan kantor judi online ilegal berskala internasional. Di dalam koridor gedung yang gelap, ia harus melumpuhkan gerombolan musuh yang tampil sangat mencolok dengan setelan jas formal berwarna merah menyala dan topeng khusus penutup identitas. Ketegangan aksi ini semakin seru berkat mekanik manipulasi waktu yang unik: waktu akan bergerak normal ketika pemain aktif berjalan sambil menembak, namun seketika melambat secara ekstrem (slow motion) saat pemain diam di tempat. Fitur ini memberikan ruang taktis bagi pemain untuk membaca situasi dan menghindari lintasan peluru musuh sebelum kembali bergerak maju mengeksekusi lawan.",
    coverImage:
      "https://img.itch.zone/aW1nLzI3MzkwODI4LnBuZw==/original/TtduYG.png", // Ganti dengan Link Gambar Cover
    link: "https://nelsss.itch.io/blind-shot",
    tags: ["2,5D", "top down", "action", "shooter", "slow motion"],
  },
  {
    title: "Blind Shot",
    description:
      "Game ini mengisahkan perjalanan Schwartz, seorang hitman legendaris misterius berpakaian taktis serba hitam pekat yang menyusup untuk menghancurkan jaringan kantor judi online ilegal berskala internasional. Di dalam koridor gedung yang gelap, ia harus melumpuhkan gerombolan musuh yang tampil sangat mencolok dengan setelan jas formal berwarna merah menyala dan topeng khusus penutup identitas. Ketegangan aksi ini semakin seru berkat mekanik manipulasi waktu yang unik: waktu akan bergerak normal ketika pemain aktif berjalan sambil menembak, namun seketika melambat secara ekstrem (slow motion) saat pemain diam di tempat. Fitur ini memberikan ruang taktis bagi pemain untuk membaca situasi dan menghindari lintasan peluru musuh sebelum kembali bergerak maju mengeksekusi lawan.",
    coverImage:
      "https://img.itch.zone/aW1nLzI3MzkwODI4LnBuZw==/original/TtduYG.png", // Ganti dengan Link Gambar Cover
    link: "https://nelsss.itch.io/blind-shot",
    tags: ["2,5D", "top down", "action", "shooter", "slow motion"],
  },
  {
    title: "Mystery Through The Lens",
    description:
      "Game ini mengisahkan perjalanan Schwartz, seorang hitman legendaris misterius berpakaian taktis serba hitam pekat yang menyusup untuk menghancurkan jaringan kantor judi online ilegal berskala internasional. Di dalam koridor gedung yang gelap, ia harus melumpuhkan gerombolan musuh yang tampil sangat mencolok dengan setelan jas formal berwarna merah menyala dan topeng khusus penutup identitas. Ketegangan aksi ini semakin seru berkat mekanik manipulasi waktu yang unik: waktu akan bergerak normal ketika pemain aktif berjalan sambil menembak, namun seketika melambat secara ekstrem (slow motion) saat pemain diam di tempat. Fitur ini memberikan ruang taktis bagi pemain untuk membaca situasi dan menghindari lintasan peluru musuh sebelum kembali bergerak maju mengeksekusi lawan.",
    coverImage:
      "https://img.itch.zone/aW1nLzI3MzkwODI4LnBuZw==/original/TtduYG.png", // Ganti dengan Link Gambar Cover
    link: "https://nelsss.itch.io/blind-shot",
    tags: ["2,5D", "top down", "action", "shooter", "slow motion"],
  },
  // Tambahkan game lain di sini...
];

// 2. Fungsi untuk Render Game ke HTML
function loadPortfolio() {
  const gamesContainer = document.getElementById("games");

  // Kosongkan container biar aman
  gamesContainer.innerHTML = "";

  // Looping data games
  itchGames.forEach((game) => {
    // Membuat elemen kartu game
    const gameCard = document.createElement("article");
    gameCard.classList.add("game-card"); // Tambahkan class untuk CSS

    // Mengisi konten HTML menggunakan Template Literals
    gameCard.innerHTML = `
      <img src="${game.coverImage}" alt="${game.title}" class="game-cover">
      <div class="game-info">
        <h3>${game.title}</h3>
        <p>${game.description}</p> <br>
        <div class="tags">
            <span class="genre-label">Gendre: </span>
            ${game.tags
              .map((tag) => `<span class="tag">${tag}</span>`)
              .join(", ")}
        </div>
        <a href="${
          game.link
        }" target="_blank" class="btn-play">Mainkan di Itch.io</a>
      </div>
    `;

    // Masukkan kartu ke dalam container utama
    gamesContainer.appendChild(gameCard);
  });
}

// 3. Jalankan fungsi saat halaman selesai dimuat
document.addEventListener("DOMContentLoaded", loadPortfolio);
