var cookieParser = require('cookie-parser');
var session = require('express-session');
var User = require('./models/user');
var passport = require('passport');

passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

module.exports = passport;

