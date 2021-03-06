var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');
var Athlete = require('./routes/Athlete');
var Record = require('./routes/Record');
var Event = require('./routes/Event');
var Meet = require('./routes/Meet');
var View = require('./routes/View');
var avgR = require('./routes/avgRace');
var more1 = require('./routes/more1');
var NeedM = require('./routes/NeedMeet');
var Unn = require('./routes/Unn');
var DisR = require('./routes/DisR');
var DisE = require('./routes/DisE');
var Fast = require('./routes/Fastest');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/Athlete',Athlete);
app.use('/Record', Record);
app.use('/Event', Event);
app.use('/Meet',Meet);
app.use('/View',View);
app.use('/avgRace',avgR);
app.use('/More1',more1);
app.use('/NeedMeet',NeedM);
app.use('/Unn',Unn);
app.use('/DisR',DisR);
app.use('/DisE',DisE);
app.use('/Fastest',Fast);
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
