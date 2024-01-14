<?php
$servername = "localhost";
$database = "dbuser";
$username = "root";
$password = "";

$conn = mysqli_connect($servername, $username, $password, $database);
 if (!$conn) {
    die("Koneksi Gagal : " . mysqli_connect_error());
 } else {
    echo "Koneksi berhasil";
 }
?>