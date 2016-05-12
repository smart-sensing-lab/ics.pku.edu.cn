var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var debug = require('debug')('ec:app');
var config = require('./config.json');
var brickJs = require('brick.js');
var Liquid = require('brick-liquid');
var less = require('brick-less');

var app = express();

app.use(favicon(path.join(__dirname, 'public/img/pku/red.png')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(logger('dev'));

var brk = brickJs();
brk.engine('.html', new Liquid());
app.use('/', brk.express);
app.locals.config = config;

module.exports = app;
