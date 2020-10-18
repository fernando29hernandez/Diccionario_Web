var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var multer = require('multer')
var indexRouter = require('./routes/index');


var app = express();
app.use('/static', express.static('public'))
app.use(express.static(path.join(__dirname, 'public')))
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/videos/')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname)
  }
})
var upload = multer({ storage: storage })

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

// catch 404 and forward to error handler

var usersRouter = require('./routes/usuario');
app.use('/api/v1/users', usersRouter);

var palabrasRouter = require('./routes/palabra');
app.use('/api/v1/palabras', palabrasRouter);

var comentariosRouter = require('./routes/comentario');
app.use('/api/v1/comentarios', comentariosRouter);

app.post('/subir_archivos', upload.any(), function (req, res, next) {
  console.log(req.files[0].filename)
  res.json({result:req.files[0].filename});
})

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
app.use(function(req, res, next) {
  next(createError(404));
});



module.exports = app;
