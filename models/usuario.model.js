var conexion = require('../config/db.conf');


var Usuario = function(usuario){
    this.correo = usuario.correo
	this.contrasena =usuario.contrasena
    this.adminstrador = usuario.adminstrador
  //this.created_at     = new Date();
};

Usuario.create = function (newUser, result) {
    conexion.query("INSERT INTO Usuario set ?", newUser, function (err, res) {
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

Usuario.findById = function (id, result) {
    conexion.query("Select * from Usuario where usuario_id = ? ", id, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });
};

Usuario.verifyUser = function (body, result) {
    conexion.query("Select * from Usuario where correo = ?  and  contrasena = ? ", [body.correo ,body.pass], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });
};

module.exports= Usuario;
