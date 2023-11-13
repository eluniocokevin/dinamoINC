<?php

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

    $idDeporte = $_GET['id'];

    $sql = "DELETE FROM deporte WHERE id = :idDeporte";
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':idDeporte', $idDeporte, PDO::PARAM_INT);

    if ($stmt->execute()) {
        echo json_encode(['response' => 'Noticia eliminada con éxito']);
    } else {
        echo json_encode(['response' => 'Error al eliminar la noticia: ' . $stmt->errorInfo()]);
    }
} catch (PDOException $e) {
    echo json_encode(['response' => 'Error de conexión: ' . $e->getMessage()]);
}

$conn = null;
?>
