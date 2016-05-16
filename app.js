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
var User = require('./models/user');
var passport = require('./passport');
var RedisStore = require("connect-redis")(session);
var api = require('./api');
var methodOverride = require('method-override');

var app = express();

// static
app.use(favicon(path.join(__dirname, 'public/img/pku/red.png')));
app.use(express.static(path.join(__dirname, 'public')));

app.use(logger('dev'));

// http parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(methodOverride(function(req, res) {
    var method = req.query._method || req.body._method;
    if (method) {
        delete req.body._method;
        delete req.query._method;
        return method;
    }
}));

// session
app.use(cookieParser());
var sessionMiddleware = session({
    secret: 'iCs?',
    resave: false,
    saveUninitialized: false,
    store: new RedisStore(config.redis)
});
app.use(sessionMiddleware);
app.use(passport.initialize());
app.use(passport.session());

// API
app.use('/api', api);

// brick
var brk = brickJs({
    router: 'server.js'
});
brk.engine('.html', new Liquid());
app.locals.config = config;
app.use('/', brk.express);

module.exports = app;
