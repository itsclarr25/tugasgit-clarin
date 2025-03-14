// Fungsi utama untuk menghitung luas, sesuai tipe bangun datar
function hitungLuas(jenis) {
    let hasil = 0;

    if (jenis === "persegiPanjang") {
        let panjang = parseFloat(document.getElementById("panjang").value);
        let lebar = parseFloat(document.getElementById("lebar").value);
        
        if (isNaN(panjang) || isNaN(lebar)) {
            document.getElementById("hasilPersegiPanjang").innerText = " Angkanya ngga ada nih";
            return;
        }

        hasil = panjang * lebar;
        document.getElementById("hasilPersegiPanjang").innerText = ` Luas nya itu: ${hasil}`;
    }

    else if (jenis === "bujurSangkar") {
        let sisi = parseFloat(document.getElementById("sisi").value);
        
        if (isNaN(sisi)) {
            document.getElementById("hasilBujurSangkar").innerText = " Yang bener aja";
            return;
        }

        hasil = sisi * sisi;
        document.getElementById("hasilBujurSangkar").innerText = ` Hasil Luasnya: ${hasil}`;
    }

    else if (jenis === "segitiga") {
        let alas = parseFloat(document.getElementById("alas").value);
        let tinggi = parseFloat(document.getElementById("tinggi").value);
        
        if (isNaN(alas) || isNaN(tinggi)) {
            document.getElementById("hasilSegitiga").innerText = " gada yang bisa diitung";
            return;
        }

        hasil = (alas * tinggi) / 2;
        document.getElementById("hasilSegitiga").innerText = ` Luas segitiganya itu: ${hasil}`;
    }
}
