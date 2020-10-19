const Usuario = require('../models/usuario.model');

exports.create = function(req, res) {
    const new_user = new Usuario(req.body);
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Usuario.create(new_user, function(err, user) {
            if (err)
                res.send(err);
            res.json({find:1,message:"Usuario added successfully!",result:user});
        });
    }
};

exports.verifyUser = function(req, res) {
    Usuario.verifyUser(req.body, function(err, user) {
        if (err)
            res.send(err);
        let finduser = ''
        let resultbody = '' 
        if(user==null){
            finduser= 0;
            resultbody = {};
        }else{
            finduser=  user.length>0?1:0;
            resultbody = user.length>0?user[0]:{};
        }
        res.json({find:finduser,result:resultbody});
    });
};


exports.findById = function(req, res) {
    Usuario.findById(req.params.id, function(err, user) {
        if (err)
            res.send(err);
        let finduser = ''
        let resultbody = '' 
        if(user==null){
            finduser= 0;
            resultbody = {};
        }else{
            finduser=  user.length>0?1:0;
            resultbody = user.length>0?user[0]:{};
        }
        res.json({find:finduser,result:resultbody});
    });
};