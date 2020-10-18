const Comentario = require('../models/comentario.model');

exports.create = function(req, res) {
    const new_comment = new Comentario(req.body);
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Comentario.create(new_comment, function(err, comentario) {
            if (err)
                res.send(err);
            res.json({message:"Comentario added successfully!",result:comentario});
        });
    }
};

exports.findById = function(req, res) {
    Comentario.findById(req.params.id, function(err, comments) {
        if (err)
            res.send(err);
        let findComments = comments.length>0?1:0;
        let resultbody = comments.length>0?comments:[];
        res.json({find:findComments,result:resultbody});
    });
};