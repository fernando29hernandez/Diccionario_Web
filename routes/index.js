var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');
router.get('/', function(req, res, next) {
  res.render('notLogged/index');
});
router.get('/login', function(req, res, next) {
  res.render('notLogged/login');
});
router.get('/registro', function(req, res, next) {
  res.render('notLogged/signup', { title: 'Express' });
});

router.get('/index', function(req, res, next) {
  res.render('logged/index');
});
router.get('/indexadmin', function(req, res, next) {
  res.render('logged/index-admin');
});

router.get('/nuevaPalabra', function(req, res, next) {
  res.render('logged/crearpalabra', { title: 'Express' });
});

router.get('/dashboard', function(req, res, next) {
  res.render('logged/dashboard-admin', { title: 'Express' });
});

router.get('/mispalabras', function(req, res, next) {
  res.render('logged/dashboard', { title: 'Express' });
});

router.get('/diccionario', function(req, res, next) {
  res.render('logged/diccionario', { title: 'Express' });
});

router.get('/diccionariologout', function(req, res, next) {
  res.render('notLogged/diccionario', { title: 'Express' });
});
router.get('/vervideo/:id', function(req, res, next) {
  fetch('http://localhost:3000/api/v1/palabras/'+req.params.id, {method: 'GET',}) // data can be `string` or {object}!})
    .then(function (response) {
        return response.json();
    })
    .then(function (myJson) {
      console.log(myJson.result)
      let resultado = myJson.result;
      res.render('logged/vervideo', { palabra: resultado });
    })
});

router.get('/vervideologout/:id',async  function(req, res, next) {
  await fetch('http://localhost:3000/api/v1/palabras/'+req.params.id+"/", {method: 'GET',}) // data can be `string` or {object}!})
  .then(function (response) {
      return response.json();
  })
  .then(function (myJson) {
    res.render('notLogged/vervideo', { palabra: myJson.result });
  }).catch(()=>{})
});
router.get('/vervideorechazado/:id',async  function(req, res, next) {
  await fetch('http://localhost:3000/api/v1/palabras/'+req.params.id+"/", {method: 'GET',}) // data can be `string` or {object}!})
  .then(function (response) {
      return response.json();
  })
  .then(function (myJson) {
    res.render('logged/vervideorechazado', { palabra: myJson.result });
  }).catch(()=>{})
});

router.get('/vervideoespera/:id',async  function(req, res, next) {
  await fetch('http://localhost:3000/api/v1/palabras/'+req.params.id+"/", {method: 'GET',}) // data can be `string` or {object}!})
  .then(function (response) {
      return response.json();
  })
  .then(function (myJson) {
    res.render('logged/vervideoespera', { palabra: myJson.result });
  }).catch(()=>{})
});
module.exports = router;
