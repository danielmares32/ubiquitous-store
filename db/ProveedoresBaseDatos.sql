CREATE TABLE `usuarios` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `email` varchar(255),
  `password` varchar(255),
  `nombre` varchar(255),
  `telefono` varchar(255),
  `calle` varchar(255),
  `numero` int,
  `cp` int
);

CREATE TABLE `proveedores` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `id_usuario` int,
  `rfc` varchar(255),
  `nombre_empresa` varchar(255),
  `calle` varchar(255),
  `numero` int,
  `cp` int
);

CREATE TABLE `catergorias` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `nombre` varchar(255),
  `descripcion` varchar(255)
);

CREATE TABLE `productos` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `id_proveedor` int,
  `nombre` varchar(255),
  `precio` double,
  `id_categoria` int,
  `descripcion` varchar(255),
  `imagen_ruta` varchar(255)
);

CREATE TABLE `ordenes` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `status` varchar(255),
  `fecha` datetime,
  `notas` varchar(255),
  `id_usuario` int,
  `id_proveedor` int,
  `id_productos_ordenes` int,
  `total` double
);

CREATE TABLE `productos_ordenes` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `id_producto` int
);

ALTER TABLE `proveedores` ADD FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id`);

ALTER TABLE `productos` ADD FOREIGN KEY (`id_proveedor`) REFERENCES `proveedores` (`id`);

ALTER TABLE `productos` ADD FOREIGN KEY (`id_categoria`) REFERENCES `catergorias` (`id`);

ALTER TABLE `ordenes` ADD FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id`);

ALTER TABLE `ordenes` ADD FOREIGN KEY (`id_proveedor`) REFERENCES `proveedores` (`id`);

ALTER TABLE `ordenes` ADD FOREIGN KEY (`id_productos_ordenes`) REFERENCES `productos_ordenes` (`id`);

ALTER TABLE `productos_ordenes` ADD FOREIGN KEY (`id_producto`) REFERENCES `productos` (`id`);
