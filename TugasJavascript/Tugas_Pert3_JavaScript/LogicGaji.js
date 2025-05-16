let produkToko = [
    { id: 1, nama: "Laptop", harga: 7000000, stok: 5 },
    { id: 2, nama: "Mouse", harga: 200000, stok: 10 },
    { id: 3, nama: "Keyboard", harga: 350000, stok: 7 }
];

function tampilkanProduk() {
    const tbody = document.getElementById("produk-body");
    tbody.innerHTML = "";

    produkToko.forEach((produk) => {
        let row = `<tr>
            <td>${produk.id}</td>
            <td>${produk.nama}</td>
            <td>${produk.harga.toLocaleString('id-ID')}</td>
            <td>${produk.stok}</td>
            <td><button onclick="hapusProduk(${produk.id})">Hapus</button></td>
        </tr>`;
        tbody.innerHTML += row;
    });
}

function tambahProduk(nama, harga, stok) {
    let idBaru = produkToko.length ? produkToko[produkToko.length - 1].id + 1 : 1;
    produkToko.push({ id: idBaru, nama, harga: Number(harga), stok: Number(stok) });
    tampilkanProduk();
}

function hapusProduk(id) {
    produkToko = produkToko.filter(produk => produk.id !== id);
    tampilkanProduk();
}

document.getElementById("form-produk").addEventListener("submit", function (event) {
    event.preventDefault();
    let nama = document.getElementById("nama").value;
    let harga = document.getElementById("harga").value;
    let stok = document.getElementById("stok").value;

    if (nama && harga > 0 && stok > 0) {
        tambahProduk(nama, harga, stok);
        document.getElementById("form-produk").reset();
    } else {
        alert("Masukkan data yang valid!");
    }
});

tampilkanProduk();
