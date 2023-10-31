<?php
header('Access-Control-Allow-Origin: http://localhost:5173');
header('Access-Control-Allow-Methods: GET, POST');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');


if ($_SERVER['REQUEST_METHOD'] === 'POST') {

  

    $servername = 'localhost';
    $username = 'root';
    $password = '';
    $dbname = 'eventos';
    try {
        $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        $tabla = $_POST['tabla'];
        $titulo = $_POST['titulo'];
        $descripcion = $_POST['descripcion'];
        $fecha = $_POST['fecha'];
        $option = $_POST['option'];
        $archivo = file_get_contents($_FILES['archivo']['tmp_name']); 

        if($option==='anual'){
            $sql = "INSERT INTO $tabla (titulo, info, fecha, imagen) VALUES (:titulo, :descripcion, :fecha, :archivo)";
            $stmt = $conn->prepare($sql);
        }else if($option ==='temporal'){
           $tabla2 = $tabla.'temporales';
           $sql = "INSERT INTO $tabla2 (titulo, info, fecha, imagen) VALUES (:titulo, :descripcion, :fecha, :archivo)";
            $stmt = $conn->prepare($sql);
        }else{
            echo'opcion no valida';
        }
    
          
    
 
        $stmt->bindParam(':titulo', $titulo);
        $stmt->bindParam(':descripcion', $descripcion);
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