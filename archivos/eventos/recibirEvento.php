<?php
header('Access-Control-Allow-Origin: http://localhost:5173');
header('Access-Control-Allow-Methods: GET, POST');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

$servername = 'localhost';
$username = 'root';
$password = '';
$dbname = 'eventos';

try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $tabla = $_GET['localidad'];

   
    $sql = "SELECT id, titulo, info, fecha, TO_BASE64(imagen) AS imagen_base64 FROM $tabla";

    $stmt = $conn->query($sql);
    $eventos = $stmt->fetchAll(PDO::FETCH_ASSOC);

   
    $conn = null;

    header('Content-Type: application/json');
    echo json_encode($eventos);
} catch (PDOException $e) {
    http_response_code(500);
    echo 'Error en la base de datos: ' . $e->getMessage();
}
?>
