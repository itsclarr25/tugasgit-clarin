// Mengimpor data jika menggunakan module (opsional untuk browser modern)
// import { data } from './data.js';

function lihatData() {
    const dataContainer = document.getElementById("data-list");
    dataContainer.innerHTML = data.map(item => 
        `<li>${item.nama} - ${item.umur} tahun - ${item.alamat} - ${item.email}</li>`
    ).join("");
}

function tambahData(nama, umur, alamat, email) {
    data.push({ nama, umur, alamat, email });
    lihatData(); // Perbarui tampilan setelah menambah data
}

function hapusData(nama) {
    const index = data.findIndex(item => item.nama === nama);
    if (index !== -1) {
        data.splice(index, 1);
        lihatData(); // Perbarui tampilan setelah menghapus data
    } else {
        alert(`Data ${nama} tidak ditemukan.`);
    }
}

// Tambahkan dua data baru
tambahData("Kiki", 24, "Malang", "kiki@email.com");
tambahData("Lina", 32, "Padang", "lina@email.com");

// Pastikan data tampil saat halaman dimuat
document.addEventListener("DOMContentLoaded", lihatData);
