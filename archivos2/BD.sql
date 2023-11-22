-- Estructura de tabla para la tabla `contacto`
CREATE TABLE `contacto` (
  `id` int(8) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(80) DEFAULT NULL,
  `email` varchar(90) DEFAULT NULL,
  `telefono` int(9) DEFAULT NULL,
  `asunto` varchar(60) DEFAULT NULL,
  `mensaje` longtext DEFAULT NULL,
  `fecha` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ;

-- Estructura de tabla para la tabla `deporte`
CREATE TABLE `deporte` (
  `id` int(255) NOT NULL AUTO_INCREMENT,
  `deporte` varchar(255) DEFAULT NULL,
  `descripcion` longtext DEFAULT NULL,
  `fecha` date DEFAULT NULL,
  `imagen` longblob DEFAULT NULL,
  `localidad` varchar(255) DEFAULT NULL,
  `option1` varchar(20) DEFAULT NULL,
  `ubicacion` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ;

-- Estructura de tabla para la tabla `evento`
CREATE TABLE `evento` (
  `id` int(255) NOT NULL AUTO_INCREMENT,
  `localidad` varchar(255) DEFAULT NULL,
  `deporte` varchar(255) DEFAULT NULL,
  `titulo` varchar(255) DEFAULT NULL,
  `info` longtext DEFAULT NULL,
  `fecha` date DEFAULT NULL,
  `imagen` longblob DEFAULT NULL,
  PRIMARY KEY (`id`)
) ;

-- Estructura de tabla para la tabla `noticia`
CREATE TABLE `noticia` (
  `id` int(255) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(255) NOT NULL,
  `deporte` varchar(255) NOT NULL,
  `descripcion` longtext NOT NULL,
  `fecha` date NOT NULL,
  `imagen` longblob NOT NULL,
  PRIMARY KEY (`id`)
) ;

-- Estructura de tabla para la tabla `realiza`
CREATE TABLE `realiza` (
  `cedula` int(8) DEFAULT NULL,
  `deporteid` int(255) DEFAULT NULL,
  FOREIGN KEY (`cedula`) REFERENCES `usuario` (`ci`),
  FOREIGN KEY (`deporteid`) REFERENCES `deporte` (`id`)
) ;

-- Estructura de tabla para la tabla `usuario`
CREATE TABLE `usuario` (
  `ci` int(8) NOT NULL,
  `nombre` varchar(100) DEFAULT NULL,
  `apellido` varchar(100) DEFAULT NULL,
  `nacimiento` date DEFAULT NULL,
  `sexo` varchar(10) DEFAULT NULL,
  `cedulafoto` longblob DEFAULT NULL,
  `carnetfoto` longblob DEFAULT NULL,
  `domicilio` varchar(40) DEFAULT NULL,
  `celular` int(9) DEFAULT NULL,
  `asistencia` varchar(4) DEFAULT NULL,
  `asistencianombre` varchar(255) DEFAULT NULL,
  `diabetes` varchar(4) DEFAULT NULL,
  `hipertension` varchar(4) DEFAULT NULL,
  `asma` varchar(4) DEFAULT NULL,
  `alergias` varchar(4) DEFAULT NULL,
  `fracturas` varchar(4) DEFAULT NULL,
  `otros` varchar(255) DEFAULT NULL,
  `lentes` varchar(4) DEFAULT NULL,
  `tipolentes` varchar(255) DEFAULT NULL,
  `nombretutor` varchar(100) DEFAULT NULL,
  `roltutor` varchar(100) DEFAULT NULL,
  `lugar` varchar(100) DEFAULT NULL,
  `fecha` timestamp NOT NULL DEFAULT current_timestamp(),
  `citutor` int(8) DEFAULT NULL,
  `contrasena` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`ci`)
) ;

-- Estructura de tabla para la tabla `administrador`
CREATE TABLE `administrador` (
  `cedula` int(8) NOT NULL,
  `contrasena` varchar(100) DEFAULT NULL,
  `rol` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`cedula`)
) ;