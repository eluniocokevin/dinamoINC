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


    $sql = "SELECT id, nombre,email, telefono, asunto, mensaje FROM contacto order by fecha desc";


    $stmt = $conn->query($sql);
    $contacto = $stmt->fetchAll(PDO::FETCH_ASSOC);

    $conn = null;


    header('Content-Type: application/json');
    echo json_encode($contacto);
} catch (PDOException $e) {

    http_response_code(500);
    echo 'Error en la base de datos: ' . $e->getMessage();
}
?>
