const Palabra = require('../models/palabra.model');

exports.create = function(req, res) {
    const new_word = new Palabra(req.body);
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Palabra.create(new_word, function(err, palabra) {
            if (err)
                res.send(err);
            res.json({message:"Palabra added successfully!",result:palabra});
        });
    }
};
exports.findByUserId = function(req, res) {
    Palabra.findByUserId(req.params.id, function(err, word) {
        if (err)
            res.send(err);
        let findWord = word.length>0?1:0;
        let resultbody = word.length>0?word:[];
        res.json({find:findWord,result:resultbody});
    });
};
exports.findById = function(req, res) {
    Palabra.findById(req.params.id, function(err, word) {
        if (err)
            res.send(err);
        let findWord = word.length>0?1:0;
        let resultbody = word.length>0?word[0]:{};
        res.json({find:findWord,result:resultbody});
    });
};
exports.findAll = function(req, res) {
    Palabra.findAll(function(err, palabras) {
        console.log('controller')
        if (err)
            res.send(err);
        console.log('res', palabras);
        let findWord = palabras.length>0?1:0;
        let resultbody = palabras.length>0?palabras:[];
        res.send({find:findWord,result:resultbody});
    });
};
exports.findAllPending = function(req, res) {
    Palabra.findAllPending(function(err, palabras) {
        console.log('controller')
        if (err)
            res.send(err);
        console.log('res', palabras);
        let findWord = palabras.length>0?1:0;
        let resultbody = palabras.length>0?palabras:[];
        res.send({find:findWord,result:resultbody});
    });
};
exports.update = function(req, res) {
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({message: 'Please provide all required field' });
    }else{
        Palabra.update(req.body.id,req.body.estado, function(err, palabra) {
        if (err)
            res.send(err);
        res.json({message: 'Palabra successfully updated' ,result:palabra});
        });
    } 
};
