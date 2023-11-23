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
        
        $localidad = $_POST['localidad'];
        $titulo = $_POST['titulo'];
        $deporte = $_POST['deporte'];
        $info = $_POST['info'];
        $fecha = $_POST['fecha'];
        $archivo = file_get_contents($_FILES['archivo']['tmp_name']); 

        
            $sql = "INSERT INTO evento (localidad,titulo,deporte, info, fecha, imagen) VALUES (:localidad,:titulo, :deporte, :info, :fecha, :archivo) ";
            $stmt = $conn->prepare($sql);
     
    
          
    
 
        $stmt->bindParam(':localidad', $localidad);
        $stmt->bindParam(':titulo', $titulo);
        $stmt->bindParam(':deporte', $deporte);
        $stmt->bindParam(':info', $info);
        $stmt->bindParam(':fecha', $fecha);
        $stmt->bindParam(':archivo', $archivo, PDO::PARAM_LOB);

    
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
