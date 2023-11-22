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

    $sql = "SELECT * FROM administrador WHERE cedula = '$cedula'";
    $result = mysqli_query($conexion, $sql);

    if ($result && mysqli_num_rows($result) > 0) {
        $row = mysqli_fetch_assoc($result);
        if ($contrasena = $row["contrasena"]  && $row["rol"] === "administrador"){
            session_start();
            $_SESSION["usuario"] = $cedula;
            $usuarioRol = $row['rol'];
            echo json_encode(array("success"=>true, "role" => $usuarioRol));
        }
        else if ($row["rol"] === "denegado"  || $row["contraseña"] === 1){
        echo json_encode(array("error" => "Inyección SQL Detectada Guardando IP"));}  
        
        else {
            echo json_encode(array("error" => "Credenciales incorrectas"));
        }
    } else {
        echo json_encode(array("error" => "Usuario no encontrado"));
    }
} else {
    echo json_encode(array("error" => "Método de solicitud inválido"));
}

mysqli_close($conexion);
?>
