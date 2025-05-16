document.addEventListener("DOMContentLoaded", function () {
    const pegawai = {
        nama: "Dodi Prayodi",
        umur: 25,
        jabatan: "Manajer",
        status: "Menikah"
    };

    let gajiPokok = 15000000;
    let tunjanganJabatan = gajiPokok * 0.15;
    let bpjs = gajiPokok * 0.10;
    let tunjanganKeluarga = pegawai.status === "Menikah" ? gajiPokok * 0.20 : 0;
    let totalGaji = gajiPokok + tunjanganJabatan + bpjs + tunjanganKeluarga;

    const pegawaiData = `
        <tr><td>Nama</td><td>${pegawai.nama}</td></tr>
        <tr><td>Umur</td><td>${pegawai.umur}</td></tr>
        <tr><td>Jabatan</td><td>${pegawai.jabatan}</td></tr>
        <tr><td>Status</td><td>${pegawai.status}</td></tr>
        <tr><td>Gaji Pokok</td><td>${gajiPokok.toLocaleString('id-ID')}</td></tr>
        <tr><td>Tunjangan Jabatan</td><td>${tunjanganJabatan.toLocaleString('id-ID')}</td></tr>
        <tr><td>BPJS</td><td>${bpjs.toLocaleString('id-ID')}</td></tr>
        <tr><td>Tunjangan Keluarga</td><td>${tunjanganKeluarga.toLocaleString('id-ID')}</td></tr>
    `;

    document.getElementById("pegawai-body").innerHTML = pegawaiData;
    document.getElementById("total-gaji").textContent = totalGaji.toLocaleString('id-ID');
});
