<?php
header('Access-Control-Allow-Origin: http://localhost:5173');
header('Access-Control-Allow-Methods: GET');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

$servername = 'localhost';
$username = 'root';
$password = '';
$dbname = 'prueba';

try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    if ($_SERVER['REQUEST_METHOD'] === 'GET') {
          
        $sql = " SELECT 
        u.ci,
        u.nombre,
        u.apellido,
        u.nacimiento,  
        u.sexo,
        u.domicilio,
        u.celular,
        u.asistencia,
        u.asistencianombre,
        u.diabetes,
        u.hipertension,
        u.asma,
        u.alergias,
        u.fracturas,
        u.otros,
        u.lentes,
        u.tipolentes,
        u.nombretutor,
        u.roltutor,
        u.lugar,
        u.fecha,
        u.citutor,                       
        r.deporteid
        
    FROM 
        usuario u
    JOIN 
        realiza r ON u.ci = r.cedula;";

        $stmt = $conn->query($sql);

        $usuario = $stmt->fetchAll(PDO::FETCH_ASSOC);

        http_response_code(200);
        echo json_encode(['success' => true, 'usuario' => $usuario]);
    } else {
        http_response_code(405);
        echo json_encode(['success' => false, 'message' => 'Método no permitido']);
    }
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Error en la base de datos: ' . $e->getMessage()]);
} finally {
    if ($conn) {
        $conn = null;
    }
}
?>
