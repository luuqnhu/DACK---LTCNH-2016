var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');
var getAllGerne = require('./routes/GetAllGerne');
var addNewGerne = require('./routes/AddNewGerne');
var deleteGerne = require('./routes/DeleteGerne');
var updateGerne = require('./routes/UpdateGerne');
var getBookByGerne = require('./routes/GetBookByGerne');
var addNewBook = require('./routes/AddNewBook');
var deleteBook = require('./routes/DeleteBook');
var updateBook = require('./routes/UpdateBook');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/gernes/all',getAllGerne);
app.use('/gernes/new', addNewGerne);
app.use('/gernes/delete', deleteGerne);
app.use('/gernes/update', updateGerne);
app.use('/books/gerne', getBookByGerne);
app.use('/books/new', addNewBook);
app.use('/books/delete', deleteBook);
app.use('/books/update', updateBook);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
