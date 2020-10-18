var conexion = require('../config/db.conf');


var Comentario = function(comentario){
    this.contenido =  comentario.contenido
	this.fecha =    comentario.fecha
    this.usuario_id = comentario.usuario_id
    this.palabra_id = comentario.palabra_id
    //this.created_at     = new Date();
};



Comentario.create = function (newCommment, result) {
    conexion.query("INSERT INTO Comentario set ?", newCommment, function (err, res) {
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


Comentario.findById = function (id, result) {
    conexion.query("Select * from Comentario where palabra_id = ? ", id, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });
};

module.exports= Comentario;