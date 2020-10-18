var express = require('express');
var router = express.Router();
const comentarioControlller =   require('../controllers/comentario.controller');

router.post('/', comentarioControlller.create);

router.get('/:id', comentarioControlller.findById);

module.exports = router;