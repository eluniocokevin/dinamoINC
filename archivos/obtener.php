<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

$servidor = "localhost";
$usuario = "root";
$password = "";
$bd = "funcionarios";

$conexion = mysqli_connect($servidor, $usuario, $password, $bd);

if (!$conexion) {
    die('{"error": "Ha sucedido un error inexperado en la conexión de la base de datos"}');
}

$sql = "SELECT cedula, contrasena, rol FROM tabla";
$result = $conexion->query($sql);
if ($result && mysqli_num_rows($result) > 0) {
    $row = mysqli_fetch_assoc($result);
        $usuarioRol = $row['rol'];
        $usuarioCedula =$row['cedula'];
        $usuarioContrasena =$row['contrasena'];
        echo json_encode(array("success"=>true, "cedula"=> $usuarioCedula,
        "contrasena"=> $usuarioContrasena, "role" => $usuarioRol));
    } else {
        echo json_encode(array("error" => "Credenciales incorrectas"));
    }


?>