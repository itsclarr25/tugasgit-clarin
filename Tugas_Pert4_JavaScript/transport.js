// Class buat kendaraan
class Kendaraan {
    constructor(jenis, merk, platNomor) {
        this.jenis = jenis; 
        this.merk = merk; 
        this.platNomor = platNomor;
    }

    infoKendaraan() {
        return `${this.jenis} - ${this.merk} (${this.platNomor})`;
    }
}

// Class buat yang nyewa
class Pelanggan {
    constructor(nama, nomorTelepon, kendaraanDisewa) {
        this.nama = nama;
        this.nomorTelepon = nomorTelepon;
        this.kendaraanDisewa = kendaraanDisewa;
    }

    infoPelanggan() {
        return `${this.nama} - ${this.nomorTelepon} - ${this.kendaraanDisewa.infoKendaraan()}`;
    }
}

// Management sys
class ManajemenTransportasi {
    constructor() {
        this.pelangganList = [];
    }


    sewaKendaraan(nama, nomorTelepon, kendaraan) {
        const pelangganBaru = new Pelanggan(nama, nomorTelepon, kendaraan);
        this.pelangganList.push(pelangganBaru);
    }

    tampilkanPelanggan() {
        console.log("\nDaftar Pelanggan yang Sedang Menyewa Kendaraan:");
        if (this.pelangganList.length === 0) {
            console.log("Belum ada pelanggan yang menyewa kendaraan.");
        } else {
            this.pelangganList.forEach((pelanggan, index) => {
                console.log(`${index + 1}. ${pelanggan.infoPelanggan()}`);
            });
        }
    }
}

const sistemTransportasi = new ManajemenTransportasi();

const mobil1 = new Kendaraan("Mobil", "Toyota Avanza", "B 1234 ABC");
const motor1 = new Kendaraan("Motor", "Honda Vario", "D 5678 XYZ");

// input buat nyewanya
sistemTransportasi.sewaKendaraan("Andi", "08123456789", mobil1);
sistemTransportasi.sewaKendaraan("Budi", "08987654321", motor1);

sistemTransportasi.tampilkanPelanggan();
