const passport = require('passport');
const debug = require('debug')('ics:login');
const User = require('../../models/user');

exports.url = '/register';

exports.post = function(req, done, fail, res) {
    passport.authenticate('local', function(err, user, info) {
        if (err || !user) {
            return done({
                message: '用户名或密码不正确'
            });
        }
        req.login(user, function(err) {
            if (err) return fail(err);
            res.redirect(req.param('next') || '/admin');
        });
    })(req);
};
