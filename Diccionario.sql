

CREATE TABLE Usuario (
	usuario_id  INT NOT NULL AUTO_INCREMENT, 
	correo VARCHAR(255) NOT NULL,
	contrasena VARCHAR(255) NOT NULL,
	adminstrador BOOLEAN NOT NULL,
	PRIMARY KEY(usuario_id) 
);

CREATE TABLE Palabra(
	palabra_id  INT NOT NULL AUTO_INCREMENT, 
	letra VARCHAR(2) NOT NULL,
	nombre VARCHAR(255) NOT NULL,
	url_video VARCHAR(255) NOT NULL,
	estado INT NOT NULL,
	usuario_id INT NOT NULL,
	FOREIGN KEY (usuario_id) REFERENCES Usuario(usuario_id),
	PRIMARY KEY(palabra_id)
);

CREATE TABLE Comentario(
	comentario_id INT NOT NULL AUTO_INCREMENT,
	contenido VARCHAR(255) NOT NULL,
	fecha DATE NOT NULL,
	usuario_id INT NOT NULL,
	palabra_id INT NOT NULL,
	FOREIGN KEY (usuario_id) REFERENCES Usuario(usuario_id),
	FOREIGN KEY (palabra_id) REFERENCES Palabra(palabra_id),
	PRIMARY KEY(comentario_id)	
);

