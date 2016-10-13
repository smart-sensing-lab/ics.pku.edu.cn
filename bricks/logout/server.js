const debug = require('debug')('ics:logout');

exports.url = '/logout';

exports.get = function(req, done, fail, res) {
    req.logout();
    res.redirect('/');
};
