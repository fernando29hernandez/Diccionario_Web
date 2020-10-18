var conexion = require('../config/db.conf');


var Palabra = function(palabra){
    this.letra =  palabra.letra
	this.nombre =     palabra.nombre
    this.url_video = palabra.url_video
    this.estado = palabra.estado
    this.usuario_id = palabra.usuario_id
  //this.created_at     = new Date();
};



Palabra.create = function (newWord, result) {
    conexion.query("INSERT INTO Palabra set ?", newWord, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            //console.log(res)
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};

Palabra.findByUserId = function (id, result) {
    conexion.query("Select * from Palabra where usuario_id = ? ", id, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });
};

Palabra.findById = function (id, result) {
    conexion.query("Select * from Palabra where palabra_id = ? ", id, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });
};

Palabra.findAll = function (result) {
    conexion.query("Select * from Palabra", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('Palabras : ', res);
            result(null, res);
        }
    });
};
Palabra.findAllPending = function (result) {
    conexion.query("Select * from Palabra where estado = 0", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('Palabras : ', res);
            result(null, res);
        }
    });
};
Palabra.update = function(id, estado, result){
    conexion.query("UPDATE Palabra SET estado=? WHERE palabra_id = ?", [estado, id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }else{
            result(null, res);
        }
    });
};

module.exports= Palabra;