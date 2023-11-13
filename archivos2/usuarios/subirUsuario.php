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

        // Gather form data
        $nombre = $_POST['nombre'];
        $apellido = $_POST['apellido'];
        $ci = $_POST['ci'];
        $nacimiento = $_POST['nacimiento'];
        $sexo = $_POST['sexo'];
        $cedulafoto = file_get_contents($_FILES['cedulafoto']['tmp_name']);
        $carnetfoto = file_get_contents($_FILES['carnetfoto']['tmp_name']);
        $domicilio = $_POST['domicilio'];
        $celular = $_POST['celular'];
        $asistencia = $_POST['asistencia'];
        $asistencianombre = $_POST['asistencianombre'];
        $diabetes = isset($_POST['diabetes']) ? 1 : 0;
        $hipertension = isset($_POST['hipertension']) ? 1 : 0;
        $asma = isset($_POST['asma']) ? 1 : 0;
        $alergias = isset($_POST['alergias']) ? 1 : 0;
        $fracturas = isset($_POST['fracturas']) ? 1 : 0;
        $otros = $_POST['otros'];
        $lentes = isset($_POST['lentes']) ? 1 : 0;
        $tipolentes = $_POST['tipolentes'];
        $nombretutor = $_POST['nombretutor'];
        $roltutor = $_POST['roltutor'];
        $lugar = $_POST['lugar'];
        $citutor = $_POST['citutor'];

        $sql = "INSERT INTO usuario (nombre, apellido, ci, nacimiento, sexo, cedulafoto, carnetfoto, domicilio, celular, asistencia, asistencianombre, diabetes, hipertension, asma, alergias, fracturas, otros, lentes, tipolentes, nombretutor, roltutor, lugar, citutor) VALUES (:nombre, :apellido, :ci, :nacimiento, :sexo, :cedulafoto, :carnetfoto, :domicilio, :celular, :asistencia, :asistencianombre, :diabetes, :hipertension, :asma, :alergias, :fracturas, :otros, :lentes, :tipolentes, :nombretutor, :roltutor, :lugar, :citutor)";
        $stmt = $conn->prepare($sql);

        $stmt->bindParam(':nombre', $nombre);
        $stmt->bindParam(':apellido', $apellido);
        $stmt->bindParam(':ci', $ci);
        $stmt->bindParam(':nacimiento', $nacimiento);
        $stmt->bindParam(':sexo', $sexo);
        $stmt->bindParam(':cedulafoto', $cedulafoto, PDO::PARAM_LOB);
        $stmt->bindParam(':carnetfoto', $carnetfoto, PDO::PARAM_LOB);
        $stmt->bindParam(':domicilio', $domicilio);
        $stmt->bindParam(':celular', $celular);
        $stmt->bindParam(':asistencia', $asistencia);
        $stmt->bindParam(':asistencianombre', $asistencianombre);
        $stmt->bindParam(':diabetes', $diabetes);
        $stmt->bindParam(':hipertension', $hipertension);
        $stmt->bindParam(':asma', $asma);
        $stmt->bindParam(':alergias', $alergias);
        $stmt->bindParam(':fracturas', $fracturas);
        $stmt->bindParam(':otros', $otros);
        $stmt->bindParam(':lentes', $lentes);
        $stmt->bindParam(':tipolentes', $tipolentes);
        $stmt->bindParam(':nombretutor', $nombretutor);
        $stmt->bindParam(':roltutor', $roltutor);
        $stmt->bindParam(':lugar', $lugar);
        $stmt->bindParam(':citutor', $citutor);

        $stmt->execute();

        $conn = null;

        http_response_code(200);
        echo json_encode(['success' => true, 'message' => 'Usuario creado con éxito']);
    } catch (PDOException $e) {
        http_response_code(500);
        echo json_encode(['success' => false, 'message' => 'Error en la base de datos: ' . $e->getMessage()]);
    }
} else {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Método no permitido']);
}
?>
