const debug = require('debug')('ics:sitenav');

exports.get = function(req, done, fail){
    debug('req.user:', req.user);
    done({user: req.user});
};
