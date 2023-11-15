<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

$method = $_SERVER['REQUEST_METHOD'];

$servidor = "localhost";
$usuario = "root";
$password = "";
$bd = "prueba";

$conexion = mysqli_connect($servidor, $usuario, $password, $bd);

if (!$conexion) {
    die('{"error": "Ha sucedido un error inexperado en la conexión de la base de datos"}');
}

if ($method === "POST") {
    $data = json_decode(file_get_contents("php://input"), true);

    if (!$data) {
        echo json_encode(array("error" => "Error en los datos JSON recibidos"));
        exit;
    }

    $cedula = $data["cedula"];
    $contrasena = $data["contrasena"];
    $ActividadId = $data["ActividadId"];

    $sql_check_cedula = "SELECT cedula, deporteid FROM realiza WHERE cedula = ? AND deporteid = ?";
    $stmt_check_cedula = mysqli_prepare($conexion, $sql_check_cedula);
    mysqli_stmt_bind_param($stmt_check_cedula, "ss", $cedula, $ActividadId);
    mysqli_stmt_execute($stmt_check_cedula);
    $result_check_cedula = mysqli_stmt_get_result($stmt_check_cedula);
    
    if ($result_check_cedula && mysqli_num_rows($result_check_cedula) > 0) {
        echo json_encode(array("error" => "Usted ya está registrado en este deporte"));
        
    } else {

        $sql = "SELECT * FROM usuario WHERE ci = ?";
        $stmt = mysqli_prepare($conexion, $sql);
        mysqli_stmt_bind_param($stmt, "s", $cedula);
        mysqli_stmt_execute($stmt);
        $result = mysqli_stmt_get_result($stmt);
    
        if ($result && mysqli_num_rows($result) > 0) {
            $row = mysqli_fetch_assoc($result);
            if ($contrasena == $row["contrasena"]) {
                $sql1 = "INSERT INTO realiza(cedula, deporteid) VALUES (?, ?)";
                $stmt1 = mysqli_prepare($conexion, $sql1);
                try {
                    mysqli_stmt_bind_param($stmt1, "ss", $cedula, $ActividadId);
                    mysqli_stmt_execute($stmt1);
                    echo json_encode(array("success" => "Registro exitoso"));
                } catch (Exception $e) {
                    echo json_encode(array("error" => $e->getMessage()));
                }
            } else {
                echo json_encode(array("error" => "Credenciales incorrectas"));
            }
        } else {
            echo json_encode(array("error" => "Usuario no encontrado"));
        }
    }
} else {
    echo json_encode(array("error" => "Método de solicitud inválido"));
}

mysqli_close($conexion);
?>
