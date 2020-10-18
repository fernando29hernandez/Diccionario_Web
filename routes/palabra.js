var express = require('express');
var router = express.Router();
const palabraControlller =   require('../controllers/palabra.controller');

router.post('/', palabraControlller.create);

router.get('/', palabraControlller.findAll);

router.get('/pending', palabraControlller.findAllPending);

router.get('/:id', palabraControlller.findById);

router.get('/user/:id', palabraControlller.findByUserId);

router.put('/', palabraControlller.update);

module.exports = router;