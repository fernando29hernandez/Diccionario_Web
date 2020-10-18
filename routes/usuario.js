var express = require('express');
var router = express.Router();


const usuarioControlller =   require('../controllers/usuario.controller');
router.post('/', usuarioControlller.create);

router.get('/:id', usuarioControlller.findById);

router.post('/verify', usuarioControlller.verifyUser);



module.exports = router;
