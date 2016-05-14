var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');
var debug = require('debug')('ics:app');
var config = require('./config.json');
var brickJs = require('brick.js');
var Liquid = require('brick-liquid');
var less = require('brick-less');
var db = require('./db.js');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var passport = require('./passport');

var app = express();

// static
app.use(favicon(path.join(__dirname, 'public/img/pku/red.png')));
app.use(express.static(path.join(__dirname, 'public')));

app.use(logger('dev'));

// http parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// session
app.use(cookieParser());
app.use(session({secret: 'iCs?', resave: false, saveUninitialized: false}));
app.use(passport.initialize());
app.use(passport.session());

// brick
var brk = brickJs();
brk.engine('.html', new Liquid());
app.use('/', brk.express);
app.locals.config = config;

module.exports = app;
