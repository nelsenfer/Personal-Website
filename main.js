document.addEventListener("DOMContentLoaded", () => {
  console.log("Website siap digunakan!");
});

// popup
const modal = document.getElementById("developmentModal");

// Fungsi untuk menampilkan popup
function showModal() {
  modal.style.display = "flex";
}

// Fungsi untuk menyembunyikan popup
function closeModal() {
  modal.style.display = "none";
}

// Tampilkan popup saat halaman selesai dimuat (lebih baik menggunakan event listener)
window.onload = showModal;
