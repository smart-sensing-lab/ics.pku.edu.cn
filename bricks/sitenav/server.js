const debug = require('debug')('ics:sitenav');

exports.get = function(req, done, fail){
    done({user: req.user});
};
