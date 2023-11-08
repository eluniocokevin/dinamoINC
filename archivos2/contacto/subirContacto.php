<?php
header('Access-Control-Allow-Origin: http://localhost:5173');
header('Access-Control-Allow-Methods: GET, POST');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');


if ($_SERVER['REQUEST_METHOD'] === 'POST') {

  

    $servername = 'localhost';
    $username = 'root';
    $password = '';
    $dbname = 'prueba';
    try {
        $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        
        $nombre = $_POST['nombre'];
        $email = $_POST['email'];
        $telefono = $_POST['telefono'];
        $asunto = $_POST['asunto'];
        $mensaje = $_POST['mensaje'];
        

        $sql = "INSERT INTO contacto (nombre, email, telefono, asunto, mensaje) VALUES (:nombre, :email, :telefono, :asunto, :mensaje)";
        $stmt = $conn->prepare($sql);


        $stmt->bindParam(':nombre', $nombre);
        $stmt->bindParam(':email', $email);
        $stmt->bindParam(':telefono', $telefono);
        $stmt->bindParam(':asunto', $asunto);
        $stmt->bindParam(':mensaje', $mensaje);
    
        $stmt->execute();


        $conn = null;

   
        http_response_code(200);
        echo 'Noticia creada con éxito';
    } catch (PDOException $e) {

        http_response_code(500);
        echo 'Error en la base de datos: ' . $e->getMessage();
    }
} else {

    http_response_code(405);
    echo 'Método no permitido';
}
?>