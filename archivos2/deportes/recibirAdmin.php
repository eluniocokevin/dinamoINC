<?php
header('Access-Control-Allow-Origin: http://localhost:5173');
header('Access-Control-Allow-Methods: GET, POST');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

$servername = 'localhost';
$username = 'root';
$password = '';
$dbname = 'prueba';

try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);


   
    $sql = "SELECT id,deporte, descripcion,  fecha, ubicacion, localidad, TO_BASE64(imagen) AS imagen_base64 FROM deporte";

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