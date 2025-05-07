<!DOCTYPE html>
<html>
<head>
    <title>Form Ujian</title>
</head>
<body>

<h2>Masukkan Data Ujian</h2>

<form method="post">
    Nama: <input type="text" name="nama" required><br><br>
    Email: <input type="email" name="email" required><br><br>
    Nilai: <input type="number" name="nilai" required><br><br>
    <input type="submit" value="Cek Hasil">
</form>

<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nama = $_POST["nama"];
    $email = $_POST["email"];
    $nilai = $_POST["nilai"];

    echo "<h3>Hasil Ujian</h3>";
    echo "Nama: $nama<br>";
    echo "Email: $email<br>";
    echo "Nilai: $nilai<br>";

    if ($nilai > 70) {
        echo "Status: Lulus";
    } else {
        echo "Status: Remedial";
    }
}
?>

</body>
</html>
