CREATE DATABASE LaMarsh;

USE LaMarsh;

CREATE TABLE Productos(
	id int NOT NULL auto_increment PRIMARY KEY,
    nombre varchar(50) NOT NULL,
    precio int NOT NULL,
    cantidad int NOT NULL,
    descripcion varchar(250) NOT NULL,
    fabricante varchar(20) NOT NULL
);

CREATE TABLE Clientes(
	id int NOT NULL auto_increment PRIMARY KEY,
    nombre varchar(30) NOT NULL,
    apellido varchar(30) NOT NULL,
    correo varchar(50) NOT NULL,  
    contraseña varchar(30) NOT NULL,
    telefono int NOT NULL,
    direccion varchar(50) NOT NULL
);

CREATE TABLE Ventas(
	id int NOT NULL auto_increment primary KEY,
    idCliente int NOT NULL,
	idProducto int NOT NULL,
    cantidad int NOT NULL,
    valorTotal int NOT NULL,
    fecha date NOT NULL,
    foreign key(idCliente) REFERENCES Clientes(id),
    foreign key(idProducto) references Productos(id)
);
