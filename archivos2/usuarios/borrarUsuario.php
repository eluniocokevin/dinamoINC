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

    $deporteid = $_GET['deporteid'];
    $ci = $_GET['ci'];
    $sql2 = "DELETE FROM realiza WHERE cedula= :ci and deporteid = :deporteid; ";
    $stmt2 = $conn->prepare($sql2);
    $stmt2->bindParam(':ci', $ci, PDO::PARAM_INT);
    
    $stmt2->bindParam(':deporteid', $deporteid, PDO::PARAM_INT);
 
 


    if ($stmt2->execute()) {    
        $sql = "DELETE FROM usuario WHERE ci = :ci;";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':ci', $ci, PDO::PARAM_INT);
        echo json_encode(['response' => 'Noticia eliminada con éxito']);
    } else {
        echo json_encode(['response' => 'Error al eliminar la noticia: ' . $stmt->errorInfo()]);
    }
} catch (PDOException $e) {
    echo json_encode(['response' => 'Error de conexión: ' . $e->getMessage()]);
}

$conn = null;
?>
