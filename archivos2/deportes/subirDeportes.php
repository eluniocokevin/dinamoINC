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
        $deporte = $_POST['deporte'];
        $descripcion = $_POST['descripcion'];
        $fecha = $_POST['fecha'];
        $ubicacion = $_POST['ubicacion'];
        $option = $_POST['option1'];
        $archivo = file_get_contents($_FILES['archivo']['tmp_name']); 

        
         if($option==='anual'){
            $sql = "INSERT INTO deporte (deporte,descripcion, fecha,ubicacion ,imagen, localidad, option1) VALUES (:deporte, :descripcion, :fecha,:ubicacion, :archivo    , :localidad, :option1) ";
            $stmt = $conn->prepare($sql);
        }else if($option ==='temporal'){
           $sql = "INSERT INTO deporte (deporte,descripcion, fecha, ubicacion ,imagen, localidad, option1) VALUES  (:deporte, :descripcion, :fecha,:ubicacion, :archivo, :localidad, :option1) ";
            $stmt = $conn->prepare($sql);
        }else{
            echo'opcion no valida';
        }
    
          
    
 
        $stmt->bindParam(':localidad', $localidad);
        $stmt->bindParam(':deporte', $deporte);
        $stmt->bindParam(':descripcion', $descripcion);
        $stmt->bindParam(':fecha', $fecha);
        $stmt->bindParam(':ubicacion', $ubicacion);
        $stmt->bindParam(':archivo', $archivo, PDO::PARAM_LOB);
         $stmt->bindParam(':option1', $option);

    
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